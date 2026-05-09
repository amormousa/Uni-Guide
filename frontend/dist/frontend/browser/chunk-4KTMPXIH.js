import {
  BackButtonComponent
} from "./chunk-FNGITEEL.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-P3545PBL.js";
import {
  CommonModule,
  NgForOf
} from "./chunk-XYQGKO6F.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-WSIWHVAO.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const char_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275styleProp("--index", i_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(char_r1);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  getLabelChars(text) {
    return text.split("");
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 1, consts: [[1, "auth-page-v2"], [1, "branding-section"], [1, "brand-content"], ["routerLink", "/", 1, "logo"], [1, "fas", "fa-graduation-cap"], [1, "feature-pills"], [1, "pill"], [1, "fas", "fa-magic"], [1, "fas", "fa-user-shield"], [1, "fas", "fa-headset"], [1, "back-button-container"], [1, "brand-bg-glow"], [1, "form-section"], [1, "form-container"], [1, "form-header"], [1, "icon-circle"], [1, "fas", "fa-key"], [1, "auth-form"], [1, "wave-group"], ["required", "", "type", "email", 1, "input"], [1, "bar"], [1, "label"], ["class", "label-char", 3, "--index", 4, "ngFor", "ngForOf"], ["type", "submit", "routerLink", "/auth/otp", 1, "submit-btn"], [1, "footer-text"], ["routerLink", "/auth/login"], [1, "label-char"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "UniGuide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "Account Recovery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Don't worry, it happens to the best of us. Just enter your email and we'll help you get back on track.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5)(12, "div", 6);
      \u0275\u0275element(13, "i", 7);
      \u0275\u0275text(14, " Quick Recovery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6);
      \u0275\u0275element(16, "i", 8);
      \u0275\u0275text(17, " Secure Reset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 6);
      \u0275\u0275element(19, "i", 9);
      \u0275\u0275text(20, " 24/7 Support");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 10);
      \u0275\u0275element(22, "app-back-button");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 13)(26, "div", 14)(27, "div", 15);
      \u0275\u0275element(28, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h2");
      \u0275\u0275text(30, "Forgot Password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "No stress! Enter your email to reset it.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "form", 17)(34, "div", 18);
      \u0275\u0275element(35, "input", 19)(36, "span", 20);
      \u0275\u0275elementStart(37, "label", 21);
      \u0275\u0275template(38, ForgotPasswordComponent_span_38_Template, 2, 3, "span", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "button", 23);
      \u0275\u0275text(40, "Send Reset Link");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p", 24);
      \u0275\u0275text(42, " Remember your password? ");
      \u0275\u0275elementStart(43, "a", 25);
      \u0275\u0275text(44, "Sign in");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(38);
      \u0275\u0275property("ngForOf", ctx.getLabelChars("Email Address"));
    }
  }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink, BackButtonComponent], styles: ['\n\n.auth-page-v2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  min-height: 100vh;\n  background: var(--bg);\n  transition: background-color 0.4s ease;\n  overflow: hidden;\n  direction: ltr !important;\n  unicode-bidi: isolate;\n}\n.auth-page-v2[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  direction: ltr !important;\n  text-align: left;\n}\n.auth-page-v2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n@media (max-width: 1024px) {\n  .auth-page-v2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.branding-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--card-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  .branding-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  max-width: 500px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: var(--text);\n  margin-bottom: 40px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #a855f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 850;\n  line-height: 1.1;\n  margin-bottom: 24px;\n  color: var(--text);\n  letter-spacing: -2px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: var(--text);\n  opacity: 0.6;\n  line-height: 1.6;\n  margin-bottom: 40px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: rgba(var(--text-rgb), 0.05);\n  border: 1px solid var(--border);\n  border-radius: 100px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--accent);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(67, 135, 244, 0.1) 0%,\n      rgba(168, 85, 247, 0.08) 40%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -100px;\n  left: -100px;\n  filter: blur(80px);\n  animation: _ngcontent-%COMP%_pulse 12s infinite alternate;\n}\n.form-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  background: var(--bg);\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  animation: _ngcontent-%COMP%_slideInRight 0.8s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  text-align: center;\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: rgba(var(--accent-rgb, 67, 135, 244), 0.1);\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  font-size: 1.8rem;\n  color: var(--accent);\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 850;\n  color: var(--text);\n  margin: 0 0 8px;\n  letter-spacing: -1px;\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text);\n  opacity: 0.5;\n  font-weight: 500;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 12px 0 8px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid var(--border);\n  background: transparent;\n  color: var(--text);\n  transition: all 0.3s;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text);\n  opacity: 0.4;\n  font-size: 16px;\n  font-weight: 600;\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  top: 12px;\n  display: flex;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .label-char[_ngcontent-%COMP%] {\n  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition-delay: calc(var(--index) * 0.03s);\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%]   .label-char[_ngcontent-%COMP%], \n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%]   .label-char[_ngcontent-%COMP%] {\n  transform: translateY(-24px);\n  font-size: 13px;\n  color: var(--accent);\n  opacity: 1;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:before, \n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:after {\n  content: "";\n  height: 2px;\n  width: 0;\n  bottom: 0;\n  position: absolute;\n  background:\n    linear-gradient(\n      to right,\n      var(--accent),\n      #a855f7);\n  transition: 0.4s ease all;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:before {\n  left: 50%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:after {\n  right: 50%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:before, \n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n.auth-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #a855f7);\n  color: white;\n  padding: 16px;\n  border-radius: 14px;\n  font-weight: 800;\n  font-size: 1.1rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  box-shadow: 0 10px 20px rgba(67, 135, 244, 0.2);\n  margin-top: 10px;\n}\n.auth-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 15px 30px rgba(67, 135, 244, 0.3);\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.95rem;\n  color: var(--text);\n  opacity: 0.6;\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-weight: 800;\n  text-decoration: none;\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  from {\n    transform: scale(1);\n    opacity: 0.1;\n  }\n  to {\n    transform: scale(1.1);\n    opacity: 0.2;\n  }\n}\n.back-button-container[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src\\app\\features\\auth\\forgot-password\\forgot-password.component.ts", lineNumber: 15 });
})();

// src/app/features/auth/forgot-password/forgot-password.routes.ts
var FORGOT_PASSWORD_ROUTES = [
  {
    path: "",
    component: ForgotPasswordComponent
  }
];
export {
  FORGOT_PASSWORD_ROUTES
};
//# sourceMappingURL=chunk-4KTMPXIH.js.map
