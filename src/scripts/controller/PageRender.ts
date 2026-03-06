import Page, { type PageData } from "../view/Page";
import { HomeData } from "../model/home";
import { FooterData } from "../model/footer";
import aboutPageData from "../model/about";
import { menuData } from "../model/menu";
import contactPageData from "../model/contact";

export const viewMap = {
  home: HomeData,
  about: aboutPageData,
  menu: menuData,
  contact: contactPageData,
} as const;

const mainContainer = document.getElementById("main");
const footerContainer = document.getElementById("footer");
let currentView: keyof typeof viewMap | null = null;
// a that builds page instance and render the page based on its available data
function contentDisplayer(host: HTMLElement, pageData: PageData) {
  if (!host) return;
  const render = () => {
    const fragment = Page.build(pageData);
    Page.render(host, fragment);
  };
  document.startViewTransition
    ? document.startViewTransition(render)
    : render();
}

export function renderView(view: keyof typeof viewMap) {
  if (currentView === view) return;
  currentView = view;
  if (!mainContainer) return;
  contentDisplayer(mainContainer, viewMap[view]);
}

function initialLoad() {
  if (!mainContainer || !footerContainer) return;
  renderView("home");
  contentDisplayer(footerContainer, FooterData);
}

initialLoad();
