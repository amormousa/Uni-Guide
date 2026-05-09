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
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZOJDJSDA.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WSIWHVAO.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2717 ", ctx_r0.errorMessage(), " ");
  }
}
function LoginComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const char_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275styleProp("--index", i_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(char_r2);
  }
}
function LoginComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const char_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275styleProp("--index", i_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(char_r4);
  }
}
function LoginComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Password must be at least 8 characters ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  form;
  loading = signal(false);
  errorMessage = signal(null);
  constructor() {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMessage.set("Please fill in all fields correctly.");
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    const payload = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.authService.login(payload).subscribe({
      next: () => {
        this.loading.set(false);
        const returnUrl = this.route.snapshot.queryParams["returnUrl"];
        this.router.navigateByUrl(returnUrl || "/dashboard");
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set(error.error?.message || "Login failed. Please check your credentials.");
      }
    });
  }
  getLabelChars(text) {
    return text.split("");
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 8, consts: [[1, "auth-page-v2"], [1, "branding-section"], [1, "brand-content"], ["routerLink", "/", 1, "logo"], [1, "fas", "fa-graduation-cap"], [1, "feature-pills"], [1, "pill"], [1, "fas", "fa-check"], [1, "back-button-container"], [1, "brand-bg-glow"], [1, "form-section"], [1, "form-container"], [1, "form-header"], ["class", "alert alert-error", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "wave-group"], ["required", "", "type", "email", "formControlName", "email", "placeholder", " ", "autocomplete", "email", 1, "input"], [1, "bar"], [1, "label"], ["class", "label-char", 3, "--index", 4, "ngFor", "ngForOf"], ["class", "error-text", 4, "ngIf"], ["required", "", "type", "password", "formControlName", "password", "placeholder", " ", 1, "input"], [1, "form-options"], ["routerLink", "/auth/forgot-password", 1, "forgot"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [1, "footer-text"], ["routerLink", "/auth/register"], [1, "alert", "alert-error"], [1, "label-char"], [1, "error-text"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "UniGuide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "Empowering Your Academic Journey");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Join thousands of students who found their perfect university and career path through our AI-driven insights. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5)(12, "div", 6);
      \u0275\u0275element(13, "i", 7);
      \u0275\u0275text(14, " AI Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6);
      \u0275\u0275element(16, "i", 7);
      \u0275\u0275text(17, " University Match");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 6);
      \u0275\u0275element(19, "i", 7);
      \u0275\u0275text(20, " Career Roadmap");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 8);
      \u0275\u0275element(22, "app-back-button");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 10)(25, "div", 11)(26, "div", 12)(27, "h2");
      \u0275\u0275text(28, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "Enter your details to access your account");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, LoginComponent_div_31_Template, 2, 1, "div", 13);
      \u0275\u0275elementStart(32, "form", 14);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_32_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(33, "div", 15);
      \u0275\u0275element(34, "input", 16)(35, "span", 17);
      \u0275\u0275elementStart(36, "label", 18);
      \u0275\u0275template(37, LoginComponent_span_37_Template, 2, 3, "span", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, LoginComponent_div_38_Template, 2, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 15);
      \u0275\u0275element(40, "input", 21)(41, "span", 17);
      \u0275\u0275elementStart(42, "label", 18);
      \u0275\u0275template(43, LoginComponent_span_43_Template, 2, 3, "span", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, LoginComponent_div_44_Template, 2, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 22)(46, "a", 23);
      \u0275\u0275text(47, "Forgot password?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "button", 24);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p", 25);
      \u0275\u0275text(51, " Don't have an account? ");
      \u0275\u0275elementStart(52, "a", 26);
      \u0275\u0275text(53, "Create one");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_5_0;
      \u0275\u0275advance(31);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.getLabelChars("Email"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.getLabelChars("Password"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading() || ctx.form.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Signing In..." : "Sign In", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, BackButtonComponent], styles: ['\n\n.auth-page-v2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  min-height: 100vh;\n  background: var(--bg);\n  transition: background-color 0.4s ease;\n  overflow: hidden;\n  direction: ltr !important;\n  unicode-bidi: isolate;\n}\n.auth-page-v2[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  direction: ltr !important;\n  text-align: left;\n}\n.auth-page-v2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n@media (max-width: 1024px) {\n  .auth-page-v2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.branding-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--card-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  .branding-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  max-width: 500px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: var(--text);\n  margin-bottom: 40px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #a855f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 850;\n  line-height: 1.1;\n  margin-bottom: 24px;\n  color: var(--text);\n  letter-spacing: -2px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: var(--text);\n  opacity: 0.6;\n  line-height: 1.6;\n  margin-bottom: 40px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: rgba(var(--text-rgb), 0.05);\n  border: 1px solid var(--border);\n  border-radius: 100px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--accent);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(67, 135, 244, 0.1) 0%,\n      rgba(168, 85, 247, 0.08) 40%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -100px;\n  left: -100px;\n  filter: blur(80px);\n  animation: _ngcontent-%COMP%_pulse 12s infinite alternate;\n}\n.form-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  background: var(--bg);\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  animation: _ngcontent-%COMP%_slideInRight 0.8s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 850;\n  color: var(--text);\n  margin: 0 0 8px;\n  letter-spacing: -1px;\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text);\n  opacity: 0.5;\n  font-weight: 500;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 12px 0 8px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid var(--border);\n  background: transparent;\n  color: var(--text);\n  transition: all 0.3s;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text);\n  opacity: 0.4;\n  font-size: 16px;\n  font-weight: 600;\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  top: 12px;\n  display: flex;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .label-char[_ngcontent-%COMP%] {\n  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition-delay: calc(var(--index) * 0.03s);\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%]   .label-char[_ngcontent-%COMP%], \n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%]   .label-char[_ngcontent-%COMP%] {\n  transform: translateY(-24px);\n  font-size: 13px;\n  color: var(--accent);\n  opacity: 1;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:before, \n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:after {\n  content: "";\n  height: 2px;\n  width: 0;\n  bottom: 0;\n  position: absolute;\n  background:\n    linear-gradient(\n      to right,\n      var(--accent),\n      #a855f7);\n  transition: 0.4s ease all;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:before {\n  left: 50%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:after {\n  right: 50%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:before, \n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n.auth-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.9rem;\n  margin-top: -5px;\n}\n.auth-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .remember[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--text);\n  opacity: 0.7;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.auth-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--border);\n  border-radius: 6px;\n  background: transparent;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s;\n}\n.auth-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked {\n  background: var(--accent);\n  border-color: var(--accent);\n}\n.auth-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked::after {\n  content: "\\f00c";\n  font-family: "Font Awesome 6 Free";\n  font-weight: 900;\n  color: white;\n  font-size: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.auth-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n}\n.auth-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .remember[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.auth-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-weight: 700;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.auth-form[_ngcontent-%COMP%]   .form-options[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #a855f7;\n  transform: translateY(-1px);\n}\n.auth-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #a855f7);\n  color: white;\n  padding: 16px;\n  border-radius: 14px;\n  font-weight: 800;\n  font-size: 1.1rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  box-shadow: 0 10px 20px rgba(67, 135, 244, 0.2);\n}\n.auth-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 15px 30px rgba(67, 135, 244, 0.3);\n}\n.auth-form[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  margin: 10px 0;\n}\n.auth-form[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text);\n  opacity: 0.3;\n  font-weight: 600;\n  background: var(--bg);\n  padding: 0 15px;\n  position: relative;\n  z-index: 1;\n}\n.auth-form[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: var(--border);\n}\n.auth-form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border-radius: 14px;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--text);\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.auth-form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n}\n.auth-form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--text-rgb), 0.05);\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.95rem;\n  color: var(--text);\n  opacity: 0.6;\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-weight: 800;\n  text-decoration: none;\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  from {\n    transform: scale(1);\n    opacity: 0.1;\n  }\n  to {\n    transform: scale(1.1);\n    opacity: 0.2;\n  }\n}\n.back-button-container[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login\\login.component.ts", lineNumber: 21 });
})();

// src/app/features/auth/login/login.routes.ts
var LOGIN_ROUTES = [
  { path: "", component: LoginComponent }
];
export {
  LOGIN_ROUTES
};
//# sourceMappingURL=chunk-K2QHJGDC.js.map
