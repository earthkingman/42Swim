var Bt=Object.defineProperty,bt=Object.defineProperties;var yt=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var ze=(e,n,i)=>n in e?Bt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,C=(e,n)=>{for(var i in n||(n={}))Ee.call(n,i)&&ze(e,i,n[i]);if(ie)for(var i of ie(n))Le.call(n,i)&&ze(e,i,n[i]);return e},v=(e,n)=>bt(e,yt(n));var k=(e,n)=>{var i={};for(var o in e)Ee.call(e,o)&&n.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&ie)for(var o of ie(e))n.indexOf(o)<0&&Le.call(e,o)&&(i[o]=e[o]);return i};import{r as D,j as t,R as Fe,a as $,Z as _,q as Se,C as B,s as r,w as vt,L as oe,b as Ie,l as Me,c as l,F as L,d as kt,u as Te,e as he,f as pe,U as Dt,H as Ce,M as j,m as $t,g as ge,h as At,i as Et,k as Lt,W as zt,n as Ft,o as Y,S as St,p as R,t as It,B as Mt,v as Tt,x as Ht,y as Pt}from"./vendor.e61329f1.js";const Wt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}};Wt();const Vt=n=>{var e=k(n,[]);const i=location.search;return D.exports.useEffect(()=>{(async()=>{await $.get(`https://swim.42seoul.io/api/auth/authResult${i}`)})()},[i]),t(Fe,{to:"/"})},_t=async e=>await $({method:"get",url:e,withCredentials:!0}).then(i=>i.data).catch(i=>{throw i}),q=()=>{const e="https://swim.42seoul.io/api/users/info",{data:n,error:i}=_(e,_t);return{isLogin:n,user:n&&n.result?n.user:null,isLoading:!i&&!n,isError:i}},Rt=e=>$.get(e,{withCredentials:!0}).then(n=>n.data),K=()=>{const e=Se.parse(location.search).id,{data:n,error:i,mutate:o}=_(`https://swim.42seoul.io/api/pages/detail/question?questionId=${e}`,Rt),a=(d,f,w,x)=>{if(n)if(x){let b=n.questionInfo.like_count;b=w?b-1:b+1,o({questionInfo:v(C({},n.questionInfo),{like_count:b,is_like:null})},!1),$.delete(`https://swim.42seoul.io/api/posts/question/like?questionId=${f}&questionUserId=${d}&isLike=${w}`,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>o())}else{let b=n.questionInfo.like_count;b=w?b+1:b-1,o({questionInfo:v(C({},n.questionInfo),{like_count:b,is_like:w})},!1),$.post("https://swim.42seoul.io/api/posts/question/like",{questionUserId:d,questionId:f,isLike:w},{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>{o()})}},s=(d,f,w,x)=>{if(x){let b=n.questionInfo.like_count;b=w?b-1:b+1;const y=n.questionInfo.answer.map(c=>(c.id===f&&(c.like_count=b,c.is_like=null),c));o({questionInfo:v(C({},n.questionInfo),{answer:y})},!1),$.delete(`https://swim.42seoul.io/api/posts/answer/like?answerId=${f}&answerUserId=${d}&isLike=${w}`,{withCredentials:!0}).catch(c=>{throw alert(c),c}).finally(()=>{o()})}else{let b=n.questionInfo.like_count;b=w?b+1:b-1;const y=n.questionInfo.answer.map(c=>(c.id===f&&(c.like_count=b,c.is_like=w),c));o({questionInfo:v(C({},n.questionInfo),{answer:y})},!1),$.post("https://swim.42seoul.io/api/posts/answer/like",{answerUserId:d,answerId:f,isLike:w},{withCredentials:!0}).catch(c=>{throw alert(c),c}).finally(()=>{o()})}},u=(d,f,w)=>{n&&$.post("https://swim.42seoul.io/api/posts/comment",{text:d,questionId:f,answerId:w},{withCredentials:!0}).catch(x=>{throw alert(x),x}).finally(()=>o())},g=(d,f,w,x)=>{if(n){const b="https://swim.42seoul.io/api/posts/comment",y=C({},n);x?y.questionInfo.answer=y.questionInfo.answer.map(c=>(c.id===x&&(c.comment=c.comment.map(I=>(I.id===f&&(I.text=d),I))),c)):y.questionInfo.answer=y.questionInfo.comment.map(c=>(c.id===f&&(c.text=d),c)),o(y,!1),$.patch(b,{text:d,commentId:f,questionId:w,answerId:x},{withCredentials:!0}).catch(c=>{throw alert(c),c}).finally(()=>o())}},p=(d,f,w)=>{if(n){const x=`https://swim.42seoul.io/api/posts/comment?commentId=${d}&questionId=${f}${w?`&answerId=${w}`:""}`,b=C({},n);w?b.questionInfo.answer=b.questionInfo.answer.map(y=>(y.id===w&&(y.comment=y.comment.filter(c=>c.id!==d)),y)):b.questionInfo.comment=b.questionInfo.comment.filter(y=>y.id!==d),o(b,!1),$.delete(x,{withCredentials:!0}).catch(y=>{throw alert(y),y}).finally(()=>o())}},h=(d,f,w,x)=>{if(n){const b=C({},n);b.questionInfo.answer.push({text:f,user:{nickname:w}}),o(b,!1),$.post("https://swim.42seoul.io/api/posts/answer",{questionId:d,text:f},{withCredentials:!0}).then(()=>x("")).catch(y=>{throw alert(y),y}).finally(()=>o())}},m=async(d,f,w)=>{try{const x=C({},n);x.is_solved=!0,x.questionInfo.answer=x.questionInfo.answer.map(y=>(y.id===f&&(y.is_solved=!0),y));const b="https://swim.42seoul.io/api/posts/answer/choice";o(x,!1),await $.post(b,{questionId:d,answerId:f,answerUserId:w},{withCredentials:!0}),o()}catch(x){throw alert(x),x}};return{question:n?n.questionInfo:null,answer:n?n.questionInfo.answer:null,isLoading:!i&&!n,isError:i,QuestionThumbPost:a,AnswerThumbPost:s,CommentPost:u,CommentEdit:g,CommentDelete:p,AnswerPost:h,ChoicePost:m}},M=(e,n=()=>!0)=>{const[i,o]=D.exports.useState(e),[a,s]=D.exports.useState(!0);return{value:i,onChange:p=>{const{target:{value:h}}=p;n(h)?o(h):s(!1)},onBlur:p=>{const h=p.target.innerText;n(h)?o(h):s(!1)},setValue:o,valid:a}},qt={button:{primary:"#1896BD",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",lightprimary:"#a7deef"},a:{primary:"#1896BD",white:"#FFFFFF",red:"#FF5D39",black:"#000000",deepgray:"#C4C4C4"},background:{white:"#FFFFFF",lightgrey:"#F3F3F3"},text:{primary:"#1896BD",white:"#FFFFFF",yellow:"#FFB84D",red:"#FF5D39",black:"#000000",lightgrey:"#a6a6a6",grey:"#565656",deepgray:"#C4C4C4"},tag:{primary:"#1896BD"},primary:"#1896BD",lightprimary:"#a7deef",yellow:"#FFB84D",white:"#FFFFFF",red:"#FF5D39",deepgray:"#C4C4C4",lightgrey:"#EAEAEA",black:"#000000",lightblack:"#545454",lightyelloew:"#FFDCA8"},A={color:qt},Nt=B`
  ${({theme:e,fontcolor:n})=>n&&B`
      color: ${e.color.a[n]};
    `}
  ${({underline:e})=>e&&B`
      text-decoration: underline;
    `}
  ${({small:e})=>e&&B`
      font-weight: normal;
      font-size: 14px;
      &:hover {
        color: ${A.color.lightblack};
        -webkit-transition: color 0.5s ease;
        -moz-transition: color 0.5s ease;
        transition: color 0.5s ease;
      }
    `};
  ${({bold:e})=>e&&B`
      font-weight: bold;
    `}
`,Zt=r.span`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  ${Nt}
`,Ut=a=>{var s=a,{to:e,children:n,location:i}=s,o=k(s,["to","children","location"]);return t(oe,{to:e||i.pathname+i.search,children:t(Zt,v(C({},o),{children:n}))})};var F=vt(Ut);const Qt=r.div`
  display: ${({visible:e})=>e?"":"none !important"};
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `};
`,N=o=>{var a=o,{children:e,visible:n=!0}=a,i=k(a,["children","visible"]);return t(Qt,v(C({visible:n},i),{children:e}))},jt=B`
  ${({isChecked:e})=>e==!0&&B`
      border: 3px solid ${A.color.primary};
      box-shadow: none;
    `}
`,Kt=r.div`
  width: 100%;
  /*height: 214px;*/
  /*display: flex;*/
  border-radius: 16px;
  background-color: white;
  padding: 50px 60px;
  padding-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
  ${jt};
`,me=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Kt,v(C({},n),{children:e}))};function O(e){const n=new Date,i=new Date(e),o=Math.floor((n.getTime()-i.getTime())/1e3/60);if(o<1)return"\uBC29\uAE08\uC804";if(o<60)return`${o}\uBD84\uC804`;const a=Math.floor(o/60);if(a<24)return`${a}\uC2DC\uAC04\uC804`;const s=Math.floor(o/60/24);return s<365?`${s}\uC77C\uC804`:`${Math.floor(s/365)}\uB144\uC804`}const Gt=r.p`
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
`,Jt=new Ie.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[Me({pre:!0})]}),He=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return l(L,{children:[t(Gt,v(C({},n),{dangerouslySetInnerHTML:{__html:Jt.makeHtml(e)}})),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]})},Xt=B`
  ${({size:e})=>e&&B`
      font-size: ${e+"px"};
      line-height: ${parseInt(e)*1.5+"px"};
    `}
  ${({theme:e,color:n})=>n&&B`
      color: ${e.color.text[n]};
    `}
    ${({weight:e})=>e&&B`
      font-weight: ${e};
    `}
`,Yt=r.p`
  color: black;
  word-break: break-all;
  ${Xt}
`,E=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Yt,v(C({},n),{children:e}))};var Ot="/assets/cat0.7e5dd6fb.jpeg";const fe={xsm:{size:"25px"},sm:{size:"40px"},lg:{size:"120px"}},en=B`
  ${({size:e})=>e&&B`
      width: ${fe[e].size};
      height: ${fe[e].size};
      background-size: ${fe[e].size} auto;
    `}
  ${({color:e})=>e&&B`
      background-color: ${e};
    `}
  background-image: ${({img:e})=>e?`url(${e})`:"url()"};
  /* ${({img:e})=>e?B`
          background-image: url(${e});
          margin: 2 2;
        `:B`
          margin: 3 3;
          color: pink;
          background-image: url(${Ot});
        `} */
`,xe=r.div`
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
  ${en}
`,Pe=r.div`
  display: flex;
  align-items: center;
`,We=r(xe)`
  margin-right: 8px;
  flex-shrink: 0;
  ${({theme:e,border:n})=>n&&B`
      border: 2px solid ${e.color.primary};
    `}
`,J=({nickname:e,size:n,photo:i,color:o,children:a,onMouseEnter:s,onMouseLeave:u,onClick:g,border:p})=>n==="sm"?l(Pe,{size:n,children:[t(We,{size:"xsm",img:i||"",border:p}),t(E,{size:"14",color:"grey",children:e}),a]}):l(Pe,{onMouseEnter:s,onMouseLeave:u,onClick:g,size:n,children:[t(We,{size:"sm",img:i||"",border:p}),t(E,{size:"18",weight:"bold",color:o,children:e}),a]}),tn=r.div`
  display: block;
  white-space: normal;
`,nn=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
`,on=a=>{var s=a,{created_at:e,user:n,text:i}=s,o=k(s,["created_at","user","text"]);const u=O(e);return l(tn,v(C({},o),{children:[l(nn,{children:[t(J,v(C({},n),{size:"sm"})),t(E,{size:"14",color:"grey",children:u})]}),t(He,{children:i})]}))},rn=()=>l("svg",{width:"4",height:"20",viewBox:"0 0 4 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 10C1 10.5523 1.44772 11 2 11C2.55228 11 3 10.5523 3 10C3 9.44772 2.55228 9 2 9C1.44772 9 1 9.44772 1 10Z",stroke:"#565656",strokeWidth:"2"}),t("path",{d:"M1 18C1 18.5523 1.44772 19 2 19C2.55228 19 3 18.5523 3 18C3 17.4477 2.55228 17 2 17C1.44772 17 1 17.4477 1 18Z",stroke:"#565656",strokeWidth:"2"})]}),sn=r.button`
  width: 24px;
  height: 24px;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`,an=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(sn,v(C({},n),{children:t(rn,{children:e})}))},ln=B`
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,un=r.div`
  width: 988px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 10px 0px;

  ${ln}
`,Z=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(un,v(C({},n),{children:e}))},Ve=r.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,z=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,P=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,_e=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,cn=r.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 2rem 0px;
`,dn=r.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`,hn=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,pn=r.p`
  font-size: 16px;
  width: 80%;
  background-color: inherit;
  color: grey;
  outline: none;
  &:focus-visible {
    color: black;
  }
`,Cn=r(Z)`
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

  ${({show:e})=>e&&B`
      display: inherit;
    `};
`,gn=r(P)`
  width: 100%;
  height: 100%;
`,Re=r(F)`
  /*overflow: auto;*/
  display: block;
  width: 3rem;
  margin: 2rem 2rem 0 2rem;
  ${({theme:e})=>e&&B`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,mn=r(N)`
  position: relative;
`,qe=({created_at:e,questionId:n,answerId:i,user:o,text:a,userEmail:s,id:u})=>{const{CommentEdit:g,CommentDelete:p}=K(),h=O(e),[m,d]=D.exports.useState(!1),[f,w]=D.exports.useState(!1),{value:x,setValue:b,onBlur:y}=M(a),c=D.exports.useRef(),I=async()=>{confirm("\uB313\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&p(u,n,i),d(!1)},V=()=>{w(!0),setTimeout(function(){c.current.focus()},1),d(!m)},Q=async()=>{g(x,u,n,i),w(!1)};return l(cn,{children:[l(dn,{children:[t(E,{weight:"bold",size:"14",children:o.nickname}),t(E,{size:"14",color:"grey",children:h})]}),l(hn,{children:[t(pn,{contentEditable:f,onBlur:y,ref:c,suppressContentEditableWarning:!0,children:x}),o.email===s?l(L,{children:[l(mn,{visible:!f,children:[t(an,{onClick:()=>d(!m)}),t(Cn,{show:m,children:l(gn,{children:[t(Re,{small:!0,onClick:V,children:"\uC218\uC815"}),t(Re,{small:!0,onClick:I,children:"\uC0AD\uC81C"})]})})]}),l(N,{visible:f,children:[t(F,{fontcolor:"deepgray",onClick:()=>{b(a),w(!1)},style:{marginRight:"1rem"},children:"\uCDE8\uC18C"}),t(F,{onClick:Q,children:"\uC644\uB8CC"})]})]}):null]})]},u)},fn=B`
  ${({border:e})=>e===!1&&B`
      border: none;
    `}
`,xn=r.input`
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
  ${fn}
`,W=n=>{var e=k(n,[]);return t(xn,C({},e))},wn=r.form`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Bn=r(W)`
  width: 80%;
  padding: 0px;
`,bn=r(F)`
  white-space: nowrap;
  /*background-color: black;*/
`,Ne=o=>{var a=o,{questionId:e,answerId:n}=a,i=k(a,["questionId","answerId"]);const{user:s,isLoading:u,isError:g}=q(),{CommentPost:p}=K(),{value:h,onChange:m,setValue:d}=M("");if(u)return g?t("div",{children:"Err.."}):t("div",{children:"Load..."});{const f=w=>{w.preventDefault(),h?s?(p(h,e,n),d("")):alert("\uB313\uAE00 \uC791\uC131\uC744 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"):alert("\uB313\uAE00\uC6B8 \uC785\uB825\uD574\uC8FC\uC138\uC694")};return l(wn,v(C({onSubmit:f},i),{children:[t(Bn,{placeholder:"\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694",value:h,border:!1,onChange:m}),t(bn,{fontcolor:"primary",underline:!1,onClick:f,children:"\uB313\uAE00 \uC785\uB825"})]}))}},yn=r.div`
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
`,vn=new Ie.exports.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0,extensions:[Me({pre:!0})]}),re=a=>{var s=a,{value:e,setValue:n,placeHolder:i}=s,o=k(s,["value","setValue","placeHolder"]);const u=document.getElementsByClassName("mde-text")[0],[g,p]=D.exports.useState("write"),h=async function*(m){try{yield await new Promise(f=>{const w=new FormData,x=new File([m],"Image"),b="https://swim.42seoul.io/api/posts/image";w.append("imgFile",x),$.post(b,w,{withCredentials:!0}).then(y=>{var c;y.status===200&&f((c=y==null?void 0:y.data)==null?void 0:c.image)})})}catch(d){alert("\uC0AC\uC9C4 \uC804\uC1A1 \uC2E4\uD328"),yield"Error"}return!0};return l(yn,v(C({},o),{children:[t(kt,{classes:{},value:e,onChange:m=>{const d=(event==null?void 0:event.target.scrollHeight)+"px";n(m),u.style.height="auto",u.style.height=d},selectedTab:g,onTabChange:p,generateMarkdownPreview:m=>Promise.resolve(vn.makeHtml(m)),childProps:{writeButton:{tabIndex:-1},textArea:{placeholder:i}},paste:{saveImage:h}}),t("script",{src:"/path/to/highlight.min.js"}),t("script",{children:"hljs.highlightAll();"}),t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"})]}))},kn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#1896BD"})}),Dn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#545454"})}),$n=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M16.8161 39L5 27.0116L10.3848 21.5483L16.8161 28.0927L35.6152 9L41 14.4633L16.8161 39Z",fill:"#C4C4C4"})}),An=s=>{var u=s,{is_solved:e,isChosen:n,isChoosable:i,onClick:o}=u,a=k(u,["is_solved","isChosen","isChoosable","onClick"]);const[g,p]=D.exports.useState(!1);return e&&n?t(kn,C({},a)):!e&&i?t("button",v(C({onClick:o,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1)},a),{children:g?t(Dn,{}):t($n,{})})):t(L,{})},En=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M35.625 28.125H43.125V5.625H35.625V28.125ZM28.125 5.625H11.25C9.69375 5.625 8.3625 6.5625 7.8 7.9125L2.1375 21.1313C1.96875 21.5625 1.875 22.0125 1.875 22.5V26.25C1.875 27.2446 2.27009 28.1984 2.97335 28.9016C3.67661 29.6049 4.63044 30 5.625 30H17.4563L15.675 38.5687C15.6375 38.7562 15.6187 38.9437 15.6187 39.15C15.6187 39.9375 15.9375 40.6313 16.4438 41.1375L18.4312 43.125L30.7687 30.7687C31.4625 30.0938 31.875 29.1562 31.875 28.125V9.375C31.875 8.38044 31.4799 7.42661 30.7766 6.72335C30.0734 6.02009 29.1196 5.625 28.125 5.625Z",fill:"#545454"})}),Ln=()=>t("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M34.8333 27.5V5.5H42.1666V27.5H34.8333ZM27.5 5.5C28.4724 5.5 29.4051 5.88631 30.0927 6.57394C30.7803 7.26157 31.1666 8.19421 31.1666 9.16667V27.5C31.1666 28.5083 30.7633 29.425 30.085 30.085L18.0216 42.1667L16.0783 40.2233C15.5833 39.7283 15.2716 39.05 15.2716 38.28L15.3266 37.7117L17.0683 29.3333H5.49998C4.52752 29.3333 3.59489 28.947 2.90725 28.2594C2.21962 27.5718 1.83331 26.6391 1.83331 25.6667V22C1.83331 21.5233 1.92498 21.0833 2.08998 20.6617L7.62665 7.73667C8.17665 6.41667 9.47831 5.5 11 5.5H27.5ZM27.5 9.16667H10.945L5.49998 22V25.6667H21.5966L19.525 35.42L27.5 27.445V9.16667Z",fill:"#545454"})}),zn=r.button`
  background-color: inherit;
`,Fn=i=>{var o=i,{active:e}=o,n=k(o,["active"]);return t(zn,v(C({},n),{children:e?t(En,{}):t(Ln,{})}))},Sn=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M43.125 18.75C43.125 17.7554 42.7299 16.8016 42.0266 16.0984C41.3234 15.3951 40.3696 15 39.375 15H27.525L29.325 6.43125C29.3625 6.24375 29.3813 6.0375 29.3813 5.83125C29.3813 5.0625 29.0625 4.35 28.5562 3.84375L26.5688 1.875L14.2313 14.2125C13.5375 14.9062 13.125 15.8438 13.125 16.875V35.625C13.125 36.6196 13.5201 37.5734 14.2233 38.2766C14.9266 38.9799 15.8804 39.375 16.875 39.375H33.75C35.3063 39.375 36.6375 38.4375 37.2 37.0875L42.8625 23.8687C43.0312 23.4375 43.125 22.9875 43.125 22.5V18.75ZM1.875 39.375H9.375V16.875H1.875V39.375Z",fill:"#545454"})}),In=()=>t("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M9.375 16.875V39.375H1.875V16.875H9.375ZM16.875 39.375C15.8804 39.375 14.9266 38.9799 14.2233 38.2766C13.5201 37.5734 13.125 36.6196 13.125 35.625V16.875C13.125 15.8438 13.5375 14.9062 14.2313 14.2313L26.5688 1.875L28.5562 3.8625C29.0625 4.36875 29.3813 5.0625 29.3813 5.83125L29.325 6.43125L27.5437 15H39.375C40.3696 15 41.3234 15.3951 42.0266 16.0984C42.7299 16.8016 43.125 17.7554 43.125 18.75V22.5C43.125 22.9875 43.0312 23.4375 42.8625 23.8687L37.2 37.0875C36.6375 38.4375 35.3063 39.375 33.75 39.375H16.875ZM16.875 35.625H33.8063L39.375 22.5V18.75H22.8937L25.0125 8.775L16.875 16.9312V35.625Z",fill:"#545454"})}),Mn=r.button`
  background-color: inherit;
`,Tn=o=>{var a=o,{active:e,onClick:n}=a,i=k(a,["active","onClick"]);return t(Mn,v(C({onClick:n},i),{children:e?t(Sn,{}):t(In,{})}))},Hn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`,Pn=r.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 16rem;
  margin-bottom: 2rem;
  width: 7rem;
`,we=h=>{var m=h,{like_count:e,is_solved:n,is_like:i,isChoosable:o,is_chosen:a,onUpClick:s,onDownClick:u,onChooseClick:g}=m,p=k(m,["like_count","is_solved","is_like","isChoosable","is_chosen","onUpClick","onDownClick","onChooseClick"]);return l(Hn,v(C({},p),{children:[l(Pn,{children:[t(Tn,{onClick:s,active:i===!0}),t(E,{style:{whiteSpace:"nowrap"},color:"grey",size:"32",weight:"bold",children:e}),t(Fn,{onClick:u,active:i===!1})]}),t(An,{isChosen:a,isChoosable:o,onClick:g,is_solved:n})]}))},Wn=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;r(we)`
  width: 13rem;
  margin-right: 2rem;
`;const Vn=r(me)`
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
`,Ze=r(N)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,_n=h=>{var m=h,{is_solved:e,like_count:n,is_like:i,is_chosen:o,isChoosable:a,comment:s,id:u,user:g}=m,p=k(m,["is_solved","like_count","is_like","is_chosen","isChoosable","comment","id","user"]);const{AnswerThumbPost:d,ChoicePost:f}=K(),{user:w}=q(),[x,b]=D.exports.useState(!1),[y,c]=D.exports.useState(!1),{value:I,setValue:V}=M(p.text),Q=!!w,pt=Te(),ne=new URLSearchParams(pt.search).get("id"),$e=H=>{if(!Q)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");y===!1?(c(!0),i===H?d(g.id,u,H,!0):i===!H?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4!"):d(g.id,u,H,!1),setTimeout(()=>{c(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},Ct=()=>{$e(!0)},gt=()=>{$e(!1)},mt=()=>{confirm("\uD574\uB2F9 \uB2F5\uBCC0\uC744 \uCC44\uD0DD\uD558\uACA0\uC2B5\uB2C8\uAE4C? \uCC44\uD0DD \uD6C4\uC5D0\uB294 \uCDE8\uC18C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.")&&ne&&f(parseInt(ne),u,g.id)},ft=async()=>{const H="https://swim.42seoul.io/api/posts/answer",Ae={questionId:ne,answerId:u,text:I};await $.patch(H,Ae,{withCredentials:!0}).then(Gr=>{alert("\uB2F5\uBCC0 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),b(!1)},xt=async()=>{const H=`https://swim.42seoul.io/api/posts/answer?questionId=${ne}&answerId=${u}`;await $.delete(H,{withCredentials:!0}).then(Ae=>{alert("\uB2F5\uBCC0 \uC0AD\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),b(!1)},wt=s==null?void 0:s.map(H=>t(qe,C({userEmail:w==null?void 0:w.email,answerId:u},H),H.id));return l(Wn,v(C({},p),{children:[t(we,{is_solved:e,is_chosen:o,like_count:n,is_like:i,isChoosable:a,onUpClick:Ct,onDownClick:gt,onChooseClick:mt}),t(N,{width:"100%",visible:!x,children:l(me,{isChecked:o,children:[t(on,v(C({},p),{id:u,user:g})),l(Ze,{visible:Q?(g==null?void 0:g.email)===(w==null?void 0:w.email):!1,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>b(!0),children:"\uC218\uC815"}),t(F,{onClick:xt,fontcolor:"deepgray",small:!0,children:"\uC0AD\uC81C"})]}),wt,t(Ne,{answerId:u})]})}),t(N,{width:"100%",height:"100%",visible:x,children:l(Vn,{children:[t(re,{value:I,setValue:V}),l(Ze,{visible:!0,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},onClick:()=>b(!1),children:"\uCDE8\uC18C"}),t(F,{onClick:ft,fontcolor:"primary",bold:!0,small:!0,children:"\uD655\uC778"})]})]})})]}))},se={sm:{height:"41px",fontSize:"16px"},lg:{width:"449px",height:"60px",fontSize:"18px"}},Rn=B`
  ${({theme:e,color:n})=>n&&B`
      background-color: ${e.color.button[n]};
      &:hover {
        background: ${he(.1,e.color.button[n])};
      }
      &:active {
        background: ${pe(.1,e.color.button[n])};
      }
    `}
  ${({theme:e,fontColor:n})=>n&&B`
      color: ${e.color.button[n]};
    `}
  ${({size:e})=>{var n,i;return e&&B`
      width: ${((n=se[e])==null?void 0:n.width)?(i=se[e])==null?void 0:i.width:"auto"};
      height: ${se[e].height};
      font-size: ${se[e].fontSize};
    `}}
  ${({shadow:e})=>e===!0&&B`
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
    `}
`,qn=r.button`
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
    background: ${he(.1,`${A.color.primary}`)};
    color: ${he(.1,"white")};
  }
  &:active {
    background: ${pe(.1,`${A.color.primary}`)};
  }
  ${Rn}
`,T=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(qn,v(C({},n),{children:e}))},Ue={bold:{background:"#000000",height:"3px"},light:{background:"#EAEAEA",height:"1px"}},Nn={horizontal:"rotate(0deg)",vertical:"rotate(90deg)"},Zn=B`
  ${({weight:e})=>e&&B`
      background-color: ${Ue[e].background};
      height: ${Ue[e].height};
    `}
  ${({width:e})=>e&&B`
      width: ${e};
    `}
	${({direction:e})=>e&&B`
      transform: ${Nn[e]};
    `}
`,Un=r.div`
  ${Zn}
`,ae=n=>{var e=k(n,[]);return t(Un,C({},e))},Qn={h1:{size:"36px"},h2:{size:"24px"},h3:{size:"18px"}},jn=B`
  ${({size:e})=>e&&B`
      font-size: ${Qn[e].size};
    `}
  ${({color:e})=>e&&B`
      color: ${e};
    `}
`,Kn=r.div`
  color: black;
  font-weight: 700;
  ${jn}
`,U=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Kn,v(C({},n),{children:e}))},Gn=r(U)`
  margin-bottom: 3rem;
`,Jn=r.div`
  margin-left: 9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Qe=r.div`
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
`,Xn=()=>{const{value:e,setValue:n}=M(""),{question:i,isLoading:o,AnswerPost:a}=K(),{user:s,isLoading:u}=q();if(!o&&!u)if(!!s){const p=s.nickname;return l(Jn,{children:[t(Gn,{size:"h2",children:"\uB0B4 \uB2F5\uBCC0 \uB2EC\uAE30"}),t(ae,{weight:"bold",width:"3rem",style:{marginBottom:"1.5rem"}}),t(re,{value:e,setValue:n,placeHolder:"\uB2F5\uBCC0\uC744 \uB2EC\uC544\uC8FC\uC138\uC694!"}),t(T,{onClick:async()=>{e?a(i.id,e,p,n):alert("\uB2F5\uBCC0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4")},size:"sm",fontColor:"white",children:"\uB2F5\uBCC0 \uC791\uC131\uD558\uAE30"})]})}else return t(Qe,{children:"\uB2F5\uBCC0\uC744 \uB0A8\uAE30\uAE30 \uC704\uD574 \uB85C\uADF8\uC778\uC744 \uC9C4\uD589\uD574\uC8FC\uC138\uC694!"});else return t("div",{children:".."})},Yn=r.div`
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
  ${({name:e})=>e==="..."&&B`
      background-color: ${A.color.deepgray};
    `}
`,On=r.button`
  margin-left: 1rem;
  background-color: inherit;
  cursor: pointer;
`,ei=()=>l("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M8.5 1L1 8.5",stroke:"#dfdfdf",strokeWidth:"2"}),t("path",{d:"M8.5 8.5L1 1",stroke:"#dfdfdf",strokeWidth:"2"})]}),le=a=>{var s=a,{name:e,isDel:n,onDelClick:i}=s,o=k(s,["name","isDel","onDelClick"]);return l(Yn,v(C({},o),{name:e,children:[t(E,{size:"14",style:{wordBreak:"normal",color:"#ffffff"},children:e}),n?t(On,{onClick:()=>{i(e)},children:t(ei,{})}):""]}))},ti=r.div`
  display: block;
  white-space: normal;
`,je=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
  flex-wrap: wrap;
`,ni=r.div`
  display: flex;
  flex-wrap: wrap;
`;r(E)`
  white-space: pre-line;
`;const ii=({user:e,created_at:n,title:i,hashtag:o,text:a})=>{const s=O(n),u=o==null?void 0:o.map(g=>t(le,{name:g.name},g.name));return l(ti,{children:[l(je,{children:[t(U,{size:"h1",children:i}),t(E,{size:"14",color:"grey",children:s})]}),l(je,{children:[t(J,v(C({},e),{size:"sm"})),t(ni,{children:u})]}),t(He,{children:a})]})},oi=r.div`
  display: flex;
  justify-content: space-between;
`,ri=r(N)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`,si=n=>{var e=k(n,[]);var m;const{question:i,isLoading:o,isError:a,QuestionThumbPost:s}=K(),{user:u,isLoading:g}=q(),[p,h]=D.exports.useState(!1);if(!o&&!g){const d=!!u,f=c=>{if(!d)return alert("\uB85C\uADF8\uC778 \uD6C4 \uC88B\uC544\uC694\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694!");p===!1?(h(!0),c===i.is_like?s(i.user.id,i.id,c,!0):!c===i.is_like?alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694\uB294 \uD558\uB098\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4."):s(i.user.id,i.id,c,!1),setTimeout(()=>{h(!1)},1e4)):alert("\uC88B\uC544\uC694/\uC2EB\uC5B4\uC694 \uBC84\uD2BC \uD074\uB9AD\uC740 10\uCD08\uC5D0 \uD55C\uBC88\uC73C\uB85C \uC81C\uD55C\uB429\uB2C8\uB2E4.")},w=()=>{f(!0)},x=()=>{f(!1)},b=c=>{confirm("\uAC8C\uC2DC\uAE00\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")?$.delete(`https://swim.42seoul.io/api/posts/question?questionId=${i.id}`,{withCredentials:!0}).then(()=>{location.href="/"}):c.preventDefault()},y=(m=i.comment)==null?void 0:m.map(c=>t(qe,C({userEmail:u==null?void 0:u.email,questionId:i.id},c),c.id));return l(oi,v(C({},e),{children:[t(we,{like_count:i.like_count,is_like:i.is_like,onUpClick:w,onDownClick:x}),l(me,{children:[t(ii,C({},i)),l(ri,{visible:u?u.email===i.user.email:!1,children:[t(F,{fontcolor:"deepgray",small:!0,style:{marginRight:"1rem"},to:`/edit?id=${Se.parse(location.search).id}`,children:"\uC218\uC815"}),t(F,{fontcolor:"deepgray",small:!0,onClick:b,children:"\uC0AD\uC81C"})]}),y,t(Ne,{questionId:i.id})]})]}))}else return a?t("div",{children:"Err..."}):t("div",{children:"loading..."})},ai=()=>l(P,{style:{width:"100%",height:"248px",background:"#646464",marginTop:"15rem",padding:"0 2rem",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",bottom:"0px"},children:[l(Ve,{style:{alignItems:"flex-end",width:"380px",marginBottom:"1rem"},children:[t(U,{size:"h2",color:"white",children:"42Code"}),t(E,{size:"14",color:"white",weight:"bold",children:"made by ji-park & yejeong & nkim & iha"})]}),t(E,{size:"14",color:"white",children:"Copyright \xA9 2019 - 2021 42Seoul inno. All rights reserved."})]});function li(){return l("svg",{width:"164",height:"42",viewBox:"0 0 164 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M0 18.2779C0 15.9614 2.53908 14.4657 4.61913 15.4853C9.70397 17.9779 18.0287 21.4939 24.6 21.5351C34.9803 21.6001 39.3328 13.1729 49.7125 13.0496C60.4712 12.9218 65.0907 21.5978 75.85 21.5351C86.4196 21.4734 90.927 13.7098 101.475 13.0496C114.508 12.2339 120.704 21.7509 133.762 21.5351C142.317 21.3936 153.618 17.3358 159.693 14.8836C161.723 14.0642 164 15.5485 164 17.7378V39C164 40.6569 162.657 42 161 42H3C1.34314 42 0 40.6569 0 39V18.2779Z",fill:"#3EC2EC",fillOpacity:"0.5"}),t("path",{d:"M34.8217 0.000244141H25.5478L7 18.6163V26.2429H25.6532V35.5641H34.8744V18.6163H16.3003L34.8217 0.000244141Z",fill:"black"}),t("path",{d:"M122.512 27.8744V0H115.784V27.8744H122.512Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M92.8264 0L95.1288 17.1891L97.4651 0H98.4824H100.405H105.322L107.624 17.1891L109.961 0H112.9L109.111 27.8744H109.055H106.172H102.216L99.4365 7.12348L96.616 27.8744H96.56H93.6764H89.7205L85.9869 0H92.8264Z",fill:"black"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M132.386 27.8744L134.688 10.6853L137.025 27.8744H138.042H139.964H144.881L147.184 10.6854L149.52 27.8744H152.46L148.671 0H148.615H145.731H141.775L138.996 20.751L136.175 0H136.119H133.236H129.28L125.546 27.8744H132.386Z",fill:"black"}),t("path",{d:"M39.6803 9.61187V0H48.331L39.6803 9.61187Z",fill:"black"}),t("path",{d:"M83.1034 9.61187V0H74.4527L83.1034 9.61187Z",fill:"black"}),t("path",{d:"M57.9429 19.2237L57.9429 27.8744L48.331 27.8744L57.9429 19.2237Z",fill:"black"}),t("path",{d:"M64.8408 19.2233L64.8408 27.874L74.4527 27.874L64.8408 19.2233Z",fill:"black"}),t("path",{d:"M48.8511 9.25621V0H57.9823V9.25621L48.8511 18.6182V27.8744H39.7198V18.6182L48.8511 9.25621Z",fill:"black"}),t("path",{d:"M73.4915 9.25621V0H63.8797V9.25621L73.4915 18.6182V27.8744H83.1034V18.6182L73.4915 9.25621Z",fill:"black"})]})}var ui="/assets/422.bd7f157a.png";const ci=r.div`
  display: ${({visible:e})=>e?"flex":"none"};
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;

  /* display: flex; */
  justify-content: space-around;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`,di=Dt`
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
`,hi=r.div`
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

  animation-name: ${di};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`,pi=r.div`
  /* position: fixed; */
  z-index: 1000;

  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${ui});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 55px 55px;
  background-color: white;
`,Ke=({visible:e})=>t(L,{children:l(ci,{visible:e,children:[t(hi,{}),t(pi,{})]})}),Ci=e=>{const[n,i]=D.exports.useState(!1);return l("svg",v(C({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",style:{margin:"0 0.5rem"},onMouseEnter:s=>{i(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",fill:n?A.color.lightblack:A.color.black})]}))},gi=r(_e)``,mi=r(Z)`
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

  ${({show:e})=>e&&B`
      display: inherit;
    `};
`,fi=r(P)`
  width: 100%;
  height: 100%;
`,Ge=r(F)`
  display: block;
  width: 100%;
  margin: 2rem 2rem 0 2rem;

  ${({theme:e})=>e&&B`
      &:hover {
        color: ${e.color.lightblack};
      }
    `}
`,xi=({user:e})=>{const[n,i]=D.exports.useState(!1),[o,a]=D.exports.useState(!1),s=h=>{a(!0),h.target.style.cursor="pointer",h.stopPropagation()},u=()=>{a(!1)},g=()=>{i(!n)},p=async()=>{await $.get("https://swim.42seoul.io/api/auth/logout",{withCredentials:!0}),location.reload()};return l(gi,{children:[t(J,{size:"lg",photo:e==null?void 0:e.image,nickname:(e==null?void 0:e.nickname)?e==null?void 0:e.nickname:"\uC815\uBCF4\uC5C6\uC74C",onMouseEnter:s,onMouseLeave:u,onClick:g,color:o?"grey":"black",children:t(Ci,{onClick:()=>{}})}),t(mi,{show:n,tabIndex:0,onFocus:()=>i(!0),children:l(fi,{children:[t(Ge,{to:"/setting",children:"\uC124\uC815"}),t(Ge,{onClick:p,children:"\uB85C\uADF8\uC544\uC6C3"})]})})]})},wi=B`
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,Bi=r.div`
  width: 533px;
  height: 644px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;

  ${wi}
`,bi=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(Bi,v(C({},n),{children:e}))},yi=()=>l("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M1 1L16.5 16.5",stroke:"#121212",strokeWidth:"2"}),t("path",{d:"M16.5 1L0.999999 16.5",stroke:"#121212",strokeWidth:"2"})]}),vi=r.span`
  float: right;
  &:hover,
  &:focus {
    cursor: pointer;
    color: red;
  }
`,ki=r(U)`
  margin-top: 75px;
`,Di=r.div`
  font-weight: 500;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 38px;
  font-style: normal;
`,Je=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,Xe=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({height:e})=>e&&B`
      height: ${e};
    `}
`,$i=r.div`
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
`,Be=u=>{var g=u,{children:e,onClose:n,visible:i,title:o,subtitle:a}=g,s=k(g,["children","onClose","visible","title","subtitle"]);return t($i,{visible:i,children:l(bi,v(C({},s),{children:[t(vi,{onClick:n,children:t(yi,{})}),t(ki,{size:"h1",children:o}),t(Di,{children:a}),e]}))})};Be.defaultProps={visible:!0};const Ai=o=>{var a=o,{onClose:e,onRegist:n}=a,i=k(a,["onClose","onRegist"]);const[s,u]=D.exports.useState({email:"",password:""}),{email:g,password:p}=s,[h,m]=D.exports.useState(!1),d=async()=>{try{(await $.post("https://swim.42seoul.io/api/auth/login",s,{withCredentials:!0})).status===200?(Ce("https://swim.42seoul.io/api/users/info"),e(!1)):alert("\uB85C\uADF8\uC778 \uC2E4\uD328!")}catch(x){alert("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638 \uC624\uB958")}u({email:"",password:""})},f=x=>{const{name:b,value:y}=x.target;u(v(C({},s),{[b]:y}))},w=()=>{location.href="https://localhost:5000/auth/42login",e(!1),m(!0)};return l(L,{children:[t(Ke,{visible:h}),t(Be,v(C({onClose:()=>e(!1),title:"\uB85C\uADF8\uC778",subtitle:"\uC774\uBA54\uC77C\uB85C \uB85C\uADF8\uC778"},i),{children:l(Je,{height:"392px",children:[l(Xe,{height:"265px",children:[t(W,{name:"email",value:g,onChange:f,placeholder:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"}),t(W,{name:"password",value:p,type:"password",onChange:f,placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"}),t(T,{onClick:d,size:"lg",children:"\uB85C\uADF8\uC778"}),t(F,{onClick:w,fontcolor:"primary",underline:!0,children:"42seoul \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"})]}),t(F,{onClick:()=>{n(!0),e(!1)},fontcolor:"black",children:"\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?"})]})}))]})},Ei=i=>{var o=i,{onClose:e}=o,n=k(o,["onClose"]);const[a,s]=D.exports.useState({nickname:"",email:"",password:"",confirm_pass:""}),{nickname:u,email:g,password:p,confirm_pass:h}=a,m=w=>{const{name:x,value:b}=w.target;if(s(v(C({},a),{[x]:b})),x==="confirm_pass"&&p!==""){const y=document.getElementById("diffpass");y.style.display="inherit",p===h?(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",y.style.color="blue"):(y.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",y.style.color="red")}},d=w=>{if(w.target.name==="confirm_pass"&&p!==""){const x=document.getElementById("diffpass");x.style.display="inherit",p===h?(x.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!",x.style.color="blue"):(x.innerHTML="\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4!",x.style.color="red")}},f=async()=>{const w=await $.post("https://swim.42seoul.io/api/auth/signup",a,{withCredentials:!0});s({nickname:"",email:"",password:"",confirm_pass:""}),w.data.result===!0&&e(!1),location.reload()};return t(Be,v(C({title:"\uD68C\uC6D0\uAC00\uC785",subtitle:"\uC774\uBA54\uC77C\uB85C \uD68C\uC6D0\uAC00\uC785",height:"712px",onClose:()=>e(!1)},n),{children:l(Je,{height:"420px",children:[l(Xe,{height:"300px",children:[t(W,{name:"nickname",value:u,onChange:m,placeholder:"\uB2C9\uB124\uC784"}),t(W,{name:"email",value:g,onChange:m,placeholder:"\uC774\uBA54\uC77C"}),t(W,{name:"password",value:p,type:"password",onChange:m,placeholder:"\uBE44\uBC00\uBC88\uD638"}),t(W,{name:"confirm_pass",value:h,type:"password",onChange:m,onKeyUp:d,onBlur:d,placeholder:"\uBE44\uBC00\uBC88\uD638 \uD655\uC778"}),t(E,{size:"14",id:"diffpass",style:{width:"449px",marginLeft:"2rem",display:"none"},children:"HiddenBox"})]}),t(T,{onClick:f,size:"lg",children:"\uD68C\uC6D0\uAC00\uC785"})]})}))},Li=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${A.color.background.grey};
  height: 130px;
  width: 100%;

  margin-bottom: 3rem;
`,zi=r.div``,Fi=r.div``,Si=r.button`
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
`,Ii=r(U)`
  margin-bottom: 7px;
`,Mi=()=>{const[e,n]=D.exports.useState(!1),[i,o]=D.exports.useState(!1),{user:a,isLoading:s,isError:u}=q(),[g,p]=D.exports.useState(!1);return D.exports.useEffect(()=>{Ce("https://swim.42seoul.io/api/users/info")},[]),l(L,{children:[t(Ke,{visible:g}),t(Ai,{onRegist:o,visible:e,onClose:n}),t(Ei,{visible:i,onClose:o}),l(Li,{children:[l(zi,{children:[t(oe,{to:"/",children:t(Ii,{size:"h1",children:t(li,{})})}),t(E,{size:"14",color:"lightgrey",children:"42seoul"})]}),a&&!s?t(xi,{user:a}):t(Fi,{children:t(Si,{onClick:()=>{location.href="https://swim.42seoul.io/api/auth/42login",p(!0),setTimeout(()=>{p(!1)},3e4)},children:"42 \uB85C\uADF8\uC778"})})]})]})},Ti=r.div`
  width: 100%;
  height: 100%;

  > * {
    padding: 0 20rem;

    @media (max-width: 1023px) {
      padding: 0 3rem;
    }
  }
`,Hi=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`,G=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return l(Ti,{children:[t(Mi,{}),t(Hi,v(C({},n),{children:e})),t(ai,{})]})},Pi=r.div`
  margin-bottom: 7rem;
`;r.div`
  margin-bottom: 4rem;
`;const Wi=a=>{var s=a,{question:e,answer:n,answerWriting:i}=s,o=k(s,["question","answer","answerWriting"]);return l("div",v(C({},o),{children:[t(Pi,{children:e}),n,i]}))},Vi=n=>{var e=k(n,[]);const{question:i,answer:o,isLoading:a,isError:s}=K(),{user:u,isLoading:g}=q();let p;return!a&&!g&&(p=o==null?void 0:o.map(h=>t(_n,C({isChoosable:u?i.user.email===u.email:!1,is_solved:i.is_solved},h),h.id))),s?t(L,{children:"err"}):t(G,v(C({},e),{children:t(Wi,{question:t(si,{}),answer:p,answerWriting:t(Xn,{})})}))},_i=r.input`
  width: 100%;
  font-size: 18px;
  background-color: inherit;
  margin: 3rem 0rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`,Ri=r.div``,qi=r.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  left: -1rem;
`,Ye=g=>{var p=g,{value:e,inputChange:n,setValue:i,tag:o,setTag:a,placeholder:s}=p,u=k(p,["value","inputChange","setValue","tag","setTag","placeholder"]);const h=document.getElementsByClassName("tagMsgEl")[0],m=document.getElementsByClassName("tagInput")[0],d=new RegExp(/^[a-z0-9+#_]+$/),f=()=>{const c=[...o];e&&!o.includes(e)&&c.push(e),i(""),a(c),m.style.color="black"},w=c=>{c.preventDefault(),n(c),c.target.value&&d.test(c.target.value)&&(h.style.display="none",m.style.color="black")},x=c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),d.test(e)?f():(h.style.display="block",m.style.color="red"))},b=c=>{const I=o.filter(V=>V!==c);a(I)},y=o==null?void 0:o.map(c=>t(le,{name:c,onDelClick:b,isDel:!0},c));return l(Ri,v(C({},u),{children:[t(qi,{children:y}),t(_i,{value:e,className:"tagInput",onChange:w,onBlur:f,onKeyPress:x,placeholder:s}),t(E,{className:"tagMsgEl",size:"12",color:"red",style:{position:"relative",top:"-2.5rem",display:"none"},children:"\uC798\uBABB\uB41C \uD0DC\uADF8 \uD615\uC2DD\uC785\uB2C8\uB2E4. \uC601\uC5B4\uC18C\uBB38\uC790\uC640 \uD2B9\uC218\uBB38\uC790 #+_ \uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. ex)ft_pintf"})]}))},Oe=r.input`
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
`,Ni=r.div`
  width: 100%;
  height: 100%;
`,Zi=r(Oe)`
  width: 100%;
  margin-bottom: 20px;
`,Ui=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,Qi=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,ji=()=>{const{question:e,isLoading:n,isError:i}=K(),o=m=>/^[\w]*$/g.test(m)&&m.length<20,a=m=>m.length<40,s=M("",o),u=M("",a),g=M(""),[p,h]=D.exports.useState([]);if(D.exports.useEffect(()=>{const m=e==null?void 0:e.hashtag.map(d=>d.name);h(m),u.setValue(e?e.title:""),g.setValue(e?e.text:"")},[]),!n&&!i){const m=async d=>{if(d.preventDefault(),!u.value||!g.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{(await $.patch("https://swim.42seoul.io/api/posts/question",{questionId:e.id,title:u.value,hashtag:p,text:g.value},{withCredentials:!0})).status===200?(alert("\uC9C8\uBB38 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${e.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(f){alert(f)}};return l(Ni,{children:[t(Zi,{value:u.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:u.onChange}),t(Ye,{inputChange:s.onChange,value:s.value,setValue:s.setValue,tag:p,setTag:h,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(ae,{weight:"bold",width:"4rem"}),l(Ui,{children:[t(re,{value:g.value,setValue:g.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),l(Qi,{children:[t(F,{fontcolor:"deepgray",style:{fontSize:"16px",marginRight:"2rem"},to:`/detail?id=${e.id}`,children:"\uCDE8\uC18C"}),t(T,{size:"sm",onClick:m,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})]})}else return i?t("div",{children:"err.."}):t("div",{children:"loading"})},Ki=n=>{var e=k(n,[]);return t(G,v(C({},e),{children:t(ji,{})}))},Gi=e=>l("svg",v(C({width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{children:[t("circle",{cx:"8",cy:"8",r:"6.5",stroke:"black",strokeWidth:"3"}),t("path",{d:"M13.5 13L19 18.5",stroke:"black",strokeWidth:"3"})]})),Ji=r.div`
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
`,Xi=r(W)`
  /* width: 500px; */
  height: 41px;
  border-radius: 20px 0 0 20px;
`,Yi=r.button`
  width: 44px;
  height: 41px;
  float: right;
  border-radius: 0 20px 20px 0;
  background: white;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`,be=a=>{var s=a,{onChange:e,onSearch:n,search:i}=s,o=k(s,["onChange","onSearch","search"]);const[u,g]=D.exports.useState(!1),p={border:`1px solid ${A.color.primary}`},h=m=>{m.key==="Enter"&&n()};return t(L,{children:l(Ji,v(C({style:u?p:{}},o),{children:[t(Xi,{placeholder:"\uAC80\uC0C9\uD560 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694",value:i,border:!1,onKeyPress:h,onChange:e,onFocus:()=>g(!0),onBlur:()=>g(!1)}),t(Yi,{onClick:n,children:t(Gi,{})})]}))})},et=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,tt=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,nt=r(Z)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Oi=r(Qe)`
  margin: 0;
  margin-top: 2rem;
  margin-bottom: 1rem;
`,it=r(z)`
  width: 100%;
  height: 182.46px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${({size:e})=>e==="sm"&&B`
      width: 100%;
      height: 150px;
      padding: 0.5rem 0.5rem;
    `}
`,ot=r(P)`
  width: 76%;
  height: 90%;
  align-items: flex-start;

  ${({size:e})=>e==="sm"&&B`
      width: 100%;
    `}
`,rt=r(U)`
  &:hover,
  &:focus {
    ${({theme:e})=>e&&B`
        color: ${e.color.lightblack};
        cursor: pointer;
      `};
  }
`,eo=r(E)`
  overflow: hidden;
  white-space: wrap;
  font-weight: 100;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  max-height: 50px;
  line-height: 25px;
`,to=r(z)`
  width: 100%;
`,st=r(E)``,ye=r(z)`
  width: 100%;
`,at=r(z)`
  width: 17rem;
  height: 100%;
  padding: 0 1rem;
  ${({size:e})=>e==="sm"&&B`
      justify-content: flex-start;
      padding: 0;

      > p {
        margin-right: 1rem;
      }
    `}
`,ve=r(E)``;r(P)`
  width: 10%;
  height: 100%;
`;const ke=a=>{var s=a,{name:e,count:n,color:i}=s,o=k(s,["name","count","color"]);return l(_e,v(C({width:"40px",height:"60px"},o),{children:[t(E,{weight:"bold",size:"18",color:i,children:e}),t(E,{weight:"bold",size:"18",color:i,children:n})]}))},no=f=>{var w=f,{id:e,title:n,text:i,is_solved:o,photo:a,nickname:s,answer_cnt:u=1,like_count:g,view_count:p,created_at:h,hashtag:m}=w,d=k(w,["id","title","text","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);i=i.replace(/^\s*`{3}\w*/gm,"").replace(/[`#*~_>]/g,"").replace(/^!\[[\w.]*\]\([\w.:/-]+\)/gi,""),m.length>5&&(m=m.slice(0,3),m.push({name:"..."}));const x=()=>{const b="https://swim.42seoul.io/api/pages/question/viewCount";$.post(b,{questionId:e},{withCredentials:!0})};return l(it,v(C({},d),{children:[l(ot,{size:"lg",children:[t(oe,{to:`/detail?id=${e}`,onClick:x,children:t(rt,{size:"h2",children:n})}),t(eo,{size:"18",weight:"normal",color:"grey",children:i}),l(ye,{children:[l(z,{children:[t(st,{size:"14",weight:"normal",color:"grey",children:O(h)}),m.map((b,y)=>t(le,{name:b==null?void 0:b.name,style:{marginTop:"0px"}},y))]}),t(J,{size:"sm",photo:a,nickname:s,id:0})]})]}),l(at,{children:[t(ke,{name:"\uB2F5\uBCC0",count:u,color:o?"primary":"black"}),t(ke,{name:"\uCD94\uCC9C",count:g}),t(ke,{name:"\uC870\uD68C",count:p})]})]}))},io=d=>{var f=d,{id:e,title:n,is_solved:i,photo:o,nickname:a,answer_cnt:s=1,like_count:u,view_count:g,created_at:p,hashtag:h}=f,m=k(f,["id","title","is_solved","photo","nickname","answer_cnt","like_count","view_count","created_at","hashtag"]);h.length>2&&(h=h.slice(0,2),h.push({name:"..."}));const w=()=>{const x="https://swim.42seoul.io/api/pages/question/viewCount";$.post(x,{questionId:e},{withCredentials:!0})};return t(it,v(C({size:"sm"},m),{children:l(ot,{size:"sm",children:[t(oe,{to:`/detail?id=${e}`,onClick:w,children:t(rt,{size:"h3",children:n})}),t(ye,{children:l(z,{children:[t(st,{size:"14",weight:"normal",color:"grey",children:O(p)}),h.map((x,b)=>t(le,{name:x==null?void 0:x.name,style:{marginTop:"0px"}},b))]})}),t(ye,{children:l(to,{children:[l(at,{size:"sm",children:[l(ve,{size:"14",weight:"normal",color:i?"primary":"black",children:["\uB2F5\uBCC0 ",s]}),l(ve,{size:"14",weight:"normal",color:"black",children:["\uCD94\uCC9C ",u]}),l(ve,{size:"14",weight:"normal",color:"black",children:["\uC870\uD68C ",g]})]}),t(J,{size:"sm",photo:o,nickname:a,id:0})]})})]})}))},ue=n=>{var e=k(n,[]);return l(L,{children:[t(j,{minWidth:1224,children:t(no,C({},e))}),t(j,{maxWidth:1223,children:t(io,C({},e))})]})},oo=r.ul`
  /* width: 380px; */
  /* height: 41px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  /* margin-bottom: 1rem; */

  ${({width:e})=>e&&B`
      width: ${e};
    `}
  ${({height:e})=>e&&B`
      width: ${e};
    `}
  ${({size:e})=>e==="sm"&&B`
      height: 21px;
      /* width: 224px; */
    `}
	${({size:e})=>e==="xsm"&&B`
      margin: 0 0;
    `}
`,ro=r.li`
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
  ${({size:e})=>e==="sm"&&B`
      font-size: 18px;
      margin: 0 0.8rem;
      /* width: 67px; */
    `}
  ${({size:e})=>e==="xsm"&&B`
      font-size: 14px;
      margin: 0 0;
      /* width: 67px; */
    `}
`,S=a=>{var s=a,{active:e,children:n,onTabClick:i}=s,o=k(s,["active","children","onTabClick"]);return t(ro,v(C({style:e?{color:"black",transition:"color 0.5s ease"}:void 0,onClick:i},o),{children:n}))},X=i=>{var o=i,{children:e}=o,n=k(o,["children"]);return t(oo,v(C({},n),{children:e}))};X.Item=S;const so=e=>{const[n,i]=D.exports.useState(!1);return t("svg",v(C({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginLeft:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:s=>{i(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:t("path",{d:"M1.225 23.5507C1.8375 24.1532 2.825 24.1532 3.4375 23.5507L13.825 13.332C14.3125 12.8524 14.3125 12.0777 13.825 11.5982L3.4375 1.37952C2.825 0.776976 1.8375 0.776976 1.225 1.37952C0.612503 1.98206 0.612503 2.95351 1.225 3.55605L10.275 12.4712L1.2125 21.3864C0.612503 21.9767 0.612503 22.9604 1.225 23.5507Z",fill:n?A.color.lightblack:A.color.black})}))},ao=e=>{const[n,i]=D.exports.useState(!1);return t("svg",v(C({width:"15",height:"25",viewBox:"0 0 15 25",fill:"none",style:{marginRight:"1rem"},xmlns:"http://www.w3.org/2000/svg",onMouseEnter:s=>{i(!0),s.target.style.cursor="pointer",s.stopPropagation()},onMouseLeave:()=>{i(!1)}},e),{children:t("path",{d:"M13.775 1.39185C13.1625 0.789306 12.175 0.789306 11.5625 1.39185L1.17501 11.6105C0.687512 12.0901 0.687512 12.8648 1.17501 13.3443L11.5625 23.563C12.175 24.1655 13.1625 24.1655 13.775 23.563C14.3875 22.9604 14.3875 21.989 13.775 21.3865L4.72501 12.4713L13.7875 3.55609C14.3875 2.96584 14.3875 1.9821 13.775 1.39185Z",fill:n?A.color.lightblack:A.color.black})}))},lo=r.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`,uo=a=>{var s=a,{number:e,active:n,onClick:i}=s,o=k(s,["number","active","onClick"]);const[u,g]=D.exports.useState(!1),p=d=>{g(!0),d.target.style.color=A.color.lightblack,d.stopPropagation()},h=d=>{g(!1),d.target.style.color=A.color.black},m={display:"flex",justifyContent:"space-around",alignItems:"center"};return t(xe,v(C({onClick:i,size:"sm",color:n?A.color.primary:A.color.white,style:m,onMouseEnter:p,onMouseLeave:h},o),{children:e}))};function co(e,n){const i=10*(n.current-1)+1;let o;return e<=10?o=e:i+9>=e?o=e-i+1:o=10,Array(o).fill(i).map((a,s)=>a+s)}function lt(e,n){let i=parseInt(n/e);return n%e==0&&(i=i-1),i+1}const ce=s=>{var u=s,{page:e=1,limit:n=8,onPage:i,questionCount:o=10}=u,a=k(u,["page","limit","onPage","questionCount"]);const g=lt(n,o),p=D.exports.useRef(1),h=()=>{if(e===1){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==1&&(p.current-=1),i(e-1)},m=()=>{if(e===g){alert("\uD398\uC774\uC9C0\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!");return}e%10==0&&(p.current+=1),i(e+1)};return l(lo,v(C({},a),{children:[t(ao,{onClick:h}),t(z,{children:co(g,p).map(d=>t(uo,{number:d,onClick:()=>i(d),active:e===d},d))}),t(so,{onClick:m})]}))},ho=async e=>await $.get(e).then(i=>i.data).catch(i=>{throw ge(i),Error()}),po=async e=>await $.get(e).then(i=>i.data.questionList).catch(i=>{throw ge(i),Error()}),Co=async()=>await $.get("https://swim.42seoul.io/api/pages/list/question?pageNumber=1").then(n=>n.data).catch(n=>{throw ge(n),Error()}),go=(e,n)=>n&&!n.length?null:`https://swim.42seoul.io/api/pages/list/question?pageNumber=${e+1}`,mo=()=>{const{data:e,size:n,setSize:i,error:o,isValidating:a}=$t(go,po);return{question:e,page:n,setPage:i,isLoading:!o&&!e,isError:o,isRefreshing:a&&e&&e.length===n}},fo=()=>{const{data:e,error:n}=_("questionCount",Co,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),i=8;return{questionCount:e==null?void 0:e.questionCount,pageSize:lt(i,e==null?void 0:e.questionCount),isLoading:!n&&!e,isError:n}},xo=(e,n)=>{const i=e===0?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:e===1?`https://swim.42seoul.io/api/pages/list/question/like?pageNumber=${n}`:e===2?`https://swim.42seoul.io/api/pages/list/question/unsolved?pageNumber=${n}`:e===3?`https://swim.42seoul.io/api/pages/list/question?pageNumber=${n}`:"",{data:o,error:a}=_(i,ho);return{question:o,isLoading:!a&&!o,isError:a}},de=r.div`
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
	${({height:e})=>e&&B`
      height: ${e};
    `}
	${({width:e})=>e&&B`
      width: ${e};
    `}
`,wo=async e=>(await $.get(e)).data;function Bo(e){const n=`https://swim.42seoul.io/api/hashtags/count?pageNumber=${e}`,{data:i,error:o}=_(n,wo);return{tagList:i&&i.hashtag,isLoading:!o&&!i,isError:o}}const bo=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 8rem;

  margin-right: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,yo=r.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${A.color.text.primary};
  -webkit-transition: color 0.2s;
  -moz-transition: color 0.2s;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: ${pe(.1,A.color.text.primary)};
  }
`,vo=r.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${A.color.text.grey};

  margin-top: 12px;
`;function ko(a){var s=a,{name:e,questionCount:n,onClick:i}=s,o=k(s,["name","questionCount","onClick"]);return l(bo,v(C({},o),{children:[t(yo,{onClick:i,children:e}),l(vo,{children:["\uC9C8\uBB38 ",n,"\uAC1C"]})]}))}const Do=r(Z)`
  width: 100%;
  padding: 1.5rem 2.5rem;
`,$o=r.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  margin-top: 1.5rem;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Ao=r.ul`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;function ut(n){var e=k(n,[]);const[i,o]=D.exports.useState(1),{tagList:a,isLoading:s}=Bo(i),u=At();if(s)return t("div",{children:"loading"});{const g=a==null?void 0:a.hashTagList.map(p=>t(ko,C({onClick:()=>{u.push({pathname:`/tag/${p.name}`,state:{hashtagId:p.id,hashtagName:p.name}})}},p),p.id));return l(Do,v(C({},e),{children:[l($o,{children:["\uBAA8\uB4E0 \uD0DC\uADF8 (",a==null?void 0:a.hashTagListCount,")\uAC1C"]}),t(Ao,{children:g}),t(P,{height:"115px",children:t(ce,{limit:30,questionCount:a==null?void 0:a.hashTagListCount,page:i,onPage:o})})]}))}}function Eo(e){const[n,i]=D.exports.useState(!1);return D.exports.useEffect(()=>{if(!e.current)return;const o=new IntersectionObserver(([a])=>i(a.isIntersecting));return o.observe(e.current),()=>{o.disconnect()}},[]),n}const Lo=n=>{var e=k(n,[]);var y;const i=D.exports.useRef(null),o=Eo(i),[a,s]=D.exports.useState(0),{question:u,page:g,setPage:p,isLoading:h,isError:m,isRefreshing:d}=mo(),f=((y=u==null?void 0:u[0])==null?void 0:y.length)===0,w=u?[].concat(...u):[],{pageSize:x}=fo(),b=f||o&&g>=x;return D.exports.useEffect(()=>{o&&!b&&!d&&p(g+1)},[o,d]),m?t("div",{children:"Error!!"}):l(et,{children:[l(X,v(C({},e),{children:[t(S,{active:a===0,onTabClick:()=>s(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{active:a===1,onTabClick:()=>s(1),children:"\uC778\uAE30\uC21C"}),t(S,{active:a===2,onTabClick:()=>s(2),children:"\uB2F5\uBCC0\uD544\uC694"}),t(S,{active:a===3,onTabClick:()=>s(3),children:"\uD0DC\uADF8"})]})),a===3?t(ut,{}):l(nt,{children:[h?[...Array(8)].map((c,I)=>t(tt,{children:t(de,{})},I)):w&&w.map((c,I)=>{var V,Q;return t(ue,C({id:c==null?void 0:c.id,title:c==null?void 0:c.title,text:c==null?void 0:c.text,photo:(V=c==null?void 0:c.user)==null?void 0:V.photo,nickname:(Q=c==null?void 0:c.user)==null?void 0:Q.nickname,is_solved:c==null?void 0:c.is_solved,answer_cnt:c==null?void 0:c.answer_count,like_count:c==null?void 0:c.like_count,view_count:c==null?void 0:c.view_count,hashtag:c==null?void 0:c.hashtag,created_at:c==null?void 0:c.created_at},e),I)}),t("div",{ref:i}),b?t(Oi,{children:"\uB9C8\uC9C0\uB9C9 \uD398\uC774\uC9C0 \uC785\uB2C8\uB2E4!"}):t(L,{})]})]})},zo=n=>{var e=k(n,[]);const[i,o]=D.exports.useState(0),[a,s]=D.exports.useState(1),{question:u,isLoading:g,isError:p}=xo(i,a);return p?t("div",{children:"Error!!"}):l(et,{children:[l(X,v(C({},e),{children:[t(S,{active:i===0,onTabClick:()=>o(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{active:i===1,onTabClick:()=>o(1),children:"\uC778\uAE30\uC21C"}),t(S,{active:i===2,onTabClick:()=>o(2),children:"\uB2F5\uBCC0\uD544\uC694"}),t(S,{active:i===3,onTabClick:()=>o(3),children:"\uD0DC\uADF8"})]})),i===3?t(ut,{}):l(nt,{children:[g?[...Array(8)].map((h,m)=>t(tt,{children:t(de,{})},m)):(u==null?void 0:u.questionList)&&(u==null?void 0:u.questionList.map((h,m)=>{var d;return t(ue,C({id:h.id,title:h.title,text:h.text,photo:h.user.photo,nickname:(d=h==null?void 0:h.user)==null?void 0:d.nickname,is_solved:h.is_solved,answer_cnt:h.answer_count,like_count:h.like_count,view_count:h.view_count,hashtag:h.hashtag,created_at:h.created_at},e),m)})),t(P,{height:"115px",children:t(ce,{questionCount:u==null?void 0:u.questionCount,page:a,onPage:s})})]})]})},Fo=n=>{var e=k(n,[]);return l(L,{children:[t(j,{minWidth:768,children:t(zo,C({},e))}),t(j,{maxWidth:767,children:t(Lo,C({},e))})]})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const So=r(z)`
  width: 100%;
  margin-bottom: 3rem;
`,Io=r(z)`
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
`;const Mo=({panel:e,content1:n,content2:i})=>l(L,{children:[t(So,{children:e}),l(Io,{children:[n,i]})]}),To=r.div`
  width: 28%;
  position: relative;
  @media (max-width: 910px) {
    display: none;
    background-color: pink;
  }
`,Ho=r(Z)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 2.5rem;
  padding-bottom: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
`,Po=r(z)``,Wo=r.span`
  ${({theme:e})=>e&&B`
      background-color: ${e.color.primary};
    `}
  position: absolute;
  width: 130px;
  height: 15px;
  top: 75px;
  opacity: 30%;
  z-index: 0;
`,Vo=r.div`
  margin: 1.5rem 0;
  margin-bottom: 2rem;
`,_o=r.div`
  height: 12px;
  width: 0.5px;
  margin: 0 1rem;
  ${({theme:e})=>B`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,Ro=r.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  * & * {
    margin-right: 1.5rem;
  }
`,qo=r.div`
  /* z-index: 100; */
`,No=({onHover:e})=>{const[n,i]=D.exports.useState(!1),o=D.exports.useRef(null),a=u=>{if(u.type=="click")e(!n),i(!n);else if(u.type=="mouseleave"){if(n)return;e(!1)}},s=u=>{u.target.style.cursor="pointer",e(!0)};return l("svg",{ref:o,xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:n?`${A.color.lightprimary}`:"black",onClick:a,onMouseEnter:s,onMouseLeave:a,children:[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})]})},Zo=async e=>(await $.get(e)).data,Uo=()=>{const e="https://swim.42seoul.io/api/users/ranking",{data:n,error:i}=_(e,Zo),o=n==null?void 0:n.monthRankerInfo.filter(s=>s.id!=null),a=n==null?void 0:n.totalRankerInfo.filter(s=>s.id!=null);return{ranking:{month:o,total:a},isLoading:!i&&!n,isError:i}},Qo=r(Z)`
  height: 400px;
  width: 350px;
  background-color: rgba(53, 147, 235, 0.9);
  padding: 20px 30px;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 90px;

  ${({visible:e})=>e===!1&&B`
      display: none;
    `}
`,jo=r.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
`;r.span`
  height: 100%;
  width: 100%;
`;const ee=r.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
  height: 30px;
  padding-bottom: 2px;
  margin-top: 1.5rem;
  border-bottom: 1px solid rgba(75, 131, 182, 0.8);
`,Ko=r.div`
  font-size: 10px;
  font-weight: 500;
  color: white;
  line-height: 2rem;
  padding-bottom: 2px;
  margin-top: 2rem;
  /* border-bottom: 1px solid rgba(75, 131, 182, 0.8); */
`,Go=r.a`
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
`,Jo=({visible:e=!1})=>l(Qo,{visible:e,children:[l(jo,{children:["\uC810\uC218\uC0B0\uC815 \uAE30\uC900",t("span",{style:{fontSize:"40px",marginLeft:"1rem"},role:"img","aria-label":"swim",children:"\u{1F3CA}"})]}),t(ee,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(ee,{children:"+5 \uC810 : \uB0B4 \uC9C8\uBB38\uC758 \uB2F5\uBCC0 \uC911 \uD558\uB098\uB97C \uCC44\uD0DD"}),t(ee,{children:"+10 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC5D0 \uC88B\uC544\uC694\uAC00 \uB2EC\uB9BC"}),t(ee,{children:"+15 \uC810 : \uB0B4\uAC00 \uC62C\uB9B0 \uB2F5\uBCC0\uC774 \uCC44\uD0DD"}),t(ee,{children:"-1 \uC810 : \uB2E4\uB978 \uC0AC\uB78C\uC758 \uC9C8\uBB38/\uB2F5\uBCC0\uC5D0 \uC2EB\uC5B4\uC694\uB97C \uB2EE"}),l(Ko,{children:["\uB108\uBB34 \uC131\uC758\uC5C6\uAC8C \uC801\uD600\uC9C4 \uAE00\uB4E4\uC740 \uD1B5\uBCF4\uC5C6\uC774 \uC0AD\uC81C\uB418\uBA70, \uC774\uBCA4\uD2B8\uC5D0\uC11C \uC81C\uC678\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."," ",t(Go,{href:"https://gratis-cardboard-45e.notion.site/42swim-7d4fd87c1cbd4686a7218788610955d3",children:"\uCEE4\uBBA4\uB2C8\uD2F0 \uC591\uC2DD"})," ","\uC744 \uC9C0\uCF1C\uC8FC\uC138\uC694!"]})]}),ct=({rank:e,photo:n,nickname:i})=>l(Ro,{children:[t(E,{size:"18",weight:"bold",color:"deepgray",children:e}),t(J,{border:!0,size:"lg",nickname:i,photo:n})]}),Xo=()=>{const{ranking:e,isLoading:n,isError:i}=Uo(),{month:o,total:a}=e,[s,u]=D.exports.useState(0),[g,p]=D.exports.useState(!1),h=m=>{p(m)};return n?t("div",{children:"loading"}):i?t("div",{children:"error"}):l(To,{children:[t(Ve,{style:{height:"44px",justifyContent:"flex-start",alignItems:"flex-start"}}),l(Ho,{children:[l(Po,{children:[t(E,{size:"18",weight:"bold",style:{zIndex:"2"},children:"42Swimmer \uB7AD\uD0B9"}),t(Wo,{}),t(No,{onHover:h}),t(Jo,{visible:g})]}),t(Vo,{children:l(X,{size:"xsm",children:[t(S,{size:"xsm",active:s===0,onTabClick:()=>u(0),children:"\uC6D4\uBCC4\uC21C"}),t(_o,{}),t(S,{size:"xsm",active:s===1,onTabClick:()=>u(1),children:"\uC804\uCCB4\uC21C"})]})}),t(qo,{children:s===0?o.map((m,d)=>t(ct,{rank:d,nickname:m.nickname,photo:m.photo},m.id)):a.map((m,d)=>t(ct,{rank:d,nickname:m.nickname,photo:m.photo},m.id))})]})]})},te=e=>t("svg",v(C({},e),{height:"10px",viewBox:"0 0 448 448",width:"10px",fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"})})),Yo=r(T)`
  border-radius: 50%;
  width: 41px;
  padding: 0;
`,Oo=({onClick:e})=>l(L,{children:[t(j,{minWidth:1024,children:l(T,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(te,{style:{marginLeft:"2rem"}})]})}),t(j,{minWidth:768,maxWidth:1023,children:l(T,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(te,{style:{marginLeft:"2rem"}})]})}),t(j,{maxWidth:767,children:t(Yo,{shadow:!0,onClick:e,size:"sm",fontColor:"white",children:t(te,{})})})]}),er=i=>{var o=i,{history:e}=o,n=k(o,["history"]);const{value:a,onChange:s}=M("");return t(L,{children:t(G,{children:t(Mo,{panel:l(L,{children:[t(be,{onChange:s,search:a,onSearch:g=>{Et(g),e.push(`/search?keyword=${a}`)}}),t(Oo,{onClick:()=>e.push("/writing")})]}),content1:t(Fo,{}),content2:t(Xo,{})})})})},tr=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,nr=r(z)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,ir=r.span`
  font-size: 18px;
  font-weight: 700;
`,or=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,rr=r(Z)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,sr=async e=>(await $.get(e)).data,ar=(e,n,i)=>{const a=`https://swim.42seoul.io/api/pages/list/question/keyword?pageNumber=${n}&keyword=${i}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:s,error:u}=_(a,sr);return{question:s,isLoading:!u&&!s,isError:u}},dt=i=>{var o=i,{keyword:e}=o,n=k(o,["keyword"]);const[a,s]=D.exports.useState(0),[u,g]=D.exports.useState(1),{question:p,isLoading:h,isError:m}=ar(a,u,e);return m?t("div",{children:"Error!!"}):t(tr,{children:l(rr,{children:[l(nr,{children:[l(ir,{children:["\uAC80\uC0C9\uACB0\uACFC (",p==null?void 0:p.questionCount,"\uAC74)"]}),l(X,v(C({size:"sm"},n),{children:[t(S,{size:"sm",active:a===0,onTabClick:()=>s(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{size:"sm",active:a===1,onTabClick:()=>s(1),children:"\uC778\uAE30\uC21C"}),t(S,{size:"sm",active:a===2,onTabClick:()=>s(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),h?[...Array(8)].map((d,f)=>t(or,{children:t(de,{})},f)):p==null?void 0:p.questionList.map((d,f)=>{var w;return t(ue,C({id:d.id,title:d.title,text:d.text,photo:d.user.photo,nickname:(w=d==null?void 0:d.user)==null?void 0:w.nickname,is_solved:d.is_solved,answer_cnt:d.answer_count,like_count:d.like_count,view_count:d.view_count,hashtag:d.hashtag,created_at:d.created_at},n),f)}),t(P,{height:"115px",children:t(ce,{questionCount:p==null?void 0:p.questionCount,page:u,onPage:g})})]})})};r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const lr=r(z)`
  width: 100%;
  margin-bottom: 3rem;
`,ur=r(z)`
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
`;const cr=({panel:e,content:n})=>l(L,{children:[t(lr,{children:e}),t(ur,{children:n})]}),dr=({location:e})=>{const i=Lt.parse(e.search,{ignoreQueryPrefix:!0}).keyword,{value:o,onChange:a}=M(i),[s,u]=D.exports.useState(i);return t(G,{children:t(cr,{panel:l(L,{children:[t(be,{onChange:a,search:o,onSearch:()=>{u(o)}}),l(T,{shadow:!0,onClick:()=>{},size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(te,{style:{marginLeft:"2rem"}})]})]}),content:t(dt,{keyword:s})})})},hr=r.div`
  padding: 0 5rem;
`,pr=r(z)`
  justify-content: flex-start;
  > * {
    margin-right: 3rem;
  }
`,Cr=r(P)`
  height: 300px;
  /* width: 25%; */
  justify-content: center;

  > * {
    margin-bottom: 2rem;
  }
`,gr=r.div`
  width: 0.5px;
  height: 150px;
  margin: 0 2rem;
  ${({theme:e})=>B`
    border-left: 0.5px ${e.color.deepgray} solid;
  `}
`,mr=r.div`
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
`,fr=r.div`
  > * {
    margin-top: 2rem;
  }

  > button {
    margin-top: 3rem;
    float: right;
    /* 어케할지 결정하기  */
  }
`,xr=({tlPanel:e,trPanel:n,bPanel:i})=>l(hr,{children:[l(pr,{children:[t(Cr,{children:e}),t(gr,{}),t(mr,{children:n})]}),t(fr,{children:i})]}),wr=r.div`
  width: 100%;
  height: 100px;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>B`
    border-bottom: 1px ${e.color.lightgrey} solid;
  `}
`,Br=r(z)`
  padding: 1.5rem 0;
`,br=r(U)`
  width: 25%;
`,yr=r(E)`
  width: 65%;
`,vr=r(z)`
  width: 10%;
`,kr=r(E)`
  margin-bottom: 1.5rem;
`,ht=({name:e,value:n,etc:i,desc:o})=>l(wr,{children:[l(Br,{children:[t(br,{size:"h2",children:e}),t(yr,{weight:"normal",size:"20",children:n}),t(vr,{children:i})]}),t(kr,{size:"14",color:"lightgrey",children:o})]}),Dr=r(W)`
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
`;const $r=r(N)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > button {
    margin-right: 1rem;
  }
`,De=r(T)`
  width: 153px;
`,Ar=n=>{var e=k(n,[]);const{user:i,isLoading:o,isError:a}=q(),{value:s,onChange:u,setValue:g}=M(i==null?void 0:i.nickname),[p,h]=D.exports.useState(!1);if(a)return alert("\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"),t(Fe,{to:"/"});if(o)return t("div",{children:"loading..."});const m=()=>{const x=document.getElementById("uploadImg");x==null||x.click()},d=async()=>{const x=new FormData,b=document.getElementById("uploadImg").files[0],y="https://swim.42seoul.io/api/users/image";x.append("imgFile",b),await $.patch(y,x,{withCredentials:!0}).then(c=>{alert("\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC\uB97C \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},f=async()=>{const x="https://swim.42seoul.io/api/users/image";await $.delete(x,{withCredentials:!0}).then(b=>{alert("\uC774\uBBF8\uC9C0\uB97C \uC815\uC0C1\uC801\uC73C\uB85C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4!")}),location.reload()},w=async()=>{const x="https://swim.42seoul.io/api/users/nickname",b={nickname:s};await $.patch(x,b,{withCredentials:!0}).then(y=>{alert("\uB2C9\uB124\uC784 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!")}),Ce("https://swim.42seoul.io/api/users/info"),h(!1)};return t(G,v(C({},e),{children:t(xr,{tlPanel:l(L,{children:[t(xe,{size:"lg",img:(i==null?void 0:i.image)?i.image:null}),t(De,{size:"sm",color:"primary",shadow:!0,onClick:m,children:"\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"}),t("form",{id:"imgform",method:"patch",encType:"application/json",style:{display:"none"},children:t("input",{id:"uploadImg",type:"file",onChange:d})}),t(De,{size:"sm",color:"white",shadow:!0,onClick:f,children:"\uC774\uBBF8\uC9C0 \uC81C\uAC70"})]}),trPanel:l(L,{children:[l(N,{visible:!p,children:[t(U,{size:"h1",children:i==null?void 0:i.nickname}),t(ae,{weight:"bold",width:"4rem"}),t(F,{fontcolor:"primary",underline:!0,to:"#",onClick:()=>{g(i==null?void 0:i.nickname),h(!0)},children:"\uC218\uC815"})]}),l($r,{visible:p,children:[t(Dr,{value:s||"",onChange:u}),t(T,{size:"sm",color:"lightprimary",shadow:!0,onClick:w,children:"\uC218\uC815\uD558\uAE30"}),t(F,{fontcolor:"deepgray",underline:!0,to:"#",onClick:()=>h(!1),children:"\uCDE8\uC18C"})]})]}),bPanel:l(L,{children:[t(ht,{name:"\uC774\uBA54\uC77C",value:i.email,etc:t(F,{fontcolor:"primary",underline:!0,children:"\uC218\uC815"}),desc:"\uD68C\uC6D0 \uC778\uC99D \uB610\uB294 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uBC1C\uC1A1\uD558\uB294 \uC774\uBA54\uC77C\uC744 \uC218\uC2E0\uD558\uB294 \uC8FC\uC18C\uC785\uB2C8\uB2E4."}),t(ht,{name:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD",value:t(F,{fontcolor:"primary",underline:!0,children:"\uBCC0\uACBD\uD558\uAE30"}),desc:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uD558\uAE30 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC704\uC758 \uC774\uBA54\uC77C\uB85C  \uBCC0\uACBD\uD558\uAE30 \uD398\uC774\uC9C0\uAC00 \uBC1C\uC1A1\uB429\uB2C8\uB2E4."}),t(De,{size:"sm",fontColor:"white",color:"red",shadow:!0,children:"\uD68C\uC6D0 \uD0C8\uD1F4"})]})})}))},Er=r.div`
  width: 100%;
  height: 100%;
`,Lr=r(Oe)`
  width: 100%;
  margin-bottom: 20px;
`,zr=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,Fr=()=>{const e='\uC9C8\uBB38\uC744 \uB0A8\uACA8\uBCF4\uC138\uC694!\n  ```C\n  printf("helloWord");\n  ```',n=d=>/[\w]*$/g.test(d)&&d.length<20,i=d=>d.length<40,o=M("",n),a=M("",i),s=M(e),[u,g]=D.exports.useState([]),{isLoading:p,user:h}=q();D.exports.useEffect(()=>{!p&&!h&&(alert("\uB85C\uADF8\uC778 \uD6C4 \uC9C8\uBB38 \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),location.href="/")},[h]);const m=async d=>{if(d.preventDefault(),!a.value||!s.value){alert("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC644\uC131\uD574\uC8FC\uC138\uC694.");return}try{const f=await $.post("https://swim.42seoul.io/api/posts/question",{title:a.value,hashtag:u,text:s.value},{withCredentials:!0});f.status===200?(alert("\uC9C8\uBB38 \uC791\uC131\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"),location.href=`/detail?id=${f.data.id}`):(alert("\uC9C8\uBB38 \uC791\uC131\uC744 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."),location.href="/")}catch(f){alert(f)}};return l(Er,{children:[t(Lr,{value:a.value,placeholder:"\uC9C8\uBB38\uD560 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",onChange:a.onChange}),t(Ye,{inputChange:o.onChange,value:o.value,setValue:o.setValue,tag:u,setTag:g,placeholder:"\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694 ex) ft_printf"}),t(ae,{weight:"bold",width:"4rem",style:{marginBottom:"3rem"}}),l(zr,{children:[t(re,{value:s.value,setValue:s.setValue,placeHolder:"\uC9C8\uBB38\uC744 \uC0C1\uC138\uD558\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694!"}),t(T,{size:"sm",onClick:m,fontColor:"white",children:"\uC9C8\uBB38 \uC791\uC131\uD558\uAE30"})]})]})},Sr=n=>{var e=k(n,[]);return t(G,v(C({},e),{children:t(Fr,{})}))},Ir=zt`
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
`,Mr=({children:e})=>l(Ft,{theme:A,children:[t(Ir,{}),e]});r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`;r.div`
  height: 5%;
`;const Tr=r(z)`
  width: 100%;
  margin-bottom: 3rem;
`,Hr=r(z)`
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
`;const Pr=({panel:e,content:n})=>l(L,{children:[t(Tr,{children:e}),t(Hr,{children:n})]}),Wr=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`,Vr=r(z)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,_r=r.span`
  font-size: 18px;
  font-weight: 700;
`,Rr=r.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme:e})=>e.color.primary};
`,qr=r.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,Nr=r(Z)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`,Zr=async e=>(await $.get(e)).data,Ur=(e,n,i)=>{const a=`https://swim.42seoul.io/api/pages/list/question/hashtag/id?pageNumber=${n}&hashtagId=${i}&orderBy=${e===0?"time":e===1?"like":"solving"}`,{data:s,error:u}=_(a,Zr);return{question:s,isLoading:!u&&!s,isError:u}},Qr=o=>{var a=o,{hashtagName:e,hashtagId:n}=a,i=k(a,["hashtagName","hashtagId"]);const[s,u]=D.exports.useState(0),[g,p]=D.exports.useState(1),{question:h,isLoading:m,isError:d}=Ur(s,g,n);return d?t("div",{children:"Error!!"}):t(Wr,{children:l(Nr,{children:[l(Vr,{children:[l(_r,{children:[l(Rr,{children:["#",e]})," \uAC80\uC0C9\uACB0\uACFC (",h==null?void 0:h.questionCount,"\uAC74)"]}),l(X,v(C({size:"sm"},i),{children:[t(S,{size:"sm",active:s===0,onTabClick:()=>u(0),children:"\uCD5C\uC2E0\uC21C"}),t(S,{size:"sm",active:s===1,onTabClick:()=>u(1),children:"\uC778\uAE30\uC21C"}),t(S,{size:"sm",active:s===2,onTabClick:()=>u(2),children:"\uB2F5\uBCC0\uD544\uC694"})]}))]}),m?[...Array(8)].map((f,w)=>t(qr,{children:t(de,{})},w)):h==null?void 0:h.questionList.map((f,w)=>{var x;return t(ue,C({id:f.id,title:f.title,text:f.text,photo:f.user.photo,nickname:(x=f==null?void 0:f.user)==null?void 0:x.nickname,is_solved:f.is_solved,answer_cnt:f.answer_count,like_count:f.like_count,view_count:f.view_count,hashtag:f.hashtag,created_at:f.created_at},i),w)}),t(P,{height:"115px",children:t(ce,{questionCount:h==null?void 0:h.questionCount,page:g,onPage:p})})]})})},jr=({location:e})=>{const n=e.state,{value:i,onChange:o}=M(""),[a,s]=D.exports.useState("");return t(G,{children:t(Pr,{panel:l(L,{children:[t(be,{onChange:o,search:i,onSearch:()=>{s(i)}}),l(T,{shadow:!0,onClick:()=>{},size:"sm",fontColor:"white",children:["\uC9C8\uBB38\uD558\uAE30 ",t(te,{style:{marginLeft:"2rem"}})]})]}),content:a===""?t(Qr,{hashtagName:n.hashtagName,hashtagId:n.hashtagId}):t(dt,{keyword:a})})})};Y.event({category:"User",action:"Created an Account"});Y.exception({description:"An error ocurred",fatal:!0});const Kr=()=>{const e=Te();return D.exports.useEffect(()=>{Y.initialize("UA-215641389-1"),Y.set({page:e.pathname}),Y.pageview(e.pathname)},[e]),t(Mr,{children:l(St,{children:[t(R,{path:"/",exact:!0,render:n=>t(er,C({},n))}),t(R,{path:"/search",exact:!0,render:n=>t(dr,C({},n))}),t(R,{path:"/tag/:hashtagName",exact:!0,render:n=>t(jr,C({},n))}),t(R,{path:"/detail",exact:!0,render:n=>t(Vi,C({},n))}),t(R,{path:"/writing",exact:!0,render:n=>t(Sr,C({},n))}),t(R,{path:"/edit",exact:!0,render:n=>t(Ki,C({},n))}),t(R,{path:"/setting",exact:!0,render:n=>t(Ar,C({},n))}),t(R,{path:"/auth",render:n=>t(Vt,C({},n))})]})})};It({dsn:"https://be73c673dc5040cab904c7281630f650@o1092079.ingest.sentry.io/6110101",integrations:[new Mt],tracesSampleRate:1});Tt.render(t(Ht.StrictMode,{children:t(Pt,{children:t(Kr,{})})}),document.getElementById("root"));
