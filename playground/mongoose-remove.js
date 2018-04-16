const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5acdd6911b275c1cf0e68917').then((todo) => {
  console.log(todo);
});

Todo.findOneAndRemove({_id: '5acdd6911b275c1cf0e68917'}).then((todo) => {
  console.log(todo);
});