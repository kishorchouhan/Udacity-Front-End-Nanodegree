# Cat Clicker Premium Pro

In order to use this app, click on the name of the cat that you would like to see and their picture will appear on the right. Click on the "Admin" button and three input boxes will appear. These boxes will allow you to change the name of the cat, the picture, and # of clicks on each cats' picture. Click the "save" button to save your changes to the cat and the "cancel" button to discard the changes.

This is the same project as the project within my Cat-Clicker repository, but with an admin button that allows the user to change the cats' information. The JavaScript is also now organized within a MVC (Model, View, Controller) architecture.

The cats' information is still stored in an array of objects, but within the object called model. Each cat is an object with name, number of clicks, and imageURL properties.

Within the "view" objects is:

1.the for loop used to loop through the cat's arrays, 2.the click event listeners for the buttons and cat names (created with an iife/ Immediately-Invoked-Function-Expression), and 3.the functions that change the cats' information when the "save" or "cancel" buttons are clicked.

The variables and functions within the model and view objects communicate with each other via the "octopus" object. The "octopus" object is the controller in the MVC architecture.