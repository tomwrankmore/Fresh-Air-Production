export default {
  name: 'contactPage',
  type: 'document',
  title: 'Contact page',
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
      description: 'Heading for hero - please ensure these are set to H3 for styling purposes'
    },
    {
      name: 'contactHeroImage',
      title: 'Contact hero image',
      type: 'figure'
    },
    {
      name: 'marqueeText',
      title: 'Scrolling marquee text',
      type: 'string'
    },
    {
      name: 'contactText',
      title: 'Contact Text',
      description: 'Copy to sit left of contact form',
      type: 'projectPortableText'
    },
    {
      name: 'firstNameField',
      title: 'First Name Field',
      type: 'string'
    },
    {
      name: 'surnameNameField',
      title: 'Surname Name Field',
      type: 'string'
    },
    {
      name: 'emailField',
      title: 'Email Field',
      type: 'string'
    },
    {
      name: 'subjectField',
      title: 'Subject Field',
      type: 'string'
    },
    {
      name: 'messageField',
      title: 'Message Field',
      type: 'string'
    },
    {
      name: 'submitField',
      title: 'Submit Buttom Text',
      type: 'string'
    },
    {
      name: 'formCompleteField',
      title: 'Form submission success text',
      type: 'string'
    },
    {
      name: 'calendlyLink',
      title: 'Calendly Form',
      type: 'string',
      description: 'Please add the Calendly Form URL here',
      validation: Rule => Rule.error('Please add the Calendly form URL.').required(),
    }
  ]
}
