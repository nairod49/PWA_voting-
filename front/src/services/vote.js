import { api } from 'boot/axios'

export function getAllVote () {
  return api.get('/vote')
}
export function addVote (params) {
  console.log('test')
  return api.post('/vote', params)
}
export function updateA (id, params) {
  return api.put('/vote/A/' + id, params)
}
