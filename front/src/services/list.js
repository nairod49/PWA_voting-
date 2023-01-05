import { api } from 'boot/axios'

export function getAllLists () {
  return api.get('/lists')
}
export function addLists (params) {
  return api.post('/lists', params)
}
export function deleteList (id) {
  console.log(id)
  return api.delete('/lists/' + id)
};
