let err = new Error("My Error");
let rangeErr = new RangeError();
let evalErr = new EvalError("My Eval Error");

// A random value in [0.. 9]
let randomValue = Math.floor(Math.random() * 10);

// [0,1,2,3]
let random0123 = randomValue % 4;

console.log("random0123 = " + random0123);

try {
   if(random0123 == 0) {
      throw err;
   } else if(random0123 == 1){
      throw rangeErr;
   } else if(random0123 == 2)  {
      throw evalErr;
   } else if(random0123 == 3)  {
      throw "A String Error";
   }

} catch(e)  {
   console.log("typeof e = " + (typeof e));// 'object' or 'string'

   if(e instanceof RangeError) {
      console.log("--> RangeError!!");
   } else if(e instanceof EvalError) {
      console.log("--> EvalError!!");
   } else if(e instanceof Error) {
      console.log("--> Error!!");
   } else if (typeof e == "string"){
      console.log("--> String Error!!");
   } else  {
      console.log("--> Error!!");
   }

   console.log(e);
}
