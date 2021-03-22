import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogComment from "../../wrappers/blog/BlogComment";
import BlogPost from "../../wrappers/blog/BlogPost";

const SMGCAdvantage = ({ location }) => {
    const { pathname } = location;

    return (
        <Fragment>
            <MetaTags>
                <title>SMGC | SMGC Advantage</title>
                <meta
                    name="description"
                    content="Curriculum Page of SMGC"
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                SMGC Advantage
      </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="container" style={{ minHeight: "30vh" }}>
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <h3>SMGC Advantage</h3>

                            <h4>Stella Maris Co-Curricular Activities (SMCA)</h4>

                            <p>Stella Maris girls are expected to be excellent in the classroom and at the same time stand out Co-Curricular activities of their interest and choice. These activities tagged Stella Maris Co-Curricular Activities (SMCA) allow students the opportunity to learn something new and widen their horizon. SMCA is a great way of supporting the students to develop leadership skills, as well as strengthen their talents and passions. They are able to stretch beyond their comfort zones and make new connections. Stella Maris Co-Curricular Activities consists of the following groups:</p>

                            <ul style={{ listStyleType: "circle", listStylePosition: "inside" }}>
                                <li> Drama</li>
                                <li>Logic</li>
                                <li>Musical Instruments</li>
                                <li>Sports</li>
                                <li>Applied Science</li>
                                <li>Electronic Publishing</li>
                                <li> Creative Art</li>
                                <li>Creative Writing</li>
                                <li>Public Speaking</li>
                                <li>Choreography</li>
                            </ul>
                            <p>All students are encouraged to participate in at least one of the groups. Teachers are moderators of the different groups.</p>
                            <h4>Stella Maris Learning Resource Centre (SMLRC)</h4>
                            <p> To ensure equity and inclusion where every student is valued and has the opportunity to be successful, the school has a center (SMLRC) which is an avenue to close the achievement gap for students with special needs. Teachers and students serve as volunteer tutors after school hours to provide extended learning to those who need more personalized and differentiated learning.</p>
                            <h4>Open Day</h4>
                            <p>
                                A day set aside every term when parents come to school and get feedback on their children from all the teachers. This is an excellent way of parents not just monitoring academic progress but also moral and well-being of their children through one-on-one interaction with the teachers and school management.</p>


























                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

SMGCAdvantage.propTypes = {
    location: PropTypes.object
};

export default SMGCAdvantage;
