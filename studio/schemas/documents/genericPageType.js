import {defineArrayMember, defineField, defineType} from 'sanity'

const GenericPageType = defineType({
  name: 'genericPageType',
  type: 'document',
  title: 'Generic Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Generic page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textWithImage',
          type: 'textWithImage',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
        defineArrayMember({
          name: 'video',
          type: 'video',
        }),
        // defineArrayMember({
        //   name: 'callToAction',
        //   type: 'reference',
        //   to: [{type: 'promotion'}],
        // }),
        // etc...
      ],
    }),
  ],
})

export default GenericPageType