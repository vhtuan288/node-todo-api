// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.db('TodoApp').collection('Todos').deleteMany({text: 'Eat food'}).then((result) => {
  //   console.log(result);
  // });

  // db.db('TodoApp').collection('Todos').deleteOne({text: 'Each luch'}).then((result) => {
  //   console.log(result);
  // });

  // db.db('TodoApp').collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.db('TodoApp').collection('Users').findOneAndDelete({_id: new ObjectID("5acccdbc96588e1a18c9f21c")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });
});