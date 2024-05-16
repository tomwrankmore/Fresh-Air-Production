import { BlockquoteIcon, BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const homeEditorialsType = defineType({
  name: "homeEditorials",
  type: "object",
  title: "Homepage Editorials",
  fields: [
    defineField({
      name: "visibleOnPage",
      title: "Visible on homepage?",
      description: "If unchecked this block will not render on the homepage.",
      type: "boolean"
    }),
    defineField({
      name: "homeFeaturedEditorial",
      title: "Homepage featured editorial",
      description: "Please enter 1 editorial here to be displayed in large on the left.",
      type: "reference",
      to: [{ type: "editorial" }],
      validation: Rule =>
        Rule.error("You have to add an editorial to be displayed on the homepage.").required()
    }),
    defineField({
      name: "homeEditorials",
      title: "Homepage editorials",
      description: "Please enter 8 editorials here to be displayed on the right.",
      type: "array",
      of: [{ type: "reference", to: { type: "editorial" } }],
      validation: Rule =>
        Rule.error("Please add 8 editorials to be displayed on the homepage.")
          .required()
          .min(8)
          .max(8)
    })
  ],
  initialValue: {
    visibleOnPage: true
  },
  icon: BookIcon,
  preview: {
    select: {
      title: "heading",
      image: "image"
    },
    prepare({ title, image }) {
      return {
        title: title || "Editorials",
        subtitle: "Editorials",
        media: image || BookIcon
      };
    }
  }
});

export default homeEditorialsType;
