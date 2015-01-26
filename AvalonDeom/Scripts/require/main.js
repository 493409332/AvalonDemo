/// <reference path="require.js" />
/// <reference path="../avalon/avalon.js" />

require.config({
    baseUrl: '',
    paths: {
        avalon: "/Scripts/avalon/avalon",
        jquery: "/Scripts/jquery-1.7.1",
         text: "/Scripts/require/text" 
    },
    priority: ["text", "css"],
    shim:{
        jquery: { exports: "jquery" },
        avalon: { exports: "avalon" }
    }
});
require(["avalon"], function ()
{ 
    avalon.log("加载其他完毕！");
    avalon.templateCache.empty = "&nbsp;<a>123</a>";
    avalon.define({
        $id: "root",
        header: "这是根模块，用于放置其他模块公用的东西，比如<b>用户名</b>",
        footer: "页脚消息",
        page: "empty"
    }); 
    avalon.scan(document.body);
    avalon.log("1");
    require(['/Scripts/require/aaa.js'], function ()
    {
        avalon.log("2");
        avalon.log("加载其他完毕");
    });
});