import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

const homeHowWeWorkType = defineType({
  name: 'homeWeWork',
  type: 'object',
  title: 'Homepage We Work',
  fields: [
    defineField({
      name: 'visibleOnHomePage',
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
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: image || DocumentTextIcon,
      }
    },
  },
})

export default homeHowWeWorkType;