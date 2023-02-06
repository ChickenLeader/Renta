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
  getAreas: {
    url: `${DomainUrl}/area/`,
    method: "GET",
  },
  propertyTypes: {
    url: `${DomainUrl}/property-type/`,
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
    url: (
      Bedrooms,
      property_type__id,
      area__name,
      price_gte,
      price_lte,
      area_gte,
      area_lte,
      page
    ) =>
      `${DomainUrl}/property/?Bedrooms=${Bedrooms}&property_type__id=${property_type__id}&area__name=${area__name}&price_gte=${price_gte}&price_lte=${price_lte}&area_gte=${area_gte}&area_lte=${area_lte}&page=${page}`,
    method: "GET",
  },
  propertyByID: {
    url: (id) => `${DomainUrl}/property/${id}`,
    method: "GET",
  },
  footerImages: {
    url: `${DomainUrl}/footer-image/`,
    method: "GET",
  },
};
