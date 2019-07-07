/** ======== Refactored Code ========**/
var model;

(function() {
  /* ======== Model ======== */

  model = {
    bioData: {
      name: "Kishor",
      role: "Web Developer",
      contacts: {
        mobile: "779-385-8860",
        email: "devkishorbwr@gmail.com",
        github: "@kishorchouhan",
        linkedin: "@kishorchouhan",
        location: "Bengaluru, India"
      },
      welcomeMessage:
        "I'm a front end web developer (Previously selected for Assistant Loco Pilot in Indian Railway). I love solving problems, providing solutions and working on open source projects that save people time and money and help their day to day lives. Programming, in my opinion, is a medium to convert thoughts to action and to be creative in solving problems. Thanks for stopping by!",
      skills: [
        "JavaScript",
        "ReactJS",
        "HTML5",
        "CSS",
        "jQuery",
        "Bootstarp",
        "KnockoutJS",
        "Git/GitHub",
        "Python"
      ],
      bioPic: "images/pic.jpg"
    },

    workData: {
      jobs: [
        /*
            {"employer": "Election Department of Beawar",
                "title": "Computer Operator",
                "location": "Beawar",
                "dates": "2018",
                "description": "Worked as an computer operator."
            }
        */
      ]
    },

    projectData: {
      projects: [
        {
          title: "Neighborhood Tour App",
          dates: "2019",
          description:
            "A single-page web application, built using the Knockout framework and Google Maps API, that displays a Google Map of Jaipur, India and various landmarks which point to famous tourist places in this city. Users can search all included landmarks and, when selected, additional information about a landmark/place is presented from the Firebase real-time backend.<br>► Third-party APIs: Google Maps, FourSquare<br>► Third-party Libraries/Plug-ins: Knockout.js, jQuery<br>► Highlights: Worked with Promises library, MVVM Framework, second-ever SPA, Gulp Build Process<br>► Technologies used: HTML/CSS/JavaScript.<br>Building this application was complex and incorporated a variety of data points that made my initial builds unwieldy to manage. The most challenging aspects of this project were ensuring the implementation of scalable code architecture and handling multiple asynchronous AJAX calls.<br>It was highly rewarding to learn how to use an MV* framework (Knockout), a JavaScript Promises library while integrating data from third-party API's (FourSquare, Google Maps) and then seeing it all come together as one responsively designed SPA. This was easily one of my favourite projects.",
          images: ["images/neighborhood tour app.png"],
          url:
            "https://kishorchouhan.github.io/Neighborhood-Map-App-Udacity-Project/"
        },
        {
          title: "Frogger Arcade Game",
          dates: "2019",
          description:
            "A game inspired by the classic arcade game Frogger. In this game the goal is simple, get the hero character to move across the grey bricks towards the water without getting hit by the enemy bugs. The speed of enemy bugs will change with the start of each game.<br>I developed it as a final project of Object-Oriented JavaScript and HTML5-Canvas course in Udacity’s Front-End Web Developer Nanodegree to check out my knowledge of these technologies.<br>Udacity provided the game engine and supported files.<br>► Technologies used: HTML5, HTML5 - Canvas, CSS, JavaScript and JQuery.<br>► Highlights: Collision Mechanics, Game Logic, JavaScript Functions, Classes, Prototypal Classes, Pseudoclassical Patterns and Scopes.",
          images: ["images/Frogger Arcade Game.jpg"],
          url:
            "https://kishorchouhan.github.io/Frogger-Arcade-Game-Udacity-Project/"
        },
        {
          title: "Tic-Tac-Toe Game",
          dates: "2019",
          description:
            "This is a Tic-Tac-Toe game built with React.<br>Features:<br>* Lets you play Tic-Tac-Toe; <br>* Indicates when one player has won the game; <br>* Stores the history of moves during the game;<br>* Allows players to jump back in time to see older versions of the game board; <br><br>I understood some key features of React in this project like: <br>* Passing data through props<br>* Lifting state up<br>* Controlled component",
          images: ["images/Tic-Tac-Toe Game.jpg"],
          url: "https://kishorchouhan.github.io/Tic-Tac-Toe_Game/"
        },
        {
          title: "Online Resume",
          dates: "2019",
          description:
            "An interactive resume application that reads your resume content from a JSON file and dynamically displays that content within a provided template. Further customized the project by personalizing the design using CSS.<br>Created this online Interactive Resume as part of the Project of JavaScript Basics course in Udacity's Front-End Web Developer Nanodegree.<br>► Technologies used: objects, functions, conditionals, and control structures to compose the content that will display on the resume.",
          images: ["images/resume.png"],
          url:
            "https://kishorchouhan.github.io/Interactive_Resume-Udacity_Project/"
        },
        {
          title: "Todo App",
          dates: "2019",
          description:
            "It is a simple Todo web application built with ReactJS.<br>Features:<br>* Lets you add todo; <br>* cross off the todo by clicking on todo if task is complete and vice-versa; <br>* Can delete seperate todo by clicking on delete icon; <br>* Allow user to filter All/Active/Complete todo; <br>* Show no. of todo left; <br>* Allow user to delete all complete todos; <br>* Button available to toggle all complete or active;",
          images: ["images/todo-app.jpg"],
          url: "https://kishorchouhan.github.io/Todo-App-Using-ReactJS/"
        },
        {
          title: "Website Optimization",
          dates: "2019",
          description:
            "• Optimized critical rendering path of an existing web page to increase the PageSpeed Insights score from 60 to over 95 for both mobile and desktop<br>• Applied fixes for inefficiencies of the website scroll animation and image resizing to achieve a consistent 60 frames-per-second.<br>• Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
          images: ["images/pizza.png"],
          url:
            "https://kishorchouhan.github.io/Website-Optimization-Udacity-Project/views/pizza.html"
        },
        {
          title: "Technical Documentation Page",
          dates: "2019",
          description:
            "This is a simple web page documenting Basic JavaScript. It is part of FreeCodeCamp's challenges for Responsive Web Design.<br>In this page, there are a navbar and the page's main content (technical documentation). When clicking on a navbar element, the page should navigate to the corresponding section. On regular sized devices (laptops, desktops), the navbar should be shown on the left side of the screen and should always be visible.<br>► Technologies used: HTML5, CSS(layout: fix / relative / absolute position), media query.",
          images: ["images/Technical Documentation Page.png"],
          url:
            "https://kishorchouhan.github.io/Technical-Documentation-Page-FCC-Project/"
        },
        {
          title: "Cat Clicker App",
          dates: "2019",
          description:
            "Application display a list of at least 5 cats, listed by name, an area to display the selected cat’s name, picture and text showing the number of clicks on picture and an admin button to edit the cat details.<br>Created this app as part of the Project of JavaScript Design Patterns course in Udacity's Front-End Web Developer Nanodegree and learned how to structure the code and build an organized application. In this app, JavaScript is organized within an MVC (Model, View, Controller) architecture.<br>In order to use this app, click on the name of the cat that you would like to see and their picture will appear on the right. Click on the 'Admin' button and three input boxes will appear. These boxes will allow you to change the name of the cat, the picture, and # of clicks on each cats' picture. Click the 'save' button to save your changes to the cat and the 'cancel' button to discard the changes.<br>► Technologies used: JavaScript, CSS, HTML5",
          images: ["images/Cat Clicker Premium Pro.png"],
          url:
            "https://kishorchouhan.github.io/Cat-Clicker-Premium-Pro-Udacity-Project/"
        },
        {
          title: "Personal Portfolio Webpage",
          dates: "2019",
          description:
            "This project is from FreeCodeCamp: Responsive Web Design Course. In this project I have to build a Personal Portfolio Webpage which should be functionally similar to https://codepen.io/freeCodeCamp/full/zNBOYG .",
          images: ["images/Personal Portfolio Webpage.png"],
          url:
            "https://kishorchouhan.github.io/Personal-Portfolio-Webpage-FCC-Project/"
        },
        {
          title: "Moving Planner Website",
          dates: "2019",
          description:
            "This is a project from Udacity Intro To Ajax Course. The project consists of: Getting Values From Form using jQuery, Load Google Street View Image to background, Load article headers from New York Times, Load Wikipedia article headers using JSONP request",
          images: ["images/Moving Planner Website.png"],
          url:
            "https://kishorchouhan.github.io/Moving-Planner-Website-Udacity-Project/"
        },
        {
          title: "News Aggregator Site",
          dates: "2019",
          description:
            "This is a project from Udacity Browser Rendering Optimization course. This is a simple web app that shows the top stories from Hacker News via its API. My mission is to find and fix the issues, and make the app gloriously performant.",
          images: ["images/news aggregator site.png"],
          url:
            "https://kishorchouhan.github.io/News-Aggregator-Site-Udacity-project/"
        },
        {
          title: "Online Portfolio",
          dates: "2019",
          description:
            "In this project, I was required to turn a mock-up into a responsive web page.<br>The site is responsive to different viewport sizes.<br>This project is from FreeCodeCamp: Responsive Web Design Course.<br>► Used: HTML5, CSS3 and Bootstrap's grid system.",
          images: ["images/Portfolio_Profile-Kishor.png"],
          url:
            "https://kishorchouhan.github.io/Portfolio-Profile-Udacity-Project/"
        },
        {
          title: "Gamer's Network",
          dates: "2019",
          description:
            "This is a Gamer's Network project,based on python. This was created as part of Final Project in Udacity's Intro to CS course.",
          images: ["images/Gamers_Network.jpg"],
          url: "https://github.com/kishorchouhan/Gamer-s_Network-Project"
        },
        {
          title: "Movie Website",
          dates: "2019",
          description:
            "This is a Movie Website project,based on python. This was created as part of Final Project in Udacity's Programming Foundations with Python course.",
          images: ["images/Fresh_Tomatoes!.png"],
          url:
            "https://github.com/kishorchouhan/Programming-Foundations-with-Python-ud036"
        },
        {
          title: "Razer Product Landing Page",
          dates: "2019",
          description:
            "This is a Product Landing Page project based on HTML and CSS. This was created as part of Project in Responsive Web Design Certification course at FreeCodeCamp.",
          images: ["images/Razer_Product_landing_page.png"],
          url: "https://kishorchouhan.github.io/FCC-Project3/"
        },
        {
          title: "Survey Form",
          dates: "2019",
          description:
            "This is a 'survay form for programmers' project based on HTML and CSS. This was created as part of Project in Responsive Web Design Certification course at FreeCodeCamp.",
          images: ["images/Survey_Form.png"],
          url: "https://kishorchouhan.github.io/freecodecamp_project2/"
        },
        {
          title: "Tribute Page",
          dates: "2019",
          description:
            "This was my first project i.e. Tribute Page to Shahid Bhagat Singh. Built using HTML and CSS. This was created as part of Project in Responsive Web Design Certification course at FreeCodeCamp.",
          images: ["images/Tribute_Page.png"],
          url: "https://kishorchouhan.github.io/freecodecamp_project1/"
        }
      ]
    },

    educationData: {
      schools: [
        {
          name: "Government Engineering College Bikaner",
          degree: "B.Tech",
          majors: ["Electrical Engineering"],
          dates: "2013-2017",
          location: "Bikaner",
          url: "http://www.ecb.ac.in"
        },
        {
          name: "Udacity Front End Nanodegree",
          degree: "Nanodegree",
          majors: ["Computer Science"],
          dates: "2019",
          location: "Mountain View, CA",
          url: "https://www.udacity.in"
        }
      ],
      onlineCourses: [
        {
          title: "Responsive Web Design Certification",
          school: "FreeCodeCamp",
          dates: "2019",
          url: "https://learn.freecodecamp.org/"
        }
      ]
    }
  };

  /* ======== Octopus ======== */
  var octopus = {
    init: function() {
      viewBio.init();
      viewWork.init();
      viewProject.init();
      viewEdu.init();
    },
    getBioData: function() {
      return model.bioData;
    },
    getWorkData: function() {
      return model.workData;
    },
    getProjectData: function() {
      return model.projectData;
    },
    getEduData: function() {
      return model.educationData;
    }
  };

  /* ======== View ======== */
  var viewBio = {
    init: function() {
      var dataBio = octopus.getBioData();
      this.formattedName = HTMLheaderName.replace("%data%", dataBio.name);
      this.formattedRole = HTMLheaderRole.replace("%data%", dataBio.role);

      this.formattedMobile = HTMLmobile.replace(
        "%data%",
        dataBio.contacts.mobile
      );
      this.formattedEmail = HTMLemail.replace("%data%", dataBio.contacts.email);
      this.formattedGithub = HTMLgithub.replace(
        "%data%",
        dataBio.contacts.github
      );
      this.formattedLinkedin = HTMLlinkedin.replace(
        "%data%",
        dataBio.contacts.linkedin
      );
      this.formattedLocation = HTMLlocation.replace(
        "%data%",
        dataBio.contacts.location
      );

      this.formattedWelcomeMsg = HTMLwelcomeMsg.replace(
        "%data%",
        dataBio.welcomeMessage
      );
      this.formattedBioPic = HTMLbioPic.replace("%data%", dataBio.bioPic);

      viewBio.render();

      if (dataBio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        dataBio.skills.forEach(function(skill) {
          var formattedSkill = HTMLskills.replace("%data%", skill);
          viewBio.renderSkills(formattedSkill);
        });
      }
    },
    render: function() {
      $("#header").prepend(this.formattedRole);
      $("#header").prepend(this.formattedName);

      $("#topContacts").prepend(this.formattedLocation);
      $("#topContacts").prepend(this.formattedLinkedin);
      $("#topContacts").prepend(this.formattedGithub);
      $("#topContacts").prepend(this.formattedEmail);
      $("#topContacts").prepend(this.formattedMobile);

      $("#header").append(this.formattedBioPic);
      $("#header").append(this.formattedWelcomeMsg);

      $("#footerContacts").prepend(this.formattedLinkedin);
      $("#footerContacts").prepend(this.formattedGithub);
      $("#footerContacts").prepend(this.formattedEmail);
    },
    renderSkills: function(formattedSkill) {
      $("#skills").append(formattedSkill);
    }
  };

  var viewWork = {
    init: function() {
      var dataWork = octopus.getWorkData();
      for (var i = 0; i < dataWork.jobs.length; i++) {
        this.formattedEmployer = HTMLworkEmployer.replace(
          "%data%",
          dataWork.jobs[i].employer
        );
        this.formattedTitle = HTMLworkTitle.replace(
          "%data%",
          dataWork.jobs[i].title
        );
        this.formattedEmployerTitle =
          this.formattedEmployer + this.formattedTitle;

        this.formattedDates = HTMLworkDates.replace(
          "%data%",
          dataWork.jobs[i].dates
        );

        this.formattedDescription = HTMLworkDescription.replace(
          "%data%",
          dataWork.jobs[i].description
        );
        viewWork.render();
      }
    },
    render: function() {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(this.formattedEmployerTitle);
      $(".work-entry:last").append(this.formattedDates);
      $(".work-entry:last").append(this.formattedDescription);
    }
  };

  var viewProject = {
    init: function() {
      var dataProject = octopus.getProjectData();
      for (var i = 0; i < dataProject.projects.length; i++) {
        this.formattedUrl = HTMLprojectUrl.replace(
          "%data%",
          dataProject.projects[i].url
        );
        this.formattedTitle = HTMLprojectTitle.replace(
          "%data%",
          dataProject.projects[i].title
        );
        this.formattedProjectTitle = this.formattedUrl + this.formattedTitle;
        /*this.formattedTitle = HTMLprojectTitle.replace("%data%",dataProject.projects[i].title);*/
        this.formattedDates = HTMLprojectDates.replace(
          "%data%",
          dataProject.projects[i].dates
        );
        this.formattedDescription = HTMLprojectDescription.replace(
          "%data%",
          dataProject.projects[i].description
        );
        viewProject.render();

        if (dataProject.projects[i].images.length > 0) {
          for (image in dataProject.projects[i].images) {
            var formattedImage = HTMLprojectImage.replace(
              "%data%",
              dataProject.projects[i].images[image]
            );
            viewProject.renderProjectImg(formattedImage);
          }
        }
      }
    },
    render: function() {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(this.formattedProjectTitle);
      /*$(".project-entry:last").append(this.formattedTitle);*/
      $(".project-entry:last").append(this.formattedDates);
      $(".project-entry:last").append(this.formattedDescription);
    },
    renderProjectImg: function(formattedImage) {
      $(".project-entry:last").append(formattedImage);
    }
  };

  var viewEdu = {
    init: function() {
      this.dataEdu = octopus.getEduData();

      viewEdu.renderSchools();
      viewEdu.renderOnlineCourses();
    },
    renderSchools: function() {
      this.dataEdu.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolTitle = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedSchoolTitle);
        var formattedDate = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDate);
        var formattedLocation = HTMLschoolLocation.replace(
          "%data%",
          school.location
        );
        $(".education-entry:last").prepend(formattedLocation);
        var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajors);
      });
    },
    renderOnlineCourses: function() {
      this.dataEdu.onlineCourses.forEach(function(course) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedCourseTitle = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedCourseTitle);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedURL);
      });
    }
  };

  octopus.init();
})();

$("#mapDiv").append(googleMap);
