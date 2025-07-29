import { ExperienceCard } from "./ExperienceCard";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-12">
          <ExperienceCard
            title="Frontend Development Intern"
            company="Ovolo IT Building Solutions Pvt. Ltd."
            duration="Jan 2025 - Present"
            isActive={true}
            responsibilities={[
              "Contributed to Ekinch App v3 development and deployment on Google Play Store",
              "Developed responsive frontend UI components using Flutter",
              "Enhanced mobile app performance and cross-device compatibility",
            ]}
            skills={["Flutter", "UI Development", "Mobile Apps"]}
            dotColor="bg-purple-400"
          />

          <ExperienceCard
            title="Frontend Web Development Intern"
            company="Zero One Creation"
            duration="Sep 2024 - Present"
            isActive={true}
            responsibilities={[
              "Built and optimized company website using Next.js and Tailwind CSS",
              "Integrated RESTful APIs and improved overall site responsiveness",
              "Collaborated on Flutter mobile app development projects",
            ]}
            skills={["Next.js", "React", "Tailwind CSS", "TypeScript"]}
            dotColor="bg-pink-400"
          />
        </div>
      </div>
    </section>
  );
};
