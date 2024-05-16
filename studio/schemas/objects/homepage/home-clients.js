import { DocumentTextIcon, CaseIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const homeClientsType = defineType({
  name: "homeClients",
  type: "object",
  title: "Homepage Clients",
  fields: [
    defineField({
      name: "visibleOnPage",
      title: "Visible on homepage?",
      description: "If unchecked this block will not render on the homepage.",
      type: "boolean"
    }),
    defineField({
      name: "homeClientsRowOne",
      title: "Clients Row One",
      type: "figure",
      description: "Upload an SVG for first row of scrolling client logos."
    }),
    defineField({
      name: "homeClientsRowTwo",
      title: "Clients Row Two",
      type: "figure",
      description: "Upload an SVG for second row of scrolling client logos."
    }),
    defineField({
      name: 'homeClientsRowThree',
      title: 'Clients Row Three',
      type: 'figure',
      description: 'Upload an SVG for third row of scrolling client logos.',
    })
  ],
  initialValue: {
    visibleOnPage: true
  },
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heading",
      image: "image"
    },
    prepare({ title, image }) {
      return {
        title: title || "Our Clients",
        subtitle: "Our Clients",
        media: image || CaseIcon
      };
    }
  }
});

export default homeClientsType;
