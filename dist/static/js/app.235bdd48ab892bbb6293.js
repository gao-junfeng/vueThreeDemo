webpackJsonp([1],{"/WLM":function(e,t){},"3ch4":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Ml+6"),s=n("BMSc"),r={name:"ThreeTest",inject:["screenType"],props:{width:{type:Number,default:512},height:{type:Number,default:320}},data:function(){return{camera:null,scene:null,renderer:null,mesh:null,controls:null,meshCar:null,planeMesh:null,step:0}},computed:{foo:function(){if(this.screenType.isFull){var e=document.getElementById("container");e.requestFullscreen(),console.log("全屏操作")}return this.screenType.isFull}},methods:{init:function(){this.scene=new i.x;var e=new i.e(50,50,100,25),t=new i.c(100,100,100),n=new i.o({color:255,opacity:.7,specular:4491502,shininess:12});this.mesh=new i.m(t,n),this.meshCar=new i.m(e,n),this.meshCar.position.set(250,0,0),this.scene.add(this.mesh),this.scene.add(this.meshCar);var r=new i.s(800,800),o=new i.n({color:13421772});this.planeMesh=new i.m(r,o),this.planeMesh.rotation.x=-.5*Math.PI,this.planeMesh.position.x=150,this.planeMesh.position.y=0,this.planeMesh.position.z=0,this.scene.add(this.planeMesh);var a=new i.t(16777215);a.position.set(400,200,300),this.scene.add(a);var h=new i.a(4473924);this.scene.add(h);var l=this.width,c=this.height,u=l/c,d=500;this.camera=new i.p(-d*u,d*u,d,-d,1,1e3),this.camera.position.set(200,300,200),this.camera.lookAt(this.scene.position),this.renderer=new i.G,this.renderer.setSize(l,c),this.renderer.setClearColor(12178431,1);var p=document.getElementById("container");console.log(p),p.appendChild(this.renderer.domElement),this.controls=new s.a(this.camera,this.renderer.domElement),this.controls.minPolarAngle=.005*Math.PI,this.controls.maxPolarAngle=.45*Math.PI;var m=new i.b(250);this.scene.add(m)},render:function(){this.renderer.render(this.scene,this.camera),this.step+=.04,this.mesh.position.y=20+10*Math.cos(this.step),this.mesh.rotateY(-.01),requestAnimationFrame(this.render)}},mounted:function(){this.init(),this.render()}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{attrs:{id:"container"}}),this._v(" "),t("el-button",{attrs:{type:"primary",disabled:this.screenType.isFull}},[this._v("全屏没做好等下一期吧"+this._s(this.foo))])],1)},staticRenderFns:[]};var a=n("VU/8")(r,o,!1,function(e){n("WlJ8")},"data-v-e434c69a",null);t.default=a.exports},"5Hhd":function(e,t){},"6zjc":function(e,t){},"Ct/w":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={inject:["screenType"],methods:{changeCollapse:function(){this.isCollapse=!this.isCollapse},screenFull:function(){console.log("点了就全屏"),this.screenType.isFull=!this.screenType.isFull,console.log(this.screenType.isFull)}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("el-row",[t("el-col",{attrs:{span:2}},[t("img",{staticStyle:{width:"80%"},attrs:{src:n("FDWv"),alt:""}})]),this._v(" "),t("el-col",{attrs:{span:20}},[this._v("\n      three模型看板\n    ")]),this._v(" "),t("el-col",{attrs:{span:2}},[t("i",{staticClass:"el-icon-full-screen"}),this._v(" "),t("span",{staticClass:"screenFull",on:{click:this.screenFull}},[this._v("全屏")])])],1)],1)},staticRenderFns:[]};var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-aside",[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1",router:""},on:{open:e.handleOpen,close:e.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),e._v(" "),n("span",[e._v("threejs")])]),e._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{route:{name:"three"},index:"/three"}},[e._v("草地模型1")]),e._v(" "),n("el-menu-item",{attrs:{route:{name:"mesh"},index:"/mesh"}},[e._v("转圈模型1")]),e._v(" "),n("el-menu-item",{attrs:{route:{name:"threeButton"},index:"/threeButton"}},[e._v("弹框模型")])],1)],2),e._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("A*算法")])]),e._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2"}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("简介")])]),e._v(" "),n("el-menu-item",{attrs:{route:{name:"Astart"},index:"/Astart"}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("地图绘制操作")])]),e._v(" "),n("el-menu-item",{attrs:{route:{name:"AstartPro"},index:"/AstartPro"}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("算法演示")])])],1)],2)],1)],1),e._v(" "),n("el-main",[n("router-view")],1)],1)},staticRenderFns:[]},o={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"navbar"})},staticRenderFns:[]},a={data:function(){return{screenType:{isFull:!0}}},components:{Header:n("VU/8")(i,s,!1,function(e){n("cflp")},"data-v-cb154dc6",null).exports,PageMain:n("VU/8")({methods:{handleOpen:function(){},handleClose:function(){}}},r,!1,null,null,null).exports,SideBar:n("VU/8")({},o,!1,null,null,null).exports},provide:function(){return{screenType:this.screenType}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-header",[t("Header")],1),this._v(" "),t("el-main",[t("PageMain")],1)],1)},staticRenderFns:[]};var l=n("VU/8")(a,h,!1,function(e){n("/WLM")},"data-v-7e5138fa",null);t.default=l.exports},FDWv:function(e,t,n){e.exports=n.p+"static/img/dog.f23840d.jpg"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s=n("zL8q"),r=n.n(s),o=(n("tvR6"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var a=n("VU/8")({name:"App"},o,!1,function(e){n("6zjc")},null,null).exports,h=n("/ocq");i.default.use(h.a);var l=new h.a({routes:[{path:"/",redirect:"/layout"},{path:"/layout",name:"layout",component:n("Ct/w").default,children:[{path:"/",redirect:"/three"},{path:"/threeButton",name:"threeButton",component:n("q8bm").default},{path:"/mesh",name:"mesh",component:n("3ch4").default},{path:"/three",name:"three",component:n("gORT").default}]},{path:"/AstartPro",name:"AstartPro",component:n("t/HD").default},{path:"/Astart",name:"Astart",component:n("aXnd").default},{path:"/*",name:"",component:n("jEQS").default}]});i.default.use(r.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:l,components:{App:a},template:"<App/>",render:function(e){return e(a)}})},OEcd:function(e,t){},OT0p:function(e,t,n){"use strict";(function(e){var t=n("pFYg"),i=n.n(t);!function(t){if("object"===i()(e)&&"object"===i()(e.exports))e.exports=t();else if("function"==typeof define&&n("nErl"))define([],t);else{var s=t();window.astar=s.astar,window.Graph=s.Graph}}(function(){function e(e){for(var t=e,n=[];t.parent;)n.unshift(t),t=t.parent;return n}var t={search:function(n,i,r,o){n.cleanDirty();var a=(o=o||{}).heuristic||t.heuristics.manhattan,h=o.closest||!1,l=new s(function(e){return e.f}),c=i;for(i.h=a(i,r),n.markDirty(i),l.push(i);l.size()>0;){var u=l.pop();if(u===r)return e(u);u.closed=!0;for(var d=n.neighbors(u),p=0,m=d.length;p<m;++p){var v=d[p];if(!v.closed&&!v.isWall()){var f=u.g+v.getCost(u),w=v.visited;(!w||f<v.g)&&(v.visited=!0,v.parent=u,v.h=v.h||a(v,r),v.g=f,v.f=v.g+v.h,n.markDirty(v),h&&(v.h<c.h||v.h===c.h&&v.g<c.g)&&(c=v),w?l.rescoreElement(v):l.push(v))}}}return h?e(c):[]},heuristics:{manhattan:function(e,t){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y)},diagonal:function(e,t){var n=Math.sqrt(2),i=Math.abs(t.x-e.x),s=Math.abs(t.y-e.y);return 1*(i+s)+(n-2)*Math.min(i,s)}},cleanNode:function(e){e.f=0,e.g=0,e.h=0,e.visited=!1,e.closed=!1,e.parent=null}};function n(e,t){t=t||{},this.nodes=[],this.diagonal=!!t.diagonal,this.grid=[];for(var n=0;n<e.length;n++){this.grid[n]=[];for(var s=0,r=e[n];s<r.length;s++){var o=new i(n,s,r[s]);this.grid[n][s]=o,this.nodes.push(o)}}this.init()}function i(e,t,n){this.x=e,this.y=t,this.weight=n}function s(e){this.content=[],this.scoreFunction=e}return n.prototype.init=function(){this.dirtyNodes=[];for(var e=0;e<this.nodes.length;e++)t.cleanNode(this.nodes[e])},n.prototype.cleanDirty=function(){for(var e=0;e<this.dirtyNodes.length;e++)t.cleanNode(this.dirtyNodes[e]);this.dirtyNodes=[]},n.prototype.markDirty=function(e){this.dirtyNodes.push(e)},n.prototype.neighbors=function(e){var t=[],n=e.x,i=e.y,s=this.grid;return s[n-1]&&s[n-1][i]&&t.push(s[n-1][i]),s[n+1]&&s[n+1][i]&&t.push(s[n+1][i]),s[n]&&s[n][i-1]&&t.push(s[n][i-1]),s[n]&&s[n][i+1]&&t.push(s[n][i+1]),this.diagonal&&(s[n-1]&&s[n-1][i-1]&&t.push(s[n-1][i-1]),s[n+1]&&s[n+1][i-1]&&t.push(s[n+1][i-1]),s[n-1]&&s[n-1][i+1]&&t.push(s[n-1][i+1]),s[n+1]&&s[n+1][i+1]&&t.push(s[n+1][i+1])),t},n.prototype.toString=function(){for(var e=[],t=this.grid,n=0;n<t.length;n++){for(var i=[],s=t[n],r=0;r<s.length;r++)i.push(s[r].weight);e.push(i.join(" "))}return e.join("\n")},i.prototype.toString=function(){return"["+this.x+" "+this.y+"]"},i.prototype.getCost=function(e){return e&&e.x!=this.x&&e.y!=this.y?1.41421*this.weight:this.weight},i.prototype.isWall=function(){return 0===this.weight},s.prototype={push:function(e){this.content.push(e),this.sinkDown(this.content.length-1)},pop:function(){var e=this.content[0],t=this.content.pop();return this.content.length>0&&(this.content[0]=t,this.bubbleUp(0)),e},remove:function(e){var t=this.content.indexOf(e),n=this.content.pop();t!==this.content.length-1&&(this.content[t]=n,this.scoreFunction(n)<this.scoreFunction(e)?this.sinkDown(t):this.bubbleUp(t))},size:function(){return this.content.length},rescoreElement:function(e){this.sinkDown(this.content.indexOf(e))},sinkDown:function(e){for(var t=this.content[e];e>0;){var n=(e+1>>1)-1,i=this.content[n];if(!(this.scoreFunction(t)<this.scoreFunction(i)))break;this.content[n]=t,this.content[e]=i,e=n}},bubbleUp:function(e){for(var t=this.content.length,n=this.content[e],i=this.scoreFunction(n);;){var s,r=e+1<<1,o=r-1,a=null;if(o<t){var h=this.content[o];(s=this.scoreFunction(h))<i&&(a=o)}if(r<t){var l=this.content[r];this.scoreFunction(l)<(null===a?i:s)&&(a=r)}if(null===a)break;this.content[e]=this.content[a],this.content[a]=n,e=a}}},{astar:t,Graph:n}})}).call(t,n("f1Eh")(e))},SRq9:function(e,t){},WlJ8:function(e,t){},aXnd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Ml+6"),s=n("BMSc"),r={name:"ThreeTest",props:{width:{type:Number,default:1080},height:{type:Number,default:700}},data:function(){return{camera:null,scene:null,renderer:null,controls:null,meshCar:null,planeMesh:null,step:0,length:400,flex:4,isCaculate:!1,resultArray:[]}},methods:{rayClick:function(e){var t=this.length,n=new i.v,s=new i.E,r=new i.F(0,1,0),o=new i.r(r,0);s.x=e.clientX/this.width*2-1,s.y=-e.clientY/this.height*2+1,console.log("mouse",s),n.setFromCamera(s,this.camera);var a=n.ray.intersectPlane(o),h=a.x,l=a.z;if(console.log(h,l),Math.abs(h)>t/2||Math.abs(l)>t/2)console.log(123);else{for(var c=void 0,u=void 0,d=-t/2;d<t/2;d+=10)h>=d&&h<d+10&&(c=d+5);for(var p=-t/2;p<t/2;p+=10)l>=p&&l<p+10&&(u=p+5);this.initSphere(c,u)}},cleanSphere:function(){for(var e=this.scene.children,t=0;t<e.length;t++)e[t].geometry instanceof i.A&&(this.scene.remove(e[t]),t--);this.isCaculate=!1},initSphere:function(e,t){var n=this.resultArray;this.isCaculate&&this.cleanSphere();var s=new i.A(5,32,32),r=new i.n({color:16776960});if(0===n.length)(o=new i.m(s,r)).position.x=e,o.position.y=5,o.position.z=t,n.push(o),this.scene.add(o);else if(n[0].position.x!=e&&n[0].position.z!=t){var o;(o=new i.m(s,r)).position.x=e,o.position.y=5,o.position.z=t,n.push(o),this.scene.add(o),this.isCaculate=!0,console.log("起始点坐标为  x:"+n[0].position.x+",z:"+n[0].position.z),console.log("终止点坐标为  x:"+n[1].position.x+",z:"+n[1].position.z),this.resultArray=[]}},createObjs:function(){for(var e=this.length,t=this.flex,n=new i.d(8,8,8),s=new i.n({color:12632256}),r=0;r<e/10;r++)for(var o=0;o<e/10;o++){if(Math.floor(10*Math.random()+1)<=t){var a=new i.m(n,s);a.position.set(10*o-e/2+5,5,10*r-e/2+5),this.scene.add(a)}}},createWall:function(){var e=this.length,t=new i.s(e,10),n=new i.n({color:8421504,side:i.f}),s=new i.m(t,n);s.position.set(0,5,e/2),this.scene.add(s);var r=new i.m(t,n);r.rotation.y=90*Math.PI/180,r.position.set(e/2,5,0),this.scene.add(r);var o=new i.m(t,n);o.position.set(0,5,-e/2),this.scene.add(o);var a=new i.m(t,n);a.rotation.y=90*Math.PI/180,a.position.set(-e/2,5,0),this.scene.add(a)},createNet:function(){var e=this.length,t=new i.h;t.vertices.push(new i.F(-e/2,0,0)),t.vertices.push(new i.F(e/2,0,0));for(var n=0;n<=e/10;n++){var s=new i.i(t,new i.j({color:8421504,opacity:1}));s.position.z=10*n-e/2,this.scene.add(s);var r=new i.i(t,new i.j({color:8421504,opacity:1}));r.position.x=10*n-e/2,r.rotation.y=90*Math.PI/180,this.scene.add(r)}},init:function(){this.scene=new i.x,this.createNet(),this.createWall(),this.createObjs();var e=new i.t(16777215);e.position.set(0,2e3,0),this.scene.add(e);var t=new i.a(4473924);this.scene.add(t);var n=this.width,r=this.height,o=n/r;this.camera=new i.q(45,o,.1,2e4),this.camera.position.set(0,200,250),this.camera.lookAt(this.scene.position),this.renderer=new i.G,this.renderer.setSize(n,r),this.renderer.setClearColor(12178431,1);var a=document.getElementById("container");console.log(a),a.appendChild(this.renderer.domElement),this.controls=new s.a(this.camera,this.renderer.domElement),this.controls.minPolarAngle=.005*Math.PI,this.controls.maxPolarAngle=.45*Math.PI;var h=new i.b(250);this.scene.add(h)},render:function(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render)},notice:function(){this.$notify({title:"提示",message:"双击产生起始位置或者终止位置,点到场景外不生效，场景不加A*算法循迹",duration:0})}},mounted:function(){this.init(),this.render(),document.addEventListener("dblclick",this.rayClick,!1),this.notice()}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{attrs:{id:"container"}}),this._v(" "),t("el-button",{attrs:{type:"danger"},on:{click:this.notice}},[this._v("双击产生起始位置或者终止位置")]),this._v("\n  场景双击不生效是由于偏移量造成的，请跳转外链验证（如在外联请忽略）\n")],1)},staticRenderFns:[]};var a=n("VU/8")(r,o,!1,function(e){n("bGY7")},"data-v-6c46dc40",null);t.default=a.exports},bGY7:function(e,t){},cflp:function(e,t){},gORT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Ml+6"),s=n("BMSc"),r={name:"ThreeTest",props:{width:{type:Number,default:512},height:{type:Number,default:320}},data:function(){return{camera:null,scene:null,renderer:null,mesh:null,controls:null,meshCar:null,planeMesh:null,step:0,GRASS_LIGHT_MATERIAL:null}},methods:{init:function(){this.scene=new i.x;var e=new i.e(5,5,10,2),t=new i.c(10,10,10),n=new i.o({color:255,opacity:.7,specular:4491502,shininess:12});this.mesh=new i.m(t,n),this.meshCar=new i.m(e,n),this.meshCar.position.set(25,0,0);var r=new i.s(800,800),o=new i.n({color:13421772});this.planeMesh=new i.m(r,o),this.planeMesh.rotation.x=-.5*Math.PI,this.planeMesh.position.x=0,this.planeMesh.position.y=0,this.planeMesh.position.z=0,this.scene.add(this.planeMesh);var a=new i.t(16777215);a.position.set(0,1e4,0),this.scene.add(a);var h=new i.a(65348);this.scene.add(h);var l=this.width,c=this.height;this.camera=new i.q(45,l/c,1,1e3),this.camera.position.set(0,100,0),console.log(this.camera),console.log(this.camera.rotation.z);var u=new i.h;u.vertices.push(new i.F(-10,1,0)),u.vertices.push(new i.F(10,1,0)),u.vertices.push(new i.F(10,1,10)),u.vertices.push(new i.F(-10,1,10));var d=new i.j({color:16777215}),p=new i.h;p.vertices.push(new i.F(-20,1,0),new i.F(20,1,0),new i.F(20,1,20),new i.F(-20,1,20));var m=new i.j({color:16711680}),v=new i.k(p,m),f=new i.k(u,d);this.scene.add(f),this.scene.add(v),this.renderer=new i.G,this.renderer.setSize(l,c),this.renderer.setClearColor(0,1);var w=document.getElementById("container");console.log(w),w.appendChild(this.renderer.domElement),this.controls=new s.a(this.camera,this.renderer.domElement),this.camera.rotation.z=3.14,console.log(123),this.controls.minPolarAngle=.005*Math.PI,this.controls.maxPolarAngle=.45*Math.PI},addGrass:function(){var e=(new i.D).load("../../static/grasslight-big.jpg");console.log(e),e.wrapS=e.wrapT=i.w,e.repeat.set(.01,.01),e.anisotropy=16,e.encoding=i.H,this.GRASS_LIGHT_MATERIAL=new i.o({map:e}),console.log(this.GRASS_LIGHT_MATERIAL)},addtt:function(){var e=[];e.push(new i.E(250,190)),e.push(new i.E(-250,190)),e.push(new i.E(-250,-190)),e.push(new i.E(250,-190));var t=new i.z(new i.y(e)),n=new i.m(t,this.GRASS_LIGHT_MATERIAL);n.rotation.x=-.5*Math.PI,n.position.y=.5,this.scene.add(n)},render:function(){this.renderer.render(this.scene,this.camera),this.step+=.04,this.mesh.position.y=20+10*Math.cos(this.step),this.mesh.rotateY(-.01),requestAnimationFrame(this.render)}},mounted:function(){this.init(),this.addGrass(),this.addtt(),this.render()}},o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{attrs:{id:"container"}})])}]};var a=n("VU/8")(r,o,!1,function(e){n("OEcd")},"data-v-70e2bdae",null);t.default=a.exports},jEQS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page404 "},[t("p",{staticClass:"page404_p0"},[this._v("页面不存在 :(")]),this._v(" "),t("router-link",{attrs:{to:"/"}},[t("el-button",[this._v("返回首页")])],1)],1)},staticRenderFns:[]};var s=n("VU/8")({},i,!1,function(e){n("5Hhd")},"data-v-29b0755f",null);t.default=s.exports},q8bm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"p1",data:function(){return{dialogVisible:!1}},components:{HelloWorld:n("gORT").default},methods:{press:function(){this.dialogVisible=!0}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.press}},[e._v("threejs")]),e._v(" "),e.dialogVisible?n("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"900px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",{staticStyle:{margin:"auto"}},[n("span",[e._v("这是一段信息")]),e._v(" "),n("HelloWorld",{attrs:{width:600}})],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)]):e._e()],1)},staticRenderFns:[]},r=n("VU/8")(i,s,!1,null,null,null);t.default=r.exports},"t/HD":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("bOdI"),s=n.n(i),r=n("Ml+6"),o=n("BMSc"),a=(n("OT0p"),{name:"ThreeTest",props:{width:{type:Number,default:1080},height:{type:Number,default:700}},data:function(){var e;return e={camera:null,scene:null,renderer:null,controls:null,meshCar:null,planeMesh:null,step:0,length:400,flex:4,isCaculate:!1,resultArray:[],graph:[],timesRun:0,isAdded:!1},s()(e,"step",1),s()(e,"interval",50),e},methods:{pathAnimate:function(e,t){var n=this.length;if(this.timesRun=0,this.isAdded=!1,this.isAdded||(this.scene.add(t),this.isAdded=!0),this.timesRun!=e.length){var i=10*e[this.timesRun].y-n/2+5,s=10*e[this.timesRun].x-n/2+5;console.log(this.timesRun),t.position.x!=i||t.position.z!=s?(t.position.x>i&&(t.position.x-=1),t.position.x<i&&(t.position.x+=1),t.position.z>s&&(t.position.z-=1),t.position.z<s&&(t.position.z+=1),requestAnimationFrame(this.pathAnimate(e,t))):requestAnimationFrame(this.pathAnimate(e,t))}},pa:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this.step,s=this.interval,r=this.length,o=setInterval(function(){n===e.length&&clearInterval(o);var s={x:10*e[n].y-r/2+5,z:10*e[n].x-r/2+5};console.log(s,t.position.x),t.position.x!=s.x||t.position.z!=s.z?(t.position.x>s.x&&(t.position.x-=i),t.position.x<s.x&&(t.position.x+=i),t.position.z>s.z&&(t.position.z-=i),t.position.z<s.z&&(t.position.z+=i)):n++},s)},caculatePath:function(e){var t=this.length,n=new Graph(this.graph),i=(e[0].position.z-5+t/2)/10,s=(e[0].position.x-5+t/2)/10,r=(e[1].position.z-5+t/2)/10,o=(e[1].position.x-5+t/2)/10,a=n.grid[i][s],h=n.grid[r][o],l=astar.search(n,a,h);if(console.log(e,l),0===l.length)return this.$message.error("无可到达路径"),void this.cleanSphere();this.pa(l,e[0])},rayClick:function(e){var t=this.length,n=new r.v,i=new r.E,s=new r.F(0,1,0),o=new r.r(s,0);i.x=e.clientX/this.width*2-1,i.y=-e.clientY/this.height*2+1,console.log("mouse",i),n.setFromCamera(i,this.camera);var a=n.ray.intersectPlane(o),h=a.x,l=a.z;if(console.log(h,l),Math.abs(h)>t/2||Math.abs(l)>t/2)console.log(123);else{for(var c=void 0,u=void 0,d=-t/2;d<t/2;d+=10)h>=d&&h<d+10&&(c=d+5);for(var p=-t/2;p<t/2;p+=10)l>=p&&l<p+10&&(u=p+5);this.initSphere(c,u)}},cleanSphere:function(){for(var e=this.scene.children,t=0;t<e.length;t++)e[t].geometry instanceof r.A&&(this.scene.remove(e[t]),t--);this.isCaculate=!1},initSphere:function(e,t){var n=this.resultArray;this.isCaculate&&this.cleanSphere();var i=new r.A(5,32,32),s=new r.n({color:16776960});if(0===n.length)(o=new r.m(i,s)).position.x=e,o.position.y=5,o.position.z=t,n.push(o),this.scene.add(o);else if(n[0].position.x!=e&&n[0].position.z!=t){var o;(o=new r.m(i,s)).position.x=e,o.position.y=5,o.position.z=t,n.push(o),this.scene.add(o),this.isCaculate=!0,console.log("起始点坐标为  x:"+n[0].position.x+",z:"+n[0].position.z),console.log("终止点坐标为  x:"+n[1].position.x+",z:"+n[1].position.z),this.caculatePath(n),this.resultArray=[]}},createObjs:function(){for(var e=this.length,t=this.flex,n=new r.d(8,8,8),i=new r.n({color:12632256}),s=0;s<e/10;s++){var o=[];this.graph.push(o);for(var a=0;a<e/10;a++){var h=Math.floor(10*Math.random()+1);if(h>t?o.push(1):o.push(0),h<=t){var l=new r.m(n,i);l.position.set(10*a-e/2+5,5,10*s-e/2+5),this.scene.add(l)}}}console.log(this.graph)},createWall:function(){var e=this.length,t=new r.s(e,10),n=new r.n({color:8421504,side:r.f}),i=new r.m(t,n);i.position.set(0,5,e/2),this.scene.add(i);var s=new r.m(t,n);s.rotation.y=90*Math.PI/180,s.position.set(e/2,5,0),this.scene.add(s);var o=new r.m(t,n);o.position.set(0,5,-e/2),this.scene.add(o);var a=new r.m(t,n);a.rotation.y=90*Math.PI/180,a.position.set(-e/2,5,0),this.scene.add(a)},createNet:function(){var e=this.length,t=new r.h;t.vertices.push(new r.F(-e/2,0,0)),t.vertices.push(new r.F(e/2,0,0));for(var n=0;n<=e/10;n++){var i=new r.i(t,new r.j({color:8421504,opacity:1}));i.position.z=10*n-e/2,this.scene.add(i);var s=new r.i(t,new r.j({color:8421504,opacity:1}));s.position.x=10*n-e/2,s.rotation.y=90*Math.PI/180,this.scene.add(s)}},init:function(){this.scene=new r.x,this.createNet(),this.createWall(),this.createObjs();var e=new r.t(16777215);e.position.set(0,2e3,0),this.scene.add(e);var t=new r.a(4473924);this.scene.add(t);var n=this.width,i=this.height,s=n/i;this.camera=new r.q(45,s,.1,2e4),this.camera.position.set(0,200,250),this.camera.lookAt(this.scene.position),this.renderer=new r.G,this.renderer.setSize(n,i),this.renderer.setClearColor(12178431,1);var a=document.getElementById("container");console.log(a),a.appendChild(this.renderer.domElement),this.controls=new o.a(this.camera,this.renderer.domElement),this.controls.minPolarAngle=.005*Math.PI,this.controls.maxPolarAngle=.45*Math.PI;var h=new r.b(250);this.scene.add(h)},render:function(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render)},notice:function(){this.$notify({title:"提示",message:"双击产生起始位置或者终止位置,点到场景外不生效，场景不加A*算法循迹",duration:0})}},mounted:function(){this.init(),this.render(),document.addEventListener("dblclick",this.rayClick,!1),this.notice()}}),h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{attrs:{id:"container"}}),this._v(" "),t("el-button",{attrs:{type:"danger"},on:{click:this.notice}},[this._v("双击产生起始位置或者终止位置")]),this._v("\n  场景双击不生效是由于偏移量造成的，请跳转外链验证（如在外联请忽略）\n")],1)},staticRenderFns:[]};var l=n("VU/8")(a,h,!1,function(e){n("SRq9")},"data-v-32185590",null);t.default=l.exports},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.235bdd48ab892bbb6293.js.map