import React from "react";
import SliderElement from "./SliderElement";
import { bseller, sliderSeller } from "../utils/constants";
import lemon_flower from "../assets/lemon_flower.svg";
import SliderSection from "./SliderSection";

const BestSeller = () => {
  return (
    <SliderSection bgflower={lemon_flower} article={bseller}>
      {sliderSeller.map((s) => (
        <SliderElement {...s} key={s.title} />
      ))}
    </SliderSection>
  );
};
export default BestSeller;
