//defnition
//creating
//accesing
//modifying delete
//object method

// const name = "jhon";
// const age = 20;



const person1 = {
    name: "jhon",
    age: 20,
    city: "adama",

    greet: function(){
        console.log("hello my name is " + this.name)
    }
};


// console.log(this);

person1.name = "kanz";

delete person1.age;

person1.greet();

console.log(person1);
 
 const person2 = {
    name: "jhon",
    age: 20,
    city: "adama"
};





// console.log(this)