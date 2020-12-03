// 订阅发布模式

class Event{
    constructor(){
        // 存储事件
        this.callback={}
    }

    // 事件挂载
    $on(name, fn){
        if(this.callback[name]){
            this.callback[name].push(fn)
        }
        this.callback[name] = [fn]
    }
    // 事件触发
    $emit(name, args){
        const cbs = this.callback[name]
        if(cbs){
            cbs.map( v => v.call(this, args))
        }
    }
    // 事件解绑
    $off(name){
        this.callback[name] = null
    }
}

export default Event