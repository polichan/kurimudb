import{e,u as a,l as t,m as s,n as l,o,c as i,b as n,k as c,t as r,_ as v,p as d,q as u,s as f,F as m,x as p,y as k,j as h}from"./app.1f1a6988.js";const x=d("data-v-1d68b262");u("data-v-1d68b262");const y={key:0,class:"home-hero"},b={key:0,class:"figure"},g={key:1,id:"main-title",class:"title"},$={key:2,class:"description"};f();var _=e({expose:[],setup(e){const d=a(),u=t(),f=s((()=>u.value.heroImage||m.value||k.value||_.value)),m=s((()=>null!==u.value.heroText)),p=s((()=>u.value.heroText||d.value.title)),k=s((()=>null!==u.value.tagline)),h=s((()=>u.value.tagline||d.value.description)),_=s((()=>u.value.actionLink&&u.value.actionText)),I=s((()=>u.value.altActionLink&&u.value.altActionText));return x(((e,a)=>l(f)?(o(),i("header",y,[e.$frontmatter.heroImage?(o(),i("figure",b,[n("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):c("v-if",!0),l(m)?(o(),i("h1",g,r(l(p)),1)):c("v-if",!0),l(k)?(o(),i("p",$,r(l(h)),1)):c("v-if",!0),l(_)?(o(),i(v,{key:3,item:{link:l(u).actionLink,text:l(u).actionText},class:"action"},null,8,["item"])):c("v-if",!0),l(I)?(o(),i(v,{key:4,item:{link:l(u).altActionLink,text:l(u).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)))}});_.__scopeId="data-v-1d68b262";const I=d("data-v-b6f3c2e6");u("data-v-b6f3c2e6");const T={key:0,class:"home-features"},A={class:"wrapper"},L={class:"container"},j={class:"features"},w={key:0,class:"title"},q={key:1,class:"details"};f();var B=e({expose:[],setup(e){const a=t(),v=s((()=>a.value.features&&a.value.features.length>0)),d=s((()=>a.value.features?a.value.features:[]));return I(((e,a)=>l(v)?(o(),i("div",T,[n("div",A,[n("div",L,[n("div",j,[(o(!0),i(m,null,p(l(d),((e,a)=>(o(),i("section",{key:a,class:"feature"},[e.title?(o(),i("h2",w,r(e.title),1)):c("v-if",!0),e.details?(o(),i("p",q,r(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)))}});B.__scopeId="data-v-b6f3c2e6";const C={},F=d("data-v-93d3e3da");u("data-v-93d3e3da");const z={key:0,class:"footer"},D={class:"container"},E={class:"text"};f();const G=F(((e,a)=>e.$frontmatter.footer?(o(),i("footer",z,[n("div",D,[n("p",E,r(e.$frontmatter.footer),1)])])):c("v-if",!0)));C.render=G,C.__scopeId="data-v-93d3e3da";const H=d("data-v-6e1bdf43");u("data-v-6e1bdf43");const J={class:"home","aria-labelledby":"main-title"},K={class:"home-content"};f();var M=e({expose:[],setup:e=>H(((e,a)=>{const t=k("Content");return o(),i("main",J,[n(_),h(e.$slots,"hero"),n(B),n("div",K,[n(t)]),h(e.$slots,"features"),n(C),h(e.$slots,"footer")])}))});M.__scopeId="data-v-6e1bdf43";export default M;
