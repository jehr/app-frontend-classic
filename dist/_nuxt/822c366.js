(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{947:function(e,t,l){"use strict";l.r(t);var n={props:{field:{type:String,default:null},title:{type:String,default:""},icon:{type:String,default:""}},data:function(){return{localField:"",fieldClear:""}},watch:{localField:function(e){this.$emit("update:field",e)}},methods:{save:function(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},open:function(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"}}},o=l(11),c=l(30),d=l.n(c),r=l(65),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",{staticClass:"mt-5",attrs:{label:e.title,"prepend-inner-icon":e.icon,color:"five",outlined:"",dense:""},model:{value:e.localField,callback:function(t){e.localField=t},expression:"localField"}})}),[],!1,null,null,null);t.default=component.exports;d()(component,{VTextField:r.a})}}]);