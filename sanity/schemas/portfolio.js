import basicSEO from "./parts/basicSEO";
import defaultGroups from "./parts/defaultGroups";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "portfolio",
  type: "document",
  __experimental_actions: ["update", "create", "publish"],
  groups: defaultGroups,
  fields: [
    basicSEO,
    {
      name: "projects",
      type: "array",
      group: 'content',
      of: [
        { name: 'projects', type: "reference", to: { type: "project" } },
        { name: 'caseStudies', type: "reference", to: { type: "caseStudy" } },
      ],
    },
  ],
};
