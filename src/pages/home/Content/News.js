import PropTypes from "prop-types";
import React from "react";
// import BlogFeaturedSingle from "components/blog-featured/BlogFeaturedSingle";

import BlogFeaturedSingle from "./NewsComponent";
import SectionTitle from "components/section-title/SectionTitle";
import news from "../Data/news.json";

const News = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <SectionTitle
          titleText="News and Updates"
          positionClass="text-center"
          spaceClass="mb-55"
        />
        <div className="row">
          {news.map(singlePost => {
            return (
              <BlogFeaturedSingle singlePost={singlePost} key={singlePost.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default News;
