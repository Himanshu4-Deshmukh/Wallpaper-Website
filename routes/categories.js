const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

// Helper function to get categories
const getCategories = async (page) => {
    const url = `https://oceanofwallpapers.com/categories/?page=${page}`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const categories = [];
  
    $('.cats .col').each((index, element) => {
      const link = $(element).find('a').attr('href');
      const image = $(element).find('img').attr('src');
      const alt = $(element).find('img').attr('alt');
      const title = $(element).find('img').attr('title');
      const name = $(element).find('h3').text().replace(' wallpapers', '');
  
      categories.push({ link, image, alt, title, name });
    });
  
    return categories;
};

// Endpoint for fetching categories
router.get('/categories', async (req, res) => {
    const page = req.query.page || 1;
    try {
      const categories = await getCategories(page);
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch categories' });
    }
});

module.exports = router;
