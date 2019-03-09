

// If obj is an Array ==> @key: type of string (Index of array)
function replacer(key, value) {
    console.log(key);
    console.log(typeof key);

    // Index
    if (key === "0") {
        return "@";
    }
    //
    if (typeof value === 'string') {
        return undefined;
    }
    return value;
}


// obj is an Array
var obj = ['Mozilla', 'box', 45, 'car', 7];

var json = JSON.stringify(obj, replacer);

console.log(json); // ["@",null,45,null,7]
