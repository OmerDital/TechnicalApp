interface ILocalStorageItem {
  key: string;
  value?: any;
}

export const getFromLocalStorage = ({ key }: ILocalStorageItem) =>
  localStorage.getItem(key);
export const setLocalStorage = ({ key, value }: ILocalStorageItem) =>
  localStorage.setItem(key, value);
export const removeFromLocalStorage = ({ key }: ILocalStorageItem) =>
  localStorage.removeItem(key);
