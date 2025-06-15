import React from 'react';
import { Github } from 'lucide-react';
import { useToolContext } from '../context/ToolContext';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { openTool } = useToolContext();

  return (
    <footer className="bg-gray-800 border-t border-cyan-400/20 py-12 mt-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">MultiToolsHub</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your ultimate PDF & image toolkit. Free, secure, and powerful tools for all your document needs.
            </p>
            <a
              href="https://github.com/ydv129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'features', 'about', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => setCurrentPage(page)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Tools</h4>
            <ul className="space-y-2">
              {[
                { id: 'merge', name: 'Merge PDFs' },
                { id: 'compress', name: 'Compress PDF' },
                { id: 'remove-background', name: 'Remove Background' },
                { id: 'image-compressor', name: 'Image Compressor' }
              ].map((tool) => (
                <li key={tool.id}>
                  <button
                    onClick={() => openTool(tool.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {tool.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/ydv129" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyan-400/20 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            &copy; 2025 MultiToolsHub. Developed by{' '}
            <a href="https://github.com/ydv129" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Yadav (ydv129)
            </a>
            . All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">Open source project - Free to use, modify, and distribute.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;