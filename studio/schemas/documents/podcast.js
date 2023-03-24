import {format,parseISO} from 'date-fns'
import { FaPodcast,  } from "react-icons/fa"

export default {
  name: 'podcast',
  title: 'Podcast post',
  type: 'document',
  icon: FaPodcast,
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
      description: 'This will generate a URL for the podcast.',
      validation: Rule => Rule.error('Make sure you generate a slug.').required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      description: 'Choose a image for the hero.',
      type: 'figure'
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
    {
      name: 'isFeaturedPodcast',
      title: 'Featured Podcast',
      description: 'Any item with this checked will appear larger the top of the page.',
      type: 'boolean'
    },
    {
      name: 'subTitle',
      title: 'Client',
      description: 'The client will render at the bottom of the hero.',
      type: 'string'
    },
    {
      name: 'hasPage',
      title: 'Does this podcast have it\'s own page?',
      description: 'Any item with this checked will link through to the dedicated Podcast page, if it\'s not turned on, the podcast will not be clickable.',
      type: 'boolean'
    },
    {
      name: 'previewImage',
      title: 'Preview image',
      description: 'This is the image that will appear as a thumbnail on the Our Podcasts page.',
      type: 'figure'
    },
    {
      name: 'podcastLink',
      title: 'Podcast Link (optional)',
      description: 'This requires an Apple Podcast link, the icon & link will only appear if you enter a URL here.',
      type: 'string'
    },
    {
      name: 'spotifyLink',
      title: 'Spotify Link (optional)',
      description: 'This requires an Spotify Podcast link, the icon & link will only appear if you enter a URL here.',
      type: 'string'
    },
    {
      name: 'amazonLink',
      title: 'Google Link (optional)',
      description: 'This requires an Google Podcast link, the icon & link will only appear if you enter a URL here.',
      type: 'string'
    },
    {
      name: 'googleLink',
      title: 'Amazon Link (optional)',
      description: 'This requires an Amazon Podcast link, the icon & link will only appear if you enter a URL here.',
      type: 'string'
    },
    {
      name: 'iHeartRadioLink',
      title: 'iHeartRadio Link  (optional)',
      description: 'This requires an iHeartRadio Podcast link, the icon & link will only appear if you enter a URL here.',
      type: 'string'
    },
    {
      name: 'omnyWidget',
      title: 'Omny iFrame (required)',
      description: 'This will generate an Omny player widget as well as the play button for all Podcast posts. REMEMBER you only need to put in the podcast name bit of the URL, so call-of-the-wild for example. The code will generate the Omny embed and Play button URL information.',
      type: 'string'
    },
    {
      name: 'excerpt',
      title: 'Preview Excerpt',
      description: 'This paragraph will render on Our Podcasts as a description under the thumbnail image.',
      type: 'simplePortableText'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them, the podcasts are in chronological order with then newest at the top according to this field.',
      type: 'datetime'
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
      name: 'mainImage',
      title: 'Main image',
      description: 'This field will generate a full bleed image after the quote section.',
      type: 'figure'
    },
    {
      name: 'relatedProjects',
      title: 'Related podcasts',
      description: 'Choose a selection of related podcasts which will appear at the bottom of the page. Maximum 4.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'podcast'}}],
      validation: Rule => Rule.error('Maximum 4 entried.').max(4),
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
