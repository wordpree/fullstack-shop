import React from "react";
import {
  TextField,
  Button,
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { products } from "../utils/constants";
import { getUniqueItem } from "../utils/helper";

const Filter = () => {
  const cates = getUniqueItem(products, "cate");
  const colors = getUniqueItem(products, "color");
  const marks = [
    {
      value: 0,
      label: "$0",
    },
    {
      value: 20,
      label: "$20",
    },
    {
      value: 55,
      label: "$35",
    },
    {
      value: 95,
      label: "$95",
    },
    {
      value: 200,
      label: "$200",
    },
  ];
  return (
    <Wrapper>
      <TextField variant="standard" placeholder="search..." />
      <div className="category">
        <TypoWrapper component="h2">Category</TypoWrapper>
        <Button sx={{ justifyContent: "flex-start" }}>All</Button>
        {cates.map((c) => (
          <Button
            color="filter"
            key={c}
            sx={{ justifyContent: "flex-start", fontSize: 14, fontWeight: 400 }}
          >
            {c}
          </Button>
        ))}
      </div>
      <div className="color">
        <TypoWrapper component="h2">Color</TypoWrapper>
        <Button sx={{ minWidth: 0 }}>All</Button>
        {colors.map((c) => (
          <Button
            key={c}
            sx={{
              backgroundColor: `${c}`,
              width: 15,
              height: 15,
              borderRadius: "50%",
              minWidth: 0,
              marginRight: "4px",
            }}
          />
        ))}
      </div>
      <div className="price">
        <TypoWrapper component="h2">Price</TypoWrapper>
        <Slider
          aria-label="price"
          defaultValue={20}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </div>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Free shipping" />
      </FormGroup>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0 1 20%;
  margin-right: 3.5rem;
  .category {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
  }
  .color {
    padding-bottom: 2rem;
  }
  .price {
    padding-bottom: 2rem;
  }
  .MuiFormControlLabel-label {
    font-family: "Quicksand", sans-serif;
    font-weight: 600;
  }
`;

const TypoWrapper = styled(Typography)`
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
`;

export default Filter;
