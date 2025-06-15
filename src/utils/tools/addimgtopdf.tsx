export const processAddImage = async (pdfFile: File, imageFile: File) => {
  const arrayBuffer = await pdfFile.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  
  const imageArrayBuffer = await imageFile.arrayBuffer();
  const image = await pdf.embedPng(imageArrayBuffer);
  
  const pages = pdf.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();
  
  firstPage.drawImage(image, {
    x: width - 150,
    y: height - 150,
    width: 100,
    height: 100,
  });
  
  const pdfBytes = await pdf.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  downloadFile(blob, 'image-added.pdf');
};