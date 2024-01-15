import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.json());

// allow all
app.use(cors());

// custom origins
// app.use(
//   cors({
//     origin: 'http://locahost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (req, res) => {
  return res.status(222).send('first message');
});

app.use('/books', booksRoute);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('App Connected to Database');
    app.listen(PORT, () => {
      console.log(`Server is listening on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
