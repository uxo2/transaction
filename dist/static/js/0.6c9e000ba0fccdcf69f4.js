webpackJsonp([0],{"2tap":function(t,i,e){e("d5xd"),e("at0p"),e("MJJS"),e("qsOi"),e("zOF1"),e("NUYg"),e("wTnw"),t.exports=e("ZuHZ").Map},"3cXf":function(t,i,e){t.exports={default:e("L+o2"),__esModule:!0}},"4WMP":function(t,i){},"74/4":function(t,i){},"9TqU":function(t,i,e){var s=e("Nlnz"),n=e("mmyG");t.exports=function(t){return function(){if(s(this)!=t)throw TypeError(t+"#toJSON isn't generic");return n(this)}}},EKzR:function(t,i,e){var s=e("+kaZ"),n=e("RF0x"),a=e("+Tcy")("species");t.exports=function(t){var i;return n(t)&&("function"!=typeof(i=t.constructor)||i!==Array&&!n(i.prototype)||(i=void 0),s(i)&&null===(i=i[a])&&(i=void 0)),void 0===i?Array:i}},EgqF:function(t,i){},GmRL:function(t,i,e){"use strict";var s=e("2KLU"),n=e("Wtcz"),a=e("Dpv6"),r=e("2gH+"),l=e("W4r7"),o=e("ZUzi"),c=e("GVcH"),u=e("jt4h"),d=e("+kaZ"),p=e("U91k"),v=e("hHwa").f,f=e("rsKQ")(0),g=e("uoC7");t.exports=function(t,i,e,_,h,b){var m=s[t],k=m,y=h?"set":"add",C=k&&k.prototype,L={};return g&&"function"==typeof k&&(b||C.forEach&&!r(function(){(new k).entries().next()}))?(k=i(function(i,e){u(i,k,t,"_c"),i._c=new m,void 0!=e&&c(e,h,i[y],i)}),f("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var i="add"==t||"set"==t;t in C&&(!b||"clear"!=t)&&l(k.prototype,t,function(e,s){if(u(this,k,t),!i&&b&&!d(e))return"get"==t&&void 0;var n=this._c[t](0===e?0:e,s);return i?this:n})}),b||v(k.prototype,"size",{get:function(){return this._c.size}})):(k=_.getConstructor(i,t,h,y),o(k.prototype,e),a.NEED=!0),p(k,t),L[t]=k,n(n.G+n.W+n.F,L),b||_.setStrong(k,t,h),k}},"L+o2":function(t,i,e){var s=e("ZuHZ"),n=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},NUYg:function(t,i,e){e("U5Tb")("Map")},"O+0q":function(t,i,e){var s=e("EKzR");t.exports=function(t,i){return new(s(t))(i)}},TY5X:function(t,i,e){"use strict";var s=e("hHwa").f,n=e("7ikt"),a=e("ZUzi"),r=e("VfK5"),l=e("jt4h"),o=e("GVcH"),c=e("JCgW"),u=e("Uket"),d=e("/9y9"),p=e("uoC7"),v=e("Dpv6").fastKey,f=e("rJqi"),g=p?"_s":"size",_=function(t,i){var e,s=v(i);if("F"!==s)return t._i[s];for(e=t._f;e;e=e.n)if(e.k==i)return e};t.exports={getConstructor:function(t,i,e,c){var u=t(function(t,s){l(t,u,i,"_i"),t._t=i,t._i=n(null),t._f=void 0,t._l=void 0,t[g]=0,void 0!=s&&o(s,e,t[c],t)});return a(u.prototype,{clear:function(){for(var t=f(this,i),e=t._i,s=t._f;s;s=s.n)s.r=!0,s.p&&(s.p=s.p.n=void 0),delete e[s.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var e=f(this,i),s=_(e,t);if(s){var n=s.n,a=s.p;delete e._i[s.i],s.r=!0,a&&(a.n=n),n&&(n.p=a),e._f==s&&(e._f=n),e._l==s&&(e._l=a),e[g]--}return!!s},forEach:function(t){f(this,i);for(var e,s=r(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(s(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!_(f(this,i),t)}}),p&&s(u.prototype,"size",{get:function(){return f(this,i)[g]}}),u},def:function(t,i,e){var s,n,a=_(t,i);return a?a.v=e:(t._l=a={i:n=v(i,!0),k:i,v:e,p:s=t._l,n:void 0,r:!1},t._f||(t._f=a),s&&(s.n=a),t[g]++,"F"!==n&&(t._i[n]=a)),t},getEntry:_,setStrong:function(t,i,e){c(t,i,function(t,e){this._t=f(t,i),this._k=e,this._l=void 0},function(){for(var t=this._k,i=this._l;i&&i.r;)i=i.p;return this._t&&(this._l=i=i?i.n:this._t._f)?u(0,"keys"==t?i.k:"values"==t?i.v:[i.k,i.v]):(this._t=void 0,u(1))},e?"entries":"values",!e,!0),d(i)}}},TorI:function(t,i,e){"use strict";var s=e("Wtcz"),n=e("1W9W"),a=e("VfK5"),r=e("GVcH");t.exports=function(t){s(s.S,t,{from:function(t){var i,e,s,l,o=arguments[1];return n(this),(i=void 0!==o)&&n(o),void 0==t?new this:(e=[],i?(s=0,l=a(o,arguments[2],2),r(t,!1,function(t){e.push(l(t,s++))})):r(t,!1,e.push,e),new this(e))}})}},U5Tb:function(t,i,e){"use strict";var s=e("Wtcz");t.exports=function(t){s(s.S,t,{of:function(){for(var t=arguments.length,i=new Array(t);t--;)i[t]=arguments[t];return new this(i)}})}},aA6X:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("4YfN"),n=e.n(s),a=e("cUn4"),r=e.n(a),l=e("3cXf"),o=e.n(l),c={props:{list:{type:Array,default:function(){return[]}},dropDraggleObj:[Object],loading:[Boolean],group:[String,Object]},data:function(){return{draggbleList:[],oldIndex:-1}},computed:{dragOptions:function(){return{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}}},watch:{list:function(t){this.draggbleList=JSON.parse(o()(this.list))},dropDraggleObj:{handler:function(t){t&&this.oldIndex>=0&&("implement"===t.type?(this.$set(this.draggbleList[this.oldIndex],"progressState",t.link),console.log(t)):"module"===t.type&&(console.log(t),this.$set(this.draggbleList[this.oldIndex],"moduleState",t)))},immediate:!0}},filters:{filterprogressState:function(t){return new r.a([["doing","处理中"],["not-start","未开始"],["finish","已完成"]]).get(t)}},created:function(){this.draggbleList=JSON.parse(o()(this.list))},methods:{handleDraggleList:function(t,i){this.$emit("handleDetail",t)},startDraggable:function(t){this.oldIndex=t.oldIndex},endDraggable:function(t){this.$emit("endDraggable",t)},addDraggable:function(t){console.log(3)},filterLevel:function(t){return["icon-1_square","icon-2_square","icon-3_square","icon-4_square","icon-5_square","icon-6_square","icon-7_square"][t]}}},u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"draggable-list",attrs:{id:"draggable-list"}},[e("v-draggable",t._b({staticClass:"backlog-list",attrs:{draggable:".item",group:t.group,tag:"div","ghost-class":"ghost"},on:{start:t.startDraggable,end:t.endDraggable,add:t.addDraggable},model:{value:t.draggbleList,callback:function(i){t.draggbleList=i},expression:"draggbleList"}},"v-draggable",t.dragOptions,!1),t._l(t.draggbleList,function(i,s){return e("div",{key:i.order,staticClass:"item",attrs:{"data-key":i.link},on:{click:function(e){return t.handleDraggleList(i,s)}}},[e("span",{staticClass:"type",class:[i.type]},[e("i",{staticClass:"iconfont icon-icon-test1",class:"bug"===i.type?"icon-dashujukeshihuaico-":"icon-shujuzhongjian"})]),t._v(" "),e("span",{staticClass:"level"},[e("i",{staticClass:"iconfont",class:t.filterLevel(i.level)})]),t._v(" "),e("span",{staticClass:"key-link"},[t._v(t._s(i.link))]),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(i.title))]),t._v(" "),i.moduleState?e("el-button",{class:[i.moduleState&&i.moduleState.link,"modules-type"],attrs:{type:"text",size:"mini"}},[t._v(t._s(i.moduleState.name))]):t._e(),t._v(" "),e("el-button",{class:[i.progressState,"info-status"],attrs:{type:"text",size:"mini"}},[t._v(t._s(t._f("filterprogressState")(i.progressState)))]),t._v(" "),e("el-button",{staticClass:"points",attrs:{type:"info",circle:""}},[t._v(t._s(i.points))])],1)}),0)],1)},staticRenderFns:[]};var d=e("C7Lr")(c,u,!1,function(t){e("74/4")},null,null).exports,p={data:function(){return{details:{name:"",link:"",type:"",level:"",title:"",fixed:"",progressState:"",tag:{name:"",link:""},points:""}}},watch:{sprintdetailData:function(t){t&&(this.details=JSON.parse(o()(t)))}},props:{sprintdetailData:[Object]},created:function(){this.sprintdetailData&&(this.details=JSON.parse(o()(this.sprintdetailData)))},methods:{hc_closeDetail:function(){this.$emit("closeDetail")}}},v={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"sprint-detail"}},[e("div",{staticClass:"header"},[e("div",{staticClass:"link"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.details.tag,expression:"details.tag"}],staticClass:"tag",attrs:{tag:"a",to:t.details.tag.link}},[t._v(t._s(t.details.tag.name))]),t._v(" /\n      "),e("router-link",{class:[t.details.status],attrs:{tag:"a",to:"/story/"+t.details.link}},[t._v(t._s(t.details.link))])],1),t._v(" "),e("el-button",{staticClass:"btn-del",attrs:{type:"text",icon:"el-icon-close"},on:{click:function(i){return t.hc_closeDetail()}}})],1),t._v(" "),e("v-edit",{staticClass:"title",attrs:{content:t.details.title,uid:t.details.link}}),t._v(" "),e("div",{staticClass:"points"},[e("span",{staticClass:"point-name"},[t._v("预估:")]),t._v(" "),e("div",[e("v-edit",{staticClass:"title",attrs:{content:t.details.points,uid:t.details.link}})],1)])],1)},staticRenderFns:[]};var f=[{name:"未开始",link:"not-start"},{name:"处理中",link:"doing"},{name:"已完成",link:"finish"}],g=[{name:"大块文章",link:"article",color:"#598ed4",icon:""},{name:"事务分发",link:"story",color:"#5243aa",icon:""},{name:"兴趣使然",link:"thus",color:"#ffab00",icon:""},{name:"仪表盘",link:"dashboard",color:"#d81e06",icon:""},{name:"原始生存",link:"existence",color:"#436f8a",icon:""},{name:"简单素描",link:"Sketch",color:"#fa7d09",icon:""}],_=[{label:"按类型排序",options:[{value:"needs",label:"需求"},{value:"bug",label:"BUG"}]},{label:"按优先级排序",options:[{value:"desc",label:"倒序"},{value:"dsc",label:"正序"}]},{label:"按点排序",options:[{value:"desc-point",label:"倒序"},{value:"dsc-point",label:"正序"}]}],h={data:function(){return f.forEach(function(t){t.dropStatus=!1,t.type="implement"}),g.forEach(function(t){t.type="module"}),{dialogTableVisible:!1,sprintData:[],sortGroup:_,selecType:null,backlogList:[],sprints:[],sprintLen:20,modulesList:g,progressStateList:f,backlogTotal:0,backlogLoading:!1,sprintLoading:!1,activeCollapse:0,affairVal:"",dropDraggleObj:null,sprintdetailData:null}},components:{"v-draggleList":d,"v-sprint-detail":e("C7Lr")(p,v,!1,function(t){e("4WMP")},null,null).exports},created:function(){this.getbacklogList(),this.getsprintList()},methods:{endDraggable:function(t){var i=this;this.dropDraggleObj&&setTimeout(function(){i.dropDraggleObj=null},4e3)},dragleave:function(t){this.$set(t,"dropStatus",!1)},dragover:function(t,i){t.preventDefault(),this.$set(i,"dropStatus",!0)},drop:function(t){this.$set(t,"dropStatus",!1),this.dropDraggleObj=t},closeDetail:function(){this.sprintLen=20},handleDetail:function(t){this.sprintLen=14,this.sprintdetailData=t,this.highlightSelectedList(t.link)},highlightSelectedList:function(t){var i=document.querySelector('.item[data-key="'+t+'"]');document.querySelectorAll(".item[data-key").forEach(function(t){t.classList.remove("light")}),console.log(i.classList),i.classList.add("light")},getsprintList:function(){var t=this;this.$axios.sprints.sprintList({type:"sprint"}).then(function(i){t.sprints=i.sprintList.map(function(t){return n()({},t,{visible:!0})})})},getbacklogList:function(){var t=this;this.backlogLoading=!0,this.$axios.sprints.backlogList({type:"backlog"}).then(function(i){setTimeout(function(){t.backlogList=i.sprintList.map(function(t){return n()({},t,{selected:!1})}),t.backlogTotal=i.total,t.backlogLoading=!1},500)})},removeAt:function(t){this.list.splice(t,1)},addPeople:function(){}}},b={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"story"}},[e("el-row",{staticClass:"story-backlog"},[e("el-col",{staticClass:"between-space",attrs:{span:4}},[e("div",{staticClass:"nav-relation"},[e("div",{staticClass:"nav-main"},[e("div",{staticClass:"nav-header"}),t._v(" "),e("el-input",{staticClass:"input-affiar",attrs:{placeholder:"事务号查询INHOPE-",size:"mini"},model:{value:t.affairVal,callback:function(i){t.affairVal=i},expression:"affairVal"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),t._v(" "),e("ul",{staticClass:"nav-ul"},[e("div",{staticClass:"header-title"},[t._v("执行状态"),e("el-button",{staticClass:"btn-edit",attrs:{size:"mini",icon:"el-icon-edit",type:"warning"}})],1),t._v(" "),t._l(t.progressStateList,function(i){return e("ul",{key:i.link,staticClass:"status-implement",class:{dropStatus:i.dropStatus},on:{dragleave:function(e){return t.dragleave(i)},dragover:function(e){return t.dragover(e,i)},drop:function(e){return t.drop(i)}}},[e("li",{class:["info-status",i.link]},[t._v(t._s(i.name))])])}),t._v(" "),e("div",{staticClass:"type-list header-title"},[t._v("模块类型"),e("el-button",{staticClass:"btn-edit",attrs:{size:"mini",icon:"el-icon-edit",type:"warning"}})],1),t._v(" "),e("div",{staticClass:"item-type-ul scroll-style-none"},t._l(t.modulesList,function(i){return e("div",{key:i.link,staticClass:"status-implement",class:{dropStatus:i.dropStatus},on:{dragleave:function(e){return t.dragleave(i)},dragover:function(e){return t.dragover(e,i)},drop:function(e){return t.drop(i)}}},[e("li",{class:["info-status",i.link]},[t._v(t._s(i.name))])])}),0),t._v(" "),e("div",{staticClass:"type-list header-title"},[t._v("已关闭Sprint"),e("el-button",{staticClass:"btn-edit",attrs:{size:"mini",icon:"el-icon-edit",type:"warning"}})],1),t._v(" "),e("ul",{staticClass:"item-type-sprint scroll-style-none"},t._l(t.sprints,function(i){return e("li",{key:i.id,staticClass:"item-sprint",attrs:{id:"item-sprint"}},[e("span",{staticClass:"title"},[t._v(t._s(i.title))]),t._v(" "),e("div",[e("span",{staticClass:"issus-count"},[t._v(t._s(i.count)+" ")]),t._v("\n\t\t\t\t\t\t\t\t\t问题\n\t\t\t\t\t\t\t\t")])])}),0)],2)],1)])]),t._v(" "),e("el-col",{staticClass:"backlog-wrap",attrs:{span:t.sprintLen}},[t._l(t.sprints,function(i){return["doing"===i.status?e("div",{key:i.id,staticClass:"backlog"},[e("div",{staticClass:"backlog-title"},[e("div",[e("el-button",{staticClass:"trigger-sprint",attrs:{type:"text",size:"mini"},on:{click:function(t){i.visible=!i.visible}}},[e("i",{class:[i.visible?"el-icon-arrow-down":"el-icon-arrow-right"]})]),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(i.title))]),t._v(" "),e("span",{staticClass:"issus-count"},[t._v(t._s(i.count)+" 问题")]),t._v(" "),e("span",{staticClass:"status",class:[i.status]},[t._v(t._s("doing"===i.status?"open":"close"))]),t._v(" "),e("span",{staticClass:"date"},[t._v(t._s(i.createTime)+" "),e("i",{staticClass:"iconfont icon-weibiaoti29"}),t._v(" "+t._s(i.endTime))])],1),t._v(" "),e("span",{staticClass:"status count"},[t._v(t._s(i.pointsTotal))])]),t._v(" "),e("v-draggleList",{directives:[{name:"show",rawName:"v-show",value:i.visible,expression:"el.visible"},{name:"loading",rawName:"v-loading",value:t.sprintLoading,expression:"sprintLoading"}],attrs:{list:i.issueList,group:"backlog",dropDraggleObj:t.dropDraggleObj},on:{endDraggable:t.endDraggable,handleDetail:t.handleDetail}})],1):t._e()]}),t._v(" "),e("div",{staticClass:"backlog"},[e("div",{staticClass:"backlog-title"},[e("div",[e("span",{staticClass:"title"},[t._v("Backlog")]),t._v(" "),e("span",{staticClass:"issus-count"},[t._v(t._s(t.backlogTotal)+" 问题")])]),t._v(" "),e("div",[e("el-button",{staticClass:"btn",attrs:{type:"warning",size:"mini"}},[t._v("new Issue")]),t._v(" "),e("el-button",{staticClass:"btn",attrs:{type:"warning",size:"mini"},on:{click:function(i){t.dialogTableVisible=!0}}},[t._v("new Sprint")])],1)]),t._v(" "),e("v-draggleList",{directives:[{name:"loading",rawName:"v-loading",value:t.backlogLoading,expression:"backlogLoading"}],attrs:{list:t.backlogList,handle:".handle",group:{name:"backlog",pull:!0,put:!1}}})],1)],2),t._v(" "),20!==t.sprintLen?e("el-col",{staticClass:"sprint-detail",attrs:{span:20-t.sprintLen}},[e("v-sprint-detail",{staticClass:"detail-container",attrs:{sprintdetailData:t.sprintdetailData},on:{closeDetail:t.closeDetail}})],1):t._e(),t._v(" "),e("el-dialog",{attrs:{title:"issue",visible:t.dialogTableVisible},on:{"update:visible":function(i){t.dialogTableVisible=i}}},[e("el-table",{attrs:{data:t.sprintData}},[e("el-table-column",{attrs:{property:"date",label:"日期",width:"150"}}),t._v(" "),e("el-table-column",{attrs:{property:"name",label:"姓名",width:"200"}}),t._v(" "),e("el-table-column",{attrs:{property:"address",label:"地址"}})],1)],1)],1)],1)},staticRenderFns:[]};var m=e("C7Lr")(h,b,!1,function(t){e("EgqF")},null,null);i.default=m.exports},cUn4:function(t,i,e){t.exports={default:e("2tap"),__esModule:!0}},mmyG:function(t,i,e){var s=e("GVcH");t.exports=function(t,i){var e=[];return s(t,!1,e.push,e,i),e}},qsOi:function(t,i,e){"use strict";var s=e("TY5X"),n=e("rJqi");t.exports=e("GmRL")("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var i=s.getEntry(n(this,"Map"),t);return i&&i.v},set:function(t,i){return s.def(n(this,"Map"),0===t?0:t,i)}},s,!0)},rJqi:function(t,i,e){var s=e("+kaZ");t.exports=function(t,i){if(!s(t)||t._t!==i)throw TypeError("Incompatible receiver, "+i+" required!");return t}},rsKQ:function(t,i,e){var s=e("VfK5"),n=e("+WWO"),a=e("WXuS"),r=e("n/58"),l=e("O+0q");t.exports=function(t,i){var e=1==t,o=2==t,c=3==t,u=4==t,d=6==t,p=5==t||d,v=i||l;return function(i,l,f){for(var g,_,h=a(i),b=n(h),m=s(l,f,3),k=r(b.length),y=0,C=e?v(i,k):o?v(i,0):void 0;k>y;y++)if((p||y in b)&&(_=m(g=b[y],y,h),t))if(e)C[y]=_;else if(_)switch(t){case 3:return!0;case 5:return g;case 6:return y;case 2:C.push(g)}else if(u)return!1;return d?-1:c||u?u:C}}},wTnw:function(t,i,e){e("TorI")("Map")},zOF1:function(t,i,e){var s=e("Wtcz");s(s.P+s.R,"Map",{toJSON:e("9TqU")("Map")})}});
//# sourceMappingURL=0.6c9e000ba0fccdcf69f4.js.map