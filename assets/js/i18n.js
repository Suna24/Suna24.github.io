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
              },
              education: {
                title: "Education",
                description:
                  "You will find below the different stages of my educational path.",
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
              },
              education: {
                title: "Formation",
                description:
                  "Vous trouverez ci-dessous les différentes étapes de mon parcours scolaire.",
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
