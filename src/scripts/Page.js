export default class Page {
 constructor(host, pageData) {
  this.host = host;
  this.pageData = pageData;
 }

 static isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
 }

 // Your Masterpiece
 builder(incomingObject) {
  let tag, content, el, att;
  if (Page.isObject(incomingObject)) {
   ({ tag, content, ...att } = incomingObject);
   el = document.createElement(tag);

   // If att is {}, this loop simply doesn't run. Pure efficiency!
   Object.entries(att).forEach(([key, value]) => {
    const lookupKey = key === "class" ? "className" : key;
    if (lookupKey in el) {
     el[lookupKey] = value;
    } else {
     el.setAttribute(key, value);
    }
   });
  } else if (Array.isArray(incomingObject)) {
   content = incomingObject;
   el = document.createDocumentFragment();
  } else {
   return document.createTextNode(incomingObject);
  }

  if (typeof content === "string") {
   el.textContent = content;
  } else if (Array.isArray(content)) {
   content.forEach((data) => {
    el.appendChild(this.builder(data));
   });
  }
  return el;
 }

 render() {
  this.host.innerHTML = ""; // Clear existing content
  const fragment = document.createDocumentFragment();

  const pageContent = this.builder(this.pageData);
  fragment.appendChild(pageContent);

  this.host.appendChild(fragment);
  return;
 }
}
