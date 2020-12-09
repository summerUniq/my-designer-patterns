// 图片懒加载

const createImage = (function () {
    const imgDom = document.createElement('img')
    document.body.appendChild(imgDom)
    return {
        setSrc: function (src) {
            imgDom.src = src
        }
    }
})()

const proxyImg = (function () {
    const img = new Image()
    img.onload = function () {
        createImage.setSrc(this.src)
    }
    return {
        setSrc: function (src) {
            createImage.setSrc('./loading.gif')
            img.src = src
        }
    }
})()

proxyImg.setSrc('./timg.jpeg');