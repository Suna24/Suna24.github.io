const lngs = {
  en: { nativeName: "English" },
  fr: { nativeName: "French" },
};

const rerender = () => {
  // start localizing, details:
  // https://github.com/i18next/jquery-i18next#usage-of-selector-function
  $("body").localize();
};

$(function () {
  // use plugins and options as needed, for options, detail see
  // https://www.i18next.com
  i18next
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(i18nextBrowserLanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init(
      {
        debug: true,
        fallbackLng: "en",
        resources: {
          en: {
            translation: {
              nav: {
                home: "Home",
                education: "Education",
                experience: "Professional experiences",
                skills: "Skills",
                projects: "Projects",
                contact: "Contact",
              },
              intro: {
                title: "Welcome to my portfolio",
                cv: "View my CV",
                introducing:
                  "I am Bastien TAROT, a final year engineering student at <b>ESIEA</b>, specializing in <b>Artificial Intelligence & Data Science</b>. Here you will find many projects I have completed during my studies and in my free time!",
                passion:
                  "Although most of the projects you will find here are related to the use of AI, I am also passionate about <b>Cybersecurity</b>, a field in which I am training and completing challenges on the TryHackMe platform.",
                teasing:
                  "Feel free to contact me if you have any questions or if you want to know more about my profile!",
              },
              education: {
                title: "Education",
                description:
                  "You will find below the different stages of my educational path.",
                high_school: {
                  title: "Auguste et Jean Renoir High School in ANGERS",
                  diploma:
                    "Scientific Baccalaureat with a specialization in Computer Science",
                },
                dut: {
                  title: "LAVAL IUT",
                  diploma:
                    "University Diploma of Technology in Computer Science",
                },
                esiea: {
                  title: "ESIEA Laval",
                  diploma:
                    "[In progress] - Engineering Degree<br>Specialization in AI & Data Science",
                },
                transition_to_abroad:
                  "During my studies, I also had the opportunity to complete two semesters abroad.",
                canada: {
                  date: "January - June 2022",
                  title: "CEGEP of Matane, Canada",
                  description:
                    "Study semester in Quebec: Computer Science Techniques",
                },
                croatia: {
                  date: "February - June 2023",
                  title: "University of Zagreb, Croatia",
                  description:
                    "Study semester in Croatia at the Faculty of Computer Science in Varazdin",
                },
              },
              experience: {
                title: "Professional experiences",
                direxyon: {
                  date: "April 2022 - June 2022",
                  job: "Quality Analyst Intern - 10 weeks",
                  description:
                    "Responsible for automating functional tests and detecting anomalies. I contributed to the implementation of test scripts, improving validation processes, and tracking bugs in collaboration with development teams.",
                },
                sncf: {
                  date: "April 2024 - August 2024",
                  job: "AI Intern - 17 weeks",
                  description:
                    "Development of a computer vision and optical character recognition solution for extracting technical information.",
                },
                airbus: {
                  date: "March 2025 - September 2025",
                  job: "Data Scientist Intern - 27 weeks",
                  description:
                    "Design of a generative AI-based tool for generating knowledge graphs applied to system diagnostics. Use of prompt engineering techniques to effectively interact with large language models (LLMs).",
                },
              },
              skills: {
                title: "My skills",
                description:
                  'During my years of studies and my experiences in companies, I have acquired many skills, both technical and human. I have been able to apply these skills in numerous projects that you will find just <a href="#projects">here</a>.',
                ai: '<span class="icon solid major fa-solid fa-hexagon-nodes-bolt"></span><h3>Artificial Intelligence</h3><ul><li>Machine Learning</li><li>Natural Language Processing</li><li>Generative AI</li><li>RAG Architectures</li><li>Computer Vision</li></ul>',
                data: '<span class="icon solid major fa-solid fa-chart-line"></span><h3>Analyzing, preparing, and visualizing data</h3><ul><li>Libraries scikit-learn, numpy, pandas, matplotlib</li><li>Visualization software TABLEAU</li><li>Big Data: Apache Spark</li></ul>',
                programming:
                  '<span class="icon solid major fa-file-code"></span><h3>Developing programs</h3><ul><li>Programming languages: Python, Java, C++, C, SQL</li><li>Object-oriented programming</li></ul>',
                database:
                  '<span class="icon solid major fa-database"></span><h3>Administering and querying databases</h3><ul><li>PL/SQL (Stored Procedures, Views, Rights)</li><li>PostgreSQL, MongoDB, MySQL</li></ul>',
                git: '<span class="icon solid major brands fa-github"></span><h3>Collaborating with Git</h3><ul><li>Git bash</li><li>GitHub & GitLab</li><li>GitHub Desktop</li></ul>',
                virtualization:
                  '<span class="icon solid major brands fa-docker"></span><h3>Virtualization and Deployment</h3><ul><li>Tools: Docker, Ansible, VirtualBox</li><li>CI/CD: GitLab CI, GitHub Actions</li><li>Google Cloud Platform</li><li>MLOps</li></ul>',
                testing:
                  '<span class="icon solid major fa-solid fa-robot"></span><h3>Conducting and automating tests</h3><ul><li>Automation: Selenium, Protractor, Cucumber</li><li>Bug reporting</li><li>Non-regression testing</li></ul>',
                ide: '<span class="icon solid major fa-solid fa-code"></span><h3>Development software</h3><ul><li>Visual Studio Code</li><li>Visual Studio</li><li>Jupyter Notebook</li><li>JetBrains Suite (Intellji, Pycharm, PhpStorm)</li></ul>',
                teamwork:
                  '<span class="icon solid major fa-users"></span><h3>Teamwork & Communication</h3><ul><li>Listening</li><li>Adaptability</li><li>Team spirit</li></ul>',
                management:
                  '<span class="icon solid major fas fa-project-diagram"></span><h3>Project Management</h3><ul><li>SCRUM methods and agile teamwork</li><li>Software: Jira, Trello, Confluence</li></ul>',
              },
              projects: {
                title: "My projects",
                description:
                  "You will find below all the projects I have made during my studies or in my free time. Feel free to click to view each project in more detail!",
                filters: {
                  all: "All",
                  ai: "AI/Data",
                  game: "Games",
                  app: "Applications",
                },
                know_more: "Know more",
                source_code: "Source code",
                rushhour: {
                  title: "Rush Hour",
                  description:
                    "Small mobile application based on the Rush Hour board game coded in Java.",
                  full_description:
                    "The goal of this project was to create an Android application in the form of a small game. I chose to draw inspiration from the Rush Hour board game to create it. It is a game where the player must get the white car off the board. However, other cars block the way. The player must then move the other cars to free the white car from the board by pressing on the front of the vehicle if they want to move it forward and vice versa if they want to move it backward. The game features a score table with a star system, 40 unique levels, and music!",
                  technical_title: "Technical Aspects",
                  technical_description:
                    "To create this project, I used the Java programming language and the Android Studio development environment. I also worked with Firebase for score management and star saving. The game also connects to Google the first time you launch it.",
                  photos_title: "Some photos of the application",
                  where_to_find_title: "Where to find our project?",
                  where_to_find_description:
                    'If you want to see the source code of this game or even download it to play, you can find the GitHub repository via <a href="https://github.com/Suna24/Rush_Hour">this link</a>.',
                  maintenance_title: "Maintenance & Technological Watch",
                  maintenance_description:
                    "During my studies, I had the opportunity to perform maintenance on this application to improve it. I focused on finding a feature that could make my application more appealing to users. There was already a score system in my application, where if a player completed a level within a certain time, they would earn stars that were saved on Firebase. However, the player had no limit on accumulating stars, meaning they could repeatedly play the same level and increase their star count as much as they wanted. I decided to address this by saving the number of stars for each level and displaying the star count under the level buttons. I also cleaned up and refactored some code to make it more readable.",
                  technological_watch_title: "Technological Watch",
                  technological_watch_description:
                    "To implement this new feature and save user scores, I had to choose between two methods. The first was to save user scores directly on their internal local storage, while the second was to store and host these scores on Firebase.",
                  local_storage: {
                    title: "Local Storage",
                    description:
                      "Storing information locally has several advantages. Indeed, wherever the user is and even if they do not have an internet connection, their scores are saved on their device. Additionally, storing data on the user's device is entirely free and only requires permission from the user. Finally, access to data is fast, and security is enhanced. However, storing this data internally takes up space on the user's device, even though in this case, the file does not take up much space. The second drawback of this method is that you cannot interact with other players' scores, which can be problematic if you want to create a leaderboard of top scores, for example.",
                  },
                  firebase: {
                    title: "Firebase",
                    description:
                      "On the other hand, storing data using hosting services like Firebase requires an internet connection to function. However, storing data on Firebase allows real-time access to all players' scores, enabling the creation of a leaderboard for top scores or best times among all players playing Rush Hour.",
                  },
                  comparative_analysis:
                    "Both methods of storing player scores have their strengths and weaknesses. However, since I implemented a feature that establishes a leaderboard for top players using Firebase, I preferred to stick with this method of data storage, especially since I know how to use the API provided by Firebase for Android.",
                },
                citydex: {
                  title: "CityDex",
                  description:
                    "Java coded mobile application for collecting city signs.",
                  full_description:
                    "As part of a semester project, we had to create an Android mobile application similar to a Pokédex, cataloging photos taken by the user grouped around a theme: city signs. It is important to note that this application only deals with city signs in France, including both mainland France and overseas territories (Mayotte, La Réunion, Saint Pierre and Miquelon…). The application is named CityDex. The user collects city signs in their CityDex, with the goal of having as many as possible.",
                  details_description:
                    "This application allows users to catalog the different cities they have visited and provides proof of their visits through photos of city signs. The application also aims to provide various information to users about the cities from which they have taken photos.",
                  technical_title: "Technical Aspects",
                  technical_description:
                    "For this project, we had to use the Java programming language and Android Studio as the development environment. To recognize a sign in an image, we trained a TensorFlow model with over 250 labeled images of signs. We also used the Tesseract library for character recognition to identify the city name on the sign.",
                  photos_title: "Some photos of the application",
                  where_to_find_title: "Where to find our project?",
                  where_to_find_description:
                    'You can access the source code of our application directly via  <a href="https://github.com/TLBail/CityDex">this link</a> or download the application directly from the Play Store by searching for CityDex!',
                  maintenance_title: "Maintenance & Technological Watch",
                  maintenance_description:
                    "During my studies, I had to put this application into maintenance to fix some bugs and improve some user interfaces. I specifically worked on making the interfaces adaptable to a wide range of devices and screens. I also decided to add a new feature to the application: a notification system. The user is notified upon launching the application if they are in a city for which they do not have the sign, using location services to retrieve the user's coordinates, deduce the city they are in, and send a notification. I also ensured that the dark mode did not affect the application, as it caused interface issues, and I participated in refactoring the application.",
                  technological_watch_title: "Technological Watch",
                  technological_watch_description:
                    'To implement this new feature, I had two options: either use the notification system provided by the classes already implemented in the <a href="https://developer.android.com/training/notify-user/build-notification">Android SDK</a> or use a library to import into the application, such as the one from <a href="https://camposha.info/android-examples/android-notification-libraries/">Camposha.info</a>. I conducted a technological watch on each of these technologies to determine which would be best suited for implementing this new feature.',
                  android_sdk: {
                    title: "Android SDK Notification",
                    description:
                      'The notification system is "pre-installed" in the Android SDK, so there is no need to import anything into the application. Additionally, the Android SDK has very good documentation, making it relatively easy to navigate through all the functions and attributes. Many tutorials and projects are available, so if I encounter any issues, I can quickly find an effective solution.',
                  },
                  camposha: {
                    title: "Camposha Library",
                    description:
                      "The Camposha library also seems suitable for implementing the notification system. However, it is a library, so it needs to be imported into the application. On the other hand, the library offers a much simpler way to create and manage notifications, making it easier to understand and use.",
                  },
                  comparative_analysis:
                    "In conclusion, both technologies have their advantages and disadvantages. Importing the Camposha library would increase the size of the application, even though it is easier to use. Since the notification system I want to implement is not complex or lengthy, the notification system provided by the Android SDK is sufficient.",
                },
                cocktails: {
                  title: "Cocktails",
                  description:
                    "Website referencing different cocktails and allowing the search for a cocktail and various ingredients.",
                  full_description:
                    "This project aimed to apply our skills on the server-side web development. We decided to create a website listing cocktails with various information from a database and allowing users to search for a cocktail by name or find cocktails they can make based on ingredients (filtering system).",
                  technical_title: "Technical Aspects",
                  technical_description:
                    "We developed this project using HTML5 and CSS3 on the client side, and PHP along with a PHPMyAdmin database on the server side. During user search operations, we implemented Ajax to ensure that only parts of the page are reloaded dynamically with each request, providing a better user experience. Our website is hosted on a Raspberry Pi owned by one of our team members.",
                  photos_title: "Some photos of the website",
                  where_to_find_title: "Where to find our project?",
                  where_to_find_description:
                    'You can access to the website by following <a href="http://cocktailproject.ddns.net/">this link</a>. If you also want to see the source code, it is available via <a href="https://github.com/Suna24/Cocktails">this link</a>.',
                  maintenance_title: "Maintenance & Technological Watch",
                  maintenance_description:
                    "During my studies, I had to perform maintenance on this project. After some thought, I decided to implement two new features for the website. The first was the ability to add a cocktail to the database through a new page on the site. However, since the site is publicly accessible, it was necessary to validate user input. While waiting for a (future) user and admin account system, I chose to protect this page with a password and prevent any input of characters that could compromise the database.<br/ > The second feature I decided to implement is a like/dislike system for each of the proposed cocktails, allowing users to see which cocktails are most liked by others.",
                  technological_watch_title: "Technological Watch",
                  technological_watch_description:
                    'In order to implement these two features, I had to consider which technologies to use. For the cocktail addition system, I chose to reuse the technologies we had previously used for the project, namely PHP and forms. By sending a cocktail object as JSON via a POST request (generated with JavaScript), PHP retrieves the data and uses it to insert a new cocktail into the database, handling all foreign key relationships between the different database tables. As a result, I did not conduct any technology watch for implementing this feature.<br/> However, for the implementation of the like/dislike system, I had to choose between two technologies: the first being <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started">Ajax</a> and the second <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket">WebSockets</a>. Indeed, to ensure a smooth user experience, the page needed to avoid full reloads with each like or dislike, while still updating the data in the database accordingly.',
                  ajax: {
                    title: "AJAX",
                    description:
                      "The AJAX technology (Asynchronous JavaScript + XML) is a technology I am already proficient in and have previously used in this project, particularly for displaying cocktails based on different sorting criteria, such as selecting cocktails according to the ingredients chosen by the user. AJAX uses the HTTP protocol and is triggered by a client request to the server, which then sends a response back to the client, after which the connection ends. This technology is suitable when there is not a large volume of data to transfer (which is currently our case).",
                  },
                  websockets: {
                    title: "WebSockets",
                    description:
                      "WebSockets is a technology I am not yet familiar with, or only know very little about (I am currently working on a project that uses it and I'm in the process of learning it). However, it is also useful for real-time communication with the database. The connection remains open, allowing continuous data exchange between the client and the server. WebSocket is therefore more efficient in terms of speed and performance, as there is no need to establish a new connection for each request. Nevertheless, this technology is generally less secure than AJAX, although it is possible to configure an encrypted socket.",
                  },
                  comparative_analysis:
                    "Both AJAX and WebSockets are interesting technologies to use, each with their own specific features. However, for reasons of simplicity and consistency with what we had previously done, I decided to use AJAX, as it is a technology I know and master, and it is generally more secure than WebSockets. Moreover, I don't necessarily need to establish a permanent connection with the server and the database (which WebSockets allows), since the volume of data being transmitted (an update to a column in a table) is very small.",
                },
                lethal_league: {
                  title: "Lethal League",
                  description:
                    "Scientific and Technical Project: Projectile battle game developed in Python with Pygame.",
                  full_description:
                    'In the context of a scientific and technical project, we had to develop an arcade-type game in Python. We decided to recreate the game of the same name: <a href="https://store.steampowered.com/app/553310/Lethal_League_Blaze/?l=french">Lethal League</a>. It is a ball game where the goal is to hit the ball with your bat to make it accelerate and hit your opponent. The game allows you to choose from 6 different characters, each with its own characteristics.',
                  technical_title: "Technical Aspects",
                  technical_description:
                    "The game was developed using Python and Pycharm integrated development environment. We used the Pygame library to create the game, which allowed us to manage graphics, sounds, and user interactions easily.",
                  photos_title: "Some photos of the game",
                },
                octopus: {
                  title: "Octopus",
                  description:
                    "Scientific and Technical Project: Development of a white station with Javascript, Bash, and Ansible.",
                  full_description:
                    "As part of my 4th-year scientific and technical project at ESIEA, we had to take over an existing project of a white station. A white station is a device specially designed to analyze and examine the contents of USB drives securely and without alteration. The station then takes care of removing any malicious files from the drive. The project is entirely open-source. This white station was eventually deployed at the <b>General Secretariat for the Administration of the Ministry of the Interior (SGAMI)</b> in Rennes by one of my teammates during his 4th-year internship.",
                  how_it_works: "How it works",
                  how_it_works_description:
                    "The operation of the station is as shown in the image below. There are three different machines here: the Octopus station, where the user plugs in their USB drive, which features a web interface; the controller, a machine that updates the station (and potentially all networked stations afterwards); and finally, the log server, which stores the station's data once the USB drive analysis is complete. The Octopus white station can accommodate up to four USB drives simultaneously.",
                  objectives_title: "Objectives of the project",
                  objectives_description:
                    "We established 3 major objectives to achieve for the first semester: <ul><li>Redesign of the graphical interface</li><li>Improvement of the deployment</li><li>Addition of new antivirus programs selected by the controller</li></ul>",
                  technical_title: "Technical Aspects",
                  technical_description:
                    "The original white station was primarily developed in Bash; deployment is handled with Ansible, and the station's web interface was built using NodeJS and Vue.js. After taking over the project, we decided to rebuild the graphical interface with React and redo the backend due to a deprecated library that made the work very complicated.",
                  poster_title: "Poster of the project",
                },
                hearthstone: {
                  title: "Hearthstone BattleGround",
                  description:
                    "Project developed in C++ as part of the object-oriented programming course.",
                },
                ml_challenge: {
                  title: "Machine Learning Challenge",
                  description:
                    "Development of an AI model for emotion recognition on a human face.",
                },
                nlp: {
                  title: "Natural Language Processing: Toxicity Detection",
                  description:
                    "Development and fine-tuning of a large language model specialized in detecting toxicity in text conversations.",
                },
                breast_cancer: {
                  title: "Research Project: The Use of AI in the Medical Field",
                  description:
                    "Prediction of local sequelae pain from breast radiotherapy treatments using Bayesian networks.",
                  rgpd: "The source code is not available for reasons related to the <b>General Data Protection Regulation (GDPR)</b>",
                },
                optimization: {
                  title: "Combinatorial Optimization",
                  description:
                    "Creation of algorithms for solving a complex NP problem: Finding a maximum clique in a graph.",
                },
              },
              contact: {
                title: "Contact",
                description:
                  "If you have any questions or want to know more about my profile, feel free to contact me directly using my email address or on LinkedIn.",
                phone: "Phone",
              },
            },
          },
          fr: {
            translation: {
              nav: {
                home: "Accueil",
                education: "Formation",
                experience: "Expériences professionnelles",
                skills: "Compétences",
                projects: "Projets",
                contact: "Contact",
              },
              intro: {
                title: "Bienvenue sur mon portfolio",
                cv: "Voir mon CV",
                introducing:
                  "Je suis Bastien TAROT, étudiant en dernière année d'école d'ingénieur à <b>l'ESIEA</b>, avec une spécialisation en <b>Intelligence Artificielle & Data Science</b>. Vous trouverez ici, de nombreux projets que j'ai pu réaliser durant mes années d'études et sur mon temps libre !",
                passion:
                  "Bien que la majorité des projets que vous trouverez ici soient liés à l'utilisation de l'IA, je suis également passionné par la <b>Cybersécurité</b>, domaine dans lequel je me forme et réalise des challenges sur la plateforme TryHackMe.",
                teasing:
                  "N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez en savoir plus sur mon profil !",
              },
              education: {
                title: "Formation",
                description:
                  "Vous trouverez ci-dessous les différentes étapes de mon parcours scolaire.",
                high_school: {
                  title: "Lycée Auguste et Jean Renoir à ANGERS",
                  diploma:
                    "Baccalauréat Scientifique spécialité Informatique et Sciences du Numérique",
                },
                dut: {
                  title: "IUT de LAVAL",
                  diploma:
                    "Diplôme Universitaire de Technologie en Informatique",
                },
                esiea: {
                  title: "ESIEA Laval",
                  diploma:
                    "[En cours] - Diplôme d'ingénieur<br>Majeure IA & Data Science",
                },
                transition_to_abroad:
                  "Durant mon cursus, j'ai également eu l'opportunité de réaliser deux semestres d'études à l'étranger.",
                canada: {
                  date: "Janvier - Juin 2022",
                  title: "CEGEP de Matane, Canada",
                  description:
                    "Semestre d'étude au Québec : Techniques de l'informatique",
                },
                croatia: {
                  date: "Février - Juin 2023",
                  title: "Université de Zagreb, Croatie",
                  description:
                    "Semestre d'étude en Croatie à la Faculté d'informatique de Varazdin",
                },
              },
              experience: {
                title: "Expériences professionnelles",
                direxyon: {
                  date: "Avril 2022 - Juin 2022",
                  job: "Stagiaire Analyste Qualité - 10 semaines",
                  description:
                    "Responsable de l'automatisation des tests fonctionnels et de la détection des anomalies. J'ai contribué à la mise en place de scripts de test, à l'amélioration des processus de validation et au suivi des bugs en collaboration avec les équipes de développement.",
                },
                sncf: {
                  date: "Avril 2024 - Août 2024",
                  job: "Stagiaire IA - 17 semaines",
                  description:
                    "Développement d'une solution de vision par ordinateur et de reconnaissance optique de caractères pour l'extraction d'informations techniques.",
                },
                airbus: {
                  date: "Mars 2025 - Septembre 2025",
                  job: "Stagiaire Data Scientist - 27 semaines",
                  description:
                    "Conception d'un outil basé sur l'IA générative pour la génération de graphes de connaissances appliqués au diagnostic système. Utilisation de techniques de prompt engineering pour intéragir efficacement avec des grands modèles de langage (LLM).",
                },
              },
              skills: {
                title: "Mes compétences",
                description:
                  "Durant mes années de formation et mes expériences en entreprises, j'ai pu acquérir de nombreuses compétences aussi bien informatiques et techniques qu'humaines. J'ai pu mettre en application ces compétences lors de nombreux projets que vous trouverez juste <a href=\"#projects\">ici</a>.",
                ai: '<span class="icon solid major fa-solid fa-hexagon-nodes-bolt"></span><h3>Intelligence Artificielle</h3><ul><li>Apprentissage Machine</li><li>Traitement du langage natural</li><li>IA générative</li><li>Architectures RAG</li><li>Vision par ordinateur</li></ul>',
                data: '<span class="icon solid major fa-solid fa-chart-line"></span><h3>Analyser, préparer et visualiser des données</h3><ul><li>Librairies scikit-learn, numpy, pandas, matplotlib</li><li>Logiciel de visualisation TABLEAU</li><li>Big Data : Apache Spark</li></ul>',
                programming:
                  '<span class="icon solid major fa-file-code"></span><h3>Développer des programmes</h3><ul><li>Langages de programmation : Python, Java, C++, C, SQL</li><li>Programmation orientée objet</li></ul>',
                database:
                  '<span class="icon solid major fa-database"></span><h3>Administrer et requêter des bases de données</h3><ul><li>PL/SQL (Procédures stockées, Vues, Droits)</li><li>PostgreSQL, MongoDB, MySQL</li></ul>',
                git: '<span class="icon solid major brands fa-github"></span><h3>Collaborer avec Git</h3><ul><li>Git bash</li><li>GitHub & GitLab</li><li>GitHub Desktop</li></ul>',
                virtualization:
                  '<span class="icon solid major brands fa-docker"></span><h3>Virtualisation et Déploiement</h3><ul><li>Outils : Docker, Ansible, VirtualBox</li><li>CI/CD : GitLab CI, GitHub Actions</li><li>Google Cloud Platform</li><li>MLOps</li></ul>',
                testing:
                  '<span class="icon solid major fa-solid fa-robot"></span><h3>Conduite et automatisation de tests</h3><ul><li>Automatisation : Selenium, Protractor, Cucumber</li><li>Remontée de bugs</li><li>Tests de non-regression</li></ul>',
                ide: '<span class="icon solid major fa-solid fa-code"></span><h3>Logiciel de développement</h3><ul><li>Visual Studio Code</li><li>Visual Studio</li><li>Notebook Jupyter</li><li>Suite JetBrains (Intellji, Pycharm, PhpStorm)</li></ul>',
                teamwork:
                  "<span class=\"icon solid major fa-users\"></span><h3>Travail d'équipe & Communication</h3><ul><li>A l'écoute</li><li>Adaptabilité</li><li>Esprit d'équipe</li></ul>",
                management:
                  '<span class="icon solid major fas fa-project-diagram"></span><h3>Gestion de projet</h3><ul><li>Méthodes SCRUM et fonctionnement agile</li><li>Logiciels Jira, Trello, Confluence</li></ul>',
              },
              projects: {
                title: "Mes projets",
                description:
                  "Vous trouverez ci-dessous tous les projets que j'ai pu réaliser durant ma formation ou sur mon temps libre. N'hésitez pas à cliquer pour regarder chaque projet plus en détails !",
                filters: {
                  all: "Tous",
                  ai: "IA/Data",
                  game: "Jeux",
                  app: "Applications",
                },
                know_more: "En savoir plus",
                source_code: "Code source",
                rushhour: {
                  title: "Rush Hour",
                  description:
                    "Petite application mobile basée sur le jeu de société Rush Hour codée en Java.",
                  full_description:
                    "Le but de ce projet était de réaliser une application Android sous la forme d'un petit jeu. J'ai donc choisi de m'inspirer du jeu de société Rush Hour pour réaliser ce dernier. Il s'agit d'un jeu où le joueur doit faire sortir la voiture blanche du plateau. Seulement d'autres voitures bloquent le passage. Le joueur doit alors faire bouger les autres voitures pour libérer la blanche du plateau en appuyant sur l'avant du véhicule s'il souhaite la bouger vers l'avant et inversement s'il veut la faire se mouvoir vers l'arrière. Le jeu dispose d'un tableau des scores avec un système d'étoiles, de 40 niveaux uniques, ainsi que de musiques !",
                  technical_title: "Aspects Techniques",
                  technical_description:
                    "Pour réaliser ce projet, j'ai utilisé le langage Java et l'environnement de développement Android Studio. J'ai également travaillé avec Firebase pour la gestion des scores et l'enregistrement du nombre d'étoiles. Le jeu propose également une connection à Google la première fois que vous lancez le jeu.",
                  photos_title: "Quelques photos de l'application",
                  where_to_find_title: "Où trouver notre projet ?",
                  where_to_find_description:
                    'Si vous voulez voir le code source de ce jeu ou bien même le télécharger pour pouvoir y jouer, vous trouver le repository Github via <a href="https://github.com/Suna24/Rush_Hour">ce lien</a>.',
                  maintenance_title: "Maintenance & Veille Technologique",
                  maintenance_description:
                    "Durant ma formation, j'ai eu l'occasion de faire une maintenance sur cette application afin de l'améliorer. Je me suis donc attaché à trouver une fonctionnalité qui pourrait rendre mon application plus attirante pour les utilisateurs. Il y avait déjà un système de scores dans mon application, si un joueur réussissais un niveau dans un temps imparti il récupérait un certains nombre d'étoiles qui était ensuite sauvegardé sur Firebase. Néanmoins le joueur n'avait pas de limite quant à l'accumulation des étoiles, c'est à dire qu'il pouvait enchainer le même niveau et incrémenter son nombre d'étoiles autant qu'il le souhaitait. J'ai donc décidé d'y remédier en sauvegardant le nombre d'étoiles pour chaque niveau et afficher ensuite sous les boutons de niveau le nombre d'étoile que possède le joueur. J'ai également décidé de nettoyer et de refactoriser un peu de code pour le rendre plus lisible.",
                  technological_watch_title: "Veille technologique",
                  technological_watch_description:
                    "Afin d'implémenter cette nouvelle fonctionnalité et sauvegarder les scores des utilisateurs, j'ai du me décider entre deux moyens. Le premier était de sauvegarder les scores des utilisateurs directement sur leur stockage local interne, le second était de stocker et d'heberger ces scores sur Firebase.",
                  local_storage: {
                    title: "Stockage local",
                    description:
                      "Le stockage en local des informations présente plusieurs avantages. En effet, où que l'utilisateur se trouve et même s'il ne dispose pas de connexion internet, ses scores sont sauvegardés sur son appareil. De plus stocker des données sur l'appareil de l'utilisateur est entièrement gratuit et nécessite seulement une permission de la part de l'utilisateur. Enfin, l'accès aux données est rapide et la sécurité renforcée. Néanmoins, stocker ces données en interne prend de la place sur l'appareil de l'utilisateur même si ici, le fichier n'en prend pas beaucoup. Le second inconvénient de ce moyen et qu'on ne peut pas intéragir avec les scores des autres joueurs, ce qui peut poser problème si on souhaite faire un classement des meilleurs scores par exemple.",
                  },
                  firebase: {
                    title: "Firebase",
                    description:
                      "En revanche, le stockage des données grâce à des services d'hébergement comme Firebase nécessite une connexion à internet pour fonctionner. Cependant, stocker ses données sur Firebase permet d'accéder en temps réel aux scores de tous les joueurs et par conséquent d'établir un classement des meilleurs scores ou des meilleurs temps et ce parmi tous les joueurs jouant à Rush Hour.",
                  },
                  comparative_analysis:
                    "Les deux manières de stocker les scores des joueurs ont chacunes leurs atouts et leurs défauts, néanmoins, étant donné que j'ai implémenté une fonctionnalité établissant un classement des meilleurs joueurs avec Firebase, j'ai préféré rester avec ce même moyen de sauvegarde des données, d'autant que je sais comment utiliser l'API proposée par Firebase pour Android.",
                },
                citydex: {
                  title: "CityDex",
                  description:
                    "Application mobile de collection de panneaux d'agglomération codée en Java.",
                  full_description:
                    "Dans le cadre d'un projet de semestre, nous avons du créer une application mobile android de type pokédex répertoriant des photos prises par l'utilisateur regroupées autour d'une thématique : les panneaux d'agglomérations. Il est important de noter que cette application traite seulement des panneaux d'agglomération sur le territoire français regroupant donc la métropole française mais aussi les territoires d'outre mer (Mayotte, La Réunion, Saint Pierre et Miquelon…). L'application a pour nom CityDex. L'utilisateur collectionne donc des panneaux dans son CityDex, l'objectif étant d'en avoir le plus possible.",
                  details_description:
                    "Cette application permet aux utilisateurs de répertorier les différentes villes où ils sont allés, et d'avoir pour preuve les panneaux d'agglomérations. Cette application a aussi pour but de fournir diverses informations aux utilisateurs sur les villes dont ils ont pris le panneau en photo.",
                  technical_title: "Aspects Techniques",
                  technical_description:
                    "Nous avons du pour ce projet utiliser le langage Java et le logiciel Android Studio comme environnement de développement. Pour reconnaître un panneau dans une image, nous avons entraîné un modèle TensorFlow avec plus de 250 images de panneaux que nous avons labelisées. Nous avons également utilisé la librairie Tesseract pour la reconnaissance de caractère et ainsi reconnaître le nom de la ville sur le panneau.",
                  photos_title: "Quelques photos de l'application",
                  where_to_find_title: "Où trouver notre projet ?",
                  where_to_find_description:
                    'Vous pouvez avoir accès directement au code source de notre application via <a href="https://github.com/TLBail/CityDex">ce lien</a> mais également télécharger l\'application directement sur le PlayStore en écrivant CityDex dans la barre de recherche !',
                  maintenance_title: "Maintenance & Veille Technologique",
                  maintenance_description:
                    "Durant ma formation, j'ai du mettre cette application en maintenance afin de corriger quelques bugs ou améliorer certaines interfaces utilisateurs. J'ai notamment essayé à ce que les interfaces soient adaptables au plus grand nombre d'appareils et d'écrans possibles. J'ai également décidé d'ajouter une nouvelle fonctionnalité à l'application : un système de notification. L'utilisateur est donc prévenu au lancement de l'application s'il se trouve dans une ville dont il ne possède pas le panneau grâce à la localisation qui va récupérer les coordonnées de l'utilisateur, en déduire la ville où il se trouve et envoyer un notification. J'ai également fais en sorte que le mode nuit n'impacte pas sur l'application étant donné qu'il causait des problèmes d'interfaces et j'ai participé à un refactoring de l'application.",
                  technological_watch_title: "Veille technologique",
                  technological_watch_description:
                    "Afin d'implémenter cette nouvelle fonctionnalité, je disposais de deux choix, soit j'utilisais le système de notifications grâce aux classes déjà implémentées dans le <a href=\"https://developer.android.com/training/notify-user/build-notification\">SDK Android</a> ou bien une librairie à importer dans l'application comme celle de <a href=\"https://camposha.info/android-examples/android-notification-libraries/\">Camposha.info</a> par exemple. J'ai donc procédé à une veille technologique sur chacune de ces technologies afin de déterminer laquelle conviendrai le mieux pour réaliser cette nouvelle fonctionnalité.",
                  android_sdk: {
                    title: "Notification du SDK Android",
                    description:
                      "Le système de notification est \"pré-installé\" dans le SDK Android, il n'y a donc pas besoin d'importer quoi que ce soit dans l'application. De plus, le SDK Android possède une très bonne documentation et il est plutôt simple de s'y retrouver parmi toutes les fonctions et attributs. De nombreux tutoriels et de projets sont disponibles, donc si j'ai un quelconque problème, je n'aurais pas de mal à trouver une solution efficace rapidement.",
                  },
                  camposha: {
                    title: "Librairie Camposha",
                    description:
                      "La librarie Camposha semble également adaptée pour implémenter le système de notification. Néanmoins, il s'agit d'une librairie, par conséquent il faut l'importer dans l'application. En revanche, la librarie propose une version beaucoup plus simplifiée pour la création et la gestion de notifications ce qui la rend plus simple à comprendre et à utiliser.",
                  },
                  comparative_analysis:
                    "Pour conclure, les deux technologies présentent leurs avantages et leur inconvénients. Importer la librarie Camposha augmenterait la taille de l'application malgré le fait qu'elle soit plus simple à utiliser. Étant donné que le système de notification que je souhaite implémenter n'est pas complexe, ni très long, le système de notification fourni par le SDK Android est suffisant.",
                },
                cocktails: {
                  title: "Cocktails",
                  description:
                    "Site Internet référançant différents cocktails et offrant la possibilité de recherche un cocktail et différents ingrédients.",
                  full_description:
                    "Ce projet avait pour but de mettre en application nos compétences côté Web serveur. Nous avons donc décidé de faire un site internet listant des cocktails avec différentes informations à partir d'une base de données et la possibilité pour l'utilisateur de chercher un cocktail par son nom ou de chercher les cocktails qu'il est possible de réaliser à partir d'ingrédients rentrés par l'utilisateur (système de critères de tri).",
                  technical_title: "Aspects Techniques",
                  technical_description:
                    "Nous avons réalisé ce projet avec, côté client HTML5 et CSS3 et côté serveur le langage PHP ainsi qu'une base de données PHP MyAdmin. Nous avons mis en place lors des recherches utilisateurs de l'Ajax pour que les requêtes se fassent dynamiquement et qu'une seule partie de la page soit rechargée à chaque requête pour une meilleure expérience utilisateur. Notre site web est hébergé sur un raspbery py dont dispose un collaborateur.",
                  photos_title: "Quelques photos du site",
                  where_to_find_title: "Où trouver notre projet ?",
                  where_to_find_description:
                    'Vous pouvez avoir accès au site internet en suivant directement <a href="http://cocktailproject.ddns.net/">ce lien</a>. Si vous souhaitez regarder le code source, il est disponible directement via <a href="https://github.com/Suna24/Cocktails">ce lien.</a>',
                  maintenance_title: "Maintenance & Veille Technologique",
                  maintenance_description:
                    "Durant ma formation, j'ai du mettre ce projet en maintenance. Après réflexion, j'ai décidé d'implémenter deux nouvelles fonctionnalités pour ce site internet. La première étant la possibilité d'ajouter un cocktail à la base de données à l'aide d'une nouvelle page sur le site. Néanmoins, comme ce site est accessible à tous en public, il fallait vérifier les insertions des utilisateurs. En attente d'un (futur) système de comptes administrateurs et utilisateurs, j'ai décidé de rendre accessible cette page à l'aide d'un mot de passe et d'empêcher toute saisie de caractères dans les inputs qui pourraient altérer les données de la base de données.<br/> La seconde fonctionnalité que j'ai décidé d'implémenter est un système de like/dislike pour chacun des cocktails proposés, l'utilisateur peut alors voir quels sont les cocktails préférés des autres utilisateurs.",
                  technological_watch_title: "Veille technologique",
                  technological_watch_description:
                    "Afin d'implémenter ces deux fonctionnalités, j'ai du réfléchir à quelles technologies j'allais utiliser. Pour le système d'ajout de cocktails dans la base de données, j'ai décidé de réutiliser les technologies que l'on avait utilisées pour le projet c'est à dire le PHP et les formulaires. Grâce à un envoi en POST d'un objet cocktail en JSON (généré avec Javascript), le PHP se charge de récupérer ces données puis de les utiliser pour insérer un nouveau cocktail dans la base de données en gérant toutes les clés étrangères liées aux différentes tables de la base de données. Par conséquent, je n'ai pas fait de veille technologique pour l'implémentation de cette fonctionnalité.<br/> En revanche, pour ce qui est de l'implémentation du système de like/dislike, j'ai du me décider entre deux technologies, la première étant <a href=\"https://developer.mozilla.org/fr/docs/Web/Guide/AJAX/Getting_Started\"> l'Ajax </a> et la seconde <a href=\"https://developer.mozilla.org/fr/docs/Web/API/WebSocket\">les webSockets</a>. En effet, pour le confort des utilisateurs, il fallait qu'à chaque like ou dislike, la page ne soit pas rechargée entièrement mais que les données au sein de la base de données soient quand même mises à jour.",
                  ajax: {
                    title: "AJAX",
                    description:
                      "La technologie AJAX (Asynchronous Javascript + XML) est une technologie que je maîtrise déjà et que j'ai déjà utilisé dans ce projet, notamment pour l'affichage des cocktails en fonction des différents critères de tri comme la sélection de cocktails en fonction des ingrédients sélectionnés par l'utilisateur. L'AJAX utilise le protocole HTTP et est appelé lors d'une requête client au serveur, ce dernier va alors ensuite envoyer une réponse au client et la connection se termine. Cette technologie est utile lorsqu'il n'y a pas de gros volumes de données à tranférer (notre cas actuellement).",
                  },
                  websockets: {
                    title: "WebSockets",
                    description:
                      "WebSockets est une technologie que je ne maîtrise pas encore, ou très peu (je travaille actuellement sur un projet qui l'utilise et je suis en train de l'apprendre). Cependant, elle est également utile pour une communication en temps réel avec la base de données. La connexion reste ouverte, ce qui permet un échange continu de données entre le client et le serveur. WebSocket est donc plus efficace en termes de rapidité et de performance, car il n'est pas nécessaire de réétablir la connexion à chaque requête. Néanmoins, cette technologie est généralement moins sécurisée qu'AJAX, bien qu'il soit possible de configurer une socket chiffrée.",
                  },
                  comparative_analysis:
                    "Les technologies AJAX et WebSockets sont toutes deux intéressantes à utiliser, chacune ayant ses spécificités. Cependant, pour des raisons de simplicité et de cohérence avec ce que nous avions fait auparavant, j'ai décidé d'utiliser AJAX, car c'est une technologie que je connais et maîtrise, et qui est globalement plus sécurisée que WebSockets. De plus, je n'ai pas nécessairement besoin d'établir une connexion permanente avec le serveur et la base de données (ce que permet WebSockets), puisque le volume de données transmis (une mise à jour d'une colonne d'une table) est très faible.",
                },
                lethal_league: {
                  title: "Lethal League",
                  description:
                    "Projet Scientifique et Technique : Jeu de combat de projectiles développé en Python avec Pygame.",
                  full_description:
                    "Dans le cadre d'un projet scientifique et technique, nous devions développer un jeu type arcade en Python. Nous avons donc décidé de reprendre le jeu du même nom : <a href=\"https://store.steampowered.com/app/553310/Lethal_League_Blaze/?l=french\">Lethal League</a>. Il s'agit d'un jeu de balle où le but est de frapper la balle avec votre batte pour la faire accélérer et toucher votre adversaire. Le jeu permet de sélectionner parmi 6 personnages différents, chacun ayant des caractéristiques qui lui sont propres.",
                  technical_title: "Aspects Techniques",
                  technical_description:
                    "Le jeu a été développé à l'aide de Python et de l'éditeur de code PyCharm. Nous avons utilisé la librairie Pygame pour créer le jeu, ce qui nous a permis de gérer facilement les graphismes, les sons et les interactions avec l'utilisateur.",
                  photos_title: "Quelques photos du jeu",
                },
                octopus: {
                  title: "Octopus",
                  description:
                    "Projet Scientifique et Technique : Développement d'une station blanche avec Javascript, Bash et Ansible.",
                  full_description:
                    "Dans le cadre de mon projet scientifique et technique de 4ème année à l'ESIEA, nous devions reprendre un projet déjà existant d'une station blanche. Une station blanche est un dispositif specialement conçu pour analyser et examiner le contenu de clés USB de manière sécurisée et sans altération. La station se charge ensuite de supprimer les éventuels fichiers malveillants de la clé. Le projet est entièrement open-source. Cette station blanche a fini par être déployée au <b>Secrétariat Général pour l'Administration du Ministère de l'Intérieur (SGAMI)</b> de Rennes par un de mes camarades lors de son stage de 4ème année.",
                  how_it_works: "Fonctionnement",
                  how_it_works_description:
                    "Le fonctionnement de la station se fait selon l'image ci-dessous. On a ici 3 machines différentes : la station Octopus sur laquelle l'utilisateur va venir brancher sa clé USB qui est dotée d'une interface web; le contrôleur qui est une machine qui va venir mettre à jour la station (et éventuellement toutes les stations en réseau par la suite) et enfin le serveur de logs qui va stocker les données de la station une fois l'analyse de la clé USB terminée. La station blanche Octopus est capable d'accueillir jusqu'à 4 clés USB en même temps.",
                  objectives_title: "Objectifs du projet",
                  objectives_description:
                    "Nous avons établi 3 objectifs majeurs à réaliser pour le premier semestre :<ul><li>Refonte de l'interface graphique</li><li>Amélioration du déploiement</li><li>Ajout de nouveaux antivirus sélectionné par le contrôleur</li></ul>",
                  technical_title: "Aspects Techniques",
                  technical_description:
                    "La station blanche originelle a été développée majoritairement en Bash; le déploiement est quant à lui fait avec Ansible et l'interface web de la station a été réalisée avec NodeJS et Vue.js. Après avoir pris en main le projet, nous avons décidé de refaire l'interface graphique avec React et de refaire le backend à cause d'une librairie dépréciée qui rendait le travail vraiment compliqué.",
                  poster_title: "Affiche projet",
                },
                hearthstone: {
                  title: "Hearthstone BattleGround",
                  description:
                    "Projet réalisé en C++ dans le cadre du cours de programmation orientée objet.",
                },
                ml_challenge: {
                  title: "Machine Learning Challenge",
                  description:
                    "Développement d'un modèle d'IA pour la reconnaissance d'émotions sur un visage humain.",
                },
                nlp: {
                  title:
                    "Traitement du langage naturel : Détection de toxicités",
                  description:
                    "Développement et finetuning d'un grand modèle de langage spécialisé dans la détection de toxicités au sein des conversations textuelles.",
                },
                breast_cancer: {
                  title:
                    "Projet de recherche : L'utilisation de l'IA dans le domaine médical",
                  description:
                    "Prédiction de la douleur locale séquellaire des traitements de radiothérapie mammaires à l'aide des réseaux bayésiens.",
                  rgpd: "Le code source n'est pas disponible pour des raisons liées à la <b>Réglementation Générale sur la Protection des Données (RGPD)</b>",
                },
                optimization: {
                  title: "Optimisation Combinatoire",
                  description:
                    "Création d'algorithmes pour la résolution d'un problème NP complexe : Recherche d'une clique maximum dans un graphe.",
                },
              },
              contact: {
                title: "Contact",
                description:
                  "Si vous avez quelques questions, ou que vous voulez en savoir plus sur mon profil, n'hésitez pas à me contacter directement à l'aide de mon adresse mail ou sur LinkedIn.",
                phone: "Téléphone",
              },
            },
          },
        },
      },
      (err, t) => {
        if (err) return console.error(err);

        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });

        // start localizing, details:
        // https://github.com/i18next/jquery-i18next#usage-of-selector-function
        $("body").localize();

        // fill language switcher
        Object.keys(lngs).map((lng) => {
          const opt = new Option(lngs[lng].nativeName, lng);
          if (lng === i18next.resolvedLanguage) {
            opt.setAttribute("selected", "selected");
          }
          $("#languageSwitcher").append(opt);
        });
        $("#languageSwitcher").change((a, b, c) => {
          const chosenLng = $(this).find("option:selected").attr("value");
          i18next.changeLanguage(chosenLng, () => {
            rerender();
          });
        });

        rerender();
      }
    );
});
