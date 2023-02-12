export default {
  name: 'homePageContent',
  type: 'document',
  title: 'Homepage Content',
  __experimental_actions: [
    // 'create',
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
      type: 'text',
      title: 'Podcast section heading',
      description: 'Paragraph to sit with podcast vertical carousel.'
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
      type: 'string',
      title: 'Work panel one text',
    },
    {
      name: 'homeWorkPanelTwoTitle',
      type: 'string',
      title: 'Work panel two title',
    },
    {
      name: 'homeWorkPanelTwoText',
      type: 'string',
      title: 'Work panel two text',
    },
    {
      name: 'homeWorkPanelThreeTitle',
      type: 'string',
      title: 'Work panel three title',
    },
    {
      name: 'homeWorkPanelThreeText',
      type: 'string',
      title: 'Work panel four text',
    },
    {
      name: 'homeWorkPanelFourTitle',
      type: 'string',
      title: 'Work panel four title',
    },
    {
      name: 'homeWorkPanelFourText',
      type: 'string',
      title: 'Work panel four text',
    },
    {
      name: 'homePageQuote',
      type: 'string',
      title: 'Quote section',
    },
  ]
}
