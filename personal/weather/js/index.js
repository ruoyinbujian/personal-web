/**
 * Created by lili on 2016/10/9 0009.
 */
window.onload = function () {
    var check = document.getElementById("check");
    var cityList = document.getElementById("cityList");
    var oLi = document.getElementsByTagName("li");
    var oBox=document.getElementById('jau');
    var big = document.getElementById('big');
    var cont = document.getElementById('cont');
    var scroller=document.getElementsByClassName('scroll')[0];
    var timer = null;
    check.innerHTML=oLi[0].innerHTML;
    check.onclick = function (e) {
        e.cancelBubble=true;
        oLi[0].style.display="none";
        oBox.style.display = "block";
        tool.scroll(oBox,cityList,scroller);
        //拖拽滚动条
        for (var i = 0; i < oLi.length; i++) {
            oLi[i].onmouseover = function () {
                for (var k = 0; k < oLi.length; k++) {
                    oLi[k].className = "";
                }
                this.className = "activties";
            };
            oLi[i].onclick = function () {
                check.innerHTML = this.innerHTML;
                oBox.style.display = "none";
                return check.innerHTML;
            }
        }
        check.onmouseout = function () {
            oBox.style.display = "none";
        }
    };
    oBox.onmouseenter = function () {
        this.style.display = "block";
    };
    oBox.onmouseleave = function () {
        this.style.display = "none";
    };
    document.getElementById("btn").onclick = function () {
        var city = check.innerHTML;
        if(city=="请选择"){
            alert("请选择您想查询的城市");
            return false;
        }
        var big = document.getElementById('big');
        var n = 0;
        document.getElementById('actor').style.display = "none";
        document.getElementById('cont').innerHTML = "";
        document.getElementById('op').innerHTML = "";
        var content = "";
        document.getElementById('ac').style.display = "block";
        var url = "http://wthrcdn.etouch.cn/weather_mini?city=" + city;
        $.getJSON(url, function (jsArr) {
            clearInterval(timer);
            big.style.width = 133 + "px";
            document.getElementById('actor').style.display = "block";
            document.getElementById('ac').style.display = "";
            content += "<h3>" + city + "天气预报<h3/>";
            content += "<div style='width:2000px'>"
            content += "<ul>";
            content += "<li>" + jsArr.data.yesterday.date + "</li>";
            var icon1 = weather.parseIcon(jsArr.data.yesterday.type);
            content += "<li>" + jsArr.data.yesterday.type + "</li>";
            content += "<li><img src='images/" + icon1 + "'></li>";
            content += "<li>" + jsArr.data.yesterday.fl + "</li>";
            content += "<li>" + jsArr.data.yesterday.fx + "</li>";
            content += "<li>" + jsArr.data.yesterday.high + "</li>";
            content += "<li>" + jsArr.data.yesterday.low + "</li>";
            content += "</ul>";
            for (var i = 0; i < jsArr.data.forecast.length; i++) {
                var jsObj = jsArr.data.forecast[i];
                content += "<ul>";
                content += "<li>" + jsObj.date + "</li>";
                var icon = weather.parseIcon(jsObj.type);
                content += "<li>" + jsObj.type + "</li>"
                content += "<li><img src='images/" + icon + "'></li>";
                content += "<li>" + jsObj.fengxiang + "</li>";
                content += "<li>" + jsObj.fengli + "</li>";
                content += "<li>" + jsObj.high + "</li>";
                content += "<li>" + jsObj.low + "</li>";
                content += "</ul>";

            }
            content+="</div>"
            document.getElementById('op').innerHTML = "<p>" + jsArr.data.ganmao + "</p>";
            document.getElementById('cont').innerHTML = content;
            document.getElementById('actor').style.display = "block";
            timer = setInterval(function () {
                n += 20;
                if (n > 978) {
                    n = 978
                }
                big.style.width = n + "px";
            }, 30)
        })
    }
}