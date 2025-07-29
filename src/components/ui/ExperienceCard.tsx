export interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  isActive: boolean;
  responsibilities: string[];
  skills: string[];
  dotColor: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  duration,
  isActive,
  responsibilities,
  skills,
  dotColor,
}) => {
  return (
    <div className="bg-slate-800/50 p-8 rounded-2xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-purple-400 text-lg">{company}</p>
        </div>
        <span
          className={`${
            isActive
              ? "bg-green-600/20 text-green-400"
              : "bg-gray-600/20 text-gray-400"
          } px-3 py-1 rounded-full text-sm font-semibold`}
        >
          {duration}
        </span>
      </div>
      <ul className="space-y-3 text-gray-300">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className={`w-2 h-2 ${dotColor} rounded-full mt-2`}></div>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-6">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
