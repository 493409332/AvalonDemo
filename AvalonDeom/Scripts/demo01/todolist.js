﻿/// <reference path="../avalon/avalon.js" />
var vm = avalon.define({
    $id: "todos",
    txt: "",
    todolist: [],
    add: function (e)
    { 
        e.preventDefault();
        !!vm.txt.trim() && vm.todolist.push(vm.txt);
        vm.txt = "";
    }
});