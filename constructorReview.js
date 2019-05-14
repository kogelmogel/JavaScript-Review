//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here

  function Animal(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food
  }

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here

  function Person(name, age, height, gender) {
    return {
      name: name,
      age: age,
      height: height,
      gender: gender
    }
  }

//Create a animal array and a person array.

  //code here

  let animals = []
  let persons = []

//Create two instances of Animal and push those into your animal array

  //code here

  animals.push(new Animal("lion", "Mufasa", 4, "brown", ["meat"]));
  animals.push(new Animal("dog", "Jackie", 4, "white", ["carrots", "apples"]));

//Create two instances of person and push those into your person array.

  //code here

  persons.push(new Person("James", 39, 184, "male"));
  person.push(new Person("Darek", 30, 186, "male"));

//Now we want every instance of Animal to have a eat method. 
//This method will choose a random item in that instances food array, 
//then alert "(name) ' ate ' (whichever food was chosen)".

  //code here

  Animal.prototype.eat = function () {
    var item = food[Math.floor(Math.random()*food.length)];
    alert(`${this.name} ate ${item}`)
  }


 

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

// No, we can't add new properties to the object instance; we can change the constructor and then modify object instances. 

/*
  1) What happens when you use the 'new' keyword to call a Constructor function? - new keyword creates new instance of the object
  2) What's a good way to describe the keyword 'this' - 'this' is a keyword for assigning values
  3) Can a normal function which creates an object and then returns that object use the prototype? yes
  4) What happens if you forget to use 'new' when calling a constructor? 
*/