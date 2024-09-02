
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'SCHOOL MANAGEMENT SYSTEM',
            version: '1.0.0',
            description: 'API Documentation with JWT Bearer Authentication',
        }     
    },
    apis: ['./routes/*.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = specs;
