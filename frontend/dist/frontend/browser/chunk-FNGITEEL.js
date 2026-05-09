import {
  CommonModule,
  Location
} from "./chunk-XYQGKO6F.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-WSIWHVAO.js";

// src/app/shared/components/back-button/back-button.component.ts
var BackButtonComponent = class _BackButtonComponent {
  location;
  constructor(location) {
    this.location = location;
  }
  goBack() {
    this.location.back();
  }
  static \u0275fac = function BackButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BackButtonComponent)(\u0275\u0275directiveInject(Location));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BackButtonComponent, selectors: [["app-back-button"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [["type", "button", 1, "back-button-styled", 3, "click"], [1, "icon-container"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1024 1024", "height", "25px", "width", "25px"], ["d", "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z", "fill", "#000000"], ["d", "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z", "fill", "#000000"], [1, "text"]], template: function BackButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function BackButtonComponent_Template_button_click_0_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Go Back");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n.back-button-styled[_ngcontent-%COMP%] {\n  background: #ffffff;\n  text-align: center;\n  width: 12rem;\n  border-radius: 1rem;\n  height: 3.5rem;\n  position: relative;\n  color: #000000;\n  font-size: 1.25rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.back-button-styled[_ngcontent-%COMP%]:hover   .icon-container[_ngcontent-%COMP%] {\n  width: calc(100% - 0.5rem);\n}\n.back-button-styled[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  background: #9ca3af;\n  border-radius: 0.75rem;\n  height: 3rem;\n  width: 25%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 0.25rem;\n  top: 4px;\n  z-index: 10;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.back-button-styled[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin: 0;\n  transform: translateX(0.5rem);\n  pointer-events: none;\n}\n/*# sourceMappingURL=back-button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BackButtonComponent, { className: "BackButtonComponent", filePath: "src\\app\\shared\\components\\back-button\\back-button.component.ts", lineNumber: 11 });
})();

export {
  BackButtonComponent
};
//# sourceMappingURL=chunk-FNGITEEL.js.map
