import{_ as m}from"../chunks/preload-helper-cd5f4ade.js";import{S as T,i as j,s as I,l as y,f as d,D as x,d as u,e as f,t as w,k as g,c as v,a as k,g as P,n as E,b,F as p,L as i,J as D,A as L,O as R,K as V,P as C,Q as S}from"../chunks/vendor-379e1796.js";function A(o,t,e){const n=o.slice();return n[1]=t[e],n}function H(o){return{c:i,l:i,m:i,p:i,d:i}}function N(o){let t,e,n,l,_,c=o[4].html+"",s;return{c(){t=f("section"),e=f("a"),n=w("edit documentation"),l=g(),_=new C,s=g(),this.h()},l(r){t=v(r,"SECTION",{class:!0});var a=k(t);e=v(a,"A",{href:!0,class:!0});var h=k(e);n=P(h,"edit documentation"),h.forEach(u),l=E(a),_=S(a),a.forEach(u),s=E(r),this.h()},h(){b(e,"href","https://github.com/chainlist/svelte-forms/edit/v2/src/docs/"+o[4].attributes.filename),b(e,"class","absolute top-5 right-5 text-gray-600 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"),_.a=null,b(t,"class","space-y-7 relative group")},m(r,a){d(r,t,a),p(t,e),p(e,n),p(t,l),_.m(c,t),d(r,s,a)},p:i,d(r){r&&u(t),r&&u(s)}}}function $(o){return{c:i,l:i,m:i,p:i,d:i}}function O(o){let t,e={ctx:o,current:null,token:null,hasCatch:!1,pending:$,then:N,catch:H,value:4};return V(o[1],e),{c(){t=y(),e.block.c()},l(n){t=y(),e.block.l(n)},m(n,l){d(n,t,l),e.block.m(n,e.anchor=l),e.mount=()=>t.parentNode,e.anchor=t},p(n,l){o=n,x(e,o,l)},d(n){n&&u(t),e.block.d(n),e.token=null,e=null}}}function q(o){let t,e,n,l,_=o[0],c=[];for(let s=0;s<_.length;s+=1)c[s]=O(A(o,_,s));return{c(){t=f("section"),e=f("h1"),n=w("svelte-forms documentation"),l=g();for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){t=v(s,"SECTION",{class:!0});var r=k(t);e=v(r,"H1",{});var a=k(e);n=P(a,"svelte-forms documentation"),a.forEach(u),l=E(r);for(let h=0;h<c.length;h+=1)c[h].l(r);r.forEach(u),this.h()},h(){b(t,"class","px-20 space-y-32")},m(s,r){d(s,t,r),p(t,e),p(e,n),p(t,l);for(let a=0;a<c.length;a+=1)c[a].m(t,null)},p(s,[r]){if(r&1){_=s[0];let a;for(a=0;a<_.length;a+=1){const h=A(s,_,a);c[a]?c[a].p(h,r):(c[a]=O(h),c[a].c(),c[a].m(t,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=_.length}},i,o:i,d(s){s&&u(t),D(c,s)}}}async function z(){const o=await m(()=>import("../chunks/prism-39867173.js").then(function(t){return t.p}),["chunks/prism-39867173.js","chunks/vendor-379e1796.js"]);return await m(()=>import("../chunks/prism-bash-36f08276.js"),[]),await m(()=>import("../chunks/prism-typescript-3f1d703b.js"),[]),await m(()=>import("../chunks/prism-toolbar-1980a695.js"),[]),await m(()=>import("../chunks/prism-normalize-whitespace-9cce0920.js").then(function(t){return t.p}),[]),await m(()=>import("../chunks/index-2bcea5bc.js"),[]),o}function F(o){return L(async()=>{(await z()).highlightAll()}),[R("docs")]}class M extends T{constructor(t){super();j(this,t,F,q,I,{})}}export{M as default};
