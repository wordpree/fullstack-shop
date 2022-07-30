import React from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import coImg from "../assets/coImg.svg";
import bg from "../assets/collection.svg";
import { collection } from "../utils/constants";
import Article from "./Article";

const Collection = () => {
  return (
    <Container maxWidth="lg">
      <Wrapper>
        <div className="img-wrapper">
          <img src={coImg} alt="collection" className="img" />
        </div>
        <Article
          {...collection}
          variant="outlined"
          color="#5F6C37"
          btnWidth="275px"
        />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.section`
  & {
    display: flex;
    padding-top: 12.5rem;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: 0 10px;
    min-height: 700px;
  }
  .img {
    max-width: 578px;
  }
`;

export default Collection;
