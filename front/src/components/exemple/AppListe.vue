<template>
    <div id="table">
        <div id="top">
            <div id="titletask">{{titletask}}</div>
            <input type="button" id="params" value="...">
        </div>
        <div v-for="(task, index) in tasks" :key="index">
            <input type="checkbox" id="checkbox" v-model="checked">
            <div id="title">{{task.titles}}</div>
        </div>
    </div>
</template>
<script setup>
// Syntax vue3 Composition API
import { ref } from 'vue'
import { getAllTasks } from 'services/tasks'
const props = defineProps({
  titletasks: {
    type: String,
    default: 'Rien'
  }
})
const tasksReactive = ref([])
const titletask = ref(props.titletasks)
const tasks = ref([
  { titles: 'Task 1' },
  { titles: 'Task 2' },
  { titles: 'Task 3' }
]);

(async () => {
  const { data } = await getAllTasks()
  tasksReactive.value = data
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
