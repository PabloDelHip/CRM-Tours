import UserProvider from '../providers/User';

const UserResource = new UserProvider()

export const SET_CURRENT_USER = ({ commit }, jwt) => {
    return new Promise((resolve, reject) => {
        UserResource.getCurrentUser().then((user) => {
                let data_user = user.data;
                commit('SET_CURRENT_USER', {
                    user: {
                        id: data_user.id,
                        name: data_user.name,
                        email: data_user.email,
                        profileId: data_user.profile_id,
                    }
                })
                return true
            })
            .then(() => {
                resolve(true)
            })
            .catch((err) => {
                reject(err)
            })
    })
}