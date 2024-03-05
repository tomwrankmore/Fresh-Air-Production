import {DocumentTextIcon} from '@sanity/icons'
import { FaPodcast } from "react-icons/fa";
import {defineField, defineType} from 'sanity'

const homePodcastsType = defineType({
  name: 'homepagePodcasts',
  type: 'object',
  title: 'Homepage podcasts',
  fields: [
    defineField({
      name: 'visibleOnHomePage',
      title: 'Visible on homepage?',
      description: 'If unchecked this block will not render on the homepage.',
      type: 'boolean'
    }),
    defineField({
      name: 'homePodcastHeading',
      type: 'simplePortableText',
      title: 'Podcast section heading',
      description: 'Paragraph to sit with podcast vertical carousel.'
    }),
    defineField({
      name: 'homePodcasts',
      title: 'Homepage podcasts',
      description: 'Please choose 4 podcasts to be displayed on the homepage.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'podcast'}}],
      validation: Rule => Rule.error('Please add 4 podcasts to be displayed on the homepage.').required().min(4).max(4),
    })
  ],
<<<<<<< HEAD
  initialValue: {
    visibleOnPage: true
  },
  icon: FaPodcast,
=======
  icon: DocumentTextIcon,
  initialValue: {
    visibleOnPage: true
  },
>>>>>>> main
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Homepage podcasts',
        subtitle: 'Homepage podcasts',
        media: image || FaPodcast,
      }
    },
  },
})

export default homePodcastsType;