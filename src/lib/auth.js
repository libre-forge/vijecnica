import storage from './localStorage'
import md5 from 'md5'

const user = {
    isAuthenticated: () => !!storage.get('token'),
    email: () => !!storage.get('email'),
    token: () => storage.get('user', 'token'),
    username: () => storage.get('user', 'name'),
    avatar: () => {
        const email = storage.get('user', 'email')
        return `http://gravatar.com/avatar/${md5(email)}`
    },
    get: () => storage.get('user')
}

export default user
