(this.webpackJsonpalgo_visual=this.webpackJsonpalgo_visual||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(10),o=n.n(a),c=(n(24),n(25),n(18)),l=n(2),s=(n(26),n(0));var d=function(){return Object(s.jsxs)("div",{id:"lobby",children:[Object(s.jsx)("h1",{children:" Yoooooo "}),Object(s.jsx)("a",{href:"./#/path-find",children:" Pathfind "}),Object(s.jsx)("a",{href:"./#/sort",children:" Sort "})]})};n(28);function x(e){let{className:t,option:n,current:i,handleChange:r}=e;return Object(s.jsx)("select",{className:t,value:i,onChange:e=>r(e.target.value),children:n.map((e=>Object(s.jsxs)("option",{value:e,children:[" ",e," "]},e)))})}function u(e,t){const n=Object(i.useRef)();Object(i.useEffect)((()=>{n.current=e}),[e]),Object(i.useEffect)((()=>{if(null!==t){let e=setInterval((function(){n.current()}),t);return()=>clearInterval(e)}}),[t])}function y(e){if("done"===e[1].runState)return e;let t=[...e],n=t[1].dimension.w,i=t[1].dimension.h;if("done_with_end"===t[1].runState)return-1===t[1].backtrack.x?(t[1].backtrack.x=t[1].P[t[1].end.y][t[1].end.x].x,t[1].backtrack.y=t[1].P[t[1].end.y][t[1].end.x].y):t[1].backtrack={x:t[1].P[t[1].backtrack.y][t[1].backtrack.x].x,y:t[1].P[t[1].backtrack.y][t[1].backtrack.x].y},t[1].start.x===t[1].backtrack.x&&t[1].start.y===t[1].backtrack.y?(t[1].runState="done",t):(t[1].H[t[1].backtrack.y][t[1].backtrack.x]=!0,t);if(0===t[1].Q.length)for(let s=0;s<i;s++)for(let e=0;e<n;e++)"start"!==t[0][s][e]||t[1].V[s][e]||(t[1].start={y:s,x:e},t[1].Q.push({y:s,x:e,w:0}),t[1].W[s][e]=0,t[1].P[s][e]={y:s,x:e});if(0===t[1].Q.length)return t[1].runState="done",t;t[1].Q.sort(((e,t)=>e.w>t.w));let r=t[1].Q.shift();for(;t[1].V[r.y][r.x];){if(0===t[1].Q.length)return t[1].runState="done",t;r=t[1].Q.shift()}if(t[1].V[r.y][r.x]=!0,t[1].VCount++,t[1].end.y===r.y&&t[1].end.x===r.x)return t[1].runState="done_with_end",t;let a={x:r.x,y:r.y-1},o={x:r.x,y:r.y+1},c={x:r.x-1,y:r.y},l={x:r.x+1,y:r.y};return a.y>=0&&!t[1].V[a.y][a.x]&&"inf"!==t[0][a.y][a.x]&&(t[1].W[a.y][a.x]=t[1].W[r.y][r.x]+1,t[1].Q.push({y:a.y,x:a.x,w:t[1].W[a.y][a.x]}),t[1].P[a.y][a.x]={y:r.y,x:r.x}),o.y<i&&!t[1].V[o.y][o.x]&&"inf"!==t[0][o.y][o.x]&&(t[1].W[o.y][o.x]=t[1].W[r.y][r.x]+1,t[1].Q.push({y:o.y,x:o.x,w:t[1].W[o.y][o.x]}),t[1].P[o.y][o.x]={y:r.y,x:r.x}),c.x>=0&&!t[1].V[c.y][c.x]&&"inf"!==t[0][c.y][c.x]&&(t[1].W[c.y][c.x]=t[1].W[r.y][r.x]+1,t[1].Q.push({y:c.y,x:c.x,w:t[1].W[c.y][c.x]}),t[1].P[c.y][c.x]={y:r.y,x:r.x}),l.x<n&&!t[1].V[l.y][l.x]&&"inf"!==t[0][l.y][l.x]&&(t[1].W[l.y][l.x]=t[1].W[r.y][r.x]+1,t[1].Q.push({y:l.y,x:l.x,w:t[1].W[l.y][l.x]}),t[1].P[l.y][l.x]={y:r.y,x:r.x}),t[1].Q.sort(((e,t)=>e.w>t.w)),t}function h(e){if("done"===e[1].runState)return e;let t=[...e],n=t[1].dimension.w,i=t[1].dimension.h;if("done_with_end"===t[1].runState)return-1===t[1].backtrack.x?(t[1].backtrack.x=t[1].P[t[1].end.y][t[1].end.x].x,t[1].backtrack.y=t[1].P[t[1].end.y][t[1].end.x].y):t[1].backtrack={x:t[1].P[t[1].backtrack.y][t[1].backtrack.x].x,y:t[1].P[t[1].backtrack.y][t[1].backtrack.x].y},t[1].start.x===t[1].backtrack.x&&t[1].start.y===t[1].backtrack.y?(t[1].runState="done",t):(t[1].H[t[1].backtrack.y][t[1].backtrack.x]=!0,t);if(0===t[1].Q.length)for(let s=0;s<i;s++)for(let e=0;e<n;e++)"start"!==t[0][s][e]||t[1].V[s][e]||(t[1].start={y:s,x:e},t[1].Q.push({y:s,x:e,w:0}),t[1].W[s][e]=0,t[1].P[s][e]={y:s,x:e});if(0===t[1].Q.length)return t[1].runState="done",t;t[1].Q.sort(((e,n)=>2*Math.sqrt(Math.pow(e.x-t[1].end.x,2)+Math.pow(e.y-t[1].end.y,2))+e.w-2*Math.sqrt(Math.pow(n.x-t[1].end.x,2)+Math.pow(n.y-t[1].end.y,2))-n.w)),console.log(t[1].Q);let r=t[1].Q.shift();for(;t[1].V[r.y][r.x];){if(0===t[1].Q.length)return t[1].runState="done",t;r=t[1].Q.shift()}if(t[1].V[r.y][r.x]=!0,t[1].VCount++,t[1].end.y===r.y&&t[1].end.x===r.x)return t[1].runState="done_with_end",t;let a={x:r.x,y:r.y-1},o={x:r.x,y:r.y+1},c={x:r.x-1,y:r.y},l={x:r.x+1,y:r.y};return a.y>=0&&!t[1].V[a.y][a.x]&&"inf"!==t[0][a.y][a.x]&&t[1].W[r.y][r.x]+1<t[1].W[a.y][a.x]&&(t[1].W[a.y][a.x]=t[1].W[r.y][r.x]+1,t[1].Q.push({y:a.y,x:a.x,w:t[1].W[a.y][a.x]}),t[1].P[a.y][a.x]={y:r.y,x:r.x}),o.y<i&&!t[1].V[o.y][o.x]&&"inf"!==t[0][o.y][o.x]&&t[1].W[r.y][r.x]+1<t[1].W[o.y][o.x]&&(t[1].W[o.y][o.x]=t[1].W[r.y][r.x]+1,t[1].Q.push({y:o.y,x:o.x,w:t[1].W[o.y][o.x]}),t[1].P[o.y][o.x]={y:r.y,x:r.x}),c.x>=0&&!t[1].V[c.y][c.x]&&"inf"!==t[0][c.y][c.x]&&t[1].W[r.y][r.x]+1<t[1].W[c.y][c.x]&&(t[1].W[c.y][c.x]=t[1].W[r.y][r.x]+1,t[1].Q.push({y:c.y,x:c.x,w:t[1].W[c.y][c.x]}),t[1].P[c.y][c.x]={y:r.y,x:r.x}),l.x<n&&!t[1].V[l.y][l.x]&&"inf"!==t[0][l.y][l.x]&&t[1].W[r.y][r.x]+1<t[1].W[l.y][l.x]&&(t[1].W[l.y][l.x]=t[1].W[r.y][r.x]+1,t[1].Q.push({y:l.y,x:l.x,w:t[1].W[l.y][l.x]}),t[1].P[l.y][l.x]={y:r.y,x:r.x}),t}var j=null;function p(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function f(e,t,n){let i=Array(e);for(let r=0;r<e;r++){i[r]=Array(t);for(let e=0;e<t;e++)i[r][e]=n}return i}function b(e,t,n,i,r){if("vertical"===r){if(i-n<2)return;let r=2*Math.floor(p(n+1,i-1)/2)+1;for(let n=e;n<=t;n++)j[n][r]="inf";let a=2*Math.floor(p(e,t-1)/2);j[a][r]=1,b(e,t,n,r-1,"horizontal"),b(e,t,r+1,i,"horizontal")}else{if(t-e<2)return;let r=2*Math.floor(p(e+1,t-1)/2)+1;for(let e=n;e<=i;e++)j[r][e]="inf";let a=2*Math.floor(p(n,i-1)/2);j[r][a]=1,b(e,r-1,n,i,"vertical"),b(r+1,t,n,i,"vertical")}}function O(e,t){if(j=null,j=f(e,t,1),e%2===0){e--;for(let n=0;n<t;n++)j[e][n]="inf"}if(t%2===0){t--;for(let n=0;n<e;n++)j[n][t]="inf"}return b(0,e-1,0,t-1,"vertical"),j}function _(e,t,n){let i=[],r={x:e.x,y:e.y-1},a={x:e.x,y:e.y+1},o={x:e.x-1,y:e.y},c={x:e.x+1,y:e.y};return r.y>=0&&"inf"===j[2*r.y][2*r.x]&&i.push(r),a.y<=t&&"inf"===j[2*a.y][2*a.x]&&i.push(a),o.x>=0&&"inf"===j[2*o.y][2*o.x]&&i.push(o),c.x<=n&&"inf"===j[2*c.y][2*c.x]&&i.push(c),0===i.length?e:i[Math.floor(Math.random()*i.length)]}function g(e,t){j=null,j=f(e,t,"inf");let n=[],i=1,r=Math.floor((e-1)/2),a=Math.floor((t-1)/2),o={x:p(0,a),y:p(0,r)};for(j[2*o.y][2*o.x]=1,n.push(o);i<(r+1)*(a+1);){let e=_(o,r,a);e===o?o=n.pop():(j[2*e.y][2*e.x]=1,j[e.y+o.y][e.x+o.x]=1,n.push(e),o=e,i++)}return j}n(29);function v(e,t,n){let i=Array(e);for(let r=0;r<e;r++){i[r]=Array(t);for(let e=0;e<t;e++)i[r][e]=n}return i}function k(e,t,n,i){if(-1===t)return e;let r=[...e],a=r[1].start,o=r[1].end;return"start"===t?(r[1].start={y:n,x:i},-1!==a.x&&(r[0][a.y][a.x]=1)):"end"===t?(r[1].end={y:n,x:i},-1!==o.x&&(r[0][o.y][o.x]=1)):(a.x===i&&a.y===n&&(r[1].start={y:-1,x:-1}),o.x===i&&o.y===n&&(r[1].end={y:-1,x:-1})),r[0][n][i]=t,r}function m(e,t){return{start:arguments.length>2&&void 0!==arguments[2]?arguments[2]:{y:-1,x:-1},end:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{y:-1,x:-1},backtrack:{y:-1,x:-1},dimension:{h:e,w:t},W:v(e,t,1e6),V:v(e,t,!1),VCount:0,Q:[],P:v(e,t,null),H:v(e,t,!1),runState:"run"}}function C(e,t){return e.selected.y===t.y&&e.selected.x===t.x?{selected:{y:-1,x:-1}}:{selected:{y:t.y,x:t.x}}}function w(e){return Object(s.jsx)("div",{draggable:"false",className:"maze_node mstate"+e.state+(e.visited?"visited":"")+(e.highlight?"highlight":"")+(e.selected?" selectedTile":""),onMouseDown:e.onDown,onMouseEnter:e.onDrag})}function S(e){return Object(s.jsxs)("div",{id:"tile_info",children:[Object(s.jsxs)("div",{children:[" Position: ",e.pos.y+1," x ",e.pos.x+1," "]}),Object(s.jsxs)("div",{children:[" Cost to: ",e.c]}),Object(s.jsxs)("div",{children:[" Weight: ",1e6===e.w?"Infinite":e.w," "]}),null===e.d?Object(s.jsx)("div",{}):Object(s.jsxs)("div",{children:[" Distance to endpoint: ",e.d.toFixed(2)," "]}),Object(s.jsxs)("div",{children:[" Visited: ",!0===e.v?"True":"False"," "]}),null===e.prev?Object(s.jsx)("div",{children:" Previous Tile: None "}):Object(s.jsxs)("div",{children:[" Previous Tile: ",e.prev.y+1," x ",e.prev.x+1," "]})]})}function W(e){const[t,n]=Object(i.useState)(10),[r,a]=Object(i.useState)(20),[o,c]=Object(i.useState)([v(t,r,1),m(t,r)]),[l,d]=Object(i.useState)({selected:{y:-1,x:-1}}),[j,p]=Object(i.useState)(1),[f,b]=Object(i.useState)(!1),[_,W]=Object(i.useState)("BFS"),[P,N]=Object(i.useState)(!1),[Q,I]=Object(i.useState)(1);return u((()=>{let e="A*"===_?h(o):y(o);c(e),"done"===e[1].runState&&N(!1)}),P?Q:null),Object(i.useEffect)((()=>{d(C(l,{y:-1,x:-1})),c([v(t,r,1),m(t,r)])}),[t]),Object(i.useEffect)((()=>{d(C(l,{y:-1,x:-1})),c([v(t,r,1),m(t,r)])}),[r]),Object(s.jsxs)("div",{id:"pf_workspace",onMouseDown:()=>b(!0),onMouseUp:()=>b(!1),children:[Object(s.jsxs)("div",{id:"pf_map_info",children:[Object(s.jsx)("label",{htmlFor:"pf_option_h",children:"Height"}),Object(s.jsx)("input",{type:"number",id:"pf_option_h",name:"pf_option_h",onChange:e=>n(isNaN(parseInt(e.target.value))?1:parseInt(e.target.value)>1?parseInt(e.target.value)<30?parseInt(e.target.value):29:1)}),Object(s.jsx)("label",{htmlFor:"pf_option_w",children:"Width"}),Object(s.jsx)("input",{type:"number",id:"pf_option_w",name:"pf_option_w",onChange:e=>a(isNaN(parseInt(e.target.value))?1:parseInt(e.target.value)>1?parseInt(e.target.value)<60?parseInt(e.target.value):59:1)}),Object(s.jsx)(x,{className:"pf_option_search",option:["BFS","A*","Placeholder 2 ","Placeholder 3  "],current:_,handleChange:W}),Object(s.jsx)(x,{className:"pf_option_create",option:["","Recursive Division","DFS (Random Run)"],current:"",handleChange:e=>{"Recursive Division"===e&&c([O(t,r),m(t,r)]),"DFS (Random Run)"===e&&c([g(t,r),m(t,r)])}})]}),Object(s.jsxs)("div",{id:"pf_item",children:[Object(s.jsxs)("button",{id:"map_clear",onClick:()=>c([v(t,r,1),m(t,r)]),children:["Clear",Object(s.jsx)("span",{className:"tooltip",children:" Clear all tiles "})]}),Object(s.jsxs)("button",{id:"map_start_point",onClick:()=>p("start"===j?-1:"start"),style:{backgroundColor:"start"===j?"#5e5e5e":"#101010",color:"start"===j?"#101010":"#fafafa"},children:["Start",Object(s.jsx)("span",{className:"tooltip",children:" Next Tile click will determine the start point "})]}),Object(s.jsxs)("button",{id:"map_end_point",onClick:()=>p("end"===j?-1:"end"),style:{backgroundColor:"end"===j?"#5e5e5e":"#101010",color:"end"===j?"#101010":"#fafafa"},children:["End",Object(s.jsx)("span",{className:"tooltip",children:" Next Tile click will determine the end point "})]}),Object(s.jsxs)("button",{id:"map_draw",onClick:()=>p("inf"===j?-1:"inf"),style:{backgroundColor:"inf"===j?"#5e5e5e":"#101010",color:"inf"===j?"#101010":"#fafafa"},children:["Draw",Object(s.jsx)("span",{className:"tooltip",children:" Set tile to wall with weight infinite "})]}),Object(s.jsxs)("button",{id:"map_delete",onClick:()=>p(1===j?-1:1),style:{backgroundColor:1===j?"#5e5e5e":"#101010",color:1===j?"#101010":"#fafafa"},children:["Delete",Object(s.jsx)("span",{className:"tooltip",children:" Set tile to nothing with weight 0 "})]}),Object(s.jsxs)("button",{id:"map_select",onClick:()=>j===p("select"),style:{backgroundColor:"select"===j?"#5e5e5e":"#101010",color:"select"===j?"#101010":"#fafafa"},children:["Select",Object(s.jsx)("span",{className:"tooltip",children:" Select a tile to view its info "})]})]}),Object(s.jsxs)("div",{id:"pf_screen",children:[Object(s.jsx)("div",{id:"pf_map",style:{gridTemplateColumns:"repeat("+r+", 1fr)",gridTemplateRows:"repeat("+t+", 1fr)"},children:o[0].map(((e,t)=>e.map(((e,n)=>Object(s.jsx)(w,{state:e,visited:o[1].V[t][n],selected:t===l.selected.y&&n===l.selected.x,highlight:o[1].H[t][n],weight:o[1].W[t][n],onDown:()=>"select"===j?d(C(l,{y:t,x:n})):c(k(o,j,t,n)),onDrag:()=>"select"===j&&f?d(C(l,{y:t,x:n})):c(k(o,f?j:-1,t,n))},t*r+n)))))}),Object(s.jsxs)("div",{id:"pf_info",children:[Object(s.jsxs)("div",{id:"pf_maze_player",children:[Object(s.jsx)("button",{id:"pf_player_run",style:{backgroundColor:P?"#5e5e5e":"#101010"},onClick:()=>N(!P),children:" Play"}),Object(s.jsx)("button",{id:"pf_player_step",style:{backgroundColor:P?"#5e5e5e":"#101010"},onClick:()=>c("A*"===_?h(o):y(o)),children:" Step"}),Object(s.jsx)("button",{id:"pf_player_reset",style:{backgroundColor:"#101010"},onClick:()=>{N(!1),c([o[0],m(t,r,o[1].start,o[1].end)])},children:"Reset"}),Object(s.jsx)("label",{htmlFor:"pf_player_delay",children:"Delay"}),Object(s.jsx)("input",{type:"number",id:"pf_player_delay",name:"pf_player_delay",onChange:e=>I(isNaN(parseInt(e.target.value))?1:parseInt(e.target.value)>1?parseInt(e.target.value):1)})]}),Object(s.jsxs)("div",{id:"pf_maze_log",children:[Object(s.jsxs)("div",{id:"pf_maze_visit_count",children:[" Tile visited: ",o[1].VCount," "]}),Object(s.jsx)("div",{id:"pf_tile_info",children:-1===l.selected.x?Object(s.jsx)("div",{id:"tile_info"}):Object(s.jsx)(S,{pos:l.selected,c:o[0][l.selected.y][l.selected.x],w:o[1].W[l.selected.y][l.selected.x],d:"A*"!==_?null:-1!==o[1].end.x?Math.sqrt(Math.pow(l.selected.x-o[1].end.x,2)+Math.pow(l.selected.y-o[1].end.y,2)):null,v:o[1].V[l.selected.y][l.selected.x],prev:o[1].P[l.selected.y][l.selected.x]})})]}),Object(s.jsx)("ul",{id:"pf_maze_queue",children:0===o[1].Q.length?Object(s.jsx)("div",{id:"empty_queue"}):o[1].Q.map(((e,t)=>Object(s.jsxs)("li",{id:"path_queue",onClick:()=>d(C(l,{y:e.y,x:e.x})),children:[t,". Position: ",e.y," x ",e.x,", Weight ","A*"!==_?"":"+ Distance * 2",": ",(e.w+2*("A*"!==_?0:Math.sqrt(Math.pow(e.x-o[1].end.x,2)+Math.pow(e.y-o[1].end.y,2)))).toFixed(2)]},t)))})]})]})]})}const P=r.a.memo(W);var N=n(17),Q=n.n(N);function I(e,t,n){if(-1===t.start||-1===t.end)return console.log("missing start/end"),t;if("done"===t.runState)return t;let i={...t};if("done_with_end"===i.runState)return i.H[i.end]=!0,-1===i.backtrack?i.backtrack=i.P[i.end]:i.backtrack=i.P[i.backtrack],i.start===i.backtrack?(i.H[i.backtrack]=!0,i.runState="done",i):(i.H[i.backtrack]=!0,i.indivInfo[i.backtrack].push("highlight"),i);if(0===i.Q.length){if(i.V[i.start])return i.runState="done",i;i.Q.push({id:i.start,w:0}),i.W[i.start]=0,i.P[i.start]=i.start}let r=i.Q.shift();for(;i.V[r.id];){if(0===t.Q.length)return i.runState="done",i;r=i.Q.shift()}if(i.P[r.id]=r.p,i.indivInfo[r.id].push("visited"),i.V[r.id]=!0,i.VCount++,i.end===r.id)return i.runState="done_with_end",i;for(let a=0,o=e[r.id].length;a<o;a++)if(!i.V[a]&&0!==e[r.id][a]&&i.W[a]>i.W[r.id]+e[r.id][a]){i.W[a]=i.W[r.id]+e[r.id][a];let t=0;for(;i.Q.length>t&&i.W[a]>i.Q[t].w;)t++;i.Q.splice(t,0,{id:a,w:i.W[a],p:r.id})}return i}n(36);function M(e){const t=r.a.useRef(null);let n="#000000";return e.info.indexOf("visited")+1&&(n="rgba(90, 70, 70)"),e.info.indexOf("highlight")+1&&(n="rgba(0, 195, 255)"),e.info.indexOf("start")+1&&(n="rgb(90, 155, 25)"),e.info.indexOf("end")+1&&(n=e.info.indexOf("visited")+1?"rgb(255, 0, 20)":"rgb(130, 10, 10)"),e.info.indexOf("start")+1&&e.info.indexOf("end")+1&&(n="rgb(208, 210, 29)"),Object(s.jsx)(Q.a,{nodeRef:t,axis:"both",bounds:"parent",handle:null,position:{y:e.y,x:e.x},onDrag:e.updateLoc,grid:null,children:Object(s.jsx)("div",{id:"pf_div_node_holder",ref:t,onMouseDownCapture:e.onInteract,onTouchStartCapture:e.onInteract,children:Object(s.jsx)("div",{id:"pf_node",style:{backgroundColor:n},children:Object(s.jsx)("p",{id:"pf_node_text",dominantBaseline:"middle",x:"50%",y:"50%",fill:"#fafafa",children:e.indexValue})})})})}function V(e,t,n,i){let r=[...e];return-1===n?(r.splice(t,1),r):t>=e.length?(r.push({y:n,x:i}),r):(r[t].y=n,r[t].x=i,r)}function D(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,i=new Array(e).fill([]);return-1!==t&&(i=i.map((e=>e.filter((e=>"start"!==e)))),i[t].push("start")),-1!==n&&(i=i.map((e=>e.filter((e=>"end"!==e)))),i[n].push("end")),{indivInfo:i,start:t,end:n,backtrack:-1,W:new Array(e).fill(1e7),V:new Array(e).fill(!1),VCount:0,Q:[],P:new Array(e).fill(null),H:new Array(e).fill(!1),runState:"run"}}function A(e){const[t,n]=Object(i.useState)(!1),[r,a]=Object(i.useState)(17),[o,c]=Object(i.useState)([{x:0,y:0},{x:128,y:163},{x:101,y:315},{x:6,y:390},{y:0,x:247.171875},{y:147.4375,x:211.171875},{y:275.4375,x:278.171875},{y:353.4375,x:229.171875},{y:409.4375,x:390.171875},{y:65.4375,x:371.171875},{y:35.4375,x:653.171875},{y:83.4375,x:302.171875},{y:224.4375,x:422.171875},{y:231.4375,x:355.171875},{y:332,x:675},{y:106.640625,x:543.640625},{y:126.4375,x:772.171875}]),[l,d]=Object(i.useState)([[0,7,7,4,0,2,0,0,0,0,0,0,0,0,0,0,0],[7,0,1,3,4,4,1,0,0,0,0,0,0,0,0,0,0],[7,1,0,1,0,2,5,2,0,0,0,0,0,0,0,0,0],[4,3,1,0,0,0,0,3,7,0,0,0,0,0,0,0,0],[0,4,0,0,0,0,0,0,0,4,7,1,0,0,0,0,0],[2,4,2,0,0,0,5,0,0,0,0,3,0,0,0,0,0],[0,1,5,0,0,5,0,2,3,0,0,0,0,1,0,0,0],[0,0,2,3,0,0,2,0,4,0,0,0,0,0,0,0,0],[0,0,0,7,0,0,3,4,0,0,6,0,4,4,7,0,0],[0,0,0,0,4,0,0,0,0,0,5,0,1,2,0,5,0],[0,0,0,0,7,0,0,0,6,5,0,0,0,0,3,0,4],[0,0,0,0,1,3,0,0,0,0,0,0,0,5,0,0,0],[0,0,0,0,0,0,0,0,4,1,0,0,0,0,1,4,0],[0,0,0,0,0,0,1,0,4,2,0,5,0,0,0,0,0],[0,0,0,0,0,0,0,0,7,0,3,0,1,0,0,2,7],[0,0,0,0,0,0,0,0,0,5,0,0,4,0,2,0,4],[0,0,0,0,0,0,0,0,0,0,4,0,0,0,7,4,0]]),[y,h]=Object(i.useState)(D(17)),[j,p]=Object(i.useState)("Dijkstra"),[f,b]=Object(i.useState)(0),[O,_]=Object(i.useState)(-1),[g,v]=Object(i.useState)(!1),[k,m]=Object(i.useState)(200),[C,w]=Object(i.useState)("");u((()=>{let e=I(l,y);h(e),"done"===e.runState&&v(!1)}),g?k:null);return Object(s.jsxs)("div",{id:"pf_node_workspace",children:[Object(s.jsx)("div",{id:"pf_node_searchtype",children:Object(s.jsx)(x,{className:"pf_option_search",option:["Dijkstra","Placeholder 2","Placeholder 3"],current:j,handleChange:p})}),Object(s.jsxs)("div",{id:"pf_node_item",children:[Object(s.jsxs)("button",{id:"node_add",onClick:()=>b(1===f?0:1),style:{backgroundColor:1===f?"#5e5e5e":"#101010",color:1===f?"#101010":"#fafafa"},children:["Draw",Object(s.jsx)("span",{className:"tooltip",children:" Add a node "})]}),Object(s.jsxs)("button",{id:"node_delete",onClick:()=>b(-1===f?0:-1),style:{backgroundColor:-1===f?"#5e5e5e":"#101010",color:-1===f?"#101010":"#fafafa"},children:["Delete",Object(s.jsx)("span",{className:"tooltip",children:" Delete a node "})]}),Object(s.jsxs)("button",{id:"node_clear",onClick:()=>{a(0),c([]),d([]),h(D(0))},style:{},children:["Clear",Object(s.jsx)("span",{className:"tooltip",children:" Clear the board "})]}),Object(s.jsxs)("button",{id:"node_connect",onClick:()=>{"connect"===f?b(0):(b("connect"),_(-1))},style:{backgroundColor:"connect"===f?-1!==O?"#ffff7f":"#5e5e5e":"#101010",color:"connect"===f?"#101010":"#fafafa"},children:["Connect",Object(s.jsx)("span",{className:"tooltip",children:" Connect 2 node "})]}),Object(s.jsxs)("button",{id:"node_start_point",onClick:()=>b("start"===f?0:"start"),style:{backgroundColor:"start"===f?"#5e5e5e":"#101010",color:"start"===f?"#101010":"#fafafa"},children:["Start",Object(s.jsx)("span",{className:"tooltip",children:" Next Node click will determine the start point "})]}),Object(s.jsxs)("button",{id:"node_end_point",onClick:()=>b("end"===f?0:"end"),style:{backgroundColor:"end"===f?"#5e5e5e":"#101010",color:"end"===f?"#101010":"#fafafa"},children:["End",Object(s.jsx)("span",{className:"tooltip",children:" Next Node click will determine the end point "})]})]}),Object(s.jsxs)("div",{id:"pf_node_screen",onMouseDown:()=>n(!0),onMouseUp:()=>n(!1),children:[Object(s.jsxs)("div",{id:"pf_node_map",style:{position:"relative"},onClick:e=>{let t=e.target.getBoundingClientRect();1===f&&(c(V(o,r,e.pageY-t.top-22,e.pageX-t.left-22)),d(function(e,t){let n=[...e];n.push(new Array(e.length).fill(0));for(let i=0;i<n.length;i++)n[i].push(0);return n}(l)),h(D(r+1)),a(r+1))},children:[Object(s.jsx)("svg",{id:"pf_node_pathDraw",style:{height:"100%",width:"100%",position:"absolute",top:"0px",left:"0px"},children:l.map(((e,t)=>e.map(((e,n)=>null!=t&&null!=n&&n>t&&e>0?Object(s.jsx)("line",{x1:o[t].x+22,y1:o[t].y+22,x2:o[n].x+22,y2:o[n].y+22,style:{stroke:y.P[n]===t||y.P[t]===n?y.H[n]&&y.H[t]?"rgb(208, 210, 29)":"rgb(40, 153, 225, 0.7)":"rgba(239,239,239, 0.5)",strokeWidth:y.P[n]===t||y.P[t]===n?"1.8":"1"}},t*r+n):null))))}),l.map(((e,t)=>e.map(((e,n)=>{if(null!=t&&null!=n&&n>t&&e>0){let e=(o[t].x+o[n].x+44)/2-12+"px",i=(o[t].y+o[n].y+44)/2-10+"px";return Object(s.jsx)("div",{id:"connection_weight",style:{position:"absolute",top:i,left:e},children:Object(s.jsx)("input",{value:l[t][n],type:"number",onChange:e=>{d(function(e,t,n,i){let r=[...e];return""===i&&(i=0),i=parseInt(i),r[t][n]=i,r[n][t]=i,r}(l,t,n,e.target.value))},style:{color:y.P[n]===t||y.P[t]===n?y.H[n]&&y.H[t]?"rgb(208, 210, 29)":"rgb(40, 153, 225, 0.7)":"rgba(239,239,239, 0.5)"}})},t*r+n)}return null})))),Object(s.jsx)("div",{id:"draggable_holder",style:{height:"100%",width:"100%",zIndex:"1",backgroundColor:"#00000000"},children:o.map(((e,t)=>Object(s.jsx)(M,{indexValue:t,y:e.y,x:e.x,info:y.indivInfo[t],onInteract:()=>{-1===f&&(c(V(o,t,-1,-1)),d(function(e,t){let n=[...e];n.splice(t,1);for(let i=0;i<n.length;i++)n[i].splice(t,1);return n}(l,t)),h(D(r-1)),a(r-1)),"connect"===f&&(-1===O?_(t):d(function(e,t,n){let i=[...e];return i[t][n]=0===i[t][n]?1:0,i[n][t]=0===i[n][t]?1:0,i}(l,O,t))),"start"!==f&&"end"!==f||((e,t)=>{let n=y;"start"!==t&&"end"!==t||(n.indivInfo=n.indivInfo.map((e=>e.filter((e=>e!==t))))),n.indivInfo[e].push(t),n[t]=e,h(n)})(t,f)},updateLoc:(e,n)=>c(V(o,t,n.y,n.x))},t)))})]}),Object(s.jsxs)("div",{id:"pf_node_info",children:[Object(s.jsxs)("div",{id:"pf_node_player",children:[Object(s.jsx)("button",{id:"pf_node_run",style:{backgroundColor:g?"#5e5e5e":"#101010"},onClick:()=>v(!g),children:" Play"}),Object(s.jsx)("button",{id:"pf_node_step",style:{backgroundColor:g?"#5e5e5e":"#101010"},onClick:()=>h(I(l,y)),children:" Step"}),Object(s.jsx)("button",{id:"pf_node_reset",style:{backgroundColor:"#101010"},onClick:()=>{v(!1),h(D(r,y.start,y.end))},children:"Reset"}),Object(s.jsx)("label",{htmlFor:"pf_node_delay",children:"Delay"}),Object(s.jsx)("input",{defaultValue:k,type:"number",id:"pf_node_delay",name:"pf_node_delay",onChange:e=>m(isNaN(parseInt(e.target.value))?1:parseInt(e.target.value)>1?parseInt(e.target.value):1)})]}),Object(s.jsxs)("div",{id:"pf_node_stateboard",children:[Object(s.jsxs)("div",{id:"pf_node_state_copypaste",children:[Object(s.jsx)("button",{id:"pf_node_copy_state",onClick:()=>function(e,t,n){let i="",r={nodeAmount:e,nodeLocation:t,nodeConnection:n};i+=JSON.stringify(r),navigator.clipboard.writeText(i),alert("State Copied!")}(r,o,l),children:" Copy State to Clipboard "}),Object(s.jsx)("button",{id:"pf_node_paste_state",onClick:()=>{let e=JSON.parse(C);""!==C&&(a(e.nodeAmount),c(e.nodeLocation),d(e.nodeConnection),h(D(e.nodeAmount)),w(""))},children:"Paste State to Board"}),Object(s.jsx)("input",{type:"text",id:"pf_node_paste_text",onChange:e=>w(e.target.value)})]}),Object(s.jsx)("div",{id:"node_location_infoboard",children:o.map(((e,t)=>Object(s.jsxs)("div",{id:"node_location_info",children:[t,". x:",e.x.toFixed(2)," - y:",e.y.toFixed(2)]},t)))}),Object(s.jsx)("div",{id:"node_connection_infoboard",children:"Filter"})]}),Object(s.jsx)("ul",{id:"pf_node_queue",children:0===y.Q.length?Object(s.jsx)("div",{id:"empty_queue"}):y.Q.map(((e,t)=>Object(s.jsxs)("li",{id:"path_queue",children:[t,". Path: ",e.p," - ",e.id,", Weight: ",e.w]},t)))})]})]})]})}const F=r.a.memo(A);n(37);function R(e){return"Maze"===e.type?Object(s.jsx)(P,{}):"Nodes"===e.type?Object(s.jsx)(F,{}):Object(s.jsxs)("div",{id:"pf_screen",children:[Object(s.jsx)("div",{id:"pf_map",children:"uwu"}),Object(s.jsx)("div",{id:"pf_info",children:"uwu"})]})}var H=function(){const[e,t]=Object(i.useState)("Nodes");return Object(s.jsxs)("div",{id:"pathfind_page",children:[Object(s.jsxs)("h1",{children:[" Yoooooo this is the path find page      ",Object(s.jsx)("a",{href:"./#/",children:" Go back "})," "]}),Object(s.jsx)("div",{id:"pathfind_option",children:Object(s.jsx)(x,{className:"pf_option_map",option:["Maze","Nodes"],current:e,handleChange:t})}),Object(s.jsx)(R,{type:e})]})};n(38);var T=function(){const[e,t]=Object(i.useState)("Bars"),[n,r]=Object(i.useState)("Bars"),[a,o]=Object(i.useState)(!1),[c,l]=Object(i.useState)(200);return Object(s.jsxs)("div",{id:"sort_page",children:[Object(s.jsxs)("h1",{children:[" Yoooooo this is the sort page    ",Object(s.jsx)("a",{href:"./#/",children:" Go back "})," "]}),Object(s.jsxs)("div",{id:"sort_option",children:[Object(s.jsx)(x,{className:"visual_type",option:["Bars","Dots"],current:e,handleChange:t}),Object(s.jsx)(x,{className:"sort_type",option:["Bubble","Merge","Quick","Gravity"],current:n,handleChange:r})]}),Object(s.jsxs)("div",{id:"sort_screen",children:[Object(s.jsx)("div",{id:"sort_visual"}),Object(s.jsx)("div",{id:"sort_data",children:Object(s.jsxs)("div",{id:"sort_player",children:[Object(s.jsx)("button",{id:"sort_run",style:{backgroundColor:a?"#5e5e5e":"#101010"},onClick:()=>o(!a),children:" Play"}),Object(s.jsx)("button",{id:"sort_step",style:{backgroundColor:a?"#5e5e5e":"#101010"},onClick:()=>{},children:" Step"}),Object(s.jsx)("button",{id:"sort_reset",style:{backgroundColor:"#101010"},onClick:()=>{o(!1)},children:"Reset"}),Object(s.jsx)("label",{htmlFor:"sort_delay",children:"Delay"}),Object(s.jsx)("input",{defaultValue:c,type:"number",id:"sort_delay",name:"sort_delay",onChange:e=>l(isNaN(parseInt(e.target.value))?1:parseInt(e.target.value)>1?parseInt(e.target.value):1)})]})})]})]})};var B=function(){return Object(s.jsx)(c.a,{children:Object(s.jsxs)("div",{id:"app",children:[Object(s.jsx)(l.a,{exact:!0,path:"/path-find",component:H}),Object(s.jsx)(l.a,{exact:!0,path:"/sort",component:T}),Object(s.jsx)(l.a,{exact:!0,path:"/",component:d})]})})};var q=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((t=>{let{getCLS:n,getFID:i,getFCP:r,getLCP:a,getTTFB:o}=t;n(e),i(e),r(e),a(e),o(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root")),q()}},[[45,1,2]]]);
//# sourceMappingURL=main.08021e78.chunk.js.map