import React from "react";
import HamburgerIcon from "./hamburger";
import CloseIcon from "./close"

function Icon(props) {
  switch (props.symbol) {
    case 'close':
      return <CloseIcon />;
    case "hamburger":
      return <HamburgerIcon />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
