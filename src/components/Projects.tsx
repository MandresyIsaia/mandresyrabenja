import SectionHeader from './SectionHeader';

interface Project {
  title: string;
  type: string;
  typeColor: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'GUARD - Projet de fin d\'études',
    type: 'Professionnel',
    typeColor: 'text-terminal-green bg-terminal-green/10 border-terminal-green/30',
    description:
      'Le projet, nommé Guard : Global Unified Automated Defense, consiste à développer une application web innovante permettant la gestion en temps réel des agents de sécurité (Utilisation de Mercure). L\'application vise à offrir aux clients la possibilité de commander des services, de délimiter des zones à sécuriser, de communiquer, de suivre ses agents sur le terrain et de faire des analyses grâce au dashboard et aux rapports. Dans le projet, on peut aussi trouver une interface dédiée à l\'agent pour lui permettre de suivre ses tâches, de recevoir et envoyer des messages, de voir ses notifications, de suivre en temps réel ses déplacements et ceux de ses co-worker sur une map et d\'envoyer des alertes. Coté Administrateur, la possibilité de gérer toutes les ressources telles que les payements, les agents, les packs, et bien plus. Il dispose aussi d\'un tableau de bord pour fluidifier le controle.',
    tags: [
      'Symfony',
      'PostgreSQL',
      'Tailwind CSS',
      'Mercure hub',
      'SIG',
      'JavaScript',
      'Leaflet',
      'Docker',
    ],
    featured: true,
  },
  {
    title: 'Mini-Framework MVC Java Personnalisé',
    type: 'Projet D\'Études',
    typeColor: 'text-terminal-cyan bg-terminal-cyan/10 border-terminal-cyan/30',
    description:
      'Conception d\'une librairie Java (Framework) destinée à simplifier le développement d\'applications web dynamiques, permettant aux développeurs de mapper automatiquement des URLs vers des méthodes Java via un système d\'annotations personnalisées. Développement axé sur l\'architecture MVC (Modèle-Vue-Contrôleur) avec configuration par Servlet, offrant une gestion fluide des contrôleurs sans configuration XML complexe pour chaque route.',
    tags: ['Java', 'Batch'],
  },
  {
    title: 'Plateforme de Simulation de Transactions de Cryptomonnaies',
    type: 'Académique',
    typeColor: 'text-terminal-cyan bg-terminal-cyan/10 border-terminal-cyan/30',
    description:
      'Développement d\'une application web complète dédiée à la simulation d\'échanges et de transactions de cryptomonnaies. Le système permet de gérer des flux financiers virtuels et d\'interagir avec des services externes (API d\'identité). L\'architecture repose sur Symfony pour une logique métier robuste et Twig pour le rendu dynamique, le tout connecté à une base de données PostgreSQL et conteneurisé pour faciliter le déploiement.',
    tags: ['Symfony', 'PostgreSQL', 'JavaScript', 'CSS', 'Twig', 'Docker'],
  },
  {
    title: 'Système de Gestion de Boulangerie "BoulanG"',
    type: 'Académique',
    typeColor: 'text-terminal-cyan bg-terminal-cyan/10 border-terminal-cyan/30',
    description:
      'Développement d\'une application web complète pour la gestion d\'une boulangerie, centralisant la production, les commandes et les stocks. Solution bâtie sur Spring Boot pour une architecture robuste, utilisant des pages JSP/JSTL pour l\'interface utilisateur et connectée à une base de données PostgreSQL. Intégration d\'une librairie personnalisée "MyBase" pour des besoins spécifiques de persistance.',
    tags: [
      'Spring Boot 3.4.1',
      'Java',
      'JavaScript',
      'JSP',
      'PostgreSQL',
      'Maven',
      'Apache Tomcat',
    ],
  },
  {
    title: 'Système de Gestion Scolaire (API) - École Andoharanofotsy',
    type: 'Personnel',
    typeColor: 'text-terminal-purple bg-terminal-purple/10 border-terminal-purple/30',
    description:
      'Développement d\'une API backend pour la gestion informatisée de l\'école Andoharanofotsy. Le projet est construit sur la stack .NET (C#) et structure les données scolaires à travers une architecture API RESTful. Il inclut des fonctionnalités de gestion des élèves, des classes ou de l\'administration, exposées via des contrôleurs pour être consommées par une interface client.',
    tags: [
      'C# (.NET)',
      'ASP.NET Core Web API',
      'JSON',
      'HTML',
      'JavaScript',
      'CSS',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader command="cd projects/ && ls -l" title="Projets" />

        {/* Featured project */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <div
              key={project.title}
              className="mb-8 bg-terminal-card/60 backdrop-blur border border-terminal-green/30 rounded-lg overflow-hidden card-hover"
            >
              {/* Featured badge */}
              <div className="bg-terminal-green/10 border-b border-terminal-green/20 px-6 py-2 flex items-center gap-2">
                <span className="text-terminal-green text-xs">★</span>
                <span className="text-terminal-green text-xs font-semibold tracking-wider uppercase">
                  Projet Principal
                </span>
              </div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${project.typeColor} w-fit`}
                  >
                    {project.type}
                  </span>
                </div>
                <p className="text-terminal-text/70 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-terminal-green/5 border border-terminal-green/20 rounded text-terminal-green/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className="bg-terminal-card/60 backdrop-blur border border-terminal-border/50 rounded-lg p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${project.typeColor} w-fit`}
                  >
                    {project.type}
                  </span>
                </div>
                <p className="text-terminal-text/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-terminal-border/20 border border-terminal-border/40 rounded text-terminal-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
