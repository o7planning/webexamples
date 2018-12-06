// A Base class
class Language {

}
class English extends Language {

    greeting() {
        console.log("Hello");
    }
}

class French  extends Language {
    greeting() {
        console.log("Bonjour");
    }
}

function intro(language) {
    // Check type of 'language' object.
    if(language instanceof Language)  {
      language.greeting();
    }
}

// -------------- TEST ----------------------

let flora = new English();
let aalase = new French();

// Call function:
intro(flora);
intro(aalase);

let someObject = {};

intro(someObject);
