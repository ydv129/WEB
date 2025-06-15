import React, { useRef, useState } from 'react';
import { Upload, X, FileText, Image } from 'lucide-react';
import { useToolContext } from '../context/ToolContext';

const FileUpload: React.FC = () => {
  const { uploadedFiles, setUploadedFiles, currentTool } = useToolContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const getFileTypeText = (toolName: string) => {
    const imageTools = ['image-to-pdf', 'remove-background', 'add-background', 'passport-photo', 'image-compressor'];
    const multiFileTools = ['merge', 'overlay', 'compare'];
    
    if (imageTools.includes(toolName)) {
      return 'Supports JPG, PNG, GIF files up to 10MB';
    } else if (multiFileTools.includes(toolName)) {
      return 'Supports multiple PDF files up to 10MB each';
    } else {
      return 'Supports PDF files up to 10MB';
    }
  };

  const getFileInputAttributes = (toolName: string) => {
    const imageTools = ['image-to-pdf', 'remove-background', 'add-background', 'passport-photo', 'image-compressor'];
    const multiFileTools = ['merge', 'overlay', 'compare'];
    
    if (imageTools.includes(toolName)) {
      return {
        accept: 'image/*',
        multiple: toolName === 'image-compressor' || toolName === 'image-to-pdf'
      };
    } else if (multiFileTools.includes(toolName)) {
      return {
        accept: '.pdf',
        multiple: true
      };
    } else {
      return {
        accept: '.pdf',
        multiple: false
      };
    }
  };

  const handleFileSelect = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      setUploadedFiles(fileArray);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const fileInputProps = getFileInputAttributes(currentTool || '');

  return (
    <div className="mb-6">
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
          dragOver
            ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20'
            : 'border-cyan-400/30 bg-cyan-400/5 hover:border-cyan-400 hover:bg-cyan-400/10'
        }`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
        <div className="text-white text-lg mb-2">Click to upload or drag and drop</div>
        <div className="text-gray-400 text-sm">{getFileTypeText(currentTool || '')}</div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={(e) => handleFileSelect(e.target.files)}
        {...fileInputProps}
      />

      {uploadedFiles.length > 0 && (
        <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-cyan-400/20">
          <h4 className="text-white font-medium mb-4">Selected Files:</h4>
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-cyan-400/10">
                {file.type.startsWith('image/') ? (
                  <Image className="w-5 h-5 text-red-400" />
                ) : (
                  <FileText className="w-5 h-5 text-red-400" />
                )}
                <span className="flex-1 text-white text-sm truncate">{file.name}</span>
                <span className="text-gray-400 text-xs">{formatFileSize(file.size)}</span>
                <button
                  onClick={() => removeFile(index)}
                  className="w-6 h-6 flex items-center justify-center rounded-full text-red-400 hover:bg-red-400/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;