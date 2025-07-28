import { Award, MapPin } from "lucide-react";

const skills = [
  { name: "Time Management", color: "bg-purple-400" },
  { name: "Attention to Detail", color: "bg-pink-400" },
  { name: "Self Learning", color: "bg-blue-400" },
  { name: "Team Collaboration", color: "bg-green-400" },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I&apos;m a passionate Computer Science student currently in my 3rd
              year at College of Engineering Roorkee. With a CGPA of 8.87 and
              ranking 1st in my CSE branch, I combine academic excellence with
              practical experience.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Currently working as a Frontend Development Intern at two leading
              companies, I specialize in creating responsive web applications
              and mobile apps that deliver exceptional user experiences.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">Location</span>
                </div>
                <p className="text-gray-300">Roorkee, Uttarakhand</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">Rank</span>
                </div>
                <p className="text-gray-300">1st in CSE Branch</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Personal Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${skill.color} rounded-full`}></div>
                  <span className="text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
