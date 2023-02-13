import {FaPalette} from "react-icons/fa"

export default {
  name: 'brandColours',
  type: 'document',
  title: 'Brand colours',
  icon: FaPalette,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'color',
      type: 'string',
      title: 'Brand Colour'
    }
  ]
}
