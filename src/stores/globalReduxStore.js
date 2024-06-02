/**
 * Access redux store outside component or action creator
 */
const globalReduxStore = (() => {
  let rdxStore;

  function setStore(store) {
    if (!rdxStore) rdxStore = store;
  }

  function getStore() {
    return rdxStore;
  }

  function getState(storeStateKeys) {
    const state = rdxStore.getState();

    if (storeStateKeys?.length) {
      const stateByKeys = {};
      storeStateKeys.forEach((key) => {
        if (state[key]) stateByKeys[key] = state[key];
      });

      return stateByKeys;
    }

    return state;
  }

  return {
    setStore,
    getStore,
    getState,
  };
})();

export default globalReduxStore;
