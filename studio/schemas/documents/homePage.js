import { defineArrayMember, defineField, defineType } from "sanity";

const HomePageType = defineType({
  name: "homePageType",
  type: "document",
  title: "Home Page",
  fields: [
    defineField({
      name: "homePageBuilder",
      type: "array",
      title: "Home page builder",
      of: [
        defineArrayMember({
          name: "homeHero",
          type: "homeHero"
        }),
        defineArrayMember({
          name: "homepagePodcasts",
          type: "homepagePodcasts"
        }),
        defineArrayMember({
          name: "homeTickerTape",
          type: "homeTickerTape"
        }),
        defineArrayMember({
          name: "homeWeWork",
          type: "homeWeWork"
        }),
        defineArrayMember({
          name: "homeClients",
          type: "homeClients"
        }),
        defineArrayMember({
          name: "homeTestimonials",
          type: "homeTestimonials"
        }),
        defineArrayMember({
          name: "homeEditorials",
          type: "homeEditorials"
        }),
        defineArrayMember({
          name: "homeTagCloud",
          type: "homeTagCloud"
        })
      ]
    })
  ]
});

export default HomePageType;
