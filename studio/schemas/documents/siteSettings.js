export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your company for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes the company.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'Logo',
      title: 'Fresh Air Company Logo',
      type: 'figure'
    },
    // {
    //   name: 'author',
    //   type: 'reference',
    //   description: 'Publish an author and set a reference to them here.',
    //   title: 'Author',
    //   to: [{type: 'staffMember'}]
    // }
  ]
}
