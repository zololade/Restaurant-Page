import Page, { type PageData } from "../view/Page";
import { HomeData, destination as homeDestination } from "../model/home";
import { FooterData, destination as footerDestintion } from "../model/footer";
import { observeState } from "./ElementClass";

// a that builds page instance and render the page based on its available data
function contentDisplayer(hostName: string, pageData: PageData) {
 const host = observeState(hostName);
 //create instance
 if (!host) return;
 let currentPage = new Page(host, pageData);

 //render page
 if (!document.startViewTransition) {
  currentPage.render();
  return;
 }

 document.startViewTransition(() => currentPage.render());
}

contentDisplayer(homeDestination, HomeData);
contentDisplayer(footerDestintion, FooterData);
