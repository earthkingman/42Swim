var ot=Object.defineProperty,it=Object.defineProperties;var rt=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var Be=(e,n,o)=>n in e?ot(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,p=(e,n)=>{for(var o in n||(n={}))we.call(n,o)&&Be(e,o,n[o]);if(X)for(var o of X(n))be.call(n,o)&&Be(e,o,n[o]);return e},v=(e,n)=>it(e,rt(n));var k=(e,n)=>{var o={};for(var i in e)we.call(e,i)&&n.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&X)for(var i of X(e))n.indexOf(i)<0&&be.call(e,i)&&(o[i]=e[i]);return o};import{s as r,U as st,j as t,F,a as u,r as D,b as $,R as ye,Z,q as ve,C as m,w as lt,L as ie,c as ke,l as De,d as at,u as $e,e as re,f as Ae,H as se,g as ut,h as ct,i as dt,W as ht,k as pt,m as O,S as Ct,n as _,o as gt,B as mt,p as ft,t as xt,v as wt}from"./vendor.7ec3e60e.js";const bt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}};bt();const Bt={button:{primary:"#1896BD",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",lightprimary:"#a7deef"},a:{primary:"#1896BD",white:"#FFFFFF",red:"#FF5D39",black:"#000000",deepgray:"#C4C4C4"},background:{white:"#FFFFFF",lightgrey:"#F3F3F3"},text:{primary:"#1896BD",white:"#FFFFFF",yellow:"#FFB84D",red:"#FF5D39",black:"#000000",lightgrey:"#a6a6a6",grey:"#565656",deepgray:"#C4C4C4"},tag:{primary:"#1896BD"},primary:"#1896BD",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",deepgray:"#C4C4C4",lightgrey:"#EAEAEA",black:"#000000",lightblack:"#545454",lightyelloew:"#FFDCA8"},A={color:Bt};var yt="/assets/422.bd7f157a.png";const vt=r.div`
  display: ${({visible:e})=>e?"flex":"none"};
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;

  /* display: flex; */
  justify-content: space-around;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`,kt=st`
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
`,Dt=r.div`
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

  animation-name: ${kt};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`,$t=r.div`
  /* position: fixed; */
  z-index: 1000;

  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${yt});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 55px 55px;
  background-color: white;
`,le=({visible:e})=>t(F,{children:u(vt,{visible:e,children:[t(Dt,{}),t($t,{})]})}),At=n=>{var e=k(n,[]);const o=location.search,[i,s]=D.exports.useState(!0);return D.exports.useEffect(()=>{$.get(`http://3.36.121.236:5000/auth/authResult${o}`),setTimeout(()=>{s(!1)},5e3)},[o]),i?t(le,{visible:i}):t(ye,{to:"/"})},Lt=async e=>await $({method:"get",url:e,withCredentials:!0}).then(o=>o.data).catch(o=>{throw o}),V=()=>{const e="http://3.36.121.236:5000/users/info",{data:n,error:o}=Z(e,Lt);return{isLogin:n,user:n&&n.result?n.user:null,isLoading:!o&&!n,isError:o}},Et=e=>$.get(e,{withCredentials:!0}).then(n=>n.data),R=()=>{const e=ve.parse(location.search).id,{data:n,error:o,mutate:i}=Z(`http://3.36.121.236:5000/pages/detail/question?questionId=${e}`,Et),s=(c,B,x,w)=>{if(n)if(w){let b=n.questionInfo.like_count;b=x?b-1:b+1,i({questionInfo:v(p({},n.questionInfo),{like_count:b,is_like:null})},!1),$.delete(`http://3.36.121.236:5000/posts/question/like?questionId=${B}&questionUserId=${c}&isLike=${x}`,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>i())}else{let b=n.questionInfo.like_count;b=x?b+1:b-1,i({questionInfo:v(p({},n.questionInfo),{like_count:b,is_like:x})},!1),$.post("http://3.36.121.236:5000/posts/question/like",{questionUserId:c,questionId:B,isLike:x},{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>{i()})}},l=(c,B,x,w)=>{if(w){let b=n.questionInfo.like_count;b=x?b-1:b+1;const y=n.questionInfo.answer.map(g=>(g.id===B&&(g.like_count=b,g.is_like=null),g));i({questionInfo:v(p({},n.questionInfo),{answer:y})},!1),$.delete(`http://3.36.121.236:5000/posts/answer/like?answerId=${B}&answerUserId=${c}&isLike=${x}`,{withCredentials:!0}).catch(g=>{throw alert(g),g}).finally(()=>{i()})}else{let b=n.questionInfo.like_count;b=x?b+1:b-1;const y=n.questionInfo.answer.map(g=>(g.id===B&&(g.like_count=b,g.is_like=x),g));i({questionInfo:v(p({},n.questionInfo),{answer:y})},!1),$.post("http://3.36.121.236:5000/posts/answer/like",{answerUserId:c,answerId:B,isLike:x},{withCredentials:!0}).catch(g=>{throw alert(g),g}).finally(()=>{i()})}},a=(c,B,x)=>{n&&$.post("http://3.36.121.236:5000/posts/comment",{text:c,questionId:B,answerId:x},{withCredentials:!0}).catch(w=>{throw alert(w),w}).finally(()=>i())},d=(c,B,x,w)=>{if(n){const b="http://3.36.121.236:5000/posts/comment",y=p({},n);w?y.questionInfo.answer=y.questionInfo.answer.map(g=>(g.id===w&&(g.comment=g.comment.map(I=>(I.id===B&&(I.text=c),I))),g)):y.questionInfo.answer=y.questionInfo.comment.map(g=>(g.id===B&&(g.text=c),g)),i(y,!1),$.patch(b,{text:c,commentId:B,questionId:x,answerId:w},{withCredentials:!0}).catch(g=>{throw alert(g),g}).finally(()=>i())}},h=(c,B,x)=>{if(n){const w=`http://3.36.121.236:5000/posts/comment?commentId=${c}&questionId=${B}${x?`&answerId=${x}`:""}`,b=p({},n);x?b.questionInfo.answer=b.questionInfo.answer.map(y=>(y.id===x&&(y.comment=y.comment.filter(g=>g.id!==c)),y)):b.questionInfo.comment=b.questionInfo.comment.filter(y=>y.id!==c),i(b,!1),$.delete(w,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>i())}},C=(c,B,x,w)=>{if(n){const b=p({},n);b.questionInfo.answer.push({text:B,user:{nickname:x}}),i(b,!1),$.post("http://3.36.121.236:5000/posts/answer",{questionId:c,text:B},{withCredentials:!0}).then(()=>w("")).catch(y=>{throw alert(y),y}).finally(()=>i())}},f=async(c,B,x)=>{try{const w=p({},n);w.is_solved=!0,w.questionInfo.answer=w.questionInfo.answer.map(y=>(y.id===B&&(y.is_solved=!0),y));const b="http://3.36.121.236:5000/posts/answer/choice";i(w,!1),await $.post(b,{questionId:c,answerId:B,answerUserId:x},{withCredentials:!0}),i()}catch(w){throw alert(w),w}};return{question:n?n.questionInfo:null,answer:n?n.questionInfo.answer:null,isLoading:!o&&!n,isError:o,QuestionThumbPost:s,AnswerThumbPost:l,CommentPost:a,CommentEdit:d,CommentDelete:h,AnswerPost:C,ChoicePost:f}},S=(e,n=()=>!0)=>{const[o,i]=D.exports.useState(e),[s,l]=D.exports.useState(!0);return{value:o,onChange:d=>{const{target:{value:h}}=d;n(h)?i(h):l(!1)},setValue:i,valid:s}},Ft=m`
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
`,zt=r.span`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  ${Ft}
`,St=s=>{var l=s,{to:e,children:n,location:o}=l,i=k(l,["to","children","location"]);return t(ie,{to:e||o.pathname+o.search,children:t(zt,v(p({},i),{children:n}))})};var E=lt(St);const Mt=r.div`
  display: ${({visible:e})=>e?"":"none !important"};
  ${({width:e})=>e&&m`
      width: ${e};
    `}
  ${({height:e})=>e&&m`
      height: ${e};
    `};
`,j=i=>{var s=i,{children:e,visible:n=!0}=s,o=k(s,["children","visible"]);return t(Mt,v(p({visible:n},o),{children:e}))},It=m`
  ${({isChecked:e})=>e==!0&&m`
      border: 3px solid ${A.color.primary};
      box-shadow: none;
    `}
`,Tt=r.div`
  width: 100%;
  /*height: 214px;*/
  /*display: flex;*/
  border-radius: 16px;
  background-color: white;
  padding: 50px 60px;
  padding-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
  ${It};
`,ae=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Tt,v(p({},n),{children:e}))};function Y(e){const n=new Date,o=new Date(e),i=Math.floor((n.getTime()-o.getTime())/1e3/60);if(i<1)return"\uBC29\uAE08\uC804";if(i<60)return`${i}\uBD84\uC804`;const s=Math.floor(i/60);if(s<24)return`${s}\uC2DC\uAC04\uC804`;const l=Math.floor(i/60/24);return l<365?`${l}\uC77C\uC804`:`${Math.floor(l/365)}\uB144\uC804`}const Ht=r.p`
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
`,qt=new ke.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[De({pre:!0})]}),Le=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return u(F,{children:[t(Ht,v(p({},n),{dangerouslySetInnerHTML:{__html:qt.makeHtml(e)}})),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]})},Pt=m`
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
`,Vt=r.p`
  color: black;
  word-break: break-all;
  ${Pt}
`,L=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Vt,v(p({},n),{children:e}))};var jt="/assets/cat0.7e5dd6fb.jpeg";const ue={xsm:{size:"25px"},sm:{size:"40px"},lg:{size:"120px"}},Wt=m`
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
          background-image: url(${jt});
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
  ${Wt}
`,Ee=r.div`
  display: flex;
  align-items: center;
`,Fe=r(ce)`
  margin-right: 8px;
  ${({theme:e,border:n})=>n&&m`
      border: 2px solid ${e.color.primary};
    `}
`,K=({nickname:e,size:n,photo:o,color:i,children:s,onMouseEnter:l,onMouseLeave:a,onClick:d,border:h})=>n==="sm"?u(Ee,{size:n,children:[t(Fe,{size:"xsm",img:o||"",border:h}),t(L,{size:"14",color:"grey",children:e}),s]}):u(Ee,{onMouseEnter:l,onMouseLeave:a,onClick:d,size:n,children:[t(Fe,{size:"sm",img:o||"",border:h}),t(L,{size:"18",weight:"bold",color:i,children:e}),s]}),_t=r.div`
  display: block;
  white-space: normal;
`,Rt=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
`,Zt=s=>{var l=s,{created_at:e,user:n,text:o}=l,i=k(l,["created_at","user","text"]);const a=Y(e);return u(_t,v(p({},i),{children:[u(Rt,{children:[t(K,v(p({},n),{size:"sm"})),t(L,{size:"14",color:"grey",children:a})]}),t(Le,{children:o})]}))},Nt=()=>u("svg",{width:"4",height:"20",viewBox:"0 0 4 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 10C1 10.5523 1.44772 11 2 11C2.55228 11 3 10.5523 3 10C3 9.44772 2.55228 9 2 9C1.44772 9 1 9.44772 1 10Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 18C1 18.5523 1.44772 19 2 19C2.55228 19 3 18.5523 3 18C3 17.4477 2.55228 17 2 17C1.44772 17 1 17.4477 1 18Z",stroke:"#565656",strokeWidth:"2"})]}),Ut=r.button`
  width: 24px;
  height: 24px;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`,Qt=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Ut,v(p({},n),{children:t(Nt,{children:e})}))},Ot=m`
  ${({width:e})=>e&&m`
      width: ${e};
    `}
  ${({height:e})=>e&&m`
      height: ${e};
    `}
`,Kt=r.div`
  width: 988px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 10px 0px;

  ${Ot}
`,N=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Kt,v(p({},n),{children:e}))},ze=r.div`
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
`,Gt=r.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 2rem 0px;
`,Jt=r.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`,Xt=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,Yt=r.p`
  font-size: 16px;
  width: 80%;
  background-color: inherit;
  color: grey;
  outline: none;
  &:focus-visible {
    color: black;
  }
`,en=r(N)`
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
`,tn=r(q)`
  width: 100%;
  height: 100%;
`,Me=r(E)`
  /*overflow: auto;*/
  display: block;
  width: 3rem;
  margin: 2rem 2rem 0 2rem;
  ${({theme:e})=>e&&m`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,nn=r(j)`
  position: relative;
`,Ie=({created_at:e,questionId:n,answerId:o,user:i,text:s,userEmail:l,id:a})=>{const{CommentEdit:d,CommentDelete:h}=R(),C=Y(e),[f,c]=D.exports.useState(!1),[B,x]=D.exports.useState(!1),{value:w,setValue:b,onChange:y}=S(s),g=D.exports.useRef(),I=async()=>{confirm("\uB313\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&h(a,n,o),c(!1)},Q=()=>{x(!0),setTimeout(function(){g.current.focus()},1),c(!f)},G=async()=>{d(w,a,n,o),x(!1)};return u(Gt,{children:[u(Jt,{children:[t(L,{weight:"bold",size:"14",children:i.nickname}),t(L,{size:"14",color:"grey",children:C})]}),u(Xt,{children:[t(Yt,{contentEditable:B,onChange:y,ref:g,suppressContentEditableWarning:!0,children:w}),i.email===l?u(F,{children:[u(nn,{visible:!B,children:[t(Qt,{onClick:()=>c(!f)}),t(en,{show:f,children:u(tn,{children:[t(Me,{small:!0,onClick:Q,children:"\uC218\uC815"}),t(Me,{small:!0,onClick:I,children:"\uC0AD\uC81C"})]})})]}),u(j,{visible:B,children:[t(E,{fontcolor:"deepgray",onClick:()=>{b(s),x(!1)},style:{marginRight:"1rem"},children:"\uCDE8\uC18C"}),t(E,{onClick:G,children:"\uC644\uB8CC"})]})]}):null]})]},a)},on=m`
  ${({border:e})=>e===!1&&m`
      border: none;
    `}
`,rn=r.input`
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
  ${on}
`,T=n=>{var e=k(n,[]);return t(rn,p({},e))},sn=r.form`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ln=r(T)`
  width: 80%;
  padding: 0px;
`,an=r(E)`
  white-space: nowrap;
  /*background-color: black;*/
`,Te=i=>{var s=i,{questionId:e,answerId:n}=s,o=k(s,["questionId","answerId"]);const{user:l,isLoading:a,isError:d}=V(),{CommentPost:h}=R(),{value:C,onChange:f,setValue:c}=S("");if(a)return d?t("div",{children:"Err.."}):t("div",{children:"Load..."});{const B=x=>{x.preventDefault(),C?l?(h(C,e,n),c("")):alert("\uB313\uAE00 \uC791\uC131\uC744 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"):alert("\uB313\uAE00\uC6B8 \uC785\uB825\uD574\uC8FC\uC138\uC694")};return u(sn,v(p({onSubmit:B},o),{children:[t(ln,{placeholder:"\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694",value:C,border:!1,onChange:f}),t(an,{fontcolor:"primary",underline:!1,onClick:B,children:"\uB313\uAE00 \uC785\uB825"})]}))}},un=r.div`
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
`,cn=new ke.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[De({pre:!0})]}),ee=s=>{var l=s,{value:e,setValue:n,placeHolder:o}=l,i=k(l,["value","setValue","placeHolder"]);const a=document.getElementsByClassName("mde-text")[0],[d,h]=D.exports.useState("write"),C=async function*(f){try{yield await new Promise(B=>{const x=new FormData,w=new File([f],"Image"),b="http://3.36.121.236:5000/posts/image";x.append("imgFile",w),$.post(b,x,{withCredentials:!0}).then(y=>{var g;y.status===200&&B((g=y==null?void 0:y.data)==null?void 0:g.image)})})}catch(c){alert("\uC0AC\uC9C4 \uC804\uC1A1 \uC2E4\uD328"),yield"Error"}return!0};return u(un,v(p({},i),{children:[t(at,{classes:{},value:e,onChange:f=>{const c=(event==null?void 0:event.target.scrollHeight)+"px";n(f),a.style.height="auto",a.style.height=c},selectedTab:d,onTabChange:h,generateMarkdownPreview:f=>Promise.resolve(cn.makeHtml(f)),childProps:{writeButton:{tabIndex:-1},textArea:{placeholder:o}},paste:{saveImage:C}}),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]}))},dn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#1896BD"})}),hn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#545454"})}),pn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#C4C4C4"})}),Cn=l=>{var a=l,{is_solved:e,isChosen:n,isChoosable:o,onClick:i}=a,s=k(a,["is_solved","isChosen","isChoosable","onClick"]);const[d,h]=D.exports.useState(!1);return e&&n?t(dn,p({},s)):!e&&o?t("button",v(p({onClick:i,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1)},s),{children:d?t(hn,{}):t(pn,{})})):t(F,{})},gn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M35.625 28.125H43.125V5.625H35.625V28.125ZM28.125 5.625H11.25C9.69375 5.625 8.3625 6.5625 7.8 7.9125L2.1375 21.1313C1.96875 21.5625 1.875 22.0125 1.875 22.5V26.25C1.875 27.2446 2.27009 28.1984 2.97335 28.9016C3.67661 29.6049 4.63044 30 5.625 30H17.4563L15.675 38.5687C15.6375 38.7562 15.6187 38.9437 15.6187 39.15C15.6187 39.9375 15.9375 40.6313 16.4438 41.1375L18.4312 43.125L30.7687 30.7687C31.4625 30.0938 31.875 29.1562 31.875 28.125V9.375C31.875 8.38044 31.4799 7.42661 30.7766 6.72335C30.0734 6.02009 29.1196 5.625 28.125 5.625Z",fill:"#545454"})}),mn=()=>t("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M34.8333 27.5V5.5H42.1666V27.5H34.8333ZM27.5 5.5C28.4724 5.5 29.4051 5.88631 30.0927 6.57394C30.7803 7.26157 31.1666 8.19421 31.1666 9.16667V27.5C31.1666 28.5083 30.7633 29.425 30.085 30.085L18.0216 42.1667L16.0783 40.2233C15.5833 39.7283 15.2716 39.05 15.2716 38.28L15.3266 37.7117L17.0683 29.3333H5.49998C4.52752 29.3333 3.59489 28.947 2.90725 28.2594C2.21962 27.5718 1.83331 26.6391 1.83331 25.6667V22C1.83331 21.5233 1.92498 21.0833 2.08998 20.6617L7.62665 7.73667C8.17665 6.41667 9.47831 5.5 11 5.5H27.5ZM27.5 9.16667H10.945L5.49998 22V25.6667H21.5966L19.525 35.42L27.5 27.445V9.16667Z",fill:"#545454"})}),fn=r.button`
  background-color: inherit;
`,xn=o=>{var i=o,{active:e}=i,n=k(i,["active"]);return t(fn,v(p({},n),{children:e?t(gn,{}):t(mn,{})}))},wn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M43.125 18.75C43.125 17.7554 42.7299 16.8016 42.0266 16.0984C41.3234 15.3951 40.3696 15 39.375 15H27.525L29.325 6.43125C29.3625 6.24375 29.3813 6.0375 29.3813 5.83125C29.3813 5.0625 29.0625 4.35 28.5562 3.84375L26.5688 1.875L14.2313 14.2125C13.5375 14.9062 13.125 15.8438 13.125 16.875V35.625C13.125 36.6196 13.5201 37.5734 14.2233 38.2766C14.9266 38.9799 15.8804 39.375 16.875 39.375H33.75C35.3063 39.375 36.6375 38.4375 37.2 37.0875L42.8625 23.8687C43.0312 23.4375 43.125 22.9875 43.125 22.5V18.75ZM1.875 39.375H9.375V16.875H1.875V39.375Z",fill:"#545454"})}),bn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M9.375 16.875V39.375H1.875V16.875H9.375ZM16.875 39.375C15.8804 39.375 14.9266 38.9799 14.2233 38.2766C13.5201 37.5734 13.125 36.6196 13.125 35.625V16.875C13.125 15.8438 13.5375 14.9062 14.2313 14.2313L26.5688 1.875L28.5562 3.8625C29.0625 4.36875 29.3813 5.0625 29.3813 5.83125L29.325 6.43125L27.5437 15H39.375C40.3696 15 41.3234 15.3951 42.0266 16.0984C42.7299 16.8016 43.125 17.7554 43.125 18.75V22.5C43.125 22.9875 43.0312 23.4375 42.8625 23.8687L37.2 37.0875C36.6375 38.4375 35.3063 39.375 33.75 39.375H16.875ZM16.875 35.625H33.8063L39.375 22.5V18.75H22.8937L25.0125 8.775L16.875 16.9312V35.625Z",fill:"#545454"})}),Bn=r.button`
  background-color: inherit;
`,yn=i=>{var s=i,{active:e,onClick:n}=s,o=k(s,["active","onClick"]);return t(Bn,v(p({onClick:n},o),{children:e?t(wn,{}):t(bn,{})}))},vn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`,kn=r.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 16rem;
  margin-bottom: 2rem;
  width: 7rem;
`,de=C=>{var f=C,{like_count:e,is_solved:n,is_like:o,isChoosable:i,is_chosen:s,onUpClick:l,onDownClick:a,onChooseClick:d}=f,h=k(f,["like_count","is_solved","is_like","isChoosable","is_chosen","onUpClick","onDownClick","onChooseClick"]);return u(vn,v(p({},h),{children:[u(kn,{children:[t(yn,{onClick:l,active:o===!0}),t(L,{style:{whiteSpace:"nowrap"},color:"grey",size:"32",weight:"bold",children:e}),t(xn,{onClick:a,active:o===!1})]}),t(Cn,{isChosen:s,isChoosable:i,onClick:d,is_solved:n})]}))},Dn=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;r(de)`
  width: 13rem;
  margin-right: 2rem;
`;const $n=r(ae)`
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
`,He=r(j)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,An=C=>{var f=C,{is_solved:e,like_count:n,is_like:o,is_chosen:i,isChoosable:s,comment:l,id:a,user:d}=f,h=k(f,["is_solved","like_count","is_like","is_chosen","isChoosable","comment","id","user"]);const{AnswerThumbPost:c,ChoicePost:B}=R(),{user:x}=V(),[w,b]=D.exports.useState(!1),[y,g]=D.exports.useState(!1),{value:I,setValue:Q}=S(h.text),G=!!x,Ge=$e(),J=new URLSearchParams(Ge.search).get("id"),fe=M=>{if(!G)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");y===!1?(g(!0),o===M?c(d.id,a,M,!0):o===!M?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4!"):c(d.id,a,M,!1),setTimeout(()=>{g(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},Je=()=>{fe(!0)},Xe=()=>{fe(!1)},Ye=()=>{confirm("\uD574\uB2F9 \uB2F5\uBCC0\uC744 \uCC44\uD0DD\uD558\uACA0\uC2B5\uB2C8\uAE4C? \uCC44\uD0DD \uD6C4\uC5D0\uB294 \uCDE8\uC18C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.")&&J&&B(parseInt(J),a,d.id)},et=async()=>{const M="http://3.36.121.236:5000/posts/answer",xe={questionId:J,answerId:a,text:I};await $.patch(M,xe,{withCredentials:!0}).then(hr=>{alert("\uB2F5\uBCC0 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),b(!1)},tt=async()=>{const M=`http://3.36.121.236:5000/posts/answer?questionId=${J}&answerId=${a}`;await $.delete(M,{withCredentials:!0}).then(xe=>{alert("\uB2F5\uBCC0 \uC0AD\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),b(!1)},nt=l==null?void 0:l.map(M=>t(Ie,p({userEmail:x==null?void 0:x.email,answerId:a},M),M.id));return u(Dn,v(p({},h),{children:[t(de,{is_solved:e,is_chosen:i,like_count:n,is_like:o,isChoosable:s,onUpClick:Je,onDownClick:Xe,onChooseClick:Ye}),t(j,{width:"100%",visible:!w,children:u(ae,{isChecked:i,children:[t(Zt,v(p({},h),{id:a,user:d})),u(He,{visible:G?(d==null?void 0:d.email)===(x==null?void 0:x.email):!1,children:[t(E,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>b(!0),children:"\uC218\uC815"}),t(E,{onClick:tt,fontcolor:"deepgray",small:!0,children:"\uC0AD\uC81C"})]}),nt,t(Te,{answerId:a})]})}),t(j,{width:"100%",height:"100%",visible:w,children:u($n,{children:[t(ee,{value:I,setValue:Q}),u(He,{visible:!0,children:[t(E,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>b(!1),children:"\uCDE8\uC18C"}),t(E,{onClick:et,fontcolor:"primary",bold:!0,small:!0,children:"\uD655\uC778"})]})]})})]}))},te={sm:{height:"41px",fontSize:"16px"},lg:{width:"449px",height:"60px",fontSize:"18px"}},Ln=m`
  ${({theme:e,color:n})=>n&&m`
      background-color: ${e.color.button[n]};
      &:hover {
        background: ${re(.1,e.color.button[n])};
      }
      &:active {
        background: ${Ae(.1,e.color.button[n])};
      }
    `}
  ${({theme:e,fontColor:n})=>n&&m`
      color: ${e.color.button[n]};
    `}
  ${({size:e})=>{var n,o;return e&&m`
      width: ${((n=te[e])==null?void 0:n.width)?(o=te[e])==null?void 0:o.width:"auto"};
      height: ${te[e].height};
      font-size: ${te[e].fontSize};
    `}}
  ${({shadow:e})=>e===!0&&m`
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
    `}
`,En=r.button`
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
    background: ${re(.1,`${A.color.primary}`)};
    color: ${re(.1,"black")};
  }
  &:active {
    background: ${Ae(.1,`${A.color.primary}`)};
  }
  ${Ln}
`,P=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(En,v(p({},n),{children:e}))},qe={bold:{background:"#000000",height:"3px"},light:{background:"#EAEAEA",height:"1px"}},Fn={horizontal:"rotate(0deg)",vertical:"rotate(90deg)"},zn=m`
  ${({weight:e})=>e&&m`
      background-color: ${qe[e].background};
      height: ${qe[e].height};
    `}
  ${({width:e})=>e&&m`
      width: ${e};
    `}
	${({direction:e})=>e&&m`
      transform: ${Fn[e]};
    `}
`,Sn=r.div`
  ${zn}
`,ne=n=>{var e=k(n,[]);return t(Sn,p({},e))},Mn={h1:{size:"36px"},h2:{size:"24px"}},In=m`
  ${({size:e})=>e&&m`
      font-size: ${Mn[e].size};
    `}
  ${({color:e})=>e&&m`
      color: ${e};
    `}
`,Tn=r.div`
  color: black;
  font-weight: 700;
  ${In}
`,W=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Tn,v(p({},n),{children:e}))},Hn=r(W)`
  margin: 5rem 0 3rem 0;
`,qn=r.div`
  margin-left: 9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Pn=r.div`
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
`,Vn=()=>{const{value:e,setValue:n}=S(""),{question:o,isLoading:i,AnswerPost:s}=R(),{user:l,isLoading:a}=V();if(!i&&!a)if(!!l){const h=l.nickname;return u(qn,{children:[t(Hn,{size:"h2",children:"\uB0B4 \uB2F5\uBCC0 \uB2EC\uAE30"}),t(ne,{weight:"bold",width:"3rem",style:{marginBottom:"1.5rem"}}),t(ee,{value:e,setValue:n,placeHolder:"\uB2F5\uBCC0\uC744 \uB2EC\uC544\uC8FC\uC138\uC694!"}),t(P,{onClick:async()=>{e?s(o.id,e,h,n):alert("\uB2F5\uBCC0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4")},size:"sm",fontColor:"white",children:"\uB2F5\uBCC0 \uC791\uC131\uD558\uAE30"})]})}else return t(Pn,{children:"\uB2F5\uBCC0\uC744 \uB0A8\uAE30\uAE30 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uC9C4\uD589\uD574\uC8FC\uC138\uC694!"});else return t("div",{children:".."})},jn=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  background: #c4c4c4;
  width: auto;
  height: 20px;
  background-color: ${A.color.tag.primary};
  box-sizing: border-box;
  margin: 1rem 0rem 0rem 1rem;
  padding: 0px 10px;
  ${({name:e})=>e==="..."&&m`
      background-color: ${A.color.deepgray};
    `}
`,Wn=r.button`
  margin-left: 1rem;
  background-color: inherit;
  cursor: pointer;
`,_n=()=>u("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M8.5 1L1 8.5",stroke:"#dfdfdf",strokeWidth:"2"}),t("path",{d:"M8.5 8.5L1 1",stroke:"#dfdfdf",strokeWidth:"2"})]}),he=s=>{var l=s,{name:e,isDel:n,onDelClick:o}=l,i=k(l,["name","isDel","onDelClick"]);return u(jn,v(p({},i),{name:e,children:[t(L,{size:"14",style:{wordBreak:"normal",color:"#ffffff"},children:e}),n?t(Wn,{onClick:()=>{o(e)},children:t(_n,{})}):""]}))},Rn=r.div`
  display: block;
  white-space: normal;
`,Pe=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
  flex-wrap: wrap;
`,Zn=r.div`
  display: flex;
  flex-wrap: wrap;
`;r(L)`
  white-space: pre-line;
`;const Nn=({user:e,created_at:n,title:o,hashtag:i,text:s})=>{const l=Y(n),a=i==null?void 0:i.map(d=>t(he,{name:d.name},d.name));return u(Rn,{children:[u(Pe,{children:[t(W,{size:"h1",children:o}),t(L,{size:"14",color:"grey",children:l})]}),u(Pe,{children:[t(K,v(p({},e),{size:"sm"})),t(Zn,{children:a})]}),t(Le,{children:s})]})},Un=r.div`
  display: flex;
  justify-content: space-between;
`,Qn=r(j)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,On=n=>{var e=k(n,[]);var f;const{question:o,isLoading:i,isError:s,QuestionThumbPost:l}=R(),{user:a,isLoading:d}=V(),[h,C]=D.exports.useState(!1);if(!i&&!d){const c=!!a,B=g=>{if(!c)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");h===!1?(C(!0),g===o.is_like?l(o.user.id,o.id,g,!0):!g===o.is_like?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4."):l(o.user.id,o.id,g,!1),setTimeout(()=>{C(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},x=()=>{B(!0)},w=()=>{B(!1)},b=g=>{confirm("\uAC8C\uC2DC\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")?$.delete(`http://3.36.121.236:5000/posts/question?questionId=${o.id}`,{withCredentials:!0}).then(()=>{location.href="/"}):g.preventDefault()},y=(f=o.comment)==null?void 0:f.map(g=>t(Ie,p({userEmail:a==null?void 0:a.email,questionId:o.id},g),g.id));return u(Un,v(p({},e),{children:[t(de,{like_count:o.like_count,is_like:o.is_like,onUpClick:x,onDownClick:w}),u(ae,{children:[t(Nn,p({},o)),u(Qn,{visible:a?a.email===o.user.email:!1,children:[t(E,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},to:`/edit?id=${ve.parse(location.search).id}`,children:"\uC218\uC815"}),t(E,{fontcolor:"deepgray",small:!0,onClick:b,children:"\uC0AD\uC81C"})]}),y,t(Te,{questionId:o.id})]})]}))}else return s?t("div",{children:"Err..."}):t("div",{children:"loading..."})},Kn=()=>u(q,{style:{width:"100%",height:"248px",background:"#9d9d9d",marginTop:"15rem",padding:"0 2rem",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",bottom:"0px"},children:[u(ze,{style:{alignItems:"flex-end",width:"340px",marginBottom:"1rem"},children:[t(W,{size:"h2",color:"white",children:"42Code"}),t(L,{size:"14",color:"white",weight:"bold",children:"made by ji-park & yejeong & nkim & iha"})]}),t(L,{size:"14",color:"white",children:"Copyright \xA9 2019 - 2021 42Seoul inno. All rights reserved."})]});function Gn(){return u("svg",{width:"164",height:"42",viewBox:"0 0 164 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M0 18.2779C0 15.9614 2.53908 14.4657 4.61913 15.4853C9.70397 17.9779 18.0287 21.4939 24.6 21.5351C34.9803 21.6001 39.3328 13.1729 49.7125 13.0496C60.4712 12.9218 65.0907 21.5978 75.85 21.5351C86.4196 21.4734 90.927 13.7098 101.475 13.0496C114.508 12.2339 120.704 21.7509 133.762 21.5351C142.317 21.3936 153.618 17.3358 159.693 14.8836C161.723 14.0642 164 15.5485 164 17.7378V39C164 40.6569 162.657 42 161 42H3C1.34314 42 0 40.6569 0 39V18.2779Z",fill:"#3EC2EC",fillOpacity:"0.5"}),t("path",{d:"M34.8217 0.000244141H25.5478L7 18.6163V26.2429H25.6532V35.5641H34.8744V18.6163H16.3003L34.8217 0.000244141Z",fill:"black"}),t("path",{d:"M122.512 27.8744V0H115.784V27.8744H122.512Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M92.8264 0L95.1288 17.1891L97.4651 0H98.4824H100.405H105.322L107.624 17.1891L109.961 0H112.9L109.111 27.8744H109.055H106.172H102.216L99.4365 7.12348L96.616 27.8744H96.56H93.6764H89.7205L85.9869 0H92.8264Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M132.386 27.8744L134.688 10.6853L137.025 27.8744H138.042H139.964H144.881L147.184 10.6854L149.52 27.8744H152.46L148.671 0H148.615H145.731H141.775L138.996 20.751L136.175 0H136.119H133.236H129.28L125.546 27.8744H132.386Z",fill:"black"}),t("path",{d:"M39.6803 9.61187V0H48.331L39.6803 9.61187Z",fill:"black"}),t("path",{d:"M83.1034 9.61187V0H74.4527L83.1034 9.61187Z",fill:"black"}),t("path",{d:"M57.9429 19.2237L57.9429 27.8744L48.331 27.8744L57.9429 19.2237Z",fill:"black"}),t("path",{d:"M64.8408 19.2233L64.8408 27.874L74.4527 27.874L64.8408 19.2233Z",fill:"black"}),t("path",{d:"M48.8511 9.25621V0H57.9823V9.25621L48.8511 18.6182V27.8744H39.7198V18.6182L48.8511 9.25621Z",fill:"black"}),t("path",{d:"M73.4915 9.25621V0H63.8797V9.25621L73.4915 18.6182V27.8744H83.1034V18.6182L73.4915 9.25621Z",fill:"black"})]})}const Jn=e=>{const[n,o]=D.exports.useState(!1);return u("svg",v(p({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",style:{margin:"0 0.5rem"},onMouseEnter:l=>{o(!0),l.target.style.cursor="pointer",l.stopPropagation()},onMouseLeave:()=>{o(!1)}},e),{children:[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",fill:n?A.color.lightblack:A.color.black})]}))},Xn=r(Se)``,Yn=r(N)`
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
`,eo=r(q)`
  width: 100%;
  height: 100%;
`,Ve=r(E)`
  display: block;
  width: 100%;
  margin: 2rem 2rem 0 2rem;

  ${({theme:e})=>e&&m`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,to=({user:e})=>{const[n,o]=D.exports.useState(!1),[i,s]=D.exports.useState(!1),l=C=>{s(!0),C.target.style.cursor="pointer",C.stopPropagation()},a=()=>{s(!1)},d=()=>{o(!n)},h=async()=>{await $.get("http://3.36.121.236:5000/auth/logout",{withCredentials:!0}),location.reload()};return u(Xn,{children:[t(K,{size:"lg",photo:e==null?void 0:e.image,nickname:(e==null?void 0:e.nickname)?e==null?void 0:e.nickname:"\uC815\uBCF4\uC5C6\uC74C",onMouseEnter:l,onMouseLeave:a,onClick:d,color:i?"grey":"black",children:t(Jn,{onClick:()=>{}})}),t(Yn,{show:n,tabIndex:0,onFocus:()=>o(!0),children:u(eo,{children:[t(Ve,{to:"/setting",children:"\uC124\uC815"}),t(Ve,{onClick:h,children:"\uB85C\uADF8\uC544\uC6C3"})]})})]})},no=m`
  ${({height:e})=>e&&m`
      height: ${e};
    `}
`,oo=r.div`
  width: 533px;
  height: 644px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;

  ${no}
`,io=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(oo,v(p({},n),{children:e}))},ro=()=>u("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 1L16.5 16.5",stroke:"#121212",strokeWidth:"2"}),t("path",{d:"M16.5 1L0.999999 16.5",stroke:"#121212",strokeWidth:"2"})]}),so=r.span`
  float: right;
  &:hover,
  &:focus {
    cursor: pointer;
    color: red;
  }
`,lo=r(W)`
  margin-top: 75px;
`,ao=r.div`
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
`,We=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&m`
      height: ${e};
    `}
`,uo=r.div`
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
`,pe=a=>{var d=a,{children:e,onClose:n,visible:o,title:i,subtitle:s}=d,l=k(d,["children","onClose","visible","title","subtitle"]);return t(uo,{visible:o,children:u(io,v(p({},l),{children:[t(so,{onClick:n,children:t(ro,{})}),t(lo,{size:"h1",children:i}),t(ao,{children:s}),e]}))})};pe.defaultProps={visible:!0};const co=i=>{var s=i,{onClose:e,onRegist:n}=s,o=k(s,["onClose","onRegist"]);const[l,a]=D.exports.useState({email:"",password:""}),{email:d,password:h}=l,[C,f]=D.exports.useState(!1),c=async()=>{try{(await $.post("http://3.36.121.236:5000/auth/login",l,{withCredentials:!0})).status===200?(se("http://3.36.121.236:5000/users/info"),e(!1)):alert("\uB85C\uADF8\uC778 \uC2E4\uD328!")}catch(w){alert("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638 \uC624\uB958")}a({email:"",password:""})},B=w=>{const{name:b,value:y}=w.target;a(v(p({},l),{[b]:y}))},x=()=>{location.href="https://localhost:5000/auth/42login",e(!1),f(!0)};return u(F,{children:[t(le,{visible:C}),t(pe,v(p({onClose:()=>e(!1),title:"\uB85C\uADF8\uC778",subtitle:"\uC774\uBA54\uC77C\uB85C \uB85C\uADF8\uC778"},o),{children:u(je,{height:"392px",children:[u(We,{height:"265px",children:[t(T,{name:"email",value:d,onChange:B,placeholder:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"}),t(T,{name:"password",value:h,type:"password",onChange:B,placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"}),t(P,{onClick:c,size:"lg",children:"\uB85C\uADF8\uC778"}),t(E,{onClick:x,fontcolor:"primary",underline:!0,children:"42seoul \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"})]}),t(E,{onClick:()=>{n(!0),e(!1)},fontcolor:"black",children:"\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?"})]})}))]})},ho=o=>{var i=o,{onClose:e}=i,n=k(i,["onClose"]);const[s,l]=D.exports.useState({nickname:"",email:"",password:"",confirm_pass:""}),{nickname:a,email:d,password:h,confirm_pass:C}=s,f=x=>{const{name:w,value:b}=x.target;if(l(v(p({},s),{[w]:b})),w==="confirm_pass"&&h!==""){const y=document.getElementById("diffpass");y.style.display="inherit",h===C?(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",y.style.color="blue"):(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",y.style.color="red")}},c=x=>{if(x.target.name==="confirm_pass"&&h!==""){const w=document.getElementById("diffpass");w.style.display="inherit",h===C?(w.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",w.style.color="blue"):(w.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",w.style.color="red")}},B=async()=>{const x=await $.post("http://3.36.121.236:5000/auth/signup",s,{withCredentials:!0});l({nickname:"",email:"",password:"",confirm_pass:""}),x.data.result===!0&&e(!1),location.reload()};return t(pe,v(p({title:"\uD68C\uC6D0\uAC00\uC785",subtitle:"\uC774\uBA54\uC77C\uB85C \uD68C\uC6D0\uAC00\uC785",height:"712px",onClose:()=>e(!1)},n),{children:u(je,{height:"420px",children:[u(We,{height:"300px",children:[t(T,{name:"nickname",value:a,onChange:f,placeholder:"\uB2C9\uB124\uC784"}),t(T,{name:"email",value:d,onChange:f,placeholder:"\uC774\uBA54\uC77C"}),t(T,{name:"password",value:h,type:"password",onChange:f,placeholder:"\uBE44\uBC00\uBC88\uD638"}),t(T,{name:"confirm_pass",value:C,type:"password",onChange:f,onKeyUp:c,onBlur:c,placeholder:"\uBE44\uBC00\uBC88\uD638 \uD655\uC778"}),t(L,{size:"14",id:"diffpass",style:{width:"449px",marginLeft:"2rem",display:"none"},children:"HiddenBox"})]}),t(P,{onClick:B,size:"lg",children:"\uD68C\uC6D0\uAC00\uC785"})]})}))},po=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${A.color.background.grey};
  height: 130px;
  width: 100%;

  margin-bottom: 3rem;
`,Co=r.div``,go=r.div``,mo=r.button`
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
`,fo=r(W)`
  margin-bottom: 7px;
`,xo=()=>{const[e,n]=D.exports.useState(!1),[o,i]=D.exports.useState(!1),{user:s,isLoading:l,isError:a}=V(),[d,h]=D.exports.useState(!1);return D.exports.useEffect(()=>{se("http://3.36.121.236:5000/users/info")},[]),u(F,{children:[t(le,{visible:d}),t(co,{onRegist:i,visible:e,onClose:n}),t(ho,{visible:o,onClose:i}),u(po,{children:[u(Co,{children:[t(ie,{to:"/",children:t(fo,{size:"h1",children:t(Gn,{})})}),t(L,{size:"14",color:"lightgrey",children:"42seoul"})]}),s&&!l?t(to,{user:s}):t(go,{children:t(mo,{onClick:()=>{location.href="http://3.36.121.236:5000/auth/42login",h(!0),setTimeout(()=>{h(!1)},3e4)},children:"42 \uB85C\uADF8\uC778"})})]})]})},wo=r.div`
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
`,U=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return u(wo,{children:[t(xo,{}),t(bo,v(p({},n),{children:e})),t(Kn,{})]})},Bo=r.div`
  margin-bottom: 7rem;
`;r.div`
  margin-bottom: 4rem;
`;const yo=s=>{var l=s,{question:e,answer:n,answerWriting:o}=l,i=k(l,["question","answer","answerWriting"]);return u("div",v(p({},i),{children:[t(Bo,{children:e}),n,o]}))},vo=n=>{var e=k(n,[]);const{question:o,answer:i,isLoading:s,isError:l}=R(),{user:a,isLoading:d}=V();let h;return!s&&!d&&(h=i==null?void 0:i.map(C=>t(An,p({isChoosable:a?o.user.email===a.email:!1,is_solved:o.is_solved},C),C.id))),l?t(F,{children:"err"}):t(U,v(p({},e),{children:t(yo,{question:t(On,{}),answer:h,answerWriting:t(Vn,{})})}))},ko=r.input`
  width: 100%;
  font-size: 18px;
  background-color: inherit;
  margin: 3rem 0rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`,Do=r.div``,$o=r.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`,_e=d=>{var h=d,{value:e,inputChange:n,setValue:o,tag:i,setTag:s,placeholder:l}=h,a=k(h,["value","inputChange","setValue","tag","setTag","placeholder"]);const C=document.getElementsByClassName("tagMsgEl")[0],f=document.getElementsByClassName("tagInput")[0],c=new RegExp(/^[a-z0-9+#_]+$/),B=()=>{const g=[...i];e&&!i.includes(e)&&g.push(e),o(""),s(g),f.style.color="black"},x=g=>{g.preventDefault(),n(g),g.target.value&&c.test(g.target.value)&&(C.style.display="none",f.style.color="black")},w=g=>{(g.code==="Enter"||g.code==="Space")&&(g.preventDefault(),c.test(e)?B():(C.style.display="block",f.style.color="red"))},b=g=>{const I=i.filter(Q=>Q!==g);s(I)},y=i==null?void 0:i.map(g=>t(he,{name:g,onDelClick:b,isDel:!0},g));return u(Do,v(p({},a),{children:[t($o,{children:y}),t(ko,{value:e,className:"tagInput",onChange:x,onBlur:B,onKeyPress:w,placeholder:l}),t(L,{className:"tagMsgEl",size:"12",color:"red",style:{position:"relative",top:"-2.5rem",display:"none"},children:"\uC798\uBABB\uB41C \uD0DC\uADF8 \uD615\uC2DD\uC785\uB2C8\uB2E4. \uC601\uC5B4\uC18C\uBB38\uC790\uC640 \uD2B9\uC218\uBB38\uC790 #+_ \uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. ex)ft_pintf"})]}))},Re=r.input`
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
`,Ao=r.div`
  width: 100%;
  height: 100%;
`,Lo=r(Re)`
  width: 100%;
  margin-bottom: 20px;
`,Eo=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,Fo=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,zo=()=>{const{question:e,isLoading:n,isError:o}=R(),i=f=>/^[\w]*$/g.test(f)&&f.length<20,s=f=>f.length<40,l=S("",i),a=S("",s),d=S(""),[h,C]=D.exports.useState([]);if(D.exports.useEffect(()=>{const f=e==null?void 0:e.hashtag.map(c=>c.name);C(f),a.setValue(e?e.title:""),d.setValue(e?e.text:"")},[]),!n&&!o){const f=async c=>{if(c.preventDefault(),!a.value||!d.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{(await $.patch("http://3.36.121.236:5000/posts/question",{questionId:e.id,title:a.value,hashtag:h,text:d.value},{withCredentials:!0})).status===200?(alert("\uC9C8\uBB38 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${e.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(B){alert(B)}};return u(Ao,{children:[t(Lo,{value:a.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:a.onChange}),t(_e,{inputChange:l.onChange,value:l.value,setValue:l.setValue,tag:h,setTag:C,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(ne,{weight:"bold",width:"4rem"}),u(Eo,{children:[t(ee,{value:d.value,setValue:d.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),u(Fo,{children:[t(E,{fontcolor:"deepgray",style:{fontSize:"16px",marginRight:"2rem"},to:`/detail?id=${e.id}`,children:"\uCDE8\uC18C"}),t(P,{size:"sm",onClick:f,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})]})}else return o?t("div",{children:"err.."}):t("div",{children:"loading"})},So=n=>{var e=k(n,[]);return t(U,v(p({},e),{children:t(zo,{})}))},Ze=e=>t("svg",v(p({},e),{height:"10px",viewBox:"0 0 448 448",width:"10px",fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"})})),Mo=e=>u("svg",v(p({width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{children:[t("circle",{cx:"8",cy:"8",r:"6.5",stroke:"black",strokeWidth:"3"}),t("path",{d:"M13.5 13L19 18.5",stroke:"black",strokeWidth:"3"})]})),Io=r.div`
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
`,To=r(T)`
  width: 500px;
  height: 41px;
  border-radius: 20px 0 0 20px;
`,Ho=r.button`
  width: 44px;
  height: 41px;
  float: right;
  border-radius: 0 20px 20px 0;
  background: white;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`,Ne=s=>{var l=s,{onChange:e,onSearch:n,search:o}=l,i=k(l,["onChange","onSearch","search"]);const[a,d]=D.exports.useState(!1),h={border:"1px solid #FFB84D"},C=f=>{f.key==="Enter"&&n()};return t(F,{children:u(Io,v(p({style:a?h:{}},i),{children:[t(To,{placeholder:"\uAC80\uC0C9\uD560 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694",value:o,border:!1,onKeyPress:C,onChange:e,onFocus:()=>d(!0),onBlur:()=>d(!1)}),t(Ho,{onClick:n,children:t(Mo,{})})]}))})},qo=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,Po=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Vo=r(N)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Ce=s=>{var l=s,{name:e,count:n,color:o}=l,i=k(l,["name","count","color"]);return u(Se,v(p({width:"40px",height:"60px"},i),{children:[t(L,{weight:"bold",size:"18",color:o,children:e}),t(L,{weight:"bold",size:"18",color:o,children:n})]}))},jo=r(z)`
  width: 100%;
  height: 182.46px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Wo=r(q)`
  width: 76%;
  height: 90%;
  align-items: flex-start;
`,_o=r(W)`
  &:hover,
  &:focus {
    ${({theme:e})=>e&&m`
        color: ${e.color.lightblack};
        cursor: pointer;
      `};
  }
`,Ro=r(L)`
  overflow: hidden;
  white-space: wrap;
  font-weight: 100;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  max-height: 50px;
  line-height: 25px;
`,Zo=r(L)`
  margin-right: 1rem;
`,No=r(z)`
  width: 100%;
`,Uo=r(z)`
  width: 17rem;
  height: 100%;
  padding: 0 1rem;
`;r(q)`
  width: 10%;
  height: 100%;
`;const Ue=B=>{var x=B,{id:e,title:n,text:o,is_solved:i,photo:s,nickname:l,answer_cnt:a=1,like_count:d,view_count:h,created_at:C,hashtag:f}=x,c=k(x,["id","title","text","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);o=o.replace(/[`#*~_>]/g,"").replace(/^!\[[\w.]*\]\([\w.:/-]+\)/gi,""),f.length>5&&(f=f.slice(0,3),f.push({name:"..."}));const w=()=>{const b="http://3.36.121.236:5000/pages/question/viewCount";$.post(b,{questionId:e},{withCredentials:!0})};return u(jo,v(p({},c),{children:[u(Wo,{children:[t(ie,{to:`/detail?id=${e}`,onClick:w,children:t(_o,{size:"h2",children:n})}),t(Ro,{size:"18",weight:"normal",color:"grey",children:o}),u(No,{children:[u(z,{children:[t(Zo,{size:"14",weight:"normal",color:"grey",children:Y(C)}),f.map((b,y)=>t(he,{name:b==null?void 0:b.name,style:{marginTop:"0px"}},y))]}),t(K,{size:"sm",photo:s,nickname:l,id:0})]})]}),u(Uo,{children:[t(Ce,{name:"\uB2F5\uBCC0",count:a,color:i?"primary":"black"}),t(Ce,{name:"\uCD94\uCC9C",count:d}),t(Ce,{name:"\uC870\uD68C",count:h})]})]}))},Qo=e=>{const[n,o]=D.exports.useState(!1);return t("svg",v(p({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginLeft:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:l=>{o(!0),l.target.style.cursor="pointer",l.stopPropagation()},onMouseLeave:()=>{o(!1)}},e),{children:t("path",{d:"M1.225 23.5507C1.8375 24.1532 2.825 24.1532 3.4375 23.5507L13.825 13.332C14.3125 12.8524 14.3125 12.0777 13.825 11.5982L3.4375 1.37952C2.825 0.776976 1.8375 0.776976 1.225 1.37952C0.612503 1.98206 0.612503 2.95351 1.225 3.55605L10.275 12.4712L1.2125 21.3864C0.612503 21.9767 0.612503 22.9604 1.225 23.5507Z",fill:n?A.color.lightblack:A.color.black})}))},Oo=e=>{const[n,o]=D.exports.useState(!1);return t("svg",v(p({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginRight:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:l=>{o(!0),l.target.style.cursor="pointer",l.stopPropagation()},onMouseLeave:()=>{o(!1)}},e),{children:t("path",{d:"M13.775 1.39185C13.1625 0.789306 12.175 0.789306 11.5625 1.39185L1.17501 11.6105C0.687512 12.0901 0.687512 12.8648 1.17501 13.3443L11.5625 23.563C12.175 24.1655 13.1625 24.1655 13.775 23.563C14.3875 22.9604 14.3875 21.989 13.775 21.3865L4.72501 12.4713L13.7875 3.55609C14.3875 2.96584 14.3875 1.9821 13.775 1.39185Z",fill:n?A.color.lightblack:A.color.black})}))},Ko=r.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Go=s=>{var l=s,{number:e,active:n,onClick:o}=l,i=k(l,["number","active","onClick"]);const[a,d]=D.exports.useState(!1),h=c=>{d(!0),c.target.style.color=A.color.lightblack,c.stopPropagation()},C=c=>{d(!1),c.target.style.color=A.color.black},f={display:"flex",justifyContent:"space-around",alignItems:"center"};return t(ce,v(p({onClick:o,size:"sm",color:n?A.color.primary:A.color.white,style:f,onMouseEnter:h,onMouseLeave:C},i),{children:e}))};function Jo(e,n){const o=10*(n.current-1)+1;let i;return e<=10?i=e:o+9>=e?i=e-o+1:i=10,Array(i).fill(o).map((s,l)=>s+l)}function Xo(e,n){let o=parseInt(n/e);return n%e==0&&(o=o-1),o+1}const ge=l=>{var a=l,{page:e=1,limit:n=8,onPage:o,questionCount:i=10}=a,s=k(a,["page","limit","onPage","questionCount"]);const d=Xo(n,i),h=D.exports.useRef(1),C=()=>{if(e===1){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==1&&(h.current-=1),o(e-1)},f=()=>{if(e===d){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==0&&(h.current+=1),o(e+1)};return u(Ko,v(p({},s),{children:[t(Oo,{onClick:C}),t(z,{children:Jo(d,h).map(c=>t(Go,{number:c,onClick:()=>o(c),active:e===c},c))}),t(Qo,{onClick:f})]}))},Yo=r.ul`
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
`,ei=r.li`
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
`,H=s=>{var l=s,{active:e,children:n,onTabClick:o}=l,i=k(l,["active","children","onTabClick"]);return t(ei,v(p({style:e?{color:"black",transition:"color 0.5s ease"}:void 0,onClick:o},i),{children:n}))},oe=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Yo,v(p({},n),{children:e}))};oe.Item=H;const ti=async e=>{const n=await $.get(e).catch(o=>{throw ut(o),Error()});return n==null?void 0:n.data},ni=(e,n)=>{const o=e===0?`http://3.36.121.236:5000/pages/list/question?pageNumber=${n}`:e===1?`http://3.36.121.236:5000/pages/list/question/like?pageNumber=${n}`:e===2?`http://3.36.121.236:5000/pages/list/question/unsolved?pageNumber=${n}`:e===3?`http://3.36.121.236:5000/pages/list/question?pageNumber=${n}`:"",{data:i,error:s}=Z(o,ti);return{question:i,isLoading:!s&&!i,isError:s}},Qe=r.div`
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
`,oi=async e=>(await $.get(e)).data;function ii(e){const n=`http://3.36.121.236:5000/hashtags/count?pageNumber=${e}`,{data:o,error:i}=Z(n,oi);return{tagList:o&&o.hashtag,isLoading:!i&&!o,isError:i}}const ri=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 8rem;

  margin-right: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,si=r.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${A.color.text.primary};
`,li=r.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${A.color.text.grey};

  margin-top: 12px;
`;function ai(i){var s=i,{name:e,questionCount:n}=s,o=k(s,["name","questionCount"]);return u(ri,v(p({},o),{children:[t(si,{children:e}),u(li,{children:["\uC9C8\uBB38 ",n,"\uAC1C"]})]}))}const ui=r(N)`
  width: 100%;
  padding: 1.5rem 2.5rem;
`,ci=r.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  margin-top: 1.5rem;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,di=r.ul`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;function hi(n){var e=k(n,[]);const[o,i]=D.exports.useState(1),{tagList:s,isLoading:l}=ii(o);if(l)return t("div",{children:"loading"});{const a=s==null?void 0:s.hashTagList.map(d=>t(ai,p({},d),d.id));return u(ui,v(p({},e),{children:[u(ci,{children:["\uBAA8\uB4E0 \uD0DC\uADF8 (",s==null?void 0:s.hashTagListCount,")\uAC1C"]}),t(di,{children:a}),t(q,{height:"115px",children:t(ge,{limit:30,questionCount:s==null?void 0:s.hashTagListCount,page:o,onPage:i})})]}))}}const pi=n=>{var e=k(n,[]);const[o,i]=D.exports.useState(0),[s,l]=D.exports.useState(1),{question:a,isLoading:d,isError:h}=ni(o,s);return h?t("div",{children:"Error!!"}):u(qo,{children:[u(oe,v(p({},e),{children:[t(H,{active:o===0,onTabClick:()=>i(0),children:"\uCD5C\uC2E0\uC21C"}),t(H,{active:o===1,onTabClick:()=>i(1),children:"\uC778\uAE30\uC21C"}),t(H,{active:o===2,onTabClick:()=>i(2),children:"\uB2F5\uBCC0\uD544\uC694"}),t(H,{active:o===3,onTabClick:()=>i(3),children:"\uD0DC\uADF8"})]})),o===3?t(hi,{}):u(Vo,{children:[d?[...Array(8)].map((C,f)=>t(Po,{children:t(Qe,{})},f)):(a==null?void 0:a.questionList)&&(a==null?void 0:a.questionList.map((C,f)=>{var c;return t(Ue,p({id:C.id,title:C.title,text:C.text,photo:C.user.photo,nickname:(c=C==null?void 0:C.user)==null?void 0:c.nickname,is_solved:C.is_solved,answer_cnt:C.answer_count,like_count:C.like_count,view_count:C.view_count,hashtag:C.hashtag,created_at:C.created_at},e),f)})),t(q,{height:"115px",children:t(ge,{questionCount:a==null?void 0:a.questionCount,page:s,onPage:l})})]})]})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const Ci=r(z)`
  width: 100%;
  margin-bottom: 4.5rem;
`,gi=r(z)`
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
`;const mi=({panel:e,content1:n,content2:o})=>u(F,{children:[t(Ci,{children:e}),u(gi,{children:[n,o]})]}),fi=r.div`
  width: 28%;
  position: relative;
  @media (max-width: 910px) {
    display: none;
    background-color: pink;
  }
`,xi=r(N)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 2.5rem;
  padding-bottom: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
`,wi=r(z)``,bi=r.span`
  ${({theme:e})=>e&&m`
      background-color: ${e.color.primary};
    `}
  position: absolute;
  width: 130px;
  height: 15px;
  top: 75px;
  opacity: 30%;
  z-index: 0;
`,Bi=r.div`
  margin: 1.5rem 0;
  margin-bottom: 2rem;
`,yi=r.div`
  height: 12px;
  width: 0.5px;
  margin: 0 1rem;
  ${({theme:e})=>m`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,vi=r.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  * & * {
    margin-right: 1.5rem;
  }
`,ki=r.div`
  z-index: 100;
`,Di=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:"black",children:[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})]}),$i=async e=>(await $.get(e)).data,Ai=()=>{const e="http://3.36.121.236:5000/users/ranking",{data:n,error:o}=Z(e,$i),i=n==null?void 0:n.monthRankerInfo.filter(l=>l.id!=null),s=n==null?void 0:n.totalRankerInfo.filter(l=>l.id!=null);return{ranking:{month:i,total:s},isLoading:!o&&!n,isError:o}},Oe=({rank:e,photo:n,nickname:o})=>u(vi,{children:[t(L,{size:"18",weight:"bold",color:"deepgray",children:e}),t(K,{border:!0,size:"lg",nickname:o,photo:n})]}),Li=()=>{const{ranking:e,isLoading:n,isError:o}=Ai(),{month:i,total:s}=e,[l,a]=D.exports.useState(0);return n?t("div",{children:"loading"}):o?t("div",{children:"error"}):u(fi,{children:[t(ze,{style:{height:"44px",justifyContent:"flex-start",alignItems:"flex-start"}}),u(xi,{children:[u(wi,{children:[t(L,{size:"18",weight:"bold",style:{zIndex:"2"},children:"42Swimmer \uB7AD\uD0B9"}),t(bi,{}),t(Di,{})]}),t(Bi,{children:u(oe,{size:"xsm",children:[t(H,{size:"xsm",active:l===0,onTabClick:()=>a(0),children:"\uC6D4\uBCC4\uC21C"}),t(yi,{}),t(H,{size:"xsm",active:l===1,onTabClick:()=>a(1),children:"\uC804\uCCB4\uC21C"})]})}),t(ki,{children:l===0?i.map((d,h)=>t(Oe,{rank:h,nickname:d.nickname,photo:d.photo},d.id)):s.map((d,h)=>t(Oe,{rank:h,nickname:d.nickname,photo:d.photo},d.id))})]})]})},Ei=o=>{var i=o,{history:e}=i,n=k(i,["history"]);const{value:s,onChange:l}=S("");return t(F,{children:t(U,{children:t(mi,{panel:u(F,{children:[t(Ne,{onChange:l,search:s,onSearch:d=>{ct(d),e.push(`/search?keyword=${s}`)}}),u(P,{shadow:!0,onClick:()=>e.push("/writing"),size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(Ze,{style:{marginLeft:"2rem"}})]})]}),content1:t(pi,{}),content2:t(Li,{})})})})},Fi=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,zi=r(z)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Si=r.span`
  font-size: 18px;
  font-weight: 700;
`,Mi=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Ii=r(N)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Ti=async e=>(await $.get(e)).data,Hi=(e,n,o)=>{const s=`http://3.36.121.236:5000/pages/list/question/keyword?pageNumber=${n}&keyword=${o}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:l,error:a}=Z(s,Ti);return{question:l,isLoading:!a&&!l,isError:a}},qi=o=>{var i=o,{keyword:e}=i,n=k(i,["keyword"]);const[s,l]=D.exports.useState(0),[a,d]=D.exports.useState(1),{question:h,isLoading:C,isError:f}=Hi(s,a,e);return f?t("div",{children:"Error!!"}):t(Fi,{children:u(Ii,{children:[u(zi,{children:[u(Si,{children:["\uAC80\uC0C9\uACB0\uACFC (",h==null?void 0:h.questionCount,"\uAC74)"]}),u(oe,v(p({size:"sm"},n),{children:[t(H,{size:"sm",active:s===0,onTabClick:()=>l(0),children:"\uCD5C\uC2E0\uC21C"}),t(H,{size:"sm",active:s===1,onTabClick:()=>l(1),children:"\uC778\uAE30\uC21C"}),t(H,{size:"sm",active:s===2,onTabClick:()=>l(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),C?[...Array(8)].map((c,B)=>t(Mi,{children:t(Qe,{})},B)):h==null?void 0:h.questionList.map((c,B)=>{var x;return t(Ue,p({id:c.id,title:c.title,text:c.text,photo:c.user.photo,nickname:(x=c==null?void 0:c.user)==null?void 0:x.nickname,is_solved:c.is_solved,answer_cnt:c.answer_count,like_count:c.like_count,view_count:c.view_count,hashtag:c.hashtag,created_at:c.created_at},n),B)}),t(q,{height:"115px",children:t(ge,{questionCount:h==null?void 0:h.questionCount,page:a,onPage:d})})]})})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const Pi=r(z)`
  width: 100%;
  margin-bottom: 4.5rem;
`,Vi=r(z)`
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
`;const ji=({panel:e,content:n})=>u(F,{children:[t(Pi,{children:e}),t(Vi,{children:n})]}),Wi=({location:e})=>{const o=dt.parse(e.search,{ignoreQueryPrefix:!0}).keyword,{value:i,onChange:s}=S(o),[l,a]=D.exports.useState(o);return t(U,{children:t(ji,{panel:u(F,{children:[t(Ne,{onChange:s,search:i,onSearch:()=>{a(i)}}),u(P,{shadow:!0,onClick:()=>{},size:"sm",children:["\uC9C8\uBB38\uD558\uAE30 ",t(Ze,{style:{marginLeft:"2rem"}})]})]}),content:t(qi,{keyword:l})})})},_i=r.div`
  padding: 0 5rem;
`,Ri=r(z)`
  justify-content: flex-start;
  > * {
    margin-right: 3rem;
  }
`,Zi=r(q)`
  height: 300px;
  /* width: 25%; */
  justify-content: center;

  > * {
    margin-bottom: 2rem;
  }
`,Ni=r.div`
  width: 0.5px;
  height: 150px;
  margin: 0 2rem;
  ${({theme:e})=>m`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,Ui=r.div`
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
`,Qi=r.div`
  > * {
    margin-top: 2rem;
  }

  > button {
    margin-top: 3rem;
    float: right;
    /* 어케할지 결정하기  */
  }
`,Oi=({tlPanel:e,trPanel:n,bPanel:o})=>u(_i,{children:[u(Ri,{children:[t(Zi,{children:e}),t(Ni,{}),t(Ui,{children:n})]}),t(Qi,{children:o})]}),Ki=r.div`
  width: 100%;
  height: 100px;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>m`
    border-bottom: 1px ${e.color.lightgrey} solid;
  `}
`,Gi=r(z)`
  padding: 1.5rem 0;
`,Ji=r(W)`
  width: 25%;
`,Xi=r(L)`
  width: 65%;
`,Yi=r(z)`
  width: 10%;
`,er=r(L)`
  margin-bottom: 1.5rem;
`,Ke=({name:e,value:n,etc:o,desc:i})=>u(Ki,{children:[u(Gi,{children:[t(Ji,{size:"h2",children:e}),t(Xi,{weight:"normal",size:"20",children:n}),t(Yi,{children:o})]}),t(er,{size:"14",color:"lightgrey",children:i})]}),tr=r(T)`
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
`;const nr=r(j)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > button {
    margin-right: 1rem;
  }
`,me=r(P)`
  width: 153px;
`,or=n=>{var e=k(n,[]);const{user:o,isLoading:i,isError:s}=V(),{value:l,onChange:a,setValue:d}=S(o==null?void 0:o.nickname),[h,C]=D.exports.useState(!1);if(s)return alert("\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"),t(ye,{to:"/"});if(i)return t("div",{children:"loading..."});const f=()=>{const w=document.getElementById("uploadImg");w==null||w.click()},c=async()=>{const w=new FormData,b=document.getElementById("uploadImg").files[0],y="http://3.36.121.236:5000/users/image";w.append("imgFile",b),await $.patch(y,w,{withCredentials:!0}).then(g=>{alert("\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC\uB97C \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},B=async()=>{const w="http://3.36.121.236:5000/users/image";await $.delete(w,{withCredentials:!0}).then(b=>{alert("\uC774\uBBF8\uC9C0\uB97C \uC815\uC0C1\uC801\uC73C\uB85C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},x=async()=>{const w="http://3.36.121.236:5000/users/nickname",b={nickname:l};await $.patch(w,b,{withCredentials:!0}).then(y=>{alert("\uB2C9\uB124\uC784 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),se("http://3.36.121.236:5000/users/info"),C(!1)};return t(U,v(p({},e),{children:t(Oi,{tlPanel:u(F,{children:[t(ce,{size:"lg",img:(o==null?void 0:o.image)?o.image:null}),t(me,{size:"sm",color:"primary",shadow:!0,onClick:f,children:"\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"}),t("form",{id:"imgform",method:"patch",encType:"application/json",style:{display:"none"},children:t("input",{id:"uploadImg",type:"file",onChange:c})}),t(me,{size:"sm",color:"white",shadow:!0,onClick:B,children:"\uC774\uBBF8\uC9C0 \uC81C\uAC70"})]}),trPanel:u(F,{children:[u(j,{visible:!h,children:[t(W,{size:"h1",children:o==null?void 0:o.nickname}),t(ne,{weight:"bold",width:"4rem"}),t(E,{fontcolor:"primary",underline:!0,to:"#",onClick:()=>{d(o==null?void 0:o.nickname),C(!0)},children:"\uC218\uC815"})]}),u(nr,{visible:h,children:[t(tr,{value:l||"",onChange:a}),t(P,{size:"sm",color:"lightprimary",shadow:!0,onClick:x,children:"\uC218\uC815\uD558\uAE30"}),t(E,{fontcolor:"deepgray",underline:!0,to:"#",onClick:()=>C(!1),children:"\uCDE8\uC18C"})]})]}),bPanel:u(F,{children:[t(Ke,{name:"\uC774\uBA54\uC77C",value:o.email,etc:t(E,{fontcolor:"primary",underline:!0,children:"\uC218\uC815"}),desc:"\uD68C\uC6D0 \uC778\uC99D \uB610\uB294 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uBC1C\uC1A1\uD558\uB294 \uC774\uBA54\uC77C\uC744 \uC218\uC2E0\uD558\uB294 \uC8FC\uC18C\uC785\uB2C8\uB2E4."}),t(Ke,{name:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD",value:t(E,{fontcolor:"primary",underline:!0,children:"\uBCC0\uACBD\uD558\uAE30"}),desc:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uD558\uAE30 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC704\uC758 \uC774\uBA54\uC77C\uB85C  \uBCC0\uACBD\uD558\uAE30 \uD398\uC774\uC9C0\uAC00 \uBC1C\uC1A1\uB429\uB2C8\uB2E4."}),t(me,{size:"sm",fontColor:"white",color:"red",shadow:!0,children:"\uD68C\uC6D0 \uD0C8\uD1F4"})]})})}))},ir=r.div`
  width: 100%;
  height: 100%;
`,rr=r(Re)`
  width: 100%;
  margin-bottom: 20px;
`,sr=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,lr=()=>{const e='\uC9C8\uBB38\uC744 \uB0A8\uACA8\uBCF4\uC138\uC694!\n  ```C\n  printf("helloWord");\n  ```',n=c=>/[\w]*$/g.test(c)&&c.length<20,o=c=>c.length<40,i=S("",n),s=S("",o),l=S(e),[a,d]=D.exports.useState([]),{isLoading:h,user:C}=V();D.exports.useEffect(()=>{!h&&!C&&(alert("\uB85C\uADF8\uC778 \uD6C4 \uC9C8\uBB38 \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),location.href="/")},[C]);const f=async c=>{if(c.preventDefault(),!s.value||!l.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{const B=await $.post("http://3.36.121.236:5000/posts/question",{title:s.value,hashtag:a,text:l.value},{withCredentials:!0});B.status===200?(alert("\uC9C8\uBB38 \uC791\uC131\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${B.data.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(B){alert(B)}};return u(ir,{children:[t(rr,{value:s.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:s.onChange}),t(_e,{inputChange:i.onChange,value:i.value,setValue:i.setValue,tag:a,setTag:d,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(ne,{weight:"bold",width:"4rem"}),u(sr,{children:[t(ee,{value:l.value,setValue:l.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),t(P,{size:"sm",onClick:f,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})},ar=n=>{var e=k(n,[]);return t(U,v(p({},e),{children:t(lr,{})}))},ur=ht`
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
`,cr=({children:e})=>u(pt,{theme:A,children:[t(ur,{}),e]});O.event({category:"User",action:"Created an Account"});O.exception({description:"An error ocurred",fatal:!0});const dr=()=>{const e=$e();return D.exports.useEffect(()=>{O.initialize({}.VITE_GA_ID),O.set({page:e.pathname}),O.pageview(e.pathname)},[e]),t(cr,{children:u(Ct,{children:[t(_,{path:"/",exact:!0,render:n=>t(Ei,p({},n))}),t(_,{path:"/search",exact:!0,render:n=>t(Wi,p({},n))}),t(_,{path:"/detail",exact:!0,render:n=>t(vo,p({},n))}),t(_,{path:"/writing",exact:!0,render:n=>t(ar,p({},n))}),t(_,{path:"/edit",exact:!0,render:n=>t(So,p({},n))}),t(_,{path:"/setting",exact:!0,render:n=>t(or,p({},n))}),t(_,{path:"/auth",render:n=>t(At,p({},n))})]})})};gt({dsn:"https://be73c673dc5040cab904c7281630f650@o1092079.ingest.sentry.io/6110101",integrations:[new mt],tracesSampleRate:1});ft.render(t(xt.StrictMode,{children:t(wt,{children:t(dr,{})})}),document.getElementById("root"));
