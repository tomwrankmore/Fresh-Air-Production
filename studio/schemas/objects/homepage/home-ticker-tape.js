import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

const homeTickerType = defineType({
  name: 'homeTickerTape',
  type: 'object',
  title: 'Home Ticker Tape',
  fields: [
    defineField({
      name: 'homeTickerTapeText',
      type: 'string',
      title: 'Ticker tape.',
      description: 'Please enter some copy for the scrolling text underneath the podcast section.'
    })
  ],
  icon: DocumentTextIcon,
})

export default homeTickerType;