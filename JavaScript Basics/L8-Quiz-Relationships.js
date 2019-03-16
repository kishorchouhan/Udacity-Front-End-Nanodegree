function getRelationship(x, y) {
    // Your code goes here!
    var typeX = getType(x);
    var typeY = getType(y);
    
    if ((typeX === "number") && (typeY === "number")) {
        if (x > y) {
            return ">";
        } else if (x < y) {
            return "<";
        } else {
            return "=";
        }
    };
    if ((typeX !== "number") && (typeY !== "number")) {
        return ("Can't compare relationships because " + x + " and " + y + " are not numbers");
    } else if ((typeX == "number") && (typeY !== "number")) {
        return ("Can't compare relationships because " + y + " is not a number");
    } else {
        return ("Can't compare relationships because " + x + " is not a number");
    };
}

function getType(input) {
    if ( isNaN(input) ) {
        return "NaN";
    } else {
        return typeof input;
    }
}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));