import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

// Home Page
const HomeSMGC = lazy(() => import("./pages/home/HomeSMGC"));


// About Page
const About_us = lazy(() => import("pages/about/about"));
const Administration = lazy(() => import("pages/about/administration"));
const Anthem = lazy(() => import("pages/about/anthem"));
const History = lazy(() => import("pages/about/history"));
const Staff = lazy(() => import("pages/about/staff"));

// Admission page
const Admission = lazy(() => import("pages/admission/Admission"));

// Academics Page
const Academics = lazy(() => import("pages/academics/curriculum"));
const Classes = lazy(() => import("pages/academics/classes"));
const Term_Planner = lazy(() => import("pages/academics/term_planner"));
const GradingSystem = lazy(() => import("pages/academics/grading_system"));
const SMGC_advantage = lazy(() => import("pages/academics/SMGC_advantage"));

// Liturgy
const Liturgy = lazy(() => import("pages/liturgy/liturgy"));

// School Life
const School_Life = lazy(() => import("pages/school_life/boarding_house"));
const Co_Curricular = lazy(() => import("pages/school_life/co_curricular"));
const Dress_Code = lazy(() => import("pages/school_life/dress_code"));

// Contact Page
const Contact_Us = lazy(() => import("pages/contact/contact"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json")
        }
      })
    );
  });
  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={HomeSMGC}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/about_us"}
                  component={About_us}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/administration"}
                  component={Administration}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/anthem"}
                  component={Anthem}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/history"}
                  component={History}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/staff"}
                  component={Staff}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact_us"}
                  component={Contact_Us}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/admission"}
                  component={Admission}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/academics"}
                  component={Academics}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/curriculum"}
                  component={Academics}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/classes"}
                  component={Classes}
                />
                 <Route
                  path={process.env.PUBLIC_URL + "/grading_system"}
                  component={GradingSystem}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/term_planner"}
                  component={Term_Planner}
                />
                  <Route
                  path={process.env.PUBLIC_URL + "/SMGC_advantage"}
                  component={SMGC_advantage}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/liturgy"}
                  component={Liturgy}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/school_life"}
                  component={School_Life}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/boarding_house"}
                  component={School_Life}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/co_curricular"}
                  component={Co_Curricular}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/dress_code"}
                  component={Dress_Code}
                />

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/my-account"}
                  component={MyAccount}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={Cart}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/compare"}
                  component={Compare}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={Checkout}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(multilanguage(App));
