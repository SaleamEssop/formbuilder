const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const formController = require('./controllers/form.controller');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/form';

const app = express();

const initServer = async (app, port, mongoUrl) => {
  await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('db connected');
  app.listen(port, () => {
    console.log(`app listening on port ${PORT}`);
  });

  app.use(bodyParser.json());
  app.use(cors());

  const logType = process.env.NODE_ENV == 'development' ? 'dev' : 'tiny';
  app.use(morgan(logType));

  app.get('/', (_, res) => {
    res.send('hello world!');
  })

  app.get('/form', formController.getForms);
  app.get('/form/:id', formController.getForm);
  app.delete('/form/:id', formController.deleteForm);
  app.post('/form', formController.saveForm);
  app.post('/form/:id', formController.editForm);

  // catch 404
  app.use(function (_, res) {
    res.status(404).json({
      message: '404 not found'
    })
  });
}

initServer(app, PORT, MONGO_URL);
