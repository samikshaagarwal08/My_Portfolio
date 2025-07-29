// Skills Section Component
export const SkillsSection: React.FC = () => {
    const skillCategories = [
      {
        title: "Frontend",
        color: "bg-purple-400",
        skills: ["HTML/CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"]
      },
      {
        title: "Mobile",
        color: "bg-blue-400",
        skills: ["Flutter", "Cross-platform", "UI/UX Design", "App Deployment"]
      },
      {
        title: "Languages",
        color: "bg-green-400",
        skills: ["TypeScript", "JavaScript", "C Language", "Dart"]
      },
      {
        title: "Tools",
        color: "bg-pink-400",
        skills: ["Git/GitHub", "VS Code", "REST APIs", "JSON"]
      }
    ];
  
    return (
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} {...category} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  // Skill Category Component
  interface SkillCategoryProps {
    title: string;
    color: string;
    skills: string[];
  }
  
  const SkillCategory: React.FC<SkillCategoryProps> = ({ title, color, skills }) => {
    return (
      <div className="bg-slate-800/50 p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
          <div className={`w-3 h-3 ${color} rounded-full`}></div>
          <span>{title}</span>
        </h3>
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <div key={index} className="text-gray-300">{skill}</div>
          ))}
        </div>
      </div>
    );
  };