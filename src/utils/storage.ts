/**
 * @description: localStorage
 * @param {*}
 * @return {*}
 * @author: cola
 */

// localStorage 存
export function setLocalStorage(name: string, data: any) {
    const dataStr = data
    window.localStorage.setItem(name, dataStr)
}

// localStorage 取
export function getLocalStorage(name: string) {
    const dataStr = window.localStorage.getItem(name)
    return dataStr ? dataStr: ''
}

// removeLocalStorage 删除一项，或者所有
// 不传参，就是删除所有
export function removeLocalStorage(name?: string) {
    name === 'undefined' ? window.localStorage.removeItem(name) : window.localStorage.clear()
}
