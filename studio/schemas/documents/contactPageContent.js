export default {
  name: 'contactPageContent',
  type: 'document',
  title: 'Contact page content',
  // __experimental_actions: [
  //   // 'create',
  //   'update',
  //   // 'delete',
  //   'publish'
  // ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'contactHeroText',
      type: 'projectPortableText',
      title: 'Contact hero text',
      description: 'Heading for hero'
    },
    {
      name: 'contactHeroImage',
      title: 'Contact hero Image',
      type: 'figure'
    },
    // {
    //   name: 'contactText',
    //   title: 'Contact Text',
    //   description: 'Copy to sit left of contact form',
    //   type: 'projectPortableText'
    // },
  ]
}
