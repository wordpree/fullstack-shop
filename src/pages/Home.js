import React from "react";
import {
  Banner,
  Collection,
  Services,
  BestSeller,
  Soap,
  Trend,
  Blog,
  Footer,
  Policy,
} from "../components";

const Home = () => {
  return (
    <main>
      <Banner />
      <Services />
      <Collection />
      <BestSeller />
      <Soap />
      <Trend />
      <Blog />
      <Footer />
      <Policy />
    </main>
  );
};

export default Home;
