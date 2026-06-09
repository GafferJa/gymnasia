import express from 'express'
import Connection from './database/Connection.js';
import router from './router/web.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
new Connection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.static('public'));
app.use(router);


app.listen(3000, () => {
    console.log("Server running in port 3000")
})