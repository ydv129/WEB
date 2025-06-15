import React from 'react';
import HeroSection from './HeroSection';
import ToolsGrid from './ToolsGrid';

const HomePage: React.FC = () => {
  return (
    <div id="home-page" className="page active">
      <HeroSection />
      <ToolsGrid />
    </div>
  );
};

export default HomePage;