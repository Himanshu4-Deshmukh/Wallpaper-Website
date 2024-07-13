const axios = require('axios');

async function fetchWallpaper(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 200 range
            console.error(`Error: Received status code ${error.response.status}`);
            console.error(error.response.data);
        } else if (error.request) {
            // No response received
            console.error('Error: No response received from the server');
            console.error(error.request);
        } else {
            // Error setting up the request
            console.error('Error: Request setup failed');
            console.error(error.message);
        }
        console.error(error.config);
    }
}

module.exports = { fetchWallpaper };
