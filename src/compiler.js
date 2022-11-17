export function compiler(vm) {
    const node = vm.$el
    let template = vm.$template

    const keys = Object.keys(vm.$data)
    // console.log('keys',keys);
    keys.forEach(key => {
        let reg = new RegExp(`{{${key}}}`, 'g')
        template = template.replaceAll(reg, vm.$data[key])
    })
    node.innerHTML = template
}