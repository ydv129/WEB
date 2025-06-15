export const processSignPdf = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const helveticaFont = await pdf.embedFont(StandardFonts.Helvetica);
  
  const pages = pdf.getPages();
  const firstPage = pages[0];
  const { width } = firstPage.getSize();
  
  firstPage.drawText('Digital Signature', {
    x: width - 150,
    y: 50,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 1),
  });
  
  const pdfBytes = await pdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  downloadFile(blob, 'signed-document.pdf');
};