import React from "react";
import ReactDOMServer from "react-dom/server";
import PullToRefresh from "pulltorefreshjs";
import { TbLeaf } from "react-icons/tb";
import { RiLeafFill } from "react-icons/ri";
import "./PullToRefresh.css";

const PullToRefresh = () => {
  const PullToRefresh = require("pulltorefreshjs");

  const ptr = PullToRefresh.init({
    mainElement: "body",
    onRefresh() {
      window.location.reload();
    },

    iconArrow: ReactDOMServer.renderToString(
      <TbLeaf className="ptr-arrow-icon" />
    ),
    iconRefreshing: ReactDOMServer.renderToString(
      <RiLeafFill className="ptr-refreshing-icon" />
    ),
  });

  return <div></div>;
};

export default PullToRefresh;
