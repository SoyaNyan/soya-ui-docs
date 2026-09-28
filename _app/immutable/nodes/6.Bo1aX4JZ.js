const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["/soya-ui-docs/_app/immutable/chunks/BDhWHrEw.js","/soya-ui-docs/_app/immutable/chunks/fs03ZRsb.js"])))=>i.map(i=>d[i]);
import{A as e,At as t,B as n,C as r,Ct as i,D as a,Dt as o,E as s,F as c,H as l,I as u,J as d,K as f,L as p,M as m,Nt as h,P as g,R as _,St as v,T as y,U as b,V as x,W as S,Y as C,Z as w,_ as T,a as E,at as D,b as O,ct as k,d as A,et as j,f as M,ft as N,h as P,jt as F,k as I,kt as L,l as ee,m as te,mt as R,n as ne,nt as re,o as z,ot as B,p as V,r as ie,rt as ae,s as oe,st as H,tt as se,ut as U,v as ce,vt as le,w as ue,x as de,y as fe,z as W}from"../chunks/fs03ZRsb.js";import{l as pe}from"../chunks/0KzB9hHw.js";import{t as me}from"../chunks/HclGiUj8.js";import"../chunks/xihTtKlq.js";import{t as G}from"../chunks/CyyqgG46.js";import{t as he}from"../chunks/Bs2TFlo0.js";import{a as ge,i as _e,n as ve}from"../chunks/qGf02Wcn.js";import{t as ye}from"../chunks/RhlqY4Vh.js";import{i as be,n as xe,r as Se,t as Ce}from"../chunks/CXLS58M2.js";import{n as we,r as Te,t as Ee}from"../chunks/DBJUO0vv.js";import{t as K}from"../chunks/CqGZGrQU.js";import{t as De}from"../chunks/GAwXwUEF.js";import{t as Oe}from"../chunks/CA_S8_pu.js";import{t as ke}from"../chunks/CzDrjlpH.js";import{a as Ae,c as je,i as Me,l as Ne,n as Pe,o as Fe,r as Ie,s as q,t as Le}from"../chunks/B5MBFxjd.js";import{t as Re}from"../chunks/CHdpLLp6.js";import{t as ze}from"../chunks/Dag4kYoQ.js";import{t as Be}from"../chunks/Ciq4j09H.js";import{a as Ve,c as He,d as Ue,f as We,g as Ge,h as Ke,i as qe,l as Je,m as Ye,n as Xe,o as Ze,p as Qe,r as $e,s as et,t as tt,u as nt}from"../chunks/C6DHravd.js";import{A as rt,B as J,D as it,K as Y,L as at,M as ot,N as st,O as ct,P as lt,R as ut,S as dt,Y as ft,a as pt,b as mt,g as ht,h as gt,m as _t,n as X,p as vt,q as yt,r as bt,s as xt,t as Z,z as St}from"../chunks/BmExxd7M.js";import{r as Ct}from"../chunks/DlAHwbTu.js";import{n as wt}from"../chunks/Dt6Mr5xv.js";import{A as Tt,B as Et,D as Dt,F as Ot,L as kt,M as At,N as jt,P as Mt,R as Nt,_ as Pt,a as Ft,c as It,d as Lt,f as Rt,g as zt,h as Bt,i as Vt,j as Ht,k as Ut,l as Wt,m as Gt,n as Kt,o as qt,p as Jt,r as Yt,s as Xt,t as Zt,u as Qt,v as $t,x as en,y as tn,z as nn}from"../chunks/CpEqhnr7.js";import{a as rn,c as an,d as on,f as sn,i as cn,l as ln,n as un,o as dn,r as fn,s as pn,t as mn,u as hn}from"../chunks/DgFq55nQ.js";import{n as gn,t as _n}from"../chunks/cDqDzzXG.js";import{t as vn}from"../chunks/C0KgAmaS.js";import{n as yn,t as bn}from"../chunks/BsZeVic5.js";import{t as xn}from"../chunks/CpyTgJT6.js";import{n as Sn,s as Cn}from"../chunks/iygeYieL.js";import{t as wn}from"../chunks/DjIM00Yd.js";import{n as Q}from"../chunks/odDRjDlP.js";import{n as Tn}from"../chunks/BfOEr3TW.js";import{n as En,t as Dn}from"../chunks/CsI9XhIz.js";import{t as On}from"../chunks/CeqpkF9Y.js";import{t as kn}from"../chunks/HhUDvg_Q.js";import{n as An,t as jn}from"../chunks/C5MI7OOU.js";import{t as Mn}from"../chunks/BtqfPPPt.js";var Nn={maxVisible:3,defaultDuration:5e3,tone:`info`,overflow:`queue`,showProgress:!0,autoDismiss:!0,dismissible:!0};function Pn(e={}){let t=Fn(e.maxVisible),n=In(e.defaultDuration),r=e.overflow===`dismiss-oldest`?e.overflow:Nn.overflow,i=e.showProgress??Nn.showProgress,a=e.autoDismiss??Nn.autoDismiss,o=e.dismissible??Nn.dismissible,s=N(k([])),c=[],l=0,u=!1;function d(e){if(!(u||!e.autoDismiss||e.duration===0||e.pauseDepth>0)){if(e.remaining<=0){h(e.id);return}e.startedAt=Date.now(),e.timer=setTimeout(()=>h(e.id),e.remaining)}}function p(){for(;f(s).length<t&&c.length;){let e=c.shift();f(s).push(e),d(e)}}function m(e){if(u)return``;let p=In(e.duration,n),m={...e,id:`soya-toast-${Date.now()}-${++l}`,tone:e.tone??Nn.tone,duration:p,showProgress:e.showProgress??i,autoDismiss:e.autoDismiss??a,dismissible:e.dismissible??o,paused:!1,remaining:p,startedAt:Date.now(),pauseDepth:0};if(f(s).length<t)f(s).push(m),d(m);else if(r===`dismiss-oldest`){let e=f(s).shift();e?.timer&&clearTimeout(e.timer),f(s).push(m),d(m)}else c.push(m);return m.id}function h(e){if(u)return;let t=f(s).findIndex(t=>t.id===e);if(t>=0){let[e]=f(s).splice(t,1);e.timer&&clearTimeout(e.timer),p();return}let n=c.findIndex(t=>t.id===e);n>=0&&c.splice(n,1)}function g(e){if(u)return;let t=f(s).find(t=>t.id===e);t&&t.autoDismiss&&t.duration!==0&&(t.pauseDepth+=1,t.paused=!0,t.pauseDepth===1&&t.timer&&(clearTimeout(t.timer),t.timer=void 0,t.remaining=Math.max(0,t.remaining-(Date.now()-t.startedAt))))}function _(e){if(u)return;let t=f(s).find(t=>t.id===e);t&&t.pauseDepth!==0&&(--t.pauseDepth,t.pauseDepth===0&&(t.paused=!1,d(t)))}function v(){if(!u){for(let e of f(s))e.timer&&clearTimeout(e.timer);U(s,[],!0),c.length=0}}function y(){u||=(v(),!0)}return{get items(){return f(s)},push:m,dismiss:h,pause:g,resume:_,clear:v,destroy:y}}function Fn(e){return Number.isFinite(e)&&Number(e)>0?Math.max(1,Math.floor(Number(e))):Nn.maxVisible}function In(e,t=Nn.defaultDuration){return Number.isFinite(e)&&Number(e)>=0?Number(e):t}var[Ln,Rn]=le(),zn=Ln,Bn={maxVisible:3,defaultDuration:5e3,overflow:`queue`,showProgress:!0,autoDismiss:!0,dismissible:!0};function Vn(e,t){i(t,!0);let n=E(t,`maxVisible`,19,()=>Bn.maxVisible),r=E(t,`defaultDuration`,19,()=>Bn.defaultDuration),a=E(t,`overflow`,19,()=>Bn.overflow),o=E(t,`showProgress`,19,()=>Bn.showProgress),l=E(t,`autoDismiss`,19,()=>Bn.autoDismiss),u=E(t,`dismissible`,19,()=>Bn.dismissible);function d(){return t.state??Pn({maxVisible:n(),defaultDuration:r(),overflow:a(),showProgress:o(),autoDismiss:l(),dismissible:u()})}function f(){return!t.state}let p=d(),m=f();Rn(p),ne(()=>{m&&p.destroy()});var h=c(),_=B(h);s(_,()=>t.children??F),g(e,h),v()}var Hn={label:`알림`,closeLabel:e=>`${e} 알림 닫기`,position:`bottom-end`},Un=u(`<p class="svelte-1y19lkx"> </p>`),Wn=u(`<button type="button" data-variant="ghost" class="svelte-1y19lkx"><!></button>`),Gn=u(`<span class="soya-toast__progress svelte-1y19lkx" data-toast-progress="" aria-hidden="true"></span>`),Kn=u(`<article class="soya-toast svelte-1y19lkx"><div class="svelte-1y19lkx"><strong class="svelte-1y19lkx"> </strong><!></div> <!> <!></article>`),qn=u(`<section></section>`);function Jn(n,r){i(r,!0);let o=E(r,`label`,19,()=>Hn.label),s=E(r,`closeLabel`,19,()=>Hn.closeLabel),c=E(r,`position`,19,()=>Hn.position),u=zn();var d=qn();a(d,21,()=>u.items,e=>e.id,(n,r)=>{var i=Kn();let a;var o=D(i),c=D(o),d=D(c,!0);t(c);var p=H(c),h=e=>{var n=Un(),i=D(n,!0);t(n),j(()=>m(i,f(r).description)),g(e,n)};e(p,e=>{f(r).description&&e(h)}),t(o);var _=H(o,2),v=e=>{var n=Wn(),i=D(n);Ge(i,{}),t(n),j(e=>P(n,`aria-label`,e),[()=>s()(f(r).title)]),x(`click`,n,()=>u.dismiss(f(r).id)),g(e,n)};e(_,e=>{f(r).dismissible&&e(v)});var y=H(_,2),b=e=>{var t=Gn();g(e,t)};e(y,e=>{f(r).showProgress&&f(r).autoDismiss&&f(r).duration>0&&e(b)}),t(i),j(()=>{P(i,`data-tone`,f(r).tone),P(i,`data-paused`,f(r).paused||void 0),P(i,`role`,f(r).tone===`danger`?`alert`:`status`),a=fe(i,``,a,{"--soya-toast-duration":`${f(r).duration}ms`}),m(d,f(r).title)}),l(`pointerenter`,i,()=>u.pause(f(r).id)),l(`pointerleave`,i,()=>u.resume(f(r).id)),x(`focusin`,i,()=>u.pause(f(r).id)),x(`focusout`,i,()=>u.resume(f(r).id)),g(n,i)}),t(d),j(()=>{O(d,1,de([`soya-toaster`,r.class]),`svelte-1y19lkx`),P(d,`aria-label`,o()),P(d,`data-position`,c())}),g(n,d),v()}n([`focusin`,`focusout`,`click`]);var Yn=rt({component:`accordion`,parts:[`root`,`trigger`,`content`,`item`,`header`]}),Xn=new St(`Accordion.Root`),Zn=new St(`Accordion.Item`),Qn=class{opts;rovingFocusGroup;attachment;constructor(e){this.opts=e,this.rovingFocusGroup=new bt({rootNode:this.opts.ref,candidateAttr:Yn.trigger,loop:this.opts.loop,orientation:this.opts.orientation}),this.attachment=lt(this.opts.ref)}#e=R(()=>({id:this.opts.id.current,"data-orientation":this.opts.orientation.current,"data-disabled":it(this.opts.disabled.current),[Yn.root]:``,...this.attachment}));get props(){return f(this.#e)}set props(e){U(this.#e,e)}},$n=class extends Qn{opts;isMulti=!1;constructor(e){super(e),this.opts=e,this.includesItem=this.includesItem.bind(this),this.toggleItem=this.toggleItem.bind(this)}includesItem(e){return this.opts.value.current===e}toggleItem(e){this.opts.value.current=this.includesItem(e)?``:e}},er=class extends Qn{#e;isMulti=!0;constructor(e){super(e),this.#e=e.value,this.includesItem=this.includesItem.bind(this),this.toggleItem=this.toggleItem.bind(this)}includesItem(e){return this.#e.current.includes(e)}toggleItem(e){this.#e.current=this.includesItem(e)?this.#e.current.filter(t=>t!==e):[...this.#e.current,e]}},tr=class{static create(e){let{type:t,...n}=e,r=t===`single`?new $n(n):new er(n);return Xn.set(r)}},nr=class e{static create(t){return Zn.set(new e({...t,rootState:Xn.get()}))}opts;root;#e=R(()=>this.root.includesItem(this.opts.value.current));get isActive(){return f(this.#e)}set isActive(e){U(this.#e,e)}#t=R(()=>this.opts.disabled.current||this.root.opts.disabled.current);get isDisabled(){return f(this.#t)}set isDisabled(e){U(this.#t,e)}attachment;#n=N(null);get contentNode(){return f(this.#n)}set contentNode(e){U(this.#n,e,!0)}contentPresence;constructor(e){this.opts=e,this.root=e.rootState,this.updateValue=this.updateValue.bind(this),this.attachment=lt(this.opts.ref),this.contentPresence=new jt({ref:Y(()=>this.contentNode),open:Y(()=>this.isActive)})}updateValue(){this.root.toggleItem(this.opts.value.current)}#r=R(()=>({id:this.opts.id.current,"data-state":ot(this.isActive),"data-disabled":it(this.isDisabled),"data-orientation":this.root.opts.orientation.current,[Yn.item]:``,...this.attachment}));get props(){return f(this.#r)}set props(e){U(this.#r,e)}},rr=class e{opts;itemState;#e;#t=R(()=>this.opts.disabled.current||this.itemState.opts.disabled.current||this.#e.opts.disabled.current);attachment;constructor(e,t){this.opts=e,this.itemState=t,this.#e=t.root,this.onclick=this.onclick.bind(this),this.onkeydown=this.onkeydown.bind(this),this.attachment=lt(this.opts.ref)}static create(t){return new e(t,Zn.get())}onclick(e){if(f(this.#t)||e.button!==0){e.preventDefault();return}this.itemState.updateValue()}onkeydown(e){if(!f(this.#t)){if(e.key===` `||e.key===`Enter`){e.preventDefault(),this.itemState.updateValue();return}this.#e.rovingFocusGroup.handleKeydown(this.opts.ref.current,e)}}#n=R(()=>({id:this.opts.id.current,disabled:f(this.#t),"aria-expanded":ct(this.itemState.isActive),"aria-disabled":ct(f(this.#t)),"data-disabled":it(f(this.#t)),"data-state":ot(this.itemState.isActive),"data-orientation":this.#e.opts.orientation.current,[Yn.trigger]:``,tabindex:this.opts.tabindex.current,onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment}));get props(){return f(this.#n)}set props(e){U(this.#n,e)}},ir=class e{opts;item;attachment;#e=void 0;#t=!1;#n=N(k({width:0,height:0}));#r=!1;#i=null;#a=R(()=>this.opts.hiddenUntilFound.current?this.item.isActive:this.opts.forceMount.current||this.item.isActive);get open(){return f(this.#a)}set open(e){U(this.#a,e)}constructor(e,t){this.opts=e,this.item=t,this.#t=this.item.isActive,this.attachment=lt(this.opts.ref,e=>this.item.contentNode=e),se(()=>{let e=requestAnimationFrame(()=>{this.#t=!1});return()=>cancelAnimationFrame(e)}),at.pre([()=>this.opts.ref.current,()=>this.opts.hiddenUntilFound.current],([e,t])=>{if(!e||!t)return;let n=b(e,`beforematch`,()=>{this.item.isActive||(this.#i!==null&&cancelAnimationFrame(this.#i),this.#i=requestAnimationFrame(()=>{this.#i=null,!this.#r&&this.item.updateValue()}))});return()=>{this.#i!==null&&(cancelAnimationFrame(this.#i),this.#i=null),n()}}),at([()=>this.open,()=>this.opts.ref.current],this.#o),Et(()=>{this.#r=!0,this.#i!==null&&(cancelAnimationFrame(this.#i),this.#i=null)})}static create(t){return new e(t,Zn.get())}#o=([e,t])=>{t&&Nt(()=>{if(this.#r)return;let e=this.opts.ref.current;if(!e)return;this.#e??={transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration=`0s`,e.style.animationName=`none`;let t=e.getBoundingClientRect();U(this.#n,{width:t.width,height:t.height},!0),!this.#t&&this.#e&&(e.style.transitionDuration=this.#e.transitionDuration,e.style.animationName=this.#e.animationName)})};get shouldRender(){return this.item.contentPresence.shouldRender}#s=R(()=>({open:this.item.isActive}));get snippetProps(){return f(this.#s)}set snippetProps(e){U(this.#s,e)}#c=R(()=>({id:this.opts.id.current,"data-state":ot(this.item.isActive),...st(this.item.contentPresence.transitionStatus),"data-disabled":it(this.item.isDisabled),"data-orientation":this.item.root.opts.orientation.current,[Yn.content]:``,style:{"--bits-accordion-content-height":`${f(this.#n).height}px`,"--bits-accordion-content-width":`${f(this.#n).width}px`},hidden:this.opts.hiddenUntilFound.current&&!this.item.isActive?`until-found`:void 0,...this.opts.hiddenUntilFound.current&&!this.shouldRender?{}:{hidden:this.opts.hiddenUntilFound.current?!this.shouldRender:this.opts.forceMount.current?void 0:!this.shouldRender},...this.attachment}));get props(){return f(this.#c)}set props(e){U(this.#c,e)}},ar=class e{opts;item;attachment;constructor(e,t){this.opts=e,this.item=t,this.attachment=lt(this.opts.ref)}static create(t){return new e(t,Zn.get())}#e=R(()=>({id:this.opts.id.current,role:`heading`,"aria-level":this.opts.level.current,"data-heading-level":this.opts.level.current,"data-state":ot(this.item.isActive),"data-orientation":this.item.root.opts.orientation.current,[Yn.header]:``,...this.attachment}));get props(){return f(this.#e)}set props(e){U(this.#e,e)}},or=new Set([`$$slots`,`$$events`,`$$legacy`,`disabled`,`children`,`child`,`type`,`value`,`ref`,`id`,`onValueChange`,`loop`,`orientation`]),sr=u(`<div><!></div>`);function cr(n,r){let a=_();i(r,!0);let o=E(r,`disabled`,3,!1),l=E(r,`value`,15),u=E(r,`ref`,15,null),d=E(r,`id`,19,()=>Z(a)),p=E(r,`onValueChange`,3,X),m=E(r,`loop`,3,!0),h=E(r,`orientation`,3,`vertical`),y=z(r,or);function b(){l()===void 0&&l(r.type===`single`?``:[])}b(),at.pre(()=>l(),()=>{b()});let x=tr.create({type:r.type,value:Y(()=>l(),e=>{l(e),p()(e)}),id:Y(()=>d()),disabled:Y(()=>o()),loop:Y(()=>m()),orientation:Y(()=>h()),ref:Y(()=>u(),e=>u(e))}),S=R(()=>J(y,x.props));var C=c(),w=B(C),T=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(S)})),g(e,t)},O=e=>{var n=sr();V(n,()=>({...f(S)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(w,e=>{r.child?e(T):e(O,-1)}),g(n,C),v()}var lr=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`disabled`,`value`,`children`,`child`,`ref`]),ur=u(`<div><!></div>`);function dr(n,r){let a=_();i(r,!0);let o=Z(a),l=E(r,`id`,3,o),u=E(r,`disabled`,3,!1),d=E(r,`value`,3,o),p=E(r,`ref`,15,null),m=z(r,lr),h=nr.create({value:Y(()=>d()),disabled:Y(()=>u()),id:Y(()=>l()),ref:Y(()=>p(),e=>p(e))}),y=R(()=>J(m,h.props));var b=c(),x=B(b),S=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(y)})),g(e,t)},C=e=>{var n=ur();V(n,()=>({...f(y)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(x,e=>{r.child?e(S):e(C,-1)}),g(n,b),v()}var fr=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`level`,`children`,`child`,`ref`]),pr=u(`<div><!></div>`);function mr(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`level`,3,2),u=E(r,`ref`,15,null),d=z(r,fr),p=ar.create({id:Y(()=>o()),level:Y(()=>l()),ref:Y(()=>u(),e=>u(e))}),m=R(()=>J(d,p.props));var h=c(),y=B(h),b=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(m)})),g(e,t)},x=e=>{var n=pr();V(n,()=>({...f(m)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(y,e=>{r.child?e(b):e(x,-1)}),g(n,h),v()}var hr=new Set([`$$slots`,`$$events`,`$$legacy`,`disabled`,`ref`,`id`,`tabindex`,`children`,`child`]),gr=u(`<button><!></button>`);function _r(n,r){let a=_();i(r,!0);let o=E(r,`disabled`,3,!1),l=E(r,`ref`,15,null),u=E(r,`id`,19,()=>Z(a)),d=E(r,`tabindex`,3,0),p=z(r,hr),m=rr.create({disabled:Y(()=>o()),id:Y(()=>u()),tabindex:Y(()=>d()??0),ref:Y(()=>l(),e=>l(e))}),h=R(()=>J(p,m.props));var y=c(),b=B(y),x=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(h)})),g(e,t)},S=e=>{var n=gr();V(n,()=>({type:`button`,...f(h)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(b,e=>{r.child?e(x):e(S,-1)}),g(n,y),v()}var vr=new Set([`$$slots`,`$$events`,`$$legacy`,`child`,`ref`,`id`,`forceMount`,`children`,`hiddenUntilFound`]),yr=u(`<div><!></div>`);function br(n,r){let a=_();i(r,!0);let o=E(r,`ref`,15,null),l=E(r,`id`,19,()=>Z(a)),u=E(r,`forceMount`,3,!1),d=E(r,`hiddenUntilFound`,3,!1),p=z(r,vr),m=ir.create({forceMount:Y(()=>u()),id:Y(()=>l()),ref:Y(()=>o(),e=>o(e)),hiddenUntilFound:Y(()=>d())}),h=R(()=>J(p,m.props));var y=c(),b=B(y),x=e=>{var t=c(),n=B(t);{let e=R(()=>({props:f(h),...m.snippetProps}));s(n,()=>r.child,()=>f(e))}g(e,t)},S=e=>{var n=yr();V(n,()=>({...f(h)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(b,e=>{r.child?e(x):e(S,-1)}),g(n,y),v()}function xr(e,t){i(t,!0);let n=E(t,`open`,15,!1),r=E(t,`onOpenChange`,3,X),a=E(t,`onOpenChangeComplete`,3,X);Ye.create({variant:Y(()=>`alert-dialog`),open:Y(()=>n(),e=>{n(e),r()(e)}),onOpenChangeComplete:Y(()=>a())});var o=c(),l=B(o);s(l,()=>t.children??F),g(e,o),v()}var Sr=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`child`,`id`,`ref`]),Cr=u(`<button><!></button>`);function wr(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=z(r,Sr),d=We.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e))}),p=R(()=>J(u,d.props));var m=c(),h=B(m),y=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(p)})),g(e,t)},b=e=>{var n=Cr();V(n,()=>({...f(p)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(h,e=>{r.child?e(y):e(b,-1)}),g(n,m),v()}var Tr=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`children`,`child`,`disabled`]),Er=u(`<button><!></button>`);function Dr(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`disabled`,3,!1),d=z(r,Tr),p=Ue.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e)),disabled:Y(()=>!!u())}),m=R(()=>J(d,p.props));var h=c(),y=B(h),b=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(m)})),g(e,t)},x=e=>{var n=Er();V(n,()=>({...f(m)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(y,e=>{r.child?e(b):e(x,-1)}),g(n,h),v()}var Or=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`children`,`child`,`ref`,`forceMount`,`interactOutsideBehavior`,`onCloseAutoFocus`,`onEscapeKeydown`,`onOpenAutoFocus`,`onInteractOutside`,`preventScroll`,`trapFocus`,`restoreScrollDelay`]),kr=u(`<!> <!>`,1),Ar=u(`<!> <div><!></div>`,1);function jr(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`forceMount`,3,!1),d=E(r,`interactOutsideBehavior`,3,`ignore`),p=E(r,`onCloseAutoFocus`,3,X),m=E(r,`onEscapeKeydown`,3,X),h=E(r,`onOpenAutoFocus`,3,X),y=E(r,`onInteractOutside`,3,X),b=E(r,`preventScroll`,3,!0),x=E(r,`trapFocus`,3,!0),S=E(r,`restoreScrollDelay`,3,null),C=z(r,Or),w=Qe.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e))}),T=R(()=>J(C,w.props));var O=c(),k=B(O),A=n=>{Qt(n,{get ref(){return w.opts.ref},loop:!0,get trapFocus(){return x()},get enabled(){return w.root.opts.open.current},get onCloseAutoFocus(){return p()},onOpenAutoFocus:e=>{h()(e),!e.defaultPrevented&&(e.preventDefault(),nn(0,()=>w.opts.ref.current?.focus()))},focusScope:(n,i)=>{let a=()=>(i?.()).props;Lt(n,oe(()=>f(T),{get enabled(){return w.root.opts.open.current},get ref(){return w.opts.ref},onEscapeKeydown:e=>{m()(e),!e.defaultPrevented&&w.root.handleClose()},children:(n,i)=>{Rt(n,oe(()=>f(T),{get ref(){return w.opts.ref},get enabled(){return w.root.opts.open.current},get interactOutsideBehavior(){return d()},onInteractOutside:e=>{y()(e),!e.defaultPrevented&&w.root.handleClose()},children:(n,i)=>{Wt(n,oe(()=>f(T),{get ref(){return w.opts.ref},get enabled(){return w.root.opts.open.current},children:(n,i)=>{var o=c(),l=B(o),u=t=>{var n=kr(),i=B(n),o=e=>{Xt(e,{get preventScroll(){return b()},get restoreScrollDelay(){return S()}})};e(i,e=>{w.root.opts.open.current&&e(o)});var c=H(i,2);{let e=R(()=>({props:J(f(T),a()),...w.snippetProps}));s(c,()=>r.child,()=>f(e))}g(t,n)},d=e=>{var n=Ar(),i=B(n);Xt(i,{get preventScroll(){return b()}});var o=H(i,2);V(o,e=>({...e}),[()=>J(f(T),a())]);var c=D(o);s(c,()=>r.children??F),t(o),g(e,n)};e(l,e=>{r.child?e(u):e(d,-1)}),g(n,o)},$$slots:{default:!0}}))},$$slots:{default:!0}}))},$$slots:{default:!0}}))},$$slots:{focusScope:!0}})};e(k,e=>{(w.shouldRender||u())&&e(A)}),g(n,O),v()}var Mr=rt({component:`collapsible`,parts:[`root`,`content`,`trigger`]}),Nr=new St(`Collapsible.Root`),Pr=class e{static create(t){return Nr.set(new e(t))}opts;attachment;#e=N(null);get contentNode(){return f(this.#e)}set contentNode(e){U(this.#e,e,!0)}contentPresence;#t=N(void 0);get contentId(){return f(this.#t)}set contentId(e){U(this.#t,e,!0)}constructor(e){this.opts=e,this.toggleOpen=this.toggleOpen.bind(this),this.attachment=lt(this.opts.ref),this.contentPresence=new jt({ref:Y(()=>this.contentNode),open:this.opts.open,onComplete:()=>{this.opts.onOpenChangeComplete.current(this.opts.open.current)}})}toggleOpen(){this.opts.open.current=!this.opts.open.current}#n=R(()=>({id:this.opts.id.current,"data-state":ot(this.opts.open.current),"data-disabled":it(this.opts.disabled.current),[Mr.root]:``,...this.attachment}));get props(){return f(this.#n)}set props(e){U(this.#n,e)}},Fr=class e{static create(t){return new e(t,Nr.get())}opts;root;attachment;#e=R(()=>this.opts.hiddenUntilFound.current?this.root.opts.open.current:this.opts.forceMount.current||this.root.opts.open.current);get present(){return f(this.#e)}set present(e){U(this.#e,e)}#t;#n=N(!1);#r=N(0);#i=N(0);constructor(e,t){this.opts=e,this.root=t,U(this.#n,t.opts.open.current,!0),this.root.contentId=this.opts.id.current,this.attachment=lt(this.opts.ref,e=>this.root.contentNode=e),at.pre(()=>this.opts.id.current,e=>{this.root.contentId=e}),re(()=>{let e=requestAnimationFrame(()=>{U(this.#n,!1)});return()=>{cancelAnimationFrame(e)}}),at.pre([()=>this.opts.ref.current,()=>this.opts.hiddenUntilFound.current],([e,t])=>!e||!t?void 0:b(e,`beforematch`,()=>{this.root.opts.open.current||requestAnimationFrame(()=>{this.root.opts.open.current=!0})})),at([()=>this.opts.ref.current,()=>this.present],([e])=>{e&&Nt(()=>{if(!this.opts.ref.current)return;this.#t=this.#t||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration=`0s`,e.style.animationName=`none`;let t=e.getBoundingClientRect();if(U(this.#i,t.height,!0),U(this.#r,t.width,!0),!f(this.#n)){let{animationName:t,transitionDuration:n}=this.#t;e.style.transitionDuration=n,e.style.animationName=t}})})}get shouldRender(){return this.root.contentPresence.shouldRender}#a=R(()=>({open:this.root.opts.open.current}));get snippetProps(){return f(this.#a)}set snippetProps(e){U(this.#a,e)}#o=R(()=>({id:this.opts.id.current,style:{"--bits-collapsible-content-height":f(this.#i)?`${f(this.#i)}px`:void 0,"--bits-collapsible-content-width":f(this.#r)?`${f(this.#r)}px`:void 0},hidden:this.opts.hiddenUntilFound.current&&!this.root.opts.open.current?`until-found`:void 0,"data-state":ot(this.root.opts.open.current),...st(this.root.contentPresence.transitionStatus),"data-disabled":it(this.root.opts.disabled.current),[Mr.content]:``,...this.opts.hiddenUntilFound.current&&!this.shouldRender?{}:{hidden:this.opts.hiddenUntilFound.current?!this.shouldRender:this.opts.forceMount.current?void 0:!this.shouldRender},...this.attachment}));get props(){return f(this.#o)}set props(e){U(this.#o,e)}},Ir=class e{static create(t){return new e(t,Nr.get())}opts;root;attachment;#e=R(()=>this.opts.disabled.current||this.root.opts.disabled.current);constructor(e,t){this.opts=e,this.root=t,this.attachment=lt(this.opts.ref),this.onclick=this.onclick.bind(this),this.onkeydown=this.onkeydown.bind(this)}onclick(e){if(!f(this.#e)){if(e.button!==0)return e.preventDefault();this.root.toggleOpen()}}onkeydown(e){f(this.#e)||(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this.root.toggleOpen())}#t=R(()=>({id:this.opts.id.current,type:`button`,disabled:f(this.#e),"aria-controls":this.root.contentId,"aria-expanded":ct(this.root.opts.open.current),"data-state":ot(this.root.opts.open.current),"data-disabled":it(f(this.#e)),[Mr.trigger]:``,onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment}));get props(){return f(this.#t)}set props(e){U(this.#t,e)}},Lr=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`child`,`id`,`ref`,`open`,`disabled`,`onOpenChange`,`onOpenChangeComplete`]),Rr=u(`<div><!></div>`);function zr(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`open`,15,!1),d=E(r,`disabled`,3,!1),p=E(r,`onOpenChange`,3,X),m=E(r,`onOpenChangeComplete`,3,X),h=z(r,Lr),y=Pr.create({open:Y(()=>u(),e=>{u(e),p()(e)}),disabled:Y(()=>d()),id:Y(()=>o()),ref:Y(()=>l(),e=>l(e)),onOpenChangeComplete:Y(()=>m())}),b=R(()=>J(h,y.props));var x=c(),S=B(x),C=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(b)})),g(e,t)},w=e=>{var n=Rr();V(n,()=>({...f(b)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(S,e=>{r.child?e(C):e(w,-1)}),g(n,x),v()}var Br=new Set([`$$slots`,`$$events`,`$$legacy`,`child`,`ref`,`forceMount`,`hiddenUntilFound`,`children`,`id`]),Vr=u(`<div><!></div>`);function Hr(n,r){let a=_();i(r,!0);let o=E(r,`ref`,15,null),l=E(r,`forceMount`,3,!1),u=E(r,`hiddenUntilFound`,3,!1),d=E(r,`id`,19,()=>Z(a)),p=z(r,Br),m=Fr.create({id:Y(()=>d()),forceMount:Y(()=>l()),hiddenUntilFound:Y(()=>u()),ref:Y(()=>o(),e=>o(e))}),h=R(()=>J(p,m.props));var y=c(),b=B(y),x=e=>{var t=c(),n=B(t);{let e=R(()=>({...m.snippetProps,props:f(h)}));s(n,()=>r.child,()=>f(e))}g(e,t)},S=e=>{var n=Vr();V(n,()=>({...f(h)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(b,e=>{r.child?e(x):e(S,-1)}),g(n,y),v()}var Ur=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`child`,`ref`,`id`,`disabled`]),Wr=u(`<button><!></button>`);function Gr(n,r){let a=_();i(r,!0);let o=E(r,`ref`,15,null),l=E(r,`id`,19,()=>Z(a)),u=E(r,`disabled`,3,!1),d=z(r,Ur),p=Ir.create({id:Y(()=>l()),ref:Y(()=>o(),e=>o(e)),disabled:Y(()=>u())}),m=R(()=>J(d,p.props));var h=c(),y=B(h),b=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(m)})),g(e,t)},x=e=>{var n=Wr();V(n,()=>({...f(m)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(y,e=>{r.child?e(b):e(x,-1)}),g(n,h),v()}var Kr=u(`<!> <!>`,1);function qr(t,n){i(n,!0);let r=E(n,`value`,15),o=E(n,`onValueChange`,3,X),l=E(n,`name`,3,``),u=E(n,`disabled`,3,!1),d=E(n,`open`,15,!1),p=E(n,`onOpenChange`,3,X),m=E(n,`onOpenChangeComplete`,3,X),h=E(n,`loop`,3,!1),_=E(n,`scrollAlignment`,3,`nearest`),y=E(n,`required`,3,!1),b=E(n,`items`,19,()=>[]),x=E(n,`allowDeselect`,3,!0),S=E(n,`inputValue`,7,``);r()===void 0&&r(n.type===`single`?``:[]),at.pre(()=>r(),()=>{r()===void 0&&r(n.type===`single`?``:[])});let C=on.create({type:n.type,value:Y(()=>r(),e=>{r(e),o()(e)}),disabled:Y(()=>u()),required:Y(()=>y()),open:Y(()=>d(),e=>{d(e),p()(e)}),loop:Y(()=>h()),scrollAlignment:Y(()=>_()),name:Y(()=>l()),isCombobox:!0,items:Y(()=>b()),allowDeselect:Y(()=>x()),inputValue:Y(()=>S(),e=>S(e)),onOpenChangeComplete:Y(()=>m())});var w=Kr(),T=B(w);Vt(T,{children:(e,t)=>{var r=c(),i=B(r);s(i,()=>n.children??F),g(e,r)},$$slots:{default:!0}});var D=H(T,2),O=t=>{var n=c(),r=B(n),i=e=>{var t=c(),n=B(t);a(n,16,()=>C.opts.value.current,e=>e,(e,t)=>{an(e,{get value(){return t}})}),g(e,t)};e(r,e=>{C.opts.value.current.length&&e(i)}),g(t,n)},k=R(()=>Array.isArray(C.opts.value.current)),A=e=>{an(e,{get value(){return C.opts.value.current},set value(e){C.opts.value.current=e}})};e(D,e=>{f(k)?e(O):e(A,-1)}),g(t,w),v()}var Jr=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`children`,`child`,`width`,`height`]),Yr=p(`<svg viewBox="0 0 30 10" preserveAspectRatio="none" data-arrow=""><polygon points="0,0 30,0 15,10" fill="currentColor"></polygon></svg>`),Xr=u(`<span><!></span>`);function Zr(n,r){i(r,!0);let a=E(r,`id`,19,It),o=E(r,`width`,3,10),l=E(r,`height`,3,5),u=z(r,Jr),d=R(()=>J(u,{id:a()}));var p=c(),m=B(p),h=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(d)})),g(e,t)},_=n=>{var i=Xr();V(i,()=>({...f(d)}));var a=D(i),u=e=>{var t=c(),n=B(t);s(n,()=>r.children??F),g(e,t)},p=e=>{var t=Yr();j(()=>{P(t,`width`,o()),P(t,`height`,l())}),g(e,t)};e(a,e=>{r.children?e(u):e(p,-1)}),t(i),g(n,i)};e(m,e=>{r.child?e(h):e(_,-1)}),g(n,p),v()}var Qr=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`]);function $r(e,t){i(t,!0);let n=E(t,`id`,19,It),r=E(t,`ref`,15,null),a=z(t,Qr),o=Ft.create({id:Y(()=>n()),ref:Y(()=>r(),e=>r(e))}),s=R(()=>J(a,o.props));Zr(e,oe(()=>f(s))),v()}var ei=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`child`,`defaultValue`,`clearOnDeselect`]),ti=u(`<input/>`);function ni(t,n){i(n,!0);let r=E(n,`id`,19,It),a=E(n,`ref`,15,null),o=E(n,`clearOnDeselect`,3,!1),l=z(n,ei),u=hn.create({id:Y(()=>r()),ref:Y(()=>a(),e=>a(e)),clearOnDeselect:Y(()=>o())});n.defaultValue&&(u.root.opts.inputValue.current=n.defaultValue);let d=R(()=>J(l,u.props,{value:u.root.opts.inputValue.current}));var p=c(),m=B(p);y(m,()=>Yt,(t,i)=>{i(t,{get id(){return r()},get ref(){return u.opts.ref},children:(t,r)=>{var i=c(),a=B(i),o=e=>{var t=c(),r=B(t);s(r,()=>n.child,()=>({props:f(d)})),g(e,t)},l=e=>{var t=ti();V(t,()=>({...f(d)}),void 0,void 0,void 0,void 0,!0),g(e,t)};e(a,e=>{n.child?e(o):e(l,-1)}),g(t,i)},$$slots:{default:!0}})}),g(t,p),v()}var ri=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`child`,`children`,`type`]),ii=u(`<button><!></button>`);function ai(n,r){i(r,!0);let a=E(r,`id`,19,It),o=E(r,`ref`,15,null),l=E(r,`type`,3,`button`),u=z(r,ri),d=ln.create({id:Y(()=>a()),ref:Y(()=>o(),e=>o(e))}),p=R(()=>J(u,d.props,{type:l()}));var m=c(),h=B(m),_=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(p)})),g(e,t)},y=e=>{var n=ii();V(n,()=>({...f(p)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(h,e=>{r.child?e(_):e(y,-1)}),g(n,m),v()}function oi(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function si(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}function ci(e){if(typeof CSS<`u`&&typeof CSS.escape==`function`)return CSS.escape(e);let t=e.length,n=-1,r,i=``,a=e.charCodeAt(0);if(t===1&&a===45)return`\\`+e;for(;++n<t;){if(r=e.charCodeAt(n),r===0){i+=`�`;continue}if(r>=1&&r<=31||r===127||n===0&&r>=48&&r<=57||n===1&&r>=48&&r<=57&&a===45){i+=`\\`+r.toString(16)+` `;continue}if(r>=128||r===45||r===95||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122){i+=e.charAt(n);continue}i+=`\\`+e.charAt(n)}return i}var li=`data-value`,ui=rt({component:`command`,parts:[`root`,`list`,`input`,`separator`,`loading`,`empty`,`group`,`group-items`,`group-heading`,`item`,`viewport`,`input-label`]}),di=ui.selector(`group`),fi=ui.selector(`group-items`),pi=ui.selector(`group-heading`),mi=ui.selector(`item`),hi=`${ui.selector(`item`)}:not([aria-disabled="true"])`,gi=new St(`Command.Root`),_i=new St(`Command.List`),vi=new St(`Command.Group`),yi={search:``,value:``,filtered:{count:0,items:new Map,groups:new Set}},bi=class e{static create(t){return gi.set(new e(t))}opts;attachment;#e=!1;#t=!0;sortAfterTick=!1;sortAndFilterAfterTick=!1;allItems=new Set;allGroups=new Map;allIds=new Map;#n=N(0);get key(){return f(this.#n)}set key(e){U(this.#n,e,!0)}#r=N(null);get viewportNode(){return f(this.#r)}set viewportNode(e){U(this.#r,e,!0)}#i=N(null);get inputNode(){return f(this.#i)}set inputNode(e){U(this.#i,e,!0)}#a=N(null);get labelNode(){return f(this.#a)}set labelNode(e){U(this.#a,e,!0)}#o=N(yi);get commandState(){return f(this.#o)}set commandState(e){U(this.#o,e)}#s=N(k(yi));get _commandState(){return f(this.#s)}set _commandState(e){U(this.#s,e,!0)}#c(){return o(this._commandState)}#l(){this.#e||(this.#e=!0,Nt(()=>{this.#e=!1;let e=this.#c();Object.is(this.commandState,e)||(this.commandState=e,this.opts.onStateChange?.current?.(e))}))}setState(e,t,n){Object.is(this._commandState[e],t)||(this._commandState[e]=t,e===`search`?(this.#m(),this.#d()):e===`value`&&(n||this.#g()),this.#l())}constructor(e){this.opts=e,this.attachment=lt(this.opts.ref);let t={...this._commandState,value:this.opts.value.current??``};this._commandState=t,this.commandState=t,this.onkeydown=this.onkeydown.bind(this)}#u(e,t){let n=this.opts.filter.current??ba;return e?n(e,this._commandState.search,t):0}#d(){if(!this._commandState.search||this.opts.shouldFilter.current===!1){!this._commandState.value||!this.#t?this.#f():this.#t&&this._commandState.value&&this.#p();return}let e=this._commandState.filtered.items,t=[];for(let n of this._commandState.filtered.groups){let r=this.allGroups.get(n),i=0;if(!r){t.push([n,i]);continue}for(let t of r){let n=e.get(t);i=Math.max(n??0,i)}t.push([n,i])}let n=this.viewportNode,r=this.getValidItems().sort((t,n)=>{let r=t.getAttribute(`data-value`),i=n.getAttribute(`data-value`),a=e.get(r)??0;return(e.get(i)??0)-a});for(let e of r){let t=e.closest(fi);if(t){let n=e.parentElement===t?e:e.closest(`${fi} > *`);n&&t.appendChild(n)}else{let t=e.parentElement===n?e:e.closest(`${fi} > *`);t&&n?.appendChild(t)}}let i=t.sort((e,t)=>t[1]-e[1]);for(let e of i){let t=n?.querySelector(`${di}[${li}="${ci(e[0])}"]`);t?.parentElement?.appendChild(t)}this.#f()}setValue(e,t){e!==this.opts.value.current&&e===``&&Nt(()=>{this.key++}),this.setState(`value`,e,t),this.opts.value.current=e}#f(){Nt(()=>{let e=this.getValidItems().find(e=>e.getAttribute(`aria-disabled`)!==`true`)?.getAttribute(li),t=this.#t&&this.opts.disableInitialScroll.current;this.setValue(e??``,t),this.#t=!1})}#p(){Nt(()=>{this.opts.disableInitialScroll.current||this.#g(),this.#t=!1})}#m(){if(!this._commandState.search||this.opts.shouldFilter.current===!1){this._commandState.filtered.count=this.allItems.size;return}this._commandState.filtered.groups=new Set;let e=0;for(let t of this.allItems){let n=this.allIds.get(t)?.value??``,r=this.allIds.get(t)?.keywords??[],i=this.#u(n,r);this._commandState.filtered.items.set(t,i),i>0&&e++}for(let[e,t]of this.allGroups)for(let n of t){let t=this._commandState.filtered.items.get(n);if(t&&t>0){this._commandState.filtered.groups.add(e);break}}this._commandState.filtered.count=e}getValidItems(){let e=this.opts.ref.current;return e?Array.from(e.querySelectorAll(hi)).filter(e=>!!e):[]}getVisibleItems(){let e=this.opts.ref.current;return e?Array.from(e.querySelectorAll(mi)).filter(e=>!!e):[]}get itemsGrid(){if(!this.isGrid)return[];let e=this.opts.columns.current??1,t=this.getVisibleItems(),n=[[]],r=t[0]?.getAttribute(`data-group`),i=0,a=0;for(let o=0;o<t.length;o++){let s=t[o],c=s?.getAttribute(`data-group`);r===c?(i++,i>e&&(a++,i=1,n.push([])),n[a]?.push({index:o,firstRowOfGroup:n[a]?.[0]?.firstRowOfGroup??o===0,ref:s})):(r=c,i=1,a++,n.push([{index:o,firstRowOfGroup:!0,ref:s}]))}return n}#h(){let e=this.opts.ref.current;if(!e)return;let t=e.querySelector(`${hi}[data-selected]`);if(t)return t}#g(){Nt(()=>{let e=this.#h();if(!e)return;let t=e.parentElement?.parentElement;if(t){if(this.isGrid){let t=this.#_(e);if(e.scrollIntoView({block:`nearest`}),t){(e?.closest(di)?.querySelector(pi))?.scrollIntoView({block:`nearest`});return}}else{let n=Tt(t);if(n&&n.dataset?.value===e.dataset?.value){(e?.closest(di)?.querySelector(pi))?.scrollIntoView({block:`nearest`});return}}e.scrollIntoView({block:`nearest`})}})}#_(e){let t=this.itemsGrid;if(t.length===0)return!1;for(let n=0;n<t.length;n++){let r=t[n];if(r!==void 0)for(let t=0;t<r.length;t++){let n=r[t];if(n!==void 0&&n.ref===e)return n.firstRowOfGroup}}return!1}updateSelectedToIndex(e){let t=this.getValidItems()[e];t&&this.setValue(t.getAttribute(li)??``)}updateSelectedByItem(e){let t=this.#h(),n=this.getValidItems(),r=n.findIndex(e=>e===t),i=n[r+e];this.opts.loop.current&&(i=r+e<0?n[n.length-1]:r+e===n.length?n[0]:n[r+e]),i&&this.setValue(i.getAttribute(li)??``)}updateSelectedByGroup(e){let t=this.#h()?.closest(di),n;for(;t&&!n;)t=e>0?oi(t,di):si(t,di),n=t?.querySelector(hi);n?this.setValue(n.getAttribute(li)??``):this.updateSelectedByItem(e)}registerValue(e,t){return e&&e===this.allIds.get(e)?.value||this.allIds.set(e,{value:e,keywords:t}),this._commandState.filtered.items.set(e,this.#u(e,t)),this.sortAfterTick||(this.sortAfterTick=!0,Nt(()=>{this.#d(),this.sortAfterTick=!1})),()=>{this.allIds.delete(e)}}registerItem(e,t){return this.allItems.add(e),t&&(this.allGroups.has(t)?this.allGroups.get(t).add(e):this.allGroups.set(t,new Set([e]))),this.sortAndFilterAfterTick||(this.sortAndFilterAfterTick=!0,Nt(()=>{this.#m(),this.#d(),this.sortAndFilterAfterTick=!1})),this.#l(),()=>{let t=this.#h();this.allItems.delete(e),this.commandState.filtered.items.delete(e),this.#m(),t?.getAttribute(`id`)===e&&this.#f(),this.#l()}}registerGroup(e){return this.allGroups.has(e)||this.allGroups.set(e,new Set),()=>{this.allIds.delete(e),this.allGroups.delete(e)}}get isGrid(){return this.opts.columns.current!==null}#v(){return this.updateSelectedToIndex(this.getValidItems().length-1)}#y(e){e.preventDefault(),e.metaKey?this.#v():e.altKey?this.updateSelectedByGroup(1):this.updateSelectedByItem(1)}#b(e){this.opts.columns.current!==null&&(e.preventDefault(),e.metaKey?this.updateSelectedByGroup(1):this.updateSelectedByItem(this.#S(e)))}#x(e,t){if(t.length===0)return null;for(let n=0;n<t.length;n++){let r=t[n];if(r!==void 0)for(let t=0;t<r.length;t++){let i=r[t];if(i!==void 0&&i.ref===e)return{columnIndex:t,rowIndex:n}}}return null}#S(e){let t=this.itemsGrid,n=this.#h();if(!n)return 0;let r=this.#x(n,t);if(!r)return 0;let i=null,a=+!!e.altKey;if(e.altKey&&r.rowIndex===t.length-2&&!this.opts.loop.current)i=this.#C({start:t.length-1,end:t.length,expectedColumnIndex:r.columnIndex,grid:t});else if(r.rowIndex===t.length-1){if(!this.opts.loop.current)return 0;i=this.#C({start:0+a,end:r.rowIndex,expectedColumnIndex:r.columnIndex,grid:t})}else i=this.#C({start:r.rowIndex+1+a,end:t.length,expectedColumnIndex:r.columnIndex,grid:t}),i===null&&this.opts.loop.current&&(i=this.#C({start:0,end:r.rowIndex,expectedColumnIndex:r.columnIndex,grid:t}));return this.#w(n,i)}#C({start:e,end:t,grid:n,expectedColumnIndex:r}){let i=null;for(let a=e;a<t;a++){let e=n[a];if(i=e[r]?.ref??null,i!==null&&xi(i)){i=null;continue}if(i===null)for(let t=e.length-1;t>=0;t--){let t=e[e.length-1];if(!(t===void 0||xi(t.ref))){i=t.ref;break}}break}return i}#w(e,t){if(t===null)return 0;let n=this.getValidItems(),r=n.findIndex(t=>t===e);return n.findIndex(e=>e===t)-r}#T(e){this.opts.columns.current!==null&&(e.preventDefault(),e.metaKey?this.updateSelectedByGroup(-1):this.updateSelectedByItem(this.#E(e)))}#E(e){let t=this.itemsGrid,n=this.#h();if(n===void 0)return 0;let r=this.#x(n,t);if(r===null)return 0;let i=null,a=+!!e.altKey;if(e.altKey&&r.rowIndex===1&&this.opts.loop.current===!1)i=this.#D({start:0,end:0,expectedColumnIndex:r.columnIndex,grid:t});else if(r.rowIndex===0){if(this.opts.loop.current===!1)return 0;i=this.#D({start:t.length-1-a,end:r.rowIndex+1,expectedColumnIndex:r.columnIndex,grid:t})}else i=this.#D({start:r.rowIndex-1-a,end:0,expectedColumnIndex:r.columnIndex,grid:t}),i===null&&this.opts.loop.current&&(i=this.#D({start:t.length-1,end:r.rowIndex+1,expectedColumnIndex:r.columnIndex,grid:t}));return this.#w(n,i)}#D({start:e,end:t,grid:n,expectedColumnIndex:r}){let i=null;for(let a=e;a>=t;a--){let e=n[a];if(e!==void 0){if(i=e[r]?.ref??null,i!==null&&xi(i)){i=null;continue}if(i===null)for(let t=e.length-1;t>=0;t--){let t=e[e.length-1];if(!(t===void 0||xi(t.ref))){i=t.ref;break}}break}}return i}#O(e){e.preventDefault(),e.metaKey?this.updateSelectedToIndex(0):e.altKey?this.updateSelectedByGroup(-1):this.updateSelectedByItem(-1)}onkeydown(e){let t=this.opts.vimBindings.current&&e.ctrlKey;switch(e.key){case`n`:case`j`:t&&(this.isGrid?this.#b(e):this.#y(e));break;case`l`:t&&this.isGrid&&this.#y(e);break;case vt:this.isGrid?this.#b(e):this.#y(e);break;case gt:if(!this.isGrid)break;this.#y(e);break;case`p`:case`k`:t&&(this.isGrid?this.#T(e):this.#O(e));break;case`h`:t&&this.isGrid&&this.#O(e);break;case ht:this.isGrid?this.#T(e):this.#O(e);break;case _t:if(!this.isGrid)break;this.#O(e);break;case dt:e.preventDefault(),this.updateSelectedToIndex(0);break;case`End`:e.preventDefault(),this.#v();break;case mt:if(!e.isComposing&&e.keyCode!==229){e.preventDefault();let t=this.#h();t&&t?.click()}}}#k=R(()=>({id:this.opts.id.current,role:`application`,[ui.root]:``,tabindex:-1,onkeydown:this.onkeydown,...this.attachment}));get props(){return f(this.#k)}set props(e){U(this.#k,e)}};function xi(e){return e.getAttribute(`aria-disabled`)===`true`}var Si=class e{static create(t){return new e(t,gi.get())}opts;root;attachment;#e=R(()=>this.root._commandState.filtered.count===0&&this.#t===!1||this.opts.forceMount.current);get shouldRender(){return f(this.#e)}set shouldRender(e){U(this.#e,e)}#t=!0;constructor(e,t){this.opts=e,this.root=t,this.attachment=lt(this.opts.ref),re(()=>{this.#t=!1})}#n=R(()=>({id:this.opts.id.current,role:`presentation`,[ui.empty]:``,...this.attachment}));get props(){return f(this.#n)}set props(e){U(this.#n,e)}},Ci=class e{static create(t){return vi.set(new e(t,gi.get()))}opts;root;attachment;#e=R(()=>this.opts.forceMount.current||this.root.opts.shouldFilter.current===!1||!this.root.commandState.search?!0:this.root._commandState.filtered.groups.has(this.trueValue));get shouldRender(){return f(this.#e)}set shouldRender(e){U(this.#e,e)}#t=N(null);get headingNode(){return f(this.#t)}set headingNode(e){U(this.#t,e,!0)}#n=N(``);get trueValue(){return f(this.#n)}set trueValue(e){U(this.#n,e,!0)}constructor(e,t){this.opts=e,this.root=t,this.attachment=lt(this.opts.ref),this.trueValue=e.value.current??e.id.current,at(()=>this.trueValue,()=>this.root.registerGroup(this.trueValue)),se(()=>this.opts.value.current?(this.trueValue=this.opts.value.current,this.root.registerValue(this.opts.value.current)):this.headingNode&&this.headingNode.textContent?(this.trueValue=this.headingNode.textContent.trim().toLowerCase(),this.root.registerValue(this.trueValue)):(this.trueValue=`-----${this.opts.id.current}`,this.root.registerValue(this.trueValue)))}#r=R(()=>({id:this.opts.id.current,role:`presentation`,hidden:!this.shouldRender||void 0,"data-value":this.trueValue,[ui.group]:``,...this.attachment}));get props(){return f(this.#r)}set props(e){U(this.#r,e)}},wi=class e{static create(t){return new e(t,vi.get())}opts;group;attachment;constructor(e,t){this.opts=e,this.group=t,this.attachment=lt(this.opts.ref,e=>this.group.headingNode=e)}#e=R(()=>({id:this.opts.id.current,[ui[`group-heading`]]:``,...this.attachment}));get props(){return f(this.#e)}set props(e){U(this.#e,e)}},Ti=class e{static create(t){return new e(t,vi.get())}opts;group;attachment;constructor(e,t){this.opts=e,this.group=t,this.attachment=lt(this.opts.ref)}#e=R(()=>({id:this.opts.id.current,role:`group`,[ui[`group-items`]]:``,"aria-labelledby":this.group.headingNode?.id??void 0,...this.attachment}));get props(){return f(this.#e)}set props(e){U(this.#e,e)}},Ei=class e{static create(t){return new e(t,gi.get())}opts;root;attachment;#e=R(()=>{let e=this.root.viewportNode?.querySelector(`${mi}[${li}="${ci(this.root.opts.value.current)}"]`);if(e!=null)return e.getAttribute(`id`)??void 0});constructor(e,t){this.opts=e,this.root=t,this.attachment=lt(this.opts.ref,e=>this.root.inputNode=e),at(()=>this.opts.ref.current,()=>{let e=this.opts.ref.current;e&&this.opts.autofocus.current&&nn(10,()=>e.focus())}),at(()=>this.opts.value.current,()=>{this.root.commandState.search!==this.opts.value.current&&this.root.setState(`search`,this.opts.value.current)})}#t=R(()=>({id:this.opts.id.current,type:`text`,[ui.input]:``,autocomplete:`off`,autocorrect:`off`,spellcheck:!1,"aria-autocomplete":`list`,role:`combobox`,"aria-expanded":ct(!0),"aria-controls":this.root.viewportNode?.id??void 0,"aria-labelledby":this.root.labelNode?.id??void 0,"aria-activedescendant":f(this.#e),...this.attachment}));get props(){return f(this.#t)}set props(e){U(this.#t,e)}},Di=class e{static create(t){let n=vi.getOr(null);return new e({...t,group:n},gi.get())}opts;root;attachment;#e=null;#t=R(()=>this.opts.forceMount.current||this.#e?.opts.forceMount.current===!0);#n=R(()=>{if(this.opts.ref.current,f(this.#t)||this.root.opts.shouldFilter.current===!1||!this.root.commandState.search)return!0;let e=this.root.commandState.filtered.items.get(this.trueValue);return e!==void 0&&e>0});get shouldRender(){return f(this.#n)}set shouldRender(e){U(this.#n,e)}#r=R(()=>this.root.opts.value.current===this.trueValue&&this.trueValue!==``);get isSelected(){return f(this.#r)}set isSelected(e){U(this.#r,e)}#i=N(``);get trueValue(){return f(this.#i)}set trueValue(e){U(this.#i,e,!0)}constructor(e,t){this.opts=e,this.root=t,this.#e=vi.getOr(null),this.trueValue=e.value.current,this.attachment=lt(this.opts.ref),at([()=>this.trueValue,()=>this.#e?.trueValue,()=>this.opts.forceMount.current],()=>{if(!this.opts.forceMount.current&&this.trueValue)return this.root.registerItem(this.trueValue,this.#e?.trueValue)}),at([()=>this.opts.value.current,()=>this.opts.ref.current],()=>{this.opts.value.current?this.trueValue=this.opts.value.current:this.opts.ref.current?.textContent&&(this.trueValue=this.opts.ref.current.textContent.trim()),this.trueValue&&(this.root.registerValue(this.trueValue,e.keywords.current.map(e=>e.trim())),this.opts.ref.current?.setAttribute(li,this.trueValue))}),this.onclick=this.onclick.bind(this),this.onpointermove=this.onpointermove.bind(this)}#a(){this.opts.disabled.current||(this.#o(),this.opts.onSelect?.current())}#o(){this.opts.disabled.current||this.root.setValue(this.trueValue,!0)}onpointermove(e){this.opts.disabled.current||this.root.opts.disablePointerSelection.current||this.#o()}onclick(e){this.opts.disabled.current||this.#a()}#s=R(()=>({id:this.opts.id.current,"aria-disabled":ct(this.opts.disabled.current),"aria-selected":ct(this.isSelected),"data-disabled":it(this.opts.disabled.current),"data-selected":it(this.isSelected),"data-value":this.trueValue,"data-group":this.#e?.trueValue,[ui.item]:``,role:`option`,onpointermove:this.onpointermove,onclick:this.onclick,...this.attachment}));get props(){return f(this.#s)}set props(e){U(this.#s,e)}},Oi=class e{static create(t){return _i.set(new e(t,gi.get()))}opts;root;attachment;constructor(e,t){this.opts=e,this.root=t,this.attachment=lt(this.opts.ref)}#e=R(()=>({id:this.opts.id.current,role:`listbox`,"aria-label":this.opts.ariaLabel.current,[ui.list]:``,...this.attachment}));get props(){return f(this.#e)}set props(e){U(this.#e,e)}},ki=class e{static create(t){return new e(t,gi.get())}opts;root;attachment;constructor(e,t){this.opts=e,this.root=t,this.attachment=lt(this.opts.ref,e=>this.root.labelNode=e)}#e=R(()=>({id:this.opts.id.current,[ui[`input-label`]]:``,for:this.opts.for?.current,style:wt,...this.attachment}));get props(){return f(this.#e)}set props(e){U(this.#e,e)}},Ai=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`children`]),ji=u(`<label><!></label>`);function Mi(e,n){let r=_();i(n,!0);let a=E(n,`id`,19,()=>Z(r)),o=E(n,`ref`,15,null),c=z(n,Ai),l=ki.create({id:Y(()=>a()),ref:Y(()=>o(),e=>o(e))}),u=R(()=>J(c,l.props));var d=ji();V(d,()=>({...f(u)}));var p=D(d);s(p,()=>n.children??F),t(d),g(e,d),v()}var Ni=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`value`,`onValueChange`,`onStateChange`,`loop`,`shouldFilter`,`filter`,`label`,`vimBindings`,`disablePointerSelection`,`disableInitialScroll`,`columns`,`children`,`child`]),Pi=u(`<!> <!>`,1),Fi=u(`<div><!> <!></div>`);function Ii(n,r){let a=_();i(r,!0);let o=e=>{Mi(e,{children:(e,t)=>{L();var n=W();j(()=>m(n,S())),g(e,n)},$$slots:{default:!0}})},l=E(r,`id`,19,()=>Z(a)),u=E(r,`ref`,15,null),d=E(r,`value`,15,``),p=E(r,`onValueChange`,3,X),h=E(r,`onStateChange`,3,X),y=E(r,`loop`,3,!1),b=E(r,`shouldFilter`,3,!0),x=E(r,`filter`,3,ba),S=E(r,`label`,3,``),C=E(r,`vimBindings`,3,!0),w=E(r,`disablePointerSelection`,3,!1),T=E(r,`disableInitialScroll`,3,!1),O=E(r,`columns`,3,null),k=z(r,Ni),A=bi.create({id:Y(()=>l()),ref:Y(()=>u(),e=>u(e)),filter:Y(()=>x()),shouldFilter:Y(()=>b()),loop:Y(()=>y()),value:Y(()=>d(),e=>{d()!==e&&(d(e),p()(e))}),vimBindings:Y(()=>C()),disablePointerSelection:Y(()=>w()),disableInitialScroll:Y(()=>T()),onStateChange:Y(()=>h()),columns:Y(()=>O())}),M=e=>A.updateSelectedToIndex(e),N=e=>A.updateSelectedByGroup(e),P=e=>A.updateSelectedByItem(e),I=()=>A.getValidItems(),ee=R(()=>J(k,A.props));var te={updateSelectedToIndex:M,updateSelectedByGroup:N,updateSelectedByItem:P,getValidItems:I},ne=c(),re=B(ne),ie=e=>{var t=Pi(),n=B(t);o(n);var i=H(n,2);s(i,()=>r.child,()=>({props:f(ee)})),g(e,t)},ae=e=>{var n=Fi();V(n,()=>({...f(ee)}));var i=D(n);o(i);var a=H(i,2);s(a,()=>r.children??F),t(n),g(e,n)};return e(re,e=>{r.child?e(ie):e(ae,-1)}),g(n,ne),v(te)}var Li=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`children`,`child`,`forceMount`]),Ri=u(`<div><!></div>`);function zi(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`forceMount`,3,!1),d=z(r,Li),p=Si.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e)),forceMount:Y(()=>u())}),m=R(()=>J(p.props,d));var h=c(),y=B(h),b=n=>{var i=c(),a=B(i),o=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(m)})),g(e,t)},l=e=>{var n=Ri();V(n,()=>({...f(m)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(a,e=>{r.child?e(o):e(l,-1)}),g(n,i)};e(y,e=>{p.shouldRender&&e(b)}),g(n,h),v()}var Bi=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`value`,`forceMount`,`children`,`child`]),Vi=u(`<div><!></div>`);function Hi(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`value`,3,``),d=E(r,`forceMount`,3,!1),p=z(r,Bi),m=Ci.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e)),forceMount:Y(()=>d()),value:Y(()=>u())}),h=R(()=>J(p,m.props));var y=c(),b=B(y),x=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(h)})),g(e,t)},S=e=>{var n=Vi();V(n,()=>({...f(h)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(b,e=>{r.child?e(x):e(S,-1)}),g(n,y),v()}var Ui=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`children`,`child`]),Wi=u(`<div><!></div>`);function Gi(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=z(r,Ui),d=wi.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e))}),p=R(()=>J(u,d.props));var m=c(),h=B(m),y=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(p)})),g(e,t)},b=e=>{var n=Wi();V(n,()=>({...f(p)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(h,e=>{r.child?e(y):e(b,-1)}),g(n,m),v()}var Ki=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`children`,`child`]),qi=u(`<div><!></div>`),Ji=u(`<div style="display: contents;"><!></div>`);function Yi(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=z(r,Ki),d=Ti.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e))}),p=R(()=>J(u,d.props));var m=Ji(),h=D(m),y=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(p)})),g(e,t)},b=e=>{var n=qi();V(n,()=>({...f(p)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(h,e=>{r.child?e(y):e(b,-1)}),t(m),g(n,m),v()}var Xi=new Set([`$$slots`,`$$events`,`$$legacy`,`value`,`autofocus`,`id`,`ref`,`child`]),Zi=u(`<input/>`);function Qi(t,n){let r=_();i(n,!0);let a=E(n,`value`,15,``),o=E(n,`autofocus`,3,!1),l=E(n,`id`,19,()=>Z(r)),u=E(n,`ref`,15,null),d=z(n,Xi),p=Ei.create({id:Y(()=>l()),ref:Y(()=>u(),e=>u(e)),value:Y(()=>a(),e=>{a(e)}),autofocus:Y(()=>o()??!1)}),m=R(()=>J(d,p.props));var h=c(),y=B(h),b=e=>{var t=c(),r=B(t);s(r,()=>n.child,()=>({props:f(m)})),g(e,t)},x=e=>{var t=Zi();V(t,()=>({...f(m)}),void 0,void 0,void 0,void 0,!0),A(t,a),g(e,t)};e(y,e=>{n.child?e(b):e(x,-1)}),g(t,h),v()}var $i=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`value`,`disabled`,`children`,`child`,`onSelect`,`forceMount`,`keywords`]),ea=u(`<div><!></div>`),ta=u(`<div style="display: contents;" data-item-wrapper=""><!></div>`);function na(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`value`,3,``),d=E(r,`disabled`,3,!1),p=E(r,`onSelect`,3,X),m=E(r,`forceMount`,3,!1),h=E(r,`keywords`,19,()=>[]),y=z(r,$i),b=Di.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e)),value:Y(()=>u()),disabled:Y(()=>d()),onSelect:Y(()=>p()),forceMount:Y(()=>m()),keywords:Y(()=>h())}),x=R(()=>J(y,b.props));var S=c(),C=B(S);I(C,()=>b.root.key,n=>{var i=ta(),a=D(i),o=n=>{var i=c(),a=B(i),o=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(x)})),g(e,t)},l=e=>{var n=ea();V(n,()=>({...f(x)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(a,e=>{r.child?e(o):e(l,-1)}),g(n,i)};e(a,e=>{b.shouldRender&&e(o)}),t(i),j(()=>P(i,`data-value`,b.trueValue)),g(n,i)}),g(n,S),v()}var ra=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`child`,`children`,`aria-label`]),ia=u(`<div><!></div>`);function aa(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=z(r,ra),d=Oi.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e)),ariaLabel:Y(()=>r[`aria-label`]??`Suggestions...`)}),p=R(()=>J(u,d.props));var m=c(),h=B(m);I(h,()=>d.root._commandState.search===``,n=>{var i=c(),a=B(i),o=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(p)})),g(e,t)},l=e=>{var n=ia();V(n,()=>({...f(p)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(a,e=>{r.child?e(o):e(l,-1)}),g(n,i)}),g(n,m),v()}var oa=1,sa=.9,ca=.8,la=.17,ua=.1,da=.999,fa=.9999,pa=.99,ma=/[\\/_+.#"@[({&]/,ha=/[\\/_+.#"@[({&]/g,ga=/[\s-]/,_a=/[\s-]/g;function va(e,t,n,r,i,a,o){if(a===t.length)return i===e.length?oa:pa;let s=`${i},${a}`;if(o[s]!==void 0)return o[s];let c=r.charAt(a),l=n.indexOf(c,i),u=0,d,f,p,m;for(;l>=0;)d=va(e,t,n,r,l+1,a+1,o),d>u&&(l===i?d*=oa:ma.test(e.charAt(l-1))?(d*=ca,p=e.slice(i,l-1).match(ha),p&&i>0&&(d*=da**p.length)):ga.test(e.charAt(l-1))?(d*=sa,m=e.slice(i,l-1).match(_a),m&&i>0&&(d*=da**m.length)):(d*=la,i>0&&(d*=da**(l-i))),e.charAt(l)!==t.charAt(a)&&(d*=fa)),(d<ua&&n.charAt(l-1)===r.charAt(a+1)||r.charAt(a+1)===r.charAt(a)&&n.charAt(l-1)!==r.charAt(a))&&(f=va(e,t,n,r,l+1,a+2,o),f*ua>d&&(d=f*ua)),d>u&&(u=d),l=n.indexOf(c,l+1);return o[s]=u,u}function ya(e){return e.toLowerCase().replace(_a,` `)}function ba(e,t,n){return e=n&&n.length>0?`${`${e} ${n?.join(` `)}`}`:e,va(e,t,ya(e),ya(t),0,0,{})}function xa(e,t){i(t,!0);let n=E(t,`open`,15,!1),r=E(t,`dir`,3,`ltr`),a=E(t,`onOpenChange`,3,X),o=E(t,`onOpenChangeComplete`,3,X),l=tn.create({variant:Y(()=>`context-menu`),dir:Y(()=>r()),onClose:()=>{n(!1),a()?.(!1)}});$t.create({open:Y(()=>n(),e=>{n(e),a()(e)}),onOpenChangeComplete:Y(()=>o())},l),Vt(e,{children:(e,n)=>{var r=c(),i=B(r);s(i,()=>t.children??F),g(e,r)},$$slots:{default:!0}}),v()}var Sa=new Set([`$$slots`,`$$events`,`$$legacy`,`child`,`children`,`ref`,`id`,`disabled`,`onSelect`,`closeOnSelect`]),Ca=u(`<div><!></div>`);function wa(n,r){let a=_();i(r,!0);let o=E(r,`ref`,15,null),l=E(r,`id`,19,()=>Z(a)),u=E(r,`disabled`,3,!1),d=E(r,`onSelect`,3,X),p=E(r,`closeOnSelect`,3,!0),m=z(r,Sa),h=Pt.create({id:Y(()=>l()),disabled:Y(()=>u()),onSelect:Y(()=>d()),ref:Y(()=>o(),e=>o(e)),closeOnSelect:Y(()=>p())}),y=R(()=>J(m,h.props));var b=c(),x=B(b),S=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(y)})),g(e,t)},C=e=>{var n=Ca();V(n,()=>({...f(y)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(x,e=>{r.child?e(S):e(C,-1)}),g(n,b),v()}var Ta=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`child`,`children`,`ref`,`loop`,`onInteractOutside`,`onCloseAutoFocus`,`onOpenAutoFocus`,`preventScroll`,`side`,`sideOffset`,`align`,`onEscapeKeydown`,`forceMount`,`trapFocus`,`style`]),Ea=u(`<div><div><!></div></div>`);function Da(n,r){i(r,!0);let a=E(r,`id`,19,It),o=E(r,`ref`,15,null),l=E(r,`loop`,3,!0),u=E(r,`onInteractOutside`,3,X),d=E(r,`onCloseAutoFocus`,3,X),p=E(r,`onOpenAutoFocus`,3,X),m=E(r,`preventScroll`,3,!0),h=E(r,`side`,3,`right`),_=E(r,`sideOffset`,3,2),y=E(r,`align`,3,`start`),b=E(r,`onEscapeKeydown`,3,X),x=E(r,`forceMount`,3,!1),S=E(r,`trapFocus`,3,!1),C=z(r,Ta),w=zt.create({id:Y(()=>a()),loop:Y(()=>l()),ref:Y(()=>o(),e=>o(e)),onCloseAutoFocus:Y(()=>d())}),T=R(()=>J(C,w.props,{side:h(),sideOffset:_(),align:y(),onOpenAutoFocus:p(),isValidEvent:A,trapFocus:S(),loop:l(),id:a(),ref:w.opts.ref,preventScroll:m(),onInteractOutside:O,onEscapeKeydown:k,shouldRender:w.shouldRender}));function O(e){if(u()(e),!e.defaultPrevented){if(e.target&&e.target instanceof Element){let t=`[${w.parentMenu.root.getBitsAttr(`sub-content`)}]`;if(e.target.closest(t))return}w.parentMenu.onClose()}}function k(e){b()(e),!e.defaultPrevented&&w.parentMenu.onClose()}function A(e){if(`button`in e&&e.button===2){let t=e.target;return t?t.closest(`[${Jt}]`)!==w.parentMenu.triggerNode:!1}return!1}var j=c(),M=B(j),N=n=>{Zt(n,oe(()=>f(T),()=>w.popperProps,{get enabled(){return w.parentMenu.opts.open.current},popper:(n,i)=>{let a=()=>(i?.()).props,o=()=>(i?.()).wrapperProps,l=R(()=>J(a(),{style:qt(`context-menu`)},{style:r.style}));var u=c(),d=B(u),p=e=>{var t=c(),n=B(t);{let e=R(()=>({props:f(l),wrapperProps:o(),...w.snippetProps}));s(n,()=>r.child,()=>f(e))}g(e,t)},m=e=>{var n=Ea();V(n,()=>({...o()}));var i=D(n);V(i,()=>({...f(l)}));var a=D(i);s(a,()=>r.children??F),t(i),t(n),g(e,n)};e(d,e=>{r.child?e(p):e(m,-1)}),g(n,u)},$$slots:{popper:!0}}))},P=n=>{Kt(n,oe(()=>f(T),()=>w.popperProps,{get open(){return w.parentMenu.opts.open.current},popper:(n,i)=>{let a=()=>(i?.()).props,o=()=>(i?.()).wrapperProps,l=R(()=>J(a(),{style:qt(`context-menu`)},{style:r.style}));var u=c(),d=B(u),p=e=>{var t=c(),n=B(t);{let e=R(()=>({props:f(l),wrapperProps:o(),...w.snippetProps}));s(n,()=>r.child,()=>f(e))}g(e,t)},m=e=>{var n=Ea();V(n,()=>({...o()}));var i=D(n);V(i,()=>({...f(l)}));var a=D(i);s(a,()=>r.children??F),t(i),t(n),g(e,n)};e(d,e=>{r.child?e(p):e(m,-1)}),g(n,u)},$$slots:{popper:!0}}))};e(M,e=>{x()?e(N):x()||e(P,1)}),g(n,j),v()}var Oa=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`child`,`children`,`disabled`]),ka=u(`<div><!></div>`);function Aa(n,r){i(r,!0);let a=E(r,`id`,19,It),o=E(r,`ref`,15,null),l=E(r,`disabled`,3,!1),u=z(r,Oa),d=Gt.create({id:Y(()=>a()),disabled:Y(()=>l()),ref:Y(()=>o(),e=>o(e))}),p=R(()=>J(u,d.props,{style:{pointerEvents:`auto`}},{style:r.style,tabindex:r.tabindex}));var m=c(),h=B(m);y(h,()=>Yt,(n,i)=>{i(n,{get id(){return a()},get virtualEl(){return d.virtualElement},get ref(){return d.opts.ref},children:(n,i)=>{var a=c(),o=B(a),l=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(p)})),g(e,t)},u=e=>{var n=ka();V(n,()=>({...f(p)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(o,e=>{r.child?e(l):e(u,-1)}),g(n,a)},$$slots:{default:!0}})}),g(n,m),v()}function ja(e,t){i(t,!0);let n=E(t,`open`,15,!1),r=E(t,`dir`,3,`ltr`),a=E(t,`onOpenChange`,3,X),o=E(t,`onOpenChangeComplete`,3,X),l=E(t,`_internal_variant`,3,`dropdown-menu`),u=E(t,`_internal_should_skip_exit_animation`,3,void 0),d=tn.create({variant:Y(()=>l()),dir:Y(()=>r()),onClose:()=>{n(!1),a()(!1)},shouldSkipExitAnimation:()=>u()?.()??!1});$t.create({open:Y(()=>n(),e=>{n(e),a()(e)}),onOpenChangeComplete:Y(()=>o())},d),Vt(e,{children:(e,n)=>{var r=c(),i=B(r);s(i,()=>t.children??F),g(e,r)},$$slots:{default:!0}}),v()}var Ma=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`child`,`children`,`ref`,`loop`,`onInteractOutside`,`onEscapeKeydown`,`onCloseAutoFocus`,`forceMount`,`trapFocus`,`style`]),Na=u(`<div><div><!></div></div>`);function Pa(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`loop`,3,!0),d=E(r,`onInteractOutside`,3,X),p=E(r,`onEscapeKeydown`,3,X),m=E(r,`onCloseAutoFocus`,3,X),h=E(r,`forceMount`,3,!1),y=E(r,`trapFocus`,3,!1),b=z(r,Ma),x=zt.create({id:Y(()=>o()),loop:Y(()=>u()),ref:Y(()=>l(),e=>l(e)),onCloseAutoFocus:Y(()=>m())}),S=R(()=>J(b,x.props));function C(e){if(x.handleInteractOutside(e),!e.defaultPrevented&&(d()(e),!e.defaultPrevented)){if(e.target&&e.target instanceof Element){let t=`[${x.parentMenu.root.getBitsAttr(`sub-content`)}]`;if(e.target.closest(t))return}x.parentMenu.onClose()}}function w(e){p()(e),!e.defaultPrevented&&x.parentMenu.onClose()}var T=c(),O=B(T),k=n=>{Zt(n,oe(()=>f(S),()=>x.popperProps,{get ref(){return x.opts.ref},get enabled(){return x.parentMenu.opts.open.current},onInteractOutside:C,onEscapeKeydown:w,get trapFocus(){return y()},get loop(){return u()},forceMount:!0,get id(){return o()},get shouldRender(){return x.shouldRender},popper:(n,i)=>{let a=()=>(i?.()).props,o=()=>(i?.()).wrapperProps,l=R(()=>J(a(),{style:qt(`dropdown-menu`)},{style:r.style}));var u=c(),d=B(u),p=e=>{var t=c(),n=B(t);{let e=R(()=>({props:f(l),wrapperProps:o(),...x.snippetProps}));s(n,()=>r.child,()=>f(e))}g(e,t)},m=e=>{var n=Na();V(n,()=>({...o()}));var i=D(n);V(i,()=>({...f(l)}));var a=D(i);s(a,()=>r.children??F),t(i),t(n),g(e,n)};e(d,e=>{r.child?e(p):e(m,-1)}),g(n,u)},$$slots:{popper:!0}}))},A=n=>{Kt(n,oe(()=>f(S),()=>x.popperProps,{get ref(){return x.opts.ref},get open(){return x.parentMenu.opts.open.current},onInteractOutside:C,onEscapeKeydown:w,get trapFocus(){return y()},get loop(){return u()},forceMount:!1,get id(){return o()},get shouldRender(){return x.shouldRender},popper:(n,i)=>{let a=()=>(i?.()).props,o=()=>(i?.()).wrapperProps,l=R(()=>J(a(),{style:qt(`dropdown-menu`)},{style:r.style}));var u=c(),d=B(u),p=e=>{var t=c(),n=B(t);{let e=R(()=>({props:f(l),wrapperProps:o(),...x.snippetProps}));s(n,()=>r.child,()=>f(e))}g(e,t)},m=e=>{var n=Na();V(n,()=>({...o()}));var i=D(n);V(i,()=>({...f(l)}));var a=D(i);s(a,()=>r.children??F),t(i),t(n),g(e,n)};e(d,e=>{r.child?e(p):e(m,-1)}),g(n,u)},$$slots:{popper:!0}}))};e(O,e=>{h()?e(k):h()||e(A,1)}),g(n,T),v()}var Fa=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`child`,`children`,`disabled`,`type`]),Ia=u(`<button><!></button>`);function La(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`disabled`,3,!1),d=E(r,`type`,3,`button`),p=z(r,Fa),m=Bt.create({id:Y(()=>o()),disabled:Y(()=>u()??!1),ref:Y(()=>l(),e=>l(e))}),h=R(()=>J(p,m.props,{type:d()}));Yt(n,{get id(){return o()},get ref(){return m.opts.ref},children:(n,i)=>{var a=c(),o=B(a),l=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(h)})),g(e,t)},u=e=>{var n=Ia();V(n,()=>({...f(h)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(o,e=>{r.child?e(l):e(u,-1)}),g(n,a)},$$slots:{default:!0}}),v()}var Ra=rt({component:`menubar`,parts:[`root`,`trigger`,`content`]}),za=new St(`Menubar.Root`),Ba=new St(`Menubar.Menu`),Va=class e{static create(t){return za.set(new e(t))}opts;rovingFocusGroup;attachment;#e=N(!1);get wasOpenedByKeyboard(){return f(this.#e)}set wasOpenedByKeyboard(e){U(this.#e,e,!0)}#t=N(k([]));get triggerIds(){return f(this.#t)}set triggerIds(e){U(this.#t,e,!0)}#n=N(null);get skipExitAnimationForMenuValue(){return f(this.#n)}set skipExitAnimationForMenuValue(e){U(this.#n,e,!0)}valueToChangeHandler=new Map;constructor(e){this.opts=e,this.attachment=lt(this.opts.ref),this.rovingFocusGroup=new bt({rootNode:this.opts.ref,candidateAttr:Ra.trigger,loop:this.opts.loop,orientation:Y(()=>`horizontal`)})}registerTrigger=e=>(this.triggerIds.push(e),()=>{this.triggerIds=this.triggerIds.filter(t=>t!==e)});registerMenu=(e,t)=>(this.valueToChangeHandler.set(e,t),()=>{this.valueToChangeHandler.delete(e)});updateValue=e=>{let t=this.opts.value.current,n=!!(t&&e&&t!==e);n&&(this.skipExitAnimationForMenuValue=t);let r=this.valueToChangeHandler.get(t)?.current,i=this.valueToChangeHandler.get(e)?.current;this.opts.value.current=e,r&&t!==e&&r(!1),i&&i(!0),n&&Nt(()=>{this.skipExitAnimationForMenuValue=null})};getTriggers=()=>{let e=this.opts.ref.current;return e?Array.from(e.querySelectorAll(Ra.selector(`trigger`))):[]};onMenuOpen=(e,t)=>{this.updateValue(e),this.rovingFocusGroup.setCurrentTabStopId(t)};onMenuClose=()=>{this.updateValue(``)};onMenuToggle=e=>{this.updateValue(this.opts.value.current?``:e)};#r=R(()=>({id:this.opts.id.current,role:`menubar`,[Ra.root]:``,...this.attachment}));get props(){return f(this.#r)}set props(e){U(this.#r,e)}},Ha=class e{static create(t){return Ba.set(new e(t,za.get()))}opts;root;#e=R(()=>this.root.opts.value.current===this.opts.value.current);get open(){return f(this.#e)}set open(e){U(this.#e,e)}wasOpenedByKeyboard=!1;#t=N(null);get triggerNode(){return f(this.#t)}set triggerNode(e){U(this.#t,e,!0)}#n=R(()=>this.triggerNode?.id);get triggerId(){return f(this.#n)}set triggerId(e){U(this.#n,e)}#r=R(()=>this.contentNode?.id);get contentId(){return f(this.#r)}set contentId(e){U(this.#r,e)}#i=N(null);get contentNode(){return f(this.#i)}set contentNode(e){U(this.#i,e,!0)}constructor(e,t){this.opts=e,this.root=t,at(()=>this.open,()=>{this.open||(this.wasOpenedByKeyboard=!1)}),ie(()=>this.root.registerMenu(this.opts.value.current,e.onOpenChange))}getTriggerNode(){return this.triggerNode}toggleMenu(){this.root.onMenuToggle(this.opts.value.current)}openMenu(){this.root.onMenuOpen(this.opts.value.current,this.triggerNode?.id??``)}},Ua=class e{static create(t){return new e(t,Ba.get())}opts;menu;root;attachment;#e=N(!1);get isFocused(){return f(this.#e)}set isFocused(e){U(this.#e,e,!0)}#t=N(0);constructor(e,t){this.opts=e,this.menu=t,this.root=t.root,this.attachment=lt(this.opts.ref,e=>this.menu.triggerNode=e),ie(()=>this.root.registerTrigger(e.id.current)),se(()=>{this.root.triggerIds.length&&U(this.#t,this.root.rovingFocusGroup.getTabIndex(this.menu.getTriggerNode()),!0)})}onpointerdown=e=>{!this.opts.disabled.current&&e.button===0&&e.ctrlKey===!1&&(this.menu.open||e.preventDefault(),this.menu.toggleMenu())};onpointerenter=()=>{this.root.opts.value.current&&!this.menu.open&&(this.menu.openMenu(),this.menu.getTriggerNode()?.focus())};onkeydown=e=>{this.opts.disabled.current||e.key!==`Tab`&&((e.key===`Enter`||e.key===` `)&&this.root.onMenuToggle(this.menu.opts.value.current),e.key===`ArrowDown`&&this.menu.openMenu(),(e.key===`Enter`||e.key===` `||e.key===`ArrowDown`)&&(this.menu.wasOpenedByKeyboard=!0,e.preventDefault()),this.root.rovingFocusGroup.handleKeydown(this.menu.getTriggerNode(),e))};onfocus=()=>{this.isFocused=!0};onblur=()=>{this.isFocused=!1};#n=R(()=>({type:`button`,role:`menuitem`,id:this.opts.id.current,"aria-haspopup":`menu`,"aria-expanded":ct(this.menu.open),"aria-controls":this.menu.open?this.menu.contentId:void 0,"data-highlighted":this.isFocused?``:void 0,"data-state":ot(this.menu.open),"data-disabled":it(this.opts.disabled.current),"data-menu-value":this.menu.opts.value.current,disabled:this.opts.disabled.current?!0:void 0,tabindex:f(this.#t),[Ra.trigger]:``,onpointerdown:this.onpointerdown,onpointerenter:this.onpointerenter,onkeydown:this.onkeydown,onfocus:this.onfocus,onblur:this.onblur,...this.attachment}));get props(){return f(this.#n)}set props(e){U(this.#n,e)}},Wa=class e{static create(t){return new e(t,Ba.get())}opts;menu;root;attachment;constructor(e,t){this.opts=e,this.menu=t,this.root=t.root,this.attachment=lt(this.opts.ref,e=>this.menu.contentNode=e)}onCloseAutoFocus=e=>{this.opts.onCloseAutoFocus.current?.(e),e.defaultPrevented};onFocusOutside=e=>{let t=e.target;this.root.getTriggers().some(e=>e.contains(t))&&e.preventDefault(),this.opts.onFocusOutside.current(e)};onInteractOutside=e=>{this.opts.onInteractOutside.current(e)};onOpenAutoFocus=e=>{this.opts.onOpenAutoFocus.current(e),!e.defaultPrevented&&Nt(()=>this.opts.ref.current?.focus())};onkeydown=e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;let t=e.target,n=t.hasAttribute(`data-menu-sub-trigger`),r=t.closest(`[data-menu-content]`)!==e.currentTarget,i=(this.root.opts.dir.current===`rtl`?gt:_t)===e.key;if(!i&&n||r&&i)return;let a=this.root.getTriggers().filter(e=>!e.disabled).map(e=>({value:e.getAttribute(`data-menu-value`),triggerId:e.id??``}));i&&a.reverse();let o=a.map(({value:e})=>e),s=this.root.opts.value.current;if(!s)return;let c=o.indexOf(s);if(c===-1)return;a=this.root.opts.loop.current?Dt(a,c+1):a.slice(c+1);let[l]=a;l&&(this.menu.root.onMenuOpen(l.value,l.triggerId),e.preventDefault())};#e=R(()=>({id:this.opts.id.current,"aria-labelledby":this.menu.triggerId,style:qt(`menubar`),onkeydown:this.onkeydown,"data-menu-content":``,[Ra.content]:``,...this.attachment}));get props(){return f(this.#e)}set props(e){U(this.#e,e)}popperProps={onCloseAutoFocus:this.onCloseAutoFocus,onFocusOutside:this.onFocusOutside,onInteractOutside:this.onInteractOutside,onOpenAutoFocus:this.onOpenAutoFocus}},Ga=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`children`,`child`,`ref`,`value`,`dir`,`loop`,`onValueChange`]),Ka=u(`<div><!></div>`);function qa(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`value`,15,``),d=E(r,`dir`,3,`ltr`),p=E(r,`loop`,3,!0),m=E(r,`onValueChange`,3,X),h=z(r,Ga),y=Va.create({id:Y(()=>o()),value:Y(()=>u(),e=>{u(e),m()?.(e)}),dir:Y(()=>d()),loop:Y(()=>p()),ref:Y(()=>l(),e=>l(e))}),b=R(()=>J(h,y.props));var x=c(),S=B(x),C=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(b)})),g(e,t)},w=e=>{var n=Ka();V(n,()=>({...f(b)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(S,e=>{r.child?e(C):e(w,-1)}),g(n,x),v()}var Ja=new Set([`$$slots`,`$$events`,`$$legacy`,`value`,`onOpenChange`]);function Ya(e,t){let n=_();i(t,!0);let r=E(t,`value`,19,()=>Z(n)),a=E(t,`onOpenChange`,3,X),o=z(t,Ja),s=Ha.create({value:Y(()=>r()),onOpenChange:Y(()=>a())});ja(e,oe({get open(){return s.open},onOpenChange:e=>{e||s.root.onMenuClose()},get dir(){return s.root.opts.dir.current},_internal_variant:`menubar`},()=>o,{_internal_should_skip_exit_animation:()=>s.root.skipExitAnimationForMenuValue===s.opts.value.current})),v()}var Xa=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`child`,`children`,`ref`,`loop`,`onInteractOutside`,`onEscapeKeydown`,`onCloseAutoFocus`,`forceMount`,`style`]),Za=u(`<div><div><!></div></div>`);function Qa(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`loop`,3,!0),d=E(r,`onInteractOutside`,3,X),p=E(r,`onEscapeKeydown`,3,X),m=E(r,`onCloseAutoFocus`,3,X),h=E(r,`forceMount`,3,!1),y=z(r,Xa),b=zt.create({id:Y(()=>o()),loop:Y(()=>u()),ref:Y(()=>l(),e=>l(e)),onCloseAutoFocus:Y(()=>m())}),x=R(()=>J(y,b.props,{style:{outline:`none`}}));function S(e){if(d()(e),!e.defaultPrevented){if(e.target&&e.target instanceof Element){let t=`[${b.parentMenu.root.getBitsAttr(`sub-content`)}]`;if(e.target.closest(t))return}b.parentMenu.onClose()}}function C(e){p()(e),!e.defaultPrevented&&b.parentMenu.onClose()}var w=c(),T=B(w),O=n=>{Zt(n,oe(()=>f(x),()=>b.popperProps,{get ref(){return b.opts.ref},get enabled(){return b.parentMenu.opts.open.current},onInteractOutside:S,onEscapeKeydown:C,trapFocus:!0,get loop(){return u()},forceMount:!0,get id(){return o()},get shouldRender(){return b.shouldRender},popper:(n,i)=>{let a=()=>(i?.()).props,o=()=>(i?.()).wrapperProps,l=R(()=>J(a(),{style:{outline:`none`,...qt(`menu`)}},{style:r.style}));var u=c(),d=B(u),p=e=>{var t=c(),n=B(t);{let e=R(()=>({props:f(l),wrapperProps:o(),...b.snippetProps}));s(n,()=>r.child,()=>f(e))}g(e,t)},m=e=>{var n=Za();V(n,()=>({...o()}));var i=D(n);V(i,()=>({...f(l)}));var a=D(i);s(a,()=>r.children??F),t(i),t(n),g(e,n)};e(d,e=>{r.child?e(p):e(m,-1)}),g(n,u)},$$slots:{popper:!0}}))},k=n=>{Kt(n,oe(()=>f(x),()=>b.popperProps,{get ref(){return b.opts.ref},get open(){return b.parentMenu.opts.open.current},onInteractOutside:S,onEscapeKeydown:C,trapFocus:!0,get loop(){return u()},forceMount:!1,get id(){return o()},get shouldRender(){return b.shouldRender},popper:(n,i)=>{let a=()=>(i?.()).props,o=()=>(i?.()).wrapperProps,l=R(()=>J(a(),{style:{outline:`none`,...qt(`menu`)}},{style:r.style}));var u=c(),d=B(u),p=e=>{var t=c(),n=B(t);{let e=R(()=>({props:f(l),wrapperProps:o(),...b.snippetProps}));s(n,()=>r.child,()=>f(e))}g(e,t)},m=e=>{var n=Za();V(n,()=>({...o()}));var i=D(n);V(i,()=>({...f(l)}));var a=D(i);s(a,()=>r.children??F),t(i),t(n),g(e,n)};e(d,e=>{r.child?e(p):e(m,-1)}),g(n,u)},$$slots:{popper:!0}}))};e(T,e=>{h()?e(O):h()||e(k,1)}),g(n,w),v()}var $a=new Set([`$$slots`,`$$events`,`$$legacy`,`ref`,`interactOutsideBehavior`,`id`,`onInteractOutside`,`onFocusOutside`,`onCloseAutoFocus`,`onOpenAutoFocus`]);function eo(e,t){let n=_();i(t,!0);let r=E(t,`ref`,15,null),a=E(t,`interactOutsideBehavior`,3,`close`),o=E(t,`id`,19,()=>Z(n)),s=E(t,`onInteractOutside`,3,X),c=E(t,`onFocusOutside`,3,X),l=E(t,`onCloseAutoFocus`,3,X),u=E(t,`onOpenAutoFocus`,3,X),d=z(t,$a),p=Wa.create({id:Y(()=>o()),interactOutsideBehavior:Y(()=>a()),ref:Y(()=>r(),e=>r(e)),onInteractOutside:Y(()=>s()),onFocusOutside:Y(()=>c()),onCloseAutoFocus:Y(()=>l()),onOpenAutoFocus:Y(()=>u())}),m=R(()=>J(d,p.props));Qa(e,oe(()=>f(m),()=>p.popperProps,{preventScroll:!1,get ref(){return r()},set ref(e){r(e)}})),v()}var to=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`disabled`,`children`,`child`,`ref`]),no=u(`<button><!></button>`);function ro(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`disabled`,3,!1),u=E(r,`ref`,15,null),d=z(r,to),p=Ua.create({id:Y(()=>o()),disabled:Y(()=>l()??!1),ref:Y(()=>u(),e=>u(e))}),m=Bt.create(p.opts),h=lt(e=>m.parentMenu.triggerNode=e),y=R(()=>J(d,p.props,{...h}));Yt(n,{get id(){return o()},get ref(){return p.opts.ref},children:(n,i)=>{var a=c(),o=B(a),l=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(y)})),g(e,t)},u=e=>{var n=no();V(n,()=>({...f(y)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(o,e=>{r.child?e(l):e(u,-1)}),g(n,a)},$$slots:{default:!0}}),v()}var io=[`INPUT`,`TEXTAREA`];function ao(e,t,n,r){if(!t||r.enableIgnoredElement&&io.includes(t.nodeName))return null;let{arrowKeyOptions:i=`both`,candidateSelector:a,itemsArray:o=[],loop:s=!0,dir:c=`ltr`,preventScroll:l=!0,focus:u=!1}=r,[d,f,p,m,h,g]=[e.key===`ArrowRight`,e.key===`ArrowLeft`,e.key===`ArrowUp`,e.key===`ArrowDown`,e.key===`Home`,e.key===`End`],_=p||m,v=d||f;if(!h&&!g&&(!_&&!v||i===`vertical`&&v||i===`horizontal`&&_))return null;let y=n?Array.from(n.querySelectorAll(a)):o;if(!y.length)return null;l&&e.preventDefault();let b=null;return v||_?b=oo(y,t,{goForward:_?m:c===`ltr`?d:f,loop:s}):h?b=y.at(0)||null:g&&(b=y.at(-1)||null),u&&b?.focus(),b}function oo(e,t,{goForward:n,loop:r},i=e.length){if(--i===0)return null;let a=e.indexOf(t),o=n?a+1:a-1;if(!r&&(o<0||o>=e.length))return null;let s=e[(o+e.length)%e.length];return s?s.hasAttribute(`disabled`)&&s.getAttribute(`disabled`)!==`false`?oo(e,s,{goForward:n,loop:r},i):s:null}var so=rt({component:`navigation-menu`,parts:[`root`,`sub`,`item`,`list`,`trigger`,`content`,`link`,`viewport`,`menu`,`indicator`]}),co=new St(`NavigationMenu.Root`),lo=new St(`NavigationMenu.Item`),uo=new St(`NavigationMenu.List`),fo=new St(`NavigationMenu.Content`),po=new St(`NavigationMenu.Sub`),mo=class e{static create(t){return co.set(new e(t))}opts;indicatorTrackRef=yt(null);viewportRef=yt(null);viewportContent=new ft;onTriggerEnter;onTriggerLeave=X;onContentEnter=X;onContentLeave=X;onItemSelect;onItemDismiss;activeItem=null;prevActiveItem=null;constructor(e){this.opts=e,this.onTriggerEnter=e.onTriggerEnter,this.onTriggerLeave=e.onTriggerLeave??X,this.onContentEnter=e.onContentEnter??X,this.onContentLeave=e.onContentLeave??X,this.onItemDismiss=e.onItemDismiss,this.onItemSelect=e.onItemSelect}setActiveItem=e=>{this.prevActiveItem=this.activeItem,this.activeItem=e}},ho=class e{static create(t){return new e(t)}opts;attachment;provider;previousValue=yt(``);isDelaySkipped;#e=R(()=>this.opts?.value?.current!==``||this.isDelaySkipped.current?150:this.opts.delayDuration.current);constructor(e){this.opts=e,this.attachment=lt(this.opts.ref),this.isDelaySkipped=en(!1,{afterMs:this.opts.skipDelayDuration.current,getWindow:()=>kt(e.ref.current)}),this.provider=mo.create({value:this.opts.value,previousValue:this.previousValue,dir:this.opts.dir,orientation:this.opts.orientation,rootNavigationMenuRef:this.opts.ref,isRootMenu:!0,onTriggerEnter:(e,t)=>{this.#n(e,t)},onTriggerLeave:this.#r,onContentEnter:this.#i,onContentLeave:this.#a,onItemSelect:this.#o,onItemDismiss:this.#s})}#t=ut((e,t)=>{typeof e==`string`&&this.setValue(e,t)},()=>f(this.#e));#n=(e,t)=>{this.#t(e,t)};#r=()=>{this.isDelaySkipped.current=!1,this.#t(``,null)};#i=()=>{this.#t(void 0,null)};#a=()=>{this.provider.activeItem&&this.provider.activeItem.opts.openOnHover.current===!1||this.#t(``,null)};#o=(e,t)=>{this.setValue(e,t)};#s=()=>{this.setValue(``,null)};setValue=(e,t)=>{this.previousValue.current=this.opts.value.current,this.opts.value.current=e,this.provider.setActiveItem(t),e===``&&(this.previousValue.current=``)};#c=R(()=>({id:this.opts.id.current,"data-orientation":this.opts.orientation.current,dir:this.opts.dir.current,[so.root]:``,[so.menu]:``,...this.attachment}));get props(){return f(this.#c)}set props(e){U(this.#c,e)}},go=class e{static create(t){return uo.set(new e(t,co.get()))}wrapperId=yt(It());wrapperRef=yt(null);opts;context;attachment;wrapperAttachment=lt(this.wrapperRef,e=>this.context.indicatorTrackRef.current=e);#e=N([]);get listTriggers(){return f(this.#e)}set listTriggers(e){U(this.#e,e)}rovingFocusGroup;#t=N(!1);get wrapperMounted(){return f(this.#t)}set wrapperMounted(e){U(this.#t,e,!0)}constructor(e,t){this.opts=e,this.context=t,this.attachment=lt(this.opts.ref),this.rovingFocusGroup=new bt({rootNode:e.ref,candidateSelector:`${so.selector(`trigger`)}:not([data-disabled]), ${so.selector(`link`)}:not([data-disabled])`,loop:Y(()=>!1),orientation:this.context.opts.orientation})}registerTrigger(e){return e&&this.listTriggers.push(e),()=>{this.listTriggers=this.listTriggers.filter(t=>t.id!==e.id)}}#n=R(()=>({id:this.wrapperId.current,...this.wrapperAttachment}));get wrapperProps(){return f(this.#n)}set wrapperProps(e){U(this.#n,e)}#r=R(()=>({id:this.opts.id.current,"data-orientation":this.context.opts.orientation.current,[so.list]:``,...this.attachment}));get props(){return f(this.#r)}set props(e){U(this.#r,e)}},_o=class e{static create(t){return lo.set(new e(t,uo.get()))}opts;attachment;listContext;#e=N(null);get contentNode(){return f(this.#e)}set contentNode(e){U(this.#e,e,!0)}#t=N(null);get triggerNode(){return f(this.#t)}set triggerNode(e){U(this.#t,e,!0)}#n=N(null);get focusProxyNode(){return f(this.#n)}set focusProxyNode(e){U(this.#n,e,!0)}restoreContentTabOrder=X;wasEscapeClose=!1;#r=R(()=>this.contentNode?.id);get contentId(){return f(this.#r)}set contentId(e){U(this.#r,e)}#i=R(()=>this.triggerNode?.id);get triggerId(){return f(this.#i)}set triggerId(e){U(this.#i,e)}contentChildren=yt(void 0);contentChild=yt(void 0);contentProps=yt({});domContext;constructor(e,t){this.opts=e,this.listContext=t,this.domContext=new Ot(e.ref),this.attachment=lt(this.opts.ref)}#a=(e=`start`)=>{if(!this.contentNode)return;this.restoreContentTabOrder();let t=Ut(this.contentNode);t.length&&wo(e===`start`?t:t.reverse(),()=>this.domContext.getActiveElement())};#o=()=>{if(!this.contentNode)return;let e=Ut(this.contentNode);e.length&&(this.restoreContentTabOrder=To(e))};onEntryKeydown=this.#a;onFocusProxyEnter=this.#a;onRootContentClose=this.#o;onContentFocusOutside=this.#o;#s=R(()=>({id:this.opts.id.current,[so.item]:``,...this.attachment}));get props(){return f(this.#s)}set props(e){U(this.#s,e)}},vo=class e{static create(t){return new e(t,{provider:co.get(),item:lo.get(),list:uo.get(),sub:po.getOr(null)})}opts;attachment;focusProxyId=yt(It());focusProxyRef=yt(null);focusProxyAttachment=lt(this.focusProxyRef,e=>this.itemContext.focusProxyNode=e);context;itemContext;listContext;hasPointerMoveOpened=yt(!1);wasClickClose=!1;#e=N(!1);get focusProxyMounted(){return f(this.#e)}set focusProxyMounted(e){U(this.#e,e,!0)}#t=R(()=>this.itemContext.opts.value.current===this.context.opts.value.current);get open(){return f(this.#t)}set open(e){U(this.#t,e)}constructor(e,t){this.opts=e,this.attachment=lt(this.opts.ref,e=>this.itemContext.triggerNode=e),this.hasPointerMoveOpened=en(!1,{afterMs:300,getWindow:()=>kt(e.ref.current)}),this.context=t.provider,this.itemContext=t.item,this.listContext=t.list,at(()=>this.opts.ref.current,()=>{let e=this.opts.ref.current;if(e)return this.listContext.registerTrigger(e)})}onpointerenter=e=>{this.wasClickClose=!1,this.itemContext.wasEscapeClose=!1};onpointermove=Eo(()=>{this.opts.disabled.current||this.wasClickClose||this.itemContext.wasEscapeClose||this.hasPointerMoveOpened.current||!this.itemContext.opts.openOnHover.current||(this.context.onTriggerEnter(this.itemContext.opts.value.current,this.itemContext),this.hasPointerMoveOpened.current=!0)});onpointerleave=Eo(()=>{!this.opts.disabled.current&&this.itemContext.opts.openOnHover.current&&(this.context.onTriggerLeave(),this.hasPointerMoveOpened.current=!1)});onclick=()=>{if(this.hasPointerMoveOpened.current)return;let e=this.open&&(!this.itemContext.opts.openOnHover.current||this.context.opts.isRootMenu);e?this.context.onItemSelect(``,null):this.open||this.context.onItemSelect(this.itemContext.opts.value.current,this.itemContext),this.wasClickClose=e};onkeydown=e=>{let t=this.context.opts.dir.current===`rtl`?_t:gt,n={horizontal:vt,vertical:t}[this.context.opts.orientation.current];if(this.open&&e.key===n){this.itemContext.onEntryKeydown(),e.preventDefault();return}this.itemContext.listContext.rovingFocusGroup.handleKeydown(this.opts.ref.current,e)};focusProxyOnFocus=e=>{let t=this.itemContext.contentNode,n=e.relatedTarget,r=this.opts.ref.current&&n===this.opts.ref.current,i=t?.contains(n);(r||!i)&&this.itemContext.onFocusProxyEnter(r?`start`:`end`)};#n=R(()=>({id:this.opts.id.current,disabled:this.opts.disabled.current,"data-disabled":it(!!this.opts.disabled.current),"data-state":ot(this.open),"data-value":this.itemContext.opts.value.current,"aria-expanded":ct(this.open),"aria-controls":this.itemContext.contentId,[so.trigger]:``,onpointermove:this.onpointermove,onpointerleave:this.onpointerleave,onpointerenter:this.onpointerenter,onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment}));get props(){return f(this.#n)}set props(e){U(this.#n,e)}#r=R(()=>({id:this.focusProxyId.current,tabindex:0,onfocus:this.focusProxyOnFocus,...this.focusProxyAttachment}));get focusProxyProps(){return f(this.#r)}set focusProxyProps(e){U(this.#r,e)}},yo=new Ht(`bitsLinkSelect`,{bubbles:!0,cancelable:!0}),bo=new Ht(`bitsRootContentDismiss`,{cancelable:!0,bubbles:!0}),xo=class e{static create(t){return new e(t,{provider:co.get(),item:lo.get()})}opts;context;attachment;#e=N(!1);get isFocused(){return f(this.#e)}set isFocused(e){U(this.#e,e,!0)}constructor(e,t){this.opts=e,this.context=t,this.attachment=lt(this.opts.ref)}onclick=e=>{let t=e.currentTarget;yo.listen(t,e=>this.opts.onSelect.current(e),{once:!0}),!yo.dispatch(t).defaultPrevented&&!e.metaKey&&bo.dispatch(t)};onkeydown=e=>{this.context.item.contentNode||this.context.item.listContext.rovingFocusGroup.handleKeydown(this.opts.ref.current,e)};onfocus=e=>{this.isFocused=!0};onblur=e=>{this.isFocused=!1};#t=()=>{let e=this.context.provider.opts.value.current,t=this.context.item.opts.value.current===e,n=this.context.item.listContext.context.activeItem;(!n||n.opts.openOnHover.current)&&e&&!t&&this.context.provider.onItemDismiss()};onpointerenter=()=>{this.#t()};onpointermove=Eo(()=>{this.#t()});#n=R(()=>({id:this.opts.id.current,"data-active":this.opts.active.current?``:void 0,"aria-current":this.opts.active.current?`page`:void 0,"data-focused":this.isFocused?``:void 0,onclick:this.onclick,onkeydown:this.onkeydown,onfocus:this.onfocus,onblur:this.onblur,onpointerenter:this.onpointerenter,onpointermove:this.onpointermove,[so.link]:``,...this.attachment}));get props(){return f(this.#n)}set props(e){U(this.#n,e)}},So=class e{static create(t){return fo.set(new e(t,{provider:co.get(),item:lo.get(),list:uo.get()}))}opts;context;itemContext;listContext;attachment;#e=N(!1);get mounted(){return f(this.#e)}set mounted(e){U(this.#e,e,!0)}#t=R(()=>this.itemContext.opts.value.current===this.context.opts.value.current);get open(){return f(this.#t)}set open(e){U(this.#t,e)}#n=R(()=>this.itemContext.opts.value.current);get value(){return f(this.#n)}set value(e){U(this.#n,e)}#r=R(()=>this.context.viewportRef.current&&!this.context.opts.value.current&&this.context.opts.previousValue.current?this.context.opts.previousValue.current===this.itemContext.opts.value.current:!1);get isLastActiveValue(){return f(this.#r)}set isLastActiveValue(e){U(this.#r,e)}constructor(e,t){this.opts=e,this.context=t.provider,this.itemContext=t.item,this.listContext=t.list,this.attachment=lt(this.opts.ref,e=>this.itemContext.contentNode=e)}onpointerenter=e=>{this.context.onContentEnter()};onpointerleave=Eo(()=>{this.itemContext.opts.openOnHover.current&&this.context.onContentLeave()});#i=R(()=>({id:this.opts.id.current,onpointerenter:this.onpointerenter,onpointerleave:this.onpointerleave,...this.attachment}));get props(){return f(this.#i)}set props(e){U(this.#i,e)}},Co=class e{static create(t,n){return new e(t,n??lo.get())}opts;itemContext;context;listContext;attachment;#e=N(null);get prevMotionAttribute(){return f(this.#e)}set prevMotionAttribute(e){U(this.#e,e,!0)}#t=R(()=>{let e=this.listContext.listTriggers.map(e=>e.getAttribute(`data-value`)).filter(Boolean);this.context.opts.dir.current===`rtl`&&e.reverse();let t=e.indexOf(this.context.opts.value.current),n=e.indexOf(this.context.opts.previousValue.current),r=this.itemContext.opts.value.current===this.context.opts.value.current,i=n===e.indexOf(this.itemContext.opts.value.current);if(!this.context.opts.value.current&&!this.context.opts.previousValue.current)return C(()=>this.prevMotionAttribute=null),null;if(!r&&!i)return C(()=>this.prevMotionAttribute);let a=(()=>{if(t!==n){if(r&&n!==-1)return t>n?`from-end`:`from-start`;if(i&&t!==-1)return t>n?`to-start`:`to-end`}return null})();return C(()=>this.prevMotionAttribute=a),a});get motionAttribute(){return f(this.#t)}set motionAttribute(e){U(this.#t,e)}domContext;constructor(e,t){this.opts=e,this.attachment=lt(this.opts.ref),this.itemContext=t,this.listContext=t.listContext,this.context=t.listContext.context,this.domContext=new Ot(e.ref),at([()=>this.itemContext.opts.value.current,()=>this.itemContext.triggerNode,()=>this.opts.ref.current],()=>{let e=this.opts.ref.current;if(!(e&&this.context.opts.isRootMenu))return;let t=bo.listen(e,()=>{this.context.onItemDismiss(),this.itemContext.onRootContentClose(),e.contains(this.domContext.getActiveElement())&&this.itemContext.triggerNode?.focus()});return()=>{t()}})}onFocusOutside=e=>{this.itemContext.onContentFocusOutside();let t=e.target;if(this.context.opts.rootNavigationMenuRef.current?.contains(t)){e.preventDefault();return}this.context.onItemDismiss()};onInteractOutside=e=>{let t=e.target,n=this.listContext.listTriggers.some(e=>e.contains(t)),r=this.context.opts.isRootMenu&&this.context.viewportRef.current?.contains(t);if(!this.context.opts.isRootMenu&&!n){this.context.onItemDismiss();return}if(n||r){e.preventDefault();return}this.itemContext.opts.openOnHover.current||this.context.onItemSelect(``,null)};onkeydown=e=>{let t=e.target;if(!pt(t)||t.closest(so.selector(`menu`))!==this.context.opts.rootNavigationMenuRef.current)return;let n=e.altKey||e.ctrlKey||e.metaKey,r=e.key===`Tab`&&!n,i=Ut(e.currentTarget);if(r){let t=this.domContext.getActiveElement(),n=i.findIndex(e=>e===t);if(wo(e.shiftKey?i.slice(0,n).reverse():i.slice(n+1,i.length),()=>this.domContext.getActiveElement())){e.preventDefault();return}Do(this.itemContext.focusProxyNode);return}let a=this.domContext.getActiveElement();if(this.itemContext.contentNode){let e=this.itemContext.contentNode.querySelector(`[data-focused]`);e&&(a=e)}a!==this.itemContext.triggerNode&&ao(e,a,void 0,{itemsArray:i,candidateSelector:so.selector(`link`),loop:!1,enableIgnoredElement:!0})?.focus()};onEscapeKeydown=e=>{this.context.onItemDismiss(),this.itemContext.triggerNode?.focus(),this.itemContext.wasEscapeClose=!0};#n=R(()=>({id:this.opts.id.current,"aria-labelledby":this.itemContext.triggerId,"data-motion":this.motionAttribute??void 0,"data-orientation":this.context.opts.orientation.current,"data-state":ot(this.context.opts.value.current===this.itemContext.opts.value.current),onkeydown:this.onkeydown,[so.content]:``,...this.attachment}));get props(){return f(this.#n)}set props(e){U(this.#n,e)}};function wo(e,t){let n=t();return e.some(e=>e===n||(e.focus(),t()!==n))}function To(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute(`tabindex`,t)})}}function Eo(e){return t=>t.pointerType===`mouse`?e(t):void 0}function Do(e,t){if(!e)return;let n=e.getAttribute(`aria-hidden`);e.removeAttribute(`aria-hidden`),e.focus(t),nn(0,()=>{n===null?e.setAttribute(`aria-hidden`,``):e.setAttribute(`aria-hidden`,n)})}var Oo=new Set([`$$slots`,`$$events`,`$$legacy`,`child`,`children`,`id`,`ref`,`value`,`onValueChange`,`delayDuration`,`skipDelayDuration`,`dir`,`orientation`]),ko=u(`<nav><!></nav>`);function Ao(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`value`,15,``),d=E(r,`onValueChange`,3,X),p=E(r,`delayDuration`,3,200),m=E(r,`skipDelayDuration`,3,300),h=E(r,`dir`,3,`ltr`),y=E(r,`orientation`,3,`horizontal`),b=z(r,Oo),x=ho.create({id:Y(()=>o()),value:Y(()=>u(),e=>{u(e),d()(e)}),delayDuration:Y(()=>p()),skipDelayDuration:Y(()=>m()),dir:Y(()=>h()),orientation:Y(()=>y()),ref:Y(()=>l(),e=>l(e))}),S=R(()=>J({"aria-label":`main`},b,x.props));var C=c(),w=B(C),T=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(S)})),g(e,t)},O=e=>{var n=ko();V(n,()=>({...f(S)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(w,e=>{r.child?e(T):e(O,-1)}),g(n,C),v()}var jo=new Set([`$$slots`,`$$events`,`$$legacy`,`ref`,`id`,`child`,`children`,`onInteractOutside`,`onFocusOutside`,`onEscapeKeydown`,`escapeKeydownBehavior`,`interactOutsideBehavior`,`itemState`,`onRefChange`]),Mo=u(`<div><!></div>`);function No(n,r){let a=_();i(r,!0);let o=E(r,`ref`,15,null),l=E(r,`id`,19,()=>Z(a)),u=E(r,`onInteractOutside`,3,X),d=E(r,`onFocusOutside`,3,X),p=E(r,`onEscapeKeydown`,3,X),m=E(r,`escapeKeydownBehavior`,3,`close`),h=E(r,`interactOutsideBehavior`,3,`close`),y=z(r,jo),b=Co.create({id:Y(()=>l()),ref:Y(()=>o(),e=>{o(e),C(()=>r.onRefChange?.(e))})},r.itemState);r.itemState&&lo.set(r.itemState);let x=R(()=>J(y,b.props));Rt(n,{get id(){return l()},get ref(){return b.opts.ref},enabled:!0,onInteractOutside:e=>{u()(e),!e.defaultPrevented&&b.onInteractOutside(e)},onFocusOutside:e=>{d()(e),!e.defaultPrevented&&b.onFocusOutside(e)},get interactOutsideBehavior(){return h()},children:(n,i)=>{let a=()=>(i?.()).props;Lt(n,{enabled:!0,get ref(){return b.opts.ref},onEscapeKeydown:e=>{p()(e),!e.defaultPrevented&&b.onEscapeKeydown(e)},get escapeKeydownBehavior(){return m()},children:(n,i)=>{let o=R(()=>J(f(x),a()));var l=c(),u=B(l),d=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(o)})),g(e,t)},p=e=>{var n=Mo();V(n,()=>({...f(o)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(u,e=>{r.child?e(d):e(p,-1)}),g(n,l)},$$slots:{default:!0}})},$$slots:{default:!0}}),v()}var Po=class{opts;present;#e;#t=N(!1);#n=!1;#r=N(void 0);#i=null;constructor(e){this.opts=e,this.present=this.opts.open,U(this.#t,e.open.current,!0),this.#e=new Mt({ref:this.opts.ref,afterTick:this.opts.open}),Et(()=>this.#o()),at(()=>this.present.current,e=>{if(!this.#n){this.#n=!0;return}this.#o(),e&&U(this.#t,!0),U(this.#r,e?`starting`:`ending`,!0),e&&(this.#i=window.requestAnimationFrame(()=>{this.#i=null,this.present.current&&U(this.#r,void 0)})),this.#e.run(()=>{e===this.present.current&&(e||U(this.#t,!1),U(this.#r,void 0))})})}#a=R(()=>f(this.#t));get isPresent(){return f(this.#a)}set isPresent(e){U(this.#a,e)}get transitionStatus(){return f(this.#r)}#o(){this.#i!==null&&(window.cancelAnimationFrame(this.#i),this.#i=null)}};function Fo(t,n){i(n,!0);let r=new Po({open:Y(()=>n.open),ref:n.ref});var a=c(),o=B(a),l=e=>{var t=c(),i=B(t);s(i,()=>n.presence??F,()=>({present:r.isPresent,transitionStatus:r.transitionStatus})),g(e,t)};e(o,e=>{(n.forceMount||n.open||r.isPresent)&&e(l)}),g(t,a),v()}var Io=new Set([`$$slots`,`$$events`,`$$legacy`,`ref`,`id`,`children`,`child`,`forceMount`]),Lo=u(`<!> <!>`,1);function Ro(e,t){let n=_();i(t,!0);let r=E(t,`ref`,15,null),a=E(t,`id`,19,()=>Z(n)),o=E(t,`forceMount`,3,!1),s=z(t,Io),c=So.create({id:Y(()=>a()),ref:Y(()=>r(),e=>r(e))}),l=R(()=>J(s,c.props));{let n=R(()=>c.context.viewportRef.current||void 0),r=R(()=>!c.context.viewportRef.current);At(e,{get to(){return f(n)},get disabled(){return f(r)},children:(e,n)=>{{let n=(e,n)=>{let r=()=>(n?.()).transitionStatus;var i=Lo(),a=B(i);{let e=R(()=>J(f(l),st(r())));No(a,oe(()=>f(e),{get children(){return t.children},get child(){return t.child}}))}var o=H(a,2);dn(o,{get mounted(){return c.mounted},set mounted(e){c.mounted=e}}),g(e,i)},r=R(()=>o()||c.open||c.isLastActiveValue);Fo(e,{get open(){return f(r)},get ref(){return c.opts.ref},presence:n,$$slots:{presence:!0}})}},$$slots:{default:!0}})}v()}var zo=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`value`,`ref`,`child`,`children`,`openOnHover`]),Bo=u(`<li><!></li>`);function Vo(n,r){let a=_();i(r,!0);let o=Z(a),l=E(r,`id`,3,o),u=E(r,`value`,3,o),d=E(r,`ref`,15,null),p=E(r,`openOnHover`,3,!0),m=z(r,zo),h=_o.create({id:Y(()=>l()),ref:Y(()=>d(),e=>d(e)),value:Y(()=>u()),openOnHover:Y(()=>p())}),y=R(()=>J(m,h.props));var b=c(),x=B(b),S=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(y)})),g(e,t)},C=e=>{var n=Bo();V(n,()=>({...f(y)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(x,e=>{r.child?e(S):e(C,-1)}),g(n,b),v()}var Ho=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`ref`,`child`,`children`,`active`,`onSelect`,`tabindex`]),Uo=u(`<a><!></a>`);function Wo(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`active`,3,!1),d=E(r,`onSelect`,3,X),p=E(r,`tabindex`,3,0),m=z(r,Ho),h=xo.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e)),active:Y(()=>u()),onSelect:Y(()=>d())}),y=R(()=>J(m,h.props,{tabindex:p()}));var b=c(),x=B(b),S=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(y)})),g(e,t)},C=e=>{var n=Uo();V(n,()=>({...f(y)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(x,e=>{r.child?e(S):e(C,-1)}),g(n,b),v()}var Go=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`children`,`child`,`ref`]),Ko=u(`<!> <!>`,1),qo=u(`<div><ul><!></ul></div> <!>`,1);function Jo(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=z(r,Go),d=go.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e))}),p=R(()=>J(u,d.props)),m=R(()=>J(d.wrapperProps));var h=c(),y=B(h),b=e=>{var t=Ko(),n=B(t);s(n,()=>r.child,()=>({props:f(p),wrapperProps:f(m)}));var i=H(n,2);dn(i,{get mounted(){return d.wrapperMounted},set mounted(e){d.wrapperMounted=e}}),g(e,t)},x=e=>{var n=qo(),i=B(n);V(i,()=>({...f(m)}));var a=D(i);V(a,()=>({...f(p)}));var o=D(a);s(o,()=>r.children??F),t(a),t(i);var c=H(i,2);dn(c,{get mounted(){return d.wrapperMounted},set mounted(e){d.wrapperMounted=e}}),g(e,n)};e(y,e=>{r.child?e(b):e(x,-1)}),g(n,h),v()}var Yo=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`child`]),Xo=u(`<span><!></span>`);function Zo(n,r){i(r,!0);let a=z(r,Yo),o={position:`absolute`,border:0,width:`1px`,display:`inline-block`,height:`1px`,padding:0,margin:`-1px`,overflow:`hidden`,clip:`rect(0 0 0 0)`,whiteSpace:`nowrap`,wordWrap:`normal`},l=R(()=>J(a,{style:o}));var u=c(),d=B(u),p=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(l)})),g(e,t)},m=e=>{var n=Xo();V(n,()=>({...f(l)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(d,e=>{r.child?e(p):e(m,-1)}),g(n,u),v()}var Qo=new Set([`$$slots`,`$$events`,`$$legacy`,`id`,`disabled`,`children`,`child`,`ref`,`tabindex`]),$o=u(`<button><!></button>`),es=u(`<span></span>`),ts=u(`<!> <!> <!>`,1),ns=u(`<!> <!>`,1);function rs(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`disabled`,3,!1),u=E(r,`ref`,15,null),d=E(r,`tabindex`,3,0),p=z(r,Qo),m=vo.create({id:Y(()=>o()),disabled:Y(()=>l()??!1),ref:Y(()=>u(),e=>u(e))}),h=R(()=>J(p,m.props,{tabindex:d()}));var y=ns(),b=B(y),x=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(h)})),g(e,t)},S=e=>{var n=$o();V(n,()=>({...f(h)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(b,e=>{r.child?e(x):e(S,-1)});var C=H(b,2),w=t=>{var n=ts(),r=B(n);Zo(r,oe(()=>m.focusProxyProps));var i=H(r,2);dn(i,{get mounted(){return m.focusProxyMounted},set mounted(e){m.focusProxyMounted=e}});var a=H(i,2),o=e=>{var t=es();j(()=>P(t,`aria-owns`,m.itemContext.contentId??void 0)),g(e,t)};e(a,e=>{m.context.viewportRef.current&&e(o)}),g(t,n)};e(C,e=>{m.open&&e(w)}),g(n,y),v()}var is=class{#e;#t;#n=null;constructor(e,t){this.#t=e,this.#e=t,this.stop=this.stop.bind(this),this.start=this.start.bind(this),Et(this.stop)}#r(){this.#n!==null&&(window.clearTimeout(this.#n),this.#n=null)}stop(){this.#r()}start(...e){this.#r(),this.#n=window.setTimeout(()=>{this.#n=null,this.#t(...e)},this.#e)}},as=rt({component:`tooltip`,parts:[`content`,`trigger`]}),os=new St(`Tooltip.Provider`),ss=new St(`Tooltip.Root`),cs=class{#e=N(k(new Map));get triggers(){return f(this.#e)}set triggers(e){U(this.#e,e,!0)}#t=N(null);get activeTriggerId(){return f(this.#t)}set activeTriggerId(e){U(this.#t,e,!0)}#n=R(()=>{let e=this.activeTriggerId;return e===null?null:this.triggers.get(e)?.node??null});get activeTriggerNode(){return f(this.#n)}set activeTriggerNode(e){U(this.#n,e)}#r=R(()=>{let e=this.activeTriggerId;return e===null?null:this.triggers.get(e)?.payload??null});get activePayload(){return f(this.#r)}set activePayload(e){U(this.#r,e)}register=e=>{let t=new Map(this.triggers);t.set(e.id,e),this.triggers=t,this.#i()};update=e=>{let t=new Map(this.triggers);t.set(e.id,e),this.triggers=t,this.#i()};unregister=e=>{if(!this.triggers.has(e))return;let t=new Map(this.triggers);t.delete(e),this.triggers=t,this.activeTriggerId===e&&(this.activeTriggerId=null)};setActiveTrigger=e=>{if(e===null){this.activeTriggerId=null;return}if(!this.triggers.has(e)){this.activeTriggerId=null;return}this.activeTriggerId=e};get=e=>this.triggers.get(e);has=e=>this.triggers.has(e);getFirstTriggerId=()=>{let e=this.triggers.entries().next();return e.done?null:e.value[0]};#i=()=>{let e=this.activeTriggerId;e!==null&&(this.triggers.has(e)||(this.activeTriggerId=null))}},ls=class e{static create(t){return os.set(new e(t))}opts;#e=N(!0);get isOpenDelayed(){return f(this.#e)}set isOpenDelayed(e){U(this.#e,e,!0)}isPointerInTransit=yt(!1);#t;#n=N(null);constructor(e){this.opts=e,this.#t=new is(()=>{this.isOpenDelayed=!0},this.opts.skipDelayDuration.current),sn(()=>b(window,`scroll`,e=>{let t=f(this.#n);if(!t)return;let n=t.triggerNode;if(!n)return;let r=e.target;(r instanceof Element||r instanceof Document)&&r.contains(n)&&t.handleClose()}))}#r=()=>{if(this.opts.skipDelayDuration.current===0){this.isOpenDelayed=!0;return}this.#t.start()};#i=()=>{this.#t.stop()};onOpen=e=>{f(this.#n)&&f(this.#n)!==e&&f(this.#n).handleClose(),this.#i(),this.isOpenDelayed=!1,U(this.#n,e,!0)};onClose=e=>{f(this.#n)===e&&(U(this.#n,null),this.#r())};isTooltipOpen=e=>f(this.#n)===e},us=class e{static create(t){return ss.set(new e(t,os.get()))}opts;provider;#e=R(()=>this.opts.delayDuration.current??this.provider.opts.delayDuration.current);get delayDuration(){return f(this.#e)}set delayDuration(e){U(this.#e,e)}#t=R(()=>this.opts.disableHoverableContent.current??this.provider.opts.disableHoverableContent.current);get disableHoverableContent(){return f(this.#t)}set disableHoverableContent(e){U(this.#t,e)}#n=R(()=>this.opts.disableCloseOnTriggerClick.current??this.provider.opts.disableCloseOnTriggerClick.current);get disableCloseOnTriggerClick(){return f(this.#n)}set disableCloseOnTriggerClick(e){U(this.#n,e)}#r=R(()=>this.opts.disabled.current??this.provider.opts.disabled.current);get disabled(){return f(this.#r)}set disabled(e){U(this.#r,e)}#i=R(()=>this.opts.ignoreNonKeyboardFocus.current??this.provider.opts.ignoreNonKeyboardFocus.current);get ignoreNonKeyboardFocus(){return f(this.#i)}set ignoreNonKeyboardFocus(e){U(this.#i,e)}registry;tether;#a=N(null);get contentNode(){return f(this.#a)}set contentNode(e){U(this.#a,e,!0)}contentPresence;#o=N(!1);#s;#c=R(()=>this.opts.open.current?f(this.#o)?`delayed-open`:`instant-open`:`closed`);get stateAttr(){return f(this.#c)}set stateAttr(e){U(this.#c,e)}constructor(e,t){this.opts=e,this.provider=t,this.tether=e.tether.current?.state??null,this.registry=this.tether?.registry??new cs,this.#s=new is(()=>{U(this.#o,!0),this.opts.open.current=!0},this.delayDuration??0),this.tether&&(this.tether.root=this,sn(()=>()=>{this.tether?.root===this&&(this.tether.root=null)})),this.contentPresence=new jt({open:this.opts.open,ref:Y(()=>this.contentNode),onComplete:()=>{this.opts.onOpenChangeComplete.current(this.opts.open.current)}}),at(()=>this.delayDuration,()=>{this.delayDuration!==void 0&&(this.#s=new is(()=>{U(this.#o,!0),this.opts.open.current=!0},this.delayDuration))}),at(()=>this.opts.open.current,e=>{e?(this.ensureActiveTrigger(),this.provider.onOpen(this)):this.provider.onClose(this)},{lazy:!0}),at(()=>this.opts.triggerId.current,e=>{e!==this.registry.activeTriggerId&&this.registry.setActiveTrigger(e)}),at(()=>this.registry.activeTriggerId,e=>{this.opts.triggerId.current!==e&&(this.opts.triggerId.current=e)})}handleOpen=()=>{this.#s.stop(),U(this.#o,!1),this.ensureActiveTrigger(),this.opts.open.current=!0};handleClose=()=>{this.#s.stop(),this.opts.open.current=!1};cancelPendingOpen=()=>{this.#s.stop()};#l=()=>{this.#s.stop();let e=!this.provider.isOpenDelayed,t=this.delayDuration??0;e||t===0?(U(this.#o,!1),this.opts.open.current=!0):this.#s.start()};onTriggerEnter=e=>{this.setActiveTrigger(e),this.#l()};onTriggerLeave=()=>{this.disableHoverableContent?this.handleClose():this.#s.stop()};ensureActiveTrigger=()=>{if(this.registry.activeTriggerId!==null&&this.registry.has(this.registry.activeTriggerId))return;if(this.opts.triggerId.current!==null&&this.registry.has(this.opts.triggerId.current)){this.registry.setActiveTrigger(this.opts.triggerId.current);return}let e=this.registry.getFirstTriggerId();this.registry.setActiveTrigger(e)};setActiveTrigger=e=>{this.registry.setActiveTrigger(e)};registerTrigger=e=>{this.registry.register(e),e.disabled&&this.registry.activeTriggerId===e.id&&this.opts.open.current&&this.handleClose()};updateTrigger=e=>{this.registry.update(e),e.disabled&&this.registry.activeTriggerId===e.id&&this.opts.open.current&&this.handleClose()};unregisterTrigger=e=>{let t=this.registry.activeTriggerId===e;this.registry.unregister(e),t&&this.opts.open.current&&this.handleClose()};isActiveTrigger=e=>this.registry.activeTriggerId===e;get triggerNode(){return this.registry.activeTriggerNode}get activePayload(){return this.registry.activePayload}get activeTriggerId(){return this.registry.activeTriggerId}},ds=class e{static create(t){return t.tether.current?new e(t,null,t.tether.current.state):new e(t,ss.get(),null)}opts;root;tether;attachment;#e=yt(!1);#t=N(!1);domContext;#n=null;#r=!1;#i=null;constructor(e,t,n){this.opts=e,this.root=t,this.tether=n,this.domContext=new Ot(e.ref),this.attachment=lt(this.opts.ref,e=>this.#s(e)),at(()=>this.opts.id.current,()=>{this.#s(this.opts.ref.current)}),at(()=>this.opts.payload.current,()=>{this.#s(this.opts.ref.current)}),at(()=>this.opts.disabled.current,()=>{this.#s(this.opts.ref.current)}),sn(()=>(this.#r=!0,this.#s(this.opts.ref.current),()=>{let e=this.#a(),t=this.#i;t&&(this.tether?this.tether.registry.unregister(t):e?.unregisterTrigger(t)),this.#i=null,this.#r=!1}))}#a=()=>this.tether?.root??this.root;#o=()=>{let e=this.#a();return this.opts.disabled.current||!!e?.disabled};#s=e=>{if(!this.#r)return;let t=this.opts.id.current,n=this.opts.payload.current,r=this.opts.disabled.current;if(this.#i&&this.#i!==t){let e=this.#a();this.tether?this.tether.registry.unregister(this.#i):e?.unregisterTrigger(this.#i)}let i={id:t,node:e,payload:n,disabled:r},a=this.#a();this.tether?(this.tether.registry.has(t)?this.tether.registry.update(i):this.tether.registry.register(i),r&&this.tether.registry.activeTriggerId===t&&a?.opts.open.current&&a.handleClose()):a?.registry.has(t)?a.updateTrigger(i):a?.registerTrigger(i),this.#i=t};#c=()=>{this.#n!==null&&(clearTimeout(this.#n),this.#n=null)};handlePointerUp=()=>{this.#e.current=!1};#l=()=>{this.#o()||(this.#e.current=!1)};#u=()=>{if(this.#o())return;let e=this.#a();e&&!e.disableCloseOnTriggerClick&&(e.opts.open.current?e.handleClose():e.cancelPendingOpen()),this.#e.current=!0,this.domContext.getDocument().addEventListener(`pointerup`,()=>{this.handlePointerUp()},{once:!0})};#d=e=>{let t=this.#a();if(t){if(this.#o()){t.opts.open.current&&t.handleClose();return}if(e.pointerType!==`touch`){if(t.provider.isPointerInTransit.current){this.#c(),this.#n=window.setTimeout(()=>{t.provider.isPointerInTransit.current&&(t.provider.isPointerInTransit.current=!1,t.onTriggerEnter(this.opts.id.current),U(this.#t,!0))},250);return}t.onTriggerEnter(this.opts.id.current),U(this.#t,!0)}}};#f=e=>{let t=this.#a();if(t){if(this.#o()){t.opts.open.current&&t.handleClose();return}e.pointerType!==`touch`&&(f(this.#t)||(this.#c(),t.provider.isPointerInTransit.current=!1,t.onTriggerEnter(this.opts.id.current),U(this.#t,!0)))}};#p=e=>{let t=this.#a();if(!t||this.#o())return;if(this.#c(),!t.isActiveTrigger(this.opts.id.current)){U(this.#t,!1);return}let n=e.relatedTarget;if(pt(n)){for(let e of t.registry.triggers.values())if(e.node===n){if(t.provider.opts.skipDelayDuration.current>0){U(this.#t,!1);return}t.handleClose(),U(this.#t,!1);return}}t.onTriggerLeave(),U(this.#t,!1)};#m=e=>{let t=this.#a();if(t&&!this.#e.current){if(this.#o()){t.opts.open.current&&t.handleClose();return}(!t.ignoreNonKeyboardFocus||xt(e.currentTarget))&&(t.setActiveTrigger(this.opts.id.current),t.handleOpen())}};#h=()=>{let e=this.#a();e&&!this.#o()&&e.handleClose()};#g=()=>{let e=this.#a();!e||e.disableCloseOnTriggerClick||this.#o()||e.handleClose()};#_=R(()=>{let e=this.#a(),t=!!(e?.opts.open.current&&e.isActiveTrigger(this.opts.id.current)),n=this.#o();return{id:this.opts.id.current,"aria-describedby":t?e?.contentNode?.id:void 0,"data-state":t?e?.stateAttr:`closed`,"data-disabled":it(n),"data-delay-duration":`${e?.delayDuration??0}`,[as.trigger]:``,tabindex:n?void 0:this.opts.tabindex.current,disabled:this.opts.disabled.current,onpointerup:this.#l,onpointerdown:this.#u,onpointerenter:this.#d,onpointermove:this.#f,onpointerleave:this.#p,onfocus:this.#m,onblur:this.#h,onclick:this.#g,...this.attachment}});get props(){return f(this.#_)}set props(e){U(this.#_,e)}},fs=class e{static create(t){return new e(t,ss.get())}opts;root;attachment;constructor(e,t){this.opts=e,this.root=t,this.attachment=lt(this.opts.ref,e=>this.root.contentNode=e),new gn({triggerNode:()=>this.root.triggerNode,contentNode:()=>this.root.contentNode,enabled:()=>this.root.opts.open.current&&!this.root.disableHoverableContent,transitIntentTimeout:180,ignoredTargets:()=>{if(this.root.provider.opts.skipDelayDuration.current===0)return[];let e=[],t=this.root.triggerNode;for(let n of this.root.registry.triggers.values())n.node&&n.node!==t&&e.push(n.node);return e},onPointerExit:()=>{this.root.provider.isTooltipOpen(this.root)&&this.root.handleClose()}})}onInteractOutside=e=>{if(pt(e.target)&&this.root.triggerNode?.contains(e.target)&&this.root.disableCloseOnTriggerClick){e.preventDefault();return}this.opts.onInteractOutside.current(e),!e.defaultPrevented&&this.root.handleClose()};onEscapeKeydown=e=>{this.opts.onEscapeKeydown.current?.(e),!e.defaultPrevented&&this.root.handleClose()};onOpenAutoFocus=e=>{e.preventDefault()};onCloseAutoFocus=e=>{e.preventDefault()};get shouldRender(){return this.root.contentPresence.shouldRender}#e=R(()=>({open:this.root.opts.open.current}));get snippetProps(){return f(this.#e)}set snippetProps(e){U(this.#e,e)}#t=R(()=>({id:this.opts.id.current,"data-state":this.root.stateAttr,"data-disabled":it(this.root.disabled),...st(this.root.contentPresence.transitionStatus),style:{outline:`none`},[as.content]:``,...this.attachment}));get props(){return f(this.#t)}set props(e){U(this.#t,e)}popperProps={onInteractOutside:this.onInteractOutside,onEscapeKeydown:this.onEscapeKeydown,onOpenAutoFocus:this.onOpenAutoFocus,onCloseAutoFocus:this.onCloseAutoFocus}};function ps(e,t){i(t,!0);let n=E(t,`open`,15,!1),r=E(t,`triggerId`,15,null),a=E(t,`onOpenChange`,3,X),o=E(t,`onOpenChangeComplete`,3,X),l=us.create({open:Y(()=>n(),e=>{n(e),a()(e)}),triggerId:Y(()=>r(),e=>{r(e)}),delayDuration:Y(()=>t.delayDuration),disableCloseOnTriggerClick:Y(()=>t.disableCloseOnTriggerClick),disableHoverableContent:Y(()=>t.disableHoverableContent),ignoreNonKeyboardFocus:Y(()=>t.ignoreNonKeyboardFocus),disabled:Y(()=>t.disabled),onOpenChangeComplete:Y(()=>o()),tether:Y(()=>t.tether)});Vt(e,{tooltip:!0,children:(e,n)=>{var r=c(),i=B(r);s(i,()=>t.children??F,()=>({open:l.opts.open.current,triggerId:l.activeTriggerId,payload:l.activePayload})),g(e,r)},$$slots:{default:!0}}),v()}var ms=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`child`,`id`,`ref`,`side`,`sideOffset`,`align`,`avoidCollisions`,`arrowPadding`,`sticky`,`strategy`,`hideWhenDetached`,`customAnchor`,`collisionPadding`,`onInteractOutside`,`onEscapeKeydown`,`forceMount`,`style`]),hs=u(`<div><div><!></div></div>`);function gs(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`ref`,15,null),u=E(r,`side`,3,`top`),d=E(r,`sideOffset`,3,0),p=E(r,`align`,3,`center`),m=E(r,`avoidCollisions`,3,!0),h=E(r,`arrowPadding`,3,0),y=E(r,`sticky`,3,`partial`),b=E(r,`hideWhenDetached`,3,!1),x=E(r,`collisionPadding`,3,0),S=E(r,`onInteractOutside`,3,X),C=E(r,`onEscapeKeydown`,3,X),w=E(r,`forceMount`,3,!1),T=z(r,ms),O=fs.create({id:Y(()=>o()),ref:Y(()=>l(),e=>l(e)),onInteractOutside:Y(()=>S()),onEscapeKeydown:Y(()=>C())}),k=R(()=>({side:u(),sideOffset:d(),align:p(),avoidCollisions:m(),arrowPadding:h(),sticky:y(),hideWhenDetached:b(),collisionPadding:x(),strategy:r.strategy,customAnchor:r.customAnchor??O.root.triggerNode})),A=R(()=>J(T,f(k),O.props));var j=c(),M=B(j),N=n=>{{let i=(n,i)=>{let a=()=>(i?.()).props,o=()=>(i?.()).wrapperProps,l=R(()=>J(o(),{style:{pointerEvents:O.root.disableHoverableContent?`none`:void 0}})),u=R(()=>J(a(),{style:qt(`tooltip`)},{style:r.style}));var d=c(),p=B(d),m=e=>{var t=c(),n=B(t);{let e=R(()=>({props:f(u),wrapperProps:f(l),...O.snippetProps}));s(n,()=>r.child,()=>f(e))}g(e,t)},h=e=>{var n=hs();V(n,()=>({...f(l)}));var i=D(n);V(i,()=>({...f(u)}));var a=D(i);s(a,()=>r.children??F),t(i),t(n),g(e,n)};e(p,e=>{r.child?e(m):e(h,-1)}),g(n,d)},a=R(()=>O.root.disableHoverableContent?`none`:`auto`);Zt(n,oe(()=>f(A),()=>O.popperProps,{get enabled(){return O.root.opts.open.current},get id(){return o()},trapFocus:!1,loop:!1,preventScroll:!1,forceMount:!0,get ref(){return O.opts.ref},tooltip:!0,get shouldRender(){return O.shouldRender},get contentPointerEvents(){return f(a)},popper:i,$$slots:{popper:!0}}))}},P=n=>{{let i=(n,i)=>{let a=()=>(i?.()).props,o=()=>(i?.()).wrapperProps,l=R(()=>J(o(),{style:{pointerEvents:O.root.disableHoverableContent?`none`:void 0}})),u=R(()=>J(a(),{style:qt(`tooltip`)},{style:r.style}));var d=c(),p=B(d),m=e=>{var t=c(),n=B(t);{let e=R(()=>({props:f(u),wrapperProps:f(l),...O.snippetProps}));s(n,()=>r.child,()=>f(e))}g(e,t)},h=e=>{var n=hs();V(n,()=>({...f(l)}));var i=D(n);V(i,()=>({...f(u)}));var a=D(i);s(a,()=>r.children??F),t(i),t(n),g(e,n)};e(p,e=>{r.child?e(m):e(h,-1)}),g(n,d)},a=R(()=>O.root.disableHoverableContent?`none`:`auto`);Kt(n,oe(()=>f(A),()=>O.popperProps,{get open(){return O.root.opts.open.current},get id(){return o()},trapFocus:!1,loop:!1,preventScroll:!1,forceMount:!1,get ref(){return O.opts.ref},tooltip:!0,get shouldRender(){return O.shouldRender},get contentPointerEvents(){return f(a)},popper:i,$$slots:{popper:!0}}))}};e(M,e=>{w()?e(N):w()||e(P,1)}),g(n,j),v()}var _s=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`child`,`id`,`disabled`,`payload`,`tether`,`type`,`tabindex`,`ref`]),vs=u(`<button><!></button>`);function ys(n,r){let a=_();i(r,!0);let o=E(r,`id`,19,()=>Z(a)),l=E(r,`disabled`,3,!1),u=E(r,`type`,3,`button`),d=E(r,`tabindex`,3,0),p=E(r,`ref`,15,null),m=z(r,_s),h=ds.create({id:Y(()=>o()),disabled:Y(()=>l()??!1),tabindex:Y(()=>d()??0),payload:Y(()=>r.payload),tether:Y(()=>r.tether),ref:Y(()=>p(),e=>p(e))}),y=R(()=>J(m,h.props,{type:u()}));var b=c(),x=B(b),S=e=>{var t=c(),n=B(t);s(n,()=>r.child,()=>({props:f(y)})),g(e,t)},C=e=>{var n=vs();V(n,()=>({...f(y)}));var i=D(n);s(i,()=>r.children??F),t(n),g(e,n)};e(x,e=>{r.child?e(S):e(C,-1)}),g(n,b),v()}var bs=new Set([`$$slots`,`$$events`,`$$legacy`,`ref`]);function xs(e,t){i(t,!0);let n=E(t,`ref`,15,null),r=z(t,bs);$r(e,oe(()=>r,{get ref(){return n()},set ref(e){n(e)}})),v()}function Ss(e,t){i(t,!0);let n=E(t,`delayDuration`,3,700),r=E(t,`disableCloseOnTriggerClick`,3,!1),a=E(t,`disableHoverableContent`,3,!1),o=E(t,`disabled`,3,!1),l=E(t,`ignoreNonKeyboardFocus`,3,!1),u=E(t,`skipDelayDuration`,3,300);ls.create({delayDuration:Y(()=>n()),disableCloseOnTriggerClick:Y(()=>r()),disableHoverableContent:Y(()=>a()),disabled:Y(()=>o()),ignoreNonKeyboardFocus:Y(()=>l()),skipDelayDuration:Y(()=>u())});var d=c(),f=B(d);s(f,()=>t.children??F),g(e,d),v()}var Cs={page:1,pageSize:20,siblingCount:1,label:`페이지 이동`,previousLabel:`이전`,nextLabel:`다음`},ws=u(`<span aria-hidden="true">…</span>`),Ts=u(`<button type="button" class="svelte-6keguh">1</button><!>`,1),Es=u(`<button type="button" class="svelte-6keguh"> </button>`),Ds=u(`<!><button type="button" class="svelte-6keguh"> </button>`,1),Os=u(`<nav><button type="button" class="svelte-6keguh"> </button><!><!><!><button type="button" class="svelte-6keguh"> </button></nav>`);function ks(n,r){i(r,!0);let o=E(r,`page`,31,()=>k(Cs.page)),s=E(r,`pageSize`,19,()=>Cs.pageSize),c=E(r,`siblingCount`,19,()=>Cs.siblingCount),l=E(r,`label`,19,()=>Cs.label),u=E(r,`previousLabel`,19,()=>Cs.previousLabel),d=E(r,`nextLabel`,19,()=>Cs.nextLabel),p=R(()=>Number.isFinite(s())&&s()>0?Math.floor(s()):Cs.pageSize),h=R(()=>Math.max(1,Math.ceil(Math.max(0,Number.isFinite(r.count)?r.count:0)/f(p)))),_=R(()=>Math.max(1,Math.min(f(h),Number.isFinite(o())?Math.floor(o()):1))),y=R(()=>Math.max(0,Number.isFinite(c())?Math.floor(c()):Cs.siblingCount)),b=R(()=>{let e=Math.max(1,f(_)-f(y)),t=Math.min(f(h),f(_)+f(y));return Array.from({length:t-e+1},(t,n)=>e+n)});function S(e){o(Math.max(1,Math.min(f(h),e))),r.onpagechange?.(o())}var C=Os(),w=D(C),T=D(w,!0);t(w);var A=H(w),M=t=>{var n=Ts(),r=B(n),i=H(r),a=e=>{var t=ws();g(e,t)};e(i,e=>{f(b)[0]>2&&e(a)}),x(`click`,r,()=>S(1)),g(t,n)};e(A,e=>{f(b)[0]>1&&e(M)});var N=H(A);a(N,16,()=>f(b),e=>e,(e,n)=>{var r=Es(),i=D(r,!0);t(r),j(()=>{P(r,`aria-current`,n===f(_)?`page`:void 0),m(i,n)}),x(`click`,r,()=>S(n)),g(e,r)});var F=H(N),I=n=>{var r=Ds(),i=B(r),a=e=>{var t=ws();g(e,t)},o=R(()=>(f(b).at(-1)??0)<f(h)-1);e(i,e=>{f(o)&&e(a)});var s=H(i),c=D(s,!0);t(s),j(()=>m(c,f(h))),x(`click`,s,()=>S(f(h))),g(n,r)},L=R(()=>f(b).at(-1)!==f(h));e(F,e=>{f(L)&&e(I)});var ee=H(F),te=D(ee,!0);t(ee),t(C),j(()=>{O(C,1,de([`soya-pagination`,r.class]),`svelte-6keguh`),P(C,`aria-label`,l()),w.disabled=f(_)<=1,m(T,u()),ee.disabled=f(_)>=f(h),m(te,d())}),x(`click`,w,()=>S(f(_)-1)),x(`click`,ee,()=>S(f(_)+1)),g(n,C),v()}n([`click`]);var As={delayDuration:500,disabled:!1},js=u(` <!>`,1),Ms=u(`<!> <!>`,1);function Ns(t,n){i(n,!0);let r=E(n,`delayDuration`,19,()=>As.delayDuration),a=E(n,`disabled`,19,()=>As.disabled),o=Ct(),l=e=>e;var u=c(),d=B(u);y(d,()=>Ss,(t,i)=>{i(t,{children:(t,i)=>{var u=c(),d=B(u);y(d,()=>ps,(t,i)=>{i(t,{get delayDuration(){return r()},get disabled(){return a()},children:(t,r)=>{var i=Ms(),a=B(i);{let e=(e,t)=>{let r=()=>(t?.()).props;var i=c(),a=B(i);{let e=R(()=>l(r()));s(a,()=>n.children,()=>f(e))}g(e,i)};y(a,()=>ys,(t,n)=>{n(t,{child:e,$$slots:{child:!0}})})}var u=H(a,2),d=e=>{var t=c(),r=B(t);y(r,()=>At,(e,t)=>{t(e,{get to(){return o.portal},children:(e,t)=>{var r=c(),i=B(r);{let e=R(()=>[`soya-tooltip`,n.class]);y(i,()=>gs,(t,r)=>{r(t,{role:`tooltip`,get class(){return f(e)},sideOffset:6,children:(e,t)=>{L();var r=js(),i=B(r,!0),a=H(i);y(a,()=>xs,(e,t)=>{t(e,{class:`soya-tooltip__arrow`})}),j(()=>m(i,n.content)),g(e,r)},$$slots:{default:!0}})})}g(e,r)},$$slots:{default:!0}})}),g(e,t)};e(u,e=>{o.portal&&e(d)}),g(t,i)},$$slots:{default:!0}})}),g(t,u)},$$slots:{default:!0}})}),g(t,u),v()}var Ps={label:`메뉴`},Fs=u(`<small> </small>`),Is=u(`<span> <!></span>`),Ls=u(`<!><!>`,1);function Rs(n,r){i(r,!0);let o=E(r,`label`,19,()=>Ps.label),l=Ct(),u=e=>e;var d=c(),p=B(d);y(p,()=>ja,(n,i)=>{i(n,{children:(n,i)=>{var d=Ls(),p=B(d);{let e=(e,t)=>{let n=()=>(t?.()).props;var i=c(),a=B(i);{let e=R(()=>u(n()));s(a,()=>r.trigger,()=>f(e))}g(e,i)};y(p,()=>La,(t,n)=>{n(t,{get"aria-label"(){return o()},child:e,$$slots:{child:!0}})})}var h=H(p),_=n=>{var i=c(),o=B(i);y(o,()=>At,(n,i)=>{i(n,{get to(){return l.portal},children:(n,i)=>{var o=c(),s=B(o);{let n=R(()=>[`soya-menu`,r.class]);y(s,()=>Pa,(i,o)=>{o(i,{get class(){return f(n)},sideOffset:4,children:(n,i)=>{var o=c(),s=B(o);a(s,17,()=>r.items,e=>e.value,(n,i)=>{var a=c(),o=B(a);y(o,()=>wa,(n,a)=>{a(n,{class:`soya-menu__item`,get"data-danger"(){return f(i).danger},get disabled(){return f(i).disabled},onSelect:()=>r.onselect?.(f(i)),children:(n,r)=>{var a=Is(),o=D(a,!0),s=H(o),c=e=>{var n=Fs(),r=D(n,!0);t(n),j(()=>m(r,f(i).description)),g(e,n)};e(s,e=>{f(i).description&&e(c)}),t(a),j(()=>m(o,f(i).label)),g(n,a)},$$slots:{default:!0}})}),g(n,a)}),g(n,o)},$$slots:{default:!0}})})}g(n,o)},$$slots:{default:!0}})}),g(n,i)};e(h,e=>{l.portal&&e(_)}),g(n,d)},$$slots:{default:!0}})}),g(n,d),v()}var zs={query:``,value:``,label:`명령 검색`,placeholder:`명령을 검색하세요`,emptyLabel:`일치하는 명령이 없습니다.`,shouldFilter:!0,loop:!0,disabled:!1};function Bs(e){let t=new Map;t.set(void 0,[]);for(let n of e){let e=n.group;t.has(e)||t.set(e,[]),t.get(e)?.push(n)}return[...t].filter(([,e])=>e.length>0).map(([e,t])=>({label:e,options:t}))}async function Vs(e,t){t(!0);try{return await e?.()!==!1}finally{t(!1)}}var Hs=u(`<small> </small>`),Us=u(`<span> </span> <!>`,1),Ws=u(`<!> <!>`,1);function Gs(n,r){i(r,!0);let o=E(r,`query`,31,()=>k(zs.query)),s=E(r,`value`,31,()=>k(zs.value)),l=E(r,`label`,19,()=>zs.label),u=E(r,`placeholder`,19,()=>zs.placeholder),d=E(r,`emptyLabel`,19,()=>zs.emptyLabel),p=E(r,`shouldFilter`,19,()=>zs.shouldFilter),h=E(r,`loop`,19,()=>zs.loop),_=E(r,`disabled`,19,()=>zs.disabled),b=R(()=>Bs(r.options));function x(e){o(e.currentTarget.value),r.onquerychange?.(o())}function S(e){_()||e.disabled||r.onselect?.(e)}var C=c(),w=B(C);{let n=R(()=>[`soya-command`,r.class]);y(w,()=>Ii,(i,v)=>{v(i,{get class(){return f(n)},get label(){return l()},get shouldFilter(){return p()},get loop(){return h()},get onValueChange(){return r.onvaluechange},get value(){return s()},set value(e){s(e)},children:(n,r)=>{var i=Ws(),s=B(i);y(s,()=>Qi,(e,t)=>{t(e,{class:`soya-command__input`,get value(){return o()},get placeholder(){return u()},get disabled(){return _()},oninput:x})});var l=H(s,2);y(l,()=>aa,(n,r)=>{r(n,{class:`soya-command__list`,children:(n,r)=>{var i=Ws(),o=B(i);y(o,()=>zi,(e,t)=>{t(e,{class:`soya-command__empty`,children:(e,t)=>{L();var n=W();j(()=>m(n,d())),g(e,n)},$$slots:{default:!0}})});var s=H(o,2);a(s,17,()=>f(b),e=>e.label??`__ungrouped`,(n,r)=>{var i=c(),o=B(i);y(o,()=>Hi,(n,i)=>{i(n,{class:`soya-command__group`,get value(){return f(r).label},children:(n,i)=>{var o=Ws(),s=B(o),l=e=>{var t=c(),n=B(t);y(n,()=>Gi,(e,t)=>{t(e,{class:`soya-command__heading`,children:(e,t)=>{L();var n=W();j(()=>m(n,f(r).label)),g(e,n)},$$slots:{default:!0}})}),g(e,t)};e(s,e=>{f(r).label&&e(l)});var u=H(s,2);y(u,()=>Yi,(n,i)=>{i(n,{children:(n,i)=>{var o=c(),s=B(o);a(s,17,()=>f(r).options,e=>e.value,(n,r)=>{var i=c(),a=B(i);{let n=R(()=>[f(r).label,...f(r).keywords??[]]),i=R(()=>_()||f(r).disabled);y(a,()=>na,(a,o)=>{o(a,{class:`soya-command__item`,get value(){return f(r).value},get keywords(){return f(n)},get disabled(){return f(i)},onSelect:()=>S(f(r)),children:(n,i)=>{var a=Us(),o=B(a),s=D(o,!0);t(o);var c=H(o,2),l=e=>{var n=Hs(),i=D(n,!0);t(n),j(()=>m(i,f(r).description)),g(e,n)};e(c,e=>{f(r).description&&e(l)}),j(()=>m(s,f(r).label)),g(n,a)},$$slots:{default:!0}})})}g(n,i)}),g(n,o)},$$slots:{default:!0}})}),g(n,o)},$$slots:{default:!0}})}),g(n,i)}),g(n,i)},$$slots:{default:!0}})}),g(n,i)},$$slots:{default:!0}})})}g(n,C),v()}var Ks={value:``,open:!1,placeholder:`선택하세요`,searchPlaceholder:`검색하세요`,emptyLabel:`일치하는 옵션이 없습니다.`,triggerLabel:`옵션 열기`,disabled:!1,required:!1,invalid:!1},qs=u(`<p class="soya-combobox__empty"> </p>`),Js=u(`<small> </small>`),Ys=u(`<span> <!></span> <span class="soya-combobox__indicator" aria-hidden="true"><!></span>`,1),Xs=u(`<div><!> <!></div> <!>`,1);function Zs(n,r){i(r,!0);let o=E(r,`value`,31,()=>k(Ks.value)),s=E(r,`open`,31,()=>k(Ks.open)),l=E(r,`placeholder`,19,()=>Ks.placeholder),u=E(r,`searchPlaceholder`,19,()=>Ks.searchPlaceholder),d=E(r,`emptyLabel`,19,()=>Ks.emptyLabel),p=E(r,`triggerLabel`,19,()=>Ks.triggerLabel),h=E(r,`disabled`,19,()=>Ks.disabled),_=E(r,`required`,19,()=>Ks.required),b=E(r,`invalid`,19,()=>Ks.invalid),x=Ct(),S=N(``),C=N(null),w=!1,T=R(()=>r.options.find(e=>e.value===o())),A=R(()=>{let e=f(S).trim().toLocaleLowerCase();return e?r.options.filter(t=>[t.label,t.value,t.description].filter(Boolean).some(t=>t?.toLocaleLowerCase().includes(e))):r.options});function M(e){U(S,e.currentTarget.value,!0),!w&&!s()&&!h()&&(s(!0),r.onopenchange?.(!0))}function F(e){s(e),e||U(S,``),r.onopenchange?.(e)}se(()=>{let e=f(T)?.label??``,t=f(C);t&&t.value!==e&&(w=!0,t.value=e,t.dispatchEvent(new Event(`input`,{bubbles:!0})),w=!1)});var I=c(),L=B(I);{let n=R(()=>f(T)?.label??``);y(L,()=>qr,(i,v)=>{v(i,{type:`single`,get items(){return r.options},get inputValue(){return f(n)},get disabled(){return h()},get required(){return _()},get name(){return r.name},get onValueChange(){return r.onvaluechange},onOpenChange:F,get value(){return o()},set value(e){o(e)},get open(){return s()},set open(e){s(e)},children:(n,i)=>{var _=Xs(),v=B(_),S=D(v);{let e=R(()=>s()?u():l()),t=R(()=>b()||void 0);y(S,()=>ni,(n,i)=>{i(n,{get id(){return r.id},class:`soya-combobox__input`,clearOnDeselect:!0,get placeholder(){return f(e)},get"aria-label"(){return r[`aria-label`]},get"aria-labelledby"(){return r[`aria-labelledby`]},get"aria-describedby"(){return r[`aria-describedby`]},get"aria-invalid"(){return f(t)},oninput:M,get ref(){return f(C)},set ref(e){U(C,e,!0)}})})}var w=H(S,2);y(w,()=>ai,(e,t)=>{t(e,{class:`soya-combobox__trigger`,type:`button`,get"aria-label"(){return p()},children:(e,t)=>{fn(e,{class:`soya-combobox__chevron`})},$$slots:{default:!0}})}),t(v);var T=H(v,2),E=n=>{var r=c(),i=B(r);y(i,()=>At,(n,r)=>{r(n,{get to(){return x.portal},children:(n,r)=>{var i=c(),s=B(i);y(s,()=>pn,(n,r)=>{r(n,{class:`soya-combobox__content`,sideOffset:4,collisionPadding:16,children:(n,r)=>{var i=c(),s=B(i);y(s,()=>cn,(n,r)=>{r(n,{children:(n,r)=>{var i=c(),s=B(i),l=e=>{var n=qs(),r=D(n,!0);t(n),j(()=>m(r,d())),g(e,n)},u=n=>{var r=c(),i=B(r);a(i,17,()=>f(A),e=>e.value,(n,r)=>{var i=c(),a=B(i);y(a,()=>rn,(n,i)=>{i(n,{class:`soya-combobox__item`,get value(){return f(r).value},get label(){return f(r).label},get disabled(){return f(r).disabled},children:(n,i)=>{var a=Ys(),s=B(a),c=D(s),l=H(c),u=e=>{var n=Js(),i=D(n,!0);t(n),j(()=>m(i,f(r).description)),g(e,n)};e(l,e=>{f(r).description&&e(u)}),t(s);var d=H(s,2),p=D(d),h=e=>{_e(e,{name:`check`,size:`1rem`})};e(p,e=>{o()===f(r).value&&e(h)}),t(d),j(()=>m(c,`${f(r).label??``} `)),g(n,a)},$$slots:{default:!0}})}),g(n,i)}),g(n,r)};e(s,e=>{f(A).length===0?e(l):e(u,-1)}),g(n,i)},$$slots:{default:!0}})}),g(n,i)},$$slots:{default:!0}})}),g(n,i)},$$slots:{default:!0}})}),g(n,r)};e(T,e=>{x.portal&&e(E)}),j(()=>{O(v,1,de([`soya-combobox`,r.class]),`svelte-13n2mq8`),P(v,`data-size`,r.size),P(v,`data-disabled`,h()||void 0)}),g(n,_)},$$slots:{default:!0}})})}g(n,I),v()}var Qs={open:!1,cancelLabel:`취소`,actionLabel:`확인`,pendingLabel:`처리 중`,errorLabel:`작업을 완료하지 못했습니다. 다시 시도하세요.`,actionTone:`primary`},$s=u(`<div class="soya-alert-dialog__body"><!></div>`),ec=u(`<p class="soya-alert-dialog__error" role="alert"> </p>`),tc=u(`<!> <!> <!> <!> <footer><!> <!></footer>`,1),nc=u(`<!> <!>`,1);function rc(n,r){i(r,!0);let a=E(r,`open`,31,()=>k(Qs.open)),o=E(r,`cancelLabel`,19,()=>Qs.cancelLabel),l=E(r,`actionLabel`,19,()=>Qs.actionLabel),u=E(r,`pendingLabel`,19,()=>Qs.pendingLabel),d=E(r,`errorLabel`,19,()=>Qs.errorLabel),p=E(r,`actionTone`,19,()=>Qs.actionTone),h=Ct(),_=e=>e,b=N(!1),x=N(!1);function S(){f(b)||r.oncancel?.()}async function C(){if(!f(b)){U(x,!1);try{await Vs(r.onconfirm,e=>U(b,e,!0))&&a(!1)}catch{U(x,!0)}}}var w=c(),T=B(w);y(T,()=>xr,(n,i)=>{i(n,{get onOpenChange(){return r.onopenchange},get open(){return a()},set open(e){a(e)},children:(n,i)=>{var a=nc(),v=B(a),w=e=>{var t=c(),n=B(t);{let e=(e,t)=>{let n=()=>(t?.()).props;var i=c(),a=B(i);{let e=R(()=>_(n()));s(a,()=>r.trigger,()=>f(e))}g(e,i)};y(n,()=>He,(t,n)=>{n(t,{child:e,$$slots:{child:!0}})})}g(e,t)};e(v,e=>{r.trigger&&e(w)});var T=H(v,2),E=n=>{var i=c(),a=B(i);y(a,()=>At,(n,i)=>{i(n,{get to(){return h.portal},children:(n,i)=>{var a=nc(),h=B(a);y(h,()=>Je,(e,t)=>{t(e,{class:`soya-alert-dialog__overlay`})});var _=H(h,2);{let n=R(()=>[`soya-alert-dialog`,r.class]);y(_,()=>jr,(i,a)=>{a(i,{get class(){return f(n)},children:(n,i)=>{var a=tc(),h=B(a);y(h,()=>nt,(e,t)=>{t(e,{class:`soya-alert-dialog__title`,children:(e,t)=>{L();var n=W();j(()=>m(n,r.title)),g(e,n)},$$slots:{default:!0}})});var _=H(h,2),v=e=>{var t=c(),n=B(t);y(n,()=>et,(e,t)=>{t(e,{class:`soya-alert-dialog__description`,children:(e,t)=>{L();var n=W();j(()=>m(n,r.description)),g(e,n)},$$slots:{default:!0}})}),g(e,t)};e(_,e=>{r.description&&e(v)});var w=H(_,2),T=e=>{var n=$s(),i=D(n);s(i,()=>r.children),t(n),g(e,n)};e(w,e=>{r.children&&e(T)});var E=H(w,2),O=e=>{var n=ec(),r=D(n,!0);t(n),j(()=>m(r,d())),g(e,n)};e(E,e=>{f(x)&&e(O)});var k=H(E,2),A=D(k);y(A,()=>Dr,(e,t)=>{t(e,{class:`soya-alert-dialog__button`,type:`button`,"data-variant":`secondary`,get disabled(){return f(b)},onclick:S,children:(e,t)=>{L();var n=W();j(()=>m(n,o())),g(e,n)},$$slots:{default:!0}})});var M=H(A,2);{let e=R(()=>f(b)||void 0);y(M,()=>wr,(t,n)=>{n(t,{class:`soya-alert-dialog__button`,type:`button`,get"data-tone"(){return p()},get disabled(){return f(b)},get"aria-busy"(){return f(e)},onclick:C,children:(e,t)=>{L();var n=W();j(()=>m(n,f(b)?u():l())),g(e,n)},$$slots:{default:!0}})})}t(k),g(n,a)},$$slots:{default:!0}})})}g(n,a)},$$slots:{default:!0}})}),g(n,i)};e(T,e=>{h.portal&&e(E)}),g(n,a)},$$slots:{default:!0}})}),g(n,w),v()}var ic={type:`single`,value:``,disabled:!1,orientation:`vertical`,loop:!0,headingLevel:3},ac=u(`<span> </span><!>`,1),oc=u(`<div class="soya-accordion__body"><!></div>`),sc=u(`<!> <!>`,1);function cc(n,r){i(r,!0);let o=e=>{var n=c(),i=B(n);a(i,17,()=>r.items,e=>e.value,(e,n)=>{var r=c(),i=B(r);y(i,()=>dr,(e,r)=>{r(e,{class:`soya-accordion__item`,get value(){return f(n).value},get disabled(){return f(n).disabled},children:(e,r)=>{var i=sc(),a=B(i);y(a,()=>mr,(e,r)=>{r(e,{class:`soya-accordion__header`,get level(){return _()},children:(e,r)=>{var i=c(),a=B(i);y(a,()=>_r,(e,r)=>{r(e,{class:`soya-accordion__trigger`,children:(e,r)=>{var i=ac(),a=B(i),o=D(a,!0);t(a);var s=H(a);fn(s,{class:`soya-accordion__icon`}),j(()=>m(o,f(n).title)),g(e,i)},$$slots:{default:!0}})}),g(e,i)},$$slots:{default:!0}})});var o=H(a,2);y(o,()=>br,(e,r)=>{r(e,{class:`soya-accordion__content`,children:(e,r)=>{var i=oc(),a=D(i);s(a,()=>f(n).content),t(i),g(e,i)},$$slots:{default:!0}})}),g(e,i)},$$slots:{default:!0}})}),g(e,r)}),g(e,n)},l=E(r,`type`,19,()=>ic.type),u=E(r,`value`,31,()=>k(ic.value)),d=E(r,`disabled`,19,()=>ic.disabled),p=E(r,`orientation`,19,()=>ic.orientation),h=E(r,`loop`,19,()=>ic.loop),_=E(r,`headingLevel`,19,()=>ic.headingLevel),b=R(()=>typeof u()==`string`?u():``),x=R(()=>Array.isArray(u())?u():[]);function S(e){u(e),r.onvaluechange?.(e)}function C(e){u(e),r.onvaluechange?.(e)}var w=c(),T=B(w),O=e=>{var t=c(),n=B(t);{let e=R(()=>[`soya-accordion`,r.class]);y(n,()=>cr,(t,n)=>{n(t,{get class(){return f(e)},type:`multiple`,get value(){return f(x)},get disabled(){return d()},get orientation(){return p()},get loop(){return h()},onValueChange:C,children:(e,t)=>{o(e)},$$slots:{default:!0}})})}g(e,t)},A=e=>{var t=c(),n=B(t);{let e=R(()=>[`soya-accordion`,r.class]);y(n,()=>cr,(t,n)=>{n(t,{get class(){return f(e)},type:`single`,get value(){return f(b)},get disabled(){return d()},get orientation(){return p()},get loop(){return h()},onValueChange:S,children:(e,t)=>{o(e)},$$slots:{default:!0}})})}g(e,t)};e(T,e=>{l()===`multiple`?e(O):e(A,-1)}),g(n,w),v()}var lc={open:!1,disabled:!1},uc=u(`<div class="soya-collapsible__body"><!></div>`),dc=u(`<!> <!>`,1);function fc(n,r){i(r,!0);let a=E(r,`open`,31,()=>k(lc.open)),o=E(r,`disabled`,19,()=>lc.disabled),l=e=>e;var u=c(),d=B(u);{let n=R(()=>[`soya-collapsible`,r.class]);y(d,()=>zr,(i,u)=>{u(i,{get class(){return f(n)},get disabled(){return o()},get onOpenChange(){return r.onopenchange},get open(){return a()},set open(e){a(e)},children:(n,i)=>{var a=dc(),o=B(a);{let e=(e,t)=>{let n=()=>(t?.()).props;var i=c(),a=B(i);{let e=R(()=>l(n()));s(a,()=>r.trigger,()=>f(e))}g(e,i)};y(o,()=>Gr,(t,n)=>{n(t,{child:e,$$slots:{child:!0}})})}var u=H(o,2),d=e=>{var n=c(),i=B(n);y(i,()=>Hr,(e,n)=>{n(e,{class:`soya-collapsible__content`,children:(e,n)=>{var i=uc(),a=D(i);s(a,()=>r.children),t(i),g(e,i)},$$slots:{default:!0}})}),g(e,n)};e(u,e=>{r.children&&e(d)}),g(n,a)},$$slots:{default:!0}})})}g(n,u),v()}var pc={open:!1,side:`right`,closeLabel:`닫기`},mc=u(`<footer><!></footer>`),hc=u(`<header><div><!> <!></div> <!></header> <div class="soya-sheet__body"><!></div> <!>`,1),gc=u(`<!> <!>`,1);function _c(n,r){i(r,!0);let a=E(r,`open`,31,()=>k(pc.open)),o=E(r,`side`,19,()=>pc.side),l=E(r,`closeLabel`,19,()=>pc.closeLabel),u=Ct(),d=e=>e;var p=c(),h=B(p);y(h,()=>Ze,(n,i)=>{i(n,{get onOpenChange(){return r.onopenchange},get open(){return a()},set open(e){a(e)},children:(n,i)=>{var a=gc(),p=B(a),h=e=>{var t=c(),n=B(t);{let e=(e,t)=>{let n=()=>(t?.()).props;var i=c(),a=B(i);{let e=R(()=>d(n()));s(a,()=>r.trigger,()=>f(e))}g(e,i)};y(n,()=>He,(t,n)=>{n(t,{child:e,$$slots:{child:!0}})})}g(e,t)};e(p,e=>{r.trigger&&e(h)});var _=H(p,2),v=n=>{var i=c(),a=B(i);y(a,()=>At,(n,i)=>{i(n,{get to(){return u.portal},children:(n,i)=>{var a=gc(),u=B(a);y(u,()=>Je,(e,t)=>{t(e,{class:`soya-sheet__overlay`})});var d=H(u,2);{let n=R(()=>[`soya-sheet`,r.class]);y(d,()=>qe,(i,a)=>{a(i,{get class(){return f(n)},get"data-side"(){return o()},children:(n,i)=>{var a=hc(),o=B(a),u=D(o),d=D(u);y(d,()=>nt,(e,t)=>{t(e,{class:`soya-sheet__title`,children:(e,t)=>{L();var n=W();j(()=>m(n,r.title)),g(e,n)},$$slots:{default:!0}})});var f=H(d,2),p=e=>{var t=c(),n=B(t);y(n,()=>et,(e,t)=>{t(e,{class:`soya-sheet__description`,children:(e,t)=>{L();var n=W();j(()=>m(n,r.description)),g(e,n)},$$slots:{default:!0}})}),g(e,t)};e(f,e=>{r.description&&e(p)}),t(u);var h=H(u,2);y(h,()=>Ve,(e,t)=>{t(e,{class:`soya-sheet__close`,type:`button`,get"aria-label"(){return l()},"data-variant":`ghost`,children:(e,t)=>{Ge(e,{})},$$slots:{default:!0}})}),t(o);var _=H(o,2),v=D(_);s(v,()=>r.children??F),t(_);var b=H(_,2),x=e=>{var n=mc(),i=D(n);s(i,()=>r.footer),t(n),g(e,n)};e(b,e=>{r.footer&&e(x)}),g(n,a)},$$slots:{default:!0}})})}g(n,a)},$$slots:{default:!0}})}),g(n,i)};e(_,e=>{u.portal&&e(v)}),g(n,a)},$$slots:{default:!0}})}),g(n,p),v()}function vc(e,t,n){if(n)return e;let r=t.trim();return!r||e.includes(r)?e:[...e,r]}var yc={values:[],placeholder:`값을 입력하고 Enter를 누르세요`,disabled:!1,readonly:!1,removeLabel:e=>`${e} 삭제`},bc=u(`<button type="button" data-variant="secondary" class="svelte-1x3mlt1"><!></button>`),xc=u(`<span class="soya-tag-input__tag svelte-1x3mlt1"><span class="svelte-1x3mlt1"> </span> <!></span>`),Sc=u(`<input type="hidden" class="svelte-1x3mlt1"/>`),Cc=u(`<div><label class="svelte-1x3mlt1"> </label> <div class="soya-tag-input__control svelte-1x3mlt1"><!> <input class="svelte-1x3mlt1"/></div> <!></div>`);function wc(n,r){let o=_();i(r,!0);let s=`soya-tag-input-${o}`,u=E(r,`id`,3,s),d=E(r,`values`,31,()=>k([...yc.values])),p=E(r,`placeholder`,19,()=>yc.placeholder),h=E(r,`disabled`,19,()=>yc.disabled),y=E(r,`readonly`,19,()=>yc.readonly),b=E(r,`removeLabel`,19,()=>yc.removeLabel),S=N(``),C=N(!1);function w(){let e=vc(d(),f(S),f(C));e!==d()&&(d(e),U(S,``),r.onvalueschange?.(d()))}function A(e){h()||y()||f(C)||(d(d().filter(t=>t!==e)),r.onvalueschange?.(d()))}function M(e){let t=f(C)||e.isComposing||e.keyCode===229;if(e.key===`Enter`){e.preventDefault(),!t&&!h()&&!y()&&w();return}e.key===`Backspace`&&!t&&!f(S)&&!h()&&!y()&&d().length>0&&(e.preventDefault(),A(d().at(-1)??``))}var F=Cc(),I=D(F),L=D(I,!0);t(I);var ee=H(I,2),R=D(ee);a(R,16,d,e=>e,(n,r)=>{var i=xc(),a=D(i),o=D(a,!0);t(a);var s=H(a,2),c=e=>{var n=bc(),i=D(n);Ge(i,{}),t(n),j(e=>{P(n,`aria-label`,e),n.disabled=h()},[()=>b()(r)]),x(`click`,n,()=>A(r)),g(e,n)};e(s,e=>{y()||e(c)}),t(i),j(()=>m(o,r)),g(n,i)});var ne=H(R,2);te(ne),t(ee);var re=H(ee,2),z=e=>{var t=c(),n=B(t);a(n,16,d,e=>e,(e,t)=>{var n=Sc();te(n),j(()=>{P(n,`name`,r.name),T(n,t),n.disabled=h()}),g(e,n)}),g(e,t)};e(re,e=>{r.name&&e(z)}),t(F),j(()=>{O(F,1,de([`soya-tag-input`,r.class]),`svelte-1x3mlt1`),P(F,`data-disabled`,h()||void 0),P(I,`for`,u()),m(L,r.label),P(ne,`id`,u()),T(ne,f(S)),P(ne,`placeholder`,p()),ne.disabled=h(),ne.readOnly=y(),P(ne,`aria-readonly`,y()||void 0)}),x(`input`,ne,e=>U(S,e.currentTarget.value,!0)),x(`keydown`,ne,M),l(`compositionstart`,ne,()=>U(C,!0)),l(`compositionend`,ne,e=>{U(C,!1),U(S,e.currentTarget.value,!0)}),g(n,F),v()}n([`click`,`input`,`keydown`]);function Tc(e){return Number.isFinite(e)&&e>0?Math.max(1,Math.floor(e)):20}function Ec(e,t){return t.getFilterValue?t.getFilterValue(e):e[t.key]}function Dc(e,t){return t.getSortValue?t.getSortValue(e):e[t.key]}function Oc(e,t){return Object.is(e,t)?0:e==null?1:t==null?-1:typeof e==`number`&&typeof t==`number`?e-t:e instanceof Date&&t instanceof Date?e.getTime()-t.getTime():String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:`base`})}function kc(e){let t=Tc(e.pageSize),n=e.query.trim().toLocaleLowerCase(),r=e.rows.map((t,n)=>({id:e.rowKey(t,n),row:t,sourceIndex:n})),i=e.columns.filter(e=>e.searchable!==!1),a=n?r.filter(({row:t})=>e.filter?e.filter(t,e.query.trim()):i.some(e=>String(Ec(t,e)??``).toLocaleLowerCase().includes(n))):r,o=e.sort?e.columns.find(t=>t.key===e.sort?.key):void 0,s=o?e.sort:void 0,c=o&&s?[...a].sort((t,n)=>{let r=e.compare?e.compare(Dc(t.row,o),Dc(n.row,o),o):Oc(Dc(t.row,o),Dc(n.row,o));return r===0?t.sourceIndex-n.sourceIndex:r*(s.direction===`asc`?1:-1)}):a,l=Math.max(1,Math.ceil(c.length/t)),u=Number.isFinite(e.page)?Math.floor(e.page):1,d=Math.max(1,Math.min(l,u)),f=(d-1)*t;return{rows:c.slice(f,f+t),allRows:c,filteredCount:c.length,totalPages:l,page:d,pageSize:t,sort:s}}var Ac={rowKey:(e,t)=>String(e.id??t),query:``,page:1,pageSize:20,selected:[],selectable:!1,searchLabel:`표 검색`,searchPlaceholder:`검색어를 입력하세요`,columnsLabel:`표시 열`,pageSizeLabel:`페이지당 행 수`,pageSizeOptions:[10,20,50],paginationLabel:`표 페이지 이동`,selectColumnLabel:`선택`,rowSelectLabel:(e,t)=>`${t+1}행 선택`,emptyLabel:`표시할 데이터가 없습니다.`,noColumnsLabel:`표시할 열을 선택하세요.`,previousPageLabel:`이전`,nextPageLabel:`다음`},jc=u(`<span> </span> <!>`,1),Mc=u(`<fieldset class="soya-data-table__columns svelte-ncxl2x"><legend class="su-sr-only"> </legend> <!></fieldset>`),Nc=u(`<div class="soya-data-table__no-columns svelte-ncxl2x" role="status"> </div>`),Pc=u(`<div><div class="soya-data-table__toolbar svelte-ncxl2x"><label class="soya-data-table__search svelte-ncxl2x"><span> </span> <!></label> <!></div> <!> <div class="soya-data-table__footer svelte-ncxl2x"><div class="soya-data-table__page-size svelte-ncxl2x"><span> </span> <!></div> <!></div></div>`);function Fc(n,r){let o=_();i(r,!0);let s=(e,n=F)=>{G(e,oe(n,{variant:`secondary`,class:`soya-data-table__columns-trigger`,children:(e,n)=>{var r=jc(),i=B(r),a=D(i,!0);t(i);var o=H(i,2);fn(o,{class:`soya-data-table__columns-chevron`}),j(()=>m(a,w())),g(e,r)},$$slots:{default:!0}}))},c=e=>{var n=Mc(),i=D(n),o=D(i,!0);t(i);var s=H(i,2);a(s,17,()=>r.columns.filter(e=>e.hideable!==!1),e=>e.key,(e,t)=>{{let n=R(()=>f(ce).some(e=>e.key===f(t).key));De(e,{get checked(){return f(n)},onchange:e=>xe(f(t).key,e.currentTarget.checked),children:(e,n)=>{L();var r=W();j(()=>m(r,f(t).label)),g(e,r)},$$slots:{default:!0}})}}),t(n),j(()=>m(o,w())),g(e,n)},l=E(r,`rowKey`,19,()=>Ac.rowKey),u=E(r,`query`,31,()=>k(Ac.query)),d=E(r,`sort`,15),p=E(r,`page`,31,()=>k(Ac.page)),h=E(r,`pageSize`,31,()=>k(Ac.pageSize)),y=E(r,`selected`,31,()=>k([...Ac.selected])),b=E(r,`visibleColumns`,15),x=E(r,`selectable`,19,()=>Ac.selectable),S=E(r,`searchLabel`,19,()=>Ac.searchLabel),C=E(r,`searchPlaceholder`,19,()=>Ac.searchPlaceholder),w=E(r,`columnsLabel`,19,()=>Ac.columnsLabel),T=E(r,`pageSizeLabel`,19,()=>Ac.pageSizeLabel),A=E(r,`pageSizeOptions`,19,()=>Ac.pageSizeOptions),M=E(r,`paginationLabel`,19,()=>Ac.paginationLabel),I=E(r,`selectColumnLabel`,19,()=>Ac.selectColumnLabel),ee=E(r,`rowSelectLabel`,19,()=>Ac.rowSelectLabel),te=E(r,`emptyLabel`,19,()=>Ac.emptyLabel),ne=E(r,`noColumnsLabel`,19,()=>Ac.noColumnsLabel),re=E(r,`previousPageLabel`,19,()=>Ac.previousPageLabel),z=E(r,`nextPageLabel`,19,()=>Ac.nextPageLabel),V=N(!1),ie=R(()=>r.columns.map(e=>e.key)),ae=R(()=>b()?.filter((e,t)=>f(ie).includes(e)&&b()?.indexOf(e)===t)),ce=R(()=>r.columns.filter(e=>e.hideable===!1||f(ae)===void 0||f(ae).includes(e.key))),le=R(()=>kc({rows:r.rows,columns:r.columns,query:u(),sort:d(),page:p(),pageSize:h(),rowKey:l(),filter:r.filter,compare:r.compare})),ue=R(()=>r.rows.map((e,t)=>l()(e,t))),fe=R(()=>[...new Set(A().filter(e=>Number.isFinite(e)&&e>0).map(Math.floor))]),pe=R(()=>f(fe).map(e=>({value:String(e),label:String(e)}))),me=`soya-data-table-page-size-${o}`;se(()=>{p()!==f(le).page&&(p(f(le).page),r.onpagechange?.(p())),h()!==f(le).pageSize&&(h(f(le).pageSize),r.onpagesizechange?.(h())),d()&&!f(le).sort&&(d(void 0),r.onsort?.(void 0));let e=y().filter(e=>f(ue).includes(e));e.length!==y().length&&(y(e),r.onselect?.(y())),b()!==void 0&&f(ae)!==void 0&&(b().length!==f(ae).length||b().some((e,t)=>e!==f(ae)?.[t]))&&(b(f(ae)),r.onvisiblecolumnschange?.(b()))});function he(e){u(e),r.onquerychange?.(u()),p()!==1&&(p(1),r.onpagechange?.(p()))}function ge(e){d(e),r.onsort?.(d())}function _e(e){p(e),r.onpagechange?.(p())}function ve(e){h(e),r.onpagesizechange?.(h()),p()!==1&&(p(1),r.onpagechange?.(p()))}function be(e){y(e),r.onselect?.(y())}function xe(e,t){let n=f(ae)??f(ie);b(t?[...n,e]:n.filter(t=>t!==e)),b(f(ie).filter(e=>b()?.includes(e))),r.onvisiblecolumnschange?.(b())}var Se=Pc(),Ce=D(Se),we=D(Ce),Te=D(we),Ee=D(Te,!0);t(Te);var K=H(Te,2);ye(K,{type:`search`,get value(){return u()},get placeholder(){return C()},oninput:e=>he(e.currentTarget.value)}),t(we);var Oe=H(we,2),ke=e=>{_n(e,{get trigger(){return s},align:`end`,class:`soya-data-table__columns-popover`,get open(){return f(V)},set open(e){U(V,e,!0)},children:(e,t)=>{c(e)},$$slots:{default:!0}})},Ae=R(()=>r.columns.some(e=>e.hideable!==!1));e(Oe,e=>{f(Ae)&&e(ke)}),t(Ce);var je=H(Ce,2),Me=e=>{{let t=R(()=>f(le).rows.map(e=>e.row));xn(e,{get rows(){return f(t)},get columns(){return f(ce)},rowKey:(e,t)=>f(le).rows[t]?.id??`missing-${t}`,get caption(){return r.caption},get selectable(){return x()},get selected(){return y()},get sort(){return f(le).sort},onsort:ge,onselect:be,get selectColumnLabel(){return I()},get rowSelectLabel(){return ee()},get emptyLabel(){return te()},get empty(){return r.empty}})}},Ne=e=>{var n=Nc(),r=D(n,!0);t(n),j(()=>m(r,ne())),g(e,n)};e(je,e=>{f(ce).length>0?e(Me):e(Ne,-1)});var Pe=H(je,2),Fe=D(Pe),Ie=D(Fe),q=D(Ie,!0);t(Ie);var Le=H(Ie,2);{let e=R(()=>String(f(le).pageSize));un(Le,{get"aria-labelledby"(){return me},get value(){return f(e)},get options(){return f(pe)},size:`sm`,onvaluechange:e=>ve(Number(e))})}t(Fe),ks(H(Fe,2),{get page(){return f(le).page},get count(){return f(le).filteredCount},get pageSize(){return f(le).pageSize},get label(){return M()},get previousLabel(){return re()},get nextLabel(){return z()},onpagechange:_e}),t(Pe),t(Se),j(()=>{O(Se,1,de([`soya-data-table`,r.class]),`svelte-ncxl2x`),m(Ee,S()),P(Ie,`id`,me),m(q,T())}),g(n,Se),v()}var Ic={disabled:!1},Lc=u(`<span class="soya-input-group__adornment svelte-5lvsq4"><!></span>`),Rc=u(`<div><!> <div class="soya-input-group__control svelte-5lvsq4"><!></div> <!></div>`);function zc(n,r){i(r,!0);let a=E(r,`disabled`,19,()=>Ic.disabled);var o=Rc(),c=D(o),l=e=>{var n=Lc(),i=D(n);s(i,()=>r.prefix),t(n),g(e,n)};e(c,e=>{r.prefix&&e(l)});var u=H(c,2),d=D(u);s(d,()=>r.children),t(u);var f=H(u,2),p=e=>{var n=Lc(),i=D(n);s(i,()=>r.suffix),t(n),g(e,n)};e(f,e=>{r.suffix&&e(p)}),t(o),j(()=>{O(o,1,de([`soya-input-group`,r.class]),`svelte-5lvsq4`),P(o,`data-disabled`,a()||void 0)}),g(n,o),v()}var Bc={open:!1,fallbackLabel:`메뉴 열기`,disabled:!1},Vc=u(`<button> </button>`),Hc=u(`<div class="soya-context-menu__target svelte-m58agt"><!></div> <!>`,1),Uc=u(`<small> </small>`),Wc=u(`<span class="soya-context-menu__shortcut"> </span>`),Gc=u(`<span class="soya-context-menu__copy"><span> </span> <!></span> <!>`,1),Kc=u(`<!> <!>`,1);function qc(n,r){i(r,!0);let o=E(r,`open`,31,()=>k(Bc.open)),l=E(r,`fallbackLabel`,19,()=>Bc.fallbackLabel),u=E(r,`disabled`,19,()=>Bc.disabled),d=Ct(),p=N(null),h=N(null);function _(e){if(u()||!f(p))return;U(h,e.currentTarget,!0);let t=f(h).getBoundingClientRect();f(p).dispatchEvent(new MouseEvent(`contextmenu`,{bubbles:!0,cancelable:!0,button:2,clientX:t.left,clientY:t.bottom}))}function b(e){r.onselect?.(e)}function x(e){let t=f(h)??f(p)?.querySelector(`[data-soya-context-fallback]`)??null;t&&(e.preventDefault(),t.focus())}let S=R(()=>({type:`button`,disabled:u(),"aria-label":l(),"aria-haspopup":`menu`,"aria-expanded":o(),"data-soya-context-fallback":``,onclick:_}));var C=c(),w=B(C);y(w,()=>xa,(n,i)=>{i(n,{get onOpenChange(){return r.onopenchange},get open(){return o()},set open(e){o(e)},children:(n,i)=>{var o=Kc(),_=B(o);y(_,()=>Aa,(n,i)=>{i(n,{class:`soya-context-menu__trigger`,get disabled(){return u()},get ref(){return f(p)},set ref(e){U(p,e,!0)},children:(n,i)=>{var a=Hc(),o=B(a),u=D(o);s(u,()=>r.children),t(o);var d=H(o,2),p=e=>{var t=c(),n=B(t);s(n,()=>r.fallbackTrigger,()=>f(S)),g(e,t)},_=e=>{var n=Vc();V(n,()=>({...f(S),class:`soya-context-menu__fallback`}),void 0,void 0,void 0,`svelte-m58agt`);var r=D(n,!0);t(n),ee(n,e=>U(h,e),()=>f(h)),j(()=>m(r,l())),g(e,n)};e(d,e=>{r.fallbackTrigger?e(p):e(_,-1)}),g(n,a)},$$slots:{default:!0}})});var v=H(_,2),C=n=>{var i=c(),o=B(i);y(o,()=>At,(n,i)=>{i(n,{get to(){return d.portal},children:(n,i)=>{var o=c(),s=B(o);{let n=R(()=>[`soya-context-menu`,r.class]);y(s,()=>Da,(i,o)=>{o(i,{get class(){return f(n)},sideOffset:4,loop:!0,onCloseAutoFocus:x,children:(n,i)=>{var o=c(),s=B(o);a(s,17,()=>r.items,e=>e.value,(n,r)=>{var i=c(),a=B(i);y(a,()=>wa,(n,i)=>{i(n,{class:`soya-context-menu__item`,get disabled(){return f(r).disabled},get"data-danger"(){return f(r).danger},get textValue(){return f(r).label},onSelect:()=>b(f(r)),children:(n,i)=>{var a=Gc(),o=B(a),s=D(o),c=D(s,!0);t(s);var l=H(s,2),u=e=>{var n=Uc(),i=D(n,!0);t(n),j(()=>m(i,f(r).description)),g(e,n)};e(l,e=>{f(r).description&&e(u)}),t(o);var d=H(o,2),p=e=>{var n=Wc(),i=D(n,!0);t(n),j(()=>m(i,f(r).shortcut)),g(e,n)};e(d,e=>{f(r).shortcut&&e(p)}),j(()=>m(c,f(r).label)),g(n,a)},$$slots:{default:!0}})}),g(n,i)}),g(n,o)},$$slots:{default:!0}})})}g(n,o)},$$slots:{default:!0}})}),g(n,i)};e(v,e=>{d.portal&&e(C)}),g(n,o)},$$slots:{default:!0}})}),g(n,C),v()}var Jc=u(`<kbd><!></kbd>`);function Yc(e,n){var r=Jc(),i=D(r);s(i,()=>n.children),t(r),j(()=>O(r,1,de([`soya-kbd`,n.class]),`svelte-18sbeui`)),g(e,r)}var Xc={collapsed:!1,open:!1,side:`left`,collapseLabel:`사이드바 축소`,expandLabel:`사이드바 확장`,mobileTriggerLabel:`모바일 메뉴 열기`,mobileCloseLabel:`닫기`},Zc=u(`<button> </button>`),Qc=u(`<div class="soya-sidebar__content svelte-1eiq69l"><!></div>`),$c=u(`<footer class="soya-sidebar__footer svelte-1eiq69l"><!></footer>`),el=u(`<div class="soya-sidebar__mobile-content"><!></div>`),tl=u(`<div class="soya-sidebar__mobile-footer"><!></div>`),nl=u(`<nav class="soya-sidebar__mobile-navigation"><!></nav> <!> <!>`,1),rl=u(`<aside><header class="soya-sidebar__header svelte-1eiq69l"><strong class="svelte-1eiq69l"> </strong> <button type="button" class="soya-sidebar__collapse svelte-1eiq69l"><!></button></header> <nav class="soya-sidebar__navigation svelte-1eiq69l"><!></nav> <!> <!></aside> <div class="soya-sidebar__mobile svelte-1eiq69l"><!></div>`,1);function il(n,r){i(r,!0);let a=(e,n=F)=>{var r=Zc();V(r,()=>({...n(),class:`soya-sidebar__mobile-trigger`}),void 0,void 0,void 0,`svelte-1eiq69l`);var i=D(r,!0);t(r),ee(r,e=>S=e,()=>S),j(()=>m(i,h())),g(e,r)},o=E(r,`collapsed`,31,()=>k(Xc.collapsed)),c=E(r,`open`,31,()=>k(Xc.open)),l=E(r,`side`,19,()=>Xc.side),u=E(r,`collapseLabel`,19,()=>Xc.collapseLabel),p=E(r,`expandLabel`,19,()=>Xc.expandLabel),h=E(r,`mobileTriggerLabel`,19,()=>Xc.mobileTriggerLabel),_=E(r,`mobileCloseLabel`,19,()=>Xc.mobileCloseLabel),y,b,S,C=N(!1);function w(){o(!o()),r.oncollapsedchange?.(o())}function T(e){c(e),r.onopenchange?.(e)}async function A(e){let t=y?.contains(document.activeElement),n=c();U(C,e,!0),!e&&c()&&T(!1),await d(),e&&t&&S?.focus(),!e&&n&&b?.focus()}ie(()=>{if(!window.matchMedia)return;let e=window.matchMedia(`(max-width: 48rem)`);A(e.matches);let t=e=>void A(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)});var M=rl(),I=B(M),L=D(I),te=D(L),ne=D(te,!0);t(te);var re=H(te,2),z=D(re);{let e=R(()=>o()?`right`:`left`);fn(z,{get direction(){return f(e)}})}t(re),ee(re,e=>b=e,()=>b),t(L);var ae=H(L,2),oe=D(ae);s(oe,()=>r.navigation,()=>({collapsed:o(),mobile:!1})),t(ae);var se=H(ae,2),ce=e=>{var n=Qc(),i=D(n);s(i,()=>r.children,()=>({collapsed:o(),mobile:!1})),t(n),g(e,n)};e(se,e=>{r.children&&e(ce)});var le=H(se,2),ue=e=>{var n=$c(),i=D(n);s(i,()=>r.footer,()=>({collapsed:o(),mobile:!1})),t(n),g(e,n)};e(le,e=>{r.footer&&e(ue)}),t(I),ee(I,e=>y=e,()=>y);var fe=H(I,2),W=D(fe);{let n=R(()=>f(C)&&c());_c(W,{get open(){return f(n)},get title(){return r.title},get description(){return r.description},get side(){return l()},get trigger(){return a},get closeLabel(){return _()},onopenchange:T,class:`soya-sidebar__sheet`,children:(n,i)=>{var a=nl(),o=B(a),c=D(o);s(c,()=>r.navigation,()=>({collapsed:!1,mobile:!0})),t(o);var l=H(o,2),u=e=>{var n=el(),i=D(n);s(i,()=>r.children,()=>({collapsed:!1,mobile:!0})),t(n),g(e,n)};e(l,e=>{r.children&&e(u)});var d=H(l,2),f=e=>{var n=tl(),i=D(n);s(i,()=>r.footer,()=>({collapsed:!1,mobile:!0})),t(n),g(e,n)};e(d,e=>{r.footer&&e(f)}),j(()=>P(o,`aria-label`,r.title)),g(n,a)},$$slots:{default:!0}})}t(fe),j(()=>{O(I,1,de([`soya-sidebar`,r.class]),`svelte-1eiq69l`),P(I,`aria-label`,r.title),P(I,`data-collapsed`,o()),P(I,`data-side`,l()),m(ne,r.title),P(re,`aria-label`,o()?p():u()),P(re,`aria-expanded`,!o()),P(ae,`aria-label`,r.title)}),x(`click`,re,w),g(n,M),v()}n([`click`]);var al={height:192,showDots:!0,showGrid:!0,tone:`primary`,emptyLabel:`데이터가 없습니다.`},ol=new Set([`$$slots`,`$$events`,`$$legacy`,`data`,`label`,`description`,`height`,`showDots`,`showGrid`,`domain`,`tone`,`formatValue`,`emptyLabel`,`class`]),sl=p(`<g class="soya-line-chart__grid svelte-ksr5in" aria-hidden="true"><line x1="4" x2="96" y1="4" y2="4" class="svelte-ksr5in"></line><line x1="4" x2="96" y1="21.33" y2="21.33" class="svelte-ksr5in"></line><line x1="4" x2="96" y1="38.67" y2="38.67" class="svelte-ksr5in"></line><line x1="4" x2="96" y1="56" y2="56" class="svelte-ksr5in"></line></g>`),cl=p(`<polyline class="soya-line-chart__line svelte-ksr5in"></polyline>`),ll=u(`<span class="svelte-ksr5in"></span>`),ul=u(`<div class="soya-line-chart__dots svelte-ksr5in" aria-hidden="true"></div>`),dl=u(`<button type="button" class="soya-line-chart__target svelte-ksr5in"></button>`),fl=u(`<li> </li>`),pl=u(`<div class="soya-line-chart__plot svelte-ksr5in"><svg viewBox="0 0 100 60" preserveAspectRatio="none" role="img" class="svelte-ksr5in"><title> </title><!><!></svg> <!> <div class="soya-line-chart__targets svelte-ksr5in"></div> <!></div> <ul class="soya-chart-data svelte-ksr5in"></ul>`,1),ml=u(`<p class="soya-chart-empty svelte-ksr5in" role="status"> </p>`),hl=u(`<figure><!></figure>`);function gl(n,r){i(r,!0);let o=E(r,`height`,19,()=>al.height),s=E(r,`showDots`,19,()=>al.showDots),c=E(r,`showGrid`,19,()=>al.showGrid),u=E(r,`tone`,19,()=>al.tone),d=E(r,`emptyLabel`,19,()=>al.emptyLabel),p=z(r,ol),h=R(()=>Ae(r.data)),_,y=N(null),b=N(null),S=R(()=>f(y)??f(b)),C=R(()=>r.description?`${r.label}. ${r.description}`:r.label),w=R(()=>Ie(o(),al.height)),T=R(()=>r.formatValue??Me),O=R(()=>{if(r.domain&&Number.isFinite(r.domain[0])&&Number.isFinite(r.domain[1])&&r.domain[0]<r.domain[1])return[r.domain[0],r.domain[1]];let e=Math.min(...f(h).map(e=>e.value)),t=Math.max(...f(h).map(e=>e.value));if(!Number.isFinite(e)||!Number.isFinite(t))return[0,1];if(e===t){let n=Math.max(Math.abs(e)*.1,1);return[e-n,t+n]}return[e,t]}),k=R(()=>{let[e,t]=f(O),n=t-e||1,r=f(h).length>1?92/(f(h).length-1):0;return f(h).map((i,a)=>{let o=Math.min(t,Math.max(e,i.value));return{...i,x:f(h).length>1?4+r*a:50,y:56-(o-e)/n*52}})}),A=R(()=>f(k).map(e=>`${e.x},${e.y}`).join(` `)),F=R(()=>f(S)===null?void 0:f(k)[f(S)]);var I=hl();l(`click`,ae,e=>{e.target instanceof Node&&!_?.contains(e.target)&&(U(y,null),U(b,null))}),l(`keydown`,ae,e=>{e.key===`Escape`&&(U(y,null),U(b,null))}),V(I,()=>({...p,class:[`soya-line-chart`,r.class],"data-state":f(h).length===0?`empty`:`ready`,"data-tone":u(),[M]:{"--soya-chart-height":f(w)}}),void 0,void 0,void 0,`svelte-ksr5in`);var L=D(I),te=n=>{var r=pl(),i=B(r),o=D(i),u=D(o),d=D(u,!0);t(u);var p=H(u),_=e=>{var t=sl();g(e,t)};e(p,e=>{c()&&e(_)});var v=H(p),S=e=>{var t=cl();j(()=>P(t,`points`,f(A))),g(e,t)};e(v,e=>{f(k).length>1&&e(S)}),t(o);var w=H(o,2),E=e=>{var n=ul();a(n,20,()=>f(k),e=>e,(e,t)=>{var n=ll();let r;j(()=>r=fe(n,``,r,{left:`${t.x}%`,top:`${t.y/60*100}%`})),g(e,n)}),t(n),g(e,n)};e(w,e=>{(s()||f(k).length===1)&&e(E)});var O=H(w,2);a(O,22,()=>f(k),e=>e,(e,t,n)=>{var r=dl();let i;j(e=>{P(r,`aria-label`,e),P(r,`aria-pressed`,f(b)===f(n)),i=fe(r,``,i,{left:`${t.x}%`,top:`${t.y/60*100}%`})},[()=>`${t.label}: ${f(T)(t.value)}`]),l(`pointerenter`,r,()=>U(y,f(n),!0)),l(`pointerleave`,r,()=>U(y,null)),l(`focus`,r,()=>U(y,f(n),!0)),l(`blur`,r,()=>U(y,null)),x(`click`,r,()=>U(b,f(n),!0)),g(e,r)}),t(O);var M=H(O,2),N=e=>{{let t=R(()=>f(T)(f(F).value)),n=R(()=>f(F).y/60*100);Pe(e,{get label(){return f(F).label},get value(){return f(t)},get x(){return f(F).x},get y(){return f(n)}})}};e(M,e=>{f(F)&&e(N)}),t(i);var I=H(i,2);a(I,20,()=>f(h),e=>e,(e,n)=>{var r=fl(),i=D(r);t(r),j(e=>m(i,`${n.label??``}: ${e??``}`),[()=>f(T)(n.value)]),g(e,r)}),t(I),j(()=>{P(o,`aria-label`,f(C)),m(d,f(C))}),g(n,r)},ne=e=>{var n=ml(),r=D(n,!0);t(n),j(()=>m(r,d())),g(e,n)};e(L,e=>{f(h).length>0?e(te):e(ne,-1)}),t(I),ee(I,e=>_=e,()=>_),g(n,I),v()}n([`click`]);var _l={size:192,showLegend:!0,emptyLabel:`데이터가 없습니다.`},vl=new Set([`$$slots`,`$$events`,`$$legacy`,`data`,`label`,`description`,`size`,`showLegend`,`formatValue`,`emptyLabel`,`class`]),yl=p(`<circle class="soya-donut-chart__segment svelte-6oy48d" cx="50" cy="50" r="40" pathLength="100" role="presentation"></circle>`),bl=u(`<button type="button" class="soya-donut-chart__target svelte-6oy48d"></button>`),xl=u(`<li><button type="button" class="soya-donut-chart__legend-button svelte-6oy48d"><span class="soya-donut-chart__swatch svelte-6oy48d"></span> <span class="svelte-6oy48d"> </span> <strong class="svelte-6oy48d"> </strong></button></li>`),Sl=u(`<ul class="soya-donut-chart__legend svelte-6oy48d"></ul>`),Cl=u(`<li> </li>`),wl=u(`<ul class="soya-chart-data svelte-6oy48d"></ul>`),Tl=u(`<div class="soya-donut-chart__plot svelte-6oy48d"><svg viewBox="0 0 100 100" role="img" class="svelte-6oy48d"><title> </title><circle class="soya-donut-chart__track svelte-6oy48d" cx="50" cy="50" r="40"></circle><!></svg> <!> <!></div> <!>`,1),El=u(`<p class="soya-chart-empty svelte-6oy48d" role="status"> </p>`),Dl=u(`<figure><!></figure>`);function Ol(n,r){i(r,!0);let o=E(r,`size`,19,()=>_l.size),s=E(r,`showLegend`,19,()=>_l.showLegend),u=E(r,`emptyLabel`,19,()=>_l.emptyLabel),d=z(r,vl),p=R(()=>Ae(r.data).filter(e=>e.value>=0)),h,_=N(null),y=N(null),b=R(()=>f(_)??f(y)),S=R(()=>f(p).reduce((e,t)=>e+t.value,0)),C=R(()=>r.description?`${r.label}. ${r.description}`:r.label),w=R(()=>Ie(o(),_l.size)),T=R(()=>r.formatValue??Me),O=R(()=>{let e=0;return f(p).map((t,n)=>{let r=f(S)>0?t.value/f(S)*100:0,i=(e+r/2)/100*Math.PI*2-Math.PI/2,a={...t,percentage:r,offset:e,palette:n%5,x:50+Math.cos(i)*40,y:50+Math.sin(i)*40};return e+=r,a})}),k=R(()=>f(b)===null?void 0:f(O)[f(b)]);var A=Dl();l(`click`,ae,e=>{e.target instanceof Node&&!h?.contains(e.target)&&(U(_,null),U(y,null))}),l(`keydown`,ae,e=>{e.key===`Escape`&&(U(_,null),U(y,null))}),V(A,()=>({...d,class:[`soya-donut-chart`,r.class],"data-state":f(S)>0?`ready`:`empty`,[M]:{"--soya-chart-size":f(w)}}),void 0,void 0,void 0,`svelte-6oy48d`);var F=D(A),I=n=>{var r=Tl(),i=B(r),o=D(i),u=D(o),d=D(u,!0);t(u);var h=H(u,2);a(h,18,()=>f(O),e=>e,(t,n,r)=>{var i=c(),a=B(i),o=e=>{var t=yl();j(()=>{P(t,`data-palette`,n.palette),P(t,`stroke-dasharray`,`${n.percentage} ${100-n.percentage}`),P(t,`stroke-dashoffset`,-n.offset),P(t,`data-active`,f(b)===f(r))}),l(`pointerenter`,t,()=>U(_,f(r),!0)),l(`pointerleave`,t,()=>U(_,null)),x(`pointerup`,t,()=>U(y,f(r),!0)),g(e,t)};e(a,e=>{n.percentage>0&&e(o)}),g(t,i)}),t(o);var v=H(o,2),S=t=>{var n=c(),r=B(n);a(r,18,()=>f(O),e=>e,(t,n,r)=>{var i=c(),a=B(i),o=e=>{var t=bl();let i;j(e=>{P(t,`aria-label`,e),P(t,`aria-pressed`,f(y)===f(r)),i=fe(t,``,i,{left:`${n.x}%`,top:`${n.y}%`})},[()=>`${n.label}: ${f(T)(n.value)}`]),l(`pointerenter`,t,()=>U(_,f(r),!0)),l(`pointerleave`,t,()=>U(_,null)),l(`focus`,t,()=>U(_,f(r),!0)),l(`blur`,t,()=>U(_,null)),x(`click`,t,()=>U(y,f(r),!0)),g(e,t)};e(a,e=>{n.percentage>0&&e(o)}),g(t,i)}),g(t,n)};e(v,e=>{s()||e(S)});var w=H(v,2),E=e=>{{let t=R(()=>f(T)(f(k).value));Pe(e,{get label(){return f(k).label},get value(){return f(t)},get x(){return f(k).x},get y(){return f(k).y}})}};e(w,e=>{f(k)&&e(E)}),t(i);var A=H(i,2),M=e=>{var n=Sl();a(n,22,()=>f(O),e=>e,(e,n,r)=>{var i=xl(),a=D(i),o=D(a),s=H(o,2),c=D(s,!0);t(s);var u=H(s,2),d=D(u,!0);t(u),t(a),t(i),j((e,t)=>{P(a,`aria-label`,e),P(a,`aria-pressed`,f(y)===f(r)),P(o,`data-palette`,n.palette),m(c,n.label),m(d,t)},[()=>`${n.label}: ${f(T)(n.value)}`,()=>f(T)(n.value)]),l(`pointerenter`,a,()=>U(_,f(r),!0)),l(`pointerleave`,a,()=>U(_,null)),l(`focus`,a,()=>U(_,f(r),!0)),l(`blur`,a,()=>U(_,null)),x(`click`,a,()=>U(y,f(r),!0)),g(e,i)}),t(n),g(e,n)},N=e=>{var n=wl();a(n,20,()=>f(p),e=>e,(e,n)=>{var r=Cl(),i=D(r);t(r),j(e=>m(i,`${n.label??``}: ${e??``}`),[()=>f(T)(n.value)]),g(e,r)}),t(n),g(e,n)};e(A,e=>{s()?e(M):e(N,-1)}),j(()=>{P(o,`aria-label`,f(C)),m(d,f(C))}),g(n,r)},L=e=>{var n=El(),r=D(n,!0);t(n),j(()=>m(r,u())),g(e,n)};e(F,e=>{f(S)>0?e(I):e(L,-1)}),t(A),ee(A,e=>h=e,()=>h),g(n,A),v()}n([`pointerup`,`click`]);var kl={ratio:16/9};function Al(e){return Number.isFinite(e)&&e>0?e:kl.ratio}var jl=new Set([`$$slots`,`$$events`,`$$legacy`,`ratio`,`children`,`class`]),Ml=u(`<div><!></div>`);function Nl(e,n){i(n,!0);let r=E(n,`ratio`,19,()=>kl.ratio),a=z(n,jl),o=R(()=>Al(r()));var c=Ml();V(c,()=>({...a,class:[`soya-aspect-ratio`,n.class],"data-ratio":f(o),[M]:{"--soya-aspect-ratio":f(o)}}),void 0,void 0,void 0,`svelte-d0hdu6`);var l=D(c);s(l,()=>n.children??F),t(c),g(e,c),v()}var Pl={status:`ready`,progress:0,disabled:!1,statusLabel:e=>({ready:`업로드 준비`,uploading:`업로드 중`,success:`업로드 완료`,error:`업로드 실패`})[e],retryLabel:`다시 시도`,removeLabel:`첨부 삭제`},Fl=new Set([`$$slots`,`$$events`,`$$legacy`,`name`,`description`,`status`,`progress`,`preview`,`actions`,`disabled`,`statusLabel`,`retryLabel`,`removeLabel`,`onretry`,`onremove`,`class`]),Il=u(`<span class="svelte-qml2f2"> </span>`),Ll=u(`<progress max="100" class="svelte-qml2f2"></progress>`),Rl=u(`<!> <!>`,1),zl=u(`<div class="soya-attachment__actions svelte-qml2f2"><!></div>`),Bl=u(`<div><div class="soya-attachment__preview svelte-qml2f2"><!></div> <div class="soya-attachment__content svelte-qml2f2"><strong class="svelte-qml2f2"> </strong> <!> <span class="soya-attachment__status svelte-qml2f2" aria-live="polite"> </span> <!></div> <!></div>`);function Vl(n,r){i(r,!0);let a=E(r,`status`,19,()=>Pl.status),o=E(r,`progress`,19,()=>Pl.progress),l=E(r,`disabled`,19,()=>Pl.disabled),u=E(r,`statusLabel`,19,()=>Pl.statusLabel),d=E(r,`retryLabel`,19,()=>Pl.retryLabel),p=E(r,`removeLabel`,19,()=>Pl.removeLabel),h=z(r,Fl),_=R(()=>Math.min(100,Math.max(0,Number.isFinite(o())?o():0)));var y=Bl();V(y,()=>({...h,class:[`soya-attachment`,r.class],"data-status":a(),"data-disabled":l()||void 0,role:`group`,"aria-label":r.name}),void 0,void 0,void 0,`svelte-qml2f2`);var b=D(y),x=D(b),S=e=>{var t=c(),n=B(t);s(n,()=>r.preview),g(e,t)},C=e=>{_e(e,{name:`file`,size:`1.5rem`})};e(x,e=>{r.preview?e(S):e(C,-1)}),t(b);var w=H(b,2),O=D(w),k=D(O,!0);t(O);var A=H(O,2),M=e=>{var n=Il(),i=D(n,!0);t(n),j(()=>m(i,r.description)),g(e,n)};e(A,e=>{r.description&&e(M)});var N=H(A,2),F=D(N);t(N);var I=H(N,2),ee=e=>{var t=Ll();j(e=>{T(t,f(_)),P(t,`aria-label`,e)},[()=>u()(a())]),g(e,t)};e(I,e=>{a()===`uploading`&&e(ee)}),t(w);var te=H(w,2),ne=n=>{var i=zl(),o=D(i),u=e=>{var t=c(),n=B(t);s(n,()=>r.actions,()=>({status:a(),disabled:l()})),g(e,t)},f=t=>{var n=Rl(),i=B(n),o=e=>{G(e,{size:`sm`,variant:`secondary`,get disabled(){return l()},get onclick(){return r.onretry},children:(e,t)=>{L();var n=W();j(()=>m(n,d())),g(e,n)},$$slots:{default:!0}})};e(i,e=>{a()===`error`&&r.onretry&&e(o)});var s=H(i,2),c=e=>{G(e,{class:`soya-attachment__remove`,size:`sm`,variant:`ghost`,get disabled(){return l()},get"aria-label"(){return p()},"data-icon-only":`true`,get onclick(){return r.onremove},children:(e,t)=>{Ge(e,{})},$$slots:{default:!0}})};e(s,e=>{r.onremove&&e(c)}),g(t,n)};e(o,e=>{r.actions?e(u):e(f,-1)}),t(i),g(n,i)};e(te,e=>{(r.actions||r.onretry||r.onremove)&&e(ne)}),t(y),j((e,t)=>{P(b,`aria-hidden`,r.preview?void 0:`true`),m(k,r.name),m(F,`${e??``}${t??``}`)},[()=>u()(a()),()=>a()===`uploading`?` ${Math.round(f(_))}%`:``]),g(n,y),v()}var Hl={size:`md`,shape:`circle`},Ul=new Set([`$$slots`,`$$events`,`$$legacy`,`src`,`alt`,`fallback`,`size`,`shape`,`class`]),Wl=u(`<img class="svelte-10u9t0y"/>`),Gl=u(`<span class="soya-avatar__fallback svelte-10u9t0y" role="img"> </span>`),Kl=u(`<span><!></span>`);function ql(n,r){i(r,!0);let a=E(r,`size`,19,()=>Hl.size),o=E(r,`shape`,19,()=>Hl.shape),s=z(r,Ul),c=N(void 0),u=R(()=>!!r.src&&f(c)!==r.src),d=R(()=>r.fallback?.trim()||r.alt.trim().slice(0,2)||`?`);var p=Kl();V(p,()=>({...s,class:[`soya-avatar`,r.class],"data-size":a(),"data-shape":o(),"data-state":f(u)?`image`:`fallback`}),void 0,void 0,void 0,`svelte-10u9t0y`);var h=D(p),_=e=>{var t=Wl();j(()=>{P(t,`src`,r.src),P(t,`alt`,r.alt)}),l(`error`,t,()=>U(c,r.src,!0)),S(t),g(e,t)},y=e=>{var n=Gl(),i=D(n,!0);t(n),j(()=>{P(n,`aria-label`,r.alt),m(i,f(d))}),g(e,n)};e(h,e=>{f(u)?e(_):e(y,-1)}),t(p),g(n,p),v()}var Jl={side:`incoming`,tone:`neutral`},Yl=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`side`,`tone`,`label`,`footer`,`class`]),Xl=u(`<div class="soya-bubble__footer svelte-zpbluj"><!></div>`),Zl=u(`<div><div class="soya-bubble__content svelte-zpbluj"><!></div> <!></div>`);function Ql(n,r){i(r,!0);let a=E(r,`side`,19,()=>Jl.side),o=E(r,`tone`,19,()=>Jl.tone),c=z(r,Yl);var l=Zl();V(l,()=>({...c,class:[`soya-bubble`,r.class],"data-side":a(),"data-tone":o(),role:r.label?`group`:void 0,"aria-label":r.label}),void 0,void 0,void 0,`svelte-zpbluj`);var u=D(l),d=D(u);s(d,()=>r.children),t(u);var f=H(u,2),p=e=>{var n=Xl(),i=D(n);s(i,()=>r.footer),t(n),g(e,n)};e(f,e=>{r.footer&&e(p)}),t(l),g(n,l),v()}var $l={index:0,orientation:`horizontal`,loop:!1,previousLabel:`이전 슬라이드`,nextLabel:`다음 슬라이드`,slideLabel:(e,t)=>`${t}개 중 ${e+1}번째`},eu=u(`<article class="soya-carousel__slide svelte-1x00vt3" role="group" aria-roledescription="slide"><!></article>`),tu=u(`<section aria-roledescription="carousel"><div class="soya-carousel__viewport svelte-1x00vt3" role="group" tabindex="0"></div> <div class="soya-carousel__controls svelte-1x00vt3"><!> <span class="soya-carousel__position svelte-1x00vt3" aria-live="polite"> </span> <!></div></section>`);function nu(e,n){i(n,!0);let r=E(n,`index`,31,()=>k($l.index)),o=E(n,`orientation`,19,()=>$l.orientation),c=E(n,`loop`,19,()=>$l.loop),u=E(n,`previousLabel`,19,()=>$l.previousLabel),d=E(n,`nextLabel`,19,()=>$l.nextLabel),p=E(n,`slideLabel`,19,()=>$l.slideLabel),h,_=R(()=>n.items.length),y=R(()=>f(_)===0?0:Math.min(Math.max(0,r()),f(_)-1)),b=R(()=>c()?f(_)>1:f(y)>0),S=R(()=>c()?f(_)>1:f(y)<f(_)-1),C=null,w,T;function A(e){return`${o()}:${f(_)}:${e}`}function M(){C=null,w&&clearTimeout(w),w=void 0}function N(e=500){w&&clearTimeout(w),w=setTimeout(M,e)}function F(e){if(f(_)===0)return 0;let t=f(y)+e;return c()?(t+f(_))%f(_):Math.min(Math.max(0,t),f(_)-1)}function I(e,t=`smooth`){if(f(_)===0)return;let n=Math.min(Math.max(0,e),f(_)-1),r=h?.querySelector(`[data-carousel-index="${n}"]`);if(!r||typeof h.scrollTo!=`function`)return;let i=h.getBoundingClientRect(),a=r.getBoundingClientRect();C=n,T=A(n),N(),h.scrollTo({behavior:t,left:o()===`horizontal`?h.scrollLeft+a.left-i.left:h.scrollLeft,top:o()===`vertical`?h.scrollTop+a.top-i.top:h.scrollTop})}function L(e,t=`smooth`){if(f(_)===0)return;let i=Math.min(Math.max(0,e),f(_)-1);i!==r()&&(r(i),n.onindexchange?.(i)),I(i,t)}function te(e){let t=o()===`horizontal`?`ArrowLeft`:`ArrowUp`,n=o()===`horizontal`?`ArrowRight`:`ArrowDown`;e.key===t&&f(b)?(e.preventDefault(),L(F(-1))):e.key===n&&f(S)?(e.preventDefault(),L(F(1))):e.key===`Home`?(e.preventDefault(),L(0)):e.key===`End`&&(e.preventDefault(),L(f(_)-1))}function re(){if(!h||f(_)===0)return;let e=Array.from(h.querySelectorAll(`[data-carousel-index]`)),t=h.getBoundingClientRect(),i=o()===`horizontal`?t.left:t.top,a=e.reduce((e,t,n)=>{let r=t.getBoundingClientRect(),a=Math.abs((o()===`horizontal`?r.left:r.top)-i);return a<e.distance?{index:n,distance:a}:e},{index:f(y),distance:1/0});if(C!==null){a.index===C?M():N(150);return}a.index!==r()&&(T=A(a.index),r(a.index),n.onindexchange?.(a.index))}se(()=>{if(!h||f(_)===0)return;let e=f(y);A(e)!==T&&I(e)}),ne(M);var z=tu(),B=D(z);a(B,23,()=>n.items,e=>e.id,(e,n,r)=>{var i=eu(),a=D(i);s(a,()=>f(n).content),t(i),j(e=>{P(i,`aria-label`,e),P(i,`aria-current`,f(r)===f(y)?`true`:void 0),P(i,`data-carousel-index`,f(r))},[()=>f(n).label??p()(f(r),f(_))]),g(e,i)}),t(B),ee(B,e=>h=e,()=>h);var V=H(B,2),ie=D(V);{let e=R(()=>!f(b));he(ie,{get label(){return u()},variant:`secondary`,size:`sm`,get disabled(){return f(e)},onclick:()=>L(F(-1)),children:(e,t)=>{{let t=R(()=>o()===`horizontal`?`arrow-left`:`arrow-up`);_e(e,{get name(){return f(t)},size:`1rem`})}},$$slots:{default:!0}})}var ae=H(ie,2),oe=D(ae,!0);t(ae);var U=H(ae,2);{let e=R(()=>!f(S));he(U,{get label(){return d()},variant:`secondary`,size:`sm`,get disabled(){return f(e)},onclick:()=>L(F(1)),children:(e,t)=>{{let t=R(()=>o()===`horizontal`?`arrow-right`:`arrow-down`);_e(e,{get name(){return f(t)},size:`1rem`})}},$$slots:{default:!0}})}t(V),t(z),j(()=>{O(z,1,de([`soya-carousel`,n.class]),`svelte-1x00vt3`),P(z,`aria-label`,n.label),P(z,`data-orientation`,o()),m(oe,f(_)===0?`0 / 0`:`${f(y)+1} / ${f(_)}`)}),l(`scroll`,B,re),l(`scrollend`,B,M),x(`keydown`,B,te),g(e,z),v()}n([`keydown`]);var ru={open:!1,side:`bottom`,align:`center`,openDelay:300,closeDelay:120},iu=u(`<div role="group" data-state="open"><!></div>`),au=u(`<span class="soya-hover-card-root svelte-153iec5"><span class="soya-hover-card__trigger svelte-153iec5"><!></span> <!></span>`);function ou(n,a){let o=_();i(a,!0);let c=`soya-hover-card-${o}`,u=E(a,`open`,31,()=>k(ru.open)),d=E(a,`side`,19,()=>ru.side),p=E(a,`align`,19,()=>ru.align),m=E(a,`openDelay`,19,()=>ru.openDelay),h=E(a,`closeDelay`,19,()=>ru.closeDelay),y,b,S,C;function w(){y&&clearTimeout(y),b&&clearTimeout(b),y=void 0,b=void 0}function T(e){w(),u()!==e&&(u(e),a.onopenchange?.(e))}function A(e=!1){b&&clearTimeout(b),!u()&&(e||m()<=0?T(!0):y=setTimeout(()=>T(!0),m()))}function M(){y&&clearTimeout(y),u()&&(h()<=0?T(!1):b=setTimeout(()=>T(!1),h()))}function N(e){(e.pointerType===`touch`||e.pointerType===`pen`)&&(T(!u()),S=void 0)}function I(e){S=e.pointerType===`touch`||e.pointerType===`pen`?e.pointerType:void 0}function L(e){e.currentTarget instanceof HTMLElement&&(C=e.currentTarget),S||A(!0)}function ee(e){e.key===`Escape`&&u()&&(e.preventDefault(),C?.focus(),T(!1))}function te(e){let t=0,n=()=>{let t=document.documentElement.clientWidth||window.innerWidth;e.style.setProperty(`--soya-hover-card-available-width`,`${Math.max(0,t-32)}px`),e.style.setProperty(`--soya-hover-card-collision-x`,`0px`);let n=e.getBoundingClientRect(),r=n.left<16?16-n.left:n.right>t-16?t-16-n.right:0;e.style.setProperty(`--soya-hover-card-collision-x`,`${r}px`)},r=()=>{window.cancelAnimationFrame(t),t=window.requestAnimationFrame(n)};n(),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,r,{passive:!0});let i=typeof ResizeObserver>`u`?void 0:new ResizeObserver(n);return i?.observe(e),()=>{window.cancelAnimationFrame(t),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,r),i?.disconnect()}}let re=R(()=>({"aria-expanded":u(),"aria-controls":u()?c:void 0,onmouseenter:()=>A(),onmouseleave:()=>M(),onfocusin:L,onfocusout:()=>M(),onpointerdown:I,onpointerup:N,onkeydown:ee}));ne(w);var z=au(),B=D(z),V=D(B);s(V,()=>a.trigger,()=>f(re)),t(B);var ie=H(B,2),ae=e=>{var n=iu(),i=D(n);s(i,()=>a.children??F),t(n),r(n,()=>te),j(()=>{P(n,`id`,c),O(n,1,de([`soya-hover-card`,a.class]),`svelte-153iec5`),P(n,`data-side`,d()),P(n,`data-align`,p())}),l(`mouseenter`,n,()=>A(!0)),l(`mouseleave`,n,M),x(`focusin`,n,()=>A(!0)),x(`focusout`,n,M),x(`keydown`,n,ee),g(e,n)};e(ie,e=>{u()&&e(ae)}),t(z),g(n,z),v()}n([`focusin`,`focusout`,`keydown`]);var su={value:``,length:6,inputmode:`numeric`,pattern:`[0-9]`,disabled:!1,readonly:!1,invalid:!1,mask:!1,completeLabel:`입력이 완료되었습니다.`},cu=u(`<input class="soya-input-otp__cell svelte-1tlmxpq" maxlength="1"/>`),lu=u(`<input type="hidden"/>`),uu=u(`<div role="group"><!> <!> <span class="soya-input-otp__status svelte-1tlmxpq" aria-live="polite"> </span></div>`);function du(n,r){let o=_();i(r,!0);let s=`soya-input-otp-${o}`,c=E(r,`id`,3,s),u=E(r,`value`,31,()=>k(su.value)),d=E(r,`length`,19,()=>su.length),p=E(r,`inputmode`,19,()=>su.inputmode),h=E(r,`pattern`,19,()=>su.pattern),y=E(r,`disabled`,19,()=>su.disabled),b=E(r,`readonly`,19,()=>su.readonly),S=E(r,`invalid`,19,()=>su.invalid),C=E(r,`mask`,19,()=>su.mask),w=E(r,`completeLabel`,19,()=>su.completeLabel),A,M=R(()=>Number.isFinite(d())?Math.max(1,Math.trunc(d())):6),N=R(()=>{try{return RegExp(`^(?:${h()})$`,`u`)}catch{return/[0-9]/u}}),F=R(()=>I(u()));function I(e){return Array.from(e).filter(e=>f(N).test(e)).slice(0,f(M)).join(``)}function L(e){A?.querySelector(`[data-index="${e}"]`)?.focus()}function ne(e,t){let n=I(e);n!==u()&&(u(n),r.onvaluechange?.(n),n.length===f(M)&&r.oncomplete?.(n)),t!==void 0&&queueMicrotask(()=>L(t))}function re(e,t){if(y()||b())return;let n=Math.min(e,f(F).length),r=Array.from(f(F).padEnd(f(M),` `)),i=Array.from(t).filter(e=>f(N).test(e));if(i.length===0){r[n]=` `,ne(r.join(``).trimEnd());return}i.slice(0,f(M)-n).forEach((e,t)=>{r[n+t]=e});let a=Math.min(n+i.length,f(M)-1);ne(r.join(``).trimEnd(),a)}function z(e,t){if(e.key===`ArrowLeft`)e.preventDefault(),L(Math.max(0,t-1));else if(e.key===`ArrowRight`)e.preventDefault(),L(Math.min(f(M)-1,t+1));else if(e.key===`Home`)e.preventDefault(),L(0);else if(e.key===`End`)e.preventDefault(),L(f(M)-1);else if(e.key===`Backspace`){if(e.preventDefault(),y()||b())return;let n=Array.from(f(F)),r=n[t]?t:Math.max(0,t-1);n.splice(r,1),ne(n.join(``),r)}else if(e.key===`Delete`){if(e.preventDefault(),y()||b())return;let n=Array.from(f(F));n.splice(t,1),ne(n.join(``),t)}}function B(e,t){e.preventDefault(),!(y()||b())&&re(t,e.clipboardData?.getData(`text`)??``)}var V=uu(),ie=D(V);a(ie,19,()=>Array(f(M)),(e,t)=>`${c()}-${t}`,(e,t,n)=>{var i=cu();te(i),j(e=>{P(i,`id`,`${c()}-${f(n)}`),P(i,`data-index`,f(n)),P(i,`type`,C()?`password`:`text`),P(i,`inputmode`,p()),P(i,`autocomplete`,f(n)===0?`one-time-code`:`off`),T(i,e),P(i,`aria-label`,`${r.label} ${f(n)+1}/${f(M)}`),P(i,`aria-invalid`,S()||void 0),i.disabled=y(),i.readOnly=b()},[()=>Array.from(f(F))[f(n)]??``]),l(`focus`,i,e=>e.currentTarget.select()),x(`input`,i,e=>re(f(n),e.currentTarget.value)),x(`keydown`,i,e=>z(e,f(n))),l(`paste`,i,e=>B(e,f(n))),g(e,i)});var ae=H(ie,2),oe=e=>{var t=lu();te(t),j(()=>{P(t,`name`,r.name),T(t,f(F)),t.disabled=y()}),g(e,t)};e(ae,e=>{r.name&&e(oe)});var se=H(ae,2),U=D(se,!0);t(se),t(V),ee(V,e=>A=e,()=>A),j(()=>{O(V,1,de([`soya-input-otp`,r.class]),`svelte-1tlmxpq`),P(V,`aria-label`,r.label),P(V,`data-disabled`,y()||void 0),m(U,f(F).length===f(M)?w():``)}),g(n,V),v()}n([`input`,`keydown`]);var fu={required:!1,disabled:!1},pu=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`required`,`disabled`,`class`]),mu=u(`<span class="soya-label__required svelte-1f5craf" aria-hidden="true">*</span>`),hu=u(`<label><span><!></span> <!></label>`);function gu(n,r){i(r,!0);let a=E(r,`required`,19,()=>fu.required),o=E(r,`disabled`,19,()=>fu.disabled),c=z(r,pu);var l=hu();V(l,()=>({...c,class:[`soya-label`,r.class],"data-required":a(),"data-disabled":o()}),void 0,void 0,void 0,`svelte-1f5craf`);var u=D(l),d=D(u);s(d,()=>r.children),t(u);var f=H(u,2),p=e=>{var t=mu();g(e,t)};e(f,e=>{a()&&e(p)}),t(l),g(n,l),v()}var _u={tone:`neutral`,pulse:!1},vu=new Set([`$$slots`,`$$events`,`$$legacy`,`label`,`description`,`tone`,`pulse`,`class`]),yu=u(`<span class="svelte-1c8avh3"> </span>`),bu=u(`<span><span class="soya-marker__dot svelte-1c8avh3" aria-hidden="true"></span> <span class="soya-marker__copy svelte-1c8avh3"><strong class="svelte-1c8avh3"> </strong> <!></span></span>`);function xu(n,r){i(r,!0);let a=E(r,`tone`,19,()=>_u.tone),o=E(r,`pulse`,19,()=>_u.pulse),s=z(r,vu);var c=bu();V(c,()=>({...s,class:[`soya-marker`,r.class],"data-tone":a(),"data-pulse":o()||void 0}),void 0,void 0,void 0,`svelte-1c8avh3`);var l=H(D(c),2),u=D(l),d=D(u,!0);t(u);var f=H(u,2),p=e=>{var n=yu(),i=D(n,!0);t(n),j(()=>m(i,r.description)),g(e,n)};e(f,e=>{r.description&&e(p)}),t(l),t(c),j(()=>m(d,r.label)),g(n,c),v()}var Su={value:``,label:`명령 메뉴`,loop:!0},Cu=u(`<small> </small>`),wu=u(`<span class="soya-menubar__shortcut" aria-hidden="true"> </span>`),Tu=u(`<span class="soya-menubar__copy"><span> </span> <!></span> <!>`,1),Eu=u(`<!> <!>`,1);function Du(n,r){i(r,!0);let o=E(r,`value`,31,()=>k(Su.value)),s=E(r,`label`,19,()=>Su.label),l=E(r,`loop`,19,()=>Su.loop),u=Ct();var d=c(),p=B(d);{let n=R(()=>[`soya-menubar`,r.class]);y(p,()=>qa,(i,d)=>{d(i,{get onValueChange(){return r.onvaluechange},get loop(){return l()},get"aria-label"(){return s()},get class(){return f(n)},get value(){return o()},set value(e){o(e)},children:(n,i)=>{var o=c(),s=B(o);a(s,17,()=>r.menus,e=>e.value,(n,i)=>{var o=c(),s=B(o);y(s,()=>Ya,(n,o)=>{o(n,{get value(){return f(i).value},children:(n,o)=>{var s=Eu(),l=B(s);y(l,()=>ro,(e,t)=>{t(e,{class:`soya-menubar__trigger`,get disabled(){return f(i).disabled},children:(e,t)=>{L();var n=W();j(()=>m(n,f(i).label)),g(e,n)},$$slots:{default:!0}})});var d=H(l,2),p=n=>{var o=c(),s=B(o);y(s,()=>At,(n,o)=>{o(n,{get to(){return u.portal},children:(n,o)=>{var s=c(),l=B(s);y(l,()=>eo,(n,o)=>{o(n,{class:`soya-menubar__content`,sideOffset:4,align:`start`,loop:!0,children:(n,o)=>{var s=c(),l=B(s);a(l,17,()=>f(i).items,e=>e.value,(n,a)=>{var o=c(),s=B(o);y(s,()=>wa,(n,o)=>{o(n,{class:`soya-menubar__item`,get disabled(){return f(a).disabled},get"data-danger"(){return f(a).danger},get textValue(){return f(a).label},onSelect:()=>r.onselect?.(f(a),f(i)),children:(n,r)=>{var i=Tu(),o=B(i),s=D(o),c=D(s,!0);t(s);var l=H(s,2),u=e=>{var n=Cu(),r=D(n,!0);t(n),j(()=>m(r,f(a).description)),g(e,n)};e(l,e=>{f(a).description&&e(u)}),t(o);var d=H(o,2),p=e=>{var n=wu(),r=D(n,!0);t(n),j(()=>m(r,f(a).shortcut)),g(e,n)};e(d,e=>{f(a).shortcut&&e(p)}),j(()=>m(c,f(a).label)),g(n,i)},$$slots:{default:!0}})}),g(n,o)}),g(n,s)},$$slots:{default:!0}})}),g(n,s)},$$slots:{default:!0}})}),g(n,o)};e(d,e=>{u.portal&&e(p)}),g(n,s)},$$slots:{default:!0}})}),g(n,o)}),g(n,o)},$$slots:{default:!0}})})}g(n,d),v()}var Ou={align:`start`},ku=new Set([`$$slots`,`$$events`,`$$legacy`,`children`,`avatar`,`header`,`footer`,`align`,`label`,`class`]),Au=u(`<div class="soya-message__avatar svelte-rjusri"><!></div>`),ju=u(`<header class="soya-message__header svelte-rjusri"><!></header>`),Mu=u(`<footer class="soya-message__footer svelte-rjusri"><!></footer>`),Nu=u(`<article><!> <div class="soya-message__body svelte-rjusri"><!> <div class="soya-message__content svelte-rjusri"><!></div> <!></div></article>`);function Pu(n,r){i(r,!0);let a=E(r,`align`,19,()=>Ou.align),o=z(r,ku);var c=Nu();V(c,()=>({...o,class:[`soya-message`,r.class],"data-align":a(),"aria-label":r.label}),void 0,void 0,void 0,`svelte-rjusri`);var l=D(c),u=e=>{var n=Au(),i=D(n);s(i,()=>r.avatar),t(n),g(e,n)};e(l,e=>{r.avatar&&e(u)});var d=H(l,2),f=D(d),p=e=>{var n=ju(),i=D(n);s(i,()=>r.header),t(n),g(e,n)};e(f,e=>{r.header&&e(p)});var m=H(f,2),h=D(m);s(h,()=>r.children),t(m);var _=H(m,2),y=e=>{var n=Mu(),i=D(n);s(i,()=>r.footer),t(n),g(e,n)};e(_,e=>{r.footer&&e(y)}),t(d),t(c),g(n,c),v()}var Fu={value:``,invalid:!1},Iu=new Set([`$$slots`,`$$events`,`$$legacy`,`value`,`options`,`placeholder`,`size`,`invalid`,`class`,`onvaluechange`]),Lu=u(`<option disabled=""> </option>`),Ru=u(`<option> </option>`),zu=u(`<span><select><!><!></select> <!></span>`);function Bu(n,r){i(r,!0);let o=E(r,`value`,31,()=>k(Fu.value)),s=E(r,`invalid`,19,()=>Fu.invalid),c=z(r,Iu);function l(e){o(e.currentTarget.value),r.onvaluechange?.(o())}var u=zu(),d=D(u);V(d,()=>({...c,"aria-invalid":s()||void 0,"data-size":r.size,onchange:l}),void 0,void 0,void 0,`svelte-1a1whms`);var p=D(d),h=e=>{var n=Lu(),i=D(n,!0);t(n),n.value=n.__value=``,j(()=>m(i,r.placeholder)),g(e,n)};e(p,e=>{r.placeholder!==void 0&&e(h)});var _=H(p);a(_,17,()=>r.options,e=>e.value,(e,n)=>{var r=Ru(),i=D(r,!0);t(r);var a={};j(()=>{r.disabled=f(n).disabled,m(i,f(n).label),a!==(a=f(n).value)&&(r.value=(r.__value=f(n).value)??``)}),g(e,r)}),t(d);var y=H(d,2);fn(y,{class:`soya-native-select__chevron`}),t(u),j(()=>{O(u,1,de([`soya-native-select`,r.class]),`svelte-1a1whms`),P(u,`data-size`,r.size)}),ce(d,o),g(n,u),v()}var Vu={value:``,label:`주요 탐색`,delayDuration:120},Hu=u(`<span> </span> <!>`,1),Uu=u(`<small> </small>`),Wu=u(`<li><!></li>`),Gu=u(`<ul class="soya-navigation-menu__panel"></ul>`),Ku=u(`<!> <!>`,1);function qu(n,r){i(r,!0);let o=E(r,`value`,31,()=>k(Vu.value)),s=E(r,`label`,19,()=>Vu.label),l=E(r,`delayDuration`,19,()=>Vu.delayDuration);function u(e,t){if(t.disabled){e.preventDefault();return}r.onselect?.(t)}var d=c(),p=B(d);{let n=R(()=>[`soya-navigation-menu`,r.class]);y(p,()=>Ao,(i,d)=>{d(i,{get onValueChange(){return r.onvaluechange},get delayDuration(){return l()},get"aria-label"(){return s()},get class(){return f(n)},get value(){return o()},set value(e){o(e)},children:(n,i)=>{var o=c(),s=B(o);y(s,()=>Jo,(n,i)=>{i(n,{class:`soya-navigation-menu__list`,children:(n,i)=>{var o=c(),s=B(o);a(s,17,()=>r.items,e=>e.value,(n,r)=>{var i=c(),o=B(i);{let n=R(()=>!f(r).disabled);y(o,()=>Vo,(i,o)=>{o(i,{get value(){return f(r).value},get openOnHover(){return f(n)},children:(n,i)=>{var o=c(),s=B(o),l=n=>{var i=Ku(),o=B(i);y(o,()=>rs,(e,n)=>{n(e,{class:`soya-navigation-menu__trigger`,get disabled(){return f(r).disabled},children:(e,n)=>{var i=Hu(),a=B(i),o=D(a,!0);t(a);var s=H(a,2);fn(s,{class:`soya-navigation-menu__chevron`}),j(()=>m(o,f(r).label)),g(e,i)},$$slots:{default:!0}})});var s=H(o,2);y(s,()=>Ro,(n,i)=>{i(n,{class:`soya-navigation-menu__content`,children:(n,i)=>{var o=Gu();a(o,21,()=>f(r).children,e=>e.value,(n,r)=>{var i=Wu(),a=D(i);{let n=R(()=>f(r).disabled?void 0:f(r).href),i=R(()=>f(r).disabled||void 0),o=R(()=>f(r).disabled?``:void 0),s=R(()=>f(r).disabled?`link`:void 0),c=R(()=>f(r).disabled?-1:0);y(a,()=>Wo,(a,l)=>{l(a,{class:`soya-navigation-menu__link soya-navigation-menu__link--panel`,get href(){return f(n)},get active(){return f(r).active},get"aria-disabled"(){return f(i)},get"data-disabled"(){return f(o)},get role(){return f(s)},get tabindex(){return f(c)},onSelect:e=>u(e,f(r)),children:(n,i)=>{var a=Hu(),o=B(a),s=D(o,!0);t(o);var c=H(o,2),l=e=>{var n=Uu(),i=D(n,!0);t(n),j(()=>m(i,f(r).description)),g(e,n)};e(c,e=>{f(r).description&&e(l)}),j(()=>m(s,f(r).label)),g(n,a)},$$slots:{default:!0}})})}t(i),g(n,i)}),t(o),g(n,o)},$$slots:{default:!0}})}),g(n,i)},d=e=>{var t=c(),n=B(t);{let e=R(()=>f(r).disabled?void 0:f(r).href),t=R(()=>f(r).disabled||void 0),i=R(()=>f(r).disabled?``:void 0),a=R(()=>f(r).disabled?`link`:void 0),o=R(()=>f(r).disabled?-1:0);y(n,()=>Wo,(n,s)=>{s(n,{class:`soya-navigation-menu__link`,get href(){return f(e)},get active(){return f(r).active},get"aria-disabled"(){return f(t)},get"data-disabled"(){return f(i)},get role(){return f(a)},get tabindex(){return f(o)},onSelect:e=>u(e,f(r)),children:(e,t)=>{L();var n=W();j(()=>m(n,f(r).label)),g(e,n)},$$slots:{default:!0}})})}g(e,t)};e(s,e=>{f(r).children?.length?e(l):e(d,-1)}),g(n,o)},$$slots:{default:!0}})})}g(n,i)}),g(n,o)},$$slots:{default:!0}})}),g(n,o)},$$slots:{default:!0}})})}g(n,d),v()}var Ju={pressed:!1,variant:`ghost`,type:`button`},Yu=new Set([`$$slots`,`$$events`,`$$legacy`,`pressed`,`variant`,`size`,`children`,`type`,`disabled`,`class`,`onclick`,`onpressedchange`]),Xu=u(`<button><!></button>`);function Zu(e,n){i(n,!0);let r=E(n,`pressed`,31,()=>k(Ju.pressed)),a=E(n,`variant`,19,()=>Ju.variant),o=E(n,`type`,19,()=>Ju.type),c=E(n,`disabled`,3,!1),l=z(n,Yu);function u(e){n.onclick?.(e),!(e.defaultPrevented||c())&&(r(!r()),n.onpressedchange?.(r()))}var d=Xu();V(d,()=>({...l,type:o(),class:[`soya-toggle`,n.class],"data-variant":a(),"data-size":n.size,"data-state":r()?`on`:`off`,"aria-pressed":r(),disabled:c(),onclick:u}),void 0,void 0,void 0,`svelte-fkpe69`);var f=D(d);s(f,()=>n.children),t(d),g(e,d),v()}var Qu=h({entries:()=>ed,load:()=>$u}),$u=({params:e})=>(On.some(t=>t.slug===e.slug)&&An(308,`${pe}/blocks/${e.slug}/`),Cn.some(t=>t.slug===e.slug)||jn(404,`Component not found.`),{slug:e.slug});function ed(){return[...Cn,...On].map(({slug:e})=>({slug:e}))}var td=u(`<div class="icon-tile svelte-m90821"><!> <code class="svelte-m90821"> </code></div>`),nd=u(`<div class="icon-gallery svelte-m90821"></div>`);function rd(e,n){let r=E(n,`locale`,3,`ko`);var i=nd();a(i,20,()=>ge,e=>e,(e,n)=>{var r=td(),i=D(r);_e(i,{get name(){return n},size:`1.5rem`});var a=H(i,2),o=D(a,!0);t(a),t(r),j(()=>m(o,n)),g(e,r)}),t(i),j(()=>P(i,`aria-label`,r()===`en`?`Available icons`:`사용 가능한 아이콘`)),g(e,i)}var $={accordion:{ko:`<script lang="ts">
  import { Accordion, CodeBlock } from 'soya-ui';

  let value = $state('scope');
  let stateJson = $derived(JSON.stringify({ value }, null, 2));
<\/script>

{#snippet scope()}
  <p>
    {'검색 결과, 권한 판정, 색인 시각을 한 실행 단위에서 비교합니다.'}
  </p>
{/snippet}
{#snippet retention()}
  <p>
    {'예제 결과는 로컬 세션 동안만 유지되며 외부 서비스로 전송되지 않습니다.'}
  </p>
{/snippet}
{#snippet unavailable()}
  <p>{'비활성 항목의 내용입니다.'}</p>
{/snippet}

<div class="example-stack accordion-example">
  <Accordion
    bind:value
    headingLevel={3}
    items={[
      {
        value: 'scope',
        title: '어떤 결과를 비교하나요?',
        content: scope,
      },
      {
        value: 'retention',
        title: '기관별 권한 스냅샷과 검색 결과를 얼마나 오래 보관하나요?',
        content: retention,
      },
      {
        value: 'unavailable',
        title: '운영 데이터 연결',
        content: unavailable,
        disabled: true,
      },
    ]}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .accordion-example {
    inline-size: min(100%, 38rem);
    min-inline-size: 0;
  }
  .accordion-example p {
    margin: 0;
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Accordion, CodeBlock } from 'soya-ui';

  let value = $state('scope');
  let stateJson = $derived(JSON.stringify({ value }, null, 2));
<\/script>

{#snippet scope()}
  <p>
    {'Compare search results, permission decisions, and indexing time in one run.'}
  </p>
{/snippet}
{#snippet retention()}
  <p>
    {'Sample results remain only for the local session and are not sent to external services.'}
  </p>
{/snippet}
{#snippet unavailable()}
  <p>{'This content belongs to a disabled item.'}</p>
{/snippet}

<div class="example-stack accordion-example">
  <Accordion
    bind:value
    headingLevel={3}
    items={[
      {
        value: 'scope',
        title: 'Which results are compared?',
        content: scope,
      },
      {
        value: 'retention',
        title: 'How long are organization permission snapshots and search results retained?',
        content: retention,
      },
      {
        value: 'unavailable',
        title: 'Production data connection',
        content: unavailable,
        disabled: true,
      },
    ]}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .accordion-example {
    inline-size: min(100%, 38rem);
    min-inline-size: 0;
  }
  .accordion-example p {
    margin: 0;
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"alert-dialog":{ko:`<script lang="ts">
  import { AlertDialog, Button, CodeBlock } from 'soya-ui';

  let open = $state(false);
  let status = $state<'idle' | 'deleted'>('idle');
  let stateJson = $derived(JSON.stringify({ open, status }, null, 2));

  async function confirmDelete() {
    await new Promise((resolve) => setTimeout(resolve, 700));
    status = 'deleted';
  }
<\/script>

<div class="example-stack">
  <AlertDialog
    bind:open
    title={'선택한 예제 실행을 삭제할까요?'}
    description={'검색 품질 검증 결과와 연결된 임시 비교 기록도 함께 제거됩니다. 이 문서 예시는 실제 데이터를 변경하지 않습니다.'}
    cancelLabel={'계속 보관'}
    actionLabel={'예제 실행 삭제'}
    pendingLabel={'삭제하는 중...'}
    errorLabel={'삭제하지 못했습니다. 다시 시도하세요.'}
    actionTone="danger"
    onconfirm={confirmDelete}
  >
    {#snippet trigger(props)}
      <Button {...props} variant="danger">{'삭제 확인 열기'}</Button>
    {/snippet}
    <p class="dialog-note">{'삭제 대상'}: run-1048</p>
  </AlertDialog>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .dialog-note {
    margin: 0;
    padding: var(--soya-space-3);
    border-radius: var(--soya-radius-md);
    background: var(--soya-danger-surface);
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { AlertDialog, Button, CodeBlock } from 'soya-ui';

  let open = $state(false);
  let status = $state<'idle' | 'deleted'>('idle');
  let stateJson = $derived(JSON.stringify({ open, status }, null, 2));

  async function confirmDelete() {
    await new Promise((resolve) => setTimeout(resolve, 700));
    status = 'deleted';
  }
<\/script>

<div class="example-stack">
  <AlertDialog
    bind:open
    title={'Delete the selected sample run?'}
    description={'Temporary comparison records linked to the validation result will also be removed. This documentation example does not change real data.'}
    cancelLabel={'Keep it'}
    actionLabel={'Delete sample run'}
    pendingLabel={'Deleting...'}
    errorLabel={'Unable to delete. Try again.'}
    actionTone="danger"
    onconfirm={confirmDelete}
  >
    {#snippet trigger(props)}
      <Button {...props} variant="danger">{'Open delete confirmation'}</Button>
    {/snippet}
    <p class="dialog-note">{'Delete target'}: run-1048</p>
  </AlertDialog>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .dialog-note {
    margin: 0;
    padding: var(--soya-space-3);
    border-radius: var(--soya-radius-md);
    background: var(--soya-danger-surface);
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},alert:{ko:`<script lang="ts">
  import { Alert, CodeBlock } from 'soya-ui';
  import type { StatusTone } from 'soya-ui';
  let tone = $state<StatusTone>('info');
  let stateJson = $derived(JSON.stringify({ tone }, null, 2));
<\/script>

<div class="example-stack">
  <Alert
    title={'동기화 상태'}
    description={'예제 데이터만 사용하며 운영 시스템에는 연결하지 않습니다.'}
    {tone}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Alert, CodeBlock } from 'soya-ui';
  import type { StatusTone } from 'soya-ui';
  let tone = $state<StatusTone>('info');
  let stateJson = $derived(JSON.stringify({ tone }, null, 2));
<\/script>

<div class="example-stack">
  <Alert
    title={'Synchronization status'}
    description={'This example uses sample data and does not connect to production systems.'}
    {tone}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"aspect-ratio":{ko:`<script lang="ts">
  import { AspectRatio, CodeBlock } from 'soya-ui';
  let ratioKey = $state('wide');
  let ratio = $derived(ratioKey === 'square' ? 1 : ratioKey === 'portrait' ? 3 / 4 : 16 / 9);
  let stateJson = $derived(JSON.stringify({ ratio }, null, 2));
<\/script>

<AspectRatio class="aspect-ratio-example" {ratio}>
  <div class="aspect-ratio-example__content" role="img" aria-label={'산 풍경'}>
    <span>{'미디어 미리보기'}</span>
  </div>
</AspectRatio>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style>
  :global(.aspect-ratio-example) {
    inline-size: min(100%, 32rem);
    border: 1px solid var(--soya-border);
    border-radius: var(--soya-radius-surface);
    background: var(--soya-surface-hover);
  }
  .aspect-ratio-example__content {
    display: grid;
    place-items: center;
    background: linear-gradient(145deg, var(--soya-primary), var(--soya-surface-raised));
    color: var(--soya-primary-foreground);
    font-weight: 600;
  }
</style>
`,en:`<script lang="ts">
  import { AspectRatio, CodeBlock } from 'soya-ui';
  let ratioKey = $state('wide');
  let ratio = $derived(ratioKey === 'square' ? 1 : ratioKey === 'portrait' ? 3 / 4 : 16 / 9);
  let stateJson = $derived(JSON.stringify({ ratio }, null, 2));
<\/script>

<AspectRatio class="aspect-ratio-example" {ratio}>
  <div class="aspect-ratio-example__content" role="img" aria-label={'Mountain landscape'}>
    <span>{'Media preview'}</span>
  </div>
</AspectRatio>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style>
  :global(.aspect-ratio-example) {
    inline-size: min(100%, 32rem);
    border: 1px solid var(--soya-border);
    border-radius: var(--soya-radius-surface);
    background: var(--soya-surface-hover);
  }
  .aspect-ratio-example__content {
    display: grid;
    place-items: center;
    background: linear-gradient(145deg, var(--soya-primary), var(--soya-surface-raised));
    color: var(--soya-primary-foreground);
    font-weight: 600;
  }
</style>
`},attachment:{ko:`<script lang="ts">
  import { Attachment, CodeBlock } from 'soya-ui';
  type AttachmentStatus = 'ready' | 'uploading' | 'success' | 'error';
  let status = $state<AttachmentStatus>('uploading');
  let removed = $state(false);
  let stateJson = $derived(JSON.stringify({ status, progress: 62, removed }, null, 2));
<\/script>

{#snippet preview()}<span class="file-preview">PDF</span>{/snippet}

<div class="example-stack">
  {#if removed}
    <p>{'첨부가 목록에서 제거되었습니다.'}</p>
  {:else}
    <Attachment
      name={'검색-품질-보고서.pdf'}
      description={'PDF · 2.4 MB'}
      {status}
      progress={62}
      {preview}
      statusLabel={(value) =>
        ({
          ready: '업로드 준비',
          uploading: '업로드 중',
          success: '업로드 완료',
          error: '업로드 실패',
        })[value]}
      retryLabel={'다시 시도'}
      removeLabel={'첨부 삭제'}
      onretry={() => (status = 'uploading')}
      onremove={() => (removed = true)}
    />
  {/if}
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .file-preview {
    display: grid;
    place-items: center;
    inline-size: 100%;
    block-size: 100%;
    background: var(--soya-danger-surface);
    color: var(--soya-danger);
    font: 700 0.75rem/1 var(--soya-font-sans);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Attachment, CodeBlock } from 'soya-ui';
  type AttachmentStatus = 'ready' | 'uploading' | 'success' | 'error';
  let status = $state<AttachmentStatus>('uploading');
  let removed = $state(false);
  let stateJson = $derived(JSON.stringify({ status, progress: 62, removed }, null, 2));
<\/script>

{#snippet preview()}<span class="file-preview">PDF</span>{/snippet}

<div class="example-stack">
  {#if removed}
    <p>{'The attachment was removed from the list.'}</p>
  {:else}
    <Attachment
      name={'search-quality-report.pdf'}
      description={'PDF · 2.4 MB'}
      {status}
      progress={62}
      {preview}
      statusLabel={(value) =>
        ({
          ready: 'Ready to upload',
          uploading: 'Uploading',
          success: 'Upload complete',
          error: 'Upload failed',
        })[value]}
      retryLabel={'Retry'}
      removeLabel={'Remove attachment'}
      onretry={() => (status = 'uploading')}
      onremove={() => (removed = true)}
    />
  {/if}
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .file-preview {
    display: grid;
    place-items: center;
    inline-size: 100%;
    block-size: 100%;
    background: var(--soya-danger-surface);
    color: var(--soya-danger);
    font: 700 0.75rem/1 var(--soya-font-sans);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},avatar:{ko:`<script lang="ts">
  import { Avatar, CodeBlock } from 'soya-ui';
  import type { ComponentSize } from 'soya-ui';
  const avatarSource =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"%3E%3Crect width="96" height="96" fill="%237c6ee6"/%3E%3Ccircle cx="48" cy="38" r="18" fill="%23fff"/%3E%3Cpath d="M18 92c4-22 16-32 30-32s26 10 30 32" fill="%23fff"/%3E%3C/svg%3E';
  let showImage = $state(true);
  let size = $state<ComponentSize>('md');
  let shape = $state<'circle' | 'square'>('circle');
  let stateJson = $derived(JSON.stringify({ showImage, size, shape }, null, 2));
<\/script>

<div class="example-stack avatar-example">
  <Avatar src={showImage ? avatarSource : undefined} alt={'김민지'} fallback="MK" {size} {shape} />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style>
  .avatar-example {
    justify-items: center;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Avatar, CodeBlock } from 'soya-ui';
  import type { ComponentSize } from 'soya-ui';
  const avatarSource =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"%3E%3Crect width="96" height="96" fill="%237c6ee6"/%3E%3Ccircle cx="48" cy="38" r="18" fill="%23fff"/%3E%3Cpath d="M18 92c4-22 16-32 30-32s26 10 30 32" fill="%23fff"/%3E%3C/svg%3E';
  let showImage = $state(true);
  let size = $state<ComponentSize>('md');
  let shape = $state<'circle' | 'square'>('circle');
  let stateJson = $derived(JSON.stringify({ showImage, size, shape }, null, 2));
<\/script>

<div class="example-stack avatar-example">
  <Avatar
    src={showImage ? avatarSource : undefined}
    alt={'Mina Kim'}
    fallback="MK"
    {size}
    {shape}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style>
  .avatar-example {
    justify-items: center;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},badge:{ko:`<script lang="ts">
  import { Badge, CodeBlock } from 'soya-ui';
  let tone = $state<'neutral' | 'info' | 'success' | 'warning' | 'danger'>('success');
  let stateJson = $derived(JSON.stringify({ tone }, null, 2));
<\/script>

<div class="example-stack">
  <div><Badge {tone}>{'검증 완료'}</Badge></div>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Badge, CodeBlock } from 'soya-ui';
  let tone = $state<'neutral' | 'info' | 'success' | 'warning' | 'danger'>('success');
  let stateJson = $derived(JSON.stringify({ tone }, null, 2));
<\/script>

<div class="example-stack">
  <div><Badge {tone}>{'Validation complete'}</Badge></div>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"bar-chart":{ko:`<script lang="ts">
  import { BarChart, CodeBlock } from 'soya-ui';
  let period = $state<'week' | 'month'>('week');
  let data = $derived(
    (period === 'week' ? [42, 56, 49, 73, 66, 88, 94] : [56, 72, 64, 81, 77, 96, 108]).map(
      (value, index) => ({ label: String(index + 1), value }),
    ),
  );
  let stateJson = $derived(JSON.stringify({ period, data }, null, 2));
<\/script>

<BarChart
  {data}
  label={'최근 7일 완료한 작업'}
  description={'막대의 높이는 일별 완료 작업 수입니다.'}
  height={200}
  showValues
/>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
`,en:`<script lang="ts">
  import { BarChart, CodeBlock } from 'soya-ui';
  let period = $state<'week' | 'month'>('week');
  let data = $derived(
    (period === 'week' ? [42, 56, 49, 73, 66, 88, 94] : [56, 72, 64, 81, 77, 96, 108]).map(
      (value, index) => ({ label: String(index + 1), value }),
    ),
  );
  let stateJson = $derived(JSON.stringify({ period, data }, null, 2));
<\/script>

<BarChart
  {data}
  label={'Completed tasks over seven days'}
  description={'Bars show completed jobs per day.'}
  height={200}
  showValues
/>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
`},breadcrumb:{ko:`<script lang="ts">
  import { Breadcrumb } from 'soya-ui';

  let items = $derived([
    { label: '작업 공간', href: '#workspace' },
    {
      label: '검색 품질 검증과 매우 긴 기관별 권한 비교',
      href: '#project',
    },
    { label: 'run-1048 상세', current: true },
  ]);
<\/script>

<div id="workspace" class="example-stack breadcrumb-example">
  <span id="project" hidden></span>
  <Breadcrumb {items} label={'현재 위치'} separator="›" />
</div>

<style>
  .breadcrumb-example {
    inline-size: min(100%, 46rem);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Breadcrumb } from 'soya-ui';

  let items = $derived([
    { label: 'Workspace', href: '#workspace' },
    {
      label: 'Search validation and a very long organization permission comparison',
      href: '#project',
    },
    { label: 'run-1048 details', current: true },
  ]);
<\/script>

<div id="workspace" class="example-stack breadcrumb-example">
  <span id="project" hidden></span>
  <Breadcrumb {items} label={'Current location'} separator="›" />
</div>

<style>
  .breadcrumb-example {
    inline-size: min(100%, 46rem);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},bubble:{ko:`<script lang="ts">
  import { Bubble, CodeBlock } from 'soya-ui';
  type BubbleSide = 'incoming' | 'outgoing';
  type BubbleTone = 'neutral' | 'primary';
  let side = $state<BubbleSide>('outgoing');
  let tone = $state<BubbleTone>('primary');
  let stateJson = $derived(JSON.stringify({ side, tone }, null, 2));
<\/script>

{#snippet footer()}<time datetime="2026-09-24T14:32:00+09:00">14:32</time>{/snippet}

<div class="bubble-preview">
  <Bubble {side} {tone} label={'검색 검토 메시지'} {footer}>
    <p>
      {'기관별 권한 결과를 비교했고 차이가 있는 두 항목을 표시했습니다.'}
    </p>
  </Bubble>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .bubble-preview {
    display: grid;
    inline-size: 100%;
  }
</style>
`,en:`<script lang="ts">
  import { Bubble, CodeBlock } from 'soya-ui';
  type BubbleSide = 'incoming' | 'outgoing';
  type BubbleTone = 'neutral' | 'primary';
  let side = $state<BubbleSide>('outgoing');
  let tone = $state<BubbleTone>('primary');
  let stateJson = $derived(JSON.stringify({ side, tone }, null, 2));
<\/script>

{#snippet footer()}<time datetime="2026-09-24T14:32:00+09:00">14:32</time>{/snippet}

<div class="bubble-preview">
  <Bubble {side} {tone} label={'Search review message'} {footer}>
    <p>
      {'I compared organization permissions and marked the two differing items.'}
    </p>
  </Bubble>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .bubble-preview {
    display: grid;
    inline-size: 100%;
  }
</style>
`},button:{ko:`<script lang="ts">
  import { Button, CodeBlock } from 'soya-ui';
  import type { ComponentSize, ControlVariant } from 'soya-ui';
  let variant = $state<ControlVariant>('primary');
  let size = $state<ComponentSize>('md');
  let loading = $state(false);
  let clicks = $state(0);
  let stateJson = $derived(JSON.stringify({ variant, size, loading, clicks }, null, 2));
<\/script>

<div class="example-stack">
  <Button {variant} {size} {loading} onclick={() => (clicks += 1)}>{'작업 실행'} · {clicks}</Button>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Button, CodeBlock } from 'soya-ui';
  import type { ComponentSize, ControlVariant } from 'soya-ui';
  let variant = $state<ControlVariant>('primary');
  let size = $state<ComponentSize>('md');
  let loading = $state(false);
  let clicks = $state(0);
  let stateJson = $derived(JSON.stringify({ variant, size, loading, clicks }, null, 2));
<\/script>

<div class="example-stack">
  <Button {variant} {size} {loading} onclick={() => (clicks += 1)}>{'Run task'} · {clicks}</Button>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"button-group":{ko:`<script lang="ts">
  import { Button, ButtonGroup, CodeBlock } from 'soya-ui';

  let action = $state<'none' | 'preview' | 'save'>('none');
  let stateJson = $derived(JSON.stringify({ action }, null, 2));
<\/script>

<div class="example-stack">
  <ButtonGroup label={'문서 편집 행동'} attached>
    <Button variant="secondary" onclick={() => (action = 'preview')}>{'미리보기'}</Button>
    <Button onclick={() => (action = 'save')}>{'저장'}</Button>
    <Button variant="danger" disabled>{'배포'}</Button>
  </ButtonGroup>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Button, ButtonGroup, CodeBlock } from 'soya-ui';

  let action = $state<'none' | 'preview' | 'save'>('none');
  let stateJson = $derived(JSON.stringify({ action }, null, 2));
<\/script>

<div class="example-stack">
  <ButtonGroup label={'Document editing actions'} attached>
    <Button variant="secondary" onclick={() => (action = 'preview')}>{'Preview'}</Button>
    <Button onclick={() => (action = 'save')}>{'Save'}</Button>
    <Button variant="danger" disabled>{'Deploy'}</Button>
  </ButtonGroup>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},calendar:{ko:`<script lang="ts">
  import { Calendar, CodeBlock } from 'soya-ui';
  import type { CalendarMode, CalendarValue } from 'soya-ui';
  function dateKey(date: Date | null) {
    if (!date) return null;
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return \`\${date.getFullYear()}-\${month}-\${day}\`;
  }
  function serialiseValue(current: CalendarValue) {
    if (current instanceof Date) return dateKey(current);
    if (Array.isArray(current)) return current.map(dateKey);
    if (current) return { start: dateKey(current.start), end: dateKey(current.end) };
    return null;
  }
  let mode = $state<CalendarMode>('range');
  let value = $state<CalendarValue>({ start: new Date(2026, 8, 8), end: new Date(2026, 8, 12) });
  let month = $state(new Date(2026, 8, 1));
  let stateJson = $derived(
    JSON.stringify({ mode, month: dateKey(month), value: serialiseValue(value) }, null, 2),
  );
<\/script>

<div class="calendar-example">
  <Calendar
    bind:value
    bind:month
    {mode}
    locale={'ko-KR'}
    weekStartsOn={Number('1') as 0 | 1}
    min={new Date(2026, 8, 3)}
    max={new Date(2026, 9, 20)}
    isDateDisabled={(date) => date.getDay() === 0}
    label={'배포 날짜'}
    previousMonthLabel={'이전 달'}
    nextMonthLabel={'다음 달'}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .calendar-example {
    display: grid;
    place-items: center;
  }
</style>
`,en:`<script lang="ts">
  import { Calendar, CodeBlock } from 'soya-ui';
  import type { CalendarMode, CalendarValue } from 'soya-ui';
  function dateKey(date: Date | null) {
    if (!date) return null;
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return \`\${date.getFullYear()}-\${month}-\${day}\`;
  }
  function serialiseValue(current: CalendarValue) {
    if (current instanceof Date) return dateKey(current);
    if (Array.isArray(current)) return current.map(dateKey);
    if (current) return { start: dateKey(current.start), end: dateKey(current.end) };
    return null;
  }
  let mode = $state<CalendarMode>('range');
  let value = $state<CalendarValue>({ start: new Date(2026, 8, 8), end: new Date(2026, 8, 12) });
  let month = $state(new Date(2026, 8, 1));
  let stateJson = $derived(
    JSON.stringify({ mode, month: dateKey(month), value: serialiseValue(value) }, null, 2),
  );
<\/script>

<div class="calendar-example">
  <Calendar
    bind:value
    bind:month
    {mode}
    locale={'en-US'}
    weekStartsOn={Number('0') as 0 | 1}
    min={new Date(2026, 8, 3)}
    max={new Date(2026, 9, 20)}
    isDateDisabled={(date) => date.getDay() === 0}
    label={'Deployment dates'}
    previousMonthLabel={'Previous month'}
    nextMonthLabel={'Next month'}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .calendar-example {
    display: grid;
    place-items: center;
  }
</style>
`},card:{ko:`<script lang="ts">
  import { Card, CodeBlock } from 'soya-ui';
  let padding = $state<'none' | 'compact' | 'comfortable'>('comfortable');
  let elevated = $state(false);
  let stateJson = $derived(JSON.stringify({ padding, elevated }, null, 2));
<\/script>

<div class="example-stack">
  <Card {padding} {elevated}
    ><h3>{'색인 작업'}</h3>
    <p>
      {'중립 배경과 일관된 간격으로 관련 정보를 묶습니다.'}
    </p></Card
  >
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Card, CodeBlock } from 'soya-ui';
  let padding = $state<'none' | 'compact' | 'comfortable'>('comfortable');
  let elevated = $state(false);
  let stateJson = $derived(JSON.stringify({ padding, elevated }, null, 2));
<\/script>

<div class="example-stack">
  <Card {padding} {elevated}
    ><h3>{'Indexing task'}</h3>
    <p>
      {'Group related information with a neutral surface and consistent spacing.'}
    </p></Card
  >
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},carousel:{ko:`<script lang="ts">
  import { Card, Carousel, CodeBlock } from 'soya-ui';

  let index = $state(0);
  let stateJson = $derived(JSON.stringify({ index }, null, 2));
<\/script>

{#snippet search()}<Card class="carousel-card">
    <strong>{'검색 품질'}</strong>
    <p>{'정확도 94%'}</p>
  </Card>{/snippet}
{#snippet access()}<Card class="carousel-card">
    <strong>{'권한 검증'}</strong>
    <p>{'실패 0건'}</p>
  </Card>{/snippet}
{#snippet indexing()}<Card class="carousel-card">
    <strong>{'색인 상태'}</strong>
    <p>{'최신 상태'}</p>
  </Card>{/snippet}

<Carousel
  bind:index
  label={'검증 결과 요약'}
  previousLabel={'이전 결과'}
  nextLabel={'다음 결과'}
  slideLabel={(current, count) => \`\${count}개 결과 중 \${current + 1}번째\`}
  items={[
    { id: 'search', content: search },
    { id: 'access', content: access },
    { id: 'indexing', content: indexing },
  ]}
/>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  :global(.carousel-card) {
    display: grid;
    gap: var(--soya-space-2);
    min-block-size: 10rem;
  }
  :global(.carousel-card p) {
    margin: 0;
    color: var(--soya-text-secondary);
  }
</style>
`,en:`<script lang="ts">
  import { Card, Carousel, CodeBlock } from 'soya-ui';

  let index = $state(0);
  let stateJson = $derived(JSON.stringify({ index }, null, 2));
<\/script>

{#snippet search()}<Card class="carousel-card">
    <strong>{'Search quality'}</strong>
    <p>{'94% accuracy'}</p>
  </Card>{/snippet}
{#snippet access()}<Card class="carousel-card">
    <strong>{'Permission checks'}</strong>
    <p>{'No failures'}</p>
  </Card>{/snippet}
{#snippet indexing()}<Card class="carousel-card">
    <strong>{'Index status'}</strong>
    <p>{'Up to date'}</p>
  </Card>{/snippet}

<Carousel
  bind:index
  label={'Validation result summaries'}
  previousLabel={'Previous result'}
  nextLabel={'Next result'}
  slideLabel={(current, count) => \`Result \${current + 1} of \${count}\`}
  items={[
    { id: 'search', content: search },
    { id: 'access', content: access },
    { id: 'indexing', content: indexing },
  ]}
/>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  :global(.carousel-card) {
    display: grid;
    gap: var(--soya-space-2);
    min-block-size: 10rem;
  }
  :global(.carousel-card p) {
    margin: 0;
    color: var(--soya-text-secondary);
  }
</style>
`},checkbox:{ko:`<script lang="ts">
  import { Checkbox, CodeBlock } from 'soya-ui';
  let checked = $state(true);
  let invalid = $state(false);
  let stateJson = $derived(JSON.stringify({ checked, invalid }, null, 2));
<\/script>

<div class="example-stack">
  <Checkbox bind:checked description={'결과를 비교할 때 권한 필터를 적용합니다.'} {invalid}
    >{'권한 검사 포함'}</Checkbox
  >
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Checkbox, CodeBlock } from 'soya-ui';
  let checked = $state(true);
  let invalid = $state(false);
  let stateJson = $derived(JSON.stringify({ checked, invalid }, null, 2));
<\/script>

<div class="example-stack">
  <Checkbox bind:checked description={'Apply permission filters when comparing results.'} {invalid}
    >{'Include permission checks'}</Checkbox
  >
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"code-block":{ko:`<script lang="ts">
  import { onMount } from 'svelte';
  import { CodeBlock, ThemeProvider, useTheme } from 'soya-ui';
  import type { CodeTokenLine } from 'soya-ui';
  const closeScript = '</' + 'script>';
  let samples = $derived({
    svelte: \`<script lang="ts">\\n  import { Button } from 'soya-ui';\\n  let saved = $state(false);\\n\${closeScript}\\n\\n<Button onclick={() => (saved = true)}>\${'저장'}</Button>\`,
    sql: \`select task_srno, task_nm\\nfrom flow_task\\nwhere use_intt_id = $1\\norder by task_srno desc;\`,
    json: JSON.stringify({ task: '검색 색인 검증', status: 'ready', records: 1240 }, null, 2),
    yaml: \`sample: run-1048\\nstatus: ready\\nrecords: 1240\`,
  });
  const languages = ['svelte', 'sql', 'json', 'yaml'] as const;
  type DemoLanguage = (typeof languages)[number];
  let language = $state<DemoLanguage>('svelte');
  let code = $derived(samples[language]);
  let wrap = $state(false);
  let lineNumbers = $state(true);
  let copy = $state(true);
  let startLine = $state(1);
  const parentTheme = useTheme();
  let mode = $derived(parentTheme.mode);
  let highlightedLines = $state<CodeTokenLine[] | undefined>(undefined);
  let highlightState = $state<'ready' | 'loading' | 'applied' | 'unsupported' | 'missing'>('ready');
  let requestId = 0;
  let destroyed = false;
  async function applyHighlight(nextLanguage: DemoLanguage, nextCode: string) {
    const currentRequest = ++requestId;
    highlightState = 'loading';
    try {
      const { highlightCode } = await import('soya-ui/code-block/shiki');
      const nextLines = await highlightCode(nextCode, nextLanguage);
      if (destroyed || currentRequest !== requestId) return;
      highlightedLines = nextLines;
      highlightState = nextLines ? 'applied' : 'unsupported';
    } catch {
      if (destroyed || currentRequest !== requestId) return;
      highlightedLines = undefined;
      highlightState = 'missing';
    }
  }
  onMount(() => {
    void applyHighlight(language, code);
    return () => {
      destroyed = true;
      requestId += 1;
    };
  });
<\/script>

{#key \`\${mode}-\${parentTheme.preset}-\${parentTheme.density}\`}
  <ThemeProvider
    scope="local"
    initialMode={mode}
    initialPreset={parentTheme.preset}
    density={parentTheme.density}
    persist={false}
    class="code-example-theme-stage"
  >
    {#snippet children(theme)}
      <div class="code-example">
        <CodeBlock
          {code}
          {language}
          label={\`\${language} 예제 코드\`}
          {wrap}
          {lineNumbers}
          {startLine}
          {copy}
          copyLabel={'원본 코드 복사'}
          copiedLabel={'원본 코드 복사됨'}
          copyErrorLabel={'원본 코드를 복사할 수 없음'}
          {highlightedLines}
        />
      </div>

      <CodeBlock
        code={JSON.stringify(
          {
            language,
            wrap,
            lineNumbers,
            copy,
            startLine,
            highlightState,
            mode: theme.mode,
            effectiveMode: theme.effectiveMode,
            preset: theme.preset,
            density: theme.density,
          },
          null,
          2,
        )}
        language="json"
        label={'현재 상태'}
        copy={false}
      />
    {/snippet}
  </ThemeProvider>
{/key}

<style lang="scss">
  .code-example {
    grid-template-columns: minmax(0, 1fr);
  }
  .code-example > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
  .code-example :global(.soya-code-block),
  .code-example :global(.soya-code-block figcaption),
  .code-example :global(.soya-code-block__actions),
  .code-example :global(.soya-copy-button),
  .code-example :global(.soya-copy-button .soya-button) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
  .code-example :global(.soya-copy-button .soya-button) {
    white-space: normal;
    overflow-wrap: anywhere;
  }
</style>
`,en:`<script lang="ts">
  import { onMount } from 'svelte';
  import { CodeBlock, ThemeProvider, useTheme } from 'soya-ui';
  import type { CodeTokenLine } from 'soya-ui';
  const closeScript = '</' + 'script>';
  let samples = $derived({
    svelte: \`<script lang="ts">\\n  import { Button } from 'soya-ui';\\n  let saved = $state(false);\\n\${closeScript}\\n\\n<Button onclick={() => (saved = true)}>\${'Save'}</Button>\`,
    sql: \`select task_srno, task_nm\\nfrom flow_task\\nwhere use_intt_id = $1\\norder by task_srno desc;\`,
    json: JSON.stringify(
      { task: 'Search index validation', status: 'ready', records: 1240 },
      null,
      2,
    ),
    yaml: \`sample: run-1048\\nstatus: ready\\nrecords: 1240\`,
  });
  const languages = ['svelte', 'sql', 'json', 'yaml'] as const;
  type DemoLanguage = (typeof languages)[number];
  let language = $state<DemoLanguage>('svelte');
  let code = $derived(samples[language]);
  let wrap = $state(false);
  let lineNumbers = $state(true);
  let copy = $state(true);
  let startLine = $state(1);
  const parentTheme = useTheme();
  let mode = $derived(parentTheme.mode);
  let highlightedLines = $state<CodeTokenLine[] | undefined>(undefined);
  let highlightState = $state<'ready' | 'loading' | 'applied' | 'unsupported' | 'missing'>('ready');
  let requestId = 0;
  let destroyed = false;
  async function applyHighlight(nextLanguage: DemoLanguage, nextCode: string) {
    const currentRequest = ++requestId;
    highlightState = 'loading';
    try {
      const { highlightCode } = await import('soya-ui/code-block/shiki');
      const nextLines = await highlightCode(nextCode, nextLanguage);
      if (destroyed || currentRequest !== requestId) return;
      highlightedLines = nextLines;
      highlightState = nextLines ? 'applied' : 'unsupported';
    } catch {
      if (destroyed || currentRequest !== requestId) return;
      highlightedLines = undefined;
      highlightState = 'missing';
    }
  }
  onMount(() => {
    void applyHighlight(language, code);
    return () => {
      destroyed = true;
      requestId += 1;
    };
  });
<\/script>

{#key \`\${mode}-\${parentTheme.preset}-\${parentTheme.density}\`}
  <ThemeProvider
    scope="local"
    initialMode={mode}
    initialPreset={parentTheme.preset}
    density={parentTheme.density}
    persist={false}
    class="code-example-theme-stage"
  >
    {#snippet children(theme)}
      <div class="code-example">
        <CodeBlock
          {code}
          {language}
          label={\`\${language} example code\`}
          {wrap}
          {lineNumbers}
          {startLine}
          {copy}
          copyLabel={'Copy original code'}
          copiedLabel={'Original code copied'}
          copyErrorLabel={'Unable to copy original code'}
          {highlightedLines}
        />
      </div>

      <CodeBlock
        code={JSON.stringify(
          {
            language,
            wrap,
            lineNumbers,
            copy,
            startLine,
            highlightState,
            mode: theme.mode,
            effectiveMode: theme.effectiveMode,
            preset: theme.preset,
            density: theme.density,
          },
          null,
          2,
        )}
        language="json"
        label={'Current state'}
        copy={false}
      />
    {/snippet}
  </ThemeProvider>
{/key}

<style lang="scss">
  .code-example {
    grid-template-columns: minmax(0, 1fr);
  }
  .code-example > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
  .code-example :global(.soya-code-block),
  .code-example :global(.soya-code-block figcaption),
  .code-example :global(.soya-code-block__actions),
  .code-example :global(.soya-copy-button),
  .code-example :global(.soya-copy-button .soya-button) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
  .code-example :global(.soya-copy-button .soya-button) {
    white-space: normal;
    overflow-wrap: anywhere;
  }
</style>
`},collapsible:{ko:`<script lang="ts">
  import { Button, CodeBlock, Collapsible } from 'soya-ui';
  let open = $state(false);
  let disabled = $state(false);
  let stateJson = $derived(JSON.stringify({ open, disabled }, null, 2));
<\/script>

<div class="example-stack collapsible-example">
  <Collapsible bind:open {disabled}>
    {#snippet trigger(props)}
      <Button {...props} variant="secondary" class="example-long-label">
        {'진단 단계와 권한 판정 세부 정보'}
        {open ? '접기' : '펼치기'}
      </Button>
    {/snippet}
    <ul>
      <li>{'검색 후보 1,240건 수집'}</li>
      <li>
        {'PostgreSQL 권한 판정 864건 통과'}
      </li>
      <li>
        {'긴 설명을 포함한 프로젝트 메타데이터 정합성 확인 완료'}
      </li>
    </ul>
  </Collapsible>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .collapsible-example {
    inline-size: min(100%, 36rem);
    min-inline-size: 0;
  }
  .collapsible-example ul {
    margin: 0;
    padding: var(--soya-space-4) var(--soya-space-4) var(--soya-space-4) 2rem;
    border: 1px solid var(--soya-border);
    border-radius: var(--soya-radius-md);
    background: var(--soya-surface);
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  :global(.example-long-label) {
    min-inline-size: 0;
    max-inline-size: 100%;
    overflow-wrap: anywhere;
    white-space: normal;
  }
</style>
`,en:`<script lang="ts">
  import { Button, CodeBlock, Collapsible } from 'soya-ui';
  let open = $state(false);
  let disabled = $state(false);
  let stateJson = $derived(JSON.stringify({ open, disabled }, null, 2));
<\/script>

<div class="example-stack collapsible-example">
  <Collapsible bind:open {disabled}>
    {#snippet trigger(props)}
      <Button {...props} variant="secondary" class="example-long-label">
        {'Diagnostic steps and permission details'}
        {open ? 'Collapse' : 'Expand'}
      </Button>
    {/snippet}
    <ul>
      <li>{'Collected 1,240 search candidates'}</li>
      <li>
        {'864 candidates passed PostgreSQL authorization'}
      </li>
      <li>
        {'Verified project metadata consistency, including long descriptions'}
      </li>
    </ul>
  </Collapsible>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .collapsible-example {
    inline-size: min(100%, 36rem);
    min-inline-size: 0;
  }
  .collapsible-example ul {
    margin: 0;
    padding: var(--soya-space-4) var(--soya-space-4) var(--soya-space-4) 2rem;
    border: 1px solid var(--soya-border);
    border-radius: var(--soya-radius-md);
    background: var(--soya-surface);
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  :global(.example-long-label) {
    min-inline-size: 0;
    max-inline-size: 100%;
    overflow-wrap: anywhere;
    white-space: normal;
  }
</style>
`},"color-input":{ko:`<script lang="ts">
  import { CodeBlock, ColorInput } from 'soya-ui';

  let value = $state('#2563EB');
  let stateJson = $derived(JSON.stringify({ value }, null, 2));
<\/script>

<div class="example-stack">
  <ColorInput
    bind:value
    label={'브랜드 색상'}
    pickerLabel={'브랜드 색상 선택'}
    name="brand-color"
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, ColorInput } from 'soya-ui';

  let value = $state('#2563EB');
  let stateJson = $derived(JSON.stringify({ value }, null, 2));
<\/script>

<div class="example-stack">
  <ColorInput
    bind:value
    label={'Brand color'}
    pickerLabel={'Choose brand color'}
    name="brand-color"
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},combobox:{ko:`<script lang="ts">
  import { CodeBlock, Combobox, Field } from 'soya-ui';

  let options = $derived([
    {
      value: 'search',
      label: '통합 검색 품질 평가',
      description: '검색 결과와 권한 필터를 함께 검증합니다.',
    },
    { value: 'index', label: '전체 색인 정합성 확인' },
    {
      value: 'enterprise',
      label: '엔터프라이즈 기관별 사용자 권한 동기화 및 검색 결과 비교',
      description: '긴 이름이 좁은 화면에서도 잘려서는 안 됩니다.',
    },
    { value: 'archived', label: '보관된 프로젝트', disabled: true },
  ]);
  let value = $state('search');
  let open = $state(false);
  let stateJson = $derived(JSON.stringify({ value, open }, null, 2));
<\/script>

<div class="example-stack combobox-example">
  <Field label={'검증 프로젝트'} description={'이름을 입력해 프로젝트를 검색합니다.'} required>
    {#snippet children({ id, describedBy, invalid })}
      <Combobox
        {id}
        aria-describedby={describedBy}
        aria-label={'검증 프로젝트 검색'}
        bind:value
        bind:open
        {options}
        placeholder={'프로젝트 선택'}
        triggerLabel={'프로젝트 선택 열기'}
        searchPlaceholder={'프로젝트 이름 검색'}
        emptyLabel={'검색 결과가 없습니다.'}
        {invalid}
      />
    {/snippet}
  </Field>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .combobox-example {
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Combobox, Field } from 'soya-ui';

  let options = $derived([
    {
      value: 'search',
      label: 'Unified search quality evaluation',
      description: 'Validate search results and permission filters together.',
    },
    { value: 'index', label: 'Full index consistency check' },
    {
      value: 'enterprise',
      label: 'Enterprise user permission synchronization and search result comparison',
      description: 'Long names must remain readable on narrow screens.',
    },
    { value: 'archived', label: 'Archived project', disabled: true },
  ]);
  let value = $state('search');
  let open = $state(false);
  let stateJson = $derived(JSON.stringify({ value, open }, null, 2));
<\/script>

<div class="example-stack combobox-example">
  <Field label={'Validation project'} description={'Type a name to search for a project.'} required>
    {#snippet children({ id, describedBy, invalid })}
      <Combobox
        {id}
        aria-describedby={describedBy}
        aria-label={'Search validation projects'}
        bind:value
        bind:open
        {options}
        placeholder={'Select a project'}
        triggerLabel={'Open project selection'}
        searchPlaceholder={'Search project names'}
        emptyLabel={'No search results.'}
        {invalid}
      />
    {/snippet}
  </Field>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .combobox-example {
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},command:{ko:`<script lang="ts">
  import { CodeBlock, Command } from 'soya-ui';

  let options = $derived([
    {
      value: 'reindex',
      label: '전체 검색 색인 다시 실행',
      group: '작업',
      keywords: ['index', 'retry'],
      description: '현재 조건으로 새 실행을 만듭니다.',
    },
    {
      value: 'compare',
      label: '선택 결과 비교',
      group: '작업',
      keywords: ['diff'],
      description: '두 실행의 순위와 권한 결과를 비교합니다.',
    },
    {
      value: 'audit',
      label: '기관별 권한 스냅샷과 검색 결과의 긴 정합성 보고서 열기',
      group: '이동',
      keywords: ['permission', 'report'],
    },
    {
      value: 'production',
      label: '운영 데이터 삭제',
      group: '제한됨',
      disabled: true,
      description: '예제 문서에서는 사용할 수 없습니다.',
    },
  ]);
  let query = $state('');
  let value = $state('');
  let stateJson = $derived(JSON.stringify({ query, value }, null, 2));
<\/script>

<div class="example-stack command-example">
  <Command
    bind:query
    bind:value
    {options}
    label={'예제 명령 메뉴'}
    placeholder={'작업 또는 페이지 검색'}
    emptyLabel={'일치하는 명령이 없습니다. 다른 검색어를 입력하세요.'}
    loop
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .command-example {
    inline-size: min(100%, 34rem);
    min-inline-size: 0;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Command } from 'soya-ui';

  let options = $derived([
    {
      value: 'reindex',
      label: 'Rerun the full search index',
      group: 'Actions',
      keywords: ['index', 'retry'],
      description: 'Create a new run with the current criteria.',
    },
    {
      value: 'compare',
      label: 'Compare selected results',
      group: 'Actions',
      keywords: ['diff'],
      description: 'Compare ranking and permission results from two runs.',
    },
    {
      value: 'audit',
      label: 'Open the detailed organization permission and search consistency report',
      group: 'Navigation',
      keywords: ['permission', 'report'],
    },
    {
      value: 'production',
      label: 'Delete production data',
      group: 'Restricted',
      disabled: true,
      description: 'Unavailable in the sample documentation.',
    },
  ]);
  let query = $state('');
  let value = $state('');
  let stateJson = $derived(JSON.stringify({ query, value }, null, 2));
<\/script>

<div class="example-stack command-example">
  <Command
    bind:query
    bind:value
    {options}
    label={'Sample command menu'}
    placeholder={'Search actions or pages'}
    emptyLabel={'No matching commands. Try another search term.'}
    loop
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .command-example {
    inline-size: min(100%, 34rem);
    min-inline-size: 0;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"context-menu":{ko:`<script lang="ts">
  import { Button, CodeBlock, ContextMenu } from 'soya-ui';
  import type { ContextMenuItem } from 'soya-ui';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  let items = $derived([
    {
      value: 'open',
      label: '상세 열기',
      description: '선택한 작업의 상세 패널을 엽니다.',
    },
    { value: 'duplicate', label: '조건 복제', shortcut: '⌘ D' },
    { value: 'archive', label: '완료 보관', disabled: true },
    { value: 'delete', label: '예제 데이터 삭제', danger: true },
  ]);
  let selectedValue = $state('');
  let disabled = $state(false);
  let open = $state(false);
  let stateJson = $derived(JSON.stringify({ open, selectedValue, disabled }, null, 2));
<\/script>

{#snippet target()}
  <div class="context-target">
    <strong>{'검색 색인 검증'} run-1048</strong>
    <span>{'오른쪽 클릭, 길게 누르기 또는 아래 버튼으로 메뉴를 여세요.'}</span>
  </div>
{/snippet}

{#snippet fallback(props: HTMLButtonAttributes)}
  <Button {...props} variant="secondary">{'작업 메뉴 열기'}</Button>
{/snippet}

<div class="example-stack context-example">
  <ContextMenu
    bind:open
    {items}
    children={target}
    fallbackTrigger={fallback}
    fallbackLabel={'작업 메뉴 열기'}
    {disabled}
    onselect={(item: ContextMenuItem) => (selectedValue = item.value)}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .context-example {
    inline-size: min(100%, 34rem);
  }
  .context-target {
    display: grid;
    gap: var(--soya-space-2);
    min-inline-size: 0;
    padding: var(--soya-space-6);
    border: 1px dashed var(--soya-border-strong);
    border-radius: var(--soya-radius-md);
    background: var(--soya-surface);
    overflow-wrap: anywhere;
  }
  .context-target span {
    color: var(--soya-text-secondary);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Button, CodeBlock, ContextMenu } from 'soya-ui';
  import type { ContextMenuItem } from 'soya-ui';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  let items = $derived([
    {
      value: 'open',
      label: 'Open details',
      description: 'Open the selected job details panel.',
    },
    { value: 'duplicate', label: 'Duplicate criteria', shortcut: '⌘ D' },
    { value: 'archive', label: 'Archive completed job', disabled: true },
    { value: 'delete', label: 'Delete sample data', danger: true },
  ]);
  let selectedValue = $state('');
  let disabled = $state(false);
  let open = $state(false);
  let stateJson = $derived(JSON.stringify({ open, selectedValue, disabled }, null, 2));
<\/script>

{#snippet target()}
  <div class="context-target">
    <strong>{'Search index validation'} run-1048</strong>
    <span>{'Right-click, long-press, or use the button below to open the menu.'}</span>
  </div>
{/snippet}

{#snippet fallback(props: HTMLButtonAttributes)}
  <Button {...props} variant="secondary">{'Open job menu'}</Button>
{/snippet}

<div class="example-stack context-example">
  <ContextMenu
    bind:open
    {items}
    children={target}
    fallbackTrigger={fallback}
    fallbackLabel={'Open job menu'}
    {disabled}
    onselect={(item: ContextMenuItem) => (selectedValue = item.value)}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .context-example {
    inline-size: min(100%, 34rem);
  }
  .context-target {
    display: grid;
    gap: var(--soya-space-2);
    min-inline-size: 0;
    padding: var(--soya-space-6);
    border: 1px dashed var(--soya-border-strong);
    border-radius: var(--soya-radius-md);
    background: var(--soya-surface);
    overflow-wrap: anywhere;
  }
  .context-target span {
    color: var(--soya-text-secondary);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"copy-button":{ko:`<script lang="ts">
  import { CodeBlock, CopyButton } from 'soya-ui';
  import type { CodeTokenLine } from 'soya-ui';

  let payload = $derived(
    JSON.stringify(
      {
        task: '검색 색인 검증',
        status: 'ready',
        scope: ['wiki', 'post'],
      },
      null,
      2,
    ),
  );
  let status = $state<'idle' | 'copied' | 'error'>('idle');
  let stateJson = $derived(JSON.stringify({ status }, null, 2));
  let highlightedLines = $state<CodeTokenLine[] | undefined>(undefined);

  $effect(() => {
    let current = true;
    void import('soya-ui/code-block/shiki')
      .then(async ({ highlightCode }) => {
        const lines = await highlightCode(payload, 'json');
        if (current) highlightedLines = lines;
      })
      .catch(() => {
        if (current) highlightedLines = undefined;
      });
    return () => {
      current = false;
    };
  });
<\/script>

<div class="example-stack copy-example">
  <CodeBlock
    code={payload}
    language="json"
    label={'JSON 페이로드'}
    copy={false}
    {highlightedLines}
  />
  <div class="example-row">
    <CopyButton
      value={payload}
      label={'JSON 복사'}
      copiedLabel={'JSON 복사됨'}
      errorLabel={'복사할 수 없음'}
      oncopy={() => (status = 'copied')}
      onerror={() => (status = 'error')}
    />
    <CopyButton value={payload} label={'비활성 복사'} disabled />
  </div>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .copy-example :global(.soya-code-block) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
  }
  .example-row > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, CopyButton } from 'soya-ui';
  import type { CodeTokenLine } from 'soya-ui';

  let payload = $derived(
    JSON.stringify(
      {
        task: 'Search index validation',
        status: 'ready',
        scope: ['wiki', 'post'],
      },
      null,
      2,
    ),
  );
  let status = $state<'idle' | 'copied' | 'error'>('idle');
  let stateJson = $derived(JSON.stringify({ status }, null, 2));
  let highlightedLines = $state<CodeTokenLine[] | undefined>(undefined);

  $effect(() => {
    let current = true;
    void import('soya-ui/code-block/shiki')
      .then(async ({ highlightCode }) => {
        const lines = await highlightCode(payload, 'json');
        if (current) highlightedLines = lines;
      })
      .catch(() => {
        if (current) highlightedLines = undefined;
      });
    return () => {
      current = false;
    };
  });
<\/script>

<div class="example-stack copy-example">
  <CodeBlock
    code={payload}
    language="json"
    label={'JSON payload'}
    copy={false}
    {highlightedLines}
  />
  <div class="example-row">
    <CopyButton
      value={payload}
      label={'Copy JSON'}
      copiedLabel={'JSON copied'}
      errorLabel={'Unable to copy'}
      oncopy={() => (status = 'copied')}
      onerror={() => (status = 'error')}
    />
    <CopyButton value={payload} label={'Disabled copy'} disabled />
  </div>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .copy-example :global(.soya-code-block) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
  }
  .example-row > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
</style>
`},"data-table":{ko:`<script lang="ts">
  import { CodeBlock, DataTable } from 'soya-ui';
  import type { DataTableColumn, TableRow, TableSort } from 'soya-ui';
  let fixtureRows = $derived<TableRow[]>([
    {
      id: '1048',
      name: '검색 색인 검증',
      owner: '민지',
      status: '성공',
      records: 1240,
    },
    {
      id: '1047',
      name: '기관별 권한 스냅샷 비교',
      owner: '서준',
      status: '실행 중',
      records: 392,
    },
    {
      id: '1046',
      name: '매우 긴 Wiki 문서 경로와 댓글 관계 정합성 확인',
      owner: '지우',
      status: '대기',
      records: 218,
    },
    {
      id: '1045',
      name: '메타데이터 정합성',
      owner: '민지',
      status: '오류',
      records: 0,
    },
    {
      id: '1044',
      name: '통합 검색 재현',
      owner: '서준',
      status: '성공',
      records: 864,
    },
    {
      id: '1043',
      name: '파일 접근 경로 점검',
      owner: '지우',
      status: '성공',
      records: 96,
    },
  ]);
  let columns = $derived<DataTableColumn[]>([
    { key: 'name', label: '작업', sortable: true, searchable: true, hideable: false },
    { key: 'owner', label: '담당자', sortable: true, searchable: true, hideable: true },
    { key: 'status', label: '상태', searchable: true, hideable: true },
    {
      key: 'records',
      label: '처리 건수',
      align: 'end',
      sortable: true,
      hideable: true,
    },
  ]);
  let showSampleRows = $state(true);
  let rows = $derived<TableRow[]>(showSampleRows ? fixtureRows : []);
  let query = $state('');
  let sort = $state<TableSort | undefined>({ key: 'records', direction: 'desc' });
  let page = $state(1);
  let pageSize = $state(3);
  let selected = $state<string[]>([]);
  let visibleColumns = $state(['name', 'owner', 'status', 'records']);
  let stateJson = $derived(
    JSON.stringify(
      {
        query,
        sort: sort ?? null,
        page,
        pageSize,
        selected,
        visibleColumns,
        rowCount: rows.length,
      },
      null,
      2,
    ),
  );
<\/script>

<div class="example-stack data-table-example">
  <DataTable
    {rows}
    {columns}
    rowKey={(row: TableRow) => String(row.id)}
    caption={'예제 작업 목록'}
    bind:query
    bind:sort
    bind:page
    bind:pageSize
    bind:selected
    bind:visibleColumns
    selectable
    searchLabel={'작업 검색'}
    searchPlaceholder={'작업명·담당자·상태 검색'}
    columnsLabel={'표시할 열'}
    pageSizeLabel={'페이지당 행 수'}
    paginationLabel={'표 페이지 이동'}
    selectColumnLabel={'행 선택'}
    rowSelectLabel={(row, index) => \`\${index + 1}번째 행 선택\`}
    emptyLabel={'표시할 작업이 없습니다.'}
    noColumnsLabel={'표시할 열을 선택하세요.'}
    previousPageLabel={'이전 페이지'}
    nextPageLabel={'다음 페이지'}
    pageSizeOptions={[3, 6]}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style>
  .data-table-example {
    inline-size: min(100%, 64rem);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, DataTable } from 'soya-ui';
  import type { DataTableColumn, TableRow, TableSort } from 'soya-ui';
  let fixtureRows = $derived<TableRow[]>([
    {
      id: '1048',
      name: 'Search index validation',
      owner: 'Minji',
      status: 'Success',
      records: 1240,
    },
    {
      id: '1047',
      name: 'Compare organization permission snapshots',
      owner: 'Seojun',
      status: 'Running',
      records: 392,
    },
    {
      id: '1046',
      name: 'Validate a very long wiki document path and comment relationship',
      owner: 'Jiwoo',
      status: 'Queued',
      records: 218,
    },
    {
      id: '1045',
      name: 'Metadata consistency',
      owner: 'Minji',
      status: 'Error',
      records: 0,
    },
    {
      id: '1044',
      name: 'Reproduce unified search',
      owner: 'Seojun',
      status: 'Success',
      records: 864,
    },
    {
      id: '1043',
      name: 'Check file access paths',
      owner: 'Jiwoo',
      status: 'Success',
      records: 96,
    },
  ]);
  let columns = $derived<DataTableColumn[]>([
    { key: 'name', label: 'Job', sortable: true, searchable: true, hideable: false },
    { key: 'owner', label: 'Owner', sortable: true, searchable: true, hideable: true },
    { key: 'status', label: 'Status', searchable: true, hideable: true },
    {
      key: 'records',
      label: 'Records',
      align: 'end',
      sortable: true,
      hideable: true,
    },
  ]);
  let showSampleRows = $state(true);
  let rows = $derived<TableRow[]>(showSampleRows ? fixtureRows : []);
  let query = $state('');
  let sort = $state<TableSort | undefined>({ key: 'records', direction: 'desc' });
  let page = $state(1);
  let pageSize = $state(3);
  let selected = $state<string[]>([]);
  let visibleColumns = $state(['name', 'owner', 'status', 'records']);
  let stateJson = $derived(
    JSON.stringify(
      {
        query,
        sort: sort ?? null,
        page,
        pageSize,
        selected,
        visibleColumns,
        rowCount: rows.length,
      },
      null,
      2,
    ),
  );
<\/script>

<div class="example-stack data-table-example">
  <DataTable
    {rows}
    {columns}
    rowKey={(row: TableRow) => String(row.id)}
    caption={'Sample job list'}
    bind:query
    bind:sort
    bind:page
    bind:pageSize
    bind:selected
    bind:visibleColumns
    selectable
    searchLabel={'Search jobs'}
    searchPlaceholder={'Search job, owner, or status'}
    columnsLabel={'Visible columns'}
    pageSizeLabel={'Rows per page'}
    paginationLabel={'Table pagination'}
    selectColumnLabel={'Select rows'}
    rowSelectLabel={(row, index) => \`Select row \${index + 1}\`}
    emptyLabel={'No jobs to display.'}
    noColumnsLabel={'Choose at least one visible column.'}
    previousPageLabel={'Previous page'}
    nextPageLabel={'Next page'}
    pageSizeOptions={[3, 6]}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style>
  .data-table-example {
    inline-size: min(100%, 64rem);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"description-list":{ko:`<script lang="ts">
  import { Badge, DescriptionList } from 'soya-ui';
<\/script>

{#snippet statusValue()}<Badge tone="success">{'정상'}</Badge>{/snippet}

<div class="example-stack">
  <DescriptionList
    label={'작업 상세'}
    columns={2}
    items={[
      { term: '작업 ID', value: 'run-1048' },
      { term: '상태', value: statusValue },
      {
        term: '담당 범위',
        value: '기관별 검색 권한과 매우 긴 Wiki 문서 경로의 정합성 검증',
      },
      { term: '마지막 실행', value: '2026-09-23 14:32 KST' },
    ]}
  />
</div>

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Badge, DescriptionList } from 'soya-ui';
<\/script>

{#snippet statusValue()}<Badge tone="success">{'Healthy'}</Badge>{/snippet}

<div class="example-stack">
  <DescriptionList
    label={'Job details'}
    columns={2}
    items={[
      { term: 'Job ID', value: 'run-1048' },
      { term: 'Status', value: statusValue },
      {
        term: 'Scope',
        value: 'Validate organization search permissions and a very long Wiki document path',
      },
      { term: 'Last run', value: '2026-09-23 14:32 KST' },
    ]}
  />
</div>

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},dialog:{ko:`<script lang="ts">
  import { Button, CodeBlock, Dialog } from 'soya-ui';

  let open = $state(false);
  let stateJson = $derived(JSON.stringify({ open }, null, 2));
<\/script>

<Dialog
  bind:open
  title={'작업 상세'}
  description={'선택한 예제 작업의 실행 정보를 확인합니다.'}
  closeLabel={'닫기'}
  >{#snippet trigger(props)}<Button {...props} variant="secondary">{'상세 열기'}</Button>{/snippet}
  <dl>
    <div>
      <dt>{'작업 ID'}</dt>
      <dd>run-1048</dd>
    </div>
    <div>
      <dt>{'처리 건수'}</dt>
      <dd>1,240</dd>
    </div>
  </dl>
  {#snippet footer()}<Button variant="secondary" onclick={() => (open = false)}>{'닫기'}</Button
    ><Button onclick={() => (open = false)}>{'확인'}</Button>{/snippet}</Dialog
>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
`,en:`<script lang="ts">
  import { Button, CodeBlock, Dialog } from 'soya-ui';

  let open = $state(false);
  let stateJson = $derived(JSON.stringify({ open }, null, 2));
<\/script>

<Dialog
  bind:open
  title={'Job details'}
  description={'Review execution information for the selected sample job.'}
  closeLabel={'Close'}
  >{#snippet trigger(props)}<Button {...props} variant="secondary">{'Open details'}</Button
    >{/snippet}
  <dl>
    <div>
      <dt>{'Job ID'}</dt>
      <dd>run-1048</dd>
    </div>
    <div>
      <dt>{'Records'}</dt>
      <dd>1,240</dd>
    </div>
  </dl>
  {#snippet footer()}<Button variant="secondary" onclick={() => (open = false)}>{'Close'}</Button
    ><Button onclick={() => (open = false)}>{'Confirm'}</Button>{/snippet}</Dialog
>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
`},"donut-chart":{ko:`<script lang="ts">
  import { CodeBlock, DonutChart } from 'soya-ui';
  let includeQueued = $state(true);
  let data = $derived([
    { label: '완료', value: 68 },
    { label: '실행 중', value: 21 },
    ...(includeQueued ? [{ label: '대기', value: 11 }] : []),
  ]);
  let stateJson = $derived(JSON.stringify({ includeQueued, data }, null, 2));
<\/script>

<DonutChart
  {data}
  label={'작업 상태 비율'}
  description={'작업을 상태별 비율로 나눕니다.'}
  size={192}
/>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
`,en:`<script lang="ts">
  import { CodeBlock, DonutChart } from 'soya-ui';
  let includeQueued = $state(true);
  let data = $derived([
    { label: 'Complete', value: 68 },
    { label: 'Running', value: 21 },
    ...(includeQueued ? [{ label: 'Queued', value: 11 }] : []),
  ]);
  let stateJson = $derived(JSON.stringify({ includeQueued, data }, null, 2));
<\/script>

<DonutChart
  {data}
  label={'Task status distribution'}
  description={'Tasks grouped by their current status.'}
  size={192}
/>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
`},"dropdown-menu":{ko:`<script lang="ts">
  import { Button, CodeBlock, DropdownMenu, Icon } from 'soya-ui';

  let items = $derived([
    {
      value: 'duplicate',
      label: '복제',
      description: '같은 조건으로 새 작업 생성',
    },
    { value: 'archive', label: '보관' },
    { value: 'delete', label: '삭제', danger: true },
  ]);
  let selectedValue = $state('');
  let stateJson = $derived(JSON.stringify({ selectedValue }, null, 2));
<\/script>

<DropdownMenu {items} onselect={(item) => (selectedValue = item.value)} label={'작업 메뉴'}
  >{#snippet trigger(props)}<Button {...props} variant="secondary"
      >{'작업 메뉴'} <Icon name="chevron-down" size="0.875rem" /></Button
    >{/snippet}</DropdownMenu
>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
`,en:`<script lang="ts">
  import { Button, CodeBlock, DropdownMenu, Icon } from 'soya-ui';

  let items = $derived([
    {
      value: 'duplicate',
      label: 'Duplicate',
      description: 'Create a new job with the same criteria',
    },
    { value: 'archive', label: 'Archive' },
    { value: 'delete', label: 'Delete', danger: true },
  ]);
  let selectedValue = $state('');
  let stateJson = $derived(JSON.stringify({ selectedValue }, null, 2));
<\/script>

<DropdownMenu {items} onselect={(item) => (selectedValue = item.value)} label={'Job menu'}
  >{#snippet trigger(props)}<Button {...props} variant="secondary"
      >{'Job menu'} <Icon name="chevron-down" size="0.875rem" /></Button
    >{/snippet}</DropdownMenu
>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
`},"empty-state":{ko:`<script lang="ts">
  import { Button, CodeBlock, EmptyState, Icon } from 'soya-ui';

  let resetCount = $state(0);
  let stateJson = $derived(JSON.stringify({ resetCount }, null, 2));
<\/script>

<EmptyState
  title={'조건에 맞는 결과가 없습니다'}
  description={'검색 범위를 넓히거나 필터를 초기화하세요.'}
  >{#snippet icon()}<Icon name="search" size="1.5rem" />{/snippet}{#snippet actions()}<Button
      variant="secondary"
      onclick={() => (resetCount += 1)}
      >{'필터 초기화'}{resetCount ? \` · \${resetCount}\` : ''}</Button
    >{/snippet}</EmptyState
>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
`,en:`<script lang="ts">
  import { Button, CodeBlock, EmptyState, Icon } from 'soya-ui';

  let resetCount = $state(0);
  let stateJson = $derived(JSON.stringify({ resetCount }, null, 2));
<\/script>

<EmptyState
  title={'No results match these criteria'}
  description={'Broaden the search or reset the filters.'}
  >{#snippet icon()}<Icon name="search" size="1.5rem" />{/snippet}{#snippet actions()}<Button
      variant="secondary"
      onclick={() => (resetCount += 1)}
      >{'Reset filters'}{resetCount ? \` · \${resetCount}\` : ''}</Button
    >{/snippet}</EmptyState
>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
`},field:{ko:`<script lang="ts">
  import { CodeBlock, Field, Input } from 'soya-ui';
  let value = $state('');
  let showError = $state(true);
  let stateJson = $derived(
    JSON.stringify({ value, showError, invalid: showError && !value }, null, 2),
  );
<\/script>

<div class="example-stack">
  <Field
    label={'프로젝트 이름'}
    description={'목록에서 식별할 수 있는 이름을 입력하세요.'}
    error={showError && !value ? '프로젝트 이름은 필수입니다.' : undefined}
    required
    >{#snippet children({ id, describedBy, invalid })}<Input
        {id}
        bind:value
        aria-describedby={describedBy}
        placeholder={'예: 검색 품질 평가'}
        {invalid}
      />{/snippet}</Field
  >
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Field, Input } from 'soya-ui';
  let value = $state('');
  let showError = $state(true);
  let stateJson = $derived(
    JSON.stringify({ value, showError, invalid: showError && !value }, null, 2),
  );
<\/script>

<div class="example-stack">
  <Field
    label={'Project name'}
    description={'Enter a name that identifies the project in a list.'}
    error={showError && !value ? 'Project name is required.' : undefined}
    required
    >{#snippet children({ id, describedBy, invalid })}<Input
        {id}
        bind:value
        aria-describedby={describedBy}
        placeholder={'For example, Search quality evaluation'}
        {invalid}
      />{/snippet}</Field
  >
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"hover-card":{ko:`<script lang="ts">
  import { Button, CodeBlock, HoverCard } from 'soya-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  let open = $state(false);
  let stateJson = $derived(JSON.stringify({ open }, null, 2));
<\/script>

{#snippet hoverTrigger(props: HTMLAttributes<HTMLElement>)}
  <Button {...props} variant="secondary">
    {'검색 평가 실행 정보'}
  </Button>
{/snippet}

<div class="hover-card-example">
  <HoverCard bind:open trigger={hoverTrigger} side="bottom" align="start">
    <div id="hover-card-details" class="hover-card-content">
      <strong>{'검색 평가 #184'}</strong>
      <p>
        {'정확도 94% · 마지막 실행 오늘 10:42'}
      </p>
      <a href="#hover-card-details">{'상세 결과 보기'}</a>
    </div>
  </HoverCard>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .hover-card-example {
    display: grid;
    place-items: center;
    min-block-size: 14rem;
  }
  .hover-card-content {
    display: grid;
    gap: var(--soya-space-2);
  }
  .hover-card-content p {
    margin: 0;
    color: var(--soya-text-secondary);
  }
  .hover-card-content a {
    color: var(--soya-primary);
  }
</style>
`,en:`<script lang="ts">
  import { Button, CodeBlock, HoverCard } from 'soya-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  let open = $state(false);
  let stateJson = $derived(JSON.stringify({ open }, null, 2));
<\/script>

{#snippet hoverTrigger(props: HTMLAttributes<HTMLElement>)}
  <Button {...props} variant="secondary">
    {'Search evaluation run'}
  </Button>
{/snippet}

<div class="hover-card-example">
  <HoverCard bind:open trigger={hoverTrigger} side="bottom" align="start">
    <div id="hover-card-details" class="hover-card-content">
      <strong>{'Search evaluation #184'}</strong>
      <p>
        {'94% accuracy · last run today at 10:42'}
      </p>
      <a href="#hover-card-details">{'View detailed results'}</a>
    </div>
  </HoverCard>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .hover-card-example {
    display: grid;
    place-items: center;
    min-block-size: 14rem;
  }
  .hover-card-content {
    display: grid;
    gap: var(--soya-space-2);
  }
  .hover-card-content p {
    margin: 0;
    color: var(--soya-text-secondary);
  }
  .hover-card-content a {
    color: var(--soya-primary);
  }
</style>
`},"icon-button":{ko:`<script lang="ts">
  import { CodeBlock, Icon, IconButton } from 'soya-ui';
  let disabled = $state(false);
  let saved = $state(false);
  let stateJson = $derived(JSON.stringify({ saved, disabled }, null, 2));
<\/script>

<div class="example-stack">
  <IconButton label={'즐겨찾기'} variant="secondary" {disabled} onclick={() => (saved = !saved)}
    ><Icon name={saved ? 'star-filled' : 'star'} /></IconButton
  >
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Icon, IconButton } from 'soya-ui';
  let disabled = $state(false);
  let saved = $state(false);
  let stateJson = $derived(JSON.stringify({ saved, disabled }, null, 2));
<\/script>

<div class="example-stack">
  <IconButton label={'Favorite'} variant="secondary" {disabled} onclick={() => (saved = !saved)}
    ><Icon name={saved ? 'star-filled' : 'star'} /></IconButton
  >
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},icon:{ko:`<script lang="ts">
  import { Icon, IconButton } from 'soya-ui';
  import type { IconName } from 'soya-ui';
  let selectedName = $state<IconName>('search');
<\/script>

<div class="icon-stage">
  <div class="icon-sizes" aria-label={'아이콘 크기 예시'}>
    <Icon name={selectedName} size="1rem" />
    <Icon name={selectedName} size="1.5rem" class="accent-icon" />
    <Icon name={selectedName} size={32} />
    <IconButton label={\`\${selectedName} 버튼\`} variant="secondary">
      <Icon name={selectedName} size="1.25rem" />
    </IconButton>
  </div>
</div>

<style lang="scss">
  .icon-stage {
    display: grid;
    place-items: center;
  }
  .icon-sizes {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--soya-space-5);
  }
  .icon-sizes :global(.accent-icon) {
    color: var(--soya-primary);
  }
</style>
`,en:`<script lang="ts">
  import { Icon, IconButton } from 'soya-ui';
  import type { IconName } from 'soya-ui';
  let selectedName = $state<IconName>('search');
<\/script>

<div class="icon-stage">
  <div class="icon-sizes" aria-label={'Icon size examples'}>
    <Icon name={selectedName} size="1rem" />
    <Icon name={selectedName} size="1.5rem" class="accent-icon" />
    <Icon name={selectedName} size={32} />
    <IconButton label={\`\${selectedName} button\`} variant="secondary">
      <Icon name={selectedName} size="1.25rem" />
    </IconButton>
  </div>
</div>

<style lang="scss">
  .icon-stage {
    display: grid;
    place-items: center;
  }
  .icon-sizes {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--soya-space-5);
  }
  .icon-sizes :global(.accent-icon) {
    color: var(--soya-primary);
  }
</style>
`},input:{ko:`<script lang="ts">
  import { CodeBlock, Field, Input } from 'soya-ui';
  import type { ComponentSize } from 'soya-ui';
  let value = $state('검색 색인');
  let size = $state<ComponentSize>('md');
  let invalid = $state(false);
  let stateJson = $derived(JSON.stringify({ value, size, invalid }, null, 2));
<\/script>

<div class="example-stack">
  <Field label={'검색어'}>
    {#snippet children({ id, describedBy })}
      <Input
        {id}
        aria-describedby={describedBy}
        bind:value
        {size}
        {invalid}
        placeholder={'검색어를 입력하세요'}
      />
    {/snippet}
  </Field>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Field, Input } from 'soya-ui';
  import type { ComponentSize } from 'soya-ui';
  let value = $state('Search index');
  let size = $state<ComponentSize>('md');
  let invalid = $state(false);
  let stateJson = $derived(JSON.stringify({ value, size, invalid }, null, 2));
<\/script>

<div class="example-stack">
  <Field label={'Search term'}>
    {#snippet children({ id, describedBy })}
      <Input
        {id}
        aria-describedby={describedBy}
        bind:value
        {size}
        {invalid}
        placeholder={'Enter a search term'}
      />
    {/snippet}
  </Field>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"input-group":{ko:`<script lang="ts">
  import { CodeBlock, Icon, Input, InputGroup } from 'soya-ui';
  let path = $state('search/jobs');
  let disabled = $state(false);
  let stateJson = $derived(
    JSON.stringify({ value: path, disabled, fullAddress: \`https://flow.team/\${path}\` }, null, 2),
  );
<\/script>

{#snippet prefix()}<span class="affix">https://flow.team/</span>{/snippet}

{#snippet suffix()}<span class="affix"><Icon name="external-link" size="1rem" /></span>{/snippet}

<div class="example-stack input-group-example">
  <InputGroup {prefix} {suffix} {disabled}>
    <Input bind:value={path} aria-label={'작업 경로'} placeholder={'작업 경로 입력'} {disabled} />
  </InputGroup>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .input-group-example {
    inline-size: min(100%, 38rem);
  }
  .affix {
    display: inline-flex;
    align-items: center;
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Icon, Input, InputGroup } from 'soya-ui';
  let path = $state('search/jobs');
  let disabled = $state(false);
  let stateJson = $derived(
    JSON.stringify({ value: path, disabled, fullAddress: \`https://flow.team/\${path}\` }, null, 2),
  );
<\/script>

{#snippet prefix()}<span class="affix">https://flow.team/</span>{/snippet}

{#snippet suffix()}<span class="affix"><Icon name="external-link" size="1rem" /></span>{/snippet}

<div class="example-stack input-group-example">
  <InputGroup {prefix} {suffix} {disabled}>
    <Input bind:value={path} aria-label={'Job path'} placeholder={'Enter a job path'} {disabled} />
  </InputGroup>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .input-group-example {
    inline-size: min(100%, 38rem);
  }
  .affix {
    display: inline-flex;
    align-items: center;
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"input-otp":{ko:`<script lang="ts">
  import { Button, CodeBlock, InputOTP } from 'soya-ui';

  let value = $state('');
  let invalid = $state(false);
  let completed = $state(false);
  let stateJson = $derived(JSON.stringify({ value, invalid, completed }, null, 2));
<\/script>

<div class="otp-example">
  <InputOTP
    bind:value
    length={6}
    label={'6자리 인증 코드'}
    completeLabel={'인증 코드 입력이 완료되었습니다.'}
    {invalid}
    oncomplete={() => (completed = true)}
    onvaluechange={() => (completed = false)}
  />
  <Button size="sm" variant="secondary" aria-pressed={invalid} onclick={() => (invalid = !invalid)}>
    {invalid ? '오류 해제' : '오류 상태'}
  </Button>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .otp-example {
    display: grid;
    justify-items: start;
    gap: var(--soya-space-4);
  }
</style>
`,en:`<script lang="ts">
  import { Button, CodeBlock, InputOTP } from 'soya-ui';

  let value = $state('');
  let invalid = $state(false);
  let completed = $state(false);
  let stateJson = $derived(JSON.stringify({ value, invalid, completed }, null, 2));
<\/script>

<div class="otp-example">
  <InputOTP
    bind:value
    length={6}
    label={'Six-digit verification code'}
    completeLabel={'Verification code entry is complete.'}
    {invalid}
    oncomplete={() => (completed = true)}
    onvaluechange={() => (completed = false)}
  />
  <Button size="sm" variant="secondary" aria-pressed={invalid} onclick={() => (invalid = !invalid)}>
    {invalid ? 'Clear error' : 'Mark invalid'}
  </Button>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .otp-example {
    display: grid;
    justify-items: start;
    gap: var(--soya-space-4);
  }
</style>
`},kbd:{ko:`<script lang="ts">
  import { Kbd } from 'soya-ui';
<\/script>

<div class="example-stack kbd-example">
  <p>
    <span>{'문서 검색 열기'}</span><span class="shortcut"><Kbd>⌘</Kbd><Kbd>K</Kbd></span>
  </p>
  <p>
    <span class="example-long-label">{'선택한 작업을 새 탭에서 상세하게 열기'}</span><span
      class="shortcut"><Kbd>Shift</Kbd><Kbd>Enter</Kbd></span
    >
  </p>
  <p>
    <span>{'현재 메뉴 닫기'}</span><span class="shortcut"><Kbd>Esc</Kbd></span>
  </p>
</div>

<style lang="scss">
  .kbd-example p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
    margin: 0;
    padding-block: var(--soya-space-3);
    border-block-end: 1px solid var(--soya-border);
  }
  .shortcut {
    display: inline-flex;
    flex-wrap: wrap;
    gap: var(--soya-space-1);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  :global(.example-long-label) {
    min-inline-size: 0;
    max-inline-size: 100%;
    overflow-wrap: anywhere;
    white-space: normal;
  }
</style>
`,en:`<script lang="ts">
  import { Kbd } from 'soya-ui';
<\/script>

<div class="example-stack kbd-example">
  <p>
    <span>{'Open documentation search'}</span><span class="shortcut"><Kbd>⌘</Kbd><Kbd>K</Kbd></span>
  </p>
  <p>
    <span class="example-long-label">{'Open selected job details in a new tab'}</span><span
      class="shortcut"><Kbd>Shift</Kbd><Kbd>Enter</Kbd></span
    >
  </p>
  <p>
    <span>{'Close current menu'}</span><span class="shortcut"><Kbd>Esc</Kbd></span>
  </p>
</div>

<style lang="scss">
  .kbd-example p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
    margin: 0;
    padding-block: var(--soya-space-3);
    border-block-end: 1px solid var(--soya-border);
  }
  .shortcut {
    display: inline-flex;
    flex-wrap: wrap;
    gap: var(--soya-space-1);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  :global(.example-long-label) {
    min-inline-size: 0;
    max-inline-size: 100%;
    overflow-wrap: anywhere;
    white-space: normal;
  }
</style>
`},label:{ko:`<script lang="ts">
  import { CodeBlock, Input, Label } from 'soya-ui';
  let required = $state(true);
  let disabled = $state(false);
  let value = $state('');
  let stateJson = $derived(JSON.stringify({ required, disabled, value }, null, 2));
<\/script>

<div class="label-example">
  <Label for="label-example-input" {required} {disabled}>{'프로젝트 이름'}</Label>
  <Input id="label-example-input" bind:value {required} {disabled} placeholder={'이름 입력'} />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style>
  .label-example {
    display: grid;
    gap: var(--soya-space-2);
    inline-size: min(100%, 28rem);
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Input, Label } from 'soya-ui';
  let required = $state(true);
  let disabled = $state(false);
  let value = $state('');
  let stateJson = $derived(JSON.stringify({ required, disabled, value }, null, 2));
<\/script>

<div class="label-example">
  <Label for="label-example-input" {required} {disabled}>{'Project name'}</Label>
  <Input id="label-example-input" bind:value {required} {disabled} placeholder={'Enter a name'} />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style>
  .label-example {
    display: grid;
    gap: var(--soya-space-2);
    inline-size: min(100%, 28rem);
  }
</style>
`},"line-chart":{ko:`<script lang="ts">
  import { CodeBlock, LineChart } from 'soya-ui';
  let latest = $state(84);
  let showDots = $state(true);
  let data = $derived(
    [42, 48, 45, 60, 57, 68, latest].map((value, index) => ({
      label: String(index + 1),
      value,
    })),
  );
  let stateJson = $derived(JSON.stringify({ latest, showDots, data }, null, 2));
<\/script>

<LineChart
  {data}
  label={'최근 7일 검색 성공률'}
  description={'선을 따라 값의 변화를 비교합니다.'}
  height={220}
  {showDots}
  formatValue={(value) => \`\${value}%\`}
/>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
`,en:`<script lang="ts">
  import { CodeBlock, LineChart } from 'soya-ui';
  let latest = $state(84);
  let showDots = $state(true);
  let data = $derived(
    [42, 48, 45, 60, 57, 68, latest].map((value, index) => ({
      label: String(index + 1),
      value,
    })),
  );
  let stateJson = $derived(JSON.stringify({ latest, showDots, data }, null, 2));
<\/script>

<LineChart
  {data}
  label={'Search success over seven days'}
  description={'Compare changes along the line.'}
  height={220}
  {showDots}
  formatValue={(value) => \`\${value}%\`}
/>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
`},marker:{ko:`<script lang="ts">
  import { CodeBlock, Marker } from 'soya-ui';
  import type { StatusTone } from 'soya-ui';
  type MarkerTone = 'neutral' | StatusTone;
  let tone = $state<MarkerTone>('info');
  let pulse = $state(true);
  let stateJson = $derived(JSON.stringify({ tone, pulse }, null, 2));
<\/script>

<div class="example-stack">
  <Marker label={'검색 색인 동기화 중'} description={'마지막 변경 2분 전'} {tone} {pulse} />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Marker } from 'soya-ui';
  import type { StatusTone } from 'soya-ui';
  type MarkerTone = 'neutral' | StatusTone;
  let tone = $state<MarkerTone>('info');
  let pulse = $state(true);
  let stateJson = $derived(JSON.stringify({ tone, pulse }, null, 2));
<\/script>

<div class="example-stack">
  <Marker
    label={'Search index synchronization'}
    description={'Last change 2 minutes ago'}
    {tone}
    {pulse}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},masonry:{ko:`<script lang="ts">
  import { Card, CodeBlock, Masonry } from 'soya-ui';
  let columns = $state(3);
  let minColumnWidth = $state('10rem');
  let cards = $derived([
    {
      id: 'search',
      title: '작업 찾기',
      description: '이름과 상태로 필요한 작업을 빠르게 찾습니다.',
    },
    {
      id: 'review',
      title: '검토 체크리스트',
      description: '스키마와 권한 결과를 비교하고, 배포 전에 확인할 항목을 차례대로 완료합니다.',
    },
    {
      id: 'validation',
      title: '작업 검증',
      description: '필수 값을 확인합니다.',
    },
    {
      id: 'notifications',
      title: '알림 설정',
      description:
        '완료와 실패 알림을 나눠 선택하고, 팀이 확인하기 편한 곳으로 결과를 받습니다. 필요한 변화만 알리면 업무 흐름이 더 차분해집니다.',
    },
    {
      id: 'access',
      title: '멤버 권한',
      description: '역할에 맞는 권한을 지정하고 변경 결과를 확인합니다.',
    },
    {
      id: 'queue',
      title: '실행 대기열',
      description: '진행 중인 작업과 실행 한도를 함께 살펴봅니다.',
    },
  ]);
  let stateJson = $derived(JSON.stringify({ columns, minColumnWidth }, null, 2));
<\/script>

<Masonry {columns} {minColumnWidth} class="masonry-demo">
  {#each cards as card (card.id)}
    <Card padding="compact">
      <strong class="demo-title">{card.title}</strong>
      <p class="demo-copy">{card.description}</p>
    </Card>
  {/each}
</Masonry>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  :global(.masonry-demo) {
    inline-size: min(100%, 56rem);
  }
  .demo-title {
    display: block;
    font-weight: 700;
  }
  .demo-copy {
    margin: var(--soya-space-2) 0 0;
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }
</style>
`,en:`<script lang="ts">
  import { Card, CodeBlock, Masonry } from 'soya-ui';
  let columns = $state(3);
  let minColumnWidth = $state('10rem');
  let cards = $derived([
    {
      id: 'search',
      title: 'Find jobs',
      description: 'Find the right job by name and status.',
    },
    {
      id: 'review',
      title: 'Review checklist',
      description:
        'Compare schema and permission results, then complete each check before deployment.',
    },
    {
      id: 'validation',
      title: 'Validate a job',
      description: 'Check required values.',
    },
    {
      id: 'notifications',
      title: 'Notification settings',
      description:
        'Choose completion and failure alerts separately, then receive results where your team can review them. Focused alerts keep the workflow calm.',
    },
    {
      id: 'access',
      title: 'Member access',
      description: 'Assign the right role and review the resulting access.',
    },
    {
      id: 'queue',
      title: 'Execution queue',
      description: 'Review active jobs and capacity together.',
    },
  ]);
  let stateJson = $derived(JSON.stringify({ columns, minColumnWidth }, null, 2));
<\/script>

<Masonry {columns} {minColumnWidth} class="masonry-demo">
  {#each cards as card (card.id)}
    <Card padding="compact">
      <strong class="demo-title">{card.title}</strong>
      <p class="demo-copy">{card.description}</p>
    </Card>
  {/each}
</Masonry>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  :global(.masonry-demo) {
    inline-size: min(100%, 56rem);
  }
  .demo-title {
    display: block;
    font-weight: 700;
  }
  .demo-copy {
    margin: var(--soya-space-2) 0 0;
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }
</style>
`},menubar:{ko:`<script lang="ts">
  import { CodeBlock, Menubar } from 'soya-ui';
  import type { MenubarMenu } from 'soya-ui';

  let menus = $derived<MenubarMenu[]>([
    {
      value: 'project',
      label: '프로젝트',
      items: [
        {
          value: 'new',
          label: '새 프로젝트',
          description: '빈 작업 공간을 만듭니다.',
          shortcut: '⌘ N',
        },
        { value: 'duplicate', label: '프로젝트 복제' },
        { value: 'archive', label: '보관', disabled: true },
      ],
    },
    {
      value: 'edit',
      label: '편집',
      items: [
        { value: 'undo', label: '실행 취소', shortcut: '⌘ Z' },
        { value: 'copy', label: '복사', shortcut: '⌘ C' },
        { value: 'delete', label: '선택 삭제', danger: true },
      ],
    },
    {
      value: 'view',
      label: '보기',
      items: [
        { value: 'sidebar', label: '사이드바 열기' },
        { value: 'fullscreen', label: '전체 화면' },
      ],
    },
  ]);

  let openMenu = $state('');
  let selectedValue = $state('');
  let stateJson = $derived(JSON.stringify({ openMenu, selectedValue }, null, 2));
<\/script>

<Menubar
  bind:value={openMenu}
  {menus}
  label={'프로젝트 명령'}
  onselect={(item) => (selectedValue = item.value)}
/>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
`,en:`<script lang="ts">
  import { CodeBlock, Menubar } from 'soya-ui';
  import type { MenubarMenu } from 'soya-ui';

  let menus = $derived<MenubarMenu[]>([
    {
      value: 'project',
      label: 'Project',
      items: [
        {
          value: 'new',
          label: 'New project',
          description: 'Create an empty workspace.',
          shortcut: '⌘ N',
        },
        { value: 'duplicate', label: 'Duplicate project' },
        { value: 'archive', label: 'Archive', disabled: true },
      ],
    },
    {
      value: 'edit',
      label: 'Edit',
      items: [
        { value: 'undo', label: 'Undo', shortcut: '⌘ Z' },
        { value: 'copy', label: 'Copy', shortcut: '⌘ C' },
        { value: 'delete', label: 'Delete selection', danger: true },
      ],
    },
    {
      value: 'view',
      label: 'View',
      items: [
        { value: 'sidebar', label: 'Show sidebar' },
        { value: 'fullscreen', label: 'Enter fullscreen' },
      ],
    },
  ]);

  let openMenu = $state('');
  let selectedValue = $state('');
  let stateJson = $derived(JSON.stringify({ openMenu, selectedValue }, null, 2));
<\/script>

<Menubar
  bind:value={openMenu}
  {menus}
  label={'Project commands'}
  onselect={(item) => (selectedValue = item.value)}
/>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
`},message:{ko:`<script lang="ts">
  import { Bubble, CodeBlock, Message } from 'soya-ui';
  type MessageAlign = 'start' | 'end';
  let align = $state<MessageAlign>('start');
  let stateJson = $derived(JSON.stringify({ align }, null, 2));
<\/script>

{#snippet avatar()}<span class="message-avatar">M</span>{/snippet}

{#snippet header()}<span>{'민지 · 방금'}</span>{/snippet}

{#snippet footer()}<span>{'읽음'}</span>{/snippet}

<div class="message-preview">
  <Message {align} label={'민지의 메시지'} {avatar} {header} {footer}>
    <Bubble side={align === 'end' ? 'outgoing' : 'incoming'} tone="neutral">
      <p>{'검토 결과를 공유했습니다.'}</p>
    </Bubble>
  </Message>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .message-preview {
    display: grid;
    inline-size: 100%;
  }
  .message-avatar {
    display: grid;
    place-items: center;
    inline-size: 100%;
    block-size: 100%;
    background: var(--soya-primary);
    color: var(--soya-primary-foreground);
    font-weight: 700;
  }
</style>
`,en:`<script lang="ts">
  import { Bubble, CodeBlock, Message } from 'soya-ui';
  type MessageAlign = 'start' | 'end';
  let align = $state<MessageAlign>('start');
  let stateJson = $derived(JSON.stringify({ align }, null, 2));
<\/script>

{#snippet avatar()}<span class="message-avatar">M</span>{/snippet}

{#snippet header()}<span>{'Minji · just now'}</span>{/snippet}

{#snippet footer()}<span>{'Read'}</span>{/snippet}

<div class="message-preview">
  <Message {align} label={'Message from Minji'} {avatar} {header} {footer}>
    <Bubble side={align === 'end' ? 'outgoing' : 'incoming'} tone="neutral">
      <p>{'The review results are ready.'}</p>
    </Bubble>
  </Message>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .message-preview {
    display: grid;
    inline-size: 100%;
  }
  .message-avatar {
    display: grid;
    place-items: center;
    inline-size: 100%;
    block-size: 100%;
    background: var(--soya-primary);
    color: var(--soya-primary-foreground);
    font-weight: 700;
  }
</style>
`},"native-select":{ko:`<script lang="ts">
  import { CodeBlock, Field, NativeSelect } from 'soya-ui';
  let value = $state('');
  let invalid = $state(false);
  let disabled = $state(false);
  let options = $derived([
    { value: 'development', label: '개발 환경' },
    { value: 'staging', label: '검증 환경' },
    { value: 'production', label: '운영 환경' },
  ]);
  let stateJson = $derived(JSON.stringify({ value, invalid, disabled }, null, 2));
<\/script>

<div class="native-select-example">
  <Field label={'실행 환경'} error={invalid ? '환경을 선택하세요.' : undefined}>
    {#snippet children({ id, describedBy, invalid: fieldInvalid })}
      <NativeSelect
        {id}
        aria-describedby={describedBy}
        bind:value
        {options}
        placeholder={'환경 선택'}
        invalid={fieldInvalid}
        {disabled}
        name="environment"
      />
    {/snippet}
  </Field>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style>
  .native-select-example {
    inline-size: min(100%, 28rem);
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Field, NativeSelect } from 'soya-ui';
  let value = $state('');
  let invalid = $state(false);
  let disabled = $state(false);
  let options = $derived([
    { value: 'development', label: 'Development' },
    { value: 'staging', label: 'Staging' },
    { value: 'production', label: 'Production' },
  ]);
  let stateJson = $derived(JSON.stringify({ value, invalid, disabled }, null, 2));
<\/script>

<div class="native-select-example">
  <Field label={'Environment'} error={invalid ? 'Choose an environment.' : undefined}>
    {#snippet children({ id, describedBy, invalid: fieldInvalid })}
      <NativeSelect
        {id}
        aria-describedby={describedBy}
        bind:value
        {options}
        placeholder={'Choose an environment'}
        invalid={fieldInvalid}
        {disabled}
        name="environment"
      />
    {/snippet}
  </Field>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style>
  .native-select-example {
    inline-size: min(100%, 28rem);
  }
</style>
`},"navigation-menu":{ko:`<script lang="ts">
  import { CodeBlock, NavigationMenu } from 'soya-ui';
  import type { NavigationMenuItem } from 'soya-ui';

  let items = $derived<NavigationMenuItem[]>([
    {
      value: 'docs',
      label: '문서',
      href: '#docs',
      children: [
        {
          value: 'start',
          label: '시작하기',
          href: '#start',
          description: '설치와 첫 화면 구성을 확인합니다.',
        },
        {
          value: 'principles',
          label: '기초 원칙',
          href: '#principles',
          description: '토큰, 밀도, 접근성 원칙을 읽습니다.',
        },
      ],
    },
    {
      value: 'components',
      label: '컴포넌트',
      href: '#components',
      children: [
        {
          value: 'inputs',
          label: '입력과 선택',
          href: '#inputs',
          description: '폼과 선택 컴포넌트를 찾습니다.',
        },
        {
          value: 'navigation',
          label: '탐색',
          href: '#navigation',
          description: '경로와 메뉴 컴포넌트를 찾습니다.',
        },
      ],
    },
    {
      value: 'themes',
      label: '테마',
      href: '#themes',
      active: true,
    },
  ]);

  let openGroup = $state('');
  let selectedValue = $state('');
  let stateJson = $derived(JSON.stringify({ openGroup, selectedValue }, null, 2));
<\/script>

<div id="themes" class="navigation-example">
  <span id="docs" hidden></span>
  <span id="start" hidden></span>
  <span id="principles" hidden></span>
  <span id="components" hidden></span>
  <span id="inputs" hidden></span>
  <span id="navigation" hidden></span>
  <NavigationMenu
    bind:value={openGroup}
    {items}
    label={'주요 문서 탐색'}
    onselect={(link) => (selectedValue = link.value)}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .navigation-example {
    align-items: start;
    justify-content: start;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, NavigationMenu } from 'soya-ui';
  import type { NavigationMenuItem } from 'soya-ui';

  let items = $derived<NavigationMenuItem[]>([
    {
      value: 'docs',
      label: 'Docs',
      href: '#docs',
      children: [
        {
          value: 'start',
          label: 'Get started',
          href: '#start',
          description: 'Review installation and first-screen setup.',
        },
        {
          value: 'principles',
          label: 'Principles',
          href: '#principles',
          description: 'Read the token, density, and accessibility principles.',
        },
      ],
    },
    {
      value: 'components',
      label: 'Components',
      href: '#components',
      children: [
        {
          value: 'inputs',
          label: 'Inputs and selection',
          href: '#inputs',
          description: 'Browse form and selection components.',
        },
        {
          value: 'navigation',
          label: 'Navigation',
          href: '#navigation',
          description: 'Browse path and menu components.',
        },
      ],
    },
    {
      value: 'themes',
      label: 'Themes',
      href: '#themes',
      active: true,
    },
  ]);

  let openGroup = $state('');
  let selectedValue = $state('');
  let stateJson = $derived(JSON.stringify({ openGroup, selectedValue }, null, 2));
<\/script>

<div id="themes" class="navigation-example">
  <span id="docs" hidden></span>
  <span id="start" hidden></span>
  <span id="principles" hidden></span>
  <span id="components" hidden></span>
  <span id="inputs" hidden></span>
  <span id="navigation" hidden></span>
  <NavigationMenu
    bind:value={openGroup}
    {items}
    label={'Primary documentation navigation'}
    onselect={(link) => (selectedValue = link.value)}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .navigation-example {
    align-items: start;
    justify-content: start;
  }
</style>
`},pagination:{ko:`<script lang="ts">
  import { CodeBlock, Pagination } from 'soya-ui';
  let page = $state(3);
  let pageSize = $state(10);
  let stateJson = $derived(
    JSON.stringify({ page, pageSize, pageCount: Math.ceil(86 / pageSize) }, null, 2),
  );
<\/script>

<div class="example-stack">
  <Pagination
    bind:page
    count={86}
    {pageSize}
    label={'작업 페이지'}
    previousLabel={'이전 페이지'}
    nextLabel={'다음 페이지'}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Pagination } from 'soya-ui';
  let page = $state(3);
  let pageSize = $state(10);
  let stateJson = $derived(
    JSON.stringify({ page, pageSize, pageCount: Math.ceil(86 / pageSize) }, null, 2),
  );
<\/script>

<div class="example-stack">
  <Pagination
    bind:page
    count={86}
    {pageSize}
    label={'Job pages'}
    previousLabel={'Previous page'}
    nextLabel={'Next page'}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},popover:{ko:`<script lang="ts">
  import { Button, Checkbox, CodeBlock, Popover } from 'soya-ui';

  let open = $state(false);
  let onlyFailures = $state(true);
  let stateJson = $derived(JSON.stringify({ open, onlyFailures }, null, 2));
<\/script>

<Popover bind:open side="bottom" align="start" sideOffset={8}>
  {#snippet trigger(props)}
    <Button {...props} variant="secondary" class="example-long-label">
      {'검색 품질 검증 결과 필터 열기'}
    </Button>
  {/snippet}
  <div class="popover-content">
    <strong>{'표시할 실행 결과'}</strong>
    <p>
      {'실패한 검증만 남기거나 전체 실행을 다시 표시합니다.'}
    </p>
    <Checkbox bind:checked={onlyFailures}>{'실패한 검증만 표시'}</Checkbox>
    <Button size="sm" onclick={() => (open = false)}>{'적용하고 닫기'}</Button>
  </div>
</Popover>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .popover-content {
    display: grid;
    gap: var(--soya-space-3);
    min-inline-size: 0;
  }
  .popover-content p {
    max-inline-size: 28rem;
    margin: 0;
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }

  :global(.example-long-label) {
    min-inline-size: 0;
    max-inline-size: 100%;
    overflow-wrap: anywhere;
    white-space: normal;
  }
</style>
`,en:`<script lang="ts">
  import { Button, Checkbox, CodeBlock, Popover } from 'soya-ui';

  let open = $state(false);
  let onlyFailures = $state(true);
  let stateJson = $derived(JSON.stringify({ open, onlyFailures }, null, 2));
<\/script>

<Popover bind:open side="bottom" align="start" sideOffset={8}>
  {#snippet trigger(props)}
    <Button {...props} variant="secondary" class="example-long-label">
      {'Open validation filters'}
    </Button>
  {/snippet}
  <div class="popover-content">
    <strong>{'Results to display'}</strong>
    <p>
      {'Show only failed validations or restore every run.'}
    </p>
    <Checkbox bind:checked={onlyFailures}>{'Show failed validations only'}</Checkbox>
    <Button size="sm" onclick={() => (open = false)}>{'Apply and close'}</Button>
  </div>
</Popover>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .popover-content {
    display: grid;
    gap: var(--soya-space-3);
    min-inline-size: 0;
  }
  .popover-content p {
    max-inline-size: 28rem;
    margin: 0;
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }

  :global(.example-long-label) {
    min-inline-size: 0;
    max-inline-size: 100%;
    overflow-wrap: anywhere;
    white-space: normal;
  }
</style>
`},progress:{ko:`<script lang="ts">
  import { CodeBlock, Progress } from 'soya-ui';
  let value = $state<number | null>(62);
  let stateJson = $derived(JSON.stringify({ value, indeterminate: value === null }, null, 2));
<\/script>

<Progress
  {value}
  max={100}
  label={'검색 색인 검증 진행률'}
  showValue
  indeterminateLabel={'진행 중'}
  tone={value === null ? 'primary' : value >= 80 ? 'success' : 'primary'}
/>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
`,en:`<script lang="ts">
  import { CodeBlock, Progress } from 'soya-ui';
  let value = $state<number | null>(62);
  let stateJson = $derived(JSON.stringify({ value, indeterminate: value === null }, null, 2));
<\/script>

<Progress
  {value}
  max={100}
  label={'Search index validation progress'}
  showValue
  indeterminateLabel={'In progress'}
  tone={value === null ? 'primary' : value >= 80 ? 'success' : 'primary'}
/>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
`},"radio-group":{ko:`<script lang="ts">
  import { CodeBlock, RadioGroup } from 'soya-ui';

  let options = $derived([
    {
      value: 'summary',
      label: '요약만',
      description: '상태와 주요 수치만 내보냅니다.',
    },
    {
      value: 'diagnostics',
      label: '진단 포함',
      description: '검색 단계와 권한 판정 근거를 함께 내보냅니다.',
    },
    {
      value: 'full',
      label: '전체 진단과 기관별 권한 스냅샷을 포함하는 상세 보고서',
      description: '긴 레이블도 작은 화면 안에서 줄바꿈됩니다.',
    },
    {
      value: 'production',
      label: '운영 원문 포함',
      disabled: true,
      description: '예제 환경에서는 사용할 수 없습니다.',
    },
  ]);
  let value = $state('diagnostics');
  let stateJson = $derived(JSON.stringify({ value }, null, 2));
<\/script>

<div class="radio-example">
  <RadioGroup
    bind:value
    {options}
    label={'보고서 상세 수준'}
    description={'내보낼 예제 정보의 범위를 선택하세요.'}
    name="report-detail"
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .radio-example {
    inline-size: min(100%, 38rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, RadioGroup } from 'soya-ui';

  let options = $derived([
    {
      value: 'summary',
      label: 'Summary only',
      description: 'Export only status and key metrics.',
    },
    {
      value: 'diagnostics',
      label: 'Include diagnostics',
      description: 'Export search steps and permission evidence.',
    },
    {
      value: 'full',
      label: 'Detailed report with full diagnostics and organization permission snapshots',
      description: 'Long labels wrap on small screens.',
    },
    {
      value: 'production',
      label: 'Include production source',
      disabled: true,
      description: 'Unavailable in the sample environment.',
    },
  ]);
  let value = $state('diagnostics');
  let stateJson = $derived(JSON.stringify({ value }, null, 2));
<\/script>

<div class="radio-example">
  <RadioGroup
    bind:value
    {options}
    label={'Report detail level'}
    description={'Choose how much sample information to export.'}
    name="report-detail"
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .radio-example {
    inline-size: min(100%, 38rem);
    min-inline-size: 0;
  }
</style>
`},"range-input":{ko:`<script lang="ts">
  import { CodeBlock, RangeInput } from 'soya-ui';

  let value = $state(60);
  let stateJson = $derived(JSON.stringify({ value }, null, 2));
<\/script>

<RangeInput
  class="range-input-example"
  bind:value
  label={'완료율'}
  name="completion"
  min={0}
  max={100}
  step={5}
  formatValue={(current) => \`\${current}%\`}
/>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style>
  :global(.range-input-example) {
    inline-size: min(100%, 32rem);
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, RangeInput } from 'soya-ui';

  let value = $state(60);
  let stateJson = $derived(JSON.stringify({ value }, null, 2));
<\/script>

<RangeInput
  class="range-input-example"
  bind:value
  label={'Completion'}
  name="completion"
  min={0}
  max={100}
  step={5}
  formatValue={(current) => \`\${current}%\`}
/>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style>
  :global(.range-input-example) {
    inline-size: min(100%, 32rem);
  }
</style>
`},resizable:{ko:`<script lang="ts">
  import { Button, CodeBlock, Resizable } from 'soya-ui';
  let size = $state(42);
  let disabled = $state(false);
  let selectedJob = $state('search-index');
  let jobs = $derived([
    {
      value: 'search-index',
      label: '검색 색인 검증',
      description: '검색 색인의 문서 수와 권한 필터 결과를 확인합니다.',
    },
    {
      value: 'permission-snapshot',
      label: '기관별 권한 스냅샷 비교',
      description: '기관별 권한 차이와 긴 프로젝트 경로를 비교합니다.',
    },
  ]);
  let selectedJobDetails = $derived(jobs.find((job) => job.value === selectedJob) ?? jobs[0]!);
  let stateJson = $derived(
    JSON.stringify({ size: Math.round(size), disabled, selectedJob }, null, 2),
  );
<\/script>

{#snippet primary()}
  <section class="pane-content">
    <strong>{'작업 목록'}</strong>
    {#each jobs as job (job.value)}
      <Button
        variant="ghost"
        aria-pressed={selectedJob === job.value}
        onclick={() => (selectedJob = job.value)}>{job.label}</Button
      >
    {/each}
  </section>
{/snippet}

{#snippet secondary()}
  <section class="pane-content">
    <strong>{'선택한 작업'}</strong>
    <p><b>{selectedJobDetails.label}</b></p>
    <p>{selectedJobDetails.description}</p>
  </section>
{/snippet}

<Resizable
  bind:size
  {primary}
  {secondary}
  primaryLabel={'작업 목록 너비'}
  secondaryLabel={'선택한 작업 상세'}
  min={28}
  max={72}
  step={4}
  {disabled}
/>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .pane-content {
    display: grid;
    gap: var(--soya-space-2);
    min-inline-size: 0;
    padding: var(--soya-space-4);
  }
  .pane-content :global(button) {
    min-inline-size: 0;
    padding: var(--soya-space-2);
    text-align: start;
    overflow-wrap: anywhere;
  }
  .pane-content :global(button[aria-pressed='true']) {
    background: var(--soya-surface-hover);
  }
  .pane-content p {
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }
</style>
`,en:`<script lang="ts">
  import { Button, CodeBlock, Resizable } from 'soya-ui';
  let size = $state(42);
  let disabled = $state(false);
  let selectedJob = $state('search-index');
  let jobs = $derived([
    {
      value: 'search-index',
      label: 'Search index validation',
      description: 'Review the document count and permission filters for the search index.',
    },
    {
      value: 'permission-snapshot',
      label: 'Compare organization permission snapshots',
      description: 'Compare organization permission differences and long project paths.',
    },
  ]);
  let selectedJobDetails = $derived(jobs.find((job) => job.value === selectedJob) ?? jobs[0]!);
  let stateJson = $derived(
    JSON.stringify({ size: Math.round(size), disabled, selectedJob }, null, 2),
  );
<\/script>

{#snippet primary()}
  <section class="pane-content">
    <strong>{'Job list'}</strong>
    {#each jobs as job (job.value)}
      <Button
        variant="ghost"
        aria-pressed={selectedJob === job.value}
        onclick={() => (selectedJob = job.value)}>{job.label}</Button
      >
    {/each}
  </section>
{/snippet}

{#snippet secondary()}
  <section class="pane-content">
    <strong>{'Selected job'}</strong>
    <p><b>{selectedJobDetails.label}</b></p>
    <p>{selectedJobDetails.description}</p>
  </section>
{/snippet}

<Resizable
  bind:size
  {primary}
  {secondary}
  primaryLabel={'Job list width'}
  secondaryLabel={'Selected job details'}
  min={28}
  max={72}
  step={4}
  {disabled}
/>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .pane-content {
    display: grid;
    gap: var(--soya-space-2);
    min-inline-size: 0;
    padding: var(--soya-space-4);
  }
  .pane-content :global(button) {
    min-inline-size: 0;
    padding: var(--soya-space-2);
    text-align: start;
    overflow-wrap: anywhere;
  }
  .pane-content :global(button[aria-pressed='true']) {
    background: var(--soya-surface-hover);
  }
  .pane-content p {
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }
</style>
`},"scroll-area":{ko:`<script lang="ts">
  import { ScrollArea } from 'soya-ui';

  let logs = $derived(
    Array.from({ length: 18 }, (_, index) => ({
      id: index + 1,
      level: index % 5 === 0 ? 'WARN' : 'INFO',
      message:
        index % 4 === 0
          ? '기관별 권한 스냅샷과 검색 결과의 매우 긴 식별자 경로를 비교했습니다.'
          : '예제 단계가 정상적으로 완료되었습니다.',
    })),
  );
<\/script>

<div class="example-stack scroll-example">
  <ScrollArea label={'실행 로그'} orientation="both" maxBlockSize="16rem" maxInlineSize="100%">
    <ol>
      {#each logs as log (log.id)}
        <li>
          <code>{String(log.id).padStart(2, '0')} {log.level}</code><span>{log.message}</span>
        </li>
      {/each}
    </ol>
  </ScrollArea>
</div>

<style lang="scss">
  .scroll-example {
    inline-size: min(100%, 42rem);
  }
  ol {
    display: grid;
    gap: var(--soya-space-2);
    min-inline-size: 38rem;
    margin: 0;
    padding: var(--soya-space-4);
  }
  li {
    display: grid;
    grid-template-columns: 5rem minmax(0, 1fr);
    gap: var(--soya-space-3);
  }
  code {
    color: var(--soya-primary);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { ScrollArea } from 'soya-ui';

  let logs = $derived(
    Array.from({ length: 18 }, (_, index) => ({
      id: index + 1,
      level: index % 5 === 0 ? 'WARN' : 'INFO',
      message:
        index % 4 === 0
          ? 'Compared organization permission snapshots with a very long search result identifier path.'
          : 'The sample step completed successfully.',
    })),
  );
<\/script>

<div class="example-stack scroll-example">
  <ScrollArea label={'Execution log'} orientation="both" maxBlockSize="16rem" maxInlineSize="100%">
    <ol>
      {#each logs as log (log.id)}
        <li>
          <code>{String(log.id).padStart(2, '0')} {log.level}</code><span>{log.message}</span>
        </li>
      {/each}
    </ol>
  </ScrollArea>
</div>

<style lang="scss">
  .scroll-example {
    inline-size: min(100%, 42rem);
  }
  ol {
    display: grid;
    gap: var(--soya-space-2);
    min-inline-size: 38rem;
    margin: 0;
    padding: var(--soya-space-4);
  }
  li {
    display: grid;
    grid-template-columns: 5rem minmax(0, 1fr);
    gap: var(--soya-space-3);
  }
  code {
    color: var(--soya-primary);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"scroll-top":{ko:`<script lang="ts">
  import { CodeBlock, ScrollTop } from 'soya-ui';

  let target: HTMLElement | null = $state(null);
  let scrollTop = $state(0);
  const threshold = 80;
  let results = $derived(Array.from({ length: 16 }, (_, index) => \`\${index + 1}번째 검색 결과\`));
<\/script>

<div class="scroll-top-example">
  <!-- svelte-ignore a11y_no_noninteractive_tabindex (the scroll region is keyboard-scrollable) -->
  <section
    bind:this={target}
    onscroll={(event) => (scrollTop = event.currentTarget.scrollTop)}
    class="scroll-top-results"
    tabindex="0"
    aria-label={'스크롤 가능한 검색 결과'}
  >
    <h3>{'검색 결과'}</h3>
    <ol>
      {#each results as result, index (\`\${index}-\${result}\`)}
        <li>{result}</li>
      {/each}
    </ol>
  </section>
  <ScrollTop
    {target}
    position="absolute"
    {threshold}
    label={'검색 결과 맨 위로 이동'}
    blockOffset="var(--soya-space-3)"
    inlineOffset="var(--soya-space-3)"
  />
</div>

<CodeBlock
  code={JSON.stringify({ scrollTop, threshold }, null, 2)}
  language="json"
  label={'현재 상태'}
  copy={false}
/>

<style lang="scss">
  .scroll-top-example {
    position: relative;
    inline-size: min(100%, 36rem);
    min-inline-size: 0;
  }
  .scroll-top-results {
    max-block-size: 16rem;
    padding: var(--soya-space-4);
    overflow: auto;
    overscroll-behavior: contain;
    border: 1px solid var(--soya-border);
    border-radius: var(--soya-radius-md);
    background: var(--soya-surface);
  }
  .scroll-top-results:focus-visible {
    outline: 3px solid
      color-mix(in srgb, var(--soya-focus-ring-color, var(--soya-focus)) 32%, transparent);
    outline-offset: 2px;
  }
  .scroll-top-results h3 {
    margin-block: 0 var(--soya-space-3);
  }
  .scroll-top-results ol {
    display: grid;
    gap: var(--soya-space-3);
    margin: 0;
    padding-inline-start: var(--soya-space-6);
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, ScrollTop } from 'soya-ui';

  let target: HTMLElement | null = $state(null);
  let scrollTop = $state(0);
  const threshold = 80;
  let results = $derived(Array.from({ length: 16 }, (_, index) => \`Search result \${index + 1}\`));
<\/script>

<div class="scroll-top-example">
  <!-- svelte-ignore a11y_no_noninteractive_tabindex (the scroll region is keyboard-scrollable) -->
  <section
    bind:this={target}
    onscroll={(event) => (scrollTop = event.currentTarget.scrollTop)}
    class="scroll-top-results"
    tabindex="0"
    aria-label={'Scrollable search results'}
  >
    <h3>{'Search results'}</h3>
    <ol>
      {#each results as result, index (\`\${index}-\${result}\`)}
        <li>{result}</li>
      {/each}
    </ol>
  </section>
  <ScrollTop
    {target}
    position="absolute"
    {threshold}
    label={'Back to the top of search results'}
    blockOffset="var(--soya-space-3)"
    inlineOffset="var(--soya-space-3)"
  />
</div>

<CodeBlock
  code={JSON.stringify({ scrollTop, threshold }, null, 2)}
  language="json"
  label={'Current state'}
  copy={false}
/>

<style lang="scss">
  .scroll-top-example {
    position: relative;
    inline-size: min(100%, 36rem);
    min-inline-size: 0;
  }
  .scroll-top-results {
    max-block-size: 16rem;
    padding: var(--soya-space-4);
    overflow: auto;
    overscroll-behavior: contain;
    border: 1px solid var(--soya-border);
    border-radius: var(--soya-radius-md);
    background: var(--soya-surface);
  }
  .scroll-top-results:focus-visible {
    outline: 3px solid
      color-mix(in srgb, var(--soya-focus-ring-color, var(--soya-focus)) 32%, transparent);
    outline-offset: 2px;
  }
  .scroll-top-results h3 {
    margin-block: 0 var(--soya-space-3);
  }
  .scroll-top-results ol {
    display: grid;
    gap: var(--soya-space-3);
    margin: 0;
    padding-inline-start: var(--soya-space-6);
  }
</style>
`},select:{ko:`<script lang="ts">
  import { CodeBlock, Field, Select } from 'soya-ui';
  let options = $derived([
    { value: 'all', label: '전체 상태' },
    {
      value: 'success',
      label: '성공',
      description: '완료된 작업',
    },
    { value: 'running', label: '실행 중' },
    { value: 'error', label: '오류' },
  ]);
  let value = $state('all');
  let invalid = $state(false);
  let stateJson = $derived(JSON.stringify({ value, invalid }, null, 2));
<\/script>

<div class="example-stack">
  <Field
    label={'상태'}
    description={'작업 상태로 결과를 좁힙니다.'}
    error={invalid ? '상태를 확인하세요.' : undefined}
    >{#snippet children({ id, describedBy, invalid: fieldInvalid })}<Select
        {id}
        aria-describedby={describedBy}
        aria-label={'작업 상태'}
        bind:value
        {options}
        invalid={fieldInvalid}
      />{/snippet}</Field
  >
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Field, Select } from 'soya-ui';
  let options = $derived([
    { value: 'all', label: 'All statuses' },
    {
      value: 'success',
      label: 'Success',
      description: 'Completed jobs',
    },
    { value: 'running', label: 'Running' },
    { value: 'error', label: 'Error' },
  ]);
  let value = $state('all');
  let invalid = $state(false);
  let stateJson = $derived(JSON.stringify({ value, invalid }, null, 2));
<\/script>

<div class="example-stack">
  <Field
    label={'Status'}
    description={'Narrow the results by job status.'}
    error={invalid ? 'Check the selected status.' : undefined}
    >{#snippet children({ id, describedBy, invalid: fieldInvalid })}<Select
        {id}
        aria-describedby={describedBy}
        aria-label={'Job status'}
        bind:value
        {options}
        invalid={fieldInvalid}
      />{/snippet}</Field
  >
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},separator:{ko:`<script lang="ts">
  import { CodeBlock, Separator } from 'soya-ui';
  let orientation = $state<'horizontal' | 'vertical'>('horizontal');
  let stateJson = $derived(JSON.stringify({ orientation }, null, 2));
<\/script>

<div class="separator-example" class:vertical={orientation === 'vertical'}>
  <section>
    <strong>{'검색 조건'}</strong>
    <p>
      {'기간, 담당자, 상태를 조합해 결과 범위를 정합니다.'}
    </p>
  </section>
  <Separator {orientation} />
  <section>
    <strong>{'검색 결과'}</strong>
    <p>
      {'조건과 구분된 영역에서 일치한 작업과 처리 상태를 확인합니다.'}
    </p>
  </section>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .separator-example {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--soya-space-4);
    inline-size: min(100%, 36rem);
    min-inline-size: 0;
  }
  .separator-example section {
    display: grid;
    align-content: start;
    gap: var(--soya-space-2);
    min-inline-size: 0;
  }
  .separator-example p {
    margin: 0;
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Separator } from 'soya-ui';
  let orientation = $state<'horizontal' | 'vertical'>('horizontal');
  let stateJson = $derived(JSON.stringify({ orientation }, null, 2));
<\/script>

<div class="separator-example" class:vertical={orientation === 'vertical'}>
  <section>
    <strong>{'Search criteria'}</strong>
    <p>
      {'Combine date, owner, and status to define the result set.'}
    </p>
  </section>
  <Separator {orientation} />
  <section>
    <strong>{'Search results'}</strong>
    <p>
      {'Review matching jobs and processing states in a visibly separated region.'}
    </p>
  </section>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .separator-example {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--soya-space-4);
    inline-size: min(100%, 36rem);
    min-inline-size: 0;
  }
  .separator-example section {
    display: grid;
    align-content: start;
    gap: var(--soya-space-2);
    min-inline-size: 0;
  }
  .separator-example p {
    margin: 0;
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }
</style>
`},sheet:{ko:`<script lang="ts">
  import { Button, CodeBlock, Combobox, Field, Sheet } from 'soya-ui';

  let projects = $derived([
    { value: 'search', label: '통합 검색 품질 평가' },
    { value: 'index', label: '전체 색인 정합성 확인' },
    {
      value: 'enterprise',
      label: '엔터프라이즈 기관별 사용자 권한 동기화 및 검색 결과 비교',
    },
  ]);
  let open = $state(false);
  let project = $state('search');
  let appliedProject = $state('');
  let stateJson = $derived(JSON.stringify({ open, project, appliedProject }, null, 2));

  function applyFilters() {
    appliedProject = project;
    open = false;
  }
<\/script>

<Sheet
  bind:open
  side="right"
  closeLabel={'닫기'}
  title={'검색 결과의 고급 필터와 기관별 권한 조건'}
  description={'시트 안에서 검색 가능한 콤보박스를 열어 오버레이 계층과 포커스 이동을 확인합니다.'}
>
  {#snippet trigger(props)}
    <Button {...props} variant="secondary" class="example-long-label">
      {'고급 검색 필터와 권한 조건 열기'}
    </Button>
  {/snippet}
  <div class="sheet-fields">
    <Field label={'검증 프로젝트'} description={'시트 위에 콤보박스 목록이 열립니다.'}>
      {#snippet children({ id, describedBy, invalid })}
        <Combobox
          {id}
          aria-describedby={describedBy}
          aria-label={'검증 프로젝트 검색'}
          bind:value={project}
          options={projects}
          triggerLabel={'프로젝트 선택 열기'}
          searchPlaceholder={'프로젝트 검색'}
          emptyLabel={'프로젝트를 찾지 못했습니다.'}
          {invalid}
        />
      {/snippet}
    </Field>
    <p>
      {'선택한 프로젝트의 성공, 실행 중, 오류 상태를 모두 비교합니다.'}
    </p>
  </div>
  {#snippet footer()}
    <Button variant="secondary" onclick={() => (open = false)}>{'취소'}</Button>
    <Button onclick={applyFilters}>{'필터 적용'}</Button>
  {/snippet}
</Sheet>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .sheet-fields {
    display: grid;
    gap: var(--soya-space-6);
    min-inline-size: 0;
  }
  .sheet-fields p {
    margin: 0;
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }

  :global(.example-long-label) {
    min-inline-size: 0;
    max-inline-size: 100%;
    overflow-wrap: anywhere;
    white-space: normal;
  }
</style>
`,en:`<script lang="ts">
  import { Button, CodeBlock, Combobox, Field, Sheet } from 'soya-ui';

  let projects = $derived([
    { value: 'search', label: 'Unified search quality evaluation' },
    { value: 'index', label: 'Full index consistency check' },
    {
      value: 'enterprise',
      label: 'Enterprise user permission synchronization and search result comparison',
    },
  ]);
  let open = $state(false);
  let project = $state('search');
  let appliedProject = $state('');
  let stateJson = $derived(JSON.stringify({ open, project, appliedProject }, null, 2));

  function applyFilters() {
    appliedProject = project;
    open = false;
  }
<\/script>

<Sheet
  bind:open
  side="right"
  closeLabel={'Close'}
  title={'Advanced search filters and organization permission criteria'}
  description={'Open a searchable Combobox in the Sheet to inspect overlay stacking and focus movement.'}
>
  {#snippet trigger(props)}
    <Button {...props} variant="secondary" class="example-long-label">
      {'Open advanced search and permission filters'}
    </Button>
  {/snippet}
  <div class="sheet-fields">
    <Field label={'Validation project'} description={'The Combobox popup opens above the Sheet.'}>
      {#snippet children({ id, describedBy, invalid })}
        <Combobox
          {id}
          aria-describedby={describedBy}
          aria-label={'Search validation projects in the Sheet'}
          bind:value={project}
          options={projects}
          triggerLabel={'Open project selection'}
          searchPlaceholder={'Search projects'}
          emptyLabel={'No projects found.'}
          {invalid}
        />
      {/snippet}
    </Field>
    <p>
      {'Compare success, running, and error states for the selected project.'}
    </p>
  </div>
  {#snippet footer()}
    <Button variant="secondary" onclick={() => (open = false)}>{'Cancel'}</Button>
    <Button onclick={applyFilters}>{'Apply filters'}</Button>
  {/snippet}
</Sheet>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .sheet-fields {
    display: grid;
    gap: var(--soya-space-6);
    min-inline-size: 0;
  }
  .sheet-fields p {
    margin: 0;
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }

  :global(.example-long-label) {
    min-inline-size: 0;
    max-inline-size: 100%;
    overflow-wrap: anywhere;
    white-space: normal;
  }
</style>
`},sidebar:{ko:`<script lang="ts">
  import { Button, CodeBlock, Icon, Sidebar } from 'soya-ui';
  import type { SidebarSnippetState } from 'soya-ui';
  let collapsed = $state(false);
  let open = $state(false);
  let section = $state('overview');
  let sections = $derived([
    { value: 'overview', label: '개요' },
    { value: 'runs', label: '실행 기록' },
    {
      value: 'permissions',
      label: '매우 긴 기관별 권한 비교 결과',
    },
  ]);
  let stateJson = $derived(JSON.stringify({ collapsed, open, section }, null, 2));
<\/script>

{#snippet navigation({ collapsed: compact }: SidebarSnippetState)}
  <nav class="example-navigation" aria-label={'예제 작업 공간'}>
    {#each sections as item (item.value)}
      <Button
        variant="ghost"
        class={compact ? 'sidebar-nav-action is-compact' : 'sidebar-nav-action'}
        aria-pressed={section === item.value}
        aria-label={compact ? item.label : undefined}
        title={compact ? item.label : undefined}
        onclick={() => (section = item.value)}
      >
        <span class="sidebar-nav-icon" aria-hidden="true">
          <Icon
            name={item.value === 'overview'
              ? 'grid'
              : item.value === 'runs'
                ? 'history'
                : 'shield-check'}
            size="1rem"
          />
        </span>
        {#if !compact}<span class="sidebar-nav-label">{item.label}</span>{/if}
      </Button>
    {/each}
  </nav>
{/snippet}

{#snippet footer({ collapsed: compact }: SidebarSnippetState)}
  <small
    class={compact ? 'sidebar-footer-label is-compact' : 'sidebar-footer-label'}
    aria-label={compact ? 'Soya 예제 작업 공간 버전 0.1' : undefined}
    >{compact ? 'v0.1' : 'Soya 예제 작업 공간 · v0.1'}</small
  >
{/snippet}

<div class="sidebar-example">
  <Sidebar
    bind:collapsed
    bind:open
    title={'검색 품질 작업 공간'}
    description={'긴 프로젝트 이름과 도구 탐색 영역 예제'}
    {navigation}
    {footer}
    collapseLabel={'사이드바 축소'}
    expandLabel={'사이드바 확장'}
    mobileTriggerLabel={'예제 작업 공간 메뉴 열기'}
    mobileCloseLabel={'닫기'}
  />

  <CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
</div>

<style lang="scss">
  .sidebar-example {
    inline-size: 100%;
  }
  .example-navigation {
    display: grid;
    gap: var(--soya-space-1);
    min-inline-size: 0;
  }
  .example-navigation :global(button) {
    display: flex;
    inline-size: 100%;
    justify-content: flex-start;
    gap: var(--soya-space-2);
    min-inline-size: 0;
    padding: var(--soya-space-2);
    text-align: start;
  }
  .example-navigation :global(button.is-compact) {
    justify-content: center;
    padding-inline: 0;
  }
  .example-navigation :global(button[aria-pressed='true']) {
    background: var(--soya-surface-hover);
  }
  .sidebar-nav-icon {
    display: inline-flex;
    flex: 0 0 auto;
    inline-size: 1rem;
    block-size: 1rem;
  }
  .sidebar-nav-label {
    min-inline-size: 0;
    overflow-wrap: anywhere;
  }
</style>
`,en:`<script lang="ts">
  import { Button, CodeBlock, Icon, Sidebar } from 'soya-ui';
  import type { SidebarSnippetState } from 'soya-ui';
  let collapsed = $state(false);
  let open = $state(false);
  let section = $state('overview');
  let sections = $derived([
    { value: 'overview', label: 'Overview' },
    { value: 'runs', label: 'Run history' },
    {
      value: 'permissions',
      label: 'Very long organization permission comparison results',
    },
  ]);
  let stateJson = $derived(JSON.stringify({ collapsed, open, section }, null, 2));
<\/script>

{#snippet navigation({ collapsed: compact }: SidebarSnippetState)}
  <nav class="example-navigation" aria-label={'Sample workspace'}>
    {#each sections as item (item.value)}
      <Button
        variant="ghost"
        class={compact ? 'sidebar-nav-action is-compact' : 'sidebar-nav-action'}
        aria-pressed={section === item.value}
        aria-label={compact ? item.label : undefined}
        title={compact ? item.label : undefined}
        onclick={() => (section = item.value)}
      >
        <span class="sidebar-nav-icon" aria-hidden="true">
          <Icon
            name={item.value === 'overview'
              ? 'grid'
              : item.value === 'runs'
                ? 'history'
                : 'shield-check'}
            size="1rem"
          />
        </span>
        {#if !compact}<span class="sidebar-nav-label">{item.label}</span>{/if}
      </Button>
    {/each}
  </nav>
{/snippet}

{#snippet footer({ collapsed: compact }: SidebarSnippetState)}
  <small
    class={compact ? 'sidebar-footer-label is-compact' : 'sidebar-footer-label'}
    aria-label={compact ? 'Soya sample workspace version 0.1' : undefined}
    >{compact ? 'v0.1' : 'Soya sample workspace · v0.1'}</small
  >
{/snippet}

<div class="sidebar-example">
  <Sidebar
    bind:collapsed
    bind:open
    title={'Search quality workspace'}
    description={'Long project name and tool navigation example'}
    {navigation}
    {footer}
    collapseLabel={'Collapse sidebar'}
    expandLabel={'Expand sidebar'}
    mobileTriggerLabel={'Open sample workspace menu'}
    mobileCloseLabel={'Close'}
  />

  <CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
</div>

<style lang="scss">
  .sidebar-example {
    inline-size: 100%;
  }
  .example-navigation {
    display: grid;
    gap: var(--soya-space-1);
    min-inline-size: 0;
  }
  .example-navigation :global(button) {
    display: flex;
    inline-size: 100%;
    justify-content: flex-start;
    gap: var(--soya-space-2);
    min-inline-size: 0;
    padding: var(--soya-space-2);
    text-align: start;
  }
  .example-navigation :global(button.is-compact) {
    justify-content: center;
    padding-inline: 0;
  }
  .example-navigation :global(button[aria-pressed='true']) {
    background: var(--soya-surface-hover);
  }
  .sidebar-nav-icon {
    display: inline-flex;
    flex: 0 0 auto;
    inline-size: 1rem;
    block-size: 1rem;
  }
  .sidebar-nav-label {
    min-inline-size: 0;
    overflow-wrap: anywhere;
  }
</style>
`},skeleton:{ko:`<script lang="ts">
  import { CodeBlock, Skeleton } from 'soya-ui';
  let lines = $state(3);
  let stateJson = $derived(JSON.stringify({ lines }, null, 2));
<\/script>

<Skeleton class="skeleton-example" {lines} label={'결과를 불러오는 중'} />

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style>
  :global(.skeleton-example) {
    inline-size: min(100%, 32rem);
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Skeleton } from 'soya-ui';
  let lines = $state(3);
  let stateJson = $derived(JSON.stringify({ lines }, null, 2));
<\/script>

<Skeleton class="skeleton-example" {lines} label={'Loading results'} />

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style>
  :global(.skeleton-example) {
    inline-size: min(100%, 32rem);
  }
</style>
`},spinner:{ko:`<script lang="ts">
  import { Spinner } from 'soya-ui';
<\/script>

<div class="example-stack spinner-example">
  <div class="example-row">
    <Spinner size="sm" label={'작은 예제 데이터 로딩'} />
    <Spinner size="md" label={'검색 결과를 불러오는 중'} />
    <Spinner size="lg" label={'전체 색인 상태를 확인하는 중'} />
  </div>
  <div class="loading-line">
    <Spinner decorative size="sm" />
    <span>{'기관별 권한 스냅샷과 긴 프로젝트 이름을 확인하는 중...'}</span>
  </div>
</div>

<style lang="scss">
  .spinner-example,
  .loading-line {
    min-inline-size: 0;
  }
  .loading-line {
    display: flex;
    align-items: center;
    gap: var(--soya-space-2);
  }
  .loading-line span {
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
  }
  .example-row > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
</style>
`,en:`<script lang="ts">
  import { Spinner } from 'soya-ui';
<\/script>

<div class="example-stack spinner-example">
  <div class="example-row">
    <Spinner size="sm" label={'Loading a small sample'} />
    <Spinner size="md" label={'Loading search results'} />
    <Spinner size="lg" label={'Checking full index status'} />
  </div>
  <div class="loading-line">
    <Spinner decorative size="sm" />
    <span>{'Checking organization permission snapshots and long project names...'}</span>
  </div>
</div>

<style lang="scss">
  .spinner-example,
  .loading-line {
    min-inline-size: 0;
  }
  .loading-line {
    display: flex;
    align-items: center;
    gap: var(--soya-space-2);
  }
  .loading-line span {
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
  }
  .example-row > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
</style>
`},switch:{ko:`<script lang="ts">
  import { CodeBlock, Switch } from 'soya-ui';

  let checked = $state(false);
  let stateJson = $derived(JSON.stringify({ checked }, null, 2));
<\/script>

<Switch bind:checked description={'켜면 30초마다 결과를 갱신합니다.'}>{'자동 새로고침'}</Switch>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
`,en:`<script lang="ts">
  import { CodeBlock, Switch } from 'soya-ui';

  let checked = $state(false);
  let stateJson = $derived(JSON.stringify({ checked }, null, 2));
<\/script>

<Switch bind:checked description={'Refresh results every 30 seconds when enabled.'}
  >{'Automatic refresh'}</Switch
>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
`},table:{ko:`<script lang="ts">
  import { CodeBlock, Table } from 'soya-ui';
  import type { TableColumn, TableRow, TableSort } from 'soya-ui';

  let rows = $derived<TableRow[]>([
    {
      id: '1048',
      name: '검색 색인 검증',
      status: '성공',
      records: 1240,
    },
    {
      id: '1047',
      name: '권한 스냅샷',
      status: '실행 중',
      records: 392,
    },
    {
      id: '1045',
      name: '메타 정합성',
      status: '오류',
      records: 0,
    },
  ]);
  let columns = $derived<TableColumn[]>([
    { key: 'name', label: '작업', sortable: true },
    { key: 'status', label: '상태' },
    { key: 'records', label: '처리 건수', align: 'end', sortable: true },
  ]);
  let selected = $state<string[]>([]);
  let sort = $state<TableSort>({ key: 'name', direction: 'asc' });
  let stateJson = $derived(JSON.stringify({ selected, sort }, null, 2));
<\/script>

<div class="table-example">
  <Table
    {rows}
    {columns}
    rowKey={(row) => String(row.id)}
    selectable
    bind:selected
    {sort}
    onsort={(next) => (sort = next)}
    caption={'최근 작업'}
    selectColumnLabel={'행 선택'}
    rowSelectLabel={(row, index) => \`\${index + 1}번째 행 선택\`}
    emptyLabel={'표시할 작업이 없습니다.'}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style>
  .table-example {
    inline-size: min(100%, 48rem);
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Table } from 'soya-ui';
  import type { TableColumn, TableRow, TableSort } from 'soya-ui';

  let rows = $derived<TableRow[]>([
    {
      id: '1048',
      name: 'Search index validation',
      status: 'Success',
      records: 1240,
    },
    {
      id: '1047',
      name: 'Permission snapshot',
      status: 'Running',
      records: 392,
    },
    {
      id: '1045',
      name: 'Metadata consistency',
      status: 'Error',
      records: 0,
    },
  ]);
  let columns = $derived<TableColumn[]>([
    { key: 'name', label: 'Job', sortable: true },
    { key: 'status', label: 'Status' },
    { key: 'records', label: 'Records', align: 'end', sortable: true },
  ]);
  let selected = $state<string[]>([]);
  let sort = $state<TableSort>({ key: 'name', direction: 'asc' });
  let stateJson = $derived(JSON.stringify({ selected, sort }, null, 2));
<\/script>

<div class="table-example">
  <Table
    {rows}
    {columns}
    rowKey={(row) => String(row.id)}
    selectable
    bind:selected
    {sort}
    onsort={(next) => (sort = next)}
    caption={'Recent jobs'}
    selectColumnLabel={'Select rows'}
    rowSelectLabel={(row, index) => \`Select row \${index + 1}\`}
    emptyLabel={'No jobs to display.'}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style>
  .table-example {
    inline-size: min(100%, 48rem);
  }
</style>
`},tabs:{ko:`<script lang="ts">
  import { Badge, CodeBlock, Tabs } from 'soya-ui';
  import type { CodeTokenLine } from 'soya-ui';

  let value = $state('summary');
  let stateJson = $derived(JSON.stringify({ value }, null, 2));
  const rawSource = JSON.stringify({ selected: 6, success: 5 }, null, 2);
  let highlightedLines = $state<CodeTokenLine[] | undefined>(undefined);

  $effect(() => {
    let current = true;
    void import('soya-ui/code-block/shiki')
      .then(async ({ highlightCode }) => {
        const lines = await highlightCode(rawSource, 'json');
        if (current) highlightedLines = lines;
      })
      .catch(() => {
        if (current) highlightedLines = undefined;
      });
    return () => {
      current = false;
    };
  });
<\/script>

{#snippet summary()}<p>
    {'선택된 작업 6건 중 5건이 성공했습니다.'}
  </p>{/snippet}
{#snippet diagnostics()}<p>
    <Badge tone="warning">{'경고 1건'}</Badge>
    {'오래 걸린 색인 단계를 확인하세요.'}
  </p>{/snippet}
{#snippet raw()}<CodeBlock
    code={rawSource}
    language="json"
    label={'원본 결과'}
    copyLabel={'원본 결과 복사'}
    copiedLabel={'원본 결과 복사됨'}
    copyErrorLabel={'원본 결과를 복사할 수 없음'}
    {highlightedLines}
  />{/snippet}

<Tabs
  class="tabs-example"
  bind:value
  label={'작업 결과 탭'}
  items={[
    { value: 'summary', label: '요약', content: summary },
    { value: 'diagnostics', label: '진단', content: diagnostics },
    { value: 'raw', label: '원본', content: raw },
  ]}
/>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style>
  :global(.tabs-example .soya-tabs__content) {
    padding-block-start: var(--soya-space-4);
  }
  :global(.tabs-example .soya-tabs__content > :first-child) {
    margin-block-start: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Badge, CodeBlock, Tabs } from 'soya-ui';
  import type { CodeTokenLine } from 'soya-ui';

  let value = $state('summary');
  let stateJson = $derived(JSON.stringify({ value }, null, 2));
  const rawSource = JSON.stringify({ selected: 6, success: 5 }, null, 2);
  let highlightedLines = $state<CodeTokenLine[] | undefined>(undefined);

  $effect(() => {
    let current = true;
    void import('soya-ui/code-block/shiki')
      .then(async ({ highlightCode }) => {
        const lines = await highlightCode(rawSource, 'json');
        if (current) highlightedLines = lines;
      })
      .catch(() => {
        if (current) highlightedLines = undefined;
      });
    return () => {
      current = false;
    };
  });
<\/script>

{#snippet summary()}<p>
    {'Five of six selected jobs succeeded.'}
  </p>{/snippet}
{#snippet diagnostics()}<p>
    <Badge tone="warning">{'1 warning'}</Badge>
    {'Review the slow indexing step.'}
  </p>{/snippet}
{#snippet raw()}<CodeBlock
    code={rawSource}
    language="json"
    label={'Raw result'}
    copyLabel={'Copy raw result'}
    copiedLabel={'Raw result copied'}
    copyErrorLabel={'Unable to copy raw result'}
    {highlightedLines}
  />{/snippet}

<Tabs
  class="tabs-example"
  bind:value
  label={'Job result tabs'}
  items={[
    { value: 'summary', label: 'Summary', content: summary },
    { value: 'diagnostics', label: 'Diagnostics', content: diagnostics },
    { value: 'raw', label: 'Raw', content: raw },
  ]}
/>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style>
  :global(.tabs-example .soya-tabs__content) {
    padding-block-start: var(--soya-space-4);
  }
  :global(.tabs-example .soya-tabs__content > :first-child) {
    margin-block-start: 0;
  }
</style>
`},"tag-input":{ko:`<script lang="ts">
  import { CodeBlock, TagInput } from 'soya-ui';
  let values = $state(['검색', '권한']);
  let disabled = $state(false);
  let readonly = $state(false);
  let stateJson = $derived(JSON.stringify({ values, disabled, readonly }, null, 2));
<\/script>

<div class="example-stack">
  <TagInput
    bind:values
    label={'검색 결과에 적용할 태그'}
    name="tags"
    placeholder={'태그를 입력하고 Enter'}
    removeLabel={(tag) => \`\${tag} 삭제\`}
    {disabled}
    {readonly}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, TagInput } from 'soya-ui';
  let values = $state(['Search', 'Permissions']);
  let disabled = $state(false);
  let readonly = $state(false);
  let stateJson = $derived(JSON.stringify({ values, disabled, readonly }, null, 2));
<\/script>

<div class="example-stack">
  <TagInput
    bind:values
    label={'Tags applied to search results'}
    name="tags"
    placeholder={'Enter a tag and press Enter'}
    removeLabel={(tag) => \`Remove \${tag}\`}
    {disabled}
    {readonly}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},textarea:{ko:`<script lang="ts">
  import { CodeBlock, Textarea } from 'soya-ui';
  let value = $state('재현 조건과 기대 결과를 기록하세요.');
  let resize = $state<'none' | 'vertical' | 'both'>('vertical');
  let invalid = $state(false);
  let stateJson = $derived(
    JSON.stringify({ value, resize, invalid, characterCount: value.length }, null, 2),
  );
<\/script>

<div class="example-stack">
  <Textarea
    bind:value
    {resize}
    {invalid}
    rows={4}
    aria-label={'작업 메모'}
    placeholder={'재현 조건과 기대 결과를 입력하세요'}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Textarea } from 'soya-ui';
  let value = $state('Record the reproduction steps and expected result.');
  let resize = $state<'none' | 'vertical' | 'both'>('vertical');
  let invalid = $state(false);
  let stateJson = $derived(
    JSON.stringify({ value, resize, invalid, characterCount: value.length }, null, 2),
  );
<\/script>

<div class="example-stack">
  <Textarea
    bind:value
    {resize}
    {invalid}
    rows={4}
    aria-label={'Job notes'}
    placeholder={'Enter reproduction steps and expected results'}
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"theme-provider":{ko:`<script lang="ts">
  import { Card, CodeBlock, ThemeProvider, ThemeToggle, useTheme } from 'soya-ui';
  const parentTheme = useTheme();

  let modeLabels = $derived({
    light: '라이트',
    dark: '다크',
    system: '시스템',
  });
  let presetLabels = $derived({
    neutral: '중립',
    blue: '파랑',
    violet: '보라',
    green: '초록',
  });
<\/script>

{#key \`\${parentTheme.mode}-\${parentTheme.preset}-\${parentTheme.density}\`}
  <ThemeProvider
    scope="local"
    initialMode={parentTheme.mode}
    initialPreset={parentTheme.preset}
    density={parentTheme.density}
    persist={false}
    class="example-full-theme-stage theme-example-stage"
  >
    {#snippet children(theme)}
      <Card padding="comfortable"
        ><div class="example-stack">
          <strong>{presetLabels[theme.preset]} · {modeLabels[theme.mode]}</strong>
          <ThemeToggle
            showPreset
            modeLabel={'색상 모드'}
            lightLabel={'라이트'}
            darkLabel={'다크'}
            systemLabel={'시스템'}
            presetLabel={'색상 프리셋'}
            neutralLabel={'중립'}
            blueLabel={'파랑'}
            violetLabel={'보라'}
            greenLabel={'초록'}
          />
        </div></Card
      >

      <CodeBlock
        code={JSON.stringify(
          {
            scope: theme.scope,
            mode: theme.mode,
            effectiveMode: theme.effectiveMode,
            preset: theme.preset,
            density: theme.density,
            template: theme.template ?? null,
          },
          null,
          2,
        )}
        language="json"
        label={'현재 상태'}
        copy={false}
      />
    {/snippet}
  </ThemeProvider>
{/key}

<style lang="scss">
  :global(.theme-example-stage) {
    inline-size: 100%;
    min-inline-size: 0;
    background: var(--soya-background);
    color: var(--soya-foreground);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Card, CodeBlock, ThemeProvider, ThemeToggle, useTheme } from 'soya-ui';
  const parentTheme = useTheme();

  let modeLabels = $derived({
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  });
  let presetLabels = $derived({
    neutral: 'Neutral',
    blue: 'Blue',
    violet: 'Violet',
    green: 'Green',
  });
<\/script>

{#key \`\${parentTheme.mode}-\${parentTheme.preset}-\${parentTheme.density}\`}
  <ThemeProvider
    scope="local"
    initialMode={parentTheme.mode}
    initialPreset={parentTheme.preset}
    density={parentTheme.density}
    persist={false}
    class="example-full-theme-stage theme-example-stage"
  >
    {#snippet children(theme)}
      <Card padding="comfortable"
        ><div class="example-stack">
          <strong>{presetLabels[theme.preset]} · {modeLabels[theme.mode]}</strong>
          <ThemeToggle
            showPreset
            modeLabel={'Color mode'}
            lightLabel={'Light'}
            darkLabel={'Dark'}
            systemLabel={'System'}
            presetLabel={'Color preset'}
            neutralLabel={'Neutral'}
            blueLabel={'Blue'}
            violetLabel={'Violet'}
            greenLabel={'Green'}
          />
        </div></Card
      >

      <CodeBlock
        code={JSON.stringify(
          {
            scope: theme.scope,
            mode: theme.mode,
            effectiveMode: theme.effectiveMode,
            preset: theme.preset,
            density: theme.density,
            template: theme.template ?? null,
          },
          null,
          2,
        )}
        language="json"
        label={'Current state'}
        copy={false}
      />
    {/snippet}
  </ThemeProvider>
{/key}

<style lang="scss">
  :global(.theme-example-stage) {
    inline-size: 100%;
    min-inline-size: 0;
    background: var(--soya-background);
    color: var(--soya-foreground);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"theme-toggle":{ko:`<script lang="ts">
  import { CodeBlock, ThemeProvider, ThemeToggle, useTheme } from 'soya-ui';
  const parentTheme = useTheme();
<\/script>

{#key \`\${parentTheme.mode}-\${parentTheme.preset}-\${parentTheme.density}\`}
  <ThemeProvider
    scope="local"
    initialMode={parentTheme.mode}
    initialPreset={parentTheme.preset}
    density={parentTheme.density}
    persist={false}
    class="example-full-theme-stage theme-example-stage"
  >
    {#snippet children(theme)}
      <ThemeToggle
        showPreset
        modeLabel={'색상 모드'}
        lightLabel={'라이트'}
        darkLabel={'다크'}
        systemLabel={'시스템'}
        presetLabel={'색상 프리셋'}
        neutralLabel={'중립'}
        blueLabel={'파랑'}
        violetLabel={'보라'}
        greenLabel={'초록'}
      />

      <CodeBlock
        code={JSON.stringify(
          {
            scope: theme.scope,
            mode: theme.mode,
            effectiveMode: theme.effectiveMode,
            preset: theme.preset,
            density: theme.density,
            template: theme.template ?? null,
          },
          null,
          2,
        )}
        language="json"
        label={'현재 상태'}
        copy={false}
      />
    {/snippet}
  </ThemeProvider>
{/key}

<style lang="scss">
  :global(.theme-example-stage) {
    inline-size: 100%;
    min-inline-size: 0;
    background: var(--soya-background);
    color: var(--soya-foreground);
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, ThemeProvider, ThemeToggle, useTheme } from 'soya-ui';
  const parentTheme = useTheme();
<\/script>

{#key \`\${parentTheme.mode}-\${parentTheme.preset}-\${parentTheme.density}\`}
  <ThemeProvider
    scope="local"
    initialMode={parentTheme.mode}
    initialPreset={parentTheme.preset}
    density={parentTheme.density}
    persist={false}
    class="example-full-theme-stage theme-example-stage"
  >
    {#snippet children(theme)}
      <ThemeToggle
        showPreset
        modeLabel={'Color mode'}
        lightLabel={'Light'}
        darkLabel={'Dark'}
        systemLabel={'System'}
        presetLabel={'Color preset'}
        neutralLabel={'Neutral'}
        blueLabel={'Blue'}
        violetLabel={'Violet'}
        greenLabel={'Green'}
      />

      <CodeBlock
        code={JSON.stringify(
          {
            scope: theme.scope,
            mode: theme.mode,
            effectiveMode: theme.effectiveMode,
            preset: theme.preset,
            density: theme.density,
            template: theme.template ?? null,
          },
          null,
          2,
        )}
        language="json"
        label={'Current state'}
        copy={false}
      />
    {/snippet}
  </ThemeProvider>
{/key}

<style lang="scss">
  :global(.theme-example-stage) {
    inline-size: 100%;
    min-inline-size: 0;
    background: var(--soya-background);
    color: var(--soya-foreground);
  }
</style>
`},"toast-provider":{ko:`<script lang="ts">
  import { onDestroy } from 'svelte';
  import { Button, CodeBlock, ToastProvider, Toaster, createToastState } from 'soya-ui';
  import type { ToastState } from 'soya-ui';
  type Policy = 'queue' | 'dismiss-oldest';
  let policy = $state<Policy>('queue');
  let capacity = $state(2);
  let activeState = $state.raw<ToastState>(
    createToastState({ maxVisible: 2, defaultDuration: 12000, overflow: 'queue' }),
  );
  let stateJson = $derived(
    JSON.stringify(
      {
        policy,
        capacity,
        visible: activeState.items.map(({ id, title, tone }) => ({ id, title, tone })),
      },
      null,
      2,
    ),
  );
  function addOverflowSet() {
    activeState.clear();
    for (let index = 0; index < capacity + 1; index += 1) {
      activeState.push({
        title: \`\${index + 1}번째 알림\`,
        description: \`예제 알림 \${index + 1}\`,
        tone: index === capacity ? 'warning' : 'info',
      });
    }
  }
  onDestroy(() => activeState.destroy());
<\/script>

{#key activeState}
  <ToastProvider state={activeState}>
    <div class="example-stack toast-policy-example">
      <div class="example-row">
        <Button onclick={addOverflowSet}>{\`알림 \${capacity + 1}개 추가\`}</Button>
        <Button
          variant="secondary"
          disabled={!activeState.items.length}
          onclick={() => activeState.items[0] && activeState.dismiss(activeState.items[0].id)}
        >
          {'가장 오래된 표시 중 알림 닫기'}
        </Button>
      </div>
      <Toaster label={\`\${policy} 알림\`} closeLabel={(title) => \`\${title} 닫기\`} />
    </div>

    <CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
  </ToastProvider>
{/key}

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
  }
  .example-row > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
</style>
`,en:`<script lang="ts">
  import { onDestroy } from 'svelte';
  import { Button, CodeBlock, ToastProvider, Toaster, createToastState } from 'soya-ui';
  import type { ToastState } from 'soya-ui';
  type Policy = 'queue' | 'dismiss-oldest';
  let policy = $state<Policy>('queue');
  let capacity = $state(2);
  let activeState = $state.raw<ToastState>(
    createToastState({ maxVisible: 2, defaultDuration: 12000, overflow: 'queue' }),
  );
  let stateJson = $derived(
    JSON.stringify(
      {
        policy,
        capacity,
        visible: activeState.items.map(({ id, title, tone }) => ({ id, title, tone })),
      },
      null,
      2,
    ),
  );
  function addOverflowSet() {
    activeState.clear();
    for (let index = 0; index < capacity + 1; index += 1) {
      activeState.push({
        title: \`Notification \${index + 1}\`,
        description: \`Sample notification \${index + 1}\`,
        tone: index === capacity ? 'warning' : 'info',
      });
    }
  }
  onDestroy(() => activeState.destroy());
<\/script>

{#key activeState}
  <ToastProvider state={activeState}>
    <div class="example-stack toast-policy-example">
      <div class="example-row">
        <Button onclick={addOverflowSet}>{\`Add \${capacity + 1} notifications\`}</Button>
        <Button
          variant="secondary"
          disabled={!activeState.items.length}
          onclick={() => activeState.items[0] && activeState.dismiss(activeState.items[0].id)}
        >
          {'Dismiss the oldest visible notification'}
        </Button>
      </div>
      <Toaster label={\`\${policy} notifications\`} closeLabel={(title) => \`Dismiss \${title}\`} />
    </div>

    <CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
  </ToastProvider>
{/key}

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
  }
  .example-row > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
</style>
`},toaster:{ko:`<script lang="ts">
  import { onDestroy } from 'svelte';
  import { Button, CodeBlock, ToastProvider, Toaster, createToastState } from 'soya-ui';
  import type { ToastPosition, ToastTone } from 'soya-ui';
  const toastState = createToastState({ defaultDuration: 6000 });
  let position = $state<ToastPosition>('bottom-end');
  let tone = $state<ToastTone>('success');
  let showProgress = $state(true);
  let autoDismiss = $state(true);
  let dismissible = $state(true);
  let stateJson = $derived(
    JSON.stringify(
      {
        position,
        tone,
        showProgress,
        autoDismiss,
        dismissible,
        notifications: toastState.items.map(({ id, title, tone: itemTone }) => ({
          id,
          title,
          tone: itemTone,
        })),
      },
      null,
      2,
    ),
  );
  onDestroy(() => toastState.destroy());
<\/script>

<ToastProvider state={toastState}>
  <div class="example-stack">
    <div class="example-row">
      <Button
        onclick={() =>
          toastState.push({
            title: '예제 알림',
            description: '선택한 색상과 동작을 적용했습니다.',
            tone,
            duration: 6000,
            showProgress,
            autoDismiss,
            dismissible,
          })}>{'설정한 알림 표시'}</Button
      >
      <Button
        variant="danger"
        onclick={() =>
          toastState.push({
            title: '작업 실패',
            description: '예제 데이터 스키마를 확인하세요.',
            tone: 'danger',
            duration: 0,
            showProgress: false,
            autoDismiss: false,
            dismissible: true,
          })}>{'고정 알림 표시'}</Button
      >
      <Button variant="ghost" onclick={() => toastState.clear()}>{'알림 모두 지우기'}</Button>
    </div>
    <Toaster label={'예제 알림'} closeLabel={(title) => \`\${title} 닫기\`} {position} />
  </div>

  <CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
</ToastProvider>

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
  }
  .example-row > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
</style>
`,en:`<script lang="ts">
  import { onDestroy } from 'svelte';
  import { Button, CodeBlock, ToastProvider, Toaster, createToastState } from 'soya-ui';
  import type { ToastPosition, ToastTone } from 'soya-ui';
  const toastState = createToastState({ defaultDuration: 6000 });
  let position = $state<ToastPosition>('bottom-end');
  let tone = $state<ToastTone>('success');
  let showProgress = $state(true);
  let autoDismiss = $state(true);
  let dismissible = $state(true);
  let stateJson = $derived(
    JSON.stringify(
      {
        position,
        tone,
        showProgress,
        autoDismiss,
        dismissible,
        notifications: toastState.items.map(({ id, title, tone: itemTone }) => ({
          id,
          title,
          tone: itemTone,
        })),
      },
      null,
      2,
    ),
  );
  onDestroy(() => toastState.destroy());
<\/script>

<ToastProvider state={toastState}>
  <div class="example-stack">
    <div class="example-row">
      <Button
        onclick={() =>
          toastState.push({
            title: 'Sample notification',
            description: 'The selected tone and behavior are applied.',
            tone,
            duration: 6000,
            showProgress,
            autoDismiss,
            dismissible,
          })}>{'Show configured notification'}</Button
      >
      <Button
        variant="danger"
        onclick={() =>
          toastState.push({
            title: 'Job failed',
            description: 'Check the sample data schema.',
            tone: 'danger',
            duration: 0,
            showProgress: false,
            autoDismiss: false,
            dismissible: true,
          })}>{'Show persistent notification'}</Button
      >
      <Button variant="ghost" onclick={() => toastState.clear()}>{'Clear notifications'}</Button>
    </div>
    <Toaster
      label={'Example notifications'}
      closeLabel={(title) => \`Dismiss \${title}\`}
      {position}
    />
  </div>

  <CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
</ToastProvider>

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
  }
  .example-row > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
</style>
`},toggle:{ko:`<script lang="ts">
  import { CodeBlock, Toggle } from 'soya-ui';
  import type { ComponentSize } from 'soya-ui';
  let pressed = $state(false);
  let disabled = $state(false);
  let variant = $state<'ghost' | 'outline'>('outline');
  let size = $state<ComponentSize>('md');
  let stateJson = $derived(JSON.stringify({ pressed, variant, size, disabled }, null, 2));
<\/script>

<div class="example-stack">
  <Toggle bind:pressed {variant} {size} {disabled}>{'중요 표시'}</Toggle>
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, Toggle } from 'soya-ui';
  import type { ComponentSize } from 'soya-ui';
  let pressed = $state(false);
  let disabled = $state(false);
  let variant = $state<'ghost' | 'outline'>('outline');
  let size = $state<ComponentSize>('md');
  let stateJson = $derived(JSON.stringify({ pressed, variant, size, disabled }, null, 2));
<\/script>

<div class="example-stack">
  <Toggle bind:pressed {variant} {size} {disabled}>{'Mark important'}</Toggle>
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"toggle-group":{ko:`<script lang="ts">
  import { CodeBlock, ToggleGroup } from 'soya-ui';

  let viewItems = $derived([
    { value: 'list', label: '목록' },
    { value: 'board', label: '보드' },
    { value: 'timeline', label: '타임라인', disabled: true },
  ]);
  let fieldItems = $derived([
    { value: 'owner', label: '담당자' },
    { value: 'status', label: '상태' },
    { value: 'updated', label: '수정일' },
  ]);
  let view = $state<string | string[]>('list');
  let fields = $state<string | string[]>(['owner', 'status']);
  let stateJson = $derived(JSON.stringify({ view, fields }, null, 2));
<\/script>

<div class="example-stack">
  <ToggleGroup bind:value={view} items={viewItems} label={'결과 보기 방식'} name="view" />
  <ToggleGroup
    type="multiple"
    bind:value={fields}
    items={fieldItems}
    label={'표시할 메타 정보'}
    name="fields"
  />
</div>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { CodeBlock, ToggleGroup } from 'soya-ui';

  let viewItems = $derived([
    { value: 'list', label: 'List' },
    { value: 'board', label: 'Board' },
    { value: 'timeline', label: 'Timeline', disabled: true },
  ]);
  let fieldItems = $derived([
    { value: 'owner', label: 'Owner' },
    { value: 'status', label: 'Status' },
    { value: 'updated', label: 'Updated' },
  ]);
  let view = $state<string | string[]>('list');
  let fields = $state<string | string[]>(['owner', 'status']);
  let stateJson = $derived(JSON.stringify({ view, fields }, null, 2));
<\/script>

<div class="example-stack">
  <ToggleGroup bind:value={view} items={viewItems} label={'Result view'} name="view" />
  <ToggleGroup
    type="multiple"
    bind:value={fields}
    items={fieldItems}
    label={'Metadata to display'}
    name="fields"
  />
</div>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />

<style lang="scss">
  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},tooltip:{ko:`<script lang="ts">
  import { CodeBlock, Icon, IconButton, Tooltip } from 'soya-ui';
  let disabled = $state(false);
  let viewed = $state(false);
  let stateJson = $derived(JSON.stringify({ disabled, viewed }, null, 2));
<\/script>

<Tooltip content={'작업 ID와 실행 정보를 확인합니다.'} {disabled}
  >{#snippet children(props)}<IconButton
      {...props}
      label={viewed ? '작업 정보 확인됨' : '작업 정보 보기'}
      variant="secondary"
      {disabled}
      aria-pressed={viewed}
      onclick={() => (viewed = true)}
      ><Icon name={viewed ? 'check' : 'info'} size="1rem" /></IconButton
    >{/snippet}</Tooltip
>

<CodeBlock code={stateJson} language="json" label={'현재 상태'} copy={false} />
`,en:`<script lang="ts">
  import { CodeBlock, Icon, IconButton, Tooltip } from 'soya-ui';
  let disabled = $state(false);
  let viewed = $state(false);
  let stateJson = $derived(JSON.stringify({ disabled, viewed }, null, 2));
<\/script>

<Tooltip content={'View the job ID and run details.'} {disabled}
  >{#snippet children(props)}<IconButton
      {...props}
      label={viewed ? 'Job details viewed' : 'View job details'}
      variant="secondary"
      {disabled}
      aria-pressed={viewed}
      onclick={() => (viewed = true)}
      ><Icon name={viewed ? 'check' : 'info'} size="1rem" /></IconButton
    >{/snippet}</Tooltip
>

<CodeBlock code={stateJson} language="json" label={'Current state'} copy={false} />
`}},id=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),ad=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),od=u(`<div class="example-layout-shell"><!></div>`);function sd(e,n){i(n,!0);let r=e=>{var n=id(),r=D(n),i=D(r),a=D(i);{let e=R(()=>s(`동기화 상태`,`Synchronization status`)),t=R(()=>s(`예제 데이터만 사용하며 운영 시스템에는 연결하지 않습니다.`,`This example uses sample data and does not connect to production systems.`));Re(a,{get title(){return f(e)},get description(){return f(t)},get tone(){return f(c)}})}t(i),t(r);var o=H(r,2),l=D(o);{let e=R(()=>s(`현재 상태`,`Current state`));Q(l,{get code(){return f(d)},language:`json`,get label(){return f(e)},copy:!1})}t(o),t(n),g(e,n)},a=e=>{var n=ad(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return l},get invalid(){return i()},get value(){return f(c)},set value(e){U(c,e,!0)}})},t=R(()=>s(`톤`,`Tone`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(`info`),l=[`info`,`success`,`warning`,`danger`].map(e=>({value:e,label:e})),u=N(70),d=R(()=>JSON.stringify({tone:f(c)},null,2));var p=od(),h=D(p);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(h,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(u)},set size(e){U(u,e,!0)}})}t(p),g(e,p),v()}var cd=u(`<p class="dialog-note svelte-at7wz7"> </p>`),ld=u(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`);function ud(e,n){i(n,!0);let r=E(n,`locale`,3,`ko`);function a(e,t){return r()===`en`?t:e}let o=N(!1),s=N(`idle`),c=R(()=>JSON.stringify({open:f(o),status:f(s)},null,2));async function l(){await new Promise(e=>setTimeout(e,700)),U(s,`deleted`)}var u=ld(),d=D(u),p=D(d),h=D(p);{let e=(e,t=F)=>{G(e,oe(t,{variant:`danger`,children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>a(`삭제 확인 열기`,`Open delete confirmation`)]),g(e,n)},$$slots:{default:!0}}))},n=R(()=>a(`선택한 예제 실행을 삭제할까요?`,`Delete the selected sample run?`)),r=R(()=>a(`검색 품질 검증 결과와 연결된 임시 비교 기록도 함께 제거됩니다. 이 문서 예시는 실제 데이터를 변경하지 않습니다.`,`Temporary comparison records linked to the validation result will also be removed. This documentation example does not change real data.`)),i=R(()=>a(`계속 보관`,`Keep it`)),s=R(()=>a(`예제 실행 삭제`,`Delete sample run`)),c=R(()=>a(`삭제하는 중...`,`Deleting...`)),u=R(()=>a(`삭제하지 못했습니다. 다시 시도하세요.`,`Unable to delete. Try again.`));rc(h,{get title(){return f(n)},get description(){return f(r)},get cancelLabel(){return f(i)},get actionLabel(){return f(s)},get pendingLabel(){return f(c)},get errorLabel(){return f(u)},actionTone:`danger`,onconfirm:l,get open(){return f(o)},set open(e){U(o,e,!0)},trigger:e,children:(e,n)=>{var r=cd(),i=D(r);t(r),j(e=>m(i,`${e??``}: run-1048`),[()=>a(`삭제 대상`,`Delete target`)]),g(e,r)},$$slots:{trigger:!0,default:!0}})}t(p),t(d);var _=H(d,2),y=D(_);{let e=R(()=>a(`현재 상태`,`Current state`));Q(y,{get code(){return f(c)},language:`json`,get label(){return f(e)},copy:!1})}t(_),t(u),g(e,u),v()}var dd=u(`<p class="svelte-1sli503"> </p>`),fd=u(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack accordion-example svelte-1sli503"><!></div></div> <div class="example-feedback"><!></div></div>`);function pd(e,n){let r=e=>{var n=dd(),r=D(n,!0);t(n),j(e=>m(r,e),[()=>s(`검색 결과, 권한 판정, 색인 시각을 한 실행 단위에서 비교합니다.`,`Compare search results, permission decisions, and indexing time in one run.`)]),g(e,n)},i=e=>{var n=dd(),r=D(n,!0);t(n),j(e=>m(r,e),[()=>s(`예제 결과는 로컬 세션 동안만 유지되며 외부 서비스로 전송되지 않습니다.`,`Sample results remain only for the local session and are not sent to external services.`)]),g(e,n)},a=e=>{var n=dd(),r=D(n,!0);t(n),j(e=>m(r,e),[()=>s(`비활성 항목의 내용입니다.`,`This content belongs to a disabled item.`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(`scope`),l=R(()=>JSON.stringify({value:f(c)},null,2));var u=fd(),d=D(u),p=D(d),h=D(p);{let e=R(()=>[{value:`scope`,title:s(`어떤 결과를 비교하나요?`,`Which results are compared?`),content:r},{value:`retention`,title:s(`기관별 권한 스냅샷과 검색 결과를 얼마나 오래 보관하나요?`,`How long are organization permission snapshots and search results retained?`),content:i},{value:`unavailable`,title:s(`운영 데이터 연결`,`Production data connection`),content:a,disabled:!0}]);cc(h,{headingLevel:3,get items(){return f(e)},get value(){return f(c)},set value(e){U(c,e,!0)}})}t(p),t(d);var _=H(d,2),v=D(_);{let e=R(()=>s(`현재 상태`,`Current state`));Q(v,{get code(){return f(l)},language:`json`,get label(){return f(e)},copy:!1})}t(_),t(u),g(e,u)}var md=u(`<div class="aspect-ratio-example__content svelte-bbk60m" role="img"><span> </span></div>`),hd=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`),gd=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),_d=u(`<div class="example-layout-shell"><!></div>`);function vd(e,n){let r=e=>{var n=hd(),r=D(n);Nl(D(r),{class:`aspect-ratio-example`,get ratio(){return f(l)},children:(e,n)=>{var r=md(),i=D(r),a=D(i,!0);t(i),t(r),j((e,t)=>{P(r,`aria-label`,e),m(a,t)},[()=>o(`산 풍경`,`Mountain landscape`),()=>o(`미디어 미리보기`,`Media preview`)]),g(e,r)},$$slots:{default:!0}}),t(r);var i=H(r,2),a=D(i);{let e=R(()=>o(`현재 상태`,`Current state`));Q(a,{get code(){return f(d)},language:`json`,get label(){return f(e)},copy:!1})}t(i),t(n),g(e,n)},i=e=>{var n=gd(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return f(u)},get invalid(){return i()},get value(){return f(s)},set value(e){U(s,e,!0)}})},t=R(()=>o(`비율`,`Ratio`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(`wide`),c=N(70),l=R(()=>f(s)===`square`?1:f(s)===`portrait`?3/4:16/9),u=R(()=>[{value:`wide`,label:o(`와이드 16:9`,`Wide 16:9`)},{value:`square`,label:o(`정사각형 1:1`,`Square 1:1`)},{value:`portrait`,label:o(`세로 3:4`,`Portrait 3:4`)}]),d=R(()=>JSON.stringify({ratio:f(l)},null,2));var p=_d(),h=D(p);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(h,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(c)},set size(e){U(c,e,!0)}})}t(p),g(e,p)}var yd=e=>{var t=bd();g(e,t)},bd=u(`<span class="file-preview svelte-nw5f36">PDF</span>`),xd=u(`<p> </p>`),Sd=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),Cd=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),wd=u(`<div class="example-layout-shell"><!></div>`);function Td(n,r){i(r,!0);let a=n=>{var r=Sd(),i=D(r),a=D(i),o=D(a),s=e=>{var n=xd(),r=D(n,!0);t(n),j(e=>m(r,e),[()=>c(`첨부가 목록에서 제거되었습니다.`,`The attachment was removed from the list.`)]),g(e,n)},d=e=>{{let t=R(()=>c(`검색-품질-보고서.pdf`,`search-quality-report.pdf`)),n=R(()=>c(`PDF · 2.4 MB`,`PDF · 2.4 MB`)),r=R(()=>c(`다시 시도`,`Retry`)),i=R(()=>c(`첨부 삭제`,`Remove attachment`));Vl(e,{get name(){return f(t)},get description(){return f(n)},get status(){return f(l)},progress:62,get preview(){return yd},statusLabel:e=>({ready:c(`업로드 준비`,`Ready to upload`),uploading:c(`업로드 중`,`Uploading`),success:c(`업로드 완료`,`Upload complete`),error:c(`업로드 실패`,`Upload failed`)})[e],get retryLabel(){return f(r)},get removeLabel(){return f(i)},onretry:()=>U(l,`uploading`),onremove:()=>U(u,!0)})}};e(o,e=>{f(u)?e(s):e(d,-1)}),t(a),t(i);var p=H(i,2),_=D(p);{let e=R(()=>c(`현재 상태`,`Current state`));Q(_,{get code(){return f(h)},language:`json`,get label(){return f(e)},copy:!1})}t(p),t(r),g(n,r)},o=e=>{var n=Cd(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return p},get invalid(){return i()},onvaluechange:()=>U(u,!1),get value(){return f(l)},set value(e){U(l,e,!0)}})},t=R(()=>c(`업로드 상태`,`Upload status`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>c(`옵션`,`Options`)]),g(e,n)},s=E(r,`locale`,3,`ko`);function c(e,t){return s()===`en`?t:e}let l=N(`uploading`),u=N(!1),d=N(70),p=[`ready`,`uploading`,`success`,`error`].map(e=>({value:e,label:e})),h=R(()=>JSON.stringify({status:f(l),progress:62,removed:f(u)},null,2));var _=wd(),y=D(_);{let e=R(()=>c(`예제 미리보기`,`Example preview`)),t=R(()=>c(`예제 옵션`,`Example options`));q(y,{class:`example-layout`,get primary(){return a},get secondary(){return o},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(d)},set size(e){U(d,e,!0)}})}t(_),g(n,_),v()}var Ed=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack avatar-example svelte-1oy7nse"><!></div></div> <div class="example-feedback"><!></div></div>`),Dd=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!> <!></div>`),Od=u(`<div class="example-layout-shell"><!></div>`);function kd(e,n){i(n,!0);let r=e=>{var n=Ed(),r=D(n),i=D(r),a=D(i);{let e=R(()=>f(l)?c:void 0),t=R(()=>s(`김민지`,`Mina Kim`));ql(a,{get src(){return f(e)},get alt(){return f(t)},fallback:`MK`,get size(){return f(u)},get shape(){return f(d)}})}t(i),t(r);var o=H(r,2),p=D(o);{let e=R(()=>s(`현재 상태`,`Current state`));Q(p,{get code(){return f(y)},language:`json`,get label(){return f(e)},copy:!1})}t(o),t(n),g(e,n)},a=e=>{var n=Dd(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return h},get invalid(){return i()},get value(){return f(u)},set value(e){U(u,e,!0)}})},t=R(()=>s(`크기`,`Size`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var o=H(a,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return _},get invalid(){return i()},get value(){return f(d)},set value(e){U(d,e,!0)}})},t=R(()=>s(`형태`,`Shape`));K(o,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var c=H(o,2);De(c,{get checked(){return f(l)},set checked(e){U(l,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`이미지 표시`,`Show image`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=`data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"%3E%3Crect width="96" height="96" fill="%237c6ee6"/%3E%3Ccircle cx="48" cy="38" r="18" fill="%23fff"/%3E%3Cpath d="M18 92c4-22 16-32 30-32s26 10 30 32" fill="%23fff"/%3E%3C/svg%3E`,l=N(!0),u=N(`md`),d=N(`circle`),p=N(70),h=[`sm`,`md`,`lg`].map(e=>({value:e,label:e})),_=[`circle`,`square`].map(e=>({value:e,label:e})),y=R(()=>JSON.stringify({showImage:f(l),size:f(u),shape:f(d)},null,2));var b=Od(),x=D(b);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(x,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(p)},set size(e){U(p,e,!0)}})}t(b),g(e,b),v()}var Ad=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><div><!></div></div></div> <div class="example-feedback"><!></div></div>`),jd=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),Md=u(`<div class="example-layout-shell"><!></div>`);function Nd(e,n){i(n,!0);let r=e=>{var n=Ad(),r=D(n),i=D(r),a=D(i),o=D(a);Oe(o,{get tone(){return f(c)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`검증 완료`,`Validation complete`)]),g(e,n)},$$slots:{default:!0}}),t(a),t(i),t(r);var l=H(r,2),u=D(l);{let e=R(()=>s(`현재 상태`,`Current state`));Q(u,{get code(){return f(d)},language:`json`,get label(){return f(e)},copy:!1})}t(l),t(n),g(e,n)},a=e=>{var n=jd(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return l},get invalid(){return i()},get value(){return f(c)},set value(e){U(c,e,!0)}})},t=R(()=>s(`톤`,`Tone`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(`success`),l=[`neutral`,`info`,`success`,`warning`,`danger`].map(e=>({value:e,label:e})),u=N(70),d=R(()=>JSON.stringify({tone:f(c)},null,2));var p=Md(),h=D(p);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(h,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(u)},set size(e){U(u,e,!0)}})}t(p),g(e,p),v()}var Pd=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`),Fd=u(`<!> <!>`,1),Id=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),Ld=u(`<div class="example-layout-shell"><!></div>`);function Rd(e,n){i(n,!0);let r=e=>{var n=Pd(),r=D(n),i=D(r);{let e=R(()=>s(`최근 7일 완료한 작업`,`Completed tasks over seven days`)),t=R(()=>s(`막대의 높이는 일별 완료 작업 수입니다.`,`Bars show completed jobs per day.`));Le(i,{get data(){return f(u)},get label(){return f(e)},get description(){return f(t)},height:200,showValues:!0})}t(r);var a=H(r,2),o=D(a);{let e=R(()=>s(`현재 상태`,`Current state`));Q(o,{get code(){return f(d)},language:`json`,get label(){return f(e)},copy:!1})}t(a),t(n),g(e,n)},a=e=>{var n=Id(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=R(()=>s(`조회 기간`,`Reporting period`));Fe(a,{get label(){return f(e)},attached:!1,children:(e,t)=>{var n=Fd(),r=B(n);{let e=R(()=>f(c)===`week`?`primary`:`secondary`),t=R(()=>f(c)===`week`);G(r,{size:`sm`,get variant(){return f(e)},get"aria-pressed"(){return f(t)},onclick:()=>U(c,`week`),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`이번 주`,`This week`)]),g(e,n)},$$slots:{default:!0}})}var i=H(r,2);{let e=R(()=>f(c)===`month`?`primary`:`secondary`),t=R(()=>f(c)===`month`);G(i,{size:`sm`,get variant(){return f(e)},get"aria-pressed"(){return f(t)},onclick:()=>U(c,`month`),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`이번 달`,`This month`)]),g(e,n)},$$slots:{default:!0}})}g(e,n)},$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(`week`),l=N(70),u=R(()=>(f(c)===`week`?[42,56,49,73,66,88,94]:[56,72,64,81,77,96,108]).map((e,t)=>({label:String(t+1),value:e}))),d=R(()=>JSON.stringify({period:f(c),data:f(u)},null,2));var p=Ld(),h=D(p);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(h,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(l)},set size(e){U(l,e,!0)}})}t(p),g(e,p),v()}var zd=u(`<div class="example-preview-main"><div id="workspace" class="example-stack breadcrumb-example svelte-15mp0qm"><span id="project" hidden=""></span> <!></div></div>`);function Bd(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=R(()=>[{label:i(`작업 공간`,`Workspace`),href:`#workspace`},{label:i(`검색 품질 검증과 매우 긴 기관별 권한 비교`,`Search validation and a very long organization permission comparison`),href:`#project`},{label:i(`run-1048 상세`,`run-1048 details`),current:!0}]);var o=zd(),s=D(o),c=H(D(s),2);{let e=R(()=>i(`현재 위치`,`Current location`));Tn(c,{get items(){return f(a)},get label(){return f(e)},separator:`›`})}t(s),t(o),g(e,o)}var Vd=e=>{var t=Hd();g(e,t)},Hd=u(`<time datetime="2026-09-24T14:32:00+09:00">14:32</time>`),Ud=u(`<p> </p>`),Wd=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="bubble-preview svelte-1adpraj"><!></div></div> <div class="example-feedback"><!></div></div>`),Gd=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!></div>`),Kd=u(`<div class="example-layout-shell"><!></div>`);function qd(e,n){i(n,!0);let r=e=>{var n=Wd(),r=D(n),i=D(r),a=D(i);{let e=R(()=>s(`검색 검토 메시지`,`Search review message`));Ql(a,{get side(){return f(c)},get tone(){return f(l)},get label(){return f(e)},get footer(){return Vd},children:(e,n)=>{var r=Ud(),i=D(r,!0);t(r),j(e=>m(i,e),[()=>s(`기관별 권한 결과를 비교했고 차이가 있는 두 항목을 표시했습니다.`,`I compared organization permissions and marked the two differing items.`)]),g(e,r)},$$slots:{default:!0}})}t(i),t(r);var o=H(r,2),u=D(o);{let e=R(()=>s(`현재 상태`,`Current state`));Q(u,{get code(){return f(h)},language:`json`,get label(){return f(e)},copy:!1})}t(o),t(n),g(e,n)},a=e=>{var n=Gd(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return d},get invalid(){return i()},get value(){return f(c)},set value(e){U(c,e,!0)}})},t=R(()=>s(`방향`,`Side`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var o=H(a,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return p},get invalid(){return i()},get value(){return f(l)},set value(e){U(l,e,!0)}})},t=R(()=>s(`톤`,`Tone`));K(o,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(`outgoing`),l=N(`primary`),u=N(70),d=[`incoming`,`outgoing`].map(e=>({value:e,label:e})),p=[`neutral`,`primary`].map(e=>({value:e,label:e})),h=R(()=>JSON.stringify({side:f(c),tone:f(l)},null,2));var _=Kd(),y=D(_);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(y,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(u)},set size(e){U(u,e,!0)}})}t(_),g(e,_),v()}var Jd=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),Yd=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!> <!></div>`),Xd=u(`<div class="example-layout-shell"><!></div>`);function Zd(e,n){i(n,!0);let r=e=>{var n=Jd(),r=D(n),i=D(r),a=D(i);G(a,{get variant(){return f(c)},get size(){return f(l)},get loading(){return f(u)},onclick:()=>U(d,f(d)+1),children:(e,t)=>{L();var n=W();j(e=>m(n,`${e??``} · ${f(d)??``}`),[()=>s(`작업 실행`,`Run task`)]),g(e,n)},$$slots:{default:!0}}),t(i),t(r);var o=H(r,2),p=D(o);{let e=R(()=>s(`현재 상태`,`Current state`));Q(p,{get code(){return f(y)},language:`json`,get label(){return f(e)},copy:!1})}t(o),t(n),g(e,n)},a=e=>{var n=Yd(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return p},get invalid(){return i()},get value(){return f(c)},set value(e){U(c,e,!0)}})},t=R(()=>s(`모양`,`Variant`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var o=H(a,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return h},get invalid(){return i()},get value(){return f(l)},set value(e){U(l,e,!0)}})},t=R(()=>s(`크기`,`Size`));K(o,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var d=H(o,2);De(d,{get checked(){return f(u)},set checked(e){U(u,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`로딩`,`Loading`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(`primary`),l=N(`md`),u=N(!1),d=N(0),p=[`primary`,`secondary`,`ghost`,`danger`].map(e=>({value:e,label:e})),h=[`sm`,`md`,`lg`].map(e=>({value:e,label:e})),_=N(70),y=R(()=>JSON.stringify({variant:f(c),size:f(l),loading:f(u),clicks:f(d)},null,2));var b=Xd(),x=D(b);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(x,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(_)},set size(e){U(_,e,!0)}})}t(b),g(e,b),v()}var Qd=u(`<!> <!> <!>`,1),$d=u(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`);function ef(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=N(`none`),o=R(()=>JSON.stringify({action:f(a)},null,2));var s=$d(),c=D(s),l=D(c),u=D(l);{let e=R(()=>i(`문서 편집 행동`,`Document editing actions`));Fe(u,{get label(){return f(e)},attached:!0,children:(e,t)=>{var n=Qd(),r=B(n);G(r,{variant:`secondary`,onclick:()=>U(a,`preview`),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`미리보기`,`Preview`)]),g(e,n)},$$slots:{default:!0}});var o=H(r,2);G(o,{onclick:()=>U(a,`save`),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`저장`,`Save`)]),g(e,n)},$$slots:{default:!0}});var s=H(o,2);G(s,{variant:`danger`,disabled:!0,children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`배포`,`Deploy`)]),g(e,n)},$$slots:{default:!0}}),g(e,n)},$$slots:{default:!0}})}t(l),t(c);var d=H(c,2),p=D(d);{let e=R(()=>i(`현재 상태`,`Current state`));Q(p,{get code(){return f(o)},language:`json`,get label(){return f(e)},copy:!1})}t(d),t(s),g(e,s)}var tf=u(`<h3> </h3> <p> </p>`,1),nf=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),rf=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!></div>`),af=u(`<div class="example-layout-shell"><!></div>`);function of(e,n){i(n,!0);let r=e=>{var n=nf(),r=D(n),i=D(r),a=D(i);ke(a,{get padding(){return f(c)},get elevated(){return f(l)},children:(e,n)=>{var r=tf(),i=B(r),a=D(i,!0);t(i);var o=H(i,2),c=D(o,!0);t(o),j((e,t)=>{m(a,e),m(c,t)},[()=>s(`색인 작업`,`Indexing task`),()=>s(`중립 배경과 일관된 간격으로 관련 정보를 묶습니다.`,`Group related information with a neutral surface and consistent spacing.`)]),g(e,r)},$$slots:{default:!0}}),t(i),t(r);var o=H(r,2),u=D(o);{let e=R(()=>s(`현재 상태`,`Current state`));Q(u,{get code(){return f(p)},language:`json`,get label(){return f(e)},copy:!1})}t(o),t(n),g(e,n)},a=e=>{var n=rf(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return u},get invalid(){return i()},get value(){return f(c)},set value(e){U(c,e,!0)}})},t=R(()=>s(`안쪽 여백`,`Padding`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var o=H(a,2);De(o,{get checked(){return f(l)},set checked(e){U(l,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`높임 효과`,`Elevated`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(`comfortable`),l=N(!1),u=[`none`,`compact`,`comfortable`].map(e=>({value:e,label:e})),d=N(70),p=R(()=>JSON.stringify({padding:f(c),elevated:f(l)},null,2));var h=af(),_=D(h);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(_,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(d)},set size(e){U(d,e,!0)}})}t(h),g(e,h),v()}var sf=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main calendar-example svelte-16gl1p7"><!></div> <div class="example-feedback"><!></div></div>`),cf=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),lf=u(`<div class="example-layout-shell"><!></div>`);function uf(e,n){i(n,!0);let r=e=>{var n=sf(),r=D(n),i=D(r);{let e=R(()=>s(`ko-KR`,`en-US`)),t=R(()=>Number(s(`1`,`0`))),n=R(()=>s(`배포 날짜`,`Deployment dates`)),r=R(()=>s(`이전 달`,`Previous month`)),a=R(()=>s(`다음 달`,`Next month`));En(i,{get mode(){return f(u)},get locale(){return f(e)},get weekStartsOn(){return f(t)},min:new Date(2026,8,3),max:new Date(2026,9,20),isDateDisabled:e=>e.getDay()===0,get label(){return f(n)},get previousMonthLabel(){return f(r)},get nextMonthLabel(){return f(a)},get value(){return f(d)},set value(e){U(d,e,!0)},get month(){return f(p)},set month(e){U(p,e,!0)}})}t(r);var a=H(r,2),o=D(a);{let e=R(()=>s(`현재 상태`,`Current state`));Q(o,{get code(){return f(y)},language:`json`,get label(){return f(e)},copy:!1})}t(a),t(n),g(e,n)},a=e=>{var n=cf(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get value(){return f(u)},get options(){return f(_)},onvaluechange:b,get invalid(){return i()}})},t=R(()=>s(`선택 방식`,`Selection mode`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}function c(e){if(!e)return null;let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function l(e){return e instanceof Date?c(e):Array.isArray(e)?e.map(c):e?{start:c(e.start),end:c(e.end)}:null}let u=N(`range`),d=N(k({start:new Date(2026,8,8),end:new Date(2026,8,12)})),p=N(k(new Date(2026,8,1))),h=N(70),_=R(()=>[{value:`single`,label:s(`하나`,`Single`)},{value:`multiple`,label:s(`여러 개`,`Multiple`)},{value:`range`,label:s(`범위`,`Range`)}]),y=R(()=>JSON.stringify({mode:f(u),month:c(f(p)),value:l(f(d))},null,2));function b(e){U(u,e,!0),U(d,f(u)===`single`?new Date(2026,8,10):f(u)===`multiple`?[new Date(2026,8,8),new Date(2026,8,12)]:{start:new Date(2026,8,8),end:new Date(2026,8,12)},!0)}var x=lf(),S=D(x);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(S,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(h)},set size(e){U(h,e,!0)}})}t(x),g(e,x),v()}var df=u(`<strong> </strong> <p> </p>`,1),ff=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function pf(e,n){let r=e=>{ke(e,{class:`carousel-card`,children:(e,n)=>{var r=df(),i=B(r),a=D(i,!0);t(i);var o=H(i,2),c=D(o,!0);t(o),j((e,t)=>{m(a,e),m(c,t)},[()=>s(`검색 품질`,`Search quality`),()=>s(`정확도 94%`,`94% accuracy`)]),g(e,r)},$$slots:{default:!0}})},i=e=>{ke(e,{class:`carousel-card`,children:(e,n)=>{var r=df(),i=B(r),a=D(i,!0);t(i);var o=H(i,2),c=D(o,!0);t(o),j((e,t)=>{m(a,e),m(c,t)},[()=>s(`권한 검증`,`Permission checks`),()=>s(`실패 0건`,`No failures`)]),g(e,r)},$$slots:{default:!0}})},a=e=>{ke(e,{class:`carousel-card`,children:(e,n)=>{var r=df(),i=B(r),a=D(i,!0);t(i);var o=H(i,2),c=D(o,!0);t(o),j((e,t)=>{m(a,e),m(c,t)},[()=>s(`색인 상태`,`Index status`),()=>s(`최신 상태`,`Up to date`)]),g(e,r)},$$slots:{default:!0}})},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(0),l=R(()=>JSON.stringify({index:f(c)},null,2));var u=ff(),d=D(u),p=D(d);{let e=R(()=>s(`검증 결과 요약`,`Validation result summaries`)),t=R(()=>s(`이전 결과`,`Previous result`)),n=R(()=>s(`다음 결과`,`Next result`)),o=R(()=>[{id:`search`,content:r},{id:`access`,content:i},{id:`indexing`,content:a}]);nu(p,{get label(){return f(e)},get previousLabel(){return f(t)},get nextLabel(){return f(n)},slideLabel:(e,t)=>s(`${t}개 결과 중 ${e+1}번째`,`Result ${e+1} of ${t}`),get items(){return f(o)},get index(){return f(c)},set index(e){U(c,e,!0)}})}t(d);var h=H(d,2),_=D(h);{let e=R(()=>s(`현재 상태`,`Current state`));Q(_,{get code(){return f(l)},language:`json`,get label(){return f(e)},copy:!1})}t(h),t(u),g(e,u)}var mf=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),hf=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),gf=u(`<div class="example-layout-shell"><!></div>`);function _f(e,n){let r=e=>{var n=mf(),r=D(n),i=D(r),a=D(i);{let e=R(()=>o(`결과를 비교할 때 권한 필터를 적용합니다.`,`Apply permission filters when comparing results.`));De(a,{get description(){return f(e)},get invalid(){return f(c)},get checked(){return f(s)},set checked(e){U(s,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`권한 검사 포함`,`Include permission checks`)]),g(e,n)},$$slots:{default:!0}})}t(i),t(r);var l=H(r,2),d=D(l);{let e=R(()=>o(`현재 상태`,`Current state`));Q(d,{get code(){return f(u)},language:`json`,get label(){return f(e)},copy:!1})}t(l),t(n),g(e,n)},i=e=>{var n=hf(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);De(a,{get checked(){return f(c)},set checked(e){U(c,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`오류 상태`,`Invalid`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(!0),c=N(!1),l=N(70),u=R(()=>JSON.stringify({checked:f(s),invalid:f(c)},null,2));var d=gf(),p=D(d);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(p,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(l)},set size(e){U(l,e,!0)}})}t(d),g(e,d)}var vf=u(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`);function yf(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=N(`#2563EB`),o=R(()=>JSON.stringify({value:f(a)},null,2));var s=vf(),c=D(s),l=D(c),u=D(l);{let e=R(()=>i(`브랜드 색상`,`Brand color`)),t=R(()=>i(`브랜드 색상 선택`,`Choose brand color`));be(u,{get label(){return f(e)},get pickerLabel(){return f(t)},name:`brand-color`,get value(){return f(a)},set value(e){U(a,e,!0)}})}t(l),t(c);var d=H(c,2),p=D(d);{let e=R(()=>i(`현재 상태`,`Current state`));Q(p,{get code(){return f(o)},language:`json`,get label(){return f(e)},copy:!1})}t(d),t(s),g(e,s)}var bf=u(`<ul class="svelte-16x5pkp"><li> </li> <li> </li> <li> </li></ul>`),xf=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack collapsible-example svelte-16x5pkp"><!></div></div> <div class="example-feedback"><!></div></div>`),Sf=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),Cf=u(`<div class="example-layout-shell"><!></div>`);function wf(e,n){let r=e=>{var n=xf(),r=D(n),i=D(r);fc(D(i),{get disabled(){return f(c)},get open(){return f(s)},set open(e){U(s,e,!0)},trigger:(e,t=F)=>{G(e,oe(t,{variant:`secondary`,class:`example-long-label`,children:(e,t)=>{L();var n=W();j((e,t)=>m(n,`${e??``}
              ${t??``}`),[()=>o(`진단 단계와 권한 판정 세부 정보`,`Diagnostic steps and permission details`),()=>f(s)?o(`접기`,`Collapse`):o(`펼치기`,`Expand`)]),g(e,n)},$$slots:{default:!0}}))},children:(e,n)=>{var r=bf(),i=D(r),a=D(i,!0);t(i);var s=H(i,2),c=D(s,!0);t(s);var l=H(s,2),u=D(l,!0);t(l),t(r),j((e,t,n)=>{m(a,e),m(c,t),m(u,n)},[()=>o(`검색 후보 1,240건 수집`,`Collected 1,240 search candidates`),()=>o(`PostgreSQL 권한 판정 864건 통과`,`864 candidates passed PostgreSQL authorization`),()=>o(`긴 설명을 포함한 프로젝트 메타데이터 정합성 확인 완료`,`Verified project metadata consistency, including long descriptions`)]),g(e,r)},$$slots:{trigger:!0,default:!0}}),t(i),t(r);var a=H(r,2),l=D(a);{let e=R(()=>o(`현재 상태`,`Current state`));Q(l,{get code(){return f(u)},language:`json`,get label(){return f(e)},copy:!1})}t(a),t(n),g(e,n)},i=e=>{var n=Sf(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);De(a,{get checked(){return f(c)},set checked(e){U(c,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`상세 영역 비활성화`,`Disable details`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(!1),c=N(!1),l=N(70),u=R(()=>JSON.stringify({open:f(s),disabled:f(c)},null,2));var d=Cf(),p=D(d);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(p,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(l)},set size(e){U(l,e,!0)}})}t(d),g(e,d)}var Tf=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="code-example svelte-ynfpeb"><!></div></div> <div class="example-feedback"><!></div></div>`),Ef=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <div class="example-option-group"><strong> </strong> <div class="example-row" role="group"></div></div> <!> <!> <!> <!> <div class="example-option-group"><strong> </strong> <div class="example-row" role="group"><!> <!> <!></div></div></div>`),Df=u(`<div class="example-layout-shell"><!></div>`);function Of(e,n){i(n,!0);let r=e=>{var n=c(),r=B(n);I(r,()=>`${f(C)}-${S.preset}-${S.density}`,e=>{Ke(e,{scope:`local`,get initialMode(){return f(C)},get initialPreset(){return S.preset},get density(){return S.density},persist:!1,class:`code-example-theme-stage`,children:(e,n=F)=>{var r=Tf(),i=D(r),a=D(i),o=D(a);{let e=R(()=>l(`${f(p)} 예제 코드`,`${f(p)} example code`)),t=R(()=>l(`원본 코드 복사`,`Copy original code`)),n=R(()=>l(`원본 코드 복사됨`,`Original code copied`)),r=R(()=>l(`원본 코드를 복사할 수 없음`,`Unable to copy original code`));Q(o,{get code(){return f(h)},get language(){return f(p)},get label(){return f(e)},get wrap(){return f(_)},get lineNumbers(){return f(y)},get startLine(){return f(x)},get copy(){return f(b)},get copyLabel(){return f(t)},get copiedLabel(){return f(n)},get copyErrorLabel(){return f(r)},get highlightedLines(){return f(T)}})}t(a),t(i);var s=H(i,2),c=D(s);{let e=R(()=>JSON.stringify({language:f(p),wrap:f(_),lineNumbers:f(y),copy:f(b),startLine:f(x),highlightState:f(O),mode:n().mode,effectiveMode:n().effectiveMode,preset:n().preset,density:n().density},null,2)),t=R(()=>l(`현재 상태`,`Current state`));Q(c,{get code(){return f(e)},language:`json`,get label(){return f(t)},copy:!1})}t(s),t(r),g(e,r)},$$slots:{default:!0}})}),g(e,n)},o=e=>{var n=Ef(),r=D(n),i=D(r,!0);t(r);var o=H(r,2),s=D(o),c=D(s,!0);t(s);var u=H(s,2);a(u,20,()=>d,e=>e,(e,t)=>{{let n=R(()=>f(p)===t?`primary`:`secondary`),r=R(()=>f(p)===t);G(e,{size:`sm`,get variant(){return f(n)},get"aria-pressed"(){return f(r)},onclick:()=>ee(t),children:(e,n)=>{L();var r=W();j(()=>m(r,t)),g(e,r)},$$slots:{default:!0}})}}),t(u),t(o);var h=H(o,2);De(h,{get checked(){return f(_)},set checked(e){U(_,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>l(`긴 줄 줄바꿈`,`Wrap long lines`)]),g(e,n)},$$slots:{default:!0}});var v=H(h,2);De(v,{get checked(){return f(y)},set checked(e){U(y,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>l(`줄 번호 표시`,`Show line numbers`)]),g(e,n)},$$slots:{default:!0}});var S=H(v,2);De(S,{get checked(){return f(b)},set checked(e){U(b,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>l(`복사 버튼 표시`,`Show copy button`)]),g(e,n)},$$slots:{default:!0}});var w=H(S,2);{let e=R(()=>l(`시작 줄`,`Starting line`));Te(w,{get label(){return f(e)},min:1,max:99,get value(){return f(x)},set value(e){U(x,e,!0)}})}var T=H(w,2),E=D(T),O=D(E,!0);t(E);var k=H(E,2),A=D(k);{let e=R(()=>f(C)===`system`?`primary`:`secondary`),t=R(()=>f(C)===`system`);G(A,{size:`sm`,get variant(){return f(e)},get"aria-pressed"(){return f(t)},onclick:()=>U(C,`system`),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>l(`시스템`,`System`)]),g(e,n)},$$slots:{default:!0}})}var M=H(A,2);{let e=R(()=>f(C)===`light`?`primary`:`secondary`),t=R(()=>f(C)===`light`);G(M,{size:`sm`,get variant(){return f(e)},get"aria-pressed"(){return f(t)},onclick:()=>U(C,`light`),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>l(`라이트`,`Light`)]),g(e,n)},$$slots:{default:!0}})}var N=H(M,2);{let e=R(()=>f(C)===`dark`?`primary`:`secondary`),t=R(()=>f(C)===`dark`);G(N,{size:`sm`,get variant(){return f(e)},get"aria-pressed"(){return f(t)},onclick:()=>U(C,`dark`),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>l(`다크`,`Dark`)]),g(e,n)},$$slots:{default:!0}})}t(k),t(T),t(n),j((e,t,n,r,a)=>{m(i,e),m(c,t),P(u,`aria-label`,n),m(O,r),P(k,`aria-label`,a)},[()=>l(`옵션`,`Options`),()=>l(`언어`,`Language`),()=>l(`CodeBlock 언어`,`CodeBlock language`),()=>l(`로컬 테마`,`Local theme`),()=>l(`CodeBlock 로컬 테마`,`CodeBlock local theme`)]),g(e,n)},s=E(n,`locale`,3,`ko`);function l(e,t){return s()===`en`?t:e}let u=R(()=>({svelte:`<script lang="ts">\n  import { Button } from 'soya-ui';\n  let saved = $state(false);\n<\/script>\n\n<Button onclick={() => (saved = true)}>${l(`저장`,`Save`)}</Button>`,sql:`select task_srno, task_nm
from flow_task
where use_intt_id = $1
order by task_srno desc;`,json:JSON.stringify({task:l(`검색 색인 검증`,`Search index validation`),status:`ready`,records:1240},null,2),yaml:`sample: run-1048
status: ready
records: 1240`})),d=[`svelte`,`sql`,`json`,`yaml`],p=N(`svelte`),h=R(()=>f(u)[f(p)]),_=N(!1),y=N(!0),b=N(!0),x=N(1),S=Ct(),C=R(()=>S.mode),w=N(70),T=N(void 0),O=N(`ready`),k=0,A=!1;async function M(e,t){let n=++k;U(O,`loading`);try{let{highlightCode:r}=await me(async()=>{let{highlightCode:e}=await import(`../chunks/BDhWHrEw.js`);return{highlightCode:e}},__vite__mapDeps([0,1]),import.meta.url),i=await r(t,e);if(A||n!==k)return;U(T,i,!0),U(O,i?`applied`:`unsupported`,!0)}catch{if(A||n!==k)return;U(T,void 0),U(O,`missing`)}}function ee(e){U(p,e,!0),M(e,f(u)[e])}ie(()=>(M(f(p),f(h)),()=>{A=!0,k+=1}));var te=Df(),ne=D(te);{let e=R(()=>l(`예제 미리보기`,`Example preview`)),t=R(()=>l(`예제 옵션`,`Example options`));q(ne,{class:`example-layout`,get primary(){return r},get secondary(){return o},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(w)},set size(e){U(w,e,!0)}})}t(te),g(e,te),v()}var kf=u(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack combobox-example svelte-y7k2us"><!></div></div> <div class="example-feedback"><!></div></div>`);function Af(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=R(()=>[{value:`search`,label:i(`통합 검색 품질 평가`,`Unified search quality evaluation`),description:i(`검색 결과와 권한 필터를 함께 검증합니다.`,`Validate search results and permission filters together.`)},{value:`index`,label:i(`전체 색인 정합성 확인`,`Full index consistency check`)},{value:`enterprise`,label:i(`엔터프라이즈 기관별 사용자 권한 동기화 및 검색 결과 비교`,`Enterprise user permission synchronization and search result comparison`),description:i(`긴 이름이 좁은 화면에서도 잘려서는 안 됩니다.`,`Long names must remain readable on narrow screens.`)},{value:`archived`,label:i(`보관된 프로젝트`,`Archived project`),disabled:!0}]),o=N(`search`),s=N(!1),c=R(()=>JSON.stringify({value:f(o),open:f(s)},null,2));var l=kf(),u=D(l),d=D(u),p=D(d);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,c=()=>(t?.()).invalid;{let t=R(()=>i(`검증 프로젝트 검색`,`Search validation projects`)),l=R(()=>i(`프로젝트 선택`,`Select a project`)),u=R(()=>i(`프로젝트 선택 열기`,`Open project selection`)),d=R(()=>i(`프로젝트 이름 검색`,`Search project names`)),p=R(()=>i(`검색 결과가 없습니다.`,`No search results.`));Zs(e,{get id(){return n()},get"aria-describedby"(){return r()},get"aria-label"(){return f(t)},get options(){return f(a)},get placeholder(){return f(l)},get triggerLabel(){return f(u)},get searchPlaceholder(){return f(d)},get emptyLabel(){return f(p)},get invalid(){return c()},get value(){return f(o)},set value(e){U(o,e,!0)},get open(){return f(s)},set open(e){U(s,e,!0)}})}},t=R(()=>i(`검증 프로젝트`,`Validation project`)),n=R(()=>i(`이름을 입력해 프로젝트를 검색합니다.`,`Type a name to search for a project.`));K(p,{get label(){return f(t)},get description(){return f(n)},required:!0,children:e,$$slots:{default:!0}})}t(d),t(u);var m=H(u,2),h=D(m);{let e=R(()=>i(`현재 상태`,`Current state`));Q(h,{get code(){return f(c)},language:`json`,get label(){return f(e)},copy:!1})}t(m),t(l),g(e,l)}var jf=u(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack command-example svelte-ivzbh0"><!></div></div> <div class="example-feedback"><!></div></div>`);function Mf(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=R(()=>[{value:`reindex`,label:i(`전체 검색 색인 다시 실행`,`Rerun the full search index`),group:i(`작업`,`Actions`),keywords:[`index`,`retry`],description:i(`현재 조건으로 새 실행을 만듭니다.`,`Create a new run with the current criteria.`)},{value:`compare`,label:i(`선택 결과 비교`,`Compare selected results`),group:i(`작업`,`Actions`),keywords:[`diff`],description:i(`두 실행의 순위와 권한 결과를 비교합니다.`,`Compare ranking and permission results from two runs.`)},{value:`audit`,label:i(`기관별 권한 스냅샷과 검색 결과의 긴 정합성 보고서 열기`,`Open the detailed organization permission and search consistency report`),group:i(`이동`,`Navigation`),keywords:[`permission`,`report`]},{value:`production`,label:i(`운영 데이터 삭제`,`Delete production data`),group:i(`제한됨`,`Restricted`),disabled:!0,description:i(`예제 문서에서는 사용할 수 없습니다.`,`Unavailable in the sample documentation.`)}]),o=N(``),s=N(``),c=R(()=>JSON.stringify({query:f(o),value:f(s)},null,2));var l=jf(),u=D(l),d=D(u),p=D(d);{let e=R(()=>i(`예제 명령 메뉴`,`Sample command menu`)),t=R(()=>i(`작업 또는 페이지 검색`,`Search actions or pages`)),n=R(()=>i(`일치하는 명령이 없습니다. 다른 검색어를 입력하세요.`,`No matching commands. Try another search term.`));Gs(p,{get options(){return f(a)},get label(){return f(e)},get placeholder(){return f(t)},get emptyLabel(){return f(n)},loop:!0,get query(){return f(o)},set query(e){U(o,e,!0)},get value(){return f(s)},set value(e){U(s,e,!0)}})}t(d),t(u);var m=H(u,2),h=D(m);{let e=R(()=>i(`현재 상태`,`Current state`));Q(h,{get code(){return f(c)},language:`json`,get label(){return f(e)},copy:!1})}t(m),t(l),g(e,l)}var Nf=u(`<div class="context-target svelte-89sb45"><strong> </strong> <span class="svelte-89sb45"> </span></div>`),Pf=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack context-example svelte-89sb45"><!></div></div> <div class="example-feedback"><!></div></div>`),Ff=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),If=u(`<div class="example-layout-shell"><!></div>`);function Lf(e,n){let r=e=>{var n=Nf(),r=D(n),i=D(r);t(r);var a=H(r,2),o=D(a,!0);t(a),t(n),j((e,t)=>{m(i,`${e??``} run-1048`),m(o,t)},[()=>c(`검색 색인 검증`,`Search index validation`),()=>c(`오른쪽 클릭, 길게 누르기 또는 아래 버튼으로 메뉴를 여세요.`,`Right-click, long-press, or use the button below to open the menu.`)]),g(e,n)},i=(e,t=F)=>{G(e,oe(t,{variant:`secondary`,children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>c(`작업 메뉴 열기`,`Open job menu`)]),g(e,n)},$$slots:{default:!0}}))},a=e=>{var n=Pf(),a=D(n),o=D(a),s=D(o);{let e=R(()=>c(`작업 메뉴 열기`,`Open job menu`));qc(s,{get items(){return f(l)},get children(){return r},get fallbackTrigger(){return i},get fallbackLabel(){return f(e)},get disabled(){return f(d)},onselect:e=>U(u,e.value,!0),get open(){return f(p)},set open(e){U(p,e,!0)}})}t(o),t(a);var m=H(a,2),h=D(m);{let e=R(()=>c(`현재 상태`,`Current state`));Q(h,{get code(){return f(_)},language:`json`,get label(){return f(e)},copy:!1})}t(m),t(n),g(e,n)},o=e=>{var n=Ff(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);G(a,{size:`sm`,variant:`secondary`,onclick:()=>U(d,!f(d)),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>f(d)?c(`메뉴 활성화`,`Enable menu`):c(`메뉴 비활성화`,`Disable menu`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>c(`옵션`,`Options`)]),g(e,n)},s=E(n,`locale`,3,`ko`);function c(e,t){return s()===`en`?t:e}let l=R(()=>[{value:`open`,label:c(`상세 열기`,`Open details`),description:c(`선택한 작업의 상세 패널을 엽니다.`,`Open the selected job details panel.`)},{value:`duplicate`,label:c(`조건 복제`,`Duplicate criteria`),shortcut:`⌘ D`},{value:`archive`,label:c(`완료 보관`,`Archive completed job`),disabled:!0},{value:`delete`,label:c(`예제 데이터 삭제`,`Delete sample data`),danger:!0}]),u=N(``),d=N(!1),p=N(!1),h=N(70),_=R(()=>JSON.stringify({open:f(p),selectedValue:f(u),disabled:f(d)},null,2));var v=If(),y=D(v);{let e=R(()=>c(`예제 미리보기`,`Example preview`)),t=R(()=>c(`예제 옵션`,`Example options`));q(y,{class:`example-layout`,get primary(){return a},get secondary(){return o},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(h)},set size(e){U(h,e,!0)}})}t(v),g(e,v)}var Rf=u(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack copy-example svelte-cmq5ai"><!> <div class="example-row"><!> <!></div></div></div> <div class="example-feedback"><!></div></div>`);function zf(e,n){i(n,!0);let r=E(n,`locale`,3,`ko`);function a(e,t){return r()===`en`?t:e}let o=R(()=>JSON.stringify({task:a(`검색 색인 검증`,`Search index validation`),status:`ready`,scope:[`wiki`,`post`]},null,2)),s=N(`idle`),c=R(()=>JSON.stringify({status:f(s)},null,2)),l=N(void 0);se(()=>{let e=!0;return me(async()=>{let{highlightCode:e}=await import(`../chunks/BDhWHrEw.js`);return{highlightCode:e}},__vite__mapDeps([0,1]),import.meta.url).then(async({highlightCode:t})=>{let n=await t(f(o),`json`);e&&U(l,n,!0)}).catch(()=>{e&&U(l,void 0)}),()=>{e=!1}});var u=Rf(),d=D(u),p=D(d),m=D(p);{let e=R(()=>a(`JSON 페이로드`,`JSON payload`));Q(m,{get code(){return f(o)},language:`json`,get label(){return f(e)},copy:!1,get highlightedLines(){return f(l)}})}var h=H(m,2),_=D(h);{let e=R(()=>a(`JSON 복사`,`Copy JSON`)),t=R(()=>a(`JSON 복사됨`,`JSON copied`)),n=R(()=>a(`복사할 수 없음`,`Unable to copy`));wn(_,{get value(){return f(o)},get label(){return f(e)},get copiedLabel(){return f(t)},get errorLabel(){return f(n)},oncopy:()=>U(s,`copied`),onerror:()=>U(s,`error`)})}var y=H(_,2);{let e=R(()=>a(`비활성 복사`,`Disabled copy`));wn(y,{get value(){return f(o)},get label(){return f(e)},disabled:!0})}t(h),t(p),t(d);var b=H(d,2),x=D(b);{let e=R(()=>a(`현재 상태`,`Current state`));Q(x,{get code(){return f(c)},language:`json`,get label(){return f(e)},copy:!1})}t(b),t(u),g(e,u),v()}var Bf=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack data-table-example svelte-1alqjdx"><!></div></div> <div class="example-feedback"><!></div></div>`),Vf=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),Hf=u(`<div class="example-layout-shell"><!></div>`);function Uf(e,n){let r=e=>{var n=Bf(),r=D(n),i=D(r),a=D(i);{let e=R(()=>o(`예제 작업 목록`,`Sample job list`)),t=R(()=>o(`작업 검색`,`Search jobs`)),n=R(()=>o(`작업명·담당자·상태 검색`,`Search job, owner, or status`)),r=R(()=>o(`표시할 열`,`Visible columns`)),i=R(()=>o(`페이지당 행 수`,`Rows per page`)),s=R(()=>o(`표 페이지 이동`,`Table pagination`)),l=R(()=>o(`행 선택`,`Select rows`)),m=R(()=>o(`표시할 작업이 없습니다.`,`No jobs to display.`)),g=R(()=>o(`표시할 열을 선택하세요.`,`Choose at least one visible column.`)),b=R(()=>o(`이전 페이지`,`Previous page`)),x=R(()=>o(`다음 페이지`,`Next page`));Fc(a,{get rows(){return f(u)},get columns(){return f(c)},rowKey:e=>String(e.id),get caption(){return f(e)},selectable:!0,get searchLabel(){return f(t)},get searchPlaceholder(){return f(n)},get columnsLabel(){return f(r)},get pageSizeLabel(){return f(i)},get paginationLabel(){return f(s)},get selectColumnLabel(){return f(l)},rowSelectLabel:(e,t)=>o(`${t+1}번째 행 선택`,`Select row ${t+1}`),get emptyLabel(){return f(m)},get noColumnsLabel(){return f(g)},get previousPageLabel(){return f(b)},get nextPageLabel(){return f(x)},pageSizeOptions:[3,6],get query(){return f(d)},set query(e){U(d,e,!0)},get sort(){return f(p)},set sort(e){U(p,e,!0)},get page(){return f(h)},set page(e){U(h,e,!0)},get pageSize(){return f(_)},set pageSize(e){U(_,e,!0)},get selected(){return f(v)},set selected(e){U(v,e,!0)},get visibleColumns(){return f(y)},set visibleColumns(e){U(y,e,!0)}})}t(i),t(r);var s=H(r,2),l=D(s);{let e=R(()=>o(`현재 상태`,`Current state`));Q(l,{get code(){return f(x)},language:`json`,get label(){return f(e)},copy:!1})}t(s),t(n),g(e,n)},i=e=>{var n=Vf(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);G(a,{size:`sm`,variant:`secondary`,onclick:()=>U(l,!f(l)),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>f(u).length?o(`빈 상태 보기`,`Show empty state`):o(`예제 데이터 복원`,`Restore sample data`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=R(()=>[{id:`1048`,name:o(`검색 색인 검증`,`Search index validation`),owner:o(`민지`,`Minji`),status:o(`성공`,`Success`),records:1240},{id:`1047`,name:o(`기관별 권한 스냅샷 비교`,`Compare organization permission snapshots`),owner:o(`서준`,`Seojun`),status:o(`실행 중`,`Running`),records:392},{id:`1046`,name:o(`매우 긴 Wiki 문서 경로와 댓글 관계 정합성 확인`,`Validate a very long wiki document path and comment relationship`),owner:o(`지우`,`Jiwoo`),status:o(`대기`,`Queued`),records:218},{id:`1045`,name:o(`메타데이터 정합성`,`Metadata consistency`),owner:o(`민지`,`Minji`),status:o(`오류`,`Error`),records:0},{id:`1044`,name:o(`통합 검색 재현`,`Reproduce unified search`),owner:o(`서준`,`Seojun`),status:o(`성공`,`Success`),records:864},{id:`1043`,name:o(`파일 접근 경로 점검`,`Check file access paths`),owner:o(`지우`,`Jiwoo`),status:o(`성공`,`Success`),records:96}]),c=R(()=>[{key:`name`,label:o(`작업`,`Job`),sortable:!0,searchable:!0,hideable:!1},{key:`owner`,label:o(`담당자`,`Owner`),sortable:!0,searchable:!0,hideable:!0},{key:`status`,label:o(`상태`,`Status`),searchable:!0,hideable:!0},{key:`records`,label:o(`처리 건수`,`Records`),align:`end`,sortable:!0,hideable:!0}]),l=N(!0),u=R(()=>f(l)?f(s):[]),d=N(``),p=N(k({key:`records`,direction:`desc`})),h=N(1),_=N(3),v=N(k([])),y=N(k([`name`,`owner`,`status`,`records`])),b=N(70),x=R(()=>JSON.stringify({query:f(d),sort:f(p)??null,page:f(h),pageSize:f(_),selected:f(v),visibleColumns:f(y),rowCount:f(u).length},null,2));var S=Hf(),C=D(S);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(C,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(b)},set size(e){U(b,e,!0)}})}t(S),g(e,S)}var Wf=u(`<div class="example-stack"><!></div>`);function Gf(e,n){let r=e=>{Oe(e,{tone:`success`,children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>a(`정상`,`Healthy`)]),g(e,n)},$$slots:{default:!0}})},i=E(n,`locale`,3,`ko`);function a(e,t){return i()===`en`?t:e}var o=Wf(),s=D(o);{let e=R(()=>a(`작업 상세`,`Job details`)),t=R(()=>[{term:a(`작업 ID`,`Job ID`),value:`run-1048`},{term:a(`상태`,`Status`),value:r},{term:a(`담당 범위`,`Scope`),value:a(`기관별 검색 권한과 매우 긴 Wiki 문서 경로의 정합성 검증`,`Validate organization search permissions and a very long Wiki document path`)},{term:a(`마지막 실행`,`Last run`),value:`2026-09-23 14:32 KST`}]);bn(s,{get label(){return f(e)},columns:2,get items(){return f(t)}})}t(o),g(e,o)}var Kf=u(`<!><!>`,1),qf=u(`<dl><div><dt> </dt> <dd>run-1048</dd></div> <div><dt> </dt> <dd>1,240</dd></div></dl>`),Jf=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function Yf(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=N(!1),o=R(()=>JSON.stringify({open:f(a)},null,2));var s=Jf(),c=D(s),l=D(c);{let e=(e,t=F)=>{G(e,oe(t,{variant:`secondary`,children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`상세 열기`,`Open details`)]),g(e,n)},$$slots:{default:!0}}))},n=e=>{var t=Kf(),n=B(t);G(n,{variant:`secondary`,onclick:()=>U(a,!1),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`닫기`,`Close`)]),g(e,n)},$$slots:{default:!0}});var r=H(n);G(r,{onclick:()=>U(a,!1),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`확인`,`Confirm`)]),g(e,n)},$$slots:{default:!0}}),g(e,t)},r=R(()=>i(`작업 상세`,`Job details`)),o=R(()=>i(`선택한 예제 작업의 실행 정보를 확인합니다.`,`Review execution information for the selected sample job.`)),s=R(()=>i(`닫기`,`Close`));Xe(l,{get title(){return f(r)},get description(){return f(o)},get closeLabel(){return f(s)},get open(){return f(a)},set open(e){U(a,e,!0)},trigger:e,footer:n,children:(e,n)=>{var r=qf(),a=D(r),o=D(a),s=D(o,!0);t(o),L(2),t(a);var c=H(a,2),l=D(c),u=D(l,!0);t(l),L(2),t(c),t(r),j((e,t)=>{m(s,e),m(u,t)},[()=>i(`작업 ID`,`Job ID`),()=>i(`처리 건수`,`Records`)]),g(e,r)},$$slots:{trigger:!0,footer:!0,default:!0}})}t(c);var u=H(c,2),d=D(u);{let e=R(()=>i(`현재 상태`,`Current state`));Q(d,{get code(){return f(o)},language:`json`,get label(){return f(e)},copy:!1})}t(u),t(s),g(e,s)}var Xf=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`),Zf=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),Qf=u(`<div class="example-layout-shell"><!></div>`);function $f(e,n){let r=e=>{var n=Xf(),r=D(n),i=D(r);{let e=R(()=>o(`작업 상태 비율`,`Task status distribution`)),t=R(()=>o(`작업을 상태별 비율로 나눕니다.`,`Tasks grouped by their current status.`));Ol(i,{get data(){return f(l)},get label(){return f(e)},get description(){return f(t)},size:192})}t(r);var a=H(r,2),s=D(a);{let e=R(()=>o(`현재 상태`,`Current state`));Q(s,{get code(){return f(u)},language:`json`,get label(){return f(e)},copy:!1})}t(a),t(n),g(e,n)},i=e=>{var n=Zf(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=R(()=>f(s)?`secondary`:`ghost`);G(a,{size:`sm`,get variant(){return f(e)},get"aria-pressed"(){return f(s)},onclick:()=>U(s,!f(s)),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`대기 작업 포함`,`Include queued tasks`)]),g(e,n)},$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(!0),c=N(70),l=R(()=>[{label:o(`완료`,`Complete`),value:68},{label:o(`실행 중`,`Running`),value:21},...f(s)?[{label:o(`대기`,`Queued`),value:11}]:[]]),u=R(()=>JSON.stringify({includeQueued:f(s),data:f(l)},null,2));var d=Qf(),p=D(d);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(p,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(c)},set size(e){U(c,e,!0)}})}t(d),g(e,d)}var ep=u(` <!>`,1),tp=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function np(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=R(()=>[{value:`duplicate`,label:i(`복제`,`Duplicate`),description:i(`같은 조건으로 새 작업 생성`,`Create a new job with the same criteria`)},{value:`archive`,label:i(`보관`,`Archive`)},{value:`delete`,label:i(`삭제`,`Delete`),danger:!0}]),o=N(``),s=R(()=>JSON.stringify({selectedValue:f(o)},null,2));var c=tp(),l=D(c),u=D(l);{let e=(e,t=F)=>{G(e,oe(t,{variant:`secondary`,children:(e,t)=>{L();var n=ep(),r=B(n),a=H(r);_e(a,{name:`chevron-down`,size:`0.875rem`}),j(e=>m(r,`${e??``} `),[()=>i(`작업 메뉴`,`Job menu`)]),g(e,n)},$$slots:{default:!0}}))},t=R(()=>i(`작업 메뉴`,`Job menu`));Rs(u,{get items(){return f(a)},onselect:e=>U(o,e.value,!0),get label(){return f(t)},trigger:e,$$slots:{trigger:!0}})}t(l);var d=H(l,2),p=D(d);{let e=R(()=>i(`현재 상태`,`Current state`));Q(p,{get code(){return f(s)},language:`json`,get label(){return f(e)},copy:!1})}t(d),t(c),g(e,c)}var rp=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function ip(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=N(0),o=R(()=>JSON.stringify({resetCount:f(a)},null,2));var s=rp(),c=D(s),l=D(c);{let e=e=>{_e(e,{name:`search`,size:`1.5rem`})},t=e=>{G(e,{variant:`secondary`,onclick:()=>U(a,f(a)+1),children:(e,t)=>{L();var n=W();j(e=>m(n,`${e??``}${f(a)?` · ${f(a)}`:``}`),[()=>i(`필터 초기화`,`Reset filters`)]),g(e,n)},$$slots:{default:!0}})},n=R(()=>i(`조건에 맞는 결과가 없습니다`,`No results match these criteria`)),r=R(()=>i(`검색 범위를 넓히거나 필터를 초기화하세요.`,`Broaden the search or reset the filters.`));Be(l,{get title(){return f(n)},get description(){return f(r)},icon:e,actions:t,$$slots:{icon:!0,actions:!0}})}t(c);var u=H(c,2),d=D(u);{let e=R(()=>i(`현재 상태`,`Current state`));Q(d,{get code(){return f(o)},language:`json`,get label(){return f(e)},copy:!1})}t(u),t(s),g(e,s)}var ap=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),op=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),sp=u(`<div class="example-layout-shell"><!></div>`);function cp(e,n){let r=e=>{var n=ap(),r=D(n),i=D(r),a=D(i);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;{let t=R(()=>o(`예: 검색 품질 평가`,`For example, Search quality evaluation`));ye(e,{get id(){return n()},get"aria-describedby"(){return r()},get placeholder(){return f(t)},get invalid(){return i()},get value(){return f(s)},set value(e){U(s,e,!0)}})}},t=R(()=>o(`프로젝트 이름`,`Project name`)),n=R(()=>o(`목록에서 식별할 수 있는 이름을 입력하세요.`,`Enter a name that identifies the project in a list.`)),r=R(()=>f(c)&&!f(s)?o(`프로젝트 이름은 필수입니다.`,`Project name is required.`):void 0);K(a,{get label(){return f(t)},get description(){return f(n)},get error(){return f(r)},required:!0,children:e,$$slots:{default:!0}})}t(i),t(r);var l=H(r,2),d=D(l);{let e=R(()=>o(`현재 상태`,`Current state`));Q(d,{get code(){return f(u)},language:`json`,get label(){return f(e)},copy:!1})}t(l),t(n),g(e,n)},i=e=>{var n=op(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);De(a,{get checked(){return f(c)},set checked(e){U(c,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`오류 표시`,`Show error`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(``),c=N(!0),l=N(70),u=R(()=>JSON.stringify({value:f(s),showError:f(c),invalid:f(c)&&!f(s)},null,2));var d=sp(),p=D(d);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(p,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(l)},set size(e){U(l,e,!0)}})}t(d),g(e,d)}var lp=u(`<div id="hover-card-details" class="hover-card-content svelte-o04fb5"><strong> </strong> <p class="svelte-o04fb5"> </p> <a href="#hover-card-details" class="svelte-o04fb5"> </a></div>`),up=u(`<div class="example-feedback-layout"><div class="example-preview-main hover-card-example svelte-o04fb5"><!></div> <div class="example-feedback"><!></div></div>`);function dp(e,n){let r=(e,t=F)=>{G(e,oe(t,{variant:`secondary`,children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>a(`검색 평가 실행 정보`,`Search evaluation run`)]),g(e,n)},$$slots:{default:!0}}))},i=E(n,`locale`,3,`ko`);function a(e,t){return i()===`en`?t:e}let o=N(!1),s=R(()=>JSON.stringify({open:f(o)},null,2));var c=up(),l=D(c);ou(D(l),{get trigger(){return r},side:`bottom`,align:`start`,get open(){return f(o)},set open(e){U(o,e,!0)},children:(e,n)=>{var r=lp(),i=D(r),o=D(i,!0);t(i);var s=H(i,2),c=D(s,!0);t(s);var l=H(s,2),u=D(l,!0);t(l),t(r),j((e,t,n)=>{m(o,e),m(c,t),m(u,n)},[()=>a(`검색 평가 #184`,`Search evaluation #184`),()=>a(`정확도 94% · 마지막 실행 오늘 10:42`,`94% accuracy · last run today at 10:42`),()=>a(`상세 결과 보기`,`View detailed results`)]),g(e,r)},$$slots:{default:!0}}),t(l);var u=H(l,2),d=D(u);{let e=R(()=>a(`현재 상태`,`Current state`));Q(d,{get code(){return f(s)},language:`json`,get label(){return f(e)},copy:!1})}t(u),t(c),g(e,c)}var fp=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),pp=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),mp=u(`<div class="example-layout-shell"><!></div>`);function hp(e,n){let r=e=>{var n=fp(),r=D(n),i=D(r),a=D(i);{let e=R(()=>o(`즐겨찾기`,`Favorite`));he(a,{get label(){return f(e)},variant:`secondary`,get disabled(){return f(s)},onclick:()=>U(c,!f(c)),children:(e,t)=>{{let t=R(()=>f(c)?`star-filled`:`star`);_e(e,{get name(){return f(t)}})}},$$slots:{default:!0}})}t(i),t(r);var l=H(r,2),d=D(l);{let e=R(()=>o(`현재 상태`,`Current state`));Q(d,{get code(){return f(u)},language:`json`,get label(){return f(e)},copy:!1})}t(l),t(n),g(e,n)},i=e=>{var n=pp(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);De(a,{get checked(){return f(s)},set checked(e){U(s,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`비활성화`,`Disabled`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(!1),c=N(!1),l=N(70),u=R(()=>JSON.stringify({saved:f(c),disabled:f(s)},null,2));var d=mp(),p=D(d);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(p,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(l)},set size(e){U(l,e,!0)}})}t(d),g(e,d)}var gp=u(`<div class="example-preview icon-stage svelte-166r3j6"><div class="icon-sizes svelte-166r3j6"><!> <!> <!> <!></div></div>`),_p=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),vp=u(`<div class="example-layout-shell"><!></div>`);function yp(e,n){i(n,!0);let r=e=>{var n=gp(),r=D(n),i=D(r);_e(i,{get name(){return f(c)},size:`1rem`});var a=H(i,2);_e(a,{get name(){return f(c)},size:`1.5rem`,class:`accent-icon`});var o=H(a,2);_e(o,{get name(){return f(c)},size:32});var l=H(o,2);{let e=R(()=>s(`${f(c)} 버튼`,`${f(c)} button`));he(l,{get label(){return f(e)},variant:`secondary`,children:(e,t)=>{_e(e,{get name(){return f(c)},size:`1.25rem`})},$$slots:{default:!0}})}t(r),t(n),j(e=>P(r,`aria-label`,e),[()=>s(`아이콘 크기 예시`,`Icon size examples`)]),g(e,n)},a=e=>{var n=_p(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return u},get invalid(){return i()},get value(){return f(c)},set value(e){U(c,e,!0)}})},t=R(()=>s(`아이콘`,`Icon`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(`search`),l=N(70),u=ge.map(e=>({value:e,label:e}));var d=vp(),p=D(d);{let e=R(()=>s(`아이콘 미리보기`,`Icon preview`)),t=R(()=>s(`아이콘 옵션`,`Icon options`));q(p,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(l)},set size(e){U(l,e,!0)}})}t(d),g(e,d),v()}var bp=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),xp=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!></div>`),Sp=u(`<div class="example-layout-shell"><!></div>`);function Cp(e,n){i(n,!0);let r=e=>{var n=bp(),r=D(n),i=D(r),a=D(i);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy;{let t=R(()=>s(`검색어를 입력하세요`,`Enter a search term`));ye(e,{get id(){return n()},get"aria-describedby"(){return r()},get size(){return f(l)},get invalid(){return f(u)},get placeholder(){return f(t)},get value(){return f(c)},set value(e){U(c,e,!0)}})}},t=R(()=>s(`검색어`,`Search term`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(i),t(r);var o=H(r,2),d=D(o);{let e=R(()=>s(`현재 상태`,`Current state`));Q(d,{get code(){return f(h)},language:`json`,get label(){return f(e)},copy:!1})}t(o),t(n),g(e,n)},a=e=>{var n=xp(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return d},get invalid(){return i()},get value(){return f(l)},set value(e){U(l,e,!0)}})},t=R(()=>s(`크기`,`Size`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var o=H(a,2);De(o,{get checked(){return f(u)},set checked(e){U(u,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`오류 상태`,`Invalid`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(k(s(`검색 색인`,`Search index`))),l=N(`md`),u=N(!1),d=[`sm`,`md`,`lg`].map(e=>({value:e,label:e})),p=N(70),h=R(()=>JSON.stringify({value:f(c),size:f(l),invalid:f(u)},null,2));var _=Sp(),y=D(_);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(y,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(p)},set size(e){U(p,e,!0)}})}t(_),g(e,_),v()}var wp=e=>{var t=Ep();g(e,t)},Tp=e=>{var n=Dp(),r=D(n);_e(r,{name:`external-link`,size:`1rem`}),t(n),g(e,n)},Ep=u(`<span class="affix svelte-a4xamo">https://flow.team/</span>`),Dp=u(`<span class="affix svelte-a4xamo"><!></span>`),Op=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack input-group-example svelte-a4xamo"><!></div></div> <div class="example-feedback"><!></div></div>`),kp=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),Ap=u(`<div class="example-layout-shell"><!></div>`);function jp(e,n){let r=e=>{var n=Op(),r=D(n),i=D(r);zc(D(i),{get prefix(){return wp},get suffix(){return Tp},get disabled(){return f(c)},children:(e,t)=>{{let t=R(()=>o(`작업 경로`,`Job path`)),n=R(()=>o(`작업 경로 입력`,`Enter a job path`));ye(e,{get"aria-label"(){return f(t)},get placeholder(){return f(n)},get disabled(){return f(c)},get value(){return f(s)},set value(e){U(s,e,!0)}})}},$$slots:{default:!0}}),t(i),t(r);var a=H(r,2),l=D(a);{let e=R(()=>o(`현재 상태`,`Current state`));Q(l,{get code(){return f(u)},language:`json`,get label(){return f(e)},copy:!1})}t(a),t(n),g(e,n)},i=e=>{var n=kp(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);G(a,{size:`sm`,variant:`secondary`,onclick:()=>U(c,!f(c)),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>f(c)?o(`입력 활성화`,`Enable input`):o(`입력 비활성화`,`Disable input`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(`search/jobs`),c=N(!1),l=N(70),u=R(()=>JSON.stringify({value:f(s),disabled:f(c),fullAddress:`https://flow.team/${f(s)}`},null,2));var d=Ap(),p=D(d);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(p,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(l)},set size(e){U(l,e,!0)}})}t(d),g(e,d)}var Mp=u(`<div class="example-feedback-layout"><div class="example-preview-main otp-example svelte-50ooe2"><!> <!></div> <div class="example-feedback"><!></div></div>`);function Np(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=N(``),o=N(!1),s=N(!1),c=R(()=>JSON.stringify({value:f(a),invalid:f(o),completed:f(s)},null,2));var l=Mp(),u=D(l),d=D(u);{let e=R(()=>i(`6자리 인증 코드`,`Six-digit verification code`)),t=R(()=>i(`인증 코드 입력이 완료되었습니다.`,`Verification code entry is complete.`));du(d,{length:6,get label(){return f(e)},get completeLabel(){return f(t)},get invalid(){return f(o)},oncomplete:()=>U(s,!0),onvaluechange:()=>U(s,!1),get value(){return f(a)},set value(e){U(a,e,!0)}})}var p=H(d,2);G(p,{size:`sm`,variant:`secondary`,get"aria-pressed"(){return f(o)},onclick:()=>U(o,!f(o)),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>f(o)?i(`오류 해제`,`Clear error`):i(`오류 상태`,`Mark invalid`)]),g(e,n)},$$slots:{default:!0}}),t(u);var h=H(u,2),_=D(h);{let e=R(()=>i(`현재 상태`,`Current state`));Q(_,{get code(){return f(c)},language:`json`,get label(){return f(e)},copy:!1})}t(h),t(l),g(e,l)}var Pp=u(`<div class="example-stack kbd-example svelte-1r6y1eq"><p class="svelte-1r6y1eq"><span> </span><span class="shortcut svelte-1r6y1eq"><!><!></span></p> <p class="svelte-1r6y1eq"><span class="example-long-label"> </span><span class="shortcut svelte-1r6y1eq"><!><!></span></p> <p class="svelte-1r6y1eq"><span> </span><span class="shortcut svelte-1r6y1eq"><!></span></p></div>`);function Fp(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}var a=Pp(),o=D(a),s=D(o),c=D(s,!0);t(s);var l=H(s),u=D(l);Yc(u,{children:(e,t)=>{L();var n=W(`⌘`);g(e,n)},$$slots:{default:!0}}),Yc(H(u),{children:(e,t)=>{L();var n=W(`K`);g(e,n)},$$slots:{default:!0}}),t(l),t(o);var d=H(o,2),f=D(d),p=D(f,!0);t(f);var h=H(f),_=D(h);Yc(_,{children:(e,t)=>{L();var n=W(`Shift`);g(e,n)},$$slots:{default:!0}}),Yc(H(_),{children:(e,t)=>{L();var n=W(`Enter`);g(e,n)},$$slots:{default:!0}}),t(h),t(d);var v=H(d,2),y=D(v),b=D(y,!0);t(y);var x=H(y);Yc(D(x),{children:(e,t)=>{L();var n=W(`Esc`);g(e,n)},$$slots:{default:!0}}),t(x),t(v),t(a),j((e,t,n)=>{m(c,e),m(p,t),m(b,n)},[()=>i(`문서 검색 열기`,`Open documentation search`),()=>i(`선택한 작업을 새 탭에서 상세하게 열기`,`Open selected job details in a new tab`),()=>i(`현재 메뉴 닫기`,`Close current menu`)]),g(e,a)}var Ip=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="label-example svelte-1uv51xv"><!> <!></div></div> <div class="example-feedback"><!></div></div>`),Lp=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!></div>`),Rp=u(`<div class="example-layout-shell"><!></div>`);function zp(e,n){let r=e=>{var n=Ip(),r=D(n),i=D(r),a=D(i);gu(a,{for:`label-example-input`,get required(){return f(s)},get disabled(){return f(c)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`프로젝트 이름`,`Project name`)]),g(e,n)},$$slots:{default:!0}});var u=H(a,2);{let e=R(()=>o(`이름 입력`,`Enter a name`));ye(u,{id:`label-example-input`,get required(){return f(s)},get disabled(){return f(c)},get placeholder(){return f(e)},get value(){return f(l)},set value(e){U(l,e,!0)}})}t(i),t(r);var p=H(r,2),h=D(p);{let e=R(()=>o(`현재 상태`,`Current state`));Q(h,{get code(){return f(d)},language:`json`,get label(){return f(e)},copy:!1})}t(p),t(n),g(e,n)},i=e=>{var n=Lp(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);De(a,{get checked(){return f(s)},set checked(e){U(s,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`필수 표시`,`Required indicator`)]),g(e,n)},$$slots:{default:!0}});var l=H(a,2);De(l,{get checked(){return f(c)},set checked(e){U(c,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`비활성`,`Disabled`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(!0),c=N(!1),l=N(``),u=N(70),d=R(()=>JSON.stringify({required:f(s),disabled:f(c),value:f(l)},null,2));var p=Rp(),h=D(p);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(h,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(u)},set size(e){U(u,e,!0)}})}t(p),g(e,p)}var Bp=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`),Vp=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!></div>`),Hp=u(`<div class="example-layout-shell"><!></div>`);function Up(e,n){i(n,!0);let r=e=>{var n=Bp(),r=D(n),i=D(r);{let e=R(()=>s(`최근 7일 검색 성공률`,`Search success over seven days`)),t=R(()=>s(`선을 따라 값의 변화를 비교합니다.`,`Compare changes along the line.`));gl(i,{get data(){return f(d)},get label(){return f(e)},get description(){return f(t)},height:220,get showDots(){return f(l)},formatValue:e=>`${e}%`})}t(r);var a=H(r,2),o=D(a);{let e=R(()=>s(`현재 상태`,`Current state`));Q(o,{get code(){return f(p)},language:`json`,get label(){return f(e)},copy:!1})}t(a),t(n),g(e,n)},a=e=>{var n=Vp(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=R(()=>s(`마지막 값`,`Latest value`));Te(a,{get label(){return f(e)},min:20,max:100,get value(){return f(c)},set value(e){U(c,e,!0)}})}var o=H(a,2);{let e=R(()=>f(l)?`secondary`:`ghost`);G(o,{size:`sm`,get variant(){return f(e)},get"aria-pressed"(){return f(l)},onclick:()=>U(l,!f(l)),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`데이터 점 표시`,`Show data points`)]),g(e,n)},$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(84),l=N(!0),u=N(70),d=R(()=>[42,48,45,60,57,68,f(c)].map((e,t)=>({label:String(t+1),value:e}))),p=R(()=>JSON.stringify({latest:f(c),showDots:f(l),data:f(d)},null,2));var h=Hp(),_=D(h);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(_,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(u)},set size(e){U(u,e,!0)}})}t(h),g(e,h),v()}var Wp=u(`<strong class="demo-title svelte-1ggk2we"> </strong> <p class="demo-copy svelte-1ggk2we"> </p>`,1),Gp=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`),Kp=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!></div>`),qp=u(`<div class="example-layout-shell"><!></div>`);function Jp(e,n){let r=e=>{var n=Gp(),r=D(n),i=D(r);mn(i,{get columns(){return f(l)},get minColumnWidth(){return f(u)},class:`masonry-demo`,children:(e,n)=>{var r=c(),i=B(r);a(i,17,()=>f(h),e=>e.id,(e,n)=>{ke(e,{padding:`compact`,children:(e,r)=>{var i=Wp(),a=B(i),o=D(a,!0);t(a);var s=H(a,2),c=D(s,!0);t(s),j(()=>{m(o,f(n).title),m(c,f(n).description)}),g(e,i)},$$slots:{default:!0}})}),g(e,r)},$$slots:{default:!0}}),t(r);var o=H(r,2),d=D(o);{let e=R(()=>s(`현재 상태`,`Current state`));Q(d,{get code(){return f(_)},language:`json`,get label(){return f(e)},copy:!1})}t(o),t(n),g(e,n)},i=e=>{var n=Kp(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=R(()=>s(`최대 열 수`,`Maximum columns`));Te(a,{get label(){return f(e)},min:1,max:4,get value(){return f(l)},set value(e){U(l,e,!0)}})}var o=H(a,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return f(p)},get invalid(){return i()},get value(){return f(u)},set value(e){U(u,e,!0)}})},t=R(()=>s(`최소 열 너비`,`Minimum column width`));K(o,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let l=N(3),u=N(`10rem`),d=N(70),p=R(()=>[{value:`10rem`,label:s(`기본 · 10rem`,`Default · 10rem`)},{value:`12rem`,label:s(`중간 · 12rem`,`Medium · 12rem`)},{value:`14rem`,label:s(`넓게 · 14rem`,`Wide · 14rem`)}]),h=R(()=>[{id:`search`,title:s(`작업 찾기`,`Find jobs`),description:s(`이름과 상태로 필요한 작업을 빠르게 찾습니다.`,`Find the right job by name and status.`)},{id:`review`,title:s(`검토 체크리스트`,`Review checklist`),description:s(`스키마와 권한 결과를 비교하고, 배포 전에 확인할 항목을 차례대로 완료합니다.`,`Compare schema and permission results, then complete each check before deployment.`)},{id:`validation`,title:s(`작업 검증`,`Validate a job`),description:s(`필수 값을 확인합니다.`,`Check required values.`)},{id:`notifications`,title:s(`알림 설정`,`Notification settings`),description:s(`완료와 실패 알림을 나눠 선택하고, 팀이 확인하기 편한 곳으로 결과를 받습니다. 필요한 변화만 알리면 업무 흐름이 더 차분해집니다.`,`Choose completion and failure alerts separately, then receive results where your team can review them. Focused alerts keep the workflow calm.`)},{id:`access`,title:s(`멤버 권한`,`Member access`),description:s(`역할에 맞는 권한을 지정하고 변경 결과를 확인합니다.`,`Assign the right role and review the resulting access.`)},{id:`queue`,title:s(`실행 대기열`,`Execution queue`),description:s(`진행 중인 작업과 실행 한도를 함께 살펴봅니다.`,`Review active jobs and capacity together.`)}]),_=R(()=>JSON.stringify({columns:f(l),minColumnWidth:f(u)},null,2));var v=qp(),y=D(v);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(y,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(d)},set size(e){U(d,e,!0)}})}t(v),g(e,v)}var Yp=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),Xp=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!></div>`),Zp=u(`<div class="example-layout-shell"><!></div>`);function Qp(e,n){i(n,!0);let r=e=>{var n=Yp(),r=D(n),i=D(r),a=D(i);{let e=R(()=>s(`검색 색인 동기화 중`,`Search index synchronization`)),t=R(()=>s(`마지막 변경 2분 전`,`Last change 2 minutes ago`));xu(a,{get label(){return f(e)},get description(){return f(t)},get tone(){return f(c)},get pulse(){return f(l)}})}t(i),t(r);var o=H(r,2),u=D(o);{let e=R(()=>s(`현재 상태`,`Current state`));Q(u,{get code(){return f(p)},language:`json`,get label(){return f(e)},copy:!1})}t(o),t(n),g(e,n)},a=e=>{var n=Xp(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return d},get invalid(){return i()},get value(){return f(c)},set value(e){U(c,e,!0)}})},t=R(()=>s(`톤`,`Tone`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var o=H(a,2);we(o,{get checked(){return f(l)},set checked(e){U(l,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`활성 상태 움직임`,`Active-state motion`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(`info`),l=N(!0),u=N(70),d=[`neutral`,`info`,`success`,`warning`,`danger`].map(e=>({value:e,label:e})),p=R(()=>JSON.stringify({tone:f(c),pulse:f(l)},null,2));var h=Zp(),_=D(h);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(_,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(u)},set size(e){U(u,e,!0)}})}t(h),g(e,h),v()}var $p=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function em(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=R(()=>[{value:`project`,label:i(`프로젝트`,`Project`),items:[{value:`new`,label:i(`새 프로젝트`,`New project`),description:i(`빈 작업 공간을 만듭니다.`,`Create an empty workspace.`),shortcut:`⌘ N`},{value:`duplicate`,label:i(`프로젝트 복제`,`Duplicate project`)},{value:`archive`,label:i(`보관`,`Archive`),disabled:!0}]},{value:`edit`,label:i(`편집`,`Edit`),items:[{value:`undo`,label:i(`실행 취소`,`Undo`),shortcut:`⌘ Z`},{value:`copy`,label:i(`복사`,`Copy`),shortcut:`⌘ C`},{value:`delete`,label:i(`선택 삭제`,`Delete selection`),danger:!0}]},{value:`view`,label:i(`보기`,`View`),items:[{value:`sidebar`,label:i(`사이드바 열기`,`Show sidebar`)},{value:`fullscreen`,label:i(`전체 화면`,`Enter fullscreen`)}]}]),o=N(``),s=N(``),c=R(()=>JSON.stringify({openMenu:f(o),selectedValue:f(s)},null,2));var l=$p(),u=D(l),d=D(u);{let e=R(()=>i(`프로젝트 명령`,`Project commands`));Du(d,{get menus(){return f(a)},get label(){return f(e)},onselect:e=>U(s,e.value,!0),get value(){return f(o)},set value(e){U(o,e,!0)}})}t(u);var p=H(u,2),m=D(p);{let e=R(()=>i(`현재 상태`,`Current state`));Q(m,{get code(){return f(c)},language:`json`,get label(){return f(e)},copy:!1})}t(p),t(l),g(e,l)}var tm=e=>{var t=nm();g(e,t)},nm=u(`<span class="message-avatar svelte-16te9vm">M</span>`),rm=u(`<span> </span>`),im=u(`<p> </p>`),am=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="message-preview svelte-16te9vm"><!></div></div> <div class="example-feedback"><!></div></div>`),om=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),sm=u(`<div class="example-layout-shell"><!></div>`);function cm(e,n){i(n,!0);let r=e=>{var n=rm(),r=D(n,!0);t(n),j(e=>m(r,e),[()=>l(`민지 · 방금`,`Minji · just now`)]),g(e,n)},a=e=>{var n=rm(),r=D(n,!0);t(n),j(e=>m(r,e),[()=>l(`읽음`,`Read`)]),g(e,n)},o=e=>{var n=am(),i=D(n),o=D(i),s=D(o);{let e=R(()=>l(`민지의 메시지`,`Message from Minji`));Pu(s,{get align(){return f(u)},get label(){return f(e)},get avatar(){return tm},get header(){return r},get footer(){return a},children:(e,n)=>{{let n=R(()=>f(u)===`end`?`outgoing`:`incoming`);Ql(e,{get side(){return f(n)},tone:`neutral`,children:(e,n)=>{var r=im(),i=D(r,!0);t(r),j(e=>m(i,e),[()=>l(`검토 결과를 공유했습니다.`,`The review results are ready.`)]),g(e,r)},$$slots:{default:!0}})}},$$slots:{default:!0}})}t(o),t(i);var c=H(i,2),d=D(c);{let e=R(()=>l(`현재 상태`,`Current state`));Q(d,{get code(){return f(h)},language:`json`,get label(){return f(e)},copy:!1})}t(c),t(n),g(e,n)},s=e=>{var n=om(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return p},get invalid(){return i()},get value(){return f(u)},set value(e){U(u,e,!0)}})},t=R(()=>l(`정렬`,`Alignment`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>l(`옵션`,`Options`)]),g(e,n)},c=E(n,`locale`,3,`ko`);function l(e,t){return c()===`en`?t:e}let u=N(`start`),d=N(70),p=[`start`,`end`].map(e=>({value:e,label:e})),h=R(()=>JSON.stringify({align:f(u)},null,2));var _=sm(),y=D(_);{let e=R(()=>l(`예제 미리보기`,`Example preview`)),t=R(()=>l(`예제 옵션`,`Example options`));q(y,{class:`example-layout`,get primary(){return o},get secondary(){return s},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(d)},set size(e){U(d,e,!0)}})}t(_),g(e,_),v()}var lm=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="native-select-example svelte-45iw2g"><!></div></div> <div class="example-feedback"><!></div></div>`),um=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!></div>`),dm=u(`<div class="example-layout-shell"><!></div>`);function fm(e,n){let r=e=>{var n=lm(),r=D(n),i=D(r),a=D(i);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;{let t=R(()=>o(`환경 선택`,`Choose an environment`));Bu(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return f(d)},get placeholder(){return f(t)},get invalid(){return i()},get disabled(){return f(l)},name:`environment`,get value(){return f(s)},set value(e){U(s,e,!0)}})}},t=R(()=>o(`실행 환경`,`Environment`)),n=R(()=>f(c)?o(`환경을 선택하세요.`,`Choose an environment.`):void 0);K(a,{get label(){return f(t)},get error(){return f(n)},children:e,$$slots:{default:!0}})}t(i),t(r);var u=H(r,2),m=D(u);{let e=R(()=>o(`현재 상태`,`Current state`));Q(m,{get code(){return f(p)},language:`json`,get label(){return f(e)},copy:!1})}t(u),t(n),g(e,n)},i=e=>{var n=um(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);De(a,{get checked(){return f(c)},set checked(e){U(c,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`오류 상태`,`Invalid`)]),g(e,n)},$$slots:{default:!0}});var s=H(a,2);De(s,{get checked(){return f(l)},set checked(e){U(l,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`비활성`,`Disabled`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(``),c=N(!1),l=N(!1),u=N(70),d=R(()=>[{value:`development`,label:o(`개발 환경`,`Development`)},{value:`staging`,label:o(`검증 환경`,`Staging`)},{value:`production`,label:o(`운영 환경`,`Production`)}]),p=R(()=>JSON.stringify({value:f(s),invalid:f(c),disabled:f(l)},null,2));var h=dm(),_=D(h);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(_,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(u)},set size(e){U(u,e,!0)}})}t(h),g(e,h)}var pm=u(`<div class="example-feedback-layout"><div id="themes" class="example-preview-main navigation-example svelte-fzisae"><span id="docs" hidden=""></span> <span id="start" hidden=""></span> <span id="principles" hidden=""></span> <span id="components" hidden=""></span> <span id="inputs" hidden=""></span> <span id="navigation" hidden=""></span> <!></div> <div class="example-feedback"><!></div></div>`);function mm(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=R(()=>[{value:`docs`,label:i(`문서`,`Docs`),href:`#docs`,children:[{value:`start`,label:i(`시작하기`,`Get started`),href:`#start`,description:i(`설치와 첫 화면 구성을 확인합니다.`,`Review installation and first-screen setup.`)},{value:`principles`,label:i(`기초 원칙`,`Principles`),href:`#principles`,description:i(`토큰, 밀도, 접근성 원칙을 읽습니다.`,`Read the token, density, and accessibility principles.`)}]},{value:`components`,label:i(`컴포넌트`,`Components`),href:`#components`,children:[{value:`inputs`,label:i(`입력과 선택`,`Inputs and selection`),href:`#inputs`,description:i(`폼과 선택 컴포넌트를 찾습니다.`,`Browse form and selection components.`)},{value:`navigation`,label:i(`탐색`,`Navigation`),href:`#navigation`,description:i(`경로와 메뉴 컴포넌트를 찾습니다.`,`Browse path and menu components.`)}]},{value:`themes`,label:i(`테마`,`Themes`),href:`#themes`,active:!0}]),o=N(``),s=N(``),c=R(()=>JSON.stringify({openGroup:f(o),selectedValue:f(s)},null,2));var l=pm(),u=D(l),d=H(D(u),12);{let e=R(()=>i(`주요 문서 탐색`,`Primary documentation navigation`));qu(d,{get items(){return f(a)},get label(){return f(e)},onselect:e=>U(s,e.value,!0),get value(){return f(o)},set value(e){U(o,e,!0)}})}t(u);var p=H(u,2),m=D(p);{let e=R(()=>i(`현재 상태`,`Current state`));Q(m,{get code(){return f(c)},language:`json`,get label(){return f(e)},copy:!1})}t(p),t(l),g(e,l)}var hm=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),gm=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),_m=u(`<div class="example-layout-shell"><!></div>`);function vm(e,n){i(n,!0);let r=e=>{var n=hm(),r=D(n),i=D(r),a=D(i);{let e=R(()=>s(`작업 페이지`,`Job pages`)),t=R(()=>s(`이전 페이지`,`Previous page`)),n=R(()=>s(`다음 페이지`,`Next page`));ks(a,{count:86,get pageSize(){return f(l)},get label(){return f(e)},get previousLabel(){return f(t)},get nextLabel(){return f(n)},get page(){return f(c)},set page(e){U(c,e,!0)}})}t(i),t(r);var o=H(r,2),u=D(o);{let e=R(()=>s(`현재 상태`,`Current state`));Q(u,{get code(){return f(_)},language:`json`,get label(){return f(e)},copy:!1})}t(o),t(n),g(e,n)},a=e=>{var n=gm(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get value(){return f(d)},get options(){return u},onvaluechange:p,get invalid(){return i()}})},t=R(()=>s(`페이지 크기`,`Page size`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(3),l=N(10),u=[10,20].map(e=>({value:String(e),label:String(e)})),d=R(()=>String(f(l)));function p(e){U(l,Number(e),!0)}let h=N(70),_=R(()=>JSON.stringify({page:f(c),pageSize:f(l),pageCount:Math.ceil(86/f(l))},null,2));var y=_m(),b=D(y);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(b,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(h)},set size(e){U(h,e,!0)}})}t(y),g(e,y),v()}var ym=u(`<div class="popover-content svelte-rb2qts"><strong> </strong> <p class="svelte-rb2qts"> </p> <!> <!></div>`),bm=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function xm(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=N(!1),o=N(!0),s=R(()=>JSON.stringify({open:f(a),onlyFailures:f(o)},null,2));var c=bm(),l=D(c),u=D(l);_n(u,{side:`bottom`,align:`start`,sideOffset:8,get open(){return f(a)},set open(e){U(a,e,!0)},trigger:(e,t=F)=>{G(e,oe(t,{variant:`secondary`,class:`example-long-label`,children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`검색 품질 검증 결과 필터 열기`,`Open validation filters`)]),g(e,n)},$$slots:{default:!0}}))},children:(e,n)=>{var r=ym(),s=D(r),c=D(s,!0);t(s);var l=H(s,2),u=D(l,!0);t(l);var d=H(l,2);De(d,{get checked(){return f(o)},set checked(e){U(o,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`실패한 검증만 표시`,`Show failed validations only`)]),g(e,n)},$$slots:{default:!0}});var p=H(d,2);G(p,{size:`sm`,onclick:()=>U(a,!1),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`적용하고 닫기`,`Apply and close`)]),g(e,n)},$$slots:{default:!0}}),t(r),j((e,t)=>{m(c,e),m(u,t)},[()=>i(`표시할 실행 결과`,`Results to display`),()=>i(`실패한 검증만 남기거나 전체 실행을 다시 표시합니다.`,`Show only failed validations or restore every run.`)]),g(e,r)},$$slots:{trigger:!0,default:!0}}),t(l);var d=H(l,2),p=D(d);{let e=R(()=>i(`현재 상태`,`Current state`));Q(p,{get code(){return f(s)},language:`json`,get label(){return f(e)},copy:!1})}t(d),t(c),g(e,c)}var Sm=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`),Cm=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <div class="example-row"><!> <!></div></div>`),wm=u(`<div class="example-layout-shell"><!></div>`);function Tm(e,n){let r=e=>{var n=Sm(),r=D(n),i=D(r);{let e=R(()=>o(`검색 색인 검증 진행률`,`Search index validation progress`)),t=R(()=>o(`진행 중`,`In progress`)),n=R(()=>f(s)===null?`primary`:f(s)>=80?`success`:`primary`);Ee(i,{get value(){return f(s)},max:100,get label(){return f(e)},showValue:!0,get indeterminateLabel(){return f(t)},get tone(){return f(n)}})}t(r);var a=H(r,2),c=D(a);{let e=R(()=>o(`현재 상태`,`Current state`));Q(c,{get code(){return f(l)},language:`json`,get label(){return f(e)},copy:!1})}t(a),t(n),g(e,n)},i=e=>{var n=Cm(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=R(()=>o(`완료율`,`Completion`)),t=R(()=>f(s)??0),n=R(()=>f(s)===null);Te(a,{get label(){return f(e)},min:0,max:100,get value(){return f(t)},get disabled(){return f(n)},onvaluechange:e=>U(s,e,!0)})}var c=H(a,2),l=D(c);G(l,{size:`sm`,variant:`secondary`,onclick:()=>U(s,null),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`미정`,`Indeterminate`)]),g(e,n)},$$slots:{default:!0}});var u=H(l,2);G(u,{size:`sm`,variant:`ghost`,onclick:()=>U(s,62),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`62% 복원`,`Restore 62%`)]),g(e,n)},$$slots:{default:!0}}),t(c),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(62),c=N(70),l=R(()=>JSON.stringify({value:f(s),indeterminate:f(s)===null},null,2));var u=wm(),d=D(u);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(d,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(c)},set size(e){U(c,e,!0)}})}t(u),g(e,u)}var Em=u(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="radio-example svelte-t8dsiv"><!></div></div> <div class="example-feedback"><!></div></div>`);function Dm(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=R(()=>[{value:`summary`,label:i(`요약만`,`Summary only`),description:i(`상태와 주요 수치만 내보냅니다.`,`Export only status and key metrics.`)},{value:`diagnostics`,label:i(`진단 포함`,`Include diagnostics`),description:i(`검색 단계와 권한 판정 근거를 함께 내보냅니다.`,`Export search steps and permission evidence.`)},{value:`full`,label:i(`전체 진단과 기관별 권한 스냅샷을 포함하는 상세 보고서`,`Detailed report with full diagnostics and organization permission snapshots`),description:i(`긴 레이블도 작은 화면 안에서 줄바꿈됩니다.`,`Long labels wrap on small screens.`)},{value:`production`,label:i(`운영 원문 포함`,`Include production source`),disabled:!0,description:i(`예제 환경에서는 사용할 수 없습니다.`,`Unavailable in the sample environment.`)}]),o=N(`diagnostics`),s=R(()=>JSON.stringify({value:f(o)},null,2));var c=Em(),l=D(c),u=D(l),d=D(u);{let e=R(()=>i(`보고서 상세 수준`,`Report detail level`)),t=R(()=>i(`내보낼 예제 정보의 범위를 선택하세요.`,`Choose how much sample information to export.`));vn(d,{get options(){return f(a)},get label(){return f(e)},get description(){return f(t)},name:`report-detail`,get value(){return f(o)},set value(e){U(o,e,!0)}})}t(u),t(l);var p=H(l,2),m=D(p);{let e=R(()=>i(`현재 상태`,`Current state`));Q(m,{get code(){return f(s)},language:`json`,get label(){return f(e)},copy:!1})}t(p),t(c),g(e,c)}var Om=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function km(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=N(60),o=R(()=>JSON.stringify({value:f(a)},null,2));var s=Om(),c=D(s),l=D(c);{let e=R(()=>i(`완료율`,`Completion`));Te(l,{class:`range-input-example`,get label(){return f(e)},name:`completion`,min:0,max:100,step:5,formatValue:e=>`${e}%`,get value(){return f(a)},set value(e){U(a,e,!0)}})}t(c);var u=H(c,2),d=D(u);{let e=R(()=>i(`현재 상태`,`Current state`));Q(d,{get code(){return f(o)},language:`json`,get label(){return f(e)},copy:!1})}t(u),t(s),g(e,s)}var Am=u(`<section class="pane-content svelte-103dpps"><strong> </strong> <!></section>`),jm=u(`<section class="pane-content svelte-103dpps"><strong> </strong> <p class="svelte-103dpps"><b> </b></p> <p class="svelte-103dpps"> </p></section>`),Mm=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`),Nm=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!></div>`),Pm=u(`<div class="example-layout-shell"><!></div>`);function Fm(e,n){let r=e=>{var n=Am(),r=D(n),i=D(r,!0);t(r);var o=H(r,2);a(o,17,()=>f(_),e=>e.value,(e,t)=>{{let n=R(()=>f(p)===f(t).value);G(e,{variant:`ghost`,get"aria-pressed"(){return f(n)},onclick:()=>U(p,f(t).value,!0),children:(e,n)=>{L();var r=W();j(()=>m(r,f(t).label)),g(e,r)},$$slots:{default:!0}})}}),t(n),j(e=>m(i,e),[()=>l(`작업 목록`,`Job list`)]),g(e,n)},i=e=>{var n=jm(),r=D(n),i=D(r,!0);t(r);var a=H(r,2),o=D(a),s=D(o,!0);t(o),t(a);var c=H(a,2),u=D(c,!0);t(c),t(n),j(e=>{m(i,e),m(s,f(v).label),m(u,f(v).description)},[()=>l(`선택한 작업`,`Selected job`)]),g(e,n)},o=e=>{var n=Mm(),a=D(n),o=D(a);{let e=R(()=>l(`작업 목록 너비`,`Job list width`)),t=R(()=>l(`선택한 작업 상세`,`Selected job details`));q(o,{get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:28,max:72,step:4,get disabled(){return f(d)},get size(){return f(u)},set size(e){U(u,e,!0)}})}t(a);var s=H(a,2),c=D(s);{let e=R(()=>l(`현재 상태`,`Current state`));Q(c,{get code(){return f(y)},language:`json`,get label(){return f(e)},copy:!1})}t(s),t(n),g(e,n)},s=e=>{var n=Nm(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);G(a,{size:`sm`,variant:`secondary`,onclick:()=>U(u,50),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>l(`50:50으로 초기화`,`Reset to 50:50`)]),g(e,n)},$$slots:{default:!0}});var o=H(a,2);G(o,{size:`sm`,variant:`secondary`,onclick:()=>U(d,!f(d)),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>f(d)?l(`크기 조절 활성화`,`Enable resizing`):l(`크기 조절 비활성화`,`Disable resizing`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>l(`옵션`,`Options`)]),g(e,n)},c=E(n,`locale`,3,`ko`);function l(e,t){return c()===`en`?t:e}let u=N(42),d=N(!1),p=N(`search-index`),h=N(70),_=R(()=>[{value:`search-index`,label:l(`검색 색인 검증`,`Search index validation`),description:l(`검색 색인의 문서 수와 권한 필터 결과를 확인합니다.`,`Review the document count and permission filters for the search index.`)},{value:`permission-snapshot`,label:l(`기관별 권한 스냅샷 비교`,`Compare organization permission snapshots`),description:l(`기관별 권한 차이와 긴 프로젝트 경로를 비교합니다.`,`Compare organization permission differences and long project paths.`)}]),v=R(()=>f(_).find(e=>e.value===f(p))??f(_)[0]),y=R(()=>JSON.stringify({size:Math.round(f(u)),disabled:f(d),selectedJob:f(p)},null,2));var b=Pm(),x=D(b);{let e=R(()=>l(`예제 미리보기`,`Example preview`)),t=R(()=>l(`예제 옵션`,`Example options`));q(x,{class:`example-layout`,get primary(){return o},get secondary(){return s},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(h)},set size(e){U(h,e,!0)}})}t(b),g(e,b)}var Im=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),Lm=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),Rm=u(`<div class="example-layout-shell"><!></div>`);function zm(e,n){let r=e=>{var n=Im(),r=D(n),i=D(r),a=D(i);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;{let t=R(()=>o(`작업 상태`,`Job status`));un(e,{get id(){return n()},get"aria-describedby"(){return r()},get"aria-label"(){return f(t)},get options(){return f(s)},get invalid(){return i()},get value(){return f(c)},set value(e){U(c,e,!0)}})}},t=R(()=>o(`상태`,`Status`)),n=R(()=>o(`작업 상태로 결과를 좁힙니다.`,`Narrow the results by job status.`)),r=R(()=>f(l)?o(`상태를 확인하세요.`,`Check the selected status.`):void 0);K(a,{get label(){return f(t)},get description(){return f(n)},get error(){return f(r)},children:e,$$slots:{default:!0}})}t(i),t(r);var u=H(r,2),p=D(u);{let e=R(()=>o(`현재 상태`,`Current state`));Q(p,{get code(){return f(d)},language:`json`,get label(){return f(e)},copy:!1})}t(u),t(n),g(e,n)},i=e=>{var n=Lm(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);De(a,{get checked(){return f(l)},set checked(e){U(l,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`오류 상태`,`Invalid`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=R(()=>[{value:`all`,label:o(`전체 상태`,`All statuses`)},{value:`success`,label:o(`성공`,`Success`),description:o(`완료된 작업`,`Completed jobs`)},{value:`running`,label:o(`실행 중`,`Running`)},{value:`error`,label:o(`오류`,`Error`)}]),c=N(`all`),l=N(!1),u=N(70),d=R(()=>JSON.stringify({value:f(c),invalid:f(l)},null,2));var p=Rm(),h=D(p);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(h,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(u)},set size(e){U(u,e,!0)}})}t(p),g(e,p)}var Bm=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div><section class="svelte-1gisztm"><strong> </strong> <p class="svelte-1gisztm"> </p></section> <!> <section class="svelte-1gisztm"><strong> </strong> <p class="svelte-1gisztm"> </p></section></div></div> <div class="example-feedback"><!></div></div>`),Vm=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),Hm=u(`<div class="example-layout-shell"><!></div>`);function Um(e,n){i(n,!0);let r=e=>{var n=Bm(),r=D(n),i=D(r);let a;var o=D(i),l=D(o),u=D(l,!0);t(l);var p=H(l,2),h=D(p,!0);t(p),t(o);var _=H(o,2);Ne(_,{get orientation(){return f(c)}});var v=H(_,2),y=D(v),b=D(y,!0);t(y);var x=H(y,2),S=D(x,!0);t(x),t(v),t(i),t(r);var C=H(r,2),w=D(C);{let e=R(()=>s(`현재 상태`,`Current state`));Q(w,{get code(){return f(d)},language:`json`,get label(){return f(e)},copy:!1})}t(C),t(n),j((e,t,n,r)=>{a=O(i,1,`separator-example svelte-1gisztm`,null,a,{vertical:f(c)===`vertical`}),m(u,e),m(h,t),m(b,n),m(S,r)},[()=>s(`검색 조건`,`Search criteria`),()=>s(`기간, 담당자, 상태를 조합해 결과 범위를 정합니다.`,`Combine date, owner, and status to define the result set.`),()=>s(`검색 결과`,`Search results`),()=>s(`조건과 구분된 영역에서 일치한 작업과 처리 상태를 확인합니다.`,`Review matching jobs and processing states in a visibly separated region.`)]),g(e,n)},a=e=>{var n=Vm(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return u},get invalid(){return i()},get value(){return f(c)},set value(e){U(c,e,!0)}})},t=R(()=>s(`방향`,`Orientation`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(`horizontal`),l=N(70),u=[`horizontal`,`vertical`].map(e=>({value:e,label:e})),d=R(()=>JSON.stringify({orientation:f(c)},null,2));var p=Hm(),h=D(p);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(h,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(l)},set size(e){U(l,e,!0)}})}t(p),g(e,p),v()}var Wm=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`),Gm=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),Km=u(`<div class="example-layout-shell"><!></div>`);function qm(e,n){let r=e=>{var n=Wm(),r=D(n),i=D(r);{let e=R(()=>o(`결과를 불러오는 중`,`Loading results`));ze(i,{class:`skeleton-example`,get lines(){return f(s)},get label(){return f(e)}})}t(r);var a=H(r,2),c=D(a);{let e=R(()=>o(`현재 상태`,`Current state`));Q(c,{get code(){return f(l)},language:`json`,get label(){return f(e)},copy:!1})}t(a),t(n),g(e,n)},i=e=>{var n=Gm(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=R(()=>o(`줄 수`,`Lines`));Te(a,{get label(){return f(e)},min:1,max:5,get value(){return f(s)},set value(e){U(s,e,!0)}})}t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(3),c=N(70),l=R(()=>JSON.stringify({lines:f(s)},null,2));var u=Km(),d=D(u);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(d,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(c)},set size(e){U(c,e,!0)}})}t(u),g(e,u)}var Jm=u(`<li class="svelte-1nxwk0t"><code class="svelte-1nxwk0t"> </code><span> </span></li>`),Ym=u(`<ol class="svelte-1nxwk0t"></ol>`),Xm=u(`<div class="example-stack scroll-example svelte-1nxwk0t"><!></div>`);function Zm(e,n){i(n,!0);let r=E(n,`locale`,3,`ko`);function o(e,t){return r()===`en`?t:e}let s=R(()=>Array.from({length:18},(e,t)=>({id:t+1,level:t%5==0?`WARN`:`INFO`,message:t%4==0?o(`기관별 권한 스냅샷과 검색 결과의 매우 긴 식별자 경로를 비교했습니다.`,`Compared organization permission snapshots with a very long search result identifier path.`):o(`예제 단계가 정상적으로 완료되었습니다.`,`The sample step completed successfully.`)})));var c=Xm(),l=D(c);{let e=R(()=>o(`실행 로그`,`Execution log`));Ce(l,{get label(){return f(e)},orientation:`both`,maxBlockSize:`16rem`,maxInlineSize:`100%`,children:(e,n)=>{var r=Ym();a(r,21,()=>f(s),e=>e.id,(e,n)=>{var r=Jm(),i=D(r),a=D(i);t(i);var o=H(i),s=D(o,!0);t(o),t(r),j(e=>{m(a,`${e??``} ${f(n).level??``}`),m(s,f(n).message)},[()=>String(f(n).id).padStart(2,`0`)]),g(e,r)}),t(r),g(e,r)},$$slots:{default:!0}})}t(c),g(e,c),v()}var Qm=u(`<li> </li>`),$m=u(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="scroll-top-example svelte-963lpd"><section class="scroll-top-results svelte-963lpd" tabindex="0"><h3 class="svelte-963lpd"> </h3> <ol class="svelte-963lpd"></ol></section> <!></div></div> <div class="example-feedback"><!></div></div>`);function eh(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let o=N(null),s=N(0),c=R(()=>Array.from({length:16},(e,t)=>i(`${t+1}번째 검색 결과`,`Search result ${t+1}`)));var u=$m(),d=D(u),p=D(d),h=D(p),_=D(h),v=D(_,!0);t(_);var y=H(_,2);a(y,23,()=>f(c),(e,t)=>`${t}-${e}`,(e,n)=>{var r=Qm(),i=D(r,!0);t(r),j(()=>m(i,f(n))),g(e,r)}),t(y),t(h),ee(h,e=>U(o,e),()=>f(o));var b=H(h,2);{let e=R(()=>i(`검색 결과 맨 위로 이동`,`Back to the top of search results`));tt(b,{get target(){return f(o)},position:`absolute`,threshold:80,get label(){return f(e)},blockOffset:`var(--soya-space-3)`,inlineOffset:`var(--soya-space-3)`})}t(p),t(d);var x=H(d,2),S=D(x);{let e=R(()=>JSON.stringify({scrollTop:f(s),threshold:80},null,2)),t=R(()=>i(`현재 상태`,`Current state`));Q(S,{get code(){return f(e)},language:`json`,get label(){return f(t)},copy:!1})}t(x),t(u),j((e,t)=>{P(h,`aria-label`,e),m(v,t)},[()=>i(`스크롤 가능한 검색 결과`,`Scrollable search results`),()=>i(`검색 결과`,`Search results`)]),l(`scroll`,h,e=>U(s,e.currentTarget.scrollTop,!0)),g(e,u)}var th=u(`<!> <!>`,1),nh=u(`<div class="sheet-fields svelte-1s44uhi"><!> <p class="svelte-1s44uhi"> </p></div>`),rh=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function ih(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=R(()=>[{value:`search`,label:i(`통합 검색 품질 평가`,`Unified search quality evaluation`)},{value:`index`,label:i(`전체 색인 정합성 확인`,`Full index consistency check`)},{value:`enterprise`,label:i(`엔터프라이즈 기관별 사용자 권한 동기화 및 검색 결과 비교`,`Enterprise user permission synchronization and search result comparison`)}]),o=N(!1),s=N(`search`),c=N(``),l=R(()=>JSON.stringify({open:f(o),project:f(s),appliedProject:f(c)},null,2));function u(){U(c,f(s),!0),U(o,!1)}var d=rh(),p=D(d),h=D(p);{let e=(e,t=F)=>{G(e,oe(t,{variant:`secondary`,class:`example-long-label`,children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`고급 검색 필터와 권한 조건 열기`,`Open advanced search and permission filters`)]),g(e,n)},$$slots:{default:!0}}))},n=e=>{var t=th(),n=B(t);G(n,{variant:`secondary`,onclick:()=>U(o,!1),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`취소`,`Cancel`)]),g(e,n)},$$slots:{default:!0}});var r=H(n,2);G(r,{onclick:u,children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`필터 적용`,`Apply filters`)]),g(e,n)},$$slots:{default:!0}}),g(e,t)},r=R(()=>i(`닫기`,`Close`)),c=R(()=>i(`검색 결과의 고급 필터와 기관별 권한 조건`,`Advanced search filters and organization permission criteria`)),l=R(()=>i(`시트 안에서 검색 가능한 콤보박스를 열어 오버레이 계층과 포커스 이동을 확인합니다.`,`Open a searchable Combobox in the Sheet to inspect overlay stacking and focus movement.`));_c(h,{side:`right`,get closeLabel(){return f(r)},get title(){return f(c)},get description(){return f(l)},get open(){return f(o)},set open(e){U(o,e,!0)},trigger:e,footer:n,children:(e,n)=>{var r=nh(),o=D(r);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,o=()=>(t?.()).invalid;{let t=R(()=>i(`검증 프로젝트 검색`,`Search validation projects in the Sheet`)),c=R(()=>i(`프로젝트 선택 열기`,`Open project selection`)),l=R(()=>i(`프로젝트 검색`,`Search projects`)),u=R(()=>i(`프로젝트를 찾지 못했습니다.`,`No projects found.`));Zs(e,{get id(){return n()},get"aria-describedby"(){return r()},get"aria-label"(){return f(t)},get options(){return f(a)},get triggerLabel(){return f(c)},get searchPlaceholder(){return f(l)},get emptyLabel(){return f(u)},get invalid(){return o()},get value(){return f(s)},set value(e){U(s,e,!0)}})}},t=R(()=>i(`검증 프로젝트`,`Validation project`)),n=R(()=>i(`시트 위에 콤보박스 목록이 열립니다.`,`The Combobox popup opens above the Sheet.`));K(o,{get label(){return f(t)},get description(){return f(n)},children:e,$$slots:{default:!0}})}var c=H(o,2),l=D(c,!0);t(c),t(r),j(e=>m(l,e),[()=>i(`선택한 프로젝트의 성공, 실행 중, 오류 상태를 모두 비교합니다.`,`Compare success, running, and error states for the selected project.`)]),g(e,r)},$$slots:{trigger:!0,footer:!0,default:!0}})}t(p);var _=H(p,2),v=D(_);{let e=R(()=>i(`현재 상태`,`Current state`));Q(v,{get code(){return f(l)},language:`json`,get label(){return f(e)},copy:!1})}t(_),t(d),g(e,d)}var ah=u(`<div class="example-stack spinner-example svelte-113usxw"><div class="example-row"><!> <!> <!></div> <div class="loading-line svelte-113usxw"><!> <span class="svelte-113usxw"> </span></div></div>`);function oh(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}var a=ah(),o=D(a),s=D(o);{let e=R(()=>i(`작은 예제 데이터 로딩`,`Loading a small sample`));je(s,{size:`sm`,get label(){return f(e)}})}var c=H(s,2);{let e=R(()=>i(`검색 결과를 불러오는 중`,`Loading search results`));je(c,{size:`md`,get label(){return f(e)}})}var l=H(c,2);{let e=R(()=>i(`전체 색인 상태를 확인하는 중`,`Checking full index status`));je(l,{size:`lg`,get label(){return f(e)}})}t(o);var u=H(o,2),d=D(u);je(d,{decorative:!0,size:`sm`});var p=H(d,2),h=D(p,!0);t(p),t(u),t(a),j(e=>m(h,e),[()=>i(`기관별 권한 스냅샷과 긴 프로젝트 이름을 확인하는 중...`,`Checking organization permission snapshots and long project names...`)]),g(e,a)}var sh=u(`<span class="sidebar-nav-label svelte-96v9j9"> </span>`),ch=u(`<span class="sidebar-nav-icon svelte-96v9j9" aria-hidden="true"><!></span> <!>`,1),lh=u(`<nav class="example-navigation svelte-96v9j9"></nav>`),uh=u(`<small> </small>`),dh=u(`<div class="example-preview example-feedback-layout sidebar-example svelte-96v9j9"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`),fh=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),ph=u(`<div class="example-layout-shell"><!></div>`);function mh(n,r){let i=(n,r)=>{let i=()=>(r?.()).collapsed;var o=lh();a(o,21,()=>f(v),e=>e.value,(n,r)=>{{let a=R(()=>i()?`sidebar-nav-action is-compact`:`sidebar-nav-action`),o=R(()=>f(h)===f(r).value),s=R(()=>i()?f(r).label:void 0),c=R(()=>i()?f(r).label:void 0);G(n,{variant:`ghost`,get class(){return f(a)},get"aria-pressed"(){return f(o)},get"aria-label"(){return f(s)},get title(){return f(c)},onclick:()=>U(h,f(r).value,!0),children:(n,a)=>{var o=ch(),s=B(o),c=D(s);{let e=R(()=>f(r).value===`overview`?`grid`:f(r).value===`runs`?`history`:`shield-check`);_e(c,{get name(){return f(e)},size:`1rem`})}t(s);var l=H(s,2),u=e=>{var n=sh(),i=D(n,!0);t(n),j(()=>m(i,f(r).label)),g(e,n)};e(l,e=>{i()||e(u)}),g(n,o)},$$slots:{default:!0}})}}),t(o),j(e=>P(o,`aria-label`,e),[()=>u(`예제 작업 공간`,`Sample workspace`)]),g(n,o)},o=(e,n)=>{let r=()=>(n?.()).collapsed;var i=uh(),a=D(i,!0);t(i),j((e,t)=>{O(i,1,de(r()?`sidebar-footer-label is-compact`:`sidebar-footer-label`),`svelte-96v9j9`),P(i,`aria-label`,e),m(a,t)},[()=>r()?u(`Soya 예제 작업 공간 버전 0.1`,`Soya sample workspace version 0.1`):void 0,()=>r()?`v0.1`:u(`Soya 예제 작업 공간 · v0.1`,`Soya sample workspace · v0.1`)]),g(e,i)},s=e=>{var n=dh(),r=D(n),a=D(r);{let e=R(()=>u(`검색 품질 작업 공간`,`Search quality workspace`)),t=R(()=>u(`긴 프로젝트 이름과 도구 탐색 영역 예제`,`Long project name and tool navigation example`)),n=R(()=>u(`사이드바 축소`,`Collapse sidebar`)),r=R(()=>u(`사이드바 확장`,`Expand sidebar`)),s=R(()=>u(`예제 작업 공간 메뉴 열기`,`Open sample workspace menu`)),c=R(()=>u(`닫기`,`Close`));il(a,{get title(){return f(e)},get description(){return f(t)},get navigation(){return i},get footer(){return o},get collapseLabel(){return f(n)},get expandLabel(){return f(r)},get mobileTriggerLabel(){return f(s)},get mobileCloseLabel(){return f(c)},get collapsed(){return f(d)},set collapsed(e){U(d,e,!0)},get open(){return f(p)},set open(e){U(p,e,!0)}})}t(r);var s=H(r,2),c=D(s);{let e=R(()=>u(`현재 상태`,`Current state`));Q(c,{get code(){return f(y)},language:`json`,get label(){return f(e)},copy:!1})}t(s),t(n),g(e,n)},c=e=>{var n=fh(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);G(a,{size:`sm`,variant:`secondary`,onclick:()=>U(d,!f(d)),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>f(d)?u(`데스크톱 사이드바 펼치기`,`Expand desktop sidebar`):u(`데스크톱 사이드바 축소하기`,`Collapse desktop sidebar`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>u(`옵션`,`Options`)]),g(e,n)},l=E(r,`locale`,3,`ko`);function u(e,t){return l()===`en`?t:e}let d=N(!1),p=N(!1),h=N(`overview`),_=N(70),v=R(()=>[{value:`overview`,label:u(`개요`,`Overview`)},{value:`runs`,label:u(`실행 기록`,`Run history`)},{value:`permissions`,label:u(`매우 긴 기관별 권한 비교 결과`,`Very long organization permission comparison results`)}]),y=R(()=>JSON.stringify({collapsed:f(d),open:f(p),section:f(h)},null,2));var b=ph(),x=D(b);{let e=R(()=>u(`예제 미리보기`,`Example preview`)),t=R(()=>u(`예제 옵션`,`Example options`));q(x,{class:`example-layout`,get primary(){return s},get secondary(){return c},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(_)},set size(e){U(_,e,!0)}})}t(b),g(n,b)}var hh=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function gh(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=N(!1),o=R(()=>JSON.stringify({checked:f(a)},null,2));var s=hh(),c=D(s),l=D(c);{let e=R(()=>i(`켜면 30초마다 결과를 갱신합니다.`,`Refresh results every 30 seconds when enabled.`));we(l,{get description(){return f(e)},get checked(){return f(a)},set checked(e){U(a,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>i(`자동 새로고침`,`Automatic refresh`)]),g(e,n)},$$slots:{default:!0}})}t(c);var u=H(c,2),d=D(u);{let e=R(()=>i(`현재 상태`,`Current state`));Q(d,{get code(){return f(o)},language:`json`,get label(){return f(e)},copy:!1})}t(u),t(s),g(e,s)}var _h=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),vh=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <div class="example-row"><!> <!></div></div>`),yh=u(`<div class="example-layout-shell"><!></div>`);function bh(e,n){let r=e=>{var n=_h(),r=D(n),i=D(r),a=D(i);{let e=R(()=>o(`검색 결과에 적용할 태그`,`Tags applied to search results`)),t=R(()=>o(`태그를 입력하고 Enter`,`Enter a tag and press Enter`));wc(a,{get label(){return f(e)},name:`tags`,get placeholder(){return f(t)},removeLabel:e=>o(`${e} 삭제`,`Remove ${e}`),get disabled(){return f(c)},get readonly(){return f(l)},get values(){return f(s)},set values(e){U(s,e,!0)}})}t(i),t(r);var u=H(r,2),p=D(u);{let e=R(()=>o(`현재 상태`,`Current state`));Q(p,{get code(){return f(d)},language:`json`,get label(){return f(e)},copy:!1})}t(u),t(n),g(e,n)},i=e=>{var n=vh(),r=D(n),i=D(r,!0);t(r);var a=H(r,2),s=D(a);G(s,{size:`sm`,variant:`secondary`,onclick:()=>U(c,!f(c)),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>f(c)?o(`사용 가능하게`,`Enable`):o(`비활성화`,`Disable`)]),g(e,n)},$$slots:{default:!0}});var u=H(s,2);G(u,{size:`sm`,variant:`secondary`,onclick:()=>U(l,!f(l)),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>f(l)?o(`편집 가능하게`,`Allow editing`):o(`읽기 전용`,`Make read-only`)]),g(e,n)},$$slots:{default:!0}}),t(a),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(k([o(`검색`,`Search`),o(`권한`,`Permissions`)])),c=N(!1),l=N(!1),u=N(70),d=R(()=>JSON.stringify({values:f(s),disabled:f(c),readonly:f(l)},null,2));var p=yh(),h=D(p);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(h,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(u)},set size(e){U(u,e,!0)}})}t(p),g(e,p)}var xh=u(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="table-example svelte-c5v7x1"><!></div></div> <div class="example-feedback"><!></div></div>`);function Sh(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=R(()=>[{id:`1048`,name:i(`검색 색인 검증`,`Search index validation`),status:i(`성공`,`Success`),records:1240},{id:`1047`,name:i(`권한 스냅샷`,`Permission snapshot`),status:i(`실행 중`,`Running`),records:392},{id:`1045`,name:i(`메타 정합성`,`Metadata consistency`),status:i(`오류`,`Error`),records:0}]),o=R(()=>[{key:`name`,label:i(`작업`,`Job`),sortable:!0},{key:`status`,label:i(`상태`,`Status`)},{key:`records`,label:i(`처리 건수`,`Records`),align:`end`,sortable:!0}]),s=N(k([])),c=N(k({key:`name`,direction:`asc`})),l=R(()=>JSON.stringify({selected:f(s),sort:f(c)},null,2));var u=xh(),d=D(u),p=D(d),m=D(p);{let e=R(()=>i(`최근 작업`,`Recent jobs`)),t=R(()=>i(`행 선택`,`Select rows`)),n=R(()=>i(`표시할 작업이 없습니다.`,`No jobs to display.`));xn(m,{get rows(){return f(a)},get columns(){return f(o)},rowKey:e=>String(e.id),selectable:!0,get sort(){return f(c)},onsort:e=>U(c,e,!0),get caption(){return f(e)},get selectColumnLabel(){return f(t)},rowSelectLabel:(e,t)=>i(`${t+1}번째 행 선택`,`Select row ${t+1}`),get emptyLabel(){return f(n)},get selected(){return f(s)},set selected(e){U(s,e,!0)}})}t(p),t(d);var h=H(d,2),_=D(h);{let e=R(()=>i(`현재 상태`,`Current state`));Q(_,{get code(){return f(l)},language:`json`,get label(){return f(e)},copy:!1})}t(h),t(u),g(e,u)}var Ch=u(`<p> </p>`),wh=u(`<p><!> </p>`),Th=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function Eh(e,n){i(n,!0);let r=e=>{var n=Ch(),r=D(n,!0);t(n),j(e=>m(r,e),[()=>c(`선택된 작업 6건 중 5건이 성공했습니다.`,`Five of six selected jobs succeeded.`)]),g(e,n)},a=e=>{var n=wh(),r=D(n);Oe(r,{tone:`warning`,children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>c(`경고 1건`,`1 warning`)]),g(e,n)},$$slots:{default:!0}});var i=H(r);t(n),j(e=>m(i,` ${e??``}`),[()=>c(`오래 걸린 색인 단계를 확인하세요.`,`Review the slow indexing step.`)]),g(e,n)},o=e=>{{let t=R(()=>c(`원본 결과`,`Raw result`)),n=R(()=>c(`원본 결과 복사`,`Copy raw result`)),r=R(()=>c(`원본 결과 복사됨`,`Raw result copied`)),i=R(()=>c(`원본 결과를 복사할 수 없음`,`Unable to copy raw result`));Q(e,{get code(){return d},language:`json`,get label(){return f(t)},get copyLabel(){return f(n)},get copiedLabel(){return f(r)},get copyErrorLabel(){return f(i)},get highlightedLines(){return f(p)}})}},s=E(n,`locale`,3,`ko`);function c(e,t){return s()===`en`?t:e}let l=N(`summary`),u=R(()=>JSON.stringify({value:f(l)},null,2)),d=JSON.stringify({selected:6,success:5},null,2),p=N(void 0);se(()=>{let e=!0;return me(async()=>{let{highlightCode:e}=await import(`../chunks/BDhWHrEw.js`);return{highlightCode:e}},__vite__mapDeps([0,1]),import.meta.url).then(async({highlightCode:t})=>{let n=await t(d,`json`);e&&U(p,n,!0)}).catch(()=>{e&&U(p,void 0)}),()=>{e=!1}});var h=Th(),_=D(h),y=D(_);{let e=R(()=>c(`작업 결과 탭`,`Job result tabs`)),t=R(()=>[{value:`summary`,label:c(`요약`,`Summary`),content:r},{value:`diagnostics`,label:c(`진단`,`Diagnostics`),content:a},{value:`raw`,label:c(`원본`,`Raw`),content:o}]);yn(y,{class:`tabs-example`,get label(){return f(e)},get items(){return f(t)},get value(){return f(l)},set value(e){U(l,e,!0)}})}t(_);var b=H(_,2),x=D(b);{let e=R(()=>c(`현재 상태`,`Current state`));Q(x,{get code(){return f(u)},language:`json`,get label(){return f(e)},copy:!1})}t(b),t(h),g(e,h),v()}var Dh=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),Oh=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!></div>`),kh=u(`<div class="example-layout-shell"><!></div>`);function Ah(e,n){i(n,!0);let r=e=>{var n=Dh(),r=D(n),i=D(r),a=D(i);{let e=R(()=>s(`작업 메모`,`Job notes`)),t=R(()=>s(`재현 조건과 기대 결과를 입력하세요`,`Enter reproduction steps and expected results`));Se(a,{get resize(){return f(l)},get invalid(){return f(u)},rows:4,get"aria-label"(){return f(e)},get placeholder(){return f(t)},get value(){return f(c)},set value(e){U(c,e,!0)}})}t(i),t(r);var o=H(r,2),d=D(o);{let e=R(()=>s(`현재 상태`,`Current state`));Q(d,{get code(){return f(p)},language:`json`,get label(){return f(e)},copy:!1})}t(o),t(n),g(e,n)},a=e=>{var n=Oh(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return h},get invalid(){return i()},get value(){return f(l)},set value(e){U(l,e,!0)}})},t=R(()=>s(`크기 조절`,`Resize`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var o=H(a,2);De(o,{get checked(){return f(u)},set checked(e){U(u,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`오류 상태`,`Invalid`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(k(s(`재현 조건과 기대 결과를 기록하세요.`,`Record the reproduction steps and expected result.`))),l=N(`vertical`),u=N(!1),d=N(70),p=R(()=>JSON.stringify({value:f(c),resize:f(l),invalid:f(u),characterCount:f(c).length},null,2)),h=[`none`,`vertical`,`both`].map(e=>({value:e,label:e}));var _=kh(),y=D(_);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(y,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(d)},set size(e){U(d,e,!0)}})}t(_),g(e,_),v()}var jh=u(`<div class="example-stack"><strong> </strong> <!></div>`),Mh=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function Nh(e,n){i(n,!0);let r=E(n,`locale`,3,`ko`);function a(e,t){return r()===`en`?t:e}let o=Ct(),s=R(()=>({light:a(`라이트`,`Light`),dark:a(`다크`,`Dark`),system:a(`시스템`,`System`)})),l=R(()=>({neutral:a(`중립`,`Neutral`),blue:a(`파랑`,`Blue`),violet:a(`보라`,`Violet`),green:a(`초록`,`Green`)}));var u=c(),d=B(u);I(d,()=>`${o.mode}-${o.preset}-${o.density}`,e=>{Ke(e,{scope:`local`,get initialMode(){return o.mode},get initialPreset(){return o.preset},get density(){return o.density},persist:!1,class:`example-full-theme-stage theme-example-stage`,children:(e,n=F)=>{var r=Mh(),i=D(r),o=D(i);ke(o,{padding:`comfortable`,children:(e,r)=>{var i=jh(),o=D(i),c=D(o);t(o);var u=H(o,2);{let e=R(()=>a(`색상 모드`,`Color mode`)),t=R(()=>a(`라이트`,`Light`)),n=R(()=>a(`다크`,`Dark`)),r=R(()=>a(`시스템`,`System`)),i=R(()=>a(`색상 프리셋`,`Color preset`)),o=R(()=>a(`중립`,`Neutral`)),s=R(()=>a(`파랑`,`Blue`)),c=R(()=>a(`보라`,`Violet`)),l=R(()=>a(`초록`,`Green`));$e(u,{showPreset:!0,get modeLabel(){return f(e)},get lightLabel(){return f(t)},get darkLabel(){return f(n)},get systemLabel(){return f(r)},get presetLabel(){return f(i)},get neutralLabel(){return f(o)},get blueLabel(){return f(s)},get violetLabel(){return f(c)},get greenLabel(){return f(l)}})}t(i),j(()=>m(c,`${f(l)[n().preset]??``} · ${f(s)[n().mode]??``}`)),g(e,i)},$$slots:{default:!0}}),t(i);var c=H(i,2),u=D(c);{let e=R(()=>JSON.stringify({scope:n().scope,mode:n().mode,effectiveMode:n().effectiveMode,preset:n().preset,density:n().density,template:n().template??null},null,2)),t=R(()=>a(`현재 상태`,`Current state`));Q(u,{get code(){return f(e)},language:`json`,get label(){return f(t)},copy:!1})}t(c),t(r),g(e,r)},$$slots:{default:!0}})}),g(e,u),v()}var Ph=u(`<div class="example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`);function Fh(e,n){i(n,!0);let r=E(n,`locale`,3,`ko`);function a(e,t){return r()===`en`?t:e}let o=Ct();var s=c(),l=B(s);I(l,()=>`${o.mode}-${o.preset}-${o.density}`,e=>{Ke(e,{scope:`local`,get initialMode(){return o.mode},get initialPreset(){return o.preset},get density(){return o.density},persist:!1,class:`example-full-theme-stage theme-example-stage`,children:(e,n=F)=>{var r=Ph(),i=D(r),o=D(i);{let e=R(()=>a(`색상 모드`,`Color mode`)),t=R(()=>a(`라이트`,`Light`)),n=R(()=>a(`다크`,`Dark`)),r=R(()=>a(`시스템`,`System`)),i=R(()=>a(`색상 프리셋`,`Color preset`)),s=R(()=>a(`중립`,`Neutral`)),c=R(()=>a(`파랑`,`Blue`)),l=R(()=>a(`보라`,`Violet`)),u=R(()=>a(`초록`,`Green`));$e(o,{showPreset:!0,get modeLabel(){return f(e)},get lightLabel(){return f(t)},get darkLabel(){return f(n)},get systemLabel(){return f(r)},get presetLabel(){return f(i)},get neutralLabel(){return f(s)},get blueLabel(){return f(c)},get violetLabel(){return f(l)},get greenLabel(){return f(u)}})}t(i);var s=H(i,2),c=D(s);{let e=R(()=>JSON.stringify({scope:n().scope,mode:n().mode,effectiveMode:n().effectiveMode,preset:n().preset,density:n().density,template:n().template??null},null,2)),t=R(()=>a(`현재 상태`,`Current state`));Q(c,{get code(){return f(e)},language:`json`,get label(){return f(t)},copy:!1})}t(s),t(r),g(e,r)},$$slots:{default:!0}})}),g(e,s),v()}var Ih=u(`<div class="example-preview-main"><div class="example-stack toast-policy-example"><div class="example-row"><!> <!></div> <!></div></div> <div class="example-feedback"><!></div>`,1),Lh=u(`<div class="example-preview example-feedback-layout"><!></div>`),Rh=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!></div>`),zh=u(`<div class="example-layout-shell"><!></div>`);function Bh(e,n){i(n,!0);let r=e=>{var n=Lh(),r=D(n);I(r,()=>f(u),e=>{Vn(e,{get state(){return f(u)},children:(e,n)=>{var r=Ih(),i=B(r),a=D(i),o=D(a),d=D(o);G(d,{onclick:y,children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`알림 ${f(l)+1}개 추가`,`Add ${f(l)+1} notifications`)]),g(e,n)},$$slots:{default:!0}});var h=H(d,2);{let e=R(()=>!f(u).items.length);G(h,{variant:`secondary`,get disabled(){return f(e)},onclick:()=>f(u).items[0]&&f(u).dismiss(f(u).items[0].id),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`가장 오래된 표시 중 알림 닫기`,`Dismiss the oldest visible notification`)]),g(e,n)},$$slots:{default:!0}})}t(o);var _=H(o,2);{let e=R(()=>s(`${f(c)} 알림`,`${f(c)} notifications`));Jn(_,{get label(){return f(e)},closeLabel:e=>s(`${e} 닫기`,`Dismiss ${e}`)})}t(a),t(i);var v=H(i,2),b=D(v);{let e=R(()=>s(`현재 상태`,`Current state`));Q(b,{get code(){return f(p)},language:`json`,get label(){return f(e)},copy:!1})}t(v),g(e,r)},$$slots:{default:!0}})}),t(n),g(e,n)},a=e=>{var n=Rh(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get value(){return f(c)},get options(){return h},onvaluechange:x,get invalid(){return i()}})},t=R(()=>s(`알림 초과 처리 정책`,`Toast overflow policy`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var o=H(a,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;{let t=R(()=>String(f(l)));un(e,{get id(){return n()},get"aria-describedby"(){return r()},get value(){return f(t)},get options(){return _},onvaluechange:S,get invalid(){return i()}})}},t=R(()=>s(`동시에 보이는 알림 수`,`Visible notification count`));K(o,{get label(){return f(t)},children:e,$$slots:{default:!0}})}t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(`queue`),l=N(2),u=N(Pn({maxVisible:2,defaultDuration:12e3,overflow:`queue`})),d=N(70),p=R(()=>JSON.stringify({policy:f(c),capacity:f(l),visible:f(u).items.map(({id:e,title:t,tone:n})=>({id:e,title:t,tone:n}))},null,2)),h=[{value:`queue`,label:`queue`},{value:`dismiss-oldest`,label:`dismiss-oldest`}],_=[1,2,3].map(e=>({value:String(e),label:String(e)}));function y(){f(u).clear();for(let e=0;e<f(l)+1;e+=1)f(u).push({title:s(`${e+1}번째 알림`,`Notification ${e+1}`),description:s(`예제 알림 ${e+1}`,`Sample notification ${e+1}`),tone:e===f(l)?`warning`:`info`})}function b(e,t){f(u).destroy(),U(c,e,!0),U(l,t,!0),U(u,Pn({maxVisible:t,defaultDuration:12e3,overflow:e}))}function x(e){(e===`queue`||e===`dismiss-oldest`)&&b(e,f(l))}function S(e){b(f(c),Number(e))}ne(()=>f(u).destroy());var C=zh(),w=D(C);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(w,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(d)},set size(e){U(d,e,!0)}})}t(C),g(e,C),v()}var Vh=u(`<div class="example-preview-main"><div class="example-stack"><div class="example-row"><!> <!> <!></div> <!></div></div> <div class="example-feedback"><!></div>`,1),Hh=u(`<div class="example-preview example-feedback-layout"><!></div>`),Uh=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!> <!> <!> <!></div>`),Wh=u(`<div class="example-layout-shell"><!></div>`);function Gh(e,n){i(n,!0);let r=e=>{var n=Hh();Vn(D(n),{get state(){return c},children:(e,n)=>{var r=Vh(),i=B(r),a=D(i),o=D(a),_=D(o);G(_,{onclick:()=>c.push({title:s(`예제 알림`,`Sample notification`),description:s(`선택한 색상과 동작을 적용했습니다.`,`The selected tone and behavior are applied.`),tone:f(u),duration:6e3,showProgress:f(d),autoDismiss:f(p),dismissible:f(h)}),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`설정한 알림 표시`,`Show configured notification`)]),g(e,n)},$$slots:{default:!0}});var v=H(_,2);G(v,{variant:`danger`,onclick:()=>c.push({title:s(`작업 실패`,`Job failed`),description:s(`예제 데이터 스키마를 확인하세요.`,`Check the sample data schema.`),tone:`danger`,duration:0,showProgress:!1,autoDismiss:!1,dismissible:!0}),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`고정 알림 표시`,`Show persistent notification`)]),g(e,n)},$$slots:{default:!0}});var b=H(v,2);G(b,{variant:`ghost`,onclick:()=>c.clear(),children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`알림 모두 지우기`,`Clear notifications`)]),g(e,n)},$$slots:{default:!0}}),t(o);var x=H(o,2);{let e=R(()=>s(`예제 알림`,`Example notifications`));Jn(x,{get label(){return f(e)},closeLabel:e=>s(`${e} 닫기`,`Dismiss ${e}`),get position(){return f(l)}})}t(a),t(i);var S=H(i,2),C=D(S);{let e=R(()=>s(`현재 상태`,`Current state`));Q(C,{get code(){return f(y)},language:`json`,get label(){return f(e)},copy:!1})}t(S),g(e,r)},$$slots:{default:!0}}),t(n),g(e,n)},a=e=>{var n=Uh(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return b},get invalid(){return i()},get value(){return f(l)},set value(e){U(l,e,!0)}})},t=R(()=>s(`위치`,`Position`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var o=H(a,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return x},get invalid(){return i()},get value(){return f(u)},set value(e){U(u,e,!0)}})},t=R(()=>s(`색상`,`Tone`));K(o,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var c=H(o,2);De(c,{get checked(){return f(d)},set checked(e){U(d,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`진행 표시`,`Show progress`)]),g(e,n)},$$slots:{default:!0}});var _=H(c,2);De(_,{get checked(){return f(p)},set checked(e){U(p,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`자동 닫기`,`Auto-dismiss`)]),g(e,n)},$$slots:{default:!0}});var v=H(_,2);De(v,{get checked(){return f(h)},set checked(e){U(h,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`닫기 허용`,`Dismissible`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=Pn({defaultDuration:6e3}),l=N(`bottom-end`),u=N(`success`),d=N(!0),p=N(!0),h=N(!0),_=N(70),y=R(()=>JSON.stringify({position:f(l),tone:f(u),showProgress:f(d),autoDismiss:f(p),dismissible:f(h),notifications:c.items.map(({id:e,title:t,tone:n})=>({id:e,title:t,tone:n}))},null,2)),b=[{value:`top-start`,label:`top-start`},{value:`top-center`,label:`top-center`},{value:`top-end`,label:`top-end`},{value:`bottom-start`,label:`bottom-start`},{value:`bottom-center`,label:`bottom-center`},{value:`bottom-end`,label:`bottom-end`}],x=[{value:`info`,label:`info`},{value:`success`,label:`success`},{value:`warning`,label:`warning`},{value:`danger`,label:`danger`}];ne(()=>c.destroy());var S=Wh(),C=D(S);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(C,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(_)},set size(e){U(_,e,!0)}})}t(S),g(e,S),v()}var Kh=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><!></div> <div class="example-feedback"><!></div></div>`),qh=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!></div>`),Jh=u(`<div class="example-layout-shell"><!></div>`);function Yh(e,n){let r=e=>{var n=Kh(),r=D(n),i=D(r);{let e=(e,t=F)=>{{let n=R(()=>f(c)?o(`작업 정보 확인됨`,`Job details viewed`):o(`작업 정보 보기`,`View job details`));he(e,oe(t,{get label(){return f(n)},variant:`secondary`,get disabled(){return f(s)},get"aria-pressed"(){return f(c)},onclick:()=>U(c,!0),children:(e,t)=>{{let t=R(()=>f(c)?`check`:`info`);_e(e,{get name(){return f(t)},size:`1rem`})}},$$slots:{default:!0}}))}},t=R(()=>o(`작업 ID와 실행 정보를 확인합니다.`,`View the job ID and run details.`));Ns(i,{get content(){return f(t)},get disabled(){return f(s)},children:e,$$slots:{default:!0}})}t(r);var a=H(r,2),l=D(a);{let e=R(()=>o(`현재 상태`,`Current state`));Q(l,{get code(){return f(u)},language:`json`,get label(){return f(e)},copy:!1})}t(a),t(n),g(e,n)},i=e=>{var n=qh(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);De(a,{get checked(){return f(s)},set checked(e){U(s,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>o(`툴팁과 트리거 비활성화`,`Disable tooltip and trigger`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>o(`옵션`,`Options`)]),g(e,n)},a=E(n,`locale`,3,`ko`);function o(e,t){return a()===`en`?t:e}let s=N(!1),c=N(!1),l=N(70),u=R(()=>JSON.stringify({disabled:f(s),viewed:f(c)},null,2));var d=Jh(),p=D(d);{let e=R(()=>o(`예제 미리보기`,`Example preview`)),t=R(()=>o(`예제 옵션`,`Example options`));q(p,{class:`example-layout`,get primary(){return r},get secondary(){return i},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(l)},set size(e){U(l,e,!0)}})}t(d),g(e,d)}var Xh=u(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!> <!></div></div> <div class="example-feedback"><!></div></div>`);function Zh(e,n){let r=E(n,`locale`,3,`ko`);function i(e,t){return r()===`en`?t:e}let a=R(()=>[{value:`list`,label:i(`목록`,`List`)},{value:`board`,label:i(`보드`,`Board`)},{value:`timeline`,label:i(`타임라인`,`Timeline`),disabled:!0}]),o=R(()=>[{value:`owner`,label:i(`담당자`,`Owner`)},{value:`status`,label:i(`상태`,`Status`)},{value:`updated`,label:i(`수정일`,`Updated`)}]),s=N(`list`),c=N(k([`owner`,`status`])),l=R(()=>JSON.stringify({view:f(s),fields:f(c)},null,2));var u=Xh(),d=D(u),p=D(d),m=D(p);{let e=R(()=>i(`결과 보기 방식`,`Result view`));xe(m,{get items(){return f(a)},get label(){return f(e)},name:`view`,get value(){return f(s)},set value(e){U(s,e,!0)}})}var h=H(m,2);{let e=R(()=>i(`표시할 메타 정보`,`Metadata to display`));xe(h,{type:`multiple`,get items(){return f(o)},get label(){return f(e)},name:`fields`,get value(){return f(c)},set value(e){U(c,e,!0)}})}t(p),t(d);var _=H(d,2),v=D(_);{let e=R(()=>i(`현재 상태`,`Current state`));Q(v,{get code(){return f(l)},language:`json`,get label(){return f(e)},copy:!1})}t(_),t(u),g(e,u)}var Qh=u(`<div class="example-preview example-feedback-layout"><div class="example-preview-main"><div class="example-stack"><!></div></div> <div class="example-feedback"><!></div></div>`),$h=u(`<div class="example-options"><h3 class="example-options-title"> </h3> <!> <!> <!></div>`),eg=u(`<div class="example-layout-shell"><!></div>`);function tg(e,n){i(n,!0);let r=e=>{var n=Qh(),r=D(n),i=D(r);Zu(D(i),{get variant(){return f(u)},get size(){return f(d)},get disabled(){return f(l)},get pressed(){return f(c)},set pressed(e){U(c,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`중요 표시`,`Mark important`)]),g(e,n)},$$slots:{default:!0}}),t(i),t(r);var a=H(r,2),o=D(a);{let e=R(()=>s(`현재 상태`,`Current state`));Q(o,{get code(){return f(y)},language:`json`,get label(){return f(e)},copy:!1})}t(a),t(n),g(e,n)},a=e=>{var n=$h(),r=D(n),i=D(r,!0);t(r);var a=H(r,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return h},get invalid(){return i()},get value(){return f(u)},set value(e){U(u,e,!0)}})},t=R(()=>s(`모양`,`Variant`));K(a,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var o=H(a,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;un(e,{get id(){return n()},get"aria-describedby"(){return r()},get options(){return _},get invalid(){return i()},get value(){return f(d)},set value(e){U(d,e,!0)}})},t=R(()=>s(`크기`,`Size`));K(o,{get label(){return f(t)},children:e,$$slots:{default:!0}})}var c=H(o,2);De(c,{get checked(){return f(l)},set checked(e){U(l,e,!0)},children:(e,t)=>{L();var n=W();j(e=>m(n,e),[()=>s(`비활성`,`Disabled`)]),g(e,n)},$$slots:{default:!0}}),t(n),j(e=>m(i,e),[()=>s(`옵션`,`Options`)]),g(e,n)},o=E(n,`locale`,3,`ko`);function s(e,t){return o()===`en`?t:e}let c=N(!1),l=N(!1),u=N(`outline`),d=N(`md`),p=N(70),h=[`ghost`,`outline`].map(e=>({value:e,label:e})),_=[`sm`,`md`,`lg`].map(e=>({value:e,label:e})),y=R(()=>JSON.stringify({pressed:f(c),variant:f(u),size:f(d),disabled:f(l)},null,2));var b=eg(),x=D(b);{let e=R(()=>s(`예제 미리보기`,`Example preview`)),t=R(()=>s(`예제 옵션`,`Example options`));q(x,{class:`example-layout`,get primary(){return r},get secondary(){return a},get primaryLabel(){return f(e)},get secondaryLabel(){return f(t)},min:55,max:80,get size(){return f(p)},set size(e){U(p,e,!0)}})}t(b),g(e,b),v()}var ng={accordion:{component:pd,source:$.accordion},alert:{component:sd,source:$.alert},"alert-dialog":{component:ud,source:$[`alert-dialog`]},"aspect-ratio":{component:vd,source:$[`aspect-ratio`]},attachment:{component:Td,source:$.attachment},avatar:{component:kd,source:$.avatar},badge:{component:Nd,source:$.badge},"bar-chart":{component:Rd,source:$[`bar-chart`]},breadcrumb:{component:Bd,source:$.breadcrumb},bubble:{component:qd,source:$.bubble},button:{component:Zd,source:$.button},"button-group":{component:ef,source:$[`button-group`]},card:{component:of,source:$.card},calendar:{component:uf,source:$.calendar},carousel:{component:pf,source:$.carousel},checkbox:{component:_f,source:$.checkbox},"color-input":{component:yf,source:$[`color-input`]},collapsible:{component:wf,source:$.collapsible},"code-block":{component:Of,source:$[`code-block`]},combobox:{component:Af,source:$.combobox},command:{component:Mf,source:$.command},"context-menu":{component:Lf,source:$[`context-menu`]},"copy-button":{component:zf,source:$[`copy-button`]},"data-table":{component:Uf,source:$[`data-table`]},"description-list":{component:Gf,source:$[`description-list`]},dialog:{component:Yf,source:$.dialog},"donut-chart":{component:$f,source:$[`donut-chart`]},"dropdown-menu":{component:np,source:$[`dropdown-menu`]},"empty-state":{component:ip,source:$[`empty-state`]},field:{component:cp,source:$.field},"hover-card":{component:dp,source:$[`hover-card`]},"icon-button":{component:hp,source:$[`icon-button`]},icon:{component:yp,source:$.icon},input:{component:Cp,source:$.input},"input-group":{component:jp,source:$[`input-group`]},"input-otp":{component:Np,source:$[`input-otp`]},kbd:{component:Fp,source:$.kbd},label:{component:zp,source:$.label},"line-chart":{component:Up,source:$[`line-chart`]},masonry:{component:Jp,source:$.masonry},marker:{component:Qp,source:$.marker},menubar:{component:em,source:$.menubar},message:{component:cm,source:$.message},"native-select":{component:fm,source:$[`native-select`]},"navigation-menu":{component:mm,source:$[`navigation-menu`]},pagination:{component:vm,source:$.pagination},popover:{component:xm,source:$.popover},progress:{component:Tm,source:$.progress},"radio-group":{component:Dm,source:$[`radio-group`]},"range-input":{component:km,source:$[`range-input`]},resizable:{component:Fm,source:$.resizable},select:{component:zm,source:$.select},separator:{component:Um,source:$.separator},skeleton:{component:qm,source:$.skeleton},"scroll-area":{component:Zm,source:$[`scroll-area`]},"scroll-top":{component:eh,source:$[`scroll-top`]},sheet:{component:ih,source:$.sheet},spinner:{component:oh,source:$.spinner},sidebar:{component:mh,source:$.sidebar},switch:{component:gh,source:$.switch},"tag-input":{component:bh,source:$[`tag-input`]},table:{component:Sh,source:$.table},tabs:{component:Eh,source:$.tabs},textarea:{component:Ah,source:$.textarea},"theme-provider":{component:Nh,source:$[`theme-provider`]},"theme-toggle":{component:Fh,source:$[`theme-toggle`]},"toast-provider":{component:Bh,source:$[`toast-provider`]},toaster:{component:Gh,source:$.toaster},tooltip:{component:Yh,source:$.tooltip},"toggle-group":{component:Zh,source:$[`toggle-group`]},toggle:{component:tg,source:$.toggle}},rg=(e,n=F)=>{var r=sg(),i=D(r,!0);t(r),j(e=>m(i,e),[()=>String(n().value)]),g(e,r)},ig=u(`<sup class="svelte-1dvj3d7"> </sup>`),ag=u(`<em class="svelte-1dvj3d7"> </em>`),og=u(`<span class="prop-name svelte-1dvj3d7"><code> </code><!><!></span>`),sg=u(`<code> </code>`),cg=u(`<meta name="description"/>`),lg=u(`<section id="icons" class="doc-section svelte-1dvj3d7"><h2 class="svelte-1dvj3d7"> </h2> <!></section>`),ug=u(`<h3 class="svelte-1dvj3d7"> </h3> <p> </p> <!>`,1),dg=u(`<li class="svelte-1dvj3d7"><code> </code></li>`),fg=u(`<li> </li>`),pg=u(`<!> <section id="example" class="doc-section svelte-1dvj3d7"><h2 class="svelte-1dvj3d7"> </h2> <p class="section-copy"> </p> <!></section> <section id="usage" class="doc-section docs-prose svelte-1dvj3d7"><h2 class="svelte-1dvj3d7"> </h2> <p> </p> <!> <!></section> <section id="props" class="doc-section svelte-1dvj3d7"><h2 class="svelte-1dvj3d7"> </h2> <p class="section-copy"> </p> <div class="api-table svelte-1dvj3d7"><!></div></section> <section id="states" class="doc-section svelte-1dvj3d7"><h2 class="svelte-1dvj3d7"> </h2> <ul class="tag-list svelte-1dvj3d7"></ul></section> <section id="keyboard" class="doc-section keyboard-notes svelte-1dvj3d7"><h2 class="svelte-1dvj3d7"> </h2> <ul class="svelte-1dvj3d7"></ul></section>`,1);function mg(n,r){i(r,!0);let o=(n,r=F)=>{var i=og(),a=D(i),o=D(a,!0);t(a);var c=H(a),l=e=>{var n=ig(),r=D(n,!0);t(n),j(e=>m(r,e),[()=>s.t(`필수`,`required`)]),g(e,n)};e(c,e=>{r().row.required&&e(l)});var u=H(c),d=e=>{var n=ag(),r=D(n,!0);t(n),j(e=>m(r,e),[()=>s.t(`양방향`,`bindable`)]),g(e,n)};e(u,e=>{r().row.binding&&e(d)}),t(i),j(e=>m(o,e),[()=>String(r().value)]),g(n,i)},s=ve(),c=R(()=>Cn.find(e=>e.slug===r.data.slug)),l=R(()=>ng[r.data.slug]),u=R(()=>Object.entries(f(c).props)),d=R(()=>f(u).map(([e,t])=>({id:e,name:e,type:t.type,defaultValue:t.default??`—`,required:t.required,binding:t.binding,description:s.locale===`en`&&`descriptionEn`in t?String(t.descriptionEn):t.description}))),p=R(()=>[{key:`name`,label:s.t(`속성`,`Prop`),cell:o},{key:`type`,label:s.t(`타입`,`Type`),cell:rg},{key:`defaultValue`,label:s.t(`기본값`,`Default`),cell:rg},{key:`description`,label:s.t(`설명`,`Description`)}]),h=R(()=>`import { ${f(c).name} } from 'soya-ui';`),_=R(()=>[...f(c).name===`Icon`?[{id:`icons`,ko:`아이콘 목록`,en:`Icon library`}]:[],{id:`example`,ko:`실행 예제`,en:`Live example`},{id:`usage`,ko:`사용법`,en:`Usage`},{id:`props`,ko:`속성`,en:`Props`},{id:`states`,ko:`상태`,en:`States`},{id:`keyboard`,ko:`키보드`,en:`Keyboard`}]),y=R(()=>Sn(f(c).name,s.locale)),b=R(()=>[{label:s.t(`가이드`,`Guides`)},{label:s.t(`컴포넌트`,`Components`),href:`/components`},{label:f(c).name,current:!0}]);ue(`1dvj3d7`,e=>{var t=cg();j(()=>P(t,`content`,f(y))),w(()=>{ae.title=`${f(c).name??``} — Soya UI`}),g(e,t)}),Mn(n,{get title(){return f(c).name},get description(){return f(y)},get toc(){return f(_)},get breadcrumbs(){return f(b)},children:(n,r)=>{var i=pg(),o=B(i),u=e=>{var n=lg(),r=D(n),i=D(r,!0);t(r),rd(H(r,2),{get locale(){return s.locale}}),t(n),j(e=>m(i,e),[()=>s.t(`아이콘 목록`,`Icon library`)]),g(e,n)};e(o,e=>{f(c).name===`Icon`&&e(u)});var _=H(o,2),v=D(_),y=D(v,!0);t(v);var b=H(v,2),x=D(b,!0);t(b);var S=H(b,2);Dn(S,{get component(){return f(l).component},get source(){return f(l).source},get name(){return f(c).name},get locale(){return s.locale}}),t(_);var C=H(_,2),w=D(C),T=D(w,!0);t(w);var E=H(w,2),O=D(E,!0);t(E);var k=H(E,2);{let e=R(()=>s.t(`가져오기 예시`,`Import example`));kn(k,{get code(){return f(h)},language:`typescript`,get label(){return f(e)}})}var A=H(k,2),M=e=>{var n=ug(),r=B(n),i=D(r,!0);t(r);var a=H(r,2),o=D(a,!0);t(a);var c=H(a,2);{let e=R(()=>s.t(`어댑터 가져오기`,`Adapter import`));kn(c,{code:`const { highlightCode } = await import('soya-ui/code-block/shiki');`,language:`typescript`,get label(){return f(e)}})}j((e,t)=>{m(i,e),m(o,t)},[()=>s.t(`Shiki 어댑터 선택 사용`,`Optional Shiki adapter`),()=>s.t(`CodeBlock은 추가 패키지 없이 안전한 일반 텍스트, 줄 번호, 줄바꿈과 원본 복사를 제공합니다. 구문 강조가 필요할 때만 앱에 Shiki를 설치하고 별도 하위 경로를 동적으로 가져옵니다.`,`Core provides safe plain text, line numbers, wrapping, and raw-source copying without an additional package. Install Shiki and dynamically import the separate subpath only when syntax highlighting is needed.`)]),g(e,n)};e(A,e=>{f(c).name===`CodeBlock`&&e(M)}),t(C);var N=H(C,2),P=D(N),F=D(P,!0);t(P);var I=H(P,2),L=D(I,!0);t(I);var ee=H(I,2),te=D(ee);{let e=R(()=>s.t(`${f(c).name} 공개 속성`,`${f(c).name} public props`)),t=R(()=>s.t(`공개 속성이 없습니다.`,`No public props.`));xn(te,{get rows(){return f(d)},get columns(){return f(p)},rowKey:e=>String(e.id),get caption(){return f(e)},get emptyLabel(){return f(t)}})}t(ee),t(N);var ne=H(N,2),re=D(ne),z=D(re,!0);t(re);var V=H(re,2);a(V,20,()=>f(c).states,e=>e,(e,n)=>{var r=dg(),i=D(r),a=D(i,!0);t(i),t(r),j(()=>m(a,n)),g(e,r)}),t(V),t(ne);var ie=H(ne,2),ae=D(ie),oe=D(ae,!0);t(ae);var se=H(ae,2);a(se,20,()=>s.locale===`en`&&`keyboardEn`in f(c)?f(c).keyboardEn:f(c).keyboard,e=>e,(e,n)=>{var r=fg(),i=D(r,!0);t(r),j(()=>m(i,n)),g(e,r)}),t(se),t(ie),j((e,t,n,r,i,a,o,s)=>{m(y,e),m(x,t),m(T,n),m(O,r),m(F,i),m(L,a),m(z,o),m(oe,s)},[()=>s.t(`실행 예제`,`Live example`),()=>s.t(`옵션을 바꾸며 동작을 확인하고, 선택한 언어의 예제 코드를 복사해 사용하세요.`,`Try the options and copy the example code in your selected language.`),()=>s.t(`사용법`,`Usage`),()=>s.t(`앱에서는 패키지 최상위에서 공개한 항목만 가져옵니다.`,`Consumer apps use the public export from the package root.`),()=>s.t(`속성`,`Props`),()=>s.t(`아래 항목은 패키지가 제공하는 공개 타입 계약입니다.`,`These entries are the public typed contract provided by the package.`),()=>s.t(`상태`,`States`),()=>s.t(`키보드와 포커스`,`Keyboard and focus`)]),g(n,i)},$$slots:{default:!0}}),v()}export{mg as component,Qu as universal};