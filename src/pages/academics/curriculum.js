import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogComment from "../../wrappers/blog/BlogComment";
import BlogPost from "../../wrappers/blog/BlogPost";

const Curriculum = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>SMGC | Curriculum</title>
        <meta
          name="description"
          content="Curriculum Page of SMGC"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Curriculum
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="container" style={{ minHeight: "30vh" }}>
          <div className="row">
            <div className="col-md-12 py-5">
              <h3>Curriculum</h3>

              <p>
                The school runs both the Nigerian and British curricula. The first three years are for Junior Secondary School and the students obtain Basic Education Certificate after writing the Basic Education Certificate Examination (BECE). The last three years lead to students sitting both the International General Certificate of Secondary Education (IGCSE) and West Africa Senior Secondary Certificate Examination to obtain Senior Secondary Certificate Examination (SSCE).
              </p>
              <hr />

              <h3>Junior School</h3>
              <p>The National Examination Council Curriculum for JS 1 – 3 focuses on the following subjects: </p>
              <ol>
                <li>English Studies </li>
                <li>Mathematics </li>
                <li>A Nigerian Language:  </li>
                <li>Basic Science and Technology (BST):
                  <ul style={{ listStyleType: "circle", listStylePosition: "inside" }}>
                    <li>Basic Science which comprises Biology, Chemistry and Physics
                    </li>
                    <li>Basic Technology</li>
                    <li>Physical and Health Education</li>
                    <li>Information & Communication Technology (ICT)</li>
                  </ul>
                </li>
                <li>Pre-Vocational Studies (PVS) :
                  <ul style={{ listStyleType: "circle", listStylePosition: "inside" }}>
                    <li>Home Economics
                    </li>
                    <li>Agriculture</li>
                  </ul>
                </li>
                <li>National Values Education (NVE):
                  <ul style={{ listStyleType: "circle", listStylePosition: "inside" }}>
                    <li>Social Studies
                    </li>
                    <li>Security Education </li>
                    <li>Civic Education </li>
                  </ul>
                </li>
                <li>Cultural and Creative Arts (CCA) which comprises Music, Fine Art and Drama.</li>
                <li>French Language </li>
                <li>Business Studies</li>
                <li>Christian Religious Studies</li>
              </ol>
              <hr />
              <h3>Sernior School</h3>
              <p>The senior school shall run the WAEC and IGCSE curricula from SS1 to SS3. The following subjects shall be offered in senior school. </p>

              <h4>COMPULSORY SUBJECTS </h4>
              <ol>
                <li>English Language </li>
                <li>Mathematics</li>
                <li>Civic Education</li>
                <li>Data Processing /Marketing  (Entrepreneurial Subjects) </li>
              </ol>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>SCIENCE AND TECHNOLOGY  (Science)</th>
                    <th>BUSINESS (Social Science)</th>
                    <th>HUMANITIES  (Art)</th>
                  </tr>
                </thead>
                <tbody>
                 <tr><th>Core Subjects</th></tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Biology</td>
                    <td>Financial Account</td>
                    <td>Bible knowledge</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Chemistry</td>
                    <td>Commerce</td>
                    <td>Government/History</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Physics</td>
                    <td>Economics</td>
                    <td>Lit-in-English</td>
                  </tr>
                  <tr><th>Electives</th></tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Economics</td>
                    <td>Biology </td>
                    <td>Economics</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Further Mathematics</td>
                    <td>Further Mathematics/Government</td>
                    <td>Biology</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Geography/Lit-in-English</td>
                    <td>Geography/Lit-in-English</td>
                    <td>French/ Yoruba</td>
                  </tr>
                  <tr>
                    <th scope="row">11 (Students are to select one from this group)</th>
                    <td>Visual Arts/Home Management/ Agricultural Science/Technical Drawing.</td>
                    <td>Visual Arts/Home Management/ Agricultural Science/Technical Drawing.</td>
                    <td>Visual Arts/Home Management/ Agricultural Science/Technical Drawing.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Curriculum.propTypes = {
  location: PropTypes.object
};

export default Curriculum;
