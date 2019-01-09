var us = {
   title : "GDP (Trillion USD)",
   2016 : 18.62,
   2017 : 19.39,
   2018.5 : 10.00
};

// ------------- TEST ----------------------

console.log( us["title"] ); // GDP (Trillion USD)
console.log( us.title );  // GDP (Trillion USD)

console.log( us[2016] ); // 18.62
console.log( us[2017] ); // 19.39

console.log( us[2018.5] ); // 10
