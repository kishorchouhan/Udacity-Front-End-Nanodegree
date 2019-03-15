var name = "albERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    
    //finalName[0] = finalName[0].toUpperCase();
    /* My Solution:- */
    
    var firstLetter = finalName[0];
    firstLetter = firstLetter.toUpperCase();
    
    nameArray = finalName.split(" ");
    nameArray[0] = nameArray[0].toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    finalName = nameArray.join(" ");
    finalName = finalName.replace(finalName[0], firstLetter);
    
    /* course solution:-
    
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    
    */
    
    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));