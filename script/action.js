jQuery(document).ready(function(){
   $('h1').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/4);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/4);
     $('h1').css('text-shadow', +rYP/70+'px '+rXP/70+'px rgba(239,61,91,.8), '+rYP/40+'px '+rXP/40+'px rgba(247,236,63,1), '+rXP/80+'px '+rYP/80+'px rgba(0,159,227,.7)');
   });
});

function mouseScroll(obj) {
  if (!obj) return false;
  var oUl = obj.getElementsByTagName('ul')[0];
  var aLi = oUl.getElementsByTagName('li');
  var iLiWidth = [];
  var iUlResult = 0;
  var iCur = 0;
  var iPicTarget = 0;
  var iNow = 1;
  var iCountTime = null;
  var timer = null;
  for (var i = 0; i < aLi.length; i++) {
    iLiWidth.push(aLi[i].offsetWidth);
  }
  for (i = 0; i < iLiWidth.length; i++) {
    iUlResult += iLiWidth[i];
  }
  oUl.style.width = iUlResult + 40 + 'px'; //ul的宽
  console.log(oUl.style.width);

  function autoStyle() {
    obj.style.width = aLi[iCur].offsetWidth + 'px';
    obj.style.left = (document.documentElement.clientWidth - obj.offsetWidth) / 2 + 'px' || (document.body.clientWidth - obj.offsetWidth) / 2 + 'px';
  }
  autoStyle(); //自适应#box居中
  window.onresize = function initPage() {
    autoStyle();
  };

  var oP = document.createElement('p'); //制作按钮
  for (i = 0; i < aLi.length; i++) {
    var oA = document.createElement('a');
    oA.href = '#';
    //oA.target = '_blank';
    oA.innerHTML = i + 1;
    oP.appendChild(oA);
  }
  oP.getElementsByTagName('a')[0].className = 'active';
  obj.appendChild(oP);

  var aA = obj.getElementsByTagName('p')[0].getElementsByTagName('a'); //为按钮添加事件
  for (i = 0; i < aA.length; i++) {
    aA[i].index = i;
    aA[i].onmouseover = function () {
      clearInterval(timer);
      iCur = this.index;
      picScroll();
    };
    aA[i].onmouseout = function () {
      countTime();
    };
  }

  document.onkeydown = function (ev) {
    clearInterval(timer);
    countTime();
    ev = ev || window.event;
    if (ev.keyCode === 37) {
      iCur--;
    }
    if (ev.keyCode === 39) {
      iCur++;
    }
    picScroll();
  };

  addScrollEvent(document, [mouseDown, mouseUp]);

  function mouseDown() {
    clearInterval(timer);
    countTime();
    iCur++;
    picScroll();
  }

  function mouseUp() {
    clearInterval(timer);
    countTime();
    iCur--;
    picScroll();
  }

  function picScroll() {
    if (iCur === aLi.length) {
      iCur = aLi.length - 1;
    }
    if (iCur < 0) {
      iCur = 0;
    }
    for (i = 0; i < aLi.length; i++) {
      oP.getElementsByTagName('a')[i].className = '';
    }
    oP.getElementsByTagName('a')[iCur].className = 'active';
    var tmpArr = [];
    for (i = 0; i < iCur; i++) {
      tmpArr.push(iLiWidth[i]);
    }
    iPicTarget = sumFn(tmpArr);
    startMove(oUl, {left: -iPicTarget});
    startMove(obj, {width: aLi[iCur].offsetWidth});
  }

  function sumFn(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }

  function countTime() {
    var iNum = 10;
    clearTimeout(iCountTime);
    iCountTime = setInterval(function () {
      if (iNum === 0) {
        clearInterval(iCountTime);
        autoPlay();
      } else {
        iNum--;
      }
    }, 5000);
  }

  function autoPlay() {
    clearInterval(timer);
    timer = setInterval(function () {
      if (iCur === aLi.length - 1) {
        iNow = -1;
      }
      if (iCur === 0) {
        iNow = 1;
      }
      iCur += iNow;
      picScroll();
    }, 5000);
  }
  autoPlay();
}

function startMove(obj, json, fnEnd) {
  if (obj.timer) {
    clearInterval(obj.timer);
  }
  obj.timer = setInterval(function () {
    doMove(obj, json, fnEnd);
    document.getElementById('box').style.left = (document.documentElement.clientWidth - document.getElementById('box').offsetWidth) / 2 + 'px' || (document.body.clientWidth - document.getElementById('box').offsetWidth) / 2 + 'px';
  }, 30);
}

function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  } else {
    return getComputedStyle(obj, false)[attr];
  }
}

function doMove(obj, json, fnEnd) {
  var iCur = 0;
  var bStop = true;	//假设运动已经该停止了
  for (var attr in json) {
    if (attr === 'opacity') {
      iCur = parseInt(100 * parseFloat(getStyle(obj, 'opacity')));
    } else {
      iCur = parseInt(getStyle(obj, attr));
    }
    if (isNaN(iCur)) {
      iCur = 0;
    }
    var iSpeed = (json[attr] - iCur) / 6;
    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    if (json[attr] !== iCur) {
      bStop = false;
    }
    if (attr === 'opacity') {
      obj.style.filter = "alpha(opacity:" + (iCur + iSpeed) + ")";
      obj.style.opacity = (iCur + iSpeed) / 100;
    } else {
      obj.style[attr] = iCur + iSpeed + 'px';
    }
  }
  if (bStop) {
    clearInterval(obj.timer);
    obj.timer = null;
    if (fnEnd) {
      fnEnd();
    }
  }
}

//addScrollEvent(document, [mouseDown, mouseUp]);
function addScrollEvent() {
  var obj = arguments[0];
  var functionSet = arguments[1];
  function scrollEvent(ev) {
    var oEvent = ev || event;
    var down = oEvent.wheelDelta ? oEvent.wheelDelta < 0 : oEvent.detail > 0;
    if (down) {
      functionSet[0]();
    } else {
      functionSet[1]();
    }
    if (oEvent.preventDefault) {
      oEvent.preventDefault();
    }
    return false;
  }
  if (obj.addEventListener) {
    obj.addEventListener('DOMMouseScroll', scrollEvent, false);
  }
  obj.onmousewheel = scrollEvent;
}

window.onload = function initPage() {
  var oDiv = document.getElementById('box');
  mouseScroll(oDiv);
};