(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{941:function(e,t,n){"use strict";n.r(t);var r,o=n(12),c=(n(57),n(26),n(38)),l=n(3),d=n(39),f={get:{getByDay:(r=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,data,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},Object(l.a)(c.a),console.log(n),t&&d.c.show("Estamos consultando la información, espere por favor..."),e.next=6,$nuxt.$api.$get("base?createdAfter=".concat(n));case 6:if(!(data=e.sent)){e.next=9;break}return e.abrupt("return",data);case 9:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}},m={layout:"layoutAdmin",middleware:["set-endpoint","not-auth-admin"],data:function(){return{menu:!1,activePicker:null,dateBase:""}},methods:{generateBase:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.dateBase,n.next=3,f.get.getByDay(e,r);case 3:(data=n.sent)&&data.url&&(window.open("".concat(c.b,"/").concat(data.url),"_blank"),t.dateBase="");case 5:case"end":return n.stop()}}),n)})))()}}},v=n(11),k=n(30),w=n.n(k),x=n(321),B=n(876),y=n(865),h=n(884),_=n(323),C=n(877),O=n(65),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"mt-10",attrs:{align:"end"}},[n("v-col",{staticClass:"d-flex flex-row",attrs:{cols:"3","offset-md":"3"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Ingrese una fecha para generar la base","prepend-inner-icon":"mdi-calendar",rules:[function(e){return!!e||"Campo Requerido"}],dense:"",readonly:"",color:"primary",outlined:"",rounded:""},model:{value:e.dateBase,callback:function(t){e.dateBase=t},expression:"dateBase"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{color:"primary","active-picker":e.activePicker,max:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),min:"1950-01-01",locale:"es-CO"},on:{"update:activePicker":function(t){e.activePicker=t},"update:active-picker":function(t){e.activePicker=t}},model:{value:e.dateBase,callback:function(t){e.dateBase=t},expression:"dateBase"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"3",md:"3"}},[n("v-btn",{staticClass:"mb-8",attrs:{color:"primary",dark:"",rounded:"",small:""},on:{click:e.generateBase}},[e._v("\n        Generar\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{VBtn:x.a,VCol:B.a,VContainer:y.a,VDatePicker:h.a,VMenu:_.a,VRow:C.a,VTextField:O.a})}}]);