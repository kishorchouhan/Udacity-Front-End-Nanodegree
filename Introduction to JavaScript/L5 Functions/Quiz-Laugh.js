/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
    var result = "";
    for (var i = 1; i <= num; i++) {
        result += "ha"
    }
    return result + "!"
}
/* finish the function expression */

console.log(laugh(10));
