import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        id_estado_municipio: [],
        id_categoria:'',
        id_tipo_torneo: '',
        id_modo_juego: '',
        torneos_instalaciones: [],
        datos_lat:'',
        datos_lng:'',
        images_instalaciones:[]
        
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
});