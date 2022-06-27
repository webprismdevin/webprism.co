/* eslint-disable import/no-anonymous-default-export */
// studio/schemas/homepage.js
export default {
  name: "homepage",
  title: "Homepage",
  type: "document",

  // These actions define what users can do with this document.
  // Notice how "delete" is not available in this array.
  // This means, users can't delete this document
  // from within the studio
  __experimental_actions: ["update", "create", "publish"],
  groups: [
    {
      name: "content",
      title: "Page Content",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      group: "seo",
      type: "string",
    },
    {
      name: "pageDescription",
      title: "Meta Description",
      group: "seo",
      type: "text",
    },
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      group: "content",
      fields: [
        {
          title: "Title",
          description:
            "This title will appear in the hero unit at the top of the page",
          type: "string",
          name: "title",
        },
        {
          title: "Subtitle",
          name: "subtitle",
          description:
            "This subtitle will appear in the hero unit at the top of the page",
          type: "text",
        },
        {
          title: "CTA",
          name: "cta",
          description: "Main button in the hero",
          type: "string",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "testimonial",
      type: "object",
      group: "content",
      fields: [
        {
          name: "client",
          type: "string",
        },
        {
          name: "text",
          type: "text",
        },
        {
          name: "name",
          type: "string",
        },
      ],
    },
    {
      name: "belowTheFold",
      type: "object",
      group: "content",
      fields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "text",
          type: "text",
        },
        {
          name: "cta",
          type: "string",
        },
      ],
    },
    {
      name: "about",
      type: "object",
      group: "content",
      fields: [
        {
          name: "superText",
          type: "string",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "text",
          type: "text",
        },
        {
          name: "features",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      name: "caseStudies",
      group: "content",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              description: "Use the company name",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "description",
              title: "Short Description",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "testimonials",
      group: 'content',
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "client",
              type: "string",
            },
            {
              name: "text",
              type: "text",
            },
            {
              name: "name",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "getStarted",
      title: "Get Started: Final Section",
      type: "object",
      group: "content",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "button",
          title: "Button Settings",
          type: "object",
          fields: [
            {
              name: "text",
              title: "Text",
              type: "string",
            },
            {
              name: "link",
              title: "Link Destination",
              description: "Can be relative or absolute.",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
