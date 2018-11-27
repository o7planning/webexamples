class Something {
  someProperty;

  constructor(){

    this.someProperty = "test";
  }

}

const instance = new Something();

console.log(instance.someProperty); // undefined
