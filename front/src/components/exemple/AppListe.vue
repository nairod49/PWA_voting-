<template>
    <div id="table">
        <div id="top">
            <div id="titletask">{{titletask}}</div>
            <input type="button" id="add" value="+" @click="toggleHidden">
            <input type="button" id="params" value="X" @click="DeleteList">
        </div>
        <div v-if="visible">
          <label for="name">Name task</label>
           <input
              id="nametask"
              v-model="nametask"
              type="text"
              name="nom de la task"
            >
            <input type="button" value="ajouter" @click="Addtask(nametask)" id="add">
        </div>
        <div v-if="index==null in tasks" :key="index" >
          Vous n'avez pas de tache<br>
           veuillez en ajouter
        </div>
        <div v-for="(task, index) in tasks" :key="index">
            <input type="checkbox" id="checkbox" v-model="checked">
            <div id="title">{{task.titles}}</div>
            <input type="button" id="params" value="X" @click="Deletetask(task.id)">

        </div>
    </div>
</template>
<script setup>
// Syntax vue3 Composition API
import { ref, VueElement } from 'vue'
import { getAllTasks, deleteTask, addTasks } from 'services/tasks'
import { deleteList } from 'src/services/list'
const props = defineProps({
  titletasks: {
    type: String,
    default: 'Rien'
  },
  idlist: {
    type: String
  }
})

const visible = ref(false)
const nametask = ref(VueElement.nametask)
const tasksReactive = ref([])
const titletask = ref(props.titletasks)

function toggleHidden () {
  visible.value = !visible.value
}

async function DeleteList () {
  const { data } = await deleteList(props.idlist)
  tasksReactive.value = data
  window.location.reload()
}

async function Deletetask (id) {
  console.log(id)
  const { data } = await deleteTask(id)
  tasksReactive.value = data
  window.location.reload()
}
async function Addtask (name) {
  (async () => {
    console.log(name)
    await addTasks({ title: name })
  })()
  window.location.reload()
}

(async () => {
  const { data } = await getAllTasks()
  tasksReactive.value = data
  console.log(data)
})()

</script>
<style scoped>
#table{
    border: solid rgba(241, 247, 241, 0.692) 3px;
    width: 70%;
    height: 40%;
    margin-right: auto;
    margin-left: auto;
}
#checkbox{
    margin-left: 20px;
}
#titletask{
    margin-left: 20px;
    margin-top : 0%;
    font-size: 26px;
}
#top{
    background-color:rgba(241, 247, 241, 0.692);
    display: flex;
    margin-bottom: 20px;
}
#params{
    margin-left :60%;
    font-size:26px;
    background-color:rgba(241, 247, 241, 0.692);
    border:none;
}
#title{
    margin-top: -25px;
    margin-left: 15%;
    margin-bottom: 20px;

}
</style>
