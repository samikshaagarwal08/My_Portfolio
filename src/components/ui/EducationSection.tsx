import { EducationCard } from "./EducationCard";

// Education Section Component
export const EducationSection: React.FC = () => {
    return (
      <section id="education" className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">B.Tech. Computer Science and Engineering</h3>
                  <p className="text-purple-400 text-lg">College of Engineering Roorkee, Uttarakhand</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">CGPA: 8.87</p>
                  <p className="text-gray-400">2022 - 2026</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg">
                <p className="text-white font-semibold">🏆 Ranked 1st in CSE Branch (First Year)</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <EducationCard
                title="Class XII (CBSE)"
                school="Chandra Shaikhar Sr. Sec. Public School"
                score="95.6%"
                year="2022"
              />
              <EducationCard
                title="Class X (CBSE)"
                school="Chandra Shaikhar Sr. Sec. Public School"
                score="96.4%"
                year="2020"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  