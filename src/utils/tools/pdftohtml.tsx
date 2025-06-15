export const processPdfToHtml = async (file: File) => {
  // For demo purposes, we'll create an HTML file
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Converted PDF</title>
</head>
<body>
    <h1>PDF Content</h1>
    <p>This is the converted content from the PDF file.</p>
</body>
</html>`;
  const blob = new Blob([html], { type: 'text/html' });
  downloadFile(blob, 'converted-pdf.html');
};