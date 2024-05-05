import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,a as e}from"./app-BLrF72sQ.js";const t={};function i(r,p){return a(),s("div",null,[e(' <script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"><\/script> '),e(` <meta name="referrer" content="no-referrer-when-downgrade">

<center>
        浏览量：<span id="busuanzi_value_site_pv"><i class="fa fa-spinner fa-spin"></i></span> | 访客数：<span id="busuanzi_value_site_uv"><i class="fa fa-spinner fa-spin"></i></span>
</center> `),e(' <meta name="referrer" content="no-referrer-when-downgrade"> '),e(` 
<template>
  <div class="busuanzi">
    <span id="busuanzi_container_site_pv" style="display:none">
      本站总访问量
      <span id="busuanzi_value_site_pv"></span>次
      <span class="post-meta-divider">|</span>
    </span>
    <span id="busuanzi_container_site_uv" style="display:none">
      本站访客数
      <span id="busuanzi_value_site_uv"></span>人
    </span>
  </div>
</template> `),e(` 
<script>
let script;
export default {
  mounted() {
    script = require("busuanzi.pure.js");
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        script.fetch();
      }
      // console.log(to.path);
    }
  }
};
<\/script> `)])}const u=n(t,[["render",i],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/","title":"Home","lang":"zh-CN","frontmatter":{"home":true,"title":"Home","heroImage":"/assets/icon/icon.png","bgImage":"/assets/image/back.png","bgImageDark":"/assets/image/back.png","bgImageStyle":{"background-attachment":"fixed"},"actions":[{"text":"开始 | Start","link":"/随笔/","type":"primary"}],"highlights":[{"header":"ljc-daily","description":"ljc-daily","bgImage":"/assets/image/back1.png","bgImageDark":"/assets/image/back1.png","bgImageStyle":{"background-repeat":"repeat","background-size":"initial"},"features":[{"title":"随笔","details":"随笔","link":"/随笔/"}]}],"copyright":false,"footer":"使用 <a href=\\"https://theme-hope.vuejs.press/zh/\\" target=\\"_blank\\">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2019-present Mr.Hope"},"headers":[],"git":{"createdTime":1714896181000,"updatedTime":1714896377000,"contributors":[{"name":"Vinci","email":"1341060890@qq.com","commits":2}]},"readingTime":{"minutes":0.74,"words":221},"filePathRelative":"README.md","localizedDate":"2024年5月5日","excerpt":"<!-- <script async src=\\"https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js\\"><\/script> -->\\n<!-- <meta name=\\"referrer\\" content=\\"no-referrer-when-downgrade\\">\\n\\n<center>\\n        浏览量：<span id=\\"busuanzi_value_site_pv\\"><i class=\\"fa fa-spinner fa-spin\\"></i></span> | 访客数：<span id=\\"busuanzi_value_site_uv\\"><i class=\\"fa fa-spinner fa-spin\\"></i></span>\\n</center> -->"}');export{u as comp,m as data};
