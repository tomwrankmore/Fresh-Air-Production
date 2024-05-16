import { DocumentTextIcon, FolderIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

//   workSectionHeading: string
//   homeWorkSectionImage: image
//   panelOneTitle: string
//   panelOneText: block
//   panelOneImage: image
//   panelTwoTitle: string
//   panelTwoText: block
//   panelTwoImage: image
//   panelThreeTitle: string
//   panelThreeText: block
//   panelThreeImage: image
//   panelFourTitle: string
//   panelFourText: block
//   panelFourImage: image

const homeHowWeWorkType = defineType({
  name: "homeWeWork",
  type: "object",
  title: "Homepage We Work",
  fields: [
    defineField({
      name: "visibleOnPage",
      title: "Visible on homepage?",
      description: "If unchecked this block will not render on the homepage.",
      type: "boolean"
    }),
    defineField({
      name: "homeWeWorkHeading",
      type: "projectPortableText"
    }),
    defineField({
      name: "homeWeWorkMainImage",
      type: "figure",
    }),
    defineField({
      name: "panelOneTitle",
      type: "string"
    }),
    defineField({
      name: "panelOneText",
      type: 'bioPortableText'
    }),
    defineField({
      name: "panelOneImage",
      type: "figure"
    }),
    defineField({
      name: "panelTwoTitle",
      type: "string"
    }),
    defineField({
      name: "panelTwoText",
      type: 'bioPortableText'
    }),
    defineField({
      name: "panelTwoImage",
      type: "figure"
    }),
    defineField({
      name: "panelThreeTitle",
      type: "string"
    }),
    defineField({
      name: "panelThreeText",
      type: 'bioPortableText'
    }),
    defineField({
      name: "panelThreeImage",
      type: "figure"
    }),
    defineField({
      name: "panelFourTitle",
      type: "string"
    }),
    defineField({
      name: "panelFourText",
      type: 'bioPortableText'
    }),
    defineField({
      name: "panelFourImage",
      type: "figure"
    }),
  ],
  initialValue: {
    visibleOnPage: true
  },
  icon: FolderIcon,
  preview: {
    select: {
      title: "heading",
      image: "image"
    },
    prepare({ title, image }) {
      return {
        title: title || "How We Work",
        subtitle: "How We Work",
        media: image || FolderIcon
      };
    }
  }
});

export default homeHowWeWorkType;
