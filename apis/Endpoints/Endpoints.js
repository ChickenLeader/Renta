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
      number_of_rooms,
      property_type__id,
      area__id,
      price_gte,
      price_lte,
      area_gte,
      area_lte,
      most_viewed,
      page,
      page_size
    ) =>
      `/property/?number_of_rooms=${number_of_rooms}&property_type__id=${property_type__id}&area__id=${area__id}&price_gte=${price_gte}&price_lte=${price_lte}&area_gte=${area_gte}&area_lte=${area_lte}&most_viewed=${most_viewed}&page=${page}&page_size=${page_size}`,
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
  social_media: {
    url: "/social-media/",
    method: "GET",
  },
  amenties: {
    url: "/amenties/",
    method: "GET",
  },
};
