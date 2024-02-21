import { PortableText } from "@portabletext/react";
import React from "react";

import { Figure } from "./figure/figure";

const components = {
  types: {
    figure: Figure
  },
  marks: {
    emailLink: ({children, value}) => {
      return (
        <a href={value.mailto} rel='noreferrer'>
          {children}
        </a>
      )
    },
    phoneLink: ({children, value}) => {
      return (
        <a href={value.tel} rel='noreferrer'>
          {children}
        </a>
      )
    }
  }
};

// const serializers = {
//   marks: {
//     emailLink: ({mark, children}) => {
//       const {slug = {}} = mark
//       const href = `/${slug.current}`
//       return <a href={href}>{children}</a>
//     }
//   }
// }

const BlockContent = ({ blocks }) => <PortableText value={blocks} components={components} />;

export default BlockContent;
