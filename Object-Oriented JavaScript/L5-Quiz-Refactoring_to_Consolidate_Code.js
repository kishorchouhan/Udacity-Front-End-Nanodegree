// Refactor the carlike function so
// that the move function is no longer
// defined as a global variable but is
// contained within the constructor function.

var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
    this.loc++;
    };
    return obj;
};
/*
var move = function() {
    this.loc++;
};
*/
var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();