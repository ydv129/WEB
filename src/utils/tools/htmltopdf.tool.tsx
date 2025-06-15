

import jsPDF from 'jspdf';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';


export const processHtmlToPdf = async (html: string) => {
  const doc = new jsPDF();
  // Simple HTML to text conversion for demo
  const text = html.replace(/<[^>]*>/g, '');
  const lines = doc.splitTextToSize(text, 180);
  doc.text(lines, 20, 20);
  doc.save('html-document.pdf');
};
