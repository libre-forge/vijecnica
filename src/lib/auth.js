import storage from './localStorage'
import md5 from 'md5'

const user = {
    isAuthenticated: () => !!storage.get('user', 'token'),
    token: () => storage.get('user', 'token'),
    username: () => storage.get('user', 'username'),
    avatar: () => {
        const email = storage.get('user', 'username')
        return `http://gravatar.com/avatar/${md5(email)}`
    }
}

export default user
