import { defineArrayMember, defineField, defineType } from "sanity";

const GenericPageType = defineType({
  name: "genericPageType",
  type: "document",
  title: "Generic Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "This is a required field in order to generate a page.",
      validation: Rule => Rule.error('Make sure you generate a slug.').required(),
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 200)
      }
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Generic page builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero"
        }),
        defineArrayMember({
          name: "textWithImage",
          type: "textWithImage"
        }),
        defineArrayMember({
          name: "gallery",
          type: "gallery"
        }),
        defineArrayMember({
          name: "form",
          type: "form"
        }),
        defineArrayMember({
          name: "video",
          type: "video"
        })
        // defineArrayMember({
        //   name: 'callToAction',
        //   type: 'reference',
        //   to: [{type: 'promotion'}],
        // }),
        // etc...
      ]
    })
  ]
});

export default GenericPageType;
