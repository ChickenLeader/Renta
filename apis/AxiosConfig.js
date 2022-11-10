import axios from "axios";
import DomainUrl from "./Domain";
//import { store } from "../redux/store";
//import { hideLoader, showLoader } from "../redux/actions/AppActions";

export const getAxiosInstance = (locale) => {
  let language = locale
  if (!language) {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("lang");
      language = storedLang
    }
    else
      language = 'en'
  }

  const _axios = axios.create({
    baseURL: `${DomainUrl}/${language}/api`,
    headers: {
      "content-type": "application/json",
      "Accept": "application/json",
    }
  })

  _axios.interceptors.request.use(
    async (config) => {
      //store.dispatch(showLoader())

      /** Adding token */
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        config.headers = {
          Authorization: token ? `Token ${token}` : undefined,
          ...config.headers,
        }
      }

      return config;
    },
    (err) => {
      //store.dispatch(hideLoader())
      return Promise.reject(err?.response?.data);
    }
  )

  _axios.interceptors.response.use(
    (response) => {
      // store.dispatch(hideLoader())
      return response.data;
    },
    (err) => {
      // store.dispatch(hideLoader())
      if (err?.response?.data) return Promise.reject(err?.response?.data);
    }
  )

  return _axios
}
