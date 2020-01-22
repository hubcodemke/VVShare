const QRCode = require("qrcode");
import copy from "copy-to-clipboard";

import "./VVShare.css";

//打开窗口
function openWin(url) {
  window.open(
    url,
    "_blank",
    "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350"
  );
}

//显示二维码
function qrcodeWin({ url, winTitle, winDes }) {
  let id = "qrcode-win-wrap";
  let wrap = document.getElementById(id);
  if (wrap != null) {
    wrap.parentNode.removeChild(wrap);
  }
  let div = document.createElement("div");
  div.id = id;

  div.innerHTML = `<div class="qrcode-win-content"></div>`;

  document.body.appendChild(div);
  let content = document.querySelector(".qrcode-win-content");

  //不是手机端，生成二维码
  if (!isMobile()) {
    content.innerHTML = `<p class="qrcode-win-title">${winTitle}</p>
                      <p class="qrcode-win-code"><canvas id="qrcode-win-canvas"></canvas></p>
                      <p class="qrcode-win-des">${winDes}</p>`;
    //生成二维码
    let canvas = document.getElementById("qrcode-win-canvas");
    QRCode.toCanvas(
      canvas,
      url,
      {
        errorCorrectionLevel: "H",
        margin: 2,
        width: 200
      },
      function(error) {
        if (error) console.error(error);
        // console.log("success!");
      }
    );
  } else if (isWeiXin()) {
    content.className = content.className + " qrcode-win-content-m";
    //微信内，弹出右侧提示打开分享
    content.innerHTML = `<p class="qrcode-win-title">请使用右上角...<br/>分享到好友或朋友圈</p>`;
  } else {
    content.className = content.className + " qrcode-win-content-m";
    //其他浏览器弹出url复制
    content.innerHTML = `<p class="qrcode-win-copyinput"><input  id="qrcode-copyurl" value="${url}"/></p>
                        <p class="qrcode-win-copybtn"><button id="qrcode-copybtn">复制</button></p>
                        <p class="qrcode-win-copyresult"></p>`;
    document.getElementById("qrcode-copybtn").onclick = () => {
      let result = document.querySelector(".qrcode-win-copyresult");
      if (copy(url)) {
        result.innerHTML = "复制成功,去黏贴分享";
      } else {
        result.innerHTML = "复制失败,请手动复制";
      }
    };
  }

  wrap = document.getElementById(id);

  //点击空白处隐藏
  document.body.addEventListener("click", function(e) {
    if (!content.contains(e.target)) {
      wrap.style.display = "none";
    }
  });
}

//判断是否手机端
function isMobile() {
  return /Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent);
}

//判断是否微信内部
function isWeiXin() {
  return /micromessenger/i.test(navigator.userAgent.toLocaleLowerCase());
}

export function platClick({ plat, url, title, image, description }) {
  switch (plat) {
    case "facebook":
      openWin(`https://www.facebook.com/sharer.php?u=${url}`);
      break;
    case "twitter":
      openWin(`https://twitter.com/share?url=${url}&text=${title}`);
      break;
    case "linkedin":
      openWin(`https://www.linkedin.com/shareArticle?url=${url}`);
      break;
    case "weibo":
      openWin(
        `http://service.weibo.com/share/share.php?appkey=&title=${title}&url=${url}&searchPic=false&style=simple`
      );
      break;
    case "weixin":
      qrcodeWin({
        url,
        winTitle: "微信分享",
        winDes: "打开微信扫一扫"
      });
      break;
  }
}
