const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

// Endpoint for search
router.get('/search', async (req, res) => {
    const query = req.query.query;
    try {
        const { data } = await axios.get(`https://oceanofwallpapers.com/search/?wallpaper=${encodeURIComponent(query)}`);
        const $ = cheerio.load(data);

        const wallpapers = [];

        $('li.grid-item.infinite-item').each((index, element) => {
            const image = {};
            image.fileFormat = $(element).find('meta[itemprop="fileFormat"]').attr('content');
            image.keywords = $(element).find('meta[itemprop="keywords"]').attr('content');
            image.description = $(element).find('meta[itemprop="description"]').attr('content');
            image.contentSize = $(element).find('meta[itemprop="contentSize"]').attr('content');
            image.width = $(element).find('div.img_info_size').text().split('x')[0].trim();
            image.height = $(element).find('div.img_info_size').text().split('x')[1].trim();
            image.caption = $(element).find('figcaption.img_info_tags').text();
            image.url = $(element).find('a[itemprop="url"]').attr('href');
            image.contentUrl = $(element).find('img.main_img.lazyload').attr('data-src').replace('tr:w-300,q-50,bl-7/', '');

            wallpapers.push(image);
        });

        res.json(wallpapers);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error performing search');
    }
});

module.exports = router;
