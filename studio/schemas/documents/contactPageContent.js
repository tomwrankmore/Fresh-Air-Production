export default {
  name: 'contactContent',
  type: 'document',
  title: 'Contact page Content',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'contactHeroText',
      type: 'text',
      title: 'Contact hero text',
      description: 'Heading for hero'
    },
    {
      name: 'contactHeroImage',
      title: 'Contact hero Image',
      type: 'figure'
    },
    {
      name: 'contactText',
      title: 'Contact Text',
      description: 'Copy to sit left of contact form',
      type: 'projectPortableText'
    },
  ]
}
