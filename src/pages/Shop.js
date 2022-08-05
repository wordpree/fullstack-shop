import React from "react";
import styled from "styled-components";
import { Grid, Container } from "@mui/material";
import { Product, Filter } from "../components";
import { products } from "../utils/constants";

const Shop = () => {
  return (
    <main>
      <Wrapper>
        <Container className="container">
          <Filter />
          <Grid container spacing={3}>
            {products.map((p) => (
              <Grid key={p.id} xs={12} md={6} lg={4} item>
                <Product {...p} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  margin-top: 4.75rem;
  .container {
    display: flex;
  }
`;

export default Shop;
