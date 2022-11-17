import { compiler } from './compiler.js'
export function defineReactive(data, key, val) {
    Object.defineProperty(data, key, {
        // 读取属性
        get() {
            console.log(`获取${key}的属性值`);
            return val
        },
        // 设置属性
        set(newValue) {
            console.log(`${key}属性被更改为${newValue}`)
            if(val === newValue) return
            val = newValue
            // 更新$data中的值
            updateData(this, key, newValue)
            compiler(this)
        }
    })
}

function updateData(vm, key, value) {
    vm.$data[key] = value
}