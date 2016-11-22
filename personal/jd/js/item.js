// JavaScript Document
window.onload=function(){
	var jsonA={
	"contA":'2',
	"contB":'1',
	"contC":'3',
	"contD":'4',
	"contE":'5'
	};

	
	var tabA=document.getElementById('tabA');
	hxsd_tools.tab(tabA,function(attr,cont){
		//alert(attr);
		if(cont.children.length==0){	
			cont.innerHTML='<div class="boxplus" id="boxplus">'+'<img src="images/kelaibi'+jsonA[attr]+'.jpg">'+'<span id="boxspan"></span>'+'</div><div class="b_boxplus" id="b_boxplus">'+'<img class="bigImg" id="bigImg" src="images/datu'+jsonA[attr]+'.jpg"></div>';
			//放大镜
			var oBox1=document.getElementById('plusbox');			
			var oBox2=document.getElementById('b_boxplus');
			var oSpan=oBox1.getElementsByTagName('span')[0];
			var oImg=document.getElementById('bigImg');
			hxsd_tools.plus();
		}
	});
		//刷新就有放大镜
		var oBox1=document.getElementById('plusbox');			
		var oBox2=document.getElementById('b_boxplus');
		var oSpan=oBox1.getElementsByTagName('span')[0];
		var oImg=document.getElementById('bigImg');
		hxsd_tools.plus();		
			
	
//加入购物车
var Jia=document.getElementById('jia');
var Jian=document.getElementById('jian');
var Num=document.getElementById('number');
	var num=1;
	Jia.onclick=function(){
		num++;
		Num.innerHTML=num;	
	}
	Jian.onclick=function(){
		num--;	
		if(num<=0){
			num=0;	
		}
		Num.innerHTML=num;
	}

//购物点选
	function choose(obj){
		var Fram=document.getElementById(obj);
		var Ul=Fram.children;
		for(var i=0;i<Ul.length;i++){
			var Span=document.createElement('span');
			Span.innerHTML='√';
			Span.className='aaccspan';
			Ul[i].onclick=function(){	
				for(var j=0;j<Ul.length;j++){
					Ul[j].className='';
					this.className='aacc';
				}
			this.appendChild(Span)		
			}	
		}	
	}
	choose('frames');//选择颜色
	choose('money');//白条分期
	//增值保值
	var Chan=document.getElementById('change');
	var switchopen=true;
			var Span=document.createElement('span');
			Span.innerHTML='√';
			Span.className='acspan';
	Chan.onclick=function(){
		if(switchopen){
			Chan.className='acc';
			switchopen=false;	
			Chan.appendChild(Span);	
		}else{
			Chan.className='noclick';
			switchopen=true;	
		}
	}

//选项卡
	var Tab1=document.getElementById('tjpj');
	var Tab2=document.getElementById('rqdp');
	var Cont=document.getElementById('cont');
	var oUl=Cont.children;
	var Mask=document.createElement('div');
	Mask.className='mask';
	Mask.innerHTML='人气单品';
	Tab2.appendChild(Mask);	
	oUl[1].style.display='none';
		
			Tab1.onclick=function(){
				oUl[0].style.display='none';
				oUl[1].style.display='block';
				Mask.innerHTML='推荐配件';			
				this.appendChild(Mask);
			}	
			Tab2.onclick=function(){
				oUl[1].style.display='none';
				oUl[0].style.display='block';
				Mask.innerHTML='人气单品';
				this.appendChild(Mask);			
		}	
}
