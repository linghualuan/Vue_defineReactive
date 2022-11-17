import { defineReactive } from './defineReactive.js'
import { compiler } from './compiler.js'
export function Vue(option) {
    this.$option = option
    this.$el = document.querySelector(option.el)  // 要操作的DOM对象
    this.$template = this.$el.outerHTML  // 保存原始模板
    this.$data = option.data
    // 找出data对象中所有的key
    const keys = Object.keys(this.$data)
    // 将data中的key代理到vm实例上
    keys.forEach(key => {
        // this代表的是new出来的Vue实例，相当于下面的vm
        defineReactive(this, key, this.$data[key])
    })

    compiler(this)
}