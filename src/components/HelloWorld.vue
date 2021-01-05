<template>
  <div class="hello">
    <h1>TEST</h1>
    <p>{{count}}</p>
    <button @click="increment">Increment</button>
    <p>
      <input type="text" v-model="etudiant" id="">
      <button @click="add">Add</button>
    </p>
    <ul>
      <li v-for="(item, index) in etudiants" :key="index">
        {{item}}
      </li>
      <strong>{{totalEtudiant}}</strong>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      etudiant: ""
    }
  },
  props: {
  },
  mounted() {
    this.loadEtudiant()
  },
  computed : {
    ...mapState({
      etudiants : (state)=>{
        return state.etudiant.etudiants 
      },
      }
    ),
    ...mapState(['count']),
    ...mapGetters(['totalEtudiant']),
  },
  methods : {
    ...mapMutations(['increment']),
    ...mapMutations(['addEtudiant']),
    ...mapActions(['loadEtudiant']),
    add(){
      this.addEtudiant(this.etudiant)
      this.etudiant = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
