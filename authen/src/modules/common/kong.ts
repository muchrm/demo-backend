import * as request from 'request-promise';

export class Kong {
  constructor(
    private readonly baseUrl,
  ) { }
  get(path) {
    return this.request('GET', path);
  }
  post(path, body) {
    return request('POST', path, body);
  }
  delete(path) {
    return request('DELETE', path);
  }
  put(path, body) {
    return request('PUT', path, body);
  }
  patch(path, partialBody) {
    return request('PATCH', path, partialBody);
  }
  request(method, path, body?) {
    const options = {
      method,
      uri: this.baseUrl + path,
      json: true,
      headers: {},
      body,
    };
    return request(options);
  }
}
