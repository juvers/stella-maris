import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "layouts/LayoutOne";
import Breadcrumb from "wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "./Content/BlogSidebar";
import BlogPost from "./Content/BlogPost";

const Boarding_House = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>SMGC | Boarding House</title>
        <meta name="description" content="Boarding House Page of SMGC" />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Boarding House
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <h3>Daily Routine</h3>
            <div className="row">
              <div className="col-md-4">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>MONDAY- FRIDAY</th>
                      <th>ACTIVITIES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4.50a.m.</td>
                      <td>Rising & Morning Prayer</td>
                    </tr>
                    <tr>
                      <td>5.00a.m. -5. 35a.m</td>
                      <td>Personal Toileting</td>
                    </tr>
                    <tr>
                      <td>5.40a.m. -6.10a.m.</td>
                      <td>Morning Services</td>
                    </tr>
                    <tr>
                      <td>6.10a.m. -7.10a.m.</td>
                      <td>Morning Prep</td>
                    </tr>
                    <tr>
                      <td>7.15a.m. -7.35a.m.</td>
                      <td>Breakfast</td>
                    </tr>
                    <tr>
                      <td>7.40a.m. -8.05a.m.</td>
                      <td>Morning Assembly</td>
                    </tr>
                    <tr>
                      <td>8.10a.m. -2.20p.m.</td>
                      <td>School Hours</td>
                    </tr>
                    <tr>
                      <td>2.25p.m. -2.55p.m.</td>
                      <td>Lunch</td>
                    </tr>
                    <tr>
                      <td>3.00p.m. -4.00p.m.</td>
                      <td>
                        Monday, Wednesday & Thursday- Siesta <br />
                        Tuesday -Laundry (Washing) <br />
                        Wednesday - Laundry (Ironing) <br />
                        Friday- Laundry (Washing)
                      </td>
                    </tr>
                    <tr>
                      <td>4.00p.m. -4.30p.m.</td>
                      <td>Freshening Up</td>
                    </tr>
                    <tr>
                      <td>4.35p.m. -5.45p.m.</td>
                      <td>
                        Monday - Rosary @ 5p.m. & Mass @ 5.30p.m. <br />
                        Tuesday - Games <br />
                        Wednesday - Rosary @ 5p.m. & Mass @ 5.30p.m. <br />
                        Thursday - Games <br />
                        Friday - Mass @5.30p.m.
                      </td>
                    </tr>
                    <tr>
                      <td>5.50p.m. -6.15p.m.</td>
                      <td>Supper</td>
                    </tr>
                    <tr>
                      <td>6.20p.m. -6.50p.m.</td>
                      <td>Evening Prayers (Tuesdays & Thursdays)</td>
                    </tr>
                    <tr>
                      <td>6.50p.m.-9.00p.m.</td>
                      <td>Night Prep</td>
                    </tr>
                    <tr>
                      <td>9.00p.m.- 9.15p.m.</td>
                      <td>Post Supper</td>
                    </tr>
                    <tr>
                      <td>9.15p.m.-10.00p.m.</td>
                      <td>Personal Toileting</td>
                    </tr>
                    <tr>
                      <td>10.00p.m.- 10.15p.m.</td>
                      <td>Night Prayer/Meditation</td>
                    </tr>
                    <tr>
                      <td>10.15p.m.</td>
                      <td>Lights Out</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>SATURDAY</th>
                      <th>ACTIVITIES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5.45a.m.</td>
                      <td>Rising</td>
                    </tr>
                    <tr>
                      <td>5.45a.m. – 6.30a.m.</td>
                      <td>Personal Toileting</td>
                    </tr>
                    <tr>
                      <td>6.30a.m. – 7.00a.m.</td>
                      <td>Morning Prayers</td>
                    </tr>
                    <tr>
                      <td>7.00a.m.-8.50a.m.</td>
                      <td>General Cleaning</td>
                    </tr>
                    <tr>
                      <td>9.00a.m.-9.40a.m.</td>
                      <td>Breakfast</td>
                    </tr>
                    <tr>
                      <td>10.00a.m.-12.00p.m.</td>
                      <td>Weekend Classes/Morning Prep</td>
                    </tr>
                    <tr>
                      <td>12.15p.m.-1.30p.m.</td>
                      <td>House Meeting</td>
                    </tr>
                    <tr>
                      <td>1.45p.m.-2.15p.m.</td>
                      <td>Lunch</td>
                    </tr>
                    <tr>
                      <td>2.20p.m.-3.20p.m.</td>
                      <td>Siesta/laundry (ironing)</td>
                    </tr>
                    <tr>
                      <td>3.30p.m.-4.40p.m.</td>
                      <td>Freshening Up</td>
                    </tr>
                    <tr>
                      <td>4.35p.m. -5.45p.m.</td>
                      <td>Visit to the box room/Laundry (ironing)</td>
                    </tr>
                    <tr>
                      <td>4.45p.m.-5.45p.m.</td>
                      <td>Choir Practice/Liturgy Preparation</td>
                    </tr>
                    <tr>
                      <td>6.00p.m.-6.30p.m.</td>
                      <td>Supper</td>
                    </tr>
                    <tr>
                      <td>6.30p.m.-7-00p.m.</td>
                      <td>Evening Prayers</td>
                    </tr>
                    <tr>
                      <td>7.00p.m.-8.30p.m.</td>
                      <td>Socials/Prep</td>
                    </tr>
                    <tr>
                      <td>8.30p.m.-9.00p.m.</td>
                      <td>Post Supper</td>
                    </tr>
                    <tr>
                      <td>9.00p.m.-9.45p.m.</td>
                      <td>Personal Toileting</td>
                    </tr>
                    <tr>
                      <td>9.45p.m.-10.00p.m.</td>
                      <td>Meditation/Night Prayers</td>
                    </tr>
                    <tr>
                      <td>10.00p.m.</td>
                      <td>Lights Out</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                {" "}
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>SUNDAY</th>
                      <th>ACTIVITIES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5.30a.m.</td>
                      <td>Rising</td>
                    </tr>
                    <tr>
                      <td>5.30a.m. – 6.20a.m.</td>
                      <td>Personal Toileting</td>
                    </tr>
                    <tr>
                      <td>6.30a.m. – 6.55a.m.</td>
                      <td>Seated for Mass/Rosary</td>
                    </tr>
                    <tr>
                      <td>7.00a.m.-8.30a.m.</td>
                      <td>Mass</td>
                    </tr>
                    <tr>
                      <td>8.40a.m.-9.20a.m.</td>
                      <td>Morning Service</td>
                    </tr>
                    <tr>
                      <td>9.20a.m.-9.50a.m.</td>
                      <td>Breakfast</td>
                    </tr>
                    <tr>
                      <td>10.00a.m.-11.50a.m.</td>
                      <td>Morning Prep</td>
                    </tr>
                    <tr>
                      <td>12.00p.m.-1.00p.m.</td>
                      <td>Prayer Meeting/Moral Instructions</td>
                    </tr>
                    <tr>
                      <td>1.10p.m.-1.50p.m.</td>
                      <td>Pious Societies</td>
                    </tr>
                    <tr>
                      <td>2.00p.m.-2.30p.m.</td>
                      <td>Lunch</td>
                    </tr>
                    <tr>
                      <td>2.40p.m.-3.45p.m.</td>
                      <td>Siesta</td>
                    </tr>
                    <tr>
                      <td>4.00p.m.-5.00p.m.</td>
                      <td>Catechism Classes/Free Time</td>
                    </tr>
                    <tr>
                      <td>5.00p.m.-6.00p.m.</td>
                      <td>Games</td>
                    </tr>
                    <tr>
                      <td>6.00p.m.-6.30p.m.</td>
                      <td>Supper</td>
                    </tr>
                    <tr>
                      <td>6.30p.m.-7-00p.m.</td>
                      <td>Evening Prayers</td>
                    </tr>
                    <tr>
                      <td>7.00p.m.-9.00p.m.</td>
                      <td>Night Prep</td>
                    </tr>
                    <tr>
                      <td>9:00p.m. - 9:15p.m.</td>
                      <td>Post Supper</td>
                    </tr>
                    <tr>
                      <td>9:15p.m. - 10:00p.m.</td>
                      <td>Personal Toileting</td>
                    </tr>
                    <tr>
                      <td>10:00p.m.-10.15p.m.</td>
                      <td>Meditation/Night Prayers</td>
                    </tr>
                    <tr>
                      <td>10.15p.m.</td>
                      <td>Lights Out</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <h3>Boarding House Structure</h3>
            <div className="row flex-md-row-reverse">
              <div className="col-lg-9">
                <div className="blog-details-wrapper">
                  {/* blog post */}
                  <BlogPost />

                  {/* blog post comment */}
                  {/* <BlogComment /> */}
                </div>
              </div>
              <div className="col-lg-3">
                {/* blog sidebar */}
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Boarding_House.propTypes = {
  location: PropTypes.object,
};

export default Boarding_House;
