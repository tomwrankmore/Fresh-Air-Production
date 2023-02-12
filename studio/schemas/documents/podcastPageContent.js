export default {
  name: 'podcastContent',
  type: 'document',
  title: 'Podcasts page Content',
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
  ]
}
