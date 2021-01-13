import React from "react";
// import { Link } from "react-router-dom";

const BlogSidebar = () => {
  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">HOUSE NAMES AND COLOUR</h4>
        <div className="sidebar-project-wrap mt-30">
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/saints/st-agnes.jpg"
                  }
                  alt=""
                />
              {/* </Link> */}
            </div>
            <div className="sidebar-blog-content">
              <span>Pink</span>
              <h4>
                {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                St Agnes’ House
                {/* </Link> */}
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/saints/st-catherine-of-siena.jpg"
                  }
                  alt=""
                />
              {/* </Link> */}
            </div>
            <div className="sidebar-blog-content">
              <span>Purple</span>
              <h4>
                {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                St. Catherine’s House
                {/* </Link> */}
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/saints/st-maria-goretti.jpg"
                  }
                  alt=""
                />
              {/* </Link> */}
            </div>
            <div className="sidebar-blog-content">
              <span>Yellow</span>
              <h4>
                {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                St. Maria Gorretti’s House
                {/* </Link> */}
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/saints/st-therese-of-lisieux.jpg"
                  }
                  alt=""
                />
              {/* </Link> */}
            </div>
            <div className="sidebar-blog-content">
              <span>Green</span>
              <h4>
                {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                St. Therese House
                {/* </Link> */}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
