// Document types
import staffMember from "./documents/staff-member";
import managementMember from "./documents/management-staff";
import podcast from "./documents/podcast";
import editorial from "./documents/editorial";
import award from "./documents/awards";
import siteSettings from "./documents/siteSettings";
import terms from "./documents/terms";
import homePageContent from "./documents/homePageContent";
import homePageTestimonials from "./documents/homePageTestimonials";
import whatWeDoContent from "./documents/whatWeDoPageContent";
import contactPage from "./documents/contactPage";
import brandColours from "./documents/brandColours";
import acceptableUse from "./documents/acceptable-use";
import modernSlaveryStatement from "./documents/modern-slavery-statement";
import privacyPolicy from "./documents/privacy-policy";
import genericPageType from "./documents/genericPageType.js";

// Object types
import bioPortableText from "./objects/bioPortableText";
import figure from "./objects/figure";
import projectMember from "./objects/projectMember";
import projectPortableText from "./objects/projectPortableText";
import simplePortableText from "./objects/simplePortableText";
// import {promotionType} from "./objects/promotionType";
import {formType} from "./objects/formType.js";
import {heroType} from "./objects/heroType";
import {imageGalleryType} from "./objects/imageGalleryType";
import {textWithImageType} from "./objects/textWithImageType.js";
import {videoType} from "./objects/videoType";

export default [
  bioPortableText,
  figure,
  projectMember,
  projectPortableText,
  simplePortableText,
  staffMember,
  managementMember,
  podcast,
  editorial,
  award,
  siteSettings,
  terms,
  homePageContent,
  homePageTestimonials,
  whatWeDoContent,
  contactPage,
  brandColours,
  acceptableUse,
  modernSlaveryStatement,
  privacyPolicy,
  // Generic Page Type Objects
  genericPageType,
  // promotionType,
  formType,
  heroType,
  imageGalleryType,
  textWithImageType,
  videoType,
];
