import Vue    from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: require('./components/Login/LoginComponent.vue').default
        },
        {
            path: '/restablecer-contrasena',
            name: 'restablecer_contrasena',
            component: require('./components/Login/RestorePassword.vue').default
        },
        {
            path: '/nueva-contrasena',
            name: 'nueva_contrasena',
            component: require('./components/Login/NewPassword.vue').default
        },
        
    ],
    mode: "history"
})