// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.db('TodoApp').collection('Todos').updateMany({text: 'Eat luch'}, { $set: {text: 'Eat lunch'}}).then((result) => {
    console.log(result);
  });
});