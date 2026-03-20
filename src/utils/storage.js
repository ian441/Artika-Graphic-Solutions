const DB_NAME = "artika-content-db";
const STORE_NAME = "content";
const DB_VERSION = 1;
const LOCAL_PREFIX = "artika:";

const hasCustomStorage = () =>
  typeof window !== "undefined" &&
  window.storage &&
  typeof window.storage.get === "function" &&
  typeof window.storage.set === "function";

const hasIndexedDb = () => typeof window !== "undefined" && "indexedDB" in window;

const openDb = () =>
  new Promise((resolve, reject) => {
    if (!hasIndexedDb()) {
      reject(new Error("IndexedDB is not available"));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Failed to open IndexedDB"));
  });

const withStore = async (mode, handler) => {
  const db = await openDb();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, mode);
    const store = transaction.objectStore(STORE_NAME);

    transaction.oncomplete = () => {
      db.close();
    };

    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("IndexedDB transaction failed"));
    };

    handler(store, resolve, reject);
  });
};

const loadFromIndexedDb = async (key) =>
  withStore("readonly", (store, resolve, reject) => {
    const request = store.get(key);
    request.onsuccess = () => resolve(request.result ?? null);
    request.onerror = () => reject(request.error || new Error("Failed to read IndexedDB value"));
  });

const saveToIndexedDb = async (key, value) =>
  withStore("readwrite", (store, resolve, reject) => {
    const request = store.put(value, key);
    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error || new Error("Failed to write IndexedDB value"));
  });

const loadFromLocalStorage = (key) => {
  if (typeof window === "undefined" || !window.localStorage) return null;
  return window.localStorage.getItem(`${LOCAL_PREFIX}${key}`);
};

const saveToLocalStorage = (key, value) => {
  if (typeof window === "undefined" || !window.localStorage) {
    throw new Error("localStorage is not available");
  }

  window.localStorage.setItem(`${LOCAL_PREFIX}${key}`, value);
  return true;
};

export const loadStore = async (key, fallback) => {
  try {
    if (hasCustomStorage()) {
      const result = await window.storage.get(key);
      return result ? JSON.parse(result.value) : fallback;
    }

    try {
      const indexedValue = await loadFromIndexedDb(key);
      if (indexedValue !== null) return JSON.parse(indexedValue);
    } catch {}

    const localValue = loadFromLocalStorage(key);
    return localValue ? JSON.parse(localValue) : fallback;
  } catch {
    return fallback;
  }
};

export const saveStore = async (key, val) => {
  const serialized = JSON.stringify(val);

  if (hasCustomStorage()) {
    await window.storage.set(key, serialized);
    return "custom";
  }

  try {
    await saveToIndexedDb(key, serialized);
    return "indexeddb";
  } catch {
    saveToLocalStorage(key, serialized);
    return "localstorage";
  }
};
