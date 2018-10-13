const express = require('express');
import React from 'react';
import { renderToString } from 'react-dom/server';
import renderer from './helpers/renderer';
import Main from './client/components/Main';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer(req));
})

app.listen(4000, ()=>{console.log('listening on port 4000')})