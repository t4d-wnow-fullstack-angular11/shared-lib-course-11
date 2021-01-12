(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@t4d-wnow/shared-lib', ['exports', '@ngrx/store', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['t4d-wnow'] = global['t4d-wnow'] || {}, global['t4d-wnow']['shared-lib'] = {}), global.store, global.ng.core));
}(this, (function (exports, store, i0) { 'use strict';

    var confirmValue = function (firstControlName, secondControlName) { return function (formGroup) {
        var firstControl = formGroup.get(firstControlName);
        var secondControl = formGroup.get(secondControlName);
        if ((firstControl === null || firstControl === void 0 ? void 0 : firstControl.value) !== (secondControl === null || secondControl === void 0 ? void 0 : secondControl.value)) {
            return {
                confirmValue: {
                    firstControlName: firstControlName,
                    firstControlValue: firstControl === null || firstControl === void 0 ? void 0 : firstControl.value,
                    secondControlName: secondControlName,
                    secondControlValue: secondControl === null || secondControl === void 0 ? void 0 : secondControl.value,
                }
            };
        }
        return null;
    }; };

    var setErrorMessage = store.createAction('[App] Set Error Message', store.props());
    var clearErrorMessage = store.createAction('[App] Clear Error Message');

    var SharedLibService = /** @class */ (function () {
        function SharedLibService() {
        }
        return SharedLibService;
    }());
    SharedLibService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SharedLibService_Factory() { return new SharedLibService(); }, token: SharedLibService, providedIn: "root" });
    SharedLibService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SharedLibService.ctorParameters = function () { return []; };

    var SharedLibComponent = /** @class */ (function () {
        function SharedLibComponent() {
        }
        SharedLibComponent.prototype.ngOnInit = function () {
        };
        return SharedLibComponent;
    }());
    SharedLibComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-shared-lib',
                    template: "\n    <p>\n      shared-lib works!\n    </p>\n  "
                },] }
    ];
    SharedLibComponent.ctorParameters = function () { return []; };

    var SharedLibModule = /** @class */ (function () {
        function SharedLibModule() {
        }
        return SharedLibModule;
    }());
    SharedLibModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SharedLibComponent],
                    imports: [],
                    exports: [SharedLibComponent]
                },] }
    ];

    /*
     * Public API Surface of shared-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SharedLibComponent = SharedLibComponent;
    exports.SharedLibModule = SharedLibModule;
    exports.SharedLibService = SharedLibService;
    exports.clearErrorMessage = clearErrorMessage;
    exports.confirmValue = confirmValue;
    exports.setErrorMessage = setErrorMessage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=t4d-wnow-shared-lib.umd.js.map
