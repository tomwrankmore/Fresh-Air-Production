export default {
  name: 'homePageContent',
  type: 'document',
  title: 'Homepage Content',
  __experimental_actions: [
    'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'homeHeroTickerTape',
      type: 'string',
      title: 'Hero ticker tape text'
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'figure',
      description: 'Please upload an image with similar dimensions to 800px x 550px',
    },
    {
      name: 'homePodcastHeading',
      type: 'simplePortableText',
      title: 'Podcast section heading',
      description: 'Paragraph to sit with podcast vertical carousel.'
    },
    {
      name: 'homePodcasts',
      title: 'Homepage podcasts',
      description: 'Please choose 4 podcasts to be displayed on the homepage.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'podcast'}}],
      validation: Rule => Rule.error('Please add 4 podcasts to be displayed on the homepage.').required().min(4).max(4),
    },
    {
      name: 'homeSecondTickerTape',
      type: 'string',
      title: 'Ticker tape.',
      title: 'Please enter some copy for the scrolling text underneath the podcast section.'
    },
    {
      name: 'homeWorkSectionHeading',
      type: 'string',
      title: 'Work Section Heading',
      description: 'Heading in the We Work section.'
    },
    {
      name: 'homeWorkSectionImage',
      title: 'Work Section Main Image',
      type: 'figure'
    },
    {
      name: 'homeWorkPanelOneTitle',
      type: 'string',
      title: 'Work panel one title',
    },
    {
      name: 'homeWorkPanelOneText',
      type: 'simplePortableText',
      title: 'Work panel one text',
    },
    {
      name: 'homeWorkPanelOneImage',
      title: 'Work panel one image',
      description: 'Please use a landscape image',
      type: 'figure'
    },
    {
      name: 'homeWorkPanelTwoTitle',
      type: 'string',
      title: 'Work panel two title',
    },
    {
      name: 'homeWorkPanelTwoText',
      type: 'simplePortableText',
      title: 'Work panel two text',
    },
    {
      name: 'homeWorkPanelTwoImage',
      title: 'Work panel two image',
      description: 'Please use a portrait image',
      type: 'figure'
    },
    {
      name: 'homeWorkPanelThreeTitle',
      type: 'string',
      title: 'Work panel three title',
    },
    {
      name: 'homeWorkPanelThreeText',
      type: 'simplePortableText',
      title: 'Work panel four text',
    },
    {
      name: 'homeWorkPanelThreeImage',
      title: 'Work panel three image',
      description: 'Please use a landscape image',
      type: 'figure'
    },
    {
      name: 'homeWorkPanelFourTitle',
      type: 'string',
      title: 'Work panel four title',
    },
    {
      name: 'homeWorkPanelFourText',
      type: 'simplePortableText',
      title: 'Work panel four text',
    },
    {
      name: 'homeWorkPanelFourImage',
      title: 'Work panel four image',
      description: 'Please use a portrait image',
      type: 'figure'
    },
    // {
    //   name: 'homeTestimonials',
    //   title: 'Homepage testimonials',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'homePageTestimonial'}}],
    //   // validation: Rule => Rule.error('Please add 4 podcasts to be displayed on the homepage.').required().min(4).max(4),
    // },
    {
      name: 'homeFeaturedEditorial',
      title: 'Homepage featured editorial',
      description: 'Please enter 1 editorial here to be displayed in large on the left.',
      type: 'reference',
      to: [{type: 'editorial'}],
      validation: Rule => Rule.error('You have to add an editorial to be displayed on the homepage.').required(),
    },
    {
      name: 'homeEditorials',
      title: 'Homepage editorials',
      description: 'Please enter 8 editorials here to be displayed on the right.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'editorial'}}],
      validation: Rule => Rule.error('Please add 8 editorials to be displayed on the homepage.').required().min(8).max(8),
    },
    {
      name: 'homeClientsRowOne',
      title: 'Clients Row One',
      type: 'figure',
      description: 'Upload an SVG for first row of scrolling client logos.',
    },
    {
      name: 'homeClientsRowTwo',
      title: 'Clients Row Two',
      type: 'figure',
      description: 'Upload an SVG for second row of scrolling client logos.',
    },
    {
      name: 'homeClientsRowThree',
      title: 'Clients Row Three',
      type: 'figure',
      description: 'Upload an SVG for third row of scrolling client logos.',
    },
  ]
}
