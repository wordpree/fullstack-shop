import React from "react";
import styled from "styled-components";
import Article from "./Article";
import { banner } from "../utils/constants";
import bg from "../assets/ellipse.svg";
import fruit from "../assets/fruit.svg";

const Banner = () => {
  return (
    <BannerContainer>
      <Article {...banner} label={true} />
      <section className="right-section">
        <img src={bg} alt="bg" className="banner-bg" />
        <img src={fruit} alt="fruit" className="fruit" />
      </section>
    </BannerContainer>
  );
};
const BannerContainer = styled.section`
  & {
    margin-top: 5rem;
    display: flex;
  }
  .left-section {
    max-width: 456px;
  }
  .right-section {
    display: flex;
    flex: 0 1 50%;
    justify-content: flex-end;
  }
  .fruit {
    max-width: 508px;
    align-self: center;
    align-content: flex-end;
  }
  .banner-bg {
    position: absolute;
    top: 0;
    right: 0;
    max-height: 680px;
    width: 40vw;
    z-index: -1;
  }
`;

export default Banner;
