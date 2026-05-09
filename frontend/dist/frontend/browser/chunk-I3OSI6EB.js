import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-XYQGKO6F.js";
import {
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WSIWHVAO.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/college-explorer/college-explorer.component.ts
function CollegeExplorerComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function CollegeExplorerComponent_div_14_Template_div_click_0_listener() {
      const uni_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectUniversity(uni_r2));
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275element(2, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "span");
    \u0275\u0275element(8, "i", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 20);
    \u0275\u0275element(11, "i", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(13, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const uni_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r2.selectedUniversity == null ? null : ctx_r2.selectedUniversity.id) === uni_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", uni_r2.image, \u0275\u0275sanitizeUrl)("alt", uni_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(uni_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", uni_r2.location, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", uni_r2.rating, "");
  }
}
function CollegeExplorerComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No universities found matching your search.");
    \u0275\u0275elementEnd()();
  }
}
function CollegeExplorerComponent_div_17_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275element(2, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dept_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dept_r4);
  }
}
function CollegeExplorerComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "img", 27)(3, "div", 28);
    \u0275\u0275elementStart(4, "div", 29)(5, "div", 30);
    \u0275\u0275text(6, "Top Rated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275element(10, "i", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 31)(13, "div", 32)(14, "div", 33)(15, "section", 34)(16, "div", 35);
    \u0275\u0275element(17, "i", 36);
    \u0275\u0275elementStart(18, "h2");
    \u0275\u0275text(19, "About Institution");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "section", 37)(23, "div", 35);
    \u0275\u0275element(24, "i", 38);
    \u0275\u0275elementStart(25, "h2");
    \u0275\u0275text(26, "Available Departments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 39);
    \u0275\u0275template(28, CollegeExplorerComponent_div_17_div_28_Template, 5, 1, "div", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "aside", 41)(30, "div", 42)(31, "h3");
    \u0275\u0275text(32, "Interested?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34, "Get full details about admission process and deadlines.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 43);
    \u0275\u0275element(36, "i", 44);
    \u0275\u0275text(37, " Official Website ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 45);
    \u0275\u0275element(39, "i", 46);
    \u0275\u0275text(40, " Add to Favorites ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "div", 47);
    \u0275\u0275elementStart(42, "div", 48)(43, "div", 49);
    \u0275\u0275element(44, "i", 50);
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 49);
    \u0275\u0275element(48, "i", 51);
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("key", ctx_r2.selectedUniversity.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.selectedUniversity.image, \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedUniversity.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedUniversity.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedUniversity.location, ", Pakistan");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.selectedUniversity.description);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.selectedUniversity.departments);
    \u0275\u0275advance(7);
    \u0275\u0275property("href", ctx_r2.selectedUniversity.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.selectedUniversity.phone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedUniversity.email);
  }
}
function CollegeExplorerComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Welcome to UniExplorer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Select a university from the list to view detailed information, departments, and admission links.");
    \u0275\u0275elementEnd()();
  }
}
var CollegeExplorerComponent = class _CollegeExplorerComponent {
  universities = [
    {
      id: 1,
      name: "NUST University",
      image: "https://images.unsplash.com/photo-1541339907198-e08759df9a13?auto=format&fit=crop&w=800&q=80",
      description: "The National University of Sciences & Technology (NUST) is a multi-campus public research university with its main campus in Islamabad. It is known for its excellence in engineering, technology, and sciences.",
      departments: ["Software Engineering", "Electrical Engineering", "Mechanical Engineering", "Business Management", "Applied Biosciences"],
      location: "Islamabad",
      rating: 4.9,
      website: "https://nust.edu.pk",
      email: "admissions@nust.edu.pk",
      phone: "+92 51 9085 0000"
    },
    {
      id: 2,
      name: "LUMS University",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      description: "Lahore University of Management Sciences (LUMS) is one of the top private research universities in Pakistan, offering programs in business, humanities, and sciences.",
      departments: ["Economics", "Computer Science", "Law", "Business Administration", "Social Sciences"],
      location: "Lahore",
      rating: 4.8,
      website: "https://lums.edu.pk",
      email: "admissions@lums.edu.pk",
      phone: "+92 42 3560 8000"
    },
    {
      id: 3,
      name: "FAST-NUCES",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      description: "FAST National University of Computer and Emerging Sciences is a premier university of Pakistan known for the quality of its IT and computing programs.",
      departments: ["Computer Science", "Cyber Security", "Data Science", "Software Engineering", "Artificial Intelligence"],
      location: "Karachi",
      rating: 4.8,
      website: "https://nu.edu.pk",
      email: "info@nu.edu.pk",
      phone: "+92 21 111 128 128"
    },
    {
      id: 4,
      name: "GIKI Institute",
      image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
      description: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI) is one of the most prestigious engineering institutes in Pakistan.",
      departments: ["Materials Engineering", "Computer Engineering", "Engineering Sciences", "Management Sciences", "Electrical Engineering"],
      location: "Swabi",
      rating: 4.7,
      website: "https://giki.edu.pk",
      email: "admissions@giki.edu.pk",
      phone: "+92 938 271858"
    },
    {
      id: 5,
      name: "UET Lahore",
      image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80",
      description: "University of Engineering and Technology (UET) Lahore is a state-owned university located in Lahore, Punjab. It is one of the oldest and most prestigious engineering universities in Pakistan.",
      departments: ["Civil Engineering", "Chemical Engineering", "Petroleum Engineering", "Architecture", "City and Regional Planning"],
      location: "Lahore",
      rating: 4.6,
      website: "https://uet.edu.pk",
      email: "admissions@uet.edu.pk",
      phone: "+92 42 99029216"
    },
    {
      id: 6,
      name: "COMSATS University",
      image: "https://images.unsplash.com/photo-1498243639351-a18274737975?auto=format&fit=crop&w=800&q=80",
      description: "COMSATS University Islamabad is a public research university in Pakistan. It is a multi-campus university which has its main campus in Islamabad.",
      departments: ["Project Management", "Computer Science", "Mathematics", "Bioinformatics", "Physics"],
      location: "Islamabad",
      rating: 4.5,
      website: "https://comsats.edu.pk",
      email: "admissions@comsats.edu.pk",
      phone: "+92 51 9247000"
    },
    {
      id: 7,
      name: "Punjab University",
      image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80",
      description: "The University of the Punjab is a public research university located in Lahore. It is the oldest and largest public sector university in Pakistan.",
      departments: ["English Literature", "Political Science", "Communication Studies", "Zoology", "Sociology"],
      location: "Lahore",
      rating: 4.4,
      website: "https://pu.edu.pk",
      email: "vc@pu.edu.pk",
      phone: "+92 42 99231102"
    }
  ];
  selectedUniversity = null;
  searchTerm = "";
  get filteredUniversities() {
    return this.universities.filter((uni) => uni.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || uni.location.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  ngOnInit() {
    if (this.universities.length > 0) {
      this.selectedUniversity = this.universities[0];
    }
  }
  selectUniversity(uni) {
    this.selectedUniversity = uni;
  }
  onSearch(event) {
    this.searchTerm = event.target.value;
  }
  static \u0275fac = function CollegeExplorerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollegeExplorerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollegeExplorerComponent, selectors: [["app-college-explorer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 5, consts: [[1, "explorer-container"], [1, "sidebar"], [1, "sidebar-header"], [1, "header-top"], [1, "count-badge"], [1, "search-box"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search by name or city...", 3, "input"], [1, "university-list"], ["class", "uni-item", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "detail-view"], ["class", "detail-card", 3, "key", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "uni-item", 3, "click"], [1, "uni-icon"], ["onerror", "this.src='https://images.unsplash.com/photo-1541339907198-e08759df9a13?auto=format&fit=crop&w=100&q=80'", 3, "src", "alt"], [1, "uni-info"], [1, "uni-meta"], [1, "fas", "fa-map-marker-alt"], [1, "rating"], [1, "fas", "fa-star"], [1, "active-indicator"], [1, "no-results"], [1, "fas", "fa-search-minus"], [1, "detail-card", 3, "key"], [1, "detail-image"], ["onerror", "this.src='https://images.unsplash.com/photo-1541339907198-e08759df9a13?auto=format&fit=crop&w=1000&q=80'", 3, "src", "alt"], [1, "image-overlay"], [1, "title-overlay"], [1, "uni-badge"], [1, "detail-content"], [1, "content-grid"], [1, "main-info"], [1, "about-section"], [1, "section-title"], [1, "fas", "fa-info-circle"], [1, "departments-section"], [1, "fas", "fa-th-large"], [1, "dept-grid"], ["class", "dept-card", 4, "ngFor", "ngForOf"], [1, "quick-actions"], [1, "action-card"], ["target", "_blank", 1, "apply-btn", 3, "href"], [1, "fas", "fa-external-link-alt"], [1, "save-btn"], [1, "far", "fa-heart"], [1, "divider"], [1, "contact-info"], [1, "info-item"], [1, "fas", "fa-phone"], [1, "fas", "fa-envelope"], [1, "dept-card"], [1, "dept-icon"], [1, "fas", "fa-graduation-cap"], [1, "empty-state"], [1, "animated-icon"], [1, "fas", "fa-university"]], template: function CollegeExplorerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
      \u0275\u0275text(5, "Universities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Explore top institutions in Pakistan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5);
      \u0275\u0275element(11, "i", 6);
      \u0275\u0275elementStart(12, "input", 7);
      \u0275\u0275listener("input", function CollegeExplorerComponent_Template_input_input_12_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275template(14, CollegeExplorerComponent_div_14_Template, 14, 7, "div", 9)(15, CollegeExplorerComponent_div_15_Template, 4, 0, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "main", 11);
      \u0275\u0275template(17, CollegeExplorerComponent_div_17_Template, 51, 10, "div", 12)(18, CollegeExplorerComponent_div_18_Template, 7, 0, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.filteredUniversities.length, " found");
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.filteredUniversities);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredUniversities.length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedUniversity);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedUniversity);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.explorer-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 70px);\n  background: var(--bg);\n  overflow: hidden;\n  font-family: "Inter", sans-serif;\n  direction: ltr !important;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 400px;\n  background: var(--card-bg);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  box-shadow: 4px 0 25px rgba(0, 0, 0, 0.03);\n  z-index: 10;\n  transition: background-color 0.4s ease;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 32px 24px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.75rem;\n  color: var(--text);\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 4px 10px;\n  background: var(--accent);\n  color: white;\n  border-radius: 100px;\n  font-weight: 600;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: var(--text);\n  opacity: 0.6;\n  font-size: 0.9rem;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text);\n  opacity: 0.4;\n  font-size: 0.9rem;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px 12px 44px;\n  border-radius: 12px;\n  border: 1px solid var(--border);\n  background: var(--bg);\n  color: var(--text);\n  font-size: 0.95rem;\n  transition: all 0.3s;\n  outline: none;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 4px rgba(67, 135, 244, 0.1);\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border);\n  border-radius: 10px;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  margin-bottom: 12px;\n  border-radius: 16px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid transparent;\n  position: relative;\n  background: transparent;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item.active[_ngcontent-%COMP%] {\n  background: var(--bg);\n  border-color: var(--accent);\n  box-shadow: 0 8px 25px rgba(67, 135, 244, 0.08);\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item.active[_ngcontent-%COMP%]   .uni-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item.active[_ngcontent-%COMP%]   .uni-icon[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item.active[_ngcontent-%COMP%]   .active-indicator[_ngcontent-%COMP%] {\n  height: 30px;\n  opacity: 1;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item[_ngcontent-%COMP%]   .active-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 0;\n  background: var(--accent);\n  border-radius: 0 4px 4px 0;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item[_ngcontent-%COMP%]   .uni-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  overflow: hidden;\n  margin-right: 16px;\n  border: 2px solid var(--border);\n  flex-shrink: 0;\n  background: white;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item[_ngcontent-%COMP%]   .uni-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item[_ngcontent-%COMP%]   .uni-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item[_ngcontent-%COMP%]   .uni-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--text);\n  transition: color 0.3s;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item[_ngcontent-%COMP%]   .uni-info[_ngcontent-%COMP%]   .uni-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item[_ngcontent-%COMP%]   .uni-info[_ngcontent-%COMP%]   .uni-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text);\n  opacity: 0.5;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item[_ngcontent-%COMP%]   .uni-info[_ngcontent-%COMP%]   .uni-meta[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  opacity: 1;\n  font-weight: 700;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--text);\n  opacity: 0.5;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 40px;\n  background: var(--bg);\n  position: relative;\n  transition: background-color 0.4s ease;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  background: var(--card-bg);\n  border-radius: 32px;\n  overflow: hidden;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-image[_ngcontent-%COMP%] {\n  height: 400px;\n  position: relative;\n  overflow: hidden;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 1.2s ease;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-image[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent 30%,\n      rgba(0, 0, 0, 0.8));\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-image[_ngcontent-%COMP%]   .title-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  left: 40px;\n  right: 40px;\n  color: white;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-image[_ngcontent-%COMP%]   .title-overlay[_ngcontent-%COMP%]   .uni-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--accent);\n  padding: 6px 14px;\n  border-radius: 100px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 12px rgba(67, 135, 244, 0.3);\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-image[_ngcontent-%COMP%]   .title-overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 3.5rem;\n  font-weight: 900;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n  line-height: 1;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-image[_ngcontent-%COMP%]   .title-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 1.25rem;\n  opacity: 0.9;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 50px;\n}\n@media (max-width: 1200px) {\n  .explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  color: var(--accent);\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: var(--text);\n  font-weight: 800;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text);\n  opacity: 0.7;\n  line-height: 1.8;\n  font-size: 1.1rem;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .dept-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 20px;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .dept-grid[_ngcontent-%COMP%]   .dept-card[_ngcontent-%COMP%] {\n  background: var(--bg);\n  padding: 20px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border: 1px solid var(--border);\n  transition: all 0.3s;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .dept-grid[_ngcontent-%COMP%]   .dept-card[_ngcontent-%COMP%]:hover {\n  background: var(--card-bg);\n  border-color: var(--accent);\n  transform: translateY(-3px) scale(1.02);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.03);\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .dept-grid[_ngcontent-%COMP%]   .dept-card[_ngcontent-%COMP%]   .dept-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: rgba(67, 135, 244, 0.1);\n  color: var(--accent);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .dept-grid[_ngcontent-%COMP%]   .dept-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text);\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%] {\n  background: var(--bg);\n  padding: 32px;\n  border-radius: 24px;\n  border: 1px solid var(--border);\n  position: sticky;\n  top: 100px;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--text);\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text);\n  opacity: 0.6;\n  margin-bottom: 24px;\n  line-height: 1.5;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border-radius: 14px;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 12px;\n  border: none;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   button.apply-btn[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n  box-shadow: 0 4px 15px rgba(67, 135, 244, 0.3);\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   button.apply-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  transform: scale(1.02);\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   button.save-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--border);\n  color: var(--text);\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   button.save-btn[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border);\n  margin: 24px 0;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: var(--text);\n  opacity: 0.7;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n  width: 20px;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .animated-icon[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  background: rgba(67, 135, 244, 0.05);\n  border-radius: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 32px;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .animated-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--accent);\n  opacity: 0.8;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--text);\n  margin: 0 0 16px;\n}\n.explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text);\n  opacity: 0.6;\n  line-height: 1.6;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(5deg);\n  }\n}\n@media (max-width: 992px) {\n  .explorer-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n  }\n  .explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    border-right: none;\n    border-bottom: 1px solid var(--border);\n  }\n  .explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    padding: 16px;\n  }\n  .explorer-container[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .university-list[_ngcontent-%COMP%]   .uni-item[_ngcontent-%COMP%] {\n    min-width: 280px;\n    margin-bottom: 0;\n    margin-right: 16px;\n    flex-shrink: 0;\n  }\n  .explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-image[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-image[_ngcontent-%COMP%]   .title-overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .explorer-container[_ngcontent-%COMP%]   .detail-view[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n}\n/*# sourceMappingURL=college-explorer.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollegeExplorerComponent, { className: "CollegeExplorerComponent", filePath: "src\\app\\features\\college-explorer\\college-explorer.component.ts", lineNumber: 24 });
})();

// src/app/features/college-explorer/college-explorer.routes.ts
var COLLEGE_EXPLORER_ROUTES = [
  { path: "", component: CollegeExplorerComponent }
];
export {
  COLLEGE_EXPLORER_ROUTES
};
//# sourceMappingURL=chunk-I3OSI6EB.js.map
