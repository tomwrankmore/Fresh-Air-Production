import styled from "styled-components";
import { device } from "../../styles/mediaQueries";

export const HeroWrapper = styled.div`
background-color: white;
width: 100%;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;
@media ${device.mediaMinMedium} {
  flex-direction: row;
}
`;

export const Column = styled.div`
width: 100%;
display: flex;
align-items: left;
justify-content: center;
flex-direction: column;
overflow: hidden;
/* padding: 0 2rem; */
&.clipped {
    --clip: "0 100% 0 0";
    clip-path: inset(var(--clip));
}
`