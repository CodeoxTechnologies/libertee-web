export const getLocalStorageInfo = (value) => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(value);
    if (data) {
      return JSON.parse(data);
    }
  }
};
