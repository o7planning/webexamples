class English {

    greeting() {
        console.log("Hello");
    }
}

class French {
    greeting() {
        console.log("Bonjour");
    }
}

function intro(language) {
    language.greeting();
}

// -------------- TEST ----------------------

let flora = new English();
let aalase = new French();

// Call function:
intro(flora);
intro(aalase);

let someObject = {};

intro(someObject);// Error!!!
