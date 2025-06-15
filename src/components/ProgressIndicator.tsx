import React from 'react';
import { useToolContext } from '../context/ToolContext';

const ProgressIndicator: React.FC = () => {
  const { isProcessing, progressMessage } = useToolContext();

  if (!isProcessing) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-xl border border-cyan-400 shadow-2xl shadow-cyan-400/20 text-center">
        <div className="w-12 h-12 border-3 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg font-medium">{progressMessage}</p>
      </div>
    </div>
  );
};

export default ProgressIndicator;