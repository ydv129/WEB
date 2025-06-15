export const processOcr = async (file: File) => {
  // For demo purposes, we'll create a text file with OCR results
  const text = 'OCR Results:\n\nThis is the text that would be extracted from the PDF using OCR technology.';
  const blob = new Blob([text], { type: 'text/plain' });
  downloadFile(blob, 'ocr-results.txt');
};