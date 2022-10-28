System.register("module", [], function (exports_1, context_1) {
    "use strict";
    var hi;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("hi", hi = "你好");
        }
    };
});
System.register("app", ["module"], function (exports_2, context_2) {
    "use strict";
    var module_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (module_1_1) {
                module_1 = module_1_1;
            }
        ],
        execute: function () {
            console.log(module_1.hi);
        }
    };
});
