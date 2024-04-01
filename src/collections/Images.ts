import { CollectionConfig } from "payload/types";

const Images: CollectionConfig = {
  slug: "images",
  upload: {
    staticURL: "/images",
    staticDir: "images",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "selectImage",
      type: "text",
    },
  ],
};

export default Images;
