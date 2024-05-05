import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: '/ljc-daily/', //url地址

  lang: "zh-CN",
  title: 'ljc-daily', //主题
  description: '——ljc-daily', //描述


  theme,


  head: [

    [
      'link', { rel: 'icon', href: 'assets/icon/icon.png' } //页面icon
    ],
    ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],

  ],




});

