Demo :

# [paraSolutions.dev](https://paraSolutions.dev/)

A portfolio & blog website developed with Next.JS(SSG) and TypeScript. Tailwind CSS and GSAP is used for styling and animations. Blog contents are written in Markdown format with Tina Headless CMS. Light & Dark themes supported.

## Features

- ✅ Responsive Design
- ✅ Responsive Design
- ✅ Light & Dark themes
- ✅ Fully Accessible
- ✅ Categories, Tags
- ✅ Search Box
- ✅ SEO Friendly
- ✅ Markdown Content

## Tech Stack

- **Frontend** - [NextJS](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)  
- **Styling** - [Tailwind CSS](https://tailwindcss.com/)  
- **Animations** - [GSAP](https://greensock.com/), [Spline-Design](https://spline.design/)
- **State-Management** - [ContextAPI](https://reactjs.org/docs/context.html)  
- **Backend** - [Tina Headless CMS](https://tina.io/)  
- **Deployment** - [Vercel](https://vercel.com/)

## Clone the project

```bash
git clone https://github.com/abdfikih/paraSolutions.dev.git
```

Go to the project directory

```bash
cd paraSolutions.dev
```

Remove remote origin

```bash
git remote remove origin
```

## Configure ur ENV

duplicate the .env.local.example, and change the name to .env.local

```
NEXT_PUBLIC_URL=https://example.com
NEXT_PUBLIC_EMAIL=contact@example.com
```

## Configure Tina CMS for blog posts

first, u need to create Tina account ([Tina Cloud](https://tina.io/)), then follow the step to create new project.

then,go to the Tina directory on ur local project

### tina/config.ts

```
import { defineConfig } from "tinacms";
import {blog_articleFields} from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.NEXT_PUBLIC_TINA_BRANCH ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    'main';

export default defineConfig({
  branch,
  clientId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // Place ur Client-ID here, u can can get this from tina.io
  token: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Place ur Token Content (Readonly) here
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
      indexerToken: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Place ur Token Search here
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

### u can check ur site at localhost:3000 and tina CMS admin page at localhost:3000/admin/index.html

## Deployment with [Vercel](https://vercel.com/)

configure the Environment Variables:

```
NEXT_PUBLIC_URL=https://example.com
NEXT_PUBLIC_EMAIL=contact@example.com
```
and then, click deploy.

## Credits

Here are some inspiration and credits for the portfolio web page.

- [@satnaing](https://github.com/satnaing)
