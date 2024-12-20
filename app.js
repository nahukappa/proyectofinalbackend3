import express from 'express';
import cors from 'cors';
import { router as adoptionRouter } from './routes/adoption.router.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();


app.use(cors());
app.use(express.json());


const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Adoptions API',
      version: '1.0.0',
      description: 'API para gestionar adopciones de animales',
    },
    servers: [
      {
        url: 'http://localhost:3000',  
      },
    ],
  },
  apis: ['./routes/*.js'],  
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use('/adoptions', adoptionRouter);


export default app;
