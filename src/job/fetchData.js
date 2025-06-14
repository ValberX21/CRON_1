const axios = require('axios');
const https = require('https');
const logger = require('../utils/logger');
const {API_INVENTORY} = require('../config/apiEndPoint')

const agent = new https.Agent({
  rejectUnauthorized: false
});

async function fetchData() {
    try{

        const response = await axios.get(API_INVENTORY, { httpsAgent: agent });
        const productList = response.data.productList;
         logger.info(`Data fetched successfully: ${JSON.stringify(productList)}`);

          productList.forEach(product => {
            logger.info(`Product: ${product.name} | Price: ${product.price} | Quantity: ${product.quantity}`);
            
        });

        return productList;
    }
    catch(error)
    {
        logger.error('Error fetching data:', error.message);
        throw error;
    }
}

module.exports = fetchData;