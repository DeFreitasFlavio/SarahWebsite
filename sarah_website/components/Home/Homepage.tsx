"use client";
// Pages
import Header from "../Header/Header";
import Carrousel from "../Carrousel/Carrousel";
// Style
import Wrapper, { Title, WrapperContent } from "./Homepage.style";

export default function Homepage() {
  return (
    <>
      <Wrapper>
        <WrapperContent>
          <Header />
          <Carrousel />
        </WrapperContent>
      </Wrapper>
    </>
  );
}
