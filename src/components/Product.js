import React from "react";
import styled from "styled-components";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const Product = ({ name, image, price }) => {
  return (
    <Card elevation={0}>
      <CardActionArea>
        <CardMedia
          image={image}
          alt={name}
          component="img"
          sx={{ width: 500, height: 278 }}
        />
      </CardActionArea>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: 1.18,
            textTransform: "uppercase",
            color: "#5f6c37",
            fontFamily: '"Quicksand", sans-serif',
          }}
        >
          {name}
        </Typography>
        <Typography sx={{ fontWeight: 600 }}>$ {price}</Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
