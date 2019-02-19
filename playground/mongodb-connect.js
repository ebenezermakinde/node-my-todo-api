// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

// //Destructuring
// let user = {name: 'Ebenezer', age: 34};

// let { age } = user;

// console.log(age);

MongoClient.connect('mongodb://localhost:27017/myTodoApp', { useNewUrlParser: true }, (err, client) => {
  if(err) {
   return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('myTodoApp')

  // db.collection('Todos').insertOne({
  //   text: "I will make Andela IJN.. Amen!",
  //   completed: true
  // }, (err, res) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Ebenezer',
  //   age: 34,
  //   location: 'Lagos State'
  // }, (err, res) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   // console.log(JSON.stringify(res.ops, undefined, 2));
  //   console.log(res.ops[0]._id.getTimestamp());
  // });

  client.close();
});
