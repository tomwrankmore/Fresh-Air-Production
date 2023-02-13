import styled from "styled-components";
import { device } from "../../styles/mediaQueries";

export const HeroWrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  padding: 0 2rem;
  @media ${device.mediaMinMedium} {
    padding: 0;
  }
  p {
    line-height: 1.6rem;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
}
&.clipped {
    --clip: "0 100% 0 0";
    clip-path: inset(var(--clip));
}
`