import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogComment from "../../wrappers/blog/BlogComment";
import BlogPost from "../../wrappers/blog/BlogPost";

const Co_Curricular = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>SMGC | Co-Curricular</title>
        <meta
          name="description"
          content="Co-Curricular Page of SMGC"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Co-Curricular
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="container" style={{ minHeight: "30vh" }}>
          <div className="row">
            <div className="col-md-12 text-center pt-5">
              <h1>Coming Soon...</h1>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Co_Curricular.propTypes = {
  location: PropTypes.object
};

export default Co_Curricular;
