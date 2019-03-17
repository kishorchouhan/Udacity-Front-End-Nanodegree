var Car = function(loc){
    this.loc = loc;
};
Car.prototype.move = function(){
    this.loc++;
};

var Van = function(loc){
    Car.call(this, loc);
};
Van.prototype = Object.create(Car.prototype);

var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
