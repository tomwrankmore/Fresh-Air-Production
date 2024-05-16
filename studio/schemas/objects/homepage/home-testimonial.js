import { defineField, defineType } from "sanity";

const HomePageTestimonial = defineType({
  name: "homePageTestimonial",
  type: "document",
  title: "Home Page Testimonial",
  fields: [
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "string"
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string"
    })
  ]
});

export default HomePageTestimonial;
