import { MdPerson } from "react-icons/md";

export default {
  name: 'staffMember',
  type: 'document',
  title: 'Person',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'simplePortableText'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'bioPortableText'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
