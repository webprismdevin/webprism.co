import { ImPageBreak } from "react-icons/im";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "landingSection",
  title: "Landing Page Section",
  type: "document",
  icon: ImPageBreak,
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      group: "content",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "text",
      group: "content",
    },
    {
      name: "body",
      title: "Section Body",
      type: "blockContent",
      group: "content",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      group: "content",
    },
    {
      name: "layout",
      title: "Section Layout",
      type: "string",
      group: "settings",
      description: 'For "column" layouts, use a 16:9 apsect ratio image',
      options: {
        list: [
          {
            title: "Row (image left)",
            value: "row",
          },
          {
            title: "Row (image right)",
            value: "row-reverse",
          },
          {
            title: "Column (full width)",
            value: "column",
          },
        ],
        layout: "dropdown",
      },
    },
  ],
  initialValue: {
    layout: "row",
  },
  preview: {
    select: {
      title: "heading",
    },
  },
};
