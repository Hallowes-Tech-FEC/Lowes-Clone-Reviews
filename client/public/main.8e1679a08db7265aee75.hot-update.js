webpackHotUpdate("main",{

/***/ "./client/src/ProductInfo.jsx":
/*!************************************!*\
  !*** ./client/src/ProductInfo.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductInfo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ \"./node_modules/@material-ui/core/esm/ExpansionPanel/index.js\");\n/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ \"./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js\");\n/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ \"./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"./node_modules/@material-ui/icons/ExpandMore.js\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction ProductInfo(props) {\n  var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n    return {\n      root: {\n        width: '100%',\n        background: 'blue'\n      },\n      heading: {\n        fontSize: theme.typography.pxToRem(15),\n        flexBasis: '33.33%',\n        flexShrink: 0\n      },\n      secondaryHeading: {\n        fontSize: theme.typography.pxToRem(15),\n        color: theme.palette.text.secondary\n      }\n    };\n  });\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      expanded = _React$useState2[0],\n      setExpanded = _React$useState2[1];\n\n  var handleChange = function handleChange(panel) {\n    return function (event, isExpanded) {\n      setExpanded(isExpanded ? panel : false);\n    };\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    expanded: expanded === 'panel1',\n    onChange: handleChange('panel1')\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, null),\n    \"aria-controls\": \"panel2bh-content\",\n    id: \"panel2bh-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.heading\n  }, \"Description\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.secondaryHeading\n  }, props.data.name, \"  \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, props.data.description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    expanded: expanded === 'panel2',\n    onChange: handleChange('panel2')\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, null),\n    \"aria-controls\": \"panel2bh-content\",\n    id: \"panel3bh-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.heading\n  }, \"Specifications\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, \"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    expanded: expanded === 'panel3',\n    onChange: handleChange('panel3')\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, null),\n    \"aria-controls\": \"panel3bh-content\",\n    id: \"panel3bh-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.heading\n  }, \"Ratings & Reviews\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, \"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    expanded: expanded === 'panel4',\n    onChange: handleChange('panel4')\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, null),\n    \"aria-controls\": \"panel4bh-content\",\n    id: \"panel3bh-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.heading\n  }, \"Community Q & A\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, \"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.\"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL1Byb2R1Y3RJbmZvLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvUHJvZHVjdEluZm8uanN4P2E2YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICBmcm9tICdyZWFjdCdcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0V4cGFuc2lvblBhbmVsJ1xuaW1wb3J0IEV4cGFuc2lvblBhbmVsRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9FeHBhbnNpb25QYW5lbERldGFpbHMnXG5pbXBvcnQgRXhwYW5zaW9uUGFuZWxTdW1tYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0V4cGFuc2lvblBhbmVsU3VtbWFyeSdcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RJbmZvKHByb3BzKSB7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIHdpZHRoOicxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ2JsdWUnLFxuICAgIH0sXG4gICAgaGVhZGluZzoge1xuICAgICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDE1KSxcbiAgICAgICAgZmxleEJhc2lzOiAnMzMuMzMlJyxcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICB9LFxuICAgIHNlY29uZGFyeUhlYWRpbmc6IHtcbiAgICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNSksXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgIH0sXG59KSk7XG5cbmNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbmNvbnN0IFtleHBhbmRlZCxzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbmNvbnN0IGhhbmRsZUNoYW5nZSA9IHBhbmVsID0+IChldmVudCwgaXNFeHBhbmRlZCkgPT4ge1xuICAgIHNldEV4cGFuZGVkKGlzRXhwYW5kZWQgPyBwYW5lbDogZmFsc2UpO1xufVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gJ3BhbmVsMSd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsMScpfT5cbiAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbFN1bW1hcnlcbiAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbi8+fVxuICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInBhbmVsMmJoLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgaWQ9XCJwYW5lbDJiaC1oZWFkZXJcIlxuICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nfT5EZXNjcmlwdGlvbjwvVHlwb2dyYXBoeT5cblxuXG4gICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsU3VtbWFyeT5cbiAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbERldGFpbHM+XG4gICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5SGVhZGluZ30+e3Byb3BzLmRhdGEubmFtZX0gIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgPC9FeHBhbnNpb25QYW5lbERldGFpbHM+XG4gICAgICAgIDwvRXhwYW5zaW9uUGFuZWw+XG4gICAgICAgICAgIDxFeHBhbnNpb25QYW5lbCBleHBhbmRlZD17ZXhwYW5kZWQgPT09ICdwYW5lbDInfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYW5lbDInKX0+XG4gICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsU3VtbWFyeVxuICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwyYmgtY29udGVudFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYW5lbDNiaC1oZWFkZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PlNwZWNpZmljYXRpb25zPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgPC9FeHBhbnNpb25QYW5lbFN1bW1hcnk+XG4gICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW5jIHZpdGFlIG9yY2kgdWx0cmljaWVzLCBhdWN0b3IgbnVuYyBpbiwgdm9sdXRwYXQgbmlzbC4gSW50ZWdlciBzaXQgYW1ldCBlZ2VzdGFzIGVyb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXRhZSBlZ2VzdGFzIGF1Z3VlLiBEdWlzIHZlbCBlc3QgYXVndWUuXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsRGV0YWlscz5cbiAgICAgIDwvRXhwYW5zaW9uUGFuZWw+XG4gICAgICA8RXhwYW5zaW9uUGFuZWwgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSAncGFuZWwzJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFuZWwzJyl9PlxuICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInBhbmVsM2JoLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYW5lbDNiaC1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+UmF0aW5ncyAmIFJldmlld3M8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgIDwvRXhwYW5zaW9uUGFuZWxTdW1tYXJ5PlxuICAgICAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbERldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgTnVuYyB2aXRhZSBvcmNpIHVsdHJpY2llcywgYXVjdG9yIG51bmMgaW4sIHZvbHV0cGF0IG5pc2wuIEludGVnZXIgc2l0IGFtZXQgZWdlc3RhcyBlcm9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgdml0YWUgZWdlc3RhcyBhdWd1ZS4gRHVpcyB2ZWwgZXN0IGF1Z3VlLlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9FeHBhbnNpb25QYW5lbERldGFpbHM+XG4gICAgICA8L0V4cGFuc2lvblBhbmVsPlxuICAgICAgPEV4cGFuc2lvblBhbmVsIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gJ3BhbmVsNCd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsNCcpfT5cbiAgICAgICAgICAgIDxFeHBhbnNpb25QYW5lbFN1bW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDRiaC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFuZWwzYmgtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PkNvbW11bml0eSBRICYgQTwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPC9FeHBhbnNpb25QYW5lbFN1bW1hcnk+XG4gICAgICAgICAgICAgICAgPEV4cGFuc2lvblBhbmVsRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW5jIHZpdGFlIG9yY2kgdWx0cmljaWVzLCBhdWN0b3IgbnVuYyBpbiwgdm9sdXRwYXQgbmlzbC4gSW50ZWdlciBzaXQgYW1ldCBlZ2VzdGFzIGVyb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXRhZSBlZ2VzdGFzIGF1Z3VlLiBEdWlzIHZlbCBlc3QgYXVndWUuXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0V4cGFuc2lvblBhbmVsRGV0YWlscz5cbiAgICAgIDwvRXhwYW5zaW9uUGFuZWw+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFBQTtBQWdCQTtBQUNBO0FBbkJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFvQkE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQWFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/ProductInfo.jsx\n");

/***/ })

})