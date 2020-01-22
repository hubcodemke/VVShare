import React from "react";
import ReactDOM from "react-dom";
import VVShare from "./VVShare.js";

ReactDOM.render(
  <>
    <VVShare
      title="title..."
      width={50}
      height={50}
      url="http://www.github.com"
    />
    <br />
    <VVShare title="标题..." url="http://www.github.com" />
    <br />
    <VVShare
      radius="999em"
      network={["linkedin", "weixin", "weibo"]}
      url="http://www.github.com"
    />
  </>,
  document.getElementById("root")
);
