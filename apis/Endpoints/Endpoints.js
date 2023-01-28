import DomainUrl from "apis/Domain";

export const ENDPOINTS = {
  login: {
    url: `${DomainUrl}/about-us/`,
    method: "GET",
  },
  about_us: {
    url: `${DomainUrl}/about-us/`,
    method: "GET",
  },
  search: {
    url: `${DomainUrl}/area/`,
    method: "GET",
  },
  getContactUs: {
    url: `${DomainUrl}/contact-us-info/`,
    method: "GET",
  },
  postContactUs: {
    url: `${DomainUrl}/contact-us/`,
    method: "POST",
  },
  myUnits: {
    url: `${DomainUrl}/my-unit/`,
    method: "GET",
  },
  properties: {
    url: `${DomainUrl}/property/`,
    method: "GET",
  },
  propertyByID: {
    url: (id) => `${DomainUrl}/property/${id}`,
    method: "GET",
  },
};
