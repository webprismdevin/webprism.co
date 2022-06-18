export default {
  title: "Call To Action",
  name: "cta",
  description: "CTA button/link",
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
      description: "Can be relative or absolute. Should point to /booknow.",
      type: "string",
    },
  ],
};
