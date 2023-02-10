import {format,parseISO} from 'date-fns'

export default {
  name: 'podcast',
  title: 'Podcast',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
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
      name: 'isFeaturedPodcast',
      title: 'Featured Podcast',
      type: 'boolean'
    },
    {
      name: 'subTitle',
      title: 'Client',
      type: 'string'
    },
    {
      name: 'hasPage',
      title: 'Does this podcast have it\'s own page?',
      type: 'boolean'
    },
    {
      name: 'previewImage',
      title: 'Preview image',
      type: 'figure'
    },
    {
      name: 'podcastLink',
      title: 'Podcast Link',
      type: 'string'
    },
    {
      name: 'spotifyLink',
      title: 'Spotify Link',
      type: 'string'
    },
    {
      name: 'amazonLink',
      title: 'Google Link',
      type: 'string'
    },
    {
      name: 'iHeartRadioLink',
      title: 'iHeartRadio Link',
      type: 'string'
    },
    {
      name: 'omnyWidget',
      title: 'Omny iFrame',
      type: 'string'
    },
    {
      name: 'excerpt',
      title: 'Preview Excerpt',
      type: 'simplePortableText'
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'figure'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'string'
    },
    {
      name: 'relatedProjects',
      title: 'Related projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'podcast'}}]
    }
  ],
  initialValue: {
    isFeaturedPodcast: false,
    hasPage: false
  },
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
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
