<template>
    <div class="page">
        <h3>Bienvenue a la page pour voter</h3>
        <div v-for="(votes, index) in votes" :key="index">
            <Vote :id="votes._id" :title="votes.title" :reponse_a="votes.reponse_A" :reponse_b="votes.reponse_B" :score_a="votes.nb_a" :score_b="votes.nb_b"/>
        </div>
        <div id="cree">
            <input type="button" value="ajouter" @click="add()" id="add">
            <div v-if="visible">
                <input type="text" v-model="question"/>
                <input type="text" v-model="reponseA"/>
                <input type="text" v-model="reponseB"/>
                <input type="button" value="valider" @click="valide()" id="valider"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import Vote from 'components/exemple/AppVote.vue'
import { getAllVote, addVote } from 'services/vote'
import { ref, VueElement } from 'vue'
const visible = ref(false)
const question = ref(VueElement.question)
const reponseA = ref(VueElement.reponseA)
const reponseB = ref(VueElement.reponseB)
const votes = ref([]);

(async () => {
  const { data } = await getAllVote()
  console.log(votes)
  votes.value = data
})()

function ajouterVote (q, ra, rb) {
  (async () => {
    console.log(q, ra, rb)

    await addVote({ title: q, reponse_A: ra, reponse_B: rb, nb_a: 0, nb_b: 0 })
  })()
};
function valide () {
  ajouterVote(question.value, reponseA.value, reponseB.value)
}
function add () {
  visible.value = true
}
</script>
<style scoped>
#cree{
    margin-left: 50%;
}
</style>
