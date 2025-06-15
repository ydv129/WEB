import jsPDF from 'jspdf';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export const processExtractPages = async (file: File, pageRange: string) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const newPdf = await PDFDocument.create();
  
  // Parse page range (simplified)
  const pages = pageRange.split(',').map(p => parseInt(p.trim()) - 1).filter(p => !isNaN(p));
  
  if (pages.length > 0) {
    const copiedPages = await newPdf.copyPages(pdf, pages);
    copiedPages.forEach((page) => newPdf.addPage(page));
    
    const pdfBytes = await newPdf.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    downloadFile(blob, 'extracted-pages.pdf');
  }
};
