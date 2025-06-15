import React, { useState } from 'react';
import { Github, Bug, Lightbulb, Code } from 'lucide-react';
import { useToolContext } from '../context/ToolContext';

const ContactPage: React.FC = () => {
  const { showProgress, hideProgress, showSuccess } = useToolContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    showProgress('Sending message...');
    
    // Simulate form submission
    setTimeout(() => {
      hideProgress();
      showSuccess('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const faqs = [
    {
      question: 'Is MultiToolsHub really free?',
      answer: 'Yes! All tools are completely free to use with no hidden costs, subscriptions, or limitations.'
    },
    {
      question: 'Are my files safe and private?',
      answer: 'Absolutely. All processing happens in your browser. Your files never leave your device or get uploaded to any server.'
    },
    {
      question: 'Do I need to install anything?',
      answer: 'No installation required. MultiToolsHub works directly in your web browser on any device.'
    },
    {
      question: 'Can I use this on mobile devices?',
      answer: 'Yes! MultiToolsHub is fully responsive and works great on smartphones and tablets.'
    },
    {
      question: 'How can I contribute to the project?',
      answer: 'Visit our GitHub repository to report issues, suggest features, or contribute code. All contributions are welcome!'
    },
    {
      question: 'What file formats are supported?',
      answer: 'We support PDF, JPG, PNG, GIF, HTML, TXT, MD files and more. Check individual tools for specific format support.'
    }
  ];

  return (
    <div className="py-16">
      <section className="text-center py-16 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Have questions, suggestions, or need help? We'd love to hear from you!
        </p>
      </section>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-cyan-400 pb-2">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 bg-gray-800 rounded-lg border border-cyan-400/20 hover:border-cyan-400 transition-colors">
                <Github className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">GitHub</h4>
                  <p className="text-gray-400 text-sm mb-2">Report issues, contribute code, or star the project</p>
                  <a href="https://github.com/ydv129" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    github.com/ydv129
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gray-800 rounded-lg border border-cyan-400/20 hover:border-cyan-400 transition-colors">
                <Bug className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Bug Reports</h4>
                  <p className="text-gray-400 text-sm mb-2">Found a bug? Help us improve by reporting it</p>
                  <a href="https://github.com/ydv129/multitoolshub/issues" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    Report Issue
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gray-800 rounded-lg border border-cyan-400/20 hover:border-cyan-400 transition-colors">
                <Lightbulb className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Feature Requests</h4>
                  <p className="text-gray-400 text-sm mb-2">Have an idea for a new tool or feature?</p>
                  <a href="https://github.com/ydv129/multitoolshub/discussions" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    Suggest Feature
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gray-800 rounded-lg border border-cyan-400/20 hover:border-cyan-400 transition-colors">
                <Code className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Contribute</h4>
                  <p className="text-gray-400 text-sm mb-2">Want to contribute code or documentation?</p>
                  <a href="https://github.com/ydv129/multitoolshub/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    Contribution Guide
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-cyan-400 pb-2">Send a Message</h3>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg border border-cyan-400/20">
              <div className="mb-4">
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="">Select a subject</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="help">Need Help</option>
                  <option value="feedback">General Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Please describe your question, issue, or feedback in detail..."
                  className="w-full bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-cyan-400 text-gray-900 font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-400/40 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center border-b-2 border-cyan-400 pb-2">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-cyan-400/20">
                <h4 className="text-cyan-400 font-semibold mb-2 text-sm">{faq.question}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;