import React from "react";
import Article from "./Article";
import styled from "styled-components";
import soap from "../assets/soap.png";
import soapBg from "../assets/soap_bg.svg";

const Soap = () => {
  return (
    <Wrapper>
      <Article
        title={[
          "Our luxury soaps are",
          <br />,
          "100% natural providing",
          <br />,
          "nourishing benefits for",
          <br />,
          "your skin",
        ]}
        titleFont="50px"
        btn="explore more"
        color="#5F6C37"
        variant="outlined"
        btnWidth="275px"
      />
      <div className="img-wrapper">
        <img src={soap} alt="luxury soaps" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: #ccdb99;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${soapBg});
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center;
  }
  article {
    display: flex;
    align-items: center;
    margin-right: 4rem;
    z-index: 99;
  }
  .img-wrapper {
    align-items: center;
    display: flex;
  }
`;

export default Soap;
