function isObject(value) {
 return typeof value === "object" && value !== null && !Array.isArray(value);
}

export default class Page {
 constructor(host, headerImage, pageData) {
  this.host = host;
  this.headerImage = headerImage;
  this.pageData = pageData;
 }

 // Your Masterpiece
 builder(incomingObject) {
  let tag, content, el, att;
  if (isObject(incomingObject)) {
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

  // Add the header image
  const img = document.createElement("img");
  img.src = this.headerImage;
  fragment.appendChild(img);

  // Build and add the page content
  const pageContent = this.builder(this.pageData);
  fragment.appendChild(pageContent);

  // One single paint to the screen
  this.host.appendChild(fragment);
 }
}
