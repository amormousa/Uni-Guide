import {
  BackButtonComponent
} from "./chunk-FNGITEEL.js";
import {
  AuthService
} from "./chunk-WVGMD5GH.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-P3545PBL.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-XYQGKO6F.js";
import {
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WSIWHVAO.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/otp-verify/otp-verify.component.ts
var _c0 = () => [0, 1, 2, 3, 4, 5];
function OtpVerifyComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage(), " ");
  }
}
function OtpVerifyComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function OtpVerifyComponent_input_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 31, 0);
    \u0275\u0275listener("input", function OtpVerifyComponent_input_39_Template_input_input_0_listener($event) {
      const index_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onInput($event, index_r3));
    })("keydown", function OtpVerifyComponent_input_39_Template_input_keydown_0_listener($event) {
      const index_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event, index_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const index_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.otpValues()[index_r3]);
  }
}
var OtpVerifyComponent = class _OtpVerifyComponent {
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  otpValues = signal(["", "", "", "", "", ""]);
  loading = signal(false);
  errorMessage = signal(null);
  successMessage = signal(null);
  /** Email address passed from the registration page via query param */
  emailAddress = signal("");
  resendTimer = signal(0);
  constructor() {
    this.emailAddress.set(this.route.snapshot.queryParams["email"] || "");
    this.startResendTimer();
  }
  onInput(event, index) {
    const val = event.target.value.replace(/\D/g, "").slice(0, 1);
    event.target.value = val;
    const arr = [...this.otpValues()];
    arr[index] = val;
    this.otpValues.set(arr);
    if (val && index < 5) {
      const nextInput = event.target.nextElementSibling;
      if (nextInput)
        nextInput.focus();
    }
  }
  onKeyDown(event, index) {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      const prevInput = event.target.previousElementSibling;
      if (prevInput)
        prevInput.focus();
    }
  }
  onPaste(event) {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData("text") ?? "").replace(/\D/g, "").slice(0, 6);
    const arr = ["", "", "", "", "", ""];
    pasted.split("").forEach((ch, i) => {
      arr[i] = ch;
    });
    this.otpValues.set(arr);
  }
  onVerify() {
    const otp = this.otpValues().join("");
    if (otp.length !== 6) {
      this.errorMessage.set("Please enter the complete 6-digit OTP.");
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    const payload = {
      email: this.emailAddress(),
      code: otp
    };
    this.authService.verifyOtp(payload).subscribe({
      next: () => {
        this.loading.set(false);
        this.successMessage.set("\u2713 Email verified! Redirecting to dashboard\u2026");
        setTimeout(() => {
          this.router.navigate(["/dashboard"]);
        }, 2e3);
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set(error.error?.message || "OTP verification failed. Please try again.");
      }
    });
  }
  onResend() {
    if (this.resendTimer() > 0)
      return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.authService.sendOtp({ email: this.emailAddress() }).subscribe({
      next: () => {
        this.loading.set(false);
        this.successMessage.set("\u2713 A new OTP was sent to your email.");
        this.otpValues.set(["", "", "", "", "", ""]);
        this.startResendTimer();
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set(error.error?.message || "Failed to resend OTP. Please try again.");
      }
    });
  }
  startResendTimer() {
    this.resendTimer.set(60);
    const timer = setInterval(() => {
      this.resendTimer.update((val) => val - 1);
      if (this.resendTimer() === 0)
        clearInterval(timer);
    }, 1e3);
  }
  static \u0275fac = function OtpVerifyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtpVerifyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpVerifyComponent, selectors: [["app-otp-verify"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 10, consts: [["otpInput", ""], [1, "auth-page-v2"], [1, "branding-section"], [1, "brand-content"], ["routerLink", "/", 1, "logo"], [1, "fas", "fa-graduation-cap"], [1, "feature-pills"], [1, "pill"], [1, "fas", "fa-shield-alt"], [1, "fas", "fa-lock"], [1, "fas", "fa-user-check"], [1, "back-button-container"], [1, "brand-bg-glow"], [1, "form-section"], [1, "form-container"], [1, "form-header"], [1, "icon-circle"], [1, "fas", "fa-envelope-open-text"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit"], [1, "otp-inputs", 3, "paste"], ["type", "text", "inputmode", "numeric", "maxlength", "1", "class", "otp-field", 3, "value", "input", "keydown", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [1, "resend-text"], ["href", "javascript:void(0)", 3, "click"], [1, "footer-text"], ["routerLink", "/auth/login"], [1, "fas", "fa-arrow-left"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], ["type", "text", "inputmode", "numeric", "maxlength", "1", 1, "otp-field", 3, "input", "keydown", "value"]], template: function OtpVerifyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "i", 5);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "UniGuide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "Security is Our Top Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " We've sent a 6-digit verification code to your email address. Please enter it below to verify your identity and activate your account. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7);
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275text(14, " Secure Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7);
      \u0275\u0275element(16, "i", 9);
      \u0275\u0275text(17, " Privacy Protected");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 7);
      \u0275\u0275element(19, "i", 10);
      \u0275\u0275text(20, " Identity Verified ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 11);
      \u0275\u0275element(22, "app-back-button");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 13)(25, "div", 14)(26, "div", 15)(27, "div", 16);
      \u0275\u0275element(28, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h2");
      \u0275\u0275text(30, "Verify OTP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "We sent a code to ");
      \u0275\u0275elementStart(33, "strong");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(35, OtpVerifyComponent_div_35_Template, 2, 1, "div", 18)(36, OtpVerifyComponent_div_36_Template, 2, 1, "div", 19);
      \u0275\u0275elementStart(37, "form", 20);
      \u0275\u0275listener("ngSubmit", function OtpVerifyComponent_Template_form_ngSubmit_37_listener() {
        return ctx.onVerify();
      });
      \u0275\u0275elementStart(38, "div", 21);
      \u0275\u0275listener("paste", function OtpVerifyComponent_Template_div_paste_38_listener($event) {
        return ctx.onPaste($event);
      });
      \u0275\u0275template(39, OtpVerifyComponent_input_39_Template, 2, 1, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 23);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p", 24);
      \u0275\u0275text(43, " Didn't receive the code? ");
      \u0275\u0275elementStart(44, "a", 25);
      \u0275\u0275listener("click", function OtpVerifyComponent_Template_a_click_44_listener() {
        return ctx.onResend();
      });
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "p", 26)(47, "a", 27);
      \u0275\u0275element(48, "i", 28);
      \u0275\u0275text(49, " Back to Login");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(34);
      \u0275\u0275textInterpolate(ctx.emailAddress());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Verifying..." : "Verify & Proceed", " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", ctx.resendTimer() > 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.resendTimer() > 0 ? "Resend in " + ctx.resendTimer() + "s" : "Resend Code", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, BackButtonComponent], styles: ["\n\n.auth-page-v2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  min-height: 100vh;\n  background: var(--bg);\n  transition: background-color 0.4s ease;\n  overflow: hidden;\n  direction: ltr !important;\n  unicode-bidi: isolate;\n}\n.auth-page-v2[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  direction: ltr !important;\n  text-align: left;\n}\n.auth-page-v2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n@media (max-width: 1024px) {\n  .auth-page-v2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.branding-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--card-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  .branding-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  max-width: 500px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: var(--text);\n  margin-bottom: 40px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #a855f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 850;\n  line-height: 1.1;\n  margin-bottom: 24px;\n  color: var(--text);\n  letter-spacing: -2px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: var(--text);\n  opacity: 0.6;\n  line-height: 1.6;\n  margin-bottom: 40px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: rgba(var(--text-rgb), 0.05);\n  border: 1px solid var(--border);\n  border-radius: 100px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--accent);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(67, 135, 244, 0.1) 0%,\n      rgba(168, 85, 247, 0.08) 40%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -100px;\n  left: -100px;\n  filter: blur(80px);\n  animation: _ngcontent-%COMP%_pulse 12s infinite alternate;\n}\n.form-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  background: var(--bg);\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  animation: _ngcontent-%COMP%_slideInRight 0.8s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  text-align: center;\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: rgba(var(--accent-rgb, 67, 135, 244), 0.1);\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  font-size: 1.8rem;\n  color: var(--accent);\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 850;\n  color: var(--text);\n  margin: 0 0 8px;\n  letter-spacing: -1px;\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text);\n  opacity: 0.5;\n  font-weight: 500;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.auth-form[_ngcontent-%COMP%]   .otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n.auth-form[_ngcontent-%COMP%]   .otp-inputs[_ngcontent-%COMP%]   .otp-field[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 64px;\n  background: rgba(var(--text-rgb), 0.03);\n  border: 2px solid var(--border);\n  border-radius: 14px;\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--text);\n  transition: all 0.3s;\n}\n.auth-form[_ngcontent-%COMP%]   .otp-inputs[_ngcontent-%COMP%]   .otp-field[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent);\n  background: var(--bg);\n  box-shadow: 0 0 0 4px rgba(var(--accent-rgb, 67, 135, 244), 0.1);\n  transform: translateY(-2px);\n}\n.auth-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #a855f7);\n  color: white;\n  padding: 16px;\n  border-radius: 14px;\n  font-weight: 800;\n  font-size: 1.1rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  box-shadow: 0 10px 20px rgba(67, 135, 244, 0.2);\n  margin-top: 10px;\n}\n.auth-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 15px 30px rgba(67, 135, 244, 0.3);\n}\n.auth-form[_ngcontent-%COMP%]   .resend-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.95rem;\n  color: var(--text);\n  opacity: 0.6;\n}\n.auth-form[_ngcontent-%COMP%]   .resend-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-weight: 800;\n  text-decoration: none;\n}\n.auth-form[_ngcontent-%COMP%]   .resend-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.95rem;\n  color: var(--text);\n  opacity: 0.6;\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-weight: 700;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  from {\n    transform: scale(1);\n    opacity: 0.1;\n  }\n  to {\n    transform: scale(1.1);\n    opacity: 0.2;\n  }\n}\n.back-button-container[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n/*# sourceMappingURL=otp-verify.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpVerifyComponent, { className: "OtpVerifyComponent", filePath: "src\\app\\features\\auth\\otp-verify\\otp-verify.component.ts", lineNumber: 17 });
})();

// src/app/features/auth/otp-verify/otp-verify.routes.ts
var OTP_VERIFY_ROUTES = [
  {
    path: "",
    component: OtpVerifyComponent
  }
];
export {
  OTP_VERIFY_ROUTES
};
//# sourceMappingURL=chunk-K72QRHSA.js.map
