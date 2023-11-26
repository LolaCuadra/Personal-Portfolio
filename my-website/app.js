const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Handle requests for the '/about-me' route
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
  });
  

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
