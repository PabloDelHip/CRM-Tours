import store from './store'
import router from './routes';
import axios from 'axios'
import './interceptors';
import Auth from './providers/Auth';

const AuthResourse = new Auth();

let validate_jwt

async function existToken() {

    if (localStorage.getItem('data_user')) {
        validate_jwt = true
    } else {
        validate_jwt = false
    }

    return validate_jwt
}

router.beforeEach(async(to, from, next) => {
    let jwt = await existToken();
    let url = to.path.split('/')
    url = '/' + url[1];

    if (jwt === false && to.path !== '/login' && to.path !== '/restablecer-contrasena' && url !== '/nueva-contrasena') {
        localStorage.removeItem('data_user');
        window.location.href = '/login';
    } else {
        if (jwt === true && to.path === '/login' && to.path === '/restablecer-contrasena' && url === '/nueva-contrasena') {
            window.location.href = '/overview';
        } else {
            next();
        }
    }
});