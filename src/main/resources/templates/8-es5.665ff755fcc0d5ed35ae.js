(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{YFeA:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t("CcnG"),u=t("t/Na"),i=function(){function n(n){this.httpClient=n}return n.prototype.getCities=function(n){return this.httpClient.get(n)},n.prototype.getCitiesByStateId=function(n){return this.httpClient.get(n)},n.ngInjectableDef=e["\u0275\u0275defineInjectable"]({factory:function(){return new n(e["\u0275\u0275inject"](u.c))},token:n,providedIn:"root"}),n}()},dkQB:function(n,l,t){"use strict";t.d(l,"n",function(){return e}),t.d(l,"j",function(){return u}),t.d(l,"f",function(){return i}),t.d(l,"i",function(){return r}),t.d(l,"l",function(){return o}),t.d(l,"k",function(){return a}),t.d(l,"m",function(){return c}),t.d(l,"d",function(){return s}),t.d(l,"e",function(){return d}),t.d(l,"c",function(){return p}),t.d(l,"p",function(){return f}),t.d(l,"b",function(){return g}),t.d(l,"a",function(){return m}),t.d(l,"g",function(){return v}),t.d(l,"o",function(){return y}),t.d(l,"h",function(){return h}),t.d(l,"q",function(){return C});var e="api/v1/product/",u="api/v1/inventory/",i="api/v1/category/",r="api/v1/currency/",o="api/v1/manufacturer/",a="api/v1/manufacturer_address_type/",c="api/v1/order/",s="api/v1/cart/",d="api/v1/cart_status/",p="api/v1/cart_address/",f="api/v1/tax_rate/",g="api/v1/address_type/",m="api/v1/address/",v="api/v1/city/",y="api/v1/state/",h="api/v1/country/",C="api/v1/user_profile/"},z5l6:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){return function(){}}(),i=t("pMnS"),r=t("Ip0R"),o=t("YFeA"),a=t("dkQB"),c=t("AytR"),s=function(){function n(n){this.cityService=n}return n.prototype.ngOnInit=function(){this.pageNumber=0,this.pageSize=10,this.getCities()},n.prototype.getCities=function(){var n=this;return this.cityService.getCities(c.a.SERVER_URL+a.g+"list?pageNumber="+this.pageNumber+"&pageSize="+this.pageSize).subscribe(function(l){n.cities=l.content,n.totalPages=l.totalPages},function(n){return console.error(n)},function(){return console.log("Cities retrieved from backend")}),this.cities},n.prototype.getNextCities=function(){this.pageNumber>=this.totalPages?this.pageNumber=this.totalPages:this.pageNumber++,this.getCities()},n.prototype.getPreviousCities=function(){this.pageNumber<=0?this.pageNumber=0:this.pageNumber--,this.getCities()},n.prototype.getFirstPageCities=function(){this.pageNumber=0,this.getCities()},n.prototype.cityDataAvailable=function(){return void 0!==this.cities},n}(),d=e["\u0275crt"]({encapsulation:0,styles:[["table[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:15px}"]],data:{}});function p(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,6,"tr",[],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e["\u0275ted"](2,null,["",""])),(n()(),e["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e["\u0275ted"](4,null,["",""])),(n()(),e["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e["\u0275ted"](6,null,["",""]))],null,function(n,l){n(l,2,0,l.context.$implicit.id),n(l,4,0,l.context.$implicit.name),n(l,6,0,l.context.$implicit.state.name)})}function f(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,14,"div",[],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,9,"table",[["style","text-align: center"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,6,"tr",[],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Id"])),(n()(),e["\u0275eld"](5,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["name"])),(n()(),e["\u0275eld"](7,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["State Name"])),(n()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](10,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](11,0,null,null,3,"div",[["style","margin: 30px"]],null,null,null,null,null)),(n()(),e["\u0275eld"](12,0,null,null,0,"input",[["class"," btn btn-primary"],["style","margin: 30px"],["type","button"],["value","Home"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.getFirstPageCities()&&e),e},null,null)),(n()(),e["\u0275eld"](13,0,null,null,0,"input",[["class"," btn btn-primary"],["style","margin: 30px"],["type","button"],["value","Back"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.getPreviousCities()&&e),e},null,null)),(n()(),e["\u0275eld"](14,0,null,null,0,"input",[["class"," btn btn-primary"],["style","margin: 30px"],["type","button"],["value","Next"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.getNextCities()&&e),e},null,null))],function(n,l){n(l,10,0,l.component.cities)},null)}function g(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","container-fluid container"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Cities List"])),(n()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](4,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,4,0,l.component.cityDataAvailable())},null)}function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-city",[],null,null,null,g,d)),e["\u0275did"](1,114688,null,0,s,[o.a],null,null)],function(n,l){n(l,1,0)},null)}var v=e["\u0275ccf"]("app-city",s,m,{},{},[]),y=t("gIcY"),h=t("ZYCi"),C=t("eH2H"),b=function(){return function(){}}();t.d(l,"CityModuleNgFactory",function(){return _});var _=e["\u0275cmf"](u,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,v]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[e.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,y.FormBuilder,y.FormBuilder,[]),e["\u0275mpd"](4608,y["\u0275angular_packages_forms_forms_o"],y["\u0275angular_packages_forms_forms_o"],[]),e["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),e["\u0275mpd"](1073742336,y["\u0275angular_packages_forms_forms_d"],y["\u0275angular_packages_forms_forms_d"],[]),e["\u0275mpd"](1073742336,y.ReactiveFormsModule,y.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,h.q,h.q,[[2,h.v],[2,h.m]]),e["\u0275mpd"](1073742336,b,b,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](1024,h.i,function(){return[[{path:"",component:s,canActivate:[C.a]}]]},[])])})}}]);