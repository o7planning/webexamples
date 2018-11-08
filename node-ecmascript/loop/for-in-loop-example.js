
// An object has 4 properties (name, age, gender,greeing)
var myObject = {
   name : "John",
   age: 25,
   gender: "Male",
   greeting : function() {
      return "Hello";
   }
};


for(myProp in myObject)  {

    console.log(myProp);
}
