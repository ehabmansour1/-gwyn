let nav = document.getElementById("nav");
let page = document.getElementById("page");
let body = document.getElementById("body");
function navOpen() {
  nav.className = "nav-opened";
  page.className = "page-down";
  body.className = "height100";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function navClose() {
  nav.className = "nav";
  page.className = "page";
  body.className = "heightNormal";
}
var t;
function fullheight() {
  t.css("height", jQuery(window).height());
}
window.onload = function () {
  t = jQuery("#landing");
  fullheight();
};
window.onresize = function () {
  fullheight();
};
