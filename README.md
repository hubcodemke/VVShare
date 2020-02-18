## 简单的 react 分享组件

> 公司业务需求,简单封装一个只有 5 个平台的 react 组件

**效果**  

展示样式

<img src="/src/assets/images/img1.png" alt="样式" style="zoom:70%;" />

微信分享效果

|                       手机端其他浏览器                       |                        微信内置浏览器                        |                           pc浏览器                           |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="/src/assets/images/img2.png" alt="效果1" style="zoom:60%;" /> | <img src="/src/assets/images/img3.png" alt="效果2" style="zoom:60%;" /> | <img src="/src/assets/images/img4.png" alt="效果3" style="zoom:60%;" /> |




**使用方法:**

安装
`npm install --save vvshare`

使用

```js
//app.js
import React from "react";
import ReactDOM from "react-dom";
import VVShare from "vvshare";

ReactDOM.render(
  <>
    <VVShare
      title="title..."
      url="http://www.github.com"
      width={50}
      height={50}
    />
  </>,
  document.getElementById("root")
);
```
运行

```shell
//本地运行
npm run dev

//构建
npm run build
```



**参数说明**

- title:分享出去的标题
  - 类型:`string`
  - 默认值:页面 title
- url:分享出去的地址,**尽量是域名地址**，**域名尽量不带端口号**,不然可能会有各种 bug，特别是在linkedin
  - 类型:`string`
  - 默认值:页面 url
- image:分享出去的图片,各平台对图片的定义可以去看相关文档，这个级别没用，分享图片og:image为准
  - 类型:`string`
- description:分享出去的描述,基本没用到,以分享结果为准
  - 类型:`string`
- network:数组类型,显示的平台
  - 类型:`Array`
  - 默认值:`["facebook", "linkedin", "twitter", "weixin", "weibo"]`
- alignment:图标对其方式
  - 类型:`string`
  - 默认值:`right`,可选`center` `left`
- width:图标的宽度
  - 类型:`string/Number`
  - 默认值:32, 如果是字符串请带上单位,例:`20px`
- height:图标的高度
  - 类型:`string/Number`
  - 默认值:32, 如果是字符串请带上单位,例:`20px`
- padding:图标的内间距
  - 类型:`string/Number`
  - 默认值:0, 如果是字符串请带上单位,例:`5px`
- radius:图标的圆角值
  - 类型:`string/Number`
  - 默认值:4, 如果是字符串请带上单位,例:`999em`
- marginRight:图标的右间距
  - 类型:`string/Number`
  - 默认值:0, 如果是字符串请带上单位,例:`5px`
- marginLeft:图标的左间距
  - 类型:`string/Number`
  - 默认值:8, 如果是字符串请带上单位,例:`5px`
- fontSize:图标的字号,控制 logo 的大小
  - 类型:`string/Number`
  - 默认值:20, 如果是字符串请带上单位,例:`16px`

**使用注意点**

- 要使用自定义分享的图片等,需要服务端渲染页面,添加含有 og 的 mate 标签，js动态添加的没效果！！
 [参考](https://www.jianshu.com/p/dedd9a9aff4e)

```html
/*这个是推荐的简易标签*/
<meta property="og:url" content="http://www.github.com" />
<meta property="og:title" content="默认标题" />
<meta property="og:description" content="默认og描述" />
<meta
  property="og:image"
  content="https://github.githubassets.com/images/modules/open_graph/github-octocat.png"
/>
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="620" />

<meta name="twitter:card" content="summary" />
<meta name="twitter:creator" content="@vv technology" />
```

- 由于各平台对分享内容解析方式不太一致,具体分享结果请根据分享出去后的为准,face,twitter 需要科学上网

**调试工具**

需要科学上网

facebook:
https://developers.facebook.com/tools/debug/

twitter:
https://publish.twitter.com/#

*如果调试工具抓取的一直不是最新的图片，可以在url加给参数看看效果，facebook分享抓取的信息是有缓存机制的*