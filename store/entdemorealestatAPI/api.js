import axios from "axios"
const entdemorealestatAPI = axios.create({
  baseURL: "https://ent-demo-real-estat-43121.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return entdemorealestatAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return entdemorealestatAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_address_list(payload) {
  return entdemorealestatAPI.get(`/api/v1/address/`)
}
function api_v1_address_create(payload) {
  return entdemorealestatAPI.post(`/api/v1/address/`, payload.data)
}
function api_v1_amenity_list(payload) {
  return entdemorealestatAPI.get(`/api/v1/amenity/`)
}
function api_v1_amenity_create(payload) {
  return entdemorealestatAPI.post(`/api/v1/amenity/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return entdemorealestatAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return entdemorealestatAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return entdemorealestatAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return entdemorealestatAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_property_list(payload) {
  return entdemorealestatAPI.get(`/api/v1/property/`)
}
function api_v1_property_create(payload) {
  return entdemorealestatAPI.post(`/api/v1/property/`, payload.data)
}
function rest_auth_login_create(payload) {
  return entdemorealestatAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return entdemorealestatAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return entdemorealestatAPI.post(`/rest-auth/logout/`)
}
function api_v1_address_retrieve(payload) {
  return entdemorealestatAPI.get(`/api/v1/address/${payload.id}/`)
}
function api_v1_address_update(payload) {
  return entdemorealestatAPI.put(`/api/v1/address/${payload.id}/`, payload.data)
}
function api_v1_address_partial_update(payload) {
  return entdemorealestatAPI.patch(
    `/api/v1/address/${payload.id}/`,
    payload.data
  )
}
function api_v1_address_destroy(payload) {
  return entdemorealestatAPI.delete(`/api/v1/address/${payload.id}/`)
}
function api_v1_amenity_retrieve(payload) {
  return entdemorealestatAPI.get(`/api/v1/amenity/${payload.id}/`)
}
function api_v1_amenity_update(payload) {
  return entdemorealestatAPI.put(`/api/v1/amenity/${payload.id}/`, payload.data)
}
function api_v1_amenity_partial_update(payload) {
  return entdemorealestatAPI.patch(
    `/api/v1/amenity/${payload.id}/`,
    payload.data
  )
}
function api_v1_amenity_destroy(payload) {
  return entdemorealestatAPI.delete(`/api/v1/amenity/${payload.id}/`)
}
function api_v1_property_retrieve(payload) {
  return entdemorealestatAPI.get(`/api/v1/property/${payload.id}/`)
}
function api_v1_property_update(payload) {
  return entdemorealestatAPI.put(
    `/api/v1/property/${payload.id}/`,
    payload.data
  )
}
function api_v1_property_partial_update(payload) {
  return entdemorealestatAPI.patch(
    `/api/v1/property/${payload.id}/`,
    payload.data
  )
}
function api_v1_property_destroy(payload) {
  return entdemorealestatAPI.delete(`/api/v1/property/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return entdemorealestatAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return entdemorealestatAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return entdemorealestatAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return entdemorealestatAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return entdemorealestatAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_address_list,
  api_v1_address_create,
  api_v1_amenity_list,
  api_v1_amenity_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  api_v1_property_list,
  api_v1_property_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_address_retrieve,
  api_v1_address_update,
  api_v1_address_partial_update,
  api_v1_address_destroy,
  api_v1_amenity_retrieve,
  api_v1_amenity_update,
  api_v1_amenity_partial_update,
  api_v1_amenity_destroy,
  api_v1_property_retrieve,
  api_v1_property_update,
  api_v1_property_partial_update,
  api_v1_property_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
