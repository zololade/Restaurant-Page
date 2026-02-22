import Page from "./Page.js";
import homeData from "./pages/home.js";
import contactData from "./pages/contact.js";
import aboutData from "./pages/about.js";
import hero from "../assets/sandwish.png";

const host = document.getElementById("content");

// 1. Create your Page instances
const home = new Page(host, homeData, hero);
const contact = new Page(host, contactData);
const about = new Page(host, aboutData);

// 2. Select your buttons
const [homeBtn, contactBtn, aboutBtn] = document.querySelectorAll("nav button");

// 3. Set the "Routes"
homeBtn.onclick = () => home.render();
contactBtn.onclick = () => contact.render();
aboutBtn.onclick = () => about.render();

// 4. Initial Load
home.render();
