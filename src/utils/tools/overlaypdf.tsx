export const processOverlayPdf = async (files: File[]) => {
  const basePdf = await PDFDocument.load(await files[0].arrayBuffer());
  
  for (let i = 1; i < files.length; i++) {
    const overlayPdf = await PDFDocument.load(await files[i].arrayBuffer());
    const [overlayPage] = await basePdf.copyPages(overlayPdf, [0]);
    basePdf.addPage(overlayPage);
  }
  
  const pdfBytes = await basePdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  downloadFile(blob, 'overlayed-document.pdf');
};