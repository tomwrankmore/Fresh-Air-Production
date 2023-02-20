export default {
  name: 'homePageTestimonial',
  type: 'document',
  title: 'Homepage Content',
  __experimental_actions: [
    'create',
    'update',
    'delete',
    'publish'
  ],
  fields: [
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'string'
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string'
    },
  ],
}

