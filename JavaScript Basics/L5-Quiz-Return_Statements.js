var work = {
    "jobs": [
      {
        "employer": "Udacity",
        "title": "Course Developer",
        "location": "Mountain View, CA",
        "dates": "Feb 2014 - Current",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      },
      {
        "employer": "LearnBIG",
        "title": "Software Engineer",
        "location": "Seattle, WA",
        "dates": "May 2013 - Jan 2014",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      },
      {
        "employer": "LEAD Academy Charter High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jul 2012 - May 2013",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      },
      {
        "employer": "Stratford High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jun 2009 - Jun 2012",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      }
    ]
  };
  
  // Your code goes here! Let me help you get started
  
  function locationizer(work_obj) {
      var locationArray = [];
      for (var i = 0; i < work_obj.jobs.length; i++) {
          var newLocation = work_obj.jobs[i].location;
          locationArray.push(newLocation);
      }
      return locationArray;
  }
  
  // Did locationizer() work? This line will tell you!
  console.log(locationizer(work));