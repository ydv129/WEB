import React from 'react';
import { User, Code, Smartphone, Github } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16">
      <section className="text-center py-16 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          About MultiToolsHub
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Your trusted companion for document and image processing
        </p>
      </section>

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="bg-gray-800 border border-cyan-400/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4 border-b-2 border-cyan-400 pb-2">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            MultiToolsHub was created with a simple yet powerful mission: to provide everyone with access to professional-grade document and image processing tools without the need for expensive software or compromising privacy. We believe that powerful tools should be accessible, secure, and completely free.
          </p>
        </div>

        <div className="bg-gray-800 border border-cyan-400/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-cyan-400 pb-2">Why MultiToolsHub?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Privacy First</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Your files are processed entirely in your browser. We never see, store, or have access to your documents. What happens on your device, stays on your device.</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">No Installation Required</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Access all tools instantly through your web browser. No downloads, no installations, no system requirements to worry about.</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Professional Quality</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Our tools deliver professional-grade results that rival expensive desktop software, all powered by cutting-edge web technologies.</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Constantly Evolving</h4>
              <p className="text-gray-300 text-sm leading-relaxed">We regularly add new tools and features based on user feedback and emerging needs in document processing.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border border-cyan-400/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-cyan-400 pb-2">Technology Stack</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            MultiToolsHub is built using modern web technologies including React, TypeScript, and powerful browser APIs. We leverage Canvas, FileReader, and Web Workers to deliver desktop-class performance in your browser.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">React & TypeScript for optimal performance</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Responsive design for all devices</span>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Open source and community-driven</span>
            </div>
            <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">HTML5 Canvas for image processing</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border border-cyan-400/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-cyan-400 pb-2">Developer</h3>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <User className="w-16 h-16 text-cyan-400" />
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-white mb-2">Yadav (ydv129)</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Full-stack developer passionate about creating useful tools that make people's lives easier. Committed to open-source development and user privacy.
              </p>
              <a
                href="https://github.com/ydv129"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400/20 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border border-cyan-400/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-cyan-400 pb-2">Future Roadmap</h3>
          <ul className="space-y-3">
            {[
              'Advanced OCR capabilities with multiple language support',
              'Batch processing for multiple files',
              'Cloud storage integration (optional)',
              'Advanced image editing tools',
              'PDF form creation and editing',
              'API access for developers'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-cyan-400 mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;