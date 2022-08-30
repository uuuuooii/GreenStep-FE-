import React from "react";

import PullToRefresh from "pulltorefreshjs";

const Header = () => {
  const PullToRefresh = require("pulltorefreshjs");

  const ptr = PullToRefresh.init({
    mainElement: "body",
    onRefresh() {
      window.location.reload();
    },
  });

  return (
    <>
      <div>Header 입니다.</div>
    </>
  );
};

export default Header;
