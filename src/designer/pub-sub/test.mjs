import Event from './pub-sub.mjs'
let event = new Event()
event.$on('event1', function(arg){
    console.log('事件1',arg)
    })
    event.$on('event1', function(arg){
    console.log('⼜⼀个时间1',arg)
    })
    event.$on('event2', function(arg){
        console.log('事件2',arg)
})
event.$emit('event1',{name:'开课吧'})
event.$emit('event2',{name:'全栈'})
event.$off('event1')
event.$emit('event1',{name:'开课吧'})