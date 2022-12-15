import React from "react";
import {HeroWrapper, Fresh, Air, HeroInner, HeroGrid} from "./hero.styled";
import heroPeople from '../assets/hero-people-crop.png';

const Hero = (props) => {
    return (
        <HeroWrapper>
            <Fresh>Fresh</Fresh>
            <Air>Air</Air>
            {/* <HeroGrid> */}
                <HeroInner>
                    {/* <p>empty content to display content replace with SVG to animate</p> */}
                    {/* <StaticImage
                        src="../assets/hero-people.png"
                        alt="Smiling people"
                        placeholder="blurred"
                        layout="constrained"
                        className="heroPeopleImgWrapper"
                        imgClassName="heroPeopleImg"
                    /> */}
                    <img src={heroPeople} alt="alt" />
                </HeroInner>
            {/* </HeroGrid> */}
            
            {/* <Marquee>
                <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                <div>Box 2 Box 2 Box 2</div>
                <div>Box 3 Box 3 Box 3</div>
            </Marquee> */}
        </HeroWrapper>
    )
}

export default Hero;