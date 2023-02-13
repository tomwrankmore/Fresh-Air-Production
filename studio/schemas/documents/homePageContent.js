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
      name: 'homeHeroTickerTape',
      type: 'string',
      title: 'Hero ticker tape text'
    },
    {
      name: 'homePodcastHeading',
      type: 'simplePortableText',
      title: 'Podcast section heading',
      description: 'Paragraph to sit with podcast vertical carousel.'
    },
    {
      name: 'homePodcasts',
      title: 'Homepage projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'podcast'}}],
      validation: Rule => Rule.error('Please add 4 podcasts to be displayed on the homepage.').required().min(4).max(4),
    },
    {
      name: 'homeSecondTickerTape',
      type: 'string',
      title: 'Ticker tape text to sit underneath podcasts section'
    },
    {
      name: 'homeWorkSectionHeading',
      type: 'string',
      title: 'Work Section Heading',
      description: 'Heading in the We Work section.'
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
      name: 'homePageQuote',
      type: 'string',
      title: 'Quote section',
    },
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
  ]
}
