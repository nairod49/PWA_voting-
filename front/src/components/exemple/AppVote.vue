<template>
    <div id="vote">
        <div id="question"> {{ title }}</div>
        <div id="reponse_a">
            reponse A : {{ reponseA }}
            <input type="button" value="reponse A" @click="ajouterA()"  id="boutton_a">
            <div v-if="visible">
                score : {{ scoreA  }}
            </div>
        </div>
        <div id="reponse_b">
            reponse B : {{ reponseB }}
            <input type="button" value="reponse B" @click="ajouterB()" id="boutton_b">
            <div v-if="visible">
                score : {{ scoreB }}
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { updateA } from 'services/vote.js'
const visible = ref(false)
const props = defineProps({
  title: {
    type: String
  },
  reponse_a: {
    type: String,
    default: 'vanille'
  },
  reponse_b: {
    type: String
  },
  score_a: {
    type: Number,
    default: 5
  },
  score_b: {
    type: Number,
    default: 5
  },
  id: {
    type: String
  }
})

const title = ref(props.title)
const reponseA = ref(props.reponse_a)
const reponseB = ref(props.reponse_b)
const scoreA = ref(props.score_a)
const scoreB = ref(props.score_b)
const id = ref(props.id)

function ajouterA () {
  scoreA.value = scoreA.value + 1
  console.log(updateA(id, scoreA))
  visible.value = true
}
function ajouterB () {
  scoreB.value = scoreB.value + 1
  visible.value = true
}
</script>
<style scoped>
#vote{
    border: solid rgba(241, 247, 241, 0.692) 3px;
    width: 70%;
    height: 40%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 40px;
}
</style>
