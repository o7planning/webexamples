var text = (function () {
    var privateText = "My private TEXT";
    var publicText = "My public TEXT";
    return publicText;
})();

console.log(text); // My public TEXT