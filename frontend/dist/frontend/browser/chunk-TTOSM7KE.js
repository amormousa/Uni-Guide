import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-ZOJDJSDA.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-XYQGKO6F.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-WSIWHVAO.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/ai-chat/ai-chat.component.ts
var _c0 = ["messagesContainer"];
function AiChatComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.latestAiText, " ");
  }
}
function AiChatComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    \u0275\u0275property("ngClass", msg_r3.sender);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", msg_r3.text, " ");
  }
}
var AiChatComponent = class _AiChatComponent {
  messages = [];
  userInput = "";
  latestAiText = "";
  messagesContainer;
  ngAfterViewInit() {
    this.scrollToBottom();
  }
  sendMessage() {
    if (!this.userInput.trim())
      return;
    this.messages.push({
      text: this.userInput,
      sender: "user"
    });
    setTimeout(() => {
      const aiText = "\u0647\u0630\u0627 \u0646\u0635 \u062B\u0627\u0628\u062A \u064A\u0638\u0647\u0631 \u062F\u0627\u0626\u0645\u0627\u064B \u2728";
      this.messages.push({
        text: aiText,
        sender: "ai"
      });
      this.latestAiText = aiText;
      setTimeout(() => this.scrollToBottom(), 10);
    }, 500);
    this.userInput = "";
    setTimeout(() => this.scrollToBottom(), 10);
  }
  scrollToBottom() {
    try {
      if (this.messagesContainer && this.messagesContainer.nativeElement) {
        const el = this.messagesContainer.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    } catch (e) {
    }
  }
  static \u0275fac = function AiChatComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiChatComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiChatComponent, selectors: [["app-ai-chat"]], viewQuery: function AiChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesContainer = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 3, consts: [["messagesContainer", ""], [1, "container_chat_bot"], ["class", "ai-result", 4, "ngIf"], [1, "messages-container"], ["class", "message", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "container-chat-options", 3, "submit"], [1, "chat"], [1, "chat-bot"], ["id", "chat_bot", "name", "chat_bot", "placeholder", "Imagine Something...\u2726\u02DA", 3, "ngModelChange", "ngModel"], [1, "options"], [1, "btns-add"], ["type", "button"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24"], ["fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"], ["viewBox", "0 0 24 24", "height", "20", "width", "20", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0-8h6m-3-3v6", "stroke-width", "2", "stroke-linejoin", "round", "stroke-linecap", "round", "stroke", "currentColor", "fill", "none"], ["d", "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.01 8.01 0 0 0 5.648 6.667M10.03 13c.151 2.439.848 4.73 1.97 6.752A15.9 15.9 0 0 0 13.97 13zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.01 8.01 0 0 0 19.938 13M4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.01 8.01 0 0 0 4.062 11m5.969 0h3.938A15.9 15.9 0 0 0 12 4.248A15.9 15.9 0 0 0 10.03 11m4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.01 8.01 0 0 0-5.648-6.667", "fill", "currentColor"], ["type", "submit", 1, "btn-submit"], ["viewBox", "0 0 512 512"], ["fill", "currentColor", "d", "M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"], [1, "tags"], [1, "ai-result"], [1, "message", 3, "ngClass"]], template: function AiChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, AiChatComponent_div_1_Template, 2, 1, "div", 2);
      \u0275\u0275elementStart(2, "div", 3, 0);
      \u0275\u0275template(4, AiChatComponent_div_4_Template, 2, 2, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 5);
      \u0275\u0275listener("submit", function AiChatComponent_Template_form_submit_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        ctx.sendMessage();
        return \u0275\u0275resetView($event.preventDefault());
      });
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "textarea", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AiChatComponent_Template_textarea_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.userInput, $event) || (ctx.userInput = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "button", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 12);
      \u0275\u0275element(13, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 14);
      \u0275\u0275element(16, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 14);
      \u0275\u0275element(19, "path", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "button", 17)(21, "i");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 18);
      \u0275\u0275element(23, "path", 19);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "div", 20)(25, "span");
      \u0275\u0275text(26, "Create An Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Analyse Data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "More");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.latestAiText);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.messages);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.userInput);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['\n\n.container_chat_bot[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 900px;\n  padding-top: 300px;\n  width: 100%;\n  justify-content: center;\n  margin: 0 auto;\n}\n.ai-result[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: rgba(27, 27, 27, 0.9);\n  color: #fff;\n  padding: 8px 12px;\n  font-size: 14px;\n  border-bottom: 1px solid #363636;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  z-index: 5;\n}\n.container_chat_bot[_ngcontent-%COMP%]   .container-chat-options[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  background:\n    linear-gradient(\n      to bottom right,\n      #7e7e7e,\n      #363636,\n      #363636,\n      #363636,\n      #363636);\n  border-radius: 16px;\n  padding: 4.5px;\n  overflow: hidden;\n  &::after {\n    position: absolute;\n    content: "";\n    top: -10px;\n    left: -10px;\n    background:\n      radial-gradient(\n        ellipse at center,\n        #ffffff,\n        rgba(255, 255, 255, 0.3),\n        rgba(255, 255, 255, 0.1),\n        rgba(0, 0, 0, 0),\n        rgba(0, 0, 0, 0),\n        rgba(0, 0, 0, 0),\n        rgba(0, 0, 0, 0));\n    width: 30px;\n    height: 30px;\n    filter: blur(1px);\n  }\n}\n.container_chat_bot[_ngcontent-%COMP%]   .container-chat-options[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 15px;\n  width: 100%;\n  overflow: hidden;\n}\n.container_chat_bot[_ngcontent-%COMP%]   .container-chat-options[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n.container_chat_bot[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-radius: 16px;\n  border: none;\n  width: 100%;\n  height: 50px;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  padding: 10px;\n  resize: none;\n  outline: none;\n  min-height: 40px;\n  &::-webkit-scrollbar {\n    width: 10px;\n    height: 10px;\n  }\n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #888;\n    border-radius: 5px;\n  }\n  &::-webkit-scrollbar-thumb:hover {\n    background: #555;\n    cursor: pointer;\n  }\n  &::placeholder {\n    color: #f3f6fd;\n    transition: all 0.3s ease;\n  }\n  &:focus::placeholder {\n    color: #363636;\n  }\n}\n.container_chat_bot[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 10px;\n}\n.container_chat_bot[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .btns-add[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  & button {\n    display: flex;\n    color: rgba(255, 255, 255, 0.1);\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    &:hover {\n      transform: translateY(-5px);\n      color: #ffffff;\n    }\n  }\n}\n.container_chat_bot[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 2px;\n  background-image:\n    linear-gradient(\n      to top,\n      #292929,\n      #555555,\n      #292929);\n  border-radius: 10px;\n  box-shadow: inset 0 6px 2px -4px rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  border: none;\n  outline: none;\n  transition: all 0.15s ease;\n  & i {\n    width: 30px;\n    height: 30px;\n    padding: 6px;\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    backdrop-filter: blur(3px);\n    color: #8b8b8b;\n  }\n  & svg {\n    transition: all 0.3s ease;\n  }\n  &:hover svg {\n    color: #f3f6fd;\n    filter: drop-shadow(0 0 5px #ffffff);\n  }\n  &:focus svg {\n    color: #f3f6fd;\n    filter: drop-shadow(0 0 5px #ffffff);\n    transform: scale(1.2) rotate(45deg) translateX(-2px) translateY(1px);\n  }\n  &:active {\n    transform: scale(0.92);\n  }\n}\n.container_chat_bot[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  padding: 14px 0;\n  display: flex;\n  color: #ffffff;\n  font-size: 10px;\n  gap: 4px;\n  & span {\n    padding: 4px 8px;\n    background-color: #1b1b1b;\n    border: 1.5px solid #363636;\n    border-radius: 10px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    user-select: none;\n  }\n}\n.messages-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 20px;\n  max-height: 500px;\n  overflow-y: auto;\n  padding-top: 42px;\n}\n.message[_ngcontent-%COMP%] {\n  max-width: 75%;\n  padding: 12px 16px;\n  border-radius: 14px;\n  color: white;\n  font-size: 14px;\n  line-height: 1.5;\n  word-break: break-word;\n}\n.message.user[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background: #4a4a4a;\n}\n.message.ai[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  background: #1b1b1b;\n  border: 1px solid #363636;\n}\n/*# sourceMappingURL=ai-chat.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiChatComponent, { className: "AiChatComponent", filePath: "src\\app\\features\\ai-chat\\ai-chat.component.ts", lineNumber: 11 });
})();

// src/app/features/ai-chat/ai-chat.routes.ts
var AI_CHAT_ROUTES = [
  { path: "", component: AiChatComponent }
];
export {
  AI_CHAT_ROUTES
};
//# sourceMappingURL=chunk-TTOSM7KE.js.map
