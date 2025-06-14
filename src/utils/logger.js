const winston = require('winston');
require('dotenv').config(); 


const logFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
);

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info', 
    format: logFormat,
    transports: [
        new winston.transports.Console(), 
        new winston.transports.File({ filename: 'logs/app.log' }) 
    ],
});


module.exports = logger;
