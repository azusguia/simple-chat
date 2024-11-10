import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: '*',
}));

app.use(express.json());

app.use('/api/hello', (_, res) => {
  res.json({
    message: 'Hello, World!',
  });
});

app.get('*', (_, res) => {
  res.status(404).json({
    message: 'Not Found',
    source: 'origin',
  });
});

export default app;
