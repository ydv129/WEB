import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useToolContext } from '../context/ToolContext';

const SuccessNotification: React.FC = () => {
  const { successMessage } = useToolContext();

  if (!successMessage) return null;

  return (
    <div className="fixed top-5 right-5 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-right duration-300">
      <CheckCircle className="w-5 h-5" />
      <span className="font-medium">{successMessage}</span>
    </div>
  );
};

export default SuccessNotification;