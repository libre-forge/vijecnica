export default {
    get: (key, property = undefined) => {
        if (!key || !window.localStorage[key]) {
            return false
        }

        if (!property) {
            return JSON.parse(window.localStorage[key])
        }

        return JSON.parse(window.localStorage[key])[property]
    },
    set: (key, newData = undefined) => {
        if (!key || !newData) {
            return false
        }

        let recoveryData
        try {
            recoveryData = JSON.parse(window.localStorage[key])
        } catch (e) {
            recoveryData = {}
        }

        recoveryData = Object.assign(recoveryData, newData)
        window.localStorage.setItem(key, window.JSON.stringify(recoveryData))
    }
}
