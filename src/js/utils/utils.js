/* eslint-disable no-undef */
const Utils = {
  setUserToken (key, value) {
    return sessionStorage.setItem(key, value);
  },
  getUserToken (key) {
    return sessionStorage.getItem(key);
  },
  destroyUserToken (key) {
    return sessionStorage.removeItem(key);
  },
  destroyAllToken () {
    return sessionStorage.clear();
  }
};

export default Utils;
