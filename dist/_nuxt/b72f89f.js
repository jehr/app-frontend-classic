(window.webpackJsonp=window.webpackJsonp||[]).push([[20,5,6,10,11,12,13,14],{887:function(t,e,n){"use strict";n.d(e,"b",(function(){return x})),n.d(e,"h",(function(){return O})),n.d(e,"d",(function(){return C})),n.d(e,"a",(function(){return _})),n.d(e,"g",(function(){return j})),n.d(e,"e",(function(){return S})),n.d(e,"f",(function(){return D})),n.d(e,"c",(function(){return V}));n(6),n(5),n(8),n(9),n(7),n(10);var r=n(12),o=n(1),c=(n(57),n(36),n(58),n(26),n(3)),l=n(99),d=n(100),f=n(336),v=n(335),m=n(334);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function x(t){var title=t&&t.id?"Editar Citación":"Crear Citación",e=y({},t||l.a);Object(c.j)("citation","editedCitation",e),Object(c.h)(title,"isFormCitation",!0)}function O(t){Object(c.h)("Subir Documento","isFormUploadDocument",!0)}function C(t){var title=t&&t.id?"Editar Citación":"Crear Citación",e=y({},t||d.a);Object(c.j)("suitableCitation","editedSuitableCitation",e),Object(c.h)(title,"isFormSuitableCitation",!0)}function _(t){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(regeneratorRuntime.mark((function t(e){var title,n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(title=e&&e.id?"Datos Basicos":"Crear Citación",n=y({},v.a),""===e.document){t.next=10;break}return t.next=5,m.a.get.dataDocument(e.document);case 5:r=t.sent,o=y({},r||v.a),console.log("Document lector",r),Object(c.j)("aspirant","editedAspirant",o),n=y(y(y({},o),{},{dateOfBirth:!1!==r?w(o.dateOfBirth):o.dateOfBirth,dateOfIssue:!1!==r?w(o.dateOfIssue):o.dateOfIssue,firstSurname:o.firstSurName,secondSurname:o.secondSurName,cityDateOfIssue:o.cityDateOfIssue},e),{},{stateOfIssue:o.cityDateOfIssue});case 10:l=y({},n||d.a),Object(c.j)("suitableCitation","editedSuitableCitation",l),Object(c.h)(title,"isAptoCreate",!0);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){var e=t.split("-");return e.length>3?"".concat(e[2],"-").concat(e[1],"-").concat(e[0]):t}function j(data){var t=y({},data||d.a);Object(c.j)("suitableCitation","editedSuitableCitation",t),Object(c.h)("Editar Citación Adecuada","isFormSuitable",!0)}function S(t){Object(c.j)("citation","editedCitation",t),Object(c.h)("Detalle de la citación","isShowCitation",!0)}function D(t){Object(c.j)("citation","editedCitation",t),Object(c.h)("Detalle citación no asiste","isShowCitationAssistance",!0)}function V(t){var title=t&&t.id?"Editar Selecciuón":"Crear Selección Personal",e=y({},t||f.a);Object(c.j)("selection","editedSelection",e),Object(c.h)(title,"isFormSelection",!0)}},888:function(t,e,n){"use strict";var r=n(2);e.a=r.a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},890:function(t,e,n){var content=n(891);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("e6b013ca",content,!0,{sourceMap:!1})},891:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0;padding:0 16px}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}",""]),t.exports=r},892:function(t,e,n){var content=n(900);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("8973cd00",content,!0,{sourceMap:!1})},893:function(t,e,n){var content=n(902);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("f764c32e",content,!0,{sourceMap:!1})},895:function(t,e,n){"use strict";n.r(e);n(6),n(5),n(8),n(9),n(7),n(10);var r=n(1),o=n(12),c=(n(57),n(28)),l=n(3),d=n(56),f=n(887),v=n(99);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={props:{citation:{type:Object,required:!0,default:function(){return v.a}},document:{type:String,required:!0,default:""}},asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get.all();case 2:return e=t.sent,t.abrupt("return",{citations:e||[]});case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{CitationController:d.a,userValid:!1,recruitmentValid:!0}},computed:h(h({},Object(c.b)("app",["user"])),{},{customId:function(){return this.citation.id},customStatus:function(){return this.citation.active},customTipification:function(){return this.citation.typification}}),methods:{validateAccess:l.k,crudShowCitation:f.e,showCitation:f.f,uploadIdentificationDocument:f.h,crudCreatesuitableCitation:f.d,updatesuitableCitation:f.g,crudAptoCreateOrUpdate:f.a,getRecruiment:d.a.get.byRecruiment,getDataSuitable:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRecruiment(t.citation.recruitmentId);case 2:n=e.sent,data=n.data,t.updatesuitableCitation(data);case 5:case"end":return e.stop()}}),e)})))()},validExistUserInSuitable:function(t){var e=this;return this.getRecruiment(this.citation.recruitmentId).then((function(n){d.a.get.suitableByDocument(t).then((function(t){t.result||null===e.citation.typification?e.userValid=e.citation.statusOfManagement:20===e.citation.typification.id&&(e.userValid=!1),!n.result&&null!==e.citation.typification&&e.citation.statusOfManagement?1!==e.citation.typification.id?e.recruitmentValid=!1:e.recruitmentValid=!0:e.userValid=e.citation.statusOfManagement}))})),this.recruitmentValid?this.userValid:this.recruitmentValid},duplicate:function(data){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!data.id){t.next=3;break}return t.next=3,d.a.get.duplicate(data.id);case 3:case"end":return t.stop()}}),t)})))()}}},x=n(11),O=n(30),C=n.n(O),_=n(321),k=n(222),w=n(315),j=n(184),S=n(71),D=n(160),V=n(323),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-2 d-flex align-center",staticStyle:{width:"100%"}},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),n("v-list",{attrs:{dense:"",flat:"",color:"white"}},[t.validExistUserInSuitable(t.document)?t._e():n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.crudAptoCreateOrUpdate(t.citation)}}},[n("v-list-item-icon",{staticClass:"mr-3"},[n("v-icon",{attrs:{color:"success",small:""}},[t._v("\n            mdi-check-bold\n          ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Apto")])],1)],1),t._v(" "),t.validExistUserInSuitable(t.document)?n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.getDataSuitable()}}},[n("v-list-item-icon",{staticClass:"mr-3"},[n("v-icon",{attrs:{color:"gray",small:""}},[t._v("\n            mdi-account-edit\n          ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Editar")])],1)],1):t._e(),t._v(" "),n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.crudShowCitation(t.citation)}}},[n("v-list-item-icon",{staticClass:"mr-3"},[n("v-icon",{attrs:{color:"red",small:""}},[t._v("\n            mdi-close-circle\n          ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("No Apto")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.showCitation(t.citation)}}},[n("v-list-item-icon",{staticClass:"mr-3"},[n("v-icon",{attrs:{color:"grey",small:""}},[t._v("\n            mdi-account-remove\n          ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("No Asiste")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.duplicate(t.citation)}}},[n("v-list-item-icon",{staticClass:"mr-3"},[n("v-icon",{attrs:{color:"warning",small:""}},[t._v("\n            mdi-content-duplicate\n          ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Duplicado")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;C()(component,{VBtn:_.a,VIcon:k.a,VList:w.a,VListItem:j.a,VListItemContent:S.a,VListItemIcon:D.a,VListItemTitle:S.b,VMenu:V.a})},896:function(t,e,n){"use strict";n.r(e);var r={props:{status:Boolean,color:{type:Object,default:function(){return{background:"gray darken-4",textColor:"black",dark:!1}}},text:{type:String,default:"Sin definir"}}},o=n(11),c=n(30),l=n.n(c),d=n(225),f=n(222),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-chip",{staticClass:"font-weight-bold my-2 mx-3",class:[t.color.textColor+"--text"],attrs:{color:t.color.background,dark:t.color.dark,small:""}},[n("v-icon",{attrs:{"x-small":"",left:""}},[t._v("\n    "+t._s(t.text?"mdi-arrow-up-bold-circle":"mdi-arrow-down-bold-circle")+"\n  ")]),t._v(" "),n("small",{domProps:{textContent:t._s(t.text)}})],1)}),[],!1,null,"57a60314",null);e.default=component.exports;l()(component,{VChip:d.a,VIcon:f.a})},897:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{empty:!1}},methods:{start:function(){this.empty=!0}}},o=n(11),c=n(30),l=n.n(c),d=n(876),f=n(234),v=n(877),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-center justify-center",staticStyle:{width:"100%",height:"80vh"}},[n("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"3"}},[n("v-img",{attrs:{src:"/img/empty.svg","max-width":"270"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"my-5"},[t._v("\n        No se ha encontrado información.\n      ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VImg:f.a,VRow:v.a})},899:function(t,e,n){"use strict";n(892)},900:function(t,e,n){var r=n(13)(!1);r.push([t.i,".custom-table table td{font-size:.6rem!important}",""]),t.exports=r},901:function(t,e,n){"use strict";n(893)},902:function(t,e,n){var r=n(13)(!1);r.push([t.i,".gp-btn-float[data-v-b46109dc]{z-index:200;position:fixed;bottom:7%;right:2%}",""]),t.exports=r},903:function(t,e,n){"use strict";var r=n(1),o=(n(34),n(192),n(37),n(33),n(890),n(62)),c=n(119),l=n(888),d=n(120),f=n(4);e.a=Object(f.a)(c.a,o.a,l.a).extend({name:"v-speed-dial",directives:{ClickOutside:d.a},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(r.a)(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(r.a)(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,n=[],data={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(data.on.mouseenter=function(){return e.isActive=!0},data.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var r=0;n=(this.$slots.default||[]).map((function(b,i){return!b.tag||void 0===b.componentOptions||"v-btn"!==b.componentOptions.Ctor.options.name&&"v-tooltip"!==b.componentOptions.Ctor.options.name?(b.key=i,b):(r++,t("div",{style:{transitionDelay:.05*r+"s"},key:i},[b]))}))}var o=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},n);return t("div",data,[this.$slots.activator,o])}})},909:function(t,e,n){"use strict";n.r(e);var r={props:{items:{type:Array,required:!0},headers:{type:Array,required:!0},search:{type:String,default:""},primaryColor:{type:String,default:""},secondaryColor:{type:String,default:""},noDataText:{type:String,default:""},noResultText:{type:String,default:""},customClass:{type:String,default:""},footerProps:{type:Object,required:!1,default:function(){return{disableItemsPerPage:!1,itemsPerPageText:"Filas por página",itemsPerPageAllText:"Todos"}}},showExpand:Boolean,dense:Boolean,dark:Boolean}},o=(n(899),n(11)),c=n(30),l=n.n(c),d=n(939),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{class:[""+t.primaryColor,t.customClass?t.customClass:"","text-uppercase"],attrs:{items:t.items,headers:t.headers,dark:t.dark,"no-data-text":t.noDataText,"no-results-text":t.noResultText,"footer-props":t.footerProps,"item-key":"id",dense:t.dense,search:t.search,"show-expand":t.showExpand},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("header",null,{items:t.items})]},proxy:!0},{key:"item.selected",fn:function(e){var n=e.item;return[t._t("selected",null,{category:n})]}},{key:"item.tipificacion.name",fn:function(e){var n=e.item;return[t._t("typification",null,{category:n})]}},{key:"item.typification",fn:function(e){var n=e.item;return[t._t("typification",null,{category:n})]}},{key:"item.lectorCC",fn:function(e){var n=e.item;return[t._t("lectorCC",null,{category:n})]}},{key:"item.status",fn:function(e){var n=e.item;return[t._t("status",null,{category:n})]}},{key:"item.createdAt",fn:function(e){var n=e.item;return[t._v("\n    "+t._s(t.$moment(n.createdAt).format("MMMM Do YYYY, h:mm"))+"\n  ")]}},{key:"item.rdate",fn:function(e){var n=e.item;return[t._v("\n    "+t._s(t.$moment(n.rdate).format("MMMM Do YYYY"))+"\n  ")]}},{key:"item.active",fn:function(e){var n=e.item;return[t._t("status",null,{skill:n})]}},{key:"item.actions",fn:function(e){var n=e.item;return[t._t("actions",null,{category:n})]}},{key:"expanded-item",fn:function(e){var r=e.headers,o=e.item;return[n("td",{staticClass:"pa-5",attrs:{colspan:r.length}},[n("div",{staticClass:"d-flex flex-column"},[n("div",[n("small",[t._v("Observación del Agente")]),t._v(" "),n("br"),t._v("\n          "+t._s(o.entryObservation)+"\n        ")]),t._v(" "),n("div",{staticClass:"mt-10"},[n("small",[t._v("Script Automatico")]),t._v(" "),n("br"),t._v("\n          "+t._s(o.entryObservation2)+"\n        ")])])])]}}],null,!0)})}),[],!1,null,null,null);e.default=component.exports;l()(component,{VDataTable:d.a})},910:function(t,e,n){"use strict";n.r(e);var r={methods:{crudCreateOrUpdateCitation:n(887).b}},o=n(11),c=n(30),l=n.n(c),d=n(321),f=n(876),v=n(222),m=n(234),h=n(877),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"text-center pt-10 my-10",attrs:{justify:"center"}},[n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"12"}},[n("v-img",{attrs:{src:"/undraw/citation/empty-state.svg","max-width":"350"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[n("p",{staticClass:"my-5"},[t._v("\n      No se han encontrado citaciones previas, por favor consulte o adicione\n      citaciones nuevas\n    ")]),t._v(" "),n("v-btn",{staticClass:"text-none",attrs:{color:"secondary",black:"",dark:"",rounded:""},on:{click:function(e){return t.crudCreateOrUpdateCitation()}}},[n("v-icon",{attrs:{left:"",small:""}},[t._v("\n        mdi-plus\n      ")]),t._v("\n      Crear citación\n    ")],1)],1)],1)}),[],!1,null,"60b8c9d1",null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:f.a,VIcon:v.a,VImg:m.a,VRow:h.a})},911:function(t,e,n){"use strict";n.r(e);var r=n(887),o=n(99),c={data:function(){return{citation:o.c,option:!1}},methods:{crudCreateOrUpdateCitation:r.b,refreshCitation:function(){this.$emit("refreshCitations")}}},l=(n(901),n(11)),d=n(30),f=n.n(d),v=n(321),m=n(222),h=n(903),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-speed-dial",{staticClass:"gp-btn-float",attrs:{transition:"slide-y-reverse-transition",direction:"top",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{color:"primary",dark:"",fab:""},model:{value:t.option,callback:function(e){t.option=e},expression:"option"}},[t.option?n("v-icon",[t._v("\n          mdi-close\n        ")]):n("v-icon",[t._v("\n          mdi-dots-vertical\n        ")])],1)]},proxy:!0}]),model:{value:t.option,callback:function(e){t.option=e},expression:"option"}},[t._v(" "),n("v-btn",{attrs:{color:"blue",fab:"",dark:"",small:""},on:{click:function(e){return t.refreshCitation()}}},[n("v-icon",[t._v("mdi-autorenew")])],1),t._v(" "),n("v-btn",{attrs:{color:"success",fab:"",dark:"",small:""},on:{click:function(e){return t.crudCreateOrUpdateCitation()}}},[n("v-icon",[t._v("mdi-plus")])],1)],1)],1)}),[],!1,null,"b46109dc",null);e.default=component.exports;f()(component,{VBtn:v.a,VIcon:m.a,VSpeedDial:h.a})},912:function(t,e,n){"use strict";n.r(e);n(15);var r={props:{primaryColor:{type:String,default:""},secondaryColor:{type:String,default:""},value:{type:Number,default:0},width:{type:String,default:"0"},title:{type:String,default:""},icon:{type:String,default:""},dark:Boolean}},o=n(11),c=n(30),l=n.n(c),d=n(52),f=n(222),v=n(863),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",{attrs:{color:"white",width:t.$vuetify.breakpoint.width>600?"135":t.width,"show-content":"","show-header":"",elevation:"7"}},[n("template",{slot:"header"},[n("v-card-title",[n("h6",{class:[t.primaryColor+"--text  font-weight-bold"],domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),t.$vuetify.breakpoint.width>600?n("v-icon",{attrs:{small:"",color:t.secondaryColor},domProps:{textContent:t._s(t.icon)}}):t._e()],1)],1),t._v(" "),n("template",{slot:"content"},[n("h2",{class:[t.primaryColor+"--text mx-4"],domProps:{textContent:t._s(t.value)}})])],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Card:n(240).default}),l()(component,{VCardTitle:d.c,VIcon:f.a,VSpacer:v.a})},944:function(t,e,n){"use strict";n.r(e);n(6),n(9),n(7),n(10);var r=n(16),o=n(1),c=n(12),l=(n(8),n(36),n(337),n(69),n(5),n(73),n(57),n(28)),d=n(39),f=n(909),v=n(3),m=n(895),h=n(334),y=n(56),x=n(887),O=n(99),C=n(910),_=n(911),k=n(912);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={components:{EmptyState:C.default,Actions:m.default,Options:_.default,Overview:k.default,Table:f.default},layout:"layoutAdmin",middleware:["set-endpoint","not-auth-admin"],asyncData:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get.all();case 2:return e=t.sent,t.abrupt("return",{citations:e||[]});case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{citations:[],typeSearch:"",search:"",headers:[{text:"Documento",align:"start",value:"document"},{text:"Nombre",align:"start",value:"fullName"},{text:"Telefono",align:"start",value:"phone_1"},{text:"Fecha",align:"start",value:"rdate"},{text:"Hora",align:"start",value:"hourOfCitation"},{text:"Campaña Presence",align:"start",value:"campaignName"},{text:"Campaña",align:"start",value:"cited_Uno27"},{text:"Cargo",align:"start",value:"interestedType"},{text:"Tipificación",align:"center",value:"typification"},{text:"Estado",align:"center",value:"status"},{text:"Lector CC",align:"center",value:"lectorCC"},{text:"Acciones",value:"actions",sortable:!1}]}},head:function(){return{title:"Citaciones"}},computed:j(j(j(j({},Object(l.b)("app",["isPosting"])),Object(l.b)("citation",["editedCitation"])),Object(v.d)(Object(r.a)(O.b),{path:"citation",mut:"citation/setProperty"})),{},{activeUsers:function(){return Object(r.a)(this.citations).filter((function(t){return t.statusOfManagement})).length},inactiveUsers:function(){return Object(r.a)(this.citations).filter((function(t){return!t.statusOfManagement})).length},totalUsers:function(){return this.activeUsers+this.inactiveUsers}}),watch:{search:function(t){this.search=t.trim().toUpperCase()}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initialize();case 2:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.$off("refresh-citation");case 2:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;d.c.show("Estamos subiendo el documento, espere por favor..."),this.$nuxt.$on("refresh-citation",(function(){t.reciveRefresh()}))},methods:{crudShowCitation:x.e,queryByDocument:h.a.get.dataDocument,crudCreateOrUpdateCitation:x.b,uploadIdentificationDocument:x.h,getCitations:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.search,"phone"!==e.typeSearch){n.next=7;break}return n.next=4,y.a.get.byPhone(t,r);case 4:e.citations=n.sent,n.next=20;break;case 7:if("document"!==e.typeSearch){n.next=13;break}return n.next=10,y.a.get.byDocument(t,r);case 10:e.citations=n.sent,n.next=20;break;case 13:if("name"!==e.typeSearch){n.next=19;break}return n.next=16,y.a.get.byName(t,r);case 16:e.citations=n.sent,n.next=20;break;case 19:d.c.show("Estamos consultando la información, espere por favor...");case 20:case"end":return n.stop()}}),n)})))()},clearSearch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.typeSearch="",t.search="",e.next=4,y.a.get.all();case 4:t.citations=e.sent;case 5:case"end":return e.stop()}}),e)})))()},onEvents:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.$on("refresh-category",(function(e){t.getCitations(e.loading)}));case 2:case"end":return e.stop()}}),e)})))()},initialize:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.onEvents();case 2:return e.next=4,t.getCitations();case 4:case"end":return e.stop()}}),e)})))()},getState:function(t){return t.isDuplicated?"Duplicado":t.statusOfManagement?"Gestionado":"Pendiente"},getColor:function(t){return t.isDuplicated?{background:"red darken-1",textColor:"white",dark:!0}:t.statusOfManagement?{background:"green darken-1",textColor:"white",dark:!0}:{background:"orange darken-1",textColor:"white",dark:!0}},getTipification:function(t){return t.typification?t.typification.description:"Sin Tipificación"},getColorTipification:function(t){return t.typification?{background:"light-blue lighten-1",textColor:"white",dark:!0}:{background:"grey lighten-1",textColor:"white",dark:!0}},openModalLector:function(t){this.uploadIdentificationDocument()},validLectorDocument:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.queryByDocument(t);case 2:if(!n.sent){n.next=7;break}return n.abrupt("return","green darken-1");case 7:return n.abrupt("return","blue darken-1");case 8:case"end":return n.stop()}}),n)})))()},reciveRefresh:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get.all();case 2:n=e.sent,t.citations=n;case 4:case"end":return e.stop()}}),e)})))()}}},D=n(11),V=n(30),P=n.n(V),R=n(321),E=n(316),I=n(225),A=n(876),T=n(865),M=n(222),U=n(877),$=n(46),B=n(65),component=Object(D.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{"order-lg":"1","order-md":"1","order-sm":"1",order:"2",cols:"12",xl:"3",lg:"3",md:"3",sm:"6",xs:"6"}},[n("v-select",{attrs:{"menu-props":{top:!1,offsetY:!0},"prepend-inner-icon":"mdi-filter-outline",label:"Tipo de filtro",items:[{name:"Nombre",value:"name"},{name:"Documento",value:"document"},{name:"Teléfono",value:"phone"}],"item-color":"primary","item-value":"value",color:"primary",outlined:"",rounded:"",dense:"","hide-details":""},scopedSlots:t._u([{key:"selection",fn:function(data){return[n("v-chip",{attrs:{color:"primary",small:"",dark:""}},[t._v("\n            "+t._s(data.item.name)+"\n          ")])]}},{key:"item",fn:function(data){return[n("small",{staticClass:"text--secondary"},[t._v("\n            "+t._s(data.item.name)+"\n          ")])]}}]),model:{value:t.typeSearch,callback:function(e){t.typeSearch=e},expression:"typeSearch"}})],1),t._v(" "),n("v-col",{attrs:{"order-lg":"2","order-md":"2","order-sm":"2",order:"3",cols:"12",xl:"3",lg:"3",md:"3",sm:"6",xs:"6"}},[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar por filtro seleccionado",color:"five","hide-details":"",outlined:"",rounded:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-col",{attrs:{"order-lg":"3","order-md":"3","order-sm":"3",order:"4",cols:"12",xl:"2",lg:"2",md:"2",sm:"4",xs:"12"}},[t.search&&t.typeSearch?n("v-btn",{staticClass:"mt-1",attrs:{color:"secondary",dark:"",rounded:"",small:""},on:{click:t.getCitations}},[t._v("\n        Buscar\n      ")]):t._e(),t._v(" "),t.search&&t.typeSearch&&t.citations.length>0?n("v-btn",{staticClass:"mt-1",attrs:{color:"grey",dark:"",rounded:"",small:""},on:{click:t.clearSearch}},[t._v("\n        Limpiar\n      ")]):t._e()],1),t._v(" "),n("v-col",{staticClass:"d-flex flex-row justify-center",attrs:{"order-lg":"4","order-md":"4","order-sm":"4",order:"1",cols:"12",xl:"4",lg:"4",md:"4",sm:"8",xs:"12"}},[n("Overview",{attrs:{value:t.activeUsers,"secondary-color":"secondary",icon:"mdi-arrow-up-bold","primary-color":"primary",title:"Gestionados",width:"115",dark:""}}),t._v(" "),n("Overview",{staticClass:"mx-2",attrs:{value:t.inactiveUsers,icon:"mdi-arrow-down-bold","secondary-color":"secondary","primary-color":"primary",title:"Pendientes",width:"115",dark:""}}),t._v(" "),n("Overview",{attrs:{value:t.totalUsers,icon:"mdi-swap-vertical-bold","secondary-color":"secondary","primary-color":"primary",width:"115",title:"Total",dark:""}})],1)],1),t._v(" "),t.citations.length>0?n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-card",{staticClass:"rounded-xl pa-5",attrs:{elevation:"10",outlined:""}},[n("Table",{attrs:{items:t.citations,headers:t.headers,"primary-color":"white"},scopedSlots:t._u([{key:"lectorCC",fn:function(e){var r=e.category;return[n("span",{attrs:{hidden:""}},[t._v(t._s(t.validLectorDocument(r.document))+" ")]),t._v(" "),n("v-icon",{attrs:{color:"blue"},on:{click:function(e){return t.openModalLector(r)}}},[t._v("\n              mdi-barcode-scan\n            ")])]}},{key:"interestedType",fn:function(e){var r=e.category;return[n("ChipState",{attrs:{text:t.getTipification(r),color:t.getColorTipification(r)}})]}},{key:"typification",fn:function(e){var r=e.category;return[n("ChipState",{attrs:{text:t.getTipification(r),color:t.getColorTipification(r)}})]}},{key:"status",fn:function(e){var r=e.category;return[n("ChipState",{attrs:{text:t.getState(r),color:t.getColor(r)}})]}},{key:"actions",fn:function(t){return[n("Actions",{attrs:{citation:t.category,document:t.category.document}})]}}],null,!1,3527915809)})],1)],1),t._v(" "),n("Options",{on:{refreshCitations:t.reciveRefresh}})],1):n("EmptyState")],1)}),[],!1,null,null,null);e.default=component.exports;P()(component,{ChipState:n(896).default,EmptyState:n(897).default}),P()(component,{VBtn:R.a,VCard:E.a,VChip:I.a,VCol:A.a,VContainer:T.a,VIcon:M.a,VRow:U.a,VSelect:$.a,VTextField:B.a})}}]);