export class Network {
  constructor() {}

  static async fetch(url, init, addAuth) {
    const response = await fetch(url, {
      mode: "cors",
      ...init,
      headers: Network.getHeaders(init.header, addAuth),
    });
    let promise;
    if (
      response.status !== 200 &&
      response.status !== 201 &&
      response.status !== 204
    ) {
      let promise = response.json().then((data) => {
        return Promise.reject(data);
      });

      return promise.catch((error) => {
        return Promise.reject(error);
      });
    } else {
      promise = response.json() || {};
    }
    return promise;
  }
  static getHeaders(originalHeaders, auth) {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    if (auth) {
      headers.Authorization = `Token ${auth}`;
    }
    headers = {
      ...headers,
      ...originalHeaders,
    };
    return headers;
  }
}
