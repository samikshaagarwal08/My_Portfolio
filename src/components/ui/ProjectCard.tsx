import { ExternalLink } from "lucide-react";

// Project Card Component
export interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  company: string;
  status: string;
  isInProgress?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  skills,
  company,
  status,
  isInProgress = false,
}) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {isInProgress ? (
          <div className="bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded text-sm">
            In Progress
          </div>
        ) : (
          <ExternalLink className="w-5 h-5 text-purple-400" />
        )}
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-400">
        <p>• {company}</p>
        <p>• {status}</p>
      </div>
    </div>
  );
};
