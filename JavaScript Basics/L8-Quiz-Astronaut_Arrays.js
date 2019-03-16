var moonWalkers = [
    "Neil Armstrong",
    "Buzz Aldrin",
    "Pete Conrad",
    "Alan Bean",
    "Alan Shepard",
    "Edgar Mitchell",
    "David Scott",
    "James Irwin",
    "John Young",
    "Charles Duke",
    "Eugene Cernan",
    "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var nameArray = [];
    for (i=0; i < names.length; i++) {
        var name = names[i].split(" ");
        var newName = name.pop() + ", " + name;
        nameArray.push(newName);
    }
    return nameArray.sort();
}
  
// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));