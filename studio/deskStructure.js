import { MdSettings, MdPersonPin } from "react-icons/md";
import { FaHome, FaWrench, FaEnvelope, FaPodcast, FaAward, FaBook } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GrDocumentText } from "react-icons/gr";

const hiddenDocTypes = listItem =>
  ![
    "siteSettings",
    "homePageContent",
    "homePageTestimonial",
    "whatWeDoContent",
    "award",
    "staffMember",
    "managementMember",
    "podcast",
    "editorial",
    "contactPage",
    "terms",
    "privacyPolicy",
    "modernSlaveryStatement",
    "acceptableUse",
    "genericPageType",
    "homePageType"
  ].includes(listItem.getId());

export default S =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      S.divider(),
      S.listItem()
        .title("Homepage content")
        .child(
          S.editor()
            .id("homePageContent")
            .schemaType("homePageContent")
            .documentId("homePageContent")
        )
        .icon(FaHome),
      S.listItem()
        .title("Homepage testimonials")
        .schemaType("homePageTestimonial")
        .child(S.documentTypeList("homePageTestimonial").title("Homepage testimonials"))
        .icon(FaHome),
      S.divider(),
      S.listItem()
        .title("What we do page content")
        .child(
          S.editor()
            .id("whatWeDoContent")
            .schemaType("whatWeDoContent")
            .documentId("whatWeDoContent")
        )
        .icon(FaWrench),
      S.listItem()
        .title("Awards")
        .schemaType("award")
        .child(S.documentTypeList("award").title("Awards"))
        .icon(FaAward),
      S.divider(),
      S.listItem()
        .title("Staff Members")
        .schemaType("staffMember")
        .child(S.documentTypeList("staffMember").title("Staff Members"))
        .icon(MdPersonPin),
      S.listItem()
        .title("Management Members")
        .schemaType("managementMember")
        .child(S.documentTypeList("managementMember").title("Management Members"))
        .icon(MdPersonPin),
      S.divider(),
      S.listItem()
        .title("Podcast post")
        .schemaType("podcast")
        .child(S.documentTypeList("podcast").title("Podcasts"))
        .icon(FaPodcast),
      S.divider(),
      S.listItem()
        .title("Editorial post")
        .schemaType("editorial")
        .child(S.documentTypeList("editorial").title("Editorials"))
        .icon(FaBook),
      S.divider(),
      // S.listItem()
      //   .title("Generic page builder")
      //   .schemaType("genericPageType")
      //   .child(S.documentTypeList("genericPageType").title("Page"))
      //   .icon(FaBook),
      // S.divider(),
      S.listItem()
        .title("Home page builder")
        .child(
          S.editor()
            .id("homePageType")
            .title("Home page builder")
            .schemaType("homePageType")
            .documentId("homePageType")
        )
        .icon(FaBook),
      S.divider(),
      S.listItem()
        .title("Contact page")
        .child(
          S.editor()
            .id("contactPage")
            .schemaType("contactPage")
            .documentId("contactPage")
        )
        .icon(FaEnvelope),
      S.divider(),
      S.listItem()
        .title("Terms")
        .child(
          S.editor()
            .id("terms")
            .schemaType("terms")
            .documentId("terms")
        )
        .icon(GrDocumentText),
      S.listItem()
        .title("Privacy policy")
        .child(
          S.editor()
            .id("privacyPolicy")
            .schemaType("privacyPolicy")
            .documentId("privacyPolicy")
        )
        .icon(GrDocumentText),
      S.listItem()
        .title("Acceptable use")
        .child(
          S.editor()
            .id("acceptableUse")
            .schemaType("acceptableUse")
            .documentId("acceptableUse")
        )
        .icon(GrDocumentText),

      // This returns an array of all the document types defined in schema.js. We filter out those that we have defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);

// export default () =>
