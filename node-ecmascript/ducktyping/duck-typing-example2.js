
var duck = {
    type: "bird",
    cry: function duck_cry(what) {
        console.log(what + " quack-quack!");
    },
    color: "black"
};

var someAnimal = {
    type: "bird",
    cry: function animal_cry(what) {
        console.log(what + " whoof-whoof!");
    },
    eyes: "yellow"
};

function check(who) {
    if ((who.type == "bird") && (typeof who.cry == "function")) {
        who.cry("I look like a duck!\n");
        return true;
    }
    return false;
}

check(duck);  // true
check(someAnimal);  // true
