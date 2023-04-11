import { initializeApp } from 'firebase/app';

export class CloudService {
  constructor() {
    this._config = {
      apiKey: process.env.API_KEY,
      authDomain: 'it-shop-rus.firebaseapp.com',
      projectId: 'it-shop-rus',
      storageBucket: 'it-shop-rus.appspot.com',
      messagingSenderId: '795834812931',
      appId: '1:795834812931:web:00fcb66ab39be097eedc36',
    };
    this.app = initializeApp(this._config);
  }
}

export const cloudService = new CloudService();
