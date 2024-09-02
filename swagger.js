
const swaggerAutogen = require('swagger-autogen')();
const swaggerOption=require('./swaggeroption')


//copy swaggerjsdoc
const doc={
   ...swaggerOption
}

  const outputFile = './swagger-output.json';
  const routes = ['./routes/*.js'];
  swaggerAutogen(outputFile, routes, doc);