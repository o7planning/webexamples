
class Duck  {

  fly()  {
     console.log("Duck fly");
  }

  walk()  {
    console.log("Duck walk");
  }

}

class Airplane  {

  fly()  {
     console.log("Airplane fly");
  }

  walk()  {
    console.log("Airplane walk");
  }

  shoot(target)  {
    console.log("Airplane shoot " + target);
  }

}

class Cat  {

  walk() {
    console.log("Cat walk");
  }
}


let duck1 = new Duck();
let airplane1 = new Airplane();
let cat1 = new Cat();

// Array
let testArray = [duck1, airplane1, cat1];

for( let i = 0; i < testArray.length; i++) {
   let testObj = testArray[i];

   if(testObj.fly)  {
     testObj.fly();
   }
}
