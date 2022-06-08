function changeColor(){
    // 获取id=container的div
    var container = document.getElementById("container");
    // 通过id获取绑定了事件的li
    var a = document.getElementById("a");
    // 获取属性值value
    var val = a.getAttribute("value");

    // 根据value的值切换container的背景颜色，以及第三个li的内嵌文本
    if(val == 0){
      container.style.background = "#C7FCEB";
      a.setAttribute("value","1");
      a.innerText = "resume";
    }else{
      container.style.background = "#777";
      a.setAttribute("value","0");
      a.innerText = "change";
    }
  }