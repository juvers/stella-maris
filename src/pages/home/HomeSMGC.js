import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "layouts/LayoutOne";
// import FeatureIconTwo from "wrappers/feature-icon/FeatureIconTwo";
// import BlogFeatured from "wrappers/blog-featured/BlogFeatured";
// import HeroSliderTen from "wrappers/hero-slider/HeroSliderTen";
import HeroSlider from './Content/HeroSlider';
// import NewProductGrid from "wrappers/product/NewProductGrid";
// import TeamMemberOne from "wrappers/team-member/TeamMemberOne";
// import BrandLogoSliderOne from "wrappers/brand-logo/BrandLogoSliderOne";
import Statements from "./Content/Statements";
import Poster from "./Content/Poster";
import News from "./Content/News";

const HomeSMGC = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>SMGC | Home</title>
        <meta
          name="description"
          content="Stella Maris Girls College, Iruekpen"
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSlider />
        {/* feature icon */}
        {/* <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" /> */}
        <Statements spaceTopClass="pt-100" spaceBottomClass="pb-60" />
        {/* product grid */}
        {/* <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" /> */}

        {/* brand logo slider */}
        {/* <BrandLogoSliderOne spaceBottomClass="pb-70" /> */}
        {/* <NewProductGrid category="accessories" limit={10} /> */}
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
        <Poster spaceBottomClass="pb-60" />

        <News spaceBottomClass="pb-55" />

  

      </LayoutOne>
    </Fragment>
  );
};

export default HomeSMGC;
