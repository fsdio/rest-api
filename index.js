import express from "express"
const app = express();
const port = 3000;

// Endpoint untuk 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Data from API' });
});