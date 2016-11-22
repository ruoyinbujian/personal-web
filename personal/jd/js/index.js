// JavaScript Document
window.onload=function(){
	my_widget.slide_change('box0',true);
	my_widget.slide('box1');
	var ad=document.getElementById('ad');
	var clo=document.getElementById('clo');
	clo.onmouseover=function(){
		this.style.background="rgba(0,0,0,0.3)"
	}
	clo.onmouseout=function(){
		this.style.background="rgba(0,0,0,0.1)"
	}
	clo.onclick=function(){
		hxsd_tools.move(ad,{"opacity":0},1000,function(){
			hxsd_tools.move(ad,{"height":0},200)
		})
	};
	
	
	//二级菜单
	var oMenu=document.getElementById('taobaoMenu');
	var aLi=oMenu.getElementsByTagName('li');
	var oMenuCont=document.getElementById('menuCont');
	var aDl=oMenuCont.getElementsByClassName('section');
	var leave_menu=null;//离开右侧 回到左侧
	//删除所有li上的ac
	function del_li_ac(){
		for(var i=0; i<aLi.length; i++){
			aLi[i].className="";
		};
	}
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			clearTimeout(leave_menu);
			oMenuCont.style.display="block";
			del_li_ac(); 
			this.className="ac";
			//显示相对应的内容
			for(var i=0; i<aDl.length; i++){
				aDl[i].style.display="none";
			};
			aDl[this.index].style.display="block";
		};
		aLi[i].onmouseout=function(){
			clearTimeout(leave_menu);
			leave_menu=setTimeout(function(){
				oMenuCont.style.display="none";
				del_li_ac();  
			},100)
		};
	};
	oMenuCont.onmouseenter=function(ev){
		clearTimeout(leave_menu);
		this.style.display="block";
	};
	oMenuCont.onmouseleave=function(){
			del_li_ac(); 
			this.style.display="none";
	};
	
function floorscroll(){	
	//楼层滚动
	var LocationFloorList=getByClass(document,'LocationFloorList')[0];
	var aLi=LocationFloorList.getElementsByTagName('li');
	var aFloor=getByClass(document,'floor');
	var arr=[];
		
	//-------------------------------------------------
		
	for(var i=0; i<aFloor.length; i++){
		var json={};
		json.name=i;
		json.offsetTop=aFloor[i].offsetTop;
		arr.push(json);
	};
	
		window.onscroll=function(){
			//显示楼层编号-------------------------------------------------
			var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
			if(scrolltop>100){
				LocationFloorList.style.display='block';
			}else{
				LocationFloorList.style.display='none';
			};
		
			// 根据楼层滚动位置，定位编号------------------------------------------------
			var last_arr=[];
			for(var j=0; j<arr.length; j++){
				if(arr[j].offsetTop<scrolltop+400){
					last_arr.push(arr[j].name);
				}
			};
			var li_index=last_arr[last_arr.length-1];
	
			for(var l=0; l<aFloor.length; l++){
				aLi[l].className='';
			};
			if(li_index){
				aLi[li_index].className='aac';
			}
		};
	
		//点击编号，跳转到相对楼层-----------------------------------------------
		for(var i=0; i<aFloor.length; i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){
				var start=document.documentElement.scrollTop || document.body.scrollTop;
				var end=arr[this.index].offsetTop;
				move(start,end)
			}
		};
		//move-------------------------------------------------------
		var timer;
		function move(start,end){
			var dis=end-start;
			var count=parseInt(1500/30);
			var n=0;
			clearInterval(timer);
			timer=setInterval(function(){
				n++;
				var a=1-n/count;
				var step_dis=start+dis*(1-a*a*a*a);
				window.scrollTo(0,step_dis);
				if(n==count){
					clearInterval(timer);
				};
			},30)
		};
	
		function getByClass(oParent,cls){
			var arr=[]; //容器
			if(document.getElementsByClassName) return oParent.getElementsByClassName(cls);
			else{
				var aEl=oParent.getElementsByTagName('*');//所有标签
				for(var i=0;i<aEl.length;i++){
					if(aEl[i].className.indexOf(cls)!=-1) arr.push(aEl[i]);//向数组中添加
				}
			return arr;
			}
		};
	}
	floorscroll();
	
	//tab切换
	function floortab1(obj1,obj2){
		var Ftab1=document.getElementsByClassName(obj1);
		var Ftab2=document.getElementsByClassName(obj2);
		var Ful=Ftab1[0].children;
		for(var i=0;i<Ful.length;i++){
			Ful[i].index=i;
			var html=Ftab2[0].innerHTML;
			Ful[i].onmouseenter=function(){
				for(var j=0;j<Ful.length;j++){
					Ful[j].className='';
					this.className='aaaccc';
					Ftab2[0].innerHTML='<img src="images/tabs'+this.index+'.jpg" class="tu">';
					Ftab2[0].style.cursor='pointer';
					var Img=Ftab2[0].getElementsByClassName('tu')[0];
					if(this.index==0){Ftab2[0].innerHTML=html}
				}
			}	
		};
	}
	floortab1('floortab1','floortab2');
	floortab1('floortab11','floortab12');
	floortab1('floortab21','floortab22');
	floortab1('floortab31','floortab32');
	floortab1('floortab41','floortab42');
	function floortab2(obj3,obj4){
		var Ftab3=document.getElementsByClassName(obj3);
		var Ftab4=document.getElementsByClassName(obj4);
		var Full=Ftab3[0].children;
		for(var i=0;i<Full.length;i++){
			Full[i].index=i;
			var htmll=Ftab4[0].innerHTML;
			Full[i].onmouseenter=function(){
				for(var j=0;j<Full.length;j++){
					Full[j].className='';
					this.className='aaaccc';
					Ftab4[0].innerHTML='<img src="images/tabss'+this.index+'.jpg">';
					Ftab4[0].style.cursor='pointer';
					if(this.index==0){Ftab4[0].innerHTML=htmll}
				}
			}	
		};
	}
	floortab2('floortab3','floortab4');
	floortab2('floortab031','floortab041');
	floortab2('floortab032','floortab042');
	floortab2('floortab033','floortab043');
	floortab2('floortab034','floortab044');
	floortab2('floortab035','floortab045');
}
