import React from "react";

interface Props {
  lang: string;
}

export const AboutTemplate: React.FC<Props> = ({ lang }) => {
  const content = {
    en: {
      title: "About",
      intro: {
        headline: "Senior Full-Stack Engineer",
        subtitle:
          "Building Data-Intensive Systems with Modern Web Technologies",
        description:
          "Senior Full-Stack Engineer with 8 years building complex, data-intensive systems across sports technology, 3D applications, and web platforms. Specialized in taking greenfield projects from concept to production, with strong focus on making complex technical systems accessible through clean user experience.",
        additional:
          "Experienced in full ownership of technical stack (database → frontend), leading migrations, and adopting emerging technologies. Currently exploring AI-enhanced development workflows and Rust/WASM for performance-critical applications. Strong advocate for modern development practices and continuous learning.",
      },
      expertise: {
        title: "Key Expertise",
        items: [
          "Building systems from scratch (Prediction platforms, 3D multiplayer game, and more)",
          "Sports technology & data visualization (automated video production, prediction models, statistical analysis)",
          "Desktop applications (Electron, Dioxus)",
          "Technical leadership (leading migrations, architectural decisions, mentoring developers)",
          "Full-stack architecture (PostgreSQL/MongoDB, Node.js/Nest.js, React/Next.js, TypeScript)",
        ],
      },
      experience: {
        title: "Professional Experience",
        jobs: [
          {
            company: "HELIO AG",
            role: "Senior Frontend Engineer",
            period: "April 2025 - Present",
            location: "Remote",
            description:
              "Building an Electron application connecting 3D artists to cloud rendering infrastructure. The platform integrates with 3ds Max and Blender through deep links and custom Python plugins, enabling project organization and render submission to spot-instance-based cloud infrastructure.",
            tech: "TypeScript • React • Electron • Python",
          },
          {
            company: "KIT-AR",
            role: "Senior Application Engineer",
            period: "2024 - 2025",
            location: "Hybrid",
            description:
              "Developed an Electron application for managing high-precision 3D assets and connecting them with work instructions for manufacturing industry builders. Implemented 3D rendering with Babylon.js and Three.js, local database management with SQLite/Prisma, and complex asset pipeline workflows.",
            tech: "Babylon.js • Three.js • React • SQLite • Prisma • Electron",
          },
          {
            company: "SPORTRADAR",
            role: "Full-Stack Engineer",
            period: "2019 - 2022",
            location: "Hybrid",
            description:
              "Maintained and enhanced applications for automated video production systems. Led the migration from Backbone/jQuery to React/TypeScript with comprehensive E2E testing using Cypress and BDD methodology. Researched emerging technologies including Rust and GStreamer for future video processing capabilities.",
            tech: "TypeScript • React • Cypress • BDD • Node.js • Docker • AWS • Ruby • PostgreSQL • Rust",
          },
          {
            company: "ADNEOM",
            role: "Consultant",
            period: "Early 2019",
            location: "On-site",
            description:
              "Consultancy agency role working on multiple client projects, notably a major project for Total Energies using Angular. Delivered full-stack solutions while adapting to diverse technical requirements and client environments.",
            tech: "TypeScript • JavaScript • Angular • React • Node.js",
          },
          {
            company: "ALPAGA STUDIO",
            role: "Frontend Developer",
            period: "2017 - 2019",
            location: "On-site",
            description:
              "Frontend developer for web agency delivering projects for clients including Altissia, FEBE, and Europost. Built responsive websites, integrated with various CMS platforms, and collaborated with designers and backend developers to deliver high-quality web solutions.",
            tech: "JavaScript • TypeScript • CSS • WordPress • PHP • Symfony • Next.js",
          },
        ],
      },
      skills: {
        title: "Technical Skills",
        categories: [
          {
            name: "Languages",
            items: ["TypeScript", "JavaScript", "Rust", "Python", "C#", "PHP"],
          },
          {
            name: "Frontend",
            items: [
              "React",
              "Next.js",
              "Electron",
              "Three.js",
              "Babylon.js",
              "Dioxus (Rust WASM)",
              "Angular",
            ],
          },
          {
            name: "Backend",
            items: ["Node.js", "Nest.js", "Axum (Rust)", "Express", ".NET"],
          },
          {
            name: "Databases",
            items: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "Prisma ORM"],
          },
          {
            name: "DevOps & Tools",
            items: [
              "Docker",
              "AWS",
              "Azure",
              "Git",
              "CI/CD",
              "Traefik",
              "WebSockets",
            ],
          },
          {
            name: "Specialized",
            items: [
              "3D Graphics (WebGL, GLSL)",
              "Blockchain (Smart Contracts, EOSIO)",
              "Game Development",
              "Data Visualization",
              "AI-Enhanced Development",
            ],
          },
        ],
      },
      freelance: {
        title: "Selected Freelance & Teaching Experience",
        projects: [
          {
            name: "BeQuest - NFT Marketplace (XPR Network)",
            role: "Full-Stack Engineer (Freelance)",
            period: "2022 - 2023",
            duration: "1.5 years",
            description:
              "Built a complete NFT marketplace from scratch on the XPR blockchain (EOSIO). As the main developer, architected and implemented the entire system including database design, REST API, smart contracts, internal CRM tool, and customer-facing marketplace frontend. Handled blockchain integration, wallet connectivity, and transaction processing while maintaining high code quality and comprehensive documentation.",
            tech: "Docker • Nest.js • Next.js • PostgreSQL • Prisma • Smart Contracts • Blockchain • EOSIO • Monorepo",
          },
          {
            name: "ShotQuality - Basketball Video Annotation Tool",
            role: "Full-Stack Engineer (Freelance)",
            period: "2023",
            duration: "3 months",
            description:
              "Developed a frame annotation tool for basketball game video analysis, enabling human annotators to confirm AI-generated data used for model training. Implemented video playback controls, drawing tools for court overlays, and data export functionality.",
            tech: ".NET • React • Firebase • AWS",
          },
          {
            name: "Coverseal - European Swimming Pool Cover Company",
            role: "Full-Stack Engineer (Freelance)",
            period: "2021",
            duration: "",
            description:
              "Created an attractive and SEO-optimized website for Coverseal, a European leader in swimming pool covers. As sole developer, collaborated with SEO agency, client, and graphic designer to deliver a high-performance site highlighting their patented technology.",
            tech: "ElasticSearch • AWS • PostgreSQL • Next.js • TypeScript • SEO • Directus CMS • Docker",
          },
          {
            name: "College Albert Jacquard (HEAJ) - Programming Teacher",
            role: "Freelance Teacher",
            period: "2018-2019",
            duration: "",
            description:
              "Taught JavaScript programming fundamentals to future web developers. Developed curriculum materials and gained valuable experience in technical communication and presenting to audiences.",
            tech: "HTML • CSS • JavaScript • Computer Science • Teaching • Public Speaking",
          },
        ],
      },
      approach: {
        title: "My Approach",
        description:
          "I believe in writing clean, maintainable code and choosing the right tool for each challenge. Whether it's optimizing a 3D rendering pipeline or architecting a scalable backend, I focus on delivering solutions that are both elegant and performant. I'm always exploring new technologies and love sharing what I learn through my projects and blog posts.",
      },
      education: {
        title: "Education & Languages",
        degree: "Bachelor's Degree in Web Design and Multimedia",
        school: "College Albert Jacquard, Namur, Belgium",
        distinction: "Graduated with Distinction",
        languages: {
          title: "Languages",
          items: [
            { language: "English", level: "Fluent" },
            { language: "French", level: "Native" },
            { language: "Portuguese", level: "A2" },
          ],
        },
        personality:
          "INFJ-A (Advocate) - Strategic thinker with strong focus on meaningful impact and continuous improvement",
      },
      connect: {
        title: "Let's Connect",
        description:
          "I'm currently based in Lisbon, Portugal and open to new opportunities and collaborations. Feel free to reach out if you'd like to work together or just chat about technology!",
        emailButton: "Send me an email",
      },
    },
    fr: {
      title: "À Propos",
      intro: {
        headline: "Ingénieur Full-Stack Senior",
        subtitle:
          "Construction de Systèmes Intensifs en Données avec des Technologies Web Modernes",
        description:
          "Ingénieur Full-Stack Senior avec 8 ans d'expérience dans la construction de systèmes complexes et intensifs en données dans les domaines de la technologie sportive, des applications 3D et des plateformes web. Spécialisé dans la création de projets greenfield du concept à la production, avec un fort accent sur l'accessibilité des systèmes techniques complexes grâce à une expérience utilisateur soignée.",
        additional:
          "Expérience complète dans la propriété de la stack technique (base de données → frontend), direction de migrations et adoption de technologies émergentes. Actuellement en exploration des workflows de développement assistés par IA et Rust/WASM pour les applications critiques en performance. Fort défenseur des pratiques de développement modernes et de l'apprentissage continu.",
      },
      expertise: {
        title: "Expertises Clés",
        items: [
          "Construction de systèmes from scratch (marketplace NFT, plateformes de prédiction, applications de rendu 3D)",
          "Technologie sportive & visualisation de données (production vidéo automatisée, modèles de prédiction, analyse statistique)",
          "Applications desktop (Electron, gestion de système de fichiers, gestion d'assets 3D)",
          "Leadership technique (direction de migrations, décisions architecturales, mentorat de développeurs)",
          "Architecture full-stack (PostgreSQL/MongoDB, Node.js/Nest.js, React/Next.js, TypeScript)",
        ],
      },
      experience: {
        title: "Expérience Professionnelle",
        jobs: [
          {
            company: "HELIO AG",
            role: "Ingénieur Frontend Senior",
            period: "Avril 2025 - Présent",
            location: "Remote",
            description:
              "Construction d'une application Electron connectant les artistes 3D à une infrastructure de rendu cloud. La plateforme s'intègre avec 3ds Max et Blender via des liens profonds et des plugins Python personnalisés, permettant l'organisation de projets et la soumission de rendus à une infrastructure cloud basée sur des instances spot.",
            tech: "TypeScript • React • Electron • Python",
          },
          {
            company: "KIT-AR",
            role: "Ingénieur d'Application Senior",
            period: "2024 - 2025",
            location: "Hybride",
            description:
              "Développement d'une application Electron pour la gestion d'assets 3D haute précision et leur connexion avec des instructions de travail pour les constructeurs de l'industrie manufacturière. Implémentation du rendu 3D avec Babylon.js et Three.js, gestion de base de données locale avec SQLite/Prisma, et workflows complexes de pipeline d'assets.",
            tech: "Babylon.js • Three.js • React • SQLite • Prisma • Electron",
          },
          {
            company: "SPORTRADAR",
            role: "Ingénieur Full-Stack",
            period: "2019 - 2022",
            location: "Hybride",
            description:
              "Maintenance et amélioration d'applications pour des systèmes de production vidéo automatisée. Direction de la migration de Backbone/jQuery vers React/TypeScript avec des tests E2E complets utilisant Cypress et la méthodologie BDD. Recherche de technologies émergentes incluant Rust et GStreamer pour les capacités futures de traitement vidéo.",
            tech: "TypeScript • React • Cypress • BDD • Node.js • Docker • AWS • Ruby • PostgreSQL • Rust",
          },
          {
            company: "ADNEOM",
            role: "Consultant",
            period: "Début 2019",
            location: "Sur site",
            description:
              "Rôle de consultant en agence travaillant sur plusieurs projets clients, notamment un projet majeur pour Total Energies utilisant Angular. Livraison de solutions full-stack tout en s'adaptant à divers besoins techniques et environnements clients.",
            tech: "TypeScript • JavaScript • Angular • React • Node.js",
          },
          {
            company: "ALPAGA STUDIO",
            role: "Développeur Frontend",
            period: "2017 - 2019",
            location: "Sur site",
            description:
              "Développeur frontend pour une agence web livrant des projets pour des clients incluant Altissia, FEBE et Europost. Construction de sites web responsives, intégration avec diverses plateformes CMS, et collaboration avec designers et développeurs backend pour livrer des solutions web de haute qualité.",
            tech: "JavaScript • TypeScript • CSS • WordPress • PHP • Symfony • Next.js",
          },
        ],
      },
      skills: {
        title: "Compétences Techniques",
        categories: [
          {
            name: "Langages",
            items: [
              "TypeScript",
              "JavaScript",
              "Rust",
              "Python",
              "C#",
              "PHP",
              "SQL",
            ],
          },
          {
            name: "Frontend",
            items: [
              "React",
              "Next.js",
              "Electron",
              "Three.js",
              "Babylon.js",
              "Dioxus (Rust WASM)",
              "Angular",
            ],
          },
          {
            name: "Backend",
            items: ["Node.js", "Nest.js", "Axum (Rust)", "Express", ".NET"],
          },
          {
            name: "Bases de données",
            items: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "Prisma ORM"],
          },
          {
            name: "DevOps & Outils",
            items: ["Docker", "AWS", "Git", "CI/CD", "Traefik", "WebSockets"],
          },
          {
            name: "Spécialisé",
            items: [
              "Graphiques 3D (WebGL, GLSL)",
              "Blockchain (Smart Contracts, EOSIO)",
              "Développement de jeux",
              "Visualisation de données",
              "Développement assisté par IA",
            ],
          },
        ],
      },
      freelance: {
        title: "Expérience Freelance & Enseignement Sélectionnée",
        projects: [
          {
            name: "BeQuest - NFT Marketplace (XPR Network)",
            role: "Ingénieur Full-Stack (Freelance)",
            period: "2022 - 2023",
            duration: "1.5 ans",
            description:
              "Construction d'une marketplace NFT complète from scratch sur la blockchain XPR (EOSIO). En tant que développeur principal, architecture et implémentation de l'ensemble du système incluant la conception de base de données, API REST, smart contracts, outil CRM interne et frontend marketplace client. Gestion de l'intégration blockchain, connectivité des wallets, et traitement des transactions tout en maintenant une haute qualité de code et une documentation complète.",
            tech: "Docker • Nest.js • Next.js • PostgreSQL • Prisma • Smart Contracts • Blockchain • EOSIO • Monorepo",
          },
          {
            name: "ShotQuality - Outil d'Annotation Vidéo Basketball",
            role: "Ingénieur Full-Stack (Freelance)",
            period: "2023",
            duration: "3 mois",
            description:
              "Développement d'un outil d'annotation d'images pour l'analyse vidéo de matchs de basketball, permettant aux annotateurs humains de confirmer les données générées par IA utilisées pour l'entraînement de modèles. Implémentation des contrôles de lecture vidéo, outils de dessin pour superpositions de terrain, et fonctionnalité d'export de données.",
            tech: ".NET • React • Firebase • AWS",
          },
          {
            name: "Coverseal - Entreprise Européenne de Couvertures de Piscine",
            role: "Ingénieur Full-Stack (Freelance)",
            period: "2021",
            duration: "",
            description:
              "Création d'un site web attractif et optimisé SEO pour Coverseal, leader européen des couvertures de piscine. En tant que développeur unique, collaboration avec agence SEO, client et designer graphique pour livrer un site haute performance mettant en valeur leur technologie brevetée.",
            tech: "ElasticSearch • AWS • PostgreSQL • Next.js • TypeScript • SEO • Directus CMS • Docker",
          },
          {
            name: "College Albert Jacquard (HEAJ) - Professeur de Programmation",
            role: "Enseignant Freelance",
            period: "2018-2019",
            duration: "",
            description:
              "Enseignement des fondamentaux de la programmation JavaScript aux futurs développeurs web. Développement de matériel pédagogique et acquisition d'une expérience précieuse en communication technique et présentation devant un public.",
            tech: "HTML • CSS • JavaScript • Informatique • Enseignement • Prise de parole en public",
          },
        ],
      },
      approach: {
        title: "Mon Approche",
        description:
          "Je crois en l'écriture de code propre et maintenable et au choix du bon outil pour chaque défi. Qu'il s'agisse d'optimiser un pipeline de rendu 3D ou d'architecturer un backend scalable, je me concentre sur la livraison de solutions à la fois élégantes et performantes. J'explore toujours de nouvelles technologies et j'aime partager ce que j'apprends à travers mes projets et articles de blog.",
      },
      education: {
        title: "Formation & Langues",
        degree: "Bachelier en Web Design et Multimédia",
        school: "College Albert Jacquard, Namur, Belgique",
        distinction: "Diplômé avec Distinction",
        languages: {
          title: "Langues",
          items: [
            { language: "Anglais", level: "Courant" },
            { language: "Français", level: "Langue maternelle" },
            { language: "Portugais", level: "A2" },
          ],
        },
        personality:
          "INFJ-A (Advocate) - Penseur stratégique avec un fort accent sur l'impact significatif et l'amélioration continue",
      },
      connect: {
        title: "Restons en Contact",
        description:
          "Je suis actuellement basé à Lisbonne, Portugal et ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter si vous souhaitez travailler ensemble ou simplement discuter de technologie !",
        emailButton: "Envoyez-moi un email",
      },
    },
  };

  const t = content[lang as keyof typeof content] || content.en;

  return (
    <main className="about-template">
      <div className="container">
        <h1>{t.title}</h1>

        <section className="about-template__intro">
          <h3>{t.intro.headline}</h3>
          <p className="about-template__subtitle">{t.intro.subtitle}</p>
          <p>{t.intro.description}</p>
          <p>{t.intro.additional}</p>
        </section>

        <section className="about-template__section">
          <h2>{t.expertise.title}</h2>
          <ul>
            {t.expertise.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="about-template__section">
          <h2>{t.experience.title}</h2>
          <div className="about-template__experience">
            {t.experience.jobs.map((job, index) => (
              <div key={index} className="about-template__job">
                <h3>{job.company}</h3>
                <div className="about-template__job-meta">
                  <span className="about-template__job-role">{job.role}</span>
                  <span className="about-template__job-period">
                    {job.period}
                  </span>
                  <span className="about-template__job-location">
                    {job.location}
                  </span>
                </div>
                <p>{job.description}</p>
                <p className="about-template__tech-stack">
                  <strong>Tech Stack:</strong> {job.tech}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-template__section">
          <h2>{t.freelance.title}</h2>
          <div className="about-template__freelance">
            {t.freelance.projects.map((project, index) => (
              <div key={index} className="about-template__freelance-project">
                <h3>{project.name}</h3>
                <div className="about-template__job-meta">
                  <span className="about-template__job-role">
                    {project.role}
                  </span>
                  <span className="about-template__job-period">
                    {project.period}
                    {project.duration && ` • ${project.duration}`}
                  </span>
                </div>
                <p>{project.description}</p>
                <p className="about-template__tech-stack">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-template__section">
          <h2>{t.education.title}</h2>
          <div className="about-template__education">
            <div className="about-template__education-content">
              <h3>{t.education.degree}</h3>
              <p className="about-template__school">{t.education.school}</p>
              <p className="about-template__distinction">
                {t.education.distinction}
              </p>
            </div>
            <div className="about-template__languages">
              <h4>{t.education.languages.title}</h4>
              <ul className="about-template__language-list">
                {t.education.languages.items.map((item, index) => (
                  <li key={index}>
                    <strong>{item.language}:</strong> {item.level}
                  </li>
                ))}
              </ul>
            </div>
            <p className="about-template__personality">
              {t.education.personality}
            </p>
          </div>
        </section>

        <section className="about-template__section">
          <h2>{t.skills.title}</h2>
          <div className="about-template__skills">
            {t.skills.categories.map((category, index) => (
              <div key={index} className="about-template__skill-category">
                <h3>{category.name}</h3>
                <ul className="about-template__tag-list">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span className="tag">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="about-template__section">
            <h2>{t.approach.title}</h2>
            <p>{t.approach.description}</p>
          </section> */}

        <section className="about-template__section">
          <h2>{t.connect.title}</h2>
          <p>{t.connect.description}</p>
          <div className="about-template__connect-actions">
            <a
              href="mailto:boursbenjamin@gmail.com"
              className="about-template__email-button button"
            >
              {t.connect.emailButton}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};
