import React from "react";

// Pages
import Header from "../Header/Header";

// Style
import Wrapper, { Title, WrapperContent } from "./Homepage.style";

const Homepage = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <WrapperContent>
          <Title>Homepage</Title>
        </WrapperContent>
      </Wrapper>
    </>
  );
};

export default Homepage;
