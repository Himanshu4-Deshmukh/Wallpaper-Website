// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');
// const cors = require('cors'); // Import the cors package

// const app = express();
// const port = 3000;

// app.use(cors()); // Use the cors middleware

// app.use(express.static('public'));

// app.get('/scrape', async (req, res) => {
//     try {
//         const { data } = await axios.get('https://oceanofwallpapers.com/');
//         const $ = cheerio.load(data);

//         const wallpapers = [];

//         $('li.grid-item.infinite-item').each((index, element) => {
//             const image = {};
//             image.fileFormat = $(element).find('meta[itemprop="fileFormat"]').attr('content');
//             image.keywords = $(element).find('meta[itemprop="keywords"]').attr('content');
//             image.description = $(element).find('meta[itemprop="description"]').attr('content');
//             image.contentSize = $(element).find('meta[itemprop="contentSize"]').attr('content');
//             image.width = $(element).find('div.img_info_size').text().split('x')[0].trim();
//             image.height = $(element).find('div.img_info_size').text().split('x')[1].trim();
//             image.caption = $(element).find('figcaption.img_info_tags').text();
//             image.url = $(element).find('a[itemprop="url"]').attr('href');
//             image.contentUrl = $(element).find('img.main_img.lazyload').attr('data-src');

//             wallpapers.push(image);
//         });

//         res.json(wallpapers);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error scraping data');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');
// const cors = require('cors'); // Import the cors package

// const app = express();
// const port = 3000;

// app.use(cors()); // Use the cors middleware

// app.use(express.static('public'));

// app.get('/scrape', async (req, res) => {
//     const page = req.query.page || 1; // Get the page number from the query parameters
//     try {
//         const { data } = await axios.get(`https://oceanofwallpapers.com/?page=${page}`);
//         const $ = cheerio.load(data);

//         const wallpapers = [];

//         $('li.grid-item.infinite-item').each((index, element) => {
//             const image = {};
//             image.fileFormat = $(element).find('meta[itemprop="fileFormat"]').attr('content');
//             image.keywords = $(element).find('meta[itemprop="keywords"]').attr('content');
//             image.description = $(element).find('meta[itemprop="description"]').attr('content');
//             image.contentSize = $(element).find('meta[itemprop="contentSize"]').attr('content');
//             image.width = $(element).find('div.img_info_size').text().split('x')[0].trim();
//             image.height = $(element).find('div.img_info_size').text().split('x')[1].trim();
//             image.caption = $(element).find('figcaption.img_info_tags').text();
//             image.url = $(element).find('a[itemprop="url"]').attr('href');
//             image.contentUrl = $(element).find('img.main_img.lazyload').attr('data-src');

//             wallpapers.push(image);
//         });

//         res.json(wallpapers);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error scraping data');
//     }
// });



// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(express.static('public'));

// // Endpoint for scraping wallpapers
// app.get('/scrape', async (req, res) => {
//     const page = req.query.page || 1;
//     try {
//         const { data } = await axios.get(`https://oceanofwallpapers.com/?page=${page}`);
//         const $ = cheerio.load(data);

//         const wallpapers = [];

//         $('li.grid-item.infinite-item').each((index, element) => {
//             const image = {};
//             image.fileFormat = $(element).find('meta[itemprop="fileFormat"]').attr('content');
//             image.keywords = $(element).find('meta[itemprop="keywords"]').attr('content');
//             image.description = $(element).find('meta[itemprop="description"]').attr('content');
//             image.contentSize = $(element).find('meta[itemprop="contentSize"]').attr('content');
//             image.width = $(element).find('div.img_info_size').text().split('x')[0].trim();
//             image.height = $(element).find('div.img_info_size').text().split('x')[1].trim();
//             image.caption = $(element).find('figcaption.img_info_tags').text();
//             image.url = $(element).find('a[itemprop="url"]').attr('href');
//             image.contentUrl = $(element).find('img.main_img.lazyload').attr('data-src');

//             wallpapers.push(image);
//         });

//         res.json(wallpapers);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error scraping data');
//     }
// });

// // Endpoint for fetching categories
// const getCategories = async (page) => {
//     const url = `https://oceanofwallpapers.com/categories/?page=${page}`;
//     const { data } = await axios.get(url);
//     const $ = cheerio.load(data);
//     const categories = [];
  
//     $('.cats .col').each((index, element) => {
//       const link = $(element).find('a').attr('href');
//       const image = $(element).find('img').attr('src');
//       const alt = $(element).find('img').attr('alt');
//       const title = $(element).find('img').attr('title');
//       const name = $(element).find('h3').text().replace(' wallpapers', '');
  
//       categories.push({ link, image, alt, title, name });
//     });
  
//     return categories;
//   };
  
//   app.get('/categories', async (req, res) => {
//     const page = req.query.page || 1;
//     try {
//       const categories = await getCategories(page);
//       res.json(categories);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch categories' });
//     }
//   });

// // Serve index.html for scraping wallpapers
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });

// // Serve category.html for fetching categories
// app.get('/categories-page', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/categories.html'));
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(express.static('public'));

// // Import routes
// const wallpaperRoutes = require('./routes/wallpapers');
// const categoryRoutes = require('./routes/categories');

// // Use routes
// app.use('/api/wallpapers', wallpaperRoutes);
// app.use('/api/categories', categoryRoutes);

// // Serve index.html for scraping wallpapers
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });

// // Serve category.html for fetching categories
// app.get('/categories-page', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/categories.html'));
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const wallpaperRoutes = require('./routes/wallpapers');
// const categoryRoutes = require('./routes/categories');

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(express.static('public'));

// app.use('/api/wallpapers', wallpaperRoutes);
// app.use('/api/categories', categoryRoutes);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });

// app.get('/categories-page', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/categories.html'));
// });

// app.get('/wallpaper-page', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/wallpaper.html'));
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const path = require('path');
const cors = require('cors');
const wallpapersRoute = require('./routes/wallpapers');
const searchRoute = require('./routes/search');
const categoryRoutes = require('./routes/categories');

 


const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

app.use('/api/wallpapers', wallpapersRoute);
app.use('/api', searchRoute);
app.use('/api/categories', categoryRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/search.html'));
});
 
app.get('/wallpaper-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/wallpaper.html'));
});




 
// Serve category.html for fetching categories
app.get('/categories-page', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/categories.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
