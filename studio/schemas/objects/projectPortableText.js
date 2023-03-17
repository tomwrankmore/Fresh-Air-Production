import {FaRegEnvelope, FaPhone} from 'react-icons/fa'

export default {
  title: 'Portable Text',
  name: 'projectPortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              }
            ]
          },
          {
            name: 'emailLink',
            type: 'object',
            title: 'Email',
            icon: FaRegEnvelope,
            fields: [
              {
                name: 'mailto',
                type: 'url',
                title: 'Email',
                validation: Rule => Rule.uri({
                  scheme: ['mailto']
                })
              }
            ]
          },
          {
            name: 'phoneLink',
            type: 'object',
            title: 'Tel',
            icon: FaPhone,
            fields: [
              {
                name: 'tel',
                type: 'url',
                title: 'Telephone',
                validation: Rule => Rule.uri({
                  scheme: ['tel']
                })
              }
            ]
          },
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'figure'
    }
  ]
}
