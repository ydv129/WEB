export const processPdfToText = async (file: File) => {
  // For demo purposes, we'll create a text file
  const text = 'Extracted text from PDF:\n\nThis is sample text that would be extracted from the PDF file.';
  const blob = new Blob([text], { type: 'text/plain' });
  downloadFile(blob, 'extracted-text.txt');
};
