// const pageStateManager = new CustomEvent("stateManger");
const buttons = document.querySelectorAll<HTMLButtonElement>("nav button");

function updateClickedButton(clickedBtn: HTMLButtonElement): void {
 buttons.forEach((btn) => btn.classList.remove("active"));
 clickedBtn.classList.add("active");
}

buttons.forEach((button) => {
 button.addEventListener("click", (e) => {
  let eventOwner = e.target as HTMLButtonElement;
  updateClickedButton(eventOwner);
  let target = document.querySelector("#main");
  if (target) (target as HTMLElement).setAttribute("data-state", "false");
 });
});
