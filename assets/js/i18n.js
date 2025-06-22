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
                },
                cocktails: {
                  title: "Cocktails",
                  description:
                    "Website referencing different cocktails and allowing the search for a cocktail and various ingredients.",
                },
                lethal_league: {
                  title: "Lethal League",
                  description:
                    "Scientific and Technical Project: Projectile battle game developed in Python with Pygame.",
                },
                octopus: {
                  title: "Octopus",
                  description:
                    "Scientific and Technical Project: Development of a white station with Javascript, Bash, and Ansible.",
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
                },
                cocktails: {
                  title: "Cocktails",
                  description:
                    "Site Internet référançant différents cocktails et offrant la possibilité de recherche un cocktail et différents ingrédients.",
                },
                lethal_league: {
                  title: "Lethal League",
                  description:
                    "Projet Scientifique et Technique : Jeu de combat de projectiles développé en Python avec Pygame.",
                },
                octopus: {
                  title: "Octopus",
                  description:
                    "Projet Scientifique et Technique : Développement d'une station blanche avec Javascript, Bash et Ansible.",
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
