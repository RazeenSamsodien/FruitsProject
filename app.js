//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 4,
  review: "Pretty solid as a fruit."
});

fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit."
});

pineapple.save();

const person = new Person ({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple
});

person.save();

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});


//Fruit.updateOne({_id: }, {name: "Peach"} function(err){
  //if (err){
    //console.log(err);
  //} else {
    //console.log("Successfully updated the document");
  //}
//});

//Fruit.deleteOne({name: "Peach"} function(err){
  //if (err){
    //console.log(err);
  //} else {
    //console.log("Successfully deleted the document");
  //}
//});

//Person.deleteMany({name: "John"} function(err){
  //if (err){
    //console.log(err);
  //} else {
    //console.log("Successfully deleted the document");
  //}
//});
