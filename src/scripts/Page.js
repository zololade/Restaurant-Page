export default class Page {
 constructor() {
  this.host = document.getElementById("content");
 }

 render() {
  let section = document.createElement("section");
  let image = document.createElement("img");
  let article = document.createElement("ul");
  article.innerHTML = ``;
  //insie the section
  // we have a picture heading
  // heading
  // bullet point
  // a paragraph
  this.host;
 }

 clearPage() {
  this.host.textContent = "";
 }
}
