const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('tiny'));
}

app.get('/', (_, res) => {
  res.send('hello world!');
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
})
