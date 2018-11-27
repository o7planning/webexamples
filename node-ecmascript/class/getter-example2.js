
class Person  {

    constructor (name)  {
       // Private property: #name
       this.#name = name;
    }

    // Getter of property name
    get name()  {
       console.log("Call getter of property 'name'!!");
       return this.#name;
    }

}
