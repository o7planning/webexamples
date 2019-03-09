
var obj = {
    name: "Tom",
    gender: "Male",
    company:"Walt Disney",
    friends: [
      {name:"Jerry", gender:"Male"},
      {name:"Donald", gender: "Male"}
    ]
};


var replacer = ["name", "friends"];


var json = JSON.stringify(obj, replacer);


console.log(json); // {"name":"Tom","friends":[{"name":"Jerry"},{"name":"Donald"}]}
 
