import Vue    from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Login section
import Login from './views/Login/LoginComponent.vue'
import RestablecerContrasena from './views/Login/RestorePassword.vue'
import NuevaContrasena from './views/Login/NewPassword.vue'

//Dashboard section
import Overview from './views/Dashboard/OverviewComponent.vue'

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
            path: '/nueva-contrasena/:token',
            name: 'NuevaContrasena',
            component: NuevaContrasena,
            props: true
        },
        {
            path: '/overview',
            name: 'Overview',
            component: Overview
        },
        
    ],
    mode: "history"
})