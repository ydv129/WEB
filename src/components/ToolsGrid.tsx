import React from 'react';
import ToolCategory from './ToolCategory';
import { Layers, ArrowRight, ArrowLeft, Shield, Edit, Images, Settings, Compass as Compress, Scissors, FileText, Trash2, Crop, RotateCw, Image, Code, FileType, BookMarked as Markdown, FileImage, Type, Lock, Unlock, Droplets, PenTool, Eye, Plus, Hash, Info, Wrench, GitCompare, Palette, CreditCard, Archive, Wand2 } from 'lucide-react';

const ToolsGrid: React.FC = () => {
  const categories = [
    {
      id: 'organize',
      title: 'Organize PDFs',
      icon: Layers,
      tools: [
        { id: 'merge', title: 'Merge PDFs', description: 'Combine multiple PDF files into a single document', icon: Compress },
        { id: 'split', title: 'Split PDF', description: 'Divide a PDF into multiple separate files', icon: Scissors },
        { id: 'extract', title: 'Extract Pages', description: 'Extract specific pages from your PDF document', icon: FileText },
        { id: 'remove', title: 'Remove Pages', description: 'Delete unwanted pages from your PDF', icon: Trash2 },
        { id: 'crop', title: 'Crop PDF', description: 'Trim pages to focus on specific content areas', icon: Crop },
        { id: 'rotate', title: 'Rotate PDF', description: 'Rotate pages to the desired orientation', icon: RotateCw },
      ]
    },
    {
      id: 'convert-to',
      title: 'Convert to PDF',
      icon: ArrowRight,
      tools: [
        { id: 'image-to-pdf', title: 'Image to PDF', description: 'Convert images (JPG, PNG, GIF) to PDF format', icon: Image },
        { id: 'html-to-pdf', title: 'HTML to PDF', description: 'Convert HTML content to PDF documents', icon: Code },
        { id: 'text-to-pdf', title: 'Text to PDF', description: 'Create PDF from plain text content', icon: FileType },
        { id: 'markdown-to-pdf', title: 'Markdown to PDF', description: 'Convert Markdown files to PDF format', icon: Markdown },
      ]
    },
    {
      id: 'convert-from',
      title: 'Convert from PDF',
      icon: ArrowLeft,
      tools: [
        { id: 'pdf-to-image', title: 'PDF to Image', description: 'Convert PDF pages to image files', icon: FileImage },
        { id: 'pdf-to-text', title: 'PDF to Text', description: 'Extract text content from PDF documents', icon: Type },
        { id: 'pdf-to-html', title: 'PDF to HTML', description: 'Convert PDF content to HTML format', icon: Code },
        { id: 'extract-images', title: 'Extract Images', description: 'Extract all images from PDF documents', icon: Images },
      ]
    },
    {
      id: 'security',
      title: 'Sign & Security',
      icon: Shield,
      tools: [
        { id: 'add-password', title: 'Add Password', description: 'Protect your PDF with password encryption', icon: Lock },
        { id: 'remove-password', title: 'Remove Password', description: 'Remove password protection from PDF files', icon: Unlock },
        { id: 'add-watermark', title: 'Add Watermark', description: 'Add custom watermarks to your PDF pages', icon: Droplets },
        { id: 'sign-pdf', title: 'Sign PDF', description: 'Add digital signatures to your documents', icon: PenTool },
      ]
    },
    {
      id: 'view-edit',
      title: 'View & Edit',
      icon: Edit,
      tools: [
        { id: 'ocr', title: 'OCR / Cleanup', description: 'Optical character recognition and cleanup', icon: Eye },
        { id: 'add-image', title: 'Add Image to PDF', description: 'Insert images into existing PDF documents', icon: Plus },
        { id: 'page-numbers', title: 'Add Page Numbers', description: 'Add page numbering to your PDF documents', icon: Hash },
        { id: 'metadata', title: 'View/Edit Metadata', description: 'View and modify PDF document properties', icon: Info },
      ]
    },
    {
      id: 'image-tools',
      title: 'Image Tools',
      icon: Images,
      tools: [
        { id: 'remove-background', title: 'Remove Background', description: 'Automatically remove background from images', icon: Wand2 },
        { id: 'add-background', title: 'Add Background', description: 'Add custom backgrounds to your images', icon: Palette },
        { id: 'passport-photo', title: 'Passport Size Photo', description: 'Create passport-sized photos with proper dimensions', icon: CreditCard },
        { id: 'image-compressor', title: 'Image Compressor', description: 'Reduce image file size while maintaining quality', icon: Archive },
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced',
      icon: Settings,
      tools: [
        { id: 'compress', title: 'Compress PDF', description: 'Reduce PDF file size while maintaining quality', icon: Archive },
        { id: 'repair', title: 'Repair PDF', description: 'Fix corrupted or damaged PDF files', icon: Wrench },
        { id: 'overlay', title: 'Overlay PDFs', description: 'Combine content from multiple PDFs as layers', icon: Layers },
        { id: 'compare', title: 'Compare PDFs', description: 'Find differences between two PDF documents', icon: GitCompare },
      ]
    }
  ];

  return (
    <section className="pb-16" id="toolsGrid">
      {categories.map((category) => (
        <ToolCategory key={category.id} category={category} />
      ))}
    </section>
  );
};

export default ToolsGrid;