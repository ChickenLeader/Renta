import { ENDPOINTS } from "apis/Endpoints/Endpoints";
import { Network } from "apis/Network";

export class Services {
  static login(values) {
    return Network.fetch(ENDPOINTS.login.url, {
      body: JSON.stringify(values),
      method: ENDPOINTS.login.method,
    });
  }
  static aboutUs() {
    return Network.fetch(ENDPOINTS.about_us.url, {
      method: ENDPOINTS.about_us.method,
    });
  }
  // Filter
  static areas() {
    return Network.fetch(ENDPOINTS.getAreas.url, {
      method: ENDPOINTS.getAreas.method,
    });
  }
  static propertyTypes() {
    return Network.fetch(ENDPOINTS.propertyTypes.url, {
      method: ENDPOINTS.propertyTypes.method,
    });
  }

  static getContactUs() {
    return Network.fetch(ENDPOINTS.getContactUs.url, {
      method: ENDPOINTS.getContactUs.method,
    });
  }

  static postContactUs(values) {
    return Network.fetch(ENDPOINTS.getContactUs.url, {
      body: JSON.stringify(values),
      method: ENDPOINTS.getContactUs.method,
    });
  }

  static myUnits() {
    return Network.fetch(ENDPOINTS.myUnits.url, {
      method: ENDPOINTS.myUnits.method,
    });
  }
  static getProperties() {
    return Network.fetch(ENDPOINTS.properties.url, {
      method: ENDPOINTS.properties.method,
    });
  }
  static getPropertiesByID(id) {
    return Network.fetch(ENDPOINTS.propertyByID.url(id), {
      method: ENDPOINTS.propertyByID.method,
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
