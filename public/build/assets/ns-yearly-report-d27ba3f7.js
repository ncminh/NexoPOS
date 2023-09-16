import{h as b}from"./npm~moment-fbc5633a.js";import{c as w,e as k}from"./components-9747988e.js";import{a as v}from"./ns-paginate-66f4809e.js";import{n as x,a as m}from"./bootstrap-bcf575d6.js";import C from"./ns-pos-confirm-popup-b1c573b1.js";import{_ as a,n as D}from"./currency-47ec5b79.js";import{m as R}from"./npm~@vue~runtime-dom_-a668b91e.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as z,a6 as l,z as n,x as j,ax as y,H as f,y as h,A as e,az as F,F as p,ac as d}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as s}from"./npm~@vue~shared_-82b01912.js";import"./ns-alert-popup-883dcb0b.js";import"./npm~numeral-faf61dd1.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-481192b6.js";import"./ns-avatar-image-b0a3f8ba.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./ns-switch-91bfd2af.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~sortablejs-9be29f79.js";import"./npm~vue-upload-component-9e5d4563.js";import"./npm~lodash-f7a36ac5.js";import"./ns-numpad-plus-f3ffaa01.js";import"./ns-pos-loading-popup-c5c20a52.js";import"./ns-prompt-popup-64b67141.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";const N={name:"ns-yearly-report",props:["storeLogo","storeName"],mounted(){this.timezone!==""&&(this.year=ns.date.getMoment().format("Y"),this.loadReport())},components:{nsDatepicker:w,nsNotice:v,nsDateTimePicker:k},data(){return{startDate:b(),endDate:b(),report:{},timezone:ns.date.timeZone,year:"",ns:window.ns,labels:["month_paid_orders","month_taxes","month_expenses","month_income"]}},computed:{totalDebit(){return 0},totalCredit(){return 0}},methods:{__:a,nsCurrency:D,setStartDate(u){this.startDate=u.format()},setEndDate(u){this.endDate=u.format()},printSaleReport(){this.$htmlToPaper("annual-report")},sumOf(u){return Object.values(this.report).length>0?Object.values(this.report).map(c=>parseFloat(c[u])||0).reduce((c,_)=>c+_):0},recomputeForSpecificYear(){Popup.show(C,{title:a("Would you like to proceed ?"),message:a("The report will be computed for the current year, a job will be dispatched and you'll be informed once it's completed."),onAction:u=>{u&&x.post("/api/reports/compute/yearly",{year:this.year}).subscribe(c=>{m.success(c.message).subscribe()},c=>{m.success(c.message||a("An unexpected error has occurred.")).subscribe()})}})},getReportForMonth(u){return this.report[u]},loadReport(){const u=this.year;x.post("/api/reports/annual-report",{year:u}).subscribe(c=>{this.report=c},c=>{m.error(c.message).subscribe()})}}},T={class:"px-4"},A={key:1,class:"flex -mx-2"},B={class:"px-2"},O={class:"px-2 flex"},P=e("i",{class:"las la-sync-alt text-xl"},null,-1),Y={class:"pl-2"},M={class:"px-2 flex"},V=e("i",{class:"las la-print text-xl"},null,-1),E={class:"pl-2"},L={class:"px-2 flex"},H=e("i",{class:"las la-sync-alt text-xl"},null,-1),J={class:"pl-2"},U={key:2,id:"annual-report",class:"anim-duration-500 fade-in-entrance"},I={class:"flex w-full"},W={class:"my-4 flex justify-between w-full"},Z={class:"text-secondary"},q={class:"pb-1 border-b border-dashed"},G={class:"pb-1 border-b border-dashed"},K={class:"pb-1 border-b border-dashed"},Q=["src","alt"],X={class:"bg-box-background shadow rounded my-4 overflow-hidden"},$={class:"border-b border-box-edge overflow-auto"},ee={class:"table ns-table w-full"},te={class:""},re=e("th",{width:"100",class:"border p-2 text-left"},null,-1),se={width:"150",class:"border p-2 text-right"},oe={width:"150",class:"border p-2 text-right"},le={width:"150",class:"border p-2 text-right"},ne={width:"150",class:"border p-2 text-right"},ie={class:"border p-2 text-left"},ce={class:"border p-2 text-left"},pe={class:"text-left border p-2"},de={class:"text-left border p-2"},ue={class:"text-left border p-2"},_e={class:"text-left border p-2"},ae={class:"text-left border p-2"},me={class:"text-left border p-2"},he={class:"text-left border p-2"},be={class:"text-left border p-2"},xe={class:"text-left border p-2"},ye={class:"text-left border p-2"},fe={class:"text-left border p-2"};function ge(u,c,_,we,t,r){const g=z("ns-notice");return l(),n("div",T,[t.timezone===""?(l(),j(g,{key:0,color:"error"},{title:y(()=>[f(s(r.__("An Error Has Occured")),1)]),description:y(()=>[f(s(r.__("Unable to load the report as the timezone is not set on the settings.")),1)]),_:1})):h("",!0),t.timezone!==""?(l(),n("div",A,[e("div",B,[F(e("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=o=>t.year=o),placeholder:"{{ __( 'Year' ) }}",class:"outline-none rounded border-gray-400 border-2 focus:border-blue-400 p-2"},null,512),[[R,t.year]])]),e("div",O,[e("button",{onClick:c[1]||(c[1]=o=>r.loadReport()),class:"rounded flex justify-between bg-white shadow py-1 items-center text-gray-700 px-2"},[P,e("span",Y,s(r.__("Load")),1)])]),e("div",M,[e("button",{onClick:c[2]||(c[2]=o=>r.printSaleReport()),class:"rounded flex justify-between bg-white shadow py-1 items-center text-gray-700 px-2"},[V,e("span",E,s(r.__("Print")),1)])]),e("div",L,[e("button",{onClick:c[3]||(c[3]=o=>r.recomputeForSpecificYear()),class:"rounded flex justify-between bg-white shadow py-1 items-center text-gray-700 px-2"},[H,e("span",J,s(r.__("Recompute")),1)])])])):h("",!0),t.timezone!==""?(l(),n("div",U,[e("div",I,[e("div",W,[e("div",Z,[e("ul",null,[e("li",q,s(r.__("Date : {date}").replace("{date}",t.ns.date.current)),1),e("li",G,s(r.__("Document : Yearly Report")),1),e("li",K,s(r.__("By : {user}").replace("{user}",t.ns.user.username)),1)])]),e("div",null,[e("img",{class:"w-24",src:_.storeLogo,alt:_.storeName},null,8,Q)])])]),e("div",X,[e("div",$,[e("table",ee,[e("thead",te,[e("tr",null,[re,e("th",se,s(r.__("Sales")),1),e("th",oe,s(r.__("Taxes")),1),e("th",le,s(r.__("Expenses")),1),e("th",ne,s(r.__("Income")),1)])]),e("tbody",null,[e("tr",null,[e("td",ie,s(r.__("January")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[1]?t.report[1][o]:0)),1))),128))]),e("tr",null,[e("td",ce,s(r.__("Febuary")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[2]?t.report[2][o]:0)),1))),128))]),e("tr",null,[e("td",pe,s(r.__("March")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[3]?t.report[3][o]:0)),1))),128))]),e("tr",null,[e("td",de,s(r.__("April")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[4]?t.report[4][o]:0)),1))),128))]),e("tr",null,[e("td",ue,s(r.__("May")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[5]?t.report[5][o]:0)),1))),128))]),e("tr",null,[e("td",_e,s(r.__("June")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[6]?t.report[6][o]:0)),1))),128))]),e("tr",null,[e("td",ae,s(r.__("July")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[7]?t.report[7][o]:0)),1))),128))]),e("tr",null,[e("td",me,s(r.__("August")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[8]?t.report[8][o]:0)),1))),128))]),e("tr",null,[e("td",he,s(r.__("September")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[9]?t.report[9][o]:0)),1))),128))]),e("tr",null,[e("td",be,s(r.__("October")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[10]?t.report[10][o]:0)),1))),128))]),e("tr",null,[e("td",xe,s(r.__("November")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[11]?t.report[11][o]:0)),1))),128))]),e("tr",null,[e("td",ye,s(r.__("December")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(t.report[12]?t.report[12][o]:0)),1))),128))])]),e("tfoot",null,[e("tr",null,[e("td",fe,s(r.__("Total")),1),(l(!0),n(p,null,d(t.labels,(o,i)=>(l(),n("td",{key:i,class:"border p-2 text-right"},s(r.nsCurrency(r.sumOf(o))),1))),128))])])])])])])):h("",!0)])}const At=S(N,[["render",ge]]);export{At as default};