var numClick1 = 0;
var numClick2 = 0;
$("#catPic1").on("click", function() {
    numClick1 += 1;
    var n = numClick1.toString();
    document.getElementById("num1").innerHTML = n;
});
$("#catPic2").on("click", function() {
    numClick2 += 1;
    var n = numClick2.toString();
    document.getElementById("num2").innerHTML = n;
});