webpackJsonp([1],{"0/x5":function(t,e){},"1BG1":function(t,e){},"2tap":function(t,e,s){s("d5xd"),s("at0p"),s("MJJS"),s("qsOi"),s("zOF1"),s("NUYg"),s("wTnw"),t.exports=s("ZuHZ").Map},"3cXf":function(t,e,s){t.exports={default:s("L+o2"),__esModule:!0}},"9TqU":function(t,e,s){var i=s("Nlnz"),a=s("mmyG");t.exports=function(t){return function(){if(i(this)!=t)throw TypeError(t+"#toJSON isn't generic");return a(this)}}},EKzR:function(t,e,s){var i=s("+kaZ"),a=s("RF0x"),l=s("+Tcy")("species");t.exports=function(t){var e;return a(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!a(e.prototype)||(e=void 0),i(e)&&null===(e=e[l])&&(e=void 0)),void 0===e?Array:e}},GmRL:function(t,e,s){"use strict";var i=s("2KLU"),a=s("Wtcz"),l=s("Dpv6"),n=s("2gH+"),o=s("W4r7"),r=s("ZUzi"),c=s("GVcH"),u=s("jt4h"),p=s("+kaZ"),v=s("U91k"),d=s("hHwa").f,f=s("rsKQ")(0),m=s("uoC7");t.exports=function(t,e,s,g,_,b){var h=i[t],y=h,C=_?"set":"add",k=y&&y.prototype,x={};return m&&"function"==typeof y&&(b||k.forEach&&!n(function(){(new y).entries().next()}))?(y=e(function(e,s){u(e,y,t,"_c"),e._c=new h,void 0!=s&&c(s,_,e[C],e)}),f("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in k&&(!b||"clear"!=t)&&o(y.prototype,t,function(s,i){if(u(this,y,t),!e&&b&&!p(s))return"get"==t&&void 0;var a=this._c[t](0===s?0:s,i);return e?this:a})}),b||d(y.prototype,"size",{get:function(){return this._c.size}})):(y=g.getConstructor(e,t,_,C),r(y.prototype,s),l.NEED=!0),v(y,t),x[t]=y,a(a.G+a.W+a.F,x),b||g.setStrong(y,t,_),y}},"L+o2":function(t,e,s){var i=s("ZuHZ"),a=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},NUYg:function(t,e,s){s("U5Tb")("Map")},"O+0q":function(t,e,s){var i=s("EKzR");t.exports=function(t,e){return new(i(t))(e)}},S8bX:function(t,e){},TY5X:function(t,e,s){"use strict";var i=s("hHwa").f,a=s("7ikt"),l=s("ZUzi"),n=s("VfK5"),o=s("jt4h"),r=s("GVcH"),c=s("JCgW"),u=s("Uket"),p=s("/9y9"),v=s("uoC7"),d=s("Dpv6").fastKey,f=s("rJqi"),m=v?"_s":"size",g=function(t,e){var s,i=d(e);if("F"!==i)return t._i[i];for(s=t._f;s;s=s.n)if(s.k==e)return s};t.exports={getConstructor:function(t,e,s,c){var u=t(function(t,i){o(t,u,e,"_i"),t._t=e,t._i=a(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=i&&r(i,s,t[c],t)});return l(u.prototype,{clear:function(){for(var t=f(this,e),s=t._i,i=t._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=void 0),delete s[i.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var s=f(this,e),i=g(s,t);if(i){var a=i.n,l=i.p;delete s._i[i.i],i.r=!0,l&&(l.n=a),a&&(a.p=l),s._f==i&&(s._f=a),s._l==i&&(s._l=l),s[m]--}return!!i},forEach:function(t){f(this,e);for(var s,i=n(t,arguments.length>1?arguments[1]:void 0,3);s=s?s.n:this._f;)for(i(s.v,s.k,this);s&&s.r;)s=s.p},has:function(t){return!!g(f(this,e),t)}}),v&&i(u.prototype,"size",{get:function(){return f(this,e)[m]}}),u},def:function(t,e,s){var i,a,l=g(t,e);return l?l.v=s:(t._l=l={i:a=d(e,!0),k:e,v:s,p:i=t._l,n:void 0,r:!1},t._f||(t._f=l),i&&(i.n=l),t[m]++,"F"!==a&&(t._i[a]=l)),t},getEntry:g,setStrong:function(t,e,s){c(t,e,function(t,s){this._t=f(t,e),this._k=s,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))},s?"entries":"values",!s,!0),p(e)}}},TorI:function(t,e,s){"use strict";var i=s("Wtcz"),a=s("1W9W"),l=s("VfK5"),n=s("GVcH");t.exports=function(t){i(i.S,t,{from:function(t){var e,s,i,o,r=arguments[1];return a(this),(e=void 0!==r)&&a(r),void 0==t?new this:(s=[],e?(i=0,o=l(r,arguments[2],2),n(t,!1,function(t){s.push(o(t,i++))})):n(t,!1,s.push,s),new this(s))}})}},U5Tb:function(t,e,s){"use strict";var i=s("Wtcz");t.exports=function(t){i(i.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},aA6X:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("4YfN"),a=s.n(i),l=s("cUn4"),n=s.n(l),o=s("3cXf"),r=s.n(o),c=[{name:"未开始",link:"not-start"},{name:"处理中",link:"doing"},{name:"已完成",link:"finish"}],u=[{name:"大块文章",link:"article",color:"#598ed4",icon:""},{name:"日常学习",link:"study",color:"#598ed4",icon:""},{name:"事务分发",link:"story",color:"#5243aa",icon:""},{name:"生活乐趣",link:"thus",color:"#ffab00",icon:""},{name:"旅游指南",link:"dashboard",color:"#598ed4",icon:""},{name:"农贸市场",link:"existence",color:"#5243aa",icon:""},{name:"健身运动",link:"Sketch",color:"#ffab00",icon:""},{name:"厨房日记",link:"check",color:"#598ed4",icon:""},{name:"宇宙探索",link:"universe",color:"#5243aa",icon:""},{name:"游戏人生",link:"games",color:"#598ed4",icon:""}],p=[{label:"不紧急",options:[{value:"ignore",label:"1",color:"#67C23A",icon:"icon-1_square"},{value:"delay",label:"2",color:"#67C23A",icon:"icon-2_square"}]},{label:"一般",options:[{value:"glance",label:"3",color:"#E6A23C",icon:"icon-3_square"},{value:"lookup",label:"4",color:"#E6A23C",icon:"icon-4_square"}]},{label:"紧急",options:[{value:"gaze",color:"#F56C6C",label:"5",icon:"icon-5_square"},{value:"urgent",label:"6",color:"#F56C6C",icon:"icon-6_square"}]}],v=[{icon:"icon-shujuzhongjian",color:"#0065ff",label:"工作",value:"job"},{icon:"icon-shenghuo",color:"#E6A23C",label:"生活",value:"life"}],d=[0,.5,1,2,3,4,5,6,7,8,9,10],f=[{label:"按类型排序",options:[{value:"needs",label:"需求"},{value:"bug",label:"BUG"}]},{label:"按优先级排序",options:[{value:"desc",label:"倒序"},{value:"dsc",label:"正序"}]},{label:"按点排序",options:[{value:"desc-point",label:"倒序"},{value:"dsc-point",label:"正序"}]}],m={data:function(){return{issusTypeArr:v,levelArr:p,visibleType:!1,visibleLevel:!1}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"sortSprint"}},[s("el-button",{directives:[{name:"popover",rawName:"v-popover:type",arg:"type"}],staticClass:"type",attrs:{size:"mini",type:"text",icon:"el-icon-info"}}),t._v(" "),s("el-button",{directives:[{name:"popover",rawName:"v-popover:level",arg:"level"}],staticClass:"level",attrs:{size:"mini",type:"text",icon:"el-icon-info"}}),t._v(" "),s("el-button",{directives:[{name:"popover",rawName:"v-popover:link",arg:"link"}],staticClass:"link",attrs:{size:"mini",type:"text"}},[t._v("链接")]),t._v(" "),s("el-button",{directives:[{name:"popover",rawName:"v-popover:title",arg:"title"}],staticClass:"title",attrs:{size:"mini",type:"text"}},[t._v("标题")]),t._v(" "),s("el-button",{directives:[{name:"popover",rawName:"v-popover:modules",arg:"modules"}],staticClass:"modules",attrs:{size:"mini",type:"text"}},[t._v("模块")]),t._v(" "),s("el-button",{directives:[{name:"popover",rawName:"v-popover:status",arg:"status"}],staticClass:"status",attrs:{size:"mini",type:"text",icon:"el-icon-refresh-right el-icon--right"}},[t._v("状态")]),t._v(" "),s("el-button",{directives:[{name:"popover",rawName:"v-popover:point",arg:"point"}],staticClass:"point",attrs:{size:"mini",type:"text"}},[t._v("耗时")]),t._v(" "),s("el-popover",{ref:"type",attrs:{placement:"bottom",width:"160"},model:{value:t.visibleType,callback:function(e){t.visibleType=e},expression:"visibleType"}},[s("div",{attrs:{id:"sortSprintMain"}},[s("div",{staticClass:"work"},[s("el-button",{attrs:{type:"text"}},[t._v("工作:")]),t._v(" "),s("el-button",{staticClass:"currentIcon",attrs:{size:"mini",type:"text"}},[s("i",{class:[t.issusTypeArr[0].icon,"iconfont"],style:{color:t.issusTypeArr[0].color}})]),t._v(" "),s("el-button",{staticClass:"btn",attrs:{icon:"el-icon-refresh",size:"mini",type:"info"}})],1),t._v(" "),s("div",{staticClass:"life"},[s("el-button",{attrs:{type:"text"}},[t._v("生活:")]),t._v(" "),s("el-button",{staticClass:"currentIcon",attrs:{size:"mini",type:"text"}},[s("i",{class:[t.issusTypeArr[1].icon,"iconfont"],style:{color:t.issusTypeArr[1].color}})]),t._v(" "),s("el-button",{staticClass:"btn",attrs:{icon:"el-icon-refresh",size:"mini",type:"info"}})],1)]),t._v(" "),s("div",{staticClass:"footer"},[s("el-button",{staticClass:"btn",attrs:{size:"mini",type:"text"},on:{click:function(e){t.visibleType=!1}}},[t._v("取消")]),t._v(" "),s("el-button",{staticClass:"btn",attrs:{type:"primary",size:"mini"},on:{click:function(e){t.visibleType=!1}}},[t._v("确定")])],1)]),t._v(" "),s("el-popover",{ref:"level",attrs:{placement:"bottom",width:"160"},model:{value:t.visibleLevel,callback:function(e){t.visibleLevel=e},expression:"visibleLevel"}},[s("div",{attrs:{id:"sortSprintMain"}},t._l(t.levelArr,function(e,i){return s("div",{key:i,staticClass:"work"},[s("el-button",{attrs:{type:"text"}},[t._v(t._s(e.label)+":")]),t._v(" "),s("el-button",{staticClass:"currentIcon",attrs:{size:"mini",type:"text"}},t._l(e.options,function(t,e){return s("i",{key:e,class:[t.icon,"iconfont"],style:{color:t.color}})}),0),t._v(" "),s("el-button",{staticClass:"btn",attrs:{icon:"el-icon-refresh",size:"mini",type:"info"}})],1)}),0),t._v(" "),s("div",{staticClass:"footer"},[s("el-button",{staticClass:"btn",attrs:{size:"mini",type:"text"},on:{click:function(e){t.visibleLevel=!1}}},[t._v("取消")]),t._v(" "),s("el-button",{staticClass:"btn",attrs:{type:"primary",size:"mini"},on:{click:function(e){t.visibleLevel=!1}}},[t._v("确定")])],1)])],1)},staticRenderFns:[]};var _=s("C7Lr")(m,g,!1,function(t){s("eYzb")},null,null).exports,b={props:{highlightSelectedList:Function,list:{type:Array,default:function(){return[]}},dropDraggleObj:[Object],loading:[Boolean],group:[String,Object]},data:function(){return{levelArr:p,issusTypeArr:v,draggbleList:[],oldIndex:-1}},computed:{dragOptions:function(){return{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}}},components:{"v-sort-sprint":_},watch:{list:function(t){this.draggbleList=JSON.parse(r()(this.list))},dropDraggleObj:{handler:function(t){t&&this.oldIndex>=0&&("implement"===t.type?this.$set(this.draggbleList[this.oldIndex],"progressState",t.link):"module"===t.type&&this.$set(this.draggbleList[this.oldIndex],"moduleState",t))},immediate:!0}},filters:{filterprogressState:function(t){return new n.a([["doing","处理中"],["not-start","未开始"],["finish","已完成"]]).get(t)}},created:function(){this.draggbleList=JSON.parse(r()(this.list))},mounted:function(){window.addEventListener("keyup",function(t){console.log("Enter",t.code),"Enter"===t.code&&console.log("It was the Return key."),13===t.keyCode&&console.log("It was the Return key.")})},methods:{handleDraggleList:function(t,e){this.$emit("handleDetail",t)},startDraggable:function(t){this.oldIndex=t.oldIndex},endDraggable:function(t){this.$emit("endDraggable",t)},addDraggable:function(t){},filterLevelColor:function(t){},stylelevelClass:function(t){var e=void 0;return this.levelArr.forEach(function(s){s.options.forEach(function(s){s.label==t&&(e=s.icon)})}),e},filterTypeIcon:function(t){return this.issusTypeArr.find(function(e){return e.value===t}).icon},filterTypeColor:function(t){return this.issusTypeArr.find(function(e){return e.value===t}).color}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"draggable-list"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.draggbleList.length,expression:"draggbleList.length"}],staticClass:"sort-contain"},[s("v-sort-sprint")],1),t._v(" "),[s("v-draggable",t._b({staticClass:"backlog-list",attrs:{draggable:".item",group:t.group,tag:"div","ghost-class":"ghost"},on:{start:t.startDraggable,end:t.endDraggable,add:t.addDraggable},model:{value:t.draggbleList,callback:function(e){t.draggbleList=e},expression:"draggbleList"}},"v-draggable",t.dragOptions,!1),t._l(t.draggbleList,function(e,i){return s("div",{key:e.order,staticClass:"item",attrs:{"data-key":e.link},on:{click:function(s){return t.handleDraggleList(e,i)}}},[s("span",{staticClass:"type",class:[e.type]},[s("i",{staticClass:"iconfont",class:t.filterTypeIcon(e.type),style:{color:t.filterTypeColor(e.type)}})]),t._v(" "),s("span",{staticClass:"level"},[s("i",{staticClass:"iconfont",class:t.stylelevelClass(e.level),style:{color:t.filterLevelColor(e.level)}})]),t._v(" "),s("span",{staticClass:"key-link"},[t._v(t._s(e.link))]),t._v(" "),s("span",{staticClass:"title",attrs:{title:e.title}},[t._v(t._s(e.title))]),t._v(" "),e.moduleState?s("el-button",{class:[e.moduleState&&e.moduleState.link,"modules-type"],attrs:{type:"text",size:"mini"}},[t._v(t._s(e.moduleState.name))]):t._e(),t._v(" "),e.progressState?s("el-button",{class:[e.progressState,"info-status"],attrs:{type:"text",size:"mini"}},[t._v(t._s(t._f("filterprogressState")(e.progressState)))]):t._e(),t._v(" "),s("el-button",{staticClass:"points",attrs:{type:"info",circle:""}},[t._v(t._s(e.points))])],1)}),0)],t._v(" "),0===t.draggbleList.length?s("div",{staticClass:"no-draggleList"},[s("div",{staticClass:"no-info"},[t._v("暂无事务")])]):t._e()],2)},staticRenderFns:[]};var y=s("C7Lr")(b,h,!1,function(t){s("S8bX")},null,null).exports,C={data:function(){return{levelArr:p,pointsArr:d,details:{name:"",link:"",type:"",level:"",title:"",fixed:"",progressState:"",tag:{name:"",link:""},points:""}}},watch:{sprintdetailData:function(t){t&&(this.details=JSON.parse(r()(t)))}},props:{sprintdetailData:[Object]},filters:{filterLevel:function(t){return t<=2?"unhurry":t<=4?"general":"urgent"}},created:function(){this.sprintdetailData&&(this.details=a()({},this.details,JSON.parse(r()(this.sprintdetailData))))},methods:{hc_closeDetail:function(){this.$emit("closeDetail")}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"sprint-detail"}},[s("div",{staticClass:"header"},[s("div",{staticClass:"link"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.details.tag,expression:"details.tag"}],staticClass:"tag",attrs:{tag:"a",to:t.details.tag.link}},[t._v(t._s(t.details.tag.name))]),t._v(" /\n      "),s("router-link",{staticClass:"tag",attrs:{tag:"a",to:"/story/"+t.details.link}},[t._v(t._s(t.details.link))])],1),t._v(" "),s("el-button",{staticClass:"btn-del",attrs:{type:"text",icon:"el-icon-close"},on:{click:function(e){return t.hc_closeDetail()}}})],1),t._v(" "),s("v-edit",{staticClass:"title",attrs:{content:t.details.title,uid:t.details.link}}),t._v(" "),s("div",{staticClass:"form-item item-top"},[s("div",{staticClass:"form-label"},[t._v("\n      紧急度\n      "),s("el-tooltip",{attrs:{content:"此issue处理的紧急程度，由低到高数字递增",placement:"top"}},[s("i",{staticClass:"el-icon-info"})])],1),t._v(" "),s("el-select",{staticClass:"select-level",attrs:{placeholder:"请选择",size:"mini"},model:{value:t.details.level,callback:function(e){t.$set(t.details,"level",e)},expression:"details.level"}},t._l(t.levelArr,function(e){return s("el-option-group",{key:e.label,attrs:{label:e.label}},t._l(e.options,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[s("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),s("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.value))])])}),1)}),1)],1),t._v(" "),s("div",{staticClass:"form-item"},[s("div",{staticClass:"form-label"},[t._v("\n      预估\n      "),s("el-tooltip",{attrs:{content:"此issue的耗时时间，取预估值，数值越大，耗时越长",placement:"top"}},[s("i",{staticClass:"el-icon-info"})])],1),t._v(" "),s("el-select",{staticClass:"select-point",attrs:{placeholder:"请选择",size:"mini"},model:{value:t.details.points,callback:function(e){t.$set(t.details,"points",e)},expression:"details.points"}},t._l(t.pointsArr,function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),s("div",{staticClass:"form-item"},[s("div",{staticClass:"form-label"},[t._v("创建时间")]),t._v(" "),s("div",{staticClass:"form-value"},[t._v(t._s(t.details.createTime))])]),t._v(" "),s("div",{staticClass:"form-item"},[s("div",{staticClass:"form-label"},[t._v("最近更新")]),t._v(" "),s("div",{staticClass:"form-value"},[t._v(t._s(t.details.updateTime))])]),t._v(" "),s("div",{staticClass:"form-item desc"},[s("div",{staticClass:"form-label"},[t._v("\n      描述\n      "),s("el-tooltip",{attrs:{content:"此issue的详情描述信息",placement:"top"}},[s("i",{staticClass:"el-icon-info"})])],1),t._v(" "),s("v-edit",{staticClass:"form-value",attrs:{content:t.details.desc,uid:t.details.link,textType:"textarea"}})],1),t._v(" "),s("div",{staticClass:"form-item remark"},[s("div",{staticClass:"form-label"},[t._v("\n      备注\n      "),s("el-tooltip",{attrs:{content:"此issue的备注信息",placement:"top"}},[s("i",{staticClass:"el-icon-info"})])],1),t._v(" "),s("v-edit",{staticClass:"form-value",attrs:{content:t.details.desc,uid:t.details.link,textType:"textarea"}})],1)],1)},staticRenderFns:[]};var x=s("C7Lr")(C,k,!1,function(t){s("1BG1")},null,null).exports,L={props:{dialogTableVisible:Boolean},data:function(){return{issusTypeArr:v,levelArr:p,modulesList:u,pointsArr:d,rules:{name:[{required:!0,message:"请输入标题",trigger:"submit"},{min:3,max:50,message:"长度在 3 到 50 个字符",trigger:"submit"}],moduleType:[{required:!0,message:"请选择模块类型",trigger:"change"}],point:[{required:!1,message:"请预估点数",trigger:"change"}],desc:[{required:!0,message:"请填写描述信息",trigger:"submit"}]},issueForm:{moduleType:"",name:"",link:"",type:v[0].value,typeIcon:v[0].icon,typeColor:v[0].color,level:"3",title:"",fixed:"",progressState:"",tag:{name:"",link:""},point:""}}},watch:{"issueForm.type":function(t){var e=this;this.issusTypeArr.forEach(function(s){s.value===t&&(e.issueForm.typeIcon=s.icon,e.issueForm.typeColor=s.color)})}},methods:{handleClose:function(){this.$emit("handleClose")}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.dialogTableVisible?s("div",{attrs:{id:"dialogNewIssus"}},[s("el-dialog",{attrs:{visible:t.dialogTableVisible,size:"mini","before-close":t.handleClose,"show-close":!1,width:"40%"},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[s("div",{staticClass:"dialog-header"},[s("div",{staticClass:"title"},[t._v("创建问题")])]),t._v(" "),s("el-form",{ref:"form",staticClass:"form",attrs:{model:t.issueForm,"label-width":"80px",rules:t.rules,size:"small"}},[s("el-form-item",{staticClass:"form-item",attrs:{label:"问题类型",prop:"name"}},[s("el-tooltip",{attrs:{content:"工作不全是生活，生活也不全是工作。",placement:"top"}},[s("i",{staticClass:"el-icon-info"})]),t._v(" "),s("el-select",{staticClass:"select-item",attrs:{placeholder:"请选择",size:"small"},model:{value:t.issueForm.type,callback:function(e){t.$set(t.issueForm,"type",e)},expression:"issueForm.type"}},t._l(t.issusTypeArr,function(e){return s("el-option",{key:e.name,attrs:{label:e.label,value:e.value}},[s("i",{staticClass:"iconfont",class:[e.icon],style:{color:e.color}}),t._v("\n            "+t._s(e.label)+"\n          ")])}),1),t._v(" "),s("div",{staticClass:"icon-prex"},[s("i",{staticClass:"iconfont",class:[t.issueForm.typeIcon],style:{color:t.issueForm.typeColor}})])],1),t._v(" "),s("el-form-item",{attrs:{label:"概要",prop:"name"}},[s("el-input",{attrs:{placeholder:"请输入概要",size:"small"},model:{value:t.issueForm.name,callback:function(e){t.$set(t.issueForm,"name",e)},expression:"issueForm.name"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"模块类型",prop:"moduleType"}},[s("el-select",{staticClass:"select-item",attrs:{placeholder:"请选择",size:"small"},model:{value:t.issueForm.moduleType,callback:function(e){t.$set(t.issueForm,"moduleType",e)},expression:"issueForm.moduleType"}},t._l(t.modulesList,function(t){return s("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})}),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"紧急度",prop:"level"}},[s("el-select",{staticClass:"select-item",attrs:{placeholder:"请选择",size:"small"},model:{value:t.issueForm.level,callback:function(e){t.$set(t.issueForm,"level",e)},expression:"issueForm.level"}},t._l(t.levelArr,function(e){return s("el-option-group",{key:e.label,attrs:{label:e.label}},t._l(e.options,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[s("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),s("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.value))])])}),1)}),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"预估",prop:"point"}},[s("el-select",{staticClass:"select-item",attrs:{placeholder:"请选择",size:"small"},model:{value:t.issueForm.point,callback:function(e){t.$set(t.issueForm,"point",e)},expression:"issueForm.point"}},t._l(t.pointsArr,function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"描述",prop:"desc"}},[s("el-input",{attrs:{type:"textarea",rows:5,placeholder:"此Issue的详细描述"},model:{value:t.issueForm.desc,callback:function(e){t.$set(t.issueForm,"desc",e)},expression:"issueForm.desc"}})],1)],1),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:function(e){return t.handleClose()}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1)],1):t._e()},staticRenderFns:[]};var T={data:function(){return c.forEach(function(t){t.dropStatus=!1,t.type="implement"}),u.forEach(function(t){t.type="module"}),{dialogTableVisible:!1,sprintData:[],sortGroup:f,selecType:null,backlogList:[],sprints:[],sprintLen:21,modulesList:u,progressStateList:c,backlogTotal:0,backlogLoading:!1,sprintLoading:!1,activeCollapse:0,affairVal:"",dropDraggleObj:null,sprintdetailData:null}},components:{"v-draggleList":y,"v-sprint-detail":x,"v-dialogNewIssus":s("C7Lr")(L,w,!1,function(t){s("0/x5")},null,null).exports},created:function(){this.getbacklogList(),this.getsprintList(),console.log(this.$localforage)},methods:{handleClose:function(){this.dialogTableVisible=!1},hc_addissue:function(){var t=this;this.$alert("这是一段内容","标题名称",{confirmButtonText:"确定",callback:function(e){t.$message({type:"info",message:"action: "+e})}})},endDraggable:function(t){var e=this;this.dropDraggleObj&&setTimeout(function(){e.dropDraggleObj=null},4e3)},dragleave:function(t){this.$set(t,"dropStatus",!1)},dragover:function(t,e){t.preventDefault(),this.$set(e,"dropStatus",!0)},drop:function(t){this.$set(t,"dropStatus",!1),this.dropDraggleObj=t},closeDetail:function(){this.sprintLen=21,this.highlightSelectedList()},handleDetail:function(t){this.sprintLen=14,this.sprintdetailData=t,this.highlightSelectedList(t.link)},highlightSelectedList:function(t){var e=document.querySelector('.item[data-key="'+t+'"]');document.querySelectorAll(".item[data-key").forEach(function(t){t.classList.remove("light")}),t&&e.classList.add("light")},getsprintList:function(){var t=this;this.$axios.sprints.sprintList({type:"sprint"}).then(function(e){t.sprints=e.sprintList.map(function(t){return a()({},t,{visible:!0})})})},getbacklogList:function(){var t=this;this.backlogLoading=!0,this.$axios.sprints.backlogList({type:"backlog"}).then(function(e){setTimeout(function(){t.backlogList=e.sprintList.map(function(t){return a()({},t,{selected:!1})}),t.backlogTotal=e.total,t.backlogLoading=!1},500)})},removeAt:function(t){this.list.splice(t,1)},addPeople:function(){}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"moduleStory"}},[s("el-row",{staticClass:"story-backlog",attrs:{id:"storyBacklog"}},[s("el-col",{staticClass:"between-space",attrs:{span:3}},[s("div",{staticClass:"nav-relation"},[s("div",{staticClass:"nav-main"},[s("div",{staticClass:"nav-header"}),t._v(" "),s("el-input",{staticClass:"input-affiar",attrs:{placeholder:"事务号查询INHOPE-",size:"mini"},model:{value:t.affairVal,callback:function(e){t.affairVal=e},expression:"affairVal"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),t._v(" "),s("ul",{staticClass:"nav-ul"},[s("div",{staticClass:"header-title"},[t._v("执行状态")]),t._v(" "),t._l(t.progressStateList,function(e){return s("ul",{key:e.link,staticClass:"status-implement",class:{dropStatus:e.dropStatus},on:{dragleave:function(s){return t.dragleave(e)},dragover:function(s){return t.dragover(s,e)},drop:function(s){return t.drop(e)}}},[s("li",{class:["info-status",e.link]},[t._v(t._s(e.name))])])}),t._v(" "),s("div",{staticClass:"type-list header-title"},[t._v("模块类型"),s("el-button",{staticClass:"btn-edit",attrs:{size:"mini",icon:"el-icon-edit",type:"warning"}})],1),t._v(" "),s("div",{staticClass:"item-type-ul scroll-style-none"},t._l(t.modulesList,function(e){return s("div",{key:e.link,staticClass:"status-implement",class:{dropStatus:e.dropStatus},on:{dragleave:function(s){return t.dragleave(e)},dragover:function(s){return t.dragover(s,e)},drop:function(s){return t.drop(e)}}},[s("li",{staticClass:"info-status modules-type"},[t._v(t._s(e.name))])])}),0),t._v(" "),s("div",{staticClass:"type-list header-title"},[t._v("已关闭Sprint"),s("el-button",{staticClass:"btn-edit",attrs:{size:"mini",icon:"el-icon-edit",type:"warning"}})],1),t._v(" "),s("ul",{staticClass:"item-type-sprint scroll-style-none"},t._l(t.sprints,function(e){return s("li",{key:e.id,staticClass:"item-sprint",attrs:{id:"item-sprint"}},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"item-meta"},[s("span",{staticClass:"issus-count"},[t._v(t._s(e.count)+" ")]),t._v("\n\t\t\t\t\t\t\t\t\t问题\n\t\t\t\t\t\t\t\t")])])}),0)],2)],1)])]),t._v(" "),s("el-col",{staticClass:"backlog-wrap scroll-style-theme1",attrs:{span:t.sprintLen}},[t._l(t.sprints,function(e){return["doing"===e.status?s("div",{key:e.id,staticClass:"backlog"},[s("div",{staticClass:"backlog-title"},[s("div",[s("div",{staticClass:"trigger-sprint",class:[e.visible?"el-icon-arrow-down":"el-icon-arrow-right"],attrs:{size:"mini"},on:{click:function(t){e.visible=!e.visible}}}),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"issus-count"},[t._v(t._s(e.count)+" 问题")]),t._v(" "),s("span",{staticClass:"status",class:[e.status]},[t._v(t._s("doing"===e.status?"open":"close"))]),t._v(" "),s("span",{staticClass:"date"},[t._v(t._s(e.createTime)+" "),s("i",{staticClass:"iconfont icon-weibiaoti29"}),t._v(" "+t._s(e.endTime))])]),t._v(" "),s("span",{staticClass:"status count"},[t._v(t._s(e.pointsTotal))])]),t._v(" "),s("v-draggleList",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"el.visible"},{name:"loading",rawName:"v-loading",value:t.sprintLoading,expression:"sprintLoading"}],attrs:{list:e.issueList,group:"backlog",highlightSelectedList:t.highlightSelectedList,dropDraggleObj:t.dropDraggleObj},on:{endDraggable:t.endDraggable,handleDetail:t.handleDetail}})],1):t._e()]}),t._v(" "),s("div",{staticClass:"backlog"},[s("div",{staticClass:"backlog-title"},[s("div",[s("span",{staticClass:"title"},[t._v("Backlog")]),t._v(" "),s("span",{staticClass:"issus-count"},[t._v(t._s(t.backlogTotal)+" 问题")])]),t._v(" "),s("div",[s("el-button",{staticClass:"btn config-btn",attrs:{type:"primary",size:"mini",icon:"el-icon-setting"}},[t._v("配置域上传"),s("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),s("el-button",{staticClass:"btn",attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.hc_addissue()}}},[t._v("new Sprint")]),t._v(" "),s("el-button",{staticClass:"btn",attrs:{type:"primary",size:"mini"},on:{click:function(e){t.dialogTableVisible=!0}}},[t._v("new Issue")])],1)]),t._v(" "),s("v-draggleList",{directives:[{name:"loading",rawName:"v-loading",value:t.backlogLoading,expression:"backlogLoading"}],attrs:{list:t.backlogList,highlightSelectedList:t.highlightSelectedList,handle:".handle",group:{name:"backlog",pull:!0,put:!0}}})],1)],2),t._v(" "),21!==t.sprintLen?s("el-col",{staticClass:"sprint-detail",attrs:{span:21-t.sprintLen}},[s("v-sprint-detail",{staticClass:"detail-container",attrs:{sprintdetailData:t.sprintdetailData},on:{closeDetail:t.closeDetail}})],1):t._e()],1),t._v(" "),s("v-dialogNewIssus",{attrs:{dialogTableVisible:t.dialogTableVisible},on:{handleClose:t.handleClose}})],1)},staticRenderFns:[]};var z=s("C7Lr")(T,S,!1,function(t){s("xRTm")},null,null);e.default=z.exports},cUn4:function(t,e,s){t.exports={default:s("2tap"),__esModule:!0}},eYzb:function(t,e){},mmyG:function(t,e,s){var i=s("GVcH");t.exports=function(t,e){var s=[];return i(t,!1,s.push,s,e),s}},qsOi:function(t,e,s){"use strict";var i=s("TY5X"),a=s("rJqi");t.exports=s("GmRL")("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=i.getEntry(a(this,"Map"),t);return e&&e.v},set:function(t,e){return i.def(a(this,"Map"),0===t?0:t,e)}},i,!0)},rJqi:function(t,e,s){var i=s("+kaZ");t.exports=function(t,e){if(!i(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},rsKQ:function(t,e,s){var i=s("VfK5"),a=s("+WWO"),l=s("WXuS"),n=s("n/58"),o=s("O+0q");t.exports=function(t,e){var s=1==t,r=2==t,c=3==t,u=4==t,p=6==t,v=5==t||p,d=e||o;return function(e,o,f){for(var m,g,_=l(e),b=a(_),h=i(o,f,3),y=n(b.length),C=0,k=s?d(e,y):r?d(e,0):void 0;y>C;C++)if((v||C in b)&&(g=h(m=b[C],C,_),t))if(s)k[C]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return C;case 2:k.push(m)}else if(u)return!1;return p?-1:c||u?u:k}}},wTnw:function(t,e,s){s("TorI")("Map")},xRTm:function(t,e){},zOF1:function(t,e,s){var i=s("Wtcz");i(i.P+i.R,"Map",{toJSON:s("9TqU")("Map")})}});
//# sourceMappingURL=1.4253a081a15ca7401b35.js.map