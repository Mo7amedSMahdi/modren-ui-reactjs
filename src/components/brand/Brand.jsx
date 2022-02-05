import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand-container section__padding" id="brand">
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="Slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox" />
      </div>
      <div>
        <img src={shopify} alt="Shopify" />
      </div>
    </div>
  );
};

export default Brand;
