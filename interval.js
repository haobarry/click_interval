  
//倒数五个数 点击
var loops = function(){ for (let i=5, j=1; i<0,j<6; i--,j++) {
 
      setTimeout(() => console.log(i), 1000*j)
    
  }
};
var bbb = document.getElementById('ext-gen470');
var timer = window.setInterval(function(){bbb.click(loops())},6000);
