import { useEffect, useMemo, useRef, useState } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useTypewriter } from "./hooks/useTypewriter";
type Lang = "fr" | "en";
type Theme = "dark" | "light";

const SECTION_IDS = ["home", "skills", "projects", "experience", "education", "certifications", "contact"];

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const content = {
  fr: {
    brand: "Mandresy RABENJA",
    fullName: "Anjara Mandresy Isaia RABENJA",
    role: "Portfolio de RAMAMONJISOA Aina Aneliot",
    headline: "Developpeur Full-Stack",
    intro:
      "Terminal clean, esprit spatial. Je construis des applications web robustes avec une approche orientee produit.",
    about:
      "Développeur logiciel polyvalent et passionné, je conçois des applications web, mobiles et backend en mettant l’accent sur la qualité du code, la performance et la maintenabilité. Curieux de nature, j’aime explorer de nouvelles technologies, comprendre les mécanismes qui se cachent derrière les outils que j’utilise et relever des défis techniques variés. Mon parcours m’a permis d’acquérir une solide expérience dans le développement full-stack, les bases de données, les architectures logicielles ainsi que l’intégration de solutions modernes.",
    ctaProjects: "Voir les projets",
    ctaContact: "Me contacter",
    section: {
      skills: "Competences Techniques",
      projects: "Projets",
      experience: "Experiences Professionnelles",
      education: "Formations",
      certifications: "Certifications",
      contact: "Me contacter",
    },
    command: {
      skills: "ls skills/",
      projects: "cd projects/ && ls -l",
      experience: "cat experience.txt",
      education: "cat formation.txt",
      certifications: "ls certifications/",
      contact: "./contact_form.sh",
    },
    status: "Disponible pour de nouvelles opportunites",
    location: "Antananarivo, Madagascar",
    skills: [
      {
        title: "Langages de programmation",
        items: [
          { name: "C", level: 60 },
          { name: "Java", level: 80 },
          { name: "JavaScript", level: 65 },
          { name: "PHP", level: 75 },
          { name: "C#", level: 70 },
          { name: "Python", level: 80 },
        ],
      },
      {
        title: "Frameworks",
        items: [
          { name: "Spring Boot", level: 72 },
          { name: ".Net", level: 52 },
          { name: "Symfony", level: 67 },
          { name: "Angular", level: 62 },
          { name: "Vue.js", level: 47 },
          { name: "React", level: 48 },
        ],
      },
      {
        title: "Bases de donnees",
        items: [
          { name: "MySQL", level: 75 },
          { name: "PostgreSQL", level: 80 },
          { name: "Oracle", level: 65 },
          { name: "MongoDB", level: 65 },
          { name: "Microsoft SQL Server", level: 75 },
        ],
      },
      {
        title: "Outils et technologies",
        items: [
          { name: "Git", level: 82 },
          { name: "Linux", level: 72 },
          { name: "Docker", level: 64 },
          { name: "Postman", level: 78 },
          { name: "Apache", level: 58 },
          { name: "WildFly", level: 50 },
        ],
      },
    ],
    projects: [
      {
        title: "ACM Statistics - Projet de fin d'etudes",
        type: "Professionnel",
        visual: "Moon Shield",
        description:
          "> Le projet consiste à développer une plateforme centralisée dédiée à la gestion, l’exploitation et l’analyse des données de redevances de l’ACM. La solution permet de collecter, centraliser et valoriser les données métier afin d’offrir une vision globale et fiable des activités liées aux redevances. Grâce à des tableaux de bord décisionnels interactifs, les utilisateurs peuvent suivre les indicateurs clés de performance, analyser les tendances et faciliter la prise de décision stratégique. Le projet intègre également des mécanismes d’intelligence artificielle et d’analyse statistique avancée permettant la détection automatique des fraudes et des anomalies, ainsi que la prédiction des futures redevances afin d’anticiper les évolutions financières et d’optimiser la gestion des revenus. Cette plateforme constitue un véritable outil d’aide à la décision, améliorant la visibilité, le contrôle et l’efficacité des processus de gestion des redevances.",
        stack: ".Net, React.js, Tailwind CSS, Microsoft SQL Server, Excel, Docker",
        stacks: [".Net","React.js", "Tailwind CSS", "Microsoft SQL Server", "Excel", "Docker"],
      },
      {
        title: "Java Web Framework",
        type: "Projet d'etudes",
        visual: "Core Engine",
        description:
          "> Conception et développement d’un framework web Java inspiré de l’architecture MVC, visant à simplifier la création d’applications web dynamiques. Le framework permet le mapping automatique des URLs vers des méthodes Java à travers un système d’annotations personnalisées, tout en proposant une gestion centralisée des requêtes et des contrôleurs. L’accent a été mis sur la modularité, la réutilisabilité des composants et la réduction de la complexité de configuration afin d’améliorer la productivité des développeurs.",
        stack: "Java, Batch",
        stacks: ["Java", "Batch"],
        github : "https://github.com/MandresyIsaia/Framework"
      },
      {
        title: "Plateforme de Transactions de Cryptomonnaies",
        type: "Academique",
        visual: "Orbital Market",
        description:
          "> Développement d’une plateforme web de simulation de transactions et d’échanges de cryptomonnaies permettant aux utilisateurs de gérer des portefeuilles virtuels, d’effectuer des opérations financières simulées et de suivre l’évolution de leurs actifs numériques. L’application intègre des services externes pour la vérification d’identité et met en œuvre une architecture robuste garantissant la fiabilité des traitements, la sécurité des données et la fluidité de l’expérience utilisateur.",
        stack: "Symfony, PostgreSQL, JavaScript, CSS, Twig, Docker",
        stacks: ["Symfony", "PostgreSQL", "JavaScript", "CSS", "Twig", "Docker"],
        github : "https://github.com/MandresyIsaia/cryptomoney-transaction"
      },
      {
        title: "Korus Center",
        type: "Academique",
        visual: "Launch Logistics",
        description:
          "> Développement d’une plateforme web de gestion pour un centre commercial permettant de connecter l’administration, les boutiques et les acheteurs au sein d’un même écosystème. L’application offre la gestion des boutiques, des produits, des commandes et des utilisateurs à travers des espaces dédiés à chaque profil, tout en facilitant les interactions entre commerçants et clients grâce à une interface centralisée et intuitive.",
        stack: "MongoDB, Express, Angular, Node.js",
        stacks: ["MongoDB", "Express", "Angular", "Node.js"],
        github : "https://github.com/MandresyIsaia/korus_center"
      },
      {
        title: "QCM Response",
        type: "Personnel",
        visual: "Campus Orbit",
        description:
          "> Développement d’une application intelligente d’assistance à la révision permettant d’extraire automatiquement le contenu de questionnaires à choix multiples (QCM) à partir de captures d’écran grâce à la reconnaissance optique de caractères (OCR). L’application exploite l’intelligence artificielle pour analyser les questions, proposer des réponses pertinentes et générer des explications détaillées afin d’aider les étudiants à mieux comprendre les concepts abordés et à optimiser leur apprentissage.",
        stack: "python, tesseract, gemini API",
        stacks: ["python", "tesseract", "gemini API"],
        github : "https://github.com/MandresyIsaia/QCM-Response"
      },
    ],
    experience: {
      title: "Data Analyst - Stage",
      period: "Juillet 2025 - Janvier 2026",
      company: "> Aviation Civile de Madagascar",
      desc:
        "> Stage au sein de l’ACM consacré au développement d’une plateforme centralisée d’analyse des redevances intégrant des tableaux de bord décisionnels, des outils de prédiction et des mécanismes de détection de fraudes basés sur l’intelligence artificielle.",
    },
    education: [
      {
        title: "Licence en Informatique",
        period: "2022 - 2025",
        school: "> IT University - Antananarivo, Madagascar",
        desc:
          "> Formation en informatique axée sur le développement logiciel, les bases de données et les technologies intelligentes, avec une solide maîtrise de la programmation, de la conception d’applications et de la résolution de problèmes complexes.",
      },
      {
        title: "Licence en Mathématiques Appliqués",
        period: "2022 - 2025",
        school: "> Université d'Antananarivo, Madagascar",
        desc:
          "> Formation en mathématiques appliquées axée sur la modélisation, l’optimisation, les probabilités, les statistiques et l’analyse numérique, développant de solides capacités d’abstraction et de raisonnement analytique",
      },
      {
        title: "Advanced 2 Certificate level in English",
        period: "2022 - 2023",
        school: "> English Teaching Program , Madagascar",
        desc:
          "> Formation avancée en anglais axée sur la communication professionnelle et académique, renforçant les compétences en expression orale, compréhension orale, rédaction, argumentation et prise de parole en public à travers des débats, des présentations persuasives et des essais argumentatifs.",
      },
    ],
    certifications: [
      {
        title: "2 ème place",
        issuer: "Hackathon REDSHALK",
        date: "2024",
        image: "/certifications/hackathon.jpeg",
      },
      {
        title: "Advanced 2 Certificate",
        issuer: "English Teaching Program",
        date: "2023",
        image: "/certifications/etp.jpeg",
      },
      
    ],
    contactPrompt: "Ecrire un message",
    calTitle: "Prendre rendez-vous",
    calSubtitle: "Choisissez un creneau directement via Cal.com",
    formName: "Nom",
    formEmail: "Email",
    formSubject: "Sujet",
    formMessage: "Message",
    cvLabel: "CV",
    contactScript: "./contact.sh",
    send: "Envoyer",
    footerRole: "Developpeur Full-Stack",
    footerPassion: "Passionne par la creation de solutions innovantes",
    footerCopy: "© {year} RAMAMONJISOA Aina Aneliot. Tous droits réservés.",
  },
  en: {
    brand: "Mandresy RABENJA",
    fullName: "Mandresy RABENJA",
    role: "Portfolio of RAMAMONJISOA Aina Aneliot",
    headline: "Full-Stack Developer",
    intro:
      "Clean terminal style with a space mood. I build reliable web applications with a product-focused approach.",
    about:
      "Versatile and passionate software developer, I build web, mobile, and backend applications with a strong focus on code quality, performance, and maintainability. Naturally curious, I enjoy exploring new technologies, understanding the underlying mechanisms behind the tools I use, and tackling diverse technical challenges. My background has allowed me to develop solid expertise in full-stack development, databases, software architecture, and the integration of modern technologies.",
    ctaProjects: "View projects",
    ctaContact: "Contact me",
    section: {
      skills: "Technical Skills",
      projects: "Projects",
      experience: "Professional Experience",
      education: "Education",
      certifications: "Certifications",
      contact: "Contact",
    },
    command: {
      skills: "ls skills/",
      projects: "cd projects/ && ls -l",
      experience: "cat experience.txt",
      education: "cat education.txt",
      certifications: "ls certifications/",
      contact: "./contact_form.sh",
    },
    status: "Open to new opportunities",
    location: "Antananarivo, Madagascar",
    skills: [
      {
        title: "Programming Languages",
        items: [
          { name: "C", level: 60 },
          { name: "Java", level: 80 },
          { name: "JavaScript", level: 65 },
          { name: "PHP", level: 75 },
          { name: "C#", level: 70 },
          { name: "Python", level: 80 },
        ],
      },
      {
        title: "Frameworks",
        items: [
          { name: "Spring Boot", level: 72 },
          { name: ".Net", level: 52 },
          { name: "Symfony", level: 67 },
          { name: "Angular", level: 62 },
          { name: "Vue.js", level: 47 },
          { name: "Laravel", level: 48 },
        ],
      },
      {
        title: "Databases",
        items: [
          { name: "MySQL", level: 75 },
          { name: "PostgreSQL", level: 80 },
          { name: "Oracle", level: 65 },
          { name: "MongoDB", level: 65 },
          { name: "Microsoft SQL Server", level: 75 },
        ],
      },
      {
        title: "Tools and Technologies",
        items: [
          { name: "Git", level: 82 },
          { name: "Linux", level: 72 },
          { name: "Docker", level: 64 },
          { name: "Postman", level: 78 },
          { name: "Apache", level: 58 },
          { name: "WildFly", level: 50 },
        ],
      },
    ],
    projects: [
      {
        title: "ACM Statistics - Final Year Project",
        type: "Professional",
        visual: "Moon Shield",
        description:
          "> The project consists of developing a centralized platform dedicated to the management, analysis, and exploitation of ACM royalty data. The solution enables the collection, centralization, and enhancement of business data, providing a comprehensive and reliable overview of royalty-related activities. Through interactive decision-support dashboards, users can monitor key performance indicators, analyze trends, and support strategic decision-making. The project also integrates Artificial Intelligence and advanced statistical analysis capabilities for automatic fraud and anomaly detection, as well as future royalty forecasting to anticipate financial trends and optimize revenue management. This platform serves as a powerful decision-support tool, improving visibility, control, and efficiency across royalty management processes.",
        stack: ".Net, React.js, Tailwind CSS, Microsoft SQL Server, Excel, Docker",
        stacks: [".Net","React.js", "Tailwind CSS", "Microsoft SQL Server", "Excel", "Docker"],
      },
      {
        title: "Java Web Framework",
        type: "Academic project",
        visual: "Core Engine",
        description:
          "> Design and development of a Java web framework based on the MVC architecture, aimed at simplifying the creation of dynamic web applications. The framework enables automatic URL-to-method mapping through a custom annotation system while providing centralized request and controller management. The project focuses on modularity, component reusability, and reducing configuration complexity to improve developer productivity.",
        stack: "Java, Batch",
        stacks: ["Java", "Batch"],
        github : "https://github.com/MandresyIsaia/Framework"
      },
      {
        title: "Cryptocurrency Transaction Platform",
        type: "Academic",
        visual: "Orbital Market",
        description:
          "> Development of a web-based cryptocurrency trading and transaction simulation platform enabling users to manage virtual wallets, perform simulated financial operations, and monitor the evolution of their digital assets. The application integrates external identity verification services and implements a robust architecture designed to ensure reliable processing, data security, and a seamless user experience.",
        stack: "Symfony, PostgreSQL, JavaScript, CSS, Twig, Docker",
        stacks: ["Symfony", "PostgreSQL", "JavaScript", "CSS", "Twig", "Docker"],
        github : "https://github.com/MandresyIsaia/cryptomoney-transaction"
      },
      {
        title: "Korus Center",
        type: "Academic",
        visual: "Launch Logistics",
        description:
          "> Development of a web-based management platform for a shopping mall, connecting administrators, stores, and customers within a unified ecosystem. The application provides store, product, order, and user management through dedicated interfaces for each user role, while facilitating interactions between merchants and customers through a centralized and user-friendly platform.",
        stack: "MongoDB, Express, Angular, Node.js",
        stacks: ["MongoDB", "Express", "Angular", "Node.js"],
        github : "https://github.com/MandresyIsaia/korus_center"
      },
      {
        title: "QCM Response",
        type: "Personal",
        visual: "Campus Orbit",
        description:
          "> Development of an intelligent study assistant application capable of automatically extracting multiple-choice questionnaire (MCQ) content from screenshots using Optical Character Recognition (OCR). The application leverages Artificial Intelligence to analyze questions, suggest relevant answers, and generate detailed explanations, helping students better understand key concepts and improve their learning efficiency.",
        stack: "python, tesseract, gemini API",
        stacks: ["python", "tesseract", "gemini API"],
        github : "https://github.com/MandresyIsaia/QCM-Response"
      },
    ],
    experience: {
      title: "Data Analyst - Internship",
      period: "July 2025 - January 2026",
      company: "> Avication Civile de Madagascar",
      desc:
        "> Internship at ACM focused on the development of a centralized royalty analytics platform featuring decision-support dashboards, forecasting tools, and AI-powered fraud detection mechanisms.",
    },
    education: [
      {
        title: "Bachelor's Degree in Computer Science",
        period: "2022 - 2025",
        school: "> IT University - Antananarivo, Madagascar",
        desc:
          "> Computer science education focused on software development, databases, and intelligent technologies, providing strong skills in programming, application design, and complex problem-solving.",
      },
      {
        title: "Bachelor's Degree in Applied Mathematics",
        period: "2022 - 2025",
        school: "> Université d'Antananarivo, Madagascar",
        desc:
          "> Applied Mathematics degree focused on modeling, optimization, probability, statistics, and numerical analysis, fostering strong analytical thinking, abstraction skills, and the ability to solve complex problems.",
      },
      {
        title: "Advanced 2 Certificate level in English",
        period: "2022 - 2023",
        school: "> English Teaching Program , Madagascar",
        desc:
          "> Advanced English certification focused on professional and academic communication, strengthening speaking, listening, writing, argumentation, and public speaking skills through debates, persuasive presentations, and argumentative essays.",
      },
    ],
    certifications: [
      {
        title: "Second place",
        issuer: "Hackathon REDSHALK",
        date: "2024",
        image: "/certifications/hackathon.jpeg",
      },
      {
        title: "Advanced 2 Certificate",
        issuer: "English Teaching Program",
        date: "2023",
        image: "/certifications/etp.jpeg",
      },
      
    ],
    contactPrompt: "Write a message",
    calTitle: "Book a meeting",
    calSubtitle: "Pick an available slot directly via Cal.com",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    cvLabel: "Resume",
    contactScript: "./contact.sh",
    send: "Send",
    footerRole: "Full-Stack Developer",
    footerPassion: "Passionate about building innovative solutions",
    footerCopy: "© 2025 RAMAMONJISOA Aina Aneliot. All rights reserved.",
  },
};

function SectionTitle({ command, title }: { command: string; title: string }) {
  return (
    <header className="mb-8">
      <p className="text-xs tracking-wide text-[var(--muted)]">$ {command}</p>
      <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">{title}</h2>
      <div className="mt-3 h-px bg-[var(--border)]" />
    </header>
  );
}

function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
    </svg>
  );
}

function IconSun() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9l2.1 2.1m10 10l2.1 2.1m0-14.2L17 7m-10 10l-2.1 2.1" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.06 1.83 2.8 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.44.38.83 1.1.83 2.23v3.3c0 .32.21.69.82.58A12 12 0 0012 0z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9.75 7.1H6.9V17h2.35v-6.9zM8.07 7.2a1.36 1.36 0 100-2.72 1.36 1.36 0 000 2.72zM17.1 13c0-2.28-1.22-3.35-2.84-3.35-1.31 0-1.9.72-2.23 1.23V10.1H9.68V17h2.35v-3.41c0-.9.17-1.77 1.29-1.77 1.1 0 1.12 1.03 1.12 1.83V17h2.35V13z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 6h18v12H3z" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

function IconFile() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5" />
    </svg>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const [theme, setTheme] = useState<Theme>("light");
  const [activeSection, setActiveSection] = useState("home");
  const [typedBrand, setTypedBrand] = useState("");
  const [typedName, setTypedName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  const [selectedCertification, setSelectedCertification] = useState<{
    title: string;
    issuer: string;
    date: string;
    image: string;
  } | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const t = useMemo(() => content[lang], [lang]);
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    setTypedBrand("");
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedBrand(t.brand.slice(0, index));
      if (index >= t.brand.length) {
        window.clearInterval(timer);
      }
    }, 85);

    return () => window.clearInterval(timer);
  }, [t.brand]);

  useEffect(() => {
    setTypedName("");
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedName(t.fullName.slice(0, index));
      if (index >= t.fullName.length) {
        window.clearInterval(timer);
      }
    }, 55);

    return () => window.clearInterval(timer);
  }, [t.fullName]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertification(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };
    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight * 0.42;
      let bestSection = SECTION_IDS[0];
      let minDistance = Number.POSITIVE_INFINITY;

      SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          bestSection = id;
        }
      });

      setActiveSection(bestSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);
  const { displayedText, isComplete } = useTypewriter(t.brand, 130);

  return (
    <div data-theme={theme} className="portfolio min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {isLoading && (
        <div className="loader-overlay">
          <div className="terminal-loader">
            <p className="text-xs text-[var(--muted)]">$ boot --portfolio --space-mode</p>
            <p className="mt-2 text-sm text-[var(--text)]">Initializing terminal...</p>
            <div className="terminal-loader-track mt-4">
              <div className="terminal-loader-bar" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
              <span className="loader-rocket">🚀</span>
              <span>connecting to moon station</span>
            </div>
          </div>
        </div>
      )}

      {theme === "dark" && <div className="star-layer" aria-hidden="true" />}
      {theme === "light" && <div className="orbital-glow" aria-hidden="true" />}

      <aside className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 md:flex">
        <div className="flex flex-col gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/90 px-2 py-3 backdrop-blur">
          {SECTION_IDS.map((id) => (
            <button
              key={id}
              aria-label={id}
              onClick={() => {
                const target = document.getElementById(id);
                if (target) {
                  setActiveSection(id);
                  if (lenisRef.current) {
                    lenisRef.current.scrollTo(target, { duration: 1.1, offset: -16 });
                  } else {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              }}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                activeSection === id
                  ? "h-3.5 w-3.5 bg-[var(--accent)] shadow-[0_0_14px_var(--accent)]"
                  : "bg-[var(--dot)] hover:bg-[var(--muted)]"
              }`}
            />
          ))}
        </div>
      </aside>

      <div className="fixed right-4 top-4 z-40 flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 p-2 backdrop-blur">
        <button
          onClick={() => setLang((prev) => (prev === "fr" ? "en" : "fr"))}
          className="rounded-md border border-[var(--border)] px-2 py-1 text-xs transition hover:bg-[var(--soft)]"
          aria-label="Toggle language"
          title={lang === "fr" ? "Switch to English" : "Passer en francais"}
        >
          {lang === "fr" ? (
            <svg viewBox="0 0 18 12" className="h-3.5 w-5">
              <rect width="6" height="12" x="0" fill="#1f4fbf" />
              <rect width="6" height="12" x="6" fill="#ffffff" />
              <rect width="6" height="12" x="12" fill="#d1313a" />
            </svg>
          ) : (
            <svg viewBox="0 0 60 30" className="h-3.5 w-5" xmlns="http://www.w3.org/2000/svg">
              
              <rect width="60" height="30" fill="#ffffff"/>
              
              
              <path d="M0 0h60v2.3H0zM0 4.6h60v2.3H0zM0 9.2h60v2.3H0zM0 13.8h60v2.3H0zM0 18.4h60v2.3H0zM0 23h60v2.3H0zM0 27.6h60v2.4H0z" fill="#B22234"/>
              
              
              <rect width="24" height="16.15" fill="#3C3B6E"/>
              
              
              <path d="M2 2h1v1H2zm4 0h1v1H6zm4 0h1v1h-1zm4 0h1v1h-1zm4 0h1v1h-1zm-14 3h1v1H4zm4 0h1v1H8zm4 0h1v1h-1zm4 0h1v1h-1zM2 8h1v1H2zm4 0h1v1H6zm4 0h1v1h-1zm4 0h1v1h-1zm4 0h1v1h-1zm-14 3h1v1H4zm4 0h1v1H8zm4 0h1v1h-1zm4 0h1v1h-1zM2 14h1v1H2zm4 0h1v1H6zm4 0h1v1h-1zm4 0h1v1h-1zm4 0h1v1h-1z" fill="#ffffff"/>
            </svg>
          )}
        </button>
        <button
          onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
          className="rounded-md border border-[var(--border)] px-2 py-1 text-[var(--text)] transition hover:bg-[var(--soft)]"
          aria-label="Toggle theme"
          title="Theme"
        >
          {theme === "dark" ? <IconSun /> : <IconMoon />}
        </button>
      </div>

      <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-10 sm:px-8 md:pt-14">
        <motion.section id="home" className="flex min-h-[90vh] items-start pt-20 pb-16 md:pt-28 md:pb-24" {...fadeInUp}>
          <div className="w-full px-1 md:px-4">
            <p className="text-xs tracking-[0.2em] text-[var(--muted)]">MISSION LOG 01</p>
            <h1 className="mt-3 text-5xl font-semibold leading-none sm:text-7xl">
              {displayedText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </h1>
            
            {/* <p className="mt-3 text-sm text-[var(--muted)]">{t.role}</p> */}
            <p className="mt-8  text-xl font-medium text-[var(--text)] sm:text-2xl">{t.headline}</p>
            {/* <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">{t.intro}</p> */}

            <div className="mt-8  space-y-5 rounded-lg border border-(--border) bg-(--surface)/70 p-5">
              {/* <div>
                <p className="text-sm text-[var(--muted)]">$ whoami</p>
                <p className="typing mt-1 text-base text-[var(--text)]">{typedName}</p>
              </div> */}

              <div>
                <p className="text-sm text-[var(--muted)]">$ cat about.txt</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text)]">{t.about}</p>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">$ {t.contactScript}</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <a href="https://github.com/MandresyIsaia" target="_blank" rel="noreferrer" className="hero-link">
                    <IconGithub />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/mandresy-rabenja-94352b230/" target="_blank" rel="noreferrer" className="hero-link">
                    <IconLinkedin />
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:rabenjamandresy@gmail.com" className="hero-link">
                    <IconMail />
                    <span>Email</span>
                  </a>
                  <a href="/cv.pdf" target="_blank" rel="noreferrer" className="hero-link">
                    <IconFile />
                    <span>{t.cvLabel}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-[var(--muted)]">
              <span>{t.status}</span>
              <span className="hidden h-1 w-1 rounded-full bg-[var(--muted)] sm:block" />
              <span>{t.location}</span>
            </div>
          </div>
        </motion.section>

        <motion.section id="skills" className="scroll-mt-24 py-16" {...fadeInUp}>
          <SectionTitle command={t.command.skills} title={t.section.skills} />
          <div className="grid gap-10 md:grid-cols-2">
            {t.skills.map((group) => (
              <motion.div
                key={group.title}
                className="space-y-6 rounded-lg border border-[var(--border)] bg-[var(--surface)]/70 p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-2xl font-semibold">{group.title}</h3>
                <div className="space-y-5">
                  {group.items.map((item, index) => (
                    <div key={item.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>{item.name}</span>
                        {/* <span className="text-[var(--muted)]">{item.level}%</span> */}
                      </div>
                      <div className="h-2 w-full bg-[var(--track)]">
                        <motion.div
                          className="h-full bg-[var(--accent)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 0.9, delay: index * 0.08, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="scroll-mt-24 py-16" {...fadeInUp}>
          <SectionTitle command={t.command.projects} title={t.section.projects} />
          <div className="space-y-10">
            {t.projects.map((project, index) => (
              <motion.article
                key={project.title}
                // className="project-item group border-b border-[var(--border)] pb-8 last:border-b-0"
                className="info-card rounded-lg border border-[var(--border)] bg-[var(--surface)]/60 p-6"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="grid gap-5  md:items-start">
                  {/* <div className="project-visual h-32 overflow-hidden border border-[var(--border)] bg-[var(--surface)] md:h-36">
                    <div className="project-visual-inner flex h-full w-full items-center justify-center text-sm tracking-[0.2em] text-[var(--muted)]">
                      <span>{project.visual}</span>
                    </div>
                  </div> */}
                  <div className="project-content">
                    <div className="mb-3 flex flex-wrap items-center gap-3 justify-between gap-2">
                      <h3 className="text-xl font-medium">{project.title}</h3>
                      <span className="shrink-0 rounded-lg border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--muted)]">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
                    {/* <p className="mt-3 text-xs text-[var(--text)]">{project.stack}</p> */}
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      {/* Stacks */}
                      <div className="flex flex-wrap gap-2">
                        {project.stacks?.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Lien GitHub si existe */}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)] transition hover:border-[var(--text)]/30 hover:text-[var(--text)]"
                        >
                          <IconGithub/>
                          <span>Source code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="experience" className="scroll-mt-24 py-16" {...fadeInUp}>
          <SectionTitle command={t.command.experience} title={t.section.experience} />
          <motion.article
            className="info-card border rounded-lg border-[var(--border)] bg-[var(--surface)]/60 p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-medium">{t.experience.title}</h3>
              <span className="text-xs text-[var(--muted)]">{t.experience.period}</span>
            </div>
            <p className="text-sm text-[var(--text)]">{t.experience.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{t.experience.desc}</p>
          </motion.article>
        </motion.section>

        <motion.section id="education" className="scroll-mt-24 py-16" {...fadeInUp}>
          <SectionTitle command={t.command.education} title={t.section.education} />
          <div className="space-y-6">
            {t.education.map((item, index) => (
              <motion.article
                key={item.title}
                className="info-card border rounded-lg border-[var(--border)] bg-[var(--surface)]/60 p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.07 }}
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <span className="text-xs text-[var(--muted)]">{item.period}</span>
                </div>
                <p className="text-sm text-[var(--text)]">{item.school}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="certifications" className="scroll-mt-24 py-16" {...fadeInUp}>
          <SectionTitle command={t.command.certifications} title={t.section.certifications} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.certifications.map((cert, index) => (
              <motion.article
                key={cert.title}
                className="cert-card overflow-hidden border border-[var(--border)] bg-[var(--surface)]/70"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
              >
                <button className="w-full text-left" onClick={() => setSelectedCertification(cert)}>
                  <img src={cert.image} alt={cert.title} className="h-48 w-full object-cover" loading="lazy" />
                </button>
                <div className="space-y-1 p-4">
                  <h3 className="text-sm font-medium text-[var(--text)]">{cert.title}</h3>
                  <p className="text-xs text-[var(--muted)]">{cert.issuer}</p>
                  <p className="text-xs text-[var(--muted)]">{cert.date}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className=" scroll-mt-24 py-16" {...fadeInUp}>
          <SectionTitle command={t.command.contact} title={t.section.contact} />
          <div >
            {/* <motion.div
              className="border border-[var(--border)] bg-[var(--surface)]/60 p-6 text-sm leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[var(--muted)]">Email</p>
              <a href="mailto:rabenjamandresy@gmail.com" className="mt-2 block text-[var(--text)] underline-offset-4 hover:underline">
                rabenjamandresy@gmail.com
              </a>
              <p className="mt-6 text-[var(--muted)]">GitHub</p>
              <a
                href="github.com/MandresyIsaia/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-[var(--text)] underline-offset-4 hover:underline"
              >
                github.com/MandresyIsaia
              </a>
              <p className="mt-6 text-[var(--muted)]">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/mandresy-rabenja-94352b230/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-[var(--text)] underline-offset-4 hover:underline"
              >
                linkedin.com/in/mandresy-rabenja-94352b230
              </a>
            </motion.div> */}

            <motion.form
              className="border border-[var(--border)] bg-[var(--surface)]/60 p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs text-[var(--muted)]">{t.calTitle}</p>
              <p className="mt-2 text-sm text-[var(--text)]">{t.calSubtitle}</p>

              <div className="mt-4 overflow-hidden rounded-lg border border-[var(--border)]">
                <Cal
                  namespace="30min"
                  calLink="https://cal.com/acm-stage-pkpuw6/15min"
                  style={{ width: "100%", height: "560px", border: "0" }}
                  config={{
                    layout: "month_view",
                    theme: "light",
                  }}
                />
              </div>
            </motion.form>
          </div>
        </motion.section>

        <footer className="border-t border-[var(--border)] py-8 text-xs text-[var(--muted)]">
          {/* Conteneur principal (Gauche et Droite) */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
            
            {/* 1. Partie Gauche : Informations */}
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-[var(--text)]">{t.fullName}</p>
              <p className="mt-2">{t.footerRole}</p>
              <p className="mt-1">{t.footerPassion}</p>
            </div>

            {/* 2. Partie Droite : Icônes */}
            <div className="flex items-center gap-4 text-[var(--text)]">
              <a 
                href="mailto:rabenjamandresy@gmail.com" 
                className="footer-link transition hover:text-[var(--text)]/70" 
                aria-label="Email"
              >
                <IconMail />
              </a>
              <a 
                href="http://github.com/MandresyIsaia/" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-link transition hover:text-[var(--text)]/70" 
                aria-label="GitHub"
              >
                <IconGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/mandresy-rabenja-94352b230/" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-link transition hover:text-[var(--text)]/70" 
                aria-label="LinkedIn"
              >
                <IconLinkedin />
              </a>
            </div>
          </div>

          {/* 3. Partie Bas : Copyright (Centré) */}
          <div className="mt-12 text-center">
            <p>© {new Date().getFullYear()} RABENJA Mandresy. Tous droits réservés.</p>
          </div>
        </footer>
      </main>

      {selectedCertification && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedCertification(null)}>
          <div
            className="max-w-4xl overflow-hidden border border-[var(--accent)] bg-[var(--surface)]"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedCertification.image} alt={selectedCertification.title} className="max-h-[75vh] w-full object-contain" />
            <div className="space-y-1 p-4">
              <h3 className="text-base font-medium text-[var(--text)]">{selectedCertification.title}</h3>
              <p className="text-sm text-[var(--muted)]">{selectedCertification.issuer}</p>
              <p className="text-sm text-[var(--muted)]">{selectedCertification.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
