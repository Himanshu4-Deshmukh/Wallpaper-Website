const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors'); // Optional: Enable CORS for frontend access

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes

const NEWS_URL_URI = 'https://myanimelist.net/news?p=';

// Utility function to sort by property
const byProperty = (prop) => {
  return (a, b) => {
    return typeof a[prop] === 'number'
      ? (a[prop] - b[prop])
      : (a[prop] < b[prop])
        ? -1
        : (a[prop] > b[prop])
          ? 1
          : 0;
  };
};

// Main function to fetch anime news
const fetchAnimeNews = (nbNews = 160) => {
  return new Promise((resolve, reject) => {
    const maxPage = Math.ceil(nbNews / 20) + 1;
    const promises = [];

    for (let i = 1; i < maxPage; ++i) {
      promises.push(axios.get(`${NEWS_URL_URI}${i}`));
    }

    axios.all(promises)
      .then(axios.spread(function () {
        const result = [];

        for (let i = 0; i < maxPage - 1; ++i) {
          const { data } = arguments[`${i}`];
          const $ = cheerio.load(data);

          const pageElements = $('.news-unit-right');

          // Pictures for each element
        //   const images = [];
        //   $('.image').each(function () {
        //     images.push($(this).attr('src'));
        //   });

// Pictures for each element
const images = [];
$('.image').each(function () {
  const imageUrl = $(this).attr('src');
  if (imageUrl) { // Check if imageUrl is defined
    images.push(imageUrl.replace('r/100x156/', '')); // Remove "r/100x156/" if present
  } else {
    images.push(null); // Handle cases where src might be missing
  }
});



          // Get links for info
          const links = [];
          $('.image-link').each(function () {
            links.push($(this).attr('href'));
          });

          // Gathering news' Titles
          const titles = pageElements.find('p.title').text().split('\n      ').filter(Boolean);
          const texts = pageElements.find('div.text').text().split('\n      ').filter(Boolean);

          for (let i = 0, l = titles.length; i < l; ++i) {
            const tmp = links[i].split('/');
            result.push({
              title: titles[i].trim(),
              link: links[i],
              image: images[i],
              text: texts[i].trim(),
              newsNumber: tmp[tmp.length - 1]
            });
          }
        }

        result.sort(byProperty('newsNumber'));
        result.reverse();
        resolve(result.slice(0, nbNews));
      }))
      .catch((err) => reject(err));
  });
};

// Define the API endpoint to fetch anime news
app.get('/api/anime-news', async (req, res) => {
  const { nbNews = 160 } = req.query;
  try {
    const newsData = await fetchAnimeNews(parseInt(nbNews, 10));
    res.json(newsData);
  } catch (error) {
    console.error('Error fetching anime news:', error);
    res.status(500).json({ message: 'Error fetching anime news', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
