<template>

<div class="page">
    <div class="header">
        <h4>Dashboard</h4>
    </div>
    <div class="titre">
        <h2>Bonjour </h2>
    </div>
    <div v-for="(list, index) in list" :key="index">
        <Task :titletasks="list"/>
    </div>
    <div class="bottom">
        <input type="button" value="ajouter" @click="add" id="add">
    </div>
</div>
</template>
<script setup>
// Syntax vue3 Composition API
import Task from 'components/exemple/AppListe.vue'
import { ref } from 'vue'
import { getAllLists, addLists } from 'services/list'
const list = ref([])

function add (event) {
  (async () => {
    await addLists('test')
  })()
};

(async () => {
  const { data } = await getAllLists()
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
