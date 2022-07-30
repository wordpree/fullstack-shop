import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import logo from "../assets/logo.svg";
import bg from "../assets/ellipse.svg";
import { links } from "../utils/constants.js";
import TopIcons from "./TopIcons";

const Nav = () => {
  return (
    <Container maxWidth="lg" sx={{ position: "relative" }}>
      <Img src={bg} alt="ellipse" className="bg" />
      <NavContainer>
        <div className="nav-wrapper">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="home nav" />
            </Link>
          </div>
          <div className="nav-links-wrapper">
            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to}>{l.label}</NavLink>
                </li>
              ))}
            </ul>
            <TopIcons />
          </div>
        </div>
      </NavContainer>
    </Container>
  );
};

const NavContainer = styled.nav`
  .nav-wrapper {
    padding: 1.25rem 1rem;
    display: flex;
    justify-content: space-between;
  }
  .nav-links-wrapper {
    display: flex;
    align-items: center;
  }
  .nav-links {
    display: flex;
    margin-right: 1rem;
    li {
      margin: 0 0.75rem;
      list-style: none;
    }
    a {
      color: #424b25;
      text-decoration: none;
      text-transform: capitalize;
      font-size: 1rem;
    }
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  max-height: 680px;
  width: 40vw;
  z-index: -1;
`;

export default Nav;
