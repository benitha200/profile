import React, { useState } from "react";
import styled from "styled-components";
import "./style.css";

const Nav = styled.nav`
  position: fixed; /* Use 'fixed' to make it stay in a fixed position */
  top: 0; /* Position it at the top of the viewport */
  left: 0; /* Position it at the left of the viewport */
  width: 100%; /* Make it span the entire viewport width */
  padding: 0 20px;
  min-height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 999; /* Set a higher z-index value to place it on top of other elements */

`;

const Logo = styled.h1`
  font-size: 25px;
  color: black;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(5) {
    margin-right:25rem;
  }

  li:last-child {
    background-color: #337eb4;
    padding: 0.4rem;
    border-radius:50px;
    color: #FFFFFF !important;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
    margin-top:1rem;
    margin-left:2rem;
    cursor:pointer;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: rgba(255, 255, 255, 0.64);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border: 1px solid rgba(255, 255, 255, 0.13);
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo className="logo">
          B.
        </Logo>
        <Menu className="menu">
        <Item>
            <Link to="/">
              Home 
            </Link>
          </Item>
          <Item>
            <Link to="/about">
              About 
            </Link>
          </Item>
          <Item>
            <Link to="/skillss">
              Skills
            </Link>
          </Item>
          <Item>
            <Link to="/services">
              Services
            </Link>
          </Item>
          <Item>
            <Link to="/projects">
              Projects
            </Link>
          </Item>
          <Item>
            <Link to="/contactus">
              Contact Us
            </Link>
          </Item>
        </Menu>
        <NavIcon className="nav-icon" onClick={() => toggleNav(!toggle)}>
          <Line  className="nav-icon-line" open={toggle} />
          <Line className="nav-icon-line" open={toggle} />
          <Line className="nav-icon-line" open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link to="/">
              Home 
            </Link>
          </Item>
          <Item>
            <Link to="/about">
              About 
            </Link>
          </Item>
          <Item>
            <Link to="/">
              Skills
            </Link>
          </Item>
          <Item>
            <Link to="/">
              Services
            </Link>
          </Item>
          <Item>
            <Link to="/">
              Projects
            </Link>
          </Item>
          <Item>
            <Link to="/">
              Contact Us
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
