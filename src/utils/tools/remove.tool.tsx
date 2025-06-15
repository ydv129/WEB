import jsPDF from 'jspdf';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';


export const processRemovePages = async (file: File, pageRange: string) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const newPdf = await PDFDocument.create();
  
  // Parse pages to remove
  const pagesToRemove = pageRange.split(',').map(p => parseInt(p.trim()) - 1).filter(p => !isNaN(p));
  const allPages = Array.from({ length: pdf.getPageCount() }, (_, i) => i);
  const pagesToKeep = allPages.filter(p => !pagesToRemove.includes(p));
  
  if (pagesToKeep.length > 0) {
    const copiedPages = await newPdf.copyPages(pdf, pagesToKeep);
    copiedPages.forEach((page) => newPdf.addPage(page));
    
    const pdfBytes = await newPdf.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    downloadFile(blob, 'pages-removed.pdf');
  }
};
