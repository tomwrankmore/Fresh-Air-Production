import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"

const WwdSectionOne = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            Section 1
        </div>
    )
})

export default WwdSectionOne