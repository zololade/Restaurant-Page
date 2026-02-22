import Page from "./Page.js";
import homeData from "./pages/home.js";
import contactData from "./pages/contact.js";
import aboutData from "./pages/about.js";
import { footerData } from "./pages/footer.js";
import { menuData } from "./pages/menu.js";

const host = document.getElementById("content");
// Create a host for the footer
const footerHost = document.querySelector(".footer-container");
const footer = new Page(footerHost, footerData);
// 1. Create Page instances
const instances = {
 home: new Page(host, homeData),
 contact: new Page(host, contactData),
 about: new Page(host, aboutData),
 menu: new Page(host, menuData),
};
const buttons = document.querySelectorAll("nav button");

// routing logic
function updateNav(clickedBtn) {
 buttons.forEach((btn) => btn.classList.remove("active"));
 clickedBtn.classList.add("active");
}

buttons.forEach((el) => {
 el.addEventListener("click", (e) => {
  updateNav(e.target);
  let eventOwner = e.target.dataset.page;

  if (document.startViewTransition) {
   document.startViewTransition(() => {
    instances[eventOwner].render();
   });
  } else {
   instances[eventOwner].render();
  }
 });
});

// 4. Initial Load

// A "Batch" render function
function initialLoad() {
 if (document.startViewTransition) {
  document.startViewTransition(() => {
   // Both renders happen inside the same "snapshot"
   instances.home.render();
   footer.render();
  });
 } else {
  instances.home.render();
  footerInstance.render();
 }
}

initialLoad();
