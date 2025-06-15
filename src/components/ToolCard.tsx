import React from 'react';
import { useToolContext } from '../context/ToolContext';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { openTool } = useToolContext();
  const ToolIcon = tool.icon;

  return (
    <div 
      className="bg-gray-800 border border-cyan-400/20 rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400 relative overflow-hidden group"
      data-tool={tool.id}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex items-center justify-center w-15 h-15 bg-cyan-400/10 rounded-lg mb-4 group-hover:bg-cyan-400/20 group-hover:shadow-lg group-hover:shadow-cyan-400/40 transition-all duration-300">
        <ToolIcon className="w-6 h-6 text-cyan-400" />
      </div>
      
      <h4 className="tool-title text-lg font-semibold mb-2 text-white">{tool.title}</h4>
      <p className="tool-description text-gray-400 text-sm mb-6 leading-relaxed">{tool.description}</p>
      
      <button
        onClick={() => openTool(tool.id)}
        className="w-full bg-gradient-to-r from-blue-400 to-cyan-400 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/40 relative overflow-hidden group"
      >
        <span className="relative z-10">Open Tool</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
      </button>
    </div>
  );
};

export default ToolCard;