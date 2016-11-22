// JavaScript Document
var my_widget={
	slide:function(obj,showNumber){
		var oBox=document.getElementById(obj);
		var oBl=oBox.children[0];
		var oBr=oBox.children[1];
		var oUl=oBox.getElementsByTagName('ul')[0];
		var aLi=oUl.children;
		var n=0;
		
		//--------------------------------------------------------------
		var Uli_w=hxsd_tools.getStyle(oUl.children[0].children[0],'width');//得到每一个li的宽度
		oUl.style.width=Uli_w*aLi.length*4+'px';//得到ul的宽度
	
		oBox.onmouseenter=function(){
			oBl.style.display='block';
			oBr.style.display='block';	
		}
		oBox.onmouseleave=function(){
			oBl.style.display='none';
			oBr.style.display='none';	
		}
		
		//左右切换
		oBl.onclick=function(){
			n--;
			if(n<=1){
				n=1;
				oUl.style.left=-Uli_w*n+'px';
			};
				
			hxsd_tools.move(oUl,{"left":-Uli_w*n*4})
		};
		oBr.onclick=function(){
			n++;
			if(n>=aLi.length-1){
				n=1;
				oUl.style.left=-Uli_w*n+'px';
			};			
			hxsd_tools.move(oUl,{"left":-Uli_w*n*4})
		};	
	},
	slide_change:function(obj,showNumber){
		var oBox=document.getElementById(obj);
		var oBl=oBox.children[0];
		var oBr=oBox.children[1];
		var oUl=oBox.getElementsByTagName('ul')[0];
		var aLi=oUl.children;
		var n=0;
		
		//--------------------------------------------------------------
		var Uli_w=hxsd_tools.getStyle(oUl.children[0],'width');//得到每一个li的宽度
		oUl.style.width=Uli_w*aLi.length+'px';//得到ul的宽度
		
		
		//公共方法------------------------------------------------------
			function changeBtn(n){
				for(var j=0;j<aBtn.length;j++){
					aBtn[j].className='';				
				};
				aBtn[n].className='ac';
				hxsd_tools.move(oUl,{"opacity":80},100,function(){
					hxsd_tools.move(oUl,{"left":-Uli_w*n},30,function(){
						hxsd_tools.move(oUl,{"opacity":100},1000)	
					})	
				})
			};
				
			
		//插入ol-------------------------------------
		var Ol=document.createElement('ol');
		for(var i=0;i<aLi.length;i++){
			Ol.innerHTML+='<li>'+(showNumber? i+1 :'')+'</li>';
		}
		oBox.appendChild(Ol);
		var Ol=oBox.getElementsByTagName('ol')[0];
		Ol.style.marginLeft=(-Ol.offsetWidth/2)+'px';		
		
		var aBtn=oBox.getElementsByTagName('ol')[0].children;
		aBtn[0].className='ac';
		
		//绑定按钮事件-----------------------------------------------------
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;//发牌照
			aBtn[i].onmouseover=function(){
				
				//移动图片
				n=this.index;	
				changeBtn(n);
			};
		};
		
		oBox.onmouseenter=function(){
			oBl.style.display='block';
			oBr.style.display='block';	
		}
		oBox.onmouseleave=function(){
			oBl.style.display='none';
			oBr.style.display='none';	
		}
		
		//左右切换
		oBl.onclick=function(){
			n--;
			if(n<0){
				n=aBtn.length-1;
			};	
			changeBtn(n);
		};
		oBr.onclick=function(){
			n++;
			if(n>=aBtn.length-1){
				n=0;
			};
			changeBtn(n);
		};	
		
		//轮播区自动更新
		function bannernew(){
			oBox.timer=setInterval(function(){
				for(var j=0;j<aBtn.length;j++){
					aBtn[j].className='';	
				};
					for(var k=0;k<aBtn.length;k++){
						aBtn[k].index=k;
						//鼠标划在按钮上时，清定时器
						aBtn[k].onmouseenter=function(){
							clearInterval(oBox.timer)
						};
						aBtn[k].onmouseleave=function(){
							bannernew();	
						}	
					}
				
				aBtn[n+1].className='ac';
				hxsd_tools.move(oUl,{"opacity":80},100,function(){
					hxsd_tools.move(oUl,{"left":-Uli_w*n},30,function(){
						hxsd_tools.move(oUl,{"opacity":100},1000)	
					})	
				})
				n++;
				if(n>=aBtn.length-1){
					n=-1;
					hxsd_tools.move(oUl,{"opacity":80},100,function(){
						hxsd_tools.move(oUl,{"left":-Uli_w*(aBtn.length-1)},30,function(){
							hxsd_tools.move(oUl,{"opacity":100},1000)	
						})	
					})
				}
			},1500)
		}
		bannernew();
	}			
}


