import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "layouts/LayoutOne";
import Breadcrumb from "wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "./Content/BlogSidebar";
// import BlogComment from "../../wrappers/blog/BlogComment";
import BlogPost from "./Content/BlogPost";

const Boarding_House = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>SMGC | Boarding House</title>
        <meta
          name="description"
          content="Boarding House Page of SMGC"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Boarding House
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-md-row-reverse">
              <div className="col-lg-9">
                <div className="blog-details-wrapper">
                  {/* blog post */}
                  <BlogPost />

                  {/* blog post comment */}
                  {/* <BlogComment /> */}
                </div>
              </div>
              <div className="col-lg-3">
                {/* blog sidebar */}
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Boarding_House.propTypes = {
  location: PropTypes.object
};

export default Boarding_House;
