import { sidebar } from "vuepress-theme-hope";

export default sidebar({ 
  "/": [

    {
      text: "随笔",
      link: "/随笔/README.md",
      prefix: "随笔/",
      children: "structure",
      icon: "hand-holding-heart"
    },

  ],
});
