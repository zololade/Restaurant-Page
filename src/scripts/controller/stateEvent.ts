type View = "home" | "about" | "contact" | "menu";

type Task = {
 id: string;
 title: string;
 completed: boolean;
};

type AppState = {
 view: View;
 tasks: Task[];
};

class Store extends EventTarget {
 private state: AppState;

 constructor(initial: AppState) {
  super();
  this.state = initial;
 }

 getState() {
  return this.state;
 }

 setState(partial: Partial<AppState>) {
  this.state = { ...this.state, ...partial };
  this.dispatchEvent(new Event("change"));
 }
}
