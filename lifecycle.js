export function createLifecycle() {
  function onMount() {
    console.log("Component mounted");
  }

  function onStateChange(newState) {
    console.log("State changed:", newState);
  }

  return {
    onMount,
    onStateChange,
  };
}
