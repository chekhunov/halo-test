const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const port = 9999;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const products = [
  {
    id: 0,
    name: 'orange Juice',
    category: 'Drinks',
    price: 14.99,
  },
  {
    id: 1,
    name: 'Apples',
    category: 'fruits',
    price: 4.99,
  },
  {
    id: 2,
    name: 'Tomatos',
    category: 'vegetables',
    price: 6.39,
  },
  {
    id: 3,
    name: 'Coffee',
    category: 'Drinks',
    price: 3.15,
  },
  {
    id: 4,
    name: 'Sweet Paper',
    category: 'Vegetables',
    price: 12.15,
  },
  {
    id: 5,
    name: 'Grapes',
    category: 'FRUITS',
    price: 20.49,
  },
  {
    id: 6,
    name: 'Pears',
    category: 'Fruits',
    price: 1.35,
  },
  {
    id: 7,
    name: 'Team',
    category: 'Drinks',
    price: 0.4,
  },
];

const form = [];

app.get('/products', cors(corsOptions), (req, res) => {
  res.json(products);
});

app.get('/form', cors(corsOptions), (req, res) => {
  res.json(form);
});

app.post('/form', function (request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
  form.push(request.body);
  response.send(`${request.body.name} - ${request.body.phone}`);
});

server.listen(port, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Сервер запущен');
});
