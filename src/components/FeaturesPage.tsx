import React from 'react';
import { Shield, Zap, Smartphone, DollarSign, Settings, Code, Layers, ArrowRight, ArrowLeft, Edit, Images } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: '100% Secure & Private',
      description: 'All processing happens in your browser. Your files never leave your device, ensuring complete privacy and security.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'No server uploads or downloads. Process your files instantly with our optimized browser-based algorithms.'
    },
    {
      icon: Smartphone,
      title: 'Works Everywhere',
      description: 'Fully responsive design that works perfectly on desktop, tablet, and mobile devices. No app installation required.'
    },
    {
      icon: DollarSign,
      title: 'Completely Free',
      description: 'All tools are free to use with no hidden costs, subscriptions, or limitations. Professional results at zero cost.'
    },
    {
      icon: Settings,
      title: '35+ Professional Tools',
      description: 'Comprehensive suite of PDF and image tools covering everything from basic operations to advanced processing.'
    },
    {
      icon: Code,
      title: 'Open Source',
      description: 'Built with modern web technologies and available on GitHub. Contribute to the project or customize for your needs.'
    }
  ];

  const categories = [
    {
      icon: Layers,
      title: 'Organize PDFs',
      description: 'Merge, split, extract, remove, crop, and rotate PDF pages with precision.'
    },
    {
      icon: ArrowRight,
      title: 'Convert to PDF',
      description: 'Transform images, HTML, text, and Markdown files into professional PDFs.'
    },
    {
      icon: ArrowLeft,
      title: 'Convert from PDF',
      description: 'Extract content from PDFs as images, text, HTML, or other formats.'
    },
    {
      icon: Shield,
      title: 'Sign & Security',
      description: 'Add passwords, watermarks, signatures, and manage PDF security settings.'
    },
    {
      icon: Edit,
      title: 'View & Edit',
      description: 'OCR processing, add images, page numbers, and edit PDF metadata.'
    },
    {
      icon: Images,
      title: 'Image Tools',
      description: 'Remove backgrounds, create passport photos, compress images, and more.'
    }
  ];

  return (
    <div className="py-16">
      <section className="text-center py-16 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Powerful Features
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover what makes MultiToolsHub the ultimate toolkit for your document and image needs
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => {
          const FeatureIcon = feature.icon;
          return (
            <div key={index} className="bg-gray-800 border border-cyan-400/20 rounded-xl p-6 text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400">
              <FeatureIcon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-800 border border-cyan-400/20 rounded-xl p-8">
        <h3 className="text-2xl lg:text-3xl font-bold text-center text-white mb-8">Tool Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <div key={index} className="text-center">
                <h4 className="flex items-center justify-center gap-2 text-cyan-400 font-semibold mb-2">
                  <CategoryIcon className="w-5 h-5" />
                  {category.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;