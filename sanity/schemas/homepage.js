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
      name: 'definition',
      type: 'object',
      group: 'content',
      fields: [
        {
          name: 'logo',
          type: 'image',
        },
        {
          name: 'definitions',
          type: 'array',
          of: [{type: 'string'}]
        }
      ]
    },
    {
      name: 'buttons',
      group: 'content',
      type: 'object',
      fields: [
        {
          name: "button1",
          type: 'object',
          fields: [
            {
              name: "text",
              type: "string",
            },
            {
              name: "link",
              type: "string",
            },
          ],
        },
        {
          name: "button2",
          type: 'object',
          fields: [
            {
              name: "text",
              type: "string",
            },
            {
              name: "link",
              type: "string",
            },
          ],
        }
      ]
    }
  ],
};
