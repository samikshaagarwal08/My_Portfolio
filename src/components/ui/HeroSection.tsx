import { ChevronDown, Code, Linkedin, Mail, Phone } from "lucide-react";

interface HeroProps {
  onScrollToProjects: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onScrollToProjects }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Samiksha
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Frontend Developer & Flutter Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Computer Science undergraduate with expertise in React.js, Flutter,
            and modern web technologies. Currently building innovative solutions
            at leading tech companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="mailto:samikshaagarwal459@gmail.com"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
            <button
              onClick={onScrollToProjects}
              className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Code className="w-5 h-5" />
              <span>View Projects</span>
            </button>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/agarwal-samiksha/"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:samikshaagarwal459@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:6398468436"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};
