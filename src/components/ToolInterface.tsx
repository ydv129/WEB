import React, { useState } from 'react';
import FileUpload from './FileUpload';
import { useToolContext } from '../context/ToolContext';
import { processTextToPdf } from '../utils/tools/texttopdf.tool';
import { processHtmlToPdf } from '../utils/tools/htmltopdf.tool';
import { processImageToPdf } from '../utils/tools/imgtopdf.tool';
import { processPdfToImage } from '../utils/tools/pdftoimage';
import { processImageCompression } from '../utils/tools/imagecompressor';
import { processRemoveBackground } from '../utils/tools/removebg';
import { processAddBackground } from '../utils/tools/addbg';
import { processPassportPhoto } from '../utils/tools/passportphot';
import { processMergePdf } from '../utils/tools/merge.tool';
import { processSplitPdf } from '../utils/tools/split.tool';
import { processExtractPages } from '../utils/tools/extract.too';
import { processRemovePages } from '../utils/tools/remove.tool';
import { processCropPdf } from '../utils/tools/crop.tool';
import { processRotatePdf } from '../utils/tools/rotate.tool';
import { processCompressPdf } from '../utils/tools/compresspdf';
import { processAddPassword } from '../utils/tools/addpassword';
import { processRemovePassword } from '../utils/tools/removepassword';
import { processAddWatermark } from '../utils/tools/addwatermark';
import { processSignPdf } from '../utils/tools/signpdf';
import { processOcr } from '../utils/tools/ocrcleanup';
import { processAddImage } from '../utils/tools/addimgtopdf';
import { processPageNumbers } from '../utils/tools/addpagenotopdf';
import { processMetadata } from '../utils/tools/metadata';
import { processRepairPdf } from '../utils/tools/repairpdf';
import { processOverlayPdf } from '../utils/tools/overlaypdf';
import { processComparePdf } from '../utils/tools/comparepdf';
import { processPdfToText } from '../utils/tools/pdftotext';
import { processPdfToHtml } from '../utils/tools/pdftohtml';
import { processExtractImages } from '../utils/tools/extractimages';
import { processMarkdownToPdf } from '../utils/tools/martop.tool';

interface ToolInterfaceProps {
  toolName: string;
}

const ToolInterface: React.FC<ToolInterfaceProps> = ({ toolName }) => {
  const { uploadedFiles, closeModal, showProgress, hideProgress, showSuccess } = useToolContext();
  const [textInput, setTextInput] = useState('');
  const [htmlInput, setHtmlInput] = useState('');
  const [markdownInput, setMarkdownInput] = useState('');
  const [fontSize, setFontSize] = useState(14);
  const [watermarkText, setWatermarkText] = useState('');
  const [watermarkOpacity, setWatermarkOpacity] = useState(0.3);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [photoSize, setPhotoSize] = useState('passport');
  const [compressionQuality, setCompressionQuality] = useState(0.8);
  const [password, setPassword] = useState('');
  const [pageRange, setPageRange] = useState('');
  const [rotationAngle, setRotationAngle] = useState(90);

  const handleProcess = async () => {
    try {
      showProgress(`Processing ${toolName}...`);

      switch (toolName) {
        case 'text-to-pdf':
          if (!textInput.trim()) {
            alert('Please enter some text to convert to PDF.');
            hideProgress();
            return;
          }
          await processTextToPdf(textInput, fontSize);
          break;

        case 'html-to-pdf':
          if (!htmlInput.trim()) {
            alert('Please enter HTML content to convert to PDF.');
            hideProgress();
            return;
          }
          await processHtmlToPdf(htmlInput);
          break;

        case 'markdown-to-pdf':
          if (!markdownInput.trim()) {
            alert('Please enter Markdown content to convert to PDF.');
            hideProgress();
            return;
          }
          await processMarkdownToPdf(markdownInput);
          break;

        case 'image-to-pdf':
          if (uploadedFiles.length === 0) {
            alert('Please select image files.');
            hideProgress();
            return;
          }
          await processImageToPdf(uploadedFiles);
          break;

        case 'pdf-to-image':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processPdfToImage(uploadedFiles[0]);
          break;

        case 'pdf-to-text':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processPdfToText(uploadedFiles[0]);
          break;

        case 'pdf-to-html':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processPdfToHtml(uploadedFiles[0]);
          break;

        case 'extract-images':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processExtractImages(uploadedFiles[0]);
          break;

        case 'image-compressor':
          if (uploadedFiles.length === 0) {
            alert('Please select image files.');
            hideProgress();
            return;
          }
          await processImageCompression(uploadedFiles, compressionQuality);
          break;

        case 'remove-background':
          if (uploadedFiles.length === 0) {
            alert('Please select an image file.');
            hideProgress();
            return;
          }
          await processRemoveBackground(uploadedFiles[0]);
          break;

        case 'add-background':
          if (uploadedFiles.length === 0) {
            alert('Please select an image file.');
            hideProgress();
            return;
          }
          await processAddBackground(uploadedFiles[0], backgroundColor);
          break;

        case 'passport-photo':
          if (uploadedFiles.length === 0) {
            alert('Please select an image file.');
            hideProgress();
            return;
          }
          await processPassportPhoto(uploadedFiles[0], photoSize);
          break;

        case 'merge':
          if (uploadedFiles.length < 2) {
            alert('Please select at least 2 PDF files to merge.');
            hideProgress();
            return;
          }
          await processMergePdf(uploadedFiles);
          break;

        case 'split':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processSplitPdf(uploadedFiles[0]);
          break;

        case 'extract':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processExtractPages(uploadedFiles[0], pageRange);
          break;

        case 'remove':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processRemovePages(uploadedFiles[0], pageRange);
          break;

        case 'crop':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processCropPdf(uploadedFiles[0]);
          break;

        case 'rotate':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processRotatePdf(uploadedFiles[0], rotationAngle);
          break;

        case 'compress':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processCompressPdf(uploadedFiles[0]);
          break;

        case 'add-password':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          if (!password.trim()) {
            alert('Please enter a password.');
            hideProgress();
            return;
          }
          await processAddPassword(uploadedFiles[0], password);
          break;

        case 'remove-password':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          if (!password.trim()) {
            alert('Please enter the current password.');
            hideProgress();
            return;
          }
          await processRemovePassword(uploadedFiles[0], password);
          break;

        case 'add-watermark':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          if (!watermarkText.trim()) {
            alert('Please enter watermark text.');
            hideProgress();
            return;
          }
          await processAddWatermark(uploadedFiles[0], watermarkText, watermarkOpacity);
          break;

        case 'sign-pdf':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processSignPdf(uploadedFiles[0]);
          break;

        case 'ocr':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processOcr(uploadedFiles[0]);
          break;

        case 'add-image':
          if (uploadedFiles.length < 2) {
            alert('Please select a PDF file and an image file.');
            hideProgress();
            return;
          }
          await processAddImage(uploadedFiles[0], uploadedFiles[1]);
          break;

        case 'page-numbers':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processPageNumbers(uploadedFiles[0]);
          break;

        case 'metadata':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processMetadata(uploadedFiles[0]);
          break;

        case 'repair':
          if (uploadedFiles.length === 0) {
            alert('Please select a PDF file.');
            hideProgress();
            return;
          }
          await processRepairPdf(uploadedFiles[0]);
          break;

        case 'overlay':
          if (uploadedFiles.length < 2) {
            alert('Please select at least 2 PDF files to overlay.');
            hideProgress();
            return;
          }
          await processOverlayPdf(uploadedFiles);
          break;

        case 'compare':
          if (uploadedFiles.length !== 2) {
            alert('Please select exactly 2 PDF files to compare.');
            hideProgress();
            return;
          }
          await processComparePdf(uploadedFiles[0], uploadedFiles[1]);
          break;

        default:
          alert('Tool not implemented yet.');
          hideProgress();
          return;
      }

      hideProgress();
      showSuccess(`${toolName} completed successfully!`);
    } catch (error) {
      hideProgress();
      // Enhanced error reporting for easier debugging
      let errorMessage = 'An error occurred while processing. Please try again.';
      if (error instanceof Error) {
        errorMessage += `\nError: ${error.message}`;
        if (error.stack) {
          errorMessage += `\nStack: ${error.stack}`;
        }
      } else if (typeof error === 'string') {
        errorMessage += `\n${error}`;
      } else {
        errorMessage += `\n${JSON.stringify(error)}`;
      }
      console.error('Processing error:', error);
      alert(errorMessage);
    }
  };

  const renderToolSpecificInterface = () => {
    switch (toolName) {
      case 'text-to-pdf':
        return (
          <>
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Enter your text:</label>
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Type or paste your text here..."
                className="w-full h-32 bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-vertical"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Font Size:</label>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
              >
                <option value={12}>12pt</option>
                <option value={14}>14pt</option>
                <option value={16}>16pt</option>
                <option value={18}>18pt</option>
                <option value={20}>20pt</option>
              </select>
            </div>
          </>
        );

      case 'html-to-pdf':
        return (
          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Enter HTML content:</label>
            <textarea
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
              placeholder="<html><body><h1>Your HTML content here</h1></body></html>"
              className="w-full h-32 bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-vertical"
            />
          </div>
        );

      case 'markdown-to-pdf':
        return (
          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Enter Markdown content:</label>
            <textarea
              value={markdownInput}
              onChange={(e) => setMarkdownInput(e.target.value)}
              placeholder="# Your Markdown content here"
              className="w-full h-32 bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-vertical"
            />
          </div>
        );

      case 'add-watermark':
        return (
          <>
            <FileUpload />
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Watermark Text:</label>
              <input
                type="text"
                value={watermarkText}
                onChange={(e) => setWatermarkText(e.target.value)}
                placeholder="Enter watermark text"
                className="w-full bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Opacity: {Math.round(watermarkOpacity * 100)}%</label>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={watermarkOpacity}
                onChange={(e) => setWatermarkOpacity(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </>
        );

      case 'add-background':
        return (
          <>
            <FileUpload />
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Background Color:</label>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-20 h-10 bg-gray-700 border border-cyan-400/30 rounded-lg"
              />
            </div>
          </>
        );

      case 'passport-photo':
        return (
          <>
            <FileUpload />
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Photo Size:</label>
              <select
                value={photoSize}
                onChange={(e) => setPhotoSize(e.target.value)}
                className="bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="passport">Passport (35x45mm)</option>
                <option value="visa">Visa (51x51mm)</option>
                <option value="id">ID Card (25x35mm)</option>
              </select>
            </div>
          </>
        );

      case 'image-compressor':
        return (
          <>
            <FileUpload />
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Compression Quality: {Math.round(compressionQuality * 100)}%</label>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={compressionQuality}
                onChange={(e) => setCompressionQuality(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </>
        );

      case 'add-password':
      case 'remove-password':
        return (
          <>
            <FileUpload />
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">
                {toolName === 'add-password' ? 'New Password:' : 'Current Password:'}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </>
        );

      case 'extract':
      case 'remove':
        return (
          <>
            <FileUpload />
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Page Range (e.g., 1-3, 5, 7-9):</label>
              <input
                type="text"
                value={pageRange}
                onChange={(e) => setPageRange(e.target.value)}
                placeholder="1-3, 5, 7-9"
                className="w-full bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </>
        );

      case 'rotate':
        return (
          <>
            <FileUpload />
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Rotation Angle:</label>
              <select
                value={rotationAngle}
                onChange={(e) => setRotationAngle(Number(e.target.value))}
                className="bg-gray-700 border border-cyan-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
              >
                <option value={90}>90° Clockwise</option>
                <option value={180}>180°</option>
                <option value={270}>270° Clockwise</option>
              </select>
            </div>
          </>
        );

      default:
        return <FileUpload />;
    }
  };

  return (
    <div>
      {renderToolSpecificInterface()}
      <div className="flex gap-4 justify-end flex-wrap">
        <button
          onClick={closeModal}
          className="px-6 py-2 bg-gray-700 text-white rounded-lg border border-cyan-400/30 hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleProcess}
          className="px-6 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/40 transition-all duration-300"
        >
          Process
        </button>
      </div>
    </div>
  );
};

export default ToolInterface;