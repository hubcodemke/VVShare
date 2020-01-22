import React from "react";
import { platClick } from "./Platform.js";
import "./VVShare.css";

const VVShare = ({
  title = document.title,
  url = window.location.href,
  image,
  description,
  network = ["facebook", "linkedin", "twitter", "weixin", "weibo"],
  alignment = "right",
  width = 32,
  height = 32,
  padding = 0,
  radius = 4,
  marginRight = 0,
  marginLeft = 8,
  fontSize = 20
}) => {
  const itemStyle = {
    width,
    height,
    lineHeight: height + "px",
    padding,
    borderRadius: radius,
    marginRight,
    marginLeft
  };
  const handleClick = plat => {
    platClick({ plat, url, title, image, description });
  };

  return (
    <ul className="vvshare-wrapper" style={{ textAlign: alignment }}>
      {network.map(item => {
        return (
          <li
            className={`vvshare-item vvshare-${item} `}
            key={item}
            style={itemStyle}
            onClick={() => handleClick(item)}
          >
            <i className={`iconfont icon-${item}`} style={{ fontSize }}></i>
          </li>
        );
      })}
    </ul>
  );
};
export default VVShare;
