(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{325:function(t,e,n){var i=n(342);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(7).default)("556a5063",i,!0,{sourceMap:!1})},341:function(t,e,n){"use strict";var i=n(325);n.n(i).a},342:function(t,e,n){(e=n(6)(!1)).push([t.i,".reader__wrap{height:100%}#stage{width:100%;height:60vh}.dialog__slot-content{width:80vw;height:60vh}",""]),t.exports=e},343:function(t,e,n){var i=n(399);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(7).default)("eadc344e",i,!0,{sourceMap:!1})},362:function(t,e,n){"use strict";n(11),n(69);var i=n(16);function a(t){return void 0===t&&(t=0),new Promise((function(e,n){setTimeout((function(){e()}),t)}))}var r,o,s={data:function(){return{dialog:!1,input:"",date:"",reader:null}},mounted:(o=Object(i.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(7),n.e(8)]).then(n.bind(null,446));case 2:e=t.sent.default,this.$stage=document.querySelector("#stage"),this.reader=new e("stage"),this.read();case 6:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),destroyed:function(){this.reader=null},computed:{customInput:function(){var t=this.input;return/^https?:\/\//.test(t)&&(t='<a href="'+t+'" target="_blank" rel="noopener">'+t+"</a>"),t}},methods:{dialogCloseClickHandler:(r=Object(i.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),this.dialog=!1,t.next=5,a(1e3);case 5:this.read();case 6:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)}),read:function(){var t=this;this.reader.listen().then((function(e){if(e){t.input=e.text;var n=new Date;t.date=n.toLocaleDateString()+" "+n.toLocaleTimeString(),t.$store.dispatch("ADD_ITEM",{datetime:n.getTime(),date:t.date,text:t.input}),t.dialog=!0}})).catch((function(t){}))}}},l=(n(341),n(57)),c=n(87),d=n.n(c),u=n(310),v=n(391),h=n(322),p=n(447),m=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reader__wrap"},[n("video",{staticStyle:{border:"1px solid gray"},attrs:{id:"stage"}}),t._v(" "),n("v-dialog",{attrs:{scrollable:"","max-width":"80%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{"min-width":"80vw","min-height":"80vh"}},[n("v-card-title",[t._v("読み取り結果")]),t._v(" "),n("v-card-text",{domProps:{innerHTML:t._s(t.date)}}),t._v(" "),n("v-card-text",{domProps:{innerHTML:t._s(t.customInput)}}),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.dialogCloseClickHandler}},[t._v("閉じる")])],1)],1)],1)}),[],!1,null,null,null);e.a=m.exports;d()(m,{VBtn:u.a,VCard:v.a,VCardText:h.a,VCardTitle:h.b,VDialog:p.a})},398:function(t,e,n){"use strict";var i=n(343);n.n(i).a},399:function(t,e,n){(e=n(6)(!1)).push([t.i,".history__dialog-date{font-size:.7rem}",""]),t.exports=e},448:function(t,e,n){"use strict";n.r(e);var i=n(138),a=n(362);(new Date).toUTCString;var r={components:{QRReader:a.a},data:function(){return{showitem:{datetime:0,date:"",text:""},dialog:!1,input:"",reader:null,isFirstTime:!0}},computed:Object.assign({},Object(i.b)(["history"]),{customInput:function(){var t=this.showitem.text;return/^https?:\/\//.test(t)&&(t='<a href="'+t+'" target="_blank" rel="noopener">'+t+"</a>"),t}}),methods:{open:function(t){this.showitem=this.history[t],this.dialog=!0},deleteItem:function(t){this.$store.dispatch("DELETE_ITEM",t)}}},o=(n(398),n(57)),s=n(87),l=n.n(s),c=n(310),d=n(391),u=n(322),v=n(447),h=n(135),p=n(444),m=n(136),f=n(83),g=n(137),_=n(41),w=n(307),x=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-list",{attrs:{"min-width":"100%","max-width":"100%","two-line":""}},t._l(t.history,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-content",{attrs:{"data-index":i},on:{click:function(e){return e.preventDefault(),t.open(i)}}},[n("v-list-item-subtitle",{domProps:{textContent:t._s(e.date)}}),t._v(" "),n("v-list-item-title",{domProps:{textContent:t._s(e.text)}}),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.preventDefault(),t.deleteItem(i)}}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-delete")])],1)],1)],1)})),1),t._v(" "),n("v-dialog",{attrs:{scrollable:"","max-width":"80%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{"min-width":"80vw","min-height":"80vh"}},[n("v-card-title",[t._v("読み取り結果")]),t._v(" "),n("v-card-text",[n("div",{staticClass:"history__dialog-date",domProps:{innerHTML:t._s(t.showitem.date)}}),t._v(" "),n("div",{staticClass:"history__dialog-text",domProps:{innerHTML:t._s(t.customInput)}})]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("閉じる")])],1)],1)],1)}),[],!1,null,null,null);e.default=x.exports;l()(x,{VBtn:c.a,VCard:d.a,VCardText:u.a,VCardTitle:u.b,VDialog:v.a,VIcon:h.a,VLayout:p.a,VList:m.a,VListItem:f.a,VListItemAction:g.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VSpacer:w.a})}}]);