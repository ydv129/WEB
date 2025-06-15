import { processTextToPdf } from "./src/utils/tools/texttopdf.tool";
import { processHtmlToPdf } from "./src/utils/tools/htmltopdf.tool";
import { processImageToPdf } from "./src/utils/tools/imgtopdf.tool";
import { processPdfToImage } from "./src/utils/tools/pdftoimage";
import { processImageCompression } from "./src/utils/tools/imagecompressor";
import { processRemoveBackground } from "./src/utils/tools/removebg";
import { processAddBackground } from "./src/utils/tools/addbg";
import { processPassportPhoto } from "./src/utils/tools/passportphot";
import { processMergePdf } from "./src/utils/tools/merge.tool";
import { processSplitPdf } from "./src/utils/tools/split.tool";
import { processExtractPages } from "./src/utils/tools/extract.too";
import { processRemovePages } from "./src/utils/tools/remove.tool";
import { processCropPdf } from "./src/utils/tools/crop.tool";
import { processRotatePdf } from "./src/utils/tools/rotate.tool";
import { processCompressPdf } from "./src/utils/tools/compresspdf";
import { processAddPassword } from "./src/utils/tools/addpassword";
import { processRemovePassword } from "./src/utils/tools/removepassword";
import { processAddWatermark } from "./src/utils/tools/addwatermark";
import { processSignPdf } from "./src/utils/tools/signpdf";
import { processOcr } from "./src/utils/tools/ocrcleanup";
import { processAddImage } from "./src/utils/tools/addimgtopdf";
import { processPageNumbers } from "./src/utils/tools/addpagenotopdf";
import { processMetadata } from "./src/utils/tools/metadata";
import { processRepairPdf } from "./src/utils/tools/repairpdf";
import { processOverlayPdf } from "./src/utils/tools/overlaypdf";
import { processComparePdf } from "./src/utils/tools/comparepdf";
import { processPdfToText } from "./src/utils/tools/pdftotext";
import { processPdfToHtml } from "./src/utils/tools/pdftohtml";
import { processExtractImages } from "./src/utils/tools/extractimages";
import { processMarkdownToPdf } from "./src/utils/tools/martop.tool";

// Exporting all process functions as named exports for easier import elsewhere
export {
  processTextToPdf,
  processHtmlToPdf,
  processImageToPdf,
  processPdfToImage,
  processImageCompression,
  processRemoveBackground,
  processAddBackground,
  processPassportPhoto,
  processMergePdf,
  processSplitPdf,
  processExtractPages,
  processRemovePages,
  processCropPdf,
  processRotatePdf,
  processCompressPdf,
  processAddPassword,
  processRemovePassword,
  processAddWatermark,
  processSignPdf,
  processOcr,
  processAddImage,
  processPageNumbers,
  processMetadata,
  processRepairPdf,
  processOverlayPdf,
  processComparePdf,
  processPdfToText,
  processPdfToHtml,
  processExtractImages,
  processMarkdownToPdf
};
