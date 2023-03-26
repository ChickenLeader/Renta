export const ENDPOINTS = {
  // AUTH
  login: {
    url: `/users/login`,
    method: "POST",
  },
  send_reset_email: {
    url: `/users/password/send_reset_email/`,
    method: "POST",
  },
  reset_password: {
    url: `/users/password/reset_password/`,
    method: "POST",
  },
  // Home
  about_us: {
    url: `/about-us/`,
    method: "GET",
  },
  getAreas: {
    url: `/area/`,
    method: "GET",
  },
  propertyTypes: {
    url: `/property-type/`,
    method: "GET",
  },
  monthlyRates: {
    url: `/price-range/`,
    method: "GET",
  },
  getContactUs: {
    url: `/contact-us-info/`,
    method: "GET",
  },
  postContactUs: {
    url: `/contact-us/`,
    method: "POST",
  },
  myUnits: {
    url: `/my-unit/?page_size=2`,
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
      most_visited,
      page,
      page_size
    ) =>
      `/property/?Bedrooms=${Bedrooms}&property_type__id=${property_type__id}&area__name=${area__name}&price_gte=${price_gte}&price_lte=${price_lte}&area_gte=${area_gte}&area_lte=${area_lte}&most_viewed=${most_visited}&page=${page}&page_size=${page_size}`,
    method: "GET",
  },
  propertyByID: {
    url: (id) => `/property/${id}`,
    method: "GET",
  },
  footerImages: {
    url: `/footer-image/`,
    method: "GET",
  },
  terms_privacy: {
    url: "/terms-conditions/",
    method: "GET",
  },
};
