"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import { AboutSection } from "@/components/ui/AboutSection";

import {
  Award,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Sparkles,
} from "lucide-react";
import { EducationSection } from "@/components/ui/EducationSection";
import { ExperienceSection } from "@/components/ui/ExperienceSection";
import { ProjectsSection } from "@/components/ui/ProjectsSection";
import { SkillsSection } from "@/components/ui/SkillsSection";
import { Footer } from "@/components/Footer";

// Section type
export interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // List of section ids in order of appearance
  const sections: Section[] = [
    { id: "hero", title: "Home", icon: <User className="w-4 h-4" /> },
    { id: "about", title: "About", icon: <Sparkles className="w-4 h-4" /> },
    {
      id: "education",
      title: "Education",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      id: "experience",
      title: "Experience",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { id: "projects", title: "Projects", icon: <Code className="w-4 h-4" /> },
    { id: "skills", title: "Skills", icon: <Award className="w-4 h-4" /> },
  ];

  // Fix: Only run scroll handler on client, and use section ids from the DOM
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find the section closest to the top (but not past it)
      let foundSection = "hero";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            foundSection = id;
          }
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial state
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header
        sections={sections}
        activeSection={activeSection}
        isScrolled={isScrolled}
        onSectionClick={scrollToSection}
      />

      <section id="hero">
        <HeroSection onScrollToProjects={() => scrollToSection("projects")} />
      </section>
      <section id="about">
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <Footer />
      </section>
    </div>
  );
}
