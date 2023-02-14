import { GrDocumentText } from "react-icons/gr"

export default {
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  icon: GrDocumentText,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title',
    }
  }
}
