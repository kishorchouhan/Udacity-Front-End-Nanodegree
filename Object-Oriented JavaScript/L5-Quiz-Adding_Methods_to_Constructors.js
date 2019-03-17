// Refactor the carlike function in a way
// that allows you to use the method calling 
// syntax with "dot access" as we do below.
/* My First solution
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
    obj.loc++;
    };
    return obj;
};

var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();

 Final solution */
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = move;
    return obj;
};

var move = function() {
    this.loc++;
};

/////
// Here we want to call move with "dot access"
var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();