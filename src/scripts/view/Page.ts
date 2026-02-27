// Types for the page data structure
export type ElementObject = {
 tag: string;
 content?: string | PageData[];
 [key: string]: unknown; // allows arbitrary HTML attributes
};

export type PageData = ElementObject | PageData[] | string | number;

export default class Page {
 private host: HTMLElement;
 private pageData: PageData;

 constructor(host: HTMLElement, pageData: PageData) {
  this.host = host;
  this.pageData = pageData;
 }

 static isObject(value: unknown): value is ElementObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
 }

 builder(incomingObject: PageData): HTMLElement | DocumentFragment | Text {
  let tag: string;
  let content: string | PageData[] | undefined;
  let el: HTMLElement | DocumentFragment;
  let att: Record<string, unknown>;

  if (Page.isObject(incomingObject)) {
   ({ tag, content, ...att } = incomingObject);
   el = document.createElement(tag);

   Object.entries(att).forEach(([key, value]) => {
    const lookupKey = key === "class" ? "className" : key;
    if (lookupKey in el) {
     (el as unknown as Record<string, unknown>)[lookupKey] = value;
    } else {
     (el as HTMLElement).setAttribute(key, String(value));
    }
   });
  } else if (Array.isArray(incomingObject)) {
   content = incomingObject;
   el = document.createDocumentFragment();
  } else {
   return document.createTextNode(String(incomingObject));
  }

  if (typeof content === "string") {
   (el as HTMLElement).textContent = content;
  } else if (Array.isArray(content)) {
   content.forEach((data) => {
    el.appendChild(this.builder(data));
   });
  }

  return el;
 }

 render(): void {
  this.host.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const pageContent = this.builder(this.pageData);
  fragment.appendChild(pageContent);
  this.host.appendChild(fragment);
 }
}
