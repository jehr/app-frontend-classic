(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{892:function(t,e,n){var content=n(900);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("8973cd00",content,!0,{sourceMap:!1})},899:function(t,e,n){"use strict";n(892)},900:function(t,e,n){var r=n(13)(!1);r.push([t.i,".custom-table table td{font-size:.6rem!important}",""]),t.exports=r},909:function(t,e,n){"use strict";n.r(e);var r={props:{items:{type:Array,required:!0},headers:{type:Array,required:!0},search:{type:String,default:""},primaryColor:{type:String,default:""},secondaryColor:{type:String,default:""},noDataText:{type:String,default:""},noResultText:{type:String,default:""},customClass:{type:String,default:""},footerProps:{type:Object,required:!1,default:function(){return{disableItemsPerPage:!1,itemsPerPageText:"Filas por página",itemsPerPageAllText:"Todos"}}},showExpand:Boolean,dense:Boolean,dark:Boolean}},o=(n(899),n(11)),l=n(30),c=n.n(l),d=n(939),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{class:[""+t.primaryColor,t.customClass?t.customClass:"","text-uppercase"],attrs:{items:t.items,headers:t.headers,dark:t.dark,"no-data-text":t.noDataText,"no-results-text":t.noResultText,"footer-props":t.footerProps,"item-key":"id",dense:t.dense,search:t.search,"show-expand":t.showExpand},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("header",null,{items:t.items})]},proxy:!0},{key:"item.selected",fn:function(e){var n=e.item;return[t._t("selected",null,{category:n})]}},{key:"item.tipificacion.name",fn:function(e){var n=e.item;return[t._t("typification",null,{category:n})]}},{key:"item.typification",fn:function(e){var n=e.item;return[t._t("typification",null,{category:n})]}},{key:"item.lectorCC",fn:function(e){var n=e.item;return[t._t("lectorCC",null,{category:n})]}},{key:"item.status",fn:function(e){var n=e.item;return[t._t("status",null,{category:n})]}},{key:"item.createdAt",fn:function(e){var n=e.item;return[t._v("\n    "+t._s(t.$moment(n.createdAt).format("MMMM Do YYYY, h:mm"))+"\n  ")]}},{key:"item.rdate",fn:function(e){var n=e.item;return[t._v("\n    "+t._s(t.$moment(n.rdate).format("MMMM Do YYYY"))+"\n  ")]}},{key:"item.active",fn:function(e){var n=e.item;return[t._t("status",null,{skill:n})]}},{key:"item.actions",fn:function(e){var n=e.item;return[t._t("actions",null,{category:n})]}},{key:"expanded-item",fn:function(e){var r=e.headers,o=e.item;return[n("td",{staticClass:"pa-5",attrs:{colspan:r.length}},[n("div",{staticClass:"d-flex flex-column"},[n("div",[n("small",[t._v("Observación del Agente")]),t._v(" "),n("br"),t._v("\n          "+t._s(o.entryObservation)+"\n        ")]),t._v(" "),n("div",{staticClass:"mt-10"},[n("small",[t._v("Script Automatico")]),t._v(" "),n("br"),t._v("\n          "+t._s(o.entryObservation2)+"\n        ")])])])]}}],null,!0)})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDataTable:d.a})}}]);