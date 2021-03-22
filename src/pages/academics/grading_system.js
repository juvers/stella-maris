import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogComment from "../../wrappers/blog/BlogComment";
import BlogPost from "../../wrappers/blog/BlogPost";

const GradingSystem = ({ location }) => {
    const { pathname } = location;

    return (
        <Fragment>
            <MetaTags>
                <title>SMGC | Grading System</title>
                <meta
                    name="description"
                    content="Curriculum Page of SMGC"
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                GRADING SYSTEM
      </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="container" style={{ minHeight: "30vh" }}>
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <h3>Grading System</h3>
                            <img style={{ minWidth: "100%" }} src={process.env.PUBLIC_URL + '/assets/img/gpa.jpg'} className="poster-img" alt="" />
                            <h3> Grade Point Average(GPA) Calculation</h3>

                            <p>GPA is calculated using the grade points above. The first three years (Junior School 1-3) and the last three years (Senior School 1-3) are computed separately. All subjects, whether passed or failed, are included in the computation.</p>

                            <h3>Ranking</h3>

                            <p>Students are ranked according to their cumulative grade point average (CGPA).</p>

                            <h3>Promotion Criteria</h3>
                            <hr />

                            <h3>Junior School</h3>
                            <p>A1 (100%) – E8 (61%) in English Language, Mathematics and eight (8) other subjects.</p>
                            <h3>Senior School</h3>

                            <ul>
                                <li>Business: E8 (61%) in English Language, Mathematics, Account, Commerce, Economics and four (4) other subjects.</li>
                                <li>Humanities: E8 (61%) in English Language, Mathematics, Literature-in-English, Bible Knowledge, Government and four (4) other subjects.</li>
                                <li>Science & Technology: E8 (61%) in English Language, Mathematics, Biology, Chemistry, Physics and four (4) other subjects.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

GradingSystem.propTypes = {
    location: PropTypes.object
};

export default GradingSystem;
