/**
 * Token Object Type.
 * @typedef {{access:string, refresh:string}} TokenObj
 */

import { getAxiosInstance } from "apis/AxiosConfig";

const nonUserHeader = {
  headers: {
    Authorization: undefined,
  },
}
export class AuthServices {
  /**
   * @param {'ar'|'en'} locale
   * @param {Object} values
   * @param {string} values.email
   * @param {string} values.password
   * @returns {Promise<TokenObj>}
   */
  static login(locale, values) {
    return getAxiosInstance(locale).post(`/users/login/`, values);
  }

  /**
   * @param {'ar'|'en'} locale
   * @param {Object} values
   * @param {string} values.email
   * @param {string} values.firstName
   * @param {string} values.lastName
   * @param {string} values.phoneNumber
   * @param {string} values.password
   * @returns {Promise<TokenObj>}
   */
  static EditProfile(locale, values) {
    return getAxiosInstance(locale).put(`/users/me/`, values);
  }

  /**
   *
   * @param {'ar'|'en'} locale
   * @param {Object} values
   * @param {string} values.email
   * @param {string} values.username
   * @param {string} values.first_name
   * @param {string} values.last_name
   * @param {string=} values.phone
   * @param {NumberLike} values.password
   *
   * @returns {Promise<TokenObj>}
   */
  static signup(locale, values) {
    return getAxiosInstance(locale).post(`/users/me/`, values, nonUserHeader);
  }

}
