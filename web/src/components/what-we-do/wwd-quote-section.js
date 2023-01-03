import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"

const WwdQuoteSection = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            Quote section
        </div>
    )
})

export default WwdQuoteSection