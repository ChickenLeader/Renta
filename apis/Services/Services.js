import { ENDPOINTS } from "apis/Endpoints/Endpoints";
import { Network } from "apis/Network";

export class Services {
  static login(values) {
    return Network.fetch(ENDPOINTS.login.url, {
      body: JSON.stringify(values),
      method: ENDPOINTS.login.method,
    });
  }
  static send_reset_code(values) {
    return Network.fetch(ENDPOINTS.send_reset_email.url, {
      body: JSON.stringify(values),
      method: ENDPOINTS.send_reset_email.method,
    });
  }
  static reset_password(values, locale = "en") {
    return Network.fetch(ENDPOINTS.reset_password.url, {
      body: JSON.stringify(values),
      method: ENDPOINTS.reset_password.method,
      locale: locale,
    });
  }
  static aboutUs(locale = "en") {
    return Network.fetch(ENDPOINTS.about_us.url, {
      method: ENDPOINTS.about_us.method,
      locale: locale,
    });
  }
  // Filter
  static areas(locale = "en") {
    return Network.fetch(ENDPOINTS.getAreas.url, {
      method: ENDPOINTS.getAreas.method,
      locale: locale,
    });
  }
  static propertyTypes(locale = "en") {
    return Network.fetch(ENDPOINTS.propertyTypes.url, {
      method: ENDPOINTS.propertyTypes.method,
      locale: locale,
    });
  }

  static monthlyRates(locale = "en") {
    return Network.fetch(ENDPOINTS.monthlyRates.url, {
      method: ENDPOINTS.monthlyRates.method,
      locale: locale,
    });
  }

  static getContactUs(locale = "en") {
    return Network.fetch(ENDPOINTS.getContactUs.url, {
      method: ENDPOINTS.getContactUs.method,
      locale: locale,
    });
  }

  static postContactUs(values, locale = "en") {
    return Network.fetch(ENDPOINTS.getContactUs.url, {
      body: JSON.stringify(values),
      method: ENDPOINTS.getContactUs.method,
      locale: locale,
    });
  }

  static myUnits(locale = "en") {
    return Network.fetch(
      ENDPOINTS.myUnits.url,
      {
        method: ENDPOINTS.myUnits.method,
        locale: locale,
      },
      true
    );
  }
  static getProperties(values, locale = "en") {
    return Network.fetch(
      ENDPOINTS.properties.url(
        values.number_of_rooms || "",
        values.property_type__id || "",
        values.area__id || "",
        values.price_gte || "",
        values.price_lte || "",
        values.area_gte || "",
        values.area_lte || "",
        values.most_viewed || "",
        values.page || 1,
        values.page_size || 5
      ),
      {
        method: ENDPOINTS.properties.method,
        locale: locale,
      }
    );
  }
  static getPropertyByID(id, locale = "en") {
    return Network.fetch(ENDPOINTS.propertyByID.url(id), {
      method: ENDPOINTS.propertyByID.method,
      locale: locale,
    });
  }
  static footerImages(locale = "en") {
    return Network.fetch(ENDPOINTS.footerImages.url, {
      method: ENDPOINTS.footerImages.method,
      locale: locale,
    });
  }

  static terms_privacy(locale = "en") {
    return Network.fetch(ENDPOINTS.terms_privacy.url, {
      method: ENDPOINTS.terms_privacy.method,
      locale: locale,
    });
  }

  static social_media(locale = "en") {
    return Network.fetch(ENDPOINTS.social_media.url, {
      method: ENDPOINTS.social_media.method,
      locale: locale,
    });
  }
  static amenities(locale = "en") {
    return Network.fetch(ENDPOINTS.amenties.url, {
      method: ENDPOINTS.amenties.method,
      locale: locale,
    });
  }
  //   static individualInsurance(values) {
  //     return Network.fetch(ENDPOINTS.individualInsurance.url, {
  //       body: JSON.stringify(values),
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       method: ENDPOINTS.individualInsurance.method,
  //     });
  //   }
}
