"use strict";function setWrapperGridTemplateColumns(e){if(void 0!==document.getElementsByClassName("wrapper--has-sidebar")[0]){var s=document.getElementsByClassName("wrapper--has-sidebar")[0];if(e<=1879&&e>=1505){var t=1879-e;s.style.gridTemplateColumns="auto 1fr auto "+t+"px"}else s.style.gridTemplateColumns=e>1505?"auto 1fr auto":"auto 1fr auto 375px"}else{document.getElementsByClassName("wrapper")[0].style.gridTemplateColumns="auto 1fr auto"}}window.addEventListener("scroll",function(e){var s=this.scrollY,t=document.getElementsByClassName("categories")[0],a=document.getElementsByClassName("grid")[0];window.innerWidth>=767?s>=330?(t.className="categories categories--sticky",a.classList.add("grid--sticky")):(t.className="categories",a.classList.remove("grid--sticky")):s>=282?(t.className="categories categories--sticky",a.classList.add("grid--sticky")):(t.className="categories",a.classList.remove("grid--sticky"))},!1),window.addEventListener("resize",function(e){setWrapperGridTemplateColumns(window.innerWidth)},!1);