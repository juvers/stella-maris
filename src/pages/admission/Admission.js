import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "layouts/LayoutOne";
import Breadcrumb from "wrappers/breadcrumb/Breadcrumb";
import BlogPost from "./Content/BlogPost";

const Admission = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>SMGC | Admission</title>
        <meta
          name="description"
          content="About Page of SMGC"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Admission
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-md-row-reverse">
              <div className="col-lg-8 col-md-12">
                <div className="blog-details-wrapper">
                  {/* blog post */}
                  <BlogPost />

                  {/* blog post comment */}
                  {/* <BlogComment /> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                {/* blog sidebar */}
                {/* <BlogSidebar /> */}

                <div className="row">
                  <div className="col-md-12">
                    <h3>Form Centers</h3>
                    <h5 className="f-md">Purchase Admission Forms at any of the following Sale Centers</h5>
                    <ul className="p-3 ml-2" style={{ listStyleType: "lower-roman" }}>
                      <li>Stella Maris Girls College, Iruekpen, Edo State</li>
                      <li>Phelim Group of Schools, No. 64-68, Adesuwa Grammar School Road, GRA, Benin City, Edo State</li>
                      <li>Regina Mundi(OLA) Private School, No. 153 Nnebisi Road Asaba, Delta State</li>
                      <li>Louisville Girls High School, Ijebu-Itele, Ogun State</li>
                      <li>St. Louis Nur./Pry School, Akure, Ondo State0</li>
                      <li>Lumen Christi International High School, Uromi, Edo State</li>
                      <li>Mater Misericordiae Secondary School, Rumuomasi, Port Harcourt</li>
                      <li>St. Finbar's College. Akoka Lagos (beside University of Lagos)</li>
                      <li>Marywood Girls College, Franklin Street, Ebute Metta Lagos (behind Costain)</li>
                      <li>Carmelite Prisoners' Interest Organization (CAPIO), 2 Bent Lane GRA, Enugu, Enugu State</li>
                      <li>St Enda's College, Along Old Ughelli/Warri Road, Near General Obada Junction, Agbarho, Delta State</li>
                      <li>St. Louis Nur./Pry School, Ikere-Ekiti, Ekiti State</li>
                      <li>Louisville Nur./Pry School, Mokola, Ibadan, Oyo State</li>
                    </ul>


                  </div>
                  <div className="mt-4 text-center col-lg-12 col-md-6">
                    <a href={process.env.PUBLIC_URL + '/assets/pdf/form.pdf'} rel="noopener noreferrer" download="SMGC-Admission-Form.pdf"> <img src={process.env.PUBLIC_URL + '/assets/img/form2021.jpg'} className="poster-img" alt="" /></a>
                    <p>Click image to download <strong>Admission Form</strong></p>
                  </div>

                  <div className="mt-4 text-center col-lg-12 col-md-6">
                    <a href={process.env.PUBLIC_URL + '/assets/pdf/poster.pdf'} rel="noopener noreferrer" download="SMGC-Admission-Poster.pdf"> <img src={process.env.PUBLIC_URL + '/assets/img/poster2021.jpg'} className="poster-img" alt="" /></a>
                    <p>Click image to download <strong>Admission Poster</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Admission.propTypes = {
  location: PropTypes.object
};

export default Admission;
