import { getAxiosInstance } from "apis/AxiosConfig";

export class ProductServices {
  /**
   * 
   * @param {'ar'|'en'} locale 
   * @param {Object} values
   * @param {string} values.brand brand slugs separated by commas
   * @param {string} values.color
   * @param {Boolean} values.top_rated
   * @param {Boolean} values.most_popular
   * @param {string} values.category_slug sub_category slugs separated by commas
   * @param {string} values.sub_category_slug brand slugs separated by commas
   * @param {string} values.search
   * @param {number} values.page
   * @param {string} values.ordering
   *
   * @returns {Promise<{count:Number, results:any[]}>}
   */
  static getProducts(locale, values) {
    return getAxiosInstance(locale).get(`/products/`, {
      params: values
    })
  }

  /**
   * 
   * @param {'ar'|'en'} locale 
   * @returns 
   */
  static getCategories(locale) {
    return getAxiosInstance(locale).get(`/categories/`);
  }
}
