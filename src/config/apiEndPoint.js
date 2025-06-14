require('dotenv').config(); 

module.exports = {
    API_INVENTORY: process.env.API_INVENTORY || 'https://localhost:44330/api/Product'
};
