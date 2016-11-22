/**
 * Created by hxsd on 2016/10/7.
 */
var $ = {
    ajax: function (url, success, error) {
        // var xhr = new XMLHttpRequest();
        var xhr=this.createXHR();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (success) success(xhr.responseText)
                } else if (xhr.status == 404) {
                    if (error) error(xhr.status)
                }
            }
        };
        xhr.send(null);
    },
    getJSON: function (url, success) {
        // var xhr = new XMLHttpRequest();
        var xhr=this.createXHR();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (success) {
                        success(JSON.parse(xhr.responseText))
                    }
                }
            }
        };
        xhr.send(null);
    },
    createXHR: function () {
        var xhr;
        try {
            xhr = new XMLHttpRequest();
        } catch (e) {
            try {
                xhr = new ActiveXObject("Msxm12.XMLHTTP");
            } catch (e) {
                try {
                    xhr = new ActiveXObject("Mircosoft.XMLHTTP");
                } catch (e) {
                    xhr = null;
                }
            }
        }
        return xhr;
    }
};
var weather = {
    parseIcon: function (wName) {
        var icons = {
            "晴": "0.gif",
            "多云": "1.gif",
            "阴": "2.gif",
            "小雨": "7.gif",
            "阵雨": "4.gif",
            "雷阵雨": "4.gif",
            "大雨":"9.gif",
            "中雨":"8.gif",
            "小到中雨":"8.gif",
            "中到大雨":"9.gif"
        };
        return icons[wName] || "nothing.gif"
    }
};