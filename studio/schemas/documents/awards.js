import {format,parseISO} from 'date-fns'
import { FaAward } from "react-icons/fa"

export default {
  name: 'award',
  title: 'Awards',
  type: 'document',
  icon: FaAward,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'awardLogo',
      title: 'Award Ceremony Logo',
      type: 'figure'
    },
    {
      name: 'awardLeftImage',
      title: 'Award Ceremony Image',
      type: 'figure'
    },
    // {
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   description: 'Some frontend will require a slug to be set to be able to show the project',
    //   options: {
    //     source: 'title',
    //     maxLength: 96
    //   }
    // },
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
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'awardLogo'
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
