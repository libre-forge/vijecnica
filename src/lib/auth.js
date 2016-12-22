import storage from './localStorage'

export function isAuthenticated () {
    return !!storage.get('user', 'token')
}

export function getToken () {
    return storage.get('user', 'token')
}

export function getUsername () {
    return storage.get('user', 'username')
}
