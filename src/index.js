import { defineReactive } from "./defineReactive.js"
import { compiler } from './compiler.js'
export function Vue(option) {
    this.$option = option
    this.$data = option.data
    this.$el = document.querySelector(option.el)
    this.$template = this.$el.outerHTML

    const keys = Object.keys(this.$data)
    keys.forEach(key => {
        defineReactive(this, key, this.$data[key])
    })
    compiler(this)
}