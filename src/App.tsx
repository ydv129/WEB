import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import FeaturesPage from './components/FeaturesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ToolModal from './components/ToolModal';
import ProgressIndicator from './components/ProgressIndicator';
import SuccessNotification from './components/SuccessNotification';
import Footer from './components/Footer';
import { ToolProvider } from './context/ToolContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'features':
        return <FeaturesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ToolProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="main-content">
          <div className="container mx-auto px-6 max-w-7xl">
            {renderPage()}
          </div>
        </main>
        <Footer setCurrentPage={setCurrentPage} />
        <ToolModal />
        <ProgressIndicator />
        <SuccessNotification />
      </div>
    </ToolProvider>
  );
}

export default App;