import React from "react";
import styled from "styled-components";
import Article from "./Article";
import Slider from "./Slider";
import SliderElement from "./SliderElement";
import { bseller, sliderSeller } from "../utils/constants";
import lemon_flower from "../assets/lemon_flower.svg";
import { Container } from "@mui/material";

const BestSeller = () => {
  return (
    <Wrapper>
      <Container className="container">
        <Article {...bseller} color="#5F6C37" />
        <Slider>
          {sliderSeller.map((s) => (
            <SliderElement {...s} key={s.title} />
          ))}
        </Slider>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  & {
    background-color: #f1f1f1;
    padding: 5rem 0;
    position: relative;
    display: flex;
    align-items: center;
    &::after {
      background-image: url(${lemon_flower});
      position: absolute;
      left: 0;
      top: 20px;
      content: "";
      width: 100%;
      height: 90%;
      background-repeat: no-repeat;
    }
  }
  article {
    z-index: 99;
  }
  .mySwiper {
    width: 63%;
    padding-bottom: 3.75rem;
    & .swiper-pagination-bullet {
      height: 16px;
      width: 16px;
    }
    & .swiper-pagination-bullet-active {
      background-color: #5f6c37;
    }
  }
  .container {
    display: flex;
    align-items: center;
  }
`;

export default BestSeller;
