import React from "react";
import { Link } from "gatsby";
import Logo from "../assets/FA-nav-logo.inline.svg"

const CentralLogo = React.forwardRef((props, ref) => {
    return (
        <div className="fixed left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center p-4 top-0" ref={ref}>
            <Link to="/" className="centralLogo">
                <Logo className="logoSVG" style={{width: '140px', height: 'auto'}}/>
            </Link>
        </div>
        )
    }
);
  
 export default CentralLogo;