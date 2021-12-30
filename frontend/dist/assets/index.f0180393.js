var pt=Object.defineProperty,Ct=Object.defineProperties;var gt=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var Le=(e,n,i)=>n in e?pt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,p=(e,n)=>{for(var i in n||(n={}))Ae.call(n,i)&&Le(e,i,n[i]);if(ie)for(var i of ie(n))Ee.call(n,i)&&Le(e,i,n[i]);return e},v=(e,n)=>Ct(e,gt(n));var k=(e,n)=>{var i={};for(var o in e)Ae.call(e,o)&&n.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&ie)for(var o of ie(e))n.indexOf(o)<0&&Ee.call(e,o)&&(i[o]=e[o]);return i};import{r as D,j as t,R as ze,a as $,Z as N,q as Fe,C as f,s as r,w as mt,L as oe,b as Se,l as Me,c as a,F as z,d as ft,u as Ie,e as ce,f as de,U as xt,H as he,M as O,g as wt,h as bt,i as Bt,k as yt,W as vt,m as kt,n as G,S as Dt,o as W,p as $t,B as At,t as Et,v as Lt,x as zt}from"./vendor.5ddbfb67.js";const Ft=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(l){if(l.ep)return;l.ep=!0;const s=i(l);fetch(l.href,s)}};Ft();const St=n=>{var e=k(n,[]);const i=location.search;return D.exports.useEffect(()=>{(async()=>{await $.get(`https://swim.42seoul.io/api/auth/authResult${i}`)})()},[i]),t(ze,{to:"/"})},Mt=async e=>await $({method:"get",url:e,withCredentials:!0}).then(i=>i.data).catch(i=>{throw i}),j=()=>{const e="https://swim.42seoul.io/api/users/info",{data:n,error:i}=N(e,Mt);return{isLogin:n,user:n&&n.result?n.user:null,isLoading:!i&&!n,isError:i}},It=e=>$.get(e,{withCredentials:!0}).then(n=>n.data),Z=()=>{const e=Fe.parse(location.search).id,{data:n,error:i,mutate:o}=N(`https://swim.42seoul.io/api/pages/detail/question?questionId=${e}`,It),l=(c,m,w,x)=>{if(n)if(x){let B=n.questionInfo.like_count;B=w?B-1:B+1,o({questionInfo:v(p({},n.questionInfo),{like_count:B,is_like:null})},!1),$.delete(`https://swim.42seoul.io/api/posts/question/like?questionId=${m}&questionUserId=${c}&isLike=${w}`,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>o())}else{let B=n.questionInfo.like_count;B=w?B+1:B-1,o({questionInfo:v(p({},n.questionInfo),{like_count:B,is_like:w})},!1),$.post("https://swim.42seoul.io/api/posts/question/like",{questionUserId:c,questionId:m,isLike:w},{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>{o()})}},s=(c,m,w,x)=>{if(x){let B=n.questionInfo.like_count;B=w?B-1:B+1;const y=n.questionInfo.answer.map(b=>(b.id===m&&(b.like_count=B,b.is_like=null),b));o({questionInfo:v(p({},n.questionInfo),{answer:y})},!1),$.delete(`https://swim.42seoul.io/api/posts/answer/like?answerId=${m}&answerUserId=${c}&isLike=${w}`,{withCredentials:!0}).catch(b=>{throw alert(b),b}).finally(()=>{o()})}else{let B=n.questionInfo.like_count;B=w?B+1:B-1;const y=n.questionInfo.answer.map(b=>(b.id===m&&(b.like_count=B,b.is_like=w),b));o({questionInfo:v(p({},n.questionInfo),{answer:y})},!1),$.post("https://swim.42seoul.io/api/posts/answer/like",{answerUserId:c,answerId:m,isLike:w},{withCredentials:!0}).catch(b=>{throw alert(b),b}).finally(()=>{o()})}},u=(c,m,w)=>{n&&$.post("https://swim.42seoul.io/api/posts/comment",{text:c,questionId:m,answerId:w},{withCredentials:!0}).catch(x=>{throw alert(x),x}).finally(()=>o())},C=(c,m,w,x)=>{if(n){const B="https://swim.42seoul.io/api/posts/comment",y=p({},n);x?y.questionInfo.answer=y.questionInfo.answer.map(b=>(b.id===x&&(b.comment=b.comment.map(H=>(H.id===m&&(H.text=c),H))),b)):y.questionInfo.answer=y.questionInfo.comment.map(b=>(b.id===m&&(b.text=c),b)),o(y,!1),$.patch(B,{text:c,commentId:m,questionId:w,answerId:x},{withCredentials:!0}).catch(b=>{throw alert(b),b}).finally(()=>o())}},h=(c,m,w)=>{if(n){const x=`https://swim.42seoul.io/api/posts/comment?commentId=${c}&questionId=${m}${w?`&answerId=${w}`:""}`,B=p({},n);w?B.questionInfo.answer=B.questionInfo.answer.map(y=>(y.id===w&&(y.comment=y.comment.filter(b=>b.id!==c)),y)):B.questionInfo.comment=B.questionInfo.comment.filter(y=>y.id!==c),o(B,!1),$.delete(x,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>o())}},d=(c,m,w,x)=>{if(n){const B=p({},n);B.questionInfo.answer.push({text:m,user:{nickname:w}}),o(B,!1),$.post("https://swim.42seoul.io/api/posts/answer",{questionId:c,text:m},{withCredentials:!0}).then(()=>x("")).catch(y=>{throw alert(y),y}).finally(()=>o())}},g=async(c,m,w)=>{try{const x=p({},n);x.is_solved=!0,x.questionInfo.answer=x.questionInfo.answer.map(y=>(y.id===m&&(y.is_solved=!0),y));const B="https://swim.42seoul.io/api/posts/answer/choice";o(x,!1),await $.post(B,{questionId:c,answerId:m,answerUserId:w},{withCredentials:!0}),o()}catch(x){throw alert(x),x}};return{question:n?n.questionInfo:null,answer:n?n.questionInfo.answer:null,isLoading:!i&&!n,isError:i,QuestionThumbPost:l,AnswerThumbPost:s,CommentPost:u,CommentEdit:C,CommentDelete:h,AnswerPost:d,ChoicePost:g}},S=(e,n=()=>!0)=>{const[i,o]=D.exports.useState(e),[l,s]=D.exports.useState(!0);return{value:i,onChange:h=>{const{target:{value:d}}=h;n(d)?o(d):s(!1)},onBlur:h=>{const d=h.target.innerText;n(d)?o(d):s(!1)},setValue:o,valid:l}},Tt={button:{primary:"#1896BD",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",lightprimary:"#a7deef"},a:{primary:"#1896BD",white:"#FFFFFF",red:"#FF5D39",black:"#000000",deepgray:"#C4C4C4"},background:{white:"#FFFFFF",lightgrey:"#F3F3F3"},text:{primary:"#1896BD",white:"#FFFFFF",yellow:"#FFB84D",red:"#FF5D39",black:"#000000",lightgrey:"#a6a6a6",grey:"#565656",deepgray:"#C4C4C4"},tag:{primary:"#1896BD"},primary:"#1896BD",lightprimary:"#a7deef",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",deepgray:"#C4C4C4",lightgrey:"#EAEAEA",black:"#000000",lightblack:"#545454",lightyelloew:"#FFDCA8"},A={color:Tt},Ht=f`
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
`,qt=r.span`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  ${Ht}
`,Pt=l=>{var s=l,{to:e,children:n,location:i}=s,o=k(s,["to","children","location"]);return t(oe,{to:e||i.pathname+i.search,children:t(qt,v(p({},o),{children:n}))})};var F=mt(Pt);const Wt=r.div`
  display: ${({visible:e})=>e?"":"none !important"};
  ${({width:e})=>e&&f`
      width: ${e};
    `}
  ${({height:e})=>e&&f`
      height: ${e};
    `};
`,V=o=>{var l=o,{children:e,visible:n=!0}=l,i=k(l,["children","visible"]);return t(Wt,v(p({visible:n},i),{children:e}))},jt=f`
  ${({isChecked:e})=>e==!0&&f`
      border: 3px solid ${A.color.primary};
      box-shadow: none;
    `}
`,Vt=r.div`
  width: 100%;
  /*height: 214px;*/
  /*display: flex;*/
  border-radius: 16px;
  background-color: white;
  padding: 50px 60px;
  padding-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
  ${jt};
`,pe=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Vt,v(p({},n),{children:e}))};function J(e){const n=new Date,i=new Date(e),o=Math.floor((n.getTime()-i.getTime())/1e3/60);if(o<1)return"\uBC29\uAE08\uC804";if(o<60)return`${o}\uBD84\uC804`;const l=Math.floor(o/60);if(l<24)return`${l}\uC2DC\uAC04\uC804`;const s=Math.floor(o/60/24);return s<365?`${s}\uC77C\uC804`:`${Math.floor(s/365)}\uB144\uC804`}const _t=r.p`
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
`,Rt=new Se.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[Me({pre:!0})]}),Te=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return a(z,{children:[t(_t,v(p({},n),{dangerouslySetInnerHTML:{__html:Rt.makeHtml(e)}})),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]})},Nt=f`
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
`,Zt=r.p`
  color: black;
  word-break: break-all;
  ${Nt}
`,E=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Zt,v(p({},n),{children:e}))};var Ut="/assets/cat0.7e5dd6fb.jpeg";const Ce={xsm:{size:"25px"},sm:{size:"40px"},lg:{size:"120px"}},Qt=f`
  ${({size:e})=>e&&f`
      width: ${Ce[e].size};
      height: ${Ce[e].size};
      background-size: ${Ce[e].size} auto;
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
          background-image: url(${Ut});
        `} */
`,ge=r.div`
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
  ${Qt}
`,He=r.div`
  display: flex;
  align-items: center;
`,qe=r(ge)`
  margin-right: 8px;
  flex-shrink: 0;
  ${({theme:e,border:n})=>n&&f`
      border: 2px solid ${e.color.primary};
    `}
`,Q=({nickname:e,size:n,photo:i,color:o,children:l,onMouseEnter:s,onMouseLeave:u,onClick:C,border:h})=>n==="sm"?a(He,{size:n,children:[t(qe,{size:"xsm",img:i||"",border:h}),t(E,{size:"14",color:"grey",children:e}),l]}):a(He,{onMouseEnter:s,onMouseLeave:u,onClick:C,size:n,children:[t(qe,{size:"sm",img:i||"",border:h}),t(E,{size:"18",weight:"bold",color:o,children:e}),l]}),Kt=r.div`
  display: block;
  white-space: normal;
`,Ot=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
`,Gt=l=>{var s=l,{created_at:e,user:n,text:i}=s,o=k(s,["created_at","user","text"]);const u=J(e);return a(Kt,v(p({},o),{children:[a(Ot,{children:[t(Q,v(p({},n),{size:"sm"})),t(E,{size:"14",color:"grey",children:u})]}),t(Te,{children:i})]}))},Jt=()=>a("svg",{width:"4",height:"20",viewBox:"0 0 4 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 10C1 10.5523 1.44772 11 2 11C2.55228 11 3 10.5523 3 10C3 9.44772 2.55228 9 2 9C1.44772 9 1 9.44772 1 10Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 18C1 18.5523 1.44772 19 2 19C2.55228 19 3 18.5523 3 18C3 17.4477 2.55228 17 2 17C1.44772 17 1 17.4477 1 18Z",stroke:"#565656",strokeWidth:"2"})]}),Xt=r.button`
  width: 24px;
  height: 24px;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`,Yt=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Xt,v(p({},n),{children:t(Jt,{children:e})}))},en=f`
  ${({width:e})=>e&&f`
      width: ${e};
    `}
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,tn=r.div`
  width: 988px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 10px 0px;

  ${en}
`,_=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(tn,v(p({},n),{children:e}))},Pe=r.div`
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
`,q=r.div`
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
`,We=r.div`
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
`,nn=r.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 2rem 0px;
`,on=r.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`,rn=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,sn=r.p`
  font-size: 16px;
  width: 80%;
  background-color: inherit;
  color: grey;
  outline: none;
  &:focus-visible {
    color: black;
  }
`,ln=r(_)`
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
`,an=r(q)`
  width: 100%;
  height: 100%;
`,je=r(F)`
  /*overflow: auto;*/
  display: block;
  width: 3rem;
  margin: 2rem 2rem 0 2rem;
  ${({theme:e})=>e&&f`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,un=r(V)`
  position: relative;
`,Ve=({created_at:e,questionId:n,answerId:i,user:o,text:l,userEmail:s,id:u})=>{const{CommentEdit:C,CommentDelete:h}=Z(),d=J(e),[g,c]=D.exports.useState(!1),[m,w]=D.exports.useState(!1),{value:x,setValue:B,onBlur:y}=S(l),b=D.exports.useRef(),H=async()=>{confirm("\uB313\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&h(u,n,i),c(!1)},K=()=>{w(!0),setTimeout(function(){b.current.focus()},1),c(!g)},te=async()=>{C(x,u,n,i),w(!1)};return a(nn,{children:[a(on,{children:[t(E,{weight:"bold",size:"14",children:o.nickname}),t(E,{size:"14",color:"grey",children:d})]}),a(rn,{children:[t(sn,{contentEditable:m,onBlur:y,ref:b,suppressContentEditableWarning:!0,children:x}),o.email===s?a(z,{children:[a(un,{visible:!m,children:[t(Yt,{onClick:()=>c(!g)}),t(ln,{show:g,children:a(an,{children:[t(je,{small:!0,onClick:K,children:"\uC218\uC815"}),t(je,{small:!0,onClick:H,children:"\uC0AD\uC81C"})]})})]}),a(V,{visible:m,children:[t(F,{fontcolor:"deepgray",onClick:()=>{B(l),w(!1)},style:{marginRight:"1rem"},children:"\uCDE8\uC18C"}),t(F,{onClick:te,children:"\uC644\uB8CC"})]})]}):null]})]},u)},cn=f`
  ${({border:e})=>e===!1&&f`
      border: none;
    `}
`,dn=r.input`
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
  ${cn}
`,P=n=>{var e=k(n,[]);return t(dn,p({},e))},hn=r.form`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,pn=r(P)`
  width: 80%;
  padding: 0px;
`,Cn=r(F)`
  white-space: nowrap;
  /*background-color: black;*/
`,_e=o=>{var l=o,{questionId:e,answerId:n}=l,i=k(l,["questionId","answerId"]);const{user:s,isLoading:u,isError:C}=j(),{CommentPost:h}=Z(),{value:d,onChange:g,setValue:c}=S("");if(u)return C?t("div",{children:"Err.."}):t("div",{children:"Load..."});{const m=w=>{w.preventDefault(),d?s?(h(d,e,n),c("")):alert("\uB313\uAE00 \uC791\uC131\uC744 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"):alert("\uB313\uAE00\uC6B8 \uC785\uB825\uD574\uC8FC\uC138\uC694")};return a(hn,v(p({onSubmit:m},i),{children:[t(pn,{placeholder:"\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694",value:d,border:!1,onChange:g}),t(Cn,{fontcolor:"primary",underline:!1,onClick:m,children:"\uB313\uAE00 \uC785\uB825"})]}))}},gn=r.div`
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
`,mn=new Se.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[Me({pre:!0})]}),re=l=>{var s=l,{value:e,setValue:n,placeHolder:i}=s,o=k(s,["value","setValue","placeHolder"]);const u=document.getElementsByClassName("mde-text")[0],[C,h]=D.exports.useState("write"),d=async function*(g){try{yield await new Promise(m=>{const w=new FormData,x=new File([g],"Image"),B="https://swim.42seoul.io/api/posts/image";w.append("imgFile",x),$.post(B,w,{withCredentials:!0}).then(y=>{var b;y.status===200&&m((b=y==null?void 0:y.data)==null?void 0:b.image)})})}catch(c){alert("\uC0AC\uC9C4 \uC804\uC1A1 \uC2E4\uD328"),yield"Error"}return!0};return a(gn,v(p({},o),{children:[t(ft,{classes:{},value:e,onChange:g=>{const c=(event==null?void 0:event.target.scrollHeight)+"px";n(g),u.style.height="auto",u.style.height=c},selectedTab:C,onTabChange:h,generateMarkdownPreview:g=>Promise.resolve(mn.makeHtml(g)),childProps:{writeButton:{tabIndex:-1},textArea:{placeholder:i}},paste:{saveImage:d}}),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]}))},fn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#1896BD"})}),xn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#545454"})}),wn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#C4C4C4"})}),bn=s=>{var u=s,{is_solved:e,isChosen:n,isChoosable:i,onClick:o}=u,l=k(u,["is_solved","isChosen","isChoosable","onClick"]);const[C,h]=D.exports.useState(!1);return e&&n?t(fn,p({},l)):!e&&i?t("button",v(p({onClick:o,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1)},l),{children:C?t(xn,{}):t(wn,{})})):t(z,{})},Bn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M35.625 28.125H43.125V5.625H35.625V28.125ZM28.125 5.625H11.25C9.69375 5.625 8.3625 6.5625 7.8 7.9125L2.1375 21.1313C1.96875 21.5625 1.875 22.0125 1.875 22.5V26.25C1.875 27.2446 2.27009 28.1984 2.97335 28.9016C3.67661 29.6049 4.63044 30 5.625 30H17.4563L15.675 38.5687C15.6375 38.7562 15.6187 38.9437 15.6187 39.15C15.6187 39.9375 15.9375 40.6313 16.4438 41.1375L18.4312 43.125L30.7687 30.7687C31.4625 30.0938 31.875 29.1562 31.875 28.125V9.375C31.875 8.38044 31.4799 7.42661 30.7766 6.72335C30.0734 6.02009 29.1196 5.625 28.125 5.625Z",fill:"#545454"})}),yn=()=>t("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M34.8333 27.5V5.5H42.1666V27.5H34.8333ZM27.5 5.5C28.4724 5.5 29.4051 5.88631 30.0927 6.57394C30.7803 7.26157 31.1666 8.19421 31.1666 9.16667V27.5C31.1666 28.5083 30.7633 29.425 30.085 30.085L18.0216 42.1667L16.0783 40.2233C15.5833 39.7283 15.2716 39.05 15.2716 38.28L15.3266 37.7117L17.0683 29.3333H5.49998C4.52752 29.3333 3.59489 28.947 2.90725 28.2594C2.21962 27.5718 1.83331 26.6391 1.83331 25.6667V22C1.83331 21.5233 1.92498 21.0833 2.08998 20.6617L7.62665 7.73667C8.17665 6.41667 9.47831 5.5 11 5.5H27.5ZM27.5 9.16667H10.945L5.49998 22V25.6667H21.5966L19.525 35.42L27.5 27.445V9.16667Z",fill:"#545454"})}),vn=r.button`
  background-color: inherit;
`,kn=i=>{var o=i,{active:e}=o,n=k(o,["active"]);return t(vn,v(p({},n),{children:e?t(Bn,{}):t(yn,{})}))},Dn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M43.125 18.75C43.125 17.7554 42.7299 16.8016 42.0266 16.0984C41.3234 15.3951 40.3696 15 39.375 15H27.525L29.325 6.43125C29.3625 6.24375 29.3813 6.0375 29.3813 5.83125C29.3813 5.0625 29.0625 4.35 28.5562 3.84375L26.5688 1.875L14.2313 14.2125C13.5375 14.9062 13.125 15.8438 13.125 16.875V35.625C13.125 36.6196 13.5201 37.5734 14.2233 38.2766C14.9266 38.9799 15.8804 39.375 16.875 39.375H33.75C35.3063 39.375 36.6375 38.4375 37.2 37.0875L42.8625 23.8687C43.0312 23.4375 43.125 22.9875 43.125 22.5V18.75ZM1.875 39.375H9.375V16.875H1.875V39.375Z",fill:"#545454"})}),$n=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M9.375 16.875V39.375H1.875V16.875H9.375ZM16.875 39.375C15.8804 39.375 14.9266 38.9799 14.2233 38.2766C13.5201 37.5734 13.125 36.6196 13.125 35.625V16.875C13.125 15.8438 13.5375 14.9062 14.2313 14.2313L26.5688 1.875L28.5562 3.8625C29.0625 4.36875 29.3813 5.0625 29.3813 5.83125L29.325 6.43125L27.5437 15H39.375C40.3696 15 41.3234 15.3951 42.0266 16.0984C42.7299 16.8016 43.125 17.7554 43.125 18.75V22.5C43.125 22.9875 43.0312 23.4375 42.8625 23.8687L37.2 37.0875C36.6375 38.4375 35.3063 39.375 33.75 39.375H16.875ZM16.875 35.625H33.8063L39.375 22.5V18.75H22.8937L25.0125 8.775L16.875 16.9312V35.625Z",fill:"#545454"})}),An=r.button`
  background-color: inherit;
`,En=o=>{var l=o,{active:e,onClick:n}=l,i=k(l,["active","onClick"]);return t(An,v(p({onClick:n},i),{children:e?t(Dn,{}):t($n,{})}))},Ln=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`,zn=r.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 16rem;
  margin-bottom: 2rem;
  width: 7rem;
`,me=d=>{var g=d,{like_count:e,is_solved:n,is_like:i,isChoosable:o,is_chosen:l,onUpClick:s,onDownClick:u,onChooseClick:C}=g,h=k(g,["like_count","is_solved","is_like","isChoosable","is_chosen","onUpClick","onDownClick","onChooseClick"]);return a(Ln,v(p({},h),{children:[a(zn,{children:[t(En,{onClick:s,active:i===!0}),t(E,{style:{whiteSpace:"nowrap"},color:"grey",size:"32",weight:"bold",children:e}),t(kn,{onClick:u,active:i===!1})]}),t(bn,{isChosen:l,isChoosable:o,onClick:C,is_solved:n})]}))},Fn=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;r(me)`
  width: 13rem;
  margin-right: 2rem;
`;const Sn=r(pe)`
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
`,Re=r(V)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,Mn=d=>{var g=d,{is_solved:e,like_count:n,is_like:i,is_chosen:o,isChoosable:l,comment:s,id:u,user:C}=g,h=k(g,["is_solved","like_count","is_like","is_chosen","isChoosable","comment","id","user"]);const{AnswerThumbPost:c,ChoicePost:m}=Z(),{user:w}=j(),[x,B]=D.exports.useState(!1),[y,b]=D.exports.useState(!1),{value:H,setValue:K}=S(h.text),te=!!w,st=Ie(),ne=new URLSearchParams(st.search).get("id"),De=T=>{if(!te)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");y===!1?(b(!0),i===T?c(C.id,u,T,!0):i===!T?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4!"):c(C.id,u,T,!1),setTimeout(()=>{b(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},lt=()=>{De(!0)},at=()=>{De(!1)},ut=()=>{confirm("\uD574\uB2F9 \uB2F5\uBCC0\uC744 \uCC44\uD0DD\uD558\uACA0\uC2B5\uB2C8\uAE4C? \uCC44\uD0DD \uD6C4\uC5D0\uB294 \uCDE8\uC18C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.")&&ne&&m(parseInt(ne),u,C.id)},ct=async()=>{const T="https://swim.42seoul.io/api/posts/answer",$e={questionId:ne,answerId:u,text:H};await $.patch(T,$e,{withCredentials:!0}).then(Wr=>{alert("\uB2F5\uBCC0 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),B(!1)},dt=async()=>{const T=`https://swim.42seoul.io/api/posts/answer?questionId=${ne}&answerId=${u}`;await $.delete(T,{withCredentials:!0}).then($e=>{alert("\uB2F5\uBCC0 \uC0AD\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),B(!1)},ht=s==null?void 0:s.map(T=>t(Ve,p({userEmail:w==null?void 0:w.email,answerId:u},T),T.id));return a(Fn,v(p({},h),{children:[t(me,{is_solved:e,is_chosen:o,like_count:n,is_like:i,isChoosable:l,onUpClick:lt,onDownClick:at,onChooseClick:ut}),t(V,{width:"100%",visible:!x,children:a(pe,{isChecked:o,children:[t(Gt,v(p({},h),{id:u,user:C})),a(Re,{visible:te?(C==null?void 0:C.email)===(w==null?void 0:w.email):!1,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>B(!0),children:"\uC218\uC815"}),t(F,{onClick:dt,fontcolor:"deepgray",small:!0,children:"\uC0AD\uC81C"})]}),ht,t(_e,{answerId:u})]})}),t(V,{width:"100%",height:"100%",visible:x,children:a(Sn,{children:[t(re,{value:H,setValue:K}),a(Re,{visible:!0,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>B(!1),children:"\uCDE8\uC18C"}),t(F,{onClick:ct,fontcolor:"primary",bold:!0,small:!0,children:"\uD655\uC778"})]})]})})]}))},se={sm:{height:"41px",fontSize:"16px"},lg:{width:"449px",height:"60px",fontSize:"18px"}},In=f`
  ${({theme:e,color:n})=>n&&f`
      background-color: ${e.color.button[n]};
      &:hover {
        background: ${ce(.1,e.color.button[n])};
      }
      &:active {
        background: ${de(.1,e.color.button[n])};
      }
    `}
  ${({theme:e,fontColor:n})=>n&&f`
      color: ${e.color.button[n]};
    `}
  ${({size:e})=>{var n,i;return e&&f`
      width: ${((n=se[e])==null?void 0:n.width)?(i=se[e])==null?void 0:i.width:"auto"};
      height: ${se[e].height};
      font-size: ${se[e].fontSize};
    `}}
  ${({shadow:e})=>e===!0&&f`
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
    `}
`,Tn=r.button`
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
    background: ${ce(.1,`${A.color.primary}`)};
    color: ${ce(.1,"white")};
  }
  &:active {
    background: ${de(.1,`${A.color.primary}`)};
  }
  ${In}
`,I=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Tn,v(p({},n),{children:e}))},Ne={bold:{background:"#000000",height:"3px"},light:{background:"#EAEAEA",height:"1px"}},Hn={horizontal:"rotate(0deg)",vertical:"rotate(90deg)"},qn=f`
  ${({weight:e})=>e&&f`
      background-color: ${Ne[e].background};
      height: ${Ne[e].height};
    `}
  ${({width:e})=>e&&f`
      width: ${e};
    `}
	${({direction:e})=>e&&f`
      transform: ${Hn[e]};
    `}
`,Pn=r.div`
  ${qn}
`,le=n=>{var e=k(n,[]);return t(Pn,p({},e))},Wn={h1:{size:"36px"},h2:{size:"24px"}},jn=f`
  ${({size:e})=>e&&f`
      font-size: ${Wn[e].size};
    `}
  ${({color:e})=>e&&f`
      color: ${e};
    `}
`,Vn=r.div`
  color: black;
  font-weight: 700;
  ${jn}
`,R=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Vn,v(p({},n),{children:e}))},_n=r(R)`
  margin-bottom: 3rem;
`,Rn=r.div`
  margin-left: 9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Nn=r.div`
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
`,Zn=()=>{const{value:e,setValue:n}=S(""),{question:i,isLoading:o,AnswerPost:l}=Z(),{user:s,isLoading:u}=j();if(!o&&!u)if(!!s){const h=s.nickname;return a(Rn,{children:[t(_n,{size:"h2",children:"\uB0B4 \uB2F5\uBCC0 \uB2EC\uAE30"}),t(le,{weight:"bold",width:"3rem",style:{marginBottom:"1.5rem"}}),t(re,{value:e,setValue:n,placeHolder:"\uB2F5\uBCC0\uC744 \uB2EC\uC544\uC8FC\uC138\uC694!"}),t(I,{onClick:async()=>{e?l(i.id,e,h,n):alert("\uB2F5\uBCC0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4")},size:"sm",fontColor:"white",children:"\uB2F5\uBCC0 \uC791\uC131\uD558\uAE30"})]})}else return t(Nn,{children:"\uB2F5\uBCC0\uC744 \uB0A8\uAE30\uAE30 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uC9C4\uD589\uD574\uC8FC\uC138\uC694!"});else return t("div",{children:".."})},Un=r.div`
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
`,Qn=r.button`
  margin-left: 1rem;
  background-color: inherit;
  cursor: pointer;
`,Kn=()=>a("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M8.5 1L1 8.5",stroke:"#dfdfdf",strokeWidth:"2"}),t("path",{d:"M8.5 8.5L1 1",stroke:"#dfdfdf",strokeWidth:"2"})]}),ae=l=>{var s=l,{name:e,isDel:n,onDelClick:i}=s,o=k(s,["name","isDel","onDelClick"]);return a(Un,v(p({},o),{name:e,children:[t(E,{size:"14",style:{wordBreak:"normal",color:"#ffffff"},children:e}),n?t(Qn,{onClick:()=>{i(e)},children:t(Kn,{})}):""]}))},On=r.div`
  display: block;
  white-space: normal;
`,Ze=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
  flex-wrap: wrap;
`,Gn=r.div`
  display: flex;
  flex-wrap: wrap;
`;r(E)`
  white-space: pre-line;
`;const Jn=({user:e,created_at:n,title:i,hashtag:o,text:l})=>{const s=J(n),u=o==null?void 0:o.map(C=>t(ae,{name:C.name},C.name));return a(On,{children:[a(Ze,{children:[t(R,{size:"h1",children:i}),t(E,{size:"14",color:"grey",children:s})]}),a(Ze,{children:[t(Q,v(p({},e),{size:"sm"})),t(Gn,{children:u})]}),t(Te,{children:l})]})},Xn=r.div`
  display: flex;
  justify-content: space-between;
`,Yn=r(V)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,ei=n=>{var e=k(n,[]);var g;const{question:i,isLoading:o,isError:l,QuestionThumbPost:s}=Z(),{user:u,isLoading:C}=j(),[h,d]=D.exports.useState(!1);if(!o&&!C){const c=!!u,m=b=>{if(!c)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");h===!1?(d(!0),b===i.is_like?s(i.user.id,i.id,b,!0):!b===i.is_like?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4."):s(i.user.id,i.id,b,!1),setTimeout(()=>{d(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},w=()=>{m(!0)},x=()=>{m(!1)},B=b=>{confirm("\uAC8C\uC2DC\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")?$.delete(`https://swim.42seoul.io/api/posts/question?questionId=${i.id}`,{withCredentials:!0}).then(()=>{location.href="/"}):b.preventDefault()},y=(g=i.comment)==null?void 0:g.map(b=>t(Ve,p({userEmail:u==null?void 0:u.email,questionId:i.id},b),b.id));return a(Xn,v(p({},e),{children:[t(me,{like_count:i.like_count,is_like:i.is_like,onUpClick:w,onDownClick:x}),a(pe,{children:[t(Jn,p({},i)),a(Yn,{visible:u?u.email===i.user.email:!1,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},to:`/edit?id=${Fe.parse(location.search).id}`,children:"\uC218\uC815"}),t(F,{fontcolor:"deepgray",small:!0,onClick:B,children:"\uC0AD\uC81C"})]}),y,t(_e,{questionId:i.id})]})]}))}else return l?t("div",{children:"Err..."}):t("div",{children:"loading..."})},ti=()=>a(q,{style:{width:"100%",height:"248px",background:"#646464",marginTop:"15rem",padding:"0 2rem",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",bottom:"0px"},children:[a(Pe,{style:{alignItems:"flex-end",width:"380px",marginBottom:"1rem"},children:[t(R,{size:"h2",color:"white",children:"42Code"}),t(E,{size:"14",color:"white",weight:"bold",children:"made by ji-park & yejeong & nkim & iha"})]}),t(E,{size:"14",color:"white",children:"Copyright \xA9 2019 - 2021 42Seoul inno. All rights reserved."})]});function ni(){return a("svg",{width:"164",height:"42",viewBox:"0 0 164 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M0 18.2779C0 15.9614 2.53908 14.4657 4.61913 15.4853C9.70397 17.9779 18.0287 21.4939 24.6 21.5351C34.9803 21.6001 39.3328 13.1729 49.7125 13.0496C60.4712 12.9218 65.0907 21.5978 75.85 21.5351C86.4196 21.4734 90.927 13.7098 101.475 13.0496C114.508 12.2339 120.704 21.7509 133.762 21.5351C142.317 21.3936 153.618 17.3358 159.693 14.8836C161.723 14.0642 164 15.5485 164 17.7378V39C164 40.6569 162.657 42 161 42H3C1.34314 42 0 40.6569 0 39V18.2779Z",fill:"#3EC2EC",fillOpacity:"0.5"}),t("path",{d:"M34.8217 0.000244141H25.5478L7 18.6163V26.2429H25.6532V35.5641H34.8744V18.6163H16.3003L34.8217 0.000244141Z",fill:"black"}),t("path",{d:"M122.512 27.8744V0H115.784V27.8744H122.512Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M92.8264 0L95.1288 17.1891L97.4651 0H98.4824H100.405H105.322L107.624 17.1891L109.961 0H112.9L109.111 27.8744H109.055H106.172H102.216L99.4365 7.12348L96.616 27.8744H96.56H93.6764H89.7205L85.9869 0H92.8264Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M132.386 27.8744L134.688 10.6853L137.025 27.8744H138.042H139.964H144.881L147.184 10.6854L149.52 27.8744H152.46L148.671 0H148.615H145.731H141.775L138.996 20.751L136.175 0H136.119H133.236H129.28L125.546 27.8744H132.386Z",fill:"black"}),t("path",{d:"M39.6803 9.61187V0H48.331L39.6803 9.61187Z",fill:"black"}),t("path",{d:"M83.1034 9.61187V0H74.4527L83.1034 9.61187Z",fill:"black"}),t("path",{d:"M57.9429 19.2237L57.9429 27.8744L48.331 27.8744L57.9429 19.2237Z",fill:"black"}),t("path",{d:"M64.8408 19.2233L64.8408 27.874L74.4527 27.874L64.8408 19.2233Z",fill:"black"}),t("path",{d:"M48.8511 9.25621V0H57.9823V9.25621L48.8511 18.6182V27.8744H39.7198V18.6182L48.8511 9.25621Z",fill:"black"}),t("path",{d:"M73.4915 9.25621V0H63.8797V9.25621L73.4915 18.6182V27.8744H83.1034V18.6182L73.4915 9.25621Z",fill:"black"})]})}var ii="/assets/422.bd7f157a.png";const oi=r.div`
  display: ${({visible:e})=>e?"flex":"none"};
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;

  /* display: flex; */
  justify-content: space-around;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`,ri=xt`
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
`,si=r.div`
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

  animation-name: ${ri};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`,li=r.div`
  /* position: fixed; */
  z-index: 1000;

  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${ii});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 55px 55px;
  background-color: white;
`,Ue=({visible:e})=>t(z,{children:a(oi,{visible:e,children:[t(si,{}),t(li,{})]})}),ai=e=>{const[n,i]=D.exports.useState(!1);return a("svg",v(p({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",style:{margin:"0 0.5rem"},onMouseEnter:s=>{i(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",fill:n?A.color.lightblack:A.color.black})]}))},ui=r(We)``,ci=r(_)`
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
`,di=r(q)`
  width: 100%;
  height: 100%;
`,Qe=r(F)`
  display: block;
  width: 100%;
  margin: 2rem 2rem 0 2rem;

  ${({theme:e})=>e&&f`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,hi=({user:e})=>{const[n,i]=D.exports.useState(!1),[o,l]=D.exports.useState(!1),s=d=>{l(!0),d.target.style.cursor="pointer",d.stopPropagation()},u=()=>{l(!1)},C=()=>{i(!n)},h=async()=>{await $.get("https://swim.42seoul.io/api/auth/logout",{withCredentials:!0}),location.reload()};return a(ui,{children:[t(Q,{size:"lg",photo:e==null?void 0:e.image,nickname:(e==null?void 0:e.nickname)?e==null?void 0:e.nickname:"\uC815\uBCF4\uC5C6\uC74C",onMouseEnter:s,onMouseLeave:u,onClick:C,color:o?"grey":"black",children:t(ai,{onClick:()=>{}})}),t(ci,{show:n,tabIndex:0,onFocus:()=>i(!0),children:a(di,{children:[t(Qe,{to:"/setting",children:"\uC124\uC815"}),t(Qe,{onClick:h,children:"\uB85C\uADF8\uC544\uC6C3"})]})})]})},pi=f`
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,Ci=r.div`
  width: 533px;
  height: 644px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;

  ${pi}
`,gi=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Ci,v(p({},n),{children:e}))},mi=()=>a("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 1L16.5 16.5",stroke:"#121212",strokeWidth:"2"}),t("path",{d:"M16.5 1L0.999999 16.5",stroke:"#121212",strokeWidth:"2"})]}),fi=r.span`
  float: right;
  &:hover,
  &:focus {
    cursor: pointer;
    color: red;
  }
`,xi=r(R)`
  margin-top: 75px;
`,wi=r.div`
  font-weight: 500;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 38px;
  font-style: normal;
`,Ke=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,Oe=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&f`
      height: ${e};
    `}
`,bi=r.div`
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
`,fe=u=>{var C=u,{children:e,onClose:n,visible:i,title:o,subtitle:l}=C,s=k(C,["children","onClose","visible","title","subtitle"]);return t(bi,{visible:i,children:a(gi,v(p({},s),{children:[t(fi,{onClick:n,children:t(mi,{})}),t(xi,{size:"h1",children:o}),t(wi,{children:l}),e]}))})};fe.defaultProps={visible:!0};const Bi=o=>{var l=o,{onClose:e,onRegist:n}=l,i=k(l,["onClose","onRegist"]);const[s,u]=D.exports.useState({email:"",password:""}),{email:C,password:h}=s,[d,g]=D.exports.useState(!1),c=async()=>{try{(await $.post("https://swim.42seoul.io/api/auth/login",s,{withCredentials:!0})).status===200?(he("https://swim.42seoul.io/api/users/info"),e(!1)):alert("\uB85C\uADF8\uC778 \uC2E4\uD328!")}catch(x){alert("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638 \uC624\uB958")}u({email:"",password:""})},m=x=>{const{name:B,value:y}=x.target;u(v(p({},s),{[B]:y}))},w=()=>{location.href="https://localhost:5000/auth/42login",e(!1),g(!0)};return a(z,{children:[t(Ue,{visible:d}),t(fe,v(p({onClose:()=>e(!1),title:"\uB85C\uADF8\uC778",subtitle:"\uC774\uBA54\uC77C\uB85C \uB85C\uADF8\uC778"},i),{children:a(Ke,{height:"392px",children:[a(Oe,{height:"265px",children:[t(P,{name:"email",value:C,onChange:m,placeholder:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"}),t(P,{name:"password",value:h,type:"password",onChange:m,placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"}),t(I,{onClick:c,size:"lg",children:"\uB85C\uADF8\uC778"}),t(F,{onClick:w,fontcolor:"primary",underline:!0,children:"42seoul \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"})]}),t(F,{onClick:()=>{n(!0),e(!1)},fontcolor:"black",children:"\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?"})]})}))]})},yi=i=>{var o=i,{onClose:e}=o,n=k(o,["onClose"]);const[l,s]=D.exports.useState({nickname:"",email:"",password:"",confirm_pass:""}),{nickname:u,email:C,password:h,confirm_pass:d}=l,g=w=>{const{name:x,value:B}=w.target;if(s(v(p({},l),{[x]:B})),x==="confirm_pass"&&h!==""){const y=document.getElementById("diffpass");y.style.display="inherit",h===d?(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",y.style.color="blue"):(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",y.style.color="red")}},c=w=>{if(w.target.name==="confirm_pass"&&h!==""){const x=document.getElementById("diffpass");x.style.display="inherit",h===d?(x.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",x.style.color="blue"):(x.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",x.style.color="red")}},m=async()=>{const w=await $.post("https://swim.42seoul.io/api/auth/signup",l,{withCredentials:!0});s({nickname:"",email:"",password:"",confirm_pass:""}),w.data.result===!0&&e(!1),location.reload()};return t(fe,v(p({title:"\uD68C\uC6D0\uAC00\uC785",subtitle:"\uC774\uBA54\uC77C\uB85C \uD68C\uC6D0\uAC00\uC785",height:"712px",onClose:()=>e(!1)},n),{children:a(Ke,{height:"420px",children:[a(Oe,{height:"300px",children:[t(P,{name:"nickname",value:u,onChange:g,placeholder:"\uB2C9\uB124\uC784"}),t(P,{name:"email",value:C,onChange:g,placeholder:"\uC774\uBA54\uC77C"}),t(P,{name:"password",value:h,type:"password",onChange:g,placeholder:"\uBE44\uBC00\uBC88\uD638"}),t(P,{name:"confirm_pass",value:d,type:"password",onChange:g,onKeyUp:c,onBlur:c,placeholder:"\uBE44\uBC00\uBC88\uD638 \uD655\uC778"}),t(E,{size:"14",id:"diffpass",style:{width:"449px",marginLeft:"2rem",display:"none"},children:"HiddenBox"})]}),t(I,{onClick:m,size:"lg",children:"\uD68C\uC6D0\uAC00\uC785"})]})}))},vi=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${A.color.background.grey};
  height: 130px;
  width: 100%;

  margin-bottom: 3rem;
`,ki=r.div``,Di=r.div``,$i=r.button`
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
`,Ai=r(R)`
  margin-bottom: 7px;
`,Ei=()=>{const[e,n]=D.exports.useState(!1),[i,o]=D.exports.useState(!1),{user:l,isLoading:s,isError:u}=j(),[C,h]=D.exports.useState(!1);return D.exports.useEffect(()=>{he("https://swim.42seoul.io/api/users/info")},[]),a(z,{children:[t(Ue,{visible:C}),t(Bi,{onRegist:o,visible:e,onClose:n}),t(yi,{visible:i,onClose:o}),a(vi,{children:[a(ki,{children:[t(oe,{to:"/",children:t(Ai,{size:"h1",children:t(ni,{})})}),t(E,{size:"14",color:"lightgrey",children:"42seoul"})]}),l&&!s?t(hi,{user:l}):t(Di,{children:t($i,{onClick:()=>{location.href="https://swim.42seoul.io/api/auth/42login",h(!0),setTimeout(()=>{h(!1)},3e4)},children:"42 \uB85C\uADF8\uC778"})})]})]})},Li=r.div`
  width: 100%;
  height: 100%;

  > * {
    padding: 0 20rem;

    @media (max-width: 1023px) {
      padding: 0 3rem;
    }
  }
`,zi=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`,U=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return a(Li,{children:[t(Ei,{}),t(zi,v(p({},n),{children:e})),t(ti,{})]})},Fi=r.div`
  margin-bottom: 7rem;
`;r.div`
  margin-bottom: 4rem;
`;const Si=l=>{var s=l,{question:e,answer:n,answerWriting:i}=s,o=k(s,["question","answer","answerWriting"]);return a("div",v(p({},o),{children:[t(Fi,{children:e}),n,i]}))},Mi=n=>{var e=k(n,[]);const{question:i,answer:o,isLoading:l,isError:s}=Z(),{user:u,isLoading:C}=j();let h;return!l&&!C&&(h=o==null?void 0:o.map(d=>t(Mn,p({isChoosable:u?i.user.email===u.email:!1,is_solved:i.is_solved},d),d.id))),s?t(z,{children:"err"}):t(U,v(p({},e),{children:t(Si,{question:t(ei,{}),answer:h,answerWriting:t(Zn,{})})}))},Ii=r.input`
  width: 100%;
  font-size: 18px;
  background-color: inherit;
  margin: 3rem 0rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`,Ti=r.div``,Hi=r.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  left: -1rem;
`,Ge=C=>{var h=C,{value:e,inputChange:n,setValue:i,tag:o,setTag:l,placeholder:s}=h,u=k(h,["value","inputChange","setValue","tag","setTag","placeholder"]);const d=document.getElementsByClassName("tagMsgEl")[0],g=document.getElementsByClassName("tagInput")[0],c=new RegExp(/^[a-z0-9+#_]+$/),m=()=>{const b=[...o];e&&!o.includes(e)&&b.push(e),i(""),l(b),g.style.color="black"},w=b=>{b.preventDefault(),n(b),b.target.value&&c.test(b.target.value)&&(d.style.display="none",g.style.color="black")},x=b=>{(b.code==="Enter"||b.code==="Space")&&(b.preventDefault(),c.test(e)?m():(d.style.display="block",g.style.color="red"))},B=b=>{const H=o.filter(K=>K!==b);l(H)},y=o==null?void 0:o.map(b=>t(ae,{name:b,onDelClick:B,isDel:!0},b));return a(Ti,v(p({},u),{children:[t(Hi,{children:y}),t(Ii,{value:e,className:"tagInput",onChange:w,onBlur:m,onKeyPress:x,placeholder:s}),t(E,{className:"tagMsgEl",size:"12",color:"red",style:{position:"relative",top:"-2.5rem",display:"none"},children:"\uC798\uBABB\uB41C \uD0DC\uADF8 \uD615\uC2DD\uC785\uB2C8\uB2E4. \uC601\uC5B4\uC18C\uBB38\uC790\uC640 \uD2B9\uC218\uBB38\uC790 #+_ \uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. ex)ft_pintf"})]}))},Je=r.input`
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
`,qi=r.div`
  width: 100%;
  height: 100%;
`,Pi=r(Je)`
  width: 100%;
  margin-bottom: 20px;
`,Wi=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,ji=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,Vi=()=>{const{question:e,isLoading:n,isError:i}=Z(),o=g=>/^[\w]*$/g.test(g)&&g.length<20,l=g=>g.length<40,s=S("",o),u=S("",l),C=S(""),[h,d]=D.exports.useState([]);if(D.exports.useEffect(()=>{const g=e==null?void 0:e.hashtag.map(c=>c.name);d(g),u.setValue(e?e.title:""),C.setValue(e?e.text:"")},[]),!n&&!i){const g=async c=>{if(c.preventDefault(),!u.value||!C.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{(await $.patch("https://swim.42seoul.io/api/posts/question",{questionId:e.id,title:u.value,hashtag:h,text:C.value},{withCredentials:!0})).status===200?(alert("\uC9C8\uBB38 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${e.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(m){alert(m)}};return a(qi,{children:[t(Pi,{value:u.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:u.onChange}),t(Ge,{inputChange:s.onChange,value:s.value,setValue:s.setValue,tag:h,setTag:d,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(le,{weight:"bold",width:"4rem"}),a(Wi,{children:[t(re,{value:C.value,setValue:C.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),a(ji,{children:[t(F,{fontcolor:"deepgray",style:{fontSize:"16px",marginRight:"2rem"},to:`/detail?id=${e.id}`,children:"\uCDE8\uC18C"}),t(I,{size:"sm",onClick:g,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})]})}else return i?t("div",{children:"err.."}):t("div",{children:"loading"})},_i=n=>{var e=k(n,[]);return t(U,v(p({},e),{children:t(Vi,{})}))},Ri=e=>a("svg",v(p({width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{children:[t("circle",{cx:"8",cy:"8",r:"6.5",stroke:"black",strokeWidth:"3"}),t("path",{d:"M13.5 13L19 18.5",stroke:"black",strokeWidth:"3"})]})),Ni=r.div`
  width: 60%;
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
  @media (max-width: 767px) {
    width: 80%;
  }
`,Zi=r(P)`
  /* width: 500px; */
  height: 41px;
  border-radius: 20px 0 0 20px;
`,Ui=r.button`
  width: 44px;
  height: 41px;
  float: right;
  border-radius: 0 20px 20px 0;
  background: white;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`,xe=l=>{var s=l,{onChange:e,onSearch:n,search:i}=s,o=k(s,["onChange","onSearch","search"]);const[u,C]=D.exports.useState(!1),h={border:`1px solid ${A.color.primary}`},d=g=>{g.key==="Enter"&&n()};return t(z,{children:a(Ni,v(p({style:u?h:{}},o),{children:[t(Zi,{placeholder:"\uAC80\uC0C9\uD560 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694",value:i,border:!1,onKeyPress:d,onChange:e,onFocus:()=>C(!0),onBlur:()=>C(!1)}),t(Ui,{onClick:n,children:t(Ri,{})})]}))})},Qi=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,Ki=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Oi=r(_)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Xe=r(L)`
  width: 100%;
  height: 182.46px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${({size:e})=>e==="sm"&&f`
      width: 100%;
      height: 150px;
      padding: 1rem 1rem;
    `}
`,Ye=r(q)`
  width: 76%;
  height: 90%;
  align-items: flex-start;

  ${({size:e})=>e==="sm"&&f`
      width: 100%;
    `}
`,et=r(R)`
  &:hover,
  &:focus {
    ${({theme:e})=>e&&f`
        color: ${e.color.lightblack};
        cursor: pointer;
      `};
  }
`,Gi=r(E)`
  overflow: hidden;
  white-space: wrap;
  font-weight: 100;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  max-height: 50px;
  line-height: 25px;
`,Ji=r(L)`
  width: 100%;
`,tt=r(E)``,we=r(L)`
  width: 100%;
`,nt=r(L)`
  width: 17rem;
  height: 100%;
  padding: 0 1rem;
  ${({size:e})=>e==="sm"&&f`
      justify-content: flex-start;
      padding: 0;

      > p {
        margin-right: 1rem;
      }
    `}
`,be=r(E)``;r(q)`
  width: 10%;
  height: 100%;
`;const Be=l=>{var s=l,{name:e,count:n,color:i}=s,o=k(s,["name","count","color"]);return a(We,v(p({width:"40px",height:"60px"},o),{children:[t(E,{weight:"bold",size:"18",color:i,children:e}),t(E,{weight:"bold",size:"18",color:i,children:n})]}))},Xi=m=>{var w=m,{id:e,title:n,text:i,is_solved:o,photo:l,nickname:s,answer_cnt:u=1,like_count:C,view_count:h,created_at:d,hashtag:g}=w,c=k(w,["id","title","text","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);i=i.replace(/^\s*`{3}\w*/gm,"").replace(/[`#*~_>]/g,"").replace(/^!\[[\w.]*\]\([\w.:/-]+\)/gi,""),g.length>5&&(g=g.slice(0,3),g.push({name:"..."}));const x=()=>{const B="https://swim.42seoul.io/api/pages/question/viewCount";$.post(B,{questionId:e},{withCredentials:!0})};return a(Xe,v(p({},c),{children:[a(Ye,{size:"lg",children:[t(oe,{to:`/detail?id=${e}`,onClick:x,children:t(et,{size:"h2",children:n})}),t(Gi,{size:"18",weight:"normal",color:"grey",children:i}),a(we,{children:[a(L,{children:[t(tt,{size:"14",weight:"normal",color:"grey",children:J(d)}),g.map((B,y)=>t(ae,{name:B==null?void 0:B.name,style:{marginTop:"0px"}},y))]}),t(Q,{size:"sm",photo:l,nickname:s,id:0})]})]}),a(nt,{children:[t(Be,{name:"\uB2F5\uBCC0",count:u,color:o?"primary":"black"}),t(Be,{name:"\uCD94\uCC9C",count:C}),t(Be,{name:"\uC870\uD68C",count:h})]})]}))},Yi=c=>{var m=c,{id:e,title:n,is_solved:i,photo:o,nickname:l,answer_cnt:s=1,like_count:u,view_count:C,created_at:h,hashtag:d}=m,g=k(m,["id","title","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);d.length>2&&(d=d.slice(0,2),d.push({name:"..."}));const w=()=>{const x="https://swim.42seoul.io/api/pages/question/viewCount";$.post(x,{questionId:e},{withCredentials:!0})};return t(Xe,v(p({size:"sm"},g),{children:a(Ye,{size:"sm",children:[t(oe,{to:`/detail?id=${e}`,onClick:w,children:t(et,{size:"h2",children:n})}),t(we,{children:a(L,{children:[t(tt,{size:"14",weight:"normal",color:"grey",children:J(h)}),d.map((x,B)=>t(ae,{name:x==null?void 0:x.name,style:{marginTop:"0px"}},B))]})}),t(we,{children:a(Ji,{children:[a(nt,{size:"sm",children:[a(be,{size:"14",weight:"normal",color:i?"primary":"black",children:["\uB2F5\uBCC0 ",s]}),a(be,{size:"14",weight:"normal",color:"black",children:["\uCD94\uCC9C ",u]}),a(be,{size:"14",weight:"normal",color:"black",children:["\uC870\uD68C ",C]})]}),t(Q,{size:"sm",photo:o,nickname:l,id:0})]})})]})}))},ye=n=>{var e=k(n,[]);return a(z,{children:[t(O,{minWidth:1224,children:t(Xi,p({},e))}),t(O,{maxWidth:1224,children:t(Yi,p({},e))})]})},eo=e=>{const[n,i]=D.exports.useState(!1);return t("svg",v(p({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginLeft:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:s=>{i(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:t("path",{d:"M1.225 23.5507C1.8375 24.1532 2.825 24.1532 3.4375 23.5507L13.825 13.332C14.3125 12.8524 14.3125 12.0777 13.825 11.5982L3.4375 1.37952C2.825 0.776976 1.8375 0.776976 1.225 1.37952C0.612503 1.98206 0.612503 2.95351 1.225 3.55605L10.275 12.4712L1.2125 21.3864C0.612503 21.9767 0.612503 22.9604 1.225 23.5507Z",fill:n?A.color.lightblack:A.color.black})}))},to=e=>{const[n,i]=D.exports.useState(!1);return t("svg",v(p({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginRight:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:s=>{i(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:t("path",{d:"M13.775 1.39185C13.1625 0.789306 12.175 0.789306 11.5625 1.39185L1.17501 11.6105C0.687512 12.0901 0.687512 12.8648 1.17501 13.3443L11.5625 23.563C12.175 24.1655 13.1625 24.1655 13.775 23.563C14.3875 22.9604 14.3875 21.989 13.775 21.3865L4.72501 12.4713L13.7875 3.55609C14.3875 2.96584 14.3875 1.9821 13.775 1.39185Z",fill:n?A.color.lightblack:A.color.black})}))},no=r.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`,io=l=>{var s=l,{number:e,active:n,onClick:i}=s,o=k(s,["number","active","onClick"]);const[u,C]=D.exports.useState(!1),h=c=>{C(!0),c.target.style.color=A.color.lightblack,c.stopPropagation()},d=c=>{C(!1),c.target.style.color=A.color.black},g={display:"flex",justifyContent:"space-around",alignItems:"center"};return t(ge,v(p({onClick:i,size:"sm",color:n?A.color.primary:A.color.white,style:g,onMouseEnter:h,onMouseLeave:d},o),{children:e}))};function oo(e,n){const i=10*(n.current-1)+1;let o;return e<=10?o=e:i+9>=e?o=e-i+1:o=10,Array(o).fill(i).map((l,s)=>l+s)}function ro(e,n){let i=parseInt(n/e);return n%e==0&&(i=i-1),i+1}const ue=s=>{var u=s,{page:e=1,limit:n=8,onPage:i,questionCount:o=10}=u,l=k(u,["page","limit","onPage","questionCount"]);const C=ro(n,o),h=D.exports.useRef(1),d=()=>{if(e===1){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==1&&(h.current-=1),i(e-1)},g=()=>{if(e===C){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==0&&(h.current+=1),i(e+1)};return a(no,v(p({},l),{children:[t(to,{onClick:d}),t(L,{children:oo(C,h).map(c=>t(io,{number:c,onClick:()=>i(c),active:e===c},c))}),t(eo,{onClick:g})]}))},so=r.ul`
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
`,lo=r.li`
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
`,M=l=>{var s=l,{active:e,children:n,onTabClick:i}=s,o=k(s,["active","children","onTabClick"]);return t(lo,v(p({style:e?{color:"black",transition:"color 0.5s ease"}:void 0,onClick:i},o),{children:n}))},X=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(so,v(p({},n),{children:e}))};X.Item=M;const ao=async e=>{const n=await $.get(e).catch(i=>{throw wt(i),Error()});return n==null?void 0:n.data},uo=(e,n)=>{const i=e===0?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:e===1?`https://swim.42seoul.io/api/pages/list/question/like?pageNumber=${n}`:e===2?`https://swim.42seoul.io/api/pages/list/question/unsolved?pageNumber=${n}`:e===3?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:"",{data:o,error:l}=N(i,ao);return{question:o,isLoading:!l&&!o,isError:l}},ve=r.div`
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
`,co=async e=>(await $.get(e)).data;function ho(e){const n=`https://swim.42seoul.io/api/hashtags/count?pageNumber=${e}`,{data:i,error:o}=N(n,co);return{tagList:i&&i.hashtag,isLoading:!o&&!i,isError:o}}const po=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 8rem;

  margin-right: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Co=r.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${A.color.text.primary};
  -webkit-transition: color 0.2s;
  -moz-transition: color 0.2s;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: ${de(.1,A.color.text.primary)};
  }
`,go=r.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${A.color.text.grey};

  margin-top: 12px;
`;function mo(l){var s=l,{name:e,questionCount:n,onClick:i}=s,o=k(s,["name","questionCount","onClick"]);return a(po,v(p({},o),{children:[t(Co,{onClick:i,children:e}),a(go,{children:["\uC9C8\uBB38 ",n,"\uAC1C"]})]}))}const fo=r(_)`
  width: 100%;
  padding: 1.5rem 2.5rem;
`,xo=r.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  margin-top: 1.5rem;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,wo=r.ul`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;function bo(n){var e=k(n,[]);const[i,o]=D.exports.useState(1),{tagList:l,isLoading:s}=ho(i),u=bt();if(s)return t("div",{children:"loading"});{const C=l==null?void 0:l.hashTagList.map(h=>t(mo,p({onClick:()=>{u.push({pathname:`/tag/${h.name}`,state:{hashtagId:h.id,hashtagName:h.name}})}},h),h.id));return a(fo,v(p({},e),{children:[a(xo,{children:["\uBAA8\uB4E0 \uD0DC\uADF8 (",l==null?void 0:l.hashTagListCount,")\uAC1C"]}),t(wo,{children:C}),t(q,{height:"115px",children:t(ue,{limit:30,questionCount:l==null?void 0:l.hashTagListCount,page:i,onPage:o})})]}))}}const Bo=n=>{var e=k(n,[]);const[i,o]=D.exports.useState(0),[l,s]=D.exports.useState(1),{question:u,isLoading:C,isError:h}=uo(i,l);return h?t("div",{children:"Error!!"}):a(Qi,{children:[a(X,v(p({},e),{children:[t(M,{active:i===0,onTabClick:()=>o(0),children:"\uCD5C\uC2E0\uC21C"}),t(M,{active:i===1,onTabClick:()=>o(1),children:"\uC778\uAE30\uC21C"}),t(M,{active:i===2,onTabClick:()=>o(2),children:"\uB2F5\uBCC0\uD544\uC694"}),t(M,{active:i===3,onTabClick:()=>o(3),children:"\uD0DC\uADF8"})]})),i===3?t(bo,{}):a(Oi,{children:[C?[...Array(8)].map((d,g)=>t(Ki,{children:t(ve,{})},g)):(u==null?void 0:u.questionList)&&(u==null?void 0:u.questionList.map((d,g)=>{var c;return t(ye,p({id:d.id,title:d.title,text:d.text,photo:d.user.photo,nickname:(c=d==null?void 0:d.user)==null?void 0:c.nickname,is_solved:d.is_solved,answer_cnt:d.answer_count,like_count:d.like_count,view_count:d.view_count,hashtag:d.hashtag,created_at:d.created_at},e),g)})),t(q,{height:"115px",children:t(ue,{questionCount:u==null?void 0:u.questionCount,page:l,onPage:s})})]})]})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const yo=r(L)`
  width: 100%;
  margin-bottom: 3rem;
`,vo=r(L)`
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
`;const ko=({panel:e,content1:n,content2:i})=>a(z,{children:[t(yo,{children:e}),a(vo,{children:[n,i]})]}),Do=r.div`
  width: 28%;
  position: relative;
  @media (max-width: 910px) {
    display: none;
    background-color: pink;
  }
`,$o=r(_)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 2.5rem;
  padding-bottom: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
`,Ao=r(L)``,Eo=r.span`
  ${({theme:e})=>e&&f`
      background-color: ${e.color.primary};
    `}
  position: absolute;
  width: 130px;
  height: 15px;
  top: 75px;
  opacity: 30%;
  z-index: 0;
`,Lo=r.div`
  margin: 1.5rem 0;
  margin-bottom: 2rem;
`,zo=r.div`
  height: 12px;
  width: 0.5px;
  margin: 0 1rem;
  ${({theme:e})=>f`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,Fo=r.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  * & * {
    margin-right: 1.5rem;
  }
`,So=r.div`
  /* z-index: 100; */
`,Mo=({onHover:e})=>{const[n,i]=D.exports.useState(!1),o=D.exports.useRef(null),l=u=>{if(u.type=="click")e(!n),i(!n);else if(u.type=="mouseleave"){if(n)return;e(!1)}},s=u=>{u.target.style.cursor="pointer",e(!0)};return a("svg",{ref:o,xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:n?`${A.color.lightprimary}`:"black",onClick:l,onMouseEnter:s,onMouseLeave:l,children:[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})]})},Io=async e=>(await $.get(e)).data,To=()=>{const e="https://swim.42seoul.io/api/users/ranking",{data:n,error:i}=N(e,Io),o=n==null?void 0:n.monthRankerInfo.filter(s=>s.id!=null),l=n==null?void 0:n.totalRankerInfo.filter(s=>s.id!=null);return{ranking:{month:o,total:l},isLoading:!i&&!n,isError:i}},Ho=r(_)`
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
`,qo=r.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
`;r.span`
  height: 100%;
  width: 100%;
`;const Y=r.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
  height: 30px;
  padding-bottom: 2px;
  margin-top: 1.5rem;
  border-bottom: 1px solid rgba(75, 131, 182, 0.8);
`,Po=r.div`
  font-size: 10px;
  font-weight: 500;
  color: white;
  line-height: 2rem;
  padding-bottom: 2px;
  margin-top: 2rem;
  /* border-bottom: 1px solid rgba(75, 131, 182, 0.8); */
`,Wo=r.a`
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
`,jo=({visible:e=!1})=>a(Ho,{visible:e,children:[a(qo,{children:["\uC810\uC218\uC0B0\uC815 \uAE30\uC900",t("span",{style:{fontSize:"40px",marginLeft:"1rem"},role:"img","aria-label":"swim",children:"\u{1F3CA}"})]}),t(Y,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(Y,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC758 \uB2F5\uBCC0 \uC911 \uD558\uB098\uB97C \uCC44\uD0DD"}),t(Y,{children:"+10 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(Y,{children:"+15 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC774 \uCC44\uD0DD"}),t(Y,{children:"-1 \uC810 : \uB2E4\uB978 \uC0AC\uB78C\uC758 \uC9C8\uBB38/\uB2F5\uBCC0\uC5D0 \uC2EB\uC5B4\uC694\uB97C \uB2EE"}),a(Po,{children:["\uB108\uBB34 \uC131\uC758\uC5C6\uAC8C \uC801\uD600\uC9C4 \uAE00\uB4E4\uC740 \uD1B5\uBCF4\uC5C6\uC774 \uC0AD\uC81C\uB418\uBA70, \uC774\uBCA4\uD2B8\uC5D0\uC11C \uC81C\uC678\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."," ",t(Wo,{href:"https://gratis-cardboard-45e.notion.site/42swim-7d4fd87c1cbd4686a7218788610955d3",children:"\uCEE4\uBBA4\uB2C8\uD2F0 \uC591\uC2DD"})," ","\uC744 \uC9C0\uCF1C\uC8FC\uC138\uC694!"]})]}),it=({rank:e,photo:n,nickname:i})=>a(Fo,{children:[t(E,{size:"18",weight:"bold",color:"deepgray",children:e}),t(Q,{border:!0,size:"lg",nickname:i,photo:n})]}),Vo=()=>{const{ranking:e,isLoading:n,isError:i}=To(),{month:o,total:l}=e,[s,u]=D.exports.useState(0),[C,h]=D.exports.useState(!1),d=g=>{h(g)};return n?t("div",{children:"loading"}):i?t("div",{children:"error"}):a(Do,{children:[t(Pe,{style:{height:"44px",justifyContent:"flex-start",alignItems:"flex-start"}}),a($o,{children:[a(Ao,{children:[t(E,{size:"18",weight:"bold",style:{zIndex:"2"},children:"42Swimmer \uB7AD\uD0B9"}),t(Eo,{}),t(Mo,{onHover:d}),t(jo,{visible:C})]}),t(Lo,{children:a(X,{size:"xsm",children:[t(M,{size:"xsm",active:s===0,onTabClick:()=>u(0),children:"\uC6D4\uBCC4\uC21C"}),t(zo,{}),t(M,{size:"xsm",active:s===1,onTabClick:()=>u(1),children:"\uC804\uCCB4\uC21C"})]})}),t(So,{children:s===0?o.map((g,c)=>t(it,{rank:c,nickname:g.nickname,photo:g.photo},g.id)):l.map((g,c)=>t(it,{rank:c,nickname:g.nickname,photo:g.photo},g.id))})]})]})},ee=e=>t("svg",v(p({},e),{height:"10px",viewBox:"0 0 448 448",width:"10px",fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"})})),_o=r(I)`
  border-radius: 50%;
  width: 41px;
  padding: 0;
`,Ro=({onClick:e})=>a(z,{children:[t(O,{minWidth:1024,children:a(I,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(ee,{style:{marginLeft:"2rem"}})]})}),t(O,{minWidth:768,maxWidth:1023,children:a(I,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(ee,{style:{marginLeft:"2rem"}})]})}),t(O,{maxWidth:767,children:t(_o,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:t(ee,{})})})]}),No=i=>{var o=i,{history:e}=o,n=k(o,["history"]);const{value:l,onChange:s}=S("");return t(z,{children:t(U,{children:t(ko,{panel:a(z,{children:[t(xe,{onChange:s,search:l,onSearch:C=>{Bt(C),e.push(`/search?keyword=${l}`)}}),t(Ro,{onClick:()=>e.push("/writing")})]}),content1:t(Bo,{}),content2:t(Vo,{})})})})},Zo=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,Uo=r(L)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Qo=r.span`
  font-size: 18px;
  font-weight: 700;
`,Ko=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Oo=r(_)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Go=async e=>(await $.get(e)).data,Jo=(e,n,i)=>{const l=`https://swim.42seoul.io/api/pages/list/question/keyword?pageNumber=${n}&keyword=${i}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:s,error:u}=N(l,Go);return{question:s,isLoading:!u&&!s,isError:u}},ot=i=>{var o=i,{keyword:e}=o,n=k(o,["keyword"]);const[l,s]=D.exports.useState(0),[u,C]=D.exports.useState(1),{question:h,isLoading:d,isError:g}=Jo(l,u,e);return g?t("div",{children:"Error!!"}):t(Zo,{children:a(Oo,{children:[a(Uo,{children:[a(Qo,{children:["\uAC80\uC0C9\uACB0\uACFC (",h==null?void 0:h.questionCount,"\uAC74)"]}),a(X,v(p({size:"sm"},n),{children:[t(M,{size:"sm",active:l===0,onTabClick:()=>s(0),children:"\uCD5C\uC2E0\uC21C"}),t(M,{size:"sm",active:l===1,onTabClick:()=>s(1),children:"\uC778\uAE30\uC21C"}),t(M,{size:"sm",active:l===2,onTabClick:()=>s(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),d?[...Array(8)].map((c,m)=>t(Ko,{children:t(ve,{})},m)):h==null?void 0:h.questionList.map((c,m)=>{var w;return t(ye,p({id:c.id,title:c.title,text:c.text,photo:c.user.photo,nickname:(w=c==null?void 0:c.user)==null?void 0:w.nickname,is_solved:c.is_solved,answer_cnt:c.answer_count,like_count:c.like_count,view_count:c.view_count,hashtag:c.hashtag,created_at:c.created_at},n),m)}),t(q,{height:"115px",children:t(ue,{questionCount:h==null?void 0:h.questionCount,page:u,onPage:C})})]})})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const Xo=r(L)`
  width: 100%;
  margin-bottom: 3rem;
`,Yo=r(L)`
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
`;const er=({panel:e,content:n})=>a(z,{children:[t(Xo,{children:e}),t(Yo,{children:n})]}),tr=({location:e})=>{const i=yt.parse(e.search,{ignoreQueryPrefix:!0}).keyword,{value:o,onChange:l}=S(i),[s,u]=D.exports.useState(i);return t(U,{children:t(er,{panel:a(z,{children:[t(xe,{onChange:l,search:o,onSearch:()=>{u(o)}}),a(I,{shadow:!0,onClick:()=>{},size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(ee,{style:{marginLeft:"2rem"}})]})]}),content:t(ot,{keyword:s})})})},nr=r.div`
  padding: 0 5rem;
`,ir=r(L)`
  justify-content: flex-start;
  > * {
    margin-right: 3rem;
  }
`,or=r(q)`
  height: 300px;
  /* width: 25%; */
  justify-content: center;

  > * {
    margin-bottom: 2rem;
  }
`,rr=r.div`
  width: 0.5px;
  height: 150px;
  margin: 0 2rem;
  ${({theme:e})=>f`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,sr=r.div`
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
`,lr=r.div`
  > * {
    margin-top: 2rem;
  }

  > button {
    margin-top: 3rem;
    float: right;
    /* 어케할지 결정하기  */
  }
`,ar=({tlPanel:e,trPanel:n,bPanel:i})=>a(nr,{children:[a(ir,{children:[t(or,{children:e}),t(rr,{}),t(sr,{children:n})]}),t(lr,{children:i})]}),ur=r.div`
  width: 100%;
  height: 100px;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>f`
    border-bottom: 1px ${e.color.lightgrey} solid;
  `}
`,cr=r(L)`
  padding: 1.5rem 0;
`,dr=r(R)`
  width: 25%;
`,hr=r(E)`
  width: 65%;
`,pr=r(L)`
  width: 10%;
`,Cr=r(E)`
  margin-bottom: 1.5rem;
`,rt=({name:e,value:n,etc:i,desc:o})=>a(ur,{children:[a(cr,{children:[t(dr,{size:"h2",children:e}),t(hr,{weight:"normal",size:"20",children:n}),t(pr,{children:i})]}),t(Cr,{size:"14",color:"lightgrey",children:o})]}),gr=r(P)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  margin-right: 1.5rem;
`;r(P)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  padding: 10px 15px;
`;const mr=r(V)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > button {
    margin-right: 1rem;
  }
`,ke=r(I)`
  width: 153px;
`,fr=n=>{var e=k(n,[]);const{user:i,isLoading:o,isError:l}=j(),{value:s,onChange:u,setValue:C}=S(i==null?void 0:i.nickname),[h,d]=D.exports.useState(!1);if(l)return alert("\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"),t(ze,{to:"/"});if(o)return t("div",{children:"loading..."});const g=()=>{const x=document.getElementById("uploadImg");x==null||x.click()},c=async()=>{const x=new FormData,B=document.getElementById("uploadImg").files[0],y="https://swim.42seoul.io/api/users/image";x.append("imgFile",B),await $.patch(y,x,{withCredentials:!0}).then(b=>{alert("\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC\uB97C \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},m=async()=>{const x="https://swim.42seoul.io/api/users/image";await $.delete(x,{withCredentials:!0}).then(B=>{alert("\uC774\uBBF8\uC9C0\uB97C \uC815\uC0C1\uC801\uC73C\uB85C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},w=async()=>{const x="https://swim.42seoul.io/api/users/nickname",B={nickname:s};await $.patch(x,B,{withCredentials:!0}).then(y=>{alert("\uB2C9\uB124\uC784 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),he("https://swim.42seoul.io/api/users/info"),d(!1)};return t(U,v(p({},e),{children:t(ar,{tlPanel:a(z,{children:[t(ge,{size:"lg",img:(i==null?void 0:i.image)?i.image:null}),t(ke,{size:"sm",color:"primary",shadow:!0,onClick:g,children:"\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"}),t("form",{id:"imgform",method:"patch",encType:"application/json",style:{display:"none"},children:t("input",{id:"uploadImg",type:"file",onChange:c})}),t(ke,{size:"sm",color:"white",shadow:!0,onClick:m,children:"\uC774\uBBF8\uC9C0 \uC81C\uAC70"})]}),trPanel:a(z,{children:[a(V,{visible:!h,children:[t(R,{size:"h1",children:i==null?void 0:i.nickname}),t(le,{weight:"bold",width:"4rem"}),t(F,{fontcolor:"primary",underline:!0,to:"#",onClick:()=>{C(i==null?void 0:i.nickname),d(!0)},children:"\uC218\uC815"})]}),a(mr,{visible:h,children:[t(gr,{value:s||"",onChange:u}),t(I,{size:"sm",color:"lightprimary",shadow:!0,onClick:w,children:"\uC218\uC815\uD558\uAE30"}),t(F,{fontcolor:"deepgray",underline:!0,to:"#",onClick:()=>d(!1),children:"\uCDE8\uC18C"})]})]}),bPanel:a(z,{children:[t(rt,{name:"\uC774\uBA54\uC77C",value:i.email,etc:t(F,{fontcolor:"primary",underline:!0,children:"\uC218\uC815"}),desc:"\uD68C\uC6D0 \uC778\uC99D \uB610\uB294 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uBC1C\uC1A1\uD558\uB294 \uC774\uBA54\uC77C\uC744 \uC218\uC2E0\uD558\uB294 \uC8FC\uC18C\uC785\uB2C8\uB2E4."}),t(rt,{name:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD",value:t(F,{fontcolor:"primary",underline:!0,children:"\uBCC0\uACBD\uD558\uAE30"}),desc:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uD558\uAE30 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC704\uC758 \uC774\uBA54\uC77C\uB85C  \uBCC0\uACBD\uD558\uAE30 \uD398\uC774\uC9C0\uAC00 \uBC1C\uC1A1\uB429\uB2C8\uB2E4."}),t(ke,{size:"sm",fontColor:"white",color:"red",shadow:!0,children:"\uD68C\uC6D0 \uD0C8\uD1F4"})]})})}))},xr=r.div`
  width: 100%;
  height: 100%;
`,wr=r(Je)`
  width: 100%;
  margin-bottom: 20px;
`,br=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,Br=()=>{const e='\uC9C8\uBB38\uC744 \uB0A8\uACA8\uBCF4\uC138\uC694!\n  ```C\n  printf("helloWord");\n  ```',n=c=>/[\w]*$/g.test(c)&&c.length<20,i=c=>c.length<40,o=S("",n),l=S("",i),s=S(e),[u,C]=D.exports.useState([]),{isLoading:h,user:d}=j();D.exports.useEffect(()=>{!h&&!d&&(alert("\uB85C\uADF8\uC778 \uD6C4 \uC9C8\uBB38 \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),location.href="/")},[d]);const g=async c=>{if(c.preventDefault(),!l.value||!s.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{const m=await $.post("https://swim.42seoul.io/api/posts/question",{title:l.value,hashtag:u,text:s.value},{withCredentials:!0});m.status===200?(alert("\uC9C8\uBB38 \uC791\uC131\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${m.data.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(m){alert(m)}};return a(xr,{children:[t(wr,{value:l.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:l.onChange}),t(Ge,{inputChange:o.onChange,value:o.value,setValue:o.setValue,tag:u,setTag:C,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(le,{weight:"bold",width:"4rem",style:{marginBottom:"3rem"}}),a(br,{children:[t(re,{value:s.value,setValue:s.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),t(I,{size:"sm",onClick:g,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})},yr=n=>{var e=k(n,[]);return t(U,v(p({},e),{children:t(Br,{})}))},vr=vt`
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
`,kr=({children:e})=>a(kt,{theme:A,children:[t(vr,{}),e]});r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const Dr=r(L)`
  width: 100%;
  margin-bottom: 3rem;
`,$r=r(L)`
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
`;const Ar=({panel:e,content:n})=>a(z,{children:[t(Dr,{children:e}),t($r,{children:n})]}),Er=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,Lr=r(L)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,zr=r.span`
  font-size: 18px;
  font-weight: 700;
`,Fr=r.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme:e})=>e.color.primary};
`,Sr=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Mr=r(_)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Ir=async e=>(await $.get(e)).data,Tr=(e,n,i)=>{const l=`https://swim.42seoul.io/api/pages/list/question/hashtag/id?pageNumber=${n}&hashtagId=${i}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:s,error:u}=N(l,Ir);return{question:s,isLoading:!u&&!s,isError:u}},Hr=o=>{var l=o,{hashtagName:e,hashtagId:n}=l,i=k(l,["hashtagName","hashtagId"]);const[s,u]=D.exports.useState(0),[C,h]=D.exports.useState(1),{question:d,isLoading:g,isError:c}=Tr(s,C,n);return c?t("div",{children:"Error!!"}):t(Er,{children:a(Mr,{children:[a(Lr,{children:[a(zr,{children:[a(Fr,{children:["#",e]})," \uAC80\uC0C9\uACB0\uACFC (",d==null?void 0:d.questionCount,"\uAC74)"]}),a(X,v(p({size:"sm"},i),{children:[t(M,{size:"sm",active:s===0,onTabClick:()=>u(0),children:"\uCD5C\uC2E0\uC21C"}),t(M,{size:"sm",active:s===1,onTabClick:()=>u(1),children:"\uC778\uAE30\uC21C"}),t(M,{size:"sm",active:s===2,onTabClick:()=>u(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),g?[...Array(8)].map((m,w)=>t(Sr,{children:t(ve,{})},w)):d==null?void 0:d.questionList.map((m,w)=>{var x;return t(ye,p({id:m.id,title:m.title,text:m.text,photo:m.user.photo,nickname:(x=m==null?void 0:m.user)==null?void 0:x.nickname,is_solved:m.is_solved,answer_cnt:m.answer_count,like_count:m.like_count,view_count:m.view_count,hashtag:m.hashtag,created_at:m.created_at},i),w)}),t(q,{height:"115px",children:t(ue,{questionCount:d==null?void 0:d.questionCount,page:C,onPage:h})})]})})},qr=({location:e})=>{const n=e.state,{value:i,onChange:o}=S(""),[l,s]=D.exports.useState("");return t(U,{children:t(Ar,{panel:a(z,{children:[t(xe,{onChange:o,search:i,onSearch:()=>{s(i)}}),a(I,{shadow:!0,onClick:()=>{},size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(ee,{style:{marginLeft:"2rem"}})]})]}),content:l===""?t(Hr,{hashtagName:n.hashtagName,hashtagId:n.hashtagId}):t(ot,{keyword:l})})})};G.event({category:"User",action:"Created an Account"});G.exception({description:"An error ocurred",fatal:!0});const Pr=()=>{const e=Ie();return D.exports.useEffect(()=>{G.initialize("UA-215641389-1"),G.set({page:e.pathname}),G.pageview(e.pathname)},[e]),t(kr,{children:a(Dt,{children:[t(W,{path:"/",exact:!0,render:n=>t(No,p({},n))}),t(W,{path:"/search",exact:!0,render:n=>t(tr,p({},n))}),t(W,{path:"/tag/:hashtagName",exact:!0,render:n=>t(qr,p({},n))}),t(W,{path:"/detail",exact:!0,render:n=>t(Mi,p({},n))}),t(W,{path:"/writing",exact:!0,render:n=>t(yr,p({},n))}),t(W,{path:"/edit",exact:!0,render:n=>t(_i,p({},n))}),t(W,{path:"/setting",exact:!0,render:n=>t(fr,p({},n))}),t(W,{path:"/auth",render:n=>t(St,p({},n))})]})})};$t({dsn:"https://be73c673dc5040cab904c7281630f650@o1092079.ingest.sentry.io/6110101",integrations:[new At],tracesSampleRate:1});Et.render(t(Lt.StrictMode,{children:t(zt,{children:t(Pr,{})})}),document.getElementById("root"));
