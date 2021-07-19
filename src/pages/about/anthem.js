import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Anthem = ({ location }) => {
  const { pathname } = location;
  const anthemAudio = new Audio("/assets/audio/anthem.ogg");
  // useEffect(() => {
  //   // playAnthem();
  //   anthemAudio.play();
  // }, [anthemAudio]);
  return (
    <Fragment>
      <MetaTags>
        <title>SMGC | Anthem</title>
        <meta name="description" content="Anthem Page of SMGC" />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Anthem
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="container" style={{ minHeight: "30vh" }}>
          <div className="row">
            <div className="col-md-12 text-center anthem">
              <button onClick={() => anthemAudio.play()}>Play Anthem</button>
              <button onClick={() => anthemAudio.pause()}>Stop Anthem</button>
              <button
                onClick={() => {
                  anthemAudio.currentTime = 0;
                  anthemAudio.play();
                }}
              >
                Restart Anthem
              </button>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/anthem/anthem1.png"}
                className="poster-img"
                alt=""
              />
            </div>
            <div className="col-md-4">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/anthem/anthem2.png"}
                className="poster-img"
                alt=""
              />
            </div>
            <div className="col-md-4">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/anthem/anthem3.png"}
                className="poster-img"
                alt=""
              />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/anthem/anthem4.png"}
                className="poster-img"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/anthem/anthem5.png"}
                className="poster-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Anthem.propTypes = {
  location: PropTypes.object,
};

export default Anthem;
