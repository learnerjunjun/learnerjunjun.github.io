/** 监听copy事件 */
document.addEventListener("copy",function(e){
    //复制的内容
    btf.snackbarShow('复制成功👻', false, 3000)
  })
// 检测按键
window.onkeydown = function (e) {
  if (e.keyCode === 123) {
    btf.snackbarShow('开发者模式已打开，请遵循GPL协议', false, 3000)
  }
}  