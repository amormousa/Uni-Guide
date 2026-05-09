import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-WSIWHVAO.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/onboarding/onboarding.component.ts
var OnboardingComponent = class _OnboardingComponent {
  static \u0275fac = function OnboardingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OnboardingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OnboardingComponent, selectors: [["app-onboarding"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 0, consts: [[1, "onboarding-slides"], [1, "dots"], [1, "dot"], [1, "slide-content"], [1, "actions"], [1, "btn-text"], [1, "btn-primary"]], template: function OnboardingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2)(3, "span", 2)(4, "span", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275element(6, "h2")(7, "p");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
      \u0275\u0275text(10, "\u062A\u062E\u0637\u064A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275text(12, "\u0627\u0644\u062A\u0627\u0644\u064A");
      \u0275\u0275elementEnd()()();
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n}\n/*# sourceMappingURL=onboarding.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OnboardingComponent, { className: "OnboardingComponent", filePath: "src\\app\\features\\onboarding\\onboarding.component.ts", lineNumber: 10 });
})();

// src/app/features/onboarding/onboarding.routes.ts
var ONBOARDING_ROUTES = [
  { path: "", component: OnboardingComponent }
];
export {
  ONBOARDING_ROUTES
};
//# sourceMappingURL=chunk-FJRTYGQB.js.map
