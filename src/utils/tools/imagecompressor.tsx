export const processImageCompression = async (files: File[], quality: number) => {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    await new Promise((resolve) => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        
        canvas.toBlob((blob) => {
          if (blob) {
            downloadFile(blob, `compressed-${file.name}`);
          }
          resolve(null);
        }, 'image/jpeg', quality);
      };
      
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  }
};
