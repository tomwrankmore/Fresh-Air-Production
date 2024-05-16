import {DocumentTextIcon, BlockquoteIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

const homeTestimonialsType = defineType({
  name: 'homeTestimonials',
  type: 'object',
  title: 'Homepage Testimonials',
  fields: [
    defineField({
      name: 'visibleOnPage',
      title: 'Visible on homepage?',
      description: 'If unchecked this block will not render on the homepage.',
      type: 'boolean'
    }),
    defineField({
      name: "homePageTestimonials",
      type: "array",
      title: "Choose which testimonials appear on the home page",
      of: [
        defineArrayMember({
          name: "homePageTestimonial",
          type: "homePageTestimonial"
        }),
      ]
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
        title: title || 'Homepage Testimonials',
        subtitle: 'Testimonials',
        media: image || BlockquoteIcon,
      }
    },
  },
})

export default homeTestimonialsType;
