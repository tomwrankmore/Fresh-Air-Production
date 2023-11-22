import { defineField, defineType } from "sanity";

export const textWithImageType = defineType({
  name: "textWithImage",
  type: "object",
  title: "Text with Image",
  fields: [
    defineField({
      name: "heading",
      type: "string"
    }),
    defineField({
      name: "tagline",
      type: "string"
    }),
    defineField({
      name: "excerpt",
      type: "text"
    }),
    defineField({
      title: "Align image to the left?",
      description: "By default images will float to the right unless you check this box.",
      name: "released",
      type: "boolean"
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text"
        })
      ]
    })
  ]
});
