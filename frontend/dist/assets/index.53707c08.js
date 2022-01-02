var yt=Object.defineProperty,vt=Object.defineProperties;var kt=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var Pe=(e,n,i)=>n in e?yt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,g=(e,n)=>{for(var i in n||(n={}))Te.call(n,i)&&Pe(e,i,n[i]);if(le)for(var i of le(n))He.call(n,i)&&Pe(e,i,n[i]);return e},v=(e,n)=>vt(e,kt(n));var k=(e,n)=>{var i={};for(var o in e)Te.call(e,o)&&n.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&le)for(var o of le(e))n.indexOf(o)<0&&He.call(e,o)&&(i[o]=e[o]);return i};import{r as D,j as t,R as We,a as $,Z as _,q as Ve,C as b,s as r,w as Dt,L as ee,b as _e,l as Re,c as a,F as z,d as $t,u as qe,e as Ce,f as ge,U as At,H as me,M as R,m as Et,g as fe,h as Lt,i as zt,k as Ft,W as St,n as It,o as te,S as Mt,p as q,t as Tt,B as Ht,v as Pt,x as Wt,y as Vt}from"./vendor.e61329f1.js";const _t=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}};_t();const Rt=n=>{var e=k(n,[]);const i=location.search;return D.exports.useEffect(()=>{(async()=>{await $.get(`https://swim.42seoul.io/api/auth/authResult${i}`)})()},[i]),t(We,{to:"/"})},qt=async e=>await $({method:"get",url:e,withCredentials:!0}).then(i=>i.data).catch(i=>{throw i}),N=()=>{const e="https://swim.42seoul.io/api/users/info",{data:n,error:i}=_(e,qt);return{isLogin:n,user:n&&n.result?n.user:null,isLoading:!i&&!n,isError:i}},Nt=e=>$.get(e,{withCredentials:!0}).then(n=>n.data),K=()=>{const e=Ve.parse(location.search).id,{data:n,error:i,mutate:o}=_(`https://swim.42seoul.io/api/pages/detail/question?questionId=${e}`,Nt),s=(d,f,x,w)=>{if(n)if(w){let B=n.questionInfo.like_count;B=x?B-1:B+1,o({questionInfo:v(g({},n.questionInfo),{like_count:B,is_like:null})},!1),$.delete(`https://swim.42seoul.io/api/posts/question/like?questionId=${f}&questionUserId=${d}&isLike=${x}`,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>o())}else{let B=n.questionInfo.like_count;B=x?B+1:B-1,o({questionInfo:v(g({},n.questionInfo),{like_count:B,is_like:x})},!1),$.post("https://swim.42seoul.io/api/posts/question/like",{questionUserId:d,questionId:f,isLike:x},{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>{o()})}},l=(d,f,x,w)=>{if(w){let B=n.questionInfo.like_count;B=x?B-1:B+1;const y=n.questionInfo.answer.map(c=>(c.id===f&&(c.like_count=B,c.is_like=null),c));o({questionInfo:v(g({},n.questionInfo),{answer:y})},!1),$.delete(`https://swim.42seoul.io/api/posts/answer/like?answerId=${f}&answerUserId=${d}&isLike=${x}`,{withCredentials:!0}).catch(c=>{throw alert(c),c}).finally(()=>{o()})}else{let B=n.questionInfo.like_count;B=x?B+1:B-1;const y=n.questionInfo.answer.map(c=>(c.id===f&&(c.like_count=B,c.is_like=x),c));o({questionInfo:v(g({},n.questionInfo),{answer:y})},!1),$.post("https://swim.42seoul.io/api/posts/answer/like",{answerUserId:d,answerId:f,isLike:x},{withCredentials:!0}).catch(c=>{throw alert(c),c}).finally(()=>{o()})}},u=(d,f,x)=>{n&&$.post("https://swim.42seoul.io/api/posts/comment",{text:d,questionId:f,answerId:x},{withCredentials:!0}).catch(w=>{throw alert(w),w}).finally(()=>o())},m=(d,f,x,w)=>{if(n){const B="https://swim.42seoul.io/api/posts/comment",y=g({},n);w?y.questionInfo.answer=y.questionInfo.answer.map(c=>(c.id===w&&(c.comment=c.comment.map(I=>(I.id===f&&(I.text=d),I))),c)):y.questionInfo.answer=y.questionInfo.comment.map(c=>(c.id===f&&(c.text=d),c)),o(y,!1),$.patch(B,{text:d,commentId:f,questionId:x,answerId:w},{withCredentials:!0}).catch(c=>{throw alert(c),c}).finally(()=>o())}},p=(d,f,x)=>{if(n){const w=`https://swim.42seoul.io/api/posts/comment?commentId=${d}&questionId=${f}${x?`&answerId=${x}`:""}`,B=g({},n);x?B.questionInfo.answer=B.questionInfo.answer.map(y=>(y.id===x&&(y.comment=y.comment.filter(c=>c.id!==d)),y)):B.questionInfo.comment=B.questionInfo.comment.filter(y=>y.id!==d),o(B,!1),$.delete(w,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>o())}},h=(d,f,x,w)=>{if(n){const B=g({},n);B.questionInfo.answer.push({text:f,user:{nickname:x}}),o(B,!1),$.post("https://swim.42seoul.io/api/posts/answer",{questionId:d,text:f},{withCredentials:!0}).then(()=>w("")).catch(y=>{throw alert(y),y}).finally(()=>o())}},C=async(d,f,x)=>{try{const w=g({},n);w.is_solved=!0,w.questionInfo.answer=w.questionInfo.answer.map(y=>(y.id===f&&(y.is_solved=!0),y));const B="https://swim.42seoul.io/api/posts/answer/choice";o(w,!1),await $.post(B,{questionId:d,answerId:f,answerUserId:x},{withCredentials:!0}),o()}catch(w){throw alert(w),w}};return{question:n?n.questionInfo:null,answer:n?n.questionInfo.answer:null,isLoading:!i&&!n,isError:i,QuestionThumbPost:s,AnswerThumbPost:l,CommentPost:u,CommentEdit:m,CommentDelete:p,AnswerPost:h,ChoicePost:C}},M=(e,n=()=>!0)=>{const[i,o]=D.exports.useState(e),[s,l]=D.exports.useState(!0);return{value:i,onChange:p=>{const{target:{value:h}}=p;n(h)?o(h):l(!1)},onBlur:p=>{const h=p.target.innerText;n(h)?o(h):l(!1)},setValue:o,valid:s}},Zt={button:{primary:"#1896BD",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",lightprimary:"#a7deef"},a:{primary:"#1896BD",white:"#FFFFFF",red:"#FF5D39",black:"#000000",deepgray:"#C4C4C4"},background:{white:"#FFFFFF",lightgrey:"#F3F3F3"},text:{primary:"#1896BD",white:"#FFFFFF",yellow:"#FFB84D",red:"#FF5D39",black:"#000000",lightgrey:"#a6a6a6",grey:"#565656",deepgray:"#C4C4C4"},tag:{primary:"#1896BD"},primary:"#1896BD",lightprimary:"#a7deef",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",deepgray:"#C4C4C4",lightgrey:"#EAEAEA",black:"#000000",lightblack:"#545454",lightyelloew:"#FFDCA8"},A={color:Zt},Ut=b`
  ${({theme:e,fontcolor:n})=>n&&b`
      color: ${e.color.a[n]};
    `}
  ${({underline:e})=>e&&b`
      text-decoration: underline;
    `}
  ${({small:e})=>e&&b`
      font-weight: normal;
      font-size: 14px;
      &:hover {
        color: ${A.color.lightblack};
        -webkit-transition: color 0.5s ease;
        -moz-transition: color 0.5s ease;
        transition: color 0.5s ease;
      }
    `};
  ${({bold:e})=>e&&b`
      font-weight: bold;
    `}
`,Qt=r.span`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  ${Ut}
`,jt=s=>{var l=s,{to:e,children:n,location:i}=l,o=k(l,["to","children","location"]);return t(ee,{to:e||i.pathname+i.search,children:t(Qt,v(g({},o),{children:n}))})};var F=Dt(jt);const Kt=r.div`
  display: ${({visible:e})=>e?"":"none !important"};
  ${({width:e})=>e&&b`
      width: ${e};
    `}
  ${({height:e})=>e&&b`
      height: ${e};
    `};
`,Z=o=>{var s=o,{children:e,visible:n=!0}=s,i=k(s,["children","visible"]);return t(Kt,v(g({visible:n},i),{children:e}))},Gt=b`
  ${({isChecked:e})=>e==!0&&b`
      border: 3px solid ${A.color.primary};
      box-shadow: none;
    `}
`,Jt=r.div`
  width: 100%;
  /*height: 214px;*/
  /*display: flex;*/
  border-radius: 16px;
  background-color: white;
  padding: 50px 60px;
  padding-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
  ${Gt};
`,xe=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Jt,v(g({},n),{children:e}))};function X(e){const n=new Date,i=new Date(e),o=Math.floor((n.getTime()-i.getTime())/1e3/60);if(o<1)return"\uBC29\uAE08\uC804";if(o<60)return`${o}\uBD84\uC804`;const s=Math.floor(o/60);if(s<24)return`${s}\uC2DC\uAC04\uC804`;const l=Math.floor(o/60/24);return l<365?`${l}\uC77C\uC804`:`${Math.floor(l/365)}\uB144\uC804`}const Xt=r.p`
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
`,Yt=new _e.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[Re({pre:!0})]}),Ne=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return a(z,{children:[t(Xt,v(g({},n),{dangerouslySetInnerHTML:{__html:Yt.makeHtml(e)}})),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]})},Ot=b`
  ${({size:e})=>e&&b`
      font-size: ${e+"px"};
      line-height: ${parseInt(e)*1.5+"px"};
    `}
  ${({theme:e,color:n})=>n&&b`
      color: ${e.color.text[n]};
    `}
    ${({weight:e})=>e&&b`
      font-weight: ${e};
    `}
`,en=r.p`
  color: black;
  word-break: break-all;
  ${Ot}
`,E=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(en,v(g({},n),{children:e}))};var tn="/assets/cat0.7e5dd6fb.jpeg";const we={xsm:{size:"25px"},sm:{size:"40px"},lg:{size:"120px"}},nn=b`
  ${({size:e})=>e&&b`
      width: ${we[e].size};
      height: ${we[e].size};
      background-size: ${we[e].size} auto;
    `}
  ${({color:e})=>e&&b`
      background-color: ${e};
    `}
  background-image: ${({img:e})=>e?`url(${e})`:"url()"};
  /* ${({img:e})=>e?b`
          background-image: url(${e});
          margin: 2 2;
        `:b`
          margin: 3 3;
          color: pink;
          background-image: url(${tn});
        `} */
`,Be=r.div`
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
  ${nn}
`,be=r.div`
  display: flex;
  align-items: center;
`,ye=r(Be)`
  margin-right: 8px;
  flex-shrink: 0;
  ${({theme:e,border:n})=>n&&b`
      border: 2px solid ${e.color.primary};
    `}
`,G=({nickname:e,size:n,photo:i,color:o,children:s,onMouseEnter:l,onMouseLeave:u,onClick:m,border:p})=>n==="sm"?a(be,{size:n,children:[t(ye,{size:"xsm",img:i||"",border:p}),t(E,{size:"14",color:"grey",children:e}),s]}):n==="xsm"?a(be,{size:n,children:[t(ye,{size:"xsm",img:i||"",border:p}),t(E,{size:"12",color:"grey",children:e}),s]}):a(be,{onMouseEnter:l,onMouseLeave:u,onClick:m,size:n,children:[t(ye,{size:"sm",img:i||"",border:p}),t(E,{size:"18",weight:"bold",color:o,children:e}),s]}),on=r.div`
  display: block;
  white-space: normal;
`,rn=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
`,sn=s=>{var l=s,{created_at:e,user:n,text:i}=l,o=k(l,["created_at","user","text"]);const u=X(e);return a(on,v(g({},o),{children:[a(rn,{children:[t(G,v(g({},n),{size:"sm"})),t(E,{size:"14",color:"grey",children:u})]}),t(Ne,{children:i})]}))},ln=()=>a("svg",{width:"4",height:"20",viewBox:"0 0 4 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 10C1 10.5523 1.44772 11 2 11C2.55228 11 3 10.5523 3 10C3 9.44772 2.55228 9 2 9C1.44772 9 1 9.44772 1 10Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 18C1 18.5523 1.44772 19 2 19C2.55228 19 3 18.5523 3 18C3 17.4477 2.55228 17 2 17C1.44772 17 1 17.4477 1 18Z",stroke:"#565656",strokeWidth:"2"})]}),an=r.button`
  width: 24px;
  height: 24px;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`,un=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(an,v(g({},n),{children:t(ln,{children:e})}))},cn=b`
  ${({width:e})=>e&&b`
      width: ${e};
    `}
  ${({height:e})=>e&&b`
      height: ${e};
    `}
`,dn=r.div`
  width: 988px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 10px 0px;

  ${cn}
`,U=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(dn,v(g({},n),{children:e}))},Ze=r.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&b`
      width: ${e};
    `}
  ${({height:e})=>e&&b`
      height: ${e};
    `}
`,L=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&b`
      width: ${e};
    `}
  ${({height:e})=>e&&b`
      height: ${e};
    `}
`,P=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&b`
      width: ${e};
    `}
  ${({height:e})=>e&&b`
      height: ${e};
    `}
`,Ue=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&b`
      width: ${e};
    `}
  ${({height:e})=>e&&b`
      height: ${e};
    `}
`,hn=r.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 2rem 0px;
`,pn=r.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`,Cn=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,gn=r.p`
  font-size: 16px;
  width: 80%;
  background-color: inherit;
  color: grey;
  outline: none;
  &:focus-visible {
    color: black;
  }
`,mn=r(U)`
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

  ${({show:e})=>e&&b`
      display: inherit;
    `};
`,fn=r(P)`
  width: 100%;
  height: 100%;
`,Qe=r(F)`
  /*overflow: auto;*/
  display: block;
  width: 3rem;
  margin: 2rem 2rem 0 2rem;
  ${({theme:e})=>e&&b`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,xn=r(Z)`
  position: relative;
`,je=({created_at:e,questionId:n,answerId:i,user:o,text:s,userEmail:l,id:u})=>{const{CommentEdit:m,CommentDelete:p}=K(),h=X(e),[C,d]=D.exports.useState(!1),[f,x]=D.exports.useState(!1),{value:w,setValue:B,onBlur:y}=M(s),c=D.exports.useRef(),I=async()=>{confirm("\uB313\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&p(u,n,i),d(!1)},V=()=>{x(!0),setTimeout(function(){c.current.focus()},1),d(!C)},j=async()=>{m(w,u,n,i),x(!1)};return a(hn,{children:[a(pn,{children:[t(E,{weight:"bold",size:"14",children:o.nickname}),t(E,{size:"14",color:"grey",children:h})]}),a(Cn,{children:[t(gn,{contentEditable:f,onBlur:y,ref:c,suppressContentEditableWarning:!0,children:w}),o.email===l?a(z,{children:[a(xn,{visible:!f,children:[t(un,{onClick:()=>d(!C)}),t(mn,{show:C,children:a(fn,{children:[t(Qe,{small:!0,onClick:V,children:"\uC218\uC815"}),t(Qe,{small:!0,onClick:I,children:"\uC0AD\uC81C"})]})})]}),a(Z,{visible:f,children:[t(F,{fontcolor:"deepgray",onClick:()=>{B(s),x(!1)},style:{marginRight:"1rem"},children:"\uCDE8\uC18C"}),t(F,{onClick:j,children:"\uC644\uB8CC"})]})]}):null]})]},u)},wn=b`
  ${({border:e})=>e===!1&&b`
      border: none;
    `}
`,Bn=r.input`
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
  ${wn}
`,W=n=>{var e=k(n,[]);return t(Bn,g({},e))},bn=r.form`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,yn=r(W)`
  width: 80%;
  padding: 0px;
`,vn=r(F)`
  white-space: nowrap;
  /*background-color: black;*/
`,Ke=o=>{var s=o,{questionId:e,answerId:n}=s,i=k(s,["questionId","answerId"]);const{user:l,isLoading:u,isError:m}=N(),{CommentPost:p}=K(),{value:h,onChange:C,setValue:d}=M("");if(u)return m?t("div",{children:"Err.."}):t("div",{children:"Load..."});{const f=x=>{x.preventDefault(),h?l?(p(h,e,n),d("")):alert("\uB313\uAE00 \uC791\uC131\uC744 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"):alert("\uB313\uAE00\uC6B8 \uC785\uB825\uD574\uC8FC\uC138\uC694")};return a(bn,v(g({onSubmit:f},i),{children:[t(yn,{placeholder:"\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694",value:h,border:!1,onChange:C}),t(vn,{fontcolor:"primary",underline:!1,onClick:f,children:"\uB313\uAE00 \uC785\uB825"})]}))}},kn=r.div`
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
`,Dn=new _e.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[Re({pre:!0})]}),ae=s=>{var l=s,{value:e,setValue:n,placeHolder:i}=l,o=k(l,["value","setValue","placeHolder"]);const u=document.getElementsByClassName("mde-text")[0],[m,p]=D.exports.useState("write"),h=async function*(C){try{yield await new Promise(f=>{const x=new FormData,w=new File([C],"Image"),B="https://swim.42seoul.io/api/posts/image";x.append("imgFile",w),$.post(B,x,{withCredentials:!0}).then(y=>{var c;y.status===200&&f((c=y==null?void 0:y.data)==null?void 0:c.image)})})}catch(d){alert("\uC0AC\uC9C4 \uC804\uC1A1 \uC2E4\uD328"),yield"Error"}return!0};return a(kn,v(g({},o),{children:[t($t,{classes:{},value:e,onChange:C=>{const d=(event==null?void 0:event.target.scrollHeight)+"px";n(C),u.style.height="auto",u.style.height=d},selectedTab:m,onTabChange:p,generateMarkdownPreview:C=>Promise.resolve(Dn.makeHtml(C)),childProps:{writeButton:{tabIndex:-1},textArea:{placeholder:i}},paste:{saveImage:h}}),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]}))},$n=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#1896BD"})}),An=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#545454"})}),En=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#C4C4C4"})}),Ln=l=>{var u=l,{is_solved:e,isChosen:n,isChoosable:i,onClick:o}=u,s=k(u,["is_solved","isChosen","isChoosable","onClick"]);const[m,p]=D.exports.useState(!1);return e&&n?t($n,g({},s)):!e&&i?t("button",v(g({onClick:o,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1)},s),{children:m?t(An,{}):t(En,{})})):t(z,{})},zn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M35.625 28.125H43.125V5.625H35.625V28.125ZM28.125 5.625H11.25C9.69375 5.625 8.3625 6.5625 7.8 7.9125L2.1375 21.1313C1.96875 21.5625 1.875 22.0125 1.875 22.5V26.25C1.875 27.2446 2.27009 28.1984 2.97335 28.9016C3.67661 29.6049 4.63044 30 5.625 30H17.4563L15.675 38.5687C15.6375 38.7562 15.6187 38.9437 15.6187 39.15C15.6187 39.9375 15.9375 40.6313 16.4438 41.1375L18.4312 43.125L30.7687 30.7687C31.4625 30.0938 31.875 29.1562 31.875 28.125V9.375C31.875 8.38044 31.4799 7.42661 30.7766 6.72335C30.0734 6.02009 29.1196 5.625 28.125 5.625Z",fill:"#545454"})}),Fn=()=>t("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M34.8333 27.5V5.5H42.1666V27.5H34.8333ZM27.5 5.5C28.4724 5.5 29.4051 5.88631 30.0927 6.57394C30.7803 7.26157 31.1666 8.19421 31.1666 9.16667V27.5C31.1666 28.5083 30.7633 29.425 30.085 30.085L18.0216 42.1667L16.0783 40.2233C15.5833 39.7283 15.2716 39.05 15.2716 38.28L15.3266 37.7117L17.0683 29.3333H5.49998C4.52752 29.3333 3.59489 28.947 2.90725 28.2594C2.21962 27.5718 1.83331 26.6391 1.83331 25.6667V22C1.83331 21.5233 1.92498 21.0833 2.08998 20.6617L7.62665 7.73667C8.17665 6.41667 9.47831 5.5 11 5.5H27.5ZM27.5 9.16667H10.945L5.49998 22V25.6667H21.5966L19.525 35.42L27.5 27.445V9.16667Z",fill:"#545454"})}),Sn=r.button`
  background-color: inherit;
`,In=i=>{var o=i,{active:e}=o,n=k(o,["active"]);return t(Sn,v(g({},n),{children:e?t(zn,{}):t(Fn,{})}))},Mn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M43.125 18.75C43.125 17.7554 42.7299 16.8016 42.0266 16.0984C41.3234 15.3951 40.3696 15 39.375 15H27.525L29.325 6.43125C29.3625 6.24375 29.3813 6.0375 29.3813 5.83125C29.3813 5.0625 29.0625 4.35 28.5562 3.84375L26.5688 1.875L14.2313 14.2125C13.5375 14.9062 13.125 15.8438 13.125 16.875V35.625C13.125 36.6196 13.5201 37.5734 14.2233 38.2766C14.9266 38.9799 15.8804 39.375 16.875 39.375H33.75C35.3063 39.375 36.6375 38.4375 37.2 37.0875L42.8625 23.8687C43.0312 23.4375 43.125 22.9875 43.125 22.5V18.75ZM1.875 39.375H9.375V16.875H1.875V39.375Z",fill:"#545454"})}),Tn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M9.375 16.875V39.375H1.875V16.875H9.375ZM16.875 39.375C15.8804 39.375 14.9266 38.9799 14.2233 38.2766C13.5201 37.5734 13.125 36.6196 13.125 35.625V16.875C13.125 15.8438 13.5375 14.9062 14.2313 14.2313L26.5688 1.875L28.5562 3.8625C29.0625 4.36875 29.3813 5.0625 29.3813 5.83125L29.325 6.43125L27.5437 15H39.375C40.3696 15 41.3234 15.3951 42.0266 16.0984C42.7299 16.8016 43.125 17.7554 43.125 18.75V22.5C43.125 22.9875 43.0312 23.4375 42.8625 23.8687L37.2 37.0875C36.6375 38.4375 35.3063 39.375 33.75 39.375H16.875ZM16.875 35.625H33.8063L39.375 22.5V18.75H22.8937L25.0125 8.775L16.875 16.9312V35.625Z",fill:"#545454"})}),Hn=r.button`
  background-color: inherit;
`,Pn=o=>{var s=o,{active:e,onClick:n}=s,i=k(s,["active","onClick"]);return t(Hn,v(g({onClick:n},i),{children:e?t(Mn,{}):t(Tn,{})}))},Wn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`,Vn=r.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 16rem;
  margin-bottom: 2rem;
  width: 7rem;
`,ve=h=>{var C=h,{like_count:e,is_solved:n,is_like:i,isChoosable:o,is_chosen:s,onUpClick:l,onDownClick:u,onChooseClick:m}=C,p=k(C,["like_count","is_solved","is_like","isChoosable","is_chosen","onUpClick","onDownClick","onChooseClick"]);return a(Wn,v(g({},p),{children:[a(Vn,{children:[t(Pn,{onClick:l,active:i===!0}),t(E,{style:{whiteSpace:"nowrap"},color:"grey",size:"32",weight:"bold",children:e}),t(In,{onClick:u,active:i===!1})]}),t(Ln,{isChosen:s,isChoosable:o,onClick:m,is_solved:n})]}))},_n=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;r(ve)`
  width: 13rem;
  margin-right: 2rem;
`;const Rn=r(xe)`
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
`,Ge=r(Z)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,qn=h=>{var C=h,{is_solved:e,like_count:n,is_like:i,is_chosen:o,isChoosable:s,comment:l,id:u,user:m}=C,p=k(C,["is_solved","like_count","is_like","is_chosen","isChoosable","comment","id","user"]);const{AnswerThumbPost:d,ChoicePost:f}=K(),{user:x}=N(),[w,B]=D.exports.useState(!1),[y,c]=D.exports.useState(!1),{value:I,setValue:V}=M(p.text),j=!!x,gt=qe(),se=new URLSearchParams(gt.search).get("id"),Ie=H=>{if(!j)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");y===!1?(c(!0),i===H?d(m.id,u,H,!0):i===!H?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4!"):d(m.id,u,H,!1),setTimeout(()=>{c(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},mt=()=>{Ie(!0)},ft=()=>{Ie(!1)},xt=()=>{confirm("\uD574\uB2F9 \uB2F5\uBCC0\uC744 \uCC44\uD0DD\uD558\uACA0\uC2B5\uB2C8\uAE4C? \uCC44\uD0DD \uD6C4\uC5D0\uB294 \uCDE8\uC18C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.")&&se&&f(parseInt(se),u,m.id)},wt=async()=>{const H="https://swim.42seoul.io/api/posts/answer",Me={questionId:se,answerId:u,text:I};await $.patch(H,Me,{withCredentials:!0}).then(Jr=>{alert("\uB2F5\uBCC0 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),B(!1)},Bt=async()=>{const H=`https://swim.42seoul.io/api/posts/answer?questionId=${se}&answerId=${u}`;await $.delete(H,{withCredentials:!0}).then(Me=>{alert("\uB2F5\uBCC0 \uC0AD\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),B(!1)},bt=l==null?void 0:l.map(H=>t(je,g({userEmail:x==null?void 0:x.email,answerId:u},H),H.id));return a(_n,v(g({},p),{children:[t(ve,{is_solved:e,is_chosen:o,like_count:n,is_like:i,isChoosable:s,onUpClick:mt,onDownClick:ft,onChooseClick:xt}),t(Z,{width:"100%",visible:!w,children:a(xe,{isChecked:o,children:[t(sn,v(g({},p),{id:u,user:m})),a(Ge,{visible:j?(m==null?void 0:m.email)===(x==null?void 0:x.email):!1,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>B(!0),children:"\uC218\uC815"}),t(F,{onClick:Bt,fontcolor:"deepgray",small:!0,children:"\uC0AD\uC81C"})]}),bt,t(Ke,{answerId:u})]})}),t(Z,{width:"100%",height:"100%",visible:w,children:a(Rn,{children:[t(ae,{value:I,setValue:V}),a(Ge,{visible:!0,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>B(!1),children:"\uCDE8\uC18C"}),t(F,{onClick:wt,fontcolor:"primary",bold:!0,small:!0,children:"\uD655\uC778"})]})]})})]}))},ue={sm:{height:"41px",fontSize:"16px"},lg:{width:"449px",height:"60px",fontSize:"18px"}},Nn=b`
  ${({theme:e,color:n})=>n&&b`
      background-color: ${e.color.button[n]};
      &:hover {
        background: ${Ce(.1,e.color.button[n])};
      }
      &:active {
        background: ${ge(.1,e.color.button[n])};
      }
    `}
  ${({theme:e,fontColor:n})=>n&&b`
      color: ${e.color.button[n]};
    `}
  ${({size:e})=>{var n,i;return e&&b`
      width: ${((n=ue[e])==null?void 0:n.width)?(i=ue[e])==null?void 0:i.width:"auto"};
      height: ${ue[e].height};
      font-size: ${ue[e].fontSize};
    `}}
  ${({shadow:e})=>e===!0&&b`
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
    `}
`,Zn=r.button`
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
    background: ${Ce(.1,`${A.color.primary}`)};
    color: ${Ce(.1,"white")};
  }
  &:active {
    background: ${ge(.1,`${A.color.primary}`)};
  }
  ${Nn}
`,T=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Zn,v(g({},n),{children:e}))},Je={bold:{background:"#000000",height:"3px"},light:{background:"#EAEAEA",height:"1px"}},Un={horizontal:"rotate(0deg)",vertical:"rotate(90deg)"},Qn=b`
  ${({weight:e})=>e&&b`
      background-color: ${Je[e].background};
      height: ${Je[e].height};
    `}
  ${({width:e})=>e&&b`
      width: ${e};
    `}
	${({direction:e})=>e&&b`
      transform: ${Un[e]};
    `}
`,jn=r.div`
  ${Qn}
`,ce=n=>{var e=k(n,[]);return t(jn,g({},e))},Kn={h1:{size:"36px"},h2:{size:"24px"},h3:{size:"18px"}},Gn=b`
  ${({size:e})=>e&&b`
      font-size: ${Kn[e].size};
    `}
  ${({color:e})=>e&&b`
      color: ${e};
    `}
`,Jn=r.div`
  color: black;
  font-weight: 700;
  ${Gn}
`,Q=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Jn,v(g({},n),{children:e}))},Xn=r(Q)`
  margin-bottom: 3rem;
`,Yn=r.div`
  margin-left: 9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Xe=r.div`
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
`,On=()=>{const{value:e,setValue:n}=M(""),{question:i,isLoading:o,AnswerPost:s}=K(),{user:l,isLoading:u}=N();if(!o&&!u)if(!!l){const p=l.nickname;return a(Yn,{children:[t(Xn,{size:"h2",children:"\uB0B4 \uB2F5\uBCC0 \uB2EC\uAE30"}),t(ce,{weight:"bold",width:"3rem",style:{marginBottom:"1.5rem"}}),t(ae,{value:e,setValue:n,placeHolder:"\uB2F5\uBCC0\uC744 \uB2EC\uC544\uC8FC\uC138\uC694!"}),t(T,{onClick:async()=>{e?s(i.id,e,p,n):alert("\uB2F5\uBCC0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4")},size:"sm",fontColor:"white",children:"\uB2F5\uBCC0 \uC791\uC131\uD558\uAE30"})]})}else return t(Xe,{children:"\uB2F5\uBCC0\uC744 \uB0A8\uAE30\uAE30 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uC9C4\uD589\uD574\uC8FC\uC138\uC694!"});else return t("div",{children:".."})},ei=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  width: auto;
  height: 100%;
  background-color: ${A.color.tag.primary};
  box-sizing: border-box;
  margin: 1rem 0rem 0rem 1rem;
  padding: 0px 10px;
  ${({name:e})=>e==="..."&&b`
      background-color: ${A.color.deepgray};
    `}
`,ti=r.button`
  margin-left: 1rem;
  background-color: inherit;
  cursor: pointer;
`,ni=()=>a("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M8.5 1L1 8.5",stroke:"#dfdfdf",strokeWidth:"2"}),t("path",{d:"M8.5 8.5L1 1",stroke:"#dfdfdf",strokeWidth:"2"})]}),ne=l=>{var u=l,{name:e,isDel:n,size:i="14",onDelClick:o}=u,s=k(u,["name","isDel","size","onDelClick"]);return a(ei,v(g({},s),{name:e,children:[t(E,{size:i,style:{wordBreak:"normal",color:"#ffffff"},children:e}),n?t(ti,{onClick:()=>{o(e)},children:t(ni,{})}):""]}))},ii=r.div`
  display: block;
  white-space: normal;
`,Ye=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
  flex-wrap: wrap;
`,oi=r.div`
  display: flex;
  flex-wrap: wrap;
`;r(E)`
  white-space: pre-line;
`;const ri=({user:e,created_at:n,title:i,hashtag:o,text:s})=>{const l=X(n),u=o==null?void 0:o.map(m=>t(ne,{name:m.name},m.name));return a(ii,{children:[a(Ye,{children:[t(Q,{size:"h1",children:i}),t(E,{size:"14",color:"grey",children:l})]}),a(Ye,{children:[t(G,v(g({},e),{size:"sm"})),t(oi,{children:u})]}),t(Ne,{children:s})]})},si=r.div`
  display: flex;
  justify-content: space-between;
`,li=r(Z)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,ai=n=>{var e=k(n,[]);var C;const{question:i,isLoading:o,isError:s,QuestionThumbPost:l}=K(),{user:u,isLoading:m}=N(),[p,h]=D.exports.useState(!1);if(!o&&!m){const d=!!u,f=c=>{if(!d)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");p===!1?(h(!0),c===i.is_like?l(i.user.id,i.id,c,!0):!c===i.is_like?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4."):l(i.user.id,i.id,c,!1),setTimeout(()=>{h(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},x=()=>{f(!0)},w=()=>{f(!1)},B=c=>{confirm("\uAC8C\uC2DC\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")?$.delete(`https://swim.42seoul.io/api/posts/question?questionId=${i.id}`,{withCredentials:!0}).then(()=>{location.href="/"}):c.preventDefault()},y=(C=i.comment)==null?void 0:C.map(c=>t(je,g({userEmail:u==null?void 0:u.email,questionId:i.id},c),c.id));return a(si,v(g({},e),{children:[t(ve,{like_count:i.like_count,is_like:i.is_like,onUpClick:x,onDownClick:w}),a(xe,{children:[t(ri,g({},i)),a(li,{visible:u?u.email===i.user.email:!1,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},to:`/edit?id=${Ve.parse(location.search).id}`,children:"\uC218\uC815"}),t(F,{fontcolor:"deepgray",small:!0,onClick:B,children:"\uC0AD\uC81C"})]}),y,t(Ke,{questionId:i.id})]})]}))}else return s?t("div",{children:"Err..."}):t("div",{children:"loading..."})},ui=()=>a(P,{style:{width:"100%",height:"248px",background:"#646464",marginTop:"15rem",padding:"0 2rem",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",bottom:"0px"},children:[a(Ze,{style:{alignItems:"flex-end",width:"380px",marginBottom:"1rem"},children:[t(Q,{size:"h2",color:"white",children:"42Code"}),t(E,{size:"14",color:"white",weight:"bold",children:"made by ji-park & yejeong & nkim & iha"})]}),t(E,{size:"14",color:"white",children:"Copyright \xA9 2019 - 2021 42Seoul inno. All rights reserved."})]});function ci(){return a("svg",{width:"164",height:"42",viewBox:"0 0 164 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M0 18.2779C0 15.9614 2.53908 14.4657 4.61913 15.4853C9.70397 17.9779 18.0287 21.4939 24.6 21.5351C34.9803 21.6001 39.3328 13.1729 49.7125 13.0496C60.4712 12.9218 65.0907 21.5978 75.85 21.5351C86.4196 21.4734 90.927 13.7098 101.475 13.0496C114.508 12.2339 120.704 21.7509 133.762 21.5351C142.317 21.3936 153.618 17.3358 159.693 14.8836C161.723 14.0642 164 15.5485 164 17.7378V39C164 40.6569 162.657 42 161 42H3C1.34314 42 0 40.6569 0 39V18.2779Z",fill:"#3EC2EC",fillOpacity:"0.5"}),t("path",{d:"M34.8217 0.000244141H25.5478L7 18.6163V26.2429H25.6532V35.5641H34.8744V18.6163H16.3003L34.8217 0.000244141Z",fill:"black"}),t("path",{d:"M122.512 27.8744V0H115.784V27.8744H122.512Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M92.8264 0L95.1288 17.1891L97.4651 0H98.4824H100.405H105.322L107.624 17.1891L109.961 0H112.9L109.111 27.8744H109.055H106.172H102.216L99.4365 7.12348L96.616 27.8744H96.56H93.6764H89.7205L85.9869 0H92.8264Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M132.386 27.8744L134.688 10.6853L137.025 27.8744H138.042H139.964H144.881L147.184 10.6854L149.52 27.8744H152.46L148.671 0H148.615H145.731H141.775L138.996 20.751L136.175 0H136.119H133.236H129.28L125.546 27.8744H132.386Z",fill:"black"}),t("path",{d:"M39.6803 9.61187V0H48.331L39.6803 9.61187Z",fill:"black"}),t("path",{d:"M83.1034 9.61187V0H74.4527L83.1034 9.61187Z",fill:"black"}),t("path",{d:"M57.9429 19.2237L57.9429 27.8744L48.331 27.8744L57.9429 19.2237Z",fill:"black"}),t("path",{d:"M64.8408 19.2233L64.8408 27.874L74.4527 27.874L64.8408 19.2233Z",fill:"black"}),t("path",{d:"M48.8511 9.25621V0H57.9823V9.25621L48.8511 18.6182V27.8744H39.7198V18.6182L48.8511 9.25621Z",fill:"black"}),t("path",{d:"M73.4915 9.25621V0H63.8797V9.25621L73.4915 18.6182V27.8744H83.1034V18.6182L73.4915 9.25621Z",fill:"black"})]})}var di="/assets/422.bd7f157a.png";const hi=r.div`
  display: ${({visible:e})=>e?"flex":"none"};
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;

  /* display: flex; */
  justify-content: space-around;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`,pi=At`
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
`,Ci=r.div`
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

  animation-name: ${pi};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`,gi=r.div`
  /* position: fixed; */
  z-index: 1000;

  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${di});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 55px 55px;
  background-color: white;
`,Oe=({visible:e})=>t(z,{children:a(hi,{visible:e,children:[t(Ci,{}),t(gi,{})]})}),mi=e=>{const[n,i]=D.exports.useState(!1);return a("svg",v(g({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",style:{margin:"0 0.5rem"},onMouseEnter:l=>{i(!0),l.target.style.cursor="pointer",l.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",fill:n?A.color.lightblack:A.color.black})]}))},fi=r(Ue)``,xi=r(U)`
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

  ${({show:e})=>e&&b`
      display: inherit;
    `};
`,wi=r(P)`
  width: 100%;
  height: 100%;
`,et=r(F)`
  display: block;
  width: 100%;
  margin: 2rem 2rem 0 2rem;

  ${({theme:e})=>e&&b`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,Bi=({user:e})=>{const[n,i]=D.exports.useState(!1),[o,s]=D.exports.useState(!1),l=h=>{s(!0),h.target.style.cursor="pointer",h.stopPropagation()},u=()=>{s(!1)},m=()=>{i(!n)},p=async()=>{await $.get("https://swim.42seoul.io/api/auth/logout",{withCredentials:!0}),location.reload()};return a(fi,{children:[t(G,{size:"lg",photo:e==null?void 0:e.image,nickname:(e==null?void 0:e.nickname)?e==null?void 0:e.nickname:"\uC815\uBCF4\uC5C6\uC74C",onMouseEnter:l,onMouseLeave:u,onClick:m,color:o?"grey":"black",children:t(mi,{onClick:()=>{}})}),t(xi,{show:n,tabIndex:0,onFocus:()=>i(!0),children:a(wi,{children:[t(et,{to:"/setting",children:"\uC124\uC815"}),t(et,{onClick:p,children:"\uB85C\uADF8\uC544\uC6C3"})]})})]})},bi=b`
  ${({height:e})=>e&&b`
      height: ${e};
    `}
`,yi=r.div`
  width: 533px;
  height: 644px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;

  ${bi}
`,vi=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(yi,v(g({},n),{children:e}))},ki=()=>a("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 1L16.5 16.5",stroke:"#121212",strokeWidth:"2"}),t("path",{d:"M16.5 1L0.999999 16.5",stroke:"#121212",strokeWidth:"2"})]}),Di=r.span`
  float: right;
  &:hover,
  &:focus {
    cursor: pointer;
    color: red;
  }
`,$i=r(Q)`
  margin-top: 75px;
`,Ai=r.div`
  font-weight: 500;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 38px;
  font-style: normal;
`,tt=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&b`
      height: ${e};
    `}
`,nt=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&b`
      height: ${e};
    `}
`,Ei=r.div`
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
`,ke=u=>{var m=u,{children:e,onClose:n,visible:i,title:o,subtitle:s}=m,l=k(m,["children","onClose","visible","title","subtitle"]);return t(Ei,{visible:i,children:a(vi,v(g({},l),{children:[t(Di,{onClick:n,children:t(ki,{})}),t($i,{size:"h1",children:o}),t(Ai,{children:s}),e]}))})};ke.defaultProps={visible:!0};const Li=o=>{var s=o,{onClose:e,onRegist:n}=s,i=k(s,["onClose","onRegist"]);const[l,u]=D.exports.useState({email:"",password:""}),{email:m,password:p}=l,[h,C]=D.exports.useState(!1),d=async()=>{try{(await $.post("https://swim.42seoul.io/api/auth/login",l,{withCredentials:!0})).status===200?(me("https://swim.42seoul.io/api/users/info"),e(!1)):alert("\uB85C\uADF8\uC778 \uC2E4\uD328!")}catch(w){alert("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638 \uC624\uB958")}u({email:"",password:""})},f=w=>{const{name:B,value:y}=w.target;u(v(g({},l),{[B]:y}))},x=()=>{location.href="https://localhost:5000/auth/42login",e(!1),C(!0)};return a(z,{children:[t(Oe,{visible:h}),t(ke,v(g({onClose:()=>e(!1),title:"\uB85C\uADF8\uC778",subtitle:"\uC774\uBA54\uC77C\uB85C \uB85C\uADF8\uC778"},i),{children:a(tt,{height:"392px",children:[a(nt,{height:"265px",children:[t(W,{name:"email",value:m,onChange:f,placeholder:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"}),t(W,{name:"password",value:p,type:"password",onChange:f,placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"}),t(T,{onClick:d,size:"lg",children:"\uB85C\uADF8\uC778"}),t(F,{onClick:x,fontcolor:"primary",underline:!0,children:"42seoul \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"})]}),t(F,{onClick:()=>{n(!0),e(!1)},fontcolor:"black",children:"\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?"})]})}))]})},zi=i=>{var o=i,{onClose:e}=o,n=k(o,["onClose"]);const[s,l]=D.exports.useState({nickname:"",email:"",password:"",confirm_pass:""}),{nickname:u,email:m,password:p,confirm_pass:h}=s,C=x=>{const{name:w,value:B}=x.target;if(l(v(g({},s),{[w]:B})),w==="confirm_pass"&&p!==""){const y=document.getElementById("diffpass");y.style.display="inherit",p===h?(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",y.style.color="blue"):(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",y.style.color="red")}},d=x=>{if(x.target.name==="confirm_pass"&&p!==""){const w=document.getElementById("diffpass");w.style.display="inherit",p===h?(w.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",w.style.color="blue"):(w.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",w.style.color="red")}},f=async()=>{const x=await $.post("https://swim.42seoul.io/api/auth/signup",s,{withCredentials:!0});l({nickname:"",email:"",password:"",confirm_pass:""}),x.data.result===!0&&e(!1),location.reload()};return t(ke,v(g({title:"\uD68C\uC6D0\uAC00\uC785",subtitle:"\uC774\uBA54\uC77C\uB85C \uD68C\uC6D0\uAC00\uC785",height:"712px",onClose:()=>e(!1)},n),{children:a(tt,{height:"420px",children:[a(nt,{height:"300px",children:[t(W,{name:"nickname",value:u,onChange:C,placeholder:"\uB2C9\uB124\uC784"}),t(W,{name:"email",value:m,onChange:C,placeholder:"\uC774\uBA54\uC77C"}),t(W,{name:"password",value:p,type:"password",onChange:C,placeholder:"\uBE44\uBC00\uBC88\uD638"}),t(W,{name:"confirm_pass",value:h,type:"password",onChange:C,onKeyUp:d,onBlur:d,placeholder:"\uBE44\uBC00\uBC88\uD638 \uD655\uC778"}),t(E,{size:"14",id:"diffpass",style:{width:"449px",marginLeft:"2rem",display:"none"},children:"HiddenBox"})]}),t(T,{onClick:f,size:"lg",children:"\uD68C\uC6D0\uAC00\uC785"})]})}))},Fi=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${A.color.background.grey};
  height: 130px;
  width: 100%;

  margin-bottom: 3rem;
`,Si=r.div``,Ii=r.div``,Mi=r.button`
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
`,Ti=r(Q)`
  margin-bottom: 7px;
`,Hi=()=>{const[e,n]=D.exports.useState(!1),[i,o]=D.exports.useState(!1),{user:s,isLoading:l,isError:u}=N(),[m,p]=D.exports.useState(!1);return D.exports.useEffect(()=>{me("https://swim.42seoul.io/api/users/info")},[]),a(z,{children:[t(Oe,{visible:m}),t(Li,{onRegist:o,visible:e,onClose:n}),t(zi,{visible:i,onClose:o}),a(Fi,{children:[a(Si,{children:[t(ee,{to:"/",children:t(Ti,{size:"h1",children:t(ci,{})})}),t(E,{size:"14",color:"lightgrey",children:"42seoul"})]}),s&&!l?t(Bi,{user:s}):t(Ii,{children:t(Mi,{onClick:()=>{location.href="https://swim.42seoul.io/api/auth/42login",p(!0),setTimeout(()=>{p(!1)},3e4)},children:"42 \uB85C\uADF8\uC778"})})]})]})},Pi=r.div`
  width: 100%;
  height: 100%;

  > * {
    padding: 0 20rem;

    @media (min-width: 768) and (max-width: 1023px) {
      padding: 0 3rem;
    }
    @media (max-width: 767px) {
      padding: 0 1.5rem;
    }
  }
`,Wi=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`,J=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return a(Pi,{children:[t(Hi,{}),t(Wi,v(g({},n),{children:e})),t(ui,{})]})},Vi=r.div`
  margin-bottom: 7rem;
`;r.div`
  margin-bottom: 4rem;
`;const _i=s=>{var l=s,{question:e,answer:n,answerWriting:i}=l,o=k(l,["question","answer","answerWriting"]);return a("div",v(g({},o),{children:[t(Vi,{children:e}),n,i]}))},Ri=n=>{var e=k(n,[]);const{question:i,answer:o,isLoading:s,isError:l}=K(),{user:u,isLoading:m}=N();let p;return!s&&!m&&(p=o==null?void 0:o.map(h=>t(qn,g({isChoosable:u?i.user.email===u.email:!1,is_solved:i.is_solved},h),h.id))),l?t(z,{children:"err"}):t(J,v(g({},e),{children:t(_i,{question:t(ai,{}),answer:p,answerWriting:t(On,{})})}))},qi=r.input`
  width: 100%;
  font-size: 18px;
  background-color: inherit;
  margin: 3rem 0rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`,Ni=r.div``,Zi=r.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  left: -1rem;
`,it=m=>{var p=m,{value:e,inputChange:n,setValue:i,tag:o,setTag:s,placeholder:l}=p,u=k(p,["value","inputChange","setValue","tag","setTag","placeholder"]);const h=document.getElementsByClassName("tagMsgEl")[0],C=document.getElementsByClassName("tagInput")[0],d=new RegExp(/^[a-z0-9+#_]+$/),f=()=>{const c=[...o];e&&!o.includes(e)&&c.push(e),i(""),s(c),C.style.color="black"},x=c=>{c.preventDefault(),n(c),c.target.value&&d.test(c.target.value)&&(h.style.display="none",C.style.color="black")},w=c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),d.test(e)?f():(h.style.display="block",C.style.color="red"))},B=c=>{const I=o.filter(V=>V!==c);s(I)},y=o==null?void 0:o.map(c=>t(ne,{name:c,onDelClick:B,isDel:!0},c));return a(Ni,v(g({},u),{children:[t(Zi,{children:y}),t(qi,{value:e,className:"tagInput",onChange:x,onBlur:f,onKeyPress:w,placeholder:l}),t(E,{className:"tagMsgEl",size:"12",color:"red",style:{position:"relative",top:"-2.5rem",display:"none"},children:"\uC798\uBABB\uB41C \uD0DC\uADF8 \uD615\uC2DD\uC785\uB2C8\uB2E4. \uC601\uC5B4\uC18C\uBB38\uC790\uC640 \uD2B9\uC218\uBB38\uC790 #+_ \uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. ex)ft_pintf"})]}))},ot=r.input`
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
`,Ui=r.div`
  width: 100%;
  height: 100%;
`,Qi=r(ot)`
  width: 100%;
  margin-bottom: 20px;
`,ji=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,Ki=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,Gi=()=>{const{question:e,isLoading:n,isError:i}=K(),o=C=>/^[\w]*$/g.test(C)&&C.length<20,s=C=>C.length<40,l=M("",o),u=M("",s),m=M(""),[p,h]=D.exports.useState([]);if(D.exports.useEffect(()=>{const C=e==null?void 0:e.hashtag.map(d=>d.name);h(C),u.setValue(e?e.title:""),m.setValue(e?e.text:"")},[]),!n&&!i){const C=async d=>{if(d.preventDefault(),!u.value||!m.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{(await $.patch("https://swim.42seoul.io/api/posts/question",{questionId:e.id,title:u.value,hashtag:p,text:m.value},{withCredentials:!0})).status===200?(alert("\uC9C8\uBB38 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${e.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(f){alert(f)}};return a(Ui,{children:[t(Qi,{value:u.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:u.onChange}),t(it,{inputChange:l.onChange,value:l.value,setValue:l.setValue,tag:p,setTag:h,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(ce,{weight:"bold",width:"4rem"}),a(ji,{children:[t(ae,{value:m.value,setValue:m.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),a(Ki,{children:[t(F,{fontcolor:"deepgray",style:{fontSize:"16px",marginRight:"2rem"},to:`/detail?id=${e.id}`,children:"\uCDE8\uC18C"}),t(T,{size:"sm",onClick:C,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})]})}else return i?t("div",{children:"err.."}):t("div",{children:"loading"})},Ji=n=>{var e=k(n,[]);return t(J,v(g({},e),{children:t(Gi,{})}))},Xi=e=>a("svg",v(g({width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{children:[t("circle",{cx:"8",cy:"8",r:"6.5",stroke:"black",strokeWidth:"3"}),t("path",{d:"M13.5 13L19 18.5",stroke:"black",strokeWidth:"3"})]})),Yi=r.div`
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
`,Oi=r(W)`
  /* width: 500px; */
  height: 41px;
  border-radius: 20px 0 0 20px;
`,eo=r.button`
  width: 44px;
  height: 41px;
  float: right;
  border-radius: 0 20px 20px 0;
  background: white;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`,De=s=>{var l=s,{onChange:e,onSearch:n,search:i}=l,o=k(l,["onChange","onSearch","search"]);const[u,m]=D.exports.useState(!1),p={border:`1px solid ${A.color.primary}`},h=C=>{C.key==="Enter"&&n()};return t(z,{children:a(Yi,v(g({style:u?p:{}},o),{children:[t(Oi,{placeholder:"\uAC80\uC0C9\uD560 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694",value:i,border:!1,onKeyPress:h,onChange:e,onFocus:()=>m(!0),onBlur:()=>m(!1)}),t(eo,{onClick:n,children:t(Xi,{})})]}))})},rt=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,st=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,lt=r(U)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,to=r(Xe)`
  margin: 0;
  margin-top: 2rem;
  margin-bottom: 1rem;
`,$e=r(L)`
  width: 100%;
  height: 182.46px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${({size:e})=>e==="sm"&&b`
      width: 100%;
      height: 150px;
      padding: 0.5rem 0.5rem;
    `}
  ${({size:e})=>e==="xsm"&&b`
      width: 100%;
      height: 160px;
      padding: 0.5rem 0.2rem;
    `}
`,Ae=r(P)`
  width: 76%;
  height: 90%;
  align-items: flex-start;

  ${({size:e})=>e==="sm"&&b`
      width: 100%;
    `}
`,Ee=r(Q)`
  &:hover,
  &:focus {
    ${({theme:e})=>e&&b`
        color: ${e.color.lightblack};
        cursor: pointer;
      `};
  }
`,at=r(E)`
  overflow: hidden;
  white-space: wrap;
  font-weight: 100;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  max-height: 50px;
  line-height: 25px;
`,ut=r(L)`
  width: 100%;
`,Le=r(E)``,ie=r(L)`
  width: 100%;
`,ze=r(L)`
  width: 17rem;
  height: 100%;
  padding: 0 1rem;
  ${({size:e})=>e==="sm"&&b`
      justify-content: flex-start;
      padding: 0;

      > p {
        margin-right: 1rem;
      }
    `}
`,Y=r(E)``;r(P)`
  width: 10%;
  height: 100%;
`;const Fe=s=>{var l=s,{name:e,count:n,color:i}=l,o=k(l,["name","count","color"]);return a(Ue,v(g({width:"40px",height:"60px"},o),{children:[t(E,{weight:"bold",size:"18",color:i,children:e}),t(E,{weight:"bold",size:"18",color:i,children:n})]}))},no=f=>{var x=f,{id:e,title:n,text:i,is_solved:o,photo:s,nickname:l,answer_cnt:u=1,like_count:m,view_count:p,created_at:h,hashtag:C}=x,d=k(x,["id","title","text","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);i=i.replace(/^\s*`{3}\w*/gm,"").replace(/[`#*~_>]/g,"").replace(/^!\[[\w.]*\]\([\w.:/-]+\)/gi,""),C.length>5&&(C=C.slice(0,3),C.push({name:"..."}));const w=()=>{const B="https://swim.42seoul.io/api/pages/question/viewCount";$.post(B,{questionId:e},{withCredentials:!0})};return a($e,v(g({},d),{children:[a(Ae,{size:"lg",children:[t(ee,{to:`/detail?id=${e}`,onClick:w,children:t(Ee,{size:"h2",children:n})}),t(at,{size:"18",weight:"normal",color:"grey",children:i}),a(ie,{children:[a(L,{children:[t(Le,{size:"14",weight:"normal",color:"grey",children:X(h)}),C.map((B,y)=>t(ne,{name:B==null?void 0:B.name,style:{marginTop:"0px"}},y))]}),t(G,{size:"sm",photo:s,nickname:l,id:0})]})]}),a(ze,{children:[t(Fe,{name:"\uB2F5\uBCC0",count:u,color:o?"primary":"black"}),t(Fe,{name:"\uCD94\uCC9C",count:m}),t(Fe,{name:"\uC870\uD68C",count:p})]})]}))},io=f=>{var x=f,{id:e,title:n,text:i,is_solved:o,photo:s,nickname:l,answer_cnt:u=1,like_count:m,view_count:p,created_at:h,hashtag:C}=x,d=k(x,["id","title","text","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);i=i.replace(/^\s*`{3}\w*/gm,"").replace(/[`#*~_>]/g,"").replace(/^!\[[\w.]*\]\([\w.:/-]+\)/gi,""),(C==null?void 0:C.length)>2&&(C=C.slice(0,2),C.push({name:"..."}));const w=()=>{const B="https://swim.42seoul.io/api/pages/question/viewCount";$.post(B,{questionId:e},{withCredentials:!0})};return t($e,v(g({size:"xsm"},d),{children:a(Ae,{size:"sm",children:[t(ee,{to:`/detail?id=${e}`,onClick:w,children:t(Ee,{size:"h3",children:n})}),t(at,{size:"12",weight:"normal",color:"grey",children:i}),t(ie,{children:a(L,{children:[t(Le,{size:"12",weight:"normal",color:"grey",children:X(h)}),C==null?void 0:C.map((B,y)=>t(ne,{name:B==null?void 0:B.name,style:{marginTop:"0px"},size:"12"},y))]})}),t(ie,{children:a(ut,{children:[a(ze,{size:"sm",children:[a(Y,{size:"12",weight:"normal",color:o?"primary":"black",children:["\uB2F5\uBCC0 ",u]}),a(Y,{size:"12",weight:"normal",color:"black",children:["\uCD94\uCC9C ",m]}),a(Y,{size:"12",weight:"normal",color:"black",children:["\uC870\uD68C ",p]})]}),t(G,{size:"xsm",photo:s,nickname:l,id:0})]})})]})}))},oo=d=>{var f=d,{id:e,title:n,is_solved:i,photo:o,nickname:s,answer_cnt:l=1,like_count:u,view_count:m,created_at:p,hashtag:h}=f,C=k(f,["id","title","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);(h==null?void 0:h.length)>2&&(h=h.slice(0,2),h.push({name:"..."}));const x=()=>{const w="https://swim.42seoul.io/api/pages/question/viewCount";$.post(w,{questionId:e},{withCredentials:!0})};return t($e,v(g({size:"sm"},C),{children:a(Ae,{size:"sm",children:[t(ee,{to:`/detail?id=${e}`,onClick:x,children:t(Ee,{size:"h2",children:n})}),t(ie,{children:a(L,{children:[t(Le,{size:"14",weight:"normal",color:"grey",children:X(p)}),h.map((w,B)=>t(ne,{name:w==null?void 0:w.name,style:{marginTop:"0px"}},B))]})}),t(ie,{children:a(ut,{children:[a(ze,{size:"sm",children:[a(Y,{size:"14",weight:"normal",color:i?"primary":"black",children:["\uB2F5\uBCC0 ",l]}),a(Y,{size:"14",weight:"normal",color:"black",children:["\uCD94\uCC9C ",u]}),a(Y,{size:"14",weight:"normal",color:"black",children:["\uC870\uD68C ",m]})]}),t(G,{size:"sm",photo:o,nickname:s,id:0})]})})]})}))},de=n=>{var e=k(n,[]);return a(z,{children:[t(R,{minWidth:1024,children:t(no,g({},e))}),t(R,{minWidth:768,maxWidth:1023,children:t(oo,g({},e))}),t(R,{maxWidth:767,children:t(io,g({},e))})]})},ro=r.ul`
  /* width: 380px; */
  /* height: 41px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  /* margin-bottom: 1rem; */

  ${({width:e})=>e&&b`
      width: ${e};
    `}
  ${({height:e})=>e&&b`
      width: ${e};
    `}
  ${({size:e})=>e==="sm"&&b`
      height: 21px;
      /* width: 224px; */
    `}
	${({size:e})=>e==="xsm"&&b`
      margin: 0 0;
    `}
`,so=r.li`
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
  ${({size:e})=>e==="sm"&&b`
      font-size: 18px;
      margin: 0 0.8rem;
      /* width: 67px; */
    `}
  ${({size:e})=>e==="xsm"&&b`
      font-size: 14px;
      margin: 0 0;
      /* width: 67px; */
    `}
`,S=s=>{var l=s,{active:e,children:n,onTabClick:i}=l,o=k(l,["active","children","onTabClick"]);return t(so,v(g({style:e?{color:"black",transition:"color 0.5s ease"}:void 0,onClick:i},o),{children:n}))},O=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(ro,v(g({},n),{children:e}))};O.Item=S;const lo=e=>{const[n,i]=D.exports.useState(!1);return t("svg",v(g({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginLeft:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:l=>{i(!0),l.target.style.cursor="pointer",l.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:t("path",{d:"M1.225 23.5507C1.8375 24.1532 2.825 24.1532 3.4375 23.5507L13.825 13.332C14.3125 12.8524 14.3125 12.0777 13.825 11.5982L3.4375 1.37952C2.825 0.776976 1.8375 0.776976 1.225 1.37952C0.612503 1.98206 0.612503 2.95351 1.225 3.55605L10.275 12.4712L1.2125 21.3864C0.612503 21.9767 0.612503 22.9604 1.225 23.5507Z",fill:n?A.color.lightblack:A.color.black})}))},ao=e=>{const[n,i]=D.exports.useState(!1);return t("svg",v(g({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginRight:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:l=>{i(!0),l.target.style.cursor="pointer",l.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:t("path",{d:"M13.775 1.39185C13.1625 0.789306 12.175 0.789306 11.5625 1.39185L1.17501 11.6105C0.687512 12.0901 0.687512 12.8648 1.17501 13.3443L11.5625 23.563C12.175 24.1655 13.1625 24.1655 13.775 23.563C14.3875 22.9604 14.3875 21.989 13.775 21.3865L4.72501 12.4713L13.7875 3.55609C14.3875 2.96584 14.3875 1.9821 13.775 1.39185Z",fill:n?A.color.lightblack:A.color.black})}))},uo=r.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`,co=s=>{var l=s,{number:e,active:n,onClick:i}=l,o=k(l,["number","active","onClick"]);const[u,m]=D.exports.useState(!1),p=d=>{m(!0),d.target.style.color=A.color.lightblack,d.stopPropagation()},h=d=>{m(!1),d.target.style.color=A.color.black},C={display:"flex",justifyContent:"space-around",alignItems:"center"};return t(Be,v(g({onClick:i,size:"sm",color:n?A.color.primary:A.color.white,style:C,onMouseEnter:p,onMouseLeave:h},o),{children:e}))};function ho(e,n){const i=10*(n.current-1)+1;let o;return e<=10?o=e:i+9>=e?o=e-i+1:o=10,Array(o).fill(i).map((s,l)=>s+l)}function ct(e,n){let i=parseInt(n/e);return n%e==0&&(i=i-1),i+1}const he=l=>{var u=l,{page:e=1,limit:n=8,onPage:i,questionCount:o=10}=u,s=k(u,["page","limit","onPage","questionCount"]);const m=ct(n,o),p=D.exports.useRef(1),h=()=>{if(e===1){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==1&&(p.current-=1),i(e-1)},C=()=>{if(e===m){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==0&&(p.current+=1),i(e+1)};return a(uo,v(g({},s),{children:[t(ao,{onClick:h}),t(L,{children:ho(m,p).map(d=>t(co,{number:d,onClick:()=>i(d),active:e===d},d))}),t(lo,{onClick:C})]}))},po=async e=>await $.get(e).then(i=>i.data).catch(i=>{throw fe(i),Error()}),Co=async e=>await $.get(e).then(i=>i.data.questionList).catch(i=>{throw fe(i),Error()}),go=async()=>await $.get("https://swim.42seoul.io/api/pages/list/question?pageNumber=1").then(n=>n.data).catch(n=>{throw fe(n),Error()}),mo=(e,n)=>n&&!n.length?null:`https://swim.42seoul.io/api/pages/list/question?pageNumber=${e+1}`,fo=()=>{const{data:e,size:n,setSize:i,error:o,isValidating:s}=Et(mo,Co);return{question:e,page:n,setPage:i,isLoading:!o&&!e,isError:o,isRefreshing:s&&e&&e.length===n}},xo=()=>{const{data:e,error:n}=_("questionCount",go,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),i=8;return{questionCount:e==null?void 0:e.questionCount,pageSize:ct(i,e==null?void 0:e.questionCount),isLoading:!n&&!e,isError:n}},wo=(e,n)=>{const i=e===0?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:e===1?`https://swim.42seoul.io/api/pages/list/question/like?pageNumber=${n}`:e===2?`https://swim.42seoul.io/api/pages/list/question/unsolved?pageNumber=${n}`:e===3?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:"",{data:o,error:s}=_(i,po);return{question:o,isLoading:!s&&!o,isError:s}},pe=r.div`
	width: 100%;
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
	${({height:e})=>e&&b`
      height: ${e};
    `}
	${({width:e})=>e&&b`
      width: ${e};
    `}
`,Bo=async e=>(await $.get(e)).data;function bo(e){const n=`https://swim.42seoul.io/api/hashtags/count?pageNumber=${e}`,{data:i,error:o}=_(n,Bo);return{tagList:i&&i.hashtag,isLoading:!o&&!i,isError:o}}const yo=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 8rem;

  margin-right: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,vo=r.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${A.color.text.primary};
  -webkit-transition: color 0.2s;
  -moz-transition: color 0.2s;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: ${ge(.1,A.color.text.primary)};
  }
`,ko=r.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${A.color.text.grey};

  margin-top: 12px;
`;function Do(s){var l=s,{name:e,questionCount:n,onClick:i}=l,o=k(l,["name","questionCount","onClick"]);return a(yo,v(g({},o),{children:[t(vo,{onClick:i,children:e}),a(ko,{children:["\uC9C8\uBB38 ",n,"\uAC1C"]})]}))}const $o=r(U)`
  width: 100%;
  padding: 1.5rem 2.5rem;
`,Ao=r.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  margin-top: 1.5rem;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Eo=r.ul`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;function dt(n){var e=k(n,[]);const[i,o]=D.exports.useState(1),{tagList:s,isLoading:l}=bo(i),u=Lt();if(l)return t("div",{children:"loading"});{const m=s==null?void 0:s.hashTagList.map(p=>t(Do,g({onClick:()=>{u.push({pathname:`/tag/${p.name}`,state:{hashtagId:p.id,hashtagName:p.name}})}},p),p.id));return a($o,v(g({},e),{children:[a(Ao,{children:["\uBAA8\uB4E0 \uD0DC\uADF8 (",s==null?void 0:s.hashTagListCount,")\uAC1C"]}),t(Eo,{children:m}),t(P,{height:"115px",children:t(he,{limit:30,questionCount:s==null?void 0:s.hashTagListCount,page:i,onPage:o})})]}))}}function Lo(e){const[n,i]=D.exports.useState(!1);return D.exports.useEffect(()=>{if(!e.current)return;const o=new IntersectionObserver(([s])=>i(s.isIntersecting));return o.observe(e.current),()=>{o.disconnect()}},[]),n}const zo=n=>{var e=k(n,[]);var y;const i=D.exports.useRef(null),o=Lo(i),[s,l]=D.exports.useState(0),{question:u,page:m,setPage:p,isLoading:h,isError:C,isRefreshing:d}=fo(),f=((y=u==null?void 0:u[0])==null?void 0:y.length)===0,x=u?[].concat(...u):[],{pageSize:w}=xo(),B=f||o&&m>=w;return D.exports.useEffect(()=>{o&&!B&&!d&&p(m+1)},[o,d]),C?t("div",{children:"Error!!"}):a(rt,{children:[a(O,v(g({},e),{children:[t(S,{active:s===0,onTabClick:()=>l(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{active:s===1,onTabClick:()=>l(1),children:"\uC778\uAE30\uC21C"}),t(S,{active:s===2,onTabClick:()=>l(2),children:"\uB2F5\uBCC0\uD544\uC694"}),t(S,{active:s===3,onTabClick:()=>l(3),children:"\uD0DC\uADF8"})]})),s===3?t(dt,{}):a(lt,{children:[h?[...Array(8)].map((c,I)=>t(st,{children:t(pe,{})},I)):x&&x.map((c,I)=>{var V,j;return t(de,g({id:c==null?void 0:c.id,title:c==null?void 0:c.title,text:c==null?void 0:c.text,photo:(V=c==null?void 0:c.user)==null?void 0:V.photo,nickname:(j=c==null?void 0:c.user)==null?void 0:j.nickname,is_solved:c==null?void 0:c.is_solved,answer_cnt:c==null?void 0:c.answer_count,like_count:c==null?void 0:c.like_count,view_count:c==null?void 0:c.view_count,hashtag:c==null?void 0:c.hashtag,created_at:c==null?void 0:c.created_at},e),I)}),t("div",{ref:i}),B?t(to,{children:"\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0 \uC785\uB2C8\uB2E4!"}):t(z,{})]})]})},Fo=n=>{var e=k(n,[]);const[i,o]=D.exports.useState(0),[s,l]=D.exports.useState(1),{question:u,isLoading:m,isError:p}=wo(i,s);return p?t("div",{children:"Error!!"}):a(rt,{children:[a(O,v(g({},e),{children:[t(S,{active:i===0,onTabClick:()=>o(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{active:i===1,onTabClick:()=>o(1),children:"\uC778\uAE30\uC21C"}),t(S,{active:i===2,onTabClick:()=>o(2),children:"\uB2F5\uBCC0\uD544\uC694"}),t(S,{active:i===3,onTabClick:()=>o(3),children:"\uD0DC\uADF8"})]})),i===3?t(dt,{}):a(lt,{children:[m?[...Array(8)].map((h,C)=>t(st,{children:t(pe,{})},C)):(u==null?void 0:u.questionList)&&(u==null?void 0:u.questionList.map((h,C)=>{var d;return t(de,g({id:h.id,title:h.title,text:h.text,photo:h.user.photo,nickname:(d=h==null?void 0:h.user)==null?void 0:d.nickname,is_solved:h.is_solved,answer_cnt:h.answer_count,like_count:h.like_count,view_count:h.view_count,hashtag:h.hashtag,created_at:h.created_at},e),C)})),t(P,{height:"115px",children:t(he,{questionCount:u==null?void 0:u.questionCount,page:s,onPage:l})})]})]})},So=n=>{var e=k(n,[]);return a(z,{children:[t(R,{minWidth:768,children:t(Fo,g({},e))}),t(R,{maxWidth:767,children:t(zo,g({},e))})]})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const Io=r(L)`
  width: 100%;
  margin-bottom: 3rem;
`,Mo=r(L)`
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
`;const To=({panel:e,content1:n,content2:i})=>a(z,{children:[t(Io,{children:e}),a(Mo,{children:[n,i]})]}),Ho=r.div`
  width: 28%;
  position: relative;
  @media (max-width: 910px) {
    display: none;
    background-color: pink;
  }
`,Po=r(U)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 2.5rem;
  padding-bottom: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
`,Wo=r(L)``,Vo=r.span`
  ${({theme:e})=>e&&b`
      background-color: ${e.color.primary};
    `}
  position: absolute;
  width: 130px;
  height: 15px;
  top: 75px;
  opacity: 30%;
  z-index: 0;
`,_o=r.div`
  margin: 1.5rem 0;
  margin-bottom: 2rem;
`,Ro=r.div`
  height: 12px;
  width: 0.5px;
  margin: 0 1rem;
  ${({theme:e})=>b`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,qo=r.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  * & * {
    margin-right: 1.5rem;
  }
`,No=r.div`
  /* z-index: 100; */
`,Zo=({onHover:e})=>{const[n,i]=D.exports.useState(!1),o=D.exports.useRef(null),s=u=>{if(u.type=="click")e(!n),i(!n);else if(u.type=="mouseleave"){if(n)return;e(!1)}},l=u=>{u.target.style.cursor="pointer",e(!0)};return a("svg",{ref:o,xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:n?`${A.color.lightprimary}`:"black",onClick:s,onMouseEnter:l,onMouseLeave:s,children:[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})]})},Uo=async e=>(await $.get(e)).data,Qo=()=>{const e="https://swim.42seoul.io/api/users/ranking",{data:n,error:i}=_(e,Uo),o=n==null?void 0:n.monthRankerInfo.filter(l=>l.id!=null),s=n==null?void 0:n.totalRankerInfo.filter(l=>l.id!=null);return{ranking:{month:o,total:s},isLoading:!i&&!n,isError:i}},jo=r(U)`
  height: 400px;
  width: 350px;
  background-color: rgba(53, 147, 235, 0.9);
  padding: 20px 30px;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 90px;

  ${({visible:e})=>e===!1&&b`
      display: none;
    `}
`,Ko=r.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
`;r.span`
  height: 100%;
  width: 100%;
`;const oe=r.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
  height: 30px;
  padding-bottom: 2px;
  margin-top: 1.5rem;
  border-bottom: 1px solid rgba(75, 131, 182, 0.8);
`,Go=r.div`
  font-size: 10px;
  font-weight: 500;
  color: white;
  line-height: 2rem;
  padding-bottom: 2px;
  margin-top: 2rem;
  /* border-bottom: 1px solid rgba(75, 131, 182, 0.8); */
`,Jo=r.a`
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
`,Xo=({visible:e=!1})=>a(jo,{visible:e,children:[a(Ko,{children:["\uC810\uC218\uC0B0\uC815 \uAE30\uC900",t("span",{style:{fontSize:"40px",marginLeft:"1rem"},role:"img","aria-label":"swim",children:"\u{1F3CA}"})]}),t(oe,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(oe,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC758 \uB2F5\uBCC0 \uC911 \uD558\uB098\uB97C \uCC44\uD0DD"}),t(oe,{children:"+10 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(oe,{children:"+15 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC774 \uCC44\uD0DD"}),t(oe,{children:"-1 \uC810 : \uB2E4\uB978 \uC0AC\uB78C\uC758 \uC9C8\uBB38/\uB2F5\uBCC0\uC5D0 \uC2EB\uC5B4\uC694\uB97C \uB2EE"}),a(Go,{children:["\uB108\uBB34 \uC131\uC758\uC5C6\uAC8C \uC801\uD600\uC9C4 \uAE00\uB4E4\uC740 \uD1B5\uBCF4\uC5C6\uC774 \uC0AD\uC81C\uB418\uBA70, \uC774\uBCA4\uD2B8\uC5D0\uC11C \uC81C\uC678\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."," ",t(Jo,{href:"https://gratis-cardboard-45e.notion.site/42swim-7d4fd87c1cbd4686a7218788610955d3",children:"\uCEE4\uBBA4\uB2C8\uD2F0 \uC591\uC2DD"})," ","\uC744 \uC9C0\uCF1C\uC8FC\uC138\uC694!"]})]}),ht=({rank:e,photo:n,nickname:i})=>a(qo,{children:[t(E,{size:"18",weight:"bold",color:"deepgray",children:e}),t(G,{border:!0,size:"lg",nickname:i,photo:n})]}),Yo=()=>{const{ranking:e,isLoading:n,isError:i}=Qo(),{month:o,total:s}=e,[l,u]=D.exports.useState(0),[m,p]=D.exports.useState(!1),h=C=>{p(C)};return n?t("div",{children:"loading"}):i?t("div",{children:"error"}):a(Ho,{children:[t(Ze,{style:{height:"44px",justifyContent:"flex-start",alignItems:"flex-start"}}),a(Po,{children:[a(Wo,{children:[t(E,{size:"18",weight:"bold",style:{zIndex:"2"},children:"42Swimmer \uB7AD\uD0B9"}),t(Vo,{}),t(Zo,{onHover:h}),t(Xo,{visible:m})]}),t(_o,{children:a(O,{size:"xsm",children:[t(S,{size:"xsm",active:l===0,onTabClick:()=>u(0),children:"\uC6D4\uBCC4\uC21C"}),t(Ro,{}),t(S,{size:"xsm",active:l===1,onTabClick:()=>u(1),children:"\uC804\uCCB4\uC21C"})]})}),t(No,{children:l===0?o.map((C,d)=>t(ht,{rank:d,nickname:C.nickname,photo:C.photo},C.id)):s.map((C,d)=>t(ht,{rank:d,nickname:C.nickname,photo:C.photo},C.id))})]})]})},re=e=>t("svg",v(g({},e),{height:"10px",viewBox:"0 0 448 448",width:"10px",fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"})})),Oo=r(T)`
  border-radius: 50%;
  width: 41px;
  padding: 0;
`,er=({onClick:e})=>a(z,{children:[t(R,{minWidth:1024,children:a(T,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(re,{style:{marginLeft:"2rem"}})]})}),t(R,{minWidth:768,maxWidth:1023,children:a(T,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(re,{style:{marginLeft:"2rem"}})]})}),t(R,{maxWidth:767,children:t(Oo,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:t(re,{})})})]}),tr=i=>{var o=i,{history:e}=o,n=k(o,["history"]);const{value:s,onChange:l}=M("");return t(z,{children:t(J,{children:t(To,{panel:a(z,{children:[t(De,{onChange:l,search:s,onSearch:m=>{zt(m),e.push(`/search?keyword=${s}`)}}),t(er,{onClick:()=>e.push("/writing")})]}),content1:t(So,{}),content2:t(Yo,{})})})})},nr=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,ir=r(L)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,or=r.span`
  font-size: 18px;
  font-weight: 700;
`,rr=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,sr=r(U)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,lr=async e=>(await $.get(e)).data,ar=(e,n,i)=>{const s=`https://swim.42seoul.io/api/pages/list/question/keyword?pageNumber=${n}&keyword=${i}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:l,error:u}=_(s,lr);return{question:l,isLoading:!u&&!l,isError:u}},pt=i=>{var o=i,{keyword:e}=o,n=k(o,["keyword"]);const[s,l]=D.exports.useState(0),[u,m]=D.exports.useState(1),{question:p,isLoading:h,isError:C}=ar(s,u,e);return C?t("div",{children:"Error!!"}):t(nr,{children:a(sr,{children:[a(ir,{children:[a(or,{children:["\uAC80\uC0C9\uACB0\uACFC (",p==null?void 0:p.questionCount,"\uAC74)"]}),a(O,v(g({size:"sm"},n),{children:[t(S,{size:"sm",active:s===0,onTabClick:()=>l(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{size:"sm",active:s===1,onTabClick:()=>l(1),children:"\uC778\uAE30\uC21C"}),t(S,{size:"sm",active:s===2,onTabClick:()=>l(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),h?[...Array(8)].map((d,f)=>t(rr,{children:t(pe,{})},f)):p==null?void 0:p.questionList.map((d,f)=>{var x;return t(de,g({id:d.id,title:d.title,text:d.text,photo:d.user.photo,nickname:(x=d==null?void 0:d.user)==null?void 0:x.nickname,is_solved:d.is_solved,answer_cnt:d.answer_count,like_count:d.like_count,view_count:d.view_count,hashtag:d.hashtag,created_at:d.created_at},n),f)}),t(P,{height:"115px",children:t(he,{questionCount:p==null?void 0:p.questionCount,page:u,onPage:m})})]})})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const ur=r(L)`
  width: 100%;
  margin-bottom: 3rem;
`,cr=r(L)`
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
`;const dr=({panel:e,content:n})=>a(z,{children:[t(ur,{children:e}),t(cr,{children:n})]}),hr=({location:e})=>{const i=Ft.parse(e.search,{ignoreQueryPrefix:!0}).keyword,{value:o,onChange:s}=M(i),[l,u]=D.exports.useState(i);return t(J,{children:t(dr,{panel:a(z,{children:[t(De,{onChange:s,search:o,onSearch:()=>{u(o)}}),a(T,{shadow:!0,onClick:()=>{},size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(re,{style:{marginLeft:"2rem"}})]})]}),content:t(pt,{keyword:l})})})},pr=r.div`
  padding: 0 5rem;
`,Cr=r(L)`
  justify-content: flex-start;
  > * {
    margin-right: 3rem;
  }
`,gr=r(P)`
  height: 300px;
  /* width: 25%; */
  justify-content: center;

  > * {
    margin-bottom: 2rem;
  }
`,mr=r.div`
  width: 0.5px;
  height: 150px;
  margin: 0 2rem;
  ${({theme:e})=>b`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,fr=r.div`
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
`,xr=r.div`
  > * {
    margin-top: 2rem;
  }

  > button {
    margin-top: 3rem;
    float: right;
    /* 어케할지 결정하기  */
  }
`,wr=({tlPanel:e,trPanel:n,bPanel:i})=>a(pr,{children:[a(Cr,{children:[t(gr,{children:e}),t(mr,{}),t(fr,{children:n})]}),t(xr,{children:i})]}),Br=r.div`
  width: 100%;
  height: 100px;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>b`
    border-bottom: 1px ${e.color.lightgrey} solid;
  `}
`,br=r(L)`
  padding: 1.5rem 0;
`,yr=r(Q)`
  width: 25%;
`,vr=r(E)`
  width: 65%;
`,kr=r(L)`
  width: 10%;
`,Dr=r(E)`
  margin-bottom: 1.5rem;
`,Ct=({name:e,value:n,etc:i,desc:o})=>a(Br,{children:[a(br,{children:[t(yr,{size:"h2",children:e}),t(vr,{weight:"normal",size:"20",children:n}),t(kr,{children:i})]}),t(Dr,{size:"14",color:"lightgrey",children:o})]}),$r=r(W)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  margin-right: 1.5rem;
`;r(W)`
  font-size: 20px;
  padding: 10px 15px;
  width: 340px;
  height: inherit;
  padding: 10px 15px;
`;const Ar=r(Z)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > button {
    margin-right: 1rem;
  }
`,Se=r(T)`
  width: 153px;
`,Er=n=>{var e=k(n,[]);const{user:i,isLoading:o,isError:s}=N(),{value:l,onChange:u,setValue:m}=M(i==null?void 0:i.nickname),[p,h]=D.exports.useState(!1);if(s)return alert("\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"),t(We,{to:"/"});if(o)return t("div",{children:"loading..."});const C=()=>{const w=document.getElementById("uploadImg");w==null||w.click()},d=async()=>{const w=new FormData,B=document.getElementById("uploadImg").files[0],y="https://swim.42seoul.io/api/users/image";w.append("imgFile",B),await $.patch(y,w,{withCredentials:!0}).then(c=>{alert("\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC\uB97C \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},f=async()=>{const w="https://swim.42seoul.io/api/users/image";await $.delete(w,{withCredentials:!0}).then(B=>{alert("\uC774\uBBF8\uC9C0\uB97C \uC815\uC0C1\uC801\uC73C\uB85C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},x=async()=>{const w="https://swim.42seoul.io/api/users/nickname",B={nickname:l};await $.patch(w,B,{withCredentials:!0}).then(y=>{alert("\uB2C9\uB124\uC784 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),me("https://swim.42seoul.io/api/users/info"),h(!1)};return t(J,v(g({},e),{children:t(wr,{tlPanel:a(z,{children:[t(Be,{size:"lg",img:(i==null?void 0:i.image)?i.image:null}),t(Se,{size:"sm",color:"primary",shadow:!0,onClick:C,children:"\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"}),t("form",{id:"imgform",method:"patch",encType:"application/json",style:{display:"none"},children:t("input",{id:"uploadImg",type:"file",onChange:d})}),t(Se,{size:"sm",color:"white",shadow:!0,onClick:f,children:"\uC774\uBBF8\uC9C0 \uC81C\uAC70"})]}),trPanel:a(z,{children:[a(Z,{visible:!p,children:[t(Q,{size:"h1",children:i==null?void 0:i.nickname}),t(ce,{weight:"bold",width:"4rem"}),t(F,{fontcolor:"primary",underline:!0,to:"#",onClick:()=>{m(i==null?void 0:i.nickname),h(!0)},children:"\uC218\uC815"})]}),a(Ar,{visible:p,children:[t($r,{value:l||"",onChange:u}),t(T,{size:"sm",color:"lightprimary",shadow:!0,onClick:x,children:"\uC218\uC815\uD558\uAE30"}),t(F,{fontcolor:"deepgray",underline:!0,to:"#",onClick:()=>h(!1),children:"\uCDE8\uC18C"})]})]}),bPanel:a(z,{children:[t(Ct,{name:"\uC774\uBA54\uC77C",value:i.email,etc:t(F,{fontcolor:"primary",underline:!0,children:"\uC218\uC815"}),desc:"\uD68C\uC6D0 \uC778\uC99D \uB610\uB294 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uBC1C\uC1A1\uD558\uB294 \uC774\uBA54\uC77C\uC744 \uC218\uC2E0\uD558\uB294 \uC8FC\uC18C\uC785\uB2C8\uB2E4."}),t(Ct,{name:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD",value:t(F,{fontcolor:"primary",underline:!0,children:"\uBCC0\uACBD\uD558\uAE30"}),desc:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uD558\uAE30 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC704\uC758 \uC774\uBA54\uC77C\uB85C  \uBCC0\uACBD\uD558\uAE30 \uD398\uC774\uC9C0\uAC00 \uBC1C\uC1A1\uB429\uB2C8\uB2E4."}),t(Se,{size:"sm",fontColor:"white",color:"red",shadow:!0,children:"\uD68C\uC6D0 \uD0C8\uD1F4"})]})})}))},Lr=r.div`
  width: 100%;
  height: 100%;
`,zr=r(ot)`
  width: 100%;
  margin-bottom: 20px;
`,Fr=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,Sr=()=>{const e='\uC9C8\uBB38\uC744 \uB0A8\uACA8\uBCF4\uC138\uC694!\n  ```C\n  printf("helloWord");\n  ```',n=d=>/[\w]*$/g.test(d)&&d.length<20,i=d=>d.length<40,o=M("",n),s=M("",i),l=M(e),[u,m]=D.exports.useState([]),{isLoading:p,user:h}=N();D.exports.useEffect(()=>{!p&&!h&&(alert("\uB85C\uADF8\uC778 \uD6C4 \uC9C8\uBB38 \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),location.href="/")},[h]);const C=async d=>{if(d.preventDefault(),!s.value||!l.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{const f=await $.post("https://swim.42seoul.io/api/posts/question",{title:s.value,hashtag:u,text:l.value},{withCredentials:!0});f.status===200?(alert("\uC9C8\uBB38 \uC791\uC131\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${f.data.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(f){alert(f)}};return a(Lr,{children:[t(zr,{value:s.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:s.onChange}),t(it,{inputChange:o.onChange,value:o.value,setValue:o.setValue,tag:u,setTag:m,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(ce,{weight:"bold",width:"4rem",style:{marginBottom:"3rem"}}),a(Fr,{children:[t(ae,{value:l.value,setValue:l.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),t(T,{size:"sm",onClick:C,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})},Ir=n=>{var e=k(n,[]);return t(J,v(g({},e),{children:t(Sr,{})}))},Mr=St`
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
`,Tr=({children:e})=>a(It,{theme:A,children:[t(Mr,{}),e]});r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const Hr=r(L)`
  width: 100%;
  margin-bottom: 3rem;
`,Pr=r(L)`
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
`;const Wr=({panel:e,content:n})=>a(z,{children:[t(Hr,{children:e}),t(Pr,{children:n})]}),Vr=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,_r=r(L)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Rr=r.span`
  font-size: 18px;
  font-weight: 700;
`,qr=r.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme:e})=>e.color.primary};
`,Nr=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Zr=r(U)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Ur=async e=>(await $.get(e)).data,Qr=(e,n,i)=>{const s=`https://swim.42seoul.io/api/pages/list/question/hashtag/id?pageNumber=${n}&hashtagId=${i}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:l,error:u}=_(s,Ur);return{question:l,isLoading:!u&&!l,isError:u}},jr=o=>{var s=o,{hashtagName:e,hashtagId:n}=s,i=k(s,["hashtagName","hashtagId"]);const[l,u]=D.exports.useState(0),[m,p]=D.exports.useState(1),{question:h,isLoading:C,isError:d}=Qr(l,m,n);return d?t("div",{children:"Error!!"}):t(Vr,{children:a(Zr,{children:[a(_r,{children:[a(Rr,{children:[a(qr,{children:["#",e]})," \uAC80\uC0C9\uACB0\uACFC (",h==null?void 0:h.questionCount,"\uAC74)"]}),a(O,v(g({size:"sm"},i),{children:[t(S,{size:"sm",active:l===0,onTabClick:()=>u(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{size:"sm",active:l===1,onTabClick:()=>u(1),children:"\uC778\uAE30\uC21C"}),t(S,{size:"sm",active:l===2,onTabClick:()=>u(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),C?[...Array(8)].map((f,x)=>t(Nr,{children:t(pe,{})},x)):h==null?void 0:h.questionList.map((f,x)=>{var w;return t(de,g({id:f.id,title:f.title,text:f.text,photo:f.user.photo,nickname:(w=f==null?void 0:f.user)==null?void 0:w.nickname,is_solved:f.is_solved,answer_cnt:f.answer_count,like_count:f.like_count,view_count:f.view_count,hashtag:f.hashtag,created_at:f.created_at},i),x)}),t(P,{height:"115px",children:t(he,{questionCount:h==null?void 0:h.questionCount,page:m,onPage:p})})]})})},Kr=({location:e})=>{const n=e.state,{value:i,onChange:o}=M(""),[s,l]=D.exports.useState("");return t(J,{children:t(Wr,{panel:a(z,{children:[t(De,{onChange:o,search:i,onSearch:()=>{l(i)}}),a(T,{shadow:!0,onClick:()=>{},size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(re,{style:{marginLeft:"2rem"}})]})]}),content:s===""?t(jr,{hashtagName:n.hashtagName,hashtagId:n.hashtagId}):t(pt,{keyword:s})})})};te.event({category:"User",action:"Created an Account"});te.exception({description:"An error ocurred",fatal:!0});const Gr=()=>{const e=qe();return D.exports.useEffect(()=>{te.initialize("UA-215641389-1"),te.set({page:e.pathname}),te.pageview(e.pathname)},[e]),t(Tr,{children:a(Mt,{children:[t(q,{path:"/",exact:!0,render:n=>t(tr,g({},n))}),t(q,{path:"/search",exact:!0,render:n=>t(hr,g({},n))}),t(q,{path:"/tag/:hashtagName",exact:!0,render:n=>t(Kr,g({},n))}),t(q,{path:"/detail",exact:!0,render:n=>t(Ri,g({},n))}),t(q,{path:"/writing",exact:!0,render:n=>t(Ir,g({},n))}),t(q,{path:"/edit",exact:!0,render:n=>t(Ji,g({},n))}),t(q,{path:"/setting",exact:!0,render:n=>t(Er,g({},n))}),t(q,{path:"/auth",render:n=>t(Rt,g({},n))})]})})};Tt({dsn:"https://be73c673dc5040cab904c7281630f650@o1092079.ingest.sentry.io/6110101",integrations:[new Ht],tracesSampleRate:1});Pt.render(t(Wt.StrictMode,{children:t(Vt,{children:t(Gr,{})})}),document.getElementById("root"));
