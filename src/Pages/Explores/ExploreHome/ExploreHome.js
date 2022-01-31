import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Explores from "../Explores/Explores";

const ExploreHome = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Explores></Explores>
      <Footer></Footer>
    </div>
  );
};

export default ExploreHome;
