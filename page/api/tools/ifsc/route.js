import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/tools/ifsc', async (req, res) => {
  const { ifscCode } = req.query;

  if (!ifscCode) {
    return res.status(400).json({ error: 'IFSC code is required' });
  }

  try {
    const response = await fetch(`https://ifsc.razorpay.com/${ifscCode}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch data');
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('IFSC lookup error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});