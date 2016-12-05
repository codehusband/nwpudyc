var EventUtil = {
    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function(event){
        return (event ? event : window.event);
    },
    getTarget: function(event){
        return event.target || event.srcElement;
    },
    getWheelDelta: function(event){
        if (event.wheelDelta){
            return event.wheelDelta;
        } else {
            return -event.detail * 40;
        }
    },
    preventDefault: function(event){
            if (event.preventDefault){
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
    },
    stopPropagation: function (event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
    }
};

var HoverEvent = {
  addHoverHandler : function () {
    var headerCR = document.getElementsByClassName("headerCR")[0];
    var headerCRObj = headerCR.getElementsByTagName("a");
    for(var i in headerCRObj){
      EventUtil.addHandler(headerCRObj[i],"mouseover",function () {
        this.style.color = "#ffff00";
      });
      EventUtil.addHandler(headerCRObj[i],"mouseleave",function () {
        this.style.color = "#e3dfd5";
      })
    }
  }
};

var pictureWrap = document.getElementsByClassName("pic")[0];
var img = pictureWrap.getElementsByTagName("img")[0];
var picOl = document.getElementsByClassName("ol")[0];
var picPage = picOl.getElementsByTagName("a");
var picArray = ["img/pic1.jpg","img/pic2.jpg","img/pic3.jpg","img/pic4.jpg","img/pic5.jpg","img/pic6.jpg"];
var imgNum = 1;
var PicTurnEvent = {
  addTurnHandler : function () {
      var i = imgNum;
      if(i=6)i=0;
    setInterval(function () {
      if(i == 6) i = 0;
      img.src = picArray[i];
      picPage[i].className = "active";
      if(i == 0) {
        picPage[5].className = "";
      } else {
        picPage[i-1].className = "";
      }
      i++;
    },3000);
  },
  addOverHandler : function () {
      picPage[i].onmousemove = function () {
          picPage[i].className = "active";
          img.src = picArray[i];
          imgNum = this.index;
          for (var j = 0; j < picPage.length; j++) {
              if (j != imgNum)picPage[j] = "";
          }
      };
  },
  addPauseHandler : function () {
  }
}

var aLi = document.getElementsByClassName('navmoon');
window.onload = function() {
    //二级菜单展示
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function() {
            var aUl = aLi[this.index].getElementsByClassName('nav-erji')[0];
            aUl.style.display = "block";
        };
        aLi[i].onmouseout = function() {
            var aUl = aLi[this.index].getElementsByClassName('nav-erji')[0];
            aUl.style.display = "none";
        }
    }
    //图片展示
    for(var i=0;i<picPage.length;i++)
    {
        picPage[i].index=i;
        picPage[i].onmousemove = function(){
            picPage[i].className = "active";
            img.src = picArray[i];
            imgNum = this.index;
            for (var j = 0; j < picPage.length; j++) {
                if (j != imgNum)picPage[j] = "";
            }
        }
    }
}


PicTurnEvent.addTurnHandler();
PicTurnEvent.addOverHandler();
HoverEvent.addHoverHandler();
