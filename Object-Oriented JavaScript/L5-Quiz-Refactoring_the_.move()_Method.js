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