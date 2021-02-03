import store from './store'
import router from './routes';
import axios from 'axios'
import './interceptors';
import Auth from './providers/Auth';

const AuthResourse = new Auth();

let validate_jwt

async function existToken() {
    await AuthResourse.me().then(() => {
        validate_jwt = true
    }).catch( () => {
        validate_jwt = false
    })
    return validate_jwt
}

router.beforeEach(async (to, from, next) => {
    let jwt = await existToken();
    if ( jwt === false && to.path !== '/login' && to.path !== '/restablecer-contrasena' && to.path !== '/nueva-contrasena') {
        localStorage.removeItem('data_user');
        window.location.href = '/login';
    } else {
        if(to.path === '/login' && jwt === true) {
            window.location.href = '/overview';
        } else {
            next();
        }
    }
});