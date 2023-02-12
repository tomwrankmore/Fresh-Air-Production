import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";
import { FaHome, FaPodcast, FaAward, FaEnvelope } from "react-icons/fa"
import { HiOutlineDocumentText } from "react-icons/hi"
import { GrDocumentText } from "react-icons/gr"

const hiddenDocTypes = listItem =>
  !['siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Home Page Content')
        .child(
          S.editor()
            .id('homePageContent')
            .schemaType('homePageContent')
            .documentId('homePageContent')
        )
        .icon(FaHome),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
