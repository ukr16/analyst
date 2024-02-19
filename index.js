import { init, h } from "snabbdom";
import { createTemplate } from "./template";
import { createReactivity } from "./reactivity";
import { createLifecycle } from "./lifecycle";

const patch = init([]);

const { state, updateState, handleClick } = createReactivity();
const { onMount, onStateChange } = createLifecycle();

function render() {
  const newVNode = createTemplate(state);
  patch(oldVNode, newVNode);
  oldVNode = newVNode;
}

let oldVNode = createTemplate(state);
render();

onMount();

document.querySelector("button").addEventListener("click", handleClick);
