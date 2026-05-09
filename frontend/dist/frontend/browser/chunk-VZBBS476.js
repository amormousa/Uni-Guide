import {
  BackButtonComponent
} from "./chunk-FNGITEEL.js";
import "./chunk-HLGTMV6D.js";
import {
  AuthService
} from "./chunk-WVGMD5GH.js";
import {
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
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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

// src/app/features/auth/register/register.component.ts
function RegisterComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 ", ctx_r0.successMessage(), " ");
  }
}
function RegisterComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2717 ", ctx_r0.errorMessage(), " ");
  }
}
function RegisterComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
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
function RegisterComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Name must be at least 3 characters ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
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
function RegisterComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const char_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275styleProp("--index", i_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(char_r6);
  }
}
function RegisterComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const char_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275styleProp("--index", i_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(char_r8);
  }
}
function RegisterComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const char_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    \u0275\u0275styleProp("--index", i_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(char_r10);
  }
}
function RegisterComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Password must be at least 8 characters ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const char_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    \u0275\u0275styleProp("--index", i_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(char_r12);
  }
}
function RegisterComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  form;
  loading = signal(false);
  errorMessage = signal(null);
  successMessage = signal(null);
  constructor() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required],
      role: ["student", Validators.required],
      governorate: [""]
    }, { validators: this.passwordMatchValidator });
  }
  passwordMatchValidator(group) {
    const password = group.get("password")?.value;
    const confirmPassword = group.get("confirmPassword")?.value;
    return password !== confirmPassword ? { passwordMismatch: true } : null;
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMessage.set("Please fill in all required fields correctly.");
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    const payload = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      role: this.form.value.role,
      governorate: this.form.value.governorate || void 0
    };
    this.authService.register(payload).subscribe({
      next: (response) => {
        this.successMessage.set(response.message);
        this.loading.set(false);
        setTimeout(() => {
          this.router.navigate(["/auth/otp-verify"], {
            queryParams: { email: this.form.value.email }
          });
        }, 1500);
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set(error.error?.message || "Registration failed. Please try again.");
      }
    });
  }
  getLabelChars(text) {
    return text.split("");
  }
  get passwordMismatch() {
    return (this.form.hasError("passwordMismatch") && this.form.get("confirmPassword")?.touched) ?? false;
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 80, vars: 15, consts: [[1, "auth-page-v2"], [1, "branding-section"], [1, "brand-content"], ["routerLink", "/", 1, "logo"], [1, "fas", "fa-graduation-cap"], [1, "feature-pills"], [1, "pill"], [1, "fas", "fa-check"], [1, "back-button-container"], [1, "brand-bg-glow"], [1, "form-section"], [1, "form-container"], [1, "form-header"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "wave-group"], ["required", "", "type", "text", "formControlName", "name", "placeholder", " ", 1, "input"], [1, "bar"], [1, "label"], ["class", "label-char", 3, "--index", 4, "ngFor", "ngForOf"], ["class", "error-text", 4, "ngIf"], ["required", "", "type", "email", "formControlName", "email", "placeholder", " ", "autocomplete", "email", 1, "input"], ["formControlName", "role", 1, "input"], ["value", "student"], ["value", "parent"], ["value", "admin"], ["type", "text", "formControlName", "governorate", "placeholder", " ", 1, "input"], ["required", "", "type", "password", "formControlName", "password", "placeholder", " ", 1, "input"], ["required", "", "type", "password", "formControlName", "confirmPassword", "placeholder", " ", 1, "input"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [1, "footer-text"], ["routerLink", "/auth/login"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "label-char"], [1, "error-text"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "UniGuide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "Start Your Future with Confidence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Create your account to unlock personalized university recommendations and detailed career roadmaps. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5)(12, "div", 6);
      \u0275\u0275element(13, "i", 7);
      \u0275\u0275text(14, " Free Assessment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6);
      \u0275\u0275element(16, "i", 7);
      \u0275\u0275text(17, " Expert Insights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 6);
      \u0275\u0275element(19, "i", 7);
      \u0275\u0275text(20, " Multi-Campus Explorer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 8);
      \u0275\u0275element(22, "app-back-button");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 10)(25, "div", 11)(26, "div", 12)(27, "h2");
      \u0275\u0275text(28, "Create Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "Join our community of students today");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, RegisterComponent_div_31_Template, 2, 1, "div", 13)(32, RegisterComponent_div_32_Template, 2, 1, "div", 14);
      \u0275\u0275elementStart(33, "form", 15);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_33_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(34, "div", 16);
      \u0275\u0275element(35, "input", 17)(36, "span", 18);
      \u0275\u0275elementStart(37, "label", 19);
      \u0275\u0275template(38, RegisterComponent_span_38_Template, 2, 3, "span", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(39, RegisterComponent_div_39_Template, 2, 0, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 16);
      \u0275\u0275element(41, "input", 22)(42, "span", 18);
      \u0275\u0275elementStart(43, "label", 19);
      \u0275\u0275template(44, RegisterComponent_span_44_Template, 2, 3, "span", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, RegisterComponent_div_45_Template, 2, 0, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 16)(47, "select", 23)(48, "option", 24);
      \u0275\u0275text(49, "Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 25);
      \u0275\u0275text(51, "Parent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 26);
      \u0275\u0275text(53, "Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(54, "span", 18);
      \u0275\u0275elementStart(55, "label", 19);
      \u0275\u0275template(56, RegisterComponent_span_56_Template, 2, 3, "span", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 16);
      \u0275\u0275element(58, "input", 27)(59, "span", 18);
      \u0275\u0275elementStart(60, "label", 19);
      \u0275\u0275template(61, RegisterComponent_span_61_Template, 2, 3, "span", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 16);
      \u0275\u0275element(63, "input", 28)(64, "span", 18);
      \u0275\u0275elementStart(65, "label", 19);
      \u0275\u0275template(66, RegisterComponent_span_66_Template, 2, 3, "span", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(67, RegisterComponent_div_67_Template, 2, 0, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 16);
      \u0275\u0275element(69, "input", 29)(70, "span", 18);
      \u0275\u0275elementStart(71, "label", 19);
      \u0275\u0275template(72, RegisterComponent_span_72_Template, 2, 3, "span", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(73, RegisterComponent_div_73_Template, 2, 0, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 30);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 31);
      \u0275\u0275text(77, " Already have an account? ");
      \u0275\u0275elementStart(78, "a", 32);
      \u0275\u0275text(79, "Sign in");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_6_0;
      let tmp_10_0;
      \u0275\u0275advance(31);
      \u0275\u0275property("ngIf", ctx.successMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.getLabelChars("Full Name"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.form.get("name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("name")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.getLabelChars("Email"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.form.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.form.get("email")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.getLabelChars("Role"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.getLabelChars("Governorate"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.getLabelChars("Password"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.form.get("password")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.form.get("password")) == null ? null : tmp_10_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.getLabelChars("Confirm"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.passwordMismatch);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading() || ctx.form.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Creating Account..." : "Create Account", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, BackButtonComponent], styles: ['\n\n.auth-page-v2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  min-height: 100vh;\n  background: var(--bg);\n  transition: background-color 0.4s ease;\n  overflow: hidden;\n  direction: ltr !important;\n  unicode-bidi: isolate;\n}\n.auth-page-v2[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  direction: ltr !important;\n  text-align: left;\n}\n.auth-page-v2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n@media (max-width: 1024px) {\n  .auth-page-v2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.branding-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--card-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  .branding-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  max-width: 500px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: var(--text);\n  margin-bottom: 40px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #a855f7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 850;\n  line-height: 1.1;\n  margin-bottom: 24px;\n  color: var(--text);\n  letter-spacing: -2px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: var(--text);\n  opacity: 0.6;\n  line-height: 1.6;\n  margin-bottom: 40px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: rgba(var(--text-rgb), 0.05);\n  border: 1px solid var(--border);\n  border-radius: 100px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--accent);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-content[_ngcontent-%COMP%]   .feature-pills[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.branding-section[_ngcontent-%COMP%]   .brand-bg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(67, 135, 244, 0.1) 0%,\n      rgba(168, 85, 247, 0.08) 40%,\n      transparent 70%);\n  border-radius: 50%;\n  top: -100px;\n  left: -100px;\n  filter: blur(80px);\n  animation: _ngcontent-%COMP%_pulse 12s infinite alternate;\n}\n.form-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  background: var(--bg);\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  animation: _ngcontent-%COMP%_slideInRight 0.8s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 850;\n  color: var(--text);\n  margin: 0 0 8px;\n  letter-spacing: -1px;\n}\n.form-section[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text);\n  opacity: 0.5;\n  font-weight: 500;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 12px 0 8px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid var(--border);\n  background: transparent;\n  color: var(--text);\n  transition: all 0.3s;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text);\n  opacity: 0.4;\n  font-size: 16px;\n  font-weight: 600;\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  top: 12px;\n  display: flex;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .label-char[_ngcontent-%COMP%] {\n  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition-delay: calc(var(--index) * 0.03s);\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%]   .label-char[_ngcontent-%COMP%], \n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%]   .label-char[_ngcontent-%COMP%] {\n  transform: translateY(-24px);\n  font-size: 13px;\n  color: var(--accent);\n  opacity: 1;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:before, \n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:after {\n  content: "";\n  height: 2px;\n  width: 0;\n  bottom: 0;\n  position: absolute;\n  background:\n    linear-gradient(\n      to right,\n      var(--accent),\n      #a855f7);\n  transition: 0.4s ease all;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:before {\n  left: 50%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:after {\n  right: 50%;\n}\n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:before, \n.auth-form[_ngcontent-%COMP%]   .wave-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n.auth-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #a855f7);\n  color: white;\n  padding: 16px;\n  border-radius: 14px;\n  font-weight: 800;\n  font-size: 1.1rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  box-shadow: 0 10px 20px rgba(67, 135, 244, 0.2);\n}\n.auth-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 15px 30px rgba(67, 135, 244, 0.3);\n}\n.auth-form[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  margin: 10px 0;\n}\n.auth-form[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text);\n  opacity: 0.3;\n  font-weight: 600;\n  background: var(--bg);\n  padding: 0 15px;\n  position: relative;\n  z-index: 1;\n}\n.auth-form[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: var(--border);\n}\n.auth-form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border-radius: 14px;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--text);\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.auth-form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n}\n.auth-form[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--text-rgb), 0.05);\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.95rem;\n  color: var(--text);\n  opacity: 0.6;\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-weight: 800;\n  text-decoration: none;\n}\n.auth-form[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  from {\n    transform: scale(1);\n    opacity: 0.1;\n  }\n  to {\n    transform: scale(1.1);\n    opacity: 0.2;\n  }\n}\n.back-button-container[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n/*# sourceMappingURL=register.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\features\\auth\\register\\register.component.ts", lineNumber: 22 });
})();

// src/app/features/auth/register/register.routes.ts
var REGISTER_ROUTES = [
  { path: "", component: RegisterComponent }
];
export {
  REGISTER_ROUTES
};
//# sourceMappingURL=chunk-VZBBS476.js.map
