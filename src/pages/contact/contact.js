import PropTypes from "prop-types";
import React, { useState, Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "layouts/LayoutOne";
import Breadcrumb from "wrappers/breadcrumb/Breadcrumb";
import LocationMap from "./Content/LocationMap";

const Contact_Us = ({ location }) => {
  const [state, setState] = useState({

  })
  const { pathname } = location;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  }

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setState({ ...state, [name]: value })
  }

  return (
    <Fragment>
      <MetaTags>
        <title>SMGC | Contact Us</title>
        <meta
          name="description"
          content="Contact of SMGC."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <LocationMap latitude="6.7447832" longitude="6.0102966" />
            </div>
            <div className="custom-row-2 d-flex flex-row">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p><a href="tel:2348096178050">+234(809) 617 8050 </a></p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p >
                        <a href="mailto:admin@stellamarisgirlscollege.org">admin@stellamarisgirlscollege.org</a>
                      </p>
                      <p>
                        <a href="//stellamarisgirlscollege.org">stellamarisgirlscollege.org</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Stella Maris Girls College </p>
                      <p>Iruekpen, Edo State</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form className="contact-form-style" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" onChange={handleChange} placeholder="Name*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" onChange={handleChange} placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          onChange={handleChange}
                          placeholder="Subject*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          onChange={handleChange}
                          placeholder="Your Message*"
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact_Us.propTypes = {
  location: PropTypes.object
};

export default Contact_Us;
