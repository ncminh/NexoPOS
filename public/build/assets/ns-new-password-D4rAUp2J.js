import{_ as o}from"./currency-ZXKMLAC0.js";import{k as v,Z as k}from"./tax-BACo6kIE.js";import{a as r,n as h,b as a}from"./bootstrap-B7E2wy_a.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as e,c as d,b as i,F,e as x,h as p,f as c,g as _,w as S,t as N}from"./runtime-core.esm-bundler-DCfIpxDt.js";const T={name:"ns-login",props:["token","user"],data(){return{fields:[],xXsrfToken:null,validation:new v,isSubitting:!1}},mounted(){k([r.get("/api/fields/ns.new-password"),r.get("/sanctum/csrf-cookie")]).subscribe(t=>{this.fields=this.validation.createFields(t[0]),this.xXsrfToken=r.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>h.doAction("ns-login-mounted",this),100)},t=>{a.error(t.message||o("An unexpected error occurred."),o("OK"),{duration:0}).subscribe()})},methods:{__:o,submitNewPassword(){if(!this.validation.validateFields(this.fields))return a.error(o("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),h.applyFilters("ns-new-password-submit",!0)&&(this.isSubitting=!0,r.post(`/auth/new-password/${this.user}/${this.token}`,this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(s=>{a.success(s.message).subscribe(),setTimeout(()=>{document.location=s.data.redirectTo},500)},s=>{this.isSubitting=!1,this.validation.enableFields(this.fields),s.data&&this.validation.triggerFieldsErrors(this.fields,s.data),a.error(s.message).subscribe()}))}}},V={class:"bg-white rounded shadow overflow-hidden transition-all duration-100"},X={class:"p-3 -my-2"},B={key:0,class:"py-2 fade-in-entrance anim-duration-300"},C={key:0,class:"flex items-center justify-center py-10"},E={class:"flex justify-between items-center bg-gray-200 p-3"},P=i("div",null,null,-1);function j(t,s,K,O,n,u){const b=l("ns-field"),f=l("ns-spinner"),g=l("ns-button");return e(),d("div",V,[i("div",X,[n.fields.length>0?(e(),d("div",B,[(e(!0),d(F,null,x(n.fields,(m,w)=>(e(),p(b,{key:w,field:m},null,8,["field"]))),128))])):c("",!0)]),n.fields.length===0?(e(),d("div",C,[_(f,{border:"4",size:"16"})])):c("",!0),i("div",E,[i("div",null,[_(g,{onClick:s[0]||(s[0]=m=>u.submitNewPassword()),class:"justify-between",type:"info"},{default:S(()=>[n.isSubitting?(e(),p(f,{key:0,class:"mr-2",size:"6",border:"2"})):c("",!0),i("span",null,N(u.__("Save Password")),1)]),_:1})]),P])])}const J=y(T,[["render",j]]);export{J as default};
