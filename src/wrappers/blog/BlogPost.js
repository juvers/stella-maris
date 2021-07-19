import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/blog-5.jpg"}
          />
        </div>
        <div className="blog-details-content">

          <h3>Admissions Process</h3>
          <p className="text-justify">
            The process of admitting candidates into Louisville Girls High School is divided into two phases. The first phase is a written examination in Mathematics, English Language and Aptitude test. The second phase is a face-to-face interview of the prospective students and their parents with the principal. This admission process starts with the purchase of forms from September of the previous year through to the examination day which is usually the first Saturday in March.
          </p>
        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/blog-details.jpg"
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/blog-details-2.jpg"
                }
              />
            </div>
          </div>
        </div>

        <h3>Eligibility and Process</h3>
        <p className="text-justify">
          In SMGC, a new intake into JS1 must have turned ten (10) by August of the year of entry into the school. A student in the boarding house must be mature enough to take good care of herself, carry out the normal daily routine, and still be able to face her studies squarely. Also, this age limitation is to ensure that the girls are at least 16 years old when leaving the school. We hope parents would understand this stance of the school and co-operate with us to produce mature ladies for the next phase of their lives.{" "}
        </p>

        <h3>Ways to Obtain Form</h3>
        <p className="text-justify">
          You can visit any of the following centres to check the list of successful candidates:{" "}

        </p>
        <ul className="list-group">
          <li className="list-group-item">Louisville Girls High School, Ijebu-Itele, Ogun State</li>
          <li className="list-group-item">St. Finbarr’s College, Akoka, Lagos State</li>
          <li className="list-group-item">St. Louis Nursery/Primary School, Akure, Ondo State</li>
          <li className="list-group-item">Louisville Nursery/Primary School, Oremeji, Mokola, Ibadan, Oyo State</li>
          <li className="list-group-item">Nazareth Nursery/Primary School, Festac, Lagos State</li>
          <li className="list-group-item">Marywood Girls College, Ebute-Meta, Lagos State</li>
          <li className="list-group-item">Maryland Convent School, Ikeja, Lagos State</li>
          <li className="list-group-item">Sacred Heart Minor Seminary, CIWA Portharcourt</li>

        </ul>
      </div>


    </Fragment>
  );
};

export default BlogPost;
