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
                <table className="table table-bordered">
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
                <table className="table table-bordered">
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
                <table className="table table-bordered">
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

          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-justify">
                <h3>HOUSE MEETINGS</h3>
                <p>
                  House meetings supervised by House Mothers are held on
                  Saturday mornings. Students’ personal welfare and house
                  affairs are discussed at these meetings. They are great
                  opportunities to strengthen the Family Spirit among students
                  of various houses.
                </p>

                <h3>HOME CELEBRATIONS</h3>
                <p>
                  Students are not allowed to attend any ceremony such as
                  wedding, naming, birthday parties, religious celebrations,
                  chieftaincy, and extended family funeral e.g. grand parents’
                  funeral while school is in session even when it falls on
                  resumption or vacation days.
                </p>
                <h3>CLOSED CAMPUS</h3>
                <p>
                  The school is considered a closed campus for all students.
                  Students who must go outside the school premises must obtain
                  permission, clearly shown in their permit which must be signed
                  by the Principal or any other staff delegated to do so.
                  Parents would be duly informed if students have to leave the
                  school for any reason.
                </p>
                <h3>RESUMPTION</h3>
                <p>
                  Students must return to school on stipulated days and time.
                  Defaulters must have very serious reason(s) with written
                  evidence to support themselves. Informing the school authority
                  of student’s inability to resume on resumption day ahead of
                  time is highly recommended. Gate closes on resumption day at
                  5:15 p.m.
                </p>
                <h3>PROSPECTUS</h3>
                <p>
                  Boarding House requirements (All items must be BOLDLY and
                  PROPERLY MARKED)
                </p>
                <h4>PART A: Supplied by the school</h4>
                <ol>
                  <li>3 School Uniform</li>
                  <li>1 Occasional outfit</li>
                  <li>2 sets of Sport Wear</li>
                  <li>1 Sunday Wear</li>
                  <li>3 House Wear</li>
                  <li>1 Cardigan</li>
                  <li>6 pairs of School Socks</li>
                  <li>2 pairs of Black Sandals</li>
                  <li>1 pair of Black Shoes</li>
                  <li>Mattress.</li>
                  <li>Bed Cover/2 Bed Sheets/2 Pillow Cases</li>
                  <li>Pillow</li>
                  <li>1 Plastic Bucket</li>
                  <li>1 Washing Bowl</li>
                  <li>1 Broom</li>
                  <li>1 Mop on Stick</li>
                  <li> 1 Scrubbing Brush</li>
                  <li>5-litre Keg</li>
                </ol>

                <h4>PART B: Supplied by parents</h4>

                <ol start="19">
                  <li>2 pairs of Brown Rubber Slippers [Not Dunlop please]</li>
                  <li>1 pair of Trainers/Sneakers</li>
                  <li>3 Dinner Napkins</li>
                  <li> 1 Stainless Travelling Mug</li>
                  <li> 1 Mosquito Net</li>
                  <li>
                    {" "}
                    1 brown Khaki Overall and a pair of brown khaki Trousers
                  </li>
                  <li>
                    {" "}
                    3 Night Dresses/Pyjamas and 2 Long House Coats with Ropes
                  </li>
                  <li> 12 pairs of pants (No disposable pants please)</li>
                  <li> 6 White Knee-length Slips/Underwear</li>
                  <li> 1 Umbrella/Raincoat</li>
                  <li> 2 medium size Towels and 6 Face Towels [Not white]</li>
                  <li> 6 pairs of white/black firm brassieres [If required]</li>
                  <li> 1 Dozen White Handkerchief</li>
                  <li> 1 blanket</li>
                  <li> 12 Cloth Hangers</li>
                  <li> 1 dozen Pegs for hanging cloth</li>
                  <li>1 Peg Hanger</li>
                  <li> 1 Electric Pressing Iron</li>
                  <li> 1 Dusting Towel</li>
                  <li>
                    {" "}
                    2 Cutlery Sets [Knife, Forks, Desert Spoons and Teaspoons]
                  </li>
                  <li>
                    2 Toothbrush, 2 Tubes of Toothpaste, 12 Toilet Rolls
                    [Minimum], Deodorants (NOT anti-perspirant), Comb, Brush,
                    Toilet Soap and Sponge, Soap Case, Powder, Body Cream,
                    Mentholated/Robb/Vicks, Hair Cream, Vaseline, Mirror,
                    Washing Soap.
                  </li>
                  <li> 1 Torch and 4 Batteries</li>
                  <li> Sanitary Pads [If Required]</li>
                  <li> 3 Yards of Ankara Wrapper</li>
                  <li> Air Freshener</li>
                  <li>
                    {" "}
                    1 Native Attire and 1 English Wear for Special Activities
                  </li>
                  <li>
                    {" "}
                    1 White Apron & White Scarf for Home-Economics Practical, 1
                    Checked Apron in the Colour of Student’s House
                  </li>
                  <li>
                    {" "}
                    1 pair of Tiny, Round Gold/Silver Plated stud earrings
                    without stone.
                  </li>
                  <li>
                    {" "}
                    1 Wristwatch with very small Brown/Black Leather Strap and
                    small face
                  </li>
                  <li>
                    {" "}
                    Eyeglasses must have very simple brown or black frame, not
                    tinted and with thin handles
                  </li>
                </ol>

                <ul style={{ listStyleType: "square" }}>
                  <li style={{ fontWeight: "bold" }}>
                    No provision allowed, students are served snacks during
                    school break-time and after night studies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>General Rules and Regulations</h3>
                <div>
                  <table className="table table-striped table-responsive">
                    <thead>
                      <tr>
                        <th>S/NO</th>
                        <th>GENERAL RULES AND REGULATIONS</th>
                        <th>MISCONDUCT</th>
                        <th>CORRECTIVE MEASURE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Girls must obey all routine bells promptly.</td>
                        <td>Lateness to activities without genuine excuse.</td>
                        <td>1 hour community service after school.</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          Students must not make noise at odd times and must
                          obey GREAT SILENCE.
                        </td>
                        <td>
                          2a. Noise making at any time/indiscriminate screaming.
                          <br />
                          2b. Breaking GREAT SILENCE.
                        </td>
                        <td>2 hours community service after school.</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          Appropriate uniform must be worn on all occasions and
                          no unauthorized wearing of mufti is allowed.
                        </td>
                        <td>
                          Undue adornment of the body/wearing of wrong items
                          (Uniform, non-stud-earring, wrist bands, rings,
                          dirty/long nails, short uniform, painting or design),
                          sacramental except the scapular. (The use of rosary is
                          permitted on necks after school but only on days when
                          the rosary will be prayed).
                        </td>
                        <td>
                          Seizure of items and 1 hour community service after
                          school.
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          Restricted areas must be kept as such and girls must
                          not cross the lawn.
                        </td>
                        <td>Breaking bounds/crossing the lawn.</td>
                        <td>1 day community service.</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          Girls must always be at the right place in the right
                          outfit at the right time for the right purpose except
                          permitted to do otherwise by the right authority.
                        </td>
                        <td>
                          a. Breaking bounds/ roaming round at odd time.
                          <br />
                          b. Dodging assembly/prep/morning service (duties).
                        </td>
                        <td>
                          a. 1 hour community service.
                          <br />
                          <br />
                          b. 2 hours community service.
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Girls must not leave school without permission.</td>
                        <td>Sneaking out of school.</td>
                        <td>Instant expulsion.</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          No personal social function anywhere, anytime is
                          allowed.
                        </td>
                        <td>
                          Unauthorized gathering/meeting for any reason or
                          illegal association.
                        </td>
                        <td>Community service/suspension.</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          Communication must be in English /French at all times
                          except when vernacular is being taught in the
                          classroom.
                        </td>
                        <td>
                          a. Speaking vernacular.
                          <br />
                          <br />
                          b. Using of non-verbal communication (offensive
                          signs).
                        </td>
                        <td>
                          a. The student will write a composition of 500 words,
                          “Why I should never speak vernacular in school”.
                          <br />
                          b. 1 hour community service at the scullery.
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          Girls must not be found with contrabands at any time
                          for any reason e.g., body spray, perfume, wet lips,
                          electronics, alcohol, drug, and other consumables
                        </td>
                        <td>
                          a. Keeping contrabands – money and goods.
                          <br />
                          <br />
                          <br />
                          <br />
                          b. Sneaking in phones, tablets/iPod or video camera.
                          <br />
                          c. Unauthorized use of mobile/tablet phone to
                          call/receive calls, battery chargers, MPs, camera,
                          electric boiling ring, kettle, other electrical or
                          musical gadgets (including external hard drives).
                        </td>
                        <td>
                          a. Items seized and the student proceeds on 2 days
                          community service. If a captain, she shall be
                          de-badged.
                          <br />
                          b. Indefinite suspension.
                          <br />
                          <br />
                          c. 2 weeks external suspension with a letter of
                          undertaking. If in SS3, she shall not partake in the
                          graduation ceremony.
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>No receiving of visitors at odd times.</td>
                        <td>
                          Receiving visitors at odd times/aiding fellow students
                          to receive visitors.
                        </td>
                        <td>One-week external suspension.</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>
                          Lying, stealing, fighting, fagging, and bullying are
                          highly prohibited.
                        </td>
                        <td>
                          Lying, stealing, fighting, hitting or slapping another
                          student with hands/any objects, fagging, bullying
                          e.g., fanning, sleeping on junior’s bed and copying
                          notes.
                        </td>
                        <td>
                          Lying – 1 to 2 days community service depending on the
                          magnitude of the offence.
                          <br />
                          Stealing – Offender pays for the item stolen if
                          consumed. If not consumed, it is retrieved. The
                          offence attracts 2 weeks internal suspension with
                          community service. The offender writes an essay of
                          1000 words on “The beauty in contentment”.
                          <br />
                          Fighting – 2 weeks internal/external suspension
                          depending on the offence.
                          <br />
                          Fagging/bullying – <br />
                          1st time: The student works for one day (weekend) and
                          she also writes an undertaking to desist from it.
                          <br />
                          2nd time: One week suspension
                          <br />
                          3rd time: Dismissal.
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>
                          There must be no borrowing or lending of any sort.
                        </td>
                        <td>
                          Borrowing and lending of uniforms, wrist watches,
                          water bottles etc.
                        </td>
                        <td>2 days community service</td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>
                          There should be no vandalizing of school property and
                          girls must not destroy their own or other students’
                          property intentionally.
                        </td>
                        <td>
                          Vandalism of school property such as writing on the
                          wall, breaking glasses/windows/furniture etc., or
                          other students’ property intentionally or carelessly
                          handling of their textbooks.
                        </td>
                        <td>
                          If the offender owns up immediately, she repaints the
                          class/hostel, she is made to replace damaged item. If
                          she delays in owing up, she still repaints/replaces
                          the damaged property and serves 2 days community
                          service.
                        </td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Cleanliness must be a priority at all times.</td>
                        <td>Defaecating in wrong places.</td>
                        <td>
                          One week community service (the offender shall wash
                          toilets for one week) and writes an essay on “Hygiene”
                          – 1000 words.
                        </td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>
                          Low hair cut and nail cut are worn at all times. No
                          permed/tinted/curly hair is allowed. No make-up of any
                          sort is allowed.
                        </td>
                        <td>
                          Wearing long hair and long finger and toenails,
                          cortex, nail hardener, lip gloss, unnatural hair,
                          perfume etc.
                        </td>
                        <td>3 days community service.</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>
                          Girls must respect all members of staff at all times.
                        </td>
                        <td>Rudeness or insult to staff</td>
                        <td>
                          2 days community service after school.
                          <br />2 weeks suspension if repeated.
                        </td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>
                          Unauthorized cooking is highly prohibited in the
                          school.
                        </td>
                        <td>Cooking in the hostel.</td>
                        <td>Instant expulsion.</td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>No form of immoral relationship</td>
                        <td>
                          Immoral relationship of any kind, including bathing
                          outside
                        </td>
                        <td>
                          External suspension for 2 weeks. The student shall be
                          referred to a specialist. If repeated, expulsion.
                        </td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>
                          Examination malpractices and forgery even in its
                          simplest forms are highly prohibited.
                        </td>
                        <td>
                          Examination malpractices: if a student is caught with
                          any incriminating materials or caught teaching,
                          copying, or making signs to another student in the
                          continuous assessment/examination/examination
                          review/classwork. <br />
                          Test (Class work/CA)
                          <br />
                          <br />
                          Termly examination
                          <br />
                          <br />
                          Promotion examination
                          <br />
                          <br />
                          Forgery – changing of scores on script or result
                          falsification.
                          <br />
                          <br />
                          External examination.
                        </td>
                        <td>
                          Cancellation of all tests
                          <br />
                          <br />
                          Cancellation of all term exams
                          <br />
                          <br />
                          Repetition of class
                          <br />
                          <br />
                          Offender gets zero in all subjects. Falsified result
                          shall be cancelled.
                          <br />
                          <br />
                          The offender shall be deboarded immediately and sent
                          home right after her last paper.
                        </td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>
                          We encourage our students to be outspoken and
                          confident. So, even though parents may still talk
                          about a case, they should encourage their wards to
                          confidently report to school authorities on their own.
                        </td>
                        <td>
                          Reporting cases to parents without first seeking help
                          from the school counsellor, house mother, class
                          teacher and school management.
                        </td>
                        <td>1 day community service.</td>
                      </tr>
                      <tr>
                        <td>21</td>
                        <td>
                          Students are expected to be at the RIGHT PLACE, at the
                          RIGHT TIME, doing the RIGHT THING
                        </td>
                        <td>
                          Absence from class/gathering/SMLRC
                          meeting/chapel/refectory without permission.
                          <br />
                          <br />
                          Found in a wrong place where the student is not
                          expected to be at that particular time.
                        </td>
                        <td>
                          2 hours community service after school.
                          <br />
                          <br />
                          The student is made to sweep for one hour after
                          school.
                        </td>
                      </tr>
                      <tr>
                        <td>22</td>
                        <td>
                          Students should follow classroom protocols. They
                          should be organized, efficient, and on task.
                        </td>
                        <td>
                          Leaving class without permission
                          <br />
                          <br />
                          Sleeping in class
                          <br />
                          <br />
                          Sneaking in/out of class
                          <br />
                          <br />
                          Talking through the window
                          <br />
                          <br />
                          Dragging chairs/lockers
                          <br />
                          <br />
                          Passing comments on teachers
                          <br />
                          <br />
                          Eating during lessons, including chewing of gum within
                          the class and the school
                        </td>
                        <td>
                          i, ii, iii, iv, v- 1 day community service after
                          school.
                          <br />
                          <br />
                          One-week internal suspension and a letter of apology
                          to the teacher.
                          <br />
                          <br />
                          The food/chewing gum is thrown into the trash can and
                          the student empties the trash can on the block of the
                          class after school. She is made to present an essay on
                          “Good eating habit and self-control” (1000 words).
                        </td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>
                          Girls are expected to internalize the school’s values
                          and make effort to improve when corrected.
                        </td>
                        <td>
                          Repetition of trivial offences after being corrected a
                          few times e.g., bad sitting position, shuffling, noise
                          making, sleeping in the wrong place etc.
                        </td>
                        <td>1 to 2 days community service during weekends.</td>
                      </tr>
                      <tr>
                        <td>24,</td>
                        <td>
                          There should be no form of drug abuse/intake of
                          alcohol.
                        </td>
                        <td>Drug abuse/intake of alcohol.</td>
                        <td>Instant expulsion.</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>Peaceful atmosphere must always be maintained.</td>
                        <td>
                          Breach of the peace: inciting others to or planning or
                          executing any form of disturbance, gang-up or
                          segregation within the school.
                        </td>
                        <td>
                          She is internally suspended from school for a weekend,
                          and she writes an essay of 1000 words on “Unity, peace
                          and progress”.
                        </td>
                      </tr>
                      <tr>
                        <td>26</td>
                        <td>Abuse of social media</td>
                        <td>
                          Indecent exposure on the social media/misuse of the
                          internet facility
                        </td>
                        <td>
                          Offender wears brown khaki and does 2 days of
                          community service.
                        </td>
                      </tr>
                      <tr>
                        <td>27</td>
                        <td>
                          Girls must turn off all electrical appliances when not
                          in use.
                        </td>
                        <td>
                          Not turning off electrical appliances when not in use.
                        </td>
                        <td>
                          Those in charge of cleaning the class/dormitory that
                          day will carry out 1 day community service.
                        </td>
                      </tr>
                      <tr>
                        <td>28</td>
                        <td>
                          Girls must be considerate and avoid gourmandizing.
                        </td>
                        <td>
                          Eating another student’s ration in the refectory (it
                          should be noted that giving out food/snack/drink, etc.
                          in exchange for another is not allowed.
                        </td>
                        <td>I day community service in the scullery.</td>
                      </tr>
                      <tr>
                        <td>29</td>
                        <td>
                          Girls must give absolute reference to God during
                          prayers and in the chapel.
                        </td>
                        <td>
                          Chatting and making noise during prayers at prayer
                          ground or chapel.
                        </td>
                        <td>2 days community service</td>
                      </tr>
                      <tr>
                        <td>30</td>
                        <td>
                          Girls must be modest, respect other people’s space,
                          must not cross dormitories or sit/sleep on another
                          student’s bed.
                        </td>
                        <td>
                          Light out offenders/crossing dormitory rooms/hostel.
                          <br />
                          <br />
                          Sleeping overnight in another dormitory.
                        </td>
                        <td>
                          2 days community service
                          <br />
                          <br />2 days community service. If she is a captain,
                          she shall be de-badged.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
