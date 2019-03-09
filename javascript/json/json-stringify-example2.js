

var obj = {
  name : "tran",
  age : 39,
  // function in object will be ignored
  sayHello : function()  {
     console.log("Hello");
  },
  // undefined, Symbol, function in Array will be converted to null.
  "others": ["1", Symbol(), undefined, function(){}, "2"]
};

var text = JSON.stringify(obj);

console.log(text); // {"name":"tran","age":39,"others":["1",null,null,null,"2"]}
