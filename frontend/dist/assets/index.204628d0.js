var rt=Object.defineProperty,st=Object.defineProperties;var at=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var $e=(e,n,o)=>n in e?rt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,p=(e,n)=>{for(var o in n||(n={}))ke.call(n,o)&&$e(e,o,n[o]);if(ee)for(var o of ee(n))De.call(n,o)&&$e(e,o,n[o]);return e},v=(e,n)=>st(e,at(n));var k=(e,n)=>{var o={};for(var i in e)ke.call(e,i)&&n.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&ee)for(var i of ee(e))n.indexOf(i)<0&&De.call(e,i)&&(o[i]=e[i]);return o};import{r as D,j as t,R as Ae,a as $,Z as N,q as Ee,C as f,s as r,w as lt,L as se,b as Le,l as ze,c as u,F as z,d as ut,u as Fe,e as ae,f as le,U as ct,H as ue,g as dt,h as ht,i as pt,k as Ct,W as gt,m as mt,n as K,S as ft,o as j,p as xt,B as wt,t as bt,v as Bt,x as yt}from"./vendor.85cd60cd.js";const vt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}};vt();const kt=n=>{var e=k(n,[]);const o=location.search;return D.exports.useEffect(()=>{(async()=>{await $.get(`https://swim.42seoul.io/api/auth/authResult${o}`)})()},[o]),t(Ae,{to:"/"})},Dt=async e=>await $({method:"get",url:e,withCredentials:!0}).then(o=>o.data).catch(o=>{throw o}),V=()=>{const e="https://swim.42seoul.io/api/users/info",{data:n,error:o}=N(e,Dt);return{isLogin:n,user:n&&n.result?n.user:null,isLoading:!o&&!n,isError:o}},$t=e=>$.get(e,{withCredentials:!0}).then(n=>n.data),Z=()=>{const e=Ee.parse(location.search).id,{data:n,error:o,mutate:i}=N(`https://swim.42seoul.io/api/pages/detail/question?questionId=${e}`,$t),a=(c,m,w,b)=>{if(n)if(b){let B=n.questionInfo.like_count;B=w?B-1:B+1,i({questionInfo:v(p({},n.questionInfo),{like_count:B,is_like:null})},!1),$.delete(`https://swim.42seoul.io/api/posts/question/like?questionId=${m}&questionUserId=${c}&isLike=${w}`,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>i())}else{let B=n.questionInfo.like_count;B=w?B+1:B-1,i({questionInfo:v(p({},n.questionInfo),{like_count:B,is_like:w})},!1),$.post("https://swim.42seoul.io/api/posts/question/like",{questionUserId:c,questionId:m,isLike:w},{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>{i()})}},s=(c,m,w,b)=>{if(b){let B=n.questionInfo.like_count;B=w?B-1:B+1;const y=n.questionInfo.answer.map(x=>(x.id===m&&(x.like_count=B,x.is_like=null),x));i({questionInfo:v(p({},n.questionInfo),{answer:y})},!1),$.delete(`https://swim.42seoul.io/api/posts/answer/like?answerId=${m}&answerUserId=${c}&isLike=${w}`,{withCredentials:!0}).catch(x=>{throw alert(x),x}).finally(()=>{i()})}else{let B=n.questionInfo.like_count;B=w?B+1:B-1;const y=n.questionInfo.answer.map(x=>(x.id===m&&(x.like_count=B,x.is_like=w),x));i({questionInfo:v(p({},n.questionInfo),{answer:y})},!1),$.post("https://swim.42seoul.io/api/posts/answer/like",{answerUserId:c,answerId:m,isLike:w},{withCredentials:!0}).catch(x=>{throw alert(x),x}).finally(()=>{i()})}},l=(c,m,w)=>{n&&$.post("https://swim.42seoul.io/api/posts/comment",{text:c,questionId:m,answerId:w},{withCredentials:!0}).catch(b=>{throw alert(b),b}).finally(()=>i())},C=(c,m,w,b)=>{if(n){const B="https://swim.42seoul.io/api/posts/comment",y=p({},n);b?y.questionInfo.answer=y.questionInfo.answer.map(x=>(x.id===b&&(x.comment=x.comment.map(T=>(T.id===m&&(T.text=c),T))),x)):y.questionInfo.answer=y.questionInfo.comment.map(x=>(x.id===m&&(x.text=c),x)),i(y,!1),$.patch(B,{text:c,commentId:m,questionId:w,answerId:b},{withCredentials:!0}).catch(x=>{throw alert(x),x}).finally(()=>i())}},d=(c,m,w)=>{if(n){const b=`https://swim.42seoul.io/api/posts/comment?commentId=${c}&questionId=${m}${w?`&answerId=${w}`:""}`,B=p({},n);w?B.questionInfo.answer=B.questionInfo.answer.map(y=>(y.id===w&&(y.comment=y.comment.filter(x=>x.id!==c)),y)):B.questionInfo.comment=B.questionInfo.comment.filter(y=>y.id!==c),i(B,!1),$.delete(b,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>i())}},h=(c,m,w,b)=>{if(n){const B=p({},n);B.questionInfo.answer.push({text:m,user:{nickname:w}}),i(B,!1),$.post("https://swim.42seoul.io/api/posts/answer",{questionId:c,text:m},{withCredentials:!0}).then(()=>b("")).catch(y=>{throw alert(y),y}).finally(()=>i())}},g=async(c,m,w)=>{try{const b=p({},n);b.is_solved=!0,b.questionInfo.answer=b.questionInfo.answer.map(y=>(y.id===m&&(y.is_solved=!0),y));const B="https://swim.42seoul.io/api/posts/answer/choice";i(b,!1),await $.post(B,{questionId:c,answerId:m,answerUserId:w},{withCredentials:!0}),i()}catch(b){throw alert(b),b}};return{question:n?n.questionInfo:null,answer:n?n.questionInfo.answer:null,isLoading:!o&&!n,isError:o,QuestionThumbPost:a,AnswerThumbPost:s,CommentPost:l,CommentEdit:C,CommentDelete:d,AnswerPost:h,ChoicePost:g}},S=(e,n=()=>!0)=>{const[o,i]=D.exports.useState(e),[a,s]=D.exports.useState(!0);return{value:o,onChange:d=>{const{target:{value:h}}=d;n(h)?i(h):s(!1)},onBlur:d=>{const h=d.target.innerText;n(h)?i(h):s(!1)},setValue:i,valid:a}},At={button:{primary:"#1896BD",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",lightprimary:"#a7deef"},a:{primary:"#1896BD",white:"#FFFFFF",red:"#FF5D39",black:"#000000",deepgray:"#C4C4C4"},background:{white:"#FFFFFF",lightgrey:"#F3F3F3"},text:{primary:"#1896BD",white:"#FFFFFF",yellow:"#FFB84D",red:"#FF5D39",black:"#000000",lightgrey:"#a6a6a6",grey:"#565656",deepgray:"#C4C4C4"},tag:{primary:"#1896BD"},primary:"#1896BD",lightprimary:"#a7deef",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",deepgray:"#C4C4C4",lightgrey:"#EAEAEA",black:"#000000",lightblack:"#545454",lightyelloew:"#FFDCA8"},A={color:At},Et=f`
  ${({theme:e,fontcolor:n})=>n&&f`
      color: ${e.color.a[n]};
    `}
  ${({underline:e})=>e&&f`
      text-decoration: underline;
    `}
  ${({small:e})=>e&&f`
      font-weight: normal;
      font-size: 14px;
      &:hover {
        color: ${A.color.lightblack};
        -webkit-transition: color 0.5s ease;
        -moz-transition: color 0.5s ease;
        transition: color 0.5s ease;
      }
    `};
  ${({bold:e})=>e&&f`
      font-weight: bold;
    `}
`,Lt=r.span`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  ${Et}
`,zt=a=>{var s=a,{to:e,children:n,location:o}=s,i=k(s,["to","children","location"]);return t(se,{to:e||o.pathname+o.search,children:t(Lt,v(p({},i),{children:n}))})};var F=lt(zt);const Ft=r.div`
  display: ${({visible:e})=>e?"":"none !important"};
  ${({width:e})=>e&&f`
      width: ${e};
    `}
  ${({height:e})=>e&&f`
      height: ${e};
    `};
`,W=i=>{var a=i,{children:e,visible:n=!0}=a,o=k(a,["children","visible"]);return t(Ft,v(p({visible:n},o),{children:e}))},St=f`
  ${({isChecked:e})=>e==!0&&f`
      border: 3px solid ${A.color.primary};
      box-shadow: none;
    `}
`,Mt=r.div`
  width: 100%;
  /*height: 214px;*/
  /*display: flex;*/
  border-radius: 16px;
  background-color: white;
  padding: 50px 60px;
  padding-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
  ${St};
`,ce=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Mt,v(p({},n),{children:e}))};function te(e){const n=new Date,o=new Date(e),i=Math.floor((n.getTime()-o.getTime())/1e3/60);if(i<1)return"\uBC29\uAE08\uC804";if(i<60)return`${i}\uBD84\uC804`;const a=Math.floor(i/60);if(a<24)return`${a}\uC2DC\uAC04\uC804`;const s=Math.floor(i/60/24);return s<365?`${s}\uC77C\uC804`:`${Math.floor(s/365)}\uB144\uC804`}const It=r.p`
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
`,Tt=new Le.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[ze({pre:!0})]}),Se=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return u(z,{children:[t(It,v(p({},n),{dangerouslySetInnerHTML:{__html:Tt.makeHtml(e)}})),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]})},Ht=f`
  ${({size:e})=>e&&f`
      font-size: ${e+"px"};
      line-height: ${parseInt(e)*1.5+"px"};
    `}
  ${({theme:e,color:n})=>n&&f`
      color: ${e.color.text[n]};
    `}
    ${({weight:e})=>e&&f`
      font-weight: ${e};
    `}
`,qt=r.p`
  color: black;
  word-break: break-all;
  ${Ht}
`,E=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(qt,v(p({},n),{children:e}))};var Pt="/assets/cat0.7e5dd6fb.jpeg";const de={xsm:{size:"25px"},sm:{size:"40px"},lg:{size:"120px"}},jt=f`
  ${({size:e})=>e&&f`
      width: ${de[e].size};
      height: ${de[e].size};
      background-size: ${de[e].size} auto;
    `}
  ${({color:e})=>e&&f`
      background-color: ${e};
    `}
  background-image: ${({img:e})=>e?`url(${e})`:"url()"};
  /* ${({img:e})=>e?f`
          background-image: url(${e});
          margin: 2 2;
        `:f`
          margin: 3 3;
          color: pink;
          background-image: url(${Pt});
        `} */
`,he=r.div`
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
  ${jt}
`,Me=r.div`
  display: flex;
  align-items: center;
`,Ie=r(he)`
  margin-right: 8px;
  flex-shrink: 0;
  ${({theme:e,border:n})=>n&&f`
      border: 2px solid ${e.color.primary};
    `}
`,O=({nickname:e,size:n,photo:o,color:i,children:a,onMouseEnter:s,onMouseLeave:l,onClick:C,border:d})=>n==="sm"?u(Me,{size:n,children:[t(Ie,{size:"xsm",img:o||"",border:d}),t(E,{size:"14",color:"grey",children:e}),a]}):u(Me,{onMouseEnter:s,onMouseLeave:l,onClick:C,size:n,children:[t(Ie,{size:"sm",img:o||"",border:d}),t(E,{size:"18",weight:"bold",color:i,children:e}),a]}),Vt=r.div`
  display: block;
  white-space: normal;
`,Wt=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
`,_t=a=>{var s=a,{created_at:e,user:n,text:o}=s,i=k(s,["created_at","user","text"]);const l=te(e);return u(Vt,v(p({},i),{children:[u(Wt,{children:[t(O,v(p({},n),{size:"sm"})),t(E,{size:"14",color:"grey",children:l})]}),t(Se,{children:o})]}))},Rt=()=>u("svg",{width:"4",height:"20",viewBox:"0 0 4 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 10C1 10.5523 1.44772 11 2 11C2.55228 11 3 10.5523 3 10C3 9.44772 2.55228 9 2 9C1.44772 9 1 9.44772 1 10Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 18C1 18.5523 1.44772 19 2 19C2.55228 19 3 18.5523 3 18C3 17.4477 2.55228 17 2 17C1.44772 17 1 17.4477 1 18Z",stroke:"#565656",strokeWidth:"2"})]}),Nt=r.button`
  width: 24px;
  height: 24px;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`,Zt=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Nt,v(p({},n),{children:t(Rt,{children:e})}))},Ut=f`
  ${({width:e})=>e&&f`
      width: ${e};
    `}
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,Qt=r.div`
  width: 988px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 10px 0px;

  ${Ut}
`,_=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Qt,v(p({},n),{children:e}))},Te=r.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&f`
      width: ${e};
    `}
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,L=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&f`
      width: ${e};
    `}
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,H=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&f`
      width: ${e};
    `}
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,He=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&f`
      width: ${e};
    `}
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,Kt=r.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 2rem 0px;
`,Ot=r.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`,Gt=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,Jt=r.p`
  font-size: 16px;
  width: 80%;
  background-color: inherit;
  color: grey;
  outline: none;
  &:focus-visible {
    color: black;
  }
`,Xt=r(_)`
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

  ${({show:e})=>e&&f`
      display: inherit;
    `};
`,Yt=r(H)`
  width: 100%;
  height: 100%;
`,qe=r(F)`
  /*overflow: auto;*/
  display: block;
  width: 3rem;
  margin: 2rem 2rem 0 2rem;
  ${({theme:e})=>e&&f`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,en=r(W)`
  position: relative;
`,Pe=({created_at:e,questionId:n,answerId:o,user:i,text:a,userEmail:s,id:l})=>{const{CommentEdit:C,CommentDelete:d}=Z(),h=te(e),[g,c]=D.exports.useState(!1),[m,w]=D.exports.useState(!1),{value:b,setValue:B,onBlur:y}=S(a),x=D.exports.useRef(),T=async()=>{confirm("\uB313\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&d(l,n,o),c(!1)},Q=()=>{w(!0),setTimeout(function(){x.current.focus()},1),c(!g)},X=async()=>{C(b,l,n,o),w(!1)};return u(Kt,{children:[u(Ot,{children:[t(E,{weight:"bold",size:"14",children:i.nickname}),t(E,{size:"14",color:"grey",children:h})]}),u(Gt,{children:[t(Jt,{contentEditable:m,onBlur:y,ref:x,suppressContentEditableWarning:!0,children:b}),i.email===s?u(z,{children:[u(en,{visible:!m,children:[t(Zt,{onClick:()=>c(!g)}),t(Xt,{show:g,children:u(Yt,{children:[t(qe,{small:!0,onClick:Q,children:"\uC218\uC815"}),t(qe,{small:!0,onClick:T,children:"\uC0AD\uC81C"})]})})]}),u(W,{visible:m,children:[t(F,{fontcolor:"deepgray",onClick:()=>{B(a),w(!1)},style:{marginRight:"1rem"},children:"\uCDE8\uC18C"}),t(F,{onClick:X,children:"\uC644\uB8CC"})]})]}):null]})]},l)},tn=f`
  ${({border:e})=>e===!1&&f`
      border: none;
    `}
`,nn=r.input`
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
  ${tn}
`,q=n=>{var e=k(n,[]);return t(nn,p({},e))},on=r.form`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,rn=r(q)`
  width: 80%;
  padding: 0px;
`,sn=r(F)`
  white-space: nowrap;
  /*background-color: black;*/
`,je=i=>{var a=i,{questionId:e,answerId:n}=a,o=k(a,["questionId","answerId"]);const{user:s,isLoading:l,isError:C}=V(),{CommentPost:d}=Z(),{value:h,onChange:g,setValue:c}=S("");if(l)return C?t("div",{children:"Err.."}):t("div",{children:"Load..."});{const m=w=>{w.preventDefault(),h?s?(d(h,e,n),c("")):alert("\uB313\uAE00 \uC791\uC131\uC744 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"):alert("\uB313\uAE00\uC6B8 \uC785\uB825\uD574\uC8FC\uC138\uC694")};return u(on,v(p({onSubmit:m},o),{children:[t(rn,{placeholder:"\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694",value:h,border:!1,onChange:g}),t(sn,{fontcolor:"primary",underline:!1,onClick:m,children:"\uB313\uAE00 \uC785\uB825"})]}))}},an=r.div`
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
`,ln=new Le.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[ze({pre:!0})]}),ne=a=>{var s=a,{value:e,setValue:n,placeHolder:o}=s,i=k(s,["value","setValue","placeHolder"]);const l=document.getElementsByClassName("mde-text")[0],[C,d]=D.exports.useState("write"),h=async function*(g){try{yield await new Promise(m=>{const w=new FormData,b=new File([g],"Image"),B="https://swim.42seoul.io/api/posts/image";w.append("imgFile",b),$.post(B,w,{withCredentials:!0}).then(y=>{var x;y.status===200&&m((x=y==null?void 0:y.data)==null?void 0:x.image)})})}catch(c){alert("\uC0AC\uC9C4 \uC804\uC1A1 \uC2E4\uD328"),yield"Error"}return!0};return u(an,v(p({},i),{children:[t(ut,{classes:{},value:e,onChange:g=>{const c=(event==null?void 0:event.target.scrollHeight)+"px";n(g),l.style.height="auto",l.style.height=c},selectedTab:C,onTabChange:d,generateMarkdownPreview:g=>Promise.resolve(ln.makeHtml(g)),childProps:{writeButton:{tabIndex:-1},textArea:{placeholder:o}},paste:{saveImage:h}}),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]}))},un=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#1896BD"})}),cn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#545454"})}),dn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#C4C4C4"})}),hn=s=>{var l=s,{is_solved:e,isChosen:n,isChoosable:o,onClick:i}=l,a=k(l,["is_solved","isChosen","isChoosable","onClick"]);const[C,d]=D.exports.useState(!1);return e&&n?t(un,p({},a)):!e&&o?t("button",v(p({onClick:i,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1)},a),{children:C?t(cn,{}):t(dn,{})})):t(z,{})},pn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M35.625 28.125H43.125V5.625H35.625V28.125ZM28.125 5.625H11.25C9.69375 5.625 8.3625 6.5625 7.8 7.9125L2.1375 21.1313C1.96875 21.5625 1.875 22.0125 1.875 22.5V26.25C1.875 27.2446 2.27009 28.1984 2.97335 28.9016C3.67661 29.6049 4.63044 30 5.625 30H17.4563L15.675 38.5687C15.6375 38.7562 15.6187 38.9437 15.6187 39.15C15.6187 39.9375 15.9375 40.6313 16.4438 41.1375L18.4312 43.125L30.7687 30.7687C31.4625 30.0938 31.875 29.1562 31.875 28.125V9.375C31.875 8.38044 31.4799 7.42661 30.7766 6.72335C30.0734 6.02009 29.1196 5.625 28.125 5.625Z",fill:"#545454"})}),Cn=()=>t("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M34.8333 27.5V5.5H42.1666V27.5H34.8333ZM27.5 5.5C28.4724 5.5 29.4051 5.88631 30.0927 6.57394C30.7803 7.26157 31.1666 8.19421 31.1666 9.16667V27.5C31.1666 28.5083 30.7633 29.425 30.085 30.085L18.0216 42.1667L16.0783 40.2233C15.5833 39.7283 15.2716 39.05 15.2716 38.28L15.3266 37.7117L17.0683 29.3333H5.49998C4.52752 29.3333 3.59489 28.947 2.90725 28.2594C2.21962 27.5718 1.83331 26.6391 1.83331 25.6667V22C1.83331 21.5233 1.92498 21.0833 2.08998 20.6617L7.62665 7.73667C8.17665 6.41667 9.47831 5.5 11 5.5H27.5ZM27.5 9.16667H10.945L5.49998 22V25.6667H21.5966L19.525 35.42L27.5 27.445V9.16667Z",fill:"#545454"})}),gn=r.button`
  background-color: inherit;
`,mn=o=>{var i=o,{active:e}=i,n=k(i,["active"]);return t(gn,v(p({},n),{children:e?t(pn,{}):t(Cn,{})}))},fn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M43.125 18.75C43.125 17.7554 42.7299 16.8016 42.0266 16.0984C41.3234 15.3951 40.3696 15 39.375 15H27.525L29.325 6.43125C29.3625 6.24375 29.3813 6.0375 29.3813 5.83125C29.3813 5.0625 29.0625 4.35 28.5562 3.84375L26.5688 1.875L14.2313 14.2125C13.5375 14.9062 13.125 15.8438 13.125 16.875V35.625C13.125 36.6196 13.5201 37.5734 14.2233 38.2766C14.9266 38.9799 15.8804 39.375 16.875 39.375H33.75C35.3063 39.375 36.6375 38.4375 37.2 37.0875L42.8625 23.8687C43.0312 23.4375 43.125 22.9875 43.125 22.5V18.75ZM1.875 39.375H9.375V16.875H1.875V39.375Z",fill:"#545454"})}),xn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M9.375 16.875V39.375H1.875V16.875H9.375ZM16.875 39.375C15.8804 39.375 14.9266 38.9799 14.2233 38.2766C13.5201 37.5734 13.125 36.6196 13.125 35.625V16.875C13.125 15.8438 13.5375 14.9062 14.2313 14.2313L26.5688 1.875L28.5562 3.8625C29.0625 4.36875 29.3813 5.0625 29.3813 5.83125L29.325 6.43125L27.5437 15H39.375C40.3696 15 41.3234 15.3951 42.0266 16.0984C42.7299 16.8016 43.125 17.7554 43.125 18.75V22.5C43.125 22.9875 43.0312 23.4375 42.8625 23.8687L37.2 37.0875C36.6375 38.4375 35.3063 39.375 33.75 39.375H16.875ZM16.875 35.625H33.8063L39.375 22.5V18.75H22.8937L25.0125 8.775L16.875 16.9312V35.625Z",fill:"#545454"})}),wn=r.button`
  background-color: inherit;
`,bn=i=>{var a=i,{active:e,onClick:n}=a,o=k(a,["active","onClick"]);return t(wn,v(p({onClick:n},o),{children:e?t(fn,{}):t(xn,{})}))},Bn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`,yn=r.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 16rem;
  margin-bottom: 2rem;
  width: 7rem;
`,pe=h=>{var g=h,{like_count:e,is_solved:n,is_like:o,isChoosable:i,is_chosen:a,onUpClick:s,onDownClick:l,onChooseClick:C}=g,d=k(g,["like_count","is_solved","is_like","isChoosable","is_chosen","onUpClick","onDownClick","onChooseClick"]);return u(Bn,v(p({},d),{children:[u(yn,{children:[t(bn,{onClick:s,active:o===!0}),t(E,{style:{whiteSpace:"nowrap"},color:"grey",size:"32",weight:"bold",children:e}),t(mn,{onClick:l,active:o===!1})]}),t(hn,{isChosen:a,isChoosable:i,onClick:C,is_solved:n})]}))},vn=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;r(pe)`
  width: 13rem;
  margin-right: 2rem;
`;const kn=r(ce)`
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
`,Ve=r(W)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,Dn=h=>{var g=h,{is_solved:e,like_count:n,is_like:o,is_chosen:i,isChoosable:a,comment:s,id:l,user:C}=g,d=k(g,["is_solved","like_count","is_like","is_chosen","isChoosable","comment","id","user"]);const{AnswerThumbPost:c,ChoicePost:m}=Z(),{user:w}=V(),[b,B]=D.exports.useState(!1),[y,x]=D.exports.useState(!1),{value:T,setValue:Q}=S(d.text),X=!!w,Xe=Fe(),Y=new URLSearchParams(Xe.search).get("id"),ye=I=>{if(!X)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");y===!1?(x(!0),o===I?c(C.id,l,I,!0):o===!I?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4!"):c(C.id,l,I,!1),setTimeout(()=>{x(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},Ye=()=>{ye(!0)},et=()=>{ye(!1)},tt=()=>{confirm("\uD574\uB2F9 \uB2F5\uBCC0\uC744 \uCC44\uD0DD\uD558\uACA0\uC2B5\uB2C8\uAE4C? \uCC44\uD0DD \uD6C4\uC5D0\uB294 \uCDE8\uC18C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.")&&Y&&m(parseInt(Y),l,C.id)},nt=async()=>{const I="https://swim.42seoul.io/api/posts/answer",ve={questionId:Y,answerId:l,text:T};await $.patch(I,ve,{withCredentials:!0}).then(Sr=>{alert("\uB2F5\uBCC0 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),B(!1)},ot=async()=>{const I=`https://swim.42seoul.io/api/posts/answer?questionId=${Y}&answerId=${l}`;await $.delete(I,{withCredentials:!0}).then(ve=>{alert("\uB2F5\uBCC0 \uC0AD\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),B(!1)},it=s==null?void 0:s.map(I=>t(Pe,p({userEmail:w==null?void 0:w.email,answerId:l},I),I.id));return u(vn,v(p({},d),{children:[t(pe,{is_solved:e,is_chosen:i,like_count:n,is_like:o,isChoosable:a,onUpClick:Ye,onDownClick:et,onChooseClick:tt}),t(W,{width:"100%",visible:!b,children:u(ce,{isChecked:i,children:[t(_t,v(p({},d),{id:l,user:C})),u(Ve,{visible:X?(C==null?void 0:C.email)===(w==null?void 0:w.email):!1,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>B(!0),children:"\uC218\uC815"}),t(F,{onClick:ot,fontcolor:"deepgray",small:!0,children:"\uC0AD\uC81C"})]}),it,t(je,{answerId:l})]})}),t(W,{width:"100%",height:"100%",visible:b,children:u(kn,{children:[t(ne,{value:T,setValue:Q}),u(Ve,{visible:!0,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>B(!1),children:"\uCDE8\uC18C"}),t(F,{onClick:nt,fontcolor:"primary",bold:!0,small:!0,children:"\uD655\uC778"})]})]})})]}))},oe={sm:{height:"41px",fontSize:"16px"},lg:{width:"449px",height:"60px",fontSize:"18px"}},$n=f`
  ${({theme:e,color:n})=>n&&f`
      background-color: ${e.color.button[n]};
      &:hover {
        background: ${ae(.1,e.color.button[n])};
      }
      &:active {
        background: ${le(.1,e.color.button[n])};
      }
    `}
  ${({theme:e,fontColor:n})=>n&&f`
      color: ${e.color.button[n]};
    `}
  ${({size:e})=>{var n,o;return e&&f`
      width: ${((n=oe[e])==null?void 0:n.width)?(o=oe[e])==null?void 0:o.width:"auto"};
      height: ${oe[e].height};
      font-size: ${oe[e].fontSize};
    `}}
  ${({shadow:e})=>e===!0&&f`
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
    `}
`,An=r.button`
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
    background: ${ae(.1,`${A.color.primary}`)};
    color: ${ae(.1,"white")};
  }
  &:active {
    background: ${le(.1,`${A.color.primary}`)};
  }
  ${$n}
`,P=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(An,v(p({},n),{children:e}))},We={bold:{background:"#000000",height:"3px"},light:{background:"#EAEAEA",height:"1px"}},En={horizontal:"rotate(0deg)",vertical:"rotate(90deg)"},Ln=f`
  ${({weight:e})=>e&&f`
      background-color: ${We[e].background};
      height: ${We[e].height};
    `}
  ${({width:e})=>e&&f`
      width: ${e};
    `}
	${({direction:e})=>e&&f`
      transform: ${En[e]};
    `}
`,zn=r.div`
  ${Ln}
`,ie=n=>{var e=k(n,[]);return t(zn,p({},e))},Fn={h1:{size:"36px"},h2:{size:"24px"}},Sn=f`
  ${({size:e})=>e&&f`
      font-size: ${Fn[e].size};
    `}
  ${({color:e})=>e&&f`
      color: ${e};
    `}
`,Mn=r.div`
  color: black;
  font-weight: 700;
  ${Sn}
`,R=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(Mn,v(p({},n),{children:e}))},In=r(R)`
  margin-bottom: 3rem;
`,Tn=r.div`
  margin-left: 9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Hn=r.div`
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
`,qn=()=>{const{value:e,setValue:n}=S(""),{question:o,isLoading:i,AnswerPost:a}=Z(),{user:s,isLoading:l}=V();if(!i&&!l)if(!!s){const d=s.nickname;return u(Tn,{children:[t(In,{size:"h2",children:"\uB0B4 \uB2F5\uBCC0 \uB2EC\uAE30"}),t(ie,{weight:"bold",width:"3rem",style:{marginBottom:"1.5rem"}}),t(ne,{value:e,setValue:n,placeHolder:"\uB2F5\uBCC0\uC744 \uB2EC\uC544\uC8FC\uC138\uC694!"}),t(P,{onClick:async()=>{e?a(o.id,e,d,n):alert("\uB2F5\uBCC0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4")},size:"sm",fontColor:"white",children:"\uB2F5\uBCC0 \uC791\uC131\uD558\uAE30"})]})}else return t(Hn,{children:"\uB2F5\uBCC0\uC744 \uB0A8\uAE30\uAE30 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uC9C4\uD589\uD574\uC8FC\uC138\uC694!"});else return t("div",{children:".."})},Pn=r.div`
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
  ${({name:e})=>e==="..."&&f`
      background-color: ${A.color.deepgray};
    `}
`,jn=r.button`
  margin-left: 1rem;
  background-color: inherit;
  cursor: pointer;
`,Vn=()=>u("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M8.5 1L1 8.5",stroke:"#dfdfdf",strokeWidth:"2"}),t("path",{d:"M8.5 8.5L1 1",stroke:"#dfdfdf",strokeWidth:"2"})]}),Ce=a=>{var s=a,{name:e,isDel:n,onDelClick:o}=s,i=k(s,["name","isDel","onDelClick"]);return u(Pn,v(p({},i),{name:e,children:[t(E,{size:"14",style:{wordBreak:"normal",color:"#ffffff"},children:e}),n?t(jn,{onClick:()=>{o(e)},children:t(Vn,{})}):""]}))},Wn=r.div`
  display: block;
  white-space: normal;
`,_e=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
  flex-wrap: wrap;
`,_n=r.div`
  display: flex;
  flex-wrap: wrap;
`;r(E)`
  white-space: pre-line;
`;const Rn=({user:e,created_at:n,title:o,hashtag:i,text:a})=>{const s=te(n),l=i==null?void 0:i.map(C=>t(Ce,{name:C.name},C.name));return u(Wn,{children:[u(_e,{children:[t(R,{size:"h1",children:o}),t(E,{size:"14",color:"grey",children:s})]}),u(_e,{children:[t(O,v(p({},e),{size:"sm"})),t(_n,{children:l})]}),t(Se,{children:a})]})},Nn=r.div`
  display: flex;
  justify-content: space-between;
`,Zn=r(W)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,Un=n=>{var e=k(n,[]);var g;const{question:o,isLoading:i,isError:a,QuestionThumbPost:s}=Z(),{user:l,isLoading:C}=V(),[d,h]=D.exports.useState(!1);if(!i&&!C){const c=!!l,m=x=>{if(!c)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");d===!1?(h(!0),x===o.is_like?s(o.user.id,o.id,x,!0):!x===o.is_like?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4."):s(o.user.id,o.id,x,!1),setTimeout(()=>{h(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},w=()=>{m(!0)},b=()=>{m(!1)},B=x=>{confirm("\uAC8C\uC2DC\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")?$.delete(`https://swim.42seoul.io/api/posts/question?questionId=${o.id}`,{withCredentials:!0}).then(()=>{location.href="/"}):x.preventDefault()},y=(g=o.comment)==null?void 0:g.map(x=>t(Pe,p({userEmail:l==null?void 0:l.email,questionId:o.id},x),x.id));return u(Nn,v(p({},e),{children:[t(pe,{like_count:o.like_count,is_like:o.is_like,onUpClick:w,onDownClick:b}),u(ce,{children:[t(Rn,p({},o)),u(Zn,{visible:l?l.email===o.user.email:!1,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},to:`/edit?id=${Ee.parse(location.search).id}`,children:"\uC218\uC815"}),t(F,{fontcolor:"deepgray",small:!0,onClick:B,children:"\uC0AD\uC81C"})]}),y,t(je,{questionId:o.id})]})]}))}else return a?t("div",{children:"Err..."}):t("div",{children:"loading..."})},Qn=()=>u(H,{style:{width:"100%",height:"248px",background:"#646464",marginTop:"15rem",padding:"0 2rem",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",bottom:"0px"},children:[u(Te,{style:{alignItems:"flex-end",width:"380px",marginBottom:"1rem"},children:[t(R,{size:"h2",color:"white",children:"42Code"}),t(E,{size:"14",color:"white",weight:"bold",children:"made by ji-park & yejeong & nkim & iha"})]}),t(E,{size:"14",color:"white",children:"Copyright \xA9 2019 - 2021 42Seoul inno. All rights reserved."})]});function Kn(){return u("svg",{width:"164",height:"42",viewBox:"0 0 164 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M0 18.2779C0 15.9614 2.53908 14.4657 4.61913 15.4853C9.70397 17.9779 18.0287 21.4939 24.6 21.5351C34.9803 21.6001 39.3328 13.1729 49.7125 13.0496C60.4712 12.9218 65.0907 21.5978 75.85 21.5351C86.4196 21.4734 90.927 13.7098 101.475 13.0496C114.508 12.2339 120.704 21.7509 133.762 21.5351C142.317 21.3936 153.618 17.3358 159.693 14.8836C161.723 14.0642 164 15.5485 164 17.7378V39C164 40.6569 162.657 42 161 42H3C1.34314 42 0 40.6569 0 39V18.2779Z",fill:"#3EC2EC",fillOpacity:"0.5"}),t("path",{d:"M34.8217 0.000244141H25.5478L7 18.6163V26.2429H25.6532V35.5641H34.8744V18.6163H16.3003L34.8217 0.000244141Z",fill:"black"}),t("path",{d:"M122.512 27.8744V0H115.784V27.8744H122.512Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M92.8264 0L95.1288 17.1891L97.4651 0H98.4824H100.405H105.322L107.624 17.1891L109.961 0H112.9L109.111 27.8744H109.055H106.172H102.216L99.4365 7.12348L96.616 27.8744H96.56H93.6764H89.7205L85.9869 0H92.8264Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M132.386 27.8744L134.688 10.6853L137.025 27.8744H138.042H139.964H144.881L147.184 10.6854L149.52 27.8744H152.46L148.671 0H148.615H145.731H141.775L138.996 20.751L136.175 0H136.119H133.236H129.28L125.546 27.8744H132.386Z",fill:"black"}),t("path",{d:"M39.6803 9.61187V0H48.331L39.6803 9.61187Z",fill:"black"}),t("path",{d:"M83.1034 9.61187V0H74.4527L83.1034 9.61187Z",fill:"black"}),t("path",{d:"M57.9429 19.2237L57.9429 27.8744L48.331 27.8744L57.9429 19.2237Z",fill:"black"}),t("path",{d:"M64.8408 19.2233L64.8408 27.874L74.4527 27.874L64.8408 19.2233Z",fill:"black"}),t("path",{d:"M48.8511 9.25621V0H57.9823V9.25621L48.8511 18.6182V27.8744H39.7198V18.6182L48.8511 9.25621Z",fill:"black"}),t("path",{d:"M73.4915 9.25621V0H63.8797V9.25621L73.4915 18.6182V27.8744H83.1034V18.6182L73.4915 9.25621Z",fill:"black"})]})}var On="/assets/422.bd7f157a.png";const Gn=r.div`
  display: ${({visible:e})=>e?"flex":"none"};
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;

  /* display: flex; */
  justify-content: space-around;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`,Jn=ct`
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
`,Xn=r.div`
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

  animation-name: ${Jn};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`,Yn=r.div`
  /* position: fixed; */
  z-index: 1000;

  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${On});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 55px 55px;
  background-color: white;
`,Re=({visible:e})=>t(z,{children:u(Gn,{visible:e,children:[t(Xn,{}),t(Yn,{})]})}),eo=e=>{const[n,o]=D.exports.useState(!1);return u("svg",v(p({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",style:{margin:"0 0.5rem"},onMouseEnter:s=>{o(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{o(!1)}},e),{children:[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",fill:n?A.color.lightblack:A.color.black})]}))},to=r(He)``,no=r(_)`
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

  ${({show:e})=>e&&f`
      display: inherit;
    `};
`,oo=r(H)`
  width: 100%;
  height: 100%;
`,Ne=r(F)`
  display: block;
  width: 100%;
  margin: 2rem 2rem 0 2rem;

  ${({theme:e})=>e&&f`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,io=({user:e})=>{const[n,o]=D.exports.useState(!1),[i,a]=D.exports.useState(!1),s=h=>{a(!0),h.target.style.cursor="pointer",h.stopPropagation()},l=()=>{a(!1)},C=()=>{o(!n)},d=async()=>{await $.get("https://swim.42seoul.io/api/auth/logout",{withCredentials:!0}),location.reload()};return u(to,{children:[t(O,{size:"lg",photo:e==null?void 0:e.image,nickname:(e==null?void 0:e.nickname)?e==null?void 0:e.nickname:"\uC815\uBCF4\uC5C6\uC74C",onMouseEnter:s,onMouseLeave:l,onClick:C,color:i?"grey":"black",children:t(eo,{onClick:()=>{}})}),t(no,{show:n,tabIndex:0,onFocus:()=>o(!0),children:u(oo,{children:[t(Ne,{to:"/setting",children:"\uC124\uC815"}),t(Ne,{onClick:d,children:"\uB85C\uADF8\uC544\uC6C3"})]})})]})},ro=f`
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,so=r.div`
  width: 533px;
  height: 644px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;

  ${ro}
`,ao=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(so,v(p({},n),{children:e}))},lo=()=>u("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 1L16.5 16.5",stroke:"#121212",strokeWidth:"2"}),t("path",{d:"M16.5 1L0.999999 16.5",stroke:"#121212",strokeWidth:"2"})]}),uo=r.span`
  float: right;
  &:hover,
  &:focus {
    cursor: pointer;
    color: red;
  }
`,co=r(R)`
  margin-top: 75px;
`,ho=r.div`
  font-weight: 500;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 38px;
  font-style: normal;
`,Ze=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,Ue=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,po=r.div`
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
`,ge=l=>{var C=l,{children:e,onClose:n,visible:o,title:i,subtitle:a}=C,s=k(C,["children","onClose","visible","title","subtitle"]);return t(po,{visible:o,children:u(ao,v(p({},s),{children:[t(uo,{onClick:n,children:t(lo,{})}),t(co,{size:"h1",children:i}),t(ho,{children:a}),e]}))})};ge.defaultProps={visible:!0};const Co=i=>{var a=i,{onClose:e,onRegist:n}=a,o=k(a,["onClose","onRegist"]);const[s,l]=D.exports.useState({email:"",password:""}),{email:C,password:d}=s,[h,g]=D.exports.useState(!1),c=async()=>{try{(await $.post("https://swim.42seoul.io/api/auth/login",s,{withCredentials:!0})).status===200?(ue("https://swim.42seoul.io/api/users/info"),e(!1)):alert("\uB85C\uADF8\uC778 \uC2E4\uD328!")}catch(b){alert("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638 \uC624\uB958")}l({email:"",password:""})},m=b=>{const{name:B,value:y}=b.target;l(v(p({},s),{[B]:y}))},w=()=>{location.href="https://localhost:5000/auth/42login",e(!1),g(!0)};return u(z,{children:[t(Re,{visible:h}),t(ge,v(p({onClose:()=>e(!1),title:"\uB85C\uADF8\uC778",subtitle:"\uC774\uBA54\uC77C\uB85C \uB85C\uADF8\uC778"},o),{children:u(Ze,{height:"392px",children:[u(Ue,{height:"265px",children:[t(q,{name:"email",value:C,onChange:m,placeholder:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"}),t(q,{name:"password",value:d,type:"password",onChange:m,placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"}),t(P,{onClick:c,size:"lg",children:"\uB85C\uADF8\uC778"}),t(F,{onClick:w,fontcolor:"primary",underline:!0,children:"42seoul \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"})]}),t(F,{onClick:()=>{n(!0),e(!1)},fontcolor:"black",children:"\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?"})]})}))]})},go=o=>{var i=o,{onClose:e}=i,n=k(i,["onClose"]);const[a,s]=D.exports.useState({nickname:"",email:"",password:"",confirm_pass:""}),{nickname:l,email:C,password:d,confirm_pass:h}=a,g=w=>{const{name:b,value:B}=w.target;if(s(v(p({},a),{[b]:B})),b==="confirm_pass"&&d!==""){const y=document.getElementById("diffpass");y.style.display="inherit",d===h?(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",y.style.color="blue"):(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",y.style.color="red")}},c=w=>{if(w.target.name==="confirm_pass"&&d!==""){const b=document.getElementById("diffpass");b.style.display="inherit",d===h?(b.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",b.style.color="blue"):(b.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",b.style.color="red")}},m=async()=>{const w=await $.post("https://swim.42seoul.io/api/auth/signup",a,{withCredentials:!0});s({nickname:"",email:"",password:"",confirm_pass:""}),w.data.result===!0&&e(!1),location.reload()};return t(ge,v(p({title:"\uD68C\uC6D0\uAC00\uC785",subtitle:"\uC774\uBA54\uC77C\uB85C \uD68C\uC6D0\uAC00\uC785",height:"712px",onClose:()=>e(!1)},n),{children:u(Ze,{height:"420px",children:[u(Ue,{height:"300px",children:[t(q,{name:"nickname",value:l,onChange:g,placeholder:"\uB2C9\uB124\uC784"}),t(q,{name:"email",value:C,onChange:g,placeholder:"\uC774\uBA54\uC77C"}),t(q,{name:"password",value:d,type:"password",onChange:g,placeholder:"\uBE44\uBC00\uBC88\uD638"}),t(q,{name:"confirm_pass",value:h,type:"password",onChange:g,onKeyUp:c,onBlur:c,placeholder:"\uBE44\uBC00\uBC88\uD638 \uD655\uC778"}),t(E,{size:"14",id:"diffpass",style:{width:"449px",marginLeft:"2rem",display:"none"},children:"HiddenBox"})]}),t(P,{onClick:m,size:"lg",children:"\uD68C\uC6D0\uAC00\uC785"})]})}))},mo=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${A.color.background.grey};
  height: 130px;
  width: 100%;

  margin-bottom: 3rem;
`,fo=r.div``,xo=r.div``,wo=r.button`
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
`,bo=r(R)`
  margin-bottom: 7px;
`,Bo=()=>{const[e,n]=D.exports.useState(!1),[o,i]=D.exports.useState(!1),{user:a,isLoading:s,isError:l}=V(),[C,d]=D.exports.useState(!1);return D.exports.useEffect(()=>{ue("https://swim.42seoul.io/api/users/info")},[]),u(z,{children:[t(Re,{visible:C}),t(Co,{onRegist:i,visible:e,onClose:n}),t(go,{visible:o,onClose:i}),u(mo,{children:[u(fo,{children:[t(se,{to:"/",children:t(bo,{size:"h1",children:t(Kn,{})})}),t(E,{size:"14",color:"lightgrey",children:"42seoul"})]}),a&&!s?t(io,{user:a}):t(xo,{children:t(wo,{onClick:()=>{location.href="https://swim.42seoul.io/api/auth/42login",d(!0),setTimeout(()=>{d(!1)},3e4)},children:"42 \uB85C\uADF8\uC778"})})]})]})},yo=r.div`
  width: 100%;
  height: 100%;

  > * {
    padding: 0 20rem;

    @media (max-width: 1023px) {
      padding: 0 3rem;
    }
  }
`,vo=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`,U=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return u(yo,{children:[t(Bo,{}),t(vo,v(p({},n),{children:e})),t(Qn,{})]})},ko=r.div`
  margin-bottom: 7rem;
`;r.div`
  margin-bottom: 4rem;
`;const Do=a=>{var s=a,{question:e,answer:n,answerWriting:o}=s,i=k(s,["question","answer","answerWriting"]);return u("div",v(p({},i),{children:[t(ko,{children:e}),n,o]}))},$o=n=>{var e=k(n,[]);const{question:o,answer:i,isLoading:a,isError:s}=Z(),{user:l,isLoading:C}=V();let d;return!a&&!C&&(d=i==null?void 0:i.map(h=>t(Dn,p({isChoosable:l?o.user.email===l.email:!1,is_solved:o.is_solved},h),h.id))),s?t(z,{children:"err"}):t(U,v(p({},e),{children:t(Do,{question:t(Un,{}),answer:d,answerWriting:t(qn,{})})}))},Ao=r.input`
  width: 100%;
  font-size: 18px;
  background-color: inherit;
  margin: 3rem 0rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`,Eo=r.div``,Lo=r.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  left: -1rem;
`,Qe=C=>{var d=C,{value:e,inputChange:n,setValue:o,tag:i,setTag:a,placeholder:s}=d,l=k(d,["value","inputChange","setValue","tag","setTag","placeholder"]);const h=document.getElementsByClassName("tagMsgEl")[0],g=document.getElementsByClassName("tagInput")[0],c=new RegExp(/^[a-z0-9+#_]+$/),m=()=>{const x=[...i];e&&!i.includes(e)&&x.push(e),o(""),a(x),g.style.color="black"},w=x=>{x.preventDefault(),n(x),x.target.value&&c.test(x.target.value)&&(h.style.display="none",g.style.color="black")},b=x=>{(x.code==="Enter"||x.code==="Space")&&(x.preventDefault(),c.test(e)?m():(h.style.display="block",g.style.color="red"))},B=x=>{const T=i.filter(Q=>Q!==x);a(T)},y=i==null?void 0:i.map(x=>t(Ce,{name:x,onDelClick:B,isDel:!0},x));return u(Eo,v(p({},l),{children:[t(Lo,{children:y}),t(Ao,{value:e,className:"tagInput",onChange:w,onBlur:m,onKeyPress:b,placeholder:s}),t(E,{className:"tagMsgEl",size:"12",color:"red",style:{position:"relative",top:"-2.5rem",display:"none"},children:"\uC798\uBABB\uB41C \uD0DC\uADF8 \uD615\uC2DD\uC785\uB2C8\uB2E4. \uC601\uC5B4\uC18C\uBB38\uC790\uC640 \uD2B9\uC218\uBB38\uC790 #+_ \uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. ex)ft_pintf"})]}))},Ke=r.input`
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
`,zo=r.div`
  width: 100%;
  height: 100%;
`,Fo=r(Ke)`
  width: 100%;
  margin-bottom: 20px;
`,So=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,Mo=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,Io=()=>{const{question:e,isLoading:n,isError:o}=Z(),i=g=>/^[\w]*$/g.test(g)&&g.length<20,a=g=>g.length<40,s=S("",i),l=S("",a),C=S(""),[d,h]=D.exports.useState([]);if(D.exports.useEffect(()=>{const g=e==null?void 0:e.hashtag.map(c=>c.name);h(g),l.setValue(e?e.title:""),C.setValue(e?e.text:"")},[]),!n&&!o){const g=async c=>{if(c.preventDefault(),!l.value||!C.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{(await $.patch("https://swim.42seoul.io/api/posts/question",{questionId:e.id,title:l.value,hashtag:d,text:C.value},{withCredentials:!0})).status===200?(alert("\uC9C8\uBB38 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${e.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(m){alert(m)}};return u(zo,{children:[t(Fo,{value:l.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:l.onChange}),t(Qe,{inputChange:s.onChange,value:s.value,setValue:s.setValue,tag:d,setTag:h,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(ie,{weight:"bold",width:"4rem"}),u(So,{children:[t(ne,{value:C.value,setValue:C.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),u(Mo,{children:[t(F,{fontcolor:"deepgray",style:{fontSize:"16px",marginRight:"2rem"},to:`/detail?id=${e.id}`,children:"\uCDE8\uC18C"}),t(P,{size:"sm",onClick:g,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})]})}else return o?t("div",{children:"err.."}):t("div",{children:"loading"})},To=n=>{var e=k(n,[]);return t(U,v(p({},e),{children:t(Io,{})}))},me=e=>t("svg",v(p({},e),{height:"10px",viewBox:"0 0 448 448",width:"10px",fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"})})),Ho=e=>u("svg",v(p({width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{children:[t("circle",{cx:"8",cy:"8",r:"6.5",stroke:"black",strokeWidth:"3"}),t("path",{d:"M13.5 13L19 18.5",stroke:"black",strokeWidth:"3"})]})),qo=r.div`
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
`,Po=r(q)`
  width: 500px;
  height: 41px;
  border-radius: 20px 0 0 20px;
`,jo=r.button`
  width: 44px;
  height: 41px;
  float: right;
  border-radius: 0 20px 20px 0;
  background: white;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`,fe=a=>{var s=a,{onChange:e,onSearch:n,search:o}=s,i=k(s,["onChange","onSearch","search"]);const[l,C]=D.exports.useState(!1),d={border:`1px solid ${A.color.primary}`},h=g=>{g.key==="Enter"&&n()};return t(z,{children:u(qo,v(p({style:l?d:{}},i),{children:[t(Po,{placeholder:"\uAC80\uC0C9\uD560 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694",value:o,border:!1,onKeyPress:h,onChange:e,onFocus:()=>C(!0),onBlur:()=>C(!1)}),t(jo,{onClick:n,children:t(Ho,{})})]}))})},Vo=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,Wo=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,_o=r(_)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,xe=a=>{var s=a,{name:e,count:n,color:o}=s,i=k(s,["name","count","color"]);return u(He,v(p({width:"40px",height:"60px"},i),{children:[t(E,{weight:"bold",size:"18",color:o,children:e}),t(E,{weight:"bold",size:"18",color:o,children:n})]}))},Ro=r(L)`
  width: 100%;
  height: 182.46px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,No=r(H)`
  width: 76%;
  height: 90%;
  align-items: flex-start;
`,Zo=r(R)`
  &:hover,
  &:focus {
    ${({theme:e})=>e&&f`
        color: ${e.color.lightblack};
        cursor: pointer;
      `};
  }
`,Uo=r(E)`
  overflow: hidden;
  white-space: wrap;
  font-weight: 100;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  max-height: 50px;
  line-height: 25px;
`,Qo=r(E)``,Ko=r(L)`
  width: 100%;
`,Oo=r(L)`
  width: 17rem;
  height: 100%;
  padding: 0 1rem;
`;r(H)`
  width: 10%;
  height: 100%;
`;const we=m=>{var w=m,{id:e,title:n,text:o,is_solved:i,photo:a,nickname:s,answer_cnt:l=1,like_count:C,view_count:d,created_at:h,hashtag:g}=w,c=k(w,["id","title","text","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);o=o.replace(/^\s*`{3}\w*/gm,"").replace(/[`#*~_>]/g,"").replace(/^!\[[\w.]*\]\([\w.:/-]+\)/gi,""),g.length>5&&(g=g.slice(0,3),g.push({name:"..."}));const b=()=>{const B="https://swim.42seoul.io/api/pages/question/viewCount";$.post(B,{questionId:e},{withCredentials:!0})};return u(Ro,v(p({},c),{children:[u(No,{children:[t(se,{to:`/detail?id=${e}`,onClick:b,children:t(Zo,{size:"h2",children:n})}),t(Uo,{size:"18",weight:"normal",color:"grey",children:o}),u(Ko,{children:[u(L,{children:[t(Qo,{size:"14",weight:"normal",color:"grey",children:te(h)}),g.map((B,y)=>t(Ce,{name:B==null?void 0:B.name,style:{marginTop:"0px"}},y))]}),t(O,{size:"sm",photo:a,nickname:s,id:0})]})]}),u(Oo,{children:[t(xe,{name:"\uB2F5\uBCC0",count:l,color:i?"primary":"black"}),t(xe,{name:"\uCD94\uCC9C",count:C}),t(xe,{name:"\uC870\uD68C",count:d})]})]}))},Go=e=>{const[n,o]=D.exports.useState(!1);return t("svg",v(p({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginLeft:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:s=>{o(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{o(!1)}},e),{children:t("path",{d:"M1.225 23.5507C1.8375 24.1532 2.825 24.1532 3.4375 23.5507L13.825 13.332C14.3125 12.8524 14.3125 12.0777 13.825 11.5982L3.4375 1.37952C2.825 0.776976 1.8375 0.776976 1.225 1.37952C0.612503 1.98206 0.612503 2.95351 1.225 3.55605L10.275 12.4712L1.2125 21.3864C0.612503 21.9767 0.612503 22.9604 1.225 23.5507Z",fill:n?A.color.lightblack:A.color.black})}))},Jo=e=>{const[n,o]=D.exports.useState(!1);return t("svg",v(p({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginRight:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:s=>{o(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{o(!1)}},e),{children:t("path",{d:"M13.775 1.39185C13.1625 0.789306 12.175 0.789306 11.5625 1.39185L1.17501 11.6105C0.687512 12.0901 0.687512 12.8648 1.17501 13.3443L11.5625 23.563C12.175 24.1655 13.1625 24.1655 13.775 23.563C14.3875 22.9604 14.3875 21.989 13.775 21.3865L4.72501 12.4713L13.7875 3.55609C14.3875 2.96584 14.3875 1.9821 13.775 1.39185Z",fill:n?A.color.lightblack:A.color.black})}))},Xo=r.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Yo=a=>{var s=a,{number:e,active:n,onClick:o}=s,i=k(s,["number","active","onClick"]);const[l,C]=D.exports.useState(!1),d=c=>{C(!0),c.target.style.color=A.color.lightblack,c.stopPropagation()},h=c=>{C(!1),c.target.style.color=A.color.black},g={display:"flex",justifyContent:"space-around",alignItems:"center"};return t(he,v(p({onClick:o,size:"sm",color:n?A.color.primary:A.color.white,style:g,onMouseEnter:d,onMouseLeave:h},i),{children:e}))};function ei(e,n){const o=10*(n.current-1)+1;let i;return e<=10?i=e:o+9>=e?i=e-o+1:i=10,Array(i).fill(o).map((a,s)=>a+s)}function ti(e,n){let o=parseInt(n/e);return n%e==0&&(o=o-1),o+1}const re=s=>{var l=s,{page:e=1,limit:n=8,onPage:o,questionCount:i=10}=l,a=k(l,["page","limit","onPage","questionCount"]);const C=ti(n,i),d=D.exports.useRef(1),h=()=>{if(e===1){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==1&&(d.current-=1),o(e-1)},g=()=>{if(e===C){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==0&&(d.current+=1),o(e+1)};return u(Xo,v(p({},a),{children:[t(Jo,{onClick:h}),t(L,{children:ei(C,d).map(c=>t(Yo,{number:c,onClick:()=>o(c),active:e===c},c))}),t(Go,{onClick:g})]}))},ni=r.ul`
  /* width: 380px; */
  /* height: 41px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  /* margin-bottom: 1rem; */

  ${({width:e})=>e&&f`
      width: ${e};
    `}
  ${({height:e})=>e&&f`
      width: ${e};
    `}
  ${({size:e})=>e==="sm"&&f`
      height: 21px;
      /* width: 224px; */
    `}
	${({size:e})=>e==="xsm"&&f`
      margin: 0 0;
    `}
`,oi=r.li`
  color: #c4c4c4;
  font-size: 20px;
  border: none;
  font-weight: 700;
  margin: 0.2rem 0.8rem;
  /* width: 95px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  ${({size:e})=>e==="sm"&&f`
      font-size: 18px;
      margin: 0 0.8rem;
      /* width: 67px; */
    `}
  ${({size:e})=>e==="xsm"&&f`
      font-size: 14px;
      margin: 0 0;
      /* width: 67px; */
    `}
`,M=a=>{var s=a,{active:e,children:n,onTabClick:o}=s,i=k(s,["active","children","onTabClick"]);return t(oi,v(p({style:e?{color:"black",transition:"color 0.5s ease"}:void 0,onClick:o},i),{children:n}))},G=o=>{var i=o,{children:e}=i,n=k(i,["children"]);return t(ni,v(p({},n),{children:e}))};G.Item=M;const ii=async e=>{const n=await $.get(e).catch(o=>{throw dt(o),Error()});return n==null?void 0:n.data},ri=(e,n)=>{const o=e===0?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:e===1?`https://swim.42seoul.io/api/pages/list/question/like?pageNumber=${n}`:e===2?`https://swim.42seoul.io/api/pages/list/question/unsolved?pageNumber=${n}`:e===3?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:"",{data:i,error:a}=N(o,ii);return{question:i,isLoading:!a&&!i,isError:a}},be=r.div`
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
	${({height:e})=>e&&f`
      height: ${e};
    `}
	${({width:e})=>e&&f`
      width: ${e};
    `}
`,si=async e=>(await $.get(e)).data;function ai(e){const n=`https://swim.42seoul.io/api/hashtags/count?pageNumber=${e}`,{data:o,error:i}=N(n,si);return{tagList:o&&o.hashtag,isLoading:!i&&!o,isError:i}}const li=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 8rem;

  margin-right: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,ui=r.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${A.color.text.primary};
  -webkit-transition: color 0.2s;
  -moz-transition: color 0.2s;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: ${le(.1,A.color.text.primary)};
  }
`,ci=r.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${A.color.text.grey};

  margin-top: 12px;
`;function di(a){var s=a,{name:e,questionCount:n,onClick:o}=s,i=k(s,["name","questionCount","onClick"]);return u(li,v(p({},i),{children:[t(ui,{onClick:o,children:e}),u(ci,{children:["\uC9C8\uBB38 ",n,"\uAC1C"]})]}))}const hi=r(_)`
  width: 100%;
  padding: 1.5rem 2.5rem;
`,pi=r.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  margin-top: 1.5rem;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Ci=r.ul`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;function gi(n){var e=k(n,[]);const[o,i]=D.exports.useState(1),{tagList:a,isLoading:s}=ai(o),l=ht();if(s)return t("div",{children:"loading"});{const C=a==null?void 0:a.hashTagList.map(d=>t(di,p({onClick:()=>{l.push({pathname:`/tag/${d.name}`,state:{hashtagId:d.id,hashtagName:d.name}})}},d),d.id));return u(hi,v(p({},e),{children:[u(pi,{children:["\uBAA8\uB4E0 \uD0DC\uADF8 (",a==null?void 0:a.hashTagListCount,")\uAC1C"]}),t(Ci,{children:C}),t(H,{height:"115px",children:t(re,{limit:30,questionCount:a==null?void 0:a.hashTagListCount,page:o,onPage:i})})]}))}}const mi=n=>{var e=k(n,[]);const[o,i]=D.exports.useState(0),[a,s]=D.exports.useState(1),{question:l,isLoading:C,isError:d}=ri(o,a);return d?t("div",{children:"Error!!"}):u(Vo,{children:[u(G,v(p({},e),{children:[t(M,{active:o===0,onTabClick:()=>i(0),children:"\uCD5C\uC2E0\uC21C"}),t(M,{active:o===1,onTabClick:()=>i(1),children:"\uC778\uAE30\uC21C"}),t(M,{active:o===2,onTabClick:()=>i(2),children:"\uB2F5\uBCC0\uD544\uC694"}),t(M,{active:o===3,onTabClick:()=>i(3),children:"\uD0DC\uADF8"})]})),o===3?t(gi,{}):u(_o,{children:[C?[...Array(8)].map((h,g)=>t(Wo,{children:t(be,{})},g)):(l==null?void 0:l.questionList)&&(l==null?void 0:l.questionList.map((h,g)=>{var c;return t(we,p({id:h.id,title:h.title,text:h.text,photo:h.user.photo,nickname:(c=h==null?void 0:h.user)==null?void 0:c.nickname,is_solved:h.is_solved,answer_cnt:h.answer_count,like_count:h.like_count,view_count:h.view_count,hashtag:h.hashtag,created_at:h.created_at},e),g)})),t(H,{height:"115px",children:t(re,{questionCount:l==null?void 0:l.questionCount,page:a,onPage:s})})]})]})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const fi=r(L)`
  width: 100%;
  margin-bottom: 3rem;
`,xi=r(L)`
  align-items: flex-start;
`;r(L)`
  width: 100%;
  height: 248px;
  background: #9d9d9d;
  margin-top: 15rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;const wi=({panel:e,content1:n,content2:o})=>u(z,{children:[t(fi,{children:e}),u(xi,{children:[n,o]})]}),bi=r.div`
  width: 28%;
  position: relative;
  @media (max-width: 910px) {
    display: none;
    background-color: pink;
  }
`,Bi=r(_)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 2.5rem;
  padding-bottom: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
`,yi=r(L)``,vi=r.span`
  ${({theme:e})=>e&&f`
      background-color: ${e.color.primary};
    `}
  position: absolute;
  width: 130px;
  height: 15px;
  top: 75px;
  opacity: 30%;
  z-index: 0;
`,ki=r.div`
  margin: 1.5rem 0;
  margin-bottom: 2rem;
`,Di=r.div`
  height: 12px;
  width: 0.5px;
  margin: 0 1rem;
  ${({theme:e})=>f`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,$i=r.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  * & * {
    margin-right: 1.5rem;
  }
`,Ai=r.div`
  /* z-index: 100; */
`,Ei=({onHover:e})=>{const[n,o]=D.exports.useState(!1),i=D.exports.useRef(null),a=l=>{if(l.type=="click")e(!n),o(!n);else if(l.type=="mouseleave"){if(n)return;e(!1)}},s=l=>{l.target.style.cursor="pointer",e(!0)};return u("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:n?`${A.color.lightprimary}`:"black",onClick:a,onMouseEnter:s,onMouseLeave:a,children:[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})]})},Li=async e=>(await $.get(e)).data,zi=()=>{const e="https://swim.42seoul.io/api/users/ranking",{data:n,error:o}=N(e,Li),i=n==null?void 0:n.monthRankerInfo.filter(s=>s.id!=null),a=n==null?void 0:n.totalRankerInfo.filter(s=>s.id!=null);return{ranking:{month:i,total:a},isLoading:!o&&!n,isError:o}},Fi=r(_)`
  height: 400px;
  width: 350px;
  background-color: rgba(53, 147, 235, 0.9);
  padding: 20px 30px;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 90px;

  ${({visible:e})=>e===!1&&f`
      display: none;
    `}
`,Si=r.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
`;r.span`
  height: 100%;
  width: 100%;
`;const J=r.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
  height: 30px;
  padding-bottom: 2px;
  margin-top: 1.5rem;
  border-bottom: 1px solid rgba(75, 131, 182, 0.8);
`,Mi=r.div`
  font-size: 10px;
  font-weight: 500;
  color: white;
  line-height: 2rem;
  padding-bottom: 2px;
  margin-top: 2rem;
  /* border-bottom: 1px solid rgba(75, 131, 182, 0.8); */
`,Ii=r.a`
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
`,Ti=({visible:e=!1})=>u(Fi,{visible:e,children:[u(Si,{children:["\uC810\uC218\uC0B0\uC815 \uAE30\uC900",t("span",{style:{fontSize:"40px",marginLeft:"1rem"},role:"img","aria-label":"swim",children:"\u{1F3CA}"})]}),t(J,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(J,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC758 \uB2F5\uBCC0 \uC911 \uD558\uB098\uB97C \uCC44\uD0DD"}),t(J,{children:"+10 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(J,{children:"+15 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC774 \uCC44\uD0DD"}),t(J,{children:"-1 \uC810 : \uB2E4\uB978 \uC0AC\uB78C\uC758 \uC9C8\uBB38/\uB2F5\uBCC0\uC5D0 \uC2EB\uC5B4\uC694\uB97C \uB2EE"}),u(Mi,{children:["\uB108\uBB34 \uC131\uC758\uC5C6\uAC8C \uC801\uD600\uC9C4 \uAE00\uB4E4\uC740 \uD1B5\uBCF4\uC5C6\uC774 \uC0AD\uC81C\uB418\uBA70, \uC774\uBCA4\uD2B8\uC5D0\uC11C \uC81C\uC678\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."," ",t(Ii,{href:"https://gratis-cardboard-45e.notion.site/42swim-7d4fd87c1cbd4686a7218788610955d3",children:"\uCEE4\uBBA4\uB2C8\uD2F0 \uC591\uC2DD"})," ","\uC744 \uC9C0\uCF1C\uC8FC\uC138\uC694!"]})]}),Oe=({rank:e,photo:n,nickname:o})=>u($i,{children:[t(E,{size:"18",weight:"bold",color:"deepgray",children:e}),t(O,{border:!0,size:"lg",nickname:o,photo:n})]}),Hi=()=>{const{ranking:e,isLoading:n,isError:o}=zi(),{month:i,total:a}=e,[s,l]=D.exports.useState(0),[C,d]=D.exports.useState(!1),h=g=>{d(g)};return n?t("div",{children:"loading"}):o?t("div",{children:"error"}):u(bi,{children:[t(Te,{style:{height:"44px",justifyContent:"flex-start",alignItems:"flex-start"}}),u(Bi,{children:[u(yi,{children:[t(E,{size:"18",weight:"bold",style:{zIndex:"2"},children:"42Swimmer \uB7AD\uD0B9"}),t(vi,{}),t(Ei,{onHover:h}),t(Ti,{visible:C})]}),t(ki,{children:u(G,{size:"xsm",children:[t(M,{size:"xsm",active:s===0,onTabClick:()=>l(0),children:"\uC6D4\uBCC4\uC21C"}),t(Di,{}),t(M,{size:"xsm",active:s===1,onTabClick:()=>l(1),children:"\uC804\uCCB4\uC21C"})]})}),t(Ai,{children:s===0?i.map((g,c)=>t(Oe,{rank:c,nickname:g.nickname,photo:g.photo},g.id)):a.map((g,c)=>t(Oe,{rank:c,nickname:g.nickname,photo:g.photo},g.id))})]})]})},qi=o=>{var i=o,{history:e}=i,n=k(i,["history"]);const{value:a,onChange:s}=S("");return t(z,{children:t(U,{children:t(wi,{panel:u(z,{children:[t(fe,{onChange:s,search:a,onSearch:C=>{pt(C),e.push(`/search?keyword=${a}`)}}),u(P,{shadow:!0,onClick:()=>e.push("/writing"),size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(me,{style:{marginLeft:"2rem"}})]})]}),content1:t(mi,{}),content2:t(Hi,{})})})})},Pi=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,ji=r(L)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Vi=r.span`
  font-size: 18px;
  font-weight: 700;
`,Wi=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,_i=r(_)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Ri=async e=>(await $.get(e)).data,Ni=(e,n,o)=>{const a=`https://swim.42seoul.io/api/pages/list/question/keyword?pageNumber=${n}&keyword=${o}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:s,error:l}=N(a,Ri);return{question:s,isLoading:!l&&!s,isError:l}},Ge=o=>{var i=o,{keyword:e}=i,n=k(i,["keyword"]);const[a,s]=D.exports.useState(0),[l,C]=D.exports.useState(1),{question:d,isLoading:h,isError:g}=Ni(a,l,e);return g?t("div",{children:"Error!!"}):t(Pi,{children:u(_i,{children:[u(ji,{children:[u(Vi,{children:["\uAC80\uC0C9\uACB0\uACFC (",d==null?void 0:d.questionCount,"\uAC74)"]}),u(G,v(p({size:"sm"},n),{children:[t(M,{size:"sm",active:a===0,onTabClick:()=>s(0),children:"\uCD5C\uC2E0\uC21C"}),t(M,{size:"sm",active:a===1,onTabClick:()=>s(1),children:"\uC778\uAE30\uC21C"}),t(M,{size:"sm",active:a===2,onTabClick:()=>s(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),h?[...Array(8)].map((c,m)=>t(Wi,{children:t(be,{})},m)):d==null?void 0:d.questionList.map((c,m)=>{var w;return t(we,p({id:c.id,title:c.title,text:c.text,photo:c.user.photo,nickname:(w=c==null?void 0:c.user)==null?void 0:w.nickname,is_solved:c.is_solved,answer_cnt:c.answer_count,like_count:c.like_count,view_count:c.view_count,hashtag:c.hashtag,created_at:c.created_at},n),m)}),t(H,{height:"115px",children:t(re,{questionCount:d==null?void 0:d.questionCount,page:l,onPage:C})})]})})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const Zi=r(L)`
  width: 100%;
  margin-bottom: 3rem;
`,Ui=r(L)`
  align-items: flex-start;
`;r(L)`
  width: 100%;
  height: 248px;
  background: #9d9d9d;
  margin-top: 15rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;const Qi=({panel:e,content:n})=>u(z,{children:[t(Zi,{children:e}),t(Ui,{children:n})]}),Ki=({location:e})=>{const o=Ct.parse(e.search,{ignoreQueryPrefix:!0}).keyword,{value:i,onChange:a}=S(o),[s,l]=D.exports.useState(o);return t(U,{children:t(Qi,{panel:u(z,{children:[t(fe,{onChange:a,search:i,onSearch:()=>{l(i)}}),u(P,{shadow:!0,onClick:()=>{},size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(me,{style:{marginLeft:"2rem"}})]})]}),content:t(Ge,{keyword:s})})})},Oi=r.div`
  padding: 0 5rem;
`,Gi=r(L)`
  justify-content: flex-start;
  > * {
    margin-right: 3rem;
  }
`,Ji=r(H)`
  height: 300px;
  /* width: 25%; */
  justify-content: center;

  > * {
    margin-bottom: 2rem;
  }
`,Xi=r.div`
  width: 0.5px;
  height: 150px;
  margin: 0 2rem;
  ${({theme:e})=>f`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,Yi=r.div`
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
`,er=r.div`
  > * {
    margin-top: 2rem;
  }

  > button {
    margin-top: 3rem;
    float: right;
    /* 어케할지 결정하기  */
  }
`,tr=({tlPanel:e,trPanel:n,bPanel:o})=>u(Oi,{children:[u(Gi,{children:[t(Ji,{children:e}),t(Xi,{}),t(Yi,{children:n})]}),t(er,{children:o})]}),nr=r.div`
  width: 100%;
  height: 100px;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>f`
    border-bottom: 1px ${e.color.lightgrey} solid;
  `}
`,or=r(L)`
  padding: 1.5rem 0;
`,ir=r(R)`
  width: 25%;
`,rr=r(E)`
  width: 65%;
`,sr=r(L)`
  width: 10%;
`,ar=r(E)`
  margin-bottom: 1.5rem;
`,Je=({name:e,value:n,etc:o,desc:i})=>u(nr,{children:[u(or,{children:[t(ir,{size:"h2",children:e}),t(rr,{weight:"normal",size:"20",children:n}),t(sr,{children:o})]}),t(ar,{size:"14",color:"lightgrey",children:i})]}),lr=r(q)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  margin-right: 1.5rem;
`;r(q)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  padding: 10px 15px;
`;const ur=r(W)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > button {
    margin-right: 1rem;
  }
`,Be=r(P)`
  width: 153px;
`,cr=n=>{var e=k(n,[]);const{user:o,isLoading:i,isError:a}=V(),{value:s,onChange:l,setValue:C}=S(o==null?void 0:o.nickname),[d,h]=D.exports.useState(!1);if(a)return alert("\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"),t(Ae,{to:"/"});if(i)return t("div",{children:"loading..."});const g=()=>{const b=document.getElementById("uploadImg");b==null||b.click()},c=async()=>{const b=new FormData,B=document.getElementById("uploadImg").files[0],y="https://swim.42seoul.io/api/users/image";b.append("imgFile",B),await $.patch(y,b,{withCredentials:!0}).then(x=>{alert("\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC\uB97C \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},m=async()=>{const b="https://swim.42seoul.io/api/users/image";await $.delete(b,{withCredentials:!0}).then(B=>{alert("\uC774\uBBF8\uC9C0\uB97C \uC815\uC0C1\uC801\uC73C\uB85C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},w=async()=>{const b="https://swim.42seoul.io/api/users/nickname",B={nickname:s};await $.patch(b,B,{withCredentials:!0}).then(y=>{alert("\uB2C9\uB124\uC784 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),ue("https://swim.42seoul.io/api/users/info"),h(!1)};return t(U,v(p({},e),{children:t(tr,{tlPanel:u(z,{children:[t(he,{size:"lg",img:(o==null?void 0:o.image)?o.image:null}),t(Be,{size:"sm",color:"primary",shadow:!0,onClick:g,children:"\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"}),t("form",{id:"imgform",method:"patch",encType:"application/json",style:{display:"none"},children:t("input",{id:"uploadImg",type:"file",onChange:c})}),t(Be,{size:"sm",color:"white",shadow:!0,onClick:m,children:"\uC774\uBBF8\uC9C0 \uC81C\uAC70"})]}),trPanel:u(z,{children:[u(W,{visible:!d,children:[t(R,{size:"h1",children:o==null?void 0:o.nickname}),t(ie,{weight:"bold",width:"4rem"}),t(F,{fontcolor:"primary",underline:!0,to:"#",onClick:()=>{C(o==null?void 0:o.nickname),h(!0)},children:"\uC218\uC815"})]}),u(ur,{visible:d,children:[t(lr,{value:s||"",onChange:l}),t(P,{size:"sm",color:"lightprimary",shadow:!0,onClick:w,children:"\uC218\uC815\uD558\uAE30"}),t(F,{fontcolor:"deepgray",underline:!0,to:"#",onClick:()=>h(!1),children:"\uCDE8\uC18C"})]})]}),bPanel:u(z,{children:[t(Je,{name:"\uC774\uBA54\uC77C",value:o.email,etc:t(F,{fontcolor:"primary",underline:!0,children:"\uC218\uC815"}),desc:"\uD68C\uC6D0 \uC778\uC99D \uB610\uB294 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uBC1C\uC1A1\uD558\uB294 \uC774\uBA54\uC77C\uC744 \uC218\uC2E0\uD558\uB294 \uC8FC\uC18C\uC785\uB2C8\uB2E4."}),t(Je,{name:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD",value:t(F,{fontcolor:"primary",underline:!0,children:"\uBCC0\uACBD\uD558\uAE30"}),desc:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uD558\uAE30 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC704\uC758 \uC774\uBA54\uC77C\uB85C  \uBCC0\uACBD\uD558\uAE30 \uD398\uC774\uC9C0\uAC00 \uBC1C\uC1A1\uB429\uB2C8\uB2E4."}),t(Be,{size:"sm",fontColor:"white",color:"red",shadow:!0,children:"\uD68C\uC6D0 \uD0C8\uD1F4"})]})})}))},dr=r.div`
  width: 100%;
  height: 100%;
`,hr=r(Ke)`
  width: 100%;
  margin-bottom: 20px;
`,pr=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,Cr=()=>{const e='\uC9C8\uBB38\uC744 \uB0A8\uACA8\uBCF4\uC138\uC694!\n  ```C\n  printf("helloWord");\n  ```',n=c=>/[\w]*$/g.test(c)&&c.length<20,o=c=>c.length<40,i=S("",n),a=S("",o),s=S(e),[l,C]=D.exports.useState([]),{isLoading:d,user:h}=V();D.exports.useEffect(()=>{!d&&!h&&(alert("\uB85C\uADF8\uC778 \uD6C4 \uC9C8\uBB38 \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),location.href="/")},[h]);const g=async c=>{if(c.preventDefault(),!a.value||!s.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{const m=await $.post("https://swim.42seoul.io/api/posts/question",{title:a.value,hashtag:l,text:s.value},{withCredentials:!0});m.status===200?(alert("\uC9C8\uBB38 \uC791\uC131\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${m.data.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(m){alert(m)}};return u(dr,{children:[t(hr,{value:a.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:a.onChange}),t(Qe,{inputChange:i.onChange,value:i.value,setValue:i.setValue,tag:l,setTag:C,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(ie,{weight:"bold",width:"4rem",style:{marginBottom:"3rem"}}),u(pr,{children:[t(ne,{value:s.value,setValue:s.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),t(P,{size:"sm",onClick:g,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})},gr=n=>{var e=k(n,[]);return t(U,v(p({},e),{children:t(Cr,{})}))},mr=gt`
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
`,fr=({children:e})=>u(mt,{theme:A,children:[t(mr,{}),e]});r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const xr=r(L)`
  width: 100%;
  margin-bottom: 3rem;
`,wr=r(L)`
  align-items: flex-start;
`;r(L)`
  width: 100%;
  height: 248px;
  background: #9d9d9d;
  margin-top: 15rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;const br=({panel:e,content:n})=>u(z,{children:[t(xr,{children:e}),t(wr,{children:n})]}),Br=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,yr=r(L)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,vr=r.span`
  font-size: 18px;
  font-weight: 700;
`,kr=r.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme:e})=>e.color.primary};
`,Dr=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,$r=r(_)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Ar=async e=>(await $.get(e)).data,Er=(e,n,o)=>{const a=`https://swim.42seoul.io/api/pages/list/question/hashtag/id?pageNumber=${n}&hashtagId=${o}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:s,error:l}=N(a,Ar);return{question:s,isLoading:!l&&!s,isError:l}},Lr=i=>{var a=i,{hashtagName:e,hashtagId:n}=a,o=k(a,["hashtagName","hashtagId"]);const[s,l]=D.exports.useState(0),[C,d]=D.exports.useState(1),{question:h,isLoading:g,isError:c}=Er(s,C,n);return c?t("div",{children:"Error!!"}):t(Br,{children:u($r,{children:[u(yr,{children:[u(vr,{children:[u(kr,{children:["#",e]})," \uAC80\uC0C9\uACB0\uACFC (",h==null?void 0:h.questionCount,"\uAC74)"]}),u(G,v(p({size:"sm"},o),{children:[t(M,{size:"sm",active:s===0,onTabClick:()=>l(0),children:"\uCD5C\uC2E0\uC21C"}),t(M,{size:"sm",active:s===1,onTabClick:()=>l(1),children:"\uC778\uAE30\uC21C"}),t(M,{size:"sm",active:s===2,onTabClick:()=>l(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),g?[...Array(8)].map((m,w)=>t(Dr,{children:t(be,{})},w)):h==null?void 0:h.questionList.map((m,w)=>{var b;return t(we,p({id:m.id,title:m.title,text:m.text,photo:m.user.photo,nickname:(b=m==null?void 0:m.user)==null?void 0:b.nickname,is_solved:m.is_solved,answer_cnt:m.answer_count,like_count:m.like_count,view_count:m.view_count,hashtag:m.hashtag,created_at:m.created_at},o),w)}),t(H,{height:"115px",children:t(re,{questionCount:h==null?void 0:h.questionCount,page:C,onPage:d})})]})})},zr=({location:e})=>{const n=e.state,{value:o,onChange:i}=S(""),[a,s]=D.exports.useState("");return t(U,{children:t(br,{panel:u(z,{children:[t(fe,{onChange:i,search:o,onSearch:()=>{s(o)}}),u(P,{shadow:!0,onClick:()=>{},size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(me,{style:{marginLeft:"2rem"}})]})]}),content:a===""?t(Lr,{hashtagName:n.hashtagName,hashtagId:n.hashtagId}):t(Ge,{keyword:a})})})};K.event({category:"User",action:"Created an Account"});K.exception({description:"An error ocurred",fatal:!0});const Fr=()=>{const e=Fe();return D.exports.useEffect(()=>{K.initialize("UA-215641389-1"),K.set({page:e.pathname}),K.pageview(e.pathname)},[e]),t(fr,{children:u(ft,{children:[t(j,{path:"/",exact:!0,render:n=>t(qi,p({},n))}),t(j,{path:"/search",exact:!0,render:n=>t(Ki,p({},n))}),t(j,{path:"/tag/:hashtagName",exact:!0,render:n=>t(zr,p({},n))}),t(j,{path:"/detail",exact:!0,render:n=>t($o,p({},n))}),t(j,{path:"/writing",exact:!0,render:n=>t(gr,p({},n))}),t(j,{path:"/edit",exact:!0,render:n=>t(To,p({},n))}),t(j,{path:"/setting",exact:!0,render:n=>t(cr,p({},n))}),t(j,{path:"/auth",render:n=>t(kt,p({},n))})]})})};xt({dsn:"https://be73c673dc5040cab904c7281630f650@o1092079.ingest.sentry.io/6110101",integrations:[new wt],tracesSampleRate:1});bt.render(t(Bt.StrictMode,{children:t(yt,{children:t(Fr,{})})}),document.getElementById("root"));
