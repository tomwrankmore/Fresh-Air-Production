import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const homeTagCloudType = defineType({
  name: "homeTagCloud",
  type: "object",
  title: "Homepage Tag Cloud",
  fields: [
    defineField({
      name: "visibleOnPage",
      title: "Visible on homepage?",
      description: "If unchecked this block will not render on the homepage.",
      type: "boolean"
    }),

    defineField({
      name: "tagnames",
      type: "array",
      title: "Tag names for the scrolling tag cloud",
      description: "Add tag names that describes the company.",
      of: [{ type: "string" }],
      options: {
        layout: "tags"
      }
    })
  ],
  initialValue: {
    visibleOnPage: true
  },
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Homepage Tag Cloud',
        subtitle: 'Tag Cloud',
        media: image || DocumentTextIcon,
      }
    },
  },
});

export default homeTagCloudType;
