import{l as M,i as se,m as ae,p as Y,q as te,P as le,s as re,v as ue,j as F,w as q,x as ie,y as B,k as a,z as oe,R as j,A as ne,B as ce,C as ve,D as pe,E as de,G as ye,H as he,I as me,J as ge,K as fe,L as He,M as I,N as _,O as Re,Q as x,S as ke}from"./app-D-tZjZ48.js";const Qe=["/","/tests.html","/%E9%9A%8F%E7%AC%94/","/404.html"],we="SEARCH_PRO_QUERY_HISTORY",g=M(we,[]),qe=()=>{const{queryHistoryCount:t}=x,l=t>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,t-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},O=t=>Qe[t.id]+("anchor"in t?`#${t.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=x,f=M(xe,[]),Ce=()=>{const t=U>0;return{enabled:t,resultHistory:f,addResultHistory:l=>{if(t){const r={link:O(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,U-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Se=t=>{const l=pe(),r=Y(),C=de(),i=F(0),k=q(()=>i.value>0),y=ye([]);return he(()=>{const{search:h,terminate:S}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:L=d=>d,splitWord:A,suggestionsFilter:P,...m}=l.value;R?(i.value+=1,h(c.join(" "),r.value,m).then(d=>L(d,R,r.value,C.value)).then(d=>{i.value-=1,y.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(y.value=[])})):y.value=[]},x.searchDelay-x.suggestDelay);B([t,r],([c])=>H(c),{immediate:!0}),ge(()=>{S()})}),{isSearching:k,results:y}};var Ae=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const r=ae(),C=Y(),i=te(le),{enabled:k,addQueryHistory:y,queryHistory:h,removeQueryHistory:S}=qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:L}=Ce(),A=k||H,P=re(t,"queries"),{results:m,isSearching:d}=Se(P),u=ue({isQuery:!0,index:0}),v=F(0),p=F(0),T=q(()=>A&&(h.value.length>0||c.value.length>0)),D=q(()=>m.value.length>0),E=q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:h.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?h.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=E.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},N=()=>{p.value<E.value.contents.length-1?p.value+=1:K()},V=()=>{p.value>0?p.value-=1:J()},b=e=>e.map(s=>ke(s)?s:a(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,w=""]=He(s)?s[C.value].split("$content"):s.split("$content");return e.display.map(n=>a("div",b([o,...n,w])))}return e.display.map(s=>a("div",b(s)))},Q=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),h.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(s)}})]))])):null,Z=()=>H?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>a(j,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{Q()}},()=>[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>b(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),L(s)}})]))])):null;return ie("keydown",e=>{if(t.isFocusing){if(D.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=E.value.contents[p.value];y(t.queries.join(" ")),R(s),r.push(O(s)),Q()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",h.value[s]),e.preventDefault()):(r.push(c.value[s].link),Q())}}}}),B([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!D.value:!T.value}],id:"search-pro-results"},t.queries.length?d.value?a(oe,{hint:i.value.searching}):D.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const w=v.value===o;return a("li",{class:["search-pro-result-list-item",{active:w}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const $=w&&p.value===ee;return a(j,{to:O(n),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{y(t.queries.join(" ")),R(n),Q()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):i.value.emptyResult:A?T.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Ae as default};