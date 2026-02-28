import Page, { type PageData } from "../view/Page";
import { HomeData, route as homeRoute } from "../model/home";
import { FooterData, route as footerRoute } from "../model/footer";
import { observeState } from "./ElementClass";

// a that builds page instance and render the page based on its available data
function contentDisplayer(hostName: string, route: string, pageData: PageData) {
 const host = document.getElementById(hostName) as HTMLElement;
 let observer = observeState(document.createElement("div"));

 if (!observer) return;
 observer.setAttribute("data-state", "");
 observer.setAttribute("data-id", route);
 //create instance
 let currentPage = new Page(pageData);
 observer?.appendChild(currentPage.resultingElement);
 if (!host) return;
 if (!document.startViewTransition) {
  Page.render(host, observer);
  return;
 }

 document.startViewTransition(() => Page.render(host, observer));
}

contentDisplayer("main", homeRoute, HomeData);
contentDisplayer("footer", footerRoute, FooterData);
