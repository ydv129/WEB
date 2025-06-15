export const processCompressPdf = async (file: File) => {
  // For demo purposes, we'll just save the file with a different name
  const arrayBuffer = await file.arrayBuffer();
  const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
  downloadFile(blob, 'compressed-document.pdf');
};
