import React from "react";
import styled from "styled-components";
import { Paper } from "@mui/material";
import ar from "../assets/ar.svg";
import diff from "../assets/diff.svg";
import eo from "../assets/eo.svg";
import nc from "../assets/nc.svg";
import bg from "../assets/texture.svg";

const Services = () => {
  const icons = [
    { icon: eo, title: "Essential oils " },
    { icon: nc, title: "Natural cosmetics" },
    { icon: diff, title: "Diffusers" },
    { icon: ar, title: "Aromatherapy" },
  ];
  return (
    <ServicesContainer>
      {icons.map((i) => (
        <Paper
          key={i.title}
          sx={{
            height: 274,
            width: 274,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: i.icon === diff ? "#5F6C37" : "#FFFDF5",
            borderRadius: "0px 20px 0px 20px",
            marginRight: "-10px",
            displayPrint: "flex",
            flexDirection: "column",
          }}
        >
          <img src={i.icon} alt="icon" />
          <h3 style={{ color: i.icon === diff ? "#fff" : "#5F6C37" }}>
            {i.title}
          </h3>
        </Paper>
      ))}
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  & {
    margin-top: 12rem;
    padding: 5rem 3rem;
    display: flex;
    justify-content: center;
    position: relative;
  }
  &::after {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),
      url(${bg});
    content: "";
    left: 50%;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -99;
    transform: translateX(-50%);
  }
  .bg {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),
      url(${bg});
    position: absolute;
    left: 0;
    width: 100%;
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 31px;
  }
`;
export default Services;
