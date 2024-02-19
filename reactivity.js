export function createReactivity() {
  let state = { count: 0 };

  function updateState(newState) {
    state = { ...state, ...newState };
    render();
  }

  function handleClick() {
    updateState({ count: state.count + 1 });
  }

  return {
    state,
    updateState,
    handleClick,
  };
}
