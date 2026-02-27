export function observeState(elementName: string) {
 const element = document.getElementById(elementName);

 if (!element) return;

 const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
   if (
    mutation.type === "attributes" &&
    mutation.attributeName === "data-state"
   ) {
    const oldValue = mutation.oldValue;
    const newValue = element.getAttribute("data-state");

    console.log(`Attribute data-state changed from ${oldValue} to ${newValue}`);
   }
  });
 });

 observer.observe(element, {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ["data-state"],
 });

 return element;
}
