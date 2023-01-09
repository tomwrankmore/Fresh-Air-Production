import React from "react";
import { colors } from "../styles/colors";
import { device } from "../styles/mediaQueries";
import styled from "styled-components";
import CentralLogo from "../components/central-logo"
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import Layout from "../containers/layout";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const WhoWeAreWrapper = styled.div` 
    padding: 120px 2rem 2rem;
    position: relative;
    /* .css-6bxxch-MuiPaper-root-MuiAccordion-root.Mui-expanded,
    .css-o4b71y-MuiAccordionSummary-content.Mui-expanded {
        margin: 0 !important;
    }
    .css-14ihzw6-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
        min-height: 48px;
    } */
`

const Directors = styled.ul` 
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
    @media ${device.mediaMinMedium} {
        flex-direction: row;
    }
    /* padding: 120px 2rem 0 2rem */
    li {
        flex: 1;
        h3 {
            background-color: ${colors.FABlue};
            padding: 1rem;
            color: white;
        }
        .MuiAccordionDetails-root p {
            margin-bottom: 1rem;
        }

        .wwaSectionImg {
            max-height: 420px;
        }
    }
`

const StaffGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    gap: 4px;
    h3 {
        background-color: ${colors.FABlue};
        padding: 1rem;
        color: white;
    }
`

const rootStyles =  {
    boxShadow: 'none'
 }
 
const btnStyles =  {
    color: '#ffffff',
    backgroundColor: colors.FAGrey
}

const textContentStyles = {
    // position: 'absolute',
    // backgroundColor: 'white',
    // zIndex: '101'
}


const WhoWeAre = () => {

    return (
        <Layout>
            <SEO title="What We Do" />
            <CentralLogo />
            <WhoWeAreWrapper>
                <Directors>
                    <li>
                        <div>
                            <StaticImage
                                src="../assets/founder.png"
                                alt="Founder"
                                placeholder="blurred"
                                layout="fullWidth"
                                objectPosition="0 0"
                                className="wwaSectionImg"
                                imgClassName=''
                            />
                            <h3>Neil Cowling</h3>
                            <Accordion 
                                disableGutters={true}
                                sx={rootStyles}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={btnStyles}
                                >
                                <Typography>Founder</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={textContentStyles}>
                                    <Typography>Neil founded Fresh Air Production in 2003, after spending his early career as a producer with BBC Radio 5Live.</Typography>
                                    <Typography>He's gone on to be of the most experienced, well-connected and highly regarded producers in independent radio production. He's directed David Attenborough, managed the promotional campaigns for five Olympic Games, and written the lyrics for a ridiculous World Cup song that no-one bought.</Typography>
                                    <Typography>Neil has also been Creative Development Director at RadioWorks, and is a regular event speaker.  In 2017 he decided that Fresh Air should focus on branded podcasts, and the rest is history.</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </li>
                    <li>
                        <div>
                            <StaticImage
                                src="../assets/director-1.png"
                                alt="Michaela Hallam"
                                placeholder="blurred"
                                layout="fullWidth"
                                objectPosition="0 0"
                                className="wwaSectionImg"
                                imgClassName=''
                            />
                            <h3>Michaela Hallam</h3>
                            <Accordion 
                                disableGutters={true}
                                sx={rootStyles}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={btnStyles}
                                >
                                    <Typography>Director of Content</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Michaela joined Fresh Air after 20 years with the BBC, where she was Head of Audio at BBC Creative. There she was responsible for leading an award winning team to create the audio marketing campaigns for the BBC's highest priority shows from Strictly to Killing Eve, the Olympics to Eastenders, Dr Who and Planet Earth. We could go on.
                                    </Typography>
                                    <Typography>
                                        She's also worked for every BBC network radio station, developed strategy and creative for the BBC's Voice and Connected Speaker offering, and commissioned sonic brand identities for BBC Music and BBC Sounds.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </li>
                    <li>
                        <div>
                            <StaticImage
                                src="../assets/director-2.png"
                                alt="Richard Blakem"
                                placeholder="blurred"
                                layout="fullWidth"
                                objectPosition="0 0"
                                className="wwaSectionImg"
                                imgClassName=''
                            />
                            <h3>Richard Blake</h3>
                            <Accordion 
                                disableGutters={true}
                                sx={rootStyles}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={btnStyles}
                                >
                                <Typography>Director of Markerting & Growth</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                                </Typography>
                                <Typography>
                                    From launching websites at The Guardian & Observer, to launching some of the UK's biggest shows at the BBC and Sky, Richard then went on to lead global marketing for Yahoo and HuffPost. He loves making our podcasts wildly successful, building them to be a core part of any marketing and content strategy.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </li>
                </Directors>
                <StaffGrid>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Richard Blakem"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                            disableGutters={true}
                            sx={rootStyles}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Staff Memberm"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                                disableGutters={true}
                                sx={rootStyles}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Staff Memberm"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                                disableGutters={true}
                                sx={rootStyles}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Staff Memberm"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                                disableGutters={true}
                                sx={rootStyles}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Staff Memberm"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                            disableGutters={true}
                            sx={rootStyles}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Staff Memberm"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                            disableGutters={true}
                            sx={rootStyles}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Staff Memberm"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                            disableGutters={true}
                            sx={rootStyles}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Staff Memberm"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                            disableGutters={true}
                            sx={rootStyles}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Staff Memberm"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                            disableGutters={true}
                            sx={rootStyles}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Staff Memberm"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                            disableGutters={true}
                            sx={rootStyles}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Staff Memberm"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                            disableGutters={true}
                            sx={rootStyles}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <StaticImage
                            src="../assets/director-2.png"
                            alt="Staff Memberm"
                            placeholder="blurred"
                            layout="fullWidth"
                            objectPosition="0 0"
                            className="wwaSectionImg"
                            imgClassName=''
                        />
                        <h3>Staff Member</h3>
                        <Accordion 
                            disableGutters={true}
                            sx={rootStyles}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={btnStyles}
                            >
                            <Typography>Senior Producer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Richard has almost 20 years of experience of marketing some of the world's biggest media and tech brands.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </StaffGrid>
            </WhoWeAreWrapper>
        </Layout>
    )
}

export default WhoWeAre;