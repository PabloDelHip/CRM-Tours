import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Login section
import Login from './views/Login/LoginComponent.vue'
import RestablecerContrasena from './views/Login/RestorePassword.vue'
import NuevaContrasena from './views/Login/NewPassword.vue'

//Dashboard section
import Overview from './views/Dashboard/OverviewComponent.vue'

//Users section
import Users from './views/Users/Users.vue'
import UserComponent from './views/Users/UserComponent.vue'
import UserProfile from './views/Users/profileView.vue'
import PermitsUsers from './views/Users/permitsUsers.vue'

export default new Router({
    routes: [{
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
            path: '/users',
            name: 'getUsers',
            component: Users
        },
        {
            path: '/users/create',
            name: 'CreateUser',
            component: UserComponent
        },
        {
            path: '/users/edit/:id',
            name: 'EditUser',
            component: UserComponent,
            props: true
        },
        {
            path: '/users/profile/:id',
            name: 'perfilUsuario',
            component: UserProfile,
            props: true
        },
        {
            path: 'users/permissions/:id',
            name: 'permisos',
            component: PermitsUsers,
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