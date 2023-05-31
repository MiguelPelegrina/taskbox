"use strict";(self.webpackChunktaskbox=self.webpackChunktaskbox||[]).push([[274,152],{"./src/app/components/task-list/pure-task-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Empty:()=>Empty,Loading:()=>Loading,WithPinnedTasks:()=>WithPinnedTasks,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_pure_task_list_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/task-list/pure-task-list.component.ts"),_task_task_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/task/task.component.ts"),_task_task_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/task/task.stories.ts");const __WEBPACK_DEFAULT_EXPORT__={id:"PureTaskListComponent",component:_pure_task_list_component__WEBPACK_IMPORTED_MODULE_1__.Z,title:"PureTaskList",tags:["autodocs"],decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_pure_task_list_component__WEBPACK_IMPORTED_MODULE_1__.Z,_task_task_component__WEBPACK_IMPORTED_MODULE_2__.Z],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`<div style="margin: 3em">${story}</div>`))],render:args=>({props:{...args,onPinTask:_task_task_stories__WEBPACK_IMPORTED_MODULE_3__.actionsData.onPinTask,onArchiveTask:_task_task_stories__WEBPACK_IMPORTED_MODULE_3__.actionsData.onArchiveTask}})},Default={args:{tasks:[{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"1",title:"Task 1"},{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"2",title:"Task 2"},{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"3",title:"Task 3"},{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"4",title:"Task 4"},{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"5",title:"Task 5"},{..._task_task_stories__WEBPACK_IMPORTED_MODULE_3__.Default.args?.task,id:"6",title:"Task 6"}]}},WithPinnedTasks={args:{tasks:[...Default.args?.tasks?.slice(0,5)||[],{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]}},Loading={args:{tasks:[],loading:!0}},Empty={args:{...Loading.args,loading:!1}}},"./src/app/components/task/task.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:()=>Archived,Default:()=>Default,Pinned:()=>Pinned,actionsData:()=>actionsData,default:()=>task_stories});var chunk_KKE3V3AL=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs"),task_component=(__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs"),__webpack_require__("./src/app/components/task/task.component.ts"));const actionsData={onPinTask:(0,chunk_KKE3V3AL.aD)("onPinTask"),onArchiveTask:(0,chunk_KKE3V3AL.aD)("onArchiveTask")},task_stories={id:"TaskComponent",title:"Task",component:task_component.Z,excludeStories:/.*Data$/,tags:["autodocs"],render:args=>({props:{...args,onPinTask:actionsData.onPinTask,onArchiveTask:actionsData.onArchiveTask}})},Default={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},Pinned={args:{task:{...Default.args?.task,state:"TASK_PINNED"}}},Archived={args:{task:{...Default.args?.task,state:"TASK_ARCHIVED"}}}},"./src/app/components/task-list/pure-task-list.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>pure_task_list_component});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let PureTaskListComponent=((_class=class PureTaskListComponent{constructor(){this.tasksInOrder=[],this.loading=!1,this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter}set tasks(arr){const filteredTasks=[...arr.filter((task=>"TASK_PINNED"===task.state)),...arr.filter((task=>"TASK_PINNED"!==task.state))].filter((task=>"TASK_INBOX"===task.state||"TASK_PINNED"===task.state));this.tasksInOrder=filteredTasks.filter((task=>"TASK_INBOX"===task.state||"TASK_PINNED"===task.state))}}).propDecorators={loading:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}],tasks:[{type:core.Input}]},_class);PureTaskListComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-pure-task-list",template:'<div class="list-items">\n  <app-task\n    *ngFor="let task of tasksInOrder"\n    [task]="task"\n    (onArchiveTask)="onArchiveTask.emit($event)"\n    (onPinTask)="onPinTask.emit($event)"\n  >\n  </app-task>\n  <div\n    *ngIf="tasksInOrder.length === 0 && !loading"\n    class="wrapper-message"\n  >\n    <span class="icon-check"></span>\n    <p class="title-message">You have no tasks</p>\n    <p class="subtitle-message">Sit back and relax</p>\n  </div>\n  <div *ngIf="loading">\n    <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="loading-item">\n      <span class="glow-checkbox"></span>\n      <span class="glow-text">\n        <span>Loading</span> <span>cool</span> <span>state</span>\n      </span>\n    </div>\n  </div>\n</div>\n'})],PureTaskListComponent);const pure_task_list_component=PureTaskListComponent},"./src/app/components/task/task.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>task_component});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let TaskComponent=((_class=class TaskComponent{constructor(){this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter}onPin(id){this.onPinTask.emit(id)}onArchive(id){this.onArchiveTask.emit(id)}}).propDecorators={task:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}]},_class);TaskComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-task",template:'<div class="list-item {{ task?.state }}">\n  <label\n    [attr.aria-label]="\'archiveTask-\' + task?.id"\n    for="checked-{{ task?.id }}"\n    class="checkbox"\n  >\n    <input\n      type="checkbox"\n      disabled="true"\n      [defaultChecked]="task?.state === \'TASK_ARCHIVED\'"\n      name="checked-{{ task?.id }}"\n      id="checked-{{ task?.id }}"\n    />\n    <span class="checkbox-custom" (click)="onArchive(task?.id)"></span>\n  </label>\n  <label\n    [attr.aria-label]="task?.title + \'\'"\n    for="title-{{ task?.id }}"\n    class="title"\n  >\n    <input\n      type="text"\n      [value]="task?.title"\n      readonly="true"\n      id="title-{{ task?.id }}"\n      name="title-{{ task?.id }}"\n      placeholder="Input title"\n      style="background: red"\n    />\n  </label>\n  <button\n    *ngIf="task?.state !== \'TASK_ARCHIVED\'"\n    class="pin-button"\n    [attr.aria-label]="\'pinTask-\' + task?.id"\n    (click)="onPin(task?.id)"\n  >\n    <span class="icon-star"></span>\n  </button>\n</div>\n'})],TaskComponent);const task_component=TaskComponent},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const core_client_1=__webpack_require__("@storybook/core-client"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,core_client_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})}}]);