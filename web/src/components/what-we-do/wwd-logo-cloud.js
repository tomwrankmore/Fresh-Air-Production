import React, {useLayoutEffect} from "react";
import gsap from "gsap";
import {colors} from "../../styles/colors"
import {device} from "../../styles/mediaQueries"

const WwdLogoCloud = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            Logo Cloud
        </div>
    )
})

export default WwdLogoCloud