(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{23:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(25),D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(32),D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(31),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(40),_App_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_6__),_material_ui_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(47),_material_ui_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),_material_ui_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(6),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__),App=function(_React$Component){Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(){var _this;Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={numOne:0,numTwo:0,operator:"",screenVal:""},_this.initialState=Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},_this.state),_this.handleButtonClick=function(item){if("="===item&&_this.state.operator){var sol=eval("".concat(_this.state.numOne," ").concat(_this.state.operator," ").concat(_this.state.numTwo));return console.log(sol),void _this.setState({numOne:sol,numTwo:0,operator:"",screenVal:sol+" "})}switch(item){case"/":case"*":case"+":case"-":return void _this.setState((function(_){return Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},_),{},{operator:item,screenVal:"".concat(_.screenVal).concat(item," ")})}));case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return void(""===_this.state.operator?_this.setState((function(_){return Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},_),{},{numOne:10*parseInt(_.numOne)+parseInt(item),screenVal:"".concat(_.screenVal).concat(item," ")})})):_this.setState((function(_){return Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},_),{},{numTwo:10*parseInt(_.numTwo)+parseInt(item),screenVal:"".concat(_.screenVal).concat(item," ")})})));default:return}},_this}return Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"render",value:function(){var _=this;return console.log(this.state),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{maxWidth:"sm",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{className:"user-input",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input",{className:"user-input__field",type:"text",value:this.state.screenVal,readOnly:!0})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{className:"button-grp",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{container:!0,spacing:3,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:9,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:function(){return _.setState(Object(D_Naman_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},_.initialState))},children:"Clear"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"/"),children:"/"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"7"),children:"7"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"8"),children:"8"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"9"),children:"9"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"*"),children:"X"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"4"),children:"4"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"5"),children:"5"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"6"),children:"6"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"-"),children:"-"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"1"),children:"1"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"2"),children:"2"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"3"),children:"3"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"+"),children:"+"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:9,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"0"),children:"0"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{item:!0,xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{className:"button-grp__item",onClick:this.handleButtonClick.bind(this,"="),children:"="})})]})})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},39:function(_,e,t){},40:function(_,e,t){},46:function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(14),i=t.n(c),s=(t(39),t(23)),n=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(_),a(_),r(_),c(_),i(_)}))},l=t(2);i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{})}),document.getElementById("root")),n()}},[[46,1,2]]]);
//# sourceMappingURL=main.c5c32ce4.chunk.js.map