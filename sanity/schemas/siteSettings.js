import basicSEO from "./parts/basicSEO";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  __experimental_actions: ["update", "create", "publish"],
  groups: [
    {
      name: "seo",
      title: "SEO",
      default: true,
    },
    {
      name: "banner",
      title: 'Banner',
    },
    {
      name: "navigation",
      title: "Navigation"
    },
  ],
  fields: [
    basicSEO,
    {
        name: "banner",
        type: "array",
        group: "banner",
        of: [
          {
            type: "object",
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
        ],
      },
    {
      name: "navLinks",
      type: "array",
      group: "navigation",
      of: [
        {
          type: "object",
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
      ],
    },
  ],
};
