import express from 'express';
import { scrapeMDN } from './scraper.js'; // Assuming the scraper function is exported from scraper.js

const app = express();
const port = 3000;

app.get('/rohan', async (req, res) => {
  try {
    await scrapeMDN();
    res.send('Data scraped and saved to scraped_data.json');
  } catch (error) {
    console.error('An error occurred while scraping and saving data:', error);
    res.status(500).send('An error occurred while scraping and saving data.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
