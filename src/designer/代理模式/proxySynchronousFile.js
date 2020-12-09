// 收集需要同步的文件ID
const proxySynchronousFile = function () {
    var cache = [], timer;
   return function (id) {
       cache.push(id)
       if(timer){
           return
       }
       timer = setTimeout(()=>{
        synchronousFile(cache.join(','))
        clearTimeout(timer)
        timer = null
        cache=[]
       }, 2000)
   }
    
}()



// 根据ID 下载文件

const synchronousFile = function (id) {
    console.log('需要上传的文件ID', id);
}


const checkboxs = document.getElementsByTagName('checkbox')
for(var i= 0; c; c=checkboxs[i++]){
    c.onClick = function () {
        if(this.checked === true){
            proxySynchronousFile(this.id)
        }
    }
}