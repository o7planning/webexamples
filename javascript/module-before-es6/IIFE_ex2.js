var myGlobalVariable = 'Hello, I am a global variable :)'; 

var text = (function () {
    var privateText = "My private TEXT"; 
    var publicText = "My public TEXT";
    console.log(myGlobalVariable); 
    return publicText;
})();

console.log(text); // My public TEXT