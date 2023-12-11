import {format,parseISO} from 'date-fns'
import { FaBook } from "react-icons/fa"

export default {
  name: 'editorial',
  title: 'Editorial Post',
  type: 'document',
  icon: FaBook,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      description: 'Choose a image for the hero.',
      type: 'figure'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This will generate a URL for the editorial.',
      validation: Rule => Rule.error('Make sure you generate a slug.').required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'heroBGColor',
      title: 'Hero background colour',
      description: 'Choose a colour for the background of the hero.',
      type: 'array',
      type: 'reference', 
      to: {type: 'brandColours'}
    },
    {
      name: 'isLeftAlignedHeroImg',
      title: 'Align image to the left in hero',
      description: 'Any item with this checked will the hero image aligned to the left.',
      type: 'boolean'
    },
    // {
    //   name: 'isFeaturedPost',
    //   title: 'Featured Editorial',
    //   description: 'Any item with this checked will appear larger.',
    //   type: 'boolean'
    // },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them, the podcasts are in chronological order with then newest at the top according to this field.',
      type: 'datetime'
    },
    {
      name: 'previewImage',
      title: 'Preview image',
      type: 'figure'
    },
    // {
    //   name: 'excerpt',
    //   title: 'Preview Excerpt',
    //   description: 'This paragraph will render on Our Podcasts as a description under the thumbnail image.',
    //   type: 'simplePortableText'
    // },
    {
      name: 'omnyWidget',
      title: 'Omny iFrame',
      description: 'This will generate an Omny player widget as well as the play button for all Podcast posts. REMEMBER you only need to put in the podcast name bit of the URL, so call-of-the-wild for example. The code will generate the Omny embed and Play button URL information.',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      description: 'This field will generate the main copy on the page.',
      type: 'projectPortableText'
    },
    {
      name: 'quote',
      title: 'Quote',
      description: 'This field will generate a quote with the brand line design in the background.',
      type: 'string'
    },
    {
      name: 'sectionOneText',
      title: 'Section One Text',
      type: 'projectPortableText'
    },
    {
      name: 'sectionOneImage',
      title: 'Section One image',
      type: 'figure'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'sectionTwoText',
      title: 'Section Two Text',
      type: 'projectPortableText'
    },
    {
      name: 'sectionTwoImage',
      title: 'Section Two image',
      type: 'figure'
    },
    {
      name: 'relatedProjects',
      title: 'Related editorials',
      description: 'Choose a selection of related editorials which will appear at the bottom of the page. Maximum 4.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'editorial'}}],
      validation: Rule => Rule.error('Maximum 4 entried.').max(4),
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'previewImage'
    },
    prepare({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(parseISO(publishedAt), 'yyyy/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
