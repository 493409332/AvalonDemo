/// <reference path="require.js" />
/// <reference path="../avalon/avalon.js" />
//define(["avalon", "text!./aaa.html"], function (avalon, aaa)
define(["avalon", "text!/Deom01/Index"], function (avalon, aaa)
{ 
    //avalon.log(aaa);
    avalon.templateCache.aaa = aaa;
    avalon.define({
        $id: "aaa",
        username:"司徒"
    });
    avalon.vmodels.root.page = "aaa";
});
//define([], function ()
//{

//    alert(1);
//});