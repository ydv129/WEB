
import jsPDF from 'jspdf';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';


export const processTextToPdf = async (text: string, fontSize: number) => {
  const doc = new jsPDF();
  const lines = doc.splitTextToSize(text, 180);
  doc.setFontSize(fontSize);
  doc.text(lines, 20, 20);
  doc.save('text-document.pdf');
};