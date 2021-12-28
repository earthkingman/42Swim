var it=Object.defineProperty,rt=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var be=(e,n,o)=>n in e?it(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,h=(e,n)=>{for(var o in n||(n={}))we.call(n,o)&&be(e,o,n[o]);if(Y)for(var o of Y(n))Be.call(n,o)&&be(e,o,n[o]);return e},v=(e,n)=>rt(e,st(n));var k=(e,n)=>{var o={};for(var i in e)we.call(e,i)&&n.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&Y)for(var i of Y(e))n.indexOf(i)<0&&Be.call(e,i)&&(o[i]=e[i]);return o};import{r as D,j as t,R as ye,a as $,Z as N,q as ve,C as m,s as r,w as lt,L as re,b as ke,l as De,c as u,F,d as at,u as $e,e as se,f as Ae,U as ut,H as le,g as ct,h as dt,i as ht,W as pt,k as Ct,m as O,S as gt,n as _,o as mt,B as ft,p as xt,t as wt,v as Bt}from"./vendor.b31f40ac.js";const bt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=o(l);fetch(l.href,s)}};bt();const yt=n=>{var e=k(n,[]);const o=location.search;return D.exports.useEffect(()=>{(async()=>{await $.get(`https://swim.42seoul.io/api/auth/authResult${o}`)})()},[o]),t(ye,{to:"/"})},vt=async e=>await $({method:"get",url:e,withCredentials:!0}).then(o=>o.data).catch(o=>{throw o}),V=()=>{const e="https://swim.42seoul.io/api/users/info",{data:n,error:o}=N(e,vt);return{isLogin:n,user:n&&n.result?n.user:null,isLoading:!o&&!n,isError:o}},kt=e=>$.get(e,{withCredentials:!0}).then(n=>n.data),R=()=>{const e=ve.parse(location.search).id,{data:n,error:o,mutate:i}=N(`https://swim.42seoul.io/api/pages/detail/question?questionId=${e}`,kt),l=(c,b,x,w)=>{if(n)if(w){let B=n.questionInfo.like_count;B=x?B-1:B+1,i({questionInfo:v(h({},n.questionInfo),{like_count:B,is_like:null})},!1),$.delete(`https://swim.42seoul.io/api/posts/question/like?questionId=${b}&questionUserId=${c}&isLike=${x}`,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>i())}else{let B=n.questionInfo.like_count;B=x?B+1:B-1,i({questionInfo:v(h({},n.questionInfo),{like_count:B,is_like:x})},!1),$.post("https://swim.42seoul.io/api/posts/question/like",{questionUserId:c,questionId:b,isLike:x},{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>{i()})}},s=(c,b,x,w)=>{if(w){let B=n.questionInfo.like_count;B=x?B-1:B+1;const y=n.questionInfo.answer.map(f=>(f.id===b&&(f.like_count=B,f.is_like=null),f));i({questionInfo:v(h({},n.questionInfo),{answer:y})},!1),$.delete(`https://swim.42seoul.io/api/posts/answer/like?answerId=${b}&answerUserId=${c}&isLike=${x}`,{withCredentials:!0}).catch(f=>{throw alert(f),f}).finally(()=>{i()})}else{let B=n.questionInfo.like_count;B=x?B+1:B-1;const y=n.questionInfo.answer.map(f=>(f.id===b&&(f.like_count=B,f.is_like=x),f));i({questionInfo:v(h({},n.questionInfo),{answer:y})},!1),$.post("https://swim.42seoul.io/api/posts/answer/like",{answerUserId:c,answerId:b,isLike:x},{withCredentials:!0}).catch(f=>{throw alert(f),f}).finally(()=>{i()})}},a=(c,b,x)=>{n&&$.post("https://swim.42seoul.io/api/posts/comment",{text:c,questionId:b,answerId:x},{withCredentials:!0}).catch(w=>{throw alert(w),w}).finally(()=>i())},p=(c,b,x,w)=>{if(n){const B="https://swim.42seoul.io/api/posts/comment",y=h({},n);w?y.questionInfo.answer=y.questionInfo.answer.map(f=>(f.id===w&&(f.comment=f.comment.map(I=>(I.id===b&&(I.text=c),I))),f)):y.questionInfo.answer=y.questionInfo.comment.map(f=>(f.id===b&&(f.text=c),f)),i(y,!1),$.patch(B,{text:c,commentId:b,questionId:x,answerId:w},{withCredentials:!0}).catch(f=>{throw alert(f),f}).finally(()=>i())}},d=(c,b,x)=>{if(n){const w=`https://swim.42seoul.io/api/posts/comment?commentId=${c}&questionId=${b}${x?`&answerId=${x}`:""}`,B=h({},n);x?B.questionInfo.answer=B.questionInfo.answer.map(y=>(y.id===x&&(y.comment=y.comment.filter(f=>f.id!==c)),y)):B.questionInfo.comment=B.questionInfo.comment.filter(y=>y.id!==c),i(B,!1),$.delete(w,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>i())}},g=(c,b,x,w)=>{if(n){const B=h({},n);B.questionInfo.answer.push({text:b,user:{nickname:x}}),i(B,!1),$.post("https://swim.42seoul.io/api/posts/answer",{questionId:c,text:b},{withCredentials:!0}).then(()=>w("")).catch(y=>{throw alert(y),y}).finally(()=>i())}},C=async(c,b,x)=>{try{const w=h({},n);w.is_solved=!0,w.questionInfo.answer=w.questionInfo.answer.map(y=>(y.id===b&&(y.is_solved=!0),y));const B="https://swim.42seoul.io/api/posts/answer/choice";i(w,!1),await $.post(B,{questionId:c,answerId:b,answerUserId:x},{withCredentials:!0}),i()}catch(w){throw alert(w),w}};return{question:n?n.questionInfo:null,answer:n?n.questionInfo.answer:null,isLoading:!o&&!n,isError:o,QuestionThumbPost:l,AnswerThumbPost:s,CommentPost:a,CommentEdit:p,CommentDelete:d,AnswerPost:g,ChoicePost:C}},S=(e,n=()=>!0)=>{const[o,i]=D.exports.useState(e),[l,s]=D.exports.useState(!0);return{value:o,onChange:d=>{const{target:{value:g}}=d;n(g)?i(g):s(!1)},onBlur:d=>{const g=d.target.innerText;n(g)?i(g):s(!1)},setValue:i,valid:l}},Dt={button:{primary:"#1896BD",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",lightprimary:"#a7deef"},a:{primary:"#1896BD",white:"#FFFFFF",red:"#FF5D39",black:"#000000",deepgray:"#C4C4C4"},background:{white:"#FFFFFF",lightgrey:"#F3F3F3"},text:{primary:"#1896BD",white:"#FFFFFF",yellow:"#FFB84D",red:"#FF5D39",black:"#000000",lightgrey:"#a6a6a6",grey:"#565656",deepgray:"#C4C4C4"},tag:{primary:"#1896BD"},primary:"#1896BD",lightprimary:"#a7deef",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",deepgray:"#C4C4C4",lightgrey:"#EAEAEA",black:"#000000",lightblack:"#545454",lightyelloew:"#FFDCA8"},A={color:Dt},$t=m`
  ${({theme:e,fontcolor:n})=>n&&m`
      color: ${e.color.a[n]};
    `}
  ${({underline:e})=>e&&m`
      text-decoration: underline;
    `}
  ${({small:e})=>e&&m`
      font-weight: normal;
      font-size: 14px;
      &:hover {
        color: ${A.color.lightblack};
        -webkit-transition: color 0.5s ease;
        -moz-transition: color 0.5s ease;
        transition: color 0.5s ease;
      }
    `};
  ${({bold:e})=>e&&m`
      font-weight: bold;
    `}
`,At=r.span`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  ${$t}
`,Et=l=>{var s=l,{to:e,children:n,location:o}=s,i=k(s,["to","children","location"]);return t(re,{to:e||o.pathname+o.search,children:t(At,v(h({},i),{children:n}))})};var L=lt(Et);const Lt=r.div`
  display: ${({visible:e})=>e?"":"none !important"};
  ${({width:e})=>e&&m`
      width: ${e};
    `}
  ${({height:e})=>e&&m`
      height: ${e};
    `};
`,W=i=>{var l=i,{children:e,visible:n=!0}=l,o=k(l,["children","visible"]);return t(Lt,v(h({visible:n},o),{children:e}))},Ft=m`
  ${({isChecked:e})=>e==!0&&m`
      border: 3px solid ${A.color.primary};
      box-shadow: none;
    `}
`,zt=r.div`
  width: 100%;
  /*height: 214px;*/
  /*display: flex;*/
  border-radius: 16px;
  background-color: white;
  padding: 50px 60px;
  padding-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
  ${Ft};
`,ae=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(zt,v(h({},n),{children:e}))};function ee(e){const n=new Date,o=new Date(e),i=Math.floor((n.getTime()-o.getTime())/1e3/60);if(i<1)return"\uBC29\uAE08\uC804";if(i<60)return`${i}\uBD84\uC804`;const l=Math.floor(i/60);if(l<24)return`${l}\uC2DC\uAC04\uC804`;const s=Math.floor(i/60/24);return s<365?`${s}\uC77C\uC804`:`${Math.floor(s/365)}\uB144\uC804`}const St=r.p`
  padding-bottom: 8rem;
  white-space: pre-line;
  word-break: break-all;
  line-height: 1.5;
  font-size: 16px !important;
  color: black;
  font-family: Roboto;
  span,
  iframe,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  input {
    font-size: inherit;
  }

  h1 {
    font-size: 2.5em !important;
  }
  h2 {
    font-size: 2em !important;
  }
  h3 {
    font-size: 1.4em !important;
  }

  ul li {
    list-style: disc;
  }
  ol li {
    list-style: decimal;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`,Mt=new ke.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[De({pre:!0})]}),Ee=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return u(F,{children:[t(St,v(h({},n),{dangerouslySetInnerHTML:{__html:Mt.makeHtml(e)}})),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]})},It=m`
  ${({size:e})=>e&&m`
      font-size: ${e+"px"};
      line-height: ${parseInt(e)*1.5+"px"};
    `}
  ${({theme:e,color:n})=>n&&m`
      color: ${e.color.text[n]};
    `}
    ${({weight:e})=>e&&m`
      font-weight: ${e};
    `}
`,Tt=r.p`
  color: black;
  word-break: break-all;
  ${It}
`,E=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Tt,v(h({},n),{children:e}))};var Ht="/assets/cat0.7e5dd6fb.jpeg";const ue={xsm:{size:"25px"},sm:{size:"40px"},lg:{size:"120px"}},qt=m`
  ${({size:e})=>e&&m`
      width: ${ue[e].size};
      height: ${ue[e].size};
      background-size: ${ue[e].size} auto;
    `}
  ${({color:e})=>e&&m`
      background-color: ${e};
    `}
  background-image: ${({img:e})=>e?`url(${e})`:"url()"};
  /* ${({img:e})=>e?m`
          background-image: url(${e});
          margin: 2 2;
        `:m`
          margin: 3 3;
          color: pink;
          background-image: url(${Ht});
        `} */
`,ce=r.div`
  width: 120px;
  height: 120px;
  display: inline-block;
  border-radius: 50%;
  background-position: 50% 50%;
  background-size: 12px 120px;
  background-color: #c4c4c4;
  font-size: 20px;
  font-weight: 700;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
  ${qt}
`,Le=r.div`
  display: flex;
  align-items: center;
`,Fe=r(ce)`
  margin-right: 8px;
  flex-shrink: 0;
  ${({theme:e,border:n})=>n&&m`
      border: 2px solid ${e.color.primary};
    `}
`,K=({nickname:e,size:n,photo:o,color:i,children:l,onMouseEnter:s,onMouseLeave:a,onClick:p,border:d})=>n==="sm"?u(Le,{size:n,children:[t(Fe,{size:"xsm",img:o||"",border:d}),t(E,{size:"14",color:"grey",children:e}),l]}):u(Le,{onMouseEnter:s,onMouseLeave:a,onClick:p,size:n,children:[t(Fe,{size:"sm",img:o||"",border:d}),t(E,{size:"18",weight:"bold",color:i,children:e}),l]}),Pt=r.div`
  display: block;
  white-space: normal;
`,Vt=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
`,Wt=l=>{var s=l,{created_at:e,user:n,text:o}=s,i=k(s,["created_at","user","text"]);const a=ee(e);return u(Pt,v(h({},i),{children:[u(Vt,{children:[t(K,v(h({},n),{size:"sm"})),t(E,{size:"14",color:"grey",children:a})]}),t(Ee,{children:o})]}))},jt=()=>u("svg",{width:"4",height:"20",viewBox:"0 0 4 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 10C1 10.5523 1.44772 11 2 11C2.55228 11 3 10.5523 3 10C3 9.44772 2.55228 9 2 9C1.44772 9 1 9.44772 1 10Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 18C1 18.5523 1.44772 19 2 19C2.55228 19 3 18.5523 3 18C3 17.4477 2.55228 17 2 17C1.44772 17 1 17.4477 1 18Z",stroke:"#565656",strokeWidth:"2"})]}),_t=r.button`
  width: 24px;
  height: 24px;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`,Rt=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(_t,v(h({},n),{children:t(jt,{children:e})}))},Zt=m`
  ${({width:e})=>e&&m`
      width: ${e};
    `}
  ${({height:e})=>e&&m`
      height: ${e};
    `}
`,Nt=r.div`
  width: 988px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 10px 0px;

  ${Zt}
`,Z=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Nt,v(h({},n),{children:e}))},ze=r.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&m`
      width: ${e};
    `}
  ${({height:e})=>e&&m`
      height: ${e};
    `}
`,z=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&m`
      width: ${e};
    `}
  ${({height:e})=>e&&m`
      height: ${e};
    `}
`,q=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&m`
      width: ${e};
    `}
  ${({height:e})=>e&&m`
      height: ${e};
    `}
`,Se=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&m`
      width: ${e};
    `}
  ${({height:e})=>e&&m`
      height: ${e};
    `}
`,Ut=r.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 2rem 0px;
`,Qt=r.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`,Ot=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,Kt=r.p`
  font-size: 16px;
  width: 80%;
  background-color: inherit;
  color: grey;
  outline: none;
  &:focus-visible {
    color: black;
  }
`,Gt=r(Z)`
  width: inherit;
  display: none;
  z-index: 1;

  position: absolute;
  padding: 0 3px;
  padding-bottom: 2rem;

  left: -2rem;
  top: 3rem;
  &:focus {
    outline: 0;
  }

  ${({show:e})=>e&&m`
      display: inherit;
    `};
`,Jt=r(q)`
  width: 100%;
  height: 100%;
`,Me=r(L)`
  /*overflow: auto;*/
  display: block;
  width: 3rem;
  margin: 2rem 2rem 0 2rem;
  ${({theme:e})=>e&&m`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,Xt=r(W)`
  position: relative;
`,Ie=({created_at:e,questionId:n,answerId:o,user:i,text:l,userEmail:s,id:a})=>{const{CommentEdit:p,CommentDelete:d}=R(),g=ee(e),[C,c]=D.exports.useState(!1),[b,x]=D.exports.useState(!1),{value:w,setValue:B,onBlur:y}=S(l),f=D.exports.useRef(),I=async()=>{confirm("\uB313\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&d(a,n,o),c(!1)},Q=()=>{x(!0),setTimeout(function(){f.current.focus()},1),c(!C)},J=async()=>{p(w,a,n,o),x(!1)};return u(Ut,{children:[u(Qt,{children:[t(E,{weight:"bold",size:"14",children:i.nickname}),t(E,{size:"14",color:"grey",children:g})]}),u(Ot,{children:[t(Kt,{contentEditable:b,onBlur:y,ref:f,suppressContentEditableWarning:!0,children:w}),i.email===s?u(F,{children:[u(Xt,{visible:!b,children:[t(Rt,{onClick:()=>c(!C)}),t(Gt,{show:C,children:u(Jt,{children:[t(Me,{small:!0,onClick:Q,children:"\uC218\uC815"}),t(Me,{small:!0,onClick:I,children:"\uC0AD\uC81C"})]})})]}),u(W,{visible:b,children:[t(L,{fontcolor:"deepgray",onClick:()=>{B(l),x(!1)},style:{marginRight:"1rem"},children:"\uCDE8\uC18C"}),t(L,{onClick:J,children:"\uC644\uB8CC"})]})]}):null]})]},a)},Yt=m`
  ${({border:e})=>e===!1&&m`
      border: none;
    `}
`,en=r.input`
  width: 100%;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding-left: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus::placeholder {
    color: transparent;
  }
  color: rgba(0, 0, 0, 0.6);
  ${Yt}
`,T=n=>{var e=k(n,[]);return t(en,h({},e))},tn=r.form`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nn=r(T)`
  width: 80%;
  padding: 0px;
`,on=r(L)`
  white-space: nowrap;
  /*background-color: black;*/
`,Te=i=>{var l=i,{questionId:e,answerId:n}=l,o=k(l,["questionId","answerId"]);const{user:s,isLoading:a,isError:p}=V(),{CommentPost:d}=R(),{value:g,onChange:C,setValue:c}=S("");if(a)return p?t("div",{children:"Err.."}):t("div",{children:"Load..."});{const b=x=>{x.preventDefault(),g?s?(d(g,e,n),c("")):alert("\uB313\uAE00 \uC791\uC131\uC744 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"):alert("\uB313\uAE00\uC6B8 \uC785\uB825\uD574\uC8FC\uC138\uC694")};return u(tn,v(h({onSubmit:b},o),{children:[t(nn,{placeholder:"\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694",value:g,border:!1,onChange:C}),t(on,{fontcolor:"primary",underline:!1,onClick:b,children:"\uB313\uAE00 \uC785\uB825"})]}))}},rn=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* margin-top: 3rem; */
  button {
    padding: 4px;
  }

  button {
    color: lightgrey;
    border-radius: 0px !important;
  }
  .mde-tabs button {
    font-size: 16px;
    font-style: Roboto;
    font-weight: 600;
  }
  button.selected {
    border: 0px !important;
    color: black !important;
  }
  .mde-preview-content {
    background-color: white;
    padding: 20px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
    font-size: 18px;
    line-height: 1.5;
    min-height: 20rem;
  }
  .mde-header {
    margin-bottom: 18px;
    background-color: inherit;
    border: 0px;
  }
  .react-mde .image-tip {
    display: none !important;
  }
  .mde-text {
    min-height: 20rem;
    background-color: inherit;
    background-color: white;
    padding: 20px !important;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
    font-size: 16px;
    outline: none;
    font-family: Roboto;
    line-height: 1.5;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  .react-mde {
    font-family: inherit;
    width: 100%;
    border: 0px;
    background-color: inherit;
    margin-bottom: 3rem;
  }
  /*
  pre {
    background-color: white !important;
  }*/

  span,
  iframe,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  input {
    font-size: inherit;
  }

  h1 {
    font-size: 2.5em !important;
  }
  h2 {
    font-size: 2em !important;
  }
  h3 {
    font-size: 1.4em !important;
  }

  ul li {
    list-style: disc;
  }
  ol li {
    list-style: decimal;
  }
  img {
    max-width: 100%;
  }
`,sn=new ke.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[De({pre:!0})]}),te=l=>{var s=l,{value:e,setValue:n,placeHolder:o}=s,i=k(s,["value","setValue","placeHolder"]);const a=document.getElementsByClassName("mde-text")[0],[p,d]=D.exports.useState("write"),g=async function*(C){try{yield await new Promise(b=>{const x=new FormData,w=new File([C],"Image"),B="https://swim.42seoul.io/api/posts/image";x.append("imgFile",w),$.post(B,x,{withCredentials:!0}).then(y=>{var f;y.status===200&&b((f=y==null?void 0:y.data)==null?void 0:f.image)})})}catch(c){alert("\uC0AC\uC9C4 \uC804\uC1A1 \uC2E4\uD328"),yield"Error"}return!0};return u(rn,v(h({},i),{children:[t(at,{classes:{},value:e,onChange:C=>{const c=(event==null?void 0:event.target.scrollHeight)+"px";n(C),a.style.height="auto",a.style.height=c},selectedTab:p,onTabChange:d,generateMarkdownPreview:C=>Promise.resolve(sn.makeHtml(C)),childProps:{writeButton:{tabIndex:-1},textArea:{placeholder:o}},paste:{saveImage:g}}),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]}))},ln=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#1896BD"})}),an=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#545454"})}),un=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#C4C4C4"})}),cn=s=>{var a=s,{is_solved:e,isChosen:n,isChoosable:o,onClick:i}=a,l=k(a,["is_solved","isChosen","isChoosable","onClick"]);const[p,d]=D.exports.useState(!1);return e&&n?t(ln,h({},l)):!e&&o?t("button",v(h({onClick:i,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1)},l),{children:p?t(an,{}):t(un,{})})):t(F,{})},dn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M35.625 28.125H43.125V5.625H35.625V28.125ZM28.125 5.625H11.25C9.69375 5.625 8.3625 6.5625 7.8 7.9125L2.1375 21.1313C1.96875 21.5625 1.875 22.0125 1.875 22.5V26.25C1.875 27.2446 2.27009 28.1984 2.97335 28.9016C3.67661 29.6049 4.63044 30 5.625 30H17.4563L15.675 38.5687C15.6375 38.7562 15.6187 38.9437 15.6187 39.15C15.6187 39.9375 15.9375 40.6313 16.4438 41.1375L18.4312 43.125L30.7687 30.7687C31.4625 30.0938 31.875 29.1562 31.875 28.125V9.375C31.875 8.38044 31.4799 7.42661 30.7766 6.72335C30.0734 6.02009 29.1196 5.625 28.125 5.625Z",fill:"#545454"})}),hn=()=>t("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M34.8333 27.5V5.5H42.1666V27.5H34.8333ZM27.5 5.5C28.4724 5.5 29.4051 5.88631 30.0927 6.57394C30.7803 7.26157 31.1666 8.19421 31.1666 9.16667V27.5C31.1666 28.5083 30.7633 29.425 30.085 30.085L18.0216 42.1667L16.0783 40.2233C15.5833 39.7283 15.2716 39.05 15.2716 38.28L15.3266 37.7117L17.0683 29.3333H5.49998C4.52752 29.3333 3.59489 28.947 2.90725 28.2594C2.21962 27.5718 1.83331 26.6391 1.83331 25.6667V22C1.83331 21.5233 1.92498 21.0833 2.08998 20.6617L7.62665 7.73667C8.17665 6.41667 9.47831 5.5 11 5.5H27.5ZM27.5 9.16667H10.945L5.49998 22V25.6667H21.5966L19.525 35.42L27.5 27.445V9.16667Z",fill:"#545454"})}),pn=r.button`
  background-color: inherit;
`,Cn=o=>{var i=o,{active:e}=i,n=k(i,["active"]);return t(pn,v(h({},n),{children:e?t(dn,{}):t(hn,{})}))},gn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M43.125 18.75C43.125 17.7554 42.7299 16.8016 42.0266 16.0984C41.3234 15.3951 40.3696 15 39.375 15H27.525L29.325 6.43125C29.3625 6.24375 29.3813 6.0375 29.3813 5.83125C29.3813 5.0625 29.0625 4.35 28.5562 3.84375L26.5688 1.875L14.2313 14.2125C13.5375 14.9062 13.125 15.8438 13.125 16.875V35.625C13.125 36.6196 13.5201 37.5734 14.2233 38.2766C14.9266 38.9799 15.8804 39.375 16.875 39.375H33.75C35.3063 39.375 36.6375 38.4375 37.2 37.0875L42.8625 23.8687C43.0312 23.4375 43.125 22.9875 43.125 22.5V18.75ZM1.875 39.375H9.375V16.875H1.875V39.375Z",fill:"#545454"})}),mn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M9.375 16.875V39.375H1.875V16.875H9.375ZM16.875 39.375C15.8804 39.375 14.9266 38.9799 14.2233 38.2766C13.5201 37.5734 13.125 36.6196 13.125 35.625V16.875C13.125 15.8438 13.5375 14.9062 14.2313 14.2313L26.5688 1.875L28.5562 3.8625C29.0625 4.36875 29.3813 5.0625 29.3813 5.83125L29.325 6.43125L27.5437 15H39.375C40.3696 15 41.3234 15.3951 42.0266 16.0984C42.7299 16.8016 43.125 17.7554 43.125 18.75V22.5C43.125 22.9875 43.0312 23.4375 42.8625 23.8687L37.2 37.0875C36.6375 38.4375 35.3063 39.375 33.75 39.375H16.875ZM16.875 35.625H33.8063L39.375 22.5V18.75H22.8937L25.0125 8.775L16.875 16.9312V35.625Z",fill:"#545454"})}),fn=r.button`
  background-color: inherit;
`,xn=i=>{var l=i,{active:e,onClick:n}=l,o=k(l,["active","onClick"]);return t(fn,v(h({onClick:n},o),{children:e?t(gn,{}):t(mn,{})}))},wn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`,Bn=r.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 16rem;
  margin-bottom: 2rem;
  width: 7rem;
`,de=g=>{var C=g,{like_count:e,is_solved:n,is_like:o,isChoosable:i,is_chosen:l,onUpClick:s,onDownClick:a,onChooseClick:p}=C,d=k(C,["like_count","is_solved","is_like","isChoosable","is_chosen","onUpClick","onDownClick","onChooseClick"]);return u(wn,v(h({},d),{children:[u(Bn,{children:[t(xn,{onClick:s,active:o===!0}),t(E,{style:{whiteSpace:"nowrap"},color:"grey",size:"32",weight:"bold",children:e}),t(Cn,{onClick:a,active:o===!1})]}),t(cn,{isChosen:l,isChoosable:i,onClick:p,is_solved:n})]}))},bn=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;r(de)`
  width: 13rem;
  margin-right: 2rem;
`;const yn=r(ae)`
  padding: 0 0;
  padding: 20px 25px;

  > * > * > * > * > .mde-text,
  > * > * > * > .mde-preview-content {
    box-shadow: none;
    resize: none !important;
  }
  > * > * > * > * > .mde-text {
    background-color: #f4f5f7;
  }
`,He=r(W)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,vn=g=>{var C=g,{is_solved:e,like_count:n,is_like:o,is_chosen:i,isChoosable:l,comment:s,id:a,user:p}=C,d=k(C,["is_solved","like_count","is_like","is_chosen","isChoosable","comment","id","user"]);const{AnswerThumbPost:c,ChoicePost:b}=R(),{user:x}=V(),[w,B]=D.exports.useState(!1),[y,f]=D.exports.useState(!1),{value:I,setValue:Q}=S(d.text),J=!!x,Je=$e(),X=new URLSearchParams(Je.search).get("id"),fe=M=>{if(!J)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");y===!1?(f(!0),o===M?c(p.id,a,M,!0):o===!M?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4!"):c(p.id,a,M,!1),setTimeout(()=>{f(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},Xe=()=>{fe(!0)},Ye=()=>{fe(!1)},et=()=>{confirm("\uD574\uB2F9 \uB2F5\uBCC0\uC744 \uCC44\uD0DD\uD558\uACA0\uC2B5\uB2C8\uAE4C? \uCC44\uD0DD \uD6C4\uC5D0\uB294 \uCDE8\uC18C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.")&&X&&b(parseInt(X),a,p.id)},tt=async()=>{const M="https://swim.42seoul.io/api/posts/answer",xe={questionId:X,answerId:a,text:I};await $.patch(M,xe,{withCredentials:!0}).then(xr=>{alert("\uB2F5\uBCC0 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),B(!1)},nt=async()=>{const M=`https://swim.42seoul.io/api/posts/answer?questionId=${X}&answerId=${a}`;await $.delete(M,{withCredentials:!0}).then(xe=>{alert("\uB2F5\uBCC0 \uC0AD\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),B(!1)},ot=s==null?void 0:s.map(M=>t(Ie,h({userEmail:x==null?void 0:x.email,answerId:a},M),M.id));return u(bn,v(h({},d),{children:[t(de,{is_solved:e,is_chosen:i,like_count:n,is_like:o,isChoosable:l,onUpClick:Xe,onDownClick:Ye,onChooseClick:et}),t(W,{width:"100%",visible:!w,children:u(ae,{isChecked:i,children:[t(Wt,v(h({},d),{id:a,user:p})),u(He,{visible:J?(p==null?void 0:p.email)===(x==null?void 0:x.email):!1,children:[t(L,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>B(!0),children:"\uC218\uC815"}),t(L,{onClick:nt,fontcolor:"deepgray",small:!0,children:"\uC0AD\uC81C"})]}),ot,t(Te,{answerId:a})]})}),t(W,{width:"100%",height:"100%",visible:w,children:u(yn,{children:[t(te,{value:I,setValue:Q}),u(He,{visible:!0,children:[t(L,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>B(!1),children:"\uCDE8\uC18C"}),t(L,{onClick:tt,fontcolor:"primary",bold:!0,small:!0,children:"\uD655\uC778"})]})]})})]}))},ne={sm:{height:"41px",fontSize:"16px"},lg:{width:"449px",height:"60px",fontSize:"18px"}},kn=m`
  ${({theme:e,color:n})=>n&&m`
      background-color: ${e.color.button[n]};
      &:hover {
        background: ${se(.1,e.color.button[n])};
      }
      &:active {
        background: ${Ae(.1,e.color.button[n])};
      }
    `}
  ${({theme:e,fontColor:n})=>n&&m`
      color: ${e.color.button[n]};
    `}
  ${({size:e})=>{var n,o;return e&&m`
      width: ${((n=ne[e])==null?void 0:n.width)?(o=ne[e])==null?void 0:o.width:"auto"};
      height: ${ne[e].height};
      font-size: ${ne[e].fontSize};
    `}}
  ${({shadow:e})=>e===!0&&m`
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
    `}
`,Dn=r.button`
  background-color: ${A.color.button.primary};
  color: black;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 2rem;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
  padding: 0px 18px;
  &:hover {
    background: ${se(.1,`${A.color.primary}`)};
    color: ${se(.1,"white")};
  }
  &:active {
    background: ${Ae(.1,`${A.color.primary}`)};
  }
  ${kn}
`,P=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Dn,v(h({},n),{children:e}))},qe={bold:{background:"#000000",height:"3px"},light:{background:"#EAEAEA",height:"1px"}},$n={horizontal:"rotate(0deg)",vertical:"rotate(90deg)"},An=m`
  ${({weight:e})=>e&&m`
      background-color: ${qe[e].background};
      height: ${qe[e].height};
    `}
  ${({width:e})=>e&&m`
      width: ${e};
    `}
	${({direction:e})=>e&&m`
      transform: ${$n[e]};
    `}
`,En=r.div`
  ${An}
`,oe=n=>{var e=k(n,[]);return t(En,h({},e))},Ln={h1:{size:"36px"},h2:{size:"24px"}},Fn=m`
  ${({size:e})=>e&&m`
      font-size: ${Ln[e].size};
    `}
  ${({color:e})=>e&&m`
      color: ${e};
    `}
`,zn=r.div`
  color: black;
  font-weight: 700;
  ${Fn}
`,j=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(zn,v(h({},n),{children:e}))},Sn=r(j)`
  margin-bottom: 3rem;
`,Mn=r.div`
  margin-left: 9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,In=r.div`
  margin: 8rem 0 5rem 0;
  background-color: ${A.color.lightgrey};
  border-radius: 1rem;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${A.color.lightblack};
`,Tn=()=>{const{value:e,setValue:n}=S(""),{question:o,isLoading:i,AnswerPost:l}=R(),{user:s,isLoading:a}=V();if(!i&&!a)if(!!s){const d=s.nickname;return u(Mn,{children:[t(Sn,{size:"h2",children:"\uB0B4 \uB2F5\uBCC0 \uB2EC\uAE30"}),t(oe,{weight:"bold",width:"3rem",style:{marginBottom:"1.5rem"}}),t(te,{value:e,setValue:n,placeHolder:"\uB2F5\uBCC0\uC744 \uB2EC\uC544\uC8FC\uC138\uC694!"}),t(P,{onClick:async()=>{e?l(o.id,e,d,n):alert("\uB2F5\uBCC0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4")},size:"sm",fontColor:"white",children:"\uB2F5\uBCC0 \uC791\uC131\uD558\uAE30"})]})}else return t(In,{children:"\uB2F5\uBCC0\uC744 \uB0A8\uAE30\uAE30 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uC9C4\uD589\uD574\uC8FC\uC138\uC694!"});else return t("div",{children:".."})},Hn=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  width: auto;
  height: 20px;
  background-color: ${A.color.tag.primary};
  box-sizing: border-box;
  margin: 1rem 0rem 0rem 1rem;
  padding: 0px 10px;
  ${({name:e})=>e==="..."&&m`
      background-color: ${A.color.deepgray};
    `}
`,qn=r.button`
  margin-left: 1rem;
  background-color: inherit;
  cursor: pointer;
`,Pn=()=>u("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M8.5 1L1 8.5",stroke:"#dfdfdf",strokeWidth:"2"}),t("path",{d:"M8.5 8.5L1 1",stroke:"#dfdfdf",strokeWidth:"2"})]}),he=l=>{var s=l,{name:e,isDel:n,onDelClick:o}=s,i=k(s,["name","isDel","onDelClick"]);return u(Hn,v(h({},i),{name:e,children:[t(E,{size:"14",style:{wordBreak:"normal",color:"#ffffff"},children:e}),n?t(qn,{onClick:()=>{o(e)},children:t(Pn,{})}):""]}))},Vn=r.div`
  display: block;
  white-space: normal;
`,Pe=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
  flex-wrap: wrap;
`,Wn=r.div`
  display: flex;
  flex-wrap: wrap;
`;r(E)`
  white-space: pre-line;
`;const jn=({user:e,created_at:n,title:o,hashtag:i,text:l})=>{const s=ee(n),a=i==null?void 0:i.map(p=>t(he,{name:p.name},p.name));return u(Vn,{children:[u(Pe,{children:[t(j,{size:"h1",children:o}),t(E,{size:"14",color:"grey",children:s})]}),u(Pe,{children:[t(K,v(h({},e),{size:"sm"})),t(Wn,{children:a})]}),t(Ee,{children:l})]})},_n=r.div`
  display: flex;
  justify-content: space-between;
`,Rn=r(W)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,Zn=n=>{var e=k(n,[]);var C;const{question:o,isLoading:i,isError:l,QuestionThumbPost:s}=R(),{user:a,isLoading:p}=V(),[d,g]=D.exports.useState(!1);if(!i&&!p){const c=!!a,b=f=>{if(!c)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");d===!1?(g(!0),f===o.is_like?s(o.user.id,o.id,f,!0):!f===o.is_like?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4."):s(o.user.id,o.id,f,!1),setTimeout(()=>{g(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},x=()=>{b(!0)},w=()=>{b(!1)},B=f=>{confirm("\uAC8C\uC2DC\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")?$.delete(`https://swim.42seoul.io/api/posts/question?questionId=${o.id}`,{withCredentials:!0}).then(()=>{location.href="/"}):f.preventDefault()},y=(C=o.comment)==null?void 0:C.map(f=>t(Ie,h({userEmail:a==null?void 0:a.email,questionId:o.id},f),f.id));return u(_n,v(h({},e),{children:[t(de,{like_count:o.like_count,is_like:o.is_like,onUpClick:x,onDownClick:w}),u(ae,{children:[t(jn,h({},o)),u(Rn,{visible:a?a.email===o.user.email:!1,children:[t(L,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},to:`/edit?id=${ve.parse(location.search).id}`,children:"\uC218\uC815"}),t(L,{fontcolor:"deepgray",small:!0,onClick:B,children:"\uC0AD\uC81C"})]}),y,t(Te,{questionId:o.id})]})]}))}else return l?t("div",{children:"Err..."}):t("div",{children:"loading..."})},Nn=()=>u(q,{style:{width:"100%",height:"248px",background:"#646464",marginTop:"15rem",padding:"0 2rem",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",bottom:"0px"},children:[u(ze,{style:{alignItems:"flex-end",width:"380px",marginBottom:"1rem"},children:[t(j,{size:"h2",color:"white",children:"42Code"}),t(E,{size:"14",color:"white",weight:"bold",children:"made by ji-park & yejeong & nkim & iha"})]}),t(E,{size:"14",color:"white",children:"Copyright \xA9 2019 - 2021 42Seoul inno. All rights reserved."})]});function Un(){return u("svg",{width:"164",height:"42",viewBox:"0 0 164 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M0 18.2779C0 15.9614 2.53908 14.4657 4.61913 15.4853C9.70397 17.9779 18.0287 21.4939 24.6 21.5351C34.9803 21.6001 39.3328 13.1729 49.7125 13.0496C60.4712 12.9218 65.0907 21.5978 75.85 21.5351C86.4196 21.4734 90.927 13.7098 101.475 13.0496C114.508 12.2339 120.704 21.7509 133.762 21.5351C142.317 21.3936 153.618 17.3358 159.693 14.8836C161.723 14.0642 164 15.5485 164 17.7378V39C164 40.6569 162.657 42 161 42H3C1.34314 42 0 40.6569 0 39V18.2779Z",fill:"#3EC2EC",fillOpacity:"0.5"}),t("path",{d:"M34.8217 0.000244141H25.5478L7 18.6163V26.2429H25.6532V35.5641H34.8744V18.6163H16.3003L34.8217 0.000244141Z",fill:"black"}),t("path",{d:"M122.512 27.8744V0H115.784V27.8744H122.512Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M92.8264 0L95.1288 17.1891L97.4651 0H98.4824H100.405H105.322L107.624 17.1891L109.961 0H112.9L109.111 27.8744H109.055H106.172H102.216L99.4365 7.12348L96.616 27.8744H96.56H93.6764H89.7205L85.9869 0H92.8264Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M132.386 27.8744L134.688 10.6853L137.025 27.8744H138.042H139.964H144.881L147.184 10.6854L149.52 27.8744H152.46L148.671 0H148.615H145.731H141.775L138.996 20.751L136.175 0H136.119H133.236H129.28L125.546 27.8744H132.386Z",fill:"black"}),t("path",{d:"M39.6803 9.61187V0H48.331L39.6803 9.61187Z",fill:"black"}),t("path",{d:"M83.1034 9.61187V0H74.4527L83.1034 9.61187Z",fill:"black"}),t("path",{d:"M57.9429 19.2237L57.9429 27.8744L48.331 27.8744L57.9429 19.2237Z",fill:"black"}),t("path",{d:"M64.8408 19.2233L64.8408 27.874L74.4527 27.874L64.8408 19.2233Z",fill:"black"}),t("path",{d:"M48.8511 9.25621V0H57.9823V9.25621L48.8511 18.6182V27.8744H39.7198V18.6182L48.8511 9.25621Z",fill:"black"}),t("path",{d:"M73.4915 9.25621V0H63.8797V9.25621L73.4915 18.6182V27.8744H83.1034V18.6182L73.4915 9.25621Z",fill:"black"})]})}var Qn="/assets/422.bd7f157a.png";const On=r.div`
  display: ${({visible:e})=>e?"flex":"none"};
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;

  /* display: flex; */
  justify-content: space-around;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`,Kn=ut`
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
`,Gn=r.div`
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 84px;
  height: 84px;
  border: 5px solid white;
  border-top: 5px solid ${A.color.primary};
  border-radius: 50%;

  background-color: white;
  background-size: 55px 55px;

  animation-name: ${Kn};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`,Jn=r.div`
  /* position: fixed; */
  z-index: 1000;

  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${Qn});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 55px 55px;
  background-color: white;
`,Ve=({visible:e})=>t(F,{children:u(On,{visible:e,children:[t(Gn,{}),t(Jn,{})]})}),Xn=e=>{const[n,o]=D.exports.useState(!1);return u("svg",v(h({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",style:{margin:"0 0.5rem"},onMouseEnter:s=>{o(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{o(!1)}},e),{children:[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",fill:n?A.color.lightblack:A.color.black})]}))},Yn=r(Se)``,eo=r(Z)`
  margin-top: 54px;
  width: inherit;
  /* height: 100px; */
  display: none;
  z-index: 1;
  position: absolute;
  padding: 0 3px;
  padding-bottom: 2rem;

  &:focus {
    outline: 0;
  }

  ${({show:e})=>e&&m`
      display: inherit;
    `};
`,to=r(q)`
  width: 100%;
  height: 100%;
`,We=r(L)`
  display: block;
  width: 100%;
  margin: 2rem 2rem 0 2rem;

  ${({theme:e})=>e&&m`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,no=({user:e})=>{const[n,o]=D.exports.useState(!1),[i,l]=D.exports.useState(!1),s=g=>{l(!0),g.target.style.cursor="pointer",g.stopPropagation()},a=()=>{l(!1)},p=()=>{o(!n)},d=async()=>{await $.get("https://swim.42seoul.io/api/auth/logout",{withCredentials:!0}),location.reload()};return u(Yn,{children:[t(K,{size:"lg",photo:e==null?void 0:e.image,nickname:(e==null?void 0:e.nickname)?e==null?void 0:e.nickname:"\uC815\uBCF4\uC5C6\uC74C",onMouseEnter:s,onMouseLeave:a,onClick:p,color:i?"grey":"black",children:t(Xn,{onClick:()=>{}})}),t(eo,{show:n,tabIndex:0,onFocus:()=>o(!0),children:u(to,{children:[t(We,{to:"/setting",children:"\uC124\uC815"}),t(We,{onClick:d,children:"\uB85C\uADF8\uC544\uC6C3"})]})})]})},oo=m`
  ${({height:e})=>e&&m`
      height: ${e};
    `}
`,io=r.div`
  width: 533px;
  height: 644px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;

  ${oo}
`,ro=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(io,v(h({},n),{children:e}))},so=()=>u("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 1L16.5 16.5",stroke:"#121212",strokeWidth:"2"}),t("path",{d:"M16.5 1L0.999999 16.5",stroke:"#121212",strokeWidth:"2"})]}),lo=r.span`
  float: right;
  &:hover,
  &:focus {
    cursor: pointer;
    color: red;
  }
`,ao=r(j)`
  margin-top: 75px;
`,uo=r.div`
  font-weight: 500;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 38px;
  font-style: normal;
`,je=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&m`
      height: ${e};
    `}
`,_e=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&m`
      height: ${e};
    `}
`,co=r.div`
  display: ${({visible:e})=>e?"flex":"none"};
  position: fixed;
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  left: 0;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`,pe=a=>{var p=a,{children:e,onClose:n,visible:o,title:i,subtitle:l}=p,s=k(p,["children","onClose","visible","title","subtitle"]);return t(co,{visible:o,children:u(ro,v(h({},s),{children:[t(lo,{onClick:n,children:t(so,{})}),t(ao,{size:"h1",children:i}),t(uo,{children:l}),e]}))})};pe.defaultProps={visible:!0};const ho=i=>{var l=i,{onClose:e,onRegist:n}=l,o=k(l,["onClose","onRegist"]);const[s,a]=D.exports.useState({email:"",password:""}),{email:p,password:d}=s,[g,C]=D.exports.useState(!1),c=async()=>{try{(await $.post("https://swim.42seoul.io/api/auth/login",s,{withCredentials:!0})).status===200?(le("https://swim.42seoul.io/api/users/info"),e(!1)):alert("\uB85C\uADF8\uC778 \uC2E4\uD328!")}catch(w){alert("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638 \uC624\uB958")}a({email:"",password:""})},b=w=>{const{name:B,value:y}=w.target;a(v(h({},s),{[B]:y}))},x=()=>{location.href="https://localhost:5000/auth/42login",e(!1),C(!0)};return u(F,{children:[t(Ve,{visible:g}),t(pe,v(h({onClose:()=>e(!1),title:"\uB85C\uADF8\uC778",subtitle:"\uC774\uBA54\uC77C\uB85C \uB85C\uADF8\uC778"},o),{children:u(je,{height:"392px",children:[u(_e,{height:"265px",children:[t(T,{name:"email",value:p,onChange:b,placeholder:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"}),t(T,{name:"password",value:d,type:"password",onChange:b,placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"}),t(P,{onClick:c,size:"lg",children:"\uB85C\uADF8\uC778"}),t(L,{onClick:x,fontcolor:"primary",underline:!0,children:"42seoul \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"})]}),t(L,{onClick:()=>{n(!0),e(!1)},fontcolor:"black",children:"\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?"})]})}))]})},po=o=>{var i=o,{onClose:e}=i,n=k(i,["onClose"]);const[l,s]=D.exports.useState({nickname:"",email:"",password:"",confirm_pass:""}),{nickname:a,email:p,password:d,confirm_pass:g}=l,C=x=>{const{name:w,value:B}=x.target;if(s(v(h({},l),{[w]:B})),w==="confirm_pass"&&d!==""){const y=document.getElementById("diffpass");y.style.display="inherit",d===g?(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",y.style.color="blue"):(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",y.style.color="red")}},c=x=>{if(x.target.name==="confirm_pass"&&d!==""){const w=document.getElementById("diffpass");w.style.display="inherit",d===g?(w.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",w.style.color="blue"):(w.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",w.style.color="red")}},b=async()=>{const x=await $.post("https://swim.42seoul.io/api/auth/signup",l,{withCredentials:!0});s({nickname:"",email:"",password:"",confirm_pass:""}),x.data.result===!0&&e(!1),location.reload()};return t(pe,v(h({title:"\uD68C\uC6D0\uAC00\uC785",subtitle:"\uC774\uBA54\uC77C\uB85C \uD68C\uC6D0\uAC00\uC785",height:"712px",onClose:()=>e(!1)},n),{children:u(je,{height:"420px",children:[u(_e,{height:"300px",children:[t(T,{name:"nickname",value:a,onChange:C,placeholder:"\uB2C9\uB124\uC784"}),t(T,{name:"email",value:p,onChange:C,placeholder:"\uC774\uBA54\uC77C"}),t(T,{name:"password",value:d,type:"password",onChange:C,placeholder:"\uBE44\uBC00\uBC88\uD638"}),t(T,{name:"confirm_pass",value:g,type:"password",onChange:C,onKeyUp:c,onBlur:c,placeholder:"\uBE44\uBC00\uBC88\uD638 \uD655\uC778"}),t(E,{size:"14",id:"diffpass",style:{width:"449px",marginLeft:"2rem",display:"none"},children:"HiddenBox"})]}),t(P,{onClick:b,size:"lg",children:"\uD68C\uC6D0\uAC00\uC785"})]})}))},Co=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${A.color.background.grey};
  height: 130px;
  width: 100%;

  margin-bottom: 3rem;
`,go=r.div``,mo=r.div``,fo=r.button`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 25px;
  border: 1px solid ${A.color.lightblack};
  color: ${A.color.lightblack};
  margin-left: 10px;
  padding: 5px 1rem;
  &:hover {
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
    color: rgba(0, 0, 0, 0.3);
    border-color: rgba(0, 0, 0, 0.3);
  }
  &:active {
    color: #ffb84c;
    border-color: #ffb84c;
  }
`,xo=r(j)`
  margin-bottom: 7px;
`,wo=()=>{const[e,n]=D.exports.useState(!1),[o,i]=D.exports.useState(!1),{user:l,isLoading:s,isError:a}=V(),[p,d]=D.exports.useState(!1);return D.exports.useEffect(()=>{le("https://swim.42seoul.io/api/users/info")},[]),u(F,{children:[t(Ve,{visible:p}),t(ho,{onRegist:i,visible:e,onClose:n}),t(po,{visible:o,onClose:i}),u(Co,{children:[u(go,{children:[t(re,{to:"/",children:t(xo,{size:"h1",children:t(Un,{})})}),t(E,{size:"14",color:"lightgrey",children:"42seoul"})]}),l&&!s?t(no,{user:l}):t(mo,{children:t(fo,{onClick:()=>{location.href="https://swim.42seoul.io/api/auth/42login",d(!0),setTimeout(()=>{d(!1)},3e4)},children:"42 \uB85C\uADF8\uC778"})})]})]})},Bo=r.div`
  width: 100%;
  height: 100%;

  > * {
    padding: 0 20rem;

    @media (max-width: 1023px) {
      padding: 0 3rem;
    }
  }
`,bo=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`,U=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return u(Bo,{children:[t(wo,{}),t(bo,v(h({},n),{children:e})),t(Nn,{})]})},yo=r.div`
  margin-bottom: 7rem;
`;r.div`
  margin-bottom: 4rem;
`;const vo=l=>{var s=l,{question:e,answer:n,answerWriting:o}=s,i=k(s,["question","answer","answerWriting"]);return u("div",v(h({},i),{children:[t(yo,{children:e}),n,o]}))},ko=n=>{var e=k(n,[]);const{question:o,answer:i,isLoading:l,isError:s}=R(),{user:a,isLoading:p}=V();let d;return!l&&!p&&(d=i==null?void 0:i.map(g=>t(vn,h({isChoosable:a?o.user.email===a.email:!1,is_solved:o.is_solved},g),g.id))),s?t(F,{children:"err"}):t(U,v(h({},e),{children:t(vo,{question:t(Zn,{}),answer:d,answerWriting:t(Tn,{})})}))},Do=r.input`
  width: 100%;
  font-size: 18px;
  background-color: inherit;
  margin: 3rem 0rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`,$o=r.div``,Ao=r.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  left: -1rem;
`,Re=p=>{var d=p,{value:e,inputChange:n,setValue:o,tag:i,setTag:l,placeholder:s}=d,a=k(d,["value","inputChange","setValue","tag","setTag","placeholder"]);const g=document.getElementsByClassName("tagMsgEl")[0],C=document.getElementsByClassName("tagInput")[0],c=new RegExp(/^[a-z0-9+#_]+$/),b=()=>{const f=[...i];e&&!i.includes(e)&&f.push(e),o(""),l(f),C.style.color="black"},x=f=>{f.preventDefault(),n(f),f.target.value&&c.test(f.target.value)&&(g.style.display="none",C.style.color="black")},w=f=>{(f.code==="Enter"||f.code==="Space")&&(f.preventDefault(),c.test(e)?b():(g.style.display="block",C.style.color="red"))},B=f=>{const I=i.filter(Q=>Q!==f);l(I)},y=i==null?void 0:i.map(f=>t(he,{name:f,onDelClick:B,isDel:!0},f));return u($o,v(h({},a),{children:[t(Ao,{children:y}),t(Do,{value:e,className:"tagInput",onChange:x,onBlur:b,onKeyPress:w,placeholder:s}),t(E,{className:"tagMsgEl",size:"12",color:"red",style:{position:"relative",top:"-2.5rem",display:"none"},children:"\uC798\uBABB\uB41C \uD0DC\uADF8 \uD615\uC2DD\uC785\uB2C8\uB2E4. \uC601\uC5B4\uC18C\uBB38\uC790\uC640 \uD2B9\uC218\uBB38\uC790 #+_ \uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. ex)ft_pintf"})]}))},Ze=r.input`
  font-size: 36px;
  font-weight: 600;
  color: black;
  border: none;
  background-color: inherit;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  &:focus::placeholder {
    color: transparent;
  }
  &:hover,
  &:focus {
    outline: none;
  }
`,Eo=r.div`
  width: 100%;
  height: 100%;
`,Lo=r(Ze)`
  width: 100%;
  margin-bottom: 20px;
`,Fo=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,zo=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,So=()=>{const{question:e,isLoading:n,isError:o}=R(),i=C=>/^[\w]*$/g.test(C)&&C.length<20,l=C=>C.length<40,s=S("",i),a=S("",l),p=S(""),[d,g]=D.exports.useState([]);if(D.exports.useEffect(()=>{const C=e==null?void 0:e.hashtag.map(c=>c.name);g(C),a.setValue(e?e.title:""),p.setValue(e?e.text:"")},[]),!n&&!o){const C=async c=>{if(c.preventDefault(),!a.value||!p.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{(await $.patch("https://swim.42seoul.io/api/posts/question",{questionId:e.id,title:a.value,hashtag:d,text:p.value},{withCredentials:!0})).status===200?(alert("\uC9C8\uBB38 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${e.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(b){alert(b)}};return u(Eo,{children:[t(Lo,{value:a.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:a.onChange}),t(Re,{inputChange:s.onChange,value:s.value,setValue:s.setValue,tag:d,setTag:g,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(oe,{weight:"bold",width:"4rem"}),u(Fo,{children:[t(te,{value:p.value,setValue:p.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),u(zo,{children:[t(L,{fontcolor:"deepgray",style:{fontSize:"16px",marginRight:"2rem"},to:`/detail?id=${e.id}`,children:"\uCDE8\uC18C"}),t(P,{size:"sm",onClick:C,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})]})}else return o?t("div",{children:"err.."}):t("div",{children:"loading"})},Mo=n=>{var e=k(n,[]);return t(U,v(h({},e),{children:t(So,{})}))},Ne=e=>t("svg",v(h({},e),{height:"10px",viewBox:"0 0 448 448",width:"10px",fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"})})),Io=e=>u("svg",v(h({width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{children:[t("circle",{cx:"8",cy:"8",r:"6.5",stroke:"black",strokeWidth:"3"}),t("path",{d:"M13.5 13L19 18.5",stroke:"black",strokeWidth:"3"})]})),To=r.div`
  width: 55%;
  height: 43px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
  background: white;
  padding-right: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  &:hover {
    border: 1px solid #c2c2c2;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
`,Ho=r(T)`
  width: 500px;
  height: 41px;
  border-radius: 20px 0 0 20px;
`,qo=r.button`
  width: 44px;
  height: 41px;
  float: right;
  border-radius: 0 20px 20px 0;
  background: white;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`,Ue=l=>{var s=l,{onChange:e,onSearch:n,search:o}=s,i=k(s,["onChange","onSearch","search"]);const[a,p]=D.exports.useState(!1),d={border:`1px solid ${A.color.primary}`},g=C=>{C.key==="Enter"&&n()};return t(F,{children:u(To,v(h({style:a?d:{}},i),{children:[t(Ho,{placeholder:"\uAC80\uC0C9\uD560 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694",value:o,border:!1,onKeyPress:g,onChange:e,onFocus:()=>p(!0),onBlur:()=>p(!1)}),t(qo,{onClick:n,children:t(Io,{})})]}))})},Po=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,Vo=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Wo=r(Z)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Ce=l=>{var s=l,{name:e,count:n,color:o}=s,i=k(s,["name","count","color"]);return u(Se,v(h({width:"40px",height:"60px"},i),{children:[t(E,{weight:"bold",size:"18",color:o,children:e}),t(E,{weight:"bold",size:"18",color:o,children:n})]}))},jo=r(z)`
  width: 100%;
  height: 182.46px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,_o=r(q)`
  width: 76%;
  height: 90%;
  align-items: flex-start;
`,Ro=r(j)`
  &:hover,
  &:focus {
    ${({theme:e})=>e&&m`
        color: ${e.color.lightblack};
        cursor: pointer;
      `};
  }
`,Zo=r(E)`
  overflow: hidden;
  white-space: wrap;
  font-weight: 100;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  max-height: 50px;
  line-height: 25px;
`,No=r(E)``,Uo=r(z)`
  width: 100%;
`,Qo=r(z)`
  width: 17rem;
  height: 100%;
  padding: 0 1rem;
`;r(q)`
  width: 10%;
  height: 100%;
`;const Qe=b=>{var x=b,{id:e,title:n,text:o,is_solved:i,photo:l,nickname:s,answer_cnt:a=1,like_count:p,view_count:d,created_at:g,hashtag:C}=x,c=k(x,["id","title","text","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);o=o.replace(/^\s*`{3}\w*/gm,"").replace(/[`#*~_>]/g,"").replace(/^!\[[\w.]*\]\([\w.:/-]+\)/gi,""),C.length>5&&(C=C.slice(0,3),C.push({name:"..."}));const w=()=>{const B="https://swim.42seoul.io/api/pages/question/viewCount";$.post(B,{questionId:e},{withCredentials:!0})};return u(jo,v(h({},c),{children:[u(_o,{children:[t(re,{to:`/detail?id=${e}`,onClick:w,children:t(Ro,{size:"h2",children:n})}),t(Zo,{size:"18",weight:"normal",color:"grey",children:o}),u(Uo,{children:[u(z,{children:[t(No,{size:"14",weight:"normal",color:"grey",children:ee(g)}),C.map((B,y)=>t(he,{name:B==null?void 0:B.name,style:{marginTop:"0px"}},y))]}),t(K,{size:"sm",photo:l,nickname:s,id:0})]})]}),u(Qo,{children:[t(Ce,{name:"\uB2F5\uBCC0",count:a,color:i?"primary":"black"}),t(Ce,{name:"\uCD94\uCC9C",count:p}),t(Ce,{name:"\uC870\uD68C",count:d})]})]}))},Oo=e=>{const[n,o]=D.exports.useState(!1);return t("svg",v(h({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginLeft:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:s=>{o(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{o(!1)}},e),{children:t("path",{d:"M1.225 23.5507C1.8375 24.1532 2.825 24.1532 3.4375 23.5507L13.825 13.332C14.3125 12.8524 14.3125 12.0777 13.825 11.5982L3.4375 1.37952C2.825 0.776976 1.8375 0.776976 1.225 1.37952C0.612503 1.98206 0.612503 2.95351 1.225 3.55605L10.275 12.4712L1.2125 21.3864C0.612503 21.9767 0.612503 22.9604 1.225 23.5507Z",fill:n?A.color.lightblack:A.color.black})}))},Ko=e=>{const[n,o]=D.exports.useState(!1);return t("svg",v(h({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginRight:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:s=>{o(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{o(!1)}},e),{children:t("path",{d:"M13.775 1.39185C13.1625 0.789306 12.175 0.789306 11.5625 1.39185L1.17501 11.6105C0.687512 12.0901 0.687512 12.8648 1.17501 13.3443L11.5625 23.563C12.175 24.1655 13.1625 24.1655 13.775 23.563C14.3875 22.9604 14.3875 21.989 13.775 21.3865L4.72501 12.4713L13.7875 3.55609C14.3875 2.96584 14.3875 1.9821 13.775 1.39185Z",fill:n?A.color.lightblack:A.color.black})}))},Go=r.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Jo=l=>{var s=l,{number:e,active:n,onClick:o}=s,i=k(s,["number","active","onClick"]);const[a,p]=D.exports.useState(!1),d=c=>{p(!0),c.target.style.color=A.color.lightblack,c.stopPropagation()},g=c=>{p(!1),c.target.style.color=A.color.black},C={display:"flex",justifyContent:"space-around",alignItems:"center"};return t(ce,v(h({onClick:o,size:"sm",color:n?A.color.primary:A.color.white,style:C,onMouseEnter:d,onMouseLeave:g},i),{children:e}))};function Xo(e,n){const o=10*(n.current-1)+1;let i;return e<=10?i=e:o+9>=e?i=e-o+1:i=10,Array(i).fill(o).map((l,s)=>l+s)}function Yo(e,n){let o=parseInt(n/e);return n%e==0&&(o=o-1),o+1}const ge=s=>{var a=s,{page:e=1,limit:n=8,onPage:o,questionCount:i=10}=a,l=k(a,["page","limit","onPage","questionCount"]);const p=Yo(n,i),d=D.exports.useRef(1),g=()=>{if(e===1){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==1&&(d.current-=1),o(e-1)},C=()=>{if(e===p){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==0&&(d.current+=1),o(e+1)};return u(Go,v(h({},l),{children:[t(Ko,{onClick:g}),t(z,{children:Xo(p,d).map(c=>t(Jo,{number:c,onClick:()=>o(c),active:e===c},c))}),t(Oo,{onClick:C})]}))},ei=r.ul`
  /* width: 380px; */
  /* height: 41px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  /* margin-bottom: 1rem; */

  ${({width:e})=>e&&m`
      width: ${e};
    `}
  ${({height:e})=>e&&m`
      width: ${e};
    `}
  ${({size:e})=>e==="sm"&&m`
      height: 21px;
      /* width: 224px; */
    `}
	${({size:e})=>e==="xsm"&&m`
      margin: 0 0;
    `}
`,ti=r.li`
  color: #c4c4c4;
  font-size: 20px;
  border: none;
  font-weight: 700;
  margin: 0.2rem 1.1rem;
  /* width: 95px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  ${({size:e})=>e==="sm"&&m`
      font-size: 18px;
      margin: 0 0.8rem;
      /* width: 67px; */
    `}
  ${({size:e})=>e==="xsm"&&m`
      font-size: 14px;
      margin: 0 0;
      /* width: 67px; */
    `}
`,H=l=>{var s=l,{active:e,children:n,onTabClick:o}=s,i=k(s,["active","children","onTabClick"]);return t(ti,v(h({style:e?{color:"black",transition:"color 0.5s ease"}:void 0,onClick:o},i),{children:n}))},ie=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(ei,v(h({},n),{children:e}))};ie.Item=H;const ni=async e=>{const n=await $.get(e).catch(o=>{throw ct(o),Error()});return n==null?void 0:n.data},oi=(e,n)=>{const o=e===0?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:e===1?`https://swim.42seoul.io/api/pages/list/question/like?pageNumber=${n}`:e===2?`https://swim.42seoul.io/api/pages/list/question/unsolved?pageNumber=${n}`:e===3?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:"",{data:i,error:l}=N(o,ni);return{question:i,isLoading:!l&&!i,isError:l}},Oe=r.div`
	width: 500px;
	height: 120px; /* change height to see repeat-y behㅊavior */

	background-image:
			linear-gradient( 100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% ),
			linear-gradient( grey 20px, transparent 0 ),
			linear-gradient( grey 20px, transparent 0 ),
			linear-gradient( grey 20px, transparent 0 ),
			linear-gradient( grey 20px, transparent 0 );

		background-repeat: no-repeat;

		background-size:
			50px 200px, /* highlight */
			150px 200px,
			350px 200px,
			300px 200px,
			250px 0px;

		background-position:
			0 0, /* highlight */
			0 0,
			0 40px,
			0 80px,
			0 120px;

		animation: shine 1s infinite;
	}

	@keyframes shine {
		to {
			background-position:
				100% 0, /* move highlight to right */
				0 0,
				0 40px,
				0 80px,
				0 120px;
	${({height:e})=>e&&m`
      height: ${e};
    `}
	${({width:e})=>e&&m`
      width: ${e};
    `}
`,ii=async e=>(await $.get(e)).data;function ri(e){const n=`https://swim.42seoul.io/api/hashtags/count?pageNumber=${e}`,{data:o,error:i}=N(n,ii);return{tagList:o&&o.hashtag,isLoading:!i&&!o,isError:i}}const si=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 8rem;

  margin-right: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,li=r.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${A.color.text.primary};
`,ai=r.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${A.color.text.grey};

  margin-top: 12px;
`;function ui(i){var l=i,{name:e,questionCount:n}=l,o=k(l,["name","questionCount"]);return u(si,v(h({},o),{children:[t(li,{children:e}),u(ai,{children:["\uC9C8\uBB38 ",n,"\uAC1C"]})]}))}const ci=r(Z)`
  width: 100%;
  padding: 1.5rem 2.5rem;
`,di=r.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  margin-top: 1.5rem;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,hi=r.ul`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;function pi(n){var e=k(n,[]);const[o,i]=D.exports.useState(1),{tagList:l,isLoading:s}=ri(o);if(s)return t("div",{children:"loading"});{const a=l==null?void 0:l.hashTagList.map(p=>t(ui,h({},p),p.id));return u(ci,v(h({},e),{children:[u(di,{children:["\uBAA8\uB4E0 \uD0DC\uADF8 (",l==null?void 0:l.hashTagListCount,")\uAC1C"]}),t(hi,{children:a}),t(q,{height:"115px",children:t(ge,{limit:30,questionCount:l==null?void 0:l.hashTagListCount,page:o,onPage:i})})]}))}}const Ci=n=>{var e=k(n,[]);const[o,i]=D.exports.useState(0),[l,s]=D.exports.useState(1),{question:a,isLoading:p,isError:d}=oi(o,l);return d?t("div",{children:"Error!!"}):u(Po,{children:[u(ie,v(h({},e),{children:[t(H,{active:o===0,onTabClick:()=>i(0),children:"\uCD5C\uC2E0\uC21C"}),t(H,{active:o===1,onTabClick:()=>i(1),children:"\uC778\uAE30\uC21C"}),t(H,{active:o===2,onTabClick:()=>i(2),children:"\uB2F5\uBCC0\uD544\uC694"}),t(H,{active:o===3,onTabClick:()=>i(3),children:"\uD0DC\uADF8"})]})),o===3?t(pi,{}):u(Wo,{children:[p?[...Array(8)].map((g,C)=>t(Vo,{children:t(Oe,{})},C)):(a==null?void 0:a.questionList)&&(a==null?void 0:a.questionList.map((g,C)=>{var c;return t(Qe,h({id:g.id,title:g.title,text:g.text,photo:g.user.photo,nickname:(c=g==null?void 0:g.user)==null?void 0:c.nickname,is_solved:g.is_solved,answer_cnt:g.answer_count,like_count:g.like_count,view_count:g.view_count,hashtag:g.hashtag,created_at:g.created_at},e),C)})),t(q,{height:"115px",children:t(ge,{questionCount:a==null?void 0:a.questionCount,page:l,onPage:s})})]})]})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const gi=r(z)`
  width: 100%;
  margin-bottom: 4.5rem;
`,mi=r(z)`
  align-items: flex-start;
`;r(z)`
  width: 100%;
  height: 248px;
  background: #9d9d9d;
  margin-top: 15rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;const fi=({panel:e,content1:n,content2:o})=>u(F,{children:[t(gi,{children:e}),u(mi,{children:[n,o]})]}),xi=r.div`
  width: 28%;
  position: relative;
  @media (max-width: 910px) {
    display: none;
    background-color: pink;
  }
`,wi=r(Z)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 2.5rem;
  padding-bottom: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
`,Bi=r(z)``,bi=r.span`
  ${({theme:e})=>e&&m`
      background-color: ${e.color.primary};
    `}
  position: absolute;
  width: 130px;
  height: 15px;
  top: 75px;
  opacity: 30%;
  z-index: 0;
`,yi=r.div`
  margin: 1.5rem 0;
  margin-bottom: 2rem;
`,vi=r.div`
  height: 12px;
  width: 0.5px;
  margin: 0 1rem;
  ${({theme:e})=>m`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,ki=r.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  * & * {
    margin-right: 1.5rem;
  }
`,Di=r.div`
  /* z-index: 100; */
`,$i=({onHover:e})=>{const[n,o]=D.exports.useState(!1),i=D.exports.useRef(null),l=a=>{if(a.type=="click")e(!n),o(!n);else if(a.type=="mouseleave"){if(n)return;e(!1)}},s=a=>{a.target.style.cursor="pointer",e(!0)};return u("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:n?`${A.color.lightprimary}`:"black",onClick:l,onMouseEnter:s,onMouseLeave:l,children:[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})]})},Ai=async e=>(await $.get(e)).data,Ei=()=>{const e="https://swim.42seoul.io/api/users/ranking",{data:n,error:o}=N(e,Ai),i=n==null?void 0:n.monthRankerInfo.filter(s=>s.id!=null),l=n==null?void 0:n.totalRankerInfo.filter(s=>s.id!=null);return{ranking:{month:i,total:l},isLoading:!o&&!n,isError:o}},Li=r(Z)`
  height: 400px;
  width: 350px;
  background-color: rgba(53, 147, 235, 0.9);
  padding: 20px 30px;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 90px;

  ${({visible:e})=>e===!1&&m`
      display: none;
    `}
`,Fi=r.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
`;r.span`
  height: 100%;
  width: 100%;
`;const G=r.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
  height: 30px;
  padding-bottom: 2px;
  margin-top: 1.5rem;
  border-bottom: 1px solid rgba(75, 131, 182, 0.8);
`,zi=r.div`
  font-size: 10px;
  font-weight: 500;
  color: white;
  line-height: 2rem;
  padding-bottom: 2px;
  margin-top: 2rem;
  /* border-bottom: 1px solid rgba(75, 131, 182, 0.8); */
`,Si=r.a`
  text-decoration: underline;
  color: #3e4d74;

  &:visited,
  &:link {
    color: #3e4d74;
  }
  &:hover {
    color: #c9e8ff;
    -webkit-transition: color 0.5s ease;
    -moz-transition: color 0.5s ease;
    transition: color 0.5s ease;
    cursor: pointer;
  }
`,Mi=({visible:e=!1})=>u(Li,{visible:e,children:[u(Fi,{children:["\uC810\uC218\uC0B0\uC815 \uAE30\uC900",t("span",{style:{fontSize:"40px",marginLeft:"1rem"},role:"img","aria-label":"swim",children:"\u{1F3CA}"})]}),t(G,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(G,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC758 \uB2F5\uBCC0 \uC911 \uD558\uB098\uB97C \uCC44\uD0DD"}),t(G,{children:"+10 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(G,{children:"+15 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC774 \uCC44\uD0DD"}),t(G,{children:"-1 \uC810 : \uB2E4\uB978 \uC0AC\uB78C\uC758 \uC9C8\uBB38/\uB2F5\uBCC0\uC5D0 \uC2EB\uC5B4\uC694\uB97C \uB2EE"}),u(zi,{children:["\uB108\uBB34 \uC131\uC758\uC5C6\uAC8C \uC801\uD600\uC9C4 \uAE00\uB4E4\uC740 \uD1B5\uBCF4\uC5C6\uC774 \uC0AD\uC81C\uB418\uBA70, \uC774\uBCA4\uD2B8\uC5D0\uC11C \uC81C\uC678\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."," ",t(Si,{href:"https://gratis-cardboard-45e.notion.site/42swim-7d4fd87c1cbd4686a7218788610955d3",children:"\uCEE4\uBBA4\uB2C8\uD2F0 \uC591\uC2DD"})," ","\uC744 \uC9C0\uCF1C\uC8FC\uC138\uC694!"]})]}),Ke=({rank:e,photo:n,nickname:o})=>u(ki,{children:[t(E,{size:"18",weight:"bold",color:"deepgray",children:e}),t(K,{border:!0,size:"lg",nickname:o,photo:n})]}),Ii=()=>{const{ranking:e,isLoading:n,isError:o}=Ei(),{month:i,total:l}=e,[s,a]=D.exports.useState(0),[p,d]=D.exports.useState(!1),g=C=>{d(C)};return n?t("div",{children:"loading"}):o?t("div",{children:"error"}):u(xi,{children:[t(ze,{style:{height:"44px",justifyContent:"flex-start",alignItems:"flex-start"}}),u(wi,{children:[u(Bi,{children:[t(E,{size:"18",weight:"bold",style:{zIndex:"2"},children:"42Swimmer \uB7AD\uD0B9"}),t(bi,{}),t($i,{onHover:g}),t(Mi,{visible:p})]}),t(yi,{children:u(ie,{size:"xsm",children:[t(H,{size:"xsm",active:s===0,onTabClick:()=>a(0),children:"\uC6D4\uBCC4\uC21C"}),t(vi,{}),t(H,{size:"xsm",active:s===1,onTabClick:()=>a(1),children:"\uC804\uCCB4\uC21C"})]})}),t(Di,{children:s===0?i.map((C,c)=>t(Ke,{rank:c,nickname:C.nickname,photo:C.photo},C.id)):l.map((C,c)=>t(Ke,{rank:c,nickname:C.nickname,photo:C.photo},C.id))})]})]})},Ti=o=>{var i=o,{history:e}=i,n=k(i,["history"]);const{value:l,onChange:s}=S("");return t(F,{children:t(U,{children:t(fi,{panel:u(F,{children:[t(Ue,{onChange:s,search:l,onSearch:p=>{dt(p),e.push(`/search?keyword=${l}`)}}),u(P,{shadow:!0,onClick:()=>e.push("/writing"),size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(Ne,{style:{marginLeft:"2rem"}})]})]}),content1:t(Ci,{}),content2:t(Ii,{})})})})},Hi=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,qi=r(z)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Pi=r.span`
  font-size: 18px;
  font-weight: 700;
`,Vi=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Wi=r(Z)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,ji=async e=>(await $.get(e)).data,_i=(e,n,o)=>{const l=`https://swim.42seoul.io/api/pages/list/question/keyword?pageNumber=${n}&keyword=${o}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:s,error:a}=N(l,ji);return{question:s,isLoading:!a&&!s,isError:a}},Ri=o=>{var i=o,{keyword:e}=i,n=k(i,["keyword"]);const[l,s]=D.exports.useState(0),[a,p]=D.exports.useState(1),{question:d,isLoading:g,isError:C}=_i(l,a,e);return C?t("div",{children:"Error!!"}):t(Hi,{children:u(Wi,{children:[u(qi,{children:[u(Pi,{children:["\uAC80\uC0C9\uACB0\uACFC (",d==null?void 0:d.questionCount,"\uAC74)"]}),u(ie,v(h({size:"sm"},n),{children:[t(H,{size:"sm",active:l===0,onTabClick:()=>s(0),children:"\uCD5C\uC2E0\uC21C"}),t(H,{size:"sm",active:l===1,onTabClick:()=>s(1),children:"\uC778\uAE30\uC21C"}),t(H,{size:"sm",active:l===2,onTabClick:()=>s(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),g?[...Array(8)].map((c,b)=>t(Vi,{children:t(Oe,{})},b)):d==null?void 0:d.questionList.map((c,b)=>{var x;return t(Qe,h({id:c.id,title:c.title,text:c.text,photo:c.user.photo,nickname:(x=c==null?void 0:c.user)==null?void 0:x.nickname,is_solved:c.is_solved,answer_cnt:c.answer_count,like_count:c.like_count,view_count:c.view_count,hashtag:c.hashtag,created_at:c.created_at},n),b)}),t(q,{height:"115px",children:t(ge,{questionCount:d==null?void 0:d.questionCount,page:a,onPage:p})})]})})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const Zi=r(z)`
  width: 100%;
  margin-bottom: 4.5rem;
`,Ni=r(z)`
  align-items: flex-start;
`;r(z)`
  width: 100%;
  height: 248px;
  background: #9d9d9d;
  margin-top: 15rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;const Ui=({panel:e,content:n})=>u(F,{children:[t(Zi,{children:e}),t(Ni,{children:n})]}),Qi=({location:e})=>{const o=ht.parse(e.search,{ignoreQueryPrefix:!0}).keyword,{value:i,onChange:l}=S(o),[s,a]=D.exports.useState(o);return t(U,{children:t(Ui,{panel:u(F,{children:[t(Ue,{onChange:l,search:i,onSearch:()=>{a(i)}}),u(P,{shadow:!0,onClick:()=>{},size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(Ne,{style:{marginLeft:"2rem"}})]})]}),content:t(Ri,{keyword:s})})})},Oi=r.div`
  padding: 0 5rem;
`,Ki=r(z)`
  justify-content: flex-start;
  > * {
    margin-right: 3rem;
  }
`,Gi=r(q)`
  height: 300px;
  /* width: 25%; */
  justify-content: center;

  > * {
    margin-bottom: 2rem;
  }
`,Ji=r.div`
  width: 0.5px;
  height: 150px;
  margin: 0 2rem;
  ${({theme:e})=>m`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,Xi=r.div`
  width: 59%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;

  > * {
    margin-bottom: 1.5rem;
  }
  * {
    margin-bottom: 1.5rem;
  }

  > * > button {
    float: right;
  }
`,Yi=r.div`
  > * {
    margin-top: 2rem;
  }

  > button {
    margin-top: 3rem;
    float: right;
    /* 어케할지 결정하기  */
  }
`,er=({tlPanel:e,trPanel:n,bPanel:o})=>u(Oi,{children:[u(Ki,{children:[t(Gi,{children:e}),t(Ji,{}),t(Xi,{children:n})]}),t(Yi,{children:o})]}),tr=r.div`
  width: 100%;
  height: 100px;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>m`
    border-bottom: 1px ${e.color.lightgrey} solid;
  `}
`,nr=r(z)`
  padding: 1.5rem 0;
`,or=r(j)`
  width: 25%;
`,ir=r(E)`
  width: 65%;
`,rr=r(z)`
  width: 10%;
`,sr=r(E)`
  margin-bottom: 1.5rem;
`,Ge=({name:e,value:n,etc:o,desc:i})=>u(tr,{children:[u(nr,{children:[t(or,{size:"h2",children:e}),t(ir,{weight:"normal",size:"20",children:n}),t(rr,{children:o})]}),t(sr,{size:"14",color:"lightgrey",children:i})]}),lr=r(T)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  margin-right: 1.5rem;
`;r(T)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  padding: 10px 15px;
`;const ar=r(W)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > button {
    margin-right: 1rem;
  }
`,me=r(P)`
  width: 153px;
`,ur=n=>{var e=k(n,[]);const{user:o,isLoading:i,isError:l}=V(),{value:s,onChange:a,setValue:p}=S(o==null?void 0:o.nickname),[d,g]=D.exports.useState(!1);if(l)return alert("\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"),t(ye,{to:"/"});if(i)return t("div",{children:"loading..."});const C=()=>{const w=document.getElementById("uploadImg");w==null||w.click()},c=async()=>{const w=new FormData,B=document.getElementById("uploadImg").files[0],y="https://swim.42seoul.io/api/users/image";w.append("imgFile",B),await $.patch(y,w,{withCredentials:!0}).then(f=>{alert("\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC\uB97C \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},b=async()=>{const w="https://swim.42seoul.io/api/users/image";await $.delete(w,{withCredentials:!0}).then(B=>{alert("\uC774\uBBF8\uC9C0\uB97C \uC815\uC0C1\uC801\uC73C\uB85C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},x=async()=>{const w="https://swim.42seoul.io/api/users/nickname",B={nickname:s};await $.patch(w,B,{withCredentials:!0}).then(y=>{alert("\uB2C9\uB124\uC784 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),le("https://swim.42seoul.io/api/users/info"),g(!1)};return t(U,v(h({},e),{children:t(er,{tlPanel:u(F,{children:[t(ce,{size:"lg",img:(o==null?void 0:o.image)?o.image:null}),t(me,{size:"sm",color:"primary",shadow:!0,onClick:C,children:"\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"}),t("form",{id:"imgform",method:"patch",encType:"application/json",style:{display:"none"},children:t("input",{id:"uploadImg",type:"file",onChange:c})}),t(me,{size:"sm",color:"white",shadow:!0,onClick:b,children:"\uC774\uBBF8\uC9C0 \uC81C\uAC70"})]}),trPanel:u(F,{children:[u(W,{visible:!d,children:[t(j,{size:"h1",children:o==null?void 0:o.nickname}),t(oe,{weight:"bold",width:"4rem"}),t(L,{fontcolor:"primary",underline:!0,to:"#",onClick:()=>{p(o==null?void 0:o.nickname),g(!0)},children:"\uC218\uC815"})]}),u(ar,{visible:d,children:[t(lr,{value:s||"",onChange:a}),t(P,{size:"sm",color:"lightprimary",shadow:!0,onClick:x,children:"\uC218\uC815\uD558\uAE30"}),t(L,{fontcolor:"deepgray",underline:!0,to:"#",onClick:()=>g(!1),children:"\uCDE8\uC18C"})]})]}),bPanel:u(F,{children:[t(Ge,{name:"\uC774\uBA54\uC77C",value:o.email,etc:t(L,{fontcolor:"primary",underline:!0,children:"\uC218\uC815"}),desc:"\uD68C\uC6D0 \uC778\uC99D \uB610\uB294 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uBC1C\uC1A1\uD558\uB294 \uC774\uBA54\uC77C\uC744 \uC218\uC2E0\uD558\uB294 \uC8FC\uC18C\uC785\uB2C8\uB2E4."}),t(Ge,{name:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD",value:t(L,{fontcolor:"primary",underline:!0,children:"\uBCC0\uACBD\uD558\uAE30"}),desc:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uD558\uAE30 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC704\uC758 \uC774\uBA54\uC77C\uB85C  \uBCC0\uACBD\uD558\uAE30 \uD398\uC774\uC9C0\uAC00 \uBC1C\uC1A1\uB429\uB2C8\uB2E4."}),t(me,{size:"sm",fontColor:"white",color:"red",shadow:!0,children:"\uD68C\uC6D0 \uD0C8\uD1F4"})]})})}))},cr=r.div`
  width: 100%;
  height: 100%;
`,dr=r(Ze)`
  width: 100%;
  margin-bottom: 20px;
`,hr=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,pr=()=>{const e='\uC9C8\uBB38\uC744 \uB0A8\uACA8\uBCF4\uC138\uC694!\n  ```C\n  printf("helloWord");\n  ```',n=c=>/[\w]*$/g.test(c)&&c.length<20,o=c=>c.length<40,i=S("",n),l=S("",o),s=S(e),[a,p]=D.exports.useState([]),{isLoading:d,user:g}=V();D.exports.useEffect(()=>{!d&&!g&&(alert("\uB85C\uADF8\uC778 \uD6C4 \uC9C8\uBB38 \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),location.href="/")},[g]);const C=async c=>{if(c.preventDefault(),!l.value||!s.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{const b=await $.post("https://swim.42seoul.io/api/posts/question",{title:l.value,hashtag:a,text:s.value},{withCredentials:!0});b.status===200?(alert("\uC9C8\uBB38 \uC791\uC131\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${b.data.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(b){alert(b)}};return u(cr,{children:[t(dr,{value:l.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:l.onChange}),t(Re,{inputChange:i.onChange,value:i.value,setValue:i.setValue,tag:a,setTag:p,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(oe,{weight:"bold",width:"4rem",style:{marginBottom:"3rem"}}),u(hr,{children:[t(te,{value:s.value,setValue:s.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),t(P,{size:"sm",onClick:C,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})},Cr=n=>{var e=k(n,[]);return t(U,v(h({},e),{children:t(pr,{})}))},gr=pt`
  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0 !important;
    overflow-y: scroll;
	height: 100%;
	background: #f9f9f9;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  html, body {
	  height: 100%;
  }
  #root {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    background-color: inherit;
    border: none;
    padding: 0;
  }
  button:focus{
    outline:none;
  }
  input:focus{
	  outline: none;
  }
  a{
	  outline: none;
	  text-decoration: none;
  }
  a:visited, a:link {
	  color: inherit;
  }
`,mr=({children:e})=>u(Ct,{theme:A,children:[t(gr,{}),e]});O.event({category:"User",action:"Created an Account"});O.exception({description:"An error ocurred",fatal:!0});const fr=()=>{const e=$e();return D.exports.useEffect(()=>{O.initialize("UA-215641389-1"),O.set({page:e.pathname}),O.pageview(e.pathname)},[e]),t(mr,{children:u(gt,{children:[t(_,{path:"/",exact:!0,render:n=>t(Ti,h({},n))}),t(_,{path:"/search",exact:!0,render:n=>t(Qi,h({},n))}),t(_,{path:"/detail",exact:!0,render:n=>t(ko,h({},n))}),t(_,{path:"/writing",exact:!0,render:n=>t(Cr,h({},n))}),t(_,{path:"/edit",exact:!0,render:n=>t(Mo,h({},n))}),t(_,{path:"/setting",exact:!0,render:n=>t(ur,h({},n))}),t(_,{path:"/auth",render:n=>t(yt,h({},n))})]})})};mt({dsn:"https://be73c673dc5040cab904c7281630f650@o1092079.ingest.sentry.io/6110101",integrations:[new ft],tracesSampleRate:1});xt.render(t(wt.StrictMode,{children:t(Bt,{children:t(fr,{})})}),document.getElementById("root"));
