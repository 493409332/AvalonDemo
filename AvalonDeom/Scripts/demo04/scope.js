/// <reference path="../avalon/avalon.js" />
//avalon.config({
//    interpolate:["[[","]]"]
//});
 
avalon.filters.myfilters = function (str)
{
    return { "元": "元", "USD": "美元" }[str];
}
avalon.duplexHooks.mylimit =
{
    get: function (str, date)
    {
        var limit = parseFloat(date.element.getAttribute("data-duplex-limit"));
        if (str.length>limit)
        {
            return date.element.value = str.slice(0,limit);
        }
        return str;
    }
}
avalon.ready(function ()
{

    var model = avalon.define({
        $id: "AAA",
        name: "liger",
        color: "green",
        conttent: "<b>呵呵</b>",
        word1: "avalon learning 大写化",
        word2: "AVALON LEARNING 大写化",
        string: "对字符串进行截断1234",
        variavle: "wevkit-box-flex 驼峰处理",
        string2: "<b>类似html格式的字符串进行转义</b>",
        money: 1200536.23152,
        num: 123456456.4511,
        custom: "<i>阿斯达十大大师大师大师大师大师大的撒asdfdfdsfsdf</i>",
        isshow:false
    });
    var model1 = avalon.define({
        $id: "BBB",
        name: "sphinx",
        color: "red"
    });
    var model2 = avalon.define({
        $id: "CCC",
        name: "ccc"
    });
    var model3 = avalon.define({
        $id: "DDD",
        name: "<input/>123123"
    });
    var model4 = avalon.define({
        $id: "EEE",
        name: "eee",
        color: "red"
    });
    avalon.scan();
});



