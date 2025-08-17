import {SESSION_STORAGE} from "src/constants";

export default class Storage {
  static set(key, data, storage = SESSION_STORAGE) {
    try {
      const value = JSON.stringify(data);
      window[storage].setItem(key, value);
    } catch (e) {
      console.error('Error occurred during setting item in storage', e);
    }
  }
  
  static clear(storage) {
    window[storage].clear();
  }
  
  static get(key, storage = SESSION_STORAGE) {
    try {
      const value = window[storage].getItem(key);
      return JSON.parse(value);
    } catch (e) {
      console.error('Error occurred during getting item from storage', e);
    }
  }
  
  static remove(key, storage = SESSION_STORAGE) {
    try {
      window[storage].removeItem(key);
    } catch (e) {
      console.error('Error occurred during removing item from storage', e);
    }
  }
}
