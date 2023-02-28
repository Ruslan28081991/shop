import { appEvents } from '../constants/appEvents';
import { eventBus } from '../core/EventBus/EventBus';

class LocalStorageService {
  constructor() {
    this.storage = window.localStorage;
  }

  dispatchEvent(key) {
    eventBus.emit(appEvents.storage, key ? { key, value: this.getItem(key) } : null);
  }

  getItem(key) {
    try {
      return JSON.parse(this.storage.getItem(key));
    } catch (error) {
      console.error(error.message);
    }
  }

  setItem(key, value) {
    try {
      this.storage.setItem(key, JSON.stringify(value));
      this.dispatchEvent(key);
    } catch (error) {
      console.error(error.message);
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
    this.dispatchEvent(key);
  }

  clear() {
    this.storage.clear();
    this.dispatchEvent();
  }
}

export const localStorageService = new LocalStorageService();
