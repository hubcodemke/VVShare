import React from "react";
import PropTypes from "prop-types";
import { platClick } from "./Platform.js";
import "./VVShare.css";

const VVShare = ({
  title,
  url,
  image,
  description,
  network,
  alignment,
  width,
  height,
  padding,
  radius,
  marginRight,
  marginLeft,
  fontSize
}) => {
  //图标容器样式
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

//获取metaContent标签内容
function getMetaContentByName(name) {
  return (document.getElementsByName(name)[0] || 0).content;
}

//格式验证
VVShare.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  network: PropTypes.array,
  alignment: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

//默认值
VVShare.defaultProps = {
  title: document.title,
  url: window.location.href,
  image: (document.images[0] || 0).src || "", //默认抓取页面第一张图片ß
  description:
    getMetaContentByName("description") ||
    getMetaContentByName("Description") ||
    "",
  network: ["facebook", "linkedin", "twitter", "weixin", "weibo"],
  alignment: "right",
  width: 32,
  height: 32,
  padding: 0,
  radius: 4,
  marginRight: 0,
  marginLeft: 8,
  fontSize: 20
};

export default VVShare;
