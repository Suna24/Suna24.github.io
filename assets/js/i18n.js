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
