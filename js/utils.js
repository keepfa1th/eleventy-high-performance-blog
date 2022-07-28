!function(){"use strict";let e=localStorage.getItem("isDarkTheme");e=null===e?window.matchMedia("(prefers-color-scheme: dark)").matches:"true"===e,document.body.setAttribute("class",e?"dark-mode":"light-mode"),localStorage.setItem("isDarkTheme",!!e)}();
//# sourceMappingURL=utils.js.map
