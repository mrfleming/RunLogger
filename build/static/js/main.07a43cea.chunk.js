(this.webpackJsonprunlogger=this.webpackJsonprunlogger||[]).push([[0],{109:function(e,t,a){e.exports=a(122)},114:function(e,t,a){},121:function(e,t,a){e.exports={white:"runsrow_white__3_Eoo"}},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(114),a(72),a(48)),i=a(27),m=a(87),u=a(31),s=a(3),d=a(159),E=a(22),f=a(192),p=a(167),h=a(168),g=a(175),b=a(166),v=a(69),_=a(174),y=a(169),w=a(176),x=a(178),k=a(177),N=a(170),O=a(172),I=a(173),j=a(160),C=a(161),T=a(162),S=a(163),A=a(164),B=a(165),R=a(179),D=a(5);var M=Object(D.a)((function(e){return{icon:{color:"aqua",backgroundColor:"white",textDecoration:"none","&:hover":{color:"white",backgroundColor:"aqua",textDecoration:"none"}}}}))((function(e){var t=e.classes,a=e.type;return r.a.createElement("div",{className:t.icon},a)})),P=Object(d.a)((function(e){return{root:{display:"flex"},appBar:{backgroundColor:"aqua",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(u.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));function F(e){var t,a,n=e.main,l=P(),c=Object(E.a)(),m=r.a.useState(!1),d=Object(i.a)(m,2),D=d[0],F=d[1],J=[{name:"Start",icon:r.a.createElement(M,{type:r.a.createElement(j.a,null)}),route:"/"},{name:"Me",icon:r.a.createElement(M,{type:r.a.createElement(C.a,null)}),route:"/profile"},{name:"runs",icon:r.a.createElement(M,{type:r.a.createElement(T.a,null)}),route:"/runs"},{name:"Feed",icon:r.a.createElement(M,{type:r.a.createElement(S.a,null)}),route:"/feed"},{name:"Friends",icon:r.a.createElement(M,{type:r.a.createElement(A.a,null)}),route:"/runners"},{name:"Challenge",icon:r.a.createElement(M,{type:r.a.createElement(B.a,null)}),route:"/database"}];return r.a.createElement("div",{className:l.root},r.a.createElement(b.a,null),r.a.createElement(p.a,{position:"fixed",className:Object(s.a)(l.appBar,Object(u.a)({},l.appBarShift,D))},r.a.createElement(h.a,null,r.a.createElement(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){F(!0)},edge:"start",className:Object(s.a)(l.menuButton,Object(u.a)({},l.hide,D))},r.a.createElement(N.a,null)),r.a.createElement(v.a,{variant:"h3",noWrap:!0},"RunLogger"))),r.a.createElement(f.a,{variant:"permanent",className:Object(s.a)(l.drawer,(t={},Object(u.a)(t,l.drawerOpen,D),Object(u.a)(t,l.drawerClose,!D),t)),classes:{paper:Object(s.a)((a={},Object(u.a)(a,l.drawerOpen,D),Object(u.a)(a,l.drawerClose,!D),a))}},r.a.createElement("div",{className:l.toolbar},r.a.createElement(y.a,{onClick:function(){F(!1)}},"rtl"===c.direction?r.a.createElement(O.a,null):r.a.createElement(I.a,null))),r.a.createElement(_.a,null),r.a.createElement(g.a,null,J.map((function(e){return r.a.createElement(o.b,{to:e.route},r.a.createElement(w.a,{button:!0,key:e.name},r.a.createElement(k.a,null,e.icon),r.a.createElement(x.a,{primary:e.name})))}))),r.a.createElement(_.a,null),r.a.createElement(g.a,null,r.a.createElement(w.a,{button:!0,key:"Settings"},r.a.createElement(k.a,null,r.a.createElement(R.a,null)),r.a.createElement(x.a,{primary:"Settings"})))),r.a.createElement("main",{className:l.content},n))}var J=a(13),Y=a(67),L=a.n(Y),U=function(e){return r.a.createElement("article",{className:L.a.profile},r.a.createElement("h2",{className:L.a.name},"Eric Fleming"),r.a.createElement("div",{className:L.a.stats},r.a.createElement("h3",null,"Stats"),r.a.createElement("ul",null,r.a.createElement("li",null,"Run count: ",e.runCount),r.a.createElement("li",null,"Total miles: ",e.totalMiles),r.a.createElement("li",null,"Longest run: ",e.longestRun),r.a.createElement("li",null,"Fastest pace: ",e.fastestPace))))},W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("main",null,r.a.createElement("section",{className:"left-content"},r.a.createElement(U,{runCount:"535",totalMiles:"1600 mi",longestRun:"26.2 mi",fastestPace:"6:35 min/mi"})),r.a.createElement("section",{className:"right-content"})))};var X=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"404 Error"),r.a.createElement("h3",null,"Page Not Found"))},q=a(185),H=a(186),z=a(94),G=a(183),K=a(184),Q=a(180),$=a(65),V=a(64),Z=a(66),ee=a(181),te=a(182),ae={teal:{light:Q.a.A200,main:Q.a.A400,dark:Q.a.A700,contrastText:"#fff"},blue:{light:$.a.A200,main:$.a.A400,dark:$.a.A700,contrastText:"#fff"},red:{light:V.a.A200,main:V.a.A400,dark:V.a.A700,contrastText:"#fff"},green:{light:Z.a.A200,main:Z.a.A400,dark:Z.a.A700,contrastText:"#fff"},yellow:{light:ee.a.A200,main:ee.a.A400,dark:ee.a.A700,contrastText:"#fff"},cyan:{light:te.a.A200,main:te.a.A400,dark:te.a.A700,contrastText:"#fff"}},ne=function(e){var t=e.text,a=e.color,n=e.onClick,l=e.startIcon,c=e.endIcon,o=Object(z.a)({overrides:{MuiButton:{text:{background:ae[a].main,color:ae[a].contrastText,"&:hover":{backgroundColor:ae[a].dark}}}}});return r.a.createElement(G.a,{theme:o},r.a.createElement(K.a,{onClick:n,startIcon:l,endIcon:c},t))},re="https://runloggerdb.herokuapp.com/mongo/";var le={fetchRunnersMongo:function(){return fetch("".concat(re,"/runners")).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);console.log(t);for(var a=[],n=0;n<t.length;n++){var r=t[n];a[n]={id:r._id,first:r.name.first,last:r.name.last}}return a}))},addRunner:function(e){var t=e.getElementById("firstName").value,a=e.getElementById("lastName").value;console.log("did the name catch ?? ".concat(t," ").concat(a));var n=e.getElementById("city").value,r=e.getElementById("country").value;fetch("".concat(re,"/runner"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first:t,last:a,city:n,country:r})}).then((function(e){console.log(e.text()),window.location.reload()}))},editRunner:function(e){console.log("Making changes to the Runner fields");var t=prompt("Your (new) first name?"),a=prompt("Your (new) last name?");fetch("".concat(re,"/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({runnerid:e,first:t,last:a})}).then((function(e){console.log(e.text()),window.location.reload()}))},deleteRunner:function(e){fetch("".concat(re,"/runner/").concat(e),{method:"DELETE"}).then((function(e){return e.text()})).then((function(e){alert(e),window.location.reload()}))}},ce=function(e){var t=e.id,a=e.first,n=e.last;return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,r.a.createElement(ne,{text:"Edit",color:"yellow",onClick:function(){return le.editRunner(t)},startIcon:r.a.createElement(q.a,null)}),r.a.createElement(ne,{text:"Delete",color:"red",onClick:function(){return le.deleteRunner(t)},startIcon:r.a.createElement(H.a,null)})))},oe=a(188),ie=a(91),me=a.n(ie),ue=a(39),se=a.n(ue);var de=function(){return r.a.createElement("form",null,r.a.createElement("div",{className:se.a.name_input},r.a.createElement("div",{className:se.a.half_no_pad},r.a.createElement(oe.a,{id:"firstName",label:"first name"})),r.a.createElement("div",{className:se.a.half_with_pad},r.a.createElement(oe.a,{id:"lastName",label:"last name"}))),r.a.createElement("div",{className:se.a.name_input},r.a.createElement("div",{className:se.a.half_no_pad},r.a.createElement(oe.a,{id:"city",label:"city"})),r.a.createElement("div",{className:se.a.half_with_pad},r.a.createElement(oe.a,{id:"country",label:"country"}))),r.a.createElement(K.a,{variant:"contained",color:"primary",onClick:function(){var e=document;le.addRunner(e).then((function(e){return console.log(e)}))},endIcon:r.a.createElement(me.a,null)},"Add"))},Ee=a(92),fe=a.n(Ee);var pe=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];function c(){le.fetchRunnersMongo().then((function(e){return l(e)}))}return Object(n.useEffect)((function(){c()}),[]),r.a.createElement("div",null,r.a.createElement("h3",null,"Add a Runner"),r.a.createElement(de,null),r.a.createElement("br",null),r.a.createElement(ne,{text:"update",color:"green",onClick:c,endIcon:r.a.createElement(fe.a,null)},"Update Runners"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID#"),r.a.createElement("th",{scope:"col"},"First"),r.a.createElement("th",{scope:"col"},"Last"),r.a.createElement("th",{scope:"col"},"Changes"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement(ce,{key:e.id,id:e.id,first:e.first,last:e.last})})))))},he=(a(121),a(68)),ge=a.n(he),be=function(e){var t=e.run_uid,a=e.id,n=e.date,l=e.distance,c=e.time,o=ge.a.generateClockTime(c),i=ge.a.generatePace(l,c),m=ge.a.trimDateString(n);return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},a),r.a.createElement("td",null,m),r.a.createElement("td",null,l),r.a.createElement("td",null,o),r.a.createElement("td",null,i),r.a.createElement("td",null,r.a.createElement(ne,{text:"Edit",color:"yellow",onClick:function(){console.log("Making changes to the Run fields");var e=prompt("Your (new) date? Or hit cancel."),r=prompt("Your (new) dist? Or hit cancel."),o=prompt("Your (new) time? Or hit cancel.");fetch("http://localhost:3001/runs/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({run_uid:t,runnerid:a,date:e||n,distance:r||l,time:o||c})}).then((function(e){console.log(e.text()),window.location.reload()}))},startIcon:r.a.createElement(q.a,null)}),r.a.createElement(ne,{text:"Delete",color:"red",onClick:function(){fetch("http://localhost:3001/runs/".concat(t),{method:"DELETE"}).then((function(e){return e.text()})).then((function(e){alert(e),window.location.reload()}))},startIcon:r.a.createElement(H.a,null)})))},ve=a(25),_e=a.n(ve),ye=a(93),we=a.n(ye),xe=a(63),ke=a(18),Ne=a(187);function Oe(){var e=Object(n.useState)(new Date("2020-08-01")),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement(ke.a,{utils:xe.a},r.a.createElement(Ne.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker",label:"Date picker inline",value:a,onChange:function(e){l(e)},KeyboardButtonProps:{"aria-label":"change date"}}))}var Ie=function(){return r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("div",{className:_e.a.margin_rt_lg},r.a.createElement(oe.a,{className:_e.a.idInput,id:"runner_id",label:"Runner ID"})),r.a.createElement("div",{className:_e.a.margin_rt},r.a.createElement(Oe,null))),r.a.createElement("div",null,r.a.createElement("div",{className:_e.a.margin_rt_lg},r.a.createElement(oe.a,{className:_e.a.distInput,id:"dist",label:"Distance"})),r.a.createElement("div",{className:_e.a.margin_rt},r.a.createElement(oe.a,{className:_e.a.timeInput,id:"time-hr",label:"hr"})),r.a.createElement("div",{className:_e.a.margin_rt},r.a.createElement(oe.a,{className:_e.a.timeInput,id:"time-min",label:"min"})),r.a.createElement("div",{className:_e.a.margin_rt_lg},r.a.createElement(oe.a,{className:_e.a.timeInput,id:"time-sec",label:"sec"})),r.a.createElement(ne,{onClick:function(){var e=document,t=parseInt(e.getElementById("runner_id").value),a=e.getElementById("date-picker").value,n=parseFloat(e.getElementById("dist").value),r=parseInt(e.getElementById("time-hr").value),l=parseInt(e.getElementById("time-min").value),c=parseInt(e.getElementById("time-sec").value)+60*l+3600*r;fetch("http://localhost:3001/runs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({runnerid:t,date:a,distance:n,time:c})}).then((function(e){console.log(e.text()),window.location.reload()}))},text:"Enter Run",color:"cyan",endIcon:r.a.createElement(we.a,null)})))};var je=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:3001/runs").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);l(t.data)}))}),[]),r.a.createElement("div",null,r.a.createElement("h3",null,"Running History"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(Ie,null)),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"date"),r.a.createElement("th",{scope:"col"},"dist"),r.a.createElement("th",{scope:"col"},"time"),r.a.createElement("th",{scope:"col"},"pace"),r.a.createElement("th",{scope:"col"},"changes"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement(be,{key:e.run_uid,run_uid:e.run_uid,id:e.runnerid,date:e.date,distance:e.distance,time:e.time,pace:e.pace})})))))};var Ce=function(){return r.a.createElement("section",null,r.a.createElement("h2",null,"Test DB Output"),r.a.createElement("div",null,r.a.createElement(pe,null)),r.a.createElement("div",null,r.a.createElement(je,null)))};var Te=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:3001/runs").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e).data.filter((function(e){return"1"!==e.runnerid}));l(t)}))}),[]),r.a.createElement("div",null,r.a.createElement("h3",null,"Feed"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"date"),r.a.createElement("th",{scope:"col"},"dist"),r.a.createElement("th",{scope:"col"},"time"),r.a.createElement("th",{scope:"col"},"pace"),r.a.createElement("th",{scope:"col"},"changes"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement(be,{key:e.run_uid,run_uid:e.run_uid,id:e.runnerid,date:e.date,distance:e.distance,time:e.time,pace:e.pace})})))))},Se=function(){return r.a.createElement("div",{className:"main_component"},r.a.createElement(J.d,null,r.a.createElement(J.b,{exact:!0,path:"/",component:W}),r.a.createElement(J.b,{exact:!0,path:"/profile",component:U}),r.a.createElement(J.b,{exact:!0,path:"/database",component:Ce}),r.a.createElement(J.b,{exact:!0,path:"/runners",component:pe}),r.a.createElement(J.b,{exact:!0,path:"/runs",component:je}),r.a.createElement(J.b,{exact:!0,path:"/feed",component:Te}),r.a.createElement(J.b,{exact:!0,path:"/404",component:X}),r.a.createElement(J.a,{to:"/404"})))};var Ae=function(){return r.a.createElement(o.a,null,r.a.createElement(F,{main:r.a.createElement(Se,null)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=a(51),Re=a.n(Be),De=Object(z.a)({palette:{primary:{light:"#4791db",main:"#1976d2",dark:"#115293",contrastText:"#fff"},secondary:{light:"#e33371",main:"#dc004e",dark:"#9a0036",contrastText:"#000"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#000"},warning:{light:"#ffb74d",main:"#ff9800",dark:"#f57c00",contrastText:"#000"},info:{light:"#64b5f6",main:"#2196f3",dark:"#1976d2",contrastText:"#000"},success:{light:"#81c784",main:"#4caf50",dark:"#388e3c",contrastText:"#000"},brand:{light:Re.a.A100,main:Re.a.A200,dark:Re.a.A400,darker:Re.a.A700,contrastText:"#000"}}});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G.a,{theme:De},r.a.createElement(ke.a,{utils:xe.a},r.a.createElement(Ae,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,a){e.exports={idInput:"addrun_idInput__3eWxU",timeInput:"addrun_timeInput__2kYwf",distInput:"addrun_distInput__1dUgU",margin_rt:"addrun_margin_rt__1X_D7",margin_rt_lg:"addrun_margin_rt_lg__1yy_5"}},39:function(e,t,a){e.exports={name_input:"addrunner_name_input__2XwAh",half_no_pad:"addrunner_half_no_pad__3Qu_T",half_with_pad:"addrunner_half_with_pad__KYuCN"}},67:function(e,t,a){e.exports={profile:"profile_profile__1HbGp",name:"profile_name__1efXH",stats:"profile_stats__1SMnW"}},68:function(e,t){e.exports={generateClockTime:function(e){for(var t=[0,0,0];e>0;)if(e>=3600)t[0]++,e-=3600;else{if(!(e>=60)){t[2]=e;break}t[1]++,e-=60}for(var a=0;a<3;a++){var n=t[a];n<10&&(t[a]="0"+n)}return t="".concat(t[0],":").concat(t[1],":").concat(t[2])},generatePace:function(e,t){if(t=Number(t),0===Math.floor(Number(t)/(3600*e))){var a=t/(60*e),n=Math.floor(a),r=Math.floor(60*(a-n));return r<10&&(r="0".concat(r)),"".concat(n,":").concat(r," min/mi")}return"pace is over an hour per mile"},trimDateString:function(e){var t=e.indexOf("T");return t>=0?e.substring(0,t):e},americanDateFormat:function(e){var t=e.indexOf("-"),a=e.lastIndexOf("-");return e.substring(t+1,a)+"-"+e.substring(a+1)+"-"+e.substring(0,t)}}},72:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.07a43cea.chunk.js.map