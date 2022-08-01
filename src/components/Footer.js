import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { siteList } from "../utils/constants";
import SiteList from "./SiteList";
import footerIcon from "../assets/footerIcon.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Container maxWidth="lg" className="container">
        <div className="site-info">
          <div>
            <img src={footerIcon} alt="touiem" className="logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, sit
            risus mattis erat fermentum.
          </p>
        </div>
        <div className="site-map">
          {siteList.map((list) => (
            <SiteList {...list} key={list.title} />
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #ccdb99;
  font-family: "Quicksand";
  padding: 4.5rem 0;
  border-bottom: 2px solid #5f6c37;
  .container {
    display: flex;
    align-items: center;
  }
  .site-info {
    flex: 0 1 33%;
  }
  .logo {
    max-width: 275px;
    height: auto;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 33px;
    max-width: 356px;
  }
  .site-map {
    display: flex;
  }
`;

export default Footer;
