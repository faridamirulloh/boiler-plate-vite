const listeners = [];

export function addStoreSubscriber(name, callback) {
  listeners.push({name, callback});
}

export function removeStoreSubscriber(name) {
  const idx = listeners.findIndex((l) => l.name === name);
  if (idx > -1) listeners.splice(idx, 1);
}

/**
 * Initialize subscription to redux store state changes
 */
export function initStoreSubscriber(store) {
  store.subscribe(() => {
    if (!listeners.length) return;
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      if (listener?.callback) listener.callback(store);
    }
  });
}
