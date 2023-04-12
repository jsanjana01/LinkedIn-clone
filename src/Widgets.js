import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("NMACC hosted by Ambani's", "Top news-999 readers")}
      {newArticle("Cosmopolition Awards", "Top news-900 readers")}
      {newArticle("Oscars to Naatu Naatu", "Top news-800 readers")}
      {newArticle("Share Market Crashes", "Top news-1100 readers")}
    </div>
  );
}

export default Widgets;
