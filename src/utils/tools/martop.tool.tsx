import jsPDF from 'jspdf';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';



export const processMarkdownToPdf = async (markdown: string) => {
  const doc = new jsPDF();
  // Simple markdown to text conversion for demo
  let text = markdown
    .replace(/^# (.*$)/gim, '$1\n')
    .replace(/^## (.*$)/gim, '$1\n')
    .replace(/^### (.*$)/gim, '$1\n')
    .replace(/\*\*(.*)\*\*/gim, '$1')
    .replace(/\*(.*)\*/gim, '$1');
  
  const lines = doc.splitTextToSize(text, 180);
  doc.text(lines, 20, 20);
  doc.save('markdown-document.pdf');
};
