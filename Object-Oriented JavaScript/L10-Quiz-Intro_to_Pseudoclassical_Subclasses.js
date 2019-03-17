var Car = function(loc){
    this.loc = loc;
};

// Your code goes here!
Car.prototype.move = function() {
    this.loc++;
};

var zed = new Car(3);
zed.move();

// These lines have been commented out because Van hasn't been defined in this example
/*
var amy = new Van(9);
amy.move();
amy.grab();
*/