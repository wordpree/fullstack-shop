import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { Product } from "../components";
import { products } from "../utils/constants";
import { Container } from "@mui/system";

const Shop = () => {
  return (
    <main>
      <Wrapper>
        <Container>
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

const Wrapper = styled.section``;

export default Shop;
