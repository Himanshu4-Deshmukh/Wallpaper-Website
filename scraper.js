// scraper.js
const axios = require('axios');
const cheerio = require('cheerio');

const fetchWallpaper = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
      }
    });
    const html = response.data;
    const $ = cheerio.load(html);

    // Extract data using cheerio
    const wallpaperData = {}; // Your data extraction logic here

    return wallpaperData;
  } catch (error) {
    console.error('Error fetching wallpaper:', error.message);

    // Retry logic
    if (error.response && error.response.status === 500) {
      console.log('Retrying...');
      return fetchWallpaper(url);
    }

    throw error;
  }
};

module.exports = fetchWallpaper;
