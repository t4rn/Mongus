
(function () {

    "use strict";

    angular.module("app").directive("openOnFocus", openOnFocus);

    function openOnFocus() {
        return {
            scope: true,
            restrict: 'A',
            link: function (scope, elem, attr) {

                scope.showOptions = true;
                let lock = false;

                if ((attr['mdOnClose'])) {
                    attr['mdOnClose'] = "showOptions=false;" + (attr['mdOnClose']);
                } else {
                    (attr['mdOnClose']) = "showOptions=false;"
                }

                elem.on('focus', function (event) {
                    lock = false;

                    if (scope.showOptions) {
                        //console.log("[focus] launching click event!");
                        elem.triggerHandler('click');
                    }
                    else {
                        //console.log("[focus] doing nothing...");
                    }
                });

                elem.on('click', function (event) {
                    if (lock) {
                        event.stopImmediatePropagation();
                    }
                    else {
                        lock = true;
                    }
                });


                elem.on('blur', function () {
                    scope.showOptions = true;
                });
            }
        };
    };

})();