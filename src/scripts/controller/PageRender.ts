import Page, { type PageData } from "../view/Page";
import homeData from "../model/home";
import contactData from "../model/contact";
import aboutData from "../model/about";
import { footerData } from "../model/footer";
import { menuData } from "../model/menu";

// Define the valid keys
type PageKey = "home" | "contact" | "about" | "menu";

const host = document.getElementById("content") as HTMLElement;
const footerHost = document.querySelector(".footer-container") as HTMLElement;

// Use the exported PageData type for the footer
const footer = new Page(footerHost, footerData as PageData);

// 1. Explicitly type the instances object
const instances: Record<PageKey, Page> = {
 home: new Page(host, homeData as PageData),
 contact: new Page(host, contactData as PageData),
 about: new Page(host, aboutData as PageData),
 menu: new Page(host, menuData as PageData),
};

const buttons = document.querySelectorAll<HTMLButtonElement>("nav button");

function updateNav(clickedBtn: HTMLButtonElement): void {
 buttons.forEach((btn) => btn.classList.remove("active"));
 clickedBtn.classList.add("active");
}

buttons.forEach((el) => {
 el.addEventListener("click", (e: MouseEvent) => {
  const target = e.currentTarget as HTMLButtonElement;
  const pageName = target.dataset.page as PageKey;

  // Safety check: Ensure the clicked button's data-page exists in our instances
  if (pageName in instances) {
   updateNav(target);

   const transition = () => instances[pageName].render();

   if (document.startViewTransition) {
    document.startViewTransition(transition);
   } else {
    transition();
   }
  }
 });
});

function initialLoad(): void {
 const renderAll = () => {
  // TypeScript is happy now because 'home' is a required key of PageKey
  instances.home.render();
  footer.render();
 };

 if (document.startViewTransition) {
  document.startViewTransition(renderAll);
 } else {
  renderAll();
 }
}

initialLoad();

window.addEventListener("load", () => {
 document.body.style.opacity = "1";
});
