import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div className={` ${sidebarMenu
        ? "sidebar-menu"
        : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}>
    <nav>
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>
            {strings["home"]}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about_us"}>
            {" "}
            {strings["about"]}
            {sidebarMenu ? (
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            ) : (
                <i className="fa fa-angle-down" />
              )}
          </Link>
          <ul className="mega-menu">
            <li>
              <ul>
                <li className="mega-menu-title">
                  <Link to={process.env.PUBLIC_URL + "/about_us"}>
                    {strings["about"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/about_us"}>
                    {strings["about"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/administration"}>
                    {strings["administration"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/anthem"}>
                    {strings["anthem"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/history"}>
                    {strings["history"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/staff"}>
                    {strings["staff"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="mega-menu-img">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-12.png"
                      }
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/admission"}>
            {strings["admission"]}
          </Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>
            {strings["academics"]}
            {sidebarMenu ? (
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            ) : (
                <i className="fa fa-angle-down" />
              )}
          </Link>
          <ul className="mega-menu">
            <li>
              <ul>
                <li className="mega-menu-title">
                  <Link to={process.env.PUBLIC_URL + "/academics"}>
                    {strings["academics"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/classes"}>
                    {strings["classes"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/curriculum"}>
                    {strings["curriculum"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/term_planner"}>
                    {strings["term_planner"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="mega-menu-img">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-12.png"
                      }
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>
            {strings["school_life"]}
            {sidebarMenu ? (
              <span>
                <i className="fa fa-angle-right"></i>
              </span>
            ) : (
                <i className="fa fa-angle-down" />
              )}
          </Link>
          <ul className="mega-menu">
            <li>
              <ul>
                <li className="mega-menu-title">
                  <Link to={process.env.PUBLIC_URL + "/school_life"}>
                    {strings["school_life"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/boarding_house"}>
                    {strings["boarding_house"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/co_curricular"}>
                    {strings["co_curricular"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/dress_code"}>
                    {strings["dress_code"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li className="mega-menu-img">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-12.png"
                      }
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/liturgy"}>
            {strings["liturgy"]}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact_us"}>
            {strings["contact_us"]}
          </Link>
        </li>
      </ul>
    </nav>
  </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenu);