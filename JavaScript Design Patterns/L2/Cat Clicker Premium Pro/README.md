# Cat Clicker Premium Pro

### Overview
[Udacity Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) - Project

Project From Udacity JavaScript Design Patterns Course.

### Links to GitHub Repository (Master Branch)

* My GitHub Project Repository: [https://github.com/kishorchouhan/Cat-Clicker-Premium-Pro-Udacity-Project](https://github.com/kishorchouhan/Cat-Clicker-Premium-Pro-Udacity-Project "My GitHub Project Repository")

* My Project Website Is Hosted Here: [https://kishorchouhan.github.io/Cat-Clicker-Premium-Pro-Udacity-Project/](https://kishorchouhan.github.io/Cat-Clicker-Premium-Pro-Udacity-Project/ "My Hosted Website")

To run the website and take code on local machine:

1. Download the GitHub zip file or clone the repository onto your local workstation:
	* zip file [https://github.com/kishorchouhan/Cat-Clicker-Premium-Pro-Udacity-Project/archive/master.zip](https://github.com/kishorchouhan/Cat-Clicker-Premium-Pro-Udacity-Project/archive/master.zip "download zip file")
	* git clone [https://github.com/kishorchouhan/Cat-Clicker-Premium-Pro-Udacity-Project.git/](https://github.com/kishorchouhan/Cat-Clicker-Premium-Pro-Udacity-Project.git "git clone repository")
2. Open a browser window and navigate to the index.html file in your directory.

### How to use this app:

In order to use this app, click on the name of the cat that you would like to see and their picture will appear on the right. Click on the "Admin" button and three input boxes will appear. These boxes will allow you to change the name of the cat, the picture, and # of clicks on each cats' picture. Click the "save" button to save your changes to the cat and the "cancel" button to discard the changes.

### Things I done in this project:

The JavaScript is organized within a MVC (Model, View, Controller) architecture.

The cats' information is stored in an array of objects, but within the object called model. Each cat is an object with name, number of clicks, and imageURL properties.

Within the "view" objects is:
1.the for loop used to loop through the cat's arrays, 
2.the click event listeners for the buttons and cat names (created with an iife/ Immediately-Invoked-Function-Expression), and 
3.the functions that change the cats' information when the "save" or "cancel" buttons are clicked.

The variables and functions within the model and view objects communicate with each other via the "octopus" object. The "octopus" object is the controller in the MVC architecture.
