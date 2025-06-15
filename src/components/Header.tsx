import React, { useState } from 'react';
import { Search, Settings, Github } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    // Implement search functionality
    const toolCards = document.querySelectorAll('[data-tool]');
    const categorySection = document.querySelectorAll('[data-category]');

    toolCards.forEach(card => {
      const title = card.querySelector('.tool-title')?.textContent?.toLowerCase() || '';
      const description = card.querySelector('.tool-description')?.textContent?.toLowerCase() || '';
      const matches = title.includes(term.toLowerCase()) || description.includes(term.toLowerCase());
      
      (card as HTMLElement).style.display = matches ? 'block' : 'none';
    });

    // Hide empty categories
    categorySection.forEach(section => {
      const visibleCards = section.querySelectorAll('[data-tool]:not([style*="display: none"])');
      (section as HTMLElement).style.display = visibleCards.length > 0 ? 'block' : 'none';
    });
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    const categorySection = document.querySelectorAll('[data-category]');
    
    categorySection.forEach(section => {
      const sectionCategory = (section as HTMLElement).dataset.category;
      if (category === 'all' || sectionCategory === category) {
        (section as HTMLElement).style.display = 'block';
      } else {
        (section as HTMLElement).style.display = 'none';
      }
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-800 backdrop-blur-lg border-b border-cyan-400/20 shadow-lg">
      <nav className="flex items-center justify-between p-4 lg:px-6 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Settings className="w-8 h-8 text-cyan-400 drop-shadow-lg" />
          <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            MultiToolsHub
          </h1>
        </div>
        
        <div className="flex gap-6 items-center order-3 lg:order-2">
          {['home', 'features', 'about', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 rounded-lg transition-all duration-300 capitalize ${
                currentPage === page
                  ? 'text-white bg-cyan-400/10 shadow-lg shadow-cyan-400/30'
                  : 'text-gray-300 hover:text-white hover:bg-cyan-400/10'
              }`}
            >
              {page}
            </button>
          ))}
          <a
            href="https://github.com/ydv129"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>
        
        <div className="flex gap-4 items-center order-2 lg:order-3 w-full lg:w-auto">
          <div className="relative flex-1 lg:flex-none">
            <input
              type="text"
              placeholder="Search for tools..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full lg:w-64 bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-2 pr-10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryFilter(e.target.value)}
            className="bg-gray-700 border border-cyan-400/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400 cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="organize">Organize</option>
            <option value="convert-to">Convert to PDF</option>
            <option value="convert-from">Convert from PDF</option>
            <option value="security">Sign & Security</option>
            <option value="view-edit">View & Edit</option>
            <option value="image-tools">Image Tools</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;