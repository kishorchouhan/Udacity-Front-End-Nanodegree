/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
Directions:
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

// your code goes here
var facebookProfile = {
    name: "Kishor",
    friends: 50,
    messages: ["Hello!", "How are you?", "Bye!"],
    postMessage: function(value) {
        (facebookProfile.messages).push(value);
    },
    deleteMessage: function(value2) {
        (facebookProfile.messages).splice(value2,1);
    },
    addFriend: function() {
        facebookProfile.friends += 1;
    },
    removeFriend: function() {
        facebookProfile.friends -= 1;
    }
};
facebookProfile.postMessage("hihi");
facebookProfile.deleteMessage(2);
facebookProfile.addFriend();
facebookProfile.removeFriend();
console.log(facebookProfile);