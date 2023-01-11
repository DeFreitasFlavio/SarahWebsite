import styled from "styled-components";

// Wrapper
const WrapperContent = styled.div``;

export const Images = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const ButtonPrev = styled.button`
  left: 1rem;
`;

export const ButtonNext = styled.button`
  right: 1rem;
`;

export const RotationImage = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Slides = styled.li`
  position: absolute;
  inset: 0;
  opacity: 0;
`;

export default WrapperContent;
