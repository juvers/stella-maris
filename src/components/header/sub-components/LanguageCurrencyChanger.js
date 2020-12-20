import PropTypes from "prop-types";
import React from "react";
import { changeLanguage } from "redux-multilanguage";

const LanguageCurrencyChanger = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch
}) => {
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  const setCurrencyTrigger = e => {
    const currencyName = e.target.value;
    setCurrency(currencyName);
  };

  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>+234(800)-111-2222</span>
        {/* <span>
          {currentLanguageCode === "en"
            ? "English"
            : currentLanguageCode === "fn"
            ? "French"
            : currentLanguageCode === "de"
            ? "Germany"
            : ""}{" "}
          <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="en" onClick={e => changeLanguageTrigger(e)}>
                English
              </button>
            </li>
            <li>
              <button value="fn" onClick={e => changeLanguageTrigger(e)}>
                French
              </button>
            </li>
            <li>
              <button value="de" onClick={e => changeLanguageTrigger(e)}>
                Germany
              </button>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="same-language-currency use-style">
        <span><a href="mailto:principal@stellamarisgirlscollege.org">principal@stellamarisgirlscollege.org</a></span>
        {/* <span>
          {currency.currencyName} <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="USD" onClick={e => setCurrencyTrigger(e)}>
                USD
              </button>
            </li>
            <li>
              <button value="EUR" onClick={e => setCurrencyTrigger(e)}>
                EUR
              </button>
            </li>
            <li>
              <button value="GBP" onClick={e => setCurrencyTrigger(e)}>
                GBP
              </button>
            </li>
          </ul>
        </div> */}
      </div>

      {/* <div className="same-language-currency">
        <p>Call Us +234(800)-111-2222</p>
      </div> */}
     
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default LanguageCurrencyChanger;
