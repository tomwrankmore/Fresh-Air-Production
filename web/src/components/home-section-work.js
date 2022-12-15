import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { device } from "../styles/mediaQueries";
import { colors } from "../styles/colors";
import { BsArrowRight } from "react-icons/bs";

const HorizontalContainer = styled.div` 
    width: 300%;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    background-color: ${colors.FABlue};
    /* @media ${device.mediaMinMedium} {
      height: 90vh;
    } */
`

const Panel = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  /* font-size: 1.5em;
  text-align: center;*/
  color: white; 
  position: relative;
  box-sizing: border-box;
  padding: 0;

  &.panel1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .panel1-right-content, 
    .panel1-left-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .panel1-left-content {
      flex: 5;
      h1 {
        font-size: 4rem;
      }
    }

    .panel1-right-content {
      flex: 2;
      text-align: center;
      padding-right: 2rem;
      h3 {
        line-height: 2.25rem;
        font-size: 1.75rem;
      }
    }
  }

  .panel-equal-column {
    flex: 1;
    padding: 0 120px;
    text-align: center;
    h2 {
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 4rem;
      font-weight: normal;
      line-height: 1.5rem;
    }

    .img {
      transform-origin: center center;
    }

    .img-r {
      transform: rotate(5deg);
      transform-origin: center center;
    }

    .img-l {
      transform: rotate(-5deg);
      transform-origin: center center;
    }
  }
`

const Work = React.forwardRef((props, ref) => {
    return (
        <div style={{position: 'relative'}} ref={ref}>
            <HorizontalContainer className="horizontalContainer">
              <Panel className="panel panel1">
                <div className="panel1-left-content">
                  <h1>We Work</h1>
                  <StaticImage 
                    src="../assets/we-work.png"
                    alt="Joel Muniz"
                    placeholder="blurred"
                    layout="fullWidth"
                    style={{ width: '60%', margin: '30px auto'}}
                  />
                  <h1>With You</h1>
                </div>
                <div className="panel1-right-content">
                  <BsArrowRight style={{fontSize: '3rem', marginBottom: '1rem'}}/>
                  <h3>Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers.</h3>
                </div>
              </Panel>
              <Panel className="panel panel2">
                <div className="panel-equal-column">
                  <h2>Creative Development</h2>
                  <p className="panel-paragraph">Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers. Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers.</p>
                  <StaticImage
                    src="../assets/unnamed.jpg"
                    alt="Smiling people"
                    placeholder="blurred"
                    layout="fullWidth"
                    // aspectRatio={16/9}
                    // style={{marginBottom: '2rem'}}
                    objectPosition="0 0"
                    className="img-l"
                    />
                </div>
                <div className="panel-equal-column">
                  <StaticImage
                    src="../assets/unnamed-2.jpg"
                    alt="Smiling people"
                    placeholder="blurred"
                    layout="fullWidth"
                    // aspectRatio={16/9}
                    style={{maxWidth: '320px', margin: '0 auto 2rem auto'}}
                    objectPosition="0 0"
                    className="img-r"
                    />
                  <h2>Record and Produce</h2>
                  <p className="panel-paragraph">Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers. Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers.</p>
                </div>
              </Panel>
              <Panel className="panel panel3">
                <div className="panel-equal-column">
                  <h2>Advertise and Promote</h2>
                  <p className="panel-paragraph">Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers. Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers.</p>
                  <StaticImage
                    src="../assets/unnamed-1.jpg"
                    alt="Smiling people"
                    placeholder="blurred"
                    layout="fullWidth"
                    // aspectRatio={16/9}
                    // style={{marginBottom: '2rem'}}
                    objectPosition="0 0"
                    className="img-l"
                    />
                </div>
                <div className="panel-equal-column">
                  <StaticImage
                    src="../assets/unnamed-3.png"
                    alt="Smiling people"
                    placeholder="blurred"
                    layout="fullWidth"
                    // aspectRatio={16/9}
                    style={{maxWidth: '320px', margin: '0 auto 2rem auto'}}
                    objectPosition="0 0"
                    className="img-r"
                    />
                  <h2>Analyse Your Data</h2>
                  <p className="panel-paragraph">Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers. Whatever stage of the process you're at, we can take your podcast from an idea straight to your the ears of your customers.</p>
                </div>
              </Panel>
          </HorizontalContainer>
        </div>
    )
}
)

export default Work