// Set to local storage
const setToLocalStorage = (key, value) => 
localStorage.setItem(key, value);

// get from local storage
const getFromLocalStorage = (key) => localStorage.getItem(key);

export {
  setToLocalStorage,
  getFromLocalStorage
}