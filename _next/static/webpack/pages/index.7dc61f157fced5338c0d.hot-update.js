webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/Taskbar.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/Taskbar.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Taskbar_taskbar__1VXpP {\\n  position: fixed;\\n  z-index: 1300;\\n  bottom: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 30px;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  -webkit-backdrop-filter: blur(5px);\\n          backdrop-filter: blur(5px);\\n}\\n.Taskbar_taskbar__1VXpP .Taskbar_entries__tno89 {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  display: flex;\\n  flex: 0 1 160px;\\n  left: 41px;\\n  width: calc(100% - 90px - 31px);\\n  height: 30px;\\n}\\n.Taskbar_taskbar__1VXpP .Taskbar_entries__tno89 li {\\n  display: grid;\\n  padding-right: 1px;\\n}\\n.Taskbar_taskbar__1VXpP .Taskbar_entries__tno89 li:last-child {\\n  padding-right: unset;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/System/Taskbar/Taskbar.module.scss\",\"webpack://styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,eAAA;EACA,aAAA;EACA,SAAA;EACA,OAAA;EAEA,WAAA;EACA,YAAA;EAEA,oCAAA;EAOA,kCAAA;UAAA,0BAAA;AAVF;AAYE;EClBA,eAAA;EACA,SAAA;EACA,OAAA;EDmBE,aAAA;EACA,eAAA;EAEA,UAAA;EAEA,+BAAA;EACA,YAAA;AAXJ;AAaI;EACE,aAAA;EAEA,kBAAA;AAZN;AAcM;EACE,oBAAA;AAZR\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n\\n.taskbar {\\n  position: fixed;\\n  z-index: map-get($zIndex, taskbar);\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100%;\\n  height: map-get($taskbar, height);\\n\\n  background-color: hsla(\\n    0,\\n    0%,\\n    map-get($taskbar, base-lightness),\\n    map-get($taskbar, opacity)\\n  );\\n\\n  backdrop-filter: blur(map-get($taskbar, blur));\\n\\n  .entries {\\n    @include bottomLeft;\\n\\n    display: flex;\\n    flex: 0 1 map-get($taskbar, entry-width);\\n\\n    left: map-get($startmenu, width) + map-get($startmenu, padding);\\n\\n    width: calc(100% - #{map-get($clock, width)} - #{map-get($startmenu, width) - map-get($startmenu, padding)});\\n    height: map-get($taskbar, height);\\n\\n    li {\\n      display: grid;\\n\\n      padding-right: map-get($taskbar, entry-padding);\\n\\n      &:last-child {\\n        padding-right: unset;\\n      }\\n    }\\n  }\\n}\\n\",\"@import '@/styles/maps';\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"taskbar\": \"Taskbar_taskbar__1VXpP\",\n\t\"entries\": \"Taskbar_entries__tno89\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXIubW9kdWxlLnNjc3M/MDlmYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNEJBQTRCLG9CQUFvQixrQkFBa0IsY0FBYyxZQUFZLGdCQUFnQixpQkFBaUIseUNBQXlDLHVDQUF1Qyx1Q0FBdUMsR0FBRyxtREFBbUQsb0JBQW9CLGNBQWMsWUFBWSxrQkFBa0Isb0JBQW9CLGVBQWUsb0NBQW9DLGlCQUFpQixHQUFHLHNEQUFzRCxrQkFBa0IsdUJBQXVCLEdBQUcsaUVBQWlFLHlCQUF5QixHQUFHLE9BQU8seUlBQXlJLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxpREFBaUQsNEJBQTRCLGNBQWMsb0JBQW9CLHVDQUF1QyxjQUFjLFlBQVksa0JBQWtCLHNDQUFzQyw0SEFBNEgscURBQXFELGdCQUFnQiwwQkFBMEIsc0JBQXNCLCtDQUErQyx3RUFBd0UsNkJBQTZCLHVCQUF1QixLQUFLLDBEQUEwRCxFQUFFLHdDQUF3QyxZQUFZLHNCQUFzQiwwREFBMEQsd0JBQXdCLCtCQUErQixTQUFTLE9BQU8sS0FBSyxHQUFHLDZCQUE2Qix1QkFBdUIsb0JBQW9CLGNBQWMsWUFBWSxHQUFHLHdCQUF3QixvQkFBb0IsYUFBYSxjQUFjLEdBQUcsb0JBQW9CLG9CQUFvQixXQUFXLFlBQVksR0FBRyxpQ0FBaUMsd0JBQXdCLDRCQUE0QixHQUFHLG9GQUFvRiwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGtDQUFrQyw2REFBNkQsS0FBSyxrQ0FBa0Msb0NBQW9DLG9DQUFvQywwQ0FBMEMsbUNBQW1DLGlCQUFpQix5REFBeUQsT0FBTyxLQUFLLEdBQUcscUJBQXFCO0FBQzd5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlRhc2tiYXJfdGFza2Jhcl9fMVZYcFAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTMwMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG4uVGFza2Jhcl90YXNrYmFyX18xVlhwUCAuVGFza2Jhcl9lbnRyaWVzX190bm84OSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDAgMSAxNjBweDtcXG4gIGxlZnQ6IDQxcHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCAtIDMxcHgpO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uVGFza2Jhcl90YXNrYmFyX18xVlhwUCAuVGFza2Jhcl9lbnRyaWVzX190bm84OSBsaSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZy1yaWdodDogMXB4O1xcbn1cXG4uVGFza2Jhcl90YXNrYmFyX18xVlhwUCAuVGFza2Jhcl9lbnRyaWVzX190bm84OSBsaTpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxvQ0FBQTtFQU9BLGtDQUFBO1VBQUEsMEJBQUE7QUFWRjtBQVlFO0VDbEJBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFRG1CRSxhQUFBO0VBQ0EsZUFBQTtFQUVBLFVBQUE7RUFFQSwrQkFBQTtFQUNBLFlBQUE7QUFYSjtBQWFJO0VBQ0UsYUFBQTtFQUVBLGtCQUFBO0FBWk47QUFjTTtFQUNFLG9CQUFBO0FBWlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvbWl4aW5zJztcXG5cXG4udGFza2JhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiBtYXAtZ2V0KCR6SW5kZXgsIHRhc2tiYXIpO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYShcXG4gICAgMCxcXG4gICAgMCUsXFxuICAgIG1hcC1nZXQoJHRhc2tiYXIsIGJhc2UtbGlnaHRuZXNzKSxcXG4gICAgbWFwLWdldCgkdGFza2Jhciwgb3BhY2l0eSlcXG4gICk7XFxuXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIobWFwLWdldCgkdGFza2JhciwgYmx1cikpO1xcblxcbiAgLmVudHJpZXMge1xcbiAgICBAaW5jbHVkZSBib3R0b21MZWZ0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAwIDEgbWFwLWdldCgkdGFza2JhciwgZW50cnktd2lkdGgpO1xcblxcbiAgICBsZWZ0OiBtYXAtZ2V0KCRzdGFydG1lbnUsIHdpZHRoKSArIG1hcC1nZXQoJHN0YXJ0bWVudSwgcGFkZGluZyk7XFxuXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAje21hcC1nZXQoJGNsb2NrLCB3aWR0aCl9IC0gI3ttYXAtZ2V0KCRzdGFydG1lbnUsIHdpZHRoKSAtIG1hcC1nZXQoJHN0YXJ0bWVudSwgcGFkZGluZyl9KTtcXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpO1xcblxcbiAgICBsaSB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBtYXAtZ2V0KCR0YXNrYmFyLCBlbnRyeS1wYWRkaW5nKTtcXG5cXG4gICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuXFxuQG1peGluIGJvdHRvbUxlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIGJvdHRvbVJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5AbWl4aW4gdG9wTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gdGV4dE92ZXJmbG93RWxsaXBzaXMge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRhc2tiYXJcIjogXCJUYXNrYmFyX3Rhc2tiYXJfXzFWWHBQXCIsXG5cdFwiZW50cmllc1wiOiBcIlRhc2tiYXJfZW50cmllc19fdG5vODlcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/Taskbar.module.scss\n");

/***/ })

})