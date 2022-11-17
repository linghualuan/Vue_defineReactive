export function compiler(vm) {
    // 找到要渲染的DOM，获取innerHTML作为模板
    const node = vm.$el
    let template = vm.$template

    // 当模板里面的数据对应的数值发生变化的时候
    const keys = Object.keys(vm.$data)
    keys.forEach(key => {
        let reg = new RegExp('{{' + key +'}}', 'g')
        template = template.replaceAll(reg, vm.$data[key])
    })
    node.innerHTML = template
}