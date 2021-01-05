import axios from 'axios'
const etudiant = {
    namespaced: false,
    state: {
        etudiants : [],
        bitota : 2
    },
    mutations: {
        addEtudiant(state, slug){
        state.etudiants.push(slug)
        },
        setEtudiants(state,slug){
        state.etudiants = slug
        }
    },
    getters: {
        totalEtudiant (state) {
        return state.etudiants.length
        }
    },
    actions:{
        loadEtudiant({commit}){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            let etudiants = res.data
            console.log(etudiants)
            commit('setEtudiants', etudiants.map(data => data.name))
        })
        }
    }
}   
export default etudiant