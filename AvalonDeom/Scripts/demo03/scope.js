/// <reference path="../avalon/avalon.js" />
avalon.ready(function(){
   
 var model=avalon.define({
        $id: "AAA",
        name: "liger",
        color: "green"
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
     name: "ddd" 
 });
 avalon.scan();
});
 