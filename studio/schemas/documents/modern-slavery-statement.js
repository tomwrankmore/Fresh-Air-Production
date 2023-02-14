import { GrDocumentText } from "react-icons/gr"

export default {
  name: 'modernSlaveryStatement',
  title: 'Modern Slavery Statement',
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
