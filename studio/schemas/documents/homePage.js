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
        })
      ]
    })
  ]
});

export default HomePageType;
