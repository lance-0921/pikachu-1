import string from './css.js'  //模块化css文件
//let string2 =``
let n = 1
let time = 50
//准备两个demo，同时写入Text和html(css样式)。最精髓的地方。
let run = ()=>{
  //如果是回车或空格则替换，否则照搬
        // if(string[n]==='\n'){
        //     string2+= '</br>'
        // }else if(string[n]===""){
        //     string2+= '&nbsp'
        // }else{
        //     string2+=string[n]
        // }
  demo.innerHTML = string.substring(0,n)  
  demo2.innerText = string.substring(0,n)   //让用户看到的代码 
  n+=1
  if(n>string.length){ //当n大于字符串长度就停止写入
    window.clearInterval(id)
  }
  demo2.scrollTop = demo2.scrollHeight  //每次写入都将滚动条滚到滚动条的最大高度
}

let play =()=>{
  return setInterval(run,time)  //设立时钟
}

let pause = ()=>{
  window.clearInterval(id)  //清除时钟，demo停止写入
}

let slow = ()=>{
  pause()
  time=100;
  id = play()
}

let middle=()=>{
  pause()
  time =50;
  id = play()
}

let fast =()=>{
  pause()
  time=0
  id = play()
}
let id =  play()
btnPause.onclick = pause
btnPlay.onclick = () =>{
  id = play() 
}
btnSlow.onclick= slow
btnMiddle.onclick=middle
btnFast.onclick=fast
