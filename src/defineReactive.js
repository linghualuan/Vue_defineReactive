import { compiler } from './compiler.js'
export function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            return val
        },

        set(newValue) {
            if(val === newValue) return
            val = newValue
            updateData(obj, key, newValue)
            compiler(this)
        }
    })
}

function updateData(obj, key, val) {
    obj.$data[key] = val
}