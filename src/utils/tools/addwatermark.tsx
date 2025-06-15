export const processAddWatermark = async (file: File, text: string, opacity: number) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const helveticaFont = await pdf.embedFont(StandardFonts.Helvetica);
  
  const pages = pdf.getPages();
  pages.forEach(page => {
    const { width, height } = page.getSize();
    page.drawText(text, {
      x: width / 2 - 50,
      y: height / 2,
      size: 50,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5),
      opacity: opacity,
    });
  });
  
  const pdfBytes = await pdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  downloadFile(blob, 'watermarked-document.pdf');
};
