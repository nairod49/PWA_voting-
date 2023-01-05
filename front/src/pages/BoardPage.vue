<template>

<div class="page">
    <div class="header">
        <h4>Dashboard</h4>
    </div>
    <div class="titre">
        <h2>Bonjour </h2>
    </div>
    <div v-for="(list, index) in list" :key="index">
        <Task :titletasks="list.title" :idtask="list._id" />
    </div>
    <div class="bottom">
        <input type="button" value="ajouter" @click="toggleHidden" id="add">
    </div>
    <div v-if="visible">
      <label for="name">Name</label>
    <input
      id="namelist"
      v-model="namelist"
      type="text"
      name="nom de la list"
    >
    <input type="button" value="ajouter" @click="add($event, namelist)" id="add">
    </div>
</div>
</template>
<script setup>
// Syntax vue3 Composition API
import Task from 'components/exemple/AppListe.vue'
import { ref, VueElement } from 'vue'
import { getAllLists, addLists } from 'services/list'
const list = ref([])
const visible = ref(false)
const namelist = ref(VueElement.namelist)
function toggleHidden () {
  visible.value = !visible.value
}

function add (event, name) {
  (async () => {
    console.log(name)
    await addLists({ title: name })
  })()
  window.location.reload()
};

(async () => {
  const { data } = await getAllLists()
  console.log(list)
  list.value = data
})()

</script>
<style scoped>
#bottom{
    display: flex;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    background-color:rgba(241, 247, 241, 0.692);

}
</style>
