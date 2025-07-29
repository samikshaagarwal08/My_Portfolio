// Education Card Component
export interface EducationCardProps {
    title: string;
    school: string;
    score: string;
    year: string;
  }
  
export const EducationCard: React.FC<EducationCardProps> = ({ title, school, score, year }) => {
    return (
      <div className="bg-slate-800/30 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-purple-400 mb-2">{school}</p>
        <p className="text-white font-semibold">{score} • {year}</p>
      </div>
    );
  };