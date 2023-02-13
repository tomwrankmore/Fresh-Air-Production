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
      type: 'figure'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'heroBGColor',
      title: 'Hero background colour',
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
    {
      name: 'isFeaturedPost',
      title: 'Featured Post',
      type: 'boolean'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'previewImage',
      title: 'Preview image',
      type: 'figure'
    },
    {
      name: 'excerpt',
      title: 'Preview Excerpt',
      type: 'simplePortableText'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    },
    {
      name: 'quote',
      title: 'Quote',
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
      type: 'array',
      of: [{type: 'reference', to: {type: 'editorial'}}]
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
