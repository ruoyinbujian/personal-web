/**
 * Created by lili on 2016/10/9 0009.
 */
var tool={
    //--------------滚动条事件---------------------------------------------------------
    scroll:function(oDiv,text,scroller){
        scroller.onmousedown=function(e){
            //记录偏移
            e=e||event;
            var disY=e.clientY-scroller.offsetTop;//只取纵向
            //移动
            document.onmousemove=function(e){
                e.cancelBubble=true;
                e=e||event;
                var t=e.clientY-disY;
                //限制移动范围-------------------------
                if(t<0){
                    t=0;
                }
                if(t>oDiv.offsetHeight-scroller.offsetHeight-2){
                    t=oDiv.offsetHeight-scroller.offsetHeight-2;
                }
                scroller.style.top=t+'px';
                //计算移动比例------------------------
                var rate=t/(oDiv.offsetHeight-scroller.offsetHeight-2);
                //console.log(rate);
                text.style.top=-(text.offsetHeight-oDiv.offsetHeight)*rate+'px';
            };
            //停止拖拽
            document.onmouseup=function(){
                document.onmousemove=null;
            };
            return false;
        };
    }
};