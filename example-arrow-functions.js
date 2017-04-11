var names = ['Haswin', 'Kasun', 'Devin', 'Jala'];

//non - arrow function
// a simple for each
names.forEach(function (name){
  console.log('forEach ',name);
});

//arrowFunctions
//RuleOfThumb
//am i using an anonymous function ?  if yes go on and use arrow functions

//method 01
names.forEach((name) => {
  console.log('arrowFunc 01', name);
});

//method 02

names.forEach((name) => console.log('arrowFunc 02', name));

//In arrowfunctions when you define a simple expression the value gets returned immediately.
// var returnMe =(name) => name +'!';
// console.log(returnMe('Devanjith'));


//Difference b/w arrow functions and anonymous functions
//01 anonymous functions have a this binding while arrow functions have it's parents this binding.

// var person ={
//   name:'Master Sir',
//   greet:function(){
//     name.forEach(function(name){
//       console.log(this.name + 'says hi to' + name);
//     })
//   }
// };

//output of above gives error for this.name being not defined

//convert the above into an arrow function
var person ={
  name:'Master Sir',
  greet:function(){
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    })
  }
};
person.greet();

//challenge area
//write an arrow function to add two numbers

var addStatement = (a,b) =>{
   return a + b;
}

//expression arrow functions
var addExpression = (a,b) => a + b;

console.log(addStatement(99,1));
console.log(addExpression(100,2));
