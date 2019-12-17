const express = require('express');

const app = express();
const port = 4321;

app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);

});

app.get('/demo/getRandomNumber', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send({number: getRandomNumber(0, 101)})
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (min - max) + max);
}
