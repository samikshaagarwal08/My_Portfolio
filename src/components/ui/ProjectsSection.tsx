import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC = () => {
    const projects = [
      {
        title: "Ekinch App v3",
        description: "Mobile app for local businesses to grow their digital presence. Available on Google Play Store.",
        skills: ["Flutter", "UI/UX"],
        company: "Ovolo IT Building Solutions",
        status: "Published on Play Store"
      },
      {
        title: "ZOC Website",
        description: "Modern, responsive company website built with cutting-edge web technologies.",
        skills: ["Next.js", "TypeScript", "Tailwind"],
        company: "Zero One Creation",
        status: "Live Production Website"
      },
      {
        title: "ZOC Mobile App",
        description: "Cross-platform mobile application being developed for Zero One Creation.",
        skills: ["Flutter", "Cross-platform"],
        company: "Zero One Creation",
        status: "Under Development",
        isInProgress: true
      }
    ];
  
    return (
      <section id="projects" className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    );
  };