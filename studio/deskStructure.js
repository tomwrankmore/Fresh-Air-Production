import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdPersonPin } from "react-icons/md";
import { FaHome, FaWrench, FaEnvelope, FaPodcast, FaAward, FaBook } from "react-icons/fa"
import { HiOutlineDocumentText } from "react-icons/hi"
import { GrDocumentText } from "react-icons/gr"

const hiddenDocTypes = listItem =>
  ![
    'siteSettings', 
    'homePageContent', 
    'homePageTestimonial',
    'whatWeDoContent', 
    'award',
    'staffMember',
    'managementMember',
    'podcast',
    'editorial',
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
          .title('Homepage testimonials')
          .schemaType('homePageTestimonial')
          .child(S.documentTypeList('homePageTestimonial').title('Homepage testimonials'))
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
        S.listItem()
          .title('Awards')
          .schemaType('award')
          .child(S.documentTypeList('award').title('Awards'))
          .icon(FaAward),
        S.listItem()
          .title('Staff Members')
          .schemaType('staffMember')
          .child(S.documentTypeList('staffMember').title('Staff Members'))
          .icon(MdPersonPin),
        S.listItem()
          .title('Management Members')
          .schemaType('managementMember')
          .child(S.documentTypeList('managementMember').title('Management Members'))
          .icon(MdPersonPin),
        S.listItem()
          .title('Podcast post')
          .schemaType('podcast')
          .child(S.documentTypeList('podcast').title('Podcasts'))
          .icon(FaPodcast),
        S.listItem()
          .title('Editorial post')
          .schemaType('editorial')
          .child(S.documentTypeList('editorial').title('Editorials'))
          .icon(FaBook),
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
