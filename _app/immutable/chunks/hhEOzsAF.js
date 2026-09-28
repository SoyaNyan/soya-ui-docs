import{A as e,At as t,Ct as n,D as r,F as i,H as a,I as o,K as s,M as c,P as l,R as u,St as d,T as f,a as p,at as m,ct as h,et as g,ft as _,h as v,k as y,kt as b,mt as x,ot as S,st as C,ut as w,y as T,z as E}from"./fs03ZRsb.js";import{c as D}from"./hUcUdCHE.js";import"./xihTtKlq.js";import{t as O}from"./CyyqgG46.js";import{t as k}from"./Bs2TFlo0.js";import{i as A,n as j}from"./qGf02Wcn.js";import{t as M}from"./RhlqY4Vh.js";import{t as N}from"./CqGZGrQU.js";import{t as P}from"./CA_S8_pu.js";import{t as F}from"./CzDrjlpH.js";import{c as I,l as L,o as R,s as z,t as B}from"./B5MBFxjd.js";import{t as V}from"./Dag4kYoQ.js";import{t as H}from"./Ciq4j09H.js";import{n as U,t as W}from"./DgFq55nQ.js";import{n as ee,t as G}from"./BsZeVic5.js";import{t as K}from"./DjIM00Yd.js";import{t as q}from"./odDRjDlP.js";import{n as J}from"./DFwGy51U.js";import{t as Y}from"./CeqpkF9Y.js";var te=o(`<!> <span class="create-label svelte-12u08ka"> </span>`,1),ne=o(`<div class="brand svelte-12u08ka"><!> <strong class="svelte-12u08ka">Soya Workspace</strong></div> <!> <div class="header-actions svelte-12u08ka"><!> <!></div>`,1),X=o(`<nav class="su-grid su-gap-1"></nav>`),Z=o(`<span> </span><strong> </strong><small> </small>`,1),Q=o(`<span> </span><strong>5</strong><small>-1</small>`,1),re=o(`<span> </span><strong>28</strong><small>+8</small>`,1),ie=o(`<!> <p><strong> </strong> <small> </small></p> <time class="svelte-12u08ka">10:42</time>`,1),ae=o(`<!> <p><strong> </strong> <small> </small></p> <time class="svelte-12u08ka">09:18</time>`,1),oe=o(`<div class="activity-heading svelte-12u08ka"><h3> </h3> <!></div> <ul class="svelte-12u08ka"><li><!></li> <li><!></li></ul>`,1),se=o(`<section class="app-shell-block svelte-12u08ka"><!> <div class="shell-body svelte-12u08ka"><!> <section class="workspace-main svelte-12u08ka"><div class="page-heading svelte-12u08ka"><div><p class="svelte-12u08ka"> </p> <h2 class="svelte-12u08ka"> </h2></div></div> <div class="summary-grid svelte-12u08ka"><!> <!> <!></div> <!></section></div></section>`);function ce(e,i){let a=u();n(i,!0);let o=p(i,`locale`,3,`ko`);function f(e,t){return o()===`en`?t:e}let h=`app-shell-navigation-${a}`,y=_(!1),T=_(`overview`),D=_(!1),j=x(()=>[{id:`overview`,label:f(`개요`,`Overview`)},{id:`projects`,label:f(`프로젝트`,`Projects`)},{id:`activity`,label:f(`활동`,`Activity`)}]),M=x(()=>s(j).find(e=>e.id===s(T))?.label??s(j)[0].label);var N=se(),I=m(N);F(I,{padding:`compact`,class:`shell-header`,children:(e,n)=>{var r=ne(),i=S(r),a=m(i);P(a,{children:(e,t)=>{b();var n=E(`S`);l(e,n)},$$slots:{default:!0}}),b(2),t(i);var o=C(i,2);{let e=x(()=>s(y)?f(`메뉴 닫기`,`Close menu`):f(`메뉴 열기`,`Open menu`));k(o,{class:`menu-button`,size:`sm`,variant:`secondary`,get label(){return s(e)},get"aria-expanded"(){return s(y)},get"aria-controls"(){return h},onclick:()=>w(y,!s(y)),children:(e,t)=>{{let t=x(()=>s(y)?`close`:`menu`);A(e,{get name(){return s(t)},size:`1rem`})}},$$slots:{default:!0}})}var u=C(o,2),d=m(u);P(d,{tone:`success`,children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>f(`동기화됨`,`Synced`)]),l(e,n)},$$slots:{default:!0}});var p=C(d,2);{let e=x(()=>s(D)?f(`프로젝트 추가됨`,`Project added`):f(`새 프로젝트`,`New project`));O(p,{class:`create-button`,size:`sm`,get disabled(){return s(D)},onclick:()=>w(D,!0),get"aria-label"(){return s(e)},children:(e,n)=>{var r=te(),i=S(r);{let e=x(()=>s(D)?`check`:`plus`);A(i,{get name(){return s(e)},size:`1rem`})}var a=C(i,2),o=m(a,!0);t(a),g(e=>c(o,e),[()=>s(D)?f(`프로젝트 추가됨`,`Project added`):f(`새 프로젝트`,`New project`)]),l(e,r)},$$slots:{default:!0}})}t(u),l(e,r)},$$slots:{default:!0}});var L=C(I,2),R=m(L);{let e=x(()=>s(y)?`navigation-card open`:`navigation-card`);F(R,{get id(){return h},padding:`compact`,get class(){return s(e)},children:(e,n)=>{var i=X();r(i,21,()=>s(j),e=>e.id,(e,t)=>{{let n=x(()=>s(T)===s(t).id?`secondary`:`ghost`),r=x(()=>s(T)===s(t).id?`page`:void 0);O(e,{class:`navigation-action`,get variant(){return s(n)},get"aria-current"(){return s(r)},onclick:()=>{w(T,s(t).id,!0),w(y,!1)},children:(e,n)=>{b();var r=E();g(()=>c(r,s(t).label)),l(e,r)},$$slots:{default:!0}})}}),t(i),g(e=>v(i,`aria-label`,e),[()=>f(`워크스페이스 메뉴`,`Workspace menu`)]),l(e,i)},$$slots:{default:!0}})}var z=C(R,2),B=m(z),V=m(B),H=m(V),U=m(H,!0);t(H);var W=C(H,2),ee=m(W,!0);t(W),t(V),t(B);var G=C(B,2),K=m(G);{let e=x(()=>f(`진행 중`,`In progress`));F(K,{padding:`compact`,class:`summary-card`,role:`group`,get"aria-label"(){return s(e)},children:(e,n)=>{var r=Z(),i=S(r),a=m(i,!0);t(i);var o=C(i),u=m(o,!0);t(o);var d=C(o),p=m(d,!0);t(d),g(e=>{c(a,e),c(u,s(D)?13:12),c(p,s(D)?`+4`:`+3`)},[()=>f(`진행 중`,`In progress`)]),l(e,r)},$$slots:{default:!0}})}var q=C(K,2);{let e=x(()=>f(`검토 대기`,`Waiting for review`));F(q,{padding:`compact`,class:`summary-card`,role:`group`,get"aria-label"(){return s(e)},children:(e,n)=>{var r=Q(),i=S(r),a=m(i,!0);t(i),b(2),g(e=>c(a,e),[()=>f(`검토 대기`,`Waiting for review`)]),l(e,r)},$$slots:{default:!0}})}var J=C(q,2);{let e=x(()=>f(`이번 주 완료`,`Completed this week`));F(J,{padding:`compact`,class:`summary-card`,role:`group`,get"aria-label"(){return s(e)},children:(e,n)=>{var r=re(),i=S(r),a=m(i,!0);t(i),b(2),g(e=>c(a,e),[()=>f(`이번 주 완료`,`Completed this week`)]),l(e,r)},$$slots:{default:!0}})}t(G);var Y=C(G,2);{let e=x(()=>`recent-activity-title-${a}`);F(Y,{padding:`comfortable`,class:`activity`,get"aria-labelledby"(){return s(e)},children:(e,n)=>{var r=oe(),i=S(r),o=m(i),s=m(o,!0);t(o);var u=C(o,2);P(u,{children:(e,t)=>{b();var n=E(`2`);l(e,n)},$$slots:{default:!0}}),t(i);var d=C(i,2),p=m(d),h=m(p);F(h,{padding:`compact`,class:`activity-row`,children:(e,n)=>{var r=ie(),i=S(r);P(i,{children:(e,t)=>{b();var n=E(`MJ`);l(e,n)},$$slots:{default:!0}});var a=C(i,2),o=m(a),s=m(o,!0);t(o);var u=C(o,2),d=m(u,!0);t(u),t(a),b(2),g((e,t)=>{c(s,e),c(d,t)},[()=>f(`검색 색인 검토`,`Search index review`),()=>f(`민지가 검토를 요청했습니다.`,`Minji requested a review.`)]),l(e,r)},$$slots:{default:!0}}),t(p);var _=C(p,2),y=m(_);F(y,{padding:`compact`,class:`activity-row`,children:(e,n)=>{var r=ae(),i=S(r);P(i,{children:(e,t)=>{b();var n=E(`SJ`);l(e,n)},$$slots:{default:!0}});var a=C(i,2),o=m(a),s=m(o,!0);t(o);var u=C(o,2),d=m(u,!0);t(u),t(a),b(2),g((e,t)=>{c(s,e),c(d,t)},[()=>f(`권한 정책 업데이트`,`Permission policy update`),()=>f(`서준이 새 버전을 게시했습니다.`,`Seojun published a new version.`)]),l(e,r)},$$slots:{default:!0}}),t(_),t(d),g(e=>{v(o,`id`,`recent-activity-title-${a}`),c(s,e)},[()=>f(`최근 활동`,`Recent activity`)]),l(e,r)},$$slots:{default:!0}})}t(z),t(L),t(N),g((e,t)=>{v(N,`aria-label`,e),c(U,t),c(ee,s(M))},[()=>f(`프로젝트 관리 화면`,`Project workspace`),()=>f(`워크스페이스`,`Workspace`)]),l(e,N),d()}var le=o(`<!> <!>`,1),ue=o(`<div><strong> </strong><small class="svelte-1013uh1"> </small></div> <!>`,1),de=o(`<li><!></li>`),fe=o(`<ul class="svelte-1013uh1"></ul>`),pe=o(`<div class="section-heading svelte-1013uh1"><div><h2 class="svelte-1013uh1"> </h2> <p class="svelte-1013uh1"> </p></div> <!></div> <form class="svelte-1013uh1"><!> <!> <!> <!></form> <!> <section class="results svelte-1013uh1" aria-live="polite"><p class="svelte-1013uh1"><strong> </strong> </p> <!></section>`,1);function me(i,o){let f=u();n(o,!0);let y=p(o,`locale`,3,`ko`);function T(e,t){return y()===`en`?t:e}let D=_(``),k=_(`all`),A=_(`all`),j=_(h({keyword:``,status:`all`,owner:`all`})),I=x(()=>[{id:`SR-1048`,title:T(`검색 색인 검증`,`Search index validation`),owner:`minji`,ownerLabel:T(`민지`,`Minji`),status:`ready`,statusLabel:T(`준비됨`,`Ready`),tone:`success`},{id:`SR-1047`,title:T(`권한 스냅샷 비교`,`Permission snapshot comparison`),owner:`seojun`,ownerLabel:T(`서준`,`Seojun`),status:`running`,statusLabel:T(`실행 중`,`Running`),tone:`info`},{id:`SR-1046`,title:T(`첨부 파일 경로 점검`,`Attachment path audit`),owner:`minji`,ownerLabel:T(`민지`,`Minji`),status:`done`,statusLabel:T(`완료`,`Done`),tone:`neutral`}]),z=x(()=>[{value:`all`,label:T(`모든 상태`,`All statuses`)},{value:`ready`,label:T(`준비됨`,`Ready`)},{value:`running`,label:T(`실행 중`,`Running`)},{value:`done`,label:T(`완료`,`Done`)}]),B=x(()=>[{value:`all`,label:T(`모든 담당자`,`All owners`)},{value:`minji`,label:T(`민지`,`Minji`)},{value:`seojun`,label:T(`서준`,`Seojun`)}]),V=x(()=>s(I).filter(e=>{let t=s(j).keyword.trim().toLocaleLowerCase();return(!t||`${e.title} ${e.ownerLabel}`.toLocaleLowerCase().includes(t))&&(s(j).status===`all`||e.status===s(j).status)&&(s(j).owner===`all`||e.owner===s(j).owner)})),W=x(()=>Number(!!s(j).keyword)+Number(s(j).status!==`all`)+Number(s(j).owner!==`all`));function ee(e){e.preventDefault(),w(j,{keyword:s(D),status:s(k),owner:s(A)},!0)}function G(){w(D,``),w(k,`all`),w(A,`all`),w(j,{keyword:``,status:`all`,owner:`all`},!0)}{let n=x(()=>`filter-title-${f}`);F(i,{padding:`comfortable`,class:`filter-block`,role:`region`,get"aria-labelledby"(){return s(n)},children:(n,i)=>{var o=pe(),u=S(o),d=m(u),p=m(d),h=m(p,!0);t(p);var _=C(p,2),y=m(_,!0);t(_),t(d);var j=C(d,2),I=e=>{P(e,{tone:`info`,children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>T(`${s(W)}개 적용`,`${s(W)} active`)]),l(e,n)},$$slots:{default:!0}})};e(j,e=>{s(W)&&e(I)}),t(u);var K=C(u,2),q=m(K);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;{let t=x(()=>T(`작업명 또는 담당자 검색`,`Search task or owner`));M(e,{get id(){return n()},get"aria-describedby"(){return r()},get invalid(){return i()},get placeholder(){return s(t)},get value(){return s(D)},set value(e){w(D,e,!0)}})}},t=x(()=>T(`검색어`,`Search`));N(q,{get label(){return s(t)},children:e,$$slots:{default:!0}})}var J=C(q,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;U(e,{get id(){return n()},get"aria-describedby"(){return r()},get invalid(){return i()},get options(){return s(z)},get value(){return s(k)},set value(e){w(k,e,!0)}})},t=x(()=>T(`상태`,`Status`));N(J,{get label(){return s(t)},children:e,$$slots:{default:!0}})}var Y=C(J,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;U(e,{get id(){return n()},get"aria-describedby"(){return r()},get invalid(){return i()},get options(){return s(B)},get value(){return s(A)},set value(e){w(A,e,!0)}})},t=x(()=>T(`담당자`,`Owner`));N(Y,{get label(){return s(t)},children:e,$$slots:{default:!0}})}var te=C(Y,2);{let e=x(()=>T(`필터 작업`,`Filter actions`));R(te,{class:`filter-actions`,get label(){return s(e)},attached:!1,children:(e,t)=>{var n=le(),r=S(n);O(r,{type:`button`,variant:`ghost`,onclick:G,children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>T(`초기화`,`Reset`)]),l(e,n)},$$slots:{default:!0}});var i=C(r,2);O(i,{type:`submit`,children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>T(`필터 적용`,`Apply filters`)]),l(e,n)},$$slots:{default:!0}}),l(e,n)},$$slots:{default:!0}})}t(K);var ne=C(K,2);L(ne,{class:`results-separator`});var X=C(ne,2),Z=m(X),Q=m(Z),re=m(Q,!0);t(Q);var ie=C(Q);t(Z);var ae=C(Z,2),oe=e=>{var n=fe();r(n,21,()=>s(V),e=>e.id,(e,n)=>{var r=de(),i=m(r);F(i,{padding:`compact`,class:`result-card`,children:(e,r)=>{var i=ue(),a=S(i),o=m(a),u=m(o,!0);t(o);var d=C(o),f=m(d);t(d),t(a);var p=C(a,2);P(p,{get tone(){return s(n).tone},children:(e,t)=>{b();var r=E();g(()=>c(r,s(n).statusLabel)),l(e,r)},$$slots:{default:!0}}),g(()=>{c(u,s(n).title),c(f,`${s(n).id??``} · ${s(n).ownerLabel??``}`)}),l(e,i)},$$slots:{default:!0}}),t(r),l(e,r)}),t(n),l(e,n)},se=e=>{{let t=x(()=>T(`조건에 맞는 작업이 없습니다.`,`No tasks match these filters.`)),n=x(()=>T(`검색어나 필터 조건을 변경해 보세요.`,`Try changing the search or filter criteria.`));H(e,{get title(){return s(t)},get description(){return s(n)}})}};e(ae,e=>{s(V).length?e(oe):e(se,-1)}),t(X),g((e,t,n,r,i)=>{v(p,`id`,`filter-title-${f}`),c(h,e),c(y,t),v(X,`aria-label`,n),c(re,r),c(ie,` ${i??``}`)},[()=>T(`작업 필터`,`Task filters`),()=>T(`필요한 작업만 빠르게 좁혀보세요.`,`Narrow the task list to what matters.`),()=>T(`필터 결과`,`Filter results`),()=>T(`${s(V).length}개 작업`,`${s(V).length} tasks`),()=>s(W)?T(` · 필터 적용됨`,` · Filters applied`):T(` · 전체 결과`,` · All results`)]),a(`submit`,K,ee),l(n,o)},$$slots:{default:!0}})}d()}var he=o(`<!> <!>`,1),ge=o(`<!> <div class="header-row svelte-1qbr59d"><div class="title-group svelte-1qbr59d"><div class="su-flex su-flex-wrap su-items-center su-gap-3 eyebrow svelte-1qbr59d"><!> <span>FLOW-248</span></div> <h2 class="svelte-1qbr59d"> </h2> <p class="su-max-w-prose svelte-1qbr59d"> </p></div> <!></div> <!> <span class="sr-status svelte-1qbr59d" aria-live="polite"> </span>`,1);function _e(e,n){let r=u(),i=p(n,`locale`,3,`ko`);function a(e,t){return i()===`en`?t:e}let o=_(!1),d=_(!1),f=x(()=>[{label:a(`프로젝트`,`Projects`)},{label:a(`검색 고도화`,`Search quality`),current:!0}]),h=x(()=>[{term:a(`담당자`,`Owner`),value:a(`민지 김`,`Minji Kim`)},{term:a(`마감일`,`Due date`),value:`2026. 10. 02.`},{term:a(`우선순위`,`Priority`),value:a(`높음`,`High`)}]);{let n=x(()=>`page-title-${r}`);F(e,{padding:`comfortable`,class:`page-header-block`,role:`region`,get"aria-labelledby"(){return s(n)},children:(e,n)=>{var i=ge(),u=S(i);{let e=x(()=>a(`현재 위치`,`Breadcrumb`));J(u,{get label(){return s(e)},get items(){return s(f)},separator:`/`})}var p=C(u,2),_=m(p),y=m(_),T=m(y);{let e=x(()=>s(d)?`info`:`success`);P(T,{get tone(){return s(e)},children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>s(d)?a(`검토 대기`,`Awaiting review`):a(`진행 중`,`In progress`)]),l(e,n)},$$slots:{default:!0}})}b(2),t(y);var D=C(y,2),k=m(D,!0);t(D);var A=C(D,2),j=m(A,!0);t(A),t(_);var M=C(_,2);{let e=x(()=>a(`페이지 작업`,`Page actions`));R(M,{class:`header-actions`,get label(){return s(e)},attached:!1,children:(e,t)=>{var n=he(),r=S(n);O(r,{variant:`secondary`,onclick:()=>w(o,!s(o)),children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>s(o)?a(`저장됨`,`Saved`):a(`임시 저장`,`Save draft`)]),l(e,n)},$$slots:{default:!0}});var i=C(r,2);O(i,{get disabled(){return s(d)},onclick:()=>w(d,!0),children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>s(d)?a(`검토 요청됨`,`Review requested`):a(`검토 요청`,`Request review`)]),l(e,n)},$$slots:{default:!0}}),l(e,n)},$$slots:{default:!0}})}t(p);var N=C(p,2);{let e=x(()=>a(`프로젝트 상세`,`Project details`));G(N,{class:`page-details`,get label(){return s(e)},columns:2,get items(){return s(h)}})}var F=C(N,2),I=m(F,!0);t(F),g((e,t,n)=>{v(D,`id`,`page-title-${r}`),c(k,e),c(j,t),c(I,n)},[()=>a(`검색 결과 품질 개선`,`Improve search result quality`),()=>a(`검색 평가 지표와 권한 필터 결과를 한 곳에서 검토합니다.`,`Review search evaluation metrics and permission filtering in one place.`),()=>s(d)?a(`검토를 요청했습니다.`,`Review requested.`):s(o)?a(`초안이 저장되었습니다.`,`Draft saved.`):``]),l(e,i)},$$slots:{default:!0}})}}var ve=o(`<div class="state-message compact svelte-11uxd1k"><!> <div class="svelte-11uxd1k"><strong> </strong> <span class="svelte-11uxd1k"> </span></div></div> <!>`,1),ye=o(`<span>Wiki</span><strong>128</strong><small class="svelte-11uxd1k"> </small>`,1),be=o(`<span>Posts</span><strong>42</strong><small class="svelte-11uxd1k"> </small>`,1),xe=o(`<span>Comments</span><strong>316</strong><small class="svelte-11uxd1k"> </small>`,1),Se=o(`<div class="success-heading svelte-11uxd1k"><div class="svelte-11uxd1k"><!> <strong> </strong></div> <span class="svelte-11uxd1k">2.4s</span></div> <ul class="svelte-11uxd1k"><li><!></li> <li><!></li> <li><!></li></ul>`,1),Ce=o(`<header class="svelte-11uxd1k"><div><h2 class="svelte-11uxd1k"> </h2> <p class="svelte-11uxd1k"> </p></div> <!></header> <!> <div class="result-content svelte-11uxd1k" aria-live="polite"><!></div>`,1);function we(n,a){let o=u(),d=e=>{O(e,{variant:`secondary`,onclick:()=>w(T,`success`),children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>y(`전체 결과 보기`,`Show all results`)]),l(e,n)},$$slots:{default:!0}})},f=e=>{O(e,{onclick:()=>w(T,`success`),children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>y(`다시 시도`,`Try again`)]),l(e,n)},$$slots:{default:!0}})},h=p(a,`locale`,3,`ko`);function y(e,t){return h()===`en`?t:e}let T=_(`success`),D=x(()=>[{id:`loading`,label:y(`로딩`,`Loading`)},{id:`empty`,label:y(`빈 결과`,`Empty`)},{id:`error`,label:y(`오류`,`Error`)},{id:`success`,label:y(`성공`,`Success`)}]);{let a=x(()=>`result-title-${o}`);F(n,{padding:`none`,class:`result-block`,role:`region`,get"aria-labelledby"(){return s(a)},children:(n,a)=>{var u=Ce(),p=S(u),h=m(p),_=m(h),k=m(_,!0);t(_);var A=C(_,2),j=m(A,!0);t(A),t(h);var M=C(h,2);{let e=x(()=>y(`결과 상태 선택`,`Choose result state`));R(M,{get label(){return s(e)},attached:!1,children:(e,t)=>{var n=i(),a=S(n);r(a,17,()=>s(D),e=>e.id,(e,t)=>{{let n=x(()=>s(T)===s(t).id?`primary`:`secondary`),r=x(()=>s(T)===s(t).id);O(e,{size:`sm`,get variant(){return s(n)},get"aria-pressed"(){return s(r)},onclick:()=>w(T,s(t).id,!0),children:(e,n)=>{b();var r=E();g(()=>c(r,s(t).label)),l(e,r)},$$slots:{default:!0}})}}),l(e,n)},$$slots:{default:!0}})}t(p);var N=C(p,2);L(N,{});var z=C(N,2),B=m(z),U=e=>{var n=ve(),r=S(n),i=m(r);{let e=x(()=>y(`결과 불러오는 중`,`Loading results`));I(i,{get label(){return s(e)}})}var a=C(i,2),o=m(a),u=m(o,!0);t(o);var d=C(o,2),f=m(d,!0);t(d),t(a),t(r);var p=C(r,2);{let e=x(()=>y(`결과 자리 표시자`,`Result placeholders`));V(p,{lines:4,get label(){return s(e)}})}g((e,t)=>{c(u,e),c(f,t)},[()=>y(`결과를 불러오는 중입니다`,`Loading your results`),()=>y(`권한과 최신 데이터를 확인하고 있습니다.`,`Checking permissions and the latest data.`)]),l(e,n)},W=e=>{{let t=x(()=>y(`조건에 맞는 결과가 없습니다`,`No matching results`)),n=x(()=>y(`검색어나 필터 조건을 변경해 보세요.`,`Try changing your search or filter criteria.`));H(e,{get title(){return s(t)},get description(){return s(n)},get actions(){return d}})}},ee=e=>{{let t=x(()=>y(`결과를 불러오지 못했습니다`,`Results could not be loaded`)),n=x(()=>y(`잠시 후 다시 시도해 주세요.`,`Please try again in a moment.`));H(e,{get title(){return s(t)},get description(){return s(n)},get actions(){return f}})}},G=e=>{var n=Se(),r=S(n),i=m(r),a=m(i);P(a,{tone:`success`,children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>y(`완료`,`Complete`)]),l(e,n)},$$slots:{default:!0}});var o=C(a,2),s=m(o,!0);t(o),t(i),b(2),t(r);var u=C(r,2),d=m(u),f=m(d);F(f,{padding:`compact`,children:(e,n)=>{var r=ye(),i=C(S(r),2),a=m(i,!0);t(i),g(e=>c(a,e),[()=>y(`변경 없음`,`No changes`)]),l(e,r)},$$slots:{default:!0}}),t(d);var p=C(d,2),h=m(p);F(h,{padding:`compact`,children:(e,n)=>{var r=be(),i=C(S(r),2),a=m(i);t(i),g(e=>c(a,`+6 ${e??``}`),[()=>y(`업데이트`,`updated`)]),l(e,r)},$$slots:{default:!0}}),t(p);var _=C(p,2),v=m(_);F(v,{padding:`compact`,children:(e,n)=>{var r=xe(),i=C(S(r),2),a=m(i);t(i),g(e=>c(a,`+18 ${e??``}`),[()=>y(`업데이트`,`updated`)]),l(e,r)},$$slots:{default:!0}}),t(_),t(u),g(e=>c(s,e),[()=>y(`3개 항목을 동기화했습니다`,`3 items synced`)]),l(e,n)};e(B,e=>{s(T)===`loading`?e(U):s(T)===`empty`?e(W,1):s(T)===`error`?e(ee,2):e(G,-1)}),t(z),g((e,t)=>{v(_,`id`,`result-title-${o}`),c(k,e),c(j,t),v(z,`aria-busy`,s(T)===`loading`)},[()=>y(`동기화 결과`,`Sync results`),()=>y(`실행 결과의 주요 상태를 같은 영역에서 전환합니다.`,`Present each major result state in the same region.`)]),l(n,u)},$$slots:{default:!0}})}}var Te=o(`<span><strong> </strong><small class="svelte-1g7pjfz"> </small></span> <!>`,1),Ee=o(`<section class="master-pane svelte-1g7pjfz"><header class="svelte-1g7pjfz"><h2 class="svelte-1g7pjfz"> </h2> <p class="svelte-1g7pjfz"> </p></header> <nav class="svelte-1g7pjfz"></nav></section>`),De=o(`<article class="detail-pane svelte-1g7pjfz" aria-live="polite"><header class="svelte-1g7pjfz"><div class="svelte-1g7pjfz"><small class="svelte-1g7pjfz"> </small> <h2 class="svelte-1g7pjfz"> </h2></div> <!></header> <p class="svelte-1g7pjfz"> </p> <!></article>`);function Oe(e,n){let i=e=>{var n=Ee(),i=m(n),a=m(i),o=m(a,!0);t(a);var u=C(a,2),p=m(u,!0);t(u),t(i);var _=C(i,2);r(_,21,()=>s(f),e=>e.id,(e,n)=>{{let r=x(()=>s(h)===s(n).id?`secondary`:`ghost`),i=x(()=>s(h)===s(n).id?`true`:void 0);O(e,{class:`task-button`,get variant(){return s(r)},get"aria-current"(){return s(i)},onclick:()=>w(h,s(n).id,!0),children:(e,r)=>{var i=Te(),a=S(i),o=m(a),u=m(o,!0);t(o);var d=C(o),f=m(d);t(d),t(a);var p=C(a,2);P(p,{get tone(){return s(n).tone},children:(e,t)=>{b();var r=E();g(()=>c(r,s(n).status)),l(e,r)},$$slots:{default:!0}}),g(()=>{c(u,s(n).title),c(f,`${s(n).id??``} · ${s(n).owner??``}`)}),l(e,i)},$$slots:{default:!0}})}}),t(_),t(n),g((e,t,n)=>{c(o,e),c(p,t),v(_,`aria-label`,n)},[()=>d(`검토 작업`,`Review tasks`),()=>d(`열린 작업 3개`,`3 open tasks`),()=>d(`검토 작업 목록`,`Review task list`)]),l(e,n)},a=e=>{P(e,{get tone(){return s(T).tone},children:(e,t)=>{b();var n=E();g(()=>c(n,s(T).status)),l(e,n)},$$slots:{default:!0}})},o=e=>{var n=De(),r=m(n),i=m(r),o=m(i),u=m(o,!0);t(o);var f=C(o,2),p=m(f,!0);t(f),t(i);var h=C(i,2);P(h,{get tone(){return s(T).tone},children:(e,t)=>{b();var n=E();g(()=>c(n,s(T).status)),l(e,n)},$$slots:{default:!0}}),t(r);var _=C(r,2),v=m(_,!0);t(_);var y=C(_,2);{let e=x(()=>d(`${s(T).title} 상세`,`${s(T).title} details`)),t=x(()=>[{term:d(`담당자`,`Owner`),value:s(T).owner},{term:d(`마지막 업데이트`,`Last updated`),value:d(`오늘 10:42`,`Today, 10:42`)},{term:d(`상태`,`Status`),value:a},{term:d(`검토 범위`,`Review scope`),value:`Wiki · Posts · Files`}]);G(y,{get label(){return s(e)},columns:1,get items(){return s(t)}})}t(n),g(()=>{c(u,s(T).id),c(p,s(T).title),c(v,s(T).summary)}),l(e,n)},u=p(n,`locale`,3,`ko`);function d(e,t){return u()===`en`?t:e}let f=x(()=>[{id:`SR-1048`,title:d(`검색 색인 검증`,`Search index validation`),owner:d(`민지`,`Minji`),status:`ready`,tone:`success`,summary:d(`Wiki, 게시물, 댓글 색인의 최신 상태를 검증합니다.`,`Validate current Wiki, post, and comment indexes.`)},{id:`SR-1047`,title:d(`권한 스냅샷 비교`,`Permission snapshot comparison`),owner:d(`서준`,`Seojun`),status:`running`,tone:`info`,summary:d(`기관별 접근 권한 차이를 비교하고 누락을 찾습니다.`,`Compare organization access and find missing permissions.`)},{id:`SR-1046`,title:d(`첨부 파일 경로 점검`,`Attachment path audit`),owner:d(`지우`,`Jiwoo`),status:`queued`,tone:`neutral`,summary:d(`문서와 첨부 파일의 연결 경로를 점검합니다.`,`Audit links between documents and attachments.`)}]),h=_(`SR-1048`),y=_(40),T=x(()=>s(f).find(e=>e.id===s(h))??s(f)[0]);{let t=x(()=>d(`작업 목록과 상세`,`Task list and details`));F(e,{padding:`none`,class:`split-block`,role:`region`,get"aria-label"(){return s(t)},children:(e,t)=>{{let t=x(()=>d(`검토 작업 목록`,`Review task list`)),n=x(()=>d(`선택한 작업 상세`,`Selected task details`));z(e,{class:`split-layout`,get primary(){return i},get secondary(){return o},get primaryLabel(){return s(t)},get secondaryLabel(){return s(n)},min:30,max:55,step:5,get size(){return s(y)},set size(e){w(y,e,!0)}})}},$$slots:{default:!0}})}}var ke=o(`<!> <!>`,1),Ae=o(`<div class="su-grid su-gap-4"><div class="su-flex su-flex-wrap su-items-center su-justify-between su-gap-2"><span class="su-text-label"> </span> <!></div> <strong class="su-text-display su-tabular-nums"> </strong> <!> <small class="su-fg-secondary"> </small></div>`),je=o(`<section class="su-grid su-gap-6 su-w-full"><header class="su-flex su-flex-wrap su-items-center su-justify-between su-gap-4"><div class="su-grid su-gap-1"><h2 class="su-text-title-lg"> </h2> <p class="su-fg-secondary"> </p></div> <!></header> <!></section>`);function Me(e,n){let a=u(),o=p(n,`locale`,3,`ko`);function d(e,t){return o()===`en`?t:e}let f=_(`week`),h=x(()=>s(f)===`week`?[{label:d(`완료한 작업`,`Completed tasks`),value:`128`,change:`+18%`,tone:`success`,bars:[36,48,44,62,58,76,88]},{label:d(`평균 처리 시간`,`Average resolution`),value:d(`4.2시간`,`4.2 hrs`),change:`-12%`,tone:`success`,bars:[82,72,68,65,58,48,42]},{label:d(`검토 대기`,`Waiting for review`),value:`16`,change:`+3`,tone:`warning`,bars:[28,34,32,46,52,48,60]}]:[{label:d(`완료한 작업`,`Completed tasks`),value:`486`,change:`+24%`,tone:`success`,bars:[42,52,48,68,72,82,94]},{label:d(`평균 처리 시간`,`Average resolution`),value:d(`4.8시간`,`4.8 hrs`),change:`-8%`,tone:`success`,bars:[88,78,74,68,62,55,48]},{label:d(`검토 대기`,`Waiting for review`),value:`21`,change:`+5`,tone:`warning`,bars:[32,38,46,42,58,64,72]}]);var y=je(),D=m(y),k=m(D),A=m(k);T(A,``,{},{margin:`0`});var j=m(A,!0);t(A);var M=C(A,2);T(M,``,{},{margin:`0`});var N=m(M,!0);t(M),t(k);var I=C(k,2);{let e=x(()=>d(`조회 기간`,`Reporting period`));R(I,{get label(){return s(e)},attached:!1,children:(e,t)=>{var n=ke(),r=S(n);{let e=x(()=>s(f)===`week`?`primary`:`secondary`),t=x(()=>s(f)===`week`);O(r,{size:`sm`,get variant(){return s(e)},get"aria-pressed"(){return s(t)},onclick:()=>w(f,`week`),children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>d(`이번 주`,`This week`)]),l(e,n)},$$slots:{default:!0}})}var i=C(r,2);{let e=x(()=>s(f)===`month`?`primary`:`secondary`),t=x(()=>s(f)===`month`);O(i,{size:`sm`,get variant(){return s(e)},get"aria-pressed"(){return s(t)},onclick:()=>w(f,`month`),children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>d(`이번 달`,`This month`)]),l(e,n)},$$slots:{default:!0}})}l(e,n)},$$slots:{default:!0}})}t(D);var L=C(D,2);W(L,{columns:3,minColumnWidth:`16rem`,children:(e,n)=>{var a=i(),o=S(a);r(o,17,()=>s(h),e=>e.label,(e,n)=>{F(e,{padding:`comfortable`,children:(e,r)=>{var i=Ae(),a=m(i),o=m(a),u=m(o,!0);t(o);var f=C(o,2);P(f,{get tone(){return s(n).tone},children:(e,t)=>{b();var r=E();g(()=>c(r,s(n).change)),l(e,r)},$$slots:{default:!0}}),t(a);var p=C(a,2),h=m(p,!0);t(p);var _=C(p,2);{let e=x(()=>s(n).bars.map((e,t)=>({label:String(t+1),value:e}))),t=x(()=>`${s(n).label} — ${d(`최근 7일`,`Last 7 days`)}`);B(_,{get data(){return s(e)},get label(){return s(t)},height:64,max:100,tone:`primary`,showLabels:!1,showValues:!1})}var v=C(_,2),y=m(v,!0);t(v),t(i),g(e=>{c(u,s(n).label),c(h,s(n).value),c(y,e)},[()=>d(`이전 기간 대비`,`Compared with prior period`)]),l(e,i)},$$slots:{default:!0}})}),l(e,a)},$$slots:{default:!0}}),t(y),g((e,t)=>{v(y,`aria-labelledby`,`stats-title-${a}`),v(A,`id`,`stats-title-${a}`),c(j,e),c(N,t)},[()=>d(`업무 현황`,`Work overview`),()=>d(`팀의 핵심 지표를 한눈에 확인하세요.`,`Track the team’s key metrics at a glance.`)]),l(e,y)}var $={"app-shell":{ko:`<script lang="ts">
  import { Badge, Button, Card, Icon, IconButton } from 'soya-ui';

  const uid = $props.id();
  const navigationId = \`app-shell-navigation-\${uid}\`;
  let navigationOpen = $state(false);
  let activePage = $state('overview');
  let projectCreated = $state(false);
  let navigation = $derived([
    { id: 'overview', label: '개요' },
    { id: 'projects', label: '프로젝트' },
    { id: 'activity', label: '활동' },
  ]);
  let activeLabel = $derived(
    navigation.find((item) => item.id === activePage)?.label ?? navigation[0].label,
  );
<\/script>

<section class="app-shell-block" aria-label={'프로젝트 관리 화면'}>
  <Card padding="compact" class="shell-header">
    <div class="brand">
      <Badge>S</Badge>
      <strong>Soya Workspace</strong>
    </div>
    <IconButton
      class="menu-button"
      size="sm"
      variant="secondary"
      label={navigationOpen ? '메뉴 닫기' : '메뉴 열기'}
      aria-expanded={navigationOpen}
      aria-controls={navigationId}
      onclick={() => (navigationOpen = !navigationOpen)}
    >
      <Icon name={navigationOpen ? 'close' : 'menu'} size="1rem" />
    </IconButton>
    <div class="header-actions">
      <Badge tone="success">{'동기화됨'}</Badge>
      <Button
        class="create-button"
        size="sm"
        disabled={projectCreated}
        onclick={() => (projectCreated = true)}
        aria-label={projectCreated ? '프로젝트 추가됨' : '새 프로젝트'}
      >
        <Icon name={projectCreated ? 'check' : 'plus'} size="1rem" />
        <span class="create-label">
          {projectCreated ? '프로젝트 추가됨' : '새 프로젝트'}
        </span>
      </Button>
    </div>
  </Card>

  <div class="shell-body">
    <Card
      id={navigationId}
      padding="compact"
      class={navigationOpen ? 'navigation-card open' : 'navigation-card'}
    >
      <nav class="su-grid su-gap-1" aria-label={'워크스페이스 메뉴'}>
        {#each navigation as item (item.id)}
          <Button
            class="navigation-action"
            variant={activePage === item.id ? 'secondary' : 'ghost'}
            aria-current={activePage === item.id ? 'page' : undefined}
            onclick={() => {
              activePage = item.id;
              navigationOpen = false;
            }}>{item.label}</Button
          >
        {/each}
      </nav>
    </Card>

    <section class="workspace-main">
      <div class="page-heading">
        <div>
          <p>{'워크스페이스'}</p>
          <h2>{activeLabel}</h2>
        </div>
      </div>
      <div class="summary-grid">
        <Card padding="compact" class="summary-card" role="group" aria-label={'진행 중'}>
          <span>{'진행 중'}</span><strong>{projectCreated ? 13 : 12}</strong><small
            >{projectCreated ? '+4' : '+3'}</small
          >
        </Card>
        <Card padding="compact" class="summary-card" role="group" aria-label={'검토 대기'}>
          <span>{'검토 대기'}</span><strong>5</strong><small>-1</small>
        </Card>
        <Card padding="compact" class="summary-card" role="group" aria-label={'이번 주 완료'}>
          <span>{'이번 주 완료'}</span><strong>28</strong><small>+8</small>
        </Card>
      </div>
      <Card padding="comfortable" class="activity" aria-labelledby={\`recent-activity-title-\${uid}\`}>
        <div class="activity-heading">
          <h3 id={\`recent-activity-title-\${uid}\`}>{'최근 활동'}</h3>
          <Badge>2</Badge>
        </div>
        <ul>
          <li>
            <Card padding="compact" class="activity-row">
              <Badge>MJ</Badge>
              <p>
                <strong>{'검색 색인 검토'}</strong>
                <small>{'민지가 검토를 요청했습니다.'}</small>
              </p>
              <time>10:42</time>
            </Card>
          </li>
          <li>
            <Card padding="compact" class="activity-row">
              <Badge>SJ</Badge>
              <p>
                <strong>{'권한 정책 업데이트'}</strong>
                <small>{'서준이 새 버전을 게시했습니다.'}</small>
              </p>
              <time>09:18</time>
            </Card>
          </li>
        </ul>
      </Card>
    </section>
  </div>
</section>

<style>
  .app-shell-block {
    container-type: inline-size;
    inline-size: 100%;
    min-inline-size: 0;
  }
  .app-shell-block :global(.shell-header),
  .brand,
  .header-actions,
  .page-heading,
  .activity-heading {
    display: flex;
    align-items: center;
  }
  .brand {
    gap: var(--soya-space-3);
    min-inline-size: 0;
  }
  .brand strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .header-actions {
    flex: 0 0 auto;
    gap: var(--soya-space-3);
    margin-inline-start: auto;
  }
  .app-shell-block :global(.menu-button) {
    display: none;
  }
  .shell-body {
    display: grid;
    grid-template-columns: 12rem minmax(0, 1fr);
    gap: var(--soya-space-4);
    margin-block-start: var(--soya-space-4);
  }
  .app-shell-block :global(.navigation-card) {
    align-self: start;
  }
  .app-shell-block :global(.navigation-action) {
    justify-content: flex-start;
    inline-size: 100%;
  }
  .workspace-main {
    min-inline-size: 0;
  }
  .page-heading {
    justify-content: space-between;
    gap: var(--soya-space-4);
  }
  .page-heading p,
  .page-heading h2,
  .app-shell-block :global(.activity h3),
  .app-shell-block :global(.activity p) {
    margin: 0;
  }
  .page-heading p {
    color: var(--soya-text-secondary);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .page-heading h2 {
    margin-block-start: var(--soya-space-1);
    font-size: clamp(1.5rem, 4vw, 2rem);
  }
  .summary-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--soya-space-4);
    margin-block: var(--soya-space-6);
  }
  .app-shell-block :global(.summary-card) {
    display: grid;
    gap: var(--soya-space-2);
  }
  .app-shell-block :global(.summary-card span),
  .app-shell-block :global(.summary-card small),
  .app-shell-block :global(.activity small),
  time {
    color: var(--soya-text-secondary);
  }
  .app-shell-block :global(.summary-card strong) {
    font-size: 1.75rem;
  }
  .app-shell-block :global(.summary-card small) {
    justify-self: start;
  }
  .activity-heading {
    justify-content: space-between;
  }
  ul {
    display: grid;
    gap: var(--soya-space-3);
    margin: var(--soya-space-4) 0 0;
    padding: 0;
    list-style: none;
  }
  .app-shell-block :global(.activity-row) {
    display: flex;
    align-items: center;
    gap: var(--soya-space-3);
  }
  .app-shell-block :global(.activity p) {
    display: grid;
    min-inline-size: 0;
    gap: 0.125rem;
  }
  .app-shell-block :global(.activity strong),
  .app-shell-block :global(.activity small) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  time {
    margin-inline-start: auto;
    font-size: 0.75rem;
  }
  @container (max-width: 42rem) {
    .app-shell-block :global(.shell-header) {
      flex-wrap: nowrap;
      gap: var(--soya-space-2);
    }
    .app-shell-block :global(.menu-button) {
      display: inline-flex;
      order: -1;
      flex: 0 0 auto;
    }
    .app-shell-block :global(.create-button) {
      inline-size: 2rem;
      min-inline-size: 2rem;
      block-size: 2rem;
      min-block-size: 2rem;
      padding: 0;
    }
    .create-label {
      display: none;
    }
    @media (any-pointer: coarse) {
      .app-shell-block :global(.create-button) {
        inline-size: 3rem;
        min-inline-size: 3rem;
        block-size: 3rem;
        min-block-size: 3rem;
      }
    }
    .header-actions :global(.soya-badge) {
      display: none;
    }
    .shell-body {
      grid-template-columns: 1fr;
    }
    .app-shell-block :global(.navigation-card) {
      display: none;
    }
    .app-shell-block :global(.navigation-card.open) {
      display: block;
    }
    .page-heading {
      align-items: flex-start;
      flex-direction: column;
    }
    .summary-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
`,en:`<script lang="ts">
  import { Badge, Button, Card, Icon, IconButton } from 'soya-ui';

  const uid = $props.id();
  const navigationId = \`app-shell-navigation-\${uid}\`;
  let navigationOpen = $state(false);
  let activePage = $state('overview');
  let projectCreated = $state(false);
  let navigation = $derived([
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'activity', label: 'Activity' },
  ]);
  let activeLabel = $derived(
    navigation.find((item) => item.id === activePage)?.label ?? navigation[0].label,
  );
<\/script>

<section class="app-shell-block" aria-label={'Project workspace'}>
  <Card padding="compact" class="shell-header">
    <div class="brand">
      <Badge>S</Badge>
      <strong>Soya Workspace</strong>
    </div>
    <IconButton
      class="menu-button"
      size="sm"
      variant="secondary"
      label={navigationOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={navigationOpen}
      aria-controls={navigationId}
      onclick={() => (navigationOpen = !navigationOpen)}
    >
      <Icon name={navigationOpen ? 'close' : 'menu'} size="1rem" />
    </IconButton>
    <div class="header-actions">
      <Badge tone="success">{'Synced'}</Badge>
      <Button
        class="create-button"
        size="sm"
        disabled={projectCreated}
        onclick={() => (projectCreated = true)}
        aria-label={projectCreated ? 'Project added' : 'New project'}
      >
        <Icon name={projectCreated ? 'check' : 'plus'} size="1rem" />
        <span class="create-label">
          {projectCreated ? 'Project added' : 'New project'}
        </span>
      </Button>
    </div>
  </Card>

  <div class="shell-body">
    <Card
      id={navigationId}
      padding="compact"
      class={navigationOpen ? 'navigation-card open' : 'navigation-card'}
    >
      <nav class="su-grid su-gap-1" aria-label={'Workspace menu'}>
        {#each navigation as item (item.id)}
          <Button
            class="navigation-action"
            variant={activePage === item.id ? 'secondary' : 'ghost'}
            aria-current={activePage === item.id ? 'page' : undefined}
            onclick={() => {
              activePage = item.id;
              navigationOpen = false;
            }}>{item.label}</Button
          >
        {/each}
      </nav>
    </Card>

    <section class="workspace-main">
      <div class="page-heading">
        <div>
          <p>{'Workspace'}</p>
          <h2>{activeLabel}</h2>
        </div>
      </div>
      <div class="summary-grid">
        <Card padding="compact" class="summary-card" role="group" aria-label={'In progress'}>
          <span>{'In progress'}</span><strong>{projectCreated ? 13 : 12}</strong><small
            >{projectCreated ? '+4' : '+3'}</small
          >
        </Card>
        <Card padding="compact" class="summary-card" role="group" aria-label={'Waiting for review'}>
          <span>{'Waiting for review'}</span><strong>5</strong><small>-1</small>
        </Card>
        <Card
          padding="compact"
          class="summary-card"
          role="group"
          aria-label={'Completed this week'}
        >
          <span>{'Completed this week'}</span><strong>28</strong><small>+8</small>
        </Card>
      </div>
      <Card padding="comfortable" class="activity" aria-labelledby={\`recent-activity-title-\${uid}\`}>
        <div class="activity-heading">
          <h3 id={\`recent-activity-title-\${uid}\`}>{'Recent activity'}</h3>
          <Badge>2</Badge>
        </div>
        <ul>
          <li>
            <Card padding="compact" class="activity-row">
              <Badge>MJ</Badge>
              <p>
                <strong>{'Search index review'}</strong>
                <small>{'Minji requested a review.'}</small>
              </p>
              <time>10:42</time>
            </Card>
          </li>
          <li>
            <Card padding="compact" class="activity-row">
              <Badge>SJ</Badge>
              <p>
                <strong>{'Permission policy update'}</strong>
                <small>{'Seojun published a new version.'}</small>
              </p>
              <time>09:18</time>
            </Card>
          </li>
        </ul>
      </Card>
    </section>
  </div>
</section>

<style>
  .app-shell-block {
    container-type: inline-size;
    inline-size: 100%;
    min-inline-size: 0;
  }
  .app-shell-block :global(.shell-header),
  .brand,
  .header-actions,
  .page-heading,
  .activity-heading {
    display: flex;
    align-items: center;
  }
  .brand {
    gap: var(--soya-space-3);
    min-inline-size: 0;
  }
  .brand strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .header-actions {
    flex: 0 0 auto;
    gap: var(--soya-space-3);
    margin-inline-start: auto;
  }
  .app-shell-block :global(.menu-button) {
    display: none;
  }
  .shell-body {
    display: grid;
    grid-template-columns: 12rem minmax(0, 1fr);
    gap: var(--soya-space-4);
    margin-block-start: var(--soya-space-4);
  }
  .app-shell-block :global(.navigation-card) {
    align-self: start;
  }
  .app-shell-block :global(.navigation-action) {
    justify-content: flex-start;
    inline-size: 100%;
  }
  .workspace-main {
    min-inline-size: 0;
  }
  .page-heading {
    justify-content: space-between;
    gap: var(--soya-space-4);
  }
  .page-heading p,
  .page-heading h2,
  .app-shell-block :global(.activity h3),
  .app-shell-block :global(.activity p) {
    margin: 0;
  }
  .page-heading p {
    color: var(--soya-text-secondary);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .page-heading h2 {
    margin-block-start: var(--soya-space-1);
    font-size: clamp(1.5rem, 4vw, 2rem);
  }
  .summary-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--soya-space-4);
    margin-block: var(--soya-space-6);
  }
  .app-shell-block :global(.summary-card) {
    display: grid;
    gap: var(--soya-space-2);
  }
  .app-shell-block :global(.summary-card span),
  .app-shell-block :global(.summary-card small),
  .app-shell-block :global(.activity small),
  time {
    color: var(--soya-text-secondary);
  }
  .app-shell-block :global(.summary-card strong) {
    font-size: 1.75rem;
  }
  .app-shell-block :global(.summary-card small) {
    justify-self: start;
  }
  .activity-heading {
    justify-content: space-between;
  }
  ul {
    display: grid;
    gap: var(--soya-space-3);
    margin: var(--soya-space-4) 0 0;
    padding: 0;
    list-style: none;
  }
  .app-shell-block :global(.activity-row) {
    display: flex;
    align-items: center;
    gap: var(--soya-space-3);
  }
  .app-shell-block :global(.activity p) {
    display: grid;
    min-inline-size: 0;
    gap: 0.125rem;
  }
  .app-shell-block :global(.activity strong),
  .app-shell-block :global(.activity small) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  time {
    margin-inline-start: auto;
    font-size: 0.75rem;
  }
  @container (max-width: 42rem) {
    .app-shell-block :global(.shell-header) {
      flex-wrap: nowrap;
      gap: var(--soya-space-2);
    }
    .app-shell-block :global(.menu-button) {
      display: inline-flex;
      order: -1;
      flex: 0 0 auto;
    }
    .app-shell-block :global(.create-button) {
      inline-size: 2rem;
      min-inline-size: 2rem;
      block-size: 2rem;
      min-block-size: 2rem;
      padding: 0;
    }
    .create-label {
      display: none;
    }
    @media (any-pointer: coarse) {
      .app-shell-block :global(.create-button) {
        inline-size: 3rem;
        min-inline-size: 3rem;
        block-size: 3rem;
        min-block-size: 3rem;
      }
    }
    .header-actions :global(.soya-badge) {
      display: none;
    }
    .shell-body {
      grid-template-columns: 1fr;
    }
    .app-shell-block :global(.navigation-card) {
      display: none;
    }
    .app-shell-block :global(.navigation-card.open) {
      display: block;
    }
    .page-heading {
      align-items: flex-start;
      flex-direction: column;
    }
    .summary-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
`},"filter-panel":{ko:`<script lang="ts">
  import {
    Badge,
    Button,
    ButtonGroup,
    Card,
    EmptyState,
    Field,
    Input,
    Select,
    Separator,
  } from 'soya-ui';

  let keyword = $state('');
  let status = $state('all');
  let owner = $state('all');
  let submitted = $state({ keyword: '', status: 'all', owner: 'all' });
  let tasks = $derived([
    {
      id: 'SR-1048',
      title: '검색 색인 검증',
      owner: 'minji',
      ownerLabel: '민지',
      status: 'ready',
      statusLabel: '준비됨',
      tone: 'success' as const,
    },
    {
      id: 'SR-1047',
      title: '권한 스냅샷 비교',
      owner: 'seojun',
      ownerLabel: '서준',
      status: 'running',
      statusLabel: '실행 중',
      tone: 'info' as const,
    },
    {
      id: 'SR-1046',
      title: '첨부 파일 경로 점검',
      owner: 'minji',
      ownerLabel: '민지',
      status: 'done',
      statusLabel: '완료',
      tone: 'neutral' as const,
    },
  ]);
  let statusOptions = $derived([
    { value: 'all', label: '모든 상태' },
    { value: 'ready', label: '준비됨' },
    { value: 'running', label: '실행 중' },
    { value: 'done', label: '완료' },
  ]);
  let ownerOptions = $derived([
    { value: 'all', label: '모든 담당자' },
    { value: 'minji', label: '민지' },
    { value: 'seojun', label: '서준' },
  ]);
  let filteredTasks = $derived(
    tasks.filter((task) => {
      const query = submitted.keyword.trim().toLocaleLowerCase();
      const textMatches =
        !query || \`\${task.title} \${task.ownerLabel}\`.toLocaleLowerCase().includes(query);
      return (
        textMatches &&
        (submitted.status === 'all' || task.status === submitted.status) &&
        (submitted.owner === 'all' || task.owner === submitted.owner)
      );
    }),
  );
  let activeCount = $derived(
    Number(Boolean(submitted.keyword)) +
      Number(submitted.status !== 'all') +
      Number(submitted.owner !== 'all'),
  );

  function applyFilters(event: SubmitEvent) {
    event.preventDefault();
    submitted = { keyword, status, owner };
  }

  function resetFilters() {
    keyword = '';
    status = 'all';
    owner = 'all';
    submitted = { keyword: '', status: 'all', owner: 'all' };
  }
  const uid = $props.id();
<\/script>

<Card
  padding="comfortable"
  class="filter-block"
  role="region"
  aria-labelledby={\`filter-title-\${uid}\`}
>
  <div class="section-heading">
    <div>
      <h2 id={\`filter-title-\${uid}\`}>{'작업 필터'}</h2>
      <p>{'필요한 작업만 빠르게 좁혀보세요.'}</p>
    </div>
    {#if activeCount}<Badge tone="info">{\`\${activeCount}개 적용\`}</Badge>{/if}
  </div>

  <form onsubmit={applyFilters}>
    <Field label={'검색어'}>
      {#snippet children({ id, describedBy, invalid })}
        <Input
          {id}
          aria-describedby={describedBy}
          {invalid}
          bind:value={keyword}
          placeholder={'작업명 또는 담당자 검색'}
        />
      {/snippet}
    </Field>
    <Field label={'상태'}>
      {#snippet children({ id, describedBy, invalid })}
        <Select
          {id}
          aria-describedby={describedBy}
          {invalid}
          bind:value={status}
          options={statusOptions}
        />
      {/snippet}
    </Field>
    <Field label={'담당자'}>
      {#snippet children({ id, describedBy, invalid })}
        <Select
          {id}
          aria-describedby={describedBy}
          {invalid}
          bind:value={owner}
          options={ownerOptions}
        />
      {/snippet}
    </Field>
    <ButtonGroup class="filter-actions" label={'필터 작업'} attached={false}>
      <Button type="button" variant="ghost" onclick={resetFilters}>{'초기화'}</Button>
      <Button type="submit">{'필터 적용'}</Button>
    </ButtonGroup>
  </form>
  <Separator class="results-separator" />
  <section class="results" aria-live="polite" aria-label={'필터 결과'}>
    <p>
      <strong>{\`\${filteredTasks.length}개 작업\`}</strong>
      {activeCount ? ' · 필터 적용됨' : ' · 전체 결과'}
    </p>
    {#if filteredTasks.length}
      <ul>
        {#each filteredTasks as task (task.id)}
          <li>
            <Card padding="compact" class="result-card">
              <div><strong>{task.title}</strong><small>{task.id} · {task.ownerLabel}</small></div>
              <Badge tone={task.tone}>{task.statusLabel}</Badge>
            </Card>
          </li>
        {/each}
      </ul>
    {:else}
      <EmptyState
        title={'조건에 맞는 작업이 없습니다.'}
        description={'검색어나 필터 조건을 변경해 보세요.'}
      />
    {/if}
  </section>
</Card>

<style>
  :global(.filter-block) {
    container-type: inline-size;
    inline-size: min(100%, 64rem);
  }
  .section-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--soya-space-4);
    margin-block-end: var(--soya-space-6);
  }
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 1.25rem;
  }
  .section-heading p,
  .results > p,
  small {
    color: var(--soya-text-secondary);
  }
  .section-heading p {
    margin-block-start: var(--soya-space-1);
  }
  form {
    display: grid;
    grid-template-columns: minmax(14rem, 2fr) minmax(9rem, 1fr) minmax(9rem, 1fr) auto;
    align-items: end;
    gap: var(--soya-space-4);
  }
  :global(.filter-block .filter-actions) {
    align-self: end;
  }
  :global(.filter-block .results-separator) {
    margin-block-start: var(--soya-space-6);
  }
  .results {
    margin-block-start: var(--soya-space-4);
  }
  .results > p {
    font-size: 0.875rem;
  }
  ul {
    display: grid;
    gap: var(--soya-space-2);
    margin: var(--soya-space-3) 0 0;
    padding: 0;
    list-style: none;
  }
  :global(.filter-block .result-card) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--soya-space-3);
  }
  :global(.filter-block .result-card > div) {
    display: grid;
    min-inline-size: 0;
    gap: 0.125rem;
  }
  :global(.filter-block .result-card strong),
  :global(.filter-block .result-card small) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @container (max-width: 52rem) {
    form {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    :global(.filter-block .filter-actions) {
      justify-content: end;
    }
  }
  @container (max-width: 36rem) {
    .section-heading {
      flex-direction: column;
    }
    form {
      grid-template-columns: 1fr;
    }
    :global(.filter-block .filter-actions) {
      justify-content: stretch;
    }
  }
</style>
`,en:`<script lang="ts">
  import {
    Badge,
    Button,
    ButtonGroup,
    Card,
    EmptyState,
    Field,
    Input,
    Select,
    Separator,
  } from 'soya-ui';

  let keyword = $state('');
  let status = $state('all');
  let owner = $state('all');
  let submitted = $state({ keyword: '', status: 'all', owner: 'all' });
  let tasks = $derived([
    {
      id: 'SR-1048',
      title: 'Search index validation',
      owner: 'minji',
      ownerLabel: 'Minji',
      status: 'ready',
      statusLabel: 'Ready',
      tone: 'success' as const,
    },
    {
      id: 'SR-1047',
      title: 'Permission snapshot comparison',
      owner: 'seojun',
      ownerLabel: 'Seojun',
      status: 'running',
      statusLabel: 'Running',
      tone: 'info' as const,
    },
    {
      id: 'SR-1046',
      title: 'Attachment path audit',
      owner: 'minji',
      ownerLabel: 'Minji',
      status: 'done',
      statusLabel: 'Done',
      tone: 'neutral' as const,
    },
  ]);
  let statusOptions = $derived([
    { value: 'all', label: 'All statuses' },
    { value: 'ready', label: 'Ready' },
    { value: 'running', label: 'Running' },
    { value: 'done', label: 'Done' },
  ]);
  let ownerOptions = $derived([
    { value: 'all', label: 'All owners' },
    { value: 'minji', label: 'Minji' },
    { value: 'seojun', label: 'Seojun' },
  ]);
  let filteredTasks = $derived(
    tasks.filter((task) => {
      const query = submitted.keyword.trim().toLocaleLowerCase();
      const textMatches =
        !query || \`\${task.title} \${task.ownerLabel}\`.toLocaleLowerCase().includes(query);
      return (
        textMatches &&
        (submitted.status === 'all' || task.status === submitted.status) &&
        (submitted.owner === 'all' || task.owner === submitted.owner)
      );
    }),
  );
  let activeCount = $derived(
    Number(Boolean(submitted.keyword)) +
      Number(submitted.status !== 'all') +
      Number(submitted.owner !== 'all'),
  );

  function applyFilters(event: SubmitEvent) {
    event.preventDefault();
    submitted = { keyword, status, owner };
  }

  function resetFilters() {
    keyword = '';
    status = 'all';
    owner = 'all';
    submitted = { keyword: '', status: 'all', owner: 'all' };
  }
  const uid = $props.id();
<\/script>

<Card
  padding="comfortable"
  class="filter-block"
  role="region"
  aria-labelledby={\`filter-title-\${uid}\`}
>
  <div class="section-heading">
    <div>
      <h2 id={\`filter-title-\${uid}\`}>{'Task filters'}</h2>
      <p>{'Narrow the task list to what matters.'}</p>
    </div>
    {#if activeCount}<Badge tone="info">{\`\${activeCount} active\`}</Badge>{/if}
  </div>

  <form onsubmit={applyFilters}>
    <Field label={'Search'}>
      {#snippet children({ id, describedBy, invalid })}
        <Input
          {id}
          aria-describedby={describedBy}
          {invalid}
          bind:value={keyword}
          placeholder={'Search task or owner'}
        />
      {/snippet}
    </Field>
    <Field label={'Status'}>
      {#snippet children({ id, describedBy, invalid })}
        <Select
          {id}
          aria-describedby={describedBy}
          {invalid}
          bind:value={status}
          options={statusOptions}
        />
      {/snippet}
    </Field>
    <Field label={'Owner'}>
      {#snippet children({ id, describedBy, invalid })}
        <Select
          {id}
          aria-describedby={describedBy}
          {invalid}
          bind:value={owner}
          options={ownerOptions}
        />
      {/snippet}
    </Field>
    <ButtonGroup class="filter-actions" label={'Filter actions'} attached={false}>
      <Button type="button" variant="ghost" onclick={resetFilters}>{'Reset'}</Button>
      <Button type="submit">{'Apply filters'}</Button>
    </ButtonGroup>
  </form>
  <Separator class="results-separator" />
  <section class="results" aria-live="polite" aria-label={'Filter results'}>
    <p>
      <strong>{\`\${filteredTasks.length} tasks\`}</strong>
      {activeCount ? ' · Filters applied' : ' · All results'}
    </p>
    {#if filteredTasks.length}
      <ul>
        {#each filteredTasks as task (task.id)}
          <li>
            <Card padding="compact" class="result-card">
              <div><strong>{task.title}</strong><small>{task.id} · {task.ownerLabel}</small></div>
              <Badge tone={task.tone}>{task.statusLabel}</Badge>
            </Card>
          </li>
        {/each}
      </ul>
    {:else}
      <EmptyState
        title={'No tasks match these filters.'}
        description={'Try changing the search or filter criteria.'}
      />
    {/if}
  </section>
</Card>

<style>
  :global(.filter-block) {
    container-type: inline-size;
    inline-size: min(100%, 64rem);
  }
  .section-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--soya-space-4);
    margin-block-end: var(--soya-space-6);
  }
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 1.25rem;
  }
  .section-heading p,
  .results > p,
  small {
    color: var(--soya-text-secondary);
  }
  .section-heading p {
    margin-block-start: var(--soya-space-1);
  }
  form {
    display: grid;
    grid-template-columns: minmax(14rem, 2fr) minmax(9rem, 1fr) minmax(9rem, 1fr) auto;
    align-items: end;
    gap: var(--soya-space-4);
  }
  :global(.filter-block .filter-actions) {
    align-self: end;
  }
  :global(.filter-block .results-separator) {
    margin-block-start: var(--soya-space-6);
  }
  .results {
    margin-block-start: var(--soya-space-4);
  }
  .results > p {
    font-size: 0.875rem;
  }
  ul {
    display: grid;
    gap: var(--soya-space-2);
    margin: var(--soya-space-3) 0 0;
    padding: 0;
    list-style: none;
  }
  :global(.filter-block .result-card) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--soya-space-3);
  }
  :global(.filter-block .result-card > div) {
    display: grid;
    min-inline-size: 0;
    gap: 0.125rem;
  }
  :global(.filter-block .result-card strong),
  :global(.filter-block .result-card small) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @container (max-width: 52rem) {
    form {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    :global(.filter-block .filter-actions) {
      justify-content: end;
    }
  }
  @container (max-width: 36rem) {
    .section-heading {
      flex-direction: column;
    }
    form {
      grid-template-columns: 1fr;
    }
    :global(.filter-block .filter-actions) {
      justify-content: stretch;
    }
  }
</style>
`},"page-header":{ko:`<script lang="ts">
  import { Badge, Breadcrumb, Button, ButtonGroup, Card, DescriptionList } from 'soya-ui';

  let saved = $state(false);
  let reviewRequested = $state(false);
  let breadcrumbItems = $derived([{ label: '프로젝트' }, { label: '검색 고도화', current: true }]);
  let details = $derived([
    { term: '담당자', value: '민지 김' },
    { term: '마감일', value: '2026. 10. 02.' },
    { term: '우선순위', value: '높음' },
  ]);
  const uid = $props.id();
<\/script>

<Card
  padding="comfortable"
  class="page-header-block"
  role="region"
  aria-labelledby={\`page-title-\${uid}\`}
>
  <Breadcrumb label={'현재 위치'} items={breadcrumbItems} separator="/" />
  <div class="header-row">
    <div class="title-group">
      <div class="su-flex su-flex-wrap su-items-center su-gap-3 eyebrow">
        <Badge tone={reviewRequested ? 'info' : 'success'}>
          {reviewRequested ? '검토 대기' : '진행 중'}
        </Badge>
        <span>FLOW-248</span>
      </div>
      <h2 id={\`page-title-\${uid}\`}>{'검색 결과 품질 개선'}</h2>
      <p class="su-max-w-prose">
        {'검색 평가 지표와 권한 필터 결과를 한 곳에서 검토합니다.'}
      </p>
    </div>
    <ButtonGroup class="header-actions" label={'페이지 작업'} attached={false}>
      <Button variant="secondary" onclick={() => (saved = !saved)}>
        {saved ? '저장됨' : '임시 저장'}
      </Button>
      <Button disabled={reviewRequested} onclick={() => (reviewRequested = true)}>
        {reviewRequested ? '검토 요청됨' : '검토 요청'}
      </Button>
    </ButtonGroup>
  </div>
  <DescriptionList class="page-details" label={'프로젝트 상세'} columns={2} items={details} />
  <span class="sr-status" aria-live="polite">
    {reviewRequested ? '검토를 요청했습니다.' : saved ? '초안이 저장되었습니다.' : ''}
  </span>
</Card>

<style>
  :global(.page-header-block) {
    container-type: inline-size;
    inline-size: 100%;
  }
  .header-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--soya-space-6);
    margin-block-start: var(--soya-space-6);
  }
  .title-group {
    min-inline-size: 0;
  }
  .eyebrow {
    color: var(--soya-text-secondary);
    font-size: 0.75rem;
    font-weight: 700;
  }
  h2 {
    margin: var(--soya-space-3) 0 var(--soya-space-2);
    font-size: clamp(1.75rem, 5vw, 2.75rem);
    line-height: 1.1;
    overflow-wrap: anywhere;
  }
  p {
    margin: 0;
    color: var(--soya-text-secondary);
    line-height: 1.6;
  }
  :global(.page-header-block .header-actions) {
    flex: 0 0 auto;
  }
  :global(.page-header-block .header-actions .soya-button) {
    white-space: normal;
  }
  :global(.page-header-block .page-details) {
    margin-block-start: var(--soya-space-6);
  }
  .sr-status {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }
  @container (max-width: 42rem) {
    .header-row {
      align-items: flex-start;
      flex-direction: column;
    }
    :global(.page-header-block .header-actions) {
      inline-size: 100%;
    }
  }
</style>
`,en:`<script lang="ts">
  import { Badge, Breadcrumb, Button, ButtonGroup, Card, DescriptionList } from 'soya-ui';

  let saved = $state(false);
  let reviewRequested = $state(false);
  let breadcrumbItems = $derived([
    { label: 'Projects' },
    { label: 'Search quality', current: true },
  ]);
  let details = $derived([
    { term: 'Owner', value: 'Minji Kim' },
    { term: 'Due date', value: '2026. 10. 02.' },
    { term: 'Priority', value: 'High' },
  ]);
  const uid = $props.id();
<\/script>

<Card
  padding="comfortable"
  class="page-header-block"
  role="region"
  aria-labelledby={\`page-title-\${uid}\`}
>
  <Breadcrumb label={'Breadcrumb'} items={breadcrumbItems} separator="/" />
  <div class="header-row">
    <div class="title-group">
      <div class="su-flex su-flex-wrap su-items-center su-gap-3 eyebrow">
        <Badge tone={reviewRequested ? 'info' : 'success'}>
          {reviewRequested ? 'Awaiting review' : 'In progress'}
        </Badge>
        <span>FLOW-248</span>
      </div>
      <h2 id={\`page-title-\${uid}\`}>{'Improve search result quality'}</h2>
      <p class="su-max-w-prose">
        {'Review search evaluation metrics and permission filtering in one place.'}
      </p>
    </div>
    <ButtonGroup class="header-actions" label={'Page actions'} attached={false}>
      <Button variant="secondary" onclick={() => (saved = !saved)}>
        {saved ? 'Saved' : 'Save draft'}
      </Button>
      <Button disabled={reviewRequested} onclick={() => (reviewRequested = true)}>
        {reviewRequested ? 'Review requested' : 'Request review'}
      </Button>
    </ButtonGroup>
  </div>
  <DescriptionList class="page-details" label={'Project details'} columns={2} items={details} />
  <span class="sr-status" aria-live="polite">
    {reviewRequested ? 'Review requested.' : saved ? 'Draft saved.' : ''}
  </span>
</Card>

<style>
  :global(.page-header-block) {
    container-type: inline-size;
    inline-size: 100%;
  }
  .header-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--soya-space-6);
    margin-block-start: var(--soya-space-6);
  }
  .title-group {
    min-inline-size: 0;
  }
  .eyebrow {
    color: var(--soya-text-secondary);
    font-size: 0.75rem;
    font-weight: 700;
  }
  h2 {
    margin: var(--soya-space-3) 0 var(--soya-space-2);
    font-size: clamp(1.75rem, 5vw, 2.75rem);
    line-height: 1.1;
    overflow-wrap: anywhere;
  }
  p {
    margin: 0;
    color: var(--soya-text-secondary);
    line-height: 1.6;
  }
  :global(.page-header-block .header-actions) {
    flex: 0 0 auto;
  }
  :global(.page-header-block .header-actions .soya-button) {
    white-space: normal;
  }
  :global(.page-header-block .page-details) {
    margin-block-start: var(--soya-space-6);
  }
  .sr-status {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }
  @container (max-width: 42rem) {
    .header-row {
      align-items: flex-start;
      flex-direction: column;
    }
    :global(.page-header-block .header-actions) {
      inline-size: 100%;
    }
  }
</style>
`},"result-panel":{ko:`<script lang="ts">
  import {
    Badge,
    Button,
    ButtonGroup,
    Card,
    EmptyState,
    Separator,
    Skeleton,
    Spinner,
  } from 'soya-ui';

  type ResultState = 'loading' | 'empty' | 'error' | 'success';
  let state = $state<ResultState>('success');
  let stateOptions = $derived([
    { id: 'loading' as const, label: '로딩' },
    { id: 'empty' as const, label: '빈 결과' },
    { id: 'error' as const, label: '오류' },
    { id: 'success' as const, label: '성공' },
  ]);
  const uid = $props.id();
<\/script>

{#snippet emptyActions()}
  <Button variant="secondary" onclick={() => (state = 'success')}>
    {'전체 결과 보기'}
  </Button>
{/snippet}
{#snippet errorActions()}
  <Button onclick={() => (state = 'success')}>{'다시 시도'}</Button>
{/snippet}

<Card padding="none" class="result-block" role="region" aria-labelledby={\`result-title-\${uid}\`}>
  <header>
    <div>
      <h2 id={\`result-title-\${uid}\`}>{'동기화 결과'}</h2>
      <p>
        {'실행 결과의 주요 상태를 같은 영역에서 전환합니다.'}
      </p>
    </div>
    <ButtonGroup label={'결과 상태 선택'} attached={false}>
      {#each stateOptions as option (option.id)}
        <Button
          size="sm"
          variant={state === option.id ? 'primary' : 'secondary'}
          aria-pressed={state === option.id}
          onclick={() => (state = option.id)}>{option.label}</Button
        >
      {/each}
    </ButtonGroup>
  </header>
  <Separator />

  <div class="result-content" aria-live="polite" aria-busy={state === 'loading'}>
    {#if state === 'loading'}
      <div class="state-message compact">
        <Spinner label={'결과 불러오는 중'} />
        <div>
          <strong>{'결과를 불러오는 중입니다'}</strong>
          <span>
            {'권한과 최신 데이터를 확인하고 있습니다.'}
          </span>
        </div>
      </div>
      <Skeleton lines={4} label={'결과 자리 표시자'} />
    {:else if state === 'empty'}
      <EmptyState
        title={'조건에 맞는 결과가 없습니다'}
        description={'검색어나 필터 조건을 변경해 보세요.'}
        actions={emptyActions}
      />
    {:else if state === 'error'}
      <EmptyState
        title={'결과를 불러오지 못했습니다'}
        description={'잠시 후 다시 시도해 주세요.'}
        actions={errorActions}
      />
    {:else}
      <div class="success-heading">
        <div>
          <Badge tone="success">{'완료'}</Badge>
          <strong>{'3개 항목을 동기화했습니다'}</strong>
        </div>
        <span>2.4s</span>
      </div>
      <ul>
        <li>
          <Card padding="compact"
            ><span>Wiki</span><strong>128</strong><small>{'변경 없음'}</small></Card
          >
        </li>
        <li>
          <Card padding="compact"
            ><span>Posts</span><strong>42</strong><small>+6 {'업데이트'}</small></Card
          >
        </li>
        <li>
          <Card padding="compact"
            ><span>Comments</span><strong>316</strong><small>+18 {'업데이트'}</small></Card
          >
        </li>
      </ul>
    {/if}
  </div>
</Card>

<style>
  :global(.result-block) {
    container-type: inline-size;
    inline-size: min(100%, 64rem);
    overflow: hidden;
  }
  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--soya-space-6);
    padding: var(--soya-space-6);
  }
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 1.25rem;
  }
  p,
  .state-message span,
  small,
  .success-heading > span {
    color: var(--soya-text-secondary);
  }
  p {
    margin-block-start: var(--soya-space-1);
  }
  .result-content {
    padding: clamp(1rem, 4vw, 2rem);
  }
  .state-message {
    display: flex;
    align-items: center;
    gap: var(--soya-space-4);
  }
  .state-message > div {
    display: grid;
    gap: var(--soya-space-1);
  }
  .state-message.compact {
    margin-block-end: var(--soya-space-6);
  }
  .success-heading,
  .success-heading > div {
    display: flex;
    align-items: center;
    gap: var(--soya-space-3);
  }
  .success-heading {
    justify-content: space-between;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--soya-space-3);
    margin: var(--soya-space-6) 0 0;
    padding: 0;
    list-style: none;
  }
  :global(.result-block .soya-card) {
    display: grid;
    gap: var(--soya-space-2);
  }
  :global(.result-block .soya-card strong) {
    font-size: 1.75rem;
  }
  @container (max-width: 42rem) {
    header {
      flex-direction: column;
    }
    ul {
      grid-template-columns: 1fr;
    }
  }
</style>
`,en:`<script lang="ts">
  import {
    Badge,
    Button,
    ButtonGroup,
    Card,
    EmptyState,
    Separator,
    Skeleton,
    Spinner,
  } from 'soya-ui';

  type ResultState = 'loading' | 'empty' | 'error' | 'success';
  let state = $state<ResultState>('success');
  let stateOptions = $derived([
    { id: 'loading' as const, label: 'Loading' },
    { id: 'empty' as const, label: 'Empty' },
    { id: 'error' as const, label: 'Error' },
    { id: 'success' as const, label: 'Success' },
  ]);
  const uid = $props.id();
<\/script>

{#snippet emptyActions()}
  <Button variant="secondary" onclick={() => (state = 'success')}>
    {'Show all results'}
  </Button>
{/snippet}
{#snippet errorActions()}
  <Button onclick={() => (state = 'success')}>{'Try again'}</Button>
{/snippet}

<Card padding="none" class="result-block" role="region" aria-labelledby={\`result-title-\${uid}\`}>
  <header>
    <div>
      <h2 id={\`result-title-\${uid}\`}>{'Sync results'}</h2>
      <p>
        {'Present each major result state in the same region.'}
      </p>
    </div>
    <ButtonGroup label={'Choose result state'} attached={false}>
      {#each stateOptions as option (option.id)}
        <Button
          size="sm"
          variant={state === option.id ? 'primary' : 'secondary'}
          aria-pressed={state === option.id}
          onclick={() => (state = option.id)}>{option.label}</Button
        >
      {/each}
    </ButtonGroup>
  </header>
  <Separator />

  <div class="result-content" aria-live="polite" aria-busy={state === 'loading'}>
    {#if state === 'loading'}
      <div class="state-message compact">
        <Spinner label={'Loading results'} />
        <div>
          <strong>{'Loading your results'}</strong>
          <span>
            {'Checking permissions and the latest data.'}
          </span>
        </div>
      </div>
      <Skeleton lines={4} label={'Result placeholders'} />
    {:else if state === 'empty'}
      <EmptyState
        title={'No matching results'}
        description={'Try changing your search or filter criteria.'}
        actions={emptyActions}
      />
    {:else if state === 'error'}
      <EmptyState
        title={'Results could not be loaded'}
        description={'Please try again in a moment.'}
        actions={errorActions}
      />
    {:else}
      <div class="success-heading">
        <div>
          <Badge tone="success">{'Complete'}</Badge>
          <strong>{'3 items synced'}</strong>
        </div>
        <span>2.4s</span>
      </div>
      <ul>
        <li>
          <Card padding="compact"
            ><span>Wiki</span><strong>128</strong><small>{'No changes'}</small></Card
          >
        </li>
        <li>
          <Card padding="compact"
            ><span>Posts</span><strong>42</strong><small>+6 {'updated'}</small></Card
          >
        </li>
        <li>
          <Card padding="compact"
            ><span>Comments</span><strong>316</strong><small>+18 {'updated'}</small></Card
          >
        </li>
      </ul>
    {/if}
  </div>
</Card>

<style>
  :global(.result-block) {
    container-type: inline-size;
    inline-size: min(100%, 64rem);
    overflow: hidden;
  }
  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--soya-space-6);
    padding: var(--soya-space-6);
  }
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 1.25rem;
  }
  p,
  .state-message span,
  small,
  .success-heading > span {
    color: var(--soya-text-secondary);
  }
  p {
    margin-block-start: var(--soya-space-1);
  }
  .result-content {
    padding: clamp(1rem, 4vw, 2rem);
  }
  .state-message {
    display: flex;
    align-items: center;
    gap: var(--soya-space-4);
  }
  .state-message > div {
    display: grid;
    gap: var(--soya-space-1);
  }
  .state-message.compact {
    margin-block-end: var(--soya-space-6);
  }
  .success-heading,
  .success-heading > div {
    display: flex;
    align-items: center;
    gap: var(--soya-space-3);
  }
  .success-heading {
    justify-content: space-between;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--soya-space-3);
    margin: var(--soya-space-6) 0 0;
    padding: 0;
    list-style: none;
  }
  :global(.result-block .soya-card) {
    display: grid;
    gap: var(--soya-space-2);
  }
  :global(.result-block .soya-card strong) {
    font-size: 1.75rem;
  }
  @container (max-width: 42rem) {
    header {
      flex-direction: column;
    }
    ul {
      grid-template-columns: 1fr;
    }
  }
</style>
`},"split-pane":{ko:`<script lang="ts">
  import { Badge, Button, Card, DescriptionList, Resizable } from 'soya-ui';

  let records = $derived([
    {
      id: 'SR-1048',
      title: '검색 색인 검증',
      owner: '민지',
      status: 'ready',
      tone: 'success' as const,
      summary: 'Wiki, 게시물, 댓글 색인의 최신 상태를 검증합니다.',
    },
    {
      id: 'SR-1047',
      title: '권한 스냅샷 비교',
      owner: '서준',
      status: 'running',
      tone: 'info' as const,
      summary: '기관별 접근 권한 차이를 비교하고 누락을 찾습니다.',
    },
    {
      id: 'SR-1046',
      title: '첨부 파일 경로 점검',
      owner: '지우',
      status: 'queued',
      tone: 'neutral' as const,
      summary: '문서와 첨부 파일의 연결 경로를 점검합니다.',
    },
  ]);
  let selectedId = $state('SR-1048');
  let splitSize = $state(40);
  let selected = $derived(records.find((record) => record.id === selectedId) ?? records[0]);
<\/script>

{#snippet primary()}
  <section class="master-pane">
    <header>
      <h2>{'검토 작업'}</h2>
      <p>{'열린 작업 3개'}</p>
    </header>
    <nav aria-label={'검토 작업 목록'}>
      {#each records as record (record.id)}
        <Button
          class="task-button"
          variant={selectedId === record.id ? 'secondary' : 'ghost'}
          aria-current={selectedId === record.id ? 'true' : undefined}
          onclick={() => (selectedId = record.id)}
        >
          <span><strong>{record.title}</strong><small>{record.id} · {record.owner}</small></span>
          <Badge tone={record.tone}>{record.status}</Badge>
        </Button>
      {/each}
    </nav>
  </section>
{/snippet}

{#snippet selectedStatus()}<Badge tone={selected.tone}>{selected.status}</Badge>{/snippet}

{#snippet secondary()}
  <article class="detail-pane" aria-live="polite">
    <header>
      <div>
        <small>{selected.id}</small>
        <h2>{selected.title}</h2>
      </div>
      <Badge tone={selected.tone}>{selected.status}</Badge>
    </header>
    <p>{selected.summary}</p>
    <DescriptionList
      label={\`\${selected.title} 상세\`}
      columns={1}
      items={[
        { term: '담당자', value: selected.owner },
        { term: '마지막 업데이트', value: '오늘 10:42' },
        { term: '상태', value: selectedStatus },
        { term: '검토 범위', value: 'Wiki · Posts · Files' },
      ]}
    />
  </article>
{/snippet}

<Card padding="none" class="split-block" role="region" aria-label={'작업 목록과 상세'}>
  <Resizable
    class="split-layout"
    bind:size={splitSize}
    {primary}
    {secondary}
    primaryLabel={'검토 작업 목록'}
    secondaryLabel={'선택한 작업 상세'}
    min={30}
    max={55}
    step={5}
  />
</Card>

<style>
  :global(.split-block) {
    inline-size: min(100%, 64rem);
    overflow: hidden;
  }
  .master-pane,
  .detail-pane {
    min-inline-size: 0;
  }
  .master-pane > header,
  .detail-pane {
    padding: var(--soya-space-6);
  }
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 1.125rem;
  }
  header p,
  header small,
  nav small,
  .detail-pane > p {
    color: var(--soya-text-secondary);
  }
  nav {
    display: grid;
    gap: var(--soya-space-1);
    padding: 0 var(--soya-space-3) var(--soya-space-3);
  }
  :global(.split-block .task-button) {
    block-size: auto;
    justify-content: space-between;
    gap: var(--soya-space-3);
    min-inline-size: 0;
    padding: var(--soya-space-3);
    text-align: start;
    white-space: normal;
  }
  :global(.split-block .task-button > .soya-button__content) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    inline-size: 100%;
    gap: var(--soya-space-3);
  }
  :global(.split-block .task-button > .soya-button__content > span:first-child) {
    display: grid;
    min-inline-size: 0;
    gap: var(--soya-space-1);
  }
  :global(.split-block .task-button strong),
  :global(.split-block .task-button small) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .detail-pane {
    display: grid;
    align-content: start;
    gap: var(--soya-space-6);
  }
  .detail-pane header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--soya-space-4);
  }
  .detail-pane header > div {
    min-inline-size: 0;
  }
  .detail-pane h2 {
    margin-block-start: var(--soya-space-1);
    overflow-wrap: anywhere;
  }
  .detail-pane > p {
    line-height: 1.6;
  }
  @media (max-width: 40rem) {
    .master-pane > header,
    .detail-pane {
      padding: var(--soya-space-4);
    }
  }
</style>
`,en:`<script lang="ts">
  import { Badge, Button, Card, DescriptionList, Resizable } from 'soya-ui';

  let records = $derived([
    {
      id: 'SR-1048',
      title: 'Search index validation',
      owner: 'Minji',
      status: 'ready',
      tone: 'success' as const,
      summary: 'Validate current Wiki, post, and comment indexes.',
    },
    {
      id: 'SR-1047',
      title: 'Permission snapshot comparison',
      owner: 'Seojun',
      status: 'running',
      tone: 'info' as const,
      summary: 'Compare organization access and find missing permissions.',
    },
    {
      id: 'SR-1046',
      title: 'Attachment path audit',
      owner: 'Jiwoo',
      status: 'queued',
      tone: 'neutral' as const,
      summary: 'Audit links between documents and attachments.',
    },
  ]);
  let selectedId = $state('SR-1048');
  let splitSize = $state(40);
  let selected = $derived(records.find((record) => record.id === selectedId) ?? records[0]);
<\/script>

{#snippet primary()}
  <section class="master-pane">
    <header>
      <h2>{'Review tasks'}</h2>
      <p>{'3 open tasks'}</p>
    </header>
    <nav aria-label={'Review task list'}>
      {#each records as record (record.id)}
        <Button
          class="task-button"
          variant={selectedId === record.id ? 'secondary' : 'ghost'}
          aria-current={selectedId === record.id ? 'true' : undefined}
          onclick={() => (selectedId = record.id)}
        >
          <span><strong>{record.title}</strong><small>{record.id} · {record.owner}</small></span>
          <Badge tone={record.tone}>{record.status}</Badge>
        </Button>
      {/each}
    </nav>
  </section>
{/snippet}

{#snippet selectedStatus()}<Badge tone={selected.tone}>{selected.status}</Badge>{/snippet}

{#snippet secondary()}
  <article class="detail-pane" aria-live="polite">
    <header>
      <div>
        <small>{selected.id}</small>
        <h2>{selected.title}</h2>
      </div>
      <Badge tone={selected.tone}>{selected.status}</Badge>
    </header>
    <p>{selected.summary}</p>
    <DescriptionList
      label={\`\${selected.title} details\`}
      columns={1}
      items={[
        { term: 'Owner', value: selected.owner },
        { term: 'Last updated', value: 'Today, 10:42' },
        { term: 'Status', value: selectedStatus },
        { term: 'Review scope', value: 'Wiki · Posts · Files' },
      ]}
    />
  </article>
{/snippet}

<Card padding="none" class="split-block" role="region" aria-label={'Task list and details'}>
  <Resizable
    class="split-layout"
    bind:size={splitSize}
    {primary}
    {secondary}
    primaryLabel={'Review task list'}
    secondaryLabel={'Selected task details'}
    min={30}
    max={55}
    step={5}
  />
</Card>

<style>
  :global(.split-block) {
    inline-size: min(100%, 64rem);
    overflow: hidden;
  }
  .master-pane,
  .detail-pane {
    min-inline-size: 0;
  }
  .master-pane > header,
  .detail-pane {
    padding: var(--soya-space-6);
  }
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 1.125rem;
  }
  header p,
  header small,
  nav small,
  .detail-pane > p {
    color: var(--soya-text-secondary);
  }
  nav {
    display: grid;
    gap: var(--soya-space-1);
    padding: 0 var(--soya-space-3) var(--soya-space-3);
  }
  :global(.split-block .task-button) {
    block-size: auto;
    justify-content: space-between;
    gap: var(--soya-space-3);
    min-inline-size: 0;
    padding: var(--soya-space-3);
    text-align: start;
    white-space: normal;
  }
  :global(.split-block .task-button > .soya-button__content) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    inline-size: 100%;
    gap: var(--soya-space-3);
  }
  :global(.split-block .task-button > .soya-button__content > span:first-child) {
    display: grid;
    min-inline-size: 0;
    gap: var(--soya-space-1);
  }
  :global(.split-block .task-button strong),
  :global(.split-block .task-button small) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .detail-pane {
    display: grid;
    align-content: start;
    gap: var(--soya-space-6);
  }
  .detail-pane header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--soya-space-4);
  }
  .detail-pane header > div {
    min-inline-size: 0;
  }
  .detail-pane h2 {
    margin-block-start: var(--soya-space-1);
    overflow-wrap: anywhere;
  }
  .detail-pane > p {
    line-height: 1.6;
  }
  @media (max-width: 40rem) {
    .master-pane > header,
    .detail-pane {
      padding: var(--soya-space-4);
    }
  }
</style>
`},"stat-card":{ko:`<script lang="ts">
  import { Badge, BarChart, Button, ButtonGroup, Card, Masonry } from 'soya-ui';

  type Period = 'week' | 'month';

  let period = $state<Period>('week');
  let metrics = $derived(
    period === 'week'
      ? [
          {
            label: '완료한 작업',
            value: '128',
            change: '+18%',
            tone: 'success' as const,
            bars: [36, 48, 44, 62, 58, 76, 88],
          },
          {
            label: '평균 처리 시간',
            value: '4.2시간',
            change: '-12%',
            tone: 'success' as const,
            bars: [82, 72, 68, 65, 58, 48, 42],
          },
          {
            label: '검토 대기',
            value: '16',
            change: '+3',
            tone: 'warning' as const,
            bars: [28, 34, 32, 46, 52, 48, 60],
          },
        ]
      : [
          {
            label: '완료한 작업',
            value: '486',
            change: '+24%',
            tone: 'success' as const,
            bars: [42, 52, 48, 68, 72, 82, 94],
          },
          {
            label: '평균 처리 시간',
            value: '4.8시간',
            change: '-8%',
            tone: 'success' as const,
            bars: [88, 78, 74, 68, 62, 55, 48],
          },
          {
            label: '검토 대기',
            value: '21',
            change: '+5',
            tone: 'warning' as const,
            bars: [32, 38, 46, 42, 58, 64, 72],
          },
        ],
  );
  const uid = $props.id();
<\/script>

<section class="su-grid su-gap-6 su-w-full" aria-labelledby={\`stats-title-\${uid}\`}>
  <header class="su-flex su-flex-wrap su-items-center su-justify-between su-gap-4">
    <div class="su-grid su-gap-1">
      <h2 id={\`stats-title-\${uid}\`} class="su-text-title-lg" style:margin="0">
        {'업무 현황'}
      </h2>
      <p class="su-fg-secondary" style:margin="0">
        {'팀의 핵심 지표를 한눈에 확인하세요.'}
      </p>
    </div>
    <ButtonGroup label={'조회 기간'} attached={false}>
      <Button
        size="sm"
        variant={period === 'week' ? 'primary' : 'secondary'}
        aria-pressed={period === 'week'}
        onclick={() => (period = 'week')}>{'이번 주'}</Button
      >
      <Button
        size="sm"
        variant={period === 'month' ? 'primary' : 'secondary'}
        aria-pressed={period === 'month'}
        onclick={() => (period = 'month')}>{'이번 달'}</Button
      >
    </ButtonGroup>
  </header>

  <Masonry columns={3} minColumnWidth="16rem">
    {#each metrics as metric (metric.label)}
      <Card padding="comfortable">
        <div class="su-grid su-gap-4">
          <div class="su-flex su-flex-wrap su-items-center su-justify-between su-gap-2">
            <span class="su-text-label">{metric.label}</span>
            <Badge tone={metric.tone}>{metric.change}</Badge>
          </div>
          <strong class="su-text-display su-tabular-nums">{metric.value}</strong>
          <BarChart
            data={metric.bars.map((value, index) => ({ label: String(index + 1), value }))}
            label={\`\${metric.label} — \${'최근 7일'}\`}
            height={64}
            max={100}
            tone="primary"
            showLabels={false}
            showValues={false}
          />
          <small class="su-fg-secondary">{'이전 기간 대비'}</small>
        </div>
      </Card>
    {/each}
  </Masonry>
</section>
`,en:`<script lang="ts">
  import { Badge, BarChart, Button, ButtonGroup, Card, Masonry } from 'soya-ui';

  type Period = 'week' | 'month';

  let period = $state<Period>('week');
  let metrics = $derived(
    period === 'week'
      ? [
          {
            label: 'Completed tasks',
            value: '128',
            change: '+18%',
            tone: 'success' as const,
            bars: [36, 48, 44, 62, 58, 76, 88],
          },
          {
            label: 'Average resolution',
            value: '4.2 hrs',
            change: '-12%',
            tone: 'success' as const,
            bars: [82, 72, 68, 65, 58, 48, 42],
          },
          {
            label: 'Waiting for review',
            value: '16',
            change: '+3',
            tone: 'warning' as const,
            bars: [28, 34, 32, 46, 52, 48, 60],
          },
        ]
      : [
          {
            label: 'Completed tasks',
            value: '486',
            change: '+24%',
            tone: 'success' as const,
            bars: [42, 52, 48, 68, 72, 82, 94],
          },
          {
            label: 'Average resolution',
            value: '4.8 hrs',
            change: '-8%',
            tone: 'success' as const,
            bars: [88, 78, 74, 68, 62, 55, 48],
          },
          {
            label: 'Waiting for review',
            value: '21',
            change: '+5',
            tone: 'warning' as const,
            bars: [32, 38, 46, 42, 58, 64, 72],
          },
        ],
  );
  const uid = $props.id();
<\/script>

<section class="su-grid su-gap-6 su-w-full" aria-labelledby={\`stats-title-\${uid}\`}>
  <header class="su-flex su-flex-wrap su-items-center su-justify-between su-gap-4">
    <div class="su-grid su-gap-1">
      <h2 id={\`stats-title-\${uid}\`} class="su-text-title-lg" style:margin="0">
        {'Work overview'}
      </h2>
      <p class="su-fg-secondary" style:margin="0">
        {'Track the team’s key metrics at a glance.'}
      </p>
    </div>
    <ButtonGroup label={'Reporting period'} attached={false}>
      <Button
        size="sm"
        variant={period === 'week' ? 'primary' : 'secondary'}
        aria-pressed={period === 'week'}
        onclick={() => (period = 'week')}>{'This week'}</Button
      >
      <Button
        size="sm"
        variant={period === 'month' ? 'primary' : 'secondary'}
        aria-pressed={period === 'month'}
        onclick={() => (period = 'month')}>{'This month'}</Button
      >
    </ButtonGroup>
  </header>

  <Masonry columns={3} minColumnWidth="16rem">
    {#each metrics as metric (metric.label)}
      <Card padding="comfortable">
        <div class="su-grid su-gap-4">
          <div class="su-flex su-flex-wrap su-items-center su-justify-between su-gap-2">
            <span class="su-text-label">{metric.label}</span>
            <Badge tone={metric.tone}>{metric.change}</Badge>
          </div>
          <strong class="su-text-display su-tabular-nums">{metric.value}</strong>
          <BarChart
            data={metric.bars.map((value, index) => ({ label: String(index + 1), value }))}
            label={\`\${metric.label} — \${'Last 7 days'}\`}
            height={64}
            max={100}
            tone="primary"
            showLabels={false}
            showValues={false}
          />
          <small class="su-fg-secondary">{'Compared with prior period'}</small>
        </div>
      </Card>
    {/each}
  </Masonry>
</section>
`}},Ne={"app-shell":{component:ce,source:$[`app-shell`],filename:`AppShellBlock.svelte`},"filter-panel":{component:me,source:$[`filter-panel`],filename:`FilterPanelBlock.svelte`},"page-header":{component:_e,source:$[`page-header`],filename:`PageHeaderBlock.svelte`},"result-panel":{component:we,source:$[`result-panel`],filename:`ResultPanelBlock.svelte`},"split-pane":{component:Oe,source:$[`split-pane`],filename:`SplitPaneBlock.svelte`},"stat-card":{component:Me,source:$[`stat-card`],filename:`StatCardBlock.svelte`}},Pe=o(`<header class="block-heading svelte-u3uco8"><div><h2 class="svelte-u3uco8"><a class="svelte-u3uco8"> </a></h2> <p class="svelte-u3uco8"> </p></div> <a class="block-link svelte-u3uco8"> <!></a></header>`),Fe=o(`<div class="preview-tools svelte-u3uco8"><div role="group" class="svelte-u3uco8"></div> <!></div> <div class="preview-stage svelte-u3uco8"><div class="preview-canvas svelte-u3uco8"><!></div></div>`,1),Ie=o(`<div class="block-code svelte-u3uco8"><!></div>`),Le=o(`<article class="block-showcase svelte-u3uco8"><!> <div class="block-frame svelte-u3uco8"><div class="block-tools svelte-u3uco8"><span class="filename svelte-u3uco8"> </span> <!></div>  <!></div></article>`);function Re(a,o){n(o,!0);let u=p(o,`showHeading`,3,!0),h=j(),k=x(()=>Y.find(e=>e.slug===o.slug)),M=x(()=>Ne[o.slug]),N=x(()=>s(M).component),P=x(()=>s(M).source[h.locale]),F=_(`preview`),I=_(`100%`),L=_(0),R=[{width:`100%`,ko:`전체`,en:`Full`},{width:`768px`,ko:`태블릿`,en:`Tablet`},{width:`390px`,ko:`모바일`,en:`Mobile`}];var z=Le(),B=m(z),V=e=>{var n=Pe(),r=m(n),i=m(r),a=m(i),u=m(a,!0);t(a),t(i);var d=C(i,2),f=m(d,!0);t(d),t(r);var p=C(r,2),_=m(p),y=C(_);A(y,{name:`arrow-right`}),t(p),t(n),g((e,t,n)=>{v(a,`href`,e),c(u,s(k).title[h.locale]),c(f,s(k).description[h.locale]),v(p,`href`,t),c(_,`${n??``} `)},[()=>D(`/blocks/[slug]`,{slug:o.slug}),()=>D(`/blocks/[slug]`,{slug:o.slug}),()=>h.t(`블록 보기`,`View block`)]),l(e,n)};e(B,e=>{u()&&e(V)});var H=C(B,2);{let e=e=>{var n=Fe(),a=S(n),u=m(a);r(u,21,()=>R,e=>e.width,(e,t)=>{{let n=x(()=>s(I)===s(t).width?`secondary`:`ghost`),r=x(()=>s(I)===s(t).width);O(e,{size:`sm`,get variant(){return s(n)},get"aria-pressed"(){return s(r)},onclick:()=>w(I,s(t).width,!0),children:(e,n)=>{b();var r=E();g(e=>c(r,e),[()=>h.t(s(t).ko,s(t).en)]),l(e,r)},$$slots:{default:!0}})}}),t(u);var d=C(u,2);O(d,{size:`sm`,variant:`ghost`,onclick:()=>w(L,s(L)+1),children:(e,t)=>{b();var n=E();g(e=>c(n,e),[()=>h.t(`초기화`,`Reset`)]),l(e,n)},$$slots:{default:!0}}),t(a);var p=C(a,2),_=m(p);let D;var k=m(_);y(k,()=>`${o.slug}-${s(L)}`,e=>{var t=i(),n=S(t);f(n,()=>s(N),(e,t)=>{t(e,{get locale(){return h.locale}})}),l(e,t)}),t(_),t(p),g(e=>{v(u,`aria-label`,e),D=T(_,``,D,{"--preview-width":s(I)})},[()=>h.t(`미리보기 너비`,`Preview width`)]),l(e,n)},n=e=>{var n=Ie(),r=m(n);q(r,{get code(){return s(P)},language:`svelte`,get label(){return s(M).filename},copy:!1}),t(n),l(e,n)};var U=m(H),W=m(U),G=m(W,!0);t(W);var J=C(W,2);{let e=x(()=>h.t(`코드 복사`,`Copy code`)),t=x(()=>h.t(`복사됨`,`Copied`)),n=x(()=>h.t(`복사 실패`,`Copy failed`));K(J,{size:`sm`,get value(){return s(P)},get label(){return s(e)},get copiedLabel(){return s(t)},get errorLabel(){return s(n)}})}t(U);var te=C(U,2);{let t=x(()=>h.t(`블록 보기 방식`,`Block view`)),r=x(()=>[{value:`preview`,label:h.t(`미리보기`,`Preview`),content:e},{value:`code`,label:h.t(`코드`,`Code`),content:n}]);ee(te,{get label(){return s(t)},get items(){return s(r)},get value(){return s(F)},set value(e){w(F,e,!0)}})}t(H),g(()=>c(G,s(M).filename))}t(z),g(()=>v(z,`aria-label`,s(k).title[h.locale])),l(a,z),d()}export{Re as t};