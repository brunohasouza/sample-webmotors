import http from './http'

export const FETCH_MAKES = () => http.get('Make')
export const FETCH_MODELS = ({ makeId }) => http.get(`Model?MakeID=${makeId}`)
export const FETCH_VERSIONS = ({ modelId }) => http.get(`Version?ModelID=${modelId}`)
export const FETCH_VEHICLES = ({ page }) => http.get(`Vehicles?Page=${page || 1}`)