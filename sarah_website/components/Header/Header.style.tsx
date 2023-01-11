import styled from "styled-components";

// Wrapper
const WrapperHeader = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em;
  z-index: 2;
`;

export const WrapperTitle = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const WrapperNP = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const WrapperLogin = styled.div`
  width: 10%;
`;

// Text
export const Title = styled.p`
  padding-left: 30px;
  padding-right: 30px;
`;

export const NP = styled.p``;

export const Login = styled.p``;

export default WrapperHeader;
