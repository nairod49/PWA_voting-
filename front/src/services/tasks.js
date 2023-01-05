import { api } from 'boot/axios'

export function getAllTasks () {
  return api.get('/tasks')
}
export function addTasks (params) {
  return api.post('/tasks', params)
}

export function deleteTask (id) {
  console.log(id)
  return api.delete('/tasks/' + id)
};
