(function (myUmdModule) {
    if (typeof define === 'function' && define.amd) {
        // Export with AMD
        define("myUmdModule", myUmdModule);
    } else if (typeof module === 'object' && module.exports) {
        // Export with CommonJS
        module.exports = myUmdModule;
    } else {
        // Export with browser global
        window.myUmdModule = myUmdModule;
    }
}({
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
}));