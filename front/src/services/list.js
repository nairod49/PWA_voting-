import { api } from 'boot/axios'

export function getAllLists () {
  return api.get('/lists')
}
export function addLists (String) {
  return api.post('/lists/' + String)
}
