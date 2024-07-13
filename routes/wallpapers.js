// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');

// const router = express.Router();

// // Endpoint for scraping wallpapers
// router.get('/scrape', async (req, res) => {
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

// module.exports = router;


// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');

// const router = express.Router();

// // Endpoint for scraping wallpapers
// router.get('/scrape', async (req, res) => {
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

// // Endpoint for fetching wallpaper details and related images
// router.get('/wallpaper/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const { data } = await axios.get(`https://oceanofwallpapers.com/wallpaper/${id}`);
//         const $ = cheerio.load(data);

//         const wallpaper = {
//             url: `https://oceanofwallpapers.com/wallpaper/${id}`,
//             imageUrl: $('img.main_img').attr('src'),
//             description: $('meta[itemprop="description"]').attr('content'),
//             keywords: $('meta[itemprop="keywords"]').attr('content'),
//             related: [],
//         };

//         $('li.grid-item.infinite-item').each((index, element) => {
//             const relatedImage = {};
//             relatedImage.fileFormat = $(element).find('meta[itemprop="fileFormat"]').attr('content');
//             relatedImage.keywords = $(element).find('meta[itemprop="keywords"]').attr('content');
//             relatedImage.description = $(element).find('meta[itemprop="description"]').attr('content');
//             relatedImage.contentSize = $(element).find('meta[itemprop="contentSize"]').attr('content');
//             relatedImage.width = $(element).find('div.img_info_size').text().split('x')[0].trim();
//             relatedImage.height = $(element).find('div.img_info_size').text().split('x')[1].trim();
//             relatedImage.caption = $(element).find('figcaption.img_info_tags').text();
//             relatedImage.url = $(element).find('a[itemprop="url"]').attr('href');
//             relatedImage.contentUrl = $(element).find('img.main_img.lazyload').attr('data-src');

//             wallpaper.related.push(relatedImage);
//         });

//         res.json(wallpaper);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error fetching wallpaper details');
//     }
// });

// module.exports = router;


// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');

// const router = express.Router();

// // Helper function to convert imagekit URL to oceanofwallpapers URL
// function convertImageUrl(url) {
//     return url.replace('https://ik.imagekit.io/88eyqmazimp/tr:w-300,q-50,bl-7/', 'https://wallpapers.oceanofwallpapers.com/');
// }

// // Endpoint for scraping wallpapers
// router.get('/scrape', async (req, res) => {
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
//             let imageUrl = $(element).find('img.main_img.lazyload').attr('data-src');
//             image.contentUrl = convertImageUrl(imageUrl);

//             wallpapers.push(image);
//         });

//         res.json(wallpapers);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error scraping data');
//     }
// });

// module.exports = router;

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

// Endpoint for scraping wallpapers
router.get('/scrape', async (req, res) => {
    const page = req.query.page || 1;
    try {
        const { data } = await axios.get(`https://oceanofwallpapers.com/?page=${page}`);
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
            image.contentUrl = $(element).find('img.main_img.lazyload').attr('data-src').replace('ik.imagekit.io/88eyqmazimp', 'wallpapers.oceanofwallpapers.com');

            wallpapers.push(image);
        });

        res.json(wallpapers);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error scraping data');
    }
});

// Endpoint for fetching individual wallpaper details
router.get('/wallpaper/:id', async (req, res) => {
    const wallpaperId = req.params.id;
    try {
        const { data } = await axios.get(`https://oceanofwallpapers.com/wallpaper/${wallpaperId}`);
        const $ = cheerio.load(data);

        const wallpaper = {
            imageUrl: $('img.main_img.lazyload').attr('data-src').replace('ik.imagekit.io/88eyqmazimp', 'wallpapers.oceanofwallpapers.com'),
            description: $('meta[itemprop="description"]').attr('content'),
            keywords: $('meta[itemprop="keywords"]').attr('content'),
            related: []
        };

        $('li.grid-item.infinite-item').each((index, element) => {
            const relatedImage = {};
            relatedImage.caption = $(element).find('figcaption.img_info_tags').text();
            relatedImage.description = $(element).find('meta[itemprop="description"]').attr('content');
            relatedImage.keywords = $(element).find('meta[itemprop="keywords"]').attr('content');
            relatedImage.width = $(element).find('div.img_info_size').text().split('x')[0].trim();
            relatedImage.height = $(element).find('div.img_info_size').text().split('x')[1].trim();
            relatedImage.contentSize = $(element).find('meta[itemprop="contentSize"]').attr('content');
            relatedImage.url = $(element).find('a[itemprop="url"]').attr('href');
            relatedImage.contentUrl = $(element).find('img.main_img.lazyload').attr('data-src').replace('ik.imagekit.io/88eyqmazimp', 'wallpapers.oceanofwallpapers.com');

            wallpaper.related.push(relatedImage);
        });

        res.json(wallpaper);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching wallpaper details');
    }
});

module.exports = router;

