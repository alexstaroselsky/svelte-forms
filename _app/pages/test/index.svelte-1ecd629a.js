var P=Object.defineProperty,D=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var k=(t,e,a)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))U.call(e,a)&&k(t,a,e[a]);if(g)for(var a of g(e))W.call(e,a)&&k(t,a,e[a]);return t},O=(t,e)=>D(t,H(e));import{a0 as C,a1 as z,C as S,S as B,i as G,s as J,e as y,t as w,k as x,c as F,a as I,g as j,d as b,n as A,b as E,f as K,D as f,a2 as T,E as L,h as M,W as V,a3 as q,a4 as Q}from"../../chunks/vendor-68fe0a4d.js";const R={valid:!0,checkOnInit:!1,validateOnChange:!0,stopAtFirstError:!1};function X(t){const e=Object.keys(t);return["name","value","valid","invalid","errors"].every(a=>e.includes(a))}function Y(t){const e=function(s){return t.subscribe!==void 0},a=function(s){return!!t.name&&t.valid!==void 0};return e()?C(t).value:a()?t.value:t}async function N(t,e,a=!1){const s=Y(t);let i=[];for(const r of e){let l=r(s);if(z(l)&&(l=await l),a&&!l.valid){i=[l];break}i=[...i,l]}return i}function _(t,e,a={}){if(e){const s=e.filter(r=>!r.valid).map(r=>r.name),i=!s.length;return m(O(m({},t),{valid:i,invalid:!i,errors:s}),a)}return t}function Z(t,e,a=[],s){const i={name:t,value:e,valid:s.valid,invalid:!s.valid,dirty:!1,errors:[]},r=S(i),{subscribe:l,update:c,set:u}=r;async function v(n,d=!1){if(X(n)||(n=_(C(r),[],{value:n})),d||s.validateOnChange){let h=await N(n,a,s.stopAtFirstError);u(_(n,h,{dirty:!0}))}else u(_(n,[],{dirty:!0}))}async function p(){const n=await N(r,a,s.stopAtFirstError);let d;return c(h=>(d=_(h,n,{dirty:!1}),d)),d}function o(){u(_({dirty:!1,errors:[],name:t,valid:s.valid,invalid:!s.valid,value:e}))}return s.checkOnInit&&v(i),{subscribe:l,update:c,set:v,validate:p,reset:o}}function $(t,e,a=[],s=R){return Z(t,e,a,s)}function ee(t){let e,a,s,i,r,l,c=t[1].value+"",u,v,p;return{c(){e=y("section"),a=y("h1"),s=w("Field"),i=x(),r=y("input"),l=x(),u=w(c),this.h()},l(o){e=F(o,"SECTION",{class:!0});var n=I(e);a=F(n,"H1",{});var d=I(a);s=j(d,"Field"),d.forEach(b),i=A(n),r=F(n,"INPUT",{type:!0,class:!0}),l=A(n),u=j(n,c),n.forEach(b),this.h()},h(){E(r,"type","text"),E(r,"class","svelte-11n4mq4"),E(e,"class","p-10")},m(o,n){K(o,e,n),f(e,a),f(a,s),f(e,i),f(e,r),T(r,t[0]),f(e,l),f(e,u),v||(p=L(r,"input",t[4]),v=!0)},p(o,[n]){n&1&&r.value!==o[0]&&T(r,o[0]),n&2&&c!==(c=o[1].value+"")&&M(u,c)},i:V,o:V,d(o){o&&b(e),v=!1,p()}}}function te(t,e,a){let s,i;const r=$("name","");q(t,r,u=>a(1,i=u));let l=S("");q(t,l,u=>a(0,s=u));function c(){s=this.value,l.set(s)}return t.$$.update=()=>{t.$$.dirty&1&&Q(r,i=s,i)},[s,i,r,l,c]}class re extends B{constructor(e){super();G(this,e,te,ee,J,{})}}export{re as default};