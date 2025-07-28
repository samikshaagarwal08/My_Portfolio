"use client";
import React from "react";

export interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export interface NavigationProps {
  sections: Section[];
  activeSection: string;
  isScrolled: boolean;
  onSectionClick: (sectionId: string) => void;
}

export const Header: React.FC<NavigationProps> = ({
  sections,
  activeSection,
  isScrolled,
  onSectionClick,
}) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Samiksha Agarwal
          </div>
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionClick(section.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-purple-600/20"
                }`}
              >
                {section.icon}
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
