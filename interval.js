  
//倒数五个数 点击
var loops = function(){ for (let i=5, j=1; i<0,j<6; i--,j++) {
 
      setTimeout(() => console.log(i), 1000*j)
    
  }
};
var bbb = document.getElementById('ext-gen470');
var timer = window.setInterval(
  function(){bbb.click(loops())}
  ,6000);


//时间倒数 setTimeout嵌套
let i = 1,
    j = 1;

  var timer1 = setTimeout(function x() {
    if (j < 6) {
      etime1.innerText = j;
      console.log(j);
      j++;
      setTimeout(x, 1000);
    }
  }, 0);

  var timer2 = setTimeout(function y() {
    etime2.innerText = i;
        console.log(i);
    i++;
    if (i < 6) {
      setTimeout(y, 1000);
    }
  }, 0);
