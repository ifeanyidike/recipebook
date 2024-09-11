
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import DatauriParser from 'datauri/parser';

cloudinary.config({
    cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
    api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
  });
export class Util {

    private checkFileType = (blob: Blob) => {
        const allowedTypes = /jpg|jpeg|png|webp/;
        console.log(
          'is allowed',
          //@ts-ignorets-ignore
          allowedTypes.test(path.extname(blob.name).toLowerCase())
        );
    
        //@ts-ignorets-ignore
        if (!allowedTypes.test(path.extname(blob.name).toLowerCase())) {
          throw new Error('Please upload either a jpeg, jpg or a pn file online');
        }
      };
    
      public async deleteUpload(data: { uploadId?: string; imageUrl: string }) {
        let id = data.uploadId;
    
        if (!id && data.imageUrl) {
          const entries = data.imageUrl.split('/');
          const lastEntry = entries[entries.length - 1];
          const [uploadId] = lastEntry?.split('.') ?? '';
          id = uploadId;
        }
    
        if (!id) return;
    
        await cloudinary.uploader.destroy('id');
      }
    
    public async upload(file: File, folder = '') {
        const parser = new DatauriParser();
        console.log('file', file);
        this.checkFileType(file, );
        const blobBuffer = Buffer.from(await file.arrayBuffer());
    
        const base64Image = parser.format(
          path.extname(file.name).toString(),
          blobBuffer
        );
     
        if (!base64Image.content) return;
    
        let response;
    
        try {
          response = await cloudinary.uploader.upload(base64Image.content, {
            folder,
          });
        } catch (error) {
          const errorMessage = (error as { message: string }).message;
          throw new Error(errorMessage);
        }
    
        console.log('response', response);
    
        return {
          uploadId: response.public_id,
          url: response.url,
        };
      }

      
    public async uploadOrUpdate(
        file: File,
        folder = '',
        existingImage: Record<'id' | 'url', string | null | undefined> | null
      ) {
        const uploadedImage = await this.upload(file, folder);
        if (!uploadedImage) {
          throw new Error('An error occurred in uploading image.');
        }
    
        if (existingImage?.url) {
          const imageId = existingImage?.id;
          const imageUrl = existingImage?.url;
    
          const uploadId = existingImage?.id ? `${folder}/${imageId}` : imageUrl;
    
          await this.deleteUpload({ uploadId: uploadId, imageUrl });
        }
        return uploadedImage;
      }
}