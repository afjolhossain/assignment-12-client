import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Review from "../Review/Review";
import SpicalBanner from "../SpecialBanner/SpicalBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <SpicalBanner></SpicalBanner>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
