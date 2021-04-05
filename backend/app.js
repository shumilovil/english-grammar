const express = require('express');
const cors = require('cors');

const app = express();

const port = 5000;


app.use(cors());
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.get('/shum', (req, res) => {
  res.send({ testRes: 'shumtestres111222' });
});

app.listen(port, () => {
  console.log(`server is listening to me on ${port}`);
});