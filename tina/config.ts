import { defineConfig } from "tinacms";
import {blog_articleFields} from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = 'main';

export default defineConfig({
  branch,
  clientId: "5bf577c0-b866-4437-a161-3d870e10c5c5", // Get this from tina.io
  token: "8c576fc124d98be662a0c4afd0b55abe42a326dd", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Blog Posts",
        name: "blog_posts",
        path: "contents",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_articleFields(),
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: '330d474660ea69d61085983107c218be0cbe4ab6',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
