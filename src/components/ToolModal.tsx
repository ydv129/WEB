import React from 'react';
import { X } from 'lucide-react';
import { useToolContext } from '../context/ToolContext';
import ToolInterface from './ToolInterface';

const ToolModal: React.FC = () => {
  const { isModalOpen, currentTool, closeModal } = useToolContext();

  if (!isModalOpen || !currentTool) return null;

  const getToolTitle = (toolName: string) => {
    const titles: { [key: string]: string } = {
      'merge': 'Merge PDFs',
      'split': 'Split PDF',
      'extract': 'Extract Pages',
      'remove': 'Remove Pages',
      'crop': 'Crop PDF',
      'rotate': 'Rotate PDF',
      'image-to-pdf': 'Image to PDF',
      'html-to-pdf': 'HTML to PDF',
      'text-to-pdf': 'Text to PDF',
      'markdown-to-pdf': 'Markdown to PDF',
      'pdf-to-image': 'PDF to Image',
      'pdf-to-text': 'PDF to Text',
      'pdf-to-html': 'PDF to HTML',
      'extract-images': 'Extract Images',
      'add-password': 'Add Password',
      'remove-password': 'Remove Password',
      'add-watermark': 'Add Watermark',
      'sign-pdf': 'Sign PDF',
      'ocr': 'OCR / Cleanup',
      'add-image': 'Add Image to PDF',
      'page-numbers': 'Add Page Numbers',
      'metadata': 'View/Edit Metadata',
      'compress': 'Compress PDF',
      'repair': 'Repair PDF',
      'overlay': 'Overlay PDFs',
      'compare': 'Compare PDFs',
      'remove-background': 'Remove Background',
      'add-background': 'Add Background',
      'passport-photo': 'Passport Size Photo',
      'image-compressor': 'Image Compressor'
    };
    return titles[toolName] || 'Tool';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800 border border-cyan-400 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-400/20 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center p-6 border-b border-cyan-400/20">
          <h3 className="text-xl font-semibold text-white">{getToolTitle(currentTool)}</h3>
          <button
            onClick={closeModal}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <ToolInterface toolName={currentTool} />
        </div>
      </div>
    </div>
  );
};

export default ToolModal;