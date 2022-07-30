import React from "react";
import styled from "styled-components";
import { Typography, Button, Box } from "@mui/material";

const SliderElement = ({ title, desc, price, img, handleClick = () => {} }) => {
  return (
    <Wrapper sx={{ width: "348px" }}>
      <div className="paper">
        <img src={img} alt="title" />
        <Button
          onClick={handleClick}
          variant="contained"
          className="btn"
          color="orange"
          sx={{ width: "80%", fontWeight: "bold" }}
        >
          Add to cart
        </Button>
      </div>
      <article>
        <Typography component="h2">{title}</Typography>
        <Typography component="p">{desc}</Typography>
        <Typography component="span">{price}</Typography>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  .paper {
    position: relative;
    width: 356px;
  }
  img {
    width: 100%;
    height: auto;
  }
  .btn {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }
  h2 {
    font-style: normal;
    font-size: 20px;
    line-height: 1.18;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #5f6c37;
    padding: 0.5rem 0;
    padding-left: 0.25rem;
  }
  article p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;
    color: #000000;
    font-family: "Quicksand", sans-serif;
  }
  span {
    font-weight: 600;
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    display: block;
    text-align: right;
  }
`;

export default SliderElement;
