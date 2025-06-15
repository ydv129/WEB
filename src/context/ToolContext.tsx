import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ToolContextType {
  currentTool: string | null;
  uploadedFiles: File[];
  isModalOpen: boolean;
  isProcessing: boolean;
  progressMessage: string;
  successMessage: string;
  openTool: (toolName: string) => void;
  closeModal: () => void;
  setUploadedFiles: (files: File[]) => void;
  showProgress: (message: string) => void;
  hideProgress: () => void;
  showSuccess: (message: string) => void;
  hideSuccess: () => void;
}

const ToolContext = createContext<ToolContextType | undefined>(undefined);

export const useToolContext = () => {
  const context = useContext(ToolContext);
  if (!context) {
    throw new Error('useToolContext must be used within a ToolProvider');
  }
  return context;
};

interface ToolProviderProps {
  children: ReactNode;
}

export const ToolProvider: React.FC<ToolProviderProps> = ({ children }) => {
  const [currentTool, setCurrentTool] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progressMessage, setProgressMessage] = useState('Processing...');
  const [successMessage, setSuccessMessage] = useState('');

  const openTool = (toolName: string) => {
    setCurrentTool(toolName);
    setIsModalOpen(true);
    setUploadedFiles([]);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTool(null);
    setUploadedFiles([]);
    document.body.style.overflow = 'auto';
  };

  const showProgress = (message: string) => {
    setProgressMessage(message);
    setIsProcessing(true);
  };

  const hideProgress = () => {
    setIsProcessing(false);
  };

  const showSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const hideSuccess = () => {
    setSuccessMessage('');
  };

  return (
    <ToolContext.Provider
      value={{
        currentTool,
        uploadedFiles,
        isModalOpen,
        isProcessing,
        progressMessage,
        successMessage,
        openTool,
        closeModal,
        setUploadedFiles,
        showProgress,
        hideProgress,
        showSuccess,
        hideSuccess,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};