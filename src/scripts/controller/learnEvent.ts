//dispatcher
const customEvent = new CustomEvent("wantsToLog", {
 detail: { message: "I logged" },
});

class myEmitter extends EventTarget {}

const emitter = new myEmitter();

emitter.addEventListener("wantsToLog", (e) => {
 let event = e as CustomEvent<{ message: string }>;
 console.log(event.detail.message);
});
emitter.dispatchEvent(customEvent);
