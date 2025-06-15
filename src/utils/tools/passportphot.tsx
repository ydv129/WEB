export const processPassportPhoto = async (file: File, size: string) => {
  const dimensions = {
    passport: { width: 35, height: 45 },
    visa: { width: 51, height: 51 },
    id: { width: 25, height: 35 }
  };

  const dim = dimensions[size as keyof typeof dimensions];
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();

  await new Promise((resolve) => {
    img.onload = () => {
      const pixelWidth = Math.round(dim.width * 11.81);
      const pixelHeight = Math.round(dim.height * 11.81);
      
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
      
      if (ctx) {
        const aspectRatio = pixelWidth / pixelHeight;
        const imgAspectRatio = img.width / img.height;
        
        let sourceX = 0, sourceY = 0, sourceWidth = img.width, sourceHeight = img.height;
        
        if (imgAspectRatio > aspectRatio) {
          sourceWidth = img.height * aspectRatio;
          sourceX = (img.width - sourceWidth) / 2;
        } else {
          sourceHeight = img.width / aspectRatio;
          sourceY = (img.height - sourceHeight) / 2;
        }
        
        ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, pixelWidth, pixelHeight);
      }
      
      canvas.toBlob((blob) => {
        if (blob) {
          downloadFile(blob, `passport-photo-${size}.jpg`);
        }
        resolve(null);
      }, 'image/jpeg', 0.9);
    };
    
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
};
