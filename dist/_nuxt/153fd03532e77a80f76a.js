(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{304:function(t,e,n){var content=n(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("556a5063",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";var r=n(304);n.n(r).a},352:function(t,e,n){(e=n(11)(!1)).push([t.i,"#stage{width:100%;height:100%}.dialog__slot-content{width:80vw;height:60vh}",""]),t.exports=e},404:function(t,e,n){"use strict";n.r(e);n(78);var r,o=n(27),l={data:function(){return{dialog:!1,input:"",reader:null,isFirstTime:!0}},mounted:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$try=this.$el.querySelector("#try"),t.next=3,Promise.all([n.e(6),n.e(7)]).then(n.bind(null,403));case 3:e=t.sent.default,this.$stage=document.querySelector("#stage"),this.reader=new e("stage"),this.read();case 7:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),destroyed:function(){this.reader=null},computed:{customInput:function(){var t=this.input;return/^https?:\/\//.test(t)&&(t='<a href="'.concat(t,'">').concat(t,"</a>")),t}},methods:{clickHandler:function(t){console.log(this.reader),t.preventDefault(),this.read()},read:function(){var t=this;this.reader.listen().then((function(e){e&&(t.input=e.text,t.$try.innerHTML="再読み込み",t.$try.disabled=!1,console.log(t.input.text),t.$store.dispatch("ADD_LIST",{date:(new Date).getTime(),text:t.input}),t.dialog=!0,t.isFirstTime=!1)})).catch((function(t){console.log(t)}))}}},c=(n(351),n(59)),d=n(95),h=n.n(d),v=n(163),f=n(350),m=n(305),w=n(405),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("video",{staticStyle:{border:"1px solid gray"},attrs:{id:"stage"}}),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.isFirstTime,expression:"!isFirstTime"}],attrs:{small:"",id:"try"},on:{click:t.clickHandler}},[t._v("読み取り")]),t._v(" "),n("v-dialog",{attrs:{scrollable:"","max-width":"80%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{"min-width":"80vw","min-height":"80vh"}},[n("v-card-title",[t._v("読み取り結果")]),t._v(" "),n("v-card-text",{domProps:{innerHTML:t._s(t.customInput)}}),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("閉じる")])],1)],1)],1)}),[],!1,null,null,null),x=component.exports;h()(component,{VBtn:v.a,VCard:f.a,VCardText:m.a,VCardTitle:m.b,VDialog:w.a});var y={components:{QRReader:x}},_=n(402),T=Object(c.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[e("QRReader")],1)}),[],!1,null,null,null);e.default=T.exports;h()(T,{VLayout:_.a})}}]);