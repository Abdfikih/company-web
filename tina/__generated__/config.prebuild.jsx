// tina/config.ts
import { defineConfig } from "tinacms";

// tina/templates.ts
function blog_articleFields() {
  return [
    {
      type: "image",
      name: "coverImage",
      label: "Cover Image"
    },
    {
      type: "string",
      name: "coverImageAlt",
      label: "Cover Image Alt Text"
    },
    {
      type: "string",
      name: "coverImageWidth",
      label: "Cover Image Width"
    },
    {
      type: "string",
      name: "coverImageHeight",
      label: "Cover Image Height"
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea"
      },
      required: true
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: {
        component: "textarea"
      },
      required: true
    },
    {
      type: "datetime",
      name: "datetime",
      label: "Datetime"
    },
    {
      type: "string",
      name: "slug",
      label: "Slug"
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured Post"
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      options: ["How Do I", "Random"]
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags"
      }
    },
    {
      type: "string",
      name: "author",
      label: "Author",
      options: ["paraSolutions"],
      required: true
    },
    {
      type: "string",
      name: "type",
      label: "Type",
      options: ["article"],
      required: true
    }
  ];
}

// tina/config.ts
var branch = "main";
var config_default = defineConfig({
  branch,
  clientId: "5bf577c0-b866-4437-a161-3d870e10c5c5",
  // Get this from tina.io
  token: "8c576fc124d98be662a0c4afd0b55abe42a326dd",
  // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Blog Posts",
        name: "blog_posts",
        path: "contents",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...blog_articleFields()
        ]
      }
    ]
  },
  search: {
    tina: {
      indexerToken: "30e48efe0485954721422e99e5b1c01e74fab2d3",
      stopwordLanguages: ["eng"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  }
});
export {
  config_default as default
};
