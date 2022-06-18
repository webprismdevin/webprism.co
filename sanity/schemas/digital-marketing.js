/* eslint-disable import/no-anonymous-default-export */

import callToAction from "./parts/callToAction";

// studio/schemas/homepage.js
export default {
  name: "digital-marketing",
  title: "Digital Marketing",
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
      type: "string",
      group: "seo",
    },
    {
      name: "metaDesc",
      title: "Meta Description",
      type: "text",
      group: "seo",
    },
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      group: "content",
      fields: [
        {
          name: "supertext",
          title: "SUPERTEXT",
          type: "string",
        },
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
          title: "Image",
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          title: "Image Alt text",
          name: 'imageAlt',
          type: 'string'
        },
        {
          title: "Call To Action",
          name: "cta",
          description: "Main button in the hero",
          type: "object",
          fields: [
            {
              name: "text",
              title: "Button Text",
              type: "string",
            },
            {
              name: "link",
              title: "Button URL",
              description:
                "Can be relative or absolute. Should point to /booknow.",
              type: "string",
            },
          ],
        }
      ],
    },
    {
      name: "belowTheFold",
      title: "Below The Fold",
      type: "object",
      group: "content",
      fields: [
        // {
        //   name: "supertext",
        //   title: "SUPERTEXT",
        //   type: "string",
        // },
        {
          title: "Title",
          description:
            "This title will appear in the hero unit at the top of the page",
          type: "string",
          name: "title",
        },
        {
          title: "text",
          name: "text",
          type: "text",
        },
        {
          title: "Features",
          name: "features",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  title: "Icon",
                  description: "Icon from Font Awesome (fontawesome.com)",
                  type: "image",
                },
                {
                  name: "text",
                  title: "Text",
                  type: "string",
                },
              ],
            },
          ],
        },
        callToAction
      ],
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      group: 'content',
      of: [{ type: "reference", to: [{ type: "section" }] }],
    },
    {
      name: "caseStudy",
      title: "Featured Case Study",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          description: "Use the company name",
          type: "string",
        },
        {
          name: "beforeImage",
          title: "Before Image",
          type: "image",
        },
        {
          name: "afterImage",
          title: "After Image",
          type: "image",
        },
        {
          name: "description",
          title: "Short Description",
          type: "text",
        },
      ],
    },
    {
      name: "faqs",
      title: "Frequently Asked Questions",
      type: "array",
      group: 'content',
      of: [
        {
          name: "faq",
          title: "FAQ",
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "getStarted",
      title: "Get Started: Final Section",
      type: "object",
      group: 'content',
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
