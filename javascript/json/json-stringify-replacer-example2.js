

function replacer(key, value) {
    console.log(typeof key);
    console.log(key);

    // Filtering out properties
    if (typeof value === 'string') {
        return undefined;
    }
    return value;
}

var obj = {
    foundation: 'Mozilla',
    model: 'box',
    week: 45,
    transport: 'car',
    month: 7
};
 

var json = JSON.stringify(obj, replacer);


console.log(json); // '{"week":45,"month":7}'
