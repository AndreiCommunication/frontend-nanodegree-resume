var work = {
    "jobs": [
        {
            "employer": "City of Vaughan",
            "title": "Front of House Manager",
            "location": "Vaughan, Ontario",
            "date": "07/2014 - present",
            "description": [
                "I talk to the client who is running a performance, as well as ",
                "the theatre technicians, the front of house staff, and the ",
                "patrons in order to ensure that everything runs smoothly. ",
                "Mainly, it is a matter of keeping things running on time, ",
                "making sure everyone is informed about current conditions, and ",
                "dealing with situations so as to avoid problems."
            ]
        },
        {
            "employer": "University of Toronto",
            "title": "Standardized Patient",
            "location": "Toronto, Ontario",
            "date": "10/2014 - present",
            "description": [
                "This job is involves learning and demonstrating particular ",
                "ailments and medical conditions so as to allow medical ",
                "students and practitioners to be tested for their knowledge ",
                "and aptitude for dealing with a variety of situations. ",
                "Due to the sensitive nature of dealing with examinations, ",
                "particulars are strictly confidential."
            ]
        },
        {
            "employer": "Touchstone Institute",
            "title": "Standardized Patient",
            "location": "Toronto, Ontario",
            "date": "08/2015 - present",
            "description": [
                "See University of Toronto - Standardized Patient, above."
            ]
        },
        {
            "employer": "York University",
            "title": "Studio Monitor",
            "location": "Toronto, Ontario",
            "date": "09/2013 - 04/2014",
            "description": [
                "I was tasked with keeping certainly rooms organized. It was ",
                "important to keep track of the dates when tasks were done and ",
                "to keep immediate supervisors informed of issues pertaining ",
                "to them. This was flexibly scheduled work ",
                "that had me working with little insturction. This job ",
                "terminated when I finished my degree at York."
            ]
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Riddle Game",
            "date": "21/09/15 - 25/09/15",
            "description": [
                "An object oriented game in Python 2.7. Player walks around to complete ",
                "riddles. The game is available on my GitHub account."
            ],
            "image": [
                "images/riddle_game.jpeg"
            ]
        },
        {
            "title": "Portfolio Website",
            "date": "03/09/15 - 05/09/15",
            "description": [
                "A website set up to showcase web-based projects as they get completed."
            ],
            "image": [
                "images/portfolio_site.jpeg"
            ]
        }
    ]
}

projects.display = function() {
  for (i in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].date);
    var concatDescription = "";

    for (sentence in projects.projects[i].description){
      concatDescription = concatDescription + projects.projects[i].description[sentence]
    }

    var formattedProjectDesc = HTMLprojectDescription.replace("%data%", concatDescription);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);

    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDesc);
    $(".project-entry:last").append(formattedProjectImage);
    }
}

var bio = {
    "name": "Andrei Borissenko",
    "role": "Web Developer",
    "contacts": {
        "mobile": "416 508 1951",
        "email": "Andrei.Borissenko@gmail.com",
        "github": "AndreiCommunication",
        "twitter": "@BreathMachine",
        "location": "Toronto"
    },
    "picture": "images/andrei.jpg",
    "welcome": "Bringing communication and humanity, online.",
    "skills": [
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "Grunt",
        "English proficiency",
        "Philosophical reflection"
    ]
}

 var skillsObj = {}

var education = {
    "schools": [
        {
            "name": "York University",
            "location": "Toronto, Canada",
            "degree": "Bachelor of Fine Arts",
            "majors": [
                "theatre"
            ],
            "dates": "09/2010 - 05/2014",
            "url": "http://www.yorku.ca/index.html"
        }
    ],
    "online": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "08/2015 - 09/2015",
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": "07/2015 - 09/2015",
            "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "09/2015 - present",
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "09/2015 - present",
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": "09/2015 - 09/2015",
            "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title": "Programming Foundations with Python",
            "school": "Udacity",
            "dates": "09/2015 - 09/2015",
            "url": "https://www.udacity.com/course/programming-foundations-with-python--ud036"
        },
        {
            "title": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "dates": "08/2015 - 09/2015",
            "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
            "title": "Responsive Images",
            "school": "Udacity",
            "dates": "08/2015 - 09/2015",
            "url": "https://www.udacity.com/course/responsive-images--ud882"
        }
    ]
}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedName = formattedName.replace("#", education.schools[school].url);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors.join(", "));

    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedMajor);
    }
}

var formattedName = HTMLheaderName.replace("%data%", bio.name),
    formattedRole = HTMLheaderRole.replace("%data%", bio.role),
    formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
    formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
    formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
    formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
    formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
    formattedBioPic = HTMLbioPic.replace("%data%", bio.picture),
    formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome)

if (bio.skills.length > 0){
for (i = 0; i < bio.skills.length; i++) {
    skillsObj["formattedSkill" + (i + 1)] = HTMLskills.replace("%data%", bio.skills[i])
}}

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcome);

if (bio.skills.length > 0){
$("#header").append(HTMLskillsStart);
for (i = 0; i < bio.skills.length; i++) {
    $("#skills").append(skillsObj["formattedSkill" + (i + 1)]);
}}

var displayWork = function(){
if (work.jobs.length > 0){
  for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var concatDescription = "";
    for (sentence in work.jobs[job].description){
      concatDescription = concatDescription + work.jobs[job].description[sentence];
    }
    var formattedDesc = HTMLworkDescription.replace("%data%", concatDescription);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDesc);


  }

}
}
displayWork()

projects.display()

education.display()

$("#mapDiv").append(googleMap);

/*
var inName = function (){
  var name = bio.name.trim().split(" ");
  name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name.join(" ")
};
$("#header").append(internationalizeButton);*/



$(document).click(function(loc) {
  console.log("x location: " + loc.pageX, "y location:" + loc.pageY);
});

//$("#workExperience").append(HTMLworkStart);
//$("#workExperience").append(formattedPosition);

//$("#education").append(HTMLschoolStart);
//$("#education").append(formattedSchool);
