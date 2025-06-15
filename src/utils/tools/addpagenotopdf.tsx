export const processPageNumbers = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const helveticaFont = await pdf.embedFont(StandardFonts.Helvetica);
  
  const pages = pdf.getPages();
  pages.forEach((page, index) => {
    const { width } = page.getSize();
    page.drawText(`${index + 1}`, {
      x: width / 2,
      y: 30,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  });
  
  const pdfBytes = await pdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  downloadFile(blob, 'numbered-document.pdf');
};
