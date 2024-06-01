import express from 'express';
import morgan from 'morgan';
import { up } from './data/migrations/migrations'; // Import the migration script

const app = express();
app.use(morgan('dev')); // logger


// Run migrations
async function initialize() {
  try {
    await up();
    console.log("Database initialized");
  } catch (error) {
    console.error("Database initialization failed:", error);
  }
}

initialize();
app.get('/', async (req, res) => {

  res.json({ message: 'Hello Boston' });
});

const port = Number(process.env.PORT ?? 8080);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
