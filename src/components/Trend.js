import React from "react";
import SliderElement from "./SliderElement";
import { trend, sliderTrend } from "../utils/constants";
import trend_flower from "../assets/flower.svg";
import SliderSection from "./SliderSection";

const Trend = () => {
  return (
    <SliderSection bgflower={trend_flower} article={trend}>
      {sliderTrend.map((s) => (
        <SliderElement {...s} key={s.title} />
      ))}
    </SliderSection>
  );
};

export default Trend;
