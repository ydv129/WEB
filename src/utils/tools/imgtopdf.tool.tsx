

import jsPDF from 'jspdf';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export const processImageToPdf = async (files: File[]) => {
  const doc = new jsPDF();
  let isFirstPage = true;

  for (const file of files) {
    if (!isFirstPage) {
      doc.addPage();
    }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    await new Promise((resolve) => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        
        const imgData = canvas.toDataURL('image/jpeg', 0.8);
        const imgWidth = 190;
        const imgHeight = (img.height * imgWidth) / img.width;
        
        doc.addImage(imgData, 'JPEG', 10, 10, imgWidth, imgHeight);
        resolve(null);
      };
      
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
    
    isFirstPage = false;
  }
  
  doc.save('images-to-pdf.pdf');
};
