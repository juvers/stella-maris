import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "layouts/LayoutOne";
import Breadcrumb from "wrappers/breadcrumb/Breadcrumb";
// import BlogSidebar from "wrappers/blog/BlogSidebar";
// import BlogComment from "wrappers/blog/BlogComment";
// import BlogPost from "wrappers/blog/BlogPost";

const Classes = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>SMGC | Classes</title>
        <meta
          name="description"
          content="Classes Page of SMGC"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Classes
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="container" style={{ minHeight: "30vh" }}>
          <div className="row">
            <div className="col-md-12 py-5">
              <h3>Class Structure</h3>
              <ul style={{listStyleType: "square", listStylePosition: "inside"}}>
                <li>Each class or set is divided into three arms namely Almond, Berry, and Cherry. Almond symbolizes watchfulness, sweetness, charisma, gracefulness; Berry depicts perfection, aptness, modesty; while Cherry is a symbol of renewal, purity, success and progress. It is expected that Stella Maris girls will imbibe these and other values as they are being nurtured for excellence in all spheres of life.  </li>
                <li>Students are distributed into classes in alphabetical order of their names. They are encouraged to develop their unique class culture. </li>
                <li>Female class teachers journey with each of the arms for a school session. They combine the roles of mothers and counsellors and are expected to be role models to the students. They stand beside their girls at the assembly ground; take roll call twice daily and also facilitate weekly meetings of their classes. The class teachers in turn meet with the school principal weekly. </li>
              </ul>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Classes.propTypes = {
  location: PropTypes.object
};

export default Classes;
