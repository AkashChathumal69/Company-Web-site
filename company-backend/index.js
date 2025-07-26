const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/join', (req, res) => {
  const { name, email } = req.body;
  console.log('Received:', name, email);
  // Here you can save to a database or send an email
  res.json({ message: 'Thank you for joining!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});