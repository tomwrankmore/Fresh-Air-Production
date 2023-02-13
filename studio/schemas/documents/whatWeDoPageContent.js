export default {
  name: 'whatWeDoContent',
  type: 'document',
  title: 'What We Do page Content',
  // __experimental_actions: [
  //   // 'create',
  //   'update',
  //   // 'delete',
  //   'publish'
  // ],
  fields: [
    {
      name: 'wwdHeroText',
      type: 'projectPortableText',
      title: 'What We Do hero text',
      description: 'Heading for hero'
    },
    {
      name: 'wwdHeroImage',
      title: 'Hero Image',
      type: 'figure'
    },
    {
      name: 'wwdSectionOneText',
      title: 'Section One Text',
      type: 'projectPortableText'
    },
    {
      name: 'wwdSectionOneImage',
      title: 'Section One Image',
      type: 'figure'
    },
    {
      name: 'wwdTickerTapeText',
      type: 'string',
      title: 'Scrolling ticker tape',
    },
    {
      name: 'wwdSectionTwoText',
      title: 'Section Two Text',
      type: 'projectPortableText'
    },
    {
      name: 'wwdSectionTwoImage',
      title: 'Section Two Image',
      type: 'figure'
    },
    {
      name: 'wwdSectionThreeText',
      title: 'Section Three Text',
      type: 'projectPortableText'
    },
    {
      name: 'wwdSectionThreeImage',
      title: 'Section Three Image',
      type: 'figure'
    },
    {
      name: 'wwdPageQuote',
      type: 'string',
      title: 'Quote section',
    },
  ]
}
