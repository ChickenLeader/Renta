export class Network {
  constructor() {
    this.bearer = "";
  }

  static async fetch(url, init, addAuth) {
    const response = await fetch(url, {
      mode: "cors",
      ...init,
      headers: Network.getHeaders(init.headers, addAuth),
    });
    let promise;
    if (![204, 201, 200].includes(response.status)) {
      let promise = response.json().then((data) => {
        // console.log(response,"ressasasasasasasasaassssssssssssssssssss");
        return Promise.reject(data);
      });
      return promise.catch((error) => {
        // console.log(error,"22222222222222222222ressasasasasasasasaassssssssssssssssssss");
        return Promise.reject({ error: "error from Network" });
      });
    } else if (response.status == 204) promise = Promise.resolve({});
    else {
      promise = response.json();
    }

    return promise;
  }

  static getHeaders(originalHeaders, auth) {
    let headers = {};
    if (auth) {
      if (typeof window !== "undefined") {
        console.log("SUIIIIIIIIIIIIIIIIII");
        this.bearer = localStorage.getItem("token");
        headers.Authorization = `Token ${this.bearer}`;
      }else {
        console.log("offf a777");
      }
    }
    headers = {
      ...headers,
      ...originalHeaders,
      "content-type": "application/json",
      Accept: "application/json",
    };

    return headers;
  }
}
