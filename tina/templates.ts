import type { TinaField } from "tinacms";
export function blog_articleFields() {
  return [
    {
      type: "image",
      name: "coverImage",
      label: "Cover Image",
    },
    {
      type: "string",
      name: "coverImageAlt",
      label: "Cover Image Alt Text",
    },
    {
      type: "string",
      name: "coverImageWidth",
      label: "Cover Image Width",
    },
    {
      type: "string",
      name: "coverImageHeight",
      label: "Cover Image Height",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "datetime",
      name: "datetime",
      label: "Datetime",
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured Post",
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      options: ["How Do I", "Random"],
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "author",
      label: "Author",
      options: ["paraSolutions"],
      required: true,
    },
    {
      type: "string",
      name: "type",
      label: "Type",
      options: ["article"],
      required: true,
    },
  ] as TinaField[];
}
