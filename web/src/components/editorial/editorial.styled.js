import styled from "styled-components";
import { device } from "../../styles/mediaQueries";

export const SectionWrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media ${device.mediaMinMedium} {
    max-width: 75%;
    padding: 4rem 2rem;
  }
  margin: 0 auto;
  p {
    padding-bottom: 1rem;
    line-height: 1.6rem;
    font-size: 1.2rem;
  }
  &.flex-reverse-on-mobile {
    flex-direction: column-reverse;
  }
  @media ${device.mediaMinMedium} {
    padding: 2rem;
    flex-direction: row;
    &.flex-reverse-on-mobile {
      flex-direction: row;
    }
  }
`;

export const Column = styled.div`
width: 100%;
display: flex;
align-items: left;
justify-content: center;
flex-direction: column;
overflow: hidden;
&.text {
  p {
    line-height: 1.4rem;
    font-size: 1.2rem;
  }
  padding: 2rem 1rem;
  @media ${device.mediaMinMedium} {
    padding: 0;
  }
}
&.clipped {
    --clip: "0 100% 0 0";
    clip-path: inset(var(--clip));
}
`