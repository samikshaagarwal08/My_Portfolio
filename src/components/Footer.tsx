import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Footer: React.FC = () => {
    return (
      <footer className="py-12 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s Connect!</h2>
          <p className="text-gray-300 mb-8">
            I&apos;m always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:samikshaagarwal459@gmail.com"
              className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>samikshaagarwal459@gmail.com</span>
            </a>
            <a
              href="tel:6398468436"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 6398468436</span>
            </a>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/agarwal-samiksha/"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            {/* <a
              href="mailto:samikshaagarwal459@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a> */}
            <a
              href="https://github.com/samikshaagarwal08"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © 2025 Samiksha Agarwal. Crafted with 💜 using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    );
  };
  