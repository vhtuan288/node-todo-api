const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5acdd6911b275c1cf0e68917';

if (!ObjectID.isValid(id)) {
  console.log('ID not vaild');
} else {
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return console.log('Id not found');
    }
    console.log('To do ByID', todo);
  }).catch((e) => console.log(e));
}
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });

