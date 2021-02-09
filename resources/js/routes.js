import Vue    from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Login section
import Login from './views/Login/LoginComponent.vue'
import RestablecerContrasena from './views/Login/RestorePassword.vue'
import NuevaContrasena from './views/Login/NewPassword.vue'
import CreateUser from './views/User/CreateUserComponent.vue'

//Dashboard section
import Overview from './views/Dashboard/OverviewComponent.vue'

//User section
import UserProfile from './views/Users/profileView.vue'
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
            path: '/nueva-contrasena/:token?',
            name: 'NuevaContrasena',
            component: NuevaContrasena,
            props: true
        },
        {
            path: '/user/create',
            name: 'CreateUser',
            component: CreateUser
        },
        {
            path: '/overview',
            name: 'Overview',
            component: Overview
        },
        {
            path: '/user/profile/:id',
            name: 'perfilUsuario',
            component: UserProfile,
            props: true
        },
        {
        
            path: '/obtener-usuarios',
            name: 'getUsers',
            component: Users
        }, 
    ],
    mode: "history"
})