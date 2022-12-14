"use client";
import WrapperHeader, {
  WrapperTitle,
  Title,
  WrapperNP,
  NP,
  WrapperLogin,
  Login,
} from "./Header.style";

export default function Header() {
  return (
    <>
      <WrapperHeader>
        <WrapperNP>
          <NP>Nom Prénom</NP>
        </WrapperNP>
        <WrapperTitle>
          <Title>Accueil</Title>
          <Title>Collection</Title>
          <Title>Contact</Title>
          <Title>À propos</Title>
        </WrapperTitle>
        <WrapperLogin>
          <Login>Login</Login>
        </WrapperLogin>
      </WrapperHeader>
    </>
  );
}
