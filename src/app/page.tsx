"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/ui/HeroSection";

import {
  Award,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Sparkles,
} from "lucide-react";

// Section type
export interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const current = sections.find(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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

      <div id="hero">
        <HeroSection onScrollToProjects={() => scrollToSection("projects")} />
      </div>
    </div>
  );
}
