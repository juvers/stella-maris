import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/examsheet.jpg"}
          />
        </div>
        <div className="blog-details-content">

          <h3>Admissions Process</h3>
          <p className="text-justify">
            The process of admitting candidates into Stella Maris Girls College is divided into two phases. The first phase is a written examination in Mathematics, English Language and Aptitude test. The second phase is a face-to-face interview of the prospective students and their parents with the principal. This admission process starts with the purchase of forms from the form centers listed through to the examination day which is <strong>20th March 2021</strong>.
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

        <h3>Eligibility</h3>
        <p className="text-justify">
          In SMGC, a new intake into JS1 must have turned ten (10) by September of the year of entry into the school. A student in the boarding house must be mature enough to take good care of herself, carry out the normal daily routine, and still be able to face her studies squarely. Also, this age limitation is to ensure that the girls are at least 16 years old when leaving the school. We hope parents would understand this stance of the school and co-operate with us to produce mature ladies for the next phase of their lives.{" "}
        </p>

        <h3>Examination Centers</h3>
        <p className="text-justify">
          You can visit any of the following centres to write the examination:

        </p>
        <ul class="list-group">
          <li class="list-group-item">Stella Maris Girls College, Iruekpen, Edo State</li>
          <li class="list-group-item">Phelim Group of Schools, No. 64-68, Adesuwa Grammar School Road, GRA, Benin City, Edo State</li>
          <li class="list-group-item">Regina Mundi(OLA) Private School, No. 153 Nnebisi Road Asaba, Delta State</li>
          <li class="list-group-item">St. Louis Nur./Pry School, Akure, Ondo State</li>
          <li class="list-group-item">Mater Misericordiae Secondary School, Rumuomasi, Port Harcourt</li>
          <li class="list-group-item">St. Finbar's College. Akoka Lagos (beside University of Lagos)</li>
          <li class="list-group-item">Carmelite Prisoners' Interest Organization (CAPIO), 2 Bent Lane GRA, Enugu, Enugu State</li>
          <li class="list-group-item">St Enda's College, Along Old Ughelli/Warri Road, Near General Obada Junction, Agbarho, Delta State</li>
        </ul>
      </div>


    </Fragment>
  );
};

export default BlogPost;
