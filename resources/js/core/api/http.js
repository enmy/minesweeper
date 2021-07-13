import axios from 'axios'
import qs from 'qs'

export default async function http ({
  url,
  method = 'GET',
  params = {},
  body = {},
  headers = {}
}) {
  return httpBase({
    url,
    method,
    params,
    data: body,
    headers
  })
}

export const httpBase = axios.create({
  baseURL: '/api/',
  headers: { Accept: 'application/vnd.api+json', 'Content-Type': 'application/vnd.api+json' },
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'comma' }),
  validateStatus: status => status >= 200 && status < 300
})
