var helper;

(function() {
    'use strict';
    var model, bridge, view;

    /* All information objects */
    model = {
        // store all arrays with information
        work: {
            'jobs': [{
                'employer': 'City of Vaughan',
                'title': 'Front of House Manager',
                'location': 'Vaughan, Ontario, Canada',
                'date': '07/2014 - present',
                'description': 'I talk to the client who is running the performance, as well as ' +
                    'the theatre technicians, the front of house staff, and the ' +
                    'patrons in order to ensure that everything runs smoothly. ' +
                    'Mainly, it is a matter of keeping things running on time, ' +
                    'making sure everyone is informed about current conditions, and ' +
                    'dealing with situations so as to avoid problems.',
                'url': 'http://www.vaughan.ca/services/cultural/city_playhouse_theatre/Pages/About.aspx'
            }, {
                'employer': 'University of Toronto',
                'title': 'Standardized Patient',
                'location': 'Toronto, Ontario, Canada',
                'date': '10/2014 - present',
                'description': 'This job is involves learning and demonstrating particular ' +
                    'ailments and medical conditions so as to allow medical ' +
                    'students and practitioners to be tested for their knowledge ' +
                    'and aptitude for dealing with a variety of situations. ' +
                    'Due to the sensitive nature of dealing with examinations, ' +
                    'particulars are strictly confidential.',
                'url': 'http://www.spp.utoronto.ca/'
            }, {
                'employer': 'Touchstone Institute',
                'title': 'Standardized Patient',
                'location': 'Toronto, Ontario, Canada',
                'date': '08/2015 - present',
                'description': 'See University of Toronto - Standardized Patient, above.',
                'url': 'http://www.touchstoneinstitute.ca/'
            }, {
                'employer': 'York University',
                'title': 'Studio Monitor',
                'location': 'Toronto, Ontario, Canada',
                'date': '09/2013 - 04/2014',
                'description': 'I was tasked with keeping certainly rooms organized. It was ' +
                    'important to keep track of the dates when tasks were done and ' +
                    'to keep immediate supervisors informed of issues pertaining ' +
                    'to them. This was flexibly scheduled work ' +
                    'that had me working with little insturction. This job ' +
                    'terminated when I finished my degree at York.',
                'url': 'http://theatre.ampd.yorku.ca/'
            }]
        },
        projects: {
            'projects': [{
                'title': 'Toronto Theatre Map',
                'date': '27/01/16 - 23/02/16',
                'description': 'Map that uses Google Maps API to present a number ' +
                    'of live theatre options in a palatable manner.',
                'image': 'dist/images/theatremap.png',
                'url': 'https://github.com/AndreiCommunication/toronto-theatre-map',
                'altText': 'Google Map with Theatre in Toronto title'
            }, {
                'title': 'Jasmine Test Suites',
                'date': '24/02/16 - 25/02/16',
                'description': 'A set of Jasmine Test Suites to check for correct ' +
                    'functionality of a RSS feed reader.',
                'image': 'dist/images/jasmine.png',
                'url': 'https://github.com/AndreiCommunication/feed-reader-testing',
                'altText': 'Jasmine test results display'
            }, {
                'title': 'Tiny Crossing',
                'date': '29/10/15 - 20/11/15',
                'description': 'An object oriented game using JavaScript and HTML 5 canvas. ' +
                    'It is a Frogger clone with increasingly difficult levels.',
                'image': 'dist/images/tiny_crossing.jpeg',
                'url': 'https://github.com/AndreiCommunication/tiny-crossing',
                'altText': 'Screen capture of a frogger-style game'
            }, {
                'title': 'Riddle Game',
                'date': '21/09/15 - 25/09/15',
                'description': 'An object oriented game in Python 2.7. Player walks around to complete ' +
                    'riddles. The game is available on my GitHub account.',
                'image': 'dist/images/riddle_game.jpeg',
                'url': 'https://github.com/AndreiCommunication/riddle-game',
                'altText': 'Screen capture of a text-based game'
            }, {
                'title': 'Optimized Website Project',
                'date': '12/11/15 - 19/01/16',
                'description': 'For this project, a horribly unoptimized portfolio was ' +
                    'presented to me and I made its initial load and the animations on the ' +
                    'linked pizza page work much faster.',
                'image': 'dist/images/optimized_site.jpeg',
                'url': 'https://github.com/AndreiCommunication/Optimized-Portfolio',
                'altText': 'Site segment featuring a randomly generated pizza ingredient list'
            }, {
                'title': 'Portfolio Website',
                'date': '03/09/15 - 05/09/15',
                'description': 'A website set up to showcase web-based projects as they get completed.',
                'image': 'http://placehold.it/550x400',
                'url': 'http://andreicommunication.github.io/portfolio-website',
                'altText': 'Site segment of a Featured Work section in a portfolio website'
            }],
            'current': 0
        },
        bio: {
            'name': 'Andrei Borissenko',
            'role': 'Frontend Web Developer',
            'contacts': {
                'email': 'Andrei.Borissenko@gmail.com',
                'github': 'AndreiCommunication',
                'twitter': '@BreathMachine',
                'location': 'Toronto, Canada'
            },
            'picture': 'dist/images/me.jpg',
            'welcome': 'Develop everyday.',
            'skills': [
                'Python',
                'HTML',
                'CSS',
                'Sass',
                'JavaScript',
                'jQuery',
                'Grunt',
                'Gulp',
                'C',
                'Bash',
                'Jasmine',
                'AJAX',
                'Knockout'
            ],
            'icons': [{
                'icon': 'fa fa-git',
                'url': 'https://github.com/AndreiCommunication'
            }, {
                'icon': 'fa fa-linkedin',
                'url': '#'
            }, {
                'icon': 'fa fa-twitter',
                'url': 'https://twitter.com/BreathMachine'
            }, {
                'icon': 'fa fa-envelope',
                'url': 'mailto:Andrei.Borissenko@gmail.com'
            }]
        },
        education: {
            'schools': [{
                'name': 'York University',
                'location': 'Toronto, Ontario, Canada',
                'degree': 'Bachelor of Fine Arts',
                'majors': [
                    'theatre',
                ],
                'dates': '2014',
                'url': 'http://www.yorku.ca/index.html'
            }],
            'online': [{
                'title': 'JavaScript Design Patterns',
                'school': 'Udacity',
                'dates': '2016',
                'url': 'https://www.udacity.com/courses/ud989'
            }, {
                'title': 'Intro to AJAX',
                'school': 'Udacity',
                'dates': '2016',
                'url': 'https://www.udacity.com/courses/ud110'
            }, {
                'title': 'Browser Rendering Optimization',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/courses/ud860'
            }, {
                'title': 'Website Performance Optimization',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/courses/ud884'
            }, {
                'title': 'HTML5 Canvas',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/courses/ud292'
            }, {
                'title': 'Object-Oriented JavaScript',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/courses/ud015'
            }, {
                'title': 'Intro to jQuery',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/course/viewer#!/c-ud015-nd'
            }, {
                'title': 'JavaScript Basics',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/course/javascript-basics--ud804'
            }, {
                'title': 'How to Use Git and GitHub',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
            }, {
                'title': 'Programming Foundations with Python',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/course/programming-foundations-with-python--ud036'
            }, {
                'title': 'Responsive Images',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/course/responsive-images--ud882'
            }, {
                'title': 'Responsive Web Design Fundamentals',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
            }, {
                'title': 'Intro to HTML and CSS',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
            }, {
                'title': 'Intro to Computer Science',
                'school': 'Udacity',
                'dates': '2015',
                'url': 'https://www.udacity.com/course/intro-to-computer-science--cs101'
            }]
        }
    };

    bridge = {

        init: function() {
            view.init();
        },

        getBio: function(detail) {
            return model.bio[detail];
        },

        getBioContacts: function(detail) {
            return model.bio.contacts[detail];
        },
        getSkills: function() {
            return model.bio.skills;
        },
        getIcons: function() {
            return model.bio.icons;
        },
        getProjects: function() {
            return model.projects.projects;
        },
        getSchools: function() {
            return model.education.schools;
        },
        getOnlineCourses: function() {
            return model.education.online;
        },
        getJobs: function() {
            return model.work.jobs;
        },
        nextProject: function() {
            if (model.projects.current + 1 >= model.projects.projects.length) {
                model.projects.current = 0;
            } else {
                model.projects.current++;
            }
        },
        previousProject: function() {
            if (model.projects.current === 0) {
                model.projects.current = model.projects.projects.length - 1;
            } else {
                model.projects.current--;
            }
        },
        getCurrentProject: function() {
            return model.projects.current;
        },
        peekNextProject: function(starting) {
            if (starting + 1 >= model.projects.projects.length) {
                return 0;
            } else {
                return starting + 1;
            }
        },
        setCurrentProject: function(index) {
            model.projects.current = index;
        }
    };

    view = {
        $body: $('body'),
        $projects: null,
        $projectsNavItems: null,

        /**
         * Set up the view.
         */
        init: function() {

            this.renderBio();
            this.loadProjects();
            this.renderEducation();
            this.renderWork();
            this.renderNav();
            this.setNavListeners();

            $('#mapDiv').append(helper.googleMap);

            // This console.logs click locations as part of the resume assignment.
            $(document).click(function(loc) {
                console.log('x location: ' + loc.pageX, 'y location:' + loc.pageY);
            });

        },

        /**
         * Render the bio at the top in the header and in the footer.
         */
        renderBio: function() {
            var formattedName = helper.HTMLheaderName.replace('%data%', bridge.getBio('name')),
                formattedRole = helper.HTMLheaderRole.replace('%data%', bridge.getBio('role')),
                // formattedMobile = helper.HTMLmobile.replace('%data%', bridge.getBioContacts('mobile')),
                formattedEmail = helper.HTMLemail.replace('%data%', bridge.getBioContacts('email')),
                formattedGithub = helper.HTMLgithub.replace('%data%', bridge.getBioContacts('github')),
                formattedTwitter = helper.HTMLtwitter.replace('%data%', bridge.getBioContacts('twitter')),
                formattedLocation = helper.HTMLlocation.replace('%data%', bridge.getBioContacts('location')),
                formattedBioPic = helper.HTMLbioPic.replace('%data%', bridge.getBio('picture')),
                formattedWelcome = helper.HTMLwelcomeMsg.replace('%data%', bridge.getBio('welcome'));

            $('#header-name').append(formattedName);
            $('#header-title').append(formattedRole);

            // $('#topContacts').append(formattedMobile);
            $('#topContacts').append(formattedEmail);
            $('#topContacts').append(formattedGithub);
            $('#topContacts').append(formattedTwitter);
            $('#topContacts').append(formattedLocation);

            $('#header-photo').append(formattedBioPic);
            $('#header-motto').append(formattedWelcome);

            // Stores both fullName and intName to allow toggle.
            var fullName = $('#name').text();
            var intName = fullName.split(' ');
            intName[1] = intName[1].toUpperCase();
            intName = intName.join(' ');

            // Toggle between fullName and intName for internationalization upon clicking
            // on name.
            $('#name').on('click', function() {
                if ($('#name').text() === fullName) {
                    $('#name').text(intName);
                } else {
                    $('#name').text(fullName);
                }
            });

            var i;
            // Display header skills.
            var usefulSkills = bridge.getSkills();
            var numSkills = usefulSkills.length;
            if (numSkills > 0) {
                $('#header-skill-title').append(helper.HTMLskillsStart);
                for (i = 0; i < numSkills; i++) {
                    $('#header-skills').append(helper.HTMLskills.replace('%data%', usefulSkills[i]));
                }
            }

            // Display footer icons.
            var footerIcons = bridge.getIcons();
            var numIcons = footerIcons.length;
            for (i = 0; i < numIcons; i++) {
                $('#footerContacts').append(helper.HTMLfooterStart);
                var formattedFooter = helper.HTMLfooterContact.replace('%data%', footerIcons[i].icon);
                formattedFooter = formattedFooter.replace('#', footerIcons[i].url);
                $('.footer-entry:last').append(formattedFooter);
            }
        },


        /**
         * Load project related information into view
         */
        loadProjects: function() {

            // helper.HTMLprojectLines create line graphics for displays over 1200px wide, see
            // _media.scss. This is also the case for helper.HTMLworkLine and helper.HTMLeducationLines.
            $('#projects').prepend(helper.HTMLprojectLines);
            // Project object
            var allProjects = bridge.getProjects();
            var numProjects = allProjects.length; // for the 'for' loop
            // DOM calls made before loop. Both are for adding elements to.
            var $projectsCarousel = $('#projects-carousel');
            var $projectsNav = $('#projects-nav');
            var self = this; // needed due to scope issues inside the handlers

            var projectNavHandler = function(index) {
                bridge.setCurrentProject(index);
                self.renderProjects();
            };

            var projectNavListener = function(index) {
                $('.project-nav-item:last').on('click', function() {
                    projectNavHandler(index);
                });
            };

            for (var i = 0; i < numProjects; i++) {
                // Add to the project navigation buttons for the carousel
                var formattedProjectNavItem = helper.HTMLprojectNavItem.replace('%data%', (i + 1).toString());
                $projectsNav.append(formattedProjectNavItem);

                // Give an anchor element a link to github repo of the project
                var formattedProjectStart = helper.HTMLprojectStart.replace('#', allProjects[i].url);
                // Add the anchor to the carousel to hold project info
                $projectsCarousel.append(formattedProjectStart);

                // Add corresponding titles and dates to premade elements
                var formattedProjectTitle = helper.HTMLprojectTitle.replace('%data%', allProjects[i].title),
                    formattedProjectDates = helper.HTMLprojectDates.replace('%data%', allProjects[i].date);
                // formattedProjectDesc = helper.HTMLprojectDescription.replace('%data%', allProjects[i].description),

                // $('.project-nav-item:last').on('click', self.projectNavHandler(self, i));
                // (function(index) {
                //     $('.project-nav-item:last').on('click', function() {
                //         projectNavHandler(index);
                //     });
                // })(i);
                projectNavListener(i);


                // Grab the most recently added project-entry
                var $lastProjectEntry = $('.project-entry:last');
                // Add the title and dates elements we made earlier to it
                $lastProjectEntry.append(formattedProjectTitle);
                $lastProjectEntry.append(formattedProjectDates);
                // Set background image to the project image
                $lastProjectEntry.css('background-image', 'url(' + allProjects[i].image + ')');
            }
            // Set up listeners for next project and previous project buttons on
            // the carousel
            $('.next-project-button').on('click', function() {
                bridge.nextProject();
                self.renderProjects();
            });
            $('.previous-project-button').on('click', function() {
                bridge.previousProject();
                self.renderProjects();
            });
            // Grab all the newly created project nav items for renderProjects
            this.$projectsNavItems = $('.project-nav-item');
            // Grab all the newly created projects in the carousel for
            // renderProjects
            this.$projects = $('.project-entry');
            // Display the projects as they are currently laid out
            this.renderProjects();
        },

        renderProjects: function() {
            // 15 pixels account for gutter so that breakpoints line up with the
            // rendering of additional projects
            var windowWidth = this.$body.width() + 15;
            console.log(windowWidth);
            this.$projects.removeClass('active');
            this.$projectsNavItems.removeClass('active');
            this.$projects.attr('aria-live', 'off');
            var currentProject = bridge.getCurrentProject();
            $(this.$projectsNavItems[currentProject])
                .addClass('active');
            $(this.$projects[currentProject])
                .addClass('active')
                .insertBefore('.project-entry:first')
                .attr('aria-live', 'polite');
            var secondInLine;
            if (windowWidth >= 1200) {
                secondInLine = bridge.peekNextProject(currentProject);
                var thirdInLine = bridge.peekNextProject(secondInLine);
                $(this.$projectsNavItems[secondInLine])
                    .addClass('active');
                $(this.$projectsNavItems[thirdInLine])
                    .addClass('active');
                $(this.$projects[secondInLine])
                    .addClass('active')
                    .insertAfter('.project-entry:first')
                    .attr('aria-live', 'polite');
                $(this.$projects[thirdInLine])
                    .addClass('active')
                    .insertAfter($('.project-entry').eq(1))
                    .attr('aria-live', 'polite');
            } else if (windowWidth >= 768) {
                secondInLine = bridge.peekNextProject(currentProject);
                $(this.$projectsNavItems[secondInLine])
                    .addClass('active');
                $(this.$projects[secondInLine])
                    .addClass('active')
                    .insertAfter('.project-entry:first')
                    .attr('aria-live', 'polite');
            }
        },

        /**
         * Render education related information
         */
        renderEducation: function() {

            $('#education').prepend(helper.HTMLeducationLines);

            var allSchools = bridge.getSchools();
            var numSchools = allSchools.length;
            var i;
            for (i = 0; i < numSchools; i++) {
                $('#education').append(helper.HTMLschoolStart);

                var formattedName = helper.HTMLschoolName.replace('%data%', allSchools[i].name);
                formattedName = formattedName.replace('#', allSchools[i].url);

                var formattedDegree = helper.HTMLschoolDegree.replace('%data%', allSchools[i].degree),
                    formattedDates = helper.HTMLschoolDates.replace('%data%', allSchools[i].dates),
                    formattedLocation = helper.HTMLschoolLocation.replace('%data%', allSchools[i].location),
                    formattedMajor = helper.HTMLschoolMajor.replace('%data%', allSchools[i].majors.join(', '));

                $('.education-entry:last').append(formattedName);
                $('.education-entry:last').append(formattedDegree);
                $('.education-entry:last').append(formattedDates);
                $('.education-entry:last').append(formattedLocation);
                $('.education-entry:last').append(formattedMajor);
            }

            var allOnlineCourses = bridge.getOnlineCourses();
            var numOnlineCourses = allOnlineCourses.length;
            // If there are no online classes, this heading won't be added to the resume
            if (numOnlineCourses > 0) {
                $('#education').append(helper.HTMLonlineClasses);
            }

            for (i = 0; i < numOnlineCourses; i++) {
                $('#education').append(helper.HTMLschoolStart);

                var formattedTitle = helper.HTMLonlineTitle.replace('%data%', allOnlineCourses[i].title);
                formattedTitle = formattedTitle.replace('#', allOnlineCourses[i].url);

                var formattedSchool = helper.HTMLonlineSchool.replace('%data%', allOnlineCourses[i].school);
                var formattedDatesOnline = helper.HTMLonlineDates.replace('%data%', allOnlineCourses[i].dates);

                $('.education-entry:last').append(formattedTitle);
                $('.education-entry:last').append(formattedSchool);
                $('.education-entry:last').append(formattedDatesOnline);
            }
        },

        /**
         * Render work related information
         */
        renderWork: function() {

            var allJobs = bridge.getJobs();
            var numJobs = allJobs.length;
            if (numJobs > 0) {

                $('#workExperience').prepend(helper.HTMLworkLine);

                for (var i = 0; i < numJobs; i++) {
                    $('#workExperience').append(helper.HTMLworkStart);
                    var formattedEmployer = helper.HTMLworkEmployer.replace('%data%', allJobs[i].employer);
                    formattedEmployer = formattedEmployer.replace('#', allJobs[i].url);

                    var formattedTitle = helper.HTMLworkTitle.replace('%data%', allJobs[i].title),
                        formattedEmployerTitle = formattedEmployer + formattedTitle,
                        formattedDates = helper.HTMLworkDates.replace('%data%', allJobs[i].date),
                        formattedLocation = helper.HTMLworkLocation.replace('%data%', allJobs[i].location),
                        formattedDesc = helper.HTMLworkDescription.replace('%data%', allJobs[i].description);

                    $('.work-entry:last').append(formattedEmployerTitle);
                    $('.work-entry:last').append(formattedDates);
                    $('.work-entry:last').append(formattedLocation);
                    $('.work-entry:last').append(formattedDesc);

                }
            }
        },

        /**
         * Navigation should become affixed when we scroll near to the end of
         * the top div.
         */
        renderNav: function() {
            $('#nav-div').affix({
                offset: {
                    top: function() {
                        return (this.top = $('#header').outerHeight(true) - 50);
                    }
                }
            });
        },

        /**
         * Set up listeners that get navigation buttons to scroll to the
         * correct location on the resume.
         */
        setNavListeners: function() {
            // All nav pills
            var $navPills = $('nav li');
            // All nav anchors
            var $navButtons = $('nav a');
            // Avoid making DOM queries during each handler execution
            var $header = $('#header'); // The top element
            var $body = $('body');
            $navButtons.on('click', function() {
                $navPills.removeClass('active');
                $(this).parent().addClass('active');
                // Position where navbar detaches
                var detachPos = $header.outerHeight(true) - 50;
                // Current scroll position
                var currentPos = $body.scrollTop();
                // If we are above the detach point, we should scroll less to
                // make up for the pixels we'll lose when the navigation bar
                // detaches and becomes fixed position.
                var aboveDetach = detachPos >= currentPos;
                if (aboveDetach) {
                    console.log('above');
                    /* Thank you to Joseph Silber on Stackover flow for this
                    nav scroll solution:
                    http://stackoverflow.com/questions/7717527/jquery-smooth-scrolling-when-clicking-an-anchor-link
                    */
                    // Scroll to just above the current offset().top of the
                    // element that corresponds to the href of this button
                    $body.animate({
                        scrollTop: $($.attr(this, 'href')).offset().top - 120
                    }, 500);
                } else {
                    console.log('below');
                    $body.animate({
                        scrollTop: $($.attr(this, 'href')).offset().top - 50
                    }, 500);
                }
                return false; // prevent default
            });
        }

    };

    bridge.init();

    // return model;
    window.resumeBuilder = model;
    window.viewControls = view;

})();
