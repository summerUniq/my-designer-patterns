class LoginDialog {
    constructor(){
        this.wrapper = null
    }
    getSingle(fn) {
        var result;
        return () => {
            return result || (result = fn.apply(this, arguments))
        }
    }
    createDialog() {
        var div = document.createElement('div')
        div.innerHTML = '我是登陆浮窗'
        div.className = 'model'
        div.style.display = 'none'
        document.body.appendChild(div)
        return div
    }
    createSingleDialog() {
        this.wrapper = this.getSingle(this.createDialog)()
        return this
    }
    show() {
        this.wrapper.style.display = 'block'
    }
    hide() {
        this.wrapper.style.display = "none"
    }
}

const dialog = new LoginDialog().createSingleDialog()
console.log('dialog', dialog);

export default dialog