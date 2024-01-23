import { Link } from "react-router-dom";
import styled from "styled-components";
import Center from "./Center";
import { useState } from "react";
import BarsIcon from "./Bars";

const StyledHeader = styled.header`
  background-color: #687864;
  max-height: 60px;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  position: relative;
  top: -15px;
  z-index: 3;
  @media screen and (max-width: 800px) {
    display: flex;
    font-size: 1.5em;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    top: -10px;
    right: -40px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${(props) => (props.mobileNavActive ? "display: block;" : "display: none;")}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #687864;
  @media screen and (min-width: 800px) {
    display: flex;
    position: static;
    padding: 0;
    background-color: transparent;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #f7f9fb;
  text-decoration: none;
  padding: 5px 0;
  @media screen and (min-width: 800px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 90px;
  height: 90px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  top: -35px;
  right: -20px;
  z-index: 4;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/portfolio"}>Cody Rademacher</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
            <NavLink to={"/about-me"}>About Me</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/resume"}>Resume</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
