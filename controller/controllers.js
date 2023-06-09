require('dotenv').config;
const axios = require('axios');

async function getUserData(req, res) {
    try {
        const response = await axios.get(process.env.SHOPIFY_URL, {
            headers: {
                'shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
            },
        });
        const getUserData = response.data;
        res.json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
}

module.exports = {
    getUserData,
};