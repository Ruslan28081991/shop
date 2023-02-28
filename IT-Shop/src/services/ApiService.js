class ApiService {
  constructor() {
    this.baseURL = new URL('https://api.escuelajs.co/api/v1/');
  }

  get(url, options = {}) {
    this.baseURL.searchParams.set(new URLSearchParams(options));
    return fetch(this.baseURL + url, { method: 'GET' });
  }

  post(url, body, options = {}) {
    return fetch(this.baseURL + url, { method: 'POST', body, ...options });
  }

  delete(url, options = {}) {
    return fetch(this.baseURL + url, { method: 'DELETE', ...options });
  }

  put(url, body, options = {}) {
    return fetch(this.baseURL + url, { method: 'PUT', body, ...options });
  }
}

export const apiService = new ApiService();
