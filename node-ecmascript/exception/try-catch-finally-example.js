function getGreeting(language) {
    try {
        console.log("Code in try block (*)");

        // (1)(en)
        // Call greeting() method of object 'language'
        // An Exception can throw here if this object has no greeting() method.
        // (vi)
        // Gọi phương thức greeting() của đối tượng 'language'.
        // Một ngoại lệ có thể bị ném ra tại đây
        // nếu đối tượng này không có phương thức greeting()
        let v = language.greeting();

        console.log("Code in try block (**)");

        return v;

    } catch (e) {

        console.log("Code in catch block. Something Error: " + e);

    } finally {
        // (2) (en)
        // The finally block is always executed.
        // (vi)
        // Khối finally luôn luôn được thực thi.
        console.log("Code in finally block");
    }

    return " !! ";
}

// ----------------------- TEST ---------------------------------

// Test 1:
console.log("----- Call getGreeting(null) -----");

let v1 = getGreeting(null);
console.log("Greeting: " + v1);


// Test 2:
console.log("------ Call getGreeting(language) ------");

let language = new Object();

language.greeting = function() {
    return "Hello Everybody";
}

let v2 = getGreeting(language);

console.log("Greeting: " + v2);
