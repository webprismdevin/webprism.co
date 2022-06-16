/* eslint-disable import/no-anonymous-default-export */
// studio/schemas/homepage.js
export default {
  name: "web-design",
  title: "Web Design",
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
      name: "logos",
      title: "Client Logos",
      type: "array",
      group: "content",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Logo",
              type: "image",
            },
            {
              name: 'url',
              title: 'URL',
              description: 'Can be either a link to our portfolio piece, or an absolute url.',
              type: 'string'
            },
          ],
        },
      ],
    },
    {
      name: "belowTheFold",
      title: "Below The Fold",
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
      ],
    },
    {
      name: 'process',
      title: 'Our Process',
      group: 'content',
      type: 'array',
      of: [{ type: 'object', title: 'Steps', fields: [{
        name: 'name',
        title: 'Step Name',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      }
    ]}]
    },
    {
      name: "caseStudies",
      title: "Featured Work",
      type: "array",
      of: [
        {
          type: "object",
          name: "Feature",
          fields: [
            {
              name: "supertext",
              title: "SUPERTEXT",
              type: "string",
            },
            {
              name: "title",
              title: "Feature Title",
              type: "string",
            },
            {
              name: "project",
              title: "Linked Project",
              type: "reference",
              to: [{ type: "project" }],
            },
          ],
        },
      ],
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
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
