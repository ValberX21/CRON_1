const cron  = require('node-cron')
const logger = require('../utils/logger');
const fetchData = require('./fetchData');

cron.schedule('*/10 * * * * *', async () => {
     try{        
        
        await fetchData();
       
    }catch(error)
    {
        logger.error(`CRON job failed: ${error}`);
    }
});

logger.info('CRON scheduler executed')