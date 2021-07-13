import { Deserializer } from 'jsonapi-serializer'
import http from './http'

export async function create ({ url, body, ...options }) {
  const response = await http({
    url,
    method: 'POST',
    body,
    ...options
  })

  return deserializeResponse(response)
}

export async function update ({ url, body, ...options }) {
  const response = await http({
    url,
    method: 'PATCH',
    body,
    ...options
  })

  return deserializeResponse(response)
}

export async function fetch ({ url, params = {}, ...options }) {
  const response = await http({
    url,
    params,
    options
  })

  return deserializeResponse(response)
}

export async function destroy ({ url, ...options }) {
  return await http({
    url,
    method: 'DELETE',
    options
  })
}

async function deserialize (data) {
  const opt = {
    keyForAttribute: 'camelCase'
  }

  return new Deserializer(opt).deserialize(data)
}

async function deserializeResponse (response) {
  if (response.data && !response.data.errors) {
    response.data.data = await deserialize(response.data)
  }
  return response
}
