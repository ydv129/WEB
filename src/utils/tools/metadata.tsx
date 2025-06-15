export const processMetadata = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  
  const title = pdf.getTitle() || 'No title';
  const author = pdf.getAuthor() || 'No author';
  const subject = pdf.getSubject() || 'No subject';
  const creator = pdf.getCreator() || 'No creator';
  
  const metadata = `PDF Metadata:
Title: ${title}
Author: ${author}
Subject: ${subject}
Creator: ${creator}
Pages: ${pdf.getPageCount()}`;
  
  const blob = new Blob([metadata], { type: 'text/plain' });
  downloadFile(blob, 'metadata.txt');
};