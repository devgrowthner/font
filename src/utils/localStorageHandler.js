export const setData = (key, value) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, value);
};

export const getData = (key) => {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(key);
};

export const removeItem = (key) => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(key);
};

export const clearData = () => {
  if (typeof window === "undefined") return;
  window.localStorage.clear();
};