import Vue    from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Login section
import Login from './views/Login/LoginComponent.vue'
import RestablecerContrasena from './views/Login/RestorePassword.vue'
import NuevaContrasena from './views/Login/NewPassword.vue'

//Dashboard section
import Overview from './views/Dashboard/OverviewComponent.vue'

//Users section
import Users from './views/Users/getUsers.vue'


export default new Router({
    routes: [
        {
            path: '*',
            redirect: { name: 'Overview' }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/restablecer-contrasena',
            name: 'RestablecerContrasena',
            component: RestablecerContrasena
        },
        {
            path: '/nueva-contrasena',
            name: 'NuevaContrasena',
            component: NuevaContrasena
        },
        {
            path: '/overview',
            name: 'Overview',
            component: Overview
        },
        {
            path: '/obtener-usuarios',
            name: 'getUsers',
            component: Users
        },
    ],
    mode: "history"
})