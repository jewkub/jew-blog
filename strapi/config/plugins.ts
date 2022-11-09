export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
        // upload_preset: 'jew-blog' || env('CLOUDINARY_UPLOAD_PRESET'), // dont work, dont know why
      },
      actionOptions: {
        upload: {},
        uploadStream: { upload_preset: env('CLOUDINARY_UPLOAD_PRESET', )}, // work, dont know why
        delete: {},
      },
    },
  },
});
