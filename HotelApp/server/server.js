const express = require('express');
const app = express();

const cors = require('cors');
const parser = require('body-parser');
app.use(parser.json());
app.use(cors());


const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('hotels');
    const bookingCollections = db.collection('bookings');
    const hotelRouter = createRouter(bookingCollections);
    app.use('/api/bookings',hotelRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
