// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import staffMember from './documents/staff-member'
import managementMember from './documents/management-staff'
import podcast from './documents/podcast'
import editorial from './documents/editorial'
import award from './documents/awards'
import siteSettings from './documents/siteSettings'
import terms from './documents/terms'
import homePageContent from './documents/homePageContent'
import homePageTestimonials from './documents/homePageTestimonials'
import whatWeDoContent from './documents/whatWeDoPageContent'
import contactPageContent from './documents/contactPageContent'
import contactPage from './documents/contactPage'
import brandColours from './documents/brandColours'
import acceptableUse from './documents/acceptable-use'
import modernSlaveryStatement from './documents/modern-slavery-statement'
import privacyPolicy from './documents/privacy-policy'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import projectMember from './objects/projectMember'
import projectPortableText from './objects/projectPortableText'
import simplePortableText from './objects/simplePortableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'fresh-air',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    projectMember,
    projectPortableText,
    simplePortableText,
    // The following are document types which will appear
    // in the studio.
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
    contactPageContent,
    brandColours,
    acceptableUse,
    modernSlaveryStatement,
    privacyPolicy
  ])
})
