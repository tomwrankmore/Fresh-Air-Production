import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

const homeHeroType = defineType({
  name: 'homeHero',
  type: 'object',
  title: 'Homepage hero',
  fields: [
    defineField({
      name: 'visibleOnPage',
      title: 'Visible on homepage?',
      description: 'If unchecked this block will not render on the homepage.',
      type: 'boolean'
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
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
        title: 'Hero scrolling text',
        subtitle: 'Hero',
        media: image || DocumentTextIcon,
      }
    },
  },
})

export default homeHeroType;