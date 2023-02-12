import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdPersonPin } from "react-icons/md";
import { FaHome, FaWrench, FaEnvelope, FaPodcast, FaAward, FaBook } from "react-icons/fa"
import { HiOutlineDocumentText } from "react-icons/hi"
import { GrDocumentText } from "react-icons/gr"

const hiddenDocTypes = listItem =>
  ![
    'siteSettings', 
    'homePageContent', 
    'whatWeDoContent', 
    // 'award',
    // 'staffMember',
    // 'managementMember',
    // 'podcast',
    // 'editorial',
    'contactPageContent',
    // 'terms'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items(
        [
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
          .title('Homepage content')
          .child(
            S.editor()
              .id('homePageContent')
              .schemaType('homePageContent')
              .documentId('homePageContent')
          )
          .icon(FaHome),
        S.listItem()
          .title('What we do page content')
          .child(
            S.editor()
              .id('whatWeDoContent')
              .schemaType('whatWeDoContent')
              .documentId('whatWeDoContent')
          )
          .icon(FaWrench),
        // S.listItem()
        //   .title('Awards')
        //   .child(
        //     S.editor()
        //       .id('award')
        //       .schemaType('award')
        //       .documentId('award')
        //   )
        //   .icon(FaAward),
        // S.listItem()
        //   .title('Staff Members')
        //   .child(
        //     S.editor()
        //       .id('staffMember')
        //       .schemaType('staffMember')
        //       .documentId('staffMember')
        //   )
        //   .icon(MdPersonPin),
        // S.listItem()
        //   .title('Management Members')
        //   .child(
        //     S.editor()
        //       .id('managementMember')
        //       .schemaType('managementMember')
        //       .documentId('managementMember')
        //   )
        //   .icon(MdPersonPin),
        // S.listItem()
        //   .title('Podcast post')
        //   .child(
        //     S.editor()
        //       .id('podcast')
        //       .schemaType('podcast')
        //       .documentId('podcast')
        //   )
        //   .icon(FaPodcast),
        // S.listItem()
        //   .title('Editorial post')
        //   .child(
        //     S.editor()
        //       .id('editorial')
        //       .schemaType('editorial')
        //       .documentId('editorial')
        //   )
        //   .icon(FaBook),
        S.listItem()
          .title('Contact page content')
          .child(
            S.editor()
              .id('contactPageContent')
              .schemaType('contactPageContent')
              .documentId('contactPageContent')
          )
          .icon(FaEnvelope),
        // S.listItem()
        //   .title('Terms page content')
        //   .child(
        //     S.editor()
        //       .id('terms')
        //       .schemaType('terms')
        //       .documentId('terms')
        //   )
        //   .icon(GrDocumentText),
        // This returns an array of all the document types
        // defined in schema.js. We filter out those that we have
        // defined the structure above
        ...S.documentTypeListItems().filter(hiddenDocTypes)
      ]
    )
