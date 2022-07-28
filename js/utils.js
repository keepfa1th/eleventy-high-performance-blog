!function(){"use strict";window.addEventListener("load",()=>{let e=localStorage.getItem("isDarkTheme");e=null===e?window.matchMedia("(prefers-color-scheme: dark)").matches:"true"===e,document.body.setAttribute("class",!e||"dark-mode"),localStorage.setItem("isDarkTheme",!e&&"light-mode")})}();
//# sourceMappingURL=utils.js.map
