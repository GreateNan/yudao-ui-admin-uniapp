import { ElMessage as Lo } from 'element-plus'
import { showToast as an, Field as Bi, showNotify as Io } from 'vant'
/*!
 * FormCreate商业版可视化表单设计器-让表单设计更简单
 * fc-designer-pro v6.0.1
 * (c) 2018-2025 FormCreate Team  https://form-create.com/
 * license 仅限于被授权主体（个人、企业或组织）使用
 */
import { withCtx as $e, Fragment as $t, onUpdated as as, computed as at, createElementBlock as de, provide as es, ref as Et, nextTick as Fe, normalizeStyle as Fo, defineComponent as he, watch as He, toRefs as Ii, onMounted as is, resolveDynamicComponent as It, markRaw as je, onUnmounted as jo, createTextVNode as Le, shallowRef as Li, createCommentVNode as lt, normalizeClass as Lt, mergeProps as Me, renderList as mn, withDirectives as Mo, toDisplayString as Ne, onBeforeMount as ns, onBeforeUnmount as os, toRef as Pe, createVNode as q, resolveComponent as Q, isVNode as qr, watchEffect as rs, createApp as ss, openBlock as te, createBlock as Te, resolveDirective as To, inject as ts, createSlots as Vo, h as We, createElementVNode as xe, getCurrentInstance as xr, reactive as ze, renderSlot as Zt } from 'vue';

(function () { 'use strict'; try { if (typeof document != 'undefined') { const e = document.createElement('style'); e.appendChild(document.createTextNode('._fc-step-form{width:100%}._fc-step-form .van-step{line-height:1.4;text-align:left}._fc-popup.van-popup{display:flex;height:100%;padding-bottom:110px;padding-top:50px}._fc-popup-title{color:#333;font-size:16px;left:0;position:absolute;text-align:center;top:16px;width:100%}._fc-popup-content{display:flex;flex:1;overflow:auto}._fc-popup-footer{bottom:0;left:0;padding:10px;position:absolute;right:0}._fc-data-table{width:100%}._fc-data-table .el-table{--el-table-header-bg-color:#e8eefc}._fc-data-table .el-pagination{display:flex;margin-top:10px}._fc-data-table .el-pagination.left{justify-content:flex-start}._fc-data-table .el-pagination.center{justify-content:center}._fc-data-table .el-pagination.right{justify-content:flex-end}._fc-data-table ._fc-data-table-img-list .el-image{height:60px;max-width:150px}._fc-table{overflow:auto}._fc-table>table{border-bottom:1px solid #ebeef5;border-collapse:collapse;border-right:1px solid #ebeef5;border-color:#ebeef5 currentcolor currentcolor #ebeef5;border-style:solid none none solid;border-width:1px 0 0 1px;height:100%;overflow:hidden;table-layout:fixed;width:100%}._fc-table td,._fc-table tr{min-height:50px}._fc-table td{border-bottom:0;border-right:0;border-color:currentcolor #ebeef5 #ebeef5 currentcolor;border-style:none solid solid none;border-width:0 1px 1px 0;box-sizing:border-box;min-width:80px;overflow:hidden;overflow-wrap:break-word;padding:5px;position:relative;text-align:center;vertical-align:middle}._fc-table.is-mini td{min-height:12px;padding:0}._fc-table.is-mini .el-form-item{margin:0;padding:0}._fc-table-form{color:var(--fc-text-color-2);overflow:auto}._fc-table-form .form-create td .el-form-item{margin-bottom:1px}._fc-table-form .form-create td .el-form-item.is-error{margin-bottom:22px}._fc-table-form .el-form-item__label,._fc-table-form .van-field__label{display:none!important}._fc-table-form .el-form-item__content{display:flex;margin-left:0!important;width:100%!important}._fc-tf-head-idx,._fc-tf-idx{font-weight:500;min-width:40px;text-align:center;width:40px}._fc-tf-btn,._fc-tf-edit{min-width:70px;text-align:center;width:70px}._fc-tf-btn .fc-icon{cursor:pointer}._fc-table-form._fc-disabled ._fc-tf-btn .fc-icon,._fc-table-form._fc-disabled>.el-button{cursor:not-allowed}._fc-tf-table{border:1px solid #ebeef5;border-bottom:0;height:100%;overflow:hidden;table-layout:fixed;width:100%}._fc-table-form ._fc-tf-table>thead>tr>th{border:0;border-bottom:1px solid #ebeef5;box-sizing:border-box;font-weight:500;height:40px;padding:0 5px}._fc-table-form ._fc-tf-table>thead>tr>th+th{border-left:1px solid #ebeef5}._fc-table-form tr{min-height:50px}._fc-table-form ._fc-read-view{text-align:center;width:100%}._fc-table-form td{border:0;border-bottom:1px solid #ebeef5;box-sizing:border-box;min-height:50px;min-width:80px;overflow:hidden;overflow-wrap:break-word;padding:5px;position:relative}._fc-table-form td+td{border-left:1px solid #ebeef5}._fc-tf-table .el-cascader,._fc-tf-table .el-date-editor,._fc-tf-table .el-input-number,._fc-tf-table .el-select,._fc-tf-table .el-slider{width:100%}._fc-tf-head-required:before{color:#f56c6c;content:"*";margin-right:4px}._fc-undeletable ._fc-tf-btn,._fc-undeletable ._fc-tf-edit{display:none!important}._fc-table-form-v2{color:var(--fc-text-color-2);overflow:auto;width:100%}._fc-table-form-v2 th .is-required:before{color:#f56c6c;content:"*";margin-right:4px}._fc-table-form-v2 .form-create td .el-form-item{margin-bottom:1px}._fc-table-form-v2 .form-create td .el-form-item.is-error{margin-bottom:22px}._fc-table-form-v2 .el-form-item__content{display:flex;margin-left:0!important;width:100%!important}._fc-table-form-v2 .el-form-item__label{display:none!important}._fc-tf-pro-handle{align-items:center;display:flex;flex-direction:row;justify-content:space-between;margin-top:12px}._fc-table-form-v2 .el-cascader,._fc-table-form-v2 .el-date-editor,._fc-table-form-v2 .el-input-number,._fc-table-form-v2 .el-select,._fc-table-form-v2 .el-slider{width:100%}._fc-table-form-v2{transform:translateZ(0);-webkit-transform:translateZ(0);will-change:transform}._fc-table-form-v2 .el-table{contain:layout style paint}._fc-table-form-v2 .el-table__body{overflow-anchor:none}._fc-table-form-v2 .el-form-item{contain:layout}._fc-infinite-table-form{color:var(--fc-text-color-2);overflow:auto}._fc-infinite-table-form .form-create .el-form-item{margin-bottom:1px}._fc-infinite-table-form .form-create .el-form-item.is-error{margin-bottom:22px}._fc-infinite-table-form .el-form-item__label,._fc-infinite-table-form .van-field__label{display:none!important}._fc-infinite-table-form .el-form-item__content{display:flex;margin-left:0!important;width:100%!important}._fc-itf-table ._fc-itf-head-idx,._fc-itf-table ._fc-itf-idx{font-weight:500;min-width:40px;padding:0;text-align:center;width:40px}._fc-itf-idx div{border:1px solid #bfbfbf;border-radius:6px;cursor:pointer;display:inline-flex;height:18px;justify-content:center;line-height:16px;width:18px}._fc-itf-sub-idx{width:30px}._fc-itf-btn,._fc-itf-edit{min-width:70px;text-align:center;width:70px}._fc-itf-btn .fc-icon{cursor:pointer}._fc-infinite-table-form._fc-disabled ._fc-itf-btn .fc-icon,._fc-infinite-table-form._fc-disabled>.el-button{cursor:not-allowed}._fc-itf-table{border:1px solid #ebeef5;border-bottom:0;height:100%;overflow:hidden;table-layout:fixed;width:100%}._fc-itf-table>thead>tr>th{border:0;border-bottom:1px solid #ebeef5;font-weight:500;height:40px}._fc-itf-table ._fc-itf-table>thead{display:none}._fc-itf-table ._fc-itf-table{border-right:0}._fc-itf-table>thead>tr>th+th{border-left:1px solid #ebeef5}._fc-itf-table tr{min-height:50px}._fc-itf-table ._fc-read-view{text-align:center;width:100%}._fc-itf-table td{border:0;border-bottom:1px solid #ebeef5;box-sizing:border-box;min-height:50px;min-width:80px;overflow:hidden;overflow-wrap:break-word;padding:10px;position:relative}._fc-itf-table td+td{border-left:1px solid #ebeef5}._fc-itf-table .el-cascader,._fc-itf-table .el-date-editor,._fc-itf-table .el-input-number,._fc-itf-table .el-select,._fc-itf-table .el-slider{width:100%}._fc-infinite-table-form ._fc-itf-sub{padding:5px 0 5px 10px}._fc-itf-sub ._fc-table-form{background-color:var(--fc-bg-color-1)}._fc-itf-sub ._fc-tf-table{border:0}._fc-itf-idx+._fc-itf-idx,._fc-itf-sub-idx+._fc-itf-head-idx{border-left:0}._fc-itf-head-required:before{color:#f56c6c;content:"*";margin-right:4px}._fc-nested-table-form{color:var(--fc-text-color-2);overflow:auto}._fc-nested-table-form .form-create .el-form-item{margin-bottom:1px}._fc-nested-table-form .form-create .el-form-item.is-error{margin-bottom:22px}._fc-nested-table-form .el-form-item__label,._fc-nested-table-form .van-field__label{display:none!important}._fc-nested-table-form .el-form-item__content{display:flex;margin-left:0!important;width:100%!important}._fc-ntf-table ._fc-ntf-head-idx,._fc-ntf-table ._fc-ntf-idx{font-weight:500;min-width:40px;padding:0;text-align:center;width:40px}._fc-ntf-idx div{border:1px solid #bfbfbf;border-radius:6px;cursor:pointer;display:inline-flex;height:18px;justify-content:center;line-height:16px;width:18px}._fc-ntf-sub-idx{width:30px}._fc-ntf-btn,._fc-ntf-edit{min-width:70px;text-align:center;width:70px}._fc-ntf-btn .fc-icon{cursor:pointer}._fc-nested-table-form._fc-disabled ._fc-ntf-btn .fc-icon,._fc-nested-table-form._fc-disabled>.el-button{cursor:not-allowed}._fc-ntf-table{border:1px solid #ebeef5;border-bottom:0;height:100%;overflow:hidden;table-layout:fixed;width:100%}._fc-ntf-table>thead>tr>th{border:0;border-bottom:1px solid #ebeef5;font-weight:500;height:40px}._fc-ntf-table>thead>tr>th+th{border-left:1px solid #ebeef5}._fc-ntf-table tr{min-height:50px}._fc-ntf-table ._fc-read-view{text-align:center;width:100%}._fc-ntf-table td{border:0;border-bottom:1px solid #ebeef5;box-sizing:border-box;min-height:50px;min-width:80px;overflow:hidden;overflow-wrap:break-word;padding:10px;position:relative}._fc-ntf-table td+td{border-left:1px solid #ebeef5}._fc-ntf-table .el-cascader,._fc-ntf-table .el-date-editor,._fc-ntf-table .el-input-number,._fc-ntf-table .el-select,._fc-ntf-table .el-slider{width:100%}._fc-nested-table-form ._fc-ntf-sub{background-color:#fafafa}._fc-ntf-sub ._fc-table-form{background-color:var(--fc-bg-color-1)}._fc-ntf-sub ._fc-tf-table{border:0}._fc-ntf-idx+._fc-ntf-idx,._fc-ntf-sub-idx+._fc-ntf-head-idx{border-left:0}._fc-ntf-head-required:before{color:#f56c6c;content:"*";margin-right:4px}._fc-cell{display:inline-block}._fc-cell .el-cascader,._fc-cell .el-date-editor,._fc-cell .el-input-number,._fc-cell .el-select,._fc-cell .el-slider,._fc-city-m{width:100%}._fc-city-m .van-cell{padding:0}._fc-line-form{align-items:flex-start;display:flex;flex-flow:wrap;width:100%}.form-create-m ._fc-line-form{display:flex;flex-wrap:wrap}.form-create ._fc-line-form ._fc-line-form,.form-create ._fc-line-form ._fd-drag-item,.form-create ._fc-line-form ._fd-drag-tool,.form-create ._fc-line-form .el-col-24{display:inline-flex;flex:initial;flex:unset!important;flex-wrap:wrap;max-width:100%;width:auto!important}._fc-m-con .form-create ._fc-line-form>.el-col-24{width:100%!important}._fc-line-form .el-form-item{display:inline-flex;vertical-align:middle}._fc-line-form .el-select,._fc-line-form .el-slider{width:220px}._fc-echarts{height:300px;width:100%}._fc-m-signature{width:100%}._fc-m-signature-btn,._fc-m-signature-preview{background:#fff;border:1px dashed #d4d7e0;border-radius:4px;box-sizing:border-box;color:#c9ccd8;font-size:14px;height:88px;line-height:88px;min-width:160px;position:relative;text-align:center;width:100%}._fc-m-signature-btn{cursor:pointer}._fc-m-signature.disabled ._fc-signature-btn{color:#c9ccd8;cursor:not-allowed}._fc-m-signature-preview>img{display:inline-block;height:88px}._fc-m-signature-preview .icon-delete2{cursor:pointer;display:inline-block;font-size:14px;line-height:14px;position:absolute;right:9px;top:9px}._fc-m-signature-btn i{font-size:14px}._fc-m-signature-dialog .van-dialog__header{padding:15px 0;position:relative}._fc-m-signature-dialog .icon-add2{color:var(--fc-text-color-3);display:inline-block;position:absolute;right:18px;transform:rotate(45deg)}._fc-m-signature-pad{background-image:linear-gradient(#fff 14px,transparent 0),linear-gradient(90deg,#fff 14px,#d4d7e0 0);background-size:15px 15px;border:1px dashed #d4d7e0;border-radius:4px;box-sizing:border-box;width:100%}._fc-tdt-picker[data-v-72d7e418]{width:100%}._fc-tdt-picker-popup-body[data-v-72d7e418]{display:flex;flex-direction:column;height:100%}._fc-tdt-picker-header[data-v-72d7e418]{border-bottom:1px solid #ebedf0;padding:16px;text-align:center}._fc-tdt-picker-title[data-v-72d7e418]{font-size:16px;font-weight:500;line-height:24px}._fc-tdt-picker-search-wrapper[data-v-72d7e418]{flex-shrink:0}._fc-tdt-picker-container[data-v-72d7e418]{flex:1;min-height:300px;overflow:hidden;position:relative;width:100%}._fc-tdt-picker-footer[data-v-72d7e418]{border-top:1px solid #ebedf0;display:flex;flex-shrink:0;gap:12px;padding:12px 16px}._fc-tdt-picker-footer .van-button[data-v-72d7e418]{flex:1}._fc-title{font-size:16px;font-weight:600;margin-bottom:16px;margin-top:1em;width:100%}._fc-title .fc-icon{font-size:inherit}._fc-title.h1,._fc-title.h2{border-bottom:1px solid #eee;padding-bottom:.3em}._fc-title.h1{font-size:32px;line-height:1.2}._fc-title.h2{font-size:24px;line-height:1.225}._fc-title.h3{font-size:20px;line-height:1.43}._fc-title.h4{font-size:16px}._fc-title.h5{font-size:14px}._fc-title.h6{font-size:12px;font-weight:inherit;margin:0}._fc-markdown{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;word-wrap:break-word;color-scheme:light;font-size:16px;line-height:1.5;margin:0;width:100%}._fc-markdown details,._fc-markdown figcaption,._fc-markdown figure{display:block}._fc-markdown summary{display:list-item}._fc-markdown [hidden]{display:none!important}._fc-markdown a{background-color:transparent;color:#0969da;text-decoration:none}._fc-markdown abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}._fc-markdown b,._fc-markdown strong{font-weight:600}._fc-markdown dfn{font-style:italic}._fc-markdown h1{border-bottom:1px solid #d1d9e0b3;font-size:2em;font-weight:600;margin:.67em 0;padding-bottom:.3em}._fc-markdown mark{background-color:#fff8c5;color:#1f2328}._fc-markdown small{font-size:90%}._fc-markdown sub,._fc-markdown sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}._fc-markdown sub{bottom:-.25em}._fc-markdown sup{top:-.5em}._fc-markdown img{border-style:none;box-sizing:content-box;max-width:100%}._fc-markdown code,._fc-markdown kbd,._fc-markdown pre,._fc-markdown samp{font-family:monospace;font-size:1em}._fc-markdown figure{margin:1em 2.5rem}._fc-markdown hr{background:transparent;background-color:#d1d9e0;border:0;box-sizing:content-box;height:.25em;margin:1.5rem 0;overflow:hidden;padding:0}._fc-markdown input{font:inherit;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible}._fc-markdown [type=button],._fc-markdown [type=reset],._fc-markdown [type=submit]{-webkit-appearance:button;appearance:button}._fc-markdown [type=checkbox],._fc-markdown [type=radio]{box-sizing:border-box;padding:0}._fc-markdown [type=number]::-webkit-inner-spin-button,._fc-markdown [type=number]::-webkit-outer-spin-button{height:auto}._fc-markdown [type=search]::-webkit-search-cancel-button,._fc-markdown [type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}._fc-markdown ::-webkit-input-placeholder{color:inherit;opacity:.54}._fc-markdown ::-webkit-file-upload-button{-webkit-appearance:button;appearance:button;font:inherit}._fc-markdown a:hover{text-decoration:underline}._fc-markdown ::placeholder{color:#59636e;opacity:1}._fc-markdown hr:after,._fc-markdown hr:before{content:"";display:table}._fc-markdown hr:after{clear:both}._fc-markdown table{border-collapse:collapse;border-spacing:0;display:block;font-variant:tabular-nums;max-width:100%;overflow:auto;width:max-content}._fc-markdown td,._fc-markdown th{padding:0}._fc-markdown details summary{cursor:pointer}._fc-markdown [role=button]:focus,._fc-markdown a:focus,._fc-markdown input[type=checkbox]:focus,._fc-markdown input[type=radio]:focus{box-shadow:none;outline:2px solid #0969da;outline-offset:-2px}._fc-markdown [role=button]:focus:not(:focus-visible),._fc-markdown a:focus:not(:focus-visible),._fc-markdown input[type=checkbox]:focus:not(:focus-visible),._fc-markdown input[type=radio]:focus:not(:focus-visible){outline:1px solid transparent}._fc-markdown [role=button]:focus-visible,._fc-markdown a:focus-visible,._fc-markdown input[type=checkbox]:focus-visible,._fc-markdown input[type=radio]:focus-visible{box-shadow:none;outline:2px solid #0969da;outline-offset:-2px}._fc-markdown a:not([class]):focus,._fc-markdown a:not([class]):focus-visible,._fc-markdown input[type=checkbox]:focus,._fc-markdown input[type=checkbox]:focus-visible,._fc-markdown input[type=radio]:focus,._fc-markdown input[type=radio]:focus-visible{outline-offset:0}._fc-markdown kbd{background-color:#f6f8fa;border:1px solid #d1d9e0b3;border-radius:6px;box-shadow:inset 0 -1px #d1d9e0b3;color:#1f2328;display:inline-block;font:11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;line-height:10px;padding:.25rem;vertical-align:middle}._fc-markdown h1,._fc-markdown h2,._fc-markdown h3,._fc-markdown h4,._fc-markdown h5,._fc-markdown h6{font-weight:600;line-height:1.25;margin-bottom:1rem;margin-top:1.5rem}._fc-markdown h2{border-bottom:1px solid #d1d9e0b3;font-size:1.5em;font-weight:600;padding-bottom:.3em}._fc-markdown h3{font-size:1.25em;font-weight:600}._fc-markdown h4{font-size:1em;font-weight:600}._fc-markdown h5{font-size:.875em;font-weight:600}._fc-markdown h6{color:#59636e;font-size:.85em;font-weight:600}._fc-markdown p{margin-bottom:10px;margin-top:0}._fc-markdown blockquote{border-left:.25em solid #d1d9e0;color:#59636e;margin:0;padding:0 1em}._fc-markdown ol,._fc-markdown ul{margin-bottom:0;margin-top:0;padding-left:2em}._fc-markdown ol ol,._fc-markdown ul ol{list-style-type:lower-roman}._fc-markdown ol ol ol,._fc-markdown ol ul ol,._fc-markdown ul ol ol,._fc-markdown ul ul ol{list-style-type:lower-alpha}._fc-markdown dd{margin-left:0}._fc-markdown code,._fc-markdown pre,._fc-markdown samp,._fc-markdown tt{font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px}._fc-markdown pre{word-wrap:normal;margin-bottom:0;margin-top:0}._fc-markdown input::-webkit-inner-spin-button,._fc-markdown input::-webkit-outer-spin-button{appearance:none;margin:0}._fc-markdown:after,._fc-markdown:before{content:"";display:table}._fc-markdown:after{clear:both}._fc-markdown>:first-child{margin-top:0!important}._fc-markdown>:last-child{margin-bottom:0!important}._fc-markdown a:not([href]){color:inherit;text-decoration:none}._fc-markdown blockquote,._fc-markdown details,._fc-markdown dl,._fc-markdown ol,._fc-markdown p,._fc-markdown pre,._fc-markdown table,._fc-markdown ul{margin-bottom:1rem;margin-top:0}._fc-markdown blockquote>:first-child{margin-top:0}._fc-markdown blockquote>:last-child{margin-bottom:0}._fc-markdown h1:hover .anchor,._fc-markdown h2:hover .anchor,._fc-markdown h3:hover .anchor,._fc-markdown h4:hover .anchor,._fc-markdown h5:hover .anchor,._fc-markdown h6:hover .anchor{text-decoration:none}._fc-markdown h1 code,._fc-markdown h1 tt,._fc-markdown h2 code,._fc-markdown h2 tt,._fc-markdown h3 code,._fc-markdown h3 tt,._fc-markdown h4 code,._fc-markdown h4 tt,._fc-markdown h5 code,._fc-markdown h5 tt,._fc-markdown h6 code,._fc-markdown h6 tt{font-size:inherit;padding:0 .2em}._fc-markdown summary h1,._fc-markdown summary h2,._fc-markdown summary h3,._fc-markdown summary h4,._fc-markdown summary h5,._fc-markdown summary h6{display:inline-block}._fc-markdown summary h1,._fc-markdown summary h2{border-bottom:0;padding-bottom:0}._fc-markdown ol.no-list,._fc-markdown ul.no-list{list-style-type:none;padding:0}._fc-markdown ol[type="a s"]{list-style-type:lower-alpha}._fc-markdown ol[type="A s"]{list-style-type:upper-alpha}._fc-markdown ol[type="i s"]{list-style-type:lower-roman}._fc-markdown ol[type="I s"]{list-style-type:upper-roman}._fc-markdown div>ol:not([type]),._fc-markdown ol[type="1"]{list-style-type:decimal}._fc-markdown ol ol,._fc-markdown ol ul,._fc-markdown ul ol,._fc-markdown ul ul{margin-bottom:0;margin-top:0}._fc-markdown li>p{margin-top:1rem}._fc-markdown li+li{margin-top:.25em}._fc-markdown dl{padding:0}._fc-markdown dl dt{font-size:1em;font-style:italic;font-weight:600;margin-top:1rem;padding:0}._fc-markdown dl dd{margin-bottom:1rem;padding:0 1rem}._fc-markdown table th{font-weight:600}._fc-markdown table td,._fc-markdown table th{border:1px solid #d1d9e0;padding:6px 13px}._fc-markdown table td>:last-child{margin-bottom:0}._fc-markdown table tr{background-color:#fff;border-top:1px solid #d1d9e0b3}._fc-markdown table tr:nth-child(2n){background-color:#f6f8fa}._fc-markdown table img{background-color:transparent}._fc-markdown img[align=right]{padding-left:20px}._fc-markdown img[align=left]{padding-right:20px}._fc-markdown .emoji{background-color:transparent;max-width:none;vertical-align:text-top}._fc-markdown span.frame{display:block;overflow:hidden}._fc-markdown span.frame>span{border:1px solid #d1d9e0;display:block;float:left;margin:13px 0 0;overflow:hidden;padding:7px;width:auto}._fc-markdown span.frame span img{display:block;float:left}._fc-markdown span.frame span span{clear:both;color:#1f2328;display:block;padding:5px 0 0}._fc-markdown span.align-center{clear:both;display:block;overflow:hidden}._fc-markdown span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}._fc-markdown span.align-center span img{margin:0 auto;text-align:center}._fc-markdown span.align-right{clear:both;display:block;overflow:hidden}._fc-markdown span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}._fc-markdown span.align-right span img{margin:0;text-align:right}._fc-markdown span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}._fc-markdown span.float-left span{margin:13px 0 0}._fc-markdown span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}._fc-markdown span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}._fc-markdown code,._fc-markdown tt{background-color:#818b981f;border-radius:6px;font-size:85%;margin:0;padding:.2em .4em;white-space:break-spaces}._fc-markdown code br,._fc-markdown tt br{display:none}._fc-markdown del code{text-decoration:inherit}._fc-markdown samp{font-size:85%}._fc-markdown pre code{font-size:100%}._fc-markdown pre>code{background:transparent;border:0;margin:0;padding:0;white-space:pre;word-break:normal}._fc-markdown .highlight{margin-bottom:1rem}._fc-markdown .highlight pre{margin-bottom:0;word-break:normal}._fc-markdown .highlight pre,._fc-markdown pre{background-color:#f6f8fa;border-radius:6px;color:#1f2328;font-size:85%;line-height:1.45;overflow:auto;padding:1rem}._fc-markdown pre code,._fc-markdown pre tt{word-wrap:normal;background-color:transparent;border:0;display:inline;line-height:inherit;margin:0;max-width:auto;overflow:visible;padding:0}._fc-markdown [data-footnote-ref]:before{content:"["}._fc-markdown [data-footnote-ref]:after{content:"]"}._fc-markdown [role=button]:focus:not(:focus-visible),._fc-markdown [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),._fc-markdown a:focus:not(:focus-visible),._fc-markdown button:focus:not(:focus-visible),._fc-markdown summary:focus:not(:focus-visible){box-shadow:none;outline:none}._fc-markdown [tabindex="0"]:focus:not(:focus-visible),._fc-markdown details-dialog:focus:not(:focus-visible){outline:none}._fc-markdown g-emoji{display:inline-block;font-family:Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:1em;font-style:normal!important;font-weight:400;line-height:1;min-width:1ch;vertical-align:-.075em}._fc-markdown g-emoji img{height:1em;width:1em}._fc-markdown .task-list-item{list-style-type:none}._fc-markdown .task-list-item label{font-weight:400}._fc-markdown .task-list-item.enabled label{cursor:pointer}._fc-markdown .task-list-item+.task-list-item{margin-top:.25rem}._fc-markdown .task-list-item .handle{display:none}._fc-markdown .task-list-item-checkbox{margin:0 .2em .25em -1.4em;vertical-align:middle}._fc-markdown ul:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}._fc-markdown ol:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}._fc-dialog .el-dialog__headerbtn{align-items:center;color:var(--el-color-info);display:flex;justify-content:center}._fc-dialog .el-dialog__headerbtn:hover .fc-icon{color:var(--el-color-primary)}._fc-data-select-pop{display:none!important}._fc-data-select,._fc-iframe-box,._fc-video-box{width:100%}.form-create-m .van-checkbox--horizontal,.form-create-m .van-radio--horizontal{margin-bottom:5px}.form-create-m .el-input__wrapper,.form-create-m .el-select__wrapper{border-radius:0;box-shadow:none;padding-right:0}.form-create-m .el-input__wrapper:before,.form-create-m .el-select__wrapper:before{border-bottom:1px solid var(--van-cell-border-color);bottom:0;box-sizing:border-box;content:" ";left:var(--van-padding-md);pointer-events:none;position:absolute;right:var(--van-padding-md);transform:scaleY(.5)}.form-create-m .el-select__suffix{display:none}.form-create-m .el-input__wrapper:after,.form-create-m .el-select__wrapper:after{color:var(--van-cell-right-icon-color);content:"\\e660";font:normal normal normal 14px/1 var(--van-icon-font-family,"vant-icon")}.form-create-m .el-date-editor.el-input,.form-create-m .el-date-editor.el-input__wrapper,.form-create-m .el-tree{width:100%}.form-create-m .el-upload--picture-card,.form-create-m .el-upload-list{--el-upload-list-picture-card-size:64px;--el-upload-picture-card-size:64px}.form-create-m.is-preview ._fc-upload .el-icon--close,.form-create-m.is-preview ._fc-upload .el-icon--close-tip,.form-create-m.is-preview ._fc-upload .el-upload{display:none!important}@font-face{font-family:fc-icon;src:url(data:font/woff;base64,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) format("woff")}.fc-icon{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:fc-icon!important;font-size:16px;font-style:normal}.icon-paragraph:before{content:"\\e720"}.icon-cryingface:before{content:"\\e700"}.icon-service:before{content:"\\e706"}.icon-add3:before{content:"\\e707"}.icon-collect:before{content:"\\e708"}.icon-balance:before{content:"\\e709"}.icon-bulletin:before{content:"\\e70a"}.icon-inquiry:before{content:"\\e70b"}.icon-lock:before{content:"\\e70c"}.icon-liking:before{content:"\\e70d"}.icon-like:before{content:"\\e70e"}.icon-reduce:before{content:"\\e70f"}.icon-idcard:before{content:"\\e710"}.icon-scanning:before{content:"\\e711"}.icon-bankcard:before{content:"\\e712"}.icon-download:before{content:"\\e713"}.icon-smileyface:before{content:"\\e714"}.icon-pet:before{content:"\\e715"}.icon-notinterested:before{content:"\\e716"}.icon-share:before{content:"\\e717"}.icon-data1:before{content:"\\e718"}.icon-edit1:before{content:"\\e719"}.icon-female:before{content:"\\e71a"}.icon-forward:before{content:"\\e71b"}.icon-subscription:before{content:"\\e71c"}.icon-person:before{content:"\\e71d"}.icon-male:before{content:"\\e71e"}.icon-unlock:before{content:"\\e71f"}.icon-mark:before{content:"\\e705"}.icon-play:before{content:"\\e6f1"}.icon-log:before{content:"\\e6f2"}.icon-savedocument:before{content:"\\e6f3"}.icon-permissions:before{content:"\\e6f4"}.icon-businesstrip:before{content:"\\e6f5"}.icon-documentexchange:before{content:"\\e6f6"}.icon-resumelibrary:before{content:"\\e6f7"}.icon-statistics:before{content:"\\e6f8"}.icon-supervision:before{content:"\\e6f9"}.icon-news:before{content:"\\e6fa"}.icon-review:before{content:"\\e6fb"}.icon-usb:before{content:"\\e6fd"}.icon-contacts:before{content:"\\e6fe"}.icon-bill:before{content:"\\e6ff"}.icon-process:before{content:"\\e701"}.icon-mouse:before{content:"\\e702"}.icon-send1:before{content:"\\e703"}.icon-transactions:before{content:"\\e704"}.icon-application:before{content:"\\e6e8"}.icon-bag:before{content:"\\e6e9"}.icon-audio1:before{content:"\\e6ea"}.icon-askforleave:before{content:"\\e6eb"}.icon-birthday:before{content:"\\e6ec"}.icon-comment:before{content:"\\e6ed"}.icon-documents:before{content:"\\e6ee"}.icon-email:before{content:"\\e6ef"}.icon-expediting:before{content:"\\e6f0"}.icon-vue:before{content:"\\e6e7"}.icon-stack:before{content:"\\e6e5"}.icon-excel:before{content:"\\e6e6"}.icon-write:before{content:"\\e6e4"}.icon-branch:before{content:"\\e6e3"}.icon-device:before{content:"\\e6e0"}.icon-position-left:before{content:"\\e6e2"}.icon-search:before{content:"\\e6e1"}.icon-expand:before{content:"\\e6df"}.icon-expand-left:before{content:"\\e6df";display:inline-block;transform:rotate(-180deg)}.icon-data-select:before{content:"\\e6dd"}.icon-markdown:before{content:"\\e893"}.icon-grid-line:before{content:"\\e600"}.icon-print:before{content:"\\e6de"}.icon-city:before{content:"\\e64b"}.icon-location:before{content:"\\e6d4"}.icon-qrcode:before{content:"\\e6ce"}.icon-input-id:before{content:"\\e6d1"}.icon-iframe:before{content:"\\e6d2"}.icon-audio:before{content:"\\e6d3"}.icon-form-model:before{content:"\\e6d5"}.icon-title:before{content:"\\e6d6"}.icon-sign:before{content:"\\e6d7"}.icon-address:before{content:"\\e6d8"}.icon-statistic:before{content:"\\e6d9"}.icon-barcode:before{content:"\\e6da"}.icon-video:before{content:"\\e6db"}.icon-avatar:before{content:"\\e6dc"}.icon-suspend:before{content:"\\e6cf"}.icon-warning:before{content:"\\e6d0"}.icon-send:before{content:"\\e6cc"}.icon-refresh2:before{content:"\\e6cd"}.icon-ai:before{content:"\\e6cb"}.icon-ai.bright{-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#328ff7,#62e3a3);-webkit-background-clip:text}.icon-column4:before{content:"\\e6c7"}.icon-column3:before{content:"\\e6c6"}.icon-column2:before{content:"\\e6c8"}.icon-column1:before{content:"\\e6c9"}.icon-layout:before{content:"\\e6ca"}.icon-segmented:before{content:"\\e682"}.icon-mention:before{content:"\\e6c5"}.icon-input-tag:before{content:"\\e6c4"}.icon-up:before{content:"\\e697";display:inline-block;transform:rotate(180deg)}.icon-alignitems-flexstart:before{content:"\\e67f";display:inline-block;transform:rotate(180deg)}.icon-align-center:before{content:"\\e6a5";display:inline-block;transform:rotate(90deg)}.icon-align-flexstart:before{content:"\\e6a4";display:inline-block;transform:rotate(90deg)}.icon-align-spacearound:before{content:"\\e670";display:inline-block;transform:rotate(-90deg)}.icon-align-spacebetween:before{content:"\\e695";display:inline-block;transform:rotate(-90deg)}.icon-align-stretch:before{content:"\\e6a7";display:inline-block;transform:rotate(-90deg)}.icon-align-flexend:before{content:"\\e6a4";display:inline-block;transform:rotate(-90deg)}.icon-justify-flexend:before{content:"\\e6a4";display:inline-block;transform:rotate(180deg)}.icon-direction-row:before{content:"\\e68b";display:inline-block;transform:rotate(180deg)}.icon-direction-column:before{content:"\\e68b";display:inline-block;transform:rotate(-90deg)}.icon-direction-columnreverse:before{content:"\\e68b";display:inline-block;transform:rotate(90deg)}.icon-arrow:before{content:"\\e697";display:inline-block;transform:rotate(180deg)}.icon-cell:before{content:"\\e654"}.icon-table:before{content:"\\eb0a"}.icon-next-step:before{content:"\\e6b4";display:inline-block;transform:rotateY(180deg)}.icon-grid:before{content:"\\e65c";display:inline-block;transform:rotate(90deg)}.icon-alignitems-stretch:before{content:"\\e67e"}.icon-alignitems-flexend:before{content:"\\e67f"}.icon-check:before{content:"\\e680"}.icon-auto:before{content:"\\e681"}.icon-config-event:before{content:"\\e66e"}.icon-calendar:before{content:"\\e683"}.icon-config-style:before{content:"\\e684"}.icon-copy:before{content:"\\e676"}.icon-config-advanced:before{content:"\\e686"}.icon-config-props:before{content:"\\e687"}.icon-delete-circle2:before{content:"\\e688"}.icon-delete-circle:before,.icon-delete2:before{content:"\\e689"}.icon-delete:before{content:"\\e68a"}.icon-direction-rowreverse:before{content:"\\e68b"}.icon-display-flex:before{content:"\\e68c"}.icon-dialog:before{content:"\\e66f"}.icon-drag:before{content:"\\e68e"}.icon-display-block:before{content:"\\e68f"}.icon-data:before{content:"\\e690"}.icon-edit2:before{content:"\\e691"}.icon-edit:before{content:"\\e692"}.icon-add-col:before{content:"\\e693"}.icon-display-inlineblock:before{content:"\\e694"}.icon-config-base:before{content:"\\e6bf"}.icon-config-validate:before{content:"\\e696"}.icon-down:before{content:"\\e697"}.icon-display-inline:before{content:"\\e698"}.icon-eye:before{content:"\\e699"}.icon-eye-close:before{content:"\\e69a"}.icon-import:before{content:"\\e6a6"}.icon-preview:before{content:"\\e69b"}.icon-flex-nowrap:before{content:"\\e69c"}.icon-folder:before{content:"\\e69d"}.icon-form-circle:before{content:"\\e69e"}.icon-flex-wrap:before{content:"\\e69f"}.icon-form:before{content:"\\e6a0"}.icon-form-item:before{content:"\\e6a1"}.icon-icon:before{content:"\\e6a2"}.icon-image:before{content:"\\e6a3"}.icon-justify-flexstart:before{content:"\\e6a4"}.icon-justify-center:before{content:"\\e6a5"}.icon-justify-spacearound:before{content:"\\e670"}.icon-justify-stretch:before{content:"\\e6a7"}.icon-link2:before{content:"\\e6a8"}.icon-justify-spacebetween:before{content:"\\e695"}.icon-minus:before{content:"\\e6aa"}.icon-menu2:before{content:"\\e6ab"}.icon-more:before{content:"\\e6ac"}.icon-menu:before{content:"\\e6ad"}.icon-language:before{content:"\\e6ae"}.icon-pad:before{content:"\\e6af"}.icon-mobile:before{content:"\\e6b0"}.icon-page-max:before{content:"\\e6b1"}.icon-move:before{content:"\\e6b2"}.icon-page-min:before{content:"\\e6b3"}.icon-pre-step:before{content:"\\e6b4"}.icon-pc:before{content:"\\e6b5"}.icon-page:before{content:"\\e6b6"}.icon-refresh:before{content:"\\e6b7"}.icon-radius:before{content:"\\e6b8"}.icon-save-filled:before{content:"\\e6b9"}.icon-question:before{content:"\\e6ba"}.icon-scroll:before{content:"\\e6bb"}.icon-script:before{content:"\\e6bc"}.icon-setting:before{content:"\\e6bd"}.icon-save-online:before,.icon-save:before{content:"\\e6be"}.icon-task-add:before{content:"\\e68d"}.icon-shadow:before{content:"\\e6c0"}.icon-variable:before{content:"\\e6c1"}.icon-yes:before{content:"\\e6c2"}.icon-shadow-inset:before{content:"\\e6c3"}.icon-date:before{content:"\\e642"}.icon-date-range:before{content:"\\e643"}.icon-collapse:before{content:"\\e644"}.icon-slider:before{content:"\\e665"}.icon-switch:before{content:"\\e646"}.icon-subform:before{content:"\\e647"}.icon-time-range:before{content:"\\e685"}.icon-tree-select:before{content:"\\e649"}.icon-value:before{content:"\\e64a"}.icon-table-form3:before{content:"\\e6a9"}.icon-alert:before{content:"\\e64c"}.icon-card:before{content:"\\e64d"}.icon-checkbox:before{content:"\\e64e"}.icon-cascader:before{content:"\\e64f"}.icon-button:before{content:"\\e650"}.icon-data-table:before{content:"\\e651"}.icon-group:before{content:"\\e652"}.icon-divider:before{content:"\\e653"}.icon-flex:before{content:"\\e654"}.icon-descriptions:before{content:"\\e655"}.icon-html:before{content:"\\e656"}.icon-editor:before{content:"\\e657"}.icon-input:before{content:"\\e658"}.icon-link:before{content:"\\e659"}.icon-password:before{content:"\\e65a"}.icon-radio:before{content:"\\e65b"}.icon-row:before{content:"\\e65c"}.icon-inline:before{content:"\\e65d"}.icon-rate:before{content:"\\e65e"}.icon-color:before{content:"\\e65f"}.icon-select:before{content:"\\e660"}.icon-json:before{content:"\\e661"}.icon-number:before{content:"\\e662"}.icon-space:before{content:"\\e664"}.icon-step-form:before{content:"\\e663"}.icon-table-form:before{content:"\\e666"}.icon-table-form2:before{content:"\\e667"}.icon-time:before{content:"\\e668"}.icon-span:before{content:"\\e669"}.icon-textarea:before{content:"\\e66a"}.icon-tooltip:before{content:"\\e66b"}.icon-slot:before{content:"\\e66c"}.icon-transfer:before{content:"\\e66d"}.icon-upload:before{content:"\\e673"}.icon-tag:before{content:"\\e671"}.icon-watermark:before{content:"\\e672"}.icon-tab:before{content:"\\e674"}.icon-tree:before{content:"\\e675"}.icon-table:before{content:"\\e677"}.icon-add-child:before{content:"\\e678"}.icon-add2:before{content:"\\e679"}.icon-add:before{content:"\\e67a"}.icon-alignitems-baseline:before{content:"\\e67b"}.icon-add-circle:before{content:"\\e67c"}.icon-alignitems-center:before{content:"\\e67d"}')), document.head.appendChild(e) } } catch (o) { console.error('vite-plugin-css-injected-by-js', o) } })()
const Za = Object.defineProperty
const Qa = (t, e, n) => e in t ? Za(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n
const Oe = (t, e, n) => (Qa(t, typeof e != 'symbol' ? `${e}` : e, n), n)
/*!
 * @form-create/vant v3.2.33
 * (c) 2018-2025 xaboy
 * Github https://github.com/xaboy/form-create
 * Released under the MIT License.
 */
const us = 'fcSubForm'; const ls = he({
  name: us,
  props: {
    rule: Array,
    options: {
      type: Object,
      default() {
        return ze({
          submitBtn: !1,
          resetBtn: !1,
        })
      },
    },
    modelValue: {
      type: Object,
      default() {
        return {}
      },
    },
    disabled: {
      type: Boolean,
      default: !1,
    },
    syncDisabled: {
      type: Boolean,
      default: !0,
    },
    formCreateInject: Object,
  },
  data() {
    return {
      cacheValue: {},
      subApi: {},
      form: je(this.formCreateInject.form.$form()),
    }
  },
  emits: ['fc:subform', 'update:modelValue', 'change', 'itemMounted'],
  watch: {
    modelValue(e) {
      this.setValue(e)
    },
  },
  methods: {
    formData(e) {
      this.cacheValue = JSON.stringify(e), this.$emit('update:modelValue', e), this.$emit('change', e)
    },
    setValue(e) {
      const n = JSON.stringify(e)
      this.cacheValue !== n && (this.cacheValue = n, this.subApi.coverValue(e || {}))
    },
    add$f(e) {
      const n = this
      this.subApi = e, Fe(() => {
        n.$emit('itemMounted', e)
      })
    },
  },
  render() {
    const e = this.form
    return q(e, {
      'disabled': this.disabled,
      'onUpdate:modelValue': this.formData,
      'modelValue': this.modelValue,
      'onEmit-event': this.$emit,
      'onUpdate:api': this.add$f,
      'rule': this.rule,
      'option': this.options,
      'extendOption': !0,
    }, null)
  },
})
function Ni(t, e) {
  const n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    let r = Object.getOwnPropertySymbols(t)
    e && (r = r.filter((i) => {
      return Object.getOwnPropertyDescriptor(t, i).enumerable
    })), n.push.apply(n, r)
  }
  return n
}
function Z(t) {
  for (let e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? Ni(new Object(n), !0).forEach((r) => {
          Be(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Ni(new Object(n)).forEach((r) => {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function me(t) {
  return typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? me = function (e) {
      return typeof e
    }
    : me = function (e) {
      return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
    }, me(t)
}
function cs(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Be(t, e, n) {
  return e in t
    ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
    : t[e] = n, t
}
function fs(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function')
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0,
    },
  }), e && Er(t, e)
}
function Un(t) {
  return Un = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (n) {
      return n.__proto__ || Object.getPrototypeOf(n)
    }, Un(t)
}
function Er(t, e) {
  return Er = Object.setPrototypeOf || function (r, i) {
    return r.__proto__ = i, r
  }, Er(t, e)
}
function ds() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1
  if (typeof Proxy == 'function')
    return !0
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
    })), !0
  } catch {
    return !1
  }
}
function hs(t) {
  if (t === void 0)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return t
}
function ps(t, e) {
  if (e && (typeof e == 'object' || typeof e == 'function'))
    return e
  if (e !== void 0)
    throw new TypeError('Derived constructors may only return object or undefined')
  return hs(t)
}
function ms(t) {
  const e = ds()
  return function () {
    const r = Un(t); let i
    if (e) {
      const o = Un(this).constructor
      i = Reflect.construct(r, arguments, o)
    } else {
      i = r.apply(this, arguments)
    }
    return ps(this, i)
  }
}
function gs(t, e) {
  return ys(t) || bs(t, e) || Bo(t, e) || $s()
}
function fe(t) {
  return vs(t) || _s(t) || Bo(t) || ws()
}
function vs(t) {
  if (Array.isArray(t))
    return Cr(t)
}
function ys(t) {
  if (Array.isArray(t))
    return t
}
function _s(t) {
  if (typeof Symbol < 'u' && t[Symbol.iterator] != null || t['@@iterator'] != null)
    return Array.from(t)
}
function bs(t, e) {
  let n = t == null ? null : typeof Symbol < 'u' && t[Symbol.iterator] || t['@@iterator']
  if (n != null) {
    const r = []; let i = !0; let o = !1; let a; let s
    try {
      for (n = n.call(t); !(i = (a = n.next()).done) && (r.push(a.value), !(e && r.length === e)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u
    } finally {
      try {
        !i && n.return != null && n.return()
      } finally {
        if (o)
          throw s
      }
    }
    return r
  }
}
function Bo(t, e) {
  if (t) {
    if (typeof t == 'string')
      return Cr(t, e)
    let n = Object.prototype.toString.call(t).slice(8, -1)
    if (n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set')
      return Array.from(t)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Cr(t, e)
  }
}
function Cr(t, e) {
  (e == null || e > t.length) && (e = t.length)
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n]
  return r
}
function ws() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function $s() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var L = {
  type(e, n) {
    return Object.prototype.toString.call(e) === `[object ${n}]`
  },
  Undef(e) {
    return e == null
  },
  Element(e) {
    return me(e) === 'object' && e !== null && e.nodeType === 1 && !L.Object(e)
  },
  trueArray(e) {
    return Array.isArray(e) && e.length > 0
  },
  Function(e) {
    const n = this.getType(e)
    return n === 'Function' || n === 'AsyncFunction'
  },
  getType(e) {
    const n = Object.prototype.toString.call(e)
    return /^\[object (.*)\]$/.exec(n)[1]
  },
  empty(e) {
    return e == null || Array.isArray(e) && Array.isArray(e) && !e.length ? !0 : typeof e == 'string' && !e
  },
};
['Date', 'Object', 'String', 'Boolean', 'Array', 'Number'].forEach((t) => {
  L[t] = function (e) {
    return L.type(e, t)
  }
})
function Ee(t, e) {
  return {}.hasOwnProperty.call(t, e)
}
const Ss = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {}; const No = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r()
  })(Ss, () => {
    const n = 1e3; const r = 6e4; const i = 36e5; const o = 'millisecond'; const a = 'second'; const s = 'minute'; const u = 'hour'; const c = 'day'; const l = 'week'; const p = 'month'; const h = 'quarter'; const m = 'year'; const w = 'date'; const $ = 'Invalid Date'; const A = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i; const F = /\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g; const I = {
      name: 'en',
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      ordinal(S) {
        const _ = ['th', 'st', 'nd', 'rd']; const d = S % 100
        return `[${S}${_[(d - 20) % 10] || _[d] || _[0]}]`
      },
    }; const V = function (S, _, d) {
      const f = String(S)
      return !f || f.length >= _ ? S : `${Array.from({ length: _ + 1 - f.length }).join(d)}${S}`
    }; const G = {
      s: V,
      z(S) {
        const _ = -S.utcOffset(); const d = Math.abs(_); const f = Math.floor(d / 60); const g = d % 60
        return `${(_ <= 0 ? '+' : '-') + V(f, 2, '0')}:${V(g, 2, '0')}`
      },
      m: function k(S, _) {
        if (S.date() < _.date())
          return -k(_, S)
        const d = 12 * (_.year() - S.year()) + (_.month() - S.month()); const f = S.clone().add(d, p); const g = _ - f < 0; const y = S.clone().add(d + (g ? -1 : 1), p)
        return +(-(d + (_ - f) / (g ? f - y : y - f)) || 0)
      },
      a(S) {
        return S < 0 ? Math.ceil(S) || 0 : Math.floor(S)
      },
      p(S) {
        return {
          M: p,
          y: m,
          w: l,
          d: c,
          D: w,
          h: u,
          m: s,
          s: a,
          ms: o,
          Q: h,
        }[S] || String(S || '').toLowerCase().replace(/s$/, '')
      },
      u(S) {
        return S === void 0
      },
    }; let ee = 'en'; const X = {}
    X[ee] = I
    const re = '$isDayjsObject'; const Y = function (S) {
      return S instanceof _e || !(!S || !S[re])
    }; const oe = function k(S, _, d) {
      let f
      if (!S)
        return ee
      if (typeof S == 'string') {
        const g = S.toLowerCase()
        X[g] && (f = g), _ && (X[g] = _, f = g)
        const y = S.split('-')
        if (!f && y.length > 1)
          return k(y[0])
      } else {
        const v = S.name
        X[v] = S, f = v
      }
      return !d && f && (ee = f), f || !d && ee
    }; const W = function (S, _) {
      if (Y(S))
        return S.clone()
      const d = me(_) == 'object' ? _ : {}
      return d.date = S, d.args = arguments, new _e(d)
    }; const H = G
    H.l = oe, H.i = Y, H.w = function (k, S) {
      return W(k, {
        locale: S.$L,
        utc: S.$u,
        x: S.$x,
        $offset: S.$offset,
      })
    }
    var _e = (function () {
      function k(_) {
        this.$L = oe(_.locale, null, !0), this.parse(_), this.$x = this.$x || _.x || {}, this[re] = !0
      }
      const S = k.prototype
      return S.parse = function (_) {
        this.$d = (function (d) {
          const f = d.date; const g = d.utc
          if (f === null)
            return new Date(Number.NaN)
          if (H.u(f))
            return new Date()
          if (f instanceof Date)
            return new Date(f)
          if (typeof f == 'string' && !/Z$/i.test(f)) {
            const y = f.match(A)
            if (y) {
              const v = y[2] - 1 || 0; const E = (y[7] || '0').substring(0, 3)
              return g ? new Date(Date.UTC(y[1], v, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, E)) : new Date(y[1], v, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, E)
            }
          }
          return new Date(f)
        }(_)), this.init()
      }, S.init = function () {
        const _ = this.$d
        this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds()
      }, S.$utils = function () {
        return H
      }, S.isValid = function () {
        return this.$d.toString() !== $
      }, S.isSame = function (_, d) {
        const f = W(_)
        return this.startOf(d) <= f && f <= this.endOf(d)
      }, S.isAfter = function (_, d) {
        return W(_) < this.startOf(d)
      }, S.isBefore = function (_, d) {
        return this.endOf(d) < W(_)
      }, S.$g = function (_, d, f) {
        return H.u(_) ? this[d] : this.set(f, _)
      }, S.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
      }, S.valueOf = function () {
        return this.$d.getTime()
      }, S.startOf = function (_, d) {
        const f = this; const g = !!H.u(d) || d; const y = H.p(_); const v = function (C, R) {
          const b = H.w(f.$u ? Date.UTC(f.$y, R, C) : new Date(f.$y, R, C), f)
          return g ? b : b.endOf(c)
        }; const E = function (C, R) {
          return H.w(f.toDate()[C].apply(f.toDate('s'), (g ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(R)), f)
        }; const T = this.$W; const M = this.$M; const U = this.$D; const B = `set${this.$u ? 'UTC' : ''}`
        switch (y) {
          case m:
            return g ? v(1, 0) : v(31, 11)
          case p:
            return g ? v(1, M) : v(0, M + 1)
          case l:
            var N = this.$locale().weekStart || 0; var z = (T < N ? T + 7 : T) - N
            return v(g ? U - z : U + (6 - z), M)
          case c:
          case w:
            return E(`${B}Hours`, 0)
          case u:
            return E(`${B}Minutes`, 1)
          case s:
            return E(`${B}Seconds`, 2)
          case a:
            return E(`${B}Milliseconds`, 3)
          default:
            return this.clone()
        }
      }, S.endOf = function (_) {
        return this.startOf(_, !1)
      }, S.$set = function (_, d) {
        let f; const g = H.p(_); const y = `set${this.$u ? 'UTC' : ''}`; const v = (f = {}, f[c] = `${y}Date`, f[w] = `${y}Date`, f[p] = `${y}Month`, f[m] = `${y}FullYear`, f[u] = `${y}Hours`, f[s] = `${y}Minutes`, f[a] = `${y}Seconds`, f[o] = `${y}Milliseconds`, f)[g]; const E = g === c ? this.$D + (d - this.$W) : d
        if (g === p || g === m) {
          const T = this.clone().set(w, 1)
          T.$d[v](E), T.init(), this.$d = T.set(w, Math.min(this.$D, T.daysInMonth())).$d
        } else {
          v && this.$d[v](E)
        }
        return this.init(), this
      }, S.set = function (_, d) {
        return this.clone().$set(_, d)
      }, S.get = function (_) {
        return this[H.p(_)]()
      }, S.add = function (_, d) {
        let f; const g = this
        _ = Number(_)
        const y = H.p(d); const v = function (U) {
          const B = W(g)
          return H.w(B.date(B.date() + Math.round(U * _)), g)
        }
        if (y === p)
          return this.set(p, this.$M + _)
        if (y === m)
          return this.set(m, this.$y + _)
        if (y === c)
          return v(1)
        if (y === l)
          return v(7)
        const E = (f = {}, f[s] = r, f[u] = i, f[a] = n, f)[y] || 1; const T = this.$d.getTime() + _ * E
        return H.w(T, this)
      }, S.subtract = function (_, d) {
        return this.add(-1 * _, d)
      }, S.format = function (_) {
        const d = this; const f = this.$locale()
        if (!this.isValid())
          return f.invalidDate || $
        const g = _ || 'YYYY-MM-DDTHH:mm:ssZ'; const y = H.z(this); const v = this.$H; const E = this.$m; const T = this.$M; const M = f.weekdays; const U = f.months; const B = f.meridiem; const N = function (R, b, x, O) {
          return R && (R[b] || R(d, g)) || x[b].slice(0, O)
        }; const z = function (R) {
          return H.s(v % 12 || 12, R, '0')
        }; const D = B || function (C, R, b) {
          const x = C < 12 ? 'AM' : 'PM'
          return b ? x.toLowerCase() : x
        }
        return g.replace(F, (C, R) => {
          return R || (function (b) {
            switch (b) {
              case 'YY':
                return String(d.$y).slice(-2)
              case 'YYYY':
                return H.s(d.$y, 4, '0')
              case 'M':
                return T + 1
              case 'MM':
                return H.s(T + 1, 2, '0')
              case 'MMM':
                return N(f.monthsShort, T, U, 3)
              case 'MMMM':
                return N(U, T)
              case 'D':
                return d.$D
              case 'DD':
                return H.s(d.$D, 2, '0')
              case 'd':
                return String(d.$W)
              case 'dd':
                return N(f.weekdaysMin, d.$W, M, 2)
              case 'ddd':
                return N(f.weekdaysShort, d.$W, M, 3)
              case 'dddd':
                return M[d.$W]
              case 'H':
                return String(v)
              case 'HH':
                return H.s(v, 2, '0')
              case 'h':
                return z(1)
              case 'hh':
                return z(2)
              case 'a':
                return D(v, E, !0)
              case 'A':
                return D(v, E, !1)
              case 'm':
                return String(E)
              case 'mm':
                return H.s(E, 2, '0')
              case 's':
                return String(d.$s)
              case 'ss':
                return H.s(d.$s, 2, '0')
              case 'SSS':
                return H.s(d.$ms, 3, '0')
              case 'Z':
                return y
            }
            return null
          }(C)) || y.replace(':', '')
        })
      }, S.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
      }, S.diff = function (_, d, f) {
        let g; const y = this; const v = H.p(d); const E = W(_); const T = (E.utcOffset() - this.utcOffset()) * r; const M = this - E; const U = function () {
          return H.m(y, E)
        }
        switch (v) {
          case m:
            g = U() / 12
            break
          case p:
            g = U()
            break
          case h:
            g = U() / 3
            break
          case l:
            g = (M - T) / 6048e5
            break
          case c:
            g = (M - T) / 864e5
            break
          case u:
            g = M / i
            break
          case s:
            g = M / r
            break
          case a:
            g = M / n
            break
          default:
            g = M
        }
        return f ? g : H.a(g)
      }, S.daysInMonth = function () {
        return this.endOf(p).$D
      }, S.$locale = function () {
        return X[this.$L]
      }, S.locale = function (_, d) {
        if (!_)
          return this.$L
        const f = this.clone(); const g = oe(_, d, !0)
        return g && (f.$L = g), f
      }, S.clone = function () {
        return H.w(this.$d, this)
      }, S.toDate = function () {
        return new Date(this.valueOf())
      }, S.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
      }, S.toISOString = function () {
        return this.$d.toISOString()
      }, S.toString = function () {
        return this.$d.toUTCString()
      }, k
    }()); const Ue = _e.prototype
    return W.prototype = Ue, [['$ms', o], ['$s', a], ['$m', s], ['$H', u], ['$W', c], ['$M', p], ['$y', m], ['$D', w]].forEach((k) => {
      Ue[k[1]] = function (S) {
        return this.$g(S, k[0], k[1])
      }
    }), W.extend = function (k, S) {
      return k.$i || (k(S, _e, W), k.$i = !0), W
    }, W.locale = oe, W.isDayjs = Y, W.unix = function (k) {
      return W(1e3 * k)
    }, W.en = X[ee], W.Ls = X, W.p = {}, W
  })
})(No)
const Kt = No.exports; const Os = 'fcCalendar'; const xs = he({
  name: Os,
  inheritAttrs: !1,
  props: {
    placeholder: String,
    formCreateInject: Object,
    disabled: Boolean,
    clearable: Boolean,
    type: String,
    modelValue: [String, Array],
    minDate: [String, Date],
    maxDate: [String, Date],
  },
  emits: ['update:modelValue', 'change', 'fc.el'],
  setup(e, n) {
    const r = Et(!1); const i = Pe(e, 'modelValue'); const o = Pe(e, 'formCreateInject'); const a = Et(i.value)
    He(() => {
      return i.value
    }, (w) => {
      a.value = w
    })
    const s = function ($) {
      return Kt($).format('YYYY-MM-DD')
    }; const u = function ($) {
      return Kt($).toDate()
    }; const c = at(() => {
      const w = i.value
      return Array.isArray(w) ? w.map(u) : w ? u(w) : null
    }); const l = at(() => {
      return {
        minDate: e.minDate ? Kt(e.minDate).toDate() : void 0,
        maxDate: e.maxDate ? Kt(e.maxDate).toDate() : void 0,
      }
    }); const p = function ($) {
      Array.isArray($) ? a.value = $.map(s) : $ ? a.value = s($) : a.value = $
    }; const h = function () {
      n.emit('update:modelValue', a.value), n.emit('change', a.value)
    }; const m = {
      range() {
        return a.value.length ? a.value.join(' - ') : ''
      },
      multiple() {
        return a.value.length
          ? o.value.t('selectedData', {
            length: a.value.length,
          }) || '\u9009\u62E9\u4E86 '.concat(a.value.length, ' \u4E2A\u65E5\u671F')
          : ''
      },
    }
    return {
      show: r,
      inputValue: a,
      defaultDate: c,
      dateRange: l,
      open() {
        e.disabled || (r.value = !0)
      },
      confirm($) {
        p($), r.value = !1, h()
      },
      getStrValue() {
        return a.value ? Ee(m, e.type) ? m[e.type]() : a.value || '' : ''
      },
      clear($) {
        $.stopPropagation()
        const A = Array.isArray(a.value) ? [] : ''
        p(A), h()
      },
    }
  },
  render() {
    const e = this; const n = function () {
      return e.$props.clearable && !L.empty(e.inputValue)
        ? q('i', {
            class: 'van-badge__wrapper van-icon van-icon-clear van-field__clear',
            onClick: e.clear,
          }, null)
        : void 0
    }
    return q('div', {
      class: '_fc-calendar',
    }, [q(Q('van-field'), {
      'ref': 'el',
      'placeholder': this.placeholder,
      'readonly': !0,
      'disabled': this.$props.disabled,
      'onClick': this.open,
      'model-value': this.getStrValue(),
      'isLink': !0,
      'border': !1,
    }, {
      'right-icon': n,
    }), q(Q('van-calendar'), Me(Z(Z({}, this.$attrs), this.dateRange), {
      'show': this.show,
      'onUpdate:show': function (i) {
        return e.show = i
      },
      'type': this.type,
      'onConfirm': this.confirm,
      'defaultDate': this.defaultDate,
    }), null)])
  },
  mounted() {
    this.$emit('fc.el', this.$refs.el)
  },
}); const Es = 'fcCascader'; const Cs = he({
  name: Es,
  inheritAttrs: !1,
  props: {
    placeholder: String,
    disabled: Boolean,
    clearable: Boolean,
    fieldNames: Object,
    modelValue: [String, Number],
    options: Array,
    minDate: [String, Date],
    maxDate: [String, Date],
  },
  emits: ['update:modelValue', 'fc.el', 'change'],
  setup(e, n) {
    const r = Et(!1); const i = Pe(e, 'modelValue'); const o = Pe(e, 'options'); const a = Pe(e, 'fieldNames', {}); const s = function p(h, m, w) {
      for (let $ = 0; $ < h.length; $++) {
        if (h[$][a.value.value || 'value'] === m)
          return [].concat(fe(w), [h[$]])
        if (h[$][a.value.children || 'children']) {
          const A = p(h[$][a.value.children || 'children'], m, [].concat(fe(w), [h[$]]))
          if (A)
            return A
        }
      }
    }; const u = function (h) {
      if (h == null || h === '')
        return ''
      const m = s(o.value, h, [])
      return m
        ? m.map((w) => {
            return w[a.value.text || 'text']
          }).join(' / ')
        : h
    }; const c = Et(u(i.value))
    He(() => {
      return i.value
    }, (p) => {
      c.value = u(p)
    }), He(() => {
      return o.value
    }, () => {
      i.value != null && i.value !== '' && (c.value = u(i.value))
    }, {
      deep: !0,
    })
    const l = function (h) {
      n.emit('update:modelValue', h), n.emit('change', h)
    }
    return {
      show: r,
      inputValue: c,
      options: o,
      open() {
        e.disabled || (r.value = !0)
      },
      confirm(h) {
        const m = h.selectedOptions; const w = h.value
        c.value = m.map(($) => {
          return $[a.value.text || 'text']
        }).join(' / '), r.value = !1, l(w)
      },
      clear(h) {
        h.stopPropagation(), c.value = '', l('')
      },
    }
  },
  render() {
    const e = this; const n = function () {
      return e.$props.clearable && e.inputValue
        ? q('i', {
            class: 'van-badge__wrapper van-icon van-icon-clear van-field__clear',
            onClick: e.clear,
          }, null)
        : void 0
    }
    return q('div', {
      class: '_fc-cascader',
    }, [q(Q('van-field'), {
      'ref': 'el',
      'placeholder': this.placeholder,
      'readonly': !0,
      'disabled': this.$props.disabled,
      'onClick': this.open,
      'model-value': this.inputValue,
      'border': !1,
      'isLink': !0,
    }, {
      'right-icon': n,
    }), q(Q('van-popup'), {
      'show': this.show,
      'onUpdate:show': function (i) {
        return e.show = i
      },
      'round': !0,
      'position': 'bottom',
    }, {
      default() {
        return [q(Q('van-cascader'), Me(e.$attrs, {
          modelValue: e.modelValue,
          fieldNames: e.fieldNames,
          options: e.options,
          onClose() {
            return e.show = !1
          },
          onFinish: e.confirm,
        }), null)]
      },
    })])
  },
  mounted() {
    this.$emit('fc.el', this.$refs.el)
  },
})
function ks(t) {
  return typeof t == 'function' || Object.prototype.toString.call(t) === '[object Object]' && !qr(t)
}
const As = 'fcCheckbox'; const Ds = he({
  name: As,
  inheritAttrs: !1,
  props: {
    modelValue: Array,
    options: Array,
  },
  emits: ['update:modelValue', 'change'],
  setup(e, n) {
    const r = Pe(e, 'modelValue', []); const i = Pe(e, 'options')
    return {
      options: i,
      modelValue: r,
      onInput(a) {
        n.emit('update:modelValue', a), n.emit('change', a)
      },
    }
  },
  render() {
    let e
    return q(Q('van-checkbox-group'), Me({
      direction: 'horizontal',
    }, this.$attrs, {
      'modelValue': Array.isArray(this.modelValue) ? this.modelValue : [],
      'onUpdate:modelValue': this.onInput,
    }), ks(e = (this.options || []).map((n) => {
      const r = Z({}, n); const i = n.text; const o = n.value
      return delete r.text, delete r.value, q(Q('van-checkbox'), Me({
        name: o,
        shape: 'square',
      }, r), {
        default() {
          return [i || n.label || o]
        },
      })
    }))
      ? e
      : {
          default() {
            return [e]
          },
        })
  },
}); const Rs = 'fcSelect'; const Ps = he({
  name: Rs,
  inheritAttrs: !1,
  props: {
    disabled: Boolean,
    placeholder: String,
    columnsFieldNames: Object,
    modelValue: [String, Number],
    options: Array,
  },
  emits: ['update:modelValue', 'fc.el', 'change'],
  setup(e, n) {
    const r = Et(!1); const i = Pe(e, 'modelValue'); const o = Pe(e, 'options'); const a = Pe(e, 'columnsFieldNames', {}); const s = at(() => {
      if (i.value == null || i.value === '')
        return ''
      for (let c = 0; c < (o.value || []).length; c++) {
        if (o.value[c][a.value.value || 'value'] === i.value)
          return o.value[c][a.value.text || 'text']
      }
      return i.value
    }); const u = function (l) {
      n.emit('update:modelValue', l), n.emit('change', l)
    }
    return {
      show: r,
      inputValue: s,
      options: o,
      open() {
        e.disabled || (r.value = !0)
      },
      confirm(l) {
        const p = l.selectedValues
        u(p[0]), r.value = !1
      },
    }
  },
  render() {
    const e = this
    return q('div', {
      class: '_fc-select',
    }, [q(Q('van-field'), {
      'ref': 'el',
      'placeholder': this.placeholder,
      'readonly': !0,
      'disabled': this.$props.disabled,
      'onClick': this.open,
      'model-value': this.inputValue,
      'isLink': !0,
    }, null), q(Q('van-popup'), {
      'show': this.show,
      'onUpdate:show': function (r) {
        return e.show = r
      },
      'round': !0,
      'position': 'bottom',
    }, {
      default() {
        return [q(Q('van-picker'), Me(e.$attrs, {
          modelValue: [e.modelValue],
          columnsFieldNames: e.columnsFieldNames,
          columns: e.options,
          onCancel() {
            return e.show = !1
          },
          onConfirm: e.confirm,
        }), null)]
      },
    })])
  },
  mounted() {
    this.$emit('fc.el', this.$refs.el)
  },
})
function Ft(t) {
  return Array.isArray(t) ? t : [null, void 0, ''].includes(t) ? [] : [t]
}
const Ms = 'fcUploader'
function zi(t, e) {
  return me(t) === 'object'
    ? t
    : {
        url: t,
        is_string: !0,
        name: Ts(t),
        uid: e,
      }
}
function Ui(t) {
  return Z(Z({}, t), {}, {
    file: t,
    value: t,
  })
}
function Ts(t) {
  return (`${t}`).split('/').pop()
}
const js = he({
  name: Ms,
  inheritAttrs: !1,
  props: {
    formCreateInject: Object,
    modelValue: [Array, String, Object],
    afterRead: Function,
    action: String,
    headers: Object,
    method: String,
    data: Object,
    uploadName: String,
    onSuccess: Function,
    onError: Function,
    maxCount: Number,
  },
  emits: ['update:modelValue', 'delete'],
  setup(e, n) {
    const r = Pe(e, 'afterRead'); const i = Pe(e, 'modelValue', []); const o = Et(Ft(i.value).map(zi).map(Ui))
    He(() => {
      return i.value
    }, (s) => {
      o.value = Ft(s).map(zi).map(Ui)
    })
    const a = function () {
      const u = o.value.map((c) => {
        return c.is_string ? c.url : c.value || c.url
      }).filter((c) => {
        return c !== void 0
      })
      n.emit('update:modelValue', e.maxCount === 1 ? u[0] || '' : u)
    }
    return {
      fileList: o,
      modelValue: i,
      onDelete(u) {
        a(), n.emit('delete', u)
      },
      uploadFile(u) {
        const c = this
        if (u.status = 'uploading', r.value)
          return r.value(u)
        const l = e.data || {}
        l[e.uploadName || 'file'] = u.file, e.formCreateInject.api.fetch({
          action: e.action,
          dataType: 'formData',
          source: 'upload',
          headers: e.headers || {},
          method: e.method || 'post',
          data: l,
        }).then((p) => {
          u.status = 'success', e.onSuccess && e.onSuccess(p, u), a()
        }).catch((p) => {
          u.status = 'failed', u.message = c.formCreateInject.t('uploadFail') || '\u4E0A\u4F20\u5931\u8D25', e.onError && e.onError(p, u)
        })
      },
    }
  },
  render() {
    const e = this
    return q(Q('van-uploader'), Me(this.$attrs, {
      'model-value': this.fileList,
      'maxCount': this.maxCount,
      'onUpdate:model-value': function (r) {
        return e.fileList = r
      },
      'afterRead': this.uploadFile,
      'onDelete': this.onDelete,
    }), this.$slots)
  },
})
function Fs(t) {
  return typeof t == 'function' || Object.prototype.toString.call(t) === '[object Object]' && !qr(t)
}
const Vs = 'fcRadio'; const Is = he({
  name: Vs,
  inheritAttrs: !1,
  props: {
    modelValue: [String, Number],
    options: Array,
  },
  emits: ['update:modelValue', 'change'],
  setup(e, n) {
    const r = Pe(e, 'modelValue', []); const i = Pe(e, 'options')
    return {
      options: i,
      modelValue: r,
      onInput(a) {
        n.emit('update:modelValue', a), n.emit('change', a)
      },
    }
  },
  render() {
    let e
    return q(Q('van-radio-group'), Me({
      direction: 'horizontal',
    }, this.$attrs, {
      'modelValue': this.modelValue,
      'onUpdate:modelValue': this.onInput,
    }), Fs(e = (this.options || []).map((n) => {
      const r = Z({}, n); const i = n.text; const o = n.value
      return delete r.text, delete r.value, q(Q('van-radio'), Me({
        name: o,
      }, r), {
        default() {
          return [i || n.label || o]
        },
      })
    }))
      ? e
      : {
          default() {
            return [e]
          },
        })
  },
}); const Ls = 'fcDatePicker'; const Bs = he({
  name: Ls,
  inheritAttrs: !1,
  props: {
    disabled: Boolean,
    clearable: Boolean,
    placeholder: String,
    modelValue: [String, Number],
    minDate: [String, Date],
    maxDate: [String, Date],
  },
  emits: ['update:modelValue', 'fc.el', 'change'],
  setup(e, n) {
    const r = Et(!1); const i = Pe(e, 'modelValue'); const o = at(() => {
      return i.value == null || i.value === '' ? [] : i.value.split('-')
    }); const a = at(() => {
      return {
        minDate: e.minDate ? Kt(e.minDate).toDate() : void 0,
        maxDate: e.maxDate ? Kt(e.maxDate).toDate() : void 0,
      }
    }); const s = function (c) {
      n.emit('update:modelValue', c), n.emit('change', c)
    }
    return {
      show: r,
      formValue: o,
      dateRange: a,
      open() {
        e.disabled || (r.value = !0)
      },
      confirm(c) {
        const l = c.selectedValues
        s(l.join('-')), r.value = !1
      },
      clear(c) {
        c.stopPropagation(), s('')
      },
    }
  },
  render() {
    const e = this; const n = function () {
      return e.$props.clearable && e.modelValue
        ? q('i', {
            class: 'van-badge__wrapper van-icon van-icon-clear van-field__clear',
            onClick: e.clear,
          }, null)
        : void 0
    }
    return q('div', {
      class: '_fc-date-picker',
    }, [q(Q('van-field'), {
      'ref': 'el',
      'placeholder': this.placeholder,
      'readonly': !0,
      'disabled': this.$props.disabled,
      'onClick': this.open,
      'model-value': this.modelValue,
      'border': !1,
      'isLink': !0,
    }, {
      'right-icon': n,
    }), q(Q('van-popup'), {
      'show': this.show,
      'onUpdate:show': function (i) {
        return e.show = i
      },
      'round': !0,
      'position': 'bottom',
    }, {
      default() {
        return [q(Q('van-date-picker'), Me({
          columnsType: ['year', 'month', 'day'],
        }, Z(Z({}, e.$attrs), e.dateRange), {
          modelValue: e.formValue,
          onConfirm: e.confirm,
          onCancel() {
            return e.show = !1
          },
        }), null)]
      },
    })])
  },
  mounted() {
    this.$emit('fc.el', this.$refs.el)
  },
}); const Ns = 'fcTimePicker'; const zs = he({
  name: Ns,
  inheritAttrs: !1,
  props: {
    disabled: Boolean,
    clearable: Boolean,
    placeholder: String,
    modelValue: [String, Number],
  },
  emits: ['update:modelValue', 'fc.el', 'change'],
  setup(e, n) {
    const r = Et(!1); const i = Pe(e, 'modelValue'); const o = at(() => {
      return i.value == null || i.value === '' ? [] : i.value.split(':')
    }); const a = function (u) {
      n.emit('update:modelValue', u), n.emit('change', u)
    }
    return {
      show: r,
      formValue: o,
      open() {
        e.disabled || (r.value = !0)
      },
      confirm(u) {
        const c = u.selectedValues
        a(c.join(':')), r.value = !1
      },
      clear(u) {
        u.stopPropagation(), a('')
      },
    }
  },
  render() {
    const e = this; const n = function () {
      return e.$props.clearable && e.modelValue
        ? q('i', {
            class: 'van-badge__wrapper van-icon van-icon-clear van-field__clear',
            onClick: e.clear,
          }, null)
        : void 0
    }
    return q('div', {
      class: '_fc-time-picker',
    }, [q(Q('van-field'), {
      'ref': 'el',
      'placeholder': this.placeholder,
      'readonly': !0,
      'disabled': this.$props.disabled,
      'onClick': this.open,
      'model-value': this.modelValue,
      'border': !1,
      'isLink': !0,
    }, {
      'right-icon': n,
    }), q(Q('van-popup'), {
      'show': this.show,
      'onUpdate:show': function (i) {
        return e.show = i
      },
      'round': !0,
      'position': 'bottom',
    }, {
      default() {
        return [q(Q('van-time-picker'), Me({
          columnsType: ['hour', 'minute'],
        }, e.$attrs, {
          modelValue: e.formValue,
          onConfirm: e.confirm,
          onCancel() {
            return e.show = !1
          },
        }), null)]
      },
    })])
  },
  mounted() {
    this.$emit('fc.el', this.$refs.el)
  },
})
function it(t, e, n) {
  t[e] = n
}
function Pt(t, e) {
  delete t[e]
}
function wn(t) {
  const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; const n = arguments.length > 2 ? arguments[2] : void 0; let r = !1
  for (const i in e) {
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      let o = e[i]
      if ((r = Array.isArray(o)) || L.Object(o)) {
        const a = t[i] === void 0
        if (r) {
          r = !1, a && it(t, i, [])
        } else if (o._clone && n !== void 0) {
          if (n) {
            o = o.getRule(), a && it(t, i, {})
          } else {
            it(t, i, o._clone())
            continue
          }
        } else {
          a && it(t, i, {})
        }
        t[i] = wn(t[i], o, n)
      } else {
        it(t, i, o), L.Undef(o) || (L.Undef(o.__json) || (t[i].__json = o.__json), L.Undef(o.__origin) || (t[i].__origin = o.__origin))
      }
    }
  }
  return n !== void 0 && Array.isArray(t)
    ? t.filter((s) => {
        return !s || !s.__ctrl
      })
    : t
}
function ht(t) {
  return wn({}, {
    value: t,
  }).value
}
const Us = Object.assign || function (t) {
  for (var e, n = 1; n < arguments.length; n++) {
    for (const r in e = arguments[n], e)
      Object.prototype.hasOwnProperty.call(e, r) && it(t, r, e[r])
  }
  return t
}
function ie() {
  return Us.apply(this, arguments)
}
function kr(t) {
  return me(t) !== 'object' || t === null ? t : Array.isArray(t) ? fe(t) : Z({}, t)
}
function kt(t, e) {
  let n = null
  return function () {
    for (var r = this, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a]
    n !== null && clearTimeout(n), n = setTimeout(() => {
      return t.call.apply(t, [r].concat(o))
    }, e)
  }
}
function qs(t) {
  return t == null ? '' : me(t) === 'object' ? JSON.stringify(t, null, 2) : String(t)
}
function Hs(t) {
  return t && me(t) === 'object' && typeof t.then == 'function'
}
function qn(t) {
  return Hs(t) ? t : Promise.resolve(t)
}
function _n(t) {
  let e = t.replace(/([A-Z])/g, '-$1').toLocaleLowerCase()
  return e.indexOf('-') === 0 && (e = e.substr(1)), e
}
function zo(t) {
  return t.replace(t[0], t[0].toLocaleUpperCase())
}
function Uo(t, e, n) {
  return '[form-create '.concat(t, ']: ').concat(e) + (n
    ? `

rule: ${JSON.stringify(n.getRule ? n.getRule() : n)}`
    : '')
}
function Hr(t, e) {
  console.error(Uo('err', t, e))
}
function Gs(t) {
  Hr(t.toString()), console.error(t)
}
const Ar = '[[FORM-CREATE-PREFIX-'; const Dr = '-FORM-CREATE-SUFFIX]]'
function bn(t, e) {
  return JSON.stringify(wn(Array.isArray(t) ? [] : {}, t, !0), (n, r) => {
    if (!(r && r._isVue === !0)) {
      if (typeof r != 'function')
        return r
      if (r.__json)
        return r.__json
      if (r.__origin && (r = r.__origin), !r.__emit)
        return Ar + r + Dr
    }
  }, e)
}
function pr(t) {
  return new Function(`return ${t}`)()
}
function yt(t, e) {
  if (t && L.String(t) && t.length > 4) {
    let n = t.trim(); let r = !1
    try {
      if (n.indexOf(Dr) > 0 && n.indexOf(Ar) === 0) {
        n = n.replace(Dr, '').replace(Ar, ''), r = !0
      } else if (n.indexOf('$FN:') === 0) {
        n = n.substring(4), r = !0
      } else if (n.indexOf('$EXEC:') === 0) {
        n = n.substring(6), r = !0
      } else if (n.indexOf('$GLOBAL:') === 0) {
        const i = n.substring(8)
        return n = function () {
          for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
            u[c] = arguments[c]
          const l = u[0].api.getGlobalEvent(i)
          if (l)
            return l.call.apply(l, [this].concat(u))
        }, n.__json = t, n.__inject = !0, n
      } else {
        if (n.indexOf('$FNX:') === 0) {
          return n = pr(`function($inject){
${n.substring(5)}
}`), n.__json = t, n.__inject = !0, n
        }
        (!e && n.indexOf('function ') === 0 && n !== 'function ' || !e && n.indexOf('function(') === 0 && n !== 'function(') && (r = !0)
      }
      if (!r)
        return t
      let o
      try {
        o = pr(n)
      } catch {
        o = pr(`function ${n}`)
      }
      return o.__json = t, o
    } catch (a) {
      Hr('\u89E3\u6790\u5931\u8D25:'.concat(n, `

err: `).concat(a))
      return
    }
  }
  return t
}
function qo(t, e) {
  return JSON.parse(t, (n, r) => {
    return L.Undef(r) || !r.indexOf ? r : yt(r, e)
  })
}
let Ys = 0
function er() {
  const t = 370 + ++Ys
  return `F${Math.random().toString(36).substr(3, 3)}${Number(''.concat(Date.now())).toString(36)}${t.toString(36)}c`
}
function Dt(t, e, n) {
  let r = t; let i
  return (e || '').split('.').forEach((o) => {
    i && ((!r[i] || me(r[i]) != 'object') && (r[i] = {}), r = r[i]), i = o
  }), r[i] = n, r
}
const Ws = 'fcGroup'; const Xs = he({
  name: Ws,
  props: {
    field: String,
    rule: Array,
    expand: Number,
    options: Object,
    button: {
      type: Boolean,
      default: !0,
    },
    max: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    modelValue: {
      type: Array,
      default() {
        return []
      },
    },
    defaultValue: Object,
    sortBtn: {
      type: Boolean,
      default: !1,
    },
    disabled: {
      type: Boolean,
      default: void 0,
    },
    title: {
      type: [String, Function],
      default: null,
    },
    type: {
      type: String,
      default: 'default',
    },
    onBeforeRemove: {
      type: Function,
      default() {
      },
    },
    onBeforeAdd: {
      type: Function,
      default() {
      },
    },
    formCreateInject: Object,
    parse: Function,
  },
  data() {
    return {
      len: 0,
      cacheRule: {},
      cacheValue: {},
      sort: [],
      form: je(this.formCreateInject.form.$form()),
    }
  },
  emits: ['update:modelValue', 'change', 'itemMounted', 'remove', 'add'],
  watch: {
    rule: {
      handler(e, n) {
        const r = this
        Object.keys(this.cacheRule).forEach((i) => {
          const o = r.cacheRule[i]
          if (o.$f) {
            const a = o.$f.formData()
            if (e === n) {
              o.$f.deferSyncValue(() => {
                wn(o.rule, e), o.$f.setValue(a)
              }, !0)
            } else {
              const s = o.$f.formData()
              o.$f.once('reloading', () => {
                o.$f.setValue(s)
              }), o.rule = ht(e)
            }
          }
        })
      },
      deep: !0,
    },
    expand(e) {
      const n = e - this.modelValue.length
      n > 0 && this.expandRule(n)
    },
    modelValue: {
      handler(e) {
        const n = this
        e = e || []
        const r = this.sort; const i = r.length; const o = i - e.length
        if (o < 0) {
          for (let a = o; a < 0; a++)
            this.addRule(e.length + a, !0)
          for (let s = 0; s < i; s++)
            this.setValue(r[s], e[s])
        } else {
          if (o > 0) {
            for (let u = 0; u < o; u++)
              this.removeRule(r[i - u - 1])
          }
          e.forEach((c, l) => {
            n.setValue(r[l], e[l])
          })
        }
      },
      deep: !0,
    },
  },
  methods: {
    _value(e) {
      return e && Ee(e, this.field) ? e[this.field] : e
    },
    cache(e, n) {
      this.cacheValue[e] = JSON.stringify(n)
    },
    input(e) {
      this.$emit('update:modelValue', e), this.$emit('change', e)
    },
    formData(e, n) {
      const r = this; const i = this.cacheRule; const o = this.sort
      if (o.filter((s) => {
        return i[s] && i[s].$f
      }).length === o.length) {
        const a = o.map((s) => {
          const u = e === s ? n : Z({}, r.cacheRule[s].$f.form); const c = r.field ? u[r.field] || null : u
          return r.cache(s, c), c
        })
        this.input(a)
      }
    },
    setValue(e, n) {
      const r = this.field
      r && (n = Be({}, r, this._value(n))), this.cacheValue[e] !== JSON.stringify(r ? n[r] : n) && (this.cacheRule[e].$f && this.cacheRule[e].$f.coverValue(n), this.cache(e, n))
    },
    addRule(e, n) {
      const r = this; const i = this.formCreateInject.form.copyRules(this.rule || []); const o = this.options
        ? Z({}, this.options)
        : {
            submitBtn: !1,
            resetBtn: !1,
          }
      if (this.defaultValue) {
        o.formData || (o.formData = {})
        const a = ht(this.defaultValue)
        ie(o.formData, this.field ? Be({}, this.field, a) : a)
      }
      this.parse && this.parse({
        rule: i,
        options: o,
        index: this.sort.length,
      }), this.cacheRule[++this.len] = {
        rule: i,
        options: o,
      }, this.sort = Object.keys(this.cacheRule), n && Fe(() => {
        return r.$emit('add', i, Object.keys(r.cacheRule).length - 1)
      })
    },
    add$f(e, n, r) {
      const i = this
      this.cacheRule[n].$f = r, Fe(() => {
        i.$emit('itemMounted', r, Object.keys(i.cacheRule).indexOf(n))
      })
    },
    removeRule(e, n) {
      const r = this; const i = Object.keys(this.cacheRule).indexOf(e)
      delete this.cacheRule[e], delete this.cacheValue[e], this.sort = Object.keys(this.cacheRule), n && Fe(() => {
        return r.$emit('remove', i)
      })
    },
    add(e) {
      if (!(this.disabled || this.onBeforeAdd(this.modelValue) === !1)) {
        const n = fe(this.modelValue)
        n.push(this.defaultValue ? ht(this.defaultValue) : this.field ? null : {}), this.input(n)
      }
    },
    del(e, n) {
      const r = this
      if (!this.disabled) {
        const i = function () {
          r.removeRule(n, !0)
          const a = fe(r.modelValue)
          a.splice(e, 1), r.input(a)
        }
        qn(this.onBeforeRemove(this.modelValue, e)).then((o) => {
          o !== !1 && i()
        })
      }
    },
    addIcon(e) {
      return q('div', {
        class: '_fc-m-group-btn _fc-m-group-plus-minus',
        onClick: this.add,
      }, null)
    },
    delIcon(e, n) {
      const r = this
      return q('div', {
        class: '_fc-m-group-btn _fc-m-group-plus-minus _fc-m-group-minus',
        onClick() {
          return r.del(e, n)
        },
      }, null)
    },
    sortUpIcon(e) {
      const n = this
      return q('div', {
        class: '_fc-m-group-btn _fc-m-group-arrow _fc-m-group-up',
        onClick() {
          return n.changeSort(e, -1)
        },
      }, null)
    },
    sortDownIcon(e) {
      const n = this
      return q('div', {
        class: '_fc-m-group-btn _fc-m-group-arrow _fc-m-group-down',
        onClick() {
          return n.changeSort(e, 1)
        },
      }, null)
    },
    changeSort(e, n) {
      const r = this; const i = this.sort[e]
      this.sort[e] = this.sort[e + n], this.sort[e + n] = i, this.formCreateInject.subForm(this.sort.map((o) => {
        return r.cacheRule[o].$f
      })), this.formData(0)
    },
    sortIcon(e, n) {
      const r = this; const i = e > 0; const o = e < n - 1
      if (!i && !o)
        return null
      if (i && o) {
        return q('div', {
          class: '_fc-m-group-btn _fc-m-group-sort',
        }, [q('div', {
          class: '_fc-m-group-sort-up',
          onClick() {
            return r.changeSort(e, -1)
          },
        }, null), q('div', {
          class: '_fc-m-group-sort-down',
          onClick() {
            return r.changeSort(e, 1)
          },
        }, null)])
      }
      if (i)
        return this.sortUpIcon(e)
      if (o)
        return this.sortDownIcon(e)
    },
    makeIcon(e, n, r) {
      const i = this
      if (this.$slots.button) {
        return this.$slots.button({
          total: e,
          index: n,
          vm: this,
          key: r,
          del() {
            return i.del(n, r)
          },
          add: this.add,
        })
      }
      const o = []
      if ((!this.max || e < this.max) && e === n + 1 && o.push(this.addIcon(r)), e > this.min && o.push(this.delIcon(n, r)), this.sortBtn) {
        const a = this.sortIcon(n, e)
        a && o.push(a)
      }
      return o
    },
    emitEvent(e, n, r, i) {
      this.$emit.apply(this, [e].concat(fe(n), [this.cacheRule[i].$f, r]))
    },
    expandRule(e) {
      for (let n = 0; n < e; n++)
        this.modelValue.push(this.field ? null : {})
      this.input(fe(this.modelValue))
    },
    getTitle(e, n) {
      return typeof this.title == 'function' ? this.title(e, this.modelValue[e], n) : typeof this.title == 'string' ? this.title.replace('{index}', e + 1) : !1
    },
  },
  created() {
    for (var e = (this.expand || 0) - this.modelValue.length, n = 0; n < this.modelValue.length; n++)
      this.addRule(n)
    e > 0 && this.expandRule(e)
  },
  render() {
    const e = this; const n = this.sort; const r = this.button; const i = this.form; const o = this.disabled; const a = this.type === 'card'; const s = n.length === 0
      ? this.$slots.default
        ? this.$slots.default({
            vm: this,
            add: this.add,
          })
        : q('div', {
            key: 'a_def',
            class: '_fc-m-group-plus-minus _fc-m-group-add fc-clock',
            onClick: this.add,
          }, null)
      : n.map((u, c) => {
          const l = e.cacheRule[u]; const p = l.rule; const h = l.options; const m = r && !o ? e.makeIcon(n.length, c, u) : []; const w = e.getTitle(c, u)
          return a
            ? q('div', {
                class: '_fc-m-group-container',
                key: u,
              }, [q('div', {
                class: '_fc-m-group-header',
              }, [w === !1
                ? q('div', {
                    class: '_fc-m-group-idx',
                  }, [c + 1])
                : null, w !== !1
                ? q('div', {
                    class: '_fc-m-group-title',
                  }, [w])
                : null, q('div', {
                class: '_fc-m-group-handle fc-clock',
              }, [m.length ? m : null])]), q('div', {
                class: '_fc-m-group-content',
              }, [q(i, Me({
                key: u,
              }, {
                'disabled': o,
                'onUpdate:modelValue': function (A) {
                  return e.formData(u, A)
                },
                'onEmit-event': function (A) {
                  for (var F = arguments.length, I = Array.from({ length: F > 1 ? F - 1 : 0 }), V = 1; V < F; V++)
                    I[V - 1] = arguments[V]
                  return e.emitEvent(A, I, c, u)
                },
                'onUpdate:api': function (A) {
                  return e.add$f(c, u, A)
                },
                'inFor': !0,
                'modelValue': e.field ? Be({}, e.field, e._value(e.modelValue[c])) : e.modelValue[c],
                'rule': p,
                'option': h,
                'extendOption': !0,
              }), null)])])
            : q('div', {
                class: '_fc-m-group-container',
                key: u,
              }, [q(i, Me({
                key: u,
              }, {
                'disabled': o,
                'onUpdate:modelValue': function (A) {
                  return e.formData(u, A)
                },
                'onEmit-event': function (A) {
                  for (var F = arguments.length, I = Array.from({ length: F > 1 ? F - 1 : 0 }), V = 1; V < F; V++)
                    I[V - 1] = arguments[V]
                  return e.emitEvent(A, I, c, u)
                },
                'onUpdate:api': function (A) {
                  return e.add$f(c, u, A)
                },
                'inFor': !0,
                'modelValue': e.field ? Be({}, e.field, e._value(e.modelValue[c])) : e.modelValue[c],
                'rule': p,
                'option': h,
                'extendOption': !0,
              }), null), q('div', {
                class: '_fc-m-group-idx',
              }, [c + 1]), m.length
                ? q('div', {
                    class: '_fc-m-group-handle fc-clock',
                  }, [m])
                : null])
        })
    return q('div', {
      key: 'con',
      class: `_fc-m-group ${o ? '_fc-m-group-disabled' : ''}${a ? ' _fc-m-group-card' : ''}`,
    }, [s])
  },
}); const Ho = {
  name: 'IconWarning',
}; const Ks = {
  class: 'icon',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}; const Js = /* @__PURE__ */ xe('path', {
  fill: 'currentColor',
  d: 'M512 64a448 448 0 110 896 448 448 0 010-896zm0 832a384 384 0 000-768 384 384 0 000 768zm48-176a48 48 0 11-96 0 48 48 0 0196 0zm-48-464a32 32 0 0132 32v288a32 32 0 01-64 0V288a32 32 0 0132-32z',
}, null, -1); const Zs = [Js]
function Qs(t, e, n, r, i, o) {
  return te(), de('svg', Ks, Zs)
}
Ho.render = Qs
const eu = [ls, Ho, xs, Cs, Ds, Is, Ps, Bs, zs, Xs, js]; const Go = ['props']; const Yo = ['class', 'style', 'directives']; const Wo = ['on', 'hook']; function Mt(e) {
  const n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; const r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; const i = [].concat(Go, fe(r.normal || [])); const o = [].concat(Yo, fe(r.array || [])); const a = [].concat(Wo, fe(r.functional || [])); const s = r.props || []
  return e.reduce((u, c) => {
    for (const l in c) {
      if (u[l]) {
        if (s.includes(l)) {
          u[l] = t([c[l]], u[l])
        } else if (i.includes(l)) {
          u[l] = Z(Z({}, u[l]), c[l])
        } else if (o.includes(l)) {
          const p = Array.isArray(u[l]) ? u[l] : [u[l]]; const h = Array.isArray(c[l]) ? c[l] : [c[l]]
          u[l] = [].concat(fe(p), fe(h))
        } else if (a.includes(l)) {
          for (const m in c[l]) {
            if (u[l][m]) {
              const w = Array.isArray(u[l][m]) ? u[l][m] : [u[l][m]]; const $ = Array.isArray(c[l][m]) ? c[l][m] : [c[l][m]]
              u[l][m] = [].concat(fe(w), fe($))
            } else {
              u[l][m] = c[l][m]
            }
          }
        } else if (l === 'hook') {
          for (const A in c[l])
            u[l][A] ? u[l][A] = tu(u[l][A], c[l][A]) : u[l][A] = c[l][A]
        } else {
          u[l] = c[l]
        }
      } else {
        i.includes(l) || a.includes(l) || s.includes(l) ? u[l] = Z({}, c[l]) : o.includes(l) ? u[l] = Array.isArray(c[l]) ? fe(c[l]) : me(c[l]) === 'object' ? Z({}, c[l]) : c[l] : u[l] = c[l]
      }
    }
    return u
  }, n)
} var tu = function (e, n) {
  return function () {
    e && e.apply(this, arguments), n && n.apply(this, arguments)
  }
}; const Rr = ['type', 'slot', 'ignore', 'emitPrefix', 'value', 'name', 'native', 'hidden', 'display', 'inject', 'options', 'emit', 'link', 'prefix', 'suffix', 'update', 'sync', 'optionsTo', 'key', 'slotUpdate', 'computed', 'preview', 'component', 'cache', 'modelEmit']; const Hn = ['validate', 'children', 'control']; const Gn = ['effect', 'deep', 'renderSlots']
function Xo() {
  return [].concat(Rr, fe(Go), fe(Yo), fe(Wo), Hn, Gn)
}
function dt(t) {
  const e = t.replace(/(-[a-z])/g, (n) => {
    return n.replace('-', '').toLocaleUpperCase()
  })
  return Ko(e)
}
function Ko(t) {
  return t.replace(t[0], t[0].toLowerCase())
}
function Pr(t, e) {
  return {
    value: t,
    enumerable: !1,
    configurable: !1,
    writable: !!e,
  }
}
function Jo(t, e) {
  return Zo([t], e || !1)[0]
}
function Zo(t, e) {
  return wn([], fe(t), e || !1)
}
function St(t, e) {
  return Mt(Array.isArray(e) ? e : [e], t, {
    array: Hn,
    normal: Gn,
  }), t
}
function qi(t) {
  const e = L.Function(t.getRule) ? t.getRule() : t
  return e.type || (e.type = 'input'), e
}
function nu(t, e) {
  return t
    ? (Object.keys(e || {}).forEach((n) => {
        e[n] && (t[n] = St(t[n] || {}, e[n]))
      }), t)
    : e
}
function Qo(t, e) {
  Object.defineProperties(t, Object.keys(e).reduce((n, r) => {
    return n[r] = {
      get() {
        return e[r]()
      },
    }, n
  }, {}))
}
function wt(t) {
  return t.__fc__ || (t.__origin__ ? t.__origin__.__fc__ : null)
}
function ce(t, e) {
  try {
    e = t()
  } catch (n) {
    Gs(n)
  }
  return e
}
function An() {
  const t = {}; const e = function (r) {
    return r || 'default'
  }
  return {
    setSlot(r, i) {
      r = e(r), !(!i || Array.isArray(i) && i.length) && (t[r] || (t[r] = []), t[r].push(i))
    },
    getSlot(r, i) {
      r = e(r)
      const o = []
      return (t[r] || []).forEach((a) => {
        if (Array.isArray(a)) {
          o.push.apply(o, fe(a))
        } else if (L.Function(a)) {
          const s = a.apply(void 0, fe(i || []))
          Array.isArray(s) ? o.push.apply(o, fe(s)) : o.push(s)
        } else {
          L.Undef(a) || o.push(a)
        }
      }), o
    },
    getSlots() {
      const r = this; const i = {}
      return Object.keys(t).forEach((o) => {
        i[o] = function () {
          for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
            s[u] = arguments[u]
          return r.getSlot(o, s)
        }
      }), i
    },
    slotLen(r) {
      return r = e(r), t[r] ? t[r].length : 0
    },
    mergeBag(r) {
      const i = this
      if (!r)
        return this
      const o = L.Function(r.getSlots) ? r.getSlots() : r
      return Array.isArray(r) || qr(r)
        ? this.setSlot(void 0, () => {
            return r
          })
        : Object.keys(o).forEach((a) => {
            i.setSlot(a, o[a])
          }), this
    },
  }
}
function Hi(t) {
  const e = Z({}, t.props || {})
  return Object.keys(t.on || {}).forEach((n) => {
    n.indexOf('-') > 0 && (n = dt(n))
    const r = 'on'.concat(zo(n))
    Array.isArray(e[r]) ? e[r] = [].concat(fe(e[r]), [t.on[n]]) : e[r] ? e[r] = [e[r], t.on[n]] : e[r] = t.on[n]
  }), e.key = t.key, e.ref = t.ref, e.class = t.class, e.id = t.id, e.style = t.style, e.slot && delete e.slot, e
}
function Dn(t, e) {
  return Object.setPrototypeOf(t, e), t
}
function Gi(e, n) {
  return typeof e == 'string' ? String(n) : typeof e == 'number' ? Number(n) : n
} var Tt = {
  '==': function (e, n) {
    return JSON.stringify(e) === JSON.stringify(Gi(e, n))
  },
  '!=': function (e, n) {
    return !Tt['=='](e, n)
  },
  '>': function (e, n) {
    return e > n
  },
  '>=': function (e, n) {
    return e >= n
  },
  '<': function (e, n) {
    return e < n
  },
  '<=': function (e, n) {
    return e <= n
  },
  'on': function (e, n) {
    return e && e.indexOf && e.includes(Gi(e[0], n))
  },
  'notOn': function (e, n) {
    return !Tt.on(e, n)
  },
  'in': function (e, n) {
    return n && n.indexOf && n.includes(e)
  },
  'notIn': function (e, n) {
    return !Tt.in(e, n)
  },
  'between': function (e, n) {
    return e > n[0] && e < n[1]
  },
  'notBetween': function (e, n) {
    return e < n[0] || e > n[1]
  },
  'empty': function (e) {
    return L.empty(e)
  },
  'notEmpty': function (e) {
    return !L.empty(e)
  },
  'pattern': function (e, n) {
    return new RegExp(n, 'g').test(e)
  },
}
function Xe(t, e) {
  return (Array.isArray(e) ? e : (e || '').split('.')).forEach((n) => {
    t != null && (t = t[n])
  }), t
}
function ru(t) {
  for (var e = /\{\{\s*(.*?)\s*\}\}/g, n, r = {}; (n = e.exec(t)) !== null;)
    n[1] && (r[n[1]] = !0)
  return Object.keys(r)
}
function Yi(t) {
  const e = t.split('.'); const n = []; let r = ''
  return e.forEach((i, o) => {
    o === 0 ? r = i : r += `.${i}`, n.push(r)
  }), n.join(' && ')
}
function ea(t) {
  for (var e = [], n = '', r = 0, i = 0; i < t.length; i++) {
    const o = t[i]
    o === '['
      ? (r === 0 && n && (e.push({
          type: 'key',
          value: n,
        }), n = ''), r++, n += o)
      : o === ']'
        ? (r--, n += o, r === 0 && (e.push({
            type: 'bracket',
            value: ea(n.slice(1, -1)),
          }), n = ''))
        : o === '.' && r === 0
          ? n && (e.push({
            type: 'key',
            value: n,
          }), n = '')
          : n += o
  }
  return n && e.push({
    type: 'key',
    value: n,
  }), e.map((a) => {
    return a.type === 'key'
      ? {
          key: a.value,
        }
      : {
          children: a.value,
        }
  })
}
function In(e, n) {
  if (!(!e || e === n)) {
    if (e.props.formCreateInject)
      return e.props.formCreateInject
    if (e.parent)
      return In(e.parent, n)
  }
}
function iu(t, e, n) {
  return he({
    name: `FormCreate${t.isMobile ? 'Mobile' : ''}`,
    components: e,
    directives: n,
    props: {
      rule: {
        type: Array,
        required: !0,
        default() {
          return []
        },
      },
      option: {
        type: Object,
        default() {
          return {}
        },
      },
      extendOption: Boolean,
      driver: [String, Object],
      modelValue: Object,
      disabled: {
        type: Boolean,
        default: void 0,
      },
      preview: {
        type: Boolean,
        default: void 0,
      },
      index: [String, Number],
      api: Object,
      locale: [String, Object],
      t: Function,
      name: String,
      subForm: {
        type: Boolean,
        default: !0,
      },
      inFor: Boolean,
    },
    emits: ['update:api', 'update:modelValue', 'mounted', 'submit', 'reset', 'change', 'emit-event', 'control', 'remove-rule', 'remove-field', 'sync', 'reload', 'repeat-field', 'update', 'validate-field-fail', 'validate-fail', 'created'],
    render() {
      return this.fc.render()
    },
    setup(i) {
      const o = xr()
      es('parentFC', o)
      const a = ts('parentFC', null); let s = a
      if (a) {
        for (; s.setupState.parent;)
          s = s.setupState.parent
      } else {
        s = o
      }
      const u = Ii(i); const c = u.rule; const l = u.modelValue; const p = u.subForm; const h = u.inFor; const m = ze({
        ctxInject: {},
        destroyed: !1,
        isShow: !0,
        unique: 1,
        renderRule: fe(c.value || []),
        updateValue: JSON.stringify(l.value || {}),
      }); const w = new t(o); const $ = w.api(); const A = h.value; const F = function () {
        if (a) {
          const oe = In(o, a)
          if (oe) {
            let W
            A ? (W = Ft(oe.getSubForm()), W.push($)) : W = $, oe.subForm(W)
          }
        }
      }; const I = function () {
        const oe = In(o, a)
        if (oe) {
          if (A) {
            const W = Ft(oe.getSubForm()); const H = W.indexOf($)
            H > -1 && W.splice(H, 1)
          } else {
            oe.subForm()
          }
        }
      }; let V = null
      ns(() => {
        rs(() => {
          let Y = ''; const oe = i.option && i.option.globalClass || {}
          Object.keys(oe).forEach((W) => {
            let H = ''
            oe[W].style && Object.keys(oe[W].style).forEach((_e) => {
              H += `${_n(_e)}:${oe[W].style[_e]};`
            }), oe[W].content && (H += `${oe[W].content};`), H && (Y += '.'.concat(W, '{').concat(H, '}'))
          }), i.option && i.option.style && (Y += i.option.style), V || (V = document.createElement('style'), V.type = 'text/css', document.head.appendChild(V)), V.innerHTML = Y || ''
        })
      })
      const G = kt(() => {
        w.bus.$emit('$loadData.$topForm')
      }, 100); const ee = kt(() => {
        w.bus.$emit('$loadData.$scopeForm')
      }, 100); const X = kt(() => {
        w.bus.$emit('$loadData.$form')
      }, 100); const re = function (oe) {
        w.bus.$emit(`change-$form.${oe}`)
      }
      return is(() => {
        a && ($.top.bus.$on('$loadData.$form', G), $.top.bus.$on('change', re)), $ !== $.scope && $.scope.bus.$on('$loadData.$scopeForm', ee), w.mounted()
      }), os(() => {
        a && ($.top.bus.$off('$loadData.$form', G), $.top.bus.$off('change', re)), $ !== $.scope && $.scope.bus.$off('$loadData.$scopeForm', ee), I(), m.destroyed = !0, w.unmount(), V && (V.parentNode || V.parentElement) && document.head.removeChild(V)
      }), as(() => {
        w.updated()
      }), F(), He(() => {
        return i.option
      }, () => {
        w.initOptions(), $.refresh()
      }, {
        deep: !0,
        flush: 'sync',
      }), He(() => {
        return fe(c.value)
      }, (Y) => {
        w.$handle.isBreakWatch() || Y.length === m.renderRule.length && Y.every((oe) => {
          return m.renderRule.includes(oe)
        }) || (w.$handle.updateAppendData(), w.$handle.reloadRule(c.value), o.setupState.renderRule())
      }), He(() => {
        return [i.disabled, i.preview]
      }, () => {
        $.refresh()
      }), He(l, (Y) => {
        bn(Y || {}) !== m.updateValue && ($.config.forceCoverValue ? $.coverValue(Y || {}) : $.setValue(Y || {}))
      }, {
        deep: !0,
        flush: 'post',
      }), He(() => {
        return i.index
      }, () => {
        $.coverValue({}), w.$handle.updateAppendData(), Fe(() => {
          Fe(() => {
            $.clearValidateState()
          })
        })
      }, {
        flush: 'sync',
      }), Z(Z({
        fc: je(w),
        parent: a && je(a),
        top: je(s),
        fapi: je($),
      }, Ii(m)), {}, {
        getGroupInject() {
          return In(o, a)
        },
        refresh() {
          ++m.unique
        },
        renderRule() {
          m.renderRule = fe(c.value || [])
        },
        updateValue(oe) {
          if (!m.destroyed) {
            const W = bn(oe)
            m.updateValue !== W && (m.updateValue = W, o.emit('update:modelValue', oe), Fe(() => {
              X(), a ? p.value || ee() : (G(), ee())
            }))
          }
        },
      })
    },
    created() {
      const i = xr()
      i.emit('update:api', i.setupState.fapi), i.setupState.fc.init()
    },
  })
}
function ta() {
  return {
    props: {},
    on: {},
    options: [],
    children: [],
    hidden: !1,
    display: !0,
    value: void 0,
  }
}
function tr(t, e) {
  return function (n, r, i) {
    const o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}; const a = new Gr(t, n, r, i, o)
    return e && (L.Function(e) ? e(a) : a.props(e)), a
  }
}
function Gr(t, e, n, r, i) {
  this._data = ie(ta(), {
    type: t,
    title: e,
    field: n,
    value: r,
    props: i || {},
  }), this.event = this.on
}
ie(Gr.prototype, {
  getRule() {
    return this._data
  },
  setProp(e, n) {
    return it(this._data, e, n), this
  },
  modelField(e) {
    return this._data.modelField = e, this
  },
  _clone() {
    const e = new this.constructor()
    return e._data = Jo(this._data), e
  },
})
function na(t) {
  t.forEach((e) => {
    Gr.prototype[e] = function (n) {
      return St(this._data, Be({}, e, arguments.length < 2 ? n : Be({}, n, arguments[1]))), this
    }
  })
}
na(Xo())
const ou = tr('')
function au(t, e, n) {
  const r = ou('', e)
  return r._data.type = t, r._data.title = n, r
}
function su() {
  return {
    create: au,
    factory: tr,
  }
}
function uu(t, e, n) {
  const r = 'fail to '.concat(t, ' ').concat(n.status, '\''); const i = new Error(r)
  return i.status = n.status, i.url = t, i
}
function Wi(t) {
  const e = t.responseText || t.response
  if (!e)
    return e
  try {
    return JSON.parse(e)
  } catch {
    return e
  }
}
function ra(t) {
  if (!(typeof XMLHttpRequest > 'u')) {
    const e = new XMLHttpRequest(); let n = t.action || ''
    if (e.upload && t.onProgress && e.upload.addEventListener('progress', (s) => {
      s.percent = s.total > 0 ? s.loaded / s.total * 100 : 0, t.onProgress(s)
    }), t.query) {
      const r = L.String(t.query)
        ? t.query
        : Object.keys(t.query).reduce((s, u) => {
            return s[u] = t.query[u] === null || t.query[u] === void 0 ? '' : t.query[u], s
          }, {}); const i = new URLSearchParams(r).toString()
      i && (n.includes('?') ? n += '&'.concat(i) : n += '?'.concat(i))
    }
    e.onerror = function (u) {
      t.onError(u)
    }, e.onload = function () {
      if (e.status < 200 || e.status >= 300)
        return t.onError(uu(n, t, e), Wi(e))
      t.onSuccess(Wi(e))
    }, e.open(t.method || 'get', n, !0)
    let o;
    (t.data || t.file) && (t.file || (t.dataType || '').toLowerCase() !== 'json'
      ? (o = new FormData(), Object.keys(t.data || {}).map((s) => {
          o.append(s, t.data[s])
        }))
      : (o = JSON.stringify(t.data || {}), e.setRequestHeader('content-type', 'application/json'))), t.file && o.append(t.filename, t.file, t.file.name), t.withCredentials && 'withCredentials' in e && (e.withCredentials = !0)
    const a = t.headers || {}
    Object.keys(a).forEach((s) => {
      a[s] != null && e.setRequestHeader(s, a[s])
    }), e.send(o)
  }
}
function Xi(t, e, n) {
  return new Promise((r, i) => {
    (e || ra)(Z(Z({}, t), {}, {
      onSuccess(a) {
        let s = function (l) {
          return l
        }; const u = yt(t.parse)
        L.Function(u)
          ? s = u
          : u && L.String(u) && (s = function (l) {
            return Xe(l, u)
          }), qn(s(a, t.targetRule, n)).then((c) => {
          r(c)
        })
      },
      onError(a) {
        i(a)
      },
    }))
  })
}
function sn(t) {
  return ht(t)
}
function lu(t) {
  function e(o) {
    return L.Undef(o) ? o = t.fields() : Array.isArray(o) || (o = [o]), o
  }
  function n(o, a, s) {
    L.Undef(o) ? o = Object.keys(Z(Z({}, t.fieldCtx), t.nameCtx)) : Array.isArray(o) || (o = [o]), o.forEach((u) => {
      const c = t.fieldCtx[u] || t.nameCtx[u]
      c && c.forEach((l) => {
        it(l.rule, a, s), t.$render.clearCache(l)
      })
    })
  }
  function r() {
    const o = t.subForm
    return Object.keys(o).reduce((a, s) => {
      const u = o[s]
      return u && (Array.isArray(u) ? a.push.apply(a, fe(u)) : a.push(u)), a
    }, [])
  }
  var i = {
    get isScope() {
      return t.vm.props.subForm === !1
    },
    get isPreview() {
      return t.preview
    },
    get config() {
      return t.options
    },
    set config(o) {
      t.fc.options.value = o
    },
    get options() {
      return t.options
    },
    set options(o) {
      t.fc.options.value = o
    },
    get form() {
      return t.form
    },
    get rule() {
      return t.rules
    },
    get parent() {
      return t.vm.setupState.parent && t.vm.setupState.parent.setupState.fapi
    },
    get top() {
      return i.parent ? i.parent.top : i
    },
    get scope() {
      for (let o = t.vm; o && o.setupState.fapi;) {
        if (o.props.subForm)
          o = o.setupState.parent
        else
          return o.setupState.fapi
      }
      return i.top
    },
    get children() {
      return r()
    },
    get siblings() {
      const o = t.vm.setupState.getGroupInject()
      if (o) {
        const a = o.getSubForm()
        if (Array.isArray(a))
          return fe(a)
      }
    },
    get index() {
      const o = i.siblings
      if (o) {
        const a = o.indexOf(i)
        return a > -1 ? a : void 0
      }
    },
    get formulas() {
      return Z({}, t.fc.formulas)
    },
    formData(a) {
      if (a == null || typeof a == 'boolean') {
        const s = {}
        return Object.keys(t.form).forEach((u) => {
          (a === !0 || !t.ignoreFields.includes(u)) && (s[u] = sn(t.form[u]))
        }), s
      } else {
        return e(a).reduce((u, c) => {
          return u[c] = i.getValue(c), u
        }, {})
      }
    },
    getValue(a) {
      const s = t.getFieldCtx(a)
      return s ? sn(s.rule.value) : t.options.appendValue !== !1 && Ee(t.appendData, a) ? sn(t.appendData[a]) : void 0
    },
    coverValue(a) {
      const s = Z({}, a || {})
      t.deferSyncValue(() => {
        t.appendData = {}, i.fields().forEach((u) => {
          const c = t.fieldCtx[u]
          if (c) {
            const l = Ee(a, u)
            c.forEach((p) => {
              p.rule.value = l ? a[u] : void 0
            }), delete s[u]
          }
        }), ie(t.appendData, s)
      }, !0)
    },
    setValue(a) {
      let s = a
      arguments.length >= 2 && (s = Be({}, a, arguments[1])), t.deferSyncValue(() => {
        Object.keys(s).forEach((u) => {
          const c = t.fieldCtx[u]
          if (!c)
            return t.appendData[u] = s[u]
          c.forEach((l) => {
            l.rule.value = s[u]
          })
        })
      }, !0)
    },
    removeField(a) {
      const s = t.getCtx(a)
      return t.deferSyncValue(() => {
        t.getCtxs(a).forEach((u) => {
          u.rm()
        })
      }, !0), s ? s.origin : void 0
    },
    removeRule(a) {
      const s = a && wt(a)
      if (s)
        return s.rm(), s.origin
    },
    fields() {
      return t.fields()
    },
    append(a, s, u) {
      let c = t.sort.length - 1; let l; const p = t.getCtx(s)
      if (p) {
        if (u) {
          if (l = p.getPending('children', p.rule.children), !Array.isArray(l))
            return
          c = p.rule.children.length - 1
        } else {
          c = p.root.indexOf(p.origin), l = p.root
        }
      } else {
        l = t.rules
      }
      l.splice(c + 1, 0, a)
    },
    prepend(a, s, u) {
      let c = 0; let l; const p = t.getCtx(s)
      if (p) {
        if (u) {
          if (l = p.getPending('children', p.rule.children), !Array.isArray(l))
            return
        } else {
          c = p.root.indexOf(p.origin), l = p.root
        }
      } else {
        l = t.rules
      }
      l.splice(c, 0, a)
    },
    hidden(a, s) {
      n(s, 'hidden', !!a), t.refresh()
    },
    hiddenStatus(a) {
      const s = t.getCtx(a)
      if (s)
        return !!s.rule.hidden
    },
    display(a, s) {
      n(s, 'display', !!a), t.refresh()
    },
    displayStatus(a) {
      const s = t.getCtx(a)
      if (s)
        return !!s.rule.display
    },
    disabled(a, s) {
      e(s).forEach((u) => {
        t.getCtxs(u).forEach((c) => {
          it(c.rule.props, 'disabled', !!a)
        })
      }), t.refresh()
    },
    all(a) {
      return Object.keys(t.ctxs).map((s) => {
        const u = t.ctxs[s]
        return a ? u.origin : u.rule
      })
    },
    model(a) {
      return t.fields().reduce((s, u) => {
        const c = t.fieldCtx[u][0]
        return s[u] = a ? c.origin : c.rule, s
      }, {})
    },
    component(a) {
      return Object.keys(t.nameCtx).reduce((s, u) => {
        const c = t.nameCtx[u].map((l) => {
          return a ? l.origin : l.rule
        })
        return s[u] = c.length === 1 ? c[0] : c, s
      }, {})
    },
    bind() {
      return i.form
    },
    reload(a) {
      t.reloadRule(a)
    },
    updateOptions(a) {
      t.fc.updateOptions(a), i.refresh()
    },
    onSubmit(a) {
      i.updateOptions({
        onSubmit: a,
      })
    },
    sync(a) {
      if (Array.isArray(a)) {
        a.forEach((u) => {
          return i.sync(u)
        })
        return
      }
      let s = L.Object(a) ? wt(a) : t.getCtxs(a)
      !s || (s = Array.isArray(s) ? s : [s], s.forEach((u) => {
        if (!u.deleted) {
          const c = t.subForm[u.id]
          c && (Array.isArray(c)
            ? c.forEach((l) => {
                l.refresh()
              })
            : c && c.refresh()), t.$render.clearCache(u)
        }
      }), t.refresh())
    },
    refresh() {
      r().forEach((a) => {
        a.refresh()
      }), t.$render.clearCacheAll(), t.refresh()
    },
    refreshOptions() {
      t.$manager.updateOptions(t.options), i.refresh()
    },
    hideForm(a) {
      t.vm.setupState.isShow = !a
    },
    changeStatus() {
      return t.changeStatus
    },
    clearChangeStatus() {
      t.changeStatus = !1
    },
    updateRule(a, s) {
      t.getCtxs(a).forEach((u) => {
        ie(u.rule, s)
      })
    },
    updateRules(a) {
      Object.keys(a).forEach((s) => {
        i.updateRule(s, a[s])
      })
    },
    mergeRule(a, s) {
      t.getCtxs(a).forEach((u) => {
        St(u.rule, s)
      })
    },
    mergeRules(a) {
      Object.keys(a).forEach((s) => {
        i.mergeRule(s, a[s])
      })
    },
    getRule(a, s) {
      const u = t.getCtx(a)
      if (u)
        return s ? u.origin : u.rule
    },
    findType(a, s) {
      let u = void 0
      return Object.keys(t.ctxs).forEach((c) => {
        const l = t.ctxs[c]
        l.rule.type === a && (u = s ? l.origin : l.rule)
      }), u
    },
    findTypes(a, s) {
      const u = []
      return Object.keys(t.ctxs).forEach((c) => {
        const l = t.ctxs[c]
        l.rule.type === a && u.push(s ? l.origin : l.rule)
      }), u
    },
    getRenderRule(a) {
      const s = t.getCtx(a)
      if (s)
        return s.prop
    },
    getRefRule(a) {
      const s = t.getCtxs(a)
      if (s) {
        const u = s.map((c) => {
          return c.rule
        })
        return u.length === 1 ? u[0] : u
      }
    },
    setEffect(a, s, u) {
      const c = t.getCtx(a)
      c && s && (s[0] === '$' && (s = s.substr(1)), Ee(c.rule, `$${s}`) && it(c.rule, `$${s}`, u), Ee(c.rule, 'effect') || (c.rule.effect = {}), it(c.rule.effect, s, u))
    },
    clearEffectData(a, s) {
      const u = t.getCtx(a)
      u && (s && s[0] === '$' && (s = s.substr(1)), u.clearEffectData(s), i.sync(a))
    },
    updateValidate(a, s, u) {
      u
        ? i.mergeRule(a, {
            validate: s,
          })
        : n(a, 'validate', s)
    },
    updateValidates(a, s) {
      Object.keys(a).forEach((u) => {
        i.updateValidate(u, a[u], s)
      })
    },
    refreshValidate() {
      i.refresh()
    },
    resetFields(a) {
      e(a).forEach((s) => {
        t.getCtxs(s).forEach((u) => {
          t.$render.clearCache(u), u.rule.value = sn(u.defaultValue)
        })
      }), Fe(() => {
        Fe(() => {
          Fe(() => {
            i.clearValidateState(a)
          })
        })
      }), a == null && (L.Function(t.options.onReset) && ce(() => {
        return t.options.onReset(i)
      }), t.vm.emit('reset', i))
    },
    method(a, s) {
      const u = i.el(a)
      if (!u || !u[s])
        throw new Error(Uo('err', ''.concat(s, ' \u65B9\u6CD5\u4E0D\u5B58\u5728')))
      return function () {
        return u[s].apply(u, arguments)
      }
    },
    exec(a, s) {
      for (var u = arguments.length, c = Array.from({ length: u > 2 ? u - 2 : 0 }), l = 2; l < u; l++)
        c[l - 2] = arguments[l]
      return ce(() => {
        return i.method(a, s).apply(void 0, c)
      })
    },
    toJson(a) {
      return bn(i.rule, a)
    },
    trigger(a, s) {
      for (var u = i.el(a), c = arguments.length, l = Array.from({ length: c > 2 ? c - 2 : 0 }), p = 2; p < c; p++)
        l[p - 2] = arguments[p]
      u && u.$emit.apply(u, [s].concat(l))
    },
    el(a) {
      const s = t.getCtx(a)
      if (s)
        return s.el || t.vm.refs[s.ref]
    },
    closeModal(a) {
      t.bus.$emit(`fc:closeModal:${a}`)
    },
    getSubForm(a) {
      const s = t.getCtx(a)
      return s ? t.subForm[s.id] : void 0
    },
    getChildrenRuleList(a) {
      const s = me(a) === 'object'; const u = s ? wt(a) : t.getCtx(a); const c = u ? u.rule : s ? a : i.getRule(a)
      if (!c)
        return []
      const l = []; const p = function (m) {
        m && m.forEach((w) => {
          me(w) === 'object' && (w.field && l.push(w), l.push.apply(l, fe(i.getChildrenRuleList(w))))
        })
      }
      return p(u ? u.loadChildrenPending() : c.children), l
    },
    getParentRule(a) {
      const s = me(a) === 'object'; const u = s ? wt(a) : t.getCtx(a)
      return u.parent.rule
    },
    getParentSubRule(a) {
      const s = me(a) === 'object'; const u = s ? wt(a) : t.getCtx(a)
      if (u) {
        const c = u.getParentGroup()
        if (c)
          return c.rule
      }
    },
    getChildrenFormData(a, s) {
      const u = i.getChildrenRuleList(a)
      return u.reduce((c, l) => {
        return (l.ignore !== !0 || s === !0) && (c[l.field] = sn(l.value)), c
      }, {})
    },
    setChildrenFormData(a, s, u) {
      const c = i.getChildrenRuleList(a)
      t.deferSyncValue(() => {
        c.forEach((l) => {
          Ee(s, l.field) ? l.value = s[l.field] : u && (l.value = void 0)
        })
      })
    },
    getGlobalEvent(a) {
      let s = i.options.globalEvent[a]
      if (s)
        return me(s) === 'object' && (s = s.handle), yt(s)
    },
    getGlobalData(a) {
      return new Promise((s, u) => {
        const c = i.options.globalData[a]
        c
          ? c.type === 'fetch'
            ? i.fetch(c).then((l) => {
                s(l)
              }).catch(u)
            : s(c.data)
          : s(t.fc.loadData[a])
      })
    },
    setGlobalData(a, s) {
      i.setData(`$globalData.${a}`, s)
    },
    setGlobalVar(a, s) {
      i.setData(`$var.${a}`, s)
    },
    renderRule(a, s, u) {
      const c = me(a) === 'object'; const l = c ? wt(a) : t.getCtx(a)
      return l ? t.$render.createRuleVnode(l, s, u) : void 0
    },
    renderChildren(a, s, u) {
      const c = me(a) === 'object'; const l = c ? wt(a) : t.getCtx(a)
      return l ? t.$render.createChildrenVnodes(l, s, u) : void 0
    },
    nextTick(a) {
      t.bus.$once('next-tick', a), t.refresh()
    },
    nextRefresh(a) {
      t.nextRefresh(), a && ce(a)
    },
    deferSyncValue(a, s) {
      t.deferSyncValue(a, s)
    },
    emit(a) {
      for (var s, u = arguments.length, c = Array.from({ length: u > 1 ? u - 1 : 0 }), l = 1; l < u; l++)
        c[l - 1] = arguments[l];
      (s = t.vm).emit.apply(s, [a].concat(c))
    },
    bus: t.bus,
    getCurrentFormRule() {
      let a
      return (a = t.vm.setupState.getGroupInject()) === null || a === void 0 ? void 0 : a.rule
    },
    fetch(a) {
      return new Promise((s, u) => {
        a = ht(a), a = t.loadFetchVar(a), t.beforeFetch(a).then(() => {
          return Xi(a, t.fc.create.fetch, i).then((c) => {
            ce(() => {
              return a.onSuccess && a.onSuccess(c)
            }), s(c)
          }).catch((c) => {
            ce(() => {
              return a.onError && a.onError(c)
            }), u(c)
          })
        }).catch((c) => {
        })
      })
    },
    watchFetch(a, s, u, c) {
      return t.fc.watchLoadData((l, p) => {
        let h = ht(a)
        h = t.loadFetchVar(h, l), !(c && c(h, p) === !1) && t.beforeFetch(h).then(() => {
          return Xi(h, t.fc.create.fetch, i).then((m) => {
            ce(() => {
              return h.onSuccess && h.onSuccess(m)
            }), s && s(m, p)
          }).catch((m) => {
            ce(() => {
              return h.onError && h.onError(m)
            }), u && u(m)
          })
        }).catch((m) => {
        })
      }, a.wait == null ? 1e3 : a.wait)
    },
    getData(a, s) {
      return t.fc.get ? t.fc.get(a, s) : t.fc.getLoadData(a, s)
    },
    watchData(a) {
      return t.fc.watchLoadData((s, u) => {
        ce(() => {
          return a(s, u)
        })
      })
    },
    setData(a, s, u) {
      return t.fc.setData(a, s, u)
    },
    refreshData(a) {
      return t.fc.refreshData(a)
    },
    t(a, s) {
      return t.fc.t(a, s)
    },
    getLocale() {
      return t.fc.getLocale()
    },
    helper: {
      tidyFields: e,
      props: n,
    },
  }
  return ['on', 'once', 'off'].forEach((o) => {
    i[o] = function () {
      let a;
      (a = t.bus)['$'.concat(o)].apply(a, arguments)
    }
  }), i.changeValue = i.changeField = i.setValue, i
}
function cu(t) {
  ie(t.prototype, {
    initCache() {
      this.clearCacheAll()
    },
    clearCache(n) {
      if (!n.rule.cache) {
        if (!this.cache[n.id]) {
          n.parent && this.clearCache(n.parent)
          return
        }
        (this.cache[n.id].use === !0 || this.cache[n.id].parent) && this.$handle.refresh(), this.cache[n.id].parent && this.clearCache(this.cache[n.id].parent), this.cache[n.id] = null
      }
    },
    clearCacheAll() {
      this.cache = {}
    },
    setCache(n, r, i) {
      this.cache[n.id] = {
        vnode: r,
        use: !1,
        parent: i,
        slot: n.rule.slot,
      }
    },
    getCache(n) {
      const r = this.cache[n.id]
      if (r)
        return r.use = !0, r.vnode
    },
  })
}
function fu(t) {
  ie(t.prototype, {
    initRender() {
      this.cacheConfig = {}
    },
    getTypeSlot(n) {
      const r = function i(o) {
        if (o) {
          let a = void 0
          return n.rule.field && (a = o.slots[`field-${_n(n.rule.field)}`] || o.slots[`field-${n.rule.field}`]), a || (a = o.slots[`type-${_n(n.type)}`] || o.slots[`type-${n.type}`]), a || i(o.setupState.parent)
        }
      }
      return r(this.vm)
    },
    render() {
      const n = this
      if (this.vm.setupState.isShow) {
        this.$manager.beforeRender()
        const r = An()
        return this.sort.forEach((i) => {
          n.renderSlot(r, n.$handle.ctxs[i])
        }), this.$manager.render(r)
      }
    },
    renderSlot(n, r, i) {
      if (this.isFragment(r)) {
        r.initProp(), this.mergeGlobal(r), r.initNone()
        const o = this.renderChildren(r.loadChildrenPending(), r); const a = o.default
        a && n.setSlot(r.rule.slot, () => {
          return a()
        }), delete o.default, n.mergeBag(o)
      } else {
        n.setSlot(r.rule.slot, this.renderCtx(r, i))
      }
    },
    mergeGlobal(n) {
      const r = this; const i = this.$handle.options.global
      !i || (this.cacheConfig[n.trueType] || (this.cacheConfig[n.trueType] = at(() => {
        const o = r.$handle.options.global
        return St({}, [o['*'] || o.default || {}, o[n.originType] || o[n.type] || o[n.type] || {}])
      })), n.prop = St({}, [this.cacheConfig[n.trueType].value, n.prop]))
    },
    setOptions(n) {
      const r = n.loadPending({
        key: 'options',
        origin: n.prop.options,
        def: [],
      })
      n.prop.options = r, n.prop.optionsTo && r && Dt(n.prop, n.prop.optionsTo, r)
    },
    deepSet(n) {
      const r = n.rule.deep
      r && Object.keys(r).sort((i, o) => {
        return i.length < o.length ? -1 : 1
      }).forEach((i) => {
        Dt(n.prop, i, r[i])
      })
    },
    parseSide(n, r) {
      return L.Object(n)
        ? St({
            props: {
              formCreateInject: r.prop.props.formCreateInject,
            },
          }, n)
        : n
    },
    renderSides(n, r, i) {
      const o = r[i ? 'rule' : 'prop']
      return [this.renderRule(this.parseSide(o.prefix, r)), n, this.renderRule(this.parseSide(o.suffix, r))]
    },
    renderId(n, r) {
      const i = this; const o = this.$handle[r === 'field' ? 'fieldCtx' : 'nameCtx'][n]
      return o
        ? o.map((a) => {
            return i.renderCtx(a, a.parent)
          })
        : void 0
    },
    renderCtx(n, r) {
      const i = this
      try {
        if (n.type === 'hidden')
          return
        const o = n.rule
        if (this.force || !this.cache[n.id] || this.cache[n.id].slot !== o.slot) {
          let a
          n.initProp(), this.mergeGlobal(n), n.initNone(), this.$manager.tidyRule(n), this.deepSet(n), this.setOptions(n), this.ctxProp(n)
          const s = n.prop
          s.preview = !!(s.preview != null ? s.preview : this.$handle.preview), s.props.formCreateInject = this.injectProp(n)
          const u = s.cache !== !1; const c = s.preview
          if (s.hidden) {
            this.setCache(n, void 0, r)
            return
          }
          a = function () {
            for (var p = arguments.length, h = new Array(p), m = 0; m < p; m++)
              h[m] = arguments[m]
            const w = {
              rule: o,
              prop: s,
              preview: c,
              api: i.$handle.api,
              model: s.model || {},
              slotValue: h,
            }
            h.length && o.slotUpdate && ce(() => {
              return o.slotUpdate(w)
            })
            let $ = {}; const A = n.loadChildrenPending()
            n.parser.renderChildren ? $ = n.parser.renderChildren(A, n) : n.parser.loadChildren !== !1 && ($ = i.renderChildren(A, n)), Object.keys(s.renderSlots || {}).forEach((V) => {
              $[V] = function () {
                for (var G = arguments.length, ee = new Array(G), X = 0; X < G; X++)
                  ee[X] = arguments[X]
                if (L.Function(s.renderSlots[V])) {
                  return ce(() => {
                    let Y
                    return (Y = s.renderSlots)[V].apply(Y, ee)
                  })
                }
                const re = i.parseSide(s.renderSlots[V], n)
                return i.renderRule(re)
              }
            })
            const F = i.getTypeSlot(n); let I
            return F ? (w.children = $, I = F(w)) : I = c ? n.parser.preview(kr($), n) : n.parser.render(kr($), n), I = i.renderSides(I, n), !(!n.input && L.Undef(s.native)) && s.native !== !0 && (i.fc.targetFormDriver('updateWrap', n), I = i.$manager.makeWrap(n, I)), n.none && (Array.isArray(I)
              ? I = I.map((V) => {
                return !V || !V.__v_isVNode ? V : i.none(V)
              })
              : I = i.none(I)), u && i.setCache(n, () => {
              return i.stable(I)
            }, r), I
          }, this.setCache(n, a, r)
        }
        return function () {
          const l = i.getCache(n)
          if (l)
            return l.apply(void 0, arguments)
          if (i.cache[n.id])
            return
          const p = i.renderCtx(n, n.parent)
          if (p)
            return p()
        }
      } catch (l) {
        console.error(l)
        return
      }
    },
    none(n) {
      if (n)
        return n.props.class = this.mergeClass(n.props.class, 'fc-none'), n
    },
    mergeClass(n, r) {
      if (Array.isArray(n))
        n.push(r)
      else
        return n ? [n, r] : r
      return n
    },
    stable(n) {
      const r = this; const i = Array.isArray(n) ? n : [n]
      return i.forEach((o) => {
        o && o.__v_isVNode && o.children && me(o.children) === 'object' && (o.children.$stable = !0, r.stable(o.children))
      }), n
    },
    getModelField(n) {
      return n.prop.modelField || n.parser.modelField || this.fc.modelFields[this.vNode.aliasMap[n.type]] || this.fc.modelFields[n.type] || this.fc.modelFields[n.originType] || 'modelValue'
    },
    isFragment(n) {
      return n.type === 'fragment' || n.type === 'template'
    },
    injectProp(n) {
      const r = this; const i = this.vm.setupState
      i.ctxInject[n.id] || (i.ctxInject[n.id] = {
        api: this.$handle.api,
        form: this.fc.create,
        subForm(s) {
          r.$handle.addSubForm(n, s)
        },
        getSubForm() {
          return r.$handle.subForm[n.id]
        },
        slots() {
          return r.vm.setupState.top.slots
        },
        getWrap() {
          return r.vm.refs[n.wrapRef]
        },
        options: [],
        children: [],
        preview: !1,
        id: n.id,
        field: n.field,
        rule: n.rule,
        input: n.input,
        t() {
          let s
          return (s = r.$handle.api).t.apply(s, arguments)
        },
        updateValue(s) {
          r.$handle.onUpdateValue(n, s)
        },
      })
      const o = i.ctxInject[n.id]
      return ie(o, {
        preview: n.prop.preview,
        options: n.prop.options,
        children: n.loadChildrenPending(),
      }), o
    },
    ctxProp(n) {
      const r = this; const i = n.ref; const o = n.key; const a = n.rule
      this.$manager.mergeProp(n), n.parser.mergeProp(n)
      const s = [{
        ref: i,
        key: a.key || ''.concat(o, 'fc'),
        slot: void 0,
        on: {
          'vnodeMounted': function (h) {
            h.el.__rule__ = n.rule, r.onMounted(n, h.el)
          },
          'fc.updateValue': function (h) {
            r.$handle.onUpdateValue(n, h)
          },
          'fc.el': function (h) {
            n.exportEl = h, h && ((h.$el || h).__rule__ = n.rule)
          },
        },
      }]
      if (n.input) {
        const u = this.tmpInput
        this.vm.props.disabled === !0 && (n.prop.props.disabled = !0)
        const c = this.getModelField(n); const l = {
          callback(h) {
            u && u(n.field, h, n.rule), r.onInput(n, h)
          },
          modelField: c,
          value: this.$handle.getFormData(n),
        }
        s.push({
          on: Z(Be({}, 'update:'.concat(c), l.callback), n.prop.modelEmit
            ? Be({}, n.prop.modelEmit, () => {
                return r.onEmitInput(n)
              })
            : {}),
          props: Be({}, c, l.value),
        }), n.prop.model = l
      }
      return Mt(s, n.prop), n.prop
    },
    onMounted(n, r) {
      n.el = this.vm.refs[n.ref] || r, n.parser.mounted(n), this.$handle.effect(n, 'mounted'), this.$handle.targetHook(n, 'mounted')
    },
    onInput(n, r) {
      if (n.prop.modelEmit) {
        this.$handle.onBaseInput(n, r)
        return
      }
      this.$handle.onInput(n, r)
    },
    onEmitInput(n) {
      this.$handle.setValue(n, n.parser.toValue(n.modelValue, n), n.modelValue)
    },
    renderChildren(n, r) {
      const i = this
      if (!L.trueArray(n))
        return {}
      const o = An()
      return n.map((a) => {
        if (a) {
          if (L.String(a) || L.Number(a))
            return o.setSlot(null, ''.concat(a))
          if (a.__fc__)
            return i.renderSlot(o, a.__fc__, r)
          a.type && Fe(() => {
            i.$handle.loadChildren(n, r), i.$handle.refresh()
          })
        }
      }), o.getSlots()
    },
    defaultRender(n, r) {
      const i = n.prop
      return i.component ? typeof i.component == 'string' ? this.vNode.make(i.component, i, r) : this.vNode.makeComponent(i.component, i, r) : this.vNode[n.type] ? this.vNode[n.type](i, r) : this.vNode[n.originType] ? this.vNode[n.originType](i, r) : this.vNode.make(Ko(i.type), i, r)
    },
    createChildrenVnodes(n, r, i) {
      this.force = i !== !1, this.tmpInput = r
      const o = this.renderChildren(n.rule.children, n)
      return this.force = !1, this.tmpInput = null, o
    },
    createRuleVnode(n, r, i) {
      this.force = i !== !1, this.tmpInput = r
      const o = An()
      return this.renderSlot(o, n, n.parent), this.force = !1, this.tmpInput = null, o.getSlots()
    },
    renderRule(n, r, i) {
      const o = this
      if (n) {
        if (L.String(n) || L.Number(n))
          return ''.concat(n)
        let a
        if (i) {
          a = n.type
        } else if (a = n.is, n.type) {
          a = dt(n.type)
          const s = this.vNode.aliasMap[a]
          s && (a = dt(s))
        }
        if (a) {
          const u = An()
          L.trueArray(n.children) && n.children.forEach((l) => {
            l && u.setSlot(l == null ? void 0 : l.slot, () => {
              return o.renderRule(l)
            })
          })
          const c = Z({}, n)
          return delete c.type, delete c.is, this.vNode.make(a, c, u.mergeBag(r).getSlots())
        }
      }
    },
  })
}
let du = 1
function Yr(t) {
  ie(this, {
    $handle: t,
    fc: t.fc,
    vm: t.vm,
    $manager: t.$manager,
    vNode: new t.fc.CreateNode(t),
    force: !1,
    tmpInput: null,
    id: du++,
  }), Qo(this, {
    options() {
      return t.options
    },
    sort() {
      return t.sort
    },
  }), this.initCache(), this.initRender()
}
cu(Yr)
fu(Yr)
function hu(t) {
  ie(t.prototype, {
    parseInjectEvent(n, r) {
      const i = n.inject || this.options.injectEvent
      return this.parseEventLst(n, r, i)
    },
    parseEventLst(n, r, i, o) {
      const a = this
      return Object.keys(r).forEach((s) => {
        const u = a.parseEvent(n, r[s], i, o)
        u && (r[s] = u)
      }), r
    },
    parseEvent(n, r, i, o) {
      if (L.Function(r) && (i !== !1 && !L.Undef(i) || r.__inject))
        return this.inject(n, r, i)
      if (!o && Array.isArray(r) && r[0] && (L.String(r[0]) || L.Function(r[0])))
        return this.parseEventLst(n, r, i, !0)
      if (L.String(r)) {
        const a = yt(r)
        if (a && r !== a)
          return a.__inject ? this.parseEvent(n, a, i, !0) : a
      }
    },
    parseEmit(n) {
      const r = this; const i = {}; const o = n.rule; const a = o.emitPrefix; const s = o.field; const u = o.name; const c = o.inject; const l = o.emit || []
      return L.trueArray(l) && l.forEach((p) => {
        if (p) {
          let h; let m = a || s || u
          if (L.Object(p) && (h = p.inject, p = p.name, m = p.prefix || m), m) {
            const w = _n(''.concat(m, '-').concat(p)); const $ = function () {
              let I, V, G
              r.vm.emitsOptions && (r.vm.emitsOptions[w] = null)
              for (var ee = arguments.length, X = new Array(ee), re = 0; re < ee; re++)
                X[re] = arguments[re];
              (I = r.vm).emit.apply(I, [w].concat(X)), (V = r.vm).emit.apply(V, ['emit-event', w].concat(X)), (G = r.bus).$emit.apply(G, [w].concat(X))
            }
            if ($.__emit = !0, !h && c === !1) {
              i[p] = $
            } else {
              const A = h || c || r.options.injectEvent
              i[p] = L.Undef(A) ? $ : r.inject(o, $, A)
            }
          }
        }
      }), n.computed.on = i, i
    },
    getInjectData(n, r) {
      const i = n.__fc__ && n.__fc__.$api; const o = n.__fc__ && n.__fc__.$handle.vm || this.vm; const a = o.props; const s = a.option; const u = a.rule
      return {
        $f: i || this.api,
        api: i || this.api,
        rule: u,
        self: n.__origin__,
        option: s,
        inject: r,
      }
    },
    inject(n, r, i) {
      if (r.__origin) {
        if (this.watching && !this.loading)
          return r
        r = r.__origin
      }
      const o = this; const a = function () {
        for (var u = o.getInjectData(n, i), c = arguments.length, l = new Array(c), p = 0; p < c; p++)
          l[p] = arguments[p]
        return u.args = [].concat(l), l.unshift(u), r.apply(this, l)
      }
      return a.__origin = r, a.__json = r.__json, a
    },
    loadStrVar(n, r, i) {
      const o = this
      if (n && typeof n == 'string' && n.includes('{{') && n.includes('}}')) {
        const a = n; const s = ru(n); const u = function (h) {
          let m = !1; let w
          if (i && h.indexOf('$form.') === 0) {
            const $ = h.split('.')
            $.shift(), Ee(i.value, $[0]) && (m = !0, w = r
              ? r({
                  id: `$form.${$[0]}_${i.rule.__fc__.id}`,
                  getValue() {
                    return Xe(i.value, $)
                  },
                })
              : Xe(i.value, $))
          }
          return m || (w = r ? r(h) : o.fc.getLoadData(h)), w
        }; const c = function p(h) {
          const m = []
          h.forEach(($) => {
            $.key ? m.push($.key) : $.children && m.push(p($.children))
          })
          let w = !1
          return m.forEach(($, A) => {
            $ != null && ($.indexOf('\'') === 0 || $.indexOf('"') === 0) && (m[A] = $.slice(1, -1), w = !0)
          }), m.length === 1 && (w || !isNaN(Number(m[0]))) ? m[0] : u(m.join('.'))
        }; let l
        if (s.forEach((p) => {
          const h = p.split('||'); const m = h[0].trim()
          if (m) {
            const w = (h[1] || '').trim(); const $ = ea(m); let A = ce(() => {
              return c($)
            });
            (A == null || A === '') && h.length > 1 && (A = w), l = A, n = n.replaceAll('{{'.concat(p, '}}'), A == null ? '' : A)
          }
        }), s.length === 1 && a === '{{'.concat(s[0], '}}')) {
          return l
        }
      }
      return n
    },
    loadFetchVar(n, r, i) {
      const o = this; let a
      i && i.__fc__ && (a = i.__fc__.getParentGroup())
      const s = function (c) {
        return o.loadStrVar(c, r, a
          ? {
              rule: i,
              value: o.subRuleData[a.id] || {},
            }
          : null)
      }
      return n.action = s(n.action || ''), ['headers', 'data', 'query'].forEach((u) => {
        if (n[u]) {
          const c = Array.isArray(n[u]) ? [] : {}
          Object.keys(n[u]).forEach((l) => {
            c[s(l)] = s(n[u][l])
          }), n[u] = c
        }
      }), n
    },
  })
}
const Ki = ['hook:updated', 'hook:mounted']
function pu(t) {
  ie(t.prototype, {
    usePage() {
      const n = this; const r = this.options.page
      if (r) {
        let i = 25; let o = mu(this.rules)
        L.Object(r) && (r.first && (i = Number.parseInt(r.first, 10) || i), r.limit && (o = Number.parseInt(r.limit, 10) || o)), ie(this, {
          first: i,
          limit: o,
          pageEnd: this.rules.length <= i,
        }), this.bus.$on('page-end', () => {
          return n.vm.emit('page-end', n.api)
        }), this.pageLoad()
      }
    },
    pageLoad() {
      const n = this; const r = function i() {
        n.pageEnd ? (n.bus.$off(Ki, i), n.bus.$emit('page-end')) : (n.first += n.limit, n.pageEnd = n.rules.length <= n.first, n.loadRule(), n.refresh())
      }
      this.bus.$on(Ki, r)
    },
  })
}
function mu(t) {
  return t.length < 31 ? 31 : Math.ceil(t.length / 3)
}
function gu(t) {
  ie(t.prototype, {
    clearNextTick() {
      this.nextTick && clearTimeout(this.nextTick), this.nextTick = null
    },
    bindNextTick(n) {
      const r = this
      this.clearNextTick(), this.nextTick = setTimeout(() => {
        n(), r.nextTick = null
      }, 10)
    },
    render() {
      return ++this.loadedId, this.vm.setupState.unique > 0 ? this.$render.render() : (this.vm.setupState.unique = 1, [])
    },
  })
}
function vu(t) {
  Object.defineProperties(t.origin, {
    __fc__: Pr(je(t), !0),
  }), t.rule !== t.origin && Object.defineProperties(t.rule, {
    __fc__: Pr(je(t), !0),
  })
}
function ia(t, e, n) {
  const r = er(); const i = !!e.field
  ie(this, {
    id: r,
    ref: r,
    wrapRef: `${r}fi`,
    rule: e,
    origin: e.__origin__ || e,
    name: e.name,
    pending: {},
    none: !1,
    watch: [],
    linkOn: [],
    root: [],
    ctrlRule: [],
    children: [],
    parent: null,
    group: e.subRule ? this : null,
    cacheConfig: null,
    prop: Z({}, e),
    computed: {},
    payload: {},
    refRule: {},
    input: i,
    el: void 0,
    exportEl: void 0,
    defaultValue: i ? ht(n) : void 0,
    field: e.field || void 0,
  }), this.updateKey(), vu(this), this.update(t, !0)
}
ie(ia.prototype, {
  getParentGroup() {
    for (let e = this.parent; e;) {
      if (e.group)
        return e
      e = e.parent
    }
  },
  loadChildrenPending() {
    const e = this; const n = this.rule.children || []
    return Array.isArray(n)
      ? n
      : this.loadPending({
          key: 'children',
          origin: n,
          def: [],
          onLoad(i) {
            e.$handle && e.$handle.loadChildren(i, e)
          },
          onUpdate(i, o) {
            e.$handle && (i === o ? e.$handle.loadChildren(i, e) : e.$handle.updateChildren(e, i, o))
          },
          onReload(i) {
            e.$handle ? e.$handle.updateChildren(e, [], i) : delete e.pending.children
          },
        })
  },
  loadPending(e) {
    const n = this; const r = e.key; const i = e.origin; const o = e.def; const a = e.onLoad; const s = e.onReload; const u = e.onUpdate
    if (this.pending[r] && this.pending[r].origin === i)
      return this.getPending(r, o)
    delete this.pending[r]
    let c = i
    if (L.Function(i)) {
      const l = ce(() => {
        return i({
          rule: n.rule,
          api: n.$api,
          update(h) {
            const m = h || o; const w = n.getPending(r, o)
            n.setPending(r, i, m), u && u(m, w)
          },
          reload() {
            const h = n.getPending(r, o)
            delete n.pending[r], s && s(h), n.$api && n.$api.sync(n.rule)
          },
        })
      })
      l && L.Function(l.then)
        ? (l.then((p) => {
            const h = p || o
            n.setPending(r, i, h), a && a(h), n.$api && n.$api.sync(n.rule)
          }).catch((p) => {
            console.error(p)
          }), c = o, this.setPending(r, i, c))
        : (c = l || o, this.setPending(r, i, c), a && a(c))
    }
    return c
  },
  getPending(e, n) {
    return this.pending[e] && this.pending[e].value || n
  },
  setPending(e, n, r) {
    this.pending[e] = {
      origin: n,
      value: ze(r),
    }
  },
  effectData(e) {
    return this.payload[e] || (this.payload[e] = {}), this.payload[e]
  },
  clearEffectData(e) {
    e === void 0 ? this.payload = {} : delete this.payload[e]
  },
  updateKey(e) {
    this.key = er(), e && this.parent && this.parent.updateKey(e)
  },
  updateType() {
    this.originType = this.rule.type, this.type = dt(this.rule.type), this.trueType = this.$handle.getType(this.originType)
  },
  setParser(e) {
    this.parser = e, e.init(this)
  },
  initProp() {
    const e = this; let n; let r; const i = Z({}, this.rule)
    delete i.children, delete i.validate, this.prop = St({}, [i].concat(fe(Object.keys(this.payload).map((o) => {
      return e.payload[o]
    })), [this.computed])), this.prop.validate = [].concat(fe(((n = this.refRule) === null || n === void 0 || (r = n.__$validate) === null || r === void 0 ? void 0 : r.value) || []), fe(this.prop.validate || []))
  },
  initNone() {
    this.none = !(L.Undef(this.prop.display) || !!this.prop.display)
  },
  hasHidden() {
    return !!this.rule.hidden || (this.parent ? this.parent.hasHidden() : !1)
  },
  injectValidate() {
    return this.prop.validate
  },
  check(e) {
    return this.vm === e.vm
  },
  unwatch() {
    const e = this
    this.watch.forEach((n) => {
      return n()
    }), this.watch = [], Object.keys(this.refRule).forEach((n) => {
      n.indexOf('__$') !== 0 && delete e.refRule[n]
    })
  },
  unlink() {
    this.linkOn.forEach((e) => {
      return e()
    }), this.linkOn = []
  },
  link() {
    this.unlink(), this.$handle.appendLink(this)
  },
  watchTo() {
    this.$handle.watchCtx(this)
  },
  delete() {
    this.unwatch(), this.unlink(), this.rmCtrl(), this.parent && this.parent.children.splice(this.parent.children.indexOf(this) >>> 0, 1), ie(this, {
      deleted: !0,
      computed: {},
      parent: null,
      children: [],
      cacheConfig: null,
      none: !1,
    })
  },
  rmCtrl() {
    this.ctrlRule.forEach((e) => {
      return e.__fc__ && e.__fc__.rm()
    }), this.ctrlRule = []
  },
  rm() {
    const e = this; const n = function () {
      const i = e.root.indexOf(e.origin)
      i > -1 && (e.root.splice(i, 1), e.$handle && e.$handle.refresh())
    }
    if (this.deleted) {
      n()
      return
    }
    this.$handle.noWatch(() => {
      e.$handle.deferSyncValue(() => {
        e.rmCtrl(), n(), e.$handle.rmCtx(e), ie(e, {
          root: [],
        })
      }, e.input)
    })
  },
  update(e, n) {
    ie(this, {
      deleted: !1,
      $handle: e,
      $render: e.$render,
      $api: e.api,
      vm: e.vm,
      vNode: e.$render.vNode,
      updated: !1,
      cacheValue: this.rule.value,
    }), !n && this.unwatch(), this.watchTo(), this.link(), this.updateType()
  },
})
function yu(t) {
  ie(t.prototype, {
    nextRefresh(n) {
      const r = this; const i = this.loadedId
      Fe(() => {
        i === r.loadedId && (n ? n() : r.refresh())
      })
    },
    parseRule(n) {
      const r = this; const i = qi(n)
      return Object.defineProperties(i, {
        __origin__: Pr(n, !0),
      }), _u(i), this.appendValue(i), [i, i.prefix, i.suffix].forEach((o) => {
        !o || r.loadFn(o, i)
      }), this.loadCtrl(i), i.update && (i.update = yt(i.update)), i
    },
    loadFn(n, r) {
      const i = this;
      ['on', 'props', 'deep'].forEach((o) => {
        n[o] && i.parseInjectEvent(r, n[o])
      })
    },
    loadCtrl(n) {
      n.control && n.control.forEach((r) => {
        r.handle && (r.handle = yt(r.handle))
      })
    },
    syncProp(n) {
      const r = this; const i = n.rule
      L.trueArray(i.sync) && Mt([{
        on: i.sync.reduce((o, a) => {
          return o[me(a) === 'object' && a.event || 'update:'.concat(a)] = function (s) {
            i.props[me(a) === 'object' && a.prop || a] = s, r.vm.emit('sync', a, s, i, r.fapi)
          }, o
        }, {}),
      }], n.computed)
    },
    loadRule() {
      const n = this
      this.cycleLoad = !1, this.loading = !0, this.pageEnd && this.bus.$emit('load-start'), this.deferSyncValue(() => {
        if (n._loadRule(n.rules), n.loading = !1, n.cycleLoad && n.pageEnd)
          return n.loadRule()
        n.syncForm(), n.pageEnd && n.bus.$emit('load-end'), n.vm.setupState.renderRule()
      })
    },
    loadChildren(n, r) {
      if (this.cycleLoad = !1, this.loading = !0, this.bus.$emit('load-start'), this._loadRule(n, r), this.loading = !1, this.cycleLoad)
        return this.loadRule()
      this.syncForm(), this.bus.$emit('load-end'), this.$render.clearCache(r)
    },
    _loadRule(n, r) {
      const i = this; const o = function u(c) {
        const l = n[c - 1]
        if (!l || !l.__fc__)
          return c > 0 ? u(c - 1) : -1
        const p = i.sort.indexOf(l.__fc__.id)
        return p > -1 ? p : u(c - 1)
      }; const a = function (c, l) {
        L.trueArray(c) && i._loadRule(c, l)
      }; const s = n.map((u, c) => {
        if (!(r && !L.Object(u)) && !(!i.pageEnd && !r && c >= i.first)) {
          if (u.__fc__ && u.__fc__.root === n && i.ctxs[u.__fc__.id])
            return a(u.__fc__.loadChildrenPending(), u.__fc__), u.__fc__
          const l = qi(u); const p = function () {
            return !!(l.field && i.fieldCtx[l.field] && i.fieldCtx[l.field][0] !== u.__fc__)
          }
          i.fc.targetFormDriver('loadRule', {
            rule: l,
            api: i.api,
          }, i.fc), i.ruleEffect(l, 'init', {
            repeat: p(),
          }), p() && i.vm.emit('repeat-field', u, i.api)
          let h; let m = !1; const w = !!u.__fc__; let $ = l.value
          if (w) {
            if (h = u.__fc__, $ = h.defaultValue, h.deleted) {
              if (Ji(h))
                return
              h.update(i)
            } else if (!h.check(i)) {
              if (Ji(h))
                return
              n[c] = u = u._clone ? u._clone() : qo(bn(u)), h = null, m = !0
            }
          }
          if (h) {
            h.originType !== h.rule.type && h.updateType(), i.bindParser(h), i.appendValue(h.rule), h.parent && h.parent !== r && i.rmSubRuleData(h)
          } else {
            const A = i.parseRule(u)
            h = new ia(i, A, $), i.bindParser(h)
          }
          i.parseEmit(h), i.syncProp(h), h.parent = r || null, h.root = n, i.setCtx(h), !m && !w && (i.effect(h, 'load'), i.targetHook(h, 'load')), i.effect(h, 'created')
          const F = h.loadChildrenPending()
          if (h.parser.loadChildren === !1 || a(F, h), !r) {
            const I = o(c)
            I > -1 || !c ? i.sort.splice(I + 1, 0, h.id) : i.sort.push(h.id)
          }
          const V = h.rule
          return h.updated || (h.updated = !0, L.Function(V.update) && i.bus.$once('load-end', () => {
            i.refreshUpdate(h, V.value, 'init')
          }), i.effect(h, 'loaded')), i.refreshControl(h) && (i.cycleLoad = !0), h
        }
      }).filter((u) => {
        return !!u
      })
      r && (r.children = s)
    },
    refreshControl(n) {
      return n.input && n.rule.control && this.useCtrl(n)
    },
    useCtrl(n) {
      const r = this; const i = bu(n); const o = []; const a = this.api
      if (!i.length)
        return !1
      for (let s = function (m) {
          const w = i[m]; const $ = w.handle || function (F) {
            return (Tt[w.condition || '=='] || Tt['=='])(F, w.value)
          }
          if (!L.trueArray(w.rule))
            return 'continue'
          const A = Z(Z({}, w), {}, {
            valid: ce(() => {
              return $(n.rule.value, a)
            }),
            ctrl: wu(n, w.rule),
            isHidden: L.String(w.rule[0]),
          })
          if (A.valid && A.ctrl || !A.valid && !A.ctrl && !A.isHidden)
            return 'continue'
          o.push(A)
        }, u = 0; u < i.length; u++)
        var c = s(u)
      if (!o.length)
        return !1
      const l = []; let p = !1
      return this.deferSyncValue(() => {
        o.reverse().forEach((h) => {
          const m = h.isHidden; const w = h.valid; const $ = h.rule; const A = h.prepend; const F = h.append; const I = h.child; const V = h.ctrl; const G = h.method
          if (m) {
            w
              ? n.ctrlRule.push({
                  __ctrl: !0,
                  children: $,
                  valid: w,
                })
              : V && n.ctrlRule.splice(n.ctrlRule.indexOf(V) >>> 0, 1), l[w ? 'push' : 'unshift'](() => {
              G === 'disabled' || G === 'enabled'
                ? r.api.disabled(!w, $)
                : G === 'display' || G === 'show'
                  ? r.api.display(w, $)
                  : G === 'required'
                    ? ($.forEach((re) => {
                        r.api.setEffect(re, 'required', w)
                      }), w || r.api.clearValidateState($))
                    : r.api.hidden(!w, $)
            })
            return
          }
          if (w) {
            p = !0
            const ee = {
              type: 'fragment',
              native: !0,
              __ctrl: !0,
              children: $,
            }
            n.ctrlRule.push(ee), r.bus.$once('load-start', () => {
              A ? a.prepend(ee, A, I) : F || I ? a.append(ee, F || n.id, I) : n.root.splice(n.root.indexOf(n.origin) + 1, 0, ee)
            })
          } else {
            n.ctrlRule.splice(n.ctrlRule.indexOf(V), 1)
            const X = wt(V)
            X && X.rm()
          }
        })
      }), l.length && (this.loading
        ? l.length && this.bus.$once('load-end', () => {
          l.forEach((h) => {
            return h()
          })
        })
        : l.length && Fe(() => {
          l.forEach((h) => {
            return h()
          })
        })), this.vm.emit('control', n.origin, this.api), this.effect(n, 'control'), p
    },
    reloadRule(n) {
      return this._reloadRule(n)
    },
    _reloadRule(n) {
      const r = this
      n || (n = this.rules)
      const i = Z({}, this.ctxs)
      this.clearNextTick(), this.initData(n), this.fc.rules = n, this.deferSyncValue(() => {
        r.bus.$once('load-end', () => {
          Object.keys(i).filter((o) => {
            return r.ctxs[o] === void 0
          }).forEach((o) => {
            return r.rmCtx(i[o])
          }), r.$render.clearCacheAll()
        }), r.reloading = !0, r.loadRule(), r.reloading = !1, r.refresh(), r.bus.$emit('reloading', r.api)
      }), this.bus.$off('next-tick', this.nextReload), this.bus.$once('next-tick', this.nextReload), this.bus.$emit('update', this.api)
    },
    refresh() {
      this.vm.setupState.refresh()
    },
  })
}
function _u(t) {
  const e = ta()
  return Object.keys(e).forEach((n) => {
    Ee(t, n) || (t[n] = e[n])
  }), t
}
function bu(t) {
  const e = t.rule.control || []
  return L.Object(e) ? [e] : e
}
function wu(t, e) {
  for (let n = 0; n < t.ctrlRule.length; n++) {
    const r = t.ctrlRule[n]
    if (r.children === e)
      return r
  }
}
function Ji(t) {
  return !!t.rule.__ctrl
}
function $u(t) {
  ie(t.prototype, {
    setValue(n, r, i, o) {
      const a = this
      n.deleted || (n.rule.value = r, this.changeStatus = !0, this.nextRefresh(), this.$render.clearCache(n), this.setFormData(n, i), this.syncValue(), this.valueChange(n, r), this.vm.emit('change', n.field, r, n.origin, this.api, o || !1), this.effect(n, 'value'), this.targetHook(n, 'value', {
        value: r,
      }), this.emitEvent('change', n.field, r, {
        rule: n.origin,
        api: this.api,
        setFlag: o || !1,
      }), o && Fe(() => {
        Fe(() => {
          Fe(() => {
            a.api.clearValidateState(n.id)
          })
        })
      }), this.$manager.fieldChange(n, r, i, o))
    },
    onInput(n, r) {
      let i
      n.input && (this.isQuote(n, i = n.parser.toValue(r, n)) || this.isChange(n, r)) && this.setValue(n, i, r)
    },
    onUpdateValue(n, r) {
      const i = this
      this.deferSyncValue(() => {
        const o = n.getParentGroup(); const a = o ? i.subRuleData[o.id] : null; const s = {}
        Object.keys(r || {}).forEach((u) => {
          a && Ee(a, u) ? s[u] = r[u] : Ee(i.api.form, u) ? i.api.form[u] = r[u] : i.api.top !== i.api && Ee(i.api.top.form, u) && (i.api.top.form[u] = r[u])
        }), Object.keys(s).length && i.api.setChildrenFormData(o.rule, s)
      })
    },
    onBaseInput(n, r) {
      this.setFormData(n, r), n.modelValue = r, this.nextRefresh(), this.$render.clearCache(n)
    },
    setFormData(n, r) {
      n.modelValue = r
      const i = n.getParentGroup()
      i && (this.subRuleData[i.id] || (this.subRuleData[i.id] = {}), this.subRuleData[i.id][n.field] = n.rule.value), it(this.formData, n.id, r)
    },
    rmSubRuleData(n) {
      const r = n.getParentGroup()
      r && this.subRuleData[r.id] && delete this.subRuleData[r.id][n.field]
    },
    getFormData(n) {
      return this.formData[n.id]
    },
    syncForm() {
      const n = this; const r = ze({}); const i = this.fields(); const o = []
      this.options.appendValue !== !1 && Object.keys(this.appendData).reduce((a, s) => {
        return !i.includes(s) && (a[s] = Pe(n.appendData, s)), a
      }, r), i.reduce((a, s) => {
        let u = (n.fieldCtx[s] || []).filter((c) => {
          return !n.isIgnore(c)
        })[0]
        return u || (u = n.fieldCtx[s][0], o.push(s)), a[s] = Pe(u.rule, 'value'), a
      }, r), this.form = r, this.ignoreFields = o, this.syncValue()
    },
    isIgnore(n) {
      return n.rule.ignore === !0 || (n.rule.ignore === 'hidden' || this.options.ignoreHiddenFields) && n.hasHidden()
    },
    appendValue(n) {
      (!n.field || !Ee(this.appendData, n.field)) && (!L.Undef(n.value) || !this.options.forceCoverValue) || (n.value = this.appendData[n.field], delete this.appendData[n.field])
    },
    addSubForm(n, r) {
      this.subForm[n.id] = r
    },
    deferSyncValue(n, r) {
      this.deferSyncFn || (this.deferSyncFn = n), this.deferSyncFn.sync || (this.deferSyncFn.sync = r), ce(n), this.deferSyncFn === n && (this.deferSyncFn = null, n.sync && this.syncForm())
    },
    syncValue() {
      const n = this
      if (this.deferSyncFn)
        return this.deferSyncFn.sync = !0
      const r = {}
      Object.keys(this.form).forEach((i) => {
        !n.ignoreFields.includes(i) && (r[i] = n.form[i])
      }), this.vm.setupState.updateValue(r)
    },
    isChange(n, r) {
      return JSON.stringify(this.getFormData(n), Zi) !== JSON.stringify(r, Zi)
    },
    isQuote(n, r) {
      return (typeof r === 'function' || L.Object(r) || Array.isArray(r)) && r === n.rule.value
    },
    refreshUpdate(n, r, i, o) {
      const a = this
      if (L.Function(n.rule.update)) {
        const s = ce(() => {
          return n.rule.update(r, n.origin, a.api, {
            origin: i || 'change',
            linkField: o,
          })
        })
        if (s === void 0)
          return
        n.rule.hidden = s === !0
      }
    },
    valueChange(n, r) {
      this.refreshRule(n, r), this.bus.$emit(`change-${n.field}`, r)
    },
    refreshRule(n, r, i, o) {
      this.refreshControl(n) && (this.$render.clearCacheAll(), this.loadRule(), this.bus.$emit('update', this.api), this.refresh()), this.refreshUpdate(n, r, i, o)
    },
    appendLink(n) {
      const r = this; const i = n.rule.link
      L.trueArray(i) && i.forEach((o) => {
        const a = function () {
          return r.refreshRule(n, n.rule.value, 'link', o)
        }
        r.bus.$on(`change-${o}`, a), n.linkOn.push(() => {
          return r.bus.$off(`change-${o}`, a)
        })
      })
    },
    fields() {
      return Object.keys(this.fieldCtx)
    },
  })
}
function Zi(t, e) {
  return typeof e == 'function' ? `${e}` : e
}
const Ln = {
  init(e) {
  },
  toFormValue(e, n) {
    return e
  },
  toValue(e, n) {
    return e
  },
  mounted(e) {
  },
  render(e, n) {
    return n.$handle.fc.renderDriver && n.$handle.fc.renderDriver.defaultRender ? n.$handle.fc.renderDriver.defaultRender(n, e) : n.$render.defaultRender(n, e)
  },
  preview(e, n) {
    return n.$handle.fc.renderDriver && n.$handle.fc.renderDriver.defaultPreview ? n.$handle.fc.renderDriver.defaultPreview(n, e) : this.render(e, n)
  },
  mergeProp(e) {
  },
}; const Su = ['field', 'value', 'vm', 'template', 'name', 'config', 'control', 'inject', 'sync', 'payload', 'optionsTo', 'update', 'slotUpdate', 'computed', 'component', 'cache']; const un = Symbol('oldValue')
function Ou(t) {
  ie(t.prototype, {
    getCtx(n) {
      return this.getFieldCtx(n) || this.getNameCtx(n)[0] || this.ctxs[n]
    },
    getCtxs(n) {
      return this.fieldCtx[n] || this.nameCtx[n] || (this.ctxs[n] ? [this.ctxs[n]] : [])
    },
    setIdCtx(n, r, i) {
      const o = ''.concat(i, 'Ctx')
      this[o][r] ? this[o][r].push(n) : this[o][r] = [n]
    },
    rmIdCtx(n, r, i) {
      const o = ''.concat(i, 'Ctx'); const a = this[o][r]
      if (!a)
        return !1
      const s = a.splice(a.indexOf(n) >>> 0, 1).length > 0
      return a.length || delete this[o][r], s
    },
    getFieldCtx(n) {
      return (this.fieldCtx[n] || [])[0]
    },
    getNameCtx(n) {
      return this.nameCtx[n] || []
    },
    setCtx(n) {
      const r = n.id; const i = n.field; const o = n.name; const a = n.rule
      this.ctxs[r] = n, o && this.setIdCtx(n, o, 'name'), n.input && (this.setIdCtx(n, i, 'field'), this.setFormData(n, n.parser.toFormValue(a.value, n)), this.isMounted && !this.reloading && this.vm.emit('change', n.field, a.value, n.origin, this.api))
    },
    getParser(n) {
      const r = this.fc.parsers; const i = this.fc.renderDriver
      if (i) {
        const o = i.parsers || {}; const a = o[n.originType] || o[dt(n.type)] || o[n.trueType]
        if (a)
          return a
      }
      return r[n.originType] || r[dt(n.type)] || r[n.trueType] || Ln
    },
    bindParser(n) {
      n.setParser(this.getParser(n))
    },
    getType(n) {
      const r = this.fc.CreateNode.aliasMap; const i = r[n] || r[dt(n)] || n
      return dt(i)
    },
    noWatch(n) {
      this.noWatchFn || (this.noWatchFn = n), ce(n), this.noWatchFn === n && (this.noWatchFn = null)
    },
    watchCtx(n) {
      const r = this; const i = Xo()
      if (i.filter((a) => {
        return a[0] !== '_' && a[0] !== '$' && !Su.includes(a)
      }).forEach((a) => {
        const s = Pe(n.rule, a); const u = a === 'children'
        n.refRule[a] = s, n.watch.push(He(u
          ? () => {
              return L.Function(s.value) ? s.value : fe(s.value || [])
            }
          : () => {
              return s.value
            }, (c, l) => {
          let p = s.value
          if (!r.isBreakWatch()) {
            if (u && n.parser.loadChildren === !1) {
              r.$render.clearCache(n), r.nextRefresh()
              return
            }
            if (r.watching = !0, Fe(() => {
              r.targetHook(n, 'watch', {
                key: a,
                oldValue: l,
                newValue: p,
              })
            }), a === 'hidden' && Boolean(p) !== Boolean(l) && (r.$render.clearCacheAll(), Fe(() => {
              r.targetHook(n, 'hidden', {
                value: p,
              })
            })), a === 'ignore' && n.input || a === 'hidden' && (n.rule.ignore === 'hidden' || r.options.ignoreHiddenFields)) {
              r.syncForm()
            } else if (a === 'link') {
              n.link()
              return
            } else {
              ['props', 'on', 'deep'].includes(a) ? (r.parseInjectEvent(n.rule, p || {}), a === 'props' && n.input && r.setFormData(n, n.parser.toFormValue(n.rule.value, n))) : a === 'emit' ? r.parseEmit(n) : ['prefix', 'suffix'].includes(a) ? p && r.loadFn(p, n.rule) : a === 'type' ? (n.updateType(), r.bindParser(n)) : u && (L.Function(l) && (l = n.getPending('children', [])), L.Function(p) && (p = n.loadChildrenPending()), r.updateChildren(n, p, l))
            }
            r.$render.clearCache(n), r.refresh(), r.watching = !1
          }
        }, {
          deep: !u,
          sync: u,
        }))
      }), n.refRule.__$title = at(() => {
        let a = (me(n.rule.title) === 'object' ? n.rule.title.title : n.rule.title) || ''
        if (a) {
          const s = a.match(/^\{\{\s*\$t\.(.+)\s*\}\}$/)
          s && (a = r.api.t(s[1]))
        }
        return a
      }), n.refRule.__$info = at(() => {
        let a = (me(n.rule.info) === 'object' ? n.rule.info.info : n.rule.info) || ''
        if (a) {
          const s = a.match(/^\{\{\s*\$t\.(.+)\s*\}\}$/)
          s && (a = r.api.t(s[1]))
        }
        return a
      }), n.refRule.__$validate = at(() => {
        const a = function (u) {
          const c = u.match(/^\{\{\s*\$t\.(.+)\s*\}\}$/)
          if (c) {
            let l, p
            return r.api.t(c[1], {
              title: (l = n.refRule) === null || l === void 0 || (p = l.__$title) === null || p === void 0 ? void 0 : p.value,
            })
          }
          return u
        }
        return Ft(n.rule.validate).map((s) => {
          const u = Z({}, s)
          if (u.message && (u.message = a(u.message)), L.Function(u.validator)) {
            const c = n
            u.validator = function () {
              for (var p, h = arguments.length, m = new Array(h), w = 0; w < h; w++)
                m[w] = arguments[w]
              return (p = s.validator).call.apply(p, [{
                that: this,
                id: c.id,
                field: c.field,
                rule: c.rule,
                api: c.$handle.api,
              }].concat(m))
            }
          }
          if (u.adapter) {
            if (me(u.error) === 'object') {
              const l = Z({}, u.error)
              Object.keys(l).forEach((p) => {
                l[p] = a(l[p])
              }), u.error = l
            }
            return r.adapterValidate(u, n)
          }
          return u
        })
      }), n.input) {
        const o = Pe(n.rule, 'value')
        n.watch.push(He(() => {
          return o.value
        }, () => {
          const a = n.parser.toFormValue(o.value, n)
          r.isChange(n, a) && r.setValue(n, o.value, a, !0)
        }))
      }
      this.bus.$once('load-end', () => {
        let a = n.rule.computed
        !a || (me(a) !== 'object' && (a = {
          value: a,
        }), Object.keys(a).forEach((s) => {
          const u = at(() => {
            const l = a[s]
            if (l) {
              const p = r.compute(n, l)
              return (l.linkage || l.linkageVariable) && p === un ? un : p
            }
          }); const c = function (p) {
            s === 'value' ? r.onInput(n, p) : s[0] === '$' ? r.api.setEffect(n.id, s, p) : Dt(n.rule, s, p)
          };
          (s === 'value' ? [void 0, null, ''].includes(n.rule.value) : u.value !== Xe(n.rule, s)) && c(u.value), n.watch.push(He(u, (l) => {
            l !== un && setTimeout(() => {
              c(l)
            })
          }, {
            deep: !0,
          }))
        }))
      }), this.watchEffect(n)
    },
    adapterValidate(n, r) {
      const i = this; const o = function (s, u) {
        const c = n.beforeValidate && ce(() => {
          return n.beforeValidate({
            value: s,
            api: i.api,
            validate: n,
            rule: r.rule,
          })
        })
        if (c === !1) {
          u()
        } else {
          const l = i.validator(r, s, n)
          if (l) {
            let h = ''
            me(n.error) === 'object' && (h = n.error[l] || n.error.default), !h && typeof n.message == 'string' && (h = n.message), h || (h = i.getValidateMessage(r, {
              key: l,
              rule: n[l],
            })), u(h)
          } else if (n.validator) {
            const p = n.validator && ce(() => {
              return n.validator(s, u)
            })
            p && L.Function(p.then) && p.then(() => {
              return u()
            }).catch((m) => {
              return u(m)
            })
          } else {
            u()
          }
        }
      }
      return this.$manager.adapterValidate({
        required: n.required,
        message: n.message,
        trigger: n.trigger,
      }, o)
    },
    getValidateMessage(n, r) {
      let i; let o; let a; const s = Array.isArray(r.rule) ? r.rule.join(',') : `${r.rule}`
      return this.api.t(r.key === 'required' ? r.key : `validate.${r.key}`, (a = {}, Be(a, r.key, s), Be(a, 'title', (i = n.refRule) === null || i === void 0 || (o = i.__$title) === null || o === void 0 ? void 0 : o.value), a))
    },
    validator(n, r, i) {
      const o = this; const a = L.empty(r)
      if (a)
        return i.required ? 'required' : void 0
      for (var s = function () {
          const h = gs(c[u], 2); const m = h[0]; const w = h[1]
          switch (m) {
            case 'len':
            case 'maxLen':
            case 'minLen':
              var $ = function (re) {
                return m === 'len' ? re === w : m === 'maxLen' ? re <= w : re >= w
              }
              if (Array.isArray(r)) {
                if (!$(r.length)) {
                  return {
                    v: m,
                  }
                }
              } else {
                if (me(r) === 'object') {
                  return {
                    v: m,
                  }
                }
                if (!$((`${r}`).length)) {
                  return {
                    v: m,
                  }
                }
              }
              break
            case 'pattern':
              var A = typeof w == 'string' ? new RegExp(w) : w
              if (!A.test(`${r}`)) {
                return {
                  v: m,
                }
              }
              break
            case 'uppercase':
              if (w && (typeof r != 'string' || !/^[A-Z]*$/.test(r))) {
                return {
                  v: m,
                }
              }
              break
            case 'lowercase':
              if (w && (typeof r != 'string' || !/^[a-z]*$/.test(r))) {
                return {
                  v: m,
                }
              }
              break
            case 'min':
            case 'max':
            case 'positive':
            case 'negative':
            case 'integer':
            case 'number':
              var F = Number(r)
              if (Number.isNaN(F)) {
                return {
                  v: m,
                }
              }
              if (m === 'min' && F < w) {
                return {
                  v: m,
                }
              }
              if (m === 'max' && F > w) {
                return {
                  v: m,
                }
              }
              if (m === 'positive' && F <= 0) {
                return {
                  v: m,
                }
              }
              if (m === 'negative' && F >= 0) {
                return {
                  v: m,
                }
              }
              if (m === 'integer' && !Number.isInteger(F)) {
                return {
                  v: m,
                }
              }
              break
            case 'equal':
              if (r !== w) {
                return {
                  v: m,
                }
              }
              break
            case 'enum':
              if (Array.isArray(w) && !w.includes(r)) {
                return {
                  v: m,
                }
              }
              break
            case 'hasKeys':
              if (me(r) !== 'object' || Array.isArray(w) && w.some((X) => {
                return !(X in r)
              })) {
                return {
                  v: m,
                }
              }
              break
            case 'email':
              var I = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i
              if (!I.test(`${r}`)) {
                return {
                  v: m,
                }
              }
              break
            case 'url':
              var V = new RegExp('^(?!mailto:)(?:http|https|ftp)://(?:\\S+@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}\\.(?:\\d\\d?|1\\d\\d|2[0-4]\\d|25[0-4])|(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9](?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9])*\\.[a-z\\u00a1-\\uffff]{2,}|localhost)(?::\\d{2,5})?(?:([/?#])\\S*)?$', 'i')
              if (!V.test(`${r}`)) {
                return {
                  v: m,
                }
              }
              break
            case 'ip':
              var G = /^(2(5[0-5]|[0-4]\d)|[01]?\d{1,2})(\.(2(5[0-5]|[0-4]\d)|[01]?\d{1,2})){3}$/
              if (!G.test(`${r}`)) {
                return {
                  v: m,
                }
              }
              break
            case 'phone':
              var ee = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
              if (!ee.test(`${r}`)) {
                return {
                  v: m,
                }
              }
              break
            case 'computed':
              if (!o.compute(n, w)) {
                return {
                  v: m,
                }
              }
              break
          }
        }, u = 0, c = Object.entries(i); u < c.length; u++) {
        const l = s()
        if (me(l) === 'object')
          return l.v
      }
    },
    compute(n, r) {
      const i = this; let o
      if (me(r) === 'object') {
        const a = n.getParentGroup(); const s = function l(p) {
          if (p = Array.isArray(p)
            ? {
                mode: 'AND',
                group: p,
              }
            : p, !L.trueArray(p.group)) {
            return !0
          }
          for (var h = p.mode === 'OR', m = !0, w = function (I) {
              const V = p.group[I]; let G = void 0; let ee = null; let X = null
              if (V.variable) {
                X = i.fc.getLoadData(V.variable)
              } else if (V.field) {
                ee = Yi(V.field || '')
              } else if (!V.mode) {
                return {
                  v: !0,
                }
              }
              let re = V.compare
              if (re && (re = Yi(re || '')), V.mode
                ? G = l(V)
                : Tt[V.condition]
                  ? L.Function(V.handler)
                    ? G = ce(() => {
                      return V.handler(i.api, n.rule)
                    })
                    : G = ce(() => {
                      return new Function('$condition', '$variableVal', '$val', '$form', '$scope', '$group', '$rule', 'with($form){with($scope){with(this){with($group){ return $condition[\''.concat(V.condition, '\'](').concat(V.variable ? '$variableVal' : ee, ', ').concat(re || '$val', '); }}}}')).call(i.api.form, Tt, X, V.value, i.api.top.form, i.api.top === i.api.scope ? {} : i.api.scope.form, a ? i.subRuleData[a.id] || {} : {}, n.rule)
                    })
                  : G = !1, h && G) {
                return {
                  v: !0,
                }
              }
              h || (m = m && G)
            }, $ = 0; $ < p.group.length; $++) {
            const A = w($)
            if (me(A) === 'object')
              return A.v
          }
          return h ? !1 : m
        }; let u = s(r)
        return u = r.invert === !0 ? !u : u, r.linkage
          ? u
            ? ce(() => {
                return i.computeValue(r.linkage, n, a)
              }, void 0)
            : un
          : r.linkageVariable
            ? u
              ? ce(() => {
                  return i.fc.getLoadData(r.linkageVariable)
                }, void 0)
              : un
            : u
      } else if (L.Function(r)) {
        o = function () {
          return r(i.api.form, i.api, n.rule)
        }
      } else {
        const c = n.getParentGroup()
        o = function () {
          return i.computeValue(r, n, c)
        }
      }
      return ce(o, void 0)
    },
    computeValue(n, r, i) {
      const o = this; const a = this; const s = Object.keys(this.fc.formulas).reduce((u, c) => {
        return u[c] = function () {
          for (var l, p = arguments.length, h = new Array(p), m = 0; m < p; m++)
            h[m] = arguments[m]
          return (l = a.fc.formulas[c]).call.apply(l, [{
            that: this,
            rule: r.rule,
            api: a.api,
            fc: a.fc,
          }].concat(h))
        }, u
      }, {})
      return ce(() => {
        return new Function('$formulas', '$form', '$scope', '$group', '$rule', '$api', 'with($form){with($scope){with(this){with($group){with($formulas){ return '.concat(n, ' }}}}}')).call(o.api.form, s, o.api.top.form, o.api.top === o.api.scope ? {} : o.api.scope.form, i ? o.subRuleData[i.id] || {} : {}, r.rule, o.api)
      }, void 0)
    },
    updateChildren(n, r, i) {
      const o = this
      this.deferSyncValue(() => {
        i && i.forEach((a) => {
          !(r || []).includes(a) && a && !L.String(a) && a.__fc__ && a.__fc__.parent === n && o.rmCtx(a.__fc__)
        }), L.trueArray(r) && (o.loadChildren(r, n), o.bus.$emit('update', o.api))
      })
    },
    rmSub(n) {
      const r = this
      L.trueArray(n) && n.forEach((i) => {
        i && i.__fc__ && r.rmCtx(i.__fc__)
      })
    },
    rmCtx(n) {
      const r = this
      if (!n.deleted) {
        const i = n.id; const o = n.field; const a = n.input; const s = n.name
        Pt(this.ctxs, i), Pt(this.formData, i), Pt(this.subForm, i), Pt(this.vm.setupState.ctxInject, i)
        const u = n.getParentGroup()
        u && this.subRuleData[u.id] && Pt(this.subRuleData[u.id], o), n.group && Pt(this.subRuleData, i), a && this.rmIdCtx(n, o, 'field'), s && this.rmIdCtx(n, s, 'name'), a && !Ee(this.fieldCtx, o) && Pt(this.form, o), this.deferSyncValue(() => {
          if (!r.reloading) {
            if (n.parser.loadChildren !== !1) {
              const l = n.getPending('children', n.rule.children)
              L.trueArray(l) && l.forEach((p) => {
                return p && p.__fc__ && r.rmCtx(p.__fc__)
              })
            }
            n.root === r.rules && r.vm.setupState.renderRule()
          }
        }, a)
        const c = this.sort.indexOf(i)
        return c > -1 && this.sort.splice(c, 1), this.$render.clearCache(n), n.delete(), this.effect(n, 'deleted'), this.targetHook(n, 'deleted'), a && !this.fieldCtx[o] && this.vm.emit('remove-field', o, n.rule, this.api), n.rule.__ctrl || this.vm.emit('remove-rule', n.rule, this.api), n
      }
    },
  })
}
function xu(t) {
  ie(t.prototype, {
    mounted() {
      const n = this; const r = function () {
        n.isMounted = !0, n.lifecycle('mounted')
      }
      this.pageEnd ? r() : this.bus.$once('page-end', r)
    },
    lifecycle(n) {
      this.fc.targetFormDriver(n, this.api, this.fc), this.vm.emit(n, this.api), this.emitEvent(n, this.api)
    },
    emitEvent(n) {
      for (var r, i = arguments.length, o = Array.from({ length: i > 1 ? i - 1 : 0 }), a = 1; a < i; a++)
        o[a - 1] = arguments[a]
      const s = this.options[n] || this.options[dt(`on-${n}`)]
      if (s) {
        const u = yt(s)
        L.Function(u) && ce(() => {
          return u.apply(void 0, o)
        })
      }
      (r = this.bus).$emit.apply(r, [n].concat(o))
    },
    targetHook(n, r, i) {
      let o; let a; const s = this; const u = (o = n.prop) === null || o === void 0 || (a = o.hook) === null || a === void 0 ? void 0 : a[r]; const c = function (A, F) {
        A && (A = Array.isArray(A) ? A : [A], A.forEach((I) => {
          ce(() => {
            return I(Z(Z({}, i || {}), {}, {
              self: n.rule,
              rule: n.rule,
              parent: F == null ? void 0 : F.rule,
              $f: s.api,
              api: s.api,
              option: s.vm.props.option,
            }))
          })
        }))
      }
      c(u)
      for (let l = `deep${zo(r)}`, p = n.parent; p;) {
        var h; var m; const w = (h = p.prop) === null || h === void 0 || (m = h.hook) === null || m === void 0 ? void 0 : m[l]
        c(w, p), p = p.parent
      }
    },
  })
}
function Eu(t) {
  ie(t.prototype, {
    useProvider() {
      const n = this; const r = this.fc.providers
      Object.keys(r).forEach((i) => {
        let o = r[i]
        L.Function(o) && (o = o(n.fc)), o._c = ku(o), n.onEffect(o, i), n.providers[i] = o
      })
    },
    onEffect(n, r) {
      const i = this; const o = [];
      (n._c || ['*']).forEach((a) => {
        const s = a === '*' ? '*' : i.getType(a)
        o.includes(s) || (o.push(s), i.bus.$on('p:'.concat(r || n.name, ':').concat(s, ':').concat(n.input ? 1 : 0), (u, c) => {
          n[u] && n[u].apply(n, fe(c))
        }))
      }), n._used = o
    },
    watchEffect(n) {
      const r = this; const i = {
        required() {
          let a, s
          return (Ee(n.rule, '$required') ? n.rule.$required : (a = n.rule) === null || a === void 0 || (s = a.effect) === null || s === void 0 ? void 0 : s.required) || !1
        },
      }
      Object.keys(n.rule.effect || {}).forEach((o) => {
        i[o] = function () {
          return n.rule.effect[o]
        }
      }), Object.keys(n.rule).forEach((o) => {
        o[0] === '$' && (i[o.substr(1)] = function () {
          return n.rule[o]
        })
      }), Object.keys(i).forEach((o) => {
        n.watch.push(He(i[o], (a) => {
          r.effect(n, 'watch', Be({}, o, a))
        }, {
          deep: !0,
        }))
      })
    },
    ruleEffect(n, r, i) {
      this.emitEffect({
        rule: n,
        input: !!n.field,
        type: this.getType(n.type),
      }, r, i)
    },
    effect(n, r, i) {
      this.emitEffect({
        rule: n.rule,
        input: n.input,
        type: n.trueType,
        ctx: n,
        custom: i,
      }, r)
    },
    getEffect(n, r) {
      if (Ee(n, `$${r}`))
        return n[`$${r}`]
      if (Ee(n, 'effect') && Ee(n.effect, r))
        return n.effect[r]
    },
    emitEffect(n, r, i) {
      const o = this; const a = n.ctx; const s = n.rule; const u = n.input; const c = n.type; const l = n.custom
      if (!(!c || ['fcFragment', 'fragment'].includes(c))) {
        const p = l || Object.keys(s).reduce((h, m) => {
          return m[0] === '$' && (h[m.substr(1)] = s[m]), h
        }, Z({}, s.effect || {}))
        Object.keys(p).forEach((h) => {
          const m = o.providers[h]
          if (!(!m || m.input && !u)) {
            let w
            if (!m._c)
              w = '*'
            else if (m._used.includes(c))
              w = c
            else
              return
            const $ = Z({
              value: p[h],
              getValue() {
                return o.getEffect(s, h)
              },
            }, i || {})
            a && ($.getProp = function () {
              return a.effectData(h)
            }, $.clearProp = function () {
              return a.clearEffectData(h)
            }, $.mergeProp = function (A) {
              return St($.getProp(), [A])
            }, $.id = a.id), o.bus.$emit('p:'.concat(h, ':').concat(w, ':').concat(m.input ? 1 : 0), r, [$, s, o.api])
          }
        })
      }
    },
  })
}
function Cu(t) {
  return t.filter((e, n, r) => {
    return r.indexOf(e, 0) === n
  })
}
function ku(t) {
  const e = t.components
  if (Array.isArray(e)) {
    const n = Cu(e.filter((r) => {
      return r !== '*'
    }))
    return n.length ? n : !1
  } else {
    return L.String(e) ? [e] : !1
  }
}
function _t(t) {
  const e = this
  Qo(this, {
    options() {
      return t.options.value || {}
    },
    bus() {
      return t.bus
    },
    preview() {
      return t.vm.props.preview != null ? t.vm.props.preview : t.vm.setupState.parent && t.vm.setupState.parent.props.preview != null ? t.vm.setupState.parent.props.preview : t.options.value.preview || !1
    },
  }), ie(this, {
    fc: t,
    vm: t.vm,
    watching: !1,
    loading: !1,
    reloading: !1,
    noWatchFn: null,
    deferSyncFn: null,
    isMounted: !1,
    formData: ze({}),
    subRuleData: ze({}),
    subForm: {},
    form: ze({}),
    appendData: {},
    ignoreFields: [],
    providers: {},
    cycleLoad: null,
    loadedId: 1,
    nextTick: null,
    changeStatus: !1,
    pageEnd: !0,
    nextReload() {
      e.lifecycle('reload')
    },
  }), this.initData(t.rules), this.$manager = new t.manager(this), this.$render = new Yr(this), this.api = t.extendApiFn.reduce((n, r) => {
    const i = ce(() => {
      return r(n, e)
    })
    return i && i !== n && ie(n, i), n
  }, lu(this))
}
ie(_t.prototype, {
  initData(e) {
    ie(this, {
      ctxs: {},
      fieldCtx: {},
      nameCtx: {},
      sort: [],
      rules: e,
    })
  },
  init() {
    this.updateAppendData(), this.useProvider(), this.usePage(), this.loadRule(), this.$manager.__init(), this.lifecycle('created')
  },
  updateAppendData() {
    this.appendData = Z(Z(Z({}, this.options.formData || {}), this.fc.vm.props.modelValue || {}), this.appendData)
  },
  isBreakWatch() {
    return this.loading || this.noWatchFn || this.reloading
  },
  globalBeforeFetch(e) {
    const n = this
    return new Promise((r, i) => {
      const o = n.options.beforeFetch && ce(() => {
        return n.options.beforeFetch(e, {
          api: n.api,
        })
      })
      o && L.Function(o.then) ? o.then(r).catch(i) : r()
    })
  },
  beforeFetch(e) {
    const n = this
    return new Promise((r, i) => {
      const o = e && e.beforeFetch && ce(() => {
        return e.beforeFetch(e, {
          api: n.api,
        })
      })
      o && L.Function(o.then) ? o.then(r).catch(i) : o === !1 ? i() : r()
    }).then(() => {
      return n.globalBeforeFetch(e)
    })
  },
  beforeSubmit(e) {
    const n = this
    return new Promise((r, i) => {
      const o = n.options.beforeSubmit && ce(() => {
        return n.options.beforeSubmit(e, {
          api: n.api,
        })
      })
      o && L.Function(o.then) ? o.then(r).catch(i) : o === !1 ? i() : r()
    })
  },
})
hu(_t)
pu(_t)
gu(_t)
yu(_t)
$u(_t)
Ou(_t)
xu(_t)
Eu(_t)
const Au = 'fcFragment'; const mr = he({
  name: Au,
  inheritAttrs: !1,
  props: ['vnode'],
  render() {
    return this.vnode
  },
})
function Du(t) {
  return Object.keys(t).map((e) => {
    const n = t[e]; const r = To(e)
    if (r)
      return [r, n.value, n.arg, n.modifiers]
  }).filter((e) => {
    return !!e
  })
}
function Qi(t, e) {
  let n = t.directives
  return n
    ? (Array.isArray(n) || (n = [n]), Mo(e, n.reduce((r, i) => {
        return r.concat(Du(i))
      }, [])))
    : e
}
function Ru() {
  const t = {}
  function e(n) {
    this.vm = n.vm, this.handle = n
  }
  return ie(e.prototype, {
    make(r, i, o) {
      return Qi(i, this.h(r, Hi(i), o))
    },
    makeComponent(r, i, o) {
      try {
        return Qi(i, q(r, Hi(i), o))
      } catch (a) {
        return console.error(a), q('')
      }
    },
    h(r, i, o) {
      const a = this.vm || xr(); const s = a.appContext.config.isNativeTag(r); const u = this.handle.fc.prop.components[r]
      !u && s && delete i.formCreateInject
      try {
        return q(u || (s ? r : Q(r)), i, o)
      } catch (c) {
        return console.error(c), q('')
      }
    },
    aliasMap: t,
  }), ie(e, {
    aliasMap: t,
    alias(r, i) {
      t[r] = i
    },
    use(r) {
      Object.keys(r).forEach((i) => {
        const o = _n(i); const a = qs(i).toLocaleLowerCase(); const s = r[i]
        e.alias(i, s), [i, o, a].forEach((u) => {
          e.prototype[u] = function (c, l) {
            return this.make(t[i] || u, c, l)
          }
        })
      })
    },
  }), e
}
function Pu(t) {
  const e = /* @__PURE__ */ (function (n) {
    fs(i, n)
    const r = ms(i)
    function i() {
      return cs(this, i), r.apply(this, arguments)
    }
    return i
  }(oa))
  return Object.assign(e.prototype, t), e
}
function oa(t) {
  ie(this, {
    $handle: t,
    vm: t.vm,
    options: {},
    ref: 'fcForm',
    mergeOptionsRule: {
      normal: ['form', 'row', 'info', 'submitBtn', 'resetBtn'],
    },
  }), this.updateKey(), this.init()
}
ie(oa.prototype, {
  __init() {
    const e = this
    this.$render = this.$handle.$render, this.$r = function () {
      let n
      return (n = e.$render).renderRule.apply(n, arguments)
    }
  },
  updateKey() {
    this.key = er()
  },
  init() {
  },
  update() {
  },
  beforeRender() {
  },
  form() {
    return this.vm.refs[this.ref]
  },
  adapterValidate(e, n) {
    return e.validator = function (r, i, o) {
      return n(i, o)
    }, e
  },
  getSlot(e) {
    const n = function r(i) {
      if (i) {
        const o = i.slots[e]
        return o || r(i.setupState.parent)
      }
    }
    return n(this.vm)
  },
  mergeOptions(e, n) {
    const r = this
    return Mt(e.map((i) => {
      return r.tidyOptions(i)
    }), n, this.mergeOptionsRule)
  },
  updateOptions(e) {
    this.$handle.fc.targetFormDriver('updateOptions', e, {
      handle: this.$handle,
      api: this.$handle.api,
    }), this.options = this.mergeOptions([e], this.getDefaultOptions()), this.update()
  },
  tidyOptions(e) {
    return e
  },
  tidyRule(e) {
  },
  mergeProp(e) {
  },
  getDefaultOptions() {
    return {}
  },
  fieldChange(e, n, r, i) {
  },
  render(e) {
  },
})
function Mu(e) {
  const n = {
    name: 'loadData',
    _fn: [],
    loaded(i, o, a) {
      const s = this
      this.deleted(i), Fe(() => {
        const u = Ft(i.getValue()); const c = []
        u.forEach((l) => {
          if (l && (l.attr || l.template)) {
            let p = function ($) {
              let A
              o && o.__fc__ && (A = o.__fc__.getParentGroup())
              let F
              l.template
                ? F = e.$handle.loadStrVar(l.template, $, A
                  ? {
                      rule: o,
                      value: e.$handle.subRuleData[A.id] || {},
                    }
                  : null)
                : l.handler && L.Function(l.handler)
                  ? F = l.handler($, o, a)
                  : F = e.$handle.loadStrVar('{{'.concat(l.attr, '}}'), $, A
                    ? {
                        rule: o,
                        value: e.$handle.subRuleData[A.id] || {},
                      }
                    : null), (F == null || F === '') && l.default != null && (F = l.default), l.copy !== !1 && (F = ht(F))
              const I = l.modify ? o : i.getProp()
              l.to === 'child' ? I.children ? I.children[0] = F : I.children = [F] : Dt(I, l.to || 'options', F), a.sync(o)
            }; const h = function ($) {
              return p($)
            }; const m = e.watchLoadData(h)
            p = kt(p, l.wait || 300), l.watch !== !1 ? c.push(m) : m()
          }
        }), s._fn[i.id] = c
      })
    },
    deleted(i) {
      this._fn[i.id] && (this._fn[i.id].forEach((o) => {
        o()
      }), delete this._fn[i.id]), i.clearProp()
    },
  }
  return n.watch = n.loaded, n
} function Tu(e) {
  const n = {
    name: 't',
    _fn: [],
    loaded(i, o, a) {
      this.deleted(i)
      const s = i.getValue() || {}; const u = []
      Object.keys(s).forEach((c) => {
        const l = s[c]
        if (l) {
          const p = me(l) === 'object'; let h = function (A) {
            const F = e.t(p ? l.attr : l, p ? l.params : null, A); const I = p && l.modify ? o : i.getProp()
            c === 'child' ? I.children ? I.children[0] = F : I.children = [F] : Dt(I, c, F), a.sync(o)
          }; const m = function (A) {
            return h(A)
          }; const w = e.watchLoadData(m)
          h = kt(h, l.wait || 300), l.watch !== !1 ? u.push(w) : w()
        }
      }), this._fn[i.id] = u
    },
    deleted(i) {
      this._fn[i.id] && (this._fn[i.id].forEach((o) => {
        o()
      }), delete this._fn[i.id]), i.clearProp()
    },
  }
  return n.watch = n.loaded, n
} var Mr = {
  name: 'componentValidate',
  load(e, n, r) {
    let i = e.getValue()
    if (!i || i.method === !1) {
      e.clearProp(), r.clearValidateState([n.field])
    } else {
      L.Object(i) || (i = {
        method: i,
      })
      const o = i.method; const a = Z(Z({}, i), {}, {
        validator() {
          const u = wt(n)
          if (u) {
            for (var c = arguments.length, l = new Array(c), p = 0; p < c; p++)
              l[p] = arguments[p]
            return r.exec.apply(r, [u.id, L.String(o) ? o : 'formCreateValidate'].concat(l, [{
              attr: e,
              rule: n,
              api: r,
            }]))
          }
        },
      })
      delete a.method, e.getProp().validate = [a]
    }
  },
  watch() {
    Mr.load.apply(Mr, arguments)
  },
}; function ju(e) {
  function n(o) {
    return L.String(o) && (o = {
      action: o,
      to: 'options',
    }), o
  }
  function r(o, a, s) {
    let u = o.value
    i.deleted(o), L.Function(u) && (u = u(a, s)), u = n(u)
    const c = function (m) {
      m === void 0 ? o.clearProp() : Dt(o.getProp(), u.to || 'options', m), m != null && u && u.key && e.$handle.options.globalData[u.key] && e.fetchCache.set(e.$handle.options.globalData[u.key], {
        status: !0,
        data: m,
      }), s.sync(a)
    }
    if (!u || !u.action && !u.key) {
      c(void 0)
      return
    }
    u = ht(u), u.to || (u.to = 'options')
    const l = u.onError; const p = function () {
      if (!o.getValue())
        return o.clearProp(), s.sync(a), !0
    }
    i._fn[o.id] = e.watchLoadData(kt((h, m) => {
      if (m && u.watch === !1)
        return i._fn[o.id]()
      if (u.key) {
        e.targetRule = a
        const w = h(`$globalData.${u.key}`)
        if (delete e.targetRule, w) {
          if (p())
            return
          c(w)
        }
        return
      }
      const $ = e.$handle.loadFetchVar(ht(u), h, a); const A = Z(Z({
        headers: {},
      }, $), {}, {
        onSuccess(I, V) {
          if (!p()) {
            let G = function (re) {
              return V ? re : Ee(re, 'data') ? re.data : re
            }; const ee = yt($.parse)
            L.Function(ee)
              ? G = ee
              : ee && L.String(ee) && (G = function (re) {
                return Xe(re, ee)
              }), qn(G(I, a, s)).then((X) => {
              c(X)
            })
          }
        },
        onError(I) {
          c(void 0), !p() && (l || function (V) {
            return Hr(V.message || `fetch fail ${$.action}`)
          })(I, a, s)
        },
      })
      e.$handle.beforeFetch(A, {
        rule: a,
        api: s,
      }).then(() => {
        if (L.Function($.action)) {
          qn($.action(a, s)).then((F) => {
            A.onSuccess(F, !0)
          }).catch((F) => {
            A.onError(F)
          })
          return
        }
        ce(() => {
          return e.create.fetch(A, {
            inject: o,
            rule: a,
            api: s,
          })
        })
      }).catch((F) => {
      })
    }, u.wait || 600))
  }
  var i = {
    name: 'fetch',
    _fn: [],
    loaded() {
      r.apply(void 0, arguments)
    },
    watch() {
      r.apply(void 0, arguments)
    },
    deleted(a) {
      this._fn[a.id] && (this._fn[a.id](), delete this._fn[a.id]), a.clearProp()
    },
  }
  return i
} const Fu = {
  fetch: ju,
  loadData: Mu,
  t: Tu,
  componentValidate: Mr,
}
function Vu(t) {
  t = t || /* @__PURE__ */ new Map()
  var e = {
    $on(r, i) {
      const o = t.get(r); const a = o && o.push(i)
      a || t.set(r, [i])
    },
    $once(r, i) {
      i._once = !0, e.$on(r, i)
    },
    $off(r, i) {
      const o = t.get(r)
      o && o.splice(o.indexOf(i) >>> 0, 1)
    },
    $emit(r) {
      for (var i = arguments.length, o = Array.from({ length: i > 1 ? i - 1 : 0 }), a = 1; a < i; a++)
        o[a - 1] = arguments[a];
      (t.get(r) || []).slice().map((s) => {
        s._once && (e.$off(r, s), delete s._once), s.apply(void 0, o)
      }), (t.get('*') || []).slice().map((s) => {
        s(r, o)
      })
    },
  }
  return e
}
const Iu = 'html'; const Lu = {
  name: Iu,
  loadChildren: !1,
  render(e, n) {
    return n.prop.props.innerHTML = e.default(), n.vNode.make(n.prop.props.tag || 'div', n.prop)
  },
  renderChildren(e) {
    return {
      default() {
        return e.filter((r) => {
          return L.String(r)
        }).join('')
      },
    }
  },
}
function Bu(t) {
  t = `${t}=`
  for (let e = decodeURIComponent(document.cookie), n = e.split(';'), r = 0; r < n.length; r++) {
    for (var i = n[r]; i.charAt(0) === ' ';)
      i = i.substring(1)
    if (i.indexOf(t) === 0) {
      i = i.substring(t.length, i.length)
      try {
        return JSON.parse(i)
      } catch {
        return i
      }
    }
  }
  return null
}
function Nu(t) {
  const e = localStorage.getItem(t)
  if (e) {
    try {
      return JSON.parse(e)
    } catch {
      return e
    }
  }
  return null
}
function zu(t) {
  const e = sessionStorage.getItem(t)
  if (e) {
    try {
      return JSON.parse(e)
    } catch {
      return e
    }
  }
  return null
}
function Wr(t, e) {
  if (!e)
    return null
  const n = e.split('.'); const r = t(n.shift())
  return n.length ? r == null ? null : Xe(r, n) : r
}
function Uu(t) {
  return Wr(Bu, t)
}
function qu(t) {
  return Wr(Nu, t)
}
function Hu(t) {
  return Wr(zu, t)
}
const Gu = {
  'en': {
    required: '{title} is required',
    validate: {
      url: '{title} is not a valid url',
      email: '{title} is not a valid email',
      ip: '{title} {title} is not a valid ip',
      phone: '{title} {title} is not a valid phone',
      pattern: '{title} does not match pattern {pattern}',
      uppercase: '{title} must be all uppercase',
      lowercase: '{title} must be all lowercased',
      positive: '{title} is not a positive number',
      negative: '{title} is not a negative number',
      equal: '{title} is not equal to {equal}',
      min: '{title} cannot be less than {min}',
      max: '{title} cannot be greater than {max}',
      enum: '{title} must be one of {enum}',
      hasKeys: '{title} does not contain required fields {hasKeys}',
      minLen: '{title} must be at least {minLen}',
      maxLen: '{title} cannot be longer than {maxLen}',
      len: '{title} must be exactly {len}',
      integer: '{title} is not an integer',
      number: '{title} is not an number',
    },
  },
  'zh-cn': {
    required: '{title}\u4E0D\u80FD\u4E3A\u7A7A',
    validate: {
      url: '{title}\u4E0D\u662F\u6709\u6548\u7684 url \u5730\u5740',
      email: '{title}\u4E0D\u662F\u6709\u6548\u7684\u90AE\u7BB1\u5730\u5740',
      ip: '{title}\u4E0D\u662F\u6709\u6548\u7684 IP \u5730\u5740',
      phone: '{title}\u4E0D\u662F\u6B63\u786E\u7684\u624B\u673A\u53F7',
      pattern: '{title}\u5FC5\u987B\u5339\u914D {pattern}',
      uppercase: '{title}\u5FC5\u987B\u5168\u5927\u5199',
      lowercase: '{title}\u5FC5\u987B\u5168\u5C0F\u5199',
      positive: '{title}\u4E0D\u662F\u6B63\u6570',
      negative: '{title}\u4E0D\u662F\u8D1F\u6570',
      equal: '{title}\u5FC5\u987B\u7B49\u4E8E {equal}',
      min: '{title}\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E {min}',
      max: '{title}\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E {max}',
      enum: '{title}\u5FC5\u987B\u662F {enum} \u4E4B\u4E00',
      hasKeys: '{title}\u5FC5\u987B\u5305\u542B {hasKeys} \u5B57\u6BB5',
      minLen: '{title}\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E {minLen}',
      maxLen: '{title}\u957F\u5EA6\u5FC5\u987B\u5C0F\u4E8E {maxLen}',
      len: '{title}\u957F\u5EA6\u5FC5\u987B\u4E3A {len}',
      integer: '{title}\u5FC5\u987B\u4E3A\u6574\u6570',
      number: '{title}\u5FC5\u987B\u4E3A\u6570\u5B57',
    },
  },
}
function Yu(t, e) {
  let n
  return arguments.length === 2 ? (n = arguments[1], e = n[t]) : n = arguments[2], {
    id: e,
    prop: n,
  }
}
function gr() {
  return Yu.apply(void 0, ['name'].concat(Array.prototype.slice.call(arguments)))
}
function Wu(t) {
  const e = t.key || []; const n = t.array || []; const r = t.normal || []
  Rr.push.apply(Rr, fe(e)), Hn.push.apply(Hn, fe(n)), Gn.push.apply(Gn, fe(r)), na([].concat(fe(e), fe(n), fe(r)))
}
let Xu = 1; const rt = {}; const eo = Symbol('defValue')
function aa(t) {
  const e = Be({}, mr.name, mr); const n = {}; const r = {}; const i = {}; const o = {}; const a = []; const s = []; const u = [t.extendApi]; const c = Z({}, Fu); const l = su(); let p = {
    global: {},
  }; const h = t.isMobile === !0; const m = ze({
    $mobile: h,
  }); const w = Ru(); const $ = {}; const A = {}
  Wu(t.attrs || {})
  function F(D) {
    const C = rt[D]
    if (Array.isArray(C)) {
      return C.map((R) => {
        return R.api()
      })
    }
    if (C)
      return C.api()
  }
  function I(D) {
    a.push(D)
  }
  function V() {
    const D = gr.apply(void 0, arguments)
    D.id && D.prop && (r[D.id] = D.prop)
  }
  function G() {
    const D = gr.apply(void 0, arguments)
    D.id && D.prop && (c[D.id] = L.Function(D.prop)
      ? D.prop
      : Z(Z({}, D.prop), {}, {
          name: D.id,
        }))
  }
  function ee(D) {
    w.use(D)
  }
  function X() {
    const D = gr.apply(void 0, arguments)
    if (!D.id || !D.prop)
      return Ln
    const C = dt(D.id); const R = D.prop; const b = R.merge === !0 ? n[C] : void 0
    n[C] = Dn(R, b || Ln), l[C] = tr(C), R.maker && ie(l, R.maker)
  }
  function re(D, C) {
    let R
    if (L.String(D)) {
      if (R = D, C === void 0)
        return e[R]
    } else {
      R = D.displayName || D.name, C = D
    }
    if (!(!R || !C)) {
      const b = dt(R)
      e[R] = C, e[b] = C, delete w.aliasMap[R], delete w.aliasMap[b], delete n[R], delete n[b], C.formCreateParser && X(R, C.formCreateParser)
    }
  }
  function Y() {
    return iu(M, e, r)
  }
  function oe(D, C) {
    const R = Y()
    return ss({
      data() {
        return ze({
          rule: D,
          option: C,
        })
      },
      render() {
        return We(R, Z({
          ref: 'fc',
        }, this.$data))
      },
    })
  }
  function W() {
    return mr
  }
  function H(D, C) {
    return L.Function(D.install) ? D.install(_e, C) : L.Function(D) && D(_e, C), this
  }
  function _e(D, C) {
    const R = oe(D, C || {})
    a.forEach((O) => {
      ce(() => {
        return O(_e, R)
      })
    })
    const b = document.createElement('div');
    ((C == null ? void 0 : C.el) || document.body).appendChild(b)
    const x = R.mount(b)
    return x.$refs.fc.fapi
  }
  Dn(_e, A)
  function Ue(D) {
    const C = Z({}, t)
    return D
      ? C.inherit = {
        components: e,
        parsers: n,
        directives: r,
        modelFields: i,
        providers: c,
        useApps: a,
        maker: l,
        formulas: $,
        loadData: m,
      }
      : delete C.inherit, aa(C)
  }
  function k(D, C) {
    i[D] = C
  }
  function S(D, C) {
    $[D] = C
  }
  function _(D, C) {
    const R = o[D] || {}; const b = R.parsers || {}
    C.parsers && Object.keys(C.parsers).forEach((x) => {
      b[x] = Dn(C.parsers[x], Ln)
    }), C.name = D, o[D] = Z(Z(Z({}, R), C), {}, {
      parsers: b,
    })
  }
  function d(D) {
    D && Object.keys(rt).forEach((C) => {
      const R = Array.isArray(rt[C]) ? rt[C] : [rt[C]]
      R.forEach((b) => {
        b.bus.$emit(`$loadData.${D}`)
      })
    })
  }
  function f(D, C) {
    Dt(m, D, C), d(D)
  }
  function g(D, C) {
    const R = function () {
      for (var x = arguments.length, O = new Array(x), P = 0; P < x; P++)
        O[P] = arguments[P]
      return ce(() => {
        return C.apply(void 0, O)
      })
    }
    R._driver = !0, f(D, R)
  }
  function y(D, C) {
    const R = (D || '').split('.')
    D = R.shift()
    const b = R.join('.')
    if (Ee(m, D) || (m[D] = eo), m[D] !== eo) {
      let x = m[D]
      return x && x._driver ? x = x(b) : R.length && (x = Xe(x, R)), x == null || x === '' ? C : x
    } else {
      return C
    }
  }
  function v(D) {
    u.push(D)
  }
  function E(D) {
    delete m[D], d(D)
  }
  function T(D, C) {
    s.push({
      name: D,
      callback: C,
    })
  }
  function M(D) {
    const C = this
    ie(this, {
      id: Xu++,
      create: _e,
      vm: D,
      manager: Pu(t.manager),
      parsers: n,
      providers: c,
      modelFields: i,
      formulas: $,
      isMobile: h,
      rules: D.props.rule,
      name: D.props.name || er(),
      inFor: D.props.inFor,
      prop: {
        components: e,
        directives: r,
      },
      get: null,
      drivers: o,
      renderDriver: null,
      refreshData: d,
      loadData: m,
      CreateNode: w,
      bus: new Vu(),
      unwatch: [],
      options: Et({}),
      extendApiFn: u,
      fetchCache: /* @__PURE__ */ new WeakMap(),
      tmpData: ze({}),
    }), s.forEach((R) => {
      C.bus.$on(R.name, R.callback)
    }), Fe(() => {
      He(C.options, () => {
        C.$handle.$manager.updateOptions(C.options.value), C.api().refresh()
      }, {
        deep: !0,
      })
    }), ie(D.appContext.components, e), ie(D.appContext.directives, r), this.$handle = new _t(this), this.name && (this.inFor ? (rt[this.name] || (rt[this.name] = []), rt[this.name].push(this)) : rt[this.name] = this)
  }
  M.isMobile = h, ie(M.prototype, {
    init() {
      const C = this
      this.isSub() && this.unwatch.push(He(() => {
        return C.vm.setupState.parent.setupState.fc.options.value
      }, () => {
        C.initOptions(), C.$handle.api.refresh()
      }, {
        deep: !0,
        flush: 'sync',
      })), this.vm.props.driver && (this.renderDriver = me(this.vm.props.driver) === 'object' ? this.vm.props.driver : this.drivers[this.vm.props.driver]), !this.renderDriver && this.vm.setupState.parent && (this.renderDriver = this.vm.setupState.parent.setupState.fc.renderDriver), this.renderDriver || (this.renderDriver = this.drivers.default), this.initOptions(), this.$handle.init()
    },
    targetFormDriver(C) {
      for (var R, b = this, x = arguments.length, O = Array.from({ length: x > 1 ? x - 1 : 0 }), P = 1; P < x; P++)
        O[P - 1] = arguments[P]
      if ((R = this.bus).$emit.apply(R, [C].concat(O)), this.renderDriver && this.renderDriver[C]) {
        return ce(() => {
          let j
          return (j = b.renderDriver)[C].apply(j, O)
        })
      }
    },
    t(C, R, b) {
      let x = b ? b(`$t.${C}`) : this.globalLanguageDriver(C)
      return x == null && (x = ''), x && R && Object.keys(R).forEach((O) => {
        const P = new RegExp('{'.concat(O, '}'), 'g')
        x = x.replace(P, R[O])
      }), x
    },
    globalDataDriver(C) {
      const R = this; const b = C.split('.'); const x = b.shift(); const O = this.options.value.globalData && this.options.value.globalData[x]
      if (O) {
        if (O.type === 'static')
          return Xe(O.data, b)
        let P; const j = this.fetchCache.get(O)
        if (j) {
          if (j.status && (P = Xe(j.data, b)), !j.loading)
            return P
          j.loading = !1, this.fetchCache.set(O, j)
        } else {
          this.fetchCache.set(O, {
            status: !1,
          })
        }
        const K = kt(() => {
          se()
          const le = R.fetchCache.get(O)
          R.options.value.globalData && Object.values(R.options.value.globalData).includes(O) ? (le && (le.loading = !0, R.fetchCache.set(O, le)), R.bus.$emit(`$loadData.$globalData.${x}`)) : R.fetchCache.delete(O)
        }, O.wait || 600); const J = function (ge) {
          R.fetchCache.set(O, {
            status: !0,
            data: ge,
          }), R.bus.$emit(`$loadData.$globalData.${x}`)
        }; const ae = function (ge, Ce) {
          if (Ce && O.watch === !1)
            return se()
          if (Ce) {
            K()
            return
          }
          const we = R.$handle.loadFetchVar(kr(O), ge)
          we.targetRule = R.targetRule, R.$handle.api.fetch(we).then((pe) => {
            J(pe)
          }).catch((pe) => {
            J(null)
          })
        }; var se = this.watchLoadData(ae)
        return O.watch === !1 && se(), this.unwatch.push(se), P
      }
    },
    getLocale() {
      const C = this.vm.setupState.top.props.locale
      return C && me(C) === 'object' ? C.name : typeof C == 'string' ? C : 'zh-cn'
    },
    globalLanguageDriver(C) {
      const R = this.vm.setupState.top.props.t; const b = this.vm.setupState.top.props.locale; let x = void 0
      if (R && (x = ce(() => {
        return R(C)
      })), x == null && b && me(b) === 'object' && (x = Xe(b, C)), x == null) {
        const O = this.options.value.language || {}; const P = this.getLocale()
        x = Xe(O[P] || {}, C), x == null && (x = Xe(Gu[P] || {}, C))
      }
      return x
    },
    globalVarDriver(C) {
      const R = this; const b = C.split('.'); const x = b.shift(); const O = this.options.value.globalVariable && this.options.value.globalVariable[x]
      if (O) {
        const P = L.Function(O) ? O : yt(O.handle)
        if (P) {
          const j = P(function () {
            let K
            return (K = R.$handle.api).getData.apply(K, arguments)
          }, this.$handle.api)
          return Xe(j, b)
        }
      }
    },
    setData(C, R, b) {
      b ? f(C, R) : (Dt(this.vm.setupState.top.setupState.fc.tmpData, C, R), this.bus.$emit(`$loadData.${C}`))
    },
    getLoadData(C, R) {
      let b = null
      if (C != null) {
        let x = C.split('.'); const O = x.shift()
        if (b = Xe(this.vm.setupState.top.setupState.fc.tmpData, C), b != null)
          return b
        if (O === '$topForm') {
          b = this.$handle.api.top.formData(!0)
        } else if (O === '$scopeForm') {
          b = this.$handle.api.scope.formData(!0)
        } else if (O === '$form') {
          b = this.$handle.api.formData(!0)
        } else if (O === '$options') {
          b = this.options.value
        } else if (O === '$globalData') {
          b = this.globalDataDriver(x.join('.')), x = []
        } else if (O === '$var') {
          b = this.globalVarDriver(x.join('.')), x = []
        } else if (O === '$locale') {
          b = this.getLocale(), x = []
        } else if (O === '$t') {
          b = this.globalLanguageDriver(x.join('.')), x = []
        } else {
          if (O === '$preview')
            return this.$handle.preview
          b = y(C), x = []
        }
        b && x.length && (b = Xe(b, x))
      }
      return b == null || b === '' ? R : b
    },
    watchLoadData(C, R) {
      const b = this; let x = {}; const O = function (J) {
        b.get || (b.get = P), ce(() => {
          C(P, J)
        }), b.get === P && (b.get = void 0)
      }; var P = function (J, ae) {
        let se
        if (me(J) === 'object' && (se = J.getValue, J = J.id), x[J])
          return x[J].val
        const le = at(() => {
          return se ? se() : b.getLoadData(J, ae)
        }); const ge = J.split('.'); const Ce = ge.shift(); const we = ge.shift() || ''; const pe = kt(() => {
          const ne = se ? se() : b.getLoadData(J, ae)
          if (x[J])
            ((typeof ne === 'function' || L.Object(ne) || Array.isArray(ne)) && ne === x[J].val || JSON.stringify(ne) !== JSON.stringify(x[J].val)) && (x[J].val = ne, O(!0))
          else
            return
        }, R || 0); const ve = He(le, (ne) => {
          pe()
        })
        return b.bus.$on(`$loadData.${Ce}`, pe), we && b.bus.$on(`$loadData.${Ce}.${we}`, pe), x[J] = {
          fn() {
            b.bus.$off(`$loadData.${Ce}`, pe), we && b.bus.$off(`$loadData.${Ce}.${we}`, pe), ve()
          },
          val: le.value,
        }, le.value
      }
      O(!1)
      const j = function () {
        Object.keys(x).forEach((J) => {
          return x[J].fn()
        }), x = {}
      }
      return this.unwatch.push(j), j
    },
    isSub() {
      return this.vm.setupState.parent && this.vm.props.extendOption
    },
    initOptions() {
      this.options.value = {}
      let C = Z({
        formData: {},
        submitBtn: {},
        resetBtn: {},
        globalEvent: {},
        globalData: {},
      }, ht(p)); const R = this.isSub()
      R && (C = this.mergeOptions(C, this.vm.setupState.parent.setupState.fc.options.value || {}, !0)), C = this.mergeOptions(C, this.vm.props.option)
      const b = this.api()
      this.targetFormDriver('initOptions', C, {
        api: b,
        isSubForm: R,
      }), this.updateOptions(C)
    },
    mergeOptions(C, R, b) {
      return R = Z({}, R || {}), b && ['page', 'onSubmit', 'onReset', 'onCreated', 'onChange', 'onMounted', 'mounted', 'onReload', 'reload', 'formData', 'el', 'globalClass', 'style'].forEach((x) => {
        delete R[x]
      }), R.global && (C.global = nu(C.global, R.global), delete R.global), this.$handle.$manager.mergeOptions([R], C), C
    },
    updateOptions(C) {
      this.options.value = this.mergeOptions(this.options.value, C), this.$handle.$manager.updateOptions(this.options.value), this.bus.$emit('$loadData.$options')
    },
    api() {
      return this.$handle.api
    },
    render() {
      return this.$handle.render()
    },
    mounted() {
      this.$handle.mounted()
    },
    unmount() {
      const C = this
      if (this.name) {
        if (this.inFor) {
          const R = rt[this.name].indexOf(this)
          rt[this.name].splice(R, 1)
        } else {
          delete rt[this.name]
        }
      }
      s.forEach((b) => {
        C.bus.$off(b.name, b.callback)
      }), this.tmpData = {}, this.unwatch.forEach((b) => {
        return b()
      }), this.unwatch = [], this.$handle.reloadRule([])
    },
    updated() {
      const C = this
      this.$handle.bindNextTick(() => {
        return C.bus.$emit('next-tick', C.$handle.api)
      })
    },
  })
  function U(D) {
    ie(D, {
      version: t.version,
      ui: t.ui,
      isMobile: h,
      extendApi: v,
      getData: y,
      setDataDriver: g,
      setData: f,
      removeData: E,
      refreshData: d,
      maker: l,
      component: re,
      directive: V,
      setModelField: k,
      setFormula: S,
      setDriver: _,
      register: G,
      $vnode: W,
      parser: X,
      use: H,
      factory: Ue,
      componentAlias: ee,
      copyRule: Jo,
      copyRules: Zo,
      mergeRule: St,
      fetch: ra,
      $form: Y,
      parseFn: yt,
      parseJson: qo,
      toJson: bn,
      useApp: I,
      getApi: F,
      on: T,
    })
  }
  function B(D) {
    ie(D, {
      create: _e,
      install(R, b) {
        p = Z(Z({}, p), b || {})
        const x = `_installedFormCreate_${t.ui}`
        if (R[x] !== !0) {
          R[x] = !0
          const O = function (K) {
            const J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
            return _e(K, J)
          }
          U(O), R.config.globalProperties.$formCreate = O
          const P = Y()
          R.component(P.name, P), a.forEach((j) => {
            ce(() => {
              return j(D, R)
            })
          })
        }
      },
    })
  }
  if (U(A), B(A), g('$cookie', Uu), g('$localStorage', qu), g('$sessionStorage', Hu), w.use({
    fragment: 'fcFragment',
  }), t.install && _e.use(t), I((D, C) => {
    C.mixin({
      props: ['formCreateInject'],
    })
  }), X(Lu), t.inherit) {
    const N = t.inherit
    N.components && ie(e, N.components), N.parsers && ie(n, N.parsers), N.directives && ie(r, N.directives), N.modelFields && ie(i, N.modelFields), N.providers && ie(c, N.providers), N.useApps && ie(a, N.useApps), N.maker && ie(l, N.maker), N.loadData && ie(m, N.loadData), N.formulas && ie($, N.formulas)
  }
  const z = Y()
  return Dn(z, A), Object.defineProperties(z, {
    fetch: {
      get() {
        return A.fetch
      },
      set(C) {
        A.fetch = C
      },
    },
  }), z.util = A, z
}
const vr = 'hidden'; const Ku = {
  name: vr,
  maker: Be({}, vr, (t, e) => {
    return tr(vr)('', t, e)
  }),
  render() {
    return []
  },
}; const Ju = {
  name: 'FcRow',
  render(e, n) {
    return n.vNode.col({
      props: {
        span: 24,
      },
    }, {
      default() {
        return [n.vNode.row(n.prop, e)]
      },
    })
  },
}; const Zu = {
  name: 'checkbox',
  mergeProp(e) {
    const n = e.prop.props
    Ee(n, 'options') || (n.options = e.prop.options || [])
  },
}; const Qu = {
  name: 'radio',
  mergeProp(e) {
    const n = e.prop.props
    Ee(n, 'options') || (n.options = e.prop.options || [])
  },
}; const el = {
  name: 'select',
  mergeProp(e) {
    const n = e.prop.props
    Ee(n, 'options') || (n.options = e.prop.options || [])
  },
}; const tl = {
  name: 'cascader',
  mergeProp(e) {
    const n = e.prop.props
    Ee(n, 'options') || (n.options = e.prop.options || [])
  },
}; const nl = {
  name: 'textarea',
  mergeProp(e) {
    const n = e.prop.props
    n.type = 'textarea'
  },
}; const rl = [Ku, Ju, tl, Zu, Qu, el, nl]; const Ye = 'van'; const il = {
  button: `${Ye}-button`,
  icon: `${Ye}-icon`,
  slider: `${Ye}-slider`,
  stepper: `${Ye}-stepper`,
  inputNumber: `${Ye}-stepper`,
  rate: `${Ye}-rate`,
  uploader: 'fc-uploader',
  upload: 'fc-uploader',
  cell: `${Ye}-cell`,
  timePicker: 'fc-time-picker',
  datePicker: 'fc-date-picker',
  switch: `${Ye}-switch`,
  select: 'fc-select',
  cascader: 'fc-cascader',
  calendar: 'fc-calendar',
  checkbox: 'fc-checkbox',
  radio: 'fc-radio',
  input: `${Ye}-field`,
  textarea: `${Ye}-field`,
  field: `${Ye}-field`,
  formItem: `${Ye}-field`,
  form: `${Ye}-form`,
  col: `${Ye}-col`,
  row: `${Ye}-row`,
  group: 'fc-group',
  array: 'fc-group',
  object: 'fc-sub-form',
  subForm: 'fc-sub-form',
}
function ol() {
  return {
    form: {
      required: 'auto',
      labelAlign: 'right',
      inputAlign: 'right',
    },
    row: {
      show: !0,
      gutter: 0,
    },
    submitBtn: {
      type: 'primary',
      loading: !1,
      disabled: !1,
      block: !0,
      innerText: '',
      size: 'small',
      show: !0,
      col: void 0,
      click: void 0,
    },
    resetBtn: {
      type: 'default',
      loading: !1,
      disabled: !1,
      block: !0,
      innerText: '',
      size: 'small',
      show: !1,
      col: void 0,
      click: void 0,
    },
  }
}
function to(t, e) {
  if (!!Ee(t, e) && L.String(t[e])) {
    let n
    t[e] = (n = {}, Be(n, e, t[e]), Be(n, 'show', !0), n)
  }
}
function bt(t) {
  return t === !1
}
function al(t, e) {
  Ee(t, e) && !L.Object(t[e]) && (t[e] = {
    show: !!t[e],
  })
}
function no(t) {
  const e = Z({}, t)
  return delete e.children, e
}
const sl = {
  validate() {
    const e = this.form()
    return e
      ? e.validate()
      : new Promise((n) => {
        return n()
      })
  },
  validateField(e) {
    const n = this
    return new Promise((r, i) => {
      const o = n.form()
      o ? o.validate(e).then(r).catch(i) : r()
    })
  },
  clearValidateState(e) {
    const n = this.form()
    if (n)
      return n.resetValidation(e.id)
  },
  tidyOptions(e) {
    return ['submitBtn', 'resetBtn', 'row', 'info', 'wrap', 'col', 'title'].forEach((n) => {
      al(e, n)
    }), e
  },
  tidyRule(e) {
    const n = e.prop
    return to(n, 'title'), to(n, 'info'), n.validate && n.validate.forEach((r) => {
      L.String(r.pattern) && (r.pattern = new RegExp(r.pattern))
    }), n
  },
  mergeProp(e) {
    const n = this; const r = {
      info: {
        icon: !0,
      },
      title: {},
      col: {
        span: 24,
      },
      wrap: {},
    };
    ['info', 'wrap', 'col', 'title'].forEach((i) => {
      e.prop[i] = Mt([n.options[i] || {}, e.prop[i] || {}], r[i])
    })
  },
  getDefaultOptions() {
    return ol()
  },
  adapterValidate(e, n) {
    return e.trigger === 'change' ? e.trigger = 'onChange' : e.trigger === 'blur' && (e.trigger = 'onBlur'), e.validator = function (r) {
      return new Promise((i) => {
        const o = function (s) {
          e.message = s, s ? i(!1) : i()
        }
        return n(r, o)
      })
    }, e
  },
  update() {
    const e = this.options.form
    this.rule = {
      props: Z({}, e),
      on: {
        submit(r) {
          r.preventDefault()
        },
      },
      style: e.style,
      type: 'form',
    }
  },
  beforeRender() {
    const e = this.key; const n = this.ref; const r = this.options.form
    ie(this.rule, {
      key: e,
      ref: n,
      class: [r.className, r.class, 'form-create-m', this.$handle.preview ? 'is-preview' : ''],
    })
  },
  render(e) {
    const n = this
    return e.slotLen() && !this.$handle.preview && e.setSlot(void 0, () => {
      return n.makeFormBtn()
    }), this.$r(this.rule, bt(this.options.row.show) ? e.getSlots() : [this.makeRow(e)])
  },
  makeWrap(e, n) {
    const r = this; const i = e.prop; const o = ''.concat(this.key).concat(e.key); const a = i.col; const s = this.isTitle(i) && i.wrap.title !== !1; const u = this.rule.props.col; const c = i.wrap.class
    delete i.wrap.class, delete i.wrap.title
    const l = bt(i.wrap.show)
      ? n
      : this.$r(Mt([i.wrap, {
          props: Z(Z({
            modelValue: e.rule.value,
            label: s ? i.title.title : void 0,
          }, no(i.wrap || {})), {}, {
            name: e.id,
            rules: e.injectValidate(),
          }),
          class: this.$render.mergeClass(c || i.className, 'fc-form-item'),
          key: ''.concat(o, 'fi'),
          ref: e.wrapRef,
          type: 'formItem',
        }]), Z({
          input() {
            return n
          },
        }, s
          ? {
              label() {
                return r.makeInfo(i, o, e)
              },
            }
          : {}))
    return bt(u) || bt(a.show) ? l : this.makeCol(i, o, [l])
  },
  isTitle(e) {
    if (this.options.form.title === !1)
      return !1
    const n = e.title
    return !(!n.title && !n.native || bt(n.show))
  },
  makeInfo(e, n, r) {
    let i; let o; let a; let s; const u = this; const c = Z({}, e.title); const l = Z({}, e.info); const p = this.getSlot('title'); const h = [p
      ? p({
          title: (i = r.refRule) === null || i === void 0 || (o = i.__$title) === null || o === void 0 ? void 0 : o.value,
          rule: r.rule,
          options: this.options,
        })
      : (a = r.refRule) === null || a === void 0 || (s = a.__$title) === null || s === void 0 ? void 0 : s.value]; const m = !bt(l.show) && (l.info || l.native) && !bt(l.icon)
    m && h[l.align !== 'left' ? 'unshift' : 'push'](this.$r({
      type: l.icon === !0 ? 'icon-warning' : l.icon,
      style: 'width:1em;',
    }))
    const w = Mt([c, {
      props: no(c),
      key: ''.concat(n, 'tit'),
      class: 'fc-form-title',
      type: c.type || 'span',
      on: {
        click() {
          if (m && l.info) {
            let A, F
            Io({
              type: 'warning',
              message: (A = r.refRule) === null || A === void 0 || (F = A.__$info) === null || F === void 0 ? void 0 : F.value,
              duration: 1e3,
            })
          }
          for (var I = arguments.length, V = new Array(I), G = 0; G < I; G++)
            V[G] = arguments[G]
          u.$handle.targetHook(r, 'titleClick', {
            args: V,
          })
        },
      },
    }])
    return delete w.props.show, delete w.props.title, delete w.props.native, this.$r(w, h)
  },
  makeCol(e, n, r) {
    const i = e.col
    return this.$r({
      class: this.$render.mergeClass(i.class, 'fc-form-col'),
      type: 'col',
      props: i || {
        span: 24,
      },
      key: ''.concat(n, 'col'),
    }, r)
  },
  makeRow(e) {
    const n = this.options.row || {}
    return this.$r({
      type: 'row',
      props: n,
      class: this.$render.mergeClass(n.class, 'fc-form-row'),
      key: ''.concat(this.key, 'row'),
    }, e)
  },
  makeFormBtn() {
    const e = []
    if (bt(this.options.submitBtn.show) || e.push(this.makeSubmitBtn()), bt(this.options.resetBtn.show) || e.push(this.makeResetBtn()), !!e.length) {
      return this.$r({
        type: 'cell',
        class: 'fc-form-cell fc-form-footer',
        key: ''.concat(this.key, 'fb'),
      }, e)
    }
  },
  makeResetBtn() {
    const e = this; const n = Z({}, this.options.resetBtn); const r = n.innerText || this.$handle.api.t('reset') || '\u91CD\u7F6E'
    return delete n.innerText, delete n.click, delete n.col, delete n.show, this.$r({
      type: 'button',
      props: n,
      class: 'fc-reset-btn',
      style: {
        width: n.width,
      },
      on: {
        click() {
          const o = e.$handle.api
          e.options.resetBtn.click ? e.options.resetBtn.click(o) : o.resetFields()
        },
      },
      key: ''.concat(this.key, 'b2'),
    }, [r])
  },
  makeSubmitBtn() {
    const e = this; const n = Z({}, this.options.submitBtn); const r = n.innerText || this.$handle.api.t('submit') || '\u63D0\u4EA4'
    return delete n.innerText, delete n.click, delete n.col, delete n.show, this.$r({
      type: 'button',
      props: n,
      class: 'fc-submit-btn',
      style: {
        width: n.width,
      },
      on: {
        click() {
          const o = e.$handle.api
          e.options.submitBtn.click
            ? e.options.submitBtn.click(o)
            : o.submit().catch(() => {
              })
        },
      },
      key: ''.concat(this.key, 'b1'),
    }, [r])
  },
}
function ul(t, e) {
  e === void 0 && (e = {})
  const n = e.insertAt
  if (!(!t || typeof document > 'u')) {
    const r = document.head || document.getElementsByTagName('head')[0]; const i = document.createElement('style')
    i.type = 'text/css', n === 'top' && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
  }
}
const ll = '.form-create-m{width:100%}.form-create-m .fc-none,.form-create-m.is-preview .fc-clock{display:none!important}.form-create-m .van-field:has(.van-field__value>.van-field__body>.van-field__control>.van-field):after{display:none}.form-create-m .van-field>.van-field__value>.van-field__body>.van-field__control>*>.van-field:after,.form-create-m .van-field>.van-field__value>.van-field__body>.van-field__control>.van-field:after{display:block;left:0;right:0}.form-create-m .fc-form-item>.van-field__value>.van-field__body>.van-field__control>.van-cell{padding:0}.form-create-m .fc-form-item .fc-form-item{--van-padding-md:0;padding-left:0;padding-right:0}.form-create-m>.van-row>.van-col--24:last-of-type>.van-cell:last-of-type:after{display:none}.form-create-m .fc-reset-btn{margin-top:12px}.form-create-m .fc-form-title{align-items:center;display:inline-flex}.form-create-m.is-preview .van-field__label--required:before{display:none}._fc-m-group{align-items:flex-end;display:flex;flex-direction:column;justify-content:center;min-height:38px;width:100%}._fc-m-group-disabled ._fc-m-group-add,._fc-m-group-disabled ._fc-m-group-btn{cursor:not-allowed}._fc-m-group-handle{background-color:#fff;border:1px dashed #d9d9d9;border-radius:15px;bottom:-15px;display:flex;flex-direction:row;padding:3px 8px;position:absolute;right:30px;transform:scale(1.1)}._fc-m-group-btn{cursor:pointer}._fc-m-group-idx{align-items:center;background:#eee;border-radius:15px;bottom:-15px;display:flex;font-weight:700;height:30px;justify-content:center;left:10px;position:absolute;width:30px}._fc-m-group-handle ._fc-m-group-btn+._fc-m-group-btn{margin-left:7px}._fc-m-group-container{border:1px dashed #d9d9d9;border-radius:5px;box-sizing:border-box;display:flex;flex-direction:column;margin-bottom:25px;padding:5px 5px 25px;position:relative;width:100%}._fc-m-group-arrow{height:20px;position:relative;width:20px}._fc-m-group-arrow:before{border-left:2px solid #999;border-top:2px solid #999;content:"";height:9px;left:5px;position:absolute;top:8px;transform:rotate(45deg);width:9px}._fc-m-group-arrow._fc-m-group-down{transform:rotate(180deg)}._fc-m-group-plus-minus{cursor:pointer;height:20px;position:relative;width:20px}._fc-m-group-plus-minus:after,._fc-m-group-plus-minus:before{background-color:#409eff;content:"";height:2px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:60%}._fc-m-group-plus-minus:before{transform:translate(-50%,-50%) rotate(90deg)}._fc-m-group-plus-minus._fc-m-group-minus:before{display:none}._fc-m-group-plus-minus._fc-m-group-minus:after{background-color:#f56c6c}._fc-m-group-add{border:1px solid rgba(64,158,255,.5);border-radius:15px;cursor:pointer;height:25px;transform:scale(1.1);width:25px}._fc-m-group-add._fc-m-group-plus-minus:after,._fc-m-group-add._fc-m-group-plus-minus:before{width:50%}._fc-m-group._fc-m-group-card{display:flex;flex-direction:column;gap:16px;width:100%}._fc-m-group._fc-m-group-card._fc-m-group-disabled ._fc-m-group-add,._fc-m-group._fc-m-group-card._fc-m-group-disabled ._fc-m-group-btn{cursor:not-allowed;opacity:.5}._fc-m-group._fc-m-group-card ._fc-m-group-container{background:#fff;border:1px solid #f0f0f0;border-radius:6px;display:flex;flex-direction:column;margin:0;overflow:hidden;padding:0;position:relative}._fc-m-group._fc-m-group-card ._fc-m-group-header{align-items:center;background:#fafafa;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;padding:16px 20px 12px}._fc-m-group._fc-m-group-card ._fc-m-group-idx{align-items:center;background:#f0f0f0;border:1px solid #e0e0e0;border-radius:6px;color:#666;display:flex;flex-shrink:0;font-size:12px;font-weight:500;height:24px;justify-content:center;margin-right:12px;position:static;width:24px}._fc-m-group._fc-m-group-card ._fc-m-group-title{color:rgba(0,0,0,.85);flex:1;font-size:14px;font-weight:500;line-height:1.5715;text-align:left}._fc-m-group._fc-m-group-card ._fc-m-group-handle{align-items:center;background-color:transparent;border:none;border-radius:0;bottom:auto;display:flex;flex-direction:row;flex-shrink:0;gap:4px;margin-left:12px;padding:0;position:static;right:auto;transform:none}._fc-m-group._fc-m-group-card ._fc-m-group-btn{align-items:center;background:#fff;border:1px solid #d9d9d9;border-radius:4px;color:rgba(0,0,0,.45);cursor:pointer;display:flex;height:24px;justify-content:center;position:relative;width:24px}._fc-m-group._fc-m-group-card ._fc-m-group-btn:hover{background:#f0f8ff;border-color:#1890ff;color:#1890ff}._fc-m-group._fc-m-group-card ._fc-m-group-btn:active{border-color:#096dd9;color:#096dd9}._fc-m-group._fc-m-group-card ._fc-m-group-arrow{position:relative}._fc-m-group._fc-m-group-card ._fc-m-group-arrow:before{border-left:1px solid;border-top:1px solid;content:"";height:5px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%) rotate(45deg);width:5px}._fc-m-group._fc-m-group-card ._fc-m-group-arrow._fc-m-group-down{transform:rotate(180deg)}._fc-m-group._fc-m-group-card ._fc-m-group-sort{align-items:center;display:flex;flex-direction:column;height:24px;justify-content:center;position:relative}._fc-m-group._fc-m-group-card ._fc-m-group-sort:after,._fc-m-group._fc-m-group-card ._fc-m-group-sort:before{border-left:1px solid;border-top:1px solid;content:"";height:4px;left:50%;position:absolute;transform:translateX(-50%);width:4px}._fc-m-group._fc-m-group-card ._fc-m-group-sort:before{top:6px;transform:translateX(-50%) rotate(45deg)}._fc-m-group._fc-m-group-card ._fc-m-group-sort:after{bottom:6px;transform:translateX(-50%) rotate(225deg)}._fc-m-group._fc-m-group-card ._fc-m-group-sort-down,._fc-m-group._fc-m-group-card ._fc-m-group-sort-up{cursor:pointer;height:12px;left:0;position:absolute;right:0;z-index:1}._fc-m-group._fc-m-group-card ._fc-m-group-sort-up{top:0}._fc-m-group._fc-m-group-card ._fc-m-group-sort-down{bottom:0}._fc-m-group._fc-m-group-card ._fc-m-group-sort-down:hover,._fc-m-group._fc-m-group-card ._fc-m-group-sort-up:hover{background:rgba(24,144,255,.1)}._fc-m-group._fc-m-group-card ._fc-m-group-plus-minus{background:#409eff;border-color:#409eff;border-radius:4px;color:#fff;height:24px;position:relative;width:24px}._fc-m-group._fc-m-group-card ._fc-m-group-plus-minus:hover{background:#66b1ff;border-color:#66b1ff;color:#fff}._fc-m-group._fc-m-group-card ._fc-m-group-plus-minus:after,._fc-m-group._fc-m-group-card ._fc-m-group-plus-minus:before{background-color:currentColor;content:"";height:1px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:8px}._fc-m-group._fc-m-group-card ._fc-m-group-plus-minus:before{transform:translate(-50%,-50%) rotate(90deg)}._fc-m-group._fc-m-group-card ._fc-m-group-plus-minus._fc-m-group-minus{background:#f56c6c;border-color:#f56c6c}._fc-m-group._fc-m-group-card ._fc-m-group-plus-minus._fc-m-group-minus:hover{background:#f78989;border-color:#f78989}._fc-m-group._fc-m-group-card ._fc-m-group-plus-minus._fc-m-group-minus:before{display:none}._fc-m-group._fc-m-group-card ._fc-m-group-content{padding:20px}._fc-m-group._fc-m-group-card ._fc-m-group-add{align-items:center;background:#fff;border:1px solid #d9d9d9;border-radius:4px;color:rgba(0,0,0,.45);cursor:pointer;display:flex;height:24px;justify-content:center;position:relative;transform:none;width:24px}._fc-m-group._fc-m-group-card ._fc-m-group-add:hover{background:#f0f8ff;border-color:#409eff;color:#409eff}._fc-m-group._fc-m-group-card ._fc-m-group-add._fc-m-group-plus-minus{background:#409eff;border-color:#409eff;color:#fff;height:24px;width:24px}._fc-m-group._fc-m-group-card ._fc-m-group-add._fc-m-group-plus-minus:hover{background:#66b1ff;border-color:#66b1ff;color:#fff}._fc-m-group._fc-m-group-card ._fc-m-group-add._fc-m-group-plus-minus:after,._fc-m-group._fc-m-group-card ._fc-m-group-add._fc-m-group-plus-minus:before{background-color:currentColor;content:"";height:1px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:8px}._fc-m-group._fc-m-group-card ._fc-m-group-add._fc-m-group-plus-minus:before{transform:translate(-50%,-50%) rotate(90deg)}._fc-m-group._fc-m-group-card ._fc-m-group-empty{color:rgba(0,0,0,.45);font-size:14px;padding:40px 20px;text-align:center}@media (max-width:768px){._fc-m-group._fc-m-group-card ._fc-m-group-container{border-left:none;border-radius:0;border-right:none;margin:0 -8px}._fc-m-group._fc-m-group-card ._fc-m-group-header{padding:12px 16px 8px}._fc-m-group._fc-m-group-card ._fc-m-group-content{padding:16px}._fc-m-group._fc-m-group-card ._fc-m-group-handle{gap:2px}._fc-m-group._fc-m-group-card ._fc-m-group-btn{height:22px;width:22px}}@media (prefers-color-scheme:dark){._fc-m-group._fc-m-group-card ._fc-m-group-container{background:#141414;border-color:#303030}._fc-m-group._fc-m-group-card ._fc-m-group-container:hover{border-color:#434343}._fc-m-group._fc-m-group-card ._fc-m-group-header{background:#1f1f1f;border-bottom-color:#303030}._fc-m-group._fc-m-group-card ._fc-m-group-title{color:hsla(0,0%,100%,.85)}._fc-m-group._fc-m-group-card ._fc-m-group-btn{background:#1f1f1f;border-color:#434343;color:hsla(0,0%,100%,.45)}._fc-m-group._fc-m-group-card ._fc-m-group-btn:hover{background:#111b26;border-color:#177ddc;color:#177ddc}._fc-m-group._fc-m-group-card ._fc-m-group-content{background:#141414}._fc-m-group._fc-m-group-card ._fc-m-group-add{background:#1f1f1f;border-color:#434343;color:hsla(0,0%,100%,.45)}._fc-m-group._fc-m-group-card ._fc-m-group-add:hover{background:#111b26;border-color:#177ddc;color:#177ddc}}'
ul(ll)
function ro(t, e) {
  return L.Boolean(t)
    ? t = {
      show: t,
    }
    : !L.Undef(t) && !L.Object(t) && (t = {
        show: e,
      }), t
}
function cl(t, e) {
  return {
    formEl() {
      return e.$manager.form()
    },
    wrapEl(r) {
      const i = e.getFieldCtx(r)
      if (i)
        return e.vm.refs[i.wrapRef]
    },
    validate(r) {
      return new Promise((i, o) => {
        const a = t.children; const s = [e.$manager.validate()]
        a.filter((u) => {
          return !u.isScope
        }).forEach((u) => {
          s.push(u.validate())
        }), Promise.all(s).then(() => {
          i(!0), r && r(!0)
        }).catch((u) => {
          o(u), r && r(u), e.vm.emit('validate-fail', u, {
            api: t,
          }), e.emitEvent('validate-fail', u, {
            api: t,
          })
        })
      })
    },
    validateField(r, i) {
      return new Promise((o, a) => {
        const s = e.getFieldCtx(r)
        if (s) {
          const u = e.subForm[s.id]; const c = [e.$manager.validateField(s.id)]
          Ft(u).filter((l) => {
            return !l.isScope
          }).forEach((l) => {
            c.push(l.validate())
          }), Promise.all(c).then(() => {
            o(null), i && i(null)
          }).catch((l) => {
            a(l), i && i(l), e.vm.emit('validate-field-fail', l, {
              field: r,
              api: t,
            })
          })
        }
      })
    },
    clearValidateState(r) {
      const i = this; const o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
      t.helper.tidyFields(r).forEach((a) => {
        o && i.clearSubValidateState(a), e.getCtxs(a).forEach((s) => {
          e.$manager.clearValidateState(s)
        })
      })
    },
    clearSubValidateState(r) {
      t.helper.tidyFields(r).forEach((i) => {
        e.getCtxs(i).forEach((o) => {
          const a = e.subForm[o.id]
          !a || (Array.isArray(a)
            ? a.forEach((s) => {
                s.clearValidateState()
              })
            : a && a.clearValidateState())
        })
      })
    },
    btn: {
      loading() {
        const r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
        t.submitBtnProps({
          loading: !!r,
        })
      },
      disabled() {
        const r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
        t.submitBtnProps({
          disabled: !!r,
        })
      },
      show() {
        const r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
        t.submitBtnProps({
          show: !!r,
        })
      },
    },
    resetBtn: {
      loading() {
        const r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
        t.resetBtnProps({
          loading: !!r,
        })
      },
      disabled() {
        const r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
        t.resetBtnProps({
          disabled: !!r,
        })
      },
      show() {
        const r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
        t.resetBtnProps({
          show: !!r,
        })
      },
    },
    submitBtnProps() {
      const r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; const i = ro(e.options.submitBtn, !0)
      ie(i, r), e.options.submitBtn = i, t.refreshOptions()
    },
    resetBtnProps() {
      const r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; const i = ro(e.options.resetBtn, !1)
      ie(i, r), e.options.resetBtn = i, t.refreshOptions()
    },
    submit(r, i) {
      return new Promise((o, a) => {
        const s = e.options.validateOnSubmit === !1 ? Promise.resolve() : t.validate()
        s.then(() => {
          const u = t.formData()
          e.beforeSubmit(u).then(() => {
            L.Function(r) && ce(() => {
              return r(u, t)
            }), L.Function(e.options.onSubmit) && ce(() => {
              return e.options.onSubmit(u, t)
            }), e.vm.emit('submit', u, t), o(u)
          }).catch((c) => {
          })
        }).catch(function () {
          for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++)
            c[l] = arguments[l]
          L.Function(i) && ce(() => {
            return i.apply(void 0, [t].concat(c))
          }), a.apply(void 0, c)
        })
      })
    },
  }
}
var Tr = {
  name: 'required',
  load(e, n, r) {
    const i = fl(e.getValue())
    if (i.required === !1) {
      e.clearProp(), r.clearValidateState([n.field])
    } else {
      let o; let a; const s = Z({
        required: !0,
        validator(p) {
          return !L.empty(p)
        },
        trigger: ['onChange', 'onSubmit'],
      }, i); const u = (o = n.__fc__.refRule) === null || o === void 0 || (a = o.__$title) === null || a === void 0 ? void 0 : a.value
      if (!s.message) {
        s.message = r.t('required', {
          title: u,
        }) || u + (r.getLocale() === 'en' ? ' is required' : '\u4E0D\u80FD\u4E3A\u7A7A')
      } else {
        const c = s.message.match(/^\{\{\s*\$t\.(.+)\s*\}\}$/)
        c && (s.message = r.t(c[1], {
          title: u,
        }))
      }
      e.getProp().validate = [s]
    }
    r.sync(n)
  },
  watch() {
    Tr.load.apply(Tr, arguments)
  },
}
function fl(t) {
  return L.Boolean(t)
    ? {
        required: t,
      }
    : L.String(t)
      ? {
          message: t,
        }
      : L.Undef(t)
        ? {
            required: !1,
          }
        : L.Function(t)
          ? {
              validator: t,
            }
          : L.Object(t) ? t : {}
}
function dl(t) {
  t.componentAlias(il), eu.forEach((e) => {
    t.component(e.name, e)
  }), t.register(Tr), rl.forEach((e) => {
    t.parser(e)
  }), Bi.props && (Bi.props.modelValue = {
    type: [String, Number, Array, Object, Boolean, Function],
    default: '',
  })
}
function hl() {
  return aa({
    ui: 'vant',
    version: '3.2.33',
    manager: sl,
    extendApi: cl,
    install: dl,
    isMobile: !0,
    attrs: {
      normal: ['col', 'wrap'],
      key: ['title', 'info'],
    },
  })
}
const ye = hl()
typeof window < 'u' && (window.formCreateMobile = ye)
ye.maker
/*!
 * @form-create/component-elm-select v3.2.18
 * (c) 2018-2025 xaboy
 * Github https://github.com/xaboy/form-create with select
 * Released under the MIT License.
 */
function io(t, e) {
  const n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    let r = Object.getOwnPropertySymbols(t)
    e && (r = r.filter((i) => {
      return Object.getOwnPropertyDescriptor(t, i).enumerable
    })), n.push.apply(n, r)
  }
  return n
}
function pl(t) {
  for (let e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? io(new Object(n), !0).forEach((r) => {
          ml(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : io(new Object(n)).forEach((r) => {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function Bn(t) {
  return typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? Bn = function (e) {
      return typeof e
    }
    : Bn = function (e) {
      return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
    }, Bn(t)
}
function ml(t, e, n) {
  return e in t
    ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
    : t[e] = n, t
}
function gl(t, e) {
  return Object.keys(t).reduce((n, r) => {
    return (!e || !e.includes(r)) && (n[r] = t[r]), n
  }, {})
}
var Yn = {
  type(e, n) {
    return Object.prototype.toString.call(e) === `[object ${n}]`
  },
  Undef(e) {
    return e == null
  },
  Element(e) {
    return Bn(e) === 'object' && e !== null && e.nodeType === 1 && !Yn.Object(e)
  },
  trueArray(e) {
    return Array.isArray(e) && e.length > 0
  },
  Function(e) {
    const n = this.getType(e)
    return n === 'Function' || n === 'AsyncFunction'
  },
  getType(e) {
    const n = Object.prototype.toString.call(e)
    return /^\[object (.*)\]$/.exec(n)[1]
  },
  empty(e) {
    return e == null || Array.isArray(e) && Array.isArray(e) && !e.length ? !0 : typeof e == 'string' && !e
  },
};
['Date', 'Object', 'String', 'Boolean', 'Array', 'Number'].forEach((t) => {
  Yn[t] = function (e) {
    return Yn.type(e, t)
  }
})
function vl(t, e) {
  return {}.hasOwnProperty.call(t, e)
}
const yl = 'fcSelect'; const _l = he({
  name: yl,
  inheritAttrs: !1,
  props: {
    formCreateInject: Object,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0,
    },
    type: String,
  },
  emits: ['update:modelValue', 'fc.el'],
  setup(e) {
    const n = Pe(e.formCreateInject, 'options', []); const r = Pe(e, 'modelValue'); const i = function () {
      return Array.isArray(n.value) ? n.value : []
    }
    return {
      options: i,
      value: r,
    }
  },
  render() {
    const e = this; let n; let r; const i = function (u, c) {
      return q(Q('ElOption'), Me(u, {
        key: `${c}-${u.value}`,
      }), null)
    }; const o = function (u, c) {
      return q(Q('ElOptionGroup'), {
        label: u.label,
        key: `${c}-${u.label}`,
      }, {
        default() {
          return [Yn.trueArray(u.options) && u.options.map((p, h) => {
            return i(p, h)
          })]
        },
      })
    }; const a = this.options()
    return q(Q('ElSelect'), Me(this.$attrs, {
      'modelValue': this.value,
      'onUpdate:modelValue': function (u) {
        return e.$emit('update:modelValue', u)
      },
      'ref': 'el',
    }), pl({
      default() {
        return [a.map((u, c) => {
          return vl(u || '', 'options') ? o(u, c) : i(u, c)
        }), (n = (r = e.$slots).default) === null || n === void 0 ? void 0 : n.call(r)]
      },
    }, gl(this.$slots, ['default'])))
  },
  mounted() {
    this.$emit('fc.el', this.$refs.el)
  },
})
/*!
 * @form-create/component-elm-tree v3.2.18
 * (c) 2018-2025 xaboy
 * Github https://github.com/xaboy/form-create with tree
 * Released under the MIT License.
 */
function bl(t) {
  return Array.isArray(t) ? t : [null, void 0, ''].includes(t) ? [] : [t]
}
const wl = 'fcTree'; const $l = he({
  name: wl,
  inheritAttrs: !1,
  formCreateParser: {
    mergeProp(e) {
      const n = e.prop.props
      n.nodeKey || (n.nodeKey = 'id'), n.props || (n.props = {
        label: 'title',
      })
    },
  },
  props: {
    type: String,
    modelValue: {
      type: [Array, String, Number],
      default() {
        return []
      },
    },
  },
  emits: ['update:modelValue', 'fc.el'],
  watch: {
    modelValue() {
      this.setValue()
    },
  },
  methods: {
    updateValue() {
      if (this.$refs.tree) {
        let e
        this.type === 'selected' ? e = this.$refs.tree.getCurrentKey() : e = this.$refs.tree.getCheckedKeys(), this.$emit('update:modelValue', e)
      }
    },
    setValue() {
      if (this.$refs.tree) {
        const e = this.type
        e === 'selected' ? this.$refs.tree.setCurrentKey(this.modelValue) : this.$refs.tree.setCheckedKeys(bl(this.modelValue))
      }
    },
  },
  render() {
    return q(Q('ElTree'), Me(this.$attrs, {
      ref: 'tree',
      onCheck: this.updateValue,
      onNodeClick: this.updateValue,
    }), this.$slots)
  },
  mounted() {
    this.setValue(), this.$emit('fc.el', this.$refs.tree)
  },
})
/*!
 * @form-create/component-elm-upload v3.2.18
 * (c) 2018-2025 xaboy
 * Github https://github.com/xaboy/form-create with upload
 * Released under the MIT License.
 */
function oo(t, e) {
  const n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    let r = Object.getOwnPropertySymbols(t)
    e && (r = r.filter((i) => {
      return Object.getOwnPropertyDescriptor(t, i).enumerable
    })), n.push.apply(n, r)
  }
  return n
}
function jr(t) {
  for (let e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? oo(new Object(n), !0).forEach((r) => {
          Sl(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : oo(new Object(n)).forEach((r) => {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function Nn(t) {
  return typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? Nn = function (e) {
      return typeof e
    }
    : Nn = function (e) {
      return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
    }, Nn(t)
}
function Sl(t, e, n) {
  return e in t
    ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
    : t[e] = n, t
}
function Rn(t) {
  return Array.isArray(t) ? t : [null, void 0, ''].includes(t) ? [] : [t]
}
function Ol(t, e) {
  return Object.keys(t).reduce((n, r) => {
    return (!e || !e.includes(r)) && (n[r] = t[r]), n
  }, {})
}
function xl(t, e) {
  e === void 0 && (e = {})
  const n = e.insertAt
  if (!(!t || typeof document > 'u')) {
    const r = document.head || document.getElementsByTagName('head')[0]; const i = document.createElement('style')
    i.type = 'text/css', n === 'top' && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
  }
}
const El = '._fc-upload{width:100%}._fc-exceed .el-upload{display:none}.el-upload-list.is-disabled .el-upload{cursor:not-allowed!important}'
xl(El)
const sa = {
  name: 'IconUpload',
}; const Cl = {
  class: 'icon',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}; const kl = /* @__PURE__ */ xe('path', {
  fill: 'currentColor',
  d: 'M160 832h704a32 32 0 110 64H160a32 32 0 110-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z',
}, null, -1); const Al = [kl]
function Dl(t, e, n, r, i, o) {
  return te(), de('svg', Cl, Al)
}
sa.render = Dl
function ao(t, e) {
  return Nn(t) === 'object'
    ? t
    : {
        url: t,
        is_string: !0,
        name: Rl(t),
        uid: e,
      }
}
function so(t) {
  return jr(jr({}, t), {}, {
    file: t,
    value: t,
  })
}
function Rl(t) {
  return (`${t}`).split('/').pop()
}
const Pl = 'fcUpload'; const Ml = he({
  name: Pl,
  inheritAttrs: !1,
  formCreateParser: {
    toFormValue(e) {
      return Rn(e)
    },
    toValue(e, n) {
      return n.prop.props.limit === 1 ? e[0] || '' : e
    },
  },
  props: {
    previewMask: void 0,
    onPreview: Function,
    httpRequest: Function,
    modalTitle: String,
    listType: String,
    formCreateInject: Object,
    modelValue: [Array, String, Object],
  },
  emits: ['update:modelValue', 'change', 'remove', 'fc.el'],
  data() {
    return {
      previewVisible: !1,
      previewImage: '',
      fileList: [],
    }
  },
  created() {
    this.fileList = Rn(this.modelValue).map(ao).map(so)
  },
  watch: {
    modelValue(e) {
      this.fileList = Rn(e).map(ao).map(so)
    },
  },
  methods: {
    handlePreview(e) {
      this.onPreview ? this.onPreview.apply(this, arguments) : this.listType === 'text' ? window.open(e.url) : (this.previewImage = e.url, this.previewVisible = !0)
    },
    update(e) {
      const n = e.map((r) => {
        return r.is_string ? r.url : r.value || r.url
      }).filter((r) => {
        return r !== void 0
      })
      this.$emit('update:modelValue', n)
    },
    handleCancel() {
      this.previewVisible = !1
    },
    handleChange(e, n) {
      this.$emit.apply(this, ['change'].concat(Array.prototype.slice.call(arguments))), e.status === 'success' && this.update(n)
    },
    handleRemove(e, n) {
      this.$emit.apply(this, ['remove'].concat(Array.prototype.slice.call(arguments))), this.update(n)
    },
    doHttpRequest(e) {
      if (this.httpRequest)
        return this.httpRequest(e)
      e.source = 'upload', this.formCreateInject.api.fetch(e)
    },
  },
  render() {
    let e; let n; const r = this; const i = Rn(this.modelValue).length
    return q('div', {
      class: '_fc-upload',
    }, [q(Q('ElUpload'), Me({
      key: i,
    }, this.$attrs, {
      listType: this.listType || 'picture-card',
      class: {
        '_fc-exceed': this.$attrs.limit ? this.$attrs.limit <= i : !1,
      },
      onPreview: this.handlePreview,
      onChange: this.handleChange,
      onRemove: this.handleRemove,
      httpRequest: this.doHttpRequest,
      fileList: this.fileList,
      ref: 'upload',
    }), jr({
      default() {
        return [((e = (n = r.$slots).default) === null || e === void 0 ? void 0 : e.call(n)) || (!['text', 'picture'].includes(r.listType)
          ? q(Q('ElIcon'), null, {
              default() {
                return [q(sa, null, null)]
              },
            })
          : q(Q('ElButton'), {
              type: 'primary',
            }, {
              default() {
                return [r.formCreateInject.t('clickToUpload') || '\u70B9\u51FB\u4E0A\u4F20']
              },
            }))]
      },
    }, Ol(this.$slots, ['default']))), q(Q('ElDialog'), {
      appendToBody: !0,
      modal: this.previewMask,
      title: this.modalTitle,
      modelValue: this.previewVisible,
      onClose: this.handleCancel,
    }, {
      default() {
        return [q('img', {
          style: 'width: 100%',
          src: r.previewImage,
        }, null)]
      },
    })])
  },
  mounted() {
    this.$emit('fc.el', this.$refs.upload)
  },
})
const nt = {
  type(t, e) {
    return Object.prototype.toString.call(t) === `[object ${e}]`
  },
  Undef(t) {
    return t == null
  },
  Element(t) {
    return typeof t == 'object' && t !== null && t.nodeType === 1 && !nt.Object(t)
  },
  trueArray(t) {
    return Array.isArray(t) && t.length > 0
  },
  Function(t) {
    const e = this.getType(t)
    return e === 'Function' || e === 'AsyncFunction'
  },
  getType(t) {
    const e = Object.prototype.toString.call(t)
    return /^\[object (.*)\]$/.exec(e)[1]
  },
  empty(t) {
    return t == null || Array.isArray(t) && Array.isArray(t) && !t.length ? !0 : typeof t == 'string' && !t
  },
};
['Date', 'Object', 'String', 'Boolean', 'Array', 'Number'].forEach((t) => {
  nt[t] = function (e) {
    return nt.type(e, t)
  }
})
function Tl(t, e) {
  return {}.hasOwnProperty.call(t, e)
}
const $n = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {}
function jl(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t
}
const Xr = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r()
  })($n, () => {
    const n = 1e3; const r = 6e4; const i = 36e5; const o = 'millisecond'; const a = 'second'; const s = 'minute'; const u = 'hour'; const c = 'day'; const l = 'week'; const p = 'month'; const h = 'quarter'; const m = 'year'; const w = 'date'; const $ = 'Invalid Date'; const A = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i; const F = /\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g; const I = { name: 'en', weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'), months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), ordinal(k) {
      const S = ['th', 'st', 'nd', 'rd']; const _ = k % 100
      return `[${k}${S[(_ - 20) % 10] || S[_] || S[0]}]`
    } }; const V = function (k, S, _) {
      const d = String(k)
      return !d || d.length >= S ? k : `${Array.from({ length: S + 1 - d.length }).join(_)}${k}`
    }; const G = { s: V, z(k) {
      const S = -k.utcOffset(); const _ = Math.abs(S); const d = Math.floor(_ / 60); const f = _ % 60
      return `${(S <= 0 ? '+' : '-') + V(d, 2, '0')}:${V(f, 2, '0')}`
    }, m: function k(S, _) {
      if (S.date() < _.date())
        return -k(_, S)
      const d = 12 * (_.year() - S.year()) + (_.month() - S.month()); const f = S.clone().add(d, p); const g = _ - f < 0; const y = S.clone().add(d + (g ? -1 : 1), p)
      return +(-(d + (_ - f) / (g ? f - y : y - f)) || 0)
    }, a(k) {
      return k < 0 ? Math.ceil(k) || 0 : Math.floor(k)
    }, p(k) {
      return { M: p, y: m, w: l, d: c, D: w, h: u, m: s, s: a, ms: o, Q: h }[k] || String(k || '').toLowerCase().replace(/s$/, '')
    }, u(k) {
      return k === void 0
    } }; let ee = 'en'; const X = {}
    X[ee] = I
    const re = '$isDayjsObject'; const Y = function (k) {
      return k instanceof _e || !(!k || !k[re])
    }; const oe = function k(S, _, d) {
      let f
      if (!S)
        return ee
      if (typeof S == 'string') {
        const g = S.toLowerCase()
        X[g] && (f = g), _ && (X[g] = _, f = g)
        const y = S.split('-')
        if (!f && y.length > 1)
          return k(y[0])
      } else {
        const v = S.name
        X[v] = S, f = v
      }
      return !d && f && (ee = f), f || !d && ee
    }; const W = function (k, S) {
      if (Y(k))
        return k.clone()
      const _ = typeof S == 'object' ? S : {}
      return _.date = k, _.args = arguments, new _e(_)
    }; const H = G
    H.l = oe, H.i = Y, H.w = function (k, S) {
      return W(k, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset })
    }
    var _e = (function () {
      function k(_) {
        this.$L = oe(_.locale, null, !0), this.parse(_), this.$x = this.$x || _.x || {}, this[re] = !0
      }
      const S = k.prototype
      return S.parse = function (_) {
        this.$d = (function (d) {
          const f = d.date; const g = d.utc
          if (f === null)
            return new Date(Number.NaN)
          if (H.u(f))
            return new Date()
          if (f instanceof Date)
            return new Date(f)
          if (typeof f == 'string' && !/Z$/i.test(f)) {
            const y = f.match(A)
            if (y) {
              const v = y[2] - 1 || 0; const E = (y[7] || '0').substring(0, 3)
              return g ? new Date(Date.UTC(y[1], v, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, E)) : new Date(y[1], v, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, E)
            }
          }
          return new Date(f)
        }(_)), this.init()
      }, S.init = function () {
        const _ = this.$d
        this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds()
      }, S.$utils = function () {
        return H
      }, S.isValid = function () {
        return this.$d.toString() !== $
      }, S.isSame = function (_, d) {
        const f = W(_)
        return this.startOf(d) <= f && f <= this.endOf(d)
      }, S.isAfter = function (_, d) {
        return W(_) < this.startOf(d)
      }, S.isBefore = function (_, d) {
        return this.endOf(d) < W(_)
      }, S.$g = function (_, d, f) {
        return H.u(_) ? this[d] : this.set(f, _)
      }, S.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
      }, S.valueOf = function () {
        return this.$d.getTime()
      }, S.startOf = function (_, d) {
        const f = this; const g = !!H.u(d) || d; const y = H.p(_); const v = function (D, C) {
          const R = H.w(f.$u ? Date.UTC(f.$y, C, D) : new Date(f.$y, C, D), f)
          return g ? R : R.endOf(c)
        }; const E = function (D, C) {
          return H.w(f.toDate()[D].apply(f.toDate('s'), (g ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(C)), f)
        }; const T = this.$W; const M = this.$M; const U = this.$D; const B = `set${this.$u ? 'UTC' : ''}`
        switch (y) {
          case m:
            return g ? v(1, 0) : v(31, 11)
          case p:
            return g ? v(1, M) : v(0, M + 1)
          case l:
            var N = this.$locale().weekStart || 0; var z = (T < N ? T + 7 : T) - N
            return v(g ? U - z : U + (6 - z), M)
          case c:
          case w:
            return E(`${B}Hours`, 0)
          case u:
            return E(`${B}Minutes`, 1)
          case s:
            return E(`${B}Seconds`, 2)
          case a:
            return E(`${B}Milliseconds`, 3)
          default:
            return this.clone()
        }
      }, S.endOf = function (_) {
        return this.startOf(_, !1)
      }, S.$set = function (_, d) {
        let f; const g = H.p(_); const y = `set${this.$u ? 'UTC' : ''}`; const v = (f = {}, f[c] = `${y}Date`, f[w] = `${y}Date`, f[p] = `${y}Month`, f[m] = `${y}FullYear`, f[u] = `${y}Hours`, f[s] = `${y}Minutes`, f[a] = `${y}Seconds`, f[o] = `${y}Milliseconds`, f)[g]; const E = g === c ? this.$D + (d - this.$W) : d
        if (g === p || g === m) {
          const T = this.clone().set(w, 1)
          T.$d[v](E), T.init(), this.$d = T.set(w, Math.min(this.$D, T.daysInMonth())).$d
        } else {
          v && this.$d[v](E)
        }
        return this.init(), this
      }, S.set = function (_, d) {
        return this.clone().$set(_, d)
      }, S.get = function (_) {
        return this[H.p(_)]()
      }, S.add = function (_, d) {
        let f; const g = this
        _ = Number(_)
        const y = H.p(d); const v = function (M) {
          const U = W(g)
          return H.w(U.date(U.date() + Math.round(M * _)), g)
        }
        if (y === p)
          return this.set(p, this.$M + _)
        if (y === m)
          return this.set(m, this.$y + _)
        if (y === c)
          return v(1)
        if (y === l)
          return v(7)
        const E = (f = {}, f[s] = r, f[u] = i, f[a] = n, f)[y] || 1; const T = this.$d.getTime() + _ * E
        return H.w(T, this)
      }, S.subtract = function (_, d) {
        return this.add(-1 * _, d)
      }, S.format = function (_) {
        const d = this; const f = this.$locale()
        if (!this.isValid())
          return f.invalidDate || $
        const g = _ || 'YYYY-MM-DDTHH:mm:ssZ'; const y = H.z(this); const v = this.$H; const E = this.$m; const T = this.$M; const M = f.weekdays; const U = f.months; const B = f.meridiem; const N = function (C, R, b, x) {
          return C && (C[R] || C(d, g)) || b[R].slice(0, x)
        }; const z = function (C) {
          return H.s(v % 12 || 12, C, '0')
        }; const D = B || function (C, R, b) {
          const x = C < 12 ? 'AM' : 'PM'
          return b ? x.toLowerCase() : x
        }
        return g.replace(F, (C, R) => {
          return R || (function (b) {
            switch (b) {
              case 'YY':
                return String(d.$y).slice(-2)
              case 'YYYY':
                return H.s(d.$y, 4, '0')
              case 'M':
                return T + 1
              case 'MM':
                return H.s(T + 1, 2, '0')
              case 'MMM':
                return N(f.monthsShort, T, U, 3)
              case 'MMMM':
                return N(U, T)
              case 'D':
                return d.$D
              case 'DD':
                return H.s(d.$D, 2, '0')
              case 'd':
                return String(d.$W)
              case 'dd':
                return N(f.weekdaysMin, d.$W, M, 2)
              case 'ddd':
                return N(f.weekdaysShort, d.$W, M, 3)
              case 'dddd':
                return M[d.$W]
              case 'H':
                return String(v)
              case 'HH':
                return H.s(v, 2, '0')
              case 'h':
                return z(1)
              case 'hh':
                return z(2)
              case 'a':
                return D(v, E, !0)
              case 'A':
                return D(v, E, !1)
              case 'm':
                return String(E)
              case 'mm':
                return H.s(E, 2, '0')
              case 's':
                return String(d.$s)
              case 'ss':
                return H.s(d.$s, 2, '0')
              case 'SSS':
                return H.s(d.$ms, 3, '0')
              case 'Z':
                return y
            }
            return null
          }(C)) || y.replace(':', '')
        })
      }, S.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
      }, S.diff = function (_, d, f) {
        let g; const y = this; const v = H.p(d); const E = W(_); const T = (E.utcOffset() - this.utcOffset()) * r; const M = this - E; const U = function () {
          return H.m(y, E)
        }
        switch (v) {
          case m:
            g = U() / 12
            break
          case p:
            g = U()
            break
          case h:
            g = U() / 3
            break
          case l:
            g = (M - T) / 6048e5
            break
          case c:
            g = (M - T) / 864e5
            break
          case u:
            g = M / i
            break
          case s:
            g = M / r
            break
          case a:
            g = M / n
            break
          default:
            g = M
        }
        return f ? g : H.a(g)
      }, S.daysInMonth = function () {
        return this.endOf(p).$D
      }, S.$locale = function () {
        return X[this.$L]
      }, S.locale = function (_, d) {
        if (!_)
          return this.$L
        const f = this.clone(); const g = oe(_, d, !0)
        return g && (f.$L = g), f
      }, S.clone = function () {
        return H.w(this.$d, this)
      }, S.toDate = function () {
        return new Date(this.valueOf())
      }, S.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
      }, S.toISOString = function () {
        return this.$d.toISOString()
      }, S.toString = function () {
        return this.$d.toUTCString()
      }, k
    }()); const Ue = _e.prototype
    return W.prototype = Ue, [['$ms', o], ['$s', a], ['$m', s], ['$H', u], ['$W', c], ['$M', p], ['$y', m], ['$D', w]].forEach((k) => {
      Ue[k[1]] = function (S) {
        return this.$g(S, k[0], k[1])
      }
    }), W.extend = function (k, S) {
      return k.$i || (k(S, _e, W), k.$i = !0), W
    }, W.locale = oe, W.isDayjs = Y, W.unix = function (k) {
      return W(1e3 * k)
    }, W.en = X[ee], W.Ls = X, W.p = {}, W
  })
})(Xr)
const Ae = Xr.exports
const ua = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r()
  })($n, () => {
    const n = 'month'; const r = 'quarter'
    return function (i, o) {
      const a = o.prototype
      a.quarter = function (c) {
        return this.$utils().u(c) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (c - 1))
      }
      const s = a.add
      a.add = function (c, l) {
        return c = Number(c), this.$utils().p(l) === r ? this.add(3 * c, n) : s.bind(this)(c, l)
      }
      const u = a.startOf
      a.startOf = function (c, l) {
        const p = this.$utils(); const h = !!p.u(l) || l
        if (p.p(c) === r) {
          const m = this.quarter() - 1
          return h ? this.month(3 * m).startOf(n).startOf('day') : this.month(3 * m + 2).endOf(n).endOf('day')
        }
        return u.bind(this)(c, l)
      }
    }
  })
})(ua)
const Fl = ua.exports
const la = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r()
  })($n, () => {
    const n = 'week'; const r = 'year'
    return function (i, o, a) {
      const s = o.prototype
      s.week = function (u) {
        if (u === void 0 && (u = null), u !== null)
          return this.add(7 * (u - this.week()), 'day')
        const c = this.$locale().yearStart || 1
        if (this.month() === 11 && this.date() > 25) {
          const l = a(this).startOf(r).add(1, r).date(c); const p = a(this).endOf(n)
          if (l.isBefore(p))
            return 1
        }
        const h = a(this).startOf(r).date(c).startOf(n).subtract(1, 'millisecond'); const m = this.diff(h, n, !0)
        return m < 0 ? a(this).startOf('week').week() : Math.ceil(m)
      }, s.weeks = function (u) {
        return u === void 0 && (u = null), this.week(u)
      }
    }
  })
})(la)
const Vl = la.exports
const Il = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r(Xr.exports)
  })($n, (n) => {
    function r(a) {
      return a && typeof a == 'object' && 'default' in a ? a : { default: a }
    }
    const i = r(n); const o = { name: 'zh-cn', weekdays: '\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D'.split('_'), weekdaysShort: '\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D'.split('_'), weekdaysMin: '\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D'.split('_'), months: '\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708'.split('_'), monthsShort: '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split('_'), ordinal(a, s) {
      return s === 'W' ? `${a}\u5468` : `${a}\u65E5`
    }, weekStart: 1, yearStart: 4, formats: { LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY\u5E74M\u6708D\u65E5', LLL: 'YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206', LLLL: 'YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206', l: 'YYYY/M/D', ll: 'YYYY\u5E74M\u6708D\u65E5', lll: 'YYYY\u5E74M\u6708D\u65E5 HH:mm', llll: 'YYYY\u5E74M\u6708D\u65E5dddd HH:mm' }, relativeTime: { future: '%s\u5185', past: '%s\u524D', s: '\u51E0\u79D2', m: '1 \u5206\u949F', mm: '%d \u5206\u949F', h: '1 \u5C0F\u65F6', hh: '%d \u5C0F\u65F6', d: '1 \u5929', dd: '%d \u5929', M: '1 \u4E2A\u6708', MM: '%d \u4E2A\u6708', y: '1 \u5E74', yy: '%d \u5E74' }, meridiem(a, s) {
      const u = 100 * a + s
      return u < 600 ? '\u51CC\u6668' : u < 900 ? '\u65E9\u4E0A' : u < 1100 ? '\u4E0A\u5348' : u < 1300 ? '\u4E2D\u5348' : u < 1800 ? '\u4E0B\u5348' : '\u665A\u4E0A'
    } }
    return i.default.locale(o, null, !0), o
  })
})(Il)
Ae.locale('zh-cn')
Ae.extend(Fl)
Ae.extend(Vl)
function uo(t, e, n) {
  e = (e || '').split('.')
  let r = 0; const i = e.length
  for (; t != null && r < i;)
    t = t[e[r++]]
  return r && r === i && t !== void 0 ? t : n
}
const qt = {
  Add: (t, e) => {
    let n, r, i
    try {
      n = t.toString().split('.')[1].length
    } catch {
      n = 0
    }
    try {
      r = e.toString().split('.')[1].length
    } catch {
      r = 0
    }
    return i = 10 ** Math.max(n, r), (t * i + e * i) / i
  },
  Sub: (t, e) => {
    let n, r, i
    try {
      n = t.toString().split('.')[1].length
    } catch {
      n = 0
    }
    try {
      r = e.toString().split('.')[1].length
    } catch {
      r = 0
    }
    i = 10 ** Math.max(n, r)
    const o = n >= r ? n : r
    return Number(((t * i - e * i) / i).toFixed(o))
  },
  Mul: (t, e) => {
    let n = 0; const r = t.toString(); const i = e.toString()
    try {
      n += r.split('.')[1].length
    } catch {
    }
    try {
      n += i.split('.')[1].length
    } catch {
    }
    return Number(r.replace('.', '')) * Number(i.replace('.', '')) / 10 ** n
  },
  Div: (t, e) => {
    let n = 0; let r = 0
    try {
      n = t.toString().split('.')[1].length
    } catch {
    }
    try {
      r = e.toString().split('.')[1].length
    } catch {
    }
    const i = Number(t.toString().replace('.', '')); const o = Number(e.toString().replace('.', ''))
    return i / o * 10 ** (r - n)
  },
}; const Ll = 'YYYY-MM-DD HH:mm:ss'; const Ct = (t, e) => t == null ? e : t; const Ie = {
  ADD(t, e) {
    return qt.Add(Ct(t, '0'), Ct(e, '0'))
  },
  SUB(t, e) {
    return qt.Sub(Ct(t, '0'), Ct(e, '0'))
  },
  MUL(t, e) {
    return qt.Mul(Ct(t, '0'), Ct(e, '0'))
  },
  DIV(t, e) {
    return qt.Div(Ct(t, '0'), Ct(e, '0'))
  },
  SUM(...t) {
    return (t || []).reduce((e, n) => qt.Add(e, Array.isArray(n) ? Ie.SUM(...n) : n || 0), 0)
  },
  MAX(...t) {
    const e = Array.isArray(t[0]) ? t[0] : t
    return Math.max(
      ...e.map(n => Number.parseFloat(n)).filter(n => !isNaN(n)),
    )
  },
  MIN(...t) {
    const e = Array.isArray(t[0]) ? t[0] : t
    return Math.min(
      ...e.map(n => Number.parseFloat(n)).filter(n => !isNaN(n)),
    )
  },
  ABS(t) {
    return Number.parseFloat(Math.abs(t)) || 0
  },
  AVG(...t) {
    const e = Array.isArray(t[0]) ? t[0] : t
    return e.length ? qt.Div(Ie.SUM(e), e.length) : 0
  },
  POWER(t, e) {
    return Number.parseFloat(t) ** Number.parseFloat(e)
  },
  RAND() {
    return Math.random()
  },
  CEIL(t) {
    return Math.ceil(Number.parseFloat(t)) || 0
  },
  FLOOR(t) {
    return Math.floor(Number.parseFloat(t) || 0)
  },
  FIXED(t, e) {
    const n = 10 ** (e || 0)
    return (Math.floor(Number.parseFloat(t) * n) / n).toFixed(e || 0)
  },
  ISNUMBER(t) {
    return t === '' || t === null ? !1 : !isNaN(Number(t))
  },
  PI() {
    return Number(Math.PI)
  },
  ROUND(t, e) {
    return t = Number.parseFloat(t), isNaN(t) ? 0 : Number.parseFloat(t.toFixed(Number.parseFloat(e) || 0))
  },
  SQRT(t) {
    return Math.sqrt(Number.parseFloat(t)) || 0
  },
  TONUMBER(t) {
    return Number.parseFloat(t) || 0
  },
  MODIFYDATE(t, e, n, r) {
    if (!t)
      return null
    let i = Ae(t)
    return e > 0 ? i = i.add(e, n) : e < 0 && (i = i.subtract(-1 * e, n)), i.format(r || Ll)
  },
  ADDYEAR(t, e, n) {
    return Ie.MODIFYDATE(t, Math.max(e, 0), 'y', n)
  },
  ADDMONTH(t, e, n) {
    return Ie.MODIFYDATE(t, Math.max(e, 0), 'M', n)
  },
  ADDDAY(t, e, n) {
    return Ie.MODIFYDATE(t, Math.max(e, 0), 'd', n)
  },
  ADDHOUR(t, e, n) {
    return Ie.MODIFYDATE(t, Math.max(e, 0), 'h', n)
  },
  ADDMINUTE(t, e, n) {
    return Ie.MODIFYDATE(t, Math.max(e, 0), 'm', n)
  },
  ADDSECOND(t, e, n) {
    return Ie.MODIFYDATE(t, Math.max(e, 0), 's', n)
  },
  ADDWEEK(t, e, n) {
    return Ie.MODIFYDATE(t, Math.max(e, 0), 'w', n)
  },
  SUBYEAR(t, e, n) {
    return e = Math.max(e, 0), Ie.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'y', n)
  },
  SUBMONTH(t, e, n) {
    return e = Math.max(e, 0), Ie.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'M', n)
  },
  SUBDAY(t, e, n) {
    return e = Math.max(e, 0), Ie.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'd', n)
  },
  SUBHOUR(t, e, n) {
    return e = Math.max(e, 0), Ie.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'h', n)
  },
  SUBMINUTE(t, e, n) {
    return e = Math.max(e, 0), Ie.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'm', n)
  },
  SUBSECOND(t, e, n) {
    return e = Math.max(e, 0), Ie.MODIFYDATE(t, e > 0 ? -1 * e : 0, 's', n)
  },
  SUBWEEK(t, e, n) {
    return e = Math.max(e, 0), Ie.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'w', n)
  },
  NOW() {
    const t = new Date(); const e = t.getFullYear(); const n = (`0${t.getMonth() + 1}`).slice(-2); const r = (`0${t.getDate()}`).slice(-2); const i = (`0${t.getHours()}`).slice(-2); const o = (`0${t.getMinutes()}`).slice(-2); const a = (`0${t.getSeconds()}`).slice(-2)
    return `${e}-${n}-${r} ${i}:${o}:${a}`
  },
  TODAY() {
    const t = new Date(); const e = t.getFullYear(); const n = (`0${t.getMonth() + 1}`).slice(-2); const r = (`0${t.getDate()}`).slice(-2)
    return `${e}-${n}-${r}`
  },
  YEAR(t) {
    return t ? new Date(t).getFullYear() : null
  },
  MONTH(t) {
    return t ? new Date(t).getMonth() + 1 : null
  },
  DAY(t) {
    return t ? new Date(t).getDate() : null
  },
  HOUR(t) {
    return t ? new Date(t).getHours() : null
  },
  MINUTE(t) {
    return t ? new Date(t).getMinutes() : null
  },
  SECOND(t) {
    return t ? new Date(t).getSeconds() : null
  },
  DIFFDAYS(t, e) {
    const n = new Date(t); const r = new Date(e)
    return Number.parseInt(Math.ceil(Math.abs(r.getTime() - n.getTime()) / (1e3 * 60 * 60 * 24)))
  },
  DIFFHOURS(t, e) {
    const n = new Date(t); const r = new Date(e)
    return Number.parseFloat(Math.abs(r.getTime() - n.getTime()) / (1e3 * 60 * 60)).toFixed(2)
  },
  DIFFMINUTES(t, e) {
    const n = new Date(t); const r = new Date(e)
    return Number.parseInt(Math.ceil(Math.abs(r.getTime() - n.getTime()) / (1e3 * 60)))
  },
  TIMESTAMP(t) {
    return Date.parse(t)
  },
  STARTSWITH(t, e) {
    return (`${t}`).substring(0, (`${e}`).length) === e
  },
  EMPTY(t) {
    return nt.empty(t)
  },
  NOTEMPTY(t) {
    return !nt.empty(t)
  },
  LEN(t) {
    return Array.isArray(t) ? t.length : 0
  },
  MOD(t, e) {
    return t = Number.parseFloat(t), e = Number.parseFloat(e), !t || !e || isNaN(t) || isNaN(e) ? 0 : t % e
  },
  SLICELEFT(t, e) {
    return (`${t}`).slice(0, Number(e) || 0)
  },
  SLICERIGHT(t, e) {
    return (`${t}`).slice(Number(e) * -1)
  },
  TOLOWER(t) {
    return (`${t}`).toLowerCase()
  },
  TOUPPER(t) {
    return (`${t}`).toUpperCase()
  },
  INCLUDES(t, e) {
    return (t || '').indexOf(e || '')
  },
  REPLACE(t, e, n) {
    return (t || '').replace(e || '', n || '')
  },
  REPLACEALL(t, e, n) {
    return (t || '').replaceAll(e || '', n || '')
  },
  TRIM(t) {
    return (t || '').trim()
  },
  TOCHINSESAMOUNT(t) {
    const e = ['\u96F6', '\u58F9', '\u8D30', '\u53C1', '\u8086', '\u4F0D', '\u9646', '\u67D2', '\u634C', '\u7396']; const n = ['', '\u4E07', '\u4EBF', '\u4E07\u4EBF', '\u4EBF\u4EBF']; const r = ['', '\u62FE', '\u4F70', '\u4EDF']; const i = ['\u89D2', '\u5206']
    function o(h) {
      let m = ''; let w = ''; let $ = 0; let A = !0
      for (; h > 0;) {
        const F = h % 10
        F === 0 ? A || (A = !0, w = e[F] + w) : (A = !1, m = e[F], m += r[$], w = m + w), $++, h = Math.floor(h / 10)
      }
      return w
    }
    let a = 0; let s = ''; let u = ''; let c = !1
    if (t === 0)
      return e[0]
    let l = Math.floor(t); const p = Math.round((t - l) * 100)
    for (; l > 0;) {
      const h = l % 1e4
      c && (u = e[0] + u), s = o(h), s += h !== 0 ? n[a] : n[0], u = s + u, c = h < 1e3 && h > 0, l = Math.floor(l / 1e4), a++
    }
    return u && (u += '\u5143'), p > 0 ? (u += e[Math.floor(p / 10)] + i[0], p % 10 !== 0 && (u += e[p % 10] + i[1])) : u && (u += '\u6574'), u
  },
  UNION(...t) {
    return (Array.isArray(t[0]) ? t[0] : t).filter((n, r, i) => i.indexOf(n) === r)
  },
  AND(...t) {
    return !!t.reduce((e, n) => e && n, !0)
  },
  OR(...t) {
    return !!t.reduce((e, n) => e || n, !1)
  },
  IF(t, e = !0, n = !1) {
    return t ? e : n
  },
  DEFAULT(t, e) {
    return nt.Undef(t) ? e : t
  },
  CASE(...t) {
    for (let e = 0; e < t.length - 1; e += 2) {
      if (t[e])
        return t[e + 1]
    }
    return null
  },
  COLUMN(t, e) {
    const n = []
    return Array.isArray(t) && t.forEach((r) => {
      Array.isArray(r) ? n.push(...Ie.COLUMN(r, e)) : r && n.push(r[e])
    }), n
  },
  VALUE(t, e, n) {
    return uo(t, e, n)
  },
  CONCAT(...t) {
    return ''.concat(...t)
  },
  INTERSECTIONSET(t, e) {
    const n = []
    for (let r = 0; r < t.length; r++) {
      const i = t[r]
      e.includes(i) && !n.includes(i) && n.push(i)
    }
    return n
  },
  LIST(...t) {
    return t
  },
  IN(t, e) {
    return (t || []).includes(e)
  },
  FALSE() {
    return !1
  },
  TRUE() {
    return !0
  },
  NOT(t) {
    return !t
  },
  EQ(t, e) {
    return t === e
  },
  GE(t, e) {
    return t >= e
  },
  GT(t, e) {
    return t > e
  },
  LE(t, e) {
    return t <= e
  },
  LT(t, e) {
    return t < e
  },
  NE(t, e) {
    return t !== e
  },
  DEFAULT_VALUE(t) {
    return nt.empty(this.rule.value) ? t : this.rule.value
  },
  GET_DATA(t, e) {
    return this.api.getData(t, e)
  },
  GET_VARIABLE(t, e) {
    return this.api.getData(`$var.${t}`, e)
  },
  CURRENT_RULE(t, e) {
    return uo(this.rule, t, e)
  },
  T(t, e) {
    return this.api.t(t, e)
  },
  CALLBACK(t) {
    try {
      return t(this)
    } catch (e) {
      console.error(e)
    }
  },
  WEEKSTART(t) {
    return (t ? Ae(t) : Ae()).startOf('week').format('YYYY-MM-DD')
  },
  WEEKEND(t) {
    return (t ? Ae(t) : Ae()).endOf('week').format('YYYY-MM-DD')
  },
  MONTHSTART(t) {
    return (t ? Ae(t) : Ae()).startOf('month').format('YYYY-MM-DD')
  },
  MONTHEND(t) {
    return (t ? Ae(t) : Ae()).endOf('month').format('YYYY-MM-DD')
  },
  YEARSTART(t) {
    return (t ? Ae(t) : Ae()).startOf('year').format('YYYY-MM-DD')
  },
  YEAREND(t) {
    return (t ? Ae(t) : Ae()).endOf('year').format('YYYY-MM-DD')
  },
  QUARTERSTART(t) {
    return (t ? Ae(t) : Ae()).startOf('quarter').format('YYYY-MM-DD')
  },
  QUARTEREND(t) {
    return (t ? Ae(t) : Ae()).endOf('quarter').format('YYYY-MM-DD')
  },
  WEEKOFYEAR(t) {
    return (t ? Ae(t) : Ae()).week()
  },
  LN(t) {
    return t = Number.parseFloat(t), isNaN(t) || t <= 0 ? 0 : Math.log(t)
  },
  LOG(t) {
    return t = Number.parseFloat(t), isNaN(t) || t <= 0 ? 0 : Math.log10(t)
  },
  LOG2(t) {
    return t = Number.parseFloat(t), isNaN(t) || t <= 0 ? 0 : Math.log2(t)
  },
  SIN(t) {
    return t = Number.parseFloat(t), isNaN(t) ? 0 : Math.sin(t)
  },
  COS(t) {
    return t = Number.parseFloat(t), isNaN(t) ? 0 : Math.cos(t)
  },
  TAN(t) {
    return t = Number.parseFloat(t), isNaN(t) ? 0 : Math.tan(t)
  },
  ASIN(t) {
    return t = Number.parseFloat(t), isNaN(t) || t < -1 || t > 1 ? 0 : Math.asin(t)
  },
  ACOS(t) {
    return t = Number.parseFloat(t), isNaN(t) || t < -1 || t > 1 ? 0 : Math.acos(t)
  },
  ATAN(t) {
    return t = Number.parseFloat(t), isNaN(t) ? 0 : Math.atan(t)
  },
  EXP(t) {
    return t = Number.parseFloat(t), isNaN(t) ? 0 : Math.exp(t)
  },
}
function De(t, e) {
  const n = t.__vccOpts || t
  for (const [r, i] of e)
    n[r] = i
  return n
} function ca(t) {
  const e = []
  return t.forEach((n) => {
    n.field && e.push(n.field), n.children && e.push(...ca(n.children))
  }), e
} const Bl = he({
  name: 'StepForm',
  props: {
    stepsProps: Object,
    modelValue: Object,
    formCreateInject: Object,
    autoValidate: Boolean,
    submitBtn: Boolean,
    steps: {
      type: Array,
      required: !0,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ze({
        submitBtn: !1,
        resetBtn: !1,
      }),
    },
  },
  emits: ['update:modelValue', 'change', 'itemMounted', 'submit', 'next'],
  data() {
    return {
      active: 0,
      cacheRule: [],
      cacheValue: {},
      subApi: {},
      Form: je(this.formCreateInject.form.$form()),
    }
  },
  watch: {
    active() {
      this.init()
    },
    modelValue(t) {
      this.setValue(t)
    },
  },
  methods: {
    init() {
      this.steps.forEach((t, e) => {
        this.cacheRule[e]
          ? this.cacheRule[e].display = e === this.active
          : this.cacheRule[e] = {
            type: 'FcRow',
            native: !0,
            display: e === this.active,
            children: t.rule,
          }
      })
    },
    onPrev() {
      this.active--
    },
    validate() {
      return new Promise((t, e) => {
        const n = ca(this.cacheRule[this.active].children)
        n.length > 0
          ? Promise.all(
              n.map(r => this.subApi.validateField(r)),
            ).then(() => {
              t()
            }).catch((r) => {
              e(r)
            })
          : t()
      })
    },
    onNext() {
      this.autoValidate
        ? this.validate().then(() => {
            this.active++
          }).catch((t) => {
          })
        : this.active++, this.$emit('next', { active: this.active, api: this.subApi })
    },
    submit() {
      const t = () => {
        this.$emit('submit', this.subApi.formData(), this.subApi)
      }
      this.autoValidate
        ? this.validate().then(() => {
            t()
          }).catch((e) => {
          })
        : t()
    },
    addSubApi(t) {
      this.subApi = t, this.$emit('itemMounted', t)
    },
    formData(t) {
      this.cacheValue = JSON.stringify(t), this.$emit('update:modelValue', t), this.$emit('change', t)
    },
    setValue(t) {
      const e = JSON.stringify(t)
      this.cacheValue !== e && (this.cacheValue = e, this.subApi.coverValue(t || {}))
    },
  },
  created() {
    this.init()
  },
}); const Nl = { class: '_fc-step-form' }
function zl(t, e, n, r, i, o) {
  const a = Q('van-step'); const s = Q('van-steps'); const u = Q('van-button'); const c = Q('van-col'); const l = Q('van-row')
  return te(), de('div', Nl, [
    q(s, Me({ active: t.active }, t.stepsProps), {
      default: $e(() => [
        (te(!0), de($t, null, mn(t.steps, p => (te(), Te(a, Me({ ref_for: !0 }, p.props), {
          default: $e(() => [
            Le(Ne(p.props.title), 1),
          ]),
          _: 2,
        }, 1040))), 256)),
      ]),
      _: 1,
    }, 16, ['active']),
    (te(), Te(It(t.Form), {
      'option': t.options,
      'rule': t.cacheRule,
      'extendOption': !0,
      'modelValue': t.modelValue,
      'onUpdate:api': t.addSubApi,
      'onEmitEvent': t.$emit,
      'onUpdate:modelValue': t.formData,
    }, null, 40, ['option', 'rule', 'modelValue', 'onUpdate:api', 'onEmitEvent', 'onUpdate:modelValue'])),
    q(l, null, {
      default: $e(() => [
        q(c, {
          span: 24,
          style: { 'margin-top': '15px' },
        }, {
          default: $e(() => [
            t.active > 0
              ? (te(), Te(u, {
                  key: 0,
                  block: '',
                  size: 'small',
                  onClick: t.onPrev,
                }, {
                  default: $e(() => [
                    Le(Ne(t.formCreateInject.t('prevStep') || '\u4E0A\u4E00\u6B65'), 1),
                  ]),
                  _: 1,
                }, 8, ['onClick']))
              : lt('', !0),
            t.active < t.cacheRule.length - 1
              ? (te(), Te(u, {
                  key: 1,
                  block: '',
                  size: 'small',
                  type: 'primary',
                  onClick: t.onNext,
                }, {
                  default: $e(() => [
                    Le(Ne(t.formCreateInject.t('nextStep') || '\u4E0B\u4E00\u6B65'), 1),
                  ]),
                  _: 1,
                }, 8, ['onClick']))
              : lt('', !0),
            t.submitBtn !== !1 && t.active === t.cacheRule.length - 1
              ? (te(), Te(u, {
                  key: 2,
                  block: '',
                  size: 'small',
                  class: 'fc-clock',
                  type: 'primary',
                  onClick: t.submit,
                  style: { 'margin-top': '10px' },
                }, {
                  default: $e(() => [
                    Le(Ne(t.formCreateInject.t('submit') || '\u63D0\u4EA4'), 1),
                  ]),
                  _: 1,
                }, 8, ['onClick']))
              : lt('', !0),
          ]),
          _: 1,
        }),
      ]),
      _: 1,
    }),
  ])
}
const Ul = /* @__PURE__ */ De(Bl, [['render', zl]])
function Xt(t, e, n) {
  t[e] = n
}
function fa(t, e = {}, n) {
  let r = !1
  for (const i in e) {
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      let o = e[i]
      if ((r = Array.isArray(o)) || nt.Object(o)) {
        const a = t[i] === void 0
        if (r) {
          r = !1, a && Xt(t, i, [])
        } else if (o._clone && n !== void 0) {
          if (n) {
            o = o.getRule(), a && Xt(t, i, {})
          } else {
            Xt(t, i, o._clone())
            continue
          }
        } else {
          a && Xt(t, i, {})
        }
        t[i] = fa(t[i], o, n)
      } else {
        Xt(t, i, o), nt.Undef(o) || (nt.Undef(o.__json) || (t[i].__json = o.__json), nt.Undef(o.__origin) || (t[i].__origin = o.__origin))
      }
    }
  }
  return n !== void 0 && Array.isArray(t) ? t.filter(i => !i || !i.__ctrl) : t
}
function pt(t) {
  return fa({}, { value: t }).value
}
const ql = he({
  name: 'FcPopup',
  emits: ['confirm', 'submit', 'validateFail', 'update:modelValue'],
  props: {
    formData: Object,
    options: {
      type: Object,
      default: () => ze({
        submitBtn: !1,
        resetBtn: !1,
      }),
    },
    rule: Array,
    autoClose: {
      type: Boolean,
      default: !0,
    },
    footer: {
      type: Boolean,
      default: !0,
    },
    preview: Boolean,
    disabled: Boolean,
    modelValue: Object,
    formCreateInject: Object,
    title: String,
  },
  computed: {
    formOptions() {
      const t = { ...this.options }
      return this.preview && (t.preview = this.preview), t
    },
  },
  data() {
    return {
      visible: !1,
      fapi: {},
      value: {},
      formRule: [],
      handleSubmit: void 0,
      Form: je(this.formCreateInject.form.$form()),
    }
  },
  methods: {
    formChange() {
      this.$emit('update:modelValue', this.fapi.formData())
    },
    open(t, e) {
      this.handleSubmit = e, this.$nextTick(() => {
        this.visible = !0, this.value = pt(t || this.modelValue || this.formData || {}), this.formRule = pt(this.rule || [])
      })
    },
    close() {
      this.visible = !1
    },
    handleConfirm() {
      this.$emit('confirm', this.fapi), this.fapi.submit().then((t) => {
        if (this.handleSubmit) {
          try {
            this.handleSubmit(t, this.fapi, this.close)
          } catch (e) {
            console.error(e)
          }
        }
        this.$emit('submit', t, this.fapi, this.close), this.autoClose && this.close()
      }).catch((t) => {
        this.$emit('validateFail', t, this.fapi)
      })
    },
  },
  mounted() {
    this.formCreateInject.api.top.bus.$on('fc.closeDialog', this.close), jo(() => {
      this.formCreateInject.api.top.bus.$off('fc.closeDialog', this.close)
    })
  },
}); const Hl = { class: '_fc-popup-title' }; const Gl = { class: '_fc-popup-content' }; const Yl = { class: '_fc-popup-footer' }
function Wl(t, e, n, r, i, o) {
  const a = Q('van-button'); const s = Q('van-popup')
  return te(), Te(s, Me({
    class: '_fc-popup',
    closeable: '',
  }, t.$attrs, {
    'show': t.visible,
    'onUpdate:show': e[1] || (e[1] = u => t.visible = u),
  }), {
    default: $e(() => [
      xe('div', Hl, Ne(t.title), 1),
      xe('div', Gl, [
        (te(), Te(It(t.Form), {
          'option': t.formOptions,
          'rule': t.formRule,
          'extendOption': !0,
          'api': t.fapi,
          'onUpdate:api': e[0] || (e[0] = u => t.fapi = u),
          'model-value': t.value,
          'subForm': !1,
          'disabled': t.disabled,
          'onChange': t.formChange,
          'onEmitEvent': t.$emit,
        }, null, 40, ['option', 'rule', 'api', 'model-value', 'disabled', 'onChange', 'onEmitEvent'])),
      ]),
      xe('div', Yl, [
        t.footer !== !1
          ? (te(), de($t, { key: 0 }, [
              q(a, {
                block: '',
                size: 'small',
                type: 'primary',
                class: 'fc-clock',
                onClick: t.handleConfirm,
              }, {
                default: $e(() => [
                  Le(Ne(t.formCreateInject.t('ok') || '\u786E\u5B9A'), 1),
                ]),
                _: 1,
              }, 8, ['onClick']),
              q(a, {
                block: '',
                size: 'small',
                class: 'fc-clock',
                style: { 'margin-top': '10px' },
                onClick: t.close,
              }, {
                default: $e(() => [
                  Le(Ne(t.formCreateInject.t('close') || '\u5173\u95ED'), 1),
                ]),
                _: 1,
              }, 8, ['onClick']),
            ], 64))
          : lt('', !0),
      ]),
    ]),
    _: 1,
  }, 16, ['show'])
}
const Xl = /* @__PURE__ */ De(ql, [['render', Wl]])
function Kl(t, e, n) {
  return `[form-create ${t}]: ${e}${n
    ? `

rule: ${JSON.stringify(n.getRule ? n.getRule() : n)}`
    : ''}`
}
function Jl(t, e) {
  console.error(Kl('err', t, e))
}
const lo = '[[FORM-CREATE-PREFIX-'; const co = '-FORM-CREATE-SUFFIX]]'
function yr(t) {
  return new Function(`return ${t}`)()
}
function Jt(t, e) {
  if (t && nt.String(t) && t.length > 4) {
    let n = t.trim(); let r = !1
    try {
      if (n.indexOf(co) > 0 && n.indexOf(lo) === 0) {
        n = n.replace(co, '').replace(lo, ''), r = !0
      } else if (n.indexOf('$FN:') === 0) {
        n = n.substring(4), r = !0
      } else if (n.indexOf('$EXEC:') === 0) {
        n = n.substring(6), r = !0
      } else if (n.indexOf('$GLOBAL:') === 0) {
        const o = n.substring(8)
        return n = function (...a) {
          const s = a[0].api.getGlobalEvent(o)
          if (s)
            return s.call(this, ...a)
        }, n.__json = t, n.__inject = !0, n
      } else {
        if (n.indexOf('$FNX:') === 0) {
          return n = yr(`function($inject){
${n.substring(5)}
}`), n.__json = t, n.__inject = !0, n
        }
        (!e && n.indexOf('function ') === 0 && n !== 'function ' || !e && n.indexOf('function(') === 0 && n !== 'function(') && (r = !0)
      }
      if (!r)
        return t
      let i
      try {
        i = yr(n)
      } catch {
        i = yr(`function ${n}`)
      }
      return i.__json = t, i
    } catch (i) {
      Jl(`\u89E3\u6790\u5931\u8D25:${n}

err: ${i}`)
      return
    }
  }
  return t
}
const Zl = he({
  name: 'DataTable',
  emits: ['sortChange', 'handleClick', 'currentChange', 'pageSizeChange'],
  props: {
    column: {
      type: Array,
      default: () => [],
    },
    globalDataKey: [String, Object],
    fetch: Object,
    data: {
      type: Array,
      default: () => [],
    },
    button: Object,
    index: Boolean,
    selection: Boolean,
    page: Object,
    formCreateInject: Object,
  },
  data() {
    return {
      total: 0,
      loading: !1,
      unwatch: null,
      list: [],
      currentPage: 1,
      id: 1,
      order: '',
      orderBy: '',
      currentSize: void 0,
    }
  },
  watch: {
    globalDataKey() {
      this.initPage()
    },
    fetch() {
      this.globalDataKey || this.initPage()
    },
    data() {
      !this.globalDataKey && !this.fetch && this.initPage()
    },
    selection() {
      this.id++
    },
    index() {
      this.id++
    },
    page: {
      handler() {
        this.initPage(), this.id++
      },
      deep: !0,
    },
    button: {
      handler() {
        this.id++
      },
      deep: !0,
    },
  },
  computed: {
    filterList() {
      let t = this.list || []
      const e = []
      return this.column.forEach((n) => {
        n.prop && Array.isArray(n.filter) && n.filter.length > 0 && e.push(r => n.filter.includes(r[n.prop]))
      }), e.forEach((n) => {
        t = t.filter(n)
      }), t
    },
  },
  render() {
    return Mo(
      We(
        'div',
        {
          class: '_fc-data-table',
        },
        [
          We(
            Q('el-table'),
            {
              data: this.filterList,
              ...this.$attrs,
              key: this.id,
              ref: 'table',
              onSortChange: (t) => {
                this.$emit('sortChange', t), t.order ? (this.orderBy = t.order === 'descending' ? 'DESC' : 'ASC', this.order = t.prop) : (this.orderBy = '', this.order = ''), this.initPage()
              },
            },
            () => {
              let n, r, i, o
              const t = this.column.filter(a => a.hidden !== !0).map(a => this.makeColumn(a))
              this.selection && t.unshift(
                We(Q('el-table-column'), {
                  type: 'selection',
                  fixed: (r = (n = this.column) == null ? void 0 : n[0]) == null ? void 0 : r.fixed,
                  width: '50px',
                }),
              )
              const e = this.makeButtonCol()
              return e && t.push(e), this.index && t.unshift(
                We(Q('el-table-column'), {
                  type: 'index',
                  fixed: (o = (i = this.column) == null ? void 0 : i[0]) == null ? void 0 : o.fixed,
                  width: '50px',
                }),
              ), t
            },
          ),
          this.makePage(),
        ],
      ),
      [[To('loading'), this.loading]],
    )
  },
  methods: {
    getEl() {
      return this.$refs.table
    },
    deepGet(t, e, n) {
      e = (e || '').split('.')
      let r = 0; const i = e.length
      for (; t != null && r < i;)
        t = t[e[r++]]
      return r && r === i && t != null ? t : n
    },
    initPage() {
      this.loading = !1, this.page && this.page.open
        ? (this.currentPage = 1, this.nextList())
        : this.globalDataKey || this.fetch
          ? this.fetchData().then(({ list: t }) => {
              this.list = t
            })
          : this.list = this.data
    },
    btnProps(t, e) {
      const n = t.prop || []; const r = {
        type: t.type,
        size: t.size,
        round: n.includes('round'),
        link: n.includes('link'),
        plain: n.includes('plain'),
        disabled: n.includes('disabled'),
        onClick: (o) => {
          o.stopPropagation()
          const a = Jt(t.click)
          try {
            a && a(e, this.formCreateInject.api)
          } catch (s) {
            console.error(s)
          }
          this.$emit('handleClick', { name: t.name, key: t.key, scope: e, column: e.row })
        },
      }; const i = Jt(t.handle)
      try {
        const o = i && i(r, e, this.formCreateInject.api)
        typeof o == 'boolean' && (r.disabled = o)
      } catch (o) {
        console.error(o)
      }
      return r
    },
    getLimit() {
      return this.currentSize || this.page.props && this.page.props.pageSize || 20
    },
    nextList() {
      if (this.globalDataKey || this.fetch) {
        this.fetchData(!0).then(({ list: t, total: e }) => {
          this.list = t, this.total = e
        })
      } else {
        const t = this.data; const e = this.getLimit(); const n = this.currentPage * e
        this.list = t.slice(n - e, n), this.total = t.length
      }
    },
    fetchData(t) {
      return this.unwatch && this.unwatch(), new Promise((e) => {
        let n = this.fetch
        if (this.globalDataKey) {
          const r = typeof this.globalDataKey == 'string' ? this.globalDataKey : this.globalDataKey.key
          n = this.formCreateInject.api.options.globalData[r]
        }
        if (n) {
          if (n.type === 'fetch' || !this.globalDataKey) {
            n = { ...n }
            let r = {}
            if (t) {
              const o = this.getLimit(); const a = this.page.pageField || 'page'; const s = this.page.pageSizeField || 'limit'
              r = {
                [a]: this.currentPage,
                [s]: o,
              }
            }
            if (this.order) {
              const o = this.page.orderField || 'order'; const a = this.page.orderByField || 'orderBy'
              r[o] = this.order, r[a] = this.orderBy
            }
            const i = Object.keys(r).map(o => `${encodeURIComponent(o)}=${encodeURIComponent(r[o])}`, '').join('&')
            i && (n.action += (n.action.includes('?') ? '&' : '?') + i), this.loading = !0, n.wait = 1e3, n.targetRule = this.formCreateInject.rule, this.unwatch = this.formCreateInject.api.watchFetch(
              n,
              (o, a) => {
                this.loading = !1
                const s = this.page.totalField; const u = this.page.dataField; const c = u ? this.deepGet(o, u, []) : o
                let l = s ? this.deepGet(o, s) : 0
                l || (l = c.length || 0), e({ list: c, total: l })
              },
              (o) => {
                console.error(o), this.loading = !1
              },
              (o, a) => {
                if (a) {
                  return this.unwatch && this.unwatch(), this.unwatch = null, setTimeout(() => {
                    this.changePage(1)
                  }), !1
                }
              },
            )
          } else {
            let r = n.data || []; let i = n.data.length
            if (t) {
              const o = this.getLimit(); const a = this.currentPage * o
              r = r.slice(a - o, a), i = r.length
            }
            e({ list: r, total: i })
          }
        } else {
          e({ list: [], total: 0 })
        }
      })
    },
    changePage(t) {
      this.currentPage = t, this.nextList(), this.$emit('currentChange', t)
    },
    changePageSize(t) {
      this.currentSize = t, this.changePage(1), this.$emit('pageSizeChange', t)
    },
    getPageSizes() {
      if (this.page && this.page.pageSizes) {
        try {
          if (typeof this.page.pageSizes == 'string')
            return this.page.pageSizes.split(',').map(t => Number.parseInt(t.trim())).filter(t => t > 0 && !Number.isNaN(t))
          if (Array.isArray(this.page.pageSizes))
            return this.page.pageSizes
        } catch {
          console.warn('pageSizes \u914D\u7F6E\u683C\u5F0F\u9519\u8BEF\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C')
        }
      }
      return [10, 20, 50, 100]
    },
    makePage() {
      if (this.page && this.page.open === !0) {
        return We(Q('el-pagination'), {
          'layout': 'total, sizes, prev, pager, next, jumper',
          'total': this.total,
          'currentPage': this.currentPage,
          'onUpdate:currentPage': (t) => {
            this.currentPage !== t && this.changePage(t)
          },
          'onUpdate:pageSize': (t) => {
            this.changePageSize(t)
          },
          'class': this.page.position || 'right',
          ...this.page.props || {},
          'pageSize': this.getLimit(),
          'pageSizes': this.getPageSizes(),
          'showTotal': (t, e) => `\u5171 ${t} \u6761`,
        })
      }
    },
    checkBtnShow(t, e) {
      let n = !1
      if (e.hide) {
        const r = Jt(e.hide)
        try {
          n = r && r(t, this.formCreateInject.api)
        } catch (i) {
          console.error(i)
        }
      }
      return !n && e.hidden !== !0
    },
    makeButtonCol() {
      if (this.button && this.button.open === !0 && this.button.column) {
        return We(
          Q('el-table-column'),
          {
            label: this.button.label || this.formCreateInject.t('operation') || '\u64CD\u4F5C',
            fixed: this.button.fixed === void 0 ? 'right' : this.button.fixed,
            width: this.button.width || '100px',
          },
          {
            default: t => this.button.column.filter(e => this.checkBtnShow(t, e)).map(e => We(Q('el-button'), this.btnProps(e, t), () => [e.name])),
          },
        )
      }
    },
    makeColumn(t) {
      return We(
        Q('el-table-column'),
        {
          label: t.label,
          prop: t.prop,
          width: t.width,
          align: t.align,
          className: t.className,
          fixed: t.fixed,
          sortable: t.sortable,
        },
        {
          default: (e) => {
            if (t.children && t.children.length > 0)
              return t.children.map(n => this.makeColumn(n))
            if (!(!t.format || t.format === 'default'))
              return this.makeTd(t, e)
          },
        },
      )
    },
    makeTd(t, e) {
      return t.format === 'custom' && t.render
        ? t.render(e, We, Q, this.formCreateInject.api)
        : t.format === 'tag'
          ? We(Q('el-tag'), { disableTransitions: !0 }, () => [this.deepGet(e.row, t.prop, '')])
          : t.format === 'image'
            ? We(
                'div',
                {
                  class: '_fc-data-table-img-list',
                },
                (() => {
                  let n = this.deepGet(e.row, t.prop, '')
                  return n = (Array.isArray(n) ? n : [n]).filter(r => !!r), n.map((r, i) => We(Q('el-image'), {
                    src: r,
                    previewSrcList: n,
                    previewTeleported: !0,
                    initialIndex: i,
                    fit: 'cover',
                  }))
                })(),
              )
            : `${this.deepGet(e.row, t.prop, '')}`
    },
  },
  created() {
    this.initPage(), this.$watch(
      () => this.data && this.data.length,
      () => {
        !this.globalDataKey && !this.fetch && this.initPage()
      },
    )
  },
})
const Ql = {
  name: 'FcTable',
  props: {
    mini: Boolean,
    label: String,
    width: [Number, String],
    border: {
      type: Boolean,
      default: !0,
    },
    borderWidth: String,
    borderColor: String,
    rule: {
      type: Object,
      default: () => ({ row: 1, col: 1 }),
    },
  },
  watch: {
    rule: {
      handler() {
        this.initRule(), this.loadRule(), this.tdStyle = this.rule.style || {}, this.tdClass = this.rule.class || {}
      },
      immediate: !0,
      deep: !0,
    },
  },
  data() {
    return {
      tdStyle: {},
      tdClass: {},
      lattice: {},
    }
  },
  computed: {
    tableColor() {
      const t = {}
      return this.border === !1 ? t.border = '0 none' : (this.borderColor && (t.borderColor = this.borderColor), this.borderWidth && (t.borderWidth = this.borderWidth)), t
    },
  },
  methods: {
    initRule() {
      const t = this.rule
      t.style || (t.style = {}), t.layout || (t.layout = []), t.row || (t.row = 1), t.col || (t.col = 1)
    },
    loadRule() {
      const t = []; const e = this.rule || { row: 1, col: 1 }
      for (let r = 0; r < e.row; r++) {
        const i = []
        t.push(i)
        for (let o = 0; o < e.col; o++)
          i.push({ rowspan: 1, colspan: 1, slot: [], show: !0 })
      }
      [...e.layout || []].forEach((r, i) => {
        if ((!r.row || r.row <= 0) && (!r.col || r.col <= 0) || !t[r.top] || !t[r.top][r.left] || !t[r.top][r.left].show) {
          e.layout.splice(i, 1)
          return
        }
        const o = t[r.top][r.left]
        o.layout = r
        let a = 1; let s = 1
        if (r.col && (a = r.col + r.left > e.col ? e.col - r.left : r.col, o.colspan = a), r.row && (s = r.row + r.top > e.row ? e.row - r.top : r.row, o.rowspan = s), s && a) {
          for (let u = 0; u < s; u++) {
            const c = t[r.top + u]
            if (c) {
              for (let l = 0; l < a; l++)
                !l && !u || (c[r.left + l] && (c[r.left + l].show = !1), o.slot.push(`${r.top + u}:${r.left + l}`))
            }
          }
        }
      })
      const n = r => !!(!r || r.layout || !r.show)
      t.forEach((r, i) => {
        r.forEach((o, a) => {
          let s = !1; let u = !1
          if (o.layout) {
            const c = o.layout.col || 1; const l = o.layout.row || 1
            for (let p = 0; p < c; p++) {
              if (!t[i + l] || n(t[i + l][a + p])) {
                u = !0
                continue
              }
            }
            for (let p = 0; p < l; p++) {
              if (!t[i + p] || n(t[i + p][a + c])) {
                s = !0
                continue
              }
            }
          } else {
            s = n(r[a + 1]), u = t[i + 1] ? n(t[i + 1][a]) : !0
          }
          o.right = s, o.bottom = u
        })
      }), this.lattice = t
    },
  },
}
function ec(t, e, n, r, i, o) {
  const a = Q('el-col')
  return te(), Te(a, { span: 24 }, {
    default: $e(() => [
      xe('div', {
        class: Lt(['_fc-table', { 'is-mini': n.mini }]),
      }, [
        xe('table', {
          border: '1',
          cellspacing: '0',
          cellpadding: '0',
          style: Fo(o.tableColor),
        }, [
          (te(!0), de($t, null, mn(n.rule.row, (s, u) => (te(), de('tr', { key: u }, [
            (te(!0), de($t, null, mn(n.rule.col, (c, l) => (te(), de($t, {
              key: `${u}${l}`,
            }, [
              i.lattice[u][l].show
                ? (te(), de('td', Me({
                    key: 0,
                    ref_for: !0,
                  }, i.lattice[u][l] ? { colspan: i.lattice[u][l].colspan, rowspan: i.lattice[u][l].rowspan } : {}, {
                    valign: 'top',
                    class: i.tdClass && i.tdClass[`${u}:${l}`] || '',
                    style: [o.tableColor, i.tdStyle && i.tdStyle[`${u}:${l}`] || {}],
                  }), [
                    Zt(t.$slots, `${u}:${l}`),
                    (te(!0), de($t, null, mn(i.lattice[u][l].slot, p => Zt(t.$slots, `${p}`)), 256)),
                  ], 16))
                : lt('', !0),
            ], 64))), 128)),
          ]))), 128)),
        ], 4),
      ], 2),
    ]),
    _: 3,
  })
}
const tc = /* @__PURE__ */ De(Ql, [['render', ec]])
const nc = {
  name: 'TableForm',
  emits: ['change', 'add', 'delete', 'update:modelValue'],
  props: {
    formCreateInject: Object,
    modelValue: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      required: !0,
      default: () => [],
    },
    filterEmptyColumn: {
      type: Boolean,
      default: !0,
    },
    deletable: {
      type: Boolean,
      default: !0,
    },
    addable: {
      type: Boolean,
      default: !0,
    },
    options: {
      type: Object,
      default: () => ze({
        submitBtn: !1,
        resetBtn: !1,
      }),
    },
    max: Number,
    min: Number,
    disabled: Boolean,
  },
  watch: {
    'modelValue': {
      handler() {
        this.updateTable()
      },
      deep: !0,
    },
    'formCreateInject.preview': function (t) {
      this.emptyRule.children[0].props.colspan = this.columns.length + (t || !this.deletable ? 1 : 2)
    },
    deletable(t) {
      this.emptyRule.children[0].props.colspan = this.columns.length + (this.formCreateInject.preview || !t ? 1 : 2)
    },
  },
  data() {
    return {
      rule: [],
      trs: [],
      fapi: {},
      Form: je(this.formCreateInject.form.$form()),
      copyTrs: '',
      oldValue: '',
      emptyRule: {
        type: 'tr',
        _isEmpty: !0,
        native: !0,
        subRule: !0,
        children: [
          {
            type: 'td',
            style: {
              textAlign: 'center',
            },
            native: !0,
            subRule: !0,
            props: {
              colspan: this.columns.length + (this.formCreateInject.preview || !this.deletable ? 1 : 2),
            },
            children: [this.formCreateInject.t('dataEmpty') || '\u6682\u65E0\u6570\u636E'],
          },
        ],
      },
    }
  },
  methods: {
    formChange() {
      this.updateValue()
    },
    updateValue() {
      const t = this.trs.map((n, r) => ({
        ...this.modelValue[r] || {},
        ...this.fapi.getChildrenFormData(n),
      })).filter((n) => {
        if (!this.filterEmptyColumn)
          return !0
        if (n == null)
          return !1
        let r = !1
        return Object.keys(n).forEach((i) => {
          r = r || n[i] !== void 0 && n[i] !== '' && n[i] !== null
        }), r
      }); const e = JSON.stringify(t)
      e !== this.oldValue && (this.oldValue = e, this.$emit('update:modelValue', t), this.$emit('change', t))
    },
    setRawData(t, e) {
      const n = this.trs[t]
      this.fapi.setChildrenFormData(n, e, !0)
    },
    updateTable() {
      const t = JSON.stringify(this.modelValue)
      this.oldValue !== t && (this.oldValue = t, this.trs = this.trs.splice(0, this.modelValue.length), this.modelValue.length ? this.clearEmpty() : this.addEmpty(), this.modelValue.forEach((e, n) => {
        this.trs[n] || this.addRaw(), this.setRawData(n, e || {})
      }), this.rule[0].children[1].children = this.trs)
    },
    addEmpty() {
      this.trs.length && this.trs.splice(0, this.trs.length), this.trs.push(this.emptyRule)
    },
    clearEmpty() {
      this.trs[0] && this.trs[0]._isEmpty && this.trs.splice(0, 1)
    },
    delRaw(t) {
      this.disabled || !this.deletable || this.min > 0 && this.trs.length <= this.min || (this.trs.splice(t, 1), this.updateValue(), this.trs.length ? this.trs.forEach(e => this.updateRaw(e)) : this.addEmpty(), this.$emit('delete', t))
    },
    addRaw(t) {
      if (t && this.disabled)
        return
      const e = this.formCreateInject.form.parseJson(this.copyTrs)[0]
      this.trs.length === 1 && this.trs[0]._isEmpty && this.trs.splice(0, 1), this.trs.push(e), this.updateRaw(e), t && (this.$emit('add', this.trs.length), this.updateValue())
    },
    updateRaw(t) {
      const e = this.trs.indexOf(t)
      t.children[0].props.innerText = e + 1, t.children[t.children.length - 1].children[0].props.onClick = () => {
        this.delRaw(e)
      }
    },
    loadRule() {
      const t = [
        {
          type: 'th',
          native: !0,
          class: '_fc-tf-head-idx',
        },
      ]
      const e = [
        {
          type: 'td',
          class: '_fc-tf-idx',
          native: !0,
          props: {
            innerText: '0',
          },
        },
      ]
      this.columns.forEach((n) => {
        t.push({
          type: 'th',
          native: !0,
          style: { ...n.style || {}, textAlign: n.align || 'center' },
          class: n.required ? '_fc-tf-head-required' : '',
          props: {
            innerText: n.label || '',
          },
        }), e.push({
          type: 'td',
          native: !0,
          children: [...n.rule || []],
        })
      }), t.push({
        type: 'th',
        native: !0,
        class: '_fc-tf-edit fc-clock',
        props: {
          innerText: this.formCreateInject.t('operation') || '\u64CD\u4F5C',
        },
      }), e.push({
        type: 'td',
        native: !0,
        class: '_fc-tf-btn fc-clock',
        children: [
          {
            type: 'i',
            native: !0,
            class: 'fc-icon icon-delete',
            props: {},
          },
        ],
      }), this.copyTrs = this.formCreateInject.form.toJson([
        {
          type: 'tr',
          native: !0,
          subRule: !0,
          children: e,
        },
      ]), this.rule = [
        {
          type: 'table',
          native: !0,
          class: '_fc-tf-table',
          props: {
            border: '1',
            cellspacing: '0',
            cellpadding: '0',
          },
          children: [
            {
              type: 'thead',
              native: !0,
              children: [
                {
                  type: 'tr',
                  native: !0,
                  children: t,
                },
              ],
            },
            {
              type: 'tbody',
              native: !0,
              children: this.trs,
            },
          ],
        },
      ]
    },
  },
  created() {
    this.loadRule()
  },
  mounted() {
    this.updateTable()
  },
}
function rc(t, e, n, r, i, o) {
  const a = Q('el-button')
  return te(), de('div', {
    class: Lt(['_fc-table-form', { '_fc-disabled': n.disabled, '_fc-undeletable': !n.deletable }]),
  }, [
    (te(), Te(It(i.Form), {
      'option': n.options,
      'rule': i.rule,
      'extendOption': !0,
      'disabled': n.disabled,
      'onChange': o.formChange,
      'api': i.fapi,
      'onUpdate:api': e[0] || (e[0] = s => i.fapi = s),
      'onEmitEvent': t.$emit,
    }, null, 40, ['option', 'rule', 'disabled', 'onChange', 'api', 'onEmitEvent'])),
    n.addable && (!n.max || n.max > this.trs.length)
      ? (te(), Te(a, {
          key: 0,
          link: '',
          type: 'primary',
          class: 'fc-clock',
          onClick: e[1] || (e[1] = s => o.addRaw(!0)),
        }, {
          default: $e(() => [
            e[2] || (e[2] = xe('i', {
              class: 'fc-icon icon-add-circle',
              style: { 'font-weight': '700' },
            }, null, -1)),
            Le(` ${Ne(n.formCreateInject.t('add') || '\u6DFB\u52A0')}`, 1),
          ]),
          _: 1,
        }))
      : lt('', !0),
  ], 2)
}
const ic = /* @__PURE__ */ De(nc, [['render', rc]]); const oc = Object.assign || function (t) {
  for (let e, n = 1; n < arguments.length; n++) {
    for (const r in e = arguments[n], e)
      Object.prototype.hasOwnProperty.call(e, r) && Xt(t, r, e[r])
  }
  return t
}
function Kr() {
  return oc.apply(this, arguments)
}
let ac = 0
function gt() {
  const t = 370 + ++ac
  return `F${Math.random().toString(36).substr(3, 3)}${Number(`${Date.now()}`).toString(36)}${t.toString(36)}c`
}
const sc = {
  name: 'TableFormPro',
  emits: ['change', 'add', 'delete', 'update:modelValue', 'handleClick'],
  props: {
    formCreateInject: Object,
    height: [String, Number],
    modelValue: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      required: !0,
      default: () => [],
    },
    button: Object,
    page: Object,
    size: String,
    filterEmptyColumn: {
      type: Boolean,
      default: !0,
    },
    newColumn: Boolean,
    deletable: {
      type: Boolean,
      default: !0,
    },
    addable: {
      type: Boolean,
      default: !0,
    },
    options: {
      type: Object,
      default: () => ze({
        submitBtn: !1,
        resetBtn: !1,
      }),
    },
    showIndex: Boolean,
    max: Number,
    min: Number,
    disabled: Boolean,
  },
  watch: {
    modelValue: {
      handler() {
        const t = JSON.stringify(this.modelValue || [])
        this.oldValue !== t && (this.chunk = [[]], this.nowPage = 1, this.updateTable(), this.oldValue = t)
      },
    },
  },
  computed: {
    total() {
      let t = 0
      for (let e = 0; e < this.chunk.length; e++)
        t += this.chunk[e].length
      return t
    },
    limit() {
      return !this.page || this.page.open !== !0 ? 1e6 : this.page.props && this.page.props.pageSize || 20
    },
    pageData() {
      return this.chunk[this.nowPage - 1] || []
    },
  },
  data() {
    return {
      chunk: [[]],
      data: [],
      rule: [],
      trs: [],
      fapi: {},
      Form: je(this.formCreateInject.form.$form()),
      copy: '',
      oldValue: '',
      nowPage: 1,
      indexRule: {
        type: 'el-table-column',
        props: {
          label: '',
          type: 'index',
          fixed: 'left',
        },
      },
      updateTimer: null,
      isUpdating: !1,
    }
  },
  methods: {
    paginateArray() {
      const t = this.modelValue || []; const e = this.limit; const n = []
      for (let r = 0; r < t.length; r += e) {
        const i = t.slice(r, r + e)
        n.push(i)
      }
      n.length && n.forEach((r, i) => {
        this.chunk[i] = [...this.chunk[i] || [], ...r]
      }), this.nowPage > this.chunk.length && (this.nowPage = this.chunk.length)
    },
    formChange() {
      this.updateValue()
    },
    updateValue() {
      this.updateTimer && clearTimeout(this.updateTimer), this.updateTimer = setTimeout(() => {
        this.performUpdate()
      }, 16)
    },
    performUpdate() {
      if (this.isUpdating)
        return
      this.isUpdating = !0
      const t = pt(this.pageData)
      try {
        this.trs.forEach((i, o) => {
          Kr(t[o], this.fapi.getChildrenFormData(i))
        })
        const e = []
        for (let i = 0; i < this.chunk.length; i++)
          e.push(...i === this.nowPage - 1 ? t : this.chunk[i])
        const n = this.filterEmptyColumn ? e.filter(i => this.isValidData(i)) : [...e]; const r = JSON.stringify(n)
        r !== this.oldValue && (this.oldValue = r, this.$emit('update:modelValue', n), this.$emit('change', n))
      } finally {
        this.isUpdating = !1
      }
    },
    isValidData(t) {
      if (t == null)
        return !1
      for (const e in t) {
        if (t[e] !== void 0 && t[e] !== '' && t[e] !== null)
          return !0
      }
      return !1
    },
    setRawData(t, e) {
      const n = this.trs[t]
      this.fapi.setChildrenFormData(n, e, !0)
    },
    changePage(t) {
      t !== this.nowPage && (this.chunk[this.nowPage - 1] = this.pageData, this.nowPage = t, this.rule[1].props.data = this.pageData, this.trs.splice(0, this.trs.length), this.pageData.forEach((e, n) => {
        this.trs[n] || this.addRaw(), this.setRawData(n, e || {})
      }), this.rule[0].children = this.trs)
    },
    updateTable() {
      this.paginateArray(), this.rule[1].props.data = this.pageData, this.trs.splice(0, this.trs.length), this.pageData.forEach((t, e) => {
        this.trs[e] || this.addRaw(), this.setRawData(e, t || {})
      }), this.rule[0].children = this.trs
    },
    delRaw(t) {
      this.disabled || this.deletable === !1 || this.min > 0 && this.total <= this.min || (this.trs.splice(t, 1), this.rule[1].props.data.splice(t, 1), this.$emit('delete', t, this.modelValue[t]), this.updateValue(), this.oldValue = '')
    },
    addRaw(t) {
      if (!(t && (this.disabled || this.addable === !1))) {
        if (!t) {
          const e = this.copyTr()
          this.trs.push(e)
          return
        }
        if (this.chunk[this.chunk.length - 1].length >= this.limit) {
          this.chunk.push([{}])
        } else if (t && this.chunk[this.chunk.length - 1].push({}), t && this.nowPage === this.chunk.length) {
          const e = this.copyTr()
          this.trs.push(e)
        }
        t && (this.$emit('add', this.total), this.updateValue())
      }
    },
    copyTr() {
      return pt(this.copy)
    },
    btnProps(t, e) {
      const n = { ...e }
      n.row = this.modelValue[e.$index] || {}
      const r = t.prop || []; const i = {
        type: t.type,
        size: t.size,
        round: r.includes('round'),
        link: r.includes('link'),
        plain: r.includes('plain'),
        disabled: r.includes('disabled') || this.disabled || t.key === 'delete' && this.deletable === !1,
        onClick: (o) => {
          if (n.row = this.modelValue[e.$index] || {}, o.stopPropagation(), t.key === 'delete') {
            this.delRaw(e.$index)
            return
          }
          const a = Jt(t.click)
          try {
            a && a(n, this.formCreateInject.api)
          } catch (s) {
            console.error(s)
          }
          this.$emit('handleClick', { name: t.name, key: t.key, _scope: n, column: n.row })
        },
      }
      try {
        const o = Jt(t.handle); const a = o && o(i, n, this.formCreateInject.api)
        typeof a == 'boolean' && (i.disabled = a)
      } catch (o) {
        console.error(o)
      }
      return i
    },
    processRule(t) {
      const e = []
      return t.forEach((n) => {
        n.children
          ? e.push(...this.processRule(n.children))
          : (n._renderId || (n._renderId = gt()), e.push({
              type: 'template',
              name: n._renderId,
              hook: {
                deepWatch: ({ parent: r }) => {
                  r.key = Date.now()
                },
              },
              children: [...n.rule || []],
            }))
      }), e
    },
    processColumns(t) {
      return t.map((e, n) => {
        let i
        const r = {
          type: 'el-table-column',
          hidden: e.hidden === !0,
          props: {
            fixed: e.fixed || !1,
            align: e.align || 'left',
            width: ((i = e == null ? void 0 : e.style) == null ? void 0 : i.width) || 'auto',
            minWidth: 120,
          },
          renderSlots: {
            header() {
              let o
              return We(
                'span',
                {
                  class: e.required ? 'is-required' : '',
                  style: { color: (o = e == null ? void 0 : e.style) == null ? void 0 : o.color },
                },
                e.label,
              )
            },
          },
        }
        return e.children
          ? r.children = this.processColumns(e.children)
          : r.renderSlots.default = ({ $index: o }) => {
            let a, s, u, c, l, p, h, m
            for (let w = 0; w < ((s = (a = this.rule[0]) == null ? void 0 : a.children[o]) == null ? void 0 : s.children.length); w++) {
              if (((c = (u = this.rule[0]) == null ? void 0 : u.children[o]) == null ? void 0 : c.children[w].name) === e._renderId) {
                const $ = (p = (l = this.rule[0]) == null ? void 0 : l.children[o]) == null ? void 0 : p.children[w]
                return (m = (h = this.fapi.renderRule($, void 0, !0)) == null ? void 0 : h.default) == null ? void 0 : m.call(h)
              }
            }
            return null
          }, r
      })
    },
    loadRule() {
      this.copy = {
        type: 'template',
        name: 'template',
        subRule: !0,
        children: this.processRule(this.columns),
      }, this.rule = [
        {
          type: 'hidden',
          children: this.trs,
        },
        {
          type: 'elTable',
          style: {
            width: '100%',
          },
          key: 1,
          props: {
            ...this.$attrs,
            height: this.height,
            size: this.size,
            data: [],
          },
          children: [],
        },
      ]
    },
    checkBtnShow(t, e) {
      let n = !1
      if (e.hide) {
        const r = Jt(e.hide)
        try {
          n = r && r(t, this.formCreateInject.api)
        } catch (i) {
          console.error(i)
        }
      }
      return !n && e.hidden !== !0
    },
  },
  created() {
    this.loadRule()
  },
  mounted() {
    const t = this.fapi.sync
    this.fapi.sync = (e) => {
      e.tableRenderUni = gt(), t(e)
    }, this.updateTable(), this.newColumn && (!this.modelValue || !this.modelValue.length) && this.addRaw(!0), this.$watch(
      () => [...this.columns],
      (e) => {
        this.rule[1].children.splice(this.rule[1].children.includes(this.indexRule) ? 1 : 0, 0, ...this.processColumns(e)), this.rule[1].key++
      },
      { immediate: !0, deep: !1 },
    ), this.$watch(
      () => this.showIndex,
      (e) => {
        e === !1 && this.rule[1].children.includes(this.indexRule) ? this.rule[1].children.splice(0, 1) : e !== !1 && !this.rule[1].children.includes(this.indexRule) && this.rule[1].children.unshift(this.indexRule)
      },
      { immediate: !0 },
    ), this.$watch(
      () => {
        let e
        return {
          preview: this.formCreateInject.preview,
          button: this.button,
          buttonOpen: (e = this.button) == null ? void 0 : e.open,
        }
      },
      (e, n) => {
        JSON.stringify(e) !== JSON.stringify(n) && (this.rule[1].children.forEach((r, i) => {
          r._tableHandle && this.rule[1].children.splice(i, 1)
        }), !this.formCreateInject.preview && this.button && this.button.open !== !1 && this.rule[1].children.push({
          type: 'el-table-column',
          _tableHandle: !0,
          props: {
            label: this.button.label || this.formCreateInject.t('operation') || '\u64CD\u4F5C',
            fixed: this.button.fixed === void 0 ? 'right' : this.button.fixed,
            width: this.button.width || '100px',
          },
          renderSlots: {
            default: r => this.button.column.filter(i => this.checkBtnShow(r, i)).map(i => We(Q('el-button'), this.btnProps(i, r), () => [
              i.key === 'delete' && this.formCreateInject.t('delete') || i.name,
            ])),
          },
        }))
      },
      { immediate: !0, deep: !0 },
    )
  },
  beforeUnmount() {
    this.updateTimer && clearTimeout(this.updateTimer)
  },
}; const uc = { class: '_fc-tf-pro-handle' }
function lc(t, e, n, r, i, o) {
  const a = Q('el-button'); const s = Q('el-pagination')
  return te(), de('div', {
    class: Lt(['_fc-table-form-v2', { '_fc-disabled': n.disabled }]),
  }, [
    (te(), Te(It(i.Form), {
      'option': n.options,
      'rule': i.rule,
      'extendOption': !0,
      'disabled': n.disabled,
      'onChange': o.formChange,
      'api': i.fapi,
      'onUpdate:api': e[0] || (e[0] = u => i.fapi = u),
      'onEmitEvent': t.$emit,
    }, null, 40, ['option', 'rule', 'disabled', 'onChange', 'api', 'onEmitEvent'])),
    xe('div', uc, [
      xe('div', null, [
        (!n.max || n.max > o.total) && n.addable !== !1 && n.disabled !== !0
          ? (te(), Te(a, {
              key: 0,
              link: '',
              type: 'primary',
              class: 'fc-clock',
              onClick: e[1] || (e[1] = u => o.addRaw(!0)),
            }, {
              default: $e(() => [
                e[2] || (e[2] = xe('i', {
                  class: 'fc-icon icon-add-circle',
                  style: { 'font-weight': '700' },
                }, null, -1)),
                Le(` ${Ne(n.formCreateInject.t('add') || '\u6DFB\u52A0')}`, 1),
              ]),
              _: 1,
            }))
          : lt('', !0),
      ]),
      n.page && n.page.open === !0 && i.chunk.length > 1
        ? (te(), Te(s, Me({ key: 0 }, n.page.props || {}, {
            'layout': 'prev, pager, next',
            'currentPage': i.nowPage,
            'onUpdate:currentPage': o.changePage,
            'total': o.total,
            'pageSize': o.limit,
          }), null, 16, ['currentPage', 'onUpdate:currentPage', 'total', 'pageSize']))
        : lt('', !0),
    ]),
  ], 2)
}
const cc = /* @__PURE__ */ De(sc, [['render', lc]])
const fc = {
  name: 'InfiniteTableForm',
  emits: ['change', 'add', 'delete', 'update:modelValue'],
  props: {
    formCreateInject: Object,
    modelValue: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      required: !0,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ze({
        submitBtn: !1,
        resetBtn: !1,
      }),
    },
    max: Number,
    layerMax: {
      type: Number,
      default: 0,
    },
    childrenField: String,
    disabled: Boolean,
  },
  computed: {
    preview() {
      return this.formCreateInject.preview
    },
    subField() {
      return this.childrenField || 'children'
    },
  },
  watch: {
    modelValue() {
      this.updateTable()
    },
    'formCreateInject.preview': function (t) {
      this.trs.forEach((e, n) => {
        e.children[1] && (e.children[1].children[0].props.colspan = this.rule[0].children[0].children[0].children.length - (t ? 1 : 0)), e.children[0].children[0].children[0].hidden = this.layerMax === 1 || t && !(this.modelValue && this.modelValue[n] && Array.isArray(this.modelValue[n][this.subField]) && this.modelValue[n][this.subField].length > 0)
      })
    },
  },
  data() {
    return {
      rule: [],
      trs: [],
      fapi: {},
      Form: je(this.formCreateInject.form.$form()),
      copyTrs: '',
      oldValue: '',
    }
  },
  methods: {
    formChange(t, e, n, r, i) {
      i === !1 && this.updateValue()
    },
    updateValue() {
      const t = this.trs.map((n, r) => {
        const i = {
          ...this.modelValue[r] || {},
          ...this.fapi.getChildrenFormData(n),
        }
        return !Tl(i, this.subField) && this.modelValue[r] && (i[this.subField] = this.modelValue[r][this.subField]), i[this.subField] == null && delete i[this.subField], i
      }); const e = JSON.stringify(t)
      e !== this.oldValue && (this.oldValue = e, this.$emit('update:modelValue', t), this.$emit('change', t))
    },
    setRawData(t, e) {
      const n = this.trs[t]
      this.fapi.setChildrenFormData(n, e, !0)
    },
    updateTable() {
      const t = JSON.stringify(this.modelValue)
      this.oldValue !== t && (this.oldValue = t, this.trs = this.trs.splice(0, this.modelValue.length), this.modelValue.length || this.addRaw(), this.modelValue.forEach((e, n) => {
        this.trs[n] || this.addRaw(), this.setRawData(n, e || {})
      }), this.rule[0].children[1].children = this.trs)
    },
    delRaw(t) {
      this.disabled || (this.trs.splice(t, 1), this.updateValue(), this.trs.length ? this.trs.forEach(e => this.updateRaw(e)) : this.addRaw(), this.$emit('delete', t))
    },
    addRaw(t) {
      if (t && this.disabled)
        return
      const e = this.formCreateInject.form.parseJson(this.copyTrs)[0]; const n = {
        type: 'template',
        subRule: !0,
        children: [],
      }
      n.children.push(e), this.trs.push(n), this.trs.forEach(r => this.updateRaw(r)), t && this.$emit('add', this.trs)
    },
    updateRaw(t) {
      const e = this.trs.indexOf(t); const n = t.children[0]
      n.children[0].children[0].hidden = this.layerMax === 1 || this.preview && !(this.modelValue && this.modelValue[e] && Array.isArray(this.modelValue[e][this.subField]) && this.modelValue[e][this.subField].length > 0), n.children[0].children[0].props.onClick = (r) => {
        if (this.trs[e].children.length === 1) {
          if (this.disabled && !(this.modelValue && this.modelValue[e] && Array.isArray(this.modelValue[e][this.subField]) && this.modelValue[e][this.subField].length > 0))
            return
          this.trs[e].children.push({
            type: 'tr',
            native: !0,
            display: !0,
            children: [
              {
                type: 'td',
                native: !0,
                props: {
                  colspan: this.rule[0].children[0].children[0].children.length - (this.preview ? 1 : 0),
                },
                class: '_fc-itf-sub',
                children: [
                  {
                    type: 'infiniteTableForm',
                    field: this.subField,
                    value: [...this.modelValue[e] && this.modelValue[e][this.subField] || []],
                    props: {
                      disabled: this.disabled,
                      layerMax: this.layerMax === 0 ? 0 : this.layerMax > 1 ? this.layerMax - 1 : 1,
                      max: this.max || 0,
                      columns: pt(this.columns),
                      options: pt(this.options),
                    },
                  },
                ],
              },
            ],
          })
        }
        const i = r.self.children[0] === '-' ? '+' : '-'
        r.self.children = [i], this.trs[e].children[1].display = i === '-'
      }, n.children[1].props.innerText = e + 1, n.children[n.children.length - 1].children[0].props.onClick = () => {
        this.delRaw(e)
      }
    },
    loadRule() {
      const t = [
        {
          type: 'th',
          native: !0,
          class: '_fc-itf-sub-idx',
        },
        {
          type: 'th',
          native: !0,
          class: '_fc-itf-head-idx',
        },
      ]
      const e = [
        {
          type: 'td',
          class: '_fc-itf-idx',
          native: !0,
          children: [
            {
              type: 'div',
              hidden: !1,
              children: ['+'],
              inject: !0,
              props: {},
            },
          ],
        },
        {
          type: 'td',
          class: '_fc-itf-idx',
          native: !0,
          props: {
            innerText: '0',
          },
        },
      ]
      this.columns.forEach((n) => {
        t.push({
          type: 'th',
          native: !0,
          class: n.required ? '_fc-itf-head-required' : '',
          style: n.style,
          props: {
            innerText: n.label || '',
          },
        }), e.push({
          type: 'td',
          native: !0,
          children: [...n.rule || []],
        })
      }), t.push({
        type: 'th',
        native: !0,
        class: '_fc-itf-edit fc-clock',
        props: {
          innerText: this.formCreateInject.t('operation') || '\u64CD\u4F5C',
        },
      }), e.push({
        type: 'td',
        native: !0,
        class: '_fc-itf-btn fc-clock',
        children: [
          {
            type: 'i',
            native: !0,
            class: 'fc-icon icon-delete',
            props: {},
          },
        ],
      }), this.copyTrs = this.formCreateInject.form.toJson([
        {
          type: 'tr',
          native: !0,
          children: e,
        },
      ]), this.rule = [
        {
          type: 'table',
          native: !0,
          class: '_fc-itf-table',
          props: {
            border: '1',
            cellspacing: '0',
            cellpadding: '0',
          },
          children: [
            {
              type: 'thead',
              native: !0,
              children: [
                {
                  type: 'tr',
                  native: !0,
                  children: t,
                },
              ],
            },
            {
              type: 'tbody',
              native: !0,
              children: this.trs,
            },
          ],
        },
      ]
    },
  },
  created() {
    this.loadRule()
  },
  mounted() {
    this.updateTable()
  },
}
function dc(t, e, n, r, i, o) {
  const a = Q('el-button')
  return te(), de('div', {
    class: Lt(['_fc-infinite-table-form', { '_fc-disabled': n.disabled }]),
  }, [
    (te(), Te(It(i.Form), {
      'option': n.options,
      'rule': i.rule,
      'extendOption': !0,
      'onChange': o.formChange,
      'disabled': n.disabled,
      'api': i.fapi,
      'onUpdate:api': e[0] || (e[0] = s => i.fapi = s),
      'onEmitEvent': t.$emit,
    }, null, 40, ['option', 'rule', 'onChange', 'disabled', 'api', 'onEmitEvent'])),
    !n.max || n.max > this.trs.length
      ? (te(), Te(a, {
          key: 0,
          link: '',
          type: 'primary',
          class: 'fc-clock',
          onClick: e[1] || (e[1] = s => o.addRaw(!0)),
        }, {
          default: $e(() => [
            e[2] || (e[2] = xe('i', {
              class: 'fc-icon icon-add-circle',
              style: { 'font-weight': '700' },
            }, null, -1)),
            Le(` ${Ne(n.formCreateInject.t('add') || '\u6DFB\u52A0')}`, 1),
          ]),
          _: 1,
        }))
      : lt('', !0),
  ], 2)
}
const hc = /* @__PURE__ */ De(fc, [['render', dc]])
const pc = {
  name: 'NestedTableForm',
  emits: ['change', 'add', 'delete', 'update:modelValue'],
  props: {
    formCreateInject: Object,
    modelValue: {
      type: Array,
      default: () => [],
    },
    nested: Array,
    nestedField: String,
    columns: {
      type: Array,
      required: !0,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ze({
        submitBtn: !1,
        resetBtn: !1,
      }),
    },
    max: Number,
    nestedMax: Number,
    disabled: Boolean,
  },
  computed: {
    preview() {
      return this.formCreateInject.preview
    },
  },
  watch: {
    modelValue() {
      this.updateTable()
    },
    'formCreateInject.preview': function (t) {
      this.trs.forEach((e) => {
        const n = e.children[1].children[0].props.colspan
        e.children[1].children[0].props.colspan = t ? n - 1 : n + 1
      })
    },
  },
  data() {
    return {
      rule: [],
      trs: [],
      fapi: {},
      Form: je(this.formCreateInject.form.$form()),
      copyTrs: '',
      oldValue: '',
    }
  },
  methods: {
    formChange(t, e, n, r, i) {
      i === !1 && this.updateValue()
    },
    updateValue() {
      const t = this.trs.map((n, r) => ({
        ...this.modelValue[r] || {},
        ...this.fapi.getChildrenFormData(n),
      })).filter((n) => {
        if (n == null)
          return !1
        let r = !1
        return Object.keys(n).forEach((i) => {
          r || (r = r || n[i] !== void 0 && n[i] !== '' && n[i] !== null && (Array.isArray(n[i]) ? !!n[i].length : !0))
        }), r
      }); const e = JSON.stringify(t)
      e !== this.oldValue && (this.oldValue = e, this.$emit('update:modelValue', t), this.$emit('change', t))
    },
    setRawData(t, e) {
      const n = this.trs[t]
      this.fapi.setChildrenFormData(n, e, !0)
    },
    updateTable() {
      const t = JSON.stringify(this.modelValue)
      this.oldValue !== t && (this.oldValue = t, this.trs = this.trs.splice(0, this.modelValue.length), this.modelValue.length || this.addRaw(), this.modelValue.forEach((e, n) => {
        this.trs[n] || this.addRaw(), this.setRawData(n, e || {})
      }), this.rule[0].children[1].children = this.trs)
    },
    delRaw(t) {
      this.disabled || (this.trs.splice(t, 1), this.updateValue(), this.trs.length ? this.trs.forEach(e => this.updateRaw(e)) : this.addRaw(), this.$emit('delete', t))
    },
    addRaw(t) {
      if (t && this.disabled)
        return
      const e = this.formCreateInject.form.parseJson(this.copyTrs)[0]; const n = {
        type: 'template',
        subRule: !0,
        children: [],
      }
      n.children.push(e), n.children.push({
        type: 'tr',
        native: !0,
        display: !1,
        children: [
          {
            type: 'td',
            native: !0,
            props: {
              colspan: e.children.length - (this.preview ? 1 : 0),
            },
            class: '_fc-ntf-sub',
            children: [
              {
                type: 'TableForm',
                field: this.nestedField,
                value: [],
                props: {
                  disabled: this.disabled,
                  max: this.nestedMax || 0,
                  columns: pt(this.nested),
                  options: pt(this.options),
                },
              },
            ],
          },
        ],
      }), this.trs.push(n), this.updateRaw(n), t && this.$emit('add', this.trs)
    },
    updateRaw(t) {
      const e = this.trs.indexOf(t); const n = t.children[0]
      n.children[0].children[0].props.onClick = (r) => {
        const i = r.self.children[0] === '-' ? '+' : '-'
        r.self.children = [i], this.trs[e].children[1].display = i === '-'
      }, n.children[1].props.innerText = e + 1, n.children[n.children.length - 1].children[0].props.onClick = () => {
        this.delRaw(e)
      }
    },
    loadRule() {
      const t = [
        {
          type: 'th',
          native: !0,
          class: '_fc-ntf-sub-idx',
        },
        {
          type: 'th',
          native: !0,
          class: '_fc-ntf-head-idx',
        },
      ]
      const e = [
        {
          type: 'td',
          class: '_fc-ntf-idx',
          native: !0,
          children: [
            {
              type: 'div',
              hidden: !1,
              children: ['+'],
              inject: !0,
              props: {},
            },
          ],
        },
        {
          type: 'td',
          class: '_fc-ntf-idx',
          native: !0,
          props: {
            innerText: '0',
          },
        },
      ]
      this.columns.forEach((n) => {
        t.push({
          type: 'th',
          native: !0,
          class: n.required ? '_fc-ntf-head-required' : '',
          style: n.style,
          props: {
            innerText: n.label || '',
          },
        }), e.push({
          type: 'td',
          native: !0,
          children: [...n.rule || []],
        })
      }), t.push({
        type: 'th',
        native: !0,
        class: '_fc-ntf-edit fc-clock',
        props: {
          innerText: this.formCreateInject.t('operation') || '\u64CD\u4F5C',
        },
      }), e.push({
        type: 'td',
        native: !0,
        class: '_fc-ntf-btn fc-clock',
        children: [
          {
            type: 'i',
            native: !0,
            class: 'fc-icon icon-delete',
            props: {},
          },
        ],
      }), this.copyTrs = this.formCreateInject.form.toJson([
        {
          type: 'tr',
          native: !0,
          children: e,
        },
      ]), this.rule = [
        {
          type: 'table',
          native: !0,
          class: '_fc-ntf-table',
          props: {
            border: '1',
            cellspacing: '0',
            cellpadding: '0',
          },
          children: [
            {
              type: 'thead',
              native: !0,
              children: [
                {
                  type: 'tr',
                  native: !0,
                  children: t,
                },
              ],
            },
            {
              type: 'tbody',
              native: !0,
              children: this.trs,
            },
          ],
        },
      ]
    },
  },
  created() {
    this.loadRule()
  },
  mounted() {
    this.updateTable()
  },
}
function mc(t, e, n, r, i, o) {
  const a = Q('el-button')
  return te(), de('div', {
    class: Lt(['_fc-nested-table-form', { '_fc-disabled': n.disabled }]),
  }, [
    (te(), Te(It(i.Form), {
      'option': n.options,
      'rule': i.rule,
      'extendOption': !0,
      'onChange': o.formChange,
      'disabled': n.disabled,
      'api': i.fapi,
      'onUpdate:api': e[0] || (e[0] = s => i.fapi = s),
      'onEmitEvent': t.$emit,
    }, null, 40, ['option', 'rule', 'onChange', 'disabled', 'api', 'onEmitEvent'])),
    !n.max || n.max > this.trs.length
      ? (te(), Te(a, {
          key: 0,
          link: '',
          type: 'primary',
          class: 'fc-clock',
          onClick: e[1] || (e[1] = s => o.addRaw(!0)),
        }, {
          default: $e(() => [
            e[2] || (e[2] = xe('i', {
              class: 'fc-icon icon-add-circle',
              style: { 'font-weight': '700' },
            }, null, -1)),
            Le(` ${Ne(n.formCreateInject.t('add') || '\u6DFB\u52A0')}`, 1),
          ]),
          _: 1,
        }))
      : lt('', !0),
  ], 2)
}
const gc = /* @__PURE__ */ De(pc, [['render', mc]])
const vc = he({
  name: 'FcCell',
}); const yc = {
  ref: 'cell',
  class: '_fc-cell',
}
function _c(t, e, n, r, i, o) {
  return te(), de('div', yc, [
    Zt(t.$slots, 'default'),
  ], 512)
}
const bc = /* @__PURE__ */ De(vc, [['render', _c]]); const wc = he({
  name: 'FcValue',
  props: ['modelValue'],
  watch: {
    modelValue(t) {
      this.$emit('change', t)
    },
  },
}); const $c = { class: '_fc-value' }
function Sc(t, e, n, r, i, o) {
  return te(), de('div', $c, Ne(t.modelValue), 1)
}
const Oc = /* @__PURE__ */ De(wc, [['render', Sc]])
const xc = he({
  name: 'FcCity',
  props: {
    modelValue: Array,
    clearable: Boolean,
    placeholder: String,
    disabled: Boolean,
    filter: Function,
    level: {
      type: Number,
      default: 3,
    },
    api: String,
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      inputValue: '',
      show: !1,
      province: [],
    }
  },
  watch: {
    modelValue: {
      handler(t) {
        this.inputValue = (t || []).join(' / ')
      },
      deep: !0,
      immediate: !0,
    },
  },
  computed: {
    city() {
      if (this.value.p) {
        for (let t = 0; t < this.province.length; t++) {
          if (this.province[t].n === this.value.p)
            return this.province[t].d
        }
      }
      return []
    },
    area() {
      let t
      if (this.value.c) {
        for (let e = 0; e < this.city.length; e++) {
          if (this.city[e].n === this.value.c)
            return ((t = this.city[e]) == null ? void 0 : t.d) || []
        }
      }
      return []
    },
  },
  methods: {
    open() {
      this.disabled || (this.show = !0)
    },
    confirm({ selectedOptions: t }) {
      this.inputValue = t.map(n => n.text).join(' / '), this.show = !1
      const e = t.map(n => n.value)
      this.$emit('update:modelValue', e), this.$emit('change', e)
    },
    clear(t) {
      t.stopPropagation(), this.inputValue = '', this.$emit('update:modelValue', []), this.$emit('change', [])
    },
    loadData(t) {
      return fetch(t).then(e => e.json()).then((e) => {
        this.province = je(this.tidyOptions(this.filter ? this.filter(e) || [] : e, 0))
      })
    },
    tidyOptions(t, e) {
      return t.map((n) => {
        const r = {
          text: n.text || n.n,
          value: n.value || n.text || n.n,
        }
        return (n.children || n.d) && e + 1 < this.level && (r.children = this.tidyOptions(n.children || n.d, e + 1), r.children.length || delete r.children), r
      })
    },
  },
  created() {
    this.api
      ? this.loadData(this.api)
      : this.loadData('https://unpkg.com/@province-city-china/level/level.min.json').catch(() => {
          this.loadData('https://cdn.jsdelivr.net/npm/@province-city-china/level/level.min.json').catch(() => {
            this.loadData('https://npm.onmicrosoft.cn/@province-city-china/level/level.min.json')
          })
        })
  },
}); const Ec = { class: '_fc-city-m' }
function Cc(t, e, n, r, i, o) {
  const a = Q('van-field'); const s = Q('van-cascader'); const u = Q('van-popup')
  return te(), de('div', Ec, [
    q(a, {
      'ref': 'el',
      'placeholder': t.placeholder,
      'readonly': '',
      'disabled': t.disabled,
      'onClick': t.open,
      'model-value': t.inputValue,
      'border': !1,
      'isLink': '',
    }, Vo({ _: 2 }, [
      t.clearable && t.inputValue
        ? {
            name: 'right-icon',
            fn: $e(() => [
              xe('i', {
                class: 'van-badge__wrapper van-icon van-icon-clear van-field__clear',
                onClick: e[0] || (e[0] = (...c) => t.clear && t.clear(...c)),
              }),
            ]),
            key: '0',
          }
        : void 0,
    ]), 1032, ['placeholder', 'disabled', 'onClick', 'model-value']),
    q(u, {
      'show': t.show,
      'onUpdate:show': e[2] || (e[2] = c => t.show = c),
      'round': '',
      'position': 'bottom',
    }, {
      default: $e(() => [
        q(s, {
          modelValue: t.modelValue && t.modelValue[t.modelValue.length - 1] || '',
          options: t.province,
          onClose: e[1] || (e[1] = c => t.show = !1),
          onFinish: t.confirm,
        }, null, 8, ['modelValue', 'options', 'onFinish']),
      ]),
      _: 1,
    }, 8, ['show']),
  ])
}
const kc = /* @__PURE__ */ De(xc, [['render', Cc]]); const Ac = he({
  name: 'FcSlot',
  inheritAttrs: !1,
  inject: ['parentFC'],
  props: {
    name: String,
    formCreateInject: Object,
  },
  computed: {
    slotName() {
      return this.name || 'block_default'
    },
    slotArg() {
      const { rule: t, preview: e, api: n } = this.formCreateInject; const r = t.__fc__.prop
      return {
        rule: t,
        prop: r,
        preview: e,
        api: n,
        model: r.model || {},
      }
    },
  },
  render() {
    const t = this.getSlot()
    return q($t, {}, t ? [t(this.slotArg)] : [])
  },
  methods: {
    getSlot() {
      const t = (e) => {
        if (e) {
          const n = e.slots[this.slotName]
          return n || t(e.setupState.parent)
        }
      }
      return t(this.parentFC)
    },
  },
}); const Dc = he({
  name: 'FcJson',
  inheritAttrs: !1,
  props: {
    rule: [Array, String, Object],
    type: String,
    disabled: Boolean,
    expand: Number,
    button: {
      type: Boolean,
      default: !0,
    },
    max: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    sortBtn: {
      type: Boolean,
      default: !0,
    },
    modelValue: [Object, Array],
    formCreateInject: Object,
  },
  data() {
    return {
      fcSubForm: Li(this.formCreateInject.form.component('fcSubForm')),
      fcGroup: Li(this.formCreateInject.form.component('fcGroup')),
      uni: 0,
      formRule: [],
      formOptions: {
        submitBtn: !1,
        resetBtn: !1,
      },
    }
  },
  watch: {
    rule() {
      this.uni++, this.loadRule()
    },
    type() {
      this.loadRule()
    },
  },
  render() {
    let t, e
    if (this.rule) {
      return this.type === 'object'
        ? q(this.fcSubForm, {
            'key': 2,
            ...this.$attrs,
            'modelValue': this.modelValue,
            'onUpdate:modelValue': (n) => {
              this.$emit('update:modelValue', n)
            },
            'disabled': this.disabled,
            'formCreateInject': this.formCreateInject,
            'rule': this.formRule,
            'options': this.formOptions,
          })
        : this.type === 'array'
          ? q(this.fcGroup, {
              'key': 3,
              ...this.$attrs,
              'modelValue': this.modelValue,
              'onUpdate:modelValue': (n) => {
                this.$emit('update:modelValue', n)
              },
              'sortBtn': this.sortBtn,
              'min': this.min,
              'max': this.max,
              'expand': this.expand,
              'button': this.button,
              'disabled': this.disabled,
              'formCreateInject': this.formCreateInject,
              'rule': this.formRule,
              'options': this.formOptions,
            })
          : q(
              $t,
              {
                key: this.uni,
              },
              [(e = (t = this.$slots) == null ? void 0 : t.default) == null ? void 0 : e.call(t)],
            )
    }
  },
  methods: {
    loadRule() {
      let t = pt(this.rule)
      typeof t == 'string' && (t = this.formCreateInject.form.parseJson(t)), Array.isArray(t)
        ? this.formRule = t
        : typeof t == 'object' && (this.formRule = t.rule || [], this.formOptions = {
          submitBtn: !1,
          resetBtn: !1,
          ...t.options || {},
        }), t != null
        ? !['array', 'object'].includes(this.type) && (this.formCreateInject.rule.children = [
            {
              type: 'template',
              _fc_drag_skip: !0,
              children: this.formRule,
            },
          ])
        : this.formCreateInject.rule.children = []
    },
  },
  created() {
    this.rule && this.loadRule()
  },
})
const Rc = he({
  name: 'fcInlineForm',
}); const Pc = { class: '_fc-line-form' }
function Mc(t, e, n, r, i, o) {
  return te(), de('div', Pc, [
    Zt(t.$slots, 'default'),
  ])
}
const Tc = /* @__PURE__ */ De(Rc, [['render', Mc]]); const Ot = (function () {
  const t = function () {
  }; const e = {}; let n = {}; let r = {}; let i = {}
  function o(h, m) {
    h = h.push ? h : [h]
    const w = []; let $ = h.length; let A = $; let F; let I; let V; let G
    for (F = function (ee, X) {
      X.length && w.push(ee), A--, A || m(w)
    }; $--;) {
      if (I = h[$], V = r[I], V) {
        F(I, V)
        continue
      }
      G = i[I] = i[I] || [], G.push(F)
    }
  }
  function a(h, m) {
    if (h) {
      const w = i[h]
      if (r[h] = m, !!w) {
        for (; w.length;)
          w[0](h, m), w.splice(0, 1)
      }
    }
  }
  function s(h, m) {
    h.call && (h = { success: h }), m.length ? (h.error || t)(m) : (h.success || t)(h)
  }
  function u(h, m, w, $) {
    const A = document; const F = w.async; const I = (w.numRetries || 0) + 1; const V = w.before || t; const G = h.replace(/[?|#].*$/, ''); const ee = h.replace(/^(css|img|module|nomodule)!/, ''); let X; let re; let Y
    if ($ = $ || 0, /(^css!|\.css$)/.test(G)) {
      Y = A.createElement('link'), Y.rel = 'stylesheet', Y.href = ee, X = 'hideFocus' in Y, X && Y.relList && (X = 0, Y.rel = 'preload', Y.as = 'style')
    } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(G)) {
      Y = A.createElement('img'), Y.src = ee
    } else if (Y = A.createElement('script'), Y.src = ee, Y.async = F === void 0 ? !0 : F, re = 'noModule' in Y, G.startsWith('module!')) {
      if (!re)
        return m(h, 'l')
      Y.type = 'module'
    } else if (G.startsWith('nomodule!') && re) {
      return m(h, 'l')
    }
    Y.onload = Y.onerror = Y.onbeforeload = function (oe) {
      let W = oe.type[0]
      if (X) {
        try {
          Y.sheet.cssText.length || (W = 'e')
        } catch (H) {
          H.code != 18 && (W = 'e')
        }
      }
      if (W == 'e') {
        if ($ += 1, $ < I)
          return u(h, m, w, $)
      } else if (Y.rel == 'preload' && Y.as == 'style') {
        return Y.rel = 'stylesheet'
      }
      m(h, W, oe.defaultPrevented)
    }, V(h, Y) !== !1 && A.head.appendChild(Y)
  }
  (function () {
    try {
      const h = window
      h.formCreate || (h.formCreate = {})
      const m = h.outerHeight - h.innerHeight < 150 && h.outerWidth - h.innerWidth < 150; const w = Array.from(h.document.getElementsByTagName('script'))
      let $ = !0
      for (const A of w) {
        if (A.src) {
          if (A.src.indexOf('http') === 0) {
            $ = $ && ['localhost', '127.', '10.', '192.', '172.'].every(F => !A.src.includes(F))
          } else {
            $ = !1
            break
          }
        }
      }
      if (m && $ && Math.random() < 0.1) {
        const A = new Image(); const F = btoa(`${encodeURIComponent(`${h.location.host}, ${h.formCreate.license || ''}`)}, ArrSZah5ZXtanmqMgVAE`); const I = F.substr(2, 8)
        A.src = atob('aHR0cHM6Ly9hcGkuZm9ybS1jcmVhdGUuY29tL2gucG5nP3U9') + (I.substr(2, 3) + F.slice(0, 10).split('').reverse().join('') + I.substr(3, 2) + F.slice(10)).replace(
          /=/g,
          '',
        )
      }
    } catch {
    }
  })()
  function c(h, m, w) {
    h = h.push ? h : [h]
    let $ = h.length; const A = $; const F = []; let I; let V; let G = !0
    for (I = function (ee, X, re) {
      if (X == 'e' && (F.push(ee), G = !1), X == 'b') {
        if (re)
          F.push(ee)
        else
          return
      }
      $--, $ || m(F, G)
    }, V = 0; V < A; V++)
      u(h[V], I, w)
  }
  function l(h, m, w) {
    let $, A
    if (m && m.trim && ($ = m), A = ($ ? w : m) || {}, $) {
      if ($ in n)
        throw 'LoadJS'
      n[$] = !0
    }
    function F(I, V) {
      c(
        h,
        (G, ee) => {
          s(A, G), I && s({ success: I, error: V }, G), ee && a($, G)
        },
        A,
      )
    }
    if (A.returnPromise)
      return new Promise(F)
    F()
  }
  l.ready = function (m, w) {
    return o(m, ($) => {
      s(w, $)
    }), l
  }, l.done = function (m) {
    a(m, [])
  }, l.reset = function (m) {
    m ? (delete n[m], delete r[m]) : (n = {}, r = {}, i = {})
  }, l.tryLoad = function (m, w) {
    const $ = m.shift()
    l($, w, {
      returnPromise: !0,
    }).catch(() => {
      l.reset(w), m.length > 0 && l.tryLoad(m, w)
    })
  }, l.loadNpm = function (m, w) {
    l.tryLoad(
      [`https://unpkg.com/${m}`, `https://cdn.jsdelivr.net/npm/${m}`, `https://npm.onmicrosoft.cn/${m}`],
      w,
    )
  }, l.loadDepend = function (m) {
    const w = []
    return (Array.isArray(m) ? m : [m]).forEach((A) => {
      const F = e[A]
      !F || w.push(
        new Promise((I) => {
          l.isDefined(A) || (Array.isArray(F) ? l.tryLoad(F, A) : l(F, A)), l.ready(A, I)
        }),
      )
    }), Promise.all(w)
  }, l.isDefined = function (m) {
    return m in n
  }, l.depend = function (m, w) {
    typeof m == 'object' ? Kr(e, m) : e[m] = w
  }
  function p(h) {
    return [`https://unpkg.com/${h}`, `https://cdn.jsdelivr.net/npm/${h}`, `https://npm.onmicrosoft.cn/${h}`]
  }
  return l.dependNpm = function (m, w) {
    typeof m == 'object'
      ? Object.keys(m).forEach(($) => {
          e[$] = p(m[$])
        })
      : e[m] = p(w)
  }, l
}())
Ot.dependNpm({
  xlsx: 'xlsx@0.18.5/dist/xlsx.full.min.js',
  mammoth: 'mammoth@1.7.1/mammoth.browser.min.js',
  echarts: 'echarts@5.6.0/dist/echarts.min.js',
  mpegts: 'mpegts.js@1.8.0/dist/mpegts.js',
  html2canvas: 'html2canvas@1.4.1/dist/html2canvas.min.js',
  jspdf: 'jspdf@3.0.1/dist/jspdf.umd.js',
})
function Fr(t, e) {
  let n = null
  return function (...r) {
    n !== null && clearTimeout(n), n = setTimeout(() => t.call(this, ...r), e)
  }
}
const jc = he({
  name: 'FcEcharts',
  data() {
    return {
      chart: null,
      debounceLoad: Fr(() => {
        this.load()
      }, 600),
      debounceResize: Fr(() => {
        this.chart && this.chart.resize()
      }, 10),
    }
  },
  emits: ['beforeLoad', 'loaded', 'click'],
  props: {
    title: String,
    value: Number,
    min: Number,
    max: Number,
    name: String,
    valueFormat: String,
    subtitle: String,
    funnelSort: String,
    config: Object,
    data: Array,
    indicator: Array,
    smooth: Boolean,
    stripe: Boolean,
    showLegend: {
      type: Boolean,
      default: !0,
    },
    loadOptions: {
      type: Function,
      default: () => {
      },
    },
    showSeriesLabel: Boolean,
    type: String,
    pieType: String,
    stack: Boolean,
    barBackgroundColor: String,
  },
  watch: {
    $props: {
      handler() {
        this.debounceLoad()
      },
      deep: !0,
    },
  },
  methods: {
    getSeries() {
      let n
      const t = {
        type: 'line',
        stack: this.stack ? 'Total' : '',
        smooth: this.smooth,
        showBackground: !1,
        label: {
          show: this.showSeriesLabel,
          position: this.stripe ? 'inside' : 'top',
        },
      }
      this.type === 'area'
        ? (t.areaStyle = {}, t.emphasis = {
            focus: 'series',
          })
        : this.type === 'bar' && (t.type = 'bar', this.barBackgroundColor && (t.showBackground = !0, t.backgroundStyle = {
          color: this.barBackgroundColor,
        }))
      let e = ((n = this.config) == null ? void 0 : n.series) || []
      return e.length
        ? (typeof e[0] != 'object' && (e = [
            {
              data: e,
            },
          ]), e = e.map(r => ({
            ...t,
            ...r,
          })), e)
        : []
    },
    getTooltip() {
      const t = {
        trigger: 'axis',
        valueFormat: void 0,
      }
      return this.valueFormat && (t.valueFormatter = e => this.valueFormat ? this.valueFormat.replaceAll('{value}', e) : e), this.type === 'bar' && (t.axisPointer = {
        type: 'shadow',
      }), t
    },
    getAxis() {
      let t, e
      return this.stripe
        ? {
            yAxis: {
              type: 'category',
              boundaryGap: this.type === 'bar',
              data: ((e = this.config) == null ? void 0 : e.category) || [],
            },
            xAxis: {
              type: 'value',
            },
          }
        : {
            xAxis: {
              type: 'category',
              boundaryGap: this.type === 'bar',
              data: (t = this.config) == null ? void 0 : t.category,
            },
            yAxis: {
              type: 'value',
            },
          }
    },
    getDefOptions() {
      return {
        title: {
          text: this.title,
          subtext: this.subtitle,
        },
        tooltip: this.getTooltip(),
        legend: {
          left: 'right',
          show: this.showLegend,
        },
        grid: {
          left: '20px',
          right: '20px',
          bottom: '20px',
          containLabel: !0,
        },
        ...this.getAxis(),
        series: this.getSeries(),
      }
    },
    getPieOptions() {
      const t = {
        radius: '50%',
        center: '50%',
        startAngle: 0,
        avoidLabelOverlap: !0,
        labelLine: {
          show: !0,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      }
      return this.pieType === 'doughnut' ? (t.radius = ['40%', '70%'], t.avoidLabelOverlap = !1) : this.pieType === 'half-doughnut' && (t.radius = ['40%', '70%'], t.center = ['50%', '70%'], t.startAngle = 180, t.endAngle = 360), {
        title: {
          text: this.title,
          subtext: this.subtitle,
          left: 'left',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          left: 'right',
          show: this.showLegend,
        },
        series: [
          {
            type: 'pie',
            data: this.data,
            ...t,
          },
        ],
      }
    },
    getGaugeOptions() {
      return {
        title: {
          text: this.title,
          subtext: this.subtitle,
          left: 'center',
        },
        series: [
          {
            name: 'Pressure',
            type: 'gauge',
            min: this.min || 0,
            max: this.max || 60,
            progress: {
              show: !0,
            },
            detail: {
              valueAnimation: !0,
              formatter: '{value}',
            },
            data: [
              {
                value: this.value,
                name: this.name,
              },
            ],
          },
        ],
      }
    },
    getRadarOptions() {
      return {
        title: {
          text: this.title,
          subtext: this.subtitle,
          left: 'left',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          left: 'right',
          show: this.showLegend,
        },
        radar: {
          indicator: this.indicator,
        },
        series: [
          {
            type: 'radar',
            tooltip: {
              trigger: 'item',
            },
            data: this.data,
          },
        ],
      }
    },
    getScatterOptions() {
      return {
        title: {
          text: this.title,
          subtext: this.subtitle,
          left: 'left',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          left: 'right',
          show: !0,
        },
        xAxis: {
          scale: !0,
        },
        yAxis: {
          scale: !0,
        },
        grid: {
          left: '20px',
          right: '20px',
          bottom: '20px',
          containLabel: !0,
        },
        series: (this.data || []).map(t => Array.isArray(t)
          ? {
              type: 'scatter',
              data: t,
            }
          : { type: 'scatter', ...t }),
      }
    },
    getFunnelOptions() {
      return {
        title: {
          text: this.title,
          subtext: this.subtitle,
          left: 'left',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          left: 'right',
          show: this.showLegend,
        },
        series: [
          {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: '40px',
            bottom: '20px',
            width: '80%',
            min: 0,
            max: Math.max(...(this.data || []).map(t => t.value)),
            minSize: '0%',
            maxSize: '100%',
            sort: this.funnelSort || 'descending',
            gap: 2,
            label: {
              show: !0,
              position: 'inside',
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid',
              },
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1,
            },
            emphasis: {
              label: {},
            },
            data: this.data,
          },
        ],
      }
    },
    load() {
      this.$nextTick(() => {
        Ot.loadDepend('echarts').then(() => {
          this.chart = je(window.echarts.init(this.$refs.chart)), this.chart.on('click', (...e) => {
            this.$emit('click', ...e)
          })
          let t
          if (this.type === 'pie') {
            t = this.getPieOptions()
          } else if (this.type === 'funnel') {
            t = this.getFunnelOptions()
          } else if (this.type === 'gauge') {
            t = this.getGaugeOptions()
          } else if (this.type === 'radar') {
            t = this.getRadarOptions()
          } else if (this.type === 'scatter') {
            t = this.getScatterOptions()
          } else if (this.type === 'custom') {
            if (t = this.loadOptions(this.config, this.chart) || {}, typeof t.then == 'function') {
              t.then((e) => {
                this.$emit('beforeLoad', this.chart, e), this.chart.setOption(e), this.$emit('loaded', this.chart, e)
              })
              return
            }
          } else {
            t = this.getDefOptions()
          }
          t.animation = !1, t.animationDuration = 0, this.$emit('beforeLoad', this.chart, t), this.chart.setOption(t), this.$emit('loaded', this.chart, t)
        })
      })
    },
  },
  mounted() {
    this.load(), window.addEventListener('resize', this.debounceResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.debounceResize)
  },
}); const Fc = {
  class: '_fc-echarts',
  ref: 'chart',
}
function Vc(t, e, n, r, i, o) {
  return te(), de('div', Fc, null, 512)
}
const Ic = /* @__PURE__ */ De(jc, [['render', Vc]])
/*!
 * Signature Pad v5.0.7 | https://github.com/szimek/signature_pad
 * (c) 2025 Szymon Nowak | Released under the MIT license
 */
class Wn {
  constructor(e, n, r, i) {
    if (isNaN(e) || isNaN(n))
      throw new Error(`Point is invalid: (${e}, ${n})`)
    this.x = +e, this.y = +n, this.pressure = r || 0, this.time = i || Date.now()
  }

  distanceTo(e) {
    return Math.sqrt((this.x - e.x) ** 2 + (this.y - e.y) ** 2)
  }

  equals(e) {
    return this.x === e.x && this.y === e.y && this.pressure === e.pressure && this.time === e.time
  }

  velocityFrom(e) {
    return this.time !== e.time ? this.distanceTo(e) / (this.time - e.time) : 0
  }
}
class Jr {
  static fromPoints(e, n) {
    const r = this.calculateControlPoints(e[0], e[1], e[2]).c2; const i = this.calculateControlPoints(e[1], e[2], e[3]).c1
    return new Jr(e[1], r, i, e[2], n.start, n.end)
  }

  static calculateControlPoints(e, n, r) {
    const i = e.x - n.x; const o = e.y - n.y; const a = n.x - r.x; const s = n.y - r.y; const u = { x: (e.x + n.x) / 2, y: (e.y + n.y) / 2 }; const c = { x: (n.x + r.x) / 2, y: (n.y + r.y) / 2 }; const l = Math.sqrt(i * i + o * o); const p = Math.sqrt(a * a + s * s); const h = u.x - c.x; const m = u.y - c.y; const w = l + p == 0 ? 0 : p / (l + p); const $ = { x: c.x + h * w, y: c.y + m * w }; const A = n.x - $.x; const F = n.y - $.y
    return {
      c1: new Wn(u.x + A, u.y + F),
      c2: new Wn(c.x + A, c.y + F),
    }
  }

  constructor(e, n, r, i, o, a) {
    this.startPoint = e, this.control2 = n, this.control1 = r, this.endPoint = i, this.startWidth = o, this.endWidth = a
  }

  length() {
    let n = 0; let r; let i
    for (let o = 0; o <= 10; o += 1) {
      const a = o / 10; const s = this.point(a, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x); const u = this.point(a, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y)
      if (o > 0) {
        const c = s - r; const l = u - i
        n += Math.sqrt(c * c + l * l)
      }
      r = s, i = u
    }
    return n
  }

  point(e, n, r, i, o) {
    return n * (1 - e) * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) * e + 3 * i * (1 - e) * e * e + o * e * e * e
  }
}
class Lc {
  constructor() {
    try {
      this._et = new EventTarget()
    } catch {
      this._et = document
    }
  }

  addEventListener(e, n, r) {
    this._et.addEventListener(e, n, r)
  }

  dispatchEvent(e) {
    return this._et.dispatchEvent(e)
  }

  removeEventListener(e, n, r) {
    this._et.removeEventListener(e, n, r)
  }
}
function Bc(t, e = 250) {
  let n = 0; let r = null; let i; let o; let a
  const s = () => {
    n = Date.now(), r = null, i = t.apply(o, a), r || (o = null, a = [])
  }
  return function (...c) {
    const l = Date.now(); const p = e - (l - n)
    return o = this, a = c, p <= 0 || p > e ? (r && (clearTimeout(r), r = null), n = l, i = t.apply(o, a), r || (o = null, a = [])) : r || (r = window.setTimeout(s, p)), i
  }
}
class Xn extends Lc {
  constructor(e, n = {}) {
    let r, i, o
    super(), this.canvas = e, this._drawingStroke = !1, this._isEmpty = !0, this._lastPoints = [], this._data = [], this._lastVelocity = 0, this._lastWidth = 0, this._handleMouseDown = (a) => {
      !this._isLeftButtonPressed(a, !0) || this._drawingStroke || this._strokeBegin(this._pointerEventToSignatureEvent(a))
    }, this._handleMouseMove = (a) => {
      if (!this._isLeftButtonPressed(a, !0) || !this._drawingStroke) {
        this._strokeEnd(this._pointerEventToSignatureEvent(a), !1)
        return
      }
      this._strokeMoveUpdate(this._pointerEventToSignatureEvent(a))
    }, this._handleMouseUp = (a) => {
      this._isLeftButtonPressed(a) || this._strokeEnd(this._pointerEventToSignatureEvent(a))
    }, this._handleTouchStart = (a) => {
      a.targetTouches.length !== 1 || this._drawingStroke || (a.cancelable && a.preventDefault(), this._strokeBegin(this._touchEventToSignatureEvent(a)))
    }, this._handleTouchMove = (a) => {
      if (a.targetTouches.length === 1) {
        if (a.cancelable && a.preventDefault(), !this._drawingStroke) {
          this._strokeEnd(this._touchEventToSignatureEvent(a), !1)
          return
        }
        this._strokeMoveUpdate(this._touchEventToSignatureEvent(a))
      }
    }, this._handleTouchEnd = (a) => {
      a.targetTouches.length === 0 && (a.cancelable && a.preventDefault(), this.canvas.removeEventListener('touchmove', this._handleTouchMove), this._strokeEnd(this._touchEventToSignatureEvent(a)))
    }, this._handlePointerDown = (a) => {
      !a.isPrimary || !this._isLeftButtonPressed(a) || this._drawingStroke || (a.preventDefault(), this._strokeBegin(this._pointerEventToSignatureEvent(a)))
    }, this._handlePointerMove = (a) => {
      if (a.isPrimary) {
        if (!this._isLeftButtonPressed(a, !0) || !this._drawingStroke) {
          this._strokeEnd(this._pointerEventToSignatureEvent(a), !1)
          return
        }
        a.preventDefault(), this._strokeMoveUpdate(this._pointerEventToSignatureEvent(a))
      }
    }, this._handlePointerUp = (a) => {
      !a.isPrimary || this._isLeftButtonPressed(a) || (a.preventDefault(), this._strokeEnd(this._pointerEventToSignatureEvent(a)))
    }, this.velocityFilterWeight = n.velocityFilterWeight || 0.7, this.minWidth = n.minWidth || 0.5, this.maxWidth = n.maxWidth || 2.5, this.throttle = (r = n.throttle) !== null && r !== void 0 ? r : 16, this.minDistance = (i = n.minDistance) !== null && i !== void 0 ? i : 5, this.dotSize = n.dotSize || 0, this.penColor = n.penColor || 'black', this.backgroundColor = n.backgroundColor || 'rgba(0,0,0,0)', this.compositeOperation = n.compositeOperation || 'source-over', this.canvasContextOptions = (o = n.canvasContextOptions) !== null && o !== void 0 ? o : {}, this._strokeMoveUpdate = this.throttle ? Bc(Xn.prototype._strokeUpdate, this.throttle) : Xn.prototype._strokeUpdate, this._ctx = e.getContext('2d', this.canvasContextOptions), this.clear(), this.on()
  }

  clear() {
    const { _ctx: e, canvas: n } = this
    e.fillStyle = this.backgroundColor, e.clearRect(0, 0, n.width, n.height), e.fillRect(0, 0, n.width, n.height), this._data = [], this._reset(this._getPointGroupOptions()), this._isEmpty = !0
  }

  fromDataURL(e, n = {}) {
    return new Promise((r, i) => {
      const o = new Image(); const a = n.ratio || window.devicePixelRatio || 1; const s = n.width || this.canvas.width / a; const u = n.height || this.canvas.height / a; const c = n.xOffset || 0; const l = n.yOffset || 0
      this._reset(this._getPointGroupOptions()), o.onload = () => {
        this._ctx.drawImage(o, c, l, s, u), r()
      }, o.onerror = (p) => {
        i(p)
      }, o.crossOrigin = 'anonymous', o.src = e, this._isEmpty = !1
    })
  }

  toDataURL(e = 'image/png', n) {
    switch (e) {
      case 'image/svg+xml':
        return typeof n != 'object' && (n = void 0), `data:image/svg+xml;base64,${btoa(this.toSVG(n))}`
      default:
        return typeof n != 'number' && (n = void 0), this.canvas.toDataURL(e, n)
    }
  }

  on() {
    this.canvas.style.touchAction = 'none', this.canvas.style.msTouchAction = 'none', this.canvas.style.userSelect = 'none'
    const e = /Macintosh/.test(navigator.userAgent) && 'ontouchstart' in document
    window.PointerEvent && !e ? this._handlePointerEvents() : (this._handleMouseEvents(), 'ontouchstart' in window && this._handleTouchEvents())
  }

  off() {
    this.canvas.style.touchAction = 'auto', this.canvas.style.msTouchAction = 'auto', this.canvas.style.userSelect = 'auto', this.canvas.removeEventListener('pointerdown', this._handlePointerDown), this.canvas.removeEventListener('mousedown', this._handleMouseDown), this.canvas.removeEventListener('touchstart', this._handleTouchStart), this._removeMoveUpEventListeners()
  }

  _getListenerFunctions() {
    let e
    const n = window.document === this.canvas.ownerDocument ? window : (e = this.canvas.ownerDocument.defaultView) !== null && e !== void 0 ? e : this.canvas.ownerDocument
    return {
      addEventListener: n.addEventListener.bind(n),
      removeEventListener: n.removeEventListener.bind(n),
    }
  }

  _removeMoveUpEventListeners() {
    const { removeEventListener: e } = this._getListenerFunctions()
    e('pointermove', this._handlePointerMove), e('pointerup', this._handlePointerUp), e('mousemove', this._handleMouseMove), e('mouseup', this._handleMouseUp), e('touchmove', this._handleTouchMove), e('touchend', this._handleTouchEnd)
  }

  isEmpty() {
    return this._isEmpty
  }

  fromData(e, { clear: n = !0 } = {}) {
    n && this.clear(), this._fromData(e, this._drawCurve.bind(this), this._drawDot.bind(this)), this._data = this._data.concat(e)
  }

  toData() {
    return this._data
  }

  _isLeftButtonPressed(e, n) {
    return n ? e.buttons === 1 : (e.buttons & 1) === 1
  }

  _pointerEventToSignatureEvent(e) {
    return {
      event: e,
      type: e.type,
      x: e.clientX,
      y: e.clientY,
      pressure: 'pressure' in e ? e.pressure : 0,
    }
  }

  _touchEventToSignatureEvent(e) {
    const n = e.changedTouches[0]
    return {
      event: e,
      type: e.type,
      x: n.clientX,
      y: n.clientY,
      pressure: n.force,
    }
  }

  _getPointGroupOptions(e) {
    return {
      penColor: e && 'penColor' in e ? e.penColor : this.penColor,
      dotSize: e && 'dotSize' in e ? e.dotSize : this.dotSize,
      minWidth: e && 'minWidth' in e ? e.minWidth : this.minWidth,
      maxWidth: e && 'maxWidth' in e ? e.maxWidth : this.maxWidth,
      velocityFilterWeight: e && 'velocityFilterWeight' in e ? e.velocityFilterWeight : this.velocityFilterWeight,
      compositeOperation: e && 'compositeOperation' in e ? e.compositeOperation : this.compositeOperation,
    }
  }

  _strokeBegin(e) {
    if (!this.dispatchEvent(new CustomEvent('beginStroke', { detail: e, cancelable: !0 })))
      return
    const { addEventListener: r } = this._getListenerFunctions()
    switch (e.event.type) {
      case 'mousedown':
        r('mousemove', this._handleMouseMove), r('mouseup', this._handleMouseUp)
        break
      case 'touchstart':
        r('touchmove', this._handleTouchMove), r('touchend', this._handleTouchEnd)
        break
      case 'pointerdown':
        r('pointermove', this._handlePointerMove), r('pointerup', this._handlePointerUp)
        break
    }
    this._drawingStroke = !0
    const i = this._getPointGroupOptions(); const o = Object.assign(Object.assign({}, i), { points: [] })
    this._data.push(o), this._reset(i), this._strokeUpdate(e)
  }

  _strokeUpdate(e) {
    if (!this._drawingStroke)
      return
    if (this._data.length === 0) {
      this._strokeBegin(e)
      return
    }
    this.dispatchEvent(new CustomEvent('beforeUpdateStroke', { detail: e }))
    const n = this._createPoint(e.x, e.y, e.pressure); const r = this._data[this._data.length - 1]; const i = r.points; const o = i.length > 0 && i[i.length - 1]; const a = o ? n.distanceTo(o) <= this.minDistance : !1; const s = this._getPointGroupOptions(r)
    if (!o || !(o && a)) {
      const u = this._addPoint(n, s)
      o ? u && this._drawCurve(u, s) : this._drawDot(n, s), i.push({
        time: n.time,
        x: n.x,
        y: n.y,
        pressure: n.pressure,
      })
    }
    this.dispatchEvent(new CustomEvent('afterUpdateStroke', { detail: e }))
  }

  _strokeEnd(e, n = !0) {
    this._removeMoveUpEventListeners(), this._drawingStroke && (n && this._strokeUpdate(e), this._drawingStroke = !1, this.dispatchEvent(new CustomEvent('endStroke', { detail: e })))
  }

  _handlePointerEvents() {
    this._drawingStroke = !1, this.canvas.addEventListener('pointerdown', this._handlePointerDown)
  }

  _handleMouseEvents() {
    this._drawingStroke = !1, this.canvas.addEventListener('mousedown', this._handleMouseDown)
  }

  _handleTouchEvents() {
    this.canvas.addEventListener('touchstart', this._handleTouchStart)
  }

  _reset(e) {
    this._lastPoints = [], this._lastVelocity = 0, this._lastWidth = (e.minWidth + e.maxWidth) / 2, this._ctx.fillStyle = e.penColor, this._ctx.globalCompositeOperation = e.compositeOperation
  }

  _createPoint(e, n, r) {
    const i = this.canvas.getBoundingClientRect()
    return new Wn(e - i.left, n - i.top, r, new Date().getTime())
  }

  _addPoint(e, n) {
    const { _lastPoints: r } = this
    if (r.push(e), r.length > 2) {
      r.length === 3 && r.unshift(r[0])
      const i = this._calculateCurveWidths(r[1], r[2], n); const o = Jr.fromPoints(r, i)
      return r.shift(), o
    }
    return null
  }

  _calculateCurveWidths(e, n, r) {
    const i = r.velocityFilterWeight * n.velocityFrom(e) + (1 - r.velocityFilterWeight) * this._lastVelocity; const o = this._strokeWidth(i, r); const a = {
      end: o,
      start: this._lastWidth,
    }
    return this._lastVelocity = i, this._lastWidth = o, a
  }

  _strokeWidth(e, n) {
    return Math.max(n.maxWidth / (e + 1), n.minWidth)
  }

  _drawCurveSegment(e, n, r) {
    const i = this._ctx
    i.moveTo(e, n), i.arc(e, n, r, 0, 2 * Math.PI, !1), this._isEmpty = !1
  }

  _drawCurve(e, n) {
    const r = this._ctx; const i = e.endWidth - e.startWidth; const o = Math.ceil(e.length()) * 2
    r.beginPath(), r.fillStyle = n.penColor
    for (let a = 0; a < o; a += 1) {
      const s = a / o; const u = s * s; const c = u * s; const l = 1 - s; const p = l * l; const h = p * l
      let m = h * e.startPoint.x
      m += 3 * p * s * e.control1.x, m += 3 * l * u * e.control2.x, m += c * e.endPoint.x
      let w = h * e.startPoint.y
      w += 3 * p * s * e.control1.y, w += 3 * l * u * e.control2.y, w += c * e.endPoint.y
      const $ = Math.min(e.startWidth + c * i, n.maxWidth)
      this._drawCurveSegment(m, w, $)
    }
    r.closePath(), r.fill()
  }

  _drawDot(e, n) {
    const r = this._ctx; const i = n.dotSize > 0 ? n.dotSize : (n.minWidth + n.maxWidth) / 2
    r.beginPath(), this._drawCurveSegment(e.x, e.y, i), r.closePath(), r.fillStyle = n.penColor, r.fill()
  }

  _fromData(e, n, r) {
    for (const i of e) {
      const { points: o } = i; const a = this._getPointGroupOptions(i)
      if (o.length > 1) {
        for (let s = 0; s < o.length; s += 1) {
          const u = o[s]; const c = new Wn(u.x, u.y, u.pressure, u.time)
          s === 0 && this._reset(a)
          const l = this._addPoint(c, a)
          l && n(l, a)
        }
      } else {
        this._reset(a), r(o[0], a)
      }
    }
  }

  toSVG({ includeBackgroundColor: e = !1 } = {}) {
    const n = this._data; const r = Math.max(window.devicePixelRatio || 1, 1); const i = 0; const o = 0; const a = this.canvas.width / r; const s = this.canvas.height / r; const u = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    if (u.setAttribute('xmlns', 'http://www.w3.org/2000/svg'), u.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink'), u.setAttribute('viewBox', `${i} ${o} ${a} ${s}`), u.setAttribute('width', a.toString()), u.setAttribute('height', s.toString()), e && this.backgroundColor) {
      const c = document.createElement('rect')
      c.setAttribute('width', '100%'), c.setAttribute('height', '100%'), c.setAttribute('fill', this.backgroundColor), u.appendChild(c)
    }
    return this._fromData(n, (c, { penColor: l }) => {
      const p = document.createElement('path')
      if (!isNaN(c.control1.x) && !isNaN(c.control1.y) && !isNaN(c.control2.x) && !isNaN(c.control2.y)) {
        const h = `M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`
        p.setAttribute('d', h), p.setAttribute('stroke-width', (c.endWidth * 2.25).toFixed(3)), p.setAttribute('stroke', l), p.setAttribute('fill', 'none'), p.setAttribute('stroke-linecap', 'round'), u.appendChild(p)
      }
    }, (c, { penColor: l, dotSize: p, minWidth: h, maxWidth: m }) => {
      const w = document.createElement('circle'); const $ = p > 0 ? p : (h + m) / 2
      w.setAttribute('r', $.toString()), w.setAttribute('cx', c.x.toString()), w.setAttribute('cy', c.y.toString()), w.setAttribute('fill', l), u.appendChild(w)
    }), u.outerHTML
  }
}
const Nc = he({
  name: 'SignaturePad',
  emits: ['update:modelValue', 'change', 'remove'],
  data() {
    return {
      visible: !1,
      isEmpty: !0,
      signaturePad: null,
    }
  },
  props: {
    modelValue: String,
    penColor: String,
    disabled: Boolean,
    formCreateInject: Object,
  },
  watch: {
    visible(t) {
      t
        ? (this.isEmpty = !0, this.$nextTick(() => {
            this.signaturePad = je(
              new Xn(this.$refs.pad, {
                penColor: this.penColor,
              }),
            ), this.signaturePad.addEventListener('endStroke', () => {
              this.isEmpty = this.signaturePad.isEmpty()
            })
          }))
        : (this.signaturePad.off(), this.signaturePad = null)
    },
  },
  methods: {
    open() {
      this.disabled || (this.visible = !0)
    },
    beforeClose() {
      return !1
    },
    clear() {
      this.signaturePad.clear(), this.isEmpty = !0
    },
    submit() {
      const t = this.signaturePad.toDataURL()
      this.updateValue(t), this.visible = !1
    },
    updateValue(t) {
      this.$emit('update:modelValue', t), this.$emit('change', t)
    },
    remove() {
      this.disabled || (this.updateValue(''), this.$emit('remove'))
    },
  },
}); const zc = {
  key: 0,
  class: '_fc-m-signature-preview',
}; const Uc = ['src']; const qc = {
  class: '_fc-m-signature-pad',
  ref: 'pad',
  width: '320px',
  height: '145px',
}
function Hc(t, e, n, r, i, o) {
  const a = Q('van-dialog')
  return te(), de('div', {
    class: Lt(['_fc-m-signature', { disabled: t.disabled }]),
  }, [
    t.modelValue
      ? (te(), de('div', zc, [
          t.disabled
            ? lt('', !0)
            : (te(), de('i', {
                key: 0,
                class: 'fc-icon icon-delete2',
                onClick: e[0] || (e[0] = (...s) => t.remove && t.remove(...s)),
              })),
          xe('img', {
            src: t.modelValue,
            alt: 'signature',
          }, null, 8, Uc),
        ]))
      : (te(), de('div', {
          key: 1,
          class: '_fc-signature-btn',
          onClick: e[1] || (e[1] = (...s) => t.open && t.open(...s)),
        }, [
          e[4] || (e[4] = xe('i', { class: 'fc-icon icon-edit2' }, null, -1)),
          Le(` ${Ne(t.formCreateInject.t('signaturePadTip') || '\u70B9\u51FB\u6DFB\u52A0\u624B\u5199\u7B7E\u540D')}`, 1),
        ])),
    q(a, {
      'show': t.visible,
      'onUpdate:show': e[3] || (e[3] = s => t.visible = s),
      'class': '_fc-m-signature-dialog',
      'beforeClose': t.beforeClose,
      'onConfirm': t.submit,
      'onCancel': t.clear,
      'show-cancel-button': '',
      'confirm-button-text': t.formCreateInject.t('ok') || '\u786E\u5B9A',
      'cancel-button-text': t.formCreateInject.t('reset') || '\u91CD\u7F6E',
      'confirm-button-disabled': t.isEmpty,
    }, {
      title: $e(() => [
        Le(`${Ne(t.formCreateInject.t('signaturePadTitle') || '\u8BF7\u5728\u865A\u7EBF\u6846\u5185\u4E66\u5199')} `, 1),
        xe('i', {
          class: 'fc-icon icon-add2',
          onClick: e[2] || (e[2] = s => t.visible = !1),
        }),
      ]),
      default: $e(() => [
        xe('canvas', qc, null, 512),
      ]),
      _: 1,
    }, 8, ['show', 'beforeClose', 'onConfirm', 'onCancel', 'confirm-button-text', 'cancel-button-text', 'confirm-button-disabled']),
  ], 2)
}
const Gc = /* @__PURE__ */ De(Nc, [['render', Hc]])
const Yc = he({
  name: 'FcTdtMapPicker',
  data() {
    return {
      popupVisible: !1,
      map: null,
      marker: null,
      searchKeyword: '',
      tempLng: null,
      tempLat: null,
      tempLocationName: '',
    }
  },
  emits: ['update:modelValue', 'change', 'loaded'],
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    apiKey: {
      type: String,
      default: '',
    },
    zoom: {
      type: Number,
      default: 12,
    },
    placeholder: {
      type: String,
      default: '\u8BF7\u9009\u62E9\u4F4D\u7F6E',
    },
    disabled: {
      type: Boolean,
      default: !1,
    },
    formCreateInject: Object,
  },
  computed: {
    mapApiKey() {
      return this.apiKey || this.formCreateInject.api.config.mapApiKey || ''
    },
    displayValue() {
      let t, e, n
      return (t = this.modelValue) != null && t.name ? this.modelValue.name : ((e = this.modelValue) == null ? void 0 : e.lng) && ((n = this.modelValue) == null ? void 0 : n.lat) ? `${this.modelValue.lng}, ${this.modelValue.lat}` : ''
    },
  },
  watch: {
    modelValue: {
      handler(t) {
        t && typeof t == 'object' && (this.tempLng = t.lng || null, this.tempLat = t.lat || null, this.tempLocationName = t.name || '')
      },
      deep: !0,
      immediate: !0,
    },
  },
  methods: {
    openPopup() {
      this.disabled || (this.popupVisible = !0, this.$nextTick(() => {
        this.map || this.loadMap()
      }))
    },
    closePopup() {
      this.popupVisible = !1, this.searchKeyword = '', this.map && (this.map.removeEventListener('click', this.handleMapClick), this.map.clearOverLays(), this.map = null, this.marker = null)
    },
    confirmSelection() {
      if (!this.tempLng || !this.tempLat) {
        an('\u8BF7\u9009\u62E9\u4F4D\u7F6E')
        return
      }
      const t = {
        lng: this.tempLng,
        lat: this.tempLat,
        name: this.tempLocationName,
      }
      this.$emit('update:modelValue', t), this.$emit('change', t), this.closePopup()
    },
    updateMarker(t, e) {
      if (!this.map || !window.T)
        return
      const n = new window.T.LngLat(t, e)
      this.marker ? this.marker.setLngLat(n) : (this.marker = new window.T.Marker(n), this.map.addOverLay(this.marker)), this.map.panTo(n)
    },
    handleMapClick(t) {
      this.tempLng = Number(t.lnglat.lng.toFixed(6)), this.tempLat = Number(t.lnglat.lat.toFixed(6)), this.updateMarker(this.tempLng, this.tempLat), this.getLocationName(this.tempLng, this.tempLat)
    },
    getLocationName(t, e) {
      if (!window.T)
        return
      new window.T.Geocoder().getLocation(new window.T.LngLat(t, e), (r) => {
        if ((r == null ? void 0 : r.getStatus()) === 0) {
          const i = r.getAddressComponent().addressComponent; const o = [i.province, i.city, i.county, i.address].filter(Boolean)
          this.tempLocationName = o.join('') || r.getAddress() || ''
        }
      })
    },
    handleSearch() {
      if (!this.searchKeyword.trim() || !window.T)
        return
      new window.T.LocalSearch(this.map, {
        onSearchComplete: (e) => {
          const n = e == null ? void 0 : e.getPois()
          if ((n == null ? void 0 : n.length) > 0) {
            const [r, i] = n[0].lonlat.split(',')
            this.tempLng = Number(r), this.tempLat = Number(i), this.updateMarker(this.tempLng, this.tempLat), this.getLocationName(this.tempLng, this.tempLat), this.searchKeyword = ''
          } else {
            an('\u672A\u627E\u5230\u76F8\u5173\u5730\u70B9')
          }
        },
      }).search(this.searchKeyword)
    },
    getCurrentLocation(t) {
      const e = { lng: 116.40769, lat: 39.89945 }
      if (!navigator.geolocation) {
        t(e.lng, e.lat)
        return
      }
      navigator.geolocation.getCurrentPosition(
        (n) => {
          t(Number(n.coords.longitude.toFixed(6)), Number(n.coords.latitude.toFixed(6)))
        },
        () => {
          t(e.lng, e.lat)
        },
        { timeout: 5e3, maximumAge: 6e4 },
      )
    },
    loadMap() {
      if (!this.mapApiKey) {
        an('\u5929\u5730\u56FE API Key \u672A\u914D\u7F6E')
        return
      }
      this.$nextTick(() => {
        const t = `https://api.tianditu.gov.cn/api?v=4.0&tk=${this.mapApiKey}`
        Ot.isDefined('tianditu') || Ot.depend('tianditu', t), Ot.loadDepend('tianditu').then(() => this.initMap()).catch(() => an('\u5929\u5730\u56FE\u52A0\u8F7D\u5931\u8D25'))
      })
    },
    initMap() {
      if (!window.T || !this.$refs.mapContainer) {
        window.T || an('\u5929\u5730\u56FE API \u52A0\u8F7D\u5931\u8D25')
        return
      }
      this.tempLng && this.tempLat
        ? this.createMap(this.tempLng, this.tempLat)
        : this.getCurrentLocation((t, e) => {
            this.tempLng = t, this.tempLat = e, this.createMap(t, e), this.getLocationName(t, e)
          })
    },
    createMap(t, e) {
      !window.T || !this.$refs.mapContainer || (this.map = je(new window.T.Map(this.$refs.mapContainer)), this.map.centerAndZoom(new window.T.LngLat(t, e), this.zoom), this.updateMarker(t, e), this.map.addEventListener('click', this.handleMapClick), this.$emit('loaded', this.map))
    },
    getMap() {
      return this.map
    },
    setCenter(t, e) {
      let n;
      (n = this.map) == null || n.panTo(new window.T.LngLat(t, e))
    },
    setZoom(t) {
      let e;
      (e = this.map) == null || e.setZoom(t)
    },
  },
  unmounted() {
    this.map && (this.map.removeEventListener('click', this.handleMapClick), this.map.clearOverLays(), this.map = null)
  },
}); const Wc = { class: '_fc-tdt-picker' }; const Xc = { class: '_fc-tdt-picker-popup-body' }; const Kc = { class: '_fc-tdt-picker-search-wrapper' }; const Jc = {
  class: '_fc-tdt-picker-container',
  ref: 'mapContainer',
}; const Zc = { class: '_fc-tdt-picker-footer' }
function Qc(t, e, n, r, i, o) {
  const a = Q('van-field'); const s = Q('van-search'); const u = Q('van-button'); const c = Q('van-popup')
  return te(), de('div', Wc, [
    q(a, {
      'model-value': t.displayValue,
      'placeholder': t.placeholder,
      'disabled': t.disabled,
      'readonly': '',
      'onClick': t.openPopup,
      'is-link': '',
      'input-align': 'left',
    }, {
      'left-icon': $e(() => e[4] || (e[4] = [
        xe('i', {
          class: 'fc-icon icon-address',
          style: { 'margin-right': '8px' },
        }, null, -1),
      ])),
      '_': 1,
    }, 8, ['model-value', 'placeholder', 'disabled', 'onClick']),
    q(c, {
      'show': t.popupVisible,
      'onUpdate:show': e[3] || (e[3] = l => t.popupVisible = l),
      'position': 'bottom',
      'style': { height: '90%' },
      'closeable': '',
      'onClosed': t.closePopup,
      'class': '_fc-tdt-picker-popup',
    }, {
      default: $e(() => [
        xe('div', Xc, [
          e[7] || (e[7] = xe('div', { class: '_fc-tdt-picker-header' }, [
            xe('div', { class: '_fc-tdt-picker-title' }, '\u9009\u62E9\u4F4D\u7F6E'),
          ], -1)),
          xe('div', Kc, [
            q(s, {
              'modelValue': t.searchKeyword,
              'onUpdate:modelValue': e[1] || (e[1] = l => t.searchKeyword = l),
              'placeholder': '\u641C\u7D22\u5730\u70B9',
              'input-align': 'left',
              'onSearch': t.handleSearch,
              'show-action': '',
            }, {
              action: $e(() => [
                xe('div', {
                  onClick: e[0] || (e[0] = (...l) => t.handleSearch && t.handleSearch(...l)),
                }, '\u641C\u7D22'),
              ]),
              _: 1,
            }, 8, ['modelValue', 'onSearch']),
          ]),
          xe('div', Jc, null, 512),
          xe('div', Zc, [
            q(u, {
              block: '',
              type: 'default',
              onClick: e[2] || (e[2] = l => t.popupVisible = !1),
            }, {
              default: $e(() => e[5] || (e[5] = [
                Le('\u53D6\u6D88'),
              ])),
              _: 1,
            }),
            q(u, {
              block: '',
              type: 'primary',
              onClick: t.confirmSelection,
              disabled: !t.tempLng || !t.tempLat,
            }, {
              default: $e(() => e[6] || (e[6] = [
                Le(' \u786E\u5B9A '),
              ])),
              _: 1,
            }, 8, ['onClick', 'disabled']),
          ]),
        ]),
      ]),
      _: 1,
    }, 8, ['show', 'onClosed']),
  ])
}
const ef = /* @__PURE__ */ De(Yc, [['render', Qc], ['__scopeId', 'data-v-72d7e418']])
function Vr(t, e, n) {
  for (var r = [], i = Math.max(t.length, e.length), o = 0, a = 0; a < i || o;) {
    const s = a < t.length ? t[a] : 0; const u = a < e.length ? e[a] : 0; const c = o + s + u
    r.push(c % n), o = Math.floor(c / n), a++
  }
  return r
}
function fo(t, e, n) {
  if (t < 0)
    return null
  if (t == 0)
    return []
  for (var r = [], i = e; t & 1 && (r = Vr(r, i, n)), t = t >> 1, t !== 0;)
    i = Vr(i, i, n)
  return r
}
function tf(t, e) {
  for (var n = t.split(''), r = [], i = n.length - 1; i >= 0; i--) {
    const o = Number.parseInt(n[i], e)
    if (isNaN(o))
      return null
    r.push(o)
  }
  return r
}
function nf(t, e, n) {
  const r = tf(t, e)
  if (r === null)
    return null
  for (var i = [], o = [1], a = 0; a < r.length; a++) {
    r[a] && (i = Vr(
      i,
      fo(r[a], o, n),
      n,
    )), o = fo(e, o, n)
  }
  for (var s = '', a = i.length - 1; a >= 0; a--)
    s += i[a].toString(n)
  return s
}
function rf(t) {
  return t.substring(0, 2) === '0x' && (t = t.substring(2)), t = t.toLowerCase(), nf(t, 16, 10)
}
class of {
  constructor(e) {
    e = e || {}, this.seq = 0, this.mid = (e.mid || 1) % 1023, this.offset = e.offset || 0, this.lastTime = 0
  }

  generate() {
    const e = Date.now(); const n = (e - this.offset).toString(2)
    this.lastTime == e ? (this.seq++, this.seq > 4095 && (this.seq = 0)) : this.seq = 0, this.lastTime = e
    let r = this.seq.toString(2); let i = this.mid.toString(2)
    for (; r.length < 12;)
      r = `0${r}`
    for (; i.length < 10;)
      i = `0${i}`
    const o = n + i + r
    let a = ''
    for (let s = o.length; s > 0; s -= 4)
      a = Number.parseInt(o.substring(s - 4, s), 2).toString(16) + a
    return rf(a)
  }
}
const af = he({
  name: 'FcId',
  props: ['modelValue', 'prefix'],
  emits: ['update:modelValue'],
  inject: {
    designer: {
      default: null,
    },
  },
  data() {
    return {
      preview: '7379787000000000',
    }
  },
  watch: {
    modelValue: {
      handler(t) {
        if (!t) {
          const e = new of({
            mid: 42,
            offset: 173448e7,
          })
          this.$emit('update:modelValue', `${this.prefix || ''}${e.generate()}`)
        }
      },
      immediate: !0,
    },
  },
})
function sf(t, e, n, r, i, o) {
  const a = Q('el-input')
  return te(), Te(a, {
    modelValue: t.designer ? `${t.prefix || ''}${t.preview}` : t.modelValue,
    readonly: '',
    disabled: '',
  }, null, 8, ['modelValue'])
}
const uf = /* @__PURE__ */ De(af, [['render', sf]])
const lf = he({
  name: 'FcTitle',
  data() {
    return {}
  },
  props: {
    title: String,
    size: String,
    align: String,
  },
  computed: {
    textStyle() {
      return {
        textAlign: this.align || 'left',
      }
    },
  },
})
function cf(t, e, n, r, i, o) {
  return te(), de('div', {
    class: Lt(['_fc-title', t.size || 'h2']),
    style: Fo(t.textStyle),
  }, [
    Zt(t.$slots, 'prepend'),
    Le(` ${Ne(t.title)} `, 1),
    Zt(t.$slots, 'append'),
  ], 6)
}
const ff = /* @__PURE__ */ De(lf, [['render', cf]])
function Zr() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  }
}
let Bt = Zr()
function da(t) {
  Bt = t
}
const gn = { exec: () => null }
function be(t, e = '') {
  let n = typeof t == 'string' ? t : t.source
  const r = {
    replace: (i, o) => {
      let a = typeof o == 'string' ? o : o.source
      return a = a.replace(Ke.caret, '$1'), n = n.replace(i, a), r
    },
    getRegex: () => new RegExp(n, e),
  }
  return r
}
const Ke = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([[\]])/g,
  indentCodeCompensation: /^(\s+)```/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ x]\] /i,
  listReplaceTask: /^\[[ x]\] +/i,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*\S)\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#X[a-f0-9]{1,6}|\w+);)/i,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#X[a-f0-9]{1,6}|\w+);)/gi,
  unescapeTest: /&(#\d+|#x[0-9A-F]+|\w+);?/gi,
  caret: /(^|[^[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: t => new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: t => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: t => new RegExp(`^ {0,${Math.min(3, t - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: t => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: t => new RegExp(`^ {0,${Math.min(3, t - 1)}}#`),
  htmlBeginRegex: t => new RegExp(`^ {0,${Math.min(3, t - 1)}}<(?:[a-z].*>|!--)`, 'i'),
}; const df = /^(?:[ \t]*(?:\n|$))+/; const hf = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/; const pf = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/; const Sn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/; const mf = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/; const Qr = /(?:[*+-]|\d{1,9}[.)])/; const ha = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/; const pa = be(ha).replace(/bull/g, Qr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, '').getRegex(); const gf = be(ha).replace(/bull/g, Qr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[:\- ]*\n/).getRegex(); const ei = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/; const vf = /^[^\n]+/; const ti = /(?!\s*\])(?:\\.|[^[\]\\])+/; const yf = be(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s]\S*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace('label', ti).replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(); const _f = be(/^( {0,3}bull)([ \t][^\n]+)?(?:\n|$)/).replace(/bull/g, Qr).getRegex(); const nr = 'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'; const ni = /<!--(?:-?>|[\s\S]*?(?:-->|$))/; const bf = be('^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))', 'i').replace('comment', ni).replace('tag', nr).replace('attribute', / +[a-z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/i).getRegex(); const ma = be(ei).replace('hr', Sn).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('|lheading', '').replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ').replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', nr).getRegex(); const wf = be(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace('paragraph', ma).getRegex(); const ri = {
  blockquote: wf,
  code: hf,
  def: yf,
  fences: pf,
  heading: mf,
  hr: Sn,
  html: bf,
  lheading: pa,
  list: _f,
  newline: df,
  paragraph: ma,
  table: gn,
  text: vf,
}; const ho = be('^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)').replace('hr', Sn).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('blockquote', ' {0,3}>').replace('code', '(?: {4}| {0,3}	)[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ').replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', nr).getRegex(); const $f = {
  ...ri,
  lheading: gf,
  table: ho,
  paragraph: be(ei).replace('hr', Sn).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('|lheading', '').replace('table', ho).replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ').replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', nr).getRegex(),
}; const Sf = {
  ...ri,
  html: be(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace('comment', ni).replace(/tag/g, '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: gn,
  lheading: /^(.+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: be(ei).replace('hr', Sn).replace('heading', ` *#{1,6} *[^
]`).replace('lheading', pa).replace('|table', '').replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').replace('|tag', '').getRegex(),
}; const Of = /^\\([!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~])/; const xf = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/; const ga = /^( {2,}|\\)\n(?!\s*$)/; const Ef = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<![`*_]|\b_|$)|[^ ](?= {2,}\n)))/; const rr = /[\p{P}\p{S}]/u; const ii = /[\s\p{P}\p{S}]/u; const va = /[^\s\p{P}\p{S}]/u; const Cf = be(/^((?![*_])punctSpace)/, 'u').replace(/punctSpace/g, ii).getRegex(); const ya = /(?!~)[\p{P}\p{S}]/u; const kf = /(?!~)[\s\p{P}\p{S}]/u; const Af = /(?:[^\s\p{P}\p{S}]|~)/u; const Df = /\[[^[\]]*\]\((?:\\.|[^\\()]|\((?:\\.|[^\\()])*\))*\)|`[^`]*`|<[^<>]*>/g; const _a = /^\*+(?:((?!\*)punct)|[^\s*])|^_+(?:((?!_)punct)|([^\s_]))/; const Rf = be(_a, 'u').replace(/punct/g, rr).getRegex(); const Pf = be(_a, 'u').replace(/punct/g, ya).getRegex(); const ba = '^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)'; const Mf = be(ba, 'gu').replace(/notPunctSpace/g, va).replace(/punctSpace/g, ii).replace(/punct/g, rr).getRegex(); const Tf = be(ba, 'gu').replace(/notPunctSpace/g, Af).replace(/punctSpace/g, kf).replace(/punct/g, ya).getRegex(); const jf = be('^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)', 'gu').replace(/notPunctSpace/g, va).replace(/punctSpace/g, ii).replace(/punct/g, rr).getRegex(); const Ff = be(/\\(punct)/, 'gu').replace(/punct/g, rr).getRegex(); const Vf = be(/^<(scheme:[^\s\x00-\x1F<>]*|email)>/).replace('scheme', /[a-z][a-z0-9+.-]{1,31}/i).replace('email', /[\w.!#$%&'*+/=?^`{|}~-]+(@)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+(?![-_])/i).getRegex(); const If = be(ni).replace('(?:-->|$)', '-->').getRegex(); const Lf = be('^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>').replace('comment', If).replace('attribute', /\s+[a-z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/i).getRegex(); const Kn = /(?:\[(?:\\.|[^[\]\\])*\]|\\.|`[^`]*`|[^[\]\\`])*?/; const Bf = be(/^!?\[(label)\]\(\s*(href)(?:[ \t]*(?:\n[ \t]*)?(title))?\s*\)/).replace('label', Kn).replace('href', /<(?:\\.|[^\n<>\\])+>|[^ \x00-\x1F]*/).replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(); const wa = be(/^!?\[(label)\]\[(ref)\]/).replace('label', Kn).replace('ref', ti).getRegex(); const $a = be(/^!?\[(ref)\](?:\[\])?/).replace('ref', ti).getRegex(); const Nf = be('reflink|nolink(?!\\()', 'g').replace('reflink', wa).replace('nolink', $a).getRegex(); const oi = {
  _backpedal: gn,
  anyPunctuation: Ff,
  autolink: Vf,
  blockSkip: Df,
  br: ga,
  code: xf,
  del: gn,
  emStrongLDelim: Rf,
  emStrongRDelimAst: Mf,
  emStrongRDelimUnd: jf,
  escape: Of,
  link: Bf,
  nolink: $a,
  punctuation: Cf,
  reflink: wa,
  reflinkSearch: Nf,
  tag: Lf,
  text: Ef,
  url: gn,
}; const zf = {
  ...oi,
  link: be(/^!?\[(label)\]\((.*?)\)/).replace('label', Kn).getRegex(),
  reflink: be(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', Kn).getRegex(),
}; const Ir = {
  ...oi,
  emStrongRDelimAst: Tf,
  emStrongLDelim: Pf,
  url: be(/^((?:ftp|https?):\/\/|www\.)[a-zA-Z0-9\-][^\s<]*|^email/, 'i').replace('email', /[\w.+-]+(@)[\w-]+(?:\.[\w-]*[a-z0-9])+(?![-_])/i).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]|\([^)]*\)|&(?![a-z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/i,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[\w.!#$%&'*+/=?`{|}~-]+@)|[\s\S]*?(?:(?=[\\<![`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^\w.!#$%&'*+/=?`{|}~-](?=[\w.!#$%&'*+/=?`{|}~-]+@)))/,
}; const Uf = {
  ...Ir,
  br: be(ga).replace('{2,}', '*').getRegex(),
  text: be(Ir.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex(),
}; const Pn = {
  normal: ri,
  gfm: $f,
  pedantic: Sf,
}; const ln = {
  normal: oi,
  gfm: Ir,
  breaks: Uf,
  pedantic: zf,
}; const qf = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
}; const po = t => qf[t]
function mt(t, e) {
  if (e) {
    if (Ke.escapeTest.test(t))
      return t.replace(Ke.escapeReplace, po)
  } else if (Ke.escapeTestNoEncode.test(t)) {
    return t.replace(Ke.escapeReplaceNoEncode, po)
  }
  return t
}
function mo(t) {
  try {
    t = encodeURI(t).replace(Ke.percentDecode, '%')
  } catch {
    return null
  }
  return t
}
function go(t, e) {
  let o
  const n = t.replace(Ke.findPipe, (a, s, u) => {
    let c = !1; let l = s
    for (; --l >= 0 && u[l] === '\\';)
      c = !c
    return c ? '|' : ' |'
  }); const r = n.split(Ke.splitPipe)
  let i = 0
  if (r[0].trim() || r.shift(), r.length > 0 && !((o = r.at(-1)) != null && o.trim()) && r.pop(), e) {
    if (r.length > e) {
      r.splice(e)
    } else {
      for (; r.length < e;)
        r.push('')
    }
  }
  for (; i < r.length; i++)
    r[i] = r[i].trim().replace(Ke.slashPipe, '|')
  return r
}
function cn(t, e, n) {
  const r = t.length
  if (r === 0)
    return ''
  let i = 0
  for (; i < r && t.charAt(r - i - 1) === e;)
    i++
  return t.slice(0, r - i)
}
function Hf(t, e) {
  if (!t.includes(e[1]))
    return -1
  let n = 0
  for (let r = 0; r < t.length; r++) {
    if (t[r] === '\\')
      r++
    else if (t[r] === e[0])
      n++
    else if (t[r] === e[1] && (n--, n < 0))
      return r
  }
  return n > 0 ? -2 : -1
}
function vo(t, e, n, r, i) {
  const o = e.href; const a = e.title || null; const s = t[1].replace(i.other.outputLinkReplace, '$1')
  r.state.inLink = !0
  const u = {
    type: t[0].charAt(0) === '!' ? 'image' : 'link',
    raw: n,
    href: o,
    title: a,
    text: s,
    tokens: r.inlineTokens(s),
  }
  return r.state.inLink = !1, u
}
function Gf(t, e, n) {
  const r = t.match(n.other.indentCodeCompensation)
  if (r === null)
    return e
  const i = r[1]
  return e.split(`
`).map((o) => {
    const a = o.match(n.other.beginningSpace)
    if (a === null)
      return o
    const [s] = a
    return s.length >= i.length ? o.slice(i.length) : o
  }).join(`
`)
}
class Jn {
  constructor(e) {
    Oe(this, 'options')
    Oe(this, 'rules')
    Oe(this, 'lexer')
    this.options = e || Bt
  }

  space(e) {
    const n = this.rules.block.newline.exec(e)
    if (n && n[0].length > 0) {
      return {
        type: 'space',
        raw: n[0],
      }
    }
  }

  code(e) {
    const n = this.rules.block.code.exec(e)
    if (n) {
      const r = n[0].replace(this.rules.other.codeRemoveIndent, '')
      return {
        type: 'code',
        raw: n[0],
        codeBlockStyle: 'indented',
        text: this.options.pedantic
          ? r
          : cn(r, `
`),
      }
    }
  }

  fences(e) {
    const n = this.rules.block.fences.exec(e)
    if (n) {
      const r = n[0]; const i = Gf(r, n[3] || '', this.rules)
      return {
        type: 'code',
        raw: r,
        lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : n[2],
        text: i,
      }
    }
  }

  heading(e) {
    const n = this.rules.block.heading.exec(e)
    if (n) {
      let r = n[2].trim()
      if (this.rules.other.endingHash.test(r)) {
        const i = cn(r, '#');
        (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) && (r = i.trim())
      }
      return {
        type: 'heading',
        raw: n[0],
        depth: n[1].length,
        text: r,
        tokens: this.lexer.inline(r),
      }
    }
  }

  hr(e) {
    const n = this.rules.block.hr.exec(e)
    if (n) {
      return {
        type: 'hr',
        raw: cn(n[0], `
`),
      }
    }
  }

  blockquote(e) {
    const n = this.rules.block.blockquote.exec(e)
    if (n) {
      let r = cn(n[0], `
`).split(`
`); let i = ''; let o = ''
      const a = []
      for (; r.length > 0;) {
        let s = !1
        const u = []
        let c
        for (c = 0; c < r.length; c++) {
          if (this.rules.other.blockquoteStart.test(r[c]))
            u.push(r[c]), s = !0
          else if (!s)
            u.push(r[c])
          else
            break
        }
        r = r.slice(c)
        const l = u.join(`
`); const p = l.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, '')
        i = i
          ? `${i}
${l}`
          : l, o = o
          ? `${o}
${p}`
          : p
        const h = this.lexer.state.top
        if (this.lexer.state.top = !0, this.lexer.blockTokens(p, a, !0), this.lexer.state.top = h, r.length === 0)
          break
        const m = a.at(-1)
        if ((m == null ? void 0 : m.type) === 'code')
          break
        if ((m == null ? void 0 : m.type) === 'blockquote') {
          const w = m; const $ = `${w.raw}
${r.join(`
`)}`; const A = this.blockquote($)
          a[a.length - 1] = A, i = i.substring(0, i.length - w.raw.length) + A.raw, o = o.substring(0, o.length - w.text.length) + A.text
          break
        } else if ((m == null ? void 0 : m.type) === 'list') {
          const w = m; const $ = `${w.raw}
${r.join(`
`)}`; const A = this.list($)
          a[a.length - 1] = A, i = i.substring(0, i.length - m.raw.length) + A.raw, o = o.substring(0, o.length - w.raw.length) + A.raw, r = $.substring(a.at(-1).raw.length).split(`
`)
          continue
        }
      }
      return {
        type: 'blockquote',
        raw: i,
        tokens: a,
        text: o,
      }
    }
  }

  list(e) {
    let n = this.rules.block.list.exec(e)
    if (n) {
      let r = n[1].trim()
      const i = r.length > 1; const o = {
        type: 'list',
        raw: '',
        ordered: i,
        start: i ? +r.slice(0, -1) : '',
        loose: !1,
        items: [],
      }
      r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = i ? r : '[*+-]')
      const a = this.rules.other.listItemRegex(r)
      let s = !1
      for (; e;) {
        let c = !1; let l = ''; let p = ''
        if (!(n = a.exec(e)) || this.rules.block.hr.test(e))
          break
        l = n[0], e = e.substring(l.length)
        let h = n[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, I => ' '.repeat(3 * I.length)); let m = e.split(`
`, 1)[0]; let w = !h.trim(); let $ = 0
        if (this.options.pedantic ? ($ = 2, p = h.trimStart()) : w ? $ = n[1].length + 1 : ($ = n[2].search(this.rules.other.nonSpaceChar), $ = $ > 4 ? 1 : $, p = h.slice($), $ += n[1].length), w && this.rules.other.blankLine.test(m) && (l += `${m}
`, e = e.substring(m.length + 1), c = !0), !c) {
          const I = this.rules.other.nextBulletRegex($); const V = this.rules.other.hrRegex($); const G = this.rules.other.fencesBeginRegex($); const ee = this.rules.other.headingBeginRegex($); const X = this.rules.other.htmlBeginRegex($)
          for (; e;) {
            const re = e.split(`
`, 1)[0]
            let Y
            if (m = re, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, '  '), Y = m) : Y = m.replace(this.rules.other.tabCharGlobal, '    '), G.test(m) || ee.test(m) || X.test(m) || I.test(m) || V.test(m))
              break
            if (Y.search(this.rules.other.nonSpaceChar) >= $ || !m.trim()) {
              p += `
${Y.slice($)}`
            } else {
              if (w || h.replace(this.rules.other.tabCharGlobal, '    ').search(this.rules.other.nonSpaceChar) >= 4 || G.test(h) || ee.test(h) || V.test(h))
                break
              p += `
${m}`
            }
            !w && !m.trim() && (w = !0), l += `${re}
`, e = e.substring(re.length + 1), h = Y.slice($)
          }
        }
        o.loose || (s ? o.loose = !0 : this.rules.other.doubleBlankLine.test(l) && (s = !0))
        let A = null; let F
        this.options.gfm && (A = this.rules.other.listIsTask.exec(p), A && (F = A[0] !== '[ ] ', p = p.replace(this.rules.other.listReplaceTask, ''))), o.items.push({
          type: 'list_item',
          raw: l,
          task: !!A,
          checked: F,
          loose: !1,
          text: p,
          tokens: [],
        }), o.raw += l
      }
      const u = o.items.at(-1)
      if (u)
        u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd()
      else
        return
      o.raw = o.raw.trimEnd()
      for (let c = 0; c < o.items.length; c++) {
        if (this.lexer.state.top = !1, o.items[c].tokens = this.lexer.blockTokens(o.items[c].text, []), !o.loose) {
          const l = o.items[c].tokens.filter(h => h.type === 'space'); const p = l.length > 0 && l.some(h => this.rules.other.anyLine.test(h.raw))
          o.loose = p
        }
      }
      if (o.loose) {
        for (let c = 0; c < o.items.length; c++)
          o.items[c].loose = !0
      }
      return o
    }
  }

  html(e) {
    const n = this.rules.block.html.exec(e)
    if (n) {
      return {
        type: 'html',
        block: !0,
        raw: n[0],
        pre: n[1] === 'pre' || n[1] === 'script' || n[1] === 'style',
        text: n[0],
      }
    }
  }

  def(e) {
    const n = this.rules.block.def.exec(e)
    if (n) {
      const r = n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, ' '); const i = n[2] ? n[2].replace(this.rules.other.hrefBrackets, '$1').replace(this.rules.inline.anyPunctuation, '$1') : ''; const o = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1') : n[3]
      return {
        type: 'def',
        tag: r,
        raw: n[0],
        href: i,
        title: o,
      }
    }
  }

  table(e) {
    let s
    const n = this.rules.block.table.exec(e)
    if (!n || !this.rules.other.tableDelimiter.test(n[2]))
      return
    const r = go(n[1]); const i = n[2].replace(this.rules.other.tableAlignChars, '').split('|'); const o = (s = n[3]) != null && s.trim()
      ? n[3].replace(this.rules.other.tableRowBlankLine, '').split(`
`)
      : []; const a = {
      type: 'table',
      raw: n[0],
      header: [],
      align: [],
      rows: [],
    }
    if (r.length === i.length) {
      for (const u of i)
        this.rules.other.tableAlignRight.test(u) ? a.align.push('right') : this.rules.other.tableAlignCenter.test(u) ? a.align.push('center') : this.rules.other.tableAlignLeft.test(u) ? a.align.push('left') : a.align.push(null)
      for (let u = 0; u < r.length; u++) {
        a.header.push({
          text: r[u],
          tokens: this.lexer.inline(r[u]),
          header: !0,
          align: a.align[u],
        })
      }
      for (const u of o) {
        a.rows.push(go(u, a.header.length).map((c, l) => ({
          text: c,
          tokens: this.lexer.inline(c),
          header: !1,
          align: a.align[l],
        })))
      }
      return a
    }
  }

  lheading(e) {
    const n = this.rules.block.lheading.exec(e)
    if (n) {
      return {
        type: 'heading',
        raw: n[0],
        depth: n[2].charAt(0) === '=' ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1]),
      }
    }
  }

  paragraph(e) {
    const n = this.rules.block.paragraph.exec(e)
    if (n) {
      const r = n[1].charAt(n[1].length - 1) === `
`
        ? n[1].slice(0, -1)
        : n[1]
      return {
        type: 'paragraph',
        raw: n[0],
        text: r,
        tokens: this.lexer.inline(r),
      }
    }
  }

  text(e) {
    const n = this.rules.block.text.exec(e)
    if (n) {
      return {
        type: 'text',
        raw: n[0],
        text: n[0],
        tokens: this.lexer.inline(n[0]),
      }
    }
  }

  escape(e) {
    const n = this.rules.inline.escape.exec(e)
    if (n) {
      return {
        type: 'escape',
        raw: n[0],
        text: n[1],
      }
    }
  }

  tag(e) {
    const n = this.rules.inline.tag.exec(e)
    if (n) {
      return !this.lexer.state.inLink && this.rules.other.startATag.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(n[0]) && (this.lexer.state.inRawBlock = !1), {
        type: 'html',
        raw: n[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: n[0],
      }
    }
  }

  link(e) {
    const n = this.rules.inline.link.exec(e)
    if (n) {
      const r = n[2].trim()
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
        if (!this.rules.other.endAngleBracket.test(r))
          return
        const a = cn(r.slice(0, -1), '\\')
        if ((r.length - a.length) % 2 === 0)
          return
      } else {
        const a = Hf(n[2], '()')
        if (a === -2)
          return
        if (a > -1) {
          const u = (n[0].indexOf('!') === 0 ? 5 : 4) + n[1].length + a
          n[2] = n[2].substring(0, a), n[0] = n[0].substring(0, u).trim(), n[3] = ''
        }
      }
      let i = n[2]; let o = ''
      if (this.options.pedantic) {
        const a = this.rules.other.pedanticHrefTitle.exec(i)
        a && (i = a[1], o = a[3])
      } else {
        o = n[3] ? n[3].slice(1, -1) : ''
      }
      return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? i = i.slice(1) : i = i.slice(1, -1)), vo(n, {
        href: i && i.replace(this.rules.inline.anyPunctuation, '$1'),
        title: o && o.replace(this.rules.inline.anyPunctuation, '$1'),
      }, n[0], this.lexer, this.rules)
    }
  }

  reflink(e, n) {
    let r
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      const i = (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, ' '); const o = n[i.toLowerCase()]
      if (!o) {
        const a = r[0].charAt(0)
        return {
          type: 'text',
          raw: a,
          text: a,
        }
      }
      return vo(r, o, r[0], this.lexer, this.rules)
    }
  }

  emStrong(e, n, r = '') {
    let i = this.rules.inline.emStrongLDelim.exec(e)
    if (!i || i[3] && r.match(this.rules.other.unicodeAlphaNumeric))
      return
    if (!(i[1] || i[2] || '') || !r || this.rules.inline.punctuation.exec(r)) {
      const a = [...i[0]].length - 1
      let s; let u; let c = a; let l = 0
      const p = i[0][0] === '*' ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd
      for (p.lastIndex = 0, n = n.slice(-1 * e.length + a); (i = p.exec(n)) != null;) {
        if (s = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !s)
          continue
        if (u = [...s].length, i[3] || i[4]) {
          c += u
          continue
        } else if ((i[5] || i[6]) && a % 3 && !((a + u) % 3)) {
          l += u
          continue
        }
        if (c -= u, c > 0)
          continue
        u = Math.min(u, u + c + l)
        const h = [...i[0]][0].length; const m = e.slice(0, a + i.index + h + u)
        if (Math.min(a, u) % 2) {
          const $ = m.slice(1, -1)
          return {
            type: 'em',
            raw: m,
            text: $,
            tokens: this.lexer.inlineTokens($),
          }
        }
        const w = m.slice(2, -2)
        return {
          type: 'strong',
          raw: m,
          text: w,
          tokens: this.lexer.inlineTokens(w),
        }
      }
    }
  }

  codespan(e) {
    const n = this.rules.inline.code.exec(e)
    if (n) {
      let r = n[2].replace(this.rules.other.newLineCharGlobal, ' ')
      const i = this.rules.other.nonSpaceChar.test(r); const o = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r)
      return i && o && (r = r.substring(1, r.length - 1)), {
        type: 'codespan',
        raw: n[0],
        text: r,
      }
    }
  }

  br(e) {
    const n = this.rules.inline.br.exec(e)
    if (n) {
      return {
        type: 'br',
        raw: n[0],
      }
    }
  }

  del(e) {
    const n = this.rules.inline.del.exec(e)
    if (n) {
      return {
        type: 'del',
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2]),
      }
    }
  }

  autolink(e) {
    const n = this.rules.inline.autolink.exec(e)
    if (n) {
      let r, i
      return n[2] === '@' ? (r = n[1], i = `mailto:${r}`) : (r = n[1], i = r), {
        type: 'link',
        raw: n[0],
        text: r,
        href: i,
        tokens: [
          {
            type: 'text',
            raw: r,
            text: r,
          },
        ],
      }
    }
  }

  url(e) {
    let r, i
    let n
    if (n = this.rules.inline.url.exec(e)) {
      let o, a
      if (n[2] === '@') {
        o = n[0], a = `mailto:${o}`
      } else {
        let s
        do
          s = n[0], n[0] = (i = (r = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : r[0]) != null ? i : ''
        while (s !== n[0])
        o = n[0], n[1] === 'www.' ? a = `http://${n[0]}` : a = n[0]
      }
      return {
        type: 'link',
        raw: n[0],
        text: o,
        href: a,
        tokens: [
          {
            type: 'text',
            raw: o,
            text: o,
          },
        ],
      }
    }
  }

  inlineText(e) {
    const n = this.rules.inline.text.exec(e)
    if (n) {
      const r = this.lexer.state.inRawBlock
      return {
        type: 'text',
        raw: n[0],
        text: n[0],
        escaped: r,
      }
    }
  }
}
class st {
  constructor(e) {
    Oe(this, 'tokens')
    Oe(this, 'options')
    Oe(this, 'state')
    Oe(this, 'tokenizer')
    Oe(this, 'inlineQueue')
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Bt, this.options.tokenizer = this.options.tokenizer || new Jn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0,
    }
    const n = {
      other: Ke,
      block: Pn.normal,
      inline: ln.normal,
    }
    this.options.pedantic ? (n.block = Pn.pedantic, n.inline = ln.pedantic) : this.options.gfm && (n.block = Pn.gfm, this.options.breaks ? n.inline = ln.breaks : n.inline = ln.gfm), this.tokenizer.rules = n
  }

  static get rules() {
    return {
      block: Pn,
      inline: ln,
    }
  }

  static lex(e, n) {
    return new st(n).lex(e)
  }

  static lexInline(e, n) {
    return new st(n).inlineTokens(e)
  }

  lex(e) {
    e = e.replace(Ke.carriageReturn, `
`), this.blockTokens(e, this.tokens)
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const r = this.inlineQueue[n]
      this.inlineTokens(r.src, r.tokens)
    }
    return this.inlineQueue = [], this.tokens
  }

  blockTokens(e, n = [], r = !1) {
    let i, o, a
    for (this.options.pedantic && (e = e.replace(Ke.tabCharGlobal, '    ').replace(Ke.spaceLine, '')); e;) {
      let s
      if ((o = (i = this.options.extensions) == null ? void 0 : i.block) != null && o.some(c => (s = c.call({ lexer: this }, e, n)) ? (e = e.substring(s.raw.length), n.push(s), !0) : !1))
        continue
      if (s = this.tokenizer.space(e)) {
        e = e.substring(s.raw.length)
        const c = n.at(-1)
        s.raw.length === 1 && c !== void 0
          ? c.raw += `
`
          : n.push(s)
        continue
      }
      if (s = this.tokenizer.code(e)) {
        e = e.substring(s.raw.length)
        const c = n.at(-1);
        (c == null ? void 0 : c.type) === 'paragraph' || (c == null ? void 0 : c.type) === 'text'
          ? (c.raw += `
${s.raw}`, c.text += `
${s.text}`, this.inlineQueue.at(-1).src = c.text)
          : n.push(s)
        continue
      }
      if (s = this.tokenizer.fences(e)) {
        e = e.substring(s.raw.length), n.push(s)
        continue
      }
      if (s = this.tokenizer.heading(e)) {
        e = e.substring(s.raw.length), n.push(s)
        continue
      }
      if (s = this.tokenizer.hr(e)) {
        e = e.substring(s.raw.length), n.push(s)
        continue
      }
      if (s = this.tokenizer.blockquote(e)) {
        e = e.substring(s.raw.length), n.push(s)
        continue
      }
      if (s = this.tokenizer.list(e)) {
        e = e.substring(s.raw.length), n.push(s)
        continue
      }
      if (s = this.tokenizer.html(e)) {
        e = e.substring(s.raw.length), n.push(s)
        continue
      }
      if (s = this.tokenizer.def(e)) {
        e = e.substring(s.raw.length)
        const c = n.at(-1);
        (c == null ? void 0 : c.type) === 'paragraph' || (c == null ? void 0 : c.type) === 'text'
          ? (c.raw += `
${s.raw}`, c.text += `
${s.raw}`, this.inlineQueue.at(-1).src = c.text)
          : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
            href: s.href,
            title: s.title,
          })
        continue
      }
      if (s = this.tokenizer.table(e)) {
        e = e.substring(s.raw.length), n.push(s)
        continue
      }
      if (s = this.tokenizer.lheading(e)) {
        e = e.substring(s.raw.length), n.push(s)
        continue
      }
      let u = e
      if ((a = this.options.extensions) != null && a.startBlock) {
        let c = 1 / 0
        const l = e.slice(1)
        let p
        this.options.extensions.startBlock.forEach((h) => {
          p = h.call({ lexer: this }, l), typeof p == 'number' && p >= 0 && (c = Math.min(c, p))
        }), c < 1 / 0 && c >= 0 && (u = e.substring(0, c + 1))
      }
      if (this.state.top && (s = this.tokenizer.paragraph(u))) {
        const c = n.at(-1)
        r && (c == null ? void 0 : c.type) === 'paragraph'
          ? (c.raw += `
${s.raw}`, c.text += `
${s.text}`, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text)
          : n.push(s), r = u.length !== e.length, e = e.substring(s.raw.length)
        continue
      }
      if (s = this.tokenizer.text(e)) {
        e = e.substring(s.raw.length)
        const c = n.at(-1);
        (c == null ? void 0 : c.type) === 'text'
          ? (c.raw += `
${s.raw}`, c.text += `
${s.text}`, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text)
          : n.push(s)
        continue
      }
      if (e) {
        const c = `Infinite loop on byte: ${e.charCodeAt(0)}`
        if (this.options.silent) {
          console.error(c)
          break
        } else {
          throw new Error(c)
        }
      }
    }
    return this.state.top = !0, n
  }

  inline(e, n = []) {
    return this.inlineQueue.push({ src: e, tokens: n }), n
  }

  inlineTokens(e, n = []) {
    let s, u, c
    let r = e; let i = null
    if (this.tokens.links) {
      const l = Object.keys(this.tokens.links)
      if (l.length > 0) {
        for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null;)
          l.includes(i[0].slice(i[0].lastIndexOf('[') + 1, -1)) && (r = `${r.slice(0, i.index)}[${'a'.repeat(i[0].length - 2)}]${r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)}`)
      }
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null;)
      r = `${r.slice(0, i.index)}++${r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex)}`
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(r)) != null;)
      r = `${r.slice(0, i.index)}[${'a'.repeat(i[0].length - 2)}]${r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)}`
    let o = !1; let a = ''
    for (; e;) {
      o || (a = ''), o = !1
      let l
      if ((u = (s = this.options.extensions) == null ? void 0 : s.inline) != null && u.some(h => (l = h.call({ lexer: this }, e, n)) ? (e = e.substring(l.raw.length), n.push(l), !0) : !1))
        continue
      if (l = this.tokenizer.escape(e)) {
        e = e.substring(l.raw.length), n.push(l)
        continue
      }
      if (l = this.tokenizer.tag(e)) {
        e = e.substring(l.raw.length), n.push(l)
        continue
      }
      if (l = this.tokenizer.link(e)) {
        e = e.substring(l.raw.length), n.push(l)
        continue
      }
      if (l = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(l.raw.length)
        const h = n.at(-1)
        l.type === 'text' && (h == null ? void 0 : h.type) === 'text' ? (h.raw += l.raw, h.text += l.text) : n.push(l)
        continue
      }
      if (l = this.tokenizer.emStrong(e, r, a)) {
        e = e.substring(l.raw.length), n.push(l)
        continue
      }
      if (l = this.tokenizer.codespan(e)) {
        e = e.substring(l.raw.length), n.push(l)
        continue
      }
      if (l = this.tokenizer.br(e)) {
        e = e.substring(l.raw.length), n.push(l)
        continue
      }
      if (l = this.tokenizer.del(e)) {
        e = e.substring(l.raw.length), n.push(l)
        continue
      }
      if (l = this.tokenizer.autolink(e)) {
        e = e.substring(l.raw.length), n.push(l)
        continue
      }
      if (!this.state.inLink && (l = this.tokenizer.url(e))) {
        e = e.substring(l.raw.length), n.push(l)
        continue
      }
      let p = e
      if ((c = this.options.extensions) != null && c.startInline) {
        let h = 1 / 0
        const m = e.slice(1)
        let w
        this.options.extensions.startInline.forEach(($) => {
          w = $.call({ lexer: this }, m), typeof w == 'number' && w >= 0 && (h = Math.min(h, w))
        }), h < 1 / 0 && h >= 0 && (p = e.substring(0, h + 1))
      }
      if (l = this.tokenizer.inlineText(p)) {
        e = e.substring(l.raw.length), l.raw.slice(-1) !== '_' && (a = l.raw.slice(-1)), o = !0
        const h = n.at(-1);
        (h == null ? void 0 : h.type) === 'text' ? (h.raw += l.raw, h.text += l.text) : n.push(l)
        continue
      }
      if (e) {
        const h = `Infinite loop on byte: ${e.charCodeAt(0)}`
        if (this.options.silent) {
          console.error(h)
          break
        } else {
          throw new Error(h)
        }
      }
    }
    return n
  }
}
class Zn {
  constructor(e) {
    Oe(this, 'options')
    Oe(this, 'parser')
    this.options = e || Bt
  }

  space(e) {
    return ''
  }

  code({ text: e, lang: n, escaped: r }) {
    let a
    const i = (a = (n || '').match(Ke.notSpaceStart)) == null ? void 0 : a[0]; const o = `${e.replace(Ke.endingNewline, '')}
`
    return i
      ? `<pre><code class="language-${mt(i)}">${r ? o : mt(o, !0)}</code></pre>
`
      : `<pre><code>${r ? o : mt(o, !0)}</code></pre>
`
  }

  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`
  }

  html({ text: e }) {
    return e
  }

  heading({ tokens: e, depth: n }) {
    return `<h${n}>${this.parser.parseInline(e)}</h${n}>
`
  }

  hr(e) {
    return `<hr>
`
  }

  list(e) {
    const n = e.ordered; const r = e.start
    let i = ''
    for (let s = 0; s < e.items.length; s++) {
      const u = e.items[s]
      i += this.listitem(u)
    }
    const o = n ? 'ol' : 'ul'; const a = n && r !== 1 ? ` start="${r}"` : ''
    return `<${o}${a}>
      ${i}</${o}>
`
  }

  listitem(e) {
    let r
    let n = ''
    if (e.task) {
      const i = this.checkbox({ checked: !!e.checked })
      e.loose
        ? ((r = e.tokens[0]) == null ? void 0 : r.type) === 'paragraph'
            ? (e.tokens[0].text = `${i} ${e.tokens[0].text}`, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === 'text' && (e.tokens[0].tokens[0].text = `${i} ${mt(e.tokens[0].tokens[0].text)}`, e.tokens[0].tokens[0].escaped = !0))
            : e.tokens.unshift({
                type: 'text',
                raw: `${i} `,
                text: `${i} `,
                escaped: !0,
              })
        : n += `${i} `
    }
    return n += this.parser.parse(e.tokens, !!e.loose), `<li>${n}</li>
`
  }

  checkbox({ checked: e }) {
    return `<input ${e ? 'checked="" ' : ''}disabled="" type="checkbox">`
  }

  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`
  }

  table(e) {
    let n = ''; let r = ''
    for (let o = 0; o < e.header.length; o++)
      r += this.tablecell(e.header[o])
    n += this.tablerow({ text: r })
    let i = ''
    for (let o = 0; o < e.rows.length; o++) {
      const a = e.rows[o]
      r = ''
      for (let s = 0; s < a.length; s++)
        r += this.tablecell(a[s])
      i += this.tablerow({ text: r })
    }
    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
${n}</thead>
${i}</table>
`
  }

  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`
  }

  tablecell(e) {
    const n = this.parser.parseInline(e.tokens); const r = e.header ? 'th' : 'td'
    return `${(e.align ? `<${r} align="${e.align}">` : `<${r}>`) + n}</${r}>
`
  }

  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`
  }

  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`
  }

  codespan({ text: e }) {
    return `<code>${mt(e, !0)}</code>`
  }

  br(e) {
    return '<br>'
  }

  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`
  }

  link({ href: e, title: n, tokens: r }) {
    const i = this.parser.parseInline(r); const o = mo(e)
    if (o === null)
      return i
    e = o
    let a = `<a href="${e}"`
    return n && (a += ` title="${mt(n)}"`), a += `>${i}</a>`, a
  }

  image({ href: e, title: n, text: r, tokens: i }) {
    i && (r = this.parser.parseInline(i, this.parser.textRenderer))
    const o = mo(e)
    if (o === null)
      return mt(r)
    e = o
    let a = `<img src="${e}" alt="${r}"`
    return n && (a += ` title="${mt(n)}"`), a += '>', a
  }

  text(e) {
    return 'tokens' in e && e.tokens ? this.parser.parseInline(e.tokens) : 'escaped' in e && e.escaped ? e.text : mt(e.text)
  }
}
class ai {
  strong({ text: e }) {
    return e
  }

  em({ text: e }) {
    return e
  }

  codespan({ text: e }) {
    return e
  }

  del({ text: e }) {
    return e
  }

  html({ text: e }) {
    return e
  }

  text({ text: e }) {
    return e
  }

  link({ text: e }) {
    return `${e}`
  }

  image({ text: e }) {
    return `${e}`
  }

  br() {
    return ''
  }
}
class ut {
  constructor(e) {
    Oe(this, 'options')
    Oe(this, 'renderer')
    Oe(this, 'textRenderer')
    this.options = e || Bt, this.options.renderer = this.options.renderer || new Zn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ai()
  }

  static parse(e, n) {
    return new ut(n).parse(e)
  }

  static parseInline(e, n) {
    return new ut(n).parseInline(e)
  }

  parse(e, n = !0) {
    let i, o
    let r = ''
    for (let a = 0; a < e.length; a++) {
      const s = e[a]
      if ((o = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && o[s.type]) {
        const c = s; const l = this.options.extensions.renderers[c.type].call({ parser: this }, c)
        if (l !== !1 || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(c.type)) {
          r += l || ''
          continue
        }
      }
      const u = s
      switch (u.type) {
        case 'space': {
          r += this.renderer.space(u)
          continue
        }
        case 'hr': {
          r += this.renderer.hr(u)
          continue
        }
        case 'heading': {
          r += this.renderer.heading(u)
          continue
        }
        case 'code': {
          r += this.renderer.code(u)
          continue
        }
        case 'table': {
          r += this.renderer.table(u)
          continue
        }
        case 'blockquote': {
          r += this.renderer.blockquote(u)
          continue
        }
        case 'list': {
          r += this.renderer.list(u)
          continue
        }
        case 'html': {
          r += this.renderer.html(u)
          continue
        }
        case 'paragraph': {
          r += this.renderer.paragraph(u)
          continue
        }
        case 'text': {
          let c = u; let l = this.renderer.text(c)
          for (; a + 1 < e.length && e[a + 1].type === 'text';) {
            c = e[++a], l += `
${this.renderer.text(c)}`
          }
          n
            ? r += this.renderer.paragraph({
              type: 'paragraph',
              raw: l,
              text: l,
              tokens: [{ type: 'text', raw: l, text: l, escaped: !0 }],
            })
            : r += l
          continue
        }
        default: {
          const c = `Token with "${u.type}" type was not found.`
          if (this.options.silent)
            return console.error(c), ''
          throw new Error(c)
        }
      }
    }
    return r
  }

  parseInline(e, n = this.renderer) {
    let i, o
    let r = ''
    for (let a = 0; a < e.length; a++) {
      const s = e[a]
      if ((o = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && o[s.type]) {
        const c = this.options.extensions.renderers[s.type].call({ parser: this }, s)
        if (c !== !1 || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(s.type)) {
          r += c || ''
          continue
        }
      }
      const u = s
      switch (u.type) {
        case 'escape': {
          r += n.text(u)
          break
        }
        case 'html': {
          r += n.html(u)
          break
        }
        case 'link': {
          r += n.link(u)
          break
        }
        case 'image': {
          r += n.image(u)
          break
        }
        case 'strong': {
          r += n.strong(u)
          break
        }
        case 'em': {
          r += n.em(u)
          break
        }
        case 'codespan': {
          r += n.codespan(u)
          break
        }
        case 'br': {
          r += n.br(u)
          break
        }
        case 'del': {
          r += n.del(u)
          break
        }
        case 'text': {
          r += n.text(u)
          break
        }
        default: {
          const c = `Token with "${u.type}" type was not found.`
          if (this.options.silent)
            return console.error(c), ''
          throw new Error(c)
        }
      }
    }
    return r
  }
}
class vn {
  constructor(e) {
    Oe(this, 'options')
    Oe(this, 'block')
    this.options = e || Bt
  }

  preprocess(e) {
    return e
  }

  postprocess(e) {
    return e
  }

  processAllTokens(e) {
    return e
  }

  provideLexer() {
    return this.block ? st.lex : st.lexInline
  }

  provideParser() {
    return this.block ? ut.parse : ut.parseInline
  }
}
Oe(vn, 'passThroughHooks', /* @__PURE__ */ new Set([
  'preprocess',
  'postprocess',
  'processAllTokens',
]))
class Sa {
  constructor(...e) {
    Oe(this, 'defaults', Zr())
    Oe(this, 'options', this.setOptions)
    Oe(this, 'parse', this.parseMarkdown(!0))
    Oe(this, 'parseInline', this.parseMarkdown(!1))
    Oe(this, 'Parser', ut)
    Oe(this, 'Renderer', Zn)
    Oe(this, 'TextRenderer', ai)
    Oe(this, 'Lexer', st)
    Oe(this, 'Tokenizer', Jn)
    Oe(this, 'Hooks', vn)
    this.use(...e)
  }

  walkTokens(e, n) {
    let i, o
    let r = []
    for (const a of e) {
      switch (r = r.concat(n.call(this, a)), a.type) {
        case 'table': {
          const s = a
          for (const u of s.header)
            r = r.concat(this.walkTokens(u.tokens, n))
          for (const u of s.rows) {
            for (const c of u)
              r = r.concat(this.walkTokens(c.tokens, n))
          }
          break
        }
        case 'list': {
          const s = a
          r = r.concat(this.walkTokens(s.items, n))
          break
        }
        default: {
          const s = a;
          (o = (i = this.defaults.extensions) == null ? void 0 : i.childTokens) != null && o[s.type]
            ? this.defaults.extensions.childTokens[s.type].forEach((u) => {
                const c = s[u].flat(1 / 0)
                r = r.concat(this.walkTokens(c, n))
              })
            : s.tokens && (r = r.concat(this.walkTokens(s.tokens, n)))
        }
      }
    }
    return r
  }

  use(...e) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} }
    return e.forEach((r) => {
      const i = { ...r }
      if (i.async = this.defaults.async || i.async || !1, r.extensions && (r.extensions.forEach((o) => {
        if (!o.name)
          throw new Error('extension name required')
        if ('renderer' in o) {
          const a = n.renderers[o.name]
          a
            ? n.renderers[o.name] = function (...s) {
              let u = o.renderer.apply(this, s)
              return u === !1 && (u = a.apply(this, s)), u
            }
            : n.renderers[o.name] = o.renderer
        }
        if ('tokenizer' in o) {
          if (!o.level || o.level !== 'block' && o.level !== 'inline')
            throw new Error('extension level must be \'block\' or \'inline\'')
          const a = n[o.level]
          a ? a.unshift(o.tokenizer) : n[o.level] = [o.tokenizer], o.start && (o.level === 'block' ? n.startBlock ? n.startBlock.push(o.start) : n.startBlock = [o.start] : o.level === 'inline' && (n.startInline ? n.startInline.push(o.start) : n.startInline = [o.start]))
        }
        'childTokens' in o && o.childTokens && (n.childTokens[o.name] = o.childTokens)
      }), i.extensions = n), r.renderer) {
        const o = this.defaults.renderer || new Zn(this.defaults)
        for (const a in r.renderer) {
          if (!(a in o))
            throw new Error(`renderer '${a}' does not exist`)
          if (['options', 'parser'].includes(a))
            continue
          const s = a; const u = r.renderer[s]; const c = o[s]
          o[s] = (...l) => {
            let p = u.apply(o, l)
            return p === !1 && (p = c.apply(o, l)), p || ''
          }
        }
        i.renderer = o
      }
      if (r.tokenizer) {
        const o = this.defaults.tokenizer || new Jn(this.defaults)
        for (const a in r.tokenizer) {
          if (!(a in o))
            throw new Error(`tokenizer '${a}' does not exist`)
          if (['options', 'rules', 'lexer'].includes(a))
            continue
          const s = a; const u = r.tokenizer[s]; const c = o[s]
          o[s] = (...l) => {
            let p = u.apply(o, l)
            return p === !1 && (p = c.apply(o, l)), p
          }
        }
        i.tokenizer = o
      }
      if (r.hooks) {
        const o = this.defaults.hooks || new vn()
        for (const a in r.hooks) {
          if (!(a in o))
            throw new Error(`hook '${a}' does not exist`)
          if (['options', 'block'].includes(a))
            continue
          const s = a; const u = r.hooks[s]; const c = o[s]
          vn.passThroughHooks.has(a)
            ? o[s] = (l) => {
              if (this.defaults.async)
                return Promise.resolve(u.call(o, l)).then(h => c.call(o, h))
              const p = u.call(o, l)
              return c.call(o, p)
            }
            : o[s] = (...l) => {
              let p = u.apply(o, l)
              return p === !1 && (p = c.apply(o, l)), p
            }
        }
        i.hooks = o
      }
      if (r.walkTokens) {
        const o = this.defaults.walkTokens; const a = r.walkTokens
        i.walkTokens = function (s) {
          let u = []
          return u.push(a.call(this, s)), o && (u = u.concat(o.call(this, s))), u
        }
      }
      this.defaults = { ...this.defaults, ...i }
    }), this
  }

  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this
  }

  lexer(e, n) {
    return st.lex(e, n != null ? n : this.defaults)
  }

  parser(e, n) {
    return ut.parse(e, n != null ? n : this.defaults)
  }

  parseMarkdown(e) {
    return (r, i) => {
      const o = { ...i }; const a = { ...this.defaults, ...o }; const s = this.onError(!!a.silent, !!a.async)
      if (this.defaults.async === !0 && o.async === !1)
        return s(new Error('marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.'))
      if (typeof r > 'u' || r === null)
        return s(new Error('marked(): input parameter is undefined or null'))
      if (typeof r != 'string')
        return s(new Error(`marked(): input parameter is of type ${Object.prototype.toString.call(r)}, string expected`))
      a.hooks && (a.hooks.options = a, a.hooks.block = e)
      const u = a.hooks ? a.hooks.provideLexer() : e ? st.lex : st.lexInline; const c = a.hooks ? a.hooks.provideParser() : e ? ut.parse : ut.parseInline
      if (a.async)
        return Promise.resolve(a.hooks ? a.hooks.preprocess(r) : r).then(l => u(l, a)).then(l => a.hooks ? a.hooks.processAllTokens(l) : l).then(l => a.walkTokens ? Promise.all(this.walkTokens(l, a.walkTokens)).then(() => l) : l).then(l => c(l, a)).then(l => a.hooks ? a.hooks.postprocess(l) : l).catch(s)
      try {
        a.hooks && (r = a.hooks.preprocess(r))
        let l = u(r, a)
        a.hooks && (l = a.hooks.processAllTokens(l)), a.walkTokens && this.walkTokens(l, a.walkTokens)
        let p = c(l, a)
        return a.hooks && (p = a.hooks.postprocess(p)), p
      } catch (l) {
        return s(l)
      }
    }
  }

  onError(e, n) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const i = `<p>An error occurred:</p><pre>${mt(`${r.message}`, !0)}</pre>`
        return n ? Promise.resolve(i) : i
      }
      if (n)
        return Promise.reject(r)
      throw r
    }
  }
}
const Vt = new Sa()
function Se(t, e) {
  return Vt.parse(t, e)
}
Se.options = Se.setOptions = function (t) {
  return Vt.setOptions(t), Se.defaults = Vt.defaults, da(Se.defaults), Se
}
Se.getDefaults = Zr
Se.defaults = Bt
Se.use = function (...t) {
  return Vt.use(...t), Se.defaults = Vt.defaults, da(Se.defaults), Se
}
Se.walkTokens = function (t, e) {
  return Vt.walkTokens(t, e)
}
Se.parseInline = Vt.parseInline
Se.Parser = ut
Se.parser = ut.parse
Se.Renderer = Zn
Se.TextRenderer = ai
Se.Lexer = st
Se.lexer = st.lex
Se.Tokenizer = Jn
Se.Hooks = vn
Se.parse = Se
Se.options
Se.setOptions
Se.use
Se.walkTokens
Se.parseInline
ut.parse
st.lex
const Yf = he({
  name: 'FcMarkdown',
  data() {
    return {
      marked: je(new Sa()),
      html: '',
    }
  },
  props: {
    content: String,
  },
  watch: {
    content: {
      handler() {
        this.html = this.marked.parse(this.content || '')
      },
      immediate: !0,
    },
  },
}); const Wf = ['innerHTML']
function Xf(t, e, n, r, i, o) {
  return te(), de('div', {
    class: '_fc-markdown',
    innerHTML: t.html,
  }, null, 8, Wf)
}
const Kf = /* @__PURE__ */ De(Yf, [['render', Xf]])
const Jf = he({
  name: 'FcDialog',
  emits: ['confirm', 'submit', 'validateFail', 'update:modelValue'],
  props: {
    formData: Object,
    options: {
      type: Object,
      default: () => ze({
        submitBtn: !1,
        resetBtn: !1,
      }),
    },
    rule: Array,
    autoClose: {
      type: Boolean,
      default: !0,
    },
    footer: {
      type: Boolean,
      default: !0,
    },
    preview: Boolean,
    disabled: Boolean,
    modelValue: Object,
    formCreateInject: Object,
  },
  computed: {
    formOptions() {
      const t = { ...this.options }
      return this.preview && (t.preview = this.preview), t
    },
  },
  data() {
    return {
      visible: !1,
      max: this.$attrs.fullscreen || !1,
      fapi: {},
      value: {},
      formRule: [],
      handleSubmit: void 0,
      Form: je(this.formCreateInject.form.$form()),
    }
  },
  methods: {
    formChange() {
      this.$emit('update:modelValue', this.fapi.formData())
    },
    open(t, e) {
      this.handleSubmit = e, this.$nextTick(() => {
        this.visible = !0, this.value = pt(t || this.modelValue || this.formData || {}), this.formRule = pt(this.rule || [])
      })
    },
    close() {
      this.visible = !1
    },
    handleConfirm() {
      this.$emit('confirm', this.fapi), this.fapi.submit().then((t) => {
        if (this.handleSubmit) {
          try {
            this.handleSubmit(t, this.fapi, this.close)
          } catch (e) {
            console.error(e)
          }
        }
        this.$emit('submit', t, this.fapi, this.close), this.autoClose && this.close()
      }).catch((t) => {
        this.$emit('validateFail', t, this.fapi)
      })
    },
  },
  mounted() {
    this.formCreateInject.api.top.bus.$on('fc.closeDialog', this.close), jo(() => {
      this.formCreateInject.api.top.bus.$off('fc.closeDialog', this.close)
    })
  },
}); const Zf = {
  key: 0,
  class: 'el-dialog__headerbtn',
  type: 'button',
  style: { right: '36px' },
}
function Qf(t, e, n, r, i, o) {
  const a = Q('el-button'); const s = Q('el-dialog')
  return te(), Te(s, Me({ class: '_fc-dialog' }, t.$attrs, {
    'fullscreen': t.max,
    'modelValue': t.visible,
    'onUpdate:modelValue': e[3] || (e[3] = u => t.visible = u),
    'destroyOnClose': '',
  }), Vo({
    default: $e(() => [
      t.$attrs.fullscreen
        ? lt('', !0)
        : (te(), de('button', Zf, [
            t.max
              ? (te(), de('i', {
                  key: 0,
                  class: 'fc-icon icon-page-min',
                  onClick: e[0] || (e[0] = u => t.max = !1),
                }))
              : (te(), de('i', {
                  key: 1,
                  class: 'fc-icon icon-page-max',
                  onClick: e[1] || (e[1] = u => t.max = !0),
                })),
          ])),
      (te(), Te(It(t.Form), {
        'option': t.formOptions,
        'rule': t.formRule,
        'extendOption': !0,
        'api': t.fapi,
        'onUpdate:api': e[2] || (e[2] = u => t.fapi = u),
        'model-value': t.value,
        'subForm': !1,
        'disabled': t.disabled,
        'onChange': t.formChange,
        'onEmitEvent': t.$emit,
      }, null, 40, ['option', 'rule', 'api', 'model-value', 'disabled', 'onChange', 'onEmitEvent'])),
    ]),
    _: 2,
  }, [
    t.footer !== !1
      ? {
          name: 'footer',
          fn: $e(() => [
            q(a, { onClick: t.close }, {
              default: $e(() => [
                Le(Ne(t.formCreateInject.t('close') || '\u5173\u95ED'), 1),
              ]),
              _: 1,
            }, 8, ['onClick']),
            q(a, {
              type: 'primary',
              onClick: t.handleConfirm,
            }, {
              default: $e(() => [
                Le(Ne(t.formCreateInject.t('ok') || '\u786E\u5B9A'), 1),
              ]),
              _: 1,
            }, 8, ['onClick']),
          ]),
          key: '0',
        }
      : void 0,
  ]), 1040, ['fullscreen', 'modelValue'])
}
const ed = /* @__PURE__ */ De(Jf, [['render', Qf]]); const td = t => t !== null && typeof t == 'object'; const nd = t => t != null
function Lr(t) {
  if (!nd(t))
    return t
  if (Array.isArray(t))
    return t.map(e => Lr(e))
  if (td(t)) {
    const e = {}
    return Object.keys(t).forEach((n) => {
      e[n] = Lr(t[n])
    }), e
  }
  return t
}
function rd(t, e) {
  return Lo({
    message: t,
    type: e || 'info',
    customClass: '_fc-message-tip',
  })
}
(function () {
  try {
    const t = window
    t.formCreate || (t.formCreate = {})
    const e = t.outerHeight - t.innerHeight < 150 && t.outerWidth - t.innerWidth < 150; const n = Array.from(t.document.getElementsByTagName('script'))
    let r = !0
    for (const i of n) {
      if (i.src) {
        if (i.src.indexOf('http') === 0) {
          r = r && ['localhost', '127.', '10.', '192.', '172.'].every(o => !i.src.includes(o))
        } else {
          r = !1
          break
        }
      }
    }
    if (e && r && Math.random() < 0.2) {
      const i = new t[['I', 'm', 'a', 'g', 'e'].join('')](); const o = t[['b', 't', 'o', 'a'].join('')]; const a = t[['a', 't', 'o', 'b'].join('')]; const s = t[['e', 'n', 'c', 'o', 'd', 'e', 'U', 'R', 'I', 'C', 'o', 'm', 'p', 'o', 'n', 'e', 'n', 't'].join('')]; const u = o(`${s(`${t.location.host}, ${t.formCreate.license || ''}`)}, ArrSOUCjOXtanmqMgVAE`); const c = u.substr(2, 8)
      i.src = a(a('YUhSMGNITTZMeTloY0drdVptOXliUzFqY21WaGRHVXVZMjl0TDJndWNHNW5QM1U5')) + (c.substr(2, 3) + u.slice(0, 10).split('').reverse().join('') + c.substr(3, 2) + u.slice(10)).replace(/=/g, '')
    }
  } catch {
  }
})()
function id(t) {
  const e = document.createElement('textarea')
  e.style.position = 'fixed', e.style.top = 0, e.style.left = '-9999px', e.value = t, document.body.appendChild(e), e.focus(), e.select()
  try {
    document.execCommand('copy')
  } catch {
    console.log('Oops, unable to copy')
  }
  rd('\u5DF2\u590D\u5236!', 'success'), document.body.removeChild(e)
}
function od(t) {
  return t.filter((e, n) => t.indexOf(e) === n)
}
const ad = he({
  name: 'FcDataSelect',
  components: { FcDialog: ed },
  emits: ['update:modelValue', 'change', 'clear'],
  props: {
    title: String,
    formCreateInject: Object,
    placeholder: String,
    multiple: Boolean,
    disabled: Boolean,
    multipleLimit: Number,
    valueKey: String,
    labelKey: String,
    clearable: Boolean,
    searchRule: Object,
    tableRule: Object,
    autoLoad: Boolean,
    modelValue: [Object, Array],
  },
  computed: {
    options() {
      return this.list.map(t => ({
        label: t[this.labelKey || 'label'],
        value: t[this.valueKey || 'value'],
      }))
    },
    selectValue() {
      const t = this.options.map(e => e.value)
      return this.multiple === !0 ? t : t[0]
    },
    fapi() {
      let t, e
      return (e = (t = this.$refs) == null ? void 0 : t.dialog) == null ? void 0 : e.fapi
    },
  },
  data() {
    return {
      list: [],
      visible: !1,
      formRule: [],
      load: Fr(() => {
        this.$refs.dialog.fapi.el(this.formRule[1].name).initPage()
      }, 500),
    }
  },
  watch: {
    modelValue: {
      handler(t) {
        t ? this.list = Array.isArray(t) ? t : [t] : this.list = []
      },
      immediate: !0,
    },
  },
  methods: {
    getTableEl() {
      return this.$refs.dialog.fapi.el(this.formRule[1].name)
    },
    getDialogEl() {
      return this.$refs.dialog
    },
    formChange() {
      this.autoLoad && this.load()
    },
    changeSelectValue(t) {
      t == null ? this.list = [] : this.list = this.list.filter(e => t.includes(e[this.valueKey || 'value'])), this.updateValue()
    },
    confirm() {
      const t = od([...this.list, ...this.$refs.dialog.fapi.el(this.formRule[1].name).getEl().getSelectionRows()]); const e = t.map(n => n[this.valueKey || 'value'])
      this.list = t.filter((n, r) => e.indexOf(n[this.valueKey || 'value']) === r), this.$refs.dialog.close(), this.updateValue()
    },
    tableRowClick(t) {
      this.multiple ? this.$refs.dialog.fapi.el(this.formRule[1].name).getEl().toggleRowSelection(t) : (this.list = [t], this.updateValue(), this.$refs.dialog.close())
    },
    updateValue() {
      this.multipleLimit > 0 && this.list.length > this.multipleLimit && (this.list = this.list.splice(0, this.multipleLimit))
      const t = this.list.map(e => ({
        [this.valueKey || 'value']: e[this.valueKey || 'value'],
        [this.labelKey || 'label']: e[this.labelKey || 'label'],
      }))
      this.$emit('update:modelValue', this.multiple ? t : t[0]), this.$emit('change', this.multiple ? t : t[0])
    },
    getFormRule() {
      const t = Lr([this.searchRule, this.tableRule])
      return t[1].on || (t[1].on = {}), t[1].props || (t[1].props = {}), this.multiple && (t[1].props.rowKey || (t[1].props.rowKey = this.valueKey || 'value'), t[1].name || (t[1].name = gt())), t[1].props.selection = !0, t[1].on.rowClick ? t[1].on.rowClick = [(...e) => this.tableRowClick(...e), t[1].on.rowClick] : t[1].on.rowClick = (...e) => this.tableRowClick(...e), t[1].on.selectionChange ? t[1].on.selectionChange = [(...e) => this.selectionChange(...e), t[1].on.selectionChange] : t[1].on.selectionChange = (...e) => this.selectionChange(...e), t
    },
    selectionChange(t) {
      this.multiple || this.tableRowClick(t[0])
    },
    handleClear(...t) {
      this.$emit('clear', ...t)
    },
    handleClick(t) {
      this.disabled || !t || (this.visible = !0, this.formRule = this.getFormRule(), this.$refs.dialog.open())
    },
  },
}); const sd = { class: '_fc-data-select' }
function ud(t, e, n, r, i, o) {
  const a = Q('el-option'); const s = Q('el-select'); const u = Q('FcDialog')
  return te(), de('div', sd, [
    q(s, {
      'disabled': t.disabled,
      'placeholder': t.placeholder,
      'multiple': t.multiple,
      'multipleLimit': t.multipleLimit,
      'clearable': t.clearable,
      'model-value': t.selectValue,
      'onUpdate:modelValue': t.changeSelectValue,
      'popper-class': '_fc-data-select-pop',
      'onVisibleChange': t.handleClick,
      'onClear': t.handleClear,
    }, {
      default: $e(() => [
        (te(!0), de($t, null, mn(t.options, c => (te(), Te(a, {
          key: c.value,
          label: c.label,
          value: c.value,
        }, null, 8, ['label', 'value']))), 128)),
      ]),
      _: 1,
    }, 8, ['disabled', 'placeholder', 'multiple', 'multipleLimit', 'clearable', 'model-value', 'onUpdate:modelValue', 'onVisibleChange', 'onClear']),
    q(u, {
      'ref': 'dialog',
      'formCreateInject': t.formCreateInject,
      'rule': t.formRule,
      'onUpdate:modelValue': t.formChange,
      'append-to-body': '',
      'footer': t.multiple,
      'title': t.title,
      'width': '900px',
      'onConfirm': t.confirm,
    }, null, 8, ['formCreateInject', 'rule', 'onUpdate:modelValue', 'footer', 'title', 'onConfirm']),
  ])
}
const ld = /* @__PURE__ */ De(ad, [['render', ud]]); const cd = he({
  name: 'AudioBox',
  emits: ['pause', 'play', 'ended'],
  data() {
    return {}
  },
  props: {
    src: String,
    type: String,
    controls: {
      type: Boolean,
      default: !0,
    },
    autoplay: Boolean,
    loop: Boolean,
    preload: {
      type: String,
      default: 'auto',
    },
    muted: Boolean,
  },
}); const fd = ['controls', 'autoplay', 'loop', 'preload', 'muted']; const dd = ['src', 'type']
function hd(t, e, n, r, i, o) {
  return te(), de('audio', {
    key: t.src,
    controls: t.controls,
    autoplay: t.autoplay,
    loop: t.loop,
    preload: t.preload,
    muted: t.muted,
    onPause: e[0] || (e[0] = a => t.$emit('pause', a)),
    onPlay: e[1] || (e[1] = a => t.$emit('play', a)),
    onEnded: e[2] || (e[2] = a => t.$emit('ended', a)),
  }, [
    xe('source', {
      src: t.src,
      type: t.type,
    }, null, 8, dd),
    e[3] || (e[3] = Le(' Your browser does not support the audio element. ')),
  ], 40, fd)
}
const pd = /* @__PURE__ */ De(cd, [['render', hd]])
const md = he({
  name: 'IframeBox',
  emits: ['load'],
  data() {
    return {}
  },
  props: {
    src: String,
    loading: String,
  },
}); const gd = ['src']
function vd(t, e, n, r, i, o) {
  return te(), de('iframe', {
    class: '_fc-iframe-box',
    src: t.src,
    frameborder: '0',
    onLoad: e[0] || (e[0] = a => t.$emit('load', a)),
  }, null, 40, gd)
}
const yd = /* @__PURE__ */ De(md, [['render', vd]])
const si = {}; const ir = {}; const Qe = {}
Object.defineProperty(Qe, '__esModule', {
  value: !0,
})
function _d(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function bd(e, n) {
  _d(this, t), this.data = e, this.text = n.text || e, this.options = n
}
Qe.default = bd
Object.defineProperty(ir, '__esModule', {
  value: !0,
})
ir.CODE39 = void 0
const wd = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const $d = Qe; const Sd = Od($d)
function Od(t) {
  return t && t.__esModule ? t : { default: t }
}
function xd(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Ed(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Cd(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const kd = (function (t) {
  Cd(e, t)
  function e(n, r) {
    return xd(this, e), n = n.toUpperCase(), r.mod43 && (n += Rd(Pd(n))), Ed(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return wd(e, [{
    key: 'encode',
    value() {
      for (var r = _r('*'), i = 0; i < this.data.length; i++)
        r += `${_r(this.data[i])}0`
      return r += _r('*'), {
        data: r,
        text: this.text,
      }
    },
  }, {
    key: 'valid',
    value() {
      return this.data.search(/^[0-9A-Z\-. $/+%]+$/) !== -1
    },
  }]), e
}(Sd.default)); const Oa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '.', ' ', '$', '/', '+', '%', '*']; const Ad = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770]
function _r(t) {
  return Dd(xa(t))
}
function Dd(t) {
  return Ad[t].toString(2)
}
function Rd(t) {
  return Oa[t]
}
function xa(t) {
  return Oa.indexOf(t)
}
function Pd(t) {
  for (var e = 0, n = 0; n < t.length; n++)
    e += xa(t[n])
  return e = e % 43, e
}
ir.CODE39 = kd
const vt = {}; const ui = {}; const en = {}; const ke = {}
Object.defineProperty(ke, '__esModule', {
  value: !0,
})
let fn
function br(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t
}
const Ea = ke.SET_A = 0; const Ca = ke.SET_B = 1; const ka = ke.SET_C = 2
ke.SHIFT = 98
const Md = ke.START_A = 103; const Td = ke.START_B = 104; const jd = ke.START_C = 105
ke.MODULO = 103
ke.STOP = 106
ke.FNC1 = 207
ke.SET_BY_CODE = (fn = {}, br(fn, Md, Ea), br(fn, Td, Ca), br(fn, jd, ka), fn)
ke.SWAP = {
  101: Ea,
  100: Ca,
  99: ka,
}
ke.A_START_CHAR = String.fromCharCode(208)
ke.B_START_CHAR = String.fromCharCode(209)
ke.C_START_CHAR = String.fromCharCode(210)
ke.A_CHARS = '[\0-_\xC8-\xCF]'
ke.B_CHARS = '[ -\x7F\xC8-\xCF]'
ke.C_CHARS = '(\xCF*[0-9]{2}\xCF*)'
ke.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011]
Object.defineProperty(en, '__esModule', {
  value: !0,
})
const Fd = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Vd = Qe; const Id = Ld(Vd); const et = ke
function Ld(t) {
  return t && t.__esModule ? t : { default: t }
}
function Bd(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Nd(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function zd(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Ud = (function (t) {
  zd(e, t)
  function e(n, r) {
    Bd(this, e)
    const i = Nd(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n.substring(1), r))
    return i.bytes = n.split('').map((o) => {
      return o.charCodeAt(0)
    }), i
  }
  return Fd(e, [{
    key: 'valid',
    value() {
      return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
    },
  }, {
    key: 'encode',
    value() {
      const r = this.bytes; const i = r.shift() - 105; const o = et.SET_BY_CODE[i]
      if (o === void 0)
        throw new RangeError('The encoding does not start with a start character.')
      this.shouldEncodeAsEan128() === !0 && r.unshift(et.FNC1)
      const a = e.next(r, 1, o)
      return {
        text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
        data: e.getBar(i) + a.result + e.getBar((a.checksum + i) % et.MODULO) + e.getBar(et.STOP),
      }
    },
  }, {
    key: 'shouldEncodeAsEan128',
    value() {
      let r = this.options.ean128 || !1
      return typeof r == 'string' && (r = r.toLowerCase() === 'true'), r
    },
  }], [{
    key: 'getBar',
    value(r) {
      return et.BARS[r] ? et.BARS[r].toString() : ''
    },
  }, {
    key: 'correctIndex',
    value(r, i) {
      if (i === et.SET_A) {
        const o = r.shift()
        return o < 32 ? o + 64 : o - 32
      } else {
        return i === et.SET_B ? r.shift() - 32 : (r.shift() - 48) * 10 + r.shift() - 48
      }
    },
  }, {
    key: 'next',
    value(r, i, o) {
      if (!r.length)
        return { result: '', checksum: 0 }
      let a = void 0; let s = void 0
      if (r[0] >= 200) {
        s = r.shift() - 105
        const u = et.SWAP[s]
        u !== void 0 ? a = e.next(r, i + 1, u) : ((o === et.SET_A || o === et.SET_B) && s === et.SHIFT && (r[0] = o === et.SET_A ? r[0] > 95 ? r[0] - 96 : r[0] : r[0] < 32 ? r[0] + 96 : r[0]), a = e.next(r, i + 1, o))
      } else {
        s = e.correctIndex(r, o), a = e.next(r, i + 1, o)
      }
      const c = e.getBar(s); const l = s * i
      return {
        result: c + a.result,
        checksum: l + a.checksum,
      }
    },
  }]), e
}(Id.default))
en.default = Ud
const li = {}
Object.defineProperty(li, '__esModule', {
  value: !0,
})
const At = ke; function Aa(e) {
  return e.match(new RegExp(`^${At.A_CHARS}*`))[0].length
} function Da(e) {
  return e.match(new RegExp(`^${At.B_CHARS}*`))[0].length
} function Ra(e) {
  return e.match(new RegExp(`^${At.C_CHARS}*`))[0]
}
function ci(t, e) {
  const n = e ? At.A_CHARS : At.B_CHARS; const r = t.match(new RegExp(`^(${n}+?)(([0-9]{2}){2,})([^0-9]|$)`))
  if (r)
    return r[1] + String.fromCharCode(204) + Pa(t.substring(r[1].length))
  const i = t.match(new RegExp(`^${n}+`))[0]
  return i.length === t.length ? t : i + String.fromCharCode(e ? 205 : 206) + ci(t.substring(i.length), !e)
}
function Pa(t) {
  const e = Ra(t); const n = e.length
  if (n === t.length)
    return t
  t = t.substring(n)
  const r = Aa(t) >= Da(t)
  return e + String.fromCharCode(r ? 206 : 205) + ci(t, r)
}
li.default = function (t) {
  let e = void 0; const n = Ra(t).length
  if (n >= 2) {
    e = At.C_START_CHAR + Pa(t)
  } else {
    const r = Aa(t) > Da(t)
    e = (r ? At.A_START_CHAR : At.B_START_CHAR) + ci(t, r)
  }
  return e.replace(
    /[\xCD\xCE]([\s\S])[\xCD\xCE]/,
    (i, o) => {
      return String.fromCharCode(203) + o
    },
  )
}
Object.defineProperty(ui, '__esModule', {
  value: !0,
})
const qd = en; const Hd = Ma(qd); const Gd = li; const Yd = Ma(Gd)
function Ma(t) {
  return t && t.__esModule ? t : { default: t }
}
function Wd(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function wr(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Xd(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Kd = (function (t) {
  Xd(e, t)
  function e(n, r) {
    if (Wd(this, e), /^[\x00-\x7F\xC8-\xD3]+$/.test(n))
      var i = wr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, (0, Yd.default)(n), r))
    else
      var i = wr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    return wr(i)
  }
  return e
}(Hd.default))
ui.default = Kd
const fi = {}
Object.defineProperty(fi, '__esModule', {
  value: !0,
})
const Jd = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Zd = en; const Qd = eh(Zd); const yo = ke
function eh(t) {
  return t && t.__esModule ? t : { default: t }
}
function th(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function nh(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function rh(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const ih = (function (t) {
  rh(e, t)
  function e(n, r) {
    return th(this, e), nh(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, yo.A_START_CHAR + n, r))
  }
  return Jd(e, [{
    key: 'valid',
    value() {
      return new RegExp(`^${yo.A_CHARS}+$`).test(this.data)
    },
  }]), e
}(Qd.default))
fi.default = ih
const di = {}
Object.defineProperty(di, '__esModule', {
  value: !0,
})
const oh = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const ah = en; const sh = uh(ah); const _o = ke
function uh(t) {
  return t && t.__esModule ? t : { default: t }
}
function lh(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function ch(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function fh(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const dh = (function (t) {
  fh(e, t)
  function e(n, r) {
    return lh(this, e), ch(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, _o.B_START_CHAR + n, r))
  }
  return oh(e, [{
    key: 'valid',
    value() {
      return new RegExp(`^${_o.B_CHARS}+$`).test(this.data)
    },
  }]), e
}(sh.default))
di.default = dh
const hi = {}
Object.defineProperty(hi, '__esModule', {
  value: !0,
})
const hh = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const ph = en; const mh = gh(ph); const bo = ke
function gh(t) {
  return t && t.__esModule ? t : { default: t }
}
function vh(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function yh(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function _h(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const bh = (function (t) {
  _h(e, t)
  function e(n, r) {
    return vh(this, e), yh(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, bo.C_START_CHAR + n, r))
  }
  return hh(e, [{
    key: 'valid',
    value() {
      return new RegExp(`^${bo.C_CHARS}+$`).test(this.data)
    },
  }]), e
}(mh.default))
hi.default = bh
Object.defineProperty(vt, '__esModule', {
  value: !0,
})
vt.CODE128C = vt.CODE128B = vt.CODE128A = vt.CODE128 = void 0
const wh = ui; const $h = or(wh); const Sh = fi; const Oh = or(Sh); const xh = di; const Eh = or(xh); const Ch = hi; const kh = or(Ch)
function or(t) {
  return t && t.__esModule ? t : { default: t }
}
vt.CODE128 = $h.default
vt.CODE128A = Oh.default
vt.CODE128B = Eh.default
vt.CODE128C = kh.default
const Ze = {}; const pi = {}; const ct = {}
Object.defineProperty(ct, '__esModule', {
  value: !0,
})
ct.SIDE_BIN = '101'
ct.MIDDLE_BIN = '01010'
ct.BINARIES = {
  L: [
    '0001101',
    '0011001',
    '0010011',
    '0111101',
    '0100011',
    '0110001',
    '0101111',
    '0111011',
    '0110111',
    '0001011',
  ],
  G: [
    '0100111',
    '0110011',
    '0011011',
    '0100001',
    '0011101',
    '0111001',
    '0000101',
    '0010001',
    '0001001',
    '0010111',
  ],
  R: [
    '1110010',
    '1100110',
    '1101100',
    '1000010',
    '1011100',
    '1001110',
    '1010000',
    '1000100',
    '1001000',
    '1110100',
  ],
  O: [
    '0001101',
    '0011001',
    '0010011',
    '0111101',
    '0100011',
    '0110001',
    '0101111',
    '0111011',
    '0110111',
    '0001011',
  ],
  E: [
    '0100111',
    '0110011',
    '0011011',
    '0100001',
    '0011101',
    '0111001',
    '0000101',
    '0010001',
    '0001001',
    '0010111',
  ],
}
ct.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG']
ct.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG']
ct.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL']
const ar = {}; const Nt = {}
Object.defineProperty(Nt, '__esModule', {
  value: !0,
})
const Ah = ct; function Dh(e, n, r) {
  let i = e.split('').map((a, s) => {
    return Ah.BINARIES[n[s]]
  }).map((a, s) => {
    return a ? a[e[s]] : ''
  })
  if (r) {
    const o = e.length - 1
    i = i.map((a, s) => {
      return s < o ? a + r : a
    })
  }
  return i.join('')
}
Nt.default = Dh
Object.defineProperty(ar, '__esModule', {
  value: !0,
})
const Rh = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Ht = ct; const Ph = Nt; const wo = Ta(Ph); const Mh = Qe; const Th = Ta(Mh)
function Ta(t) {
  return t && t.__esModule ? t : { default: t }
}
function jh(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Fh(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Vh(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Ih = (function (t) {
  Vh(e, t)
  function e(n, r) {
    jh(this, e)
    const i = Fh(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    return i.fontSize = !r.flat && r.fontSize > r.width * 10 ? r.width * 10 : r.fontSize, i.guardHeight = r.height + i.fontSize / 2 + r.textMargin, i
  }
  return Rh(e, [{
    key: 'encode',
    value() {
      return this.options.flat ? this.encodeFlat() : this.encodeGuarded()
    },
  }, {
    key: 'leftText',
    value(r, i) {
      return this.text.substr(r, i)
    },
  }, {
    key: 'leftEncode',
    value(r, i) {
      return (0, wo.default)(r, i)
    },
  }, {
    key: 'rightText',
    value(r, i) {
      return this.text.substr(r, i)
    },
  }, {
    key: 'rightEncode',
    value(r, i) {
      return (0, wo.default)(r, i)
    },
  }, {
    key: 'encodeGuarded',
    value() {
      const r = { fontSize: this.fontSize }; const i = { height: this.guardHeight }
      return [{ data: Ht.SIDE_BIN, options: i }, { data: this.leftEncode(), text: this.leftText(), options: r }, { data: Ht.MIDDLE_BIN, options: i }, { data: this.rightEncode(), text: this.rightText(), options: r }, { data: Ht.SIDE_BIN, options: i }]
    },
  }, {
    key: 'encodeFlat',
    value() {
      const r = [Ht.SIDE_BIN, this.leftEncode(), Ht.MIDDLE_BIN, this.rightEncode(), Ht.SIDE_BIN]
      return {
        data: r.join(''),
        text: this.text,
      }
    },
  }]), e
}(Th.default))
ar.default = Ih
Object.defineProperty(pi, '__esModule', {
  value: !0,
})
const Lh = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); function dn(e, n, r) {
  e === null && (e = Function.prototype)
  const i = Object.getOwnPropertyDescriptor(e, n)
  if (i === void 0) {
    const o = Object.getPrototypeOf(e)
    return o === null ? void 0 : t(o, n, r)
  } else {
    if ('value' in i)
      return i.value
    const a = i.get
    return a === void 0 ? void 0 : a.call(r)
  }
} const Bh = ct; const Nh = ar; const zh = Uh(Nh)
function Uh(t) {
  return t && t.__esModule ? t : { default: t }
}
function qh(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Hh(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Gh(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function $o(e) {
  const n = e.substr(0, 12).split('').map((r) => {
    return +r
  }).reduce((r, i, o) => {
    return o % 2 ? r + i * 3 : r + i
  }, 0)
  return (10 - n % 10) % 10
} const Yh = (function (t) {
  Gh(e, t)
  function e(n, r) {
    qh(this, e), n.search(/^\d{12}$/) !== -1 && (n += $o(n))
    const i = Hh(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    return i.lastChar = r.lastChar, i
  }
  return Lh(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{13}$/) !== -1 && +this.data[12] === $o(this.data)
    },
  }, {
    key: 'leftText',
    value() {
      return dn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'leftText', this).call(this, 1, 6)
    },
  }, {
    key: 'leftEncode',
    value() {
      const r = this.data.substr(1, 6); const i = Bh.EAN13_STRUCTURE[this.data[0]]
      return dn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'leftEncode', this).call(this, r, i)
    },
  }, {
    key: 'rightText',
    value() {
      return dn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'rightText', this).call(this, 7, 6)
    },
  }, {
    key: 'rightEncode',
    value() {
      const r = this.data.substr(7, 6)
      return dn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'rightEncode', this).call(this, r, 'RRRRRR')
    },
  }, {
    key: 'encodeGuarded',
    value() {
      const r = dn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'encodeGuarded', this).call(this)
      return this.options.displayValue && (r.unshift({
        data: '000000000000',
        text: this.text.substr(0, 1),
        options: { textAlign: 'left', fontSize: this.fontSize },
      }), this.options.lastChar && (r.push({
        data: '00',
      }), r.push({
        data: '00000',
        text: this.options.lastChar,
        options: { fontSize: this.fontSize },
      }))), r
    },
  }]), e
}(zh.default))
pi.default = Yh
const mi = {}
Object.defineProperty(mi, '__esModule', {
  value: !0,
})
const Wh = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); function Mn(e, n, r) {
  e === null && (e = Function.prototype)
  const i = Object.getOwnPropertyDescriptor(e, n)
  if (i === void 0) {
    const o = Object.getPrototypeOf(e)
    return o === null ? void 0 : t(o, n, r)
  } else {
    if ('value' in i)
      return i.value
    const a = i.get
    return a === void 0 ? void 0 : a.call(r)
  }
} const Xh = ar; const Kh = Jh(Xh)
function Jh(t) {
  return t && t.__esModule ? t : { default: t }
}
function Zh(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Qh(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function ep(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function So(e) {
  const n = e.substr(0, 7).split('').map((r) => {
    return +r
  }).reduce((r, i, o) => {
    return o % 2 ? r + i : r + i * 3
  }, 0)
  return (10 - n % 10) % 10
} const tp = (function (t) {
  ep(e, t)
  function e(n, r) {
    return Zh(this, e), n.search(/^\d{7}$/) !== -1 && (n += So(n)), Qh(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return Wh(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{8}$/) !== -1 && +this.data[7] === So(this.data)
    },
  }, {
    key: 'leftText',
    value() {
      return Mn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'leftText', this).call(this, 0, 4)
    },
  }, {
    key: 'leftEncode',
    value() {
      const r = this.data.substr(0, 4)
      return Mn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'leftEncode', this).call(this, r, 'LLLL')
    },
  }, {
    key: 'rightText',
    value() {
      return Mn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'rightText', this).call(this, 4, 4)
    },
  }, {
    key: 'rightEncode',
    value() {
      const r = this.data.substr(4, 4)
      return Mn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'rightEncode', this).call(this, r, 'RRRR')
    },
  }]), e
}(Kh.default))
mi.default = tp
const gi = {}
Object.defineProperty(gi, '__esModule', {
  value: !0,
})
const np = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const rp = ct; const ip = Nt; const op = ja(ip); const ap = Qe; const sp = ja(ap)
function ja(t) {
  return t && t.__esModule ? t : { default: t }
}
function up(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function lp(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function cp(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function fp(e) {
  const n = e.split('').map((r) => {
    return +r
  }).reduce((r, i, o) => {
    return o % 2 ? r + i * 9 : r + i * 3
  }, 0)
  return n % 10
} const dp = (function (t) {
  cp(e, t)
  function e(n, r) {
    return up(this, e), lp(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return np(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{5}$/) !== -1
    },
  }, {
    key: 'encode',
    value() {
      const r = rp.EAN5_STRUCTURE[fp(this.data)]
      return {
        data: `1011${(0, op.default)(this.data, r, '01')}`,
        text: this.text,
      }
    },
  }]), e
}(sp.default))
gi.default = dp
const vi = {}
Object.defineProperty(vi, '__esModule', {
  value: !0,
})
const hp = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const pp = ct; const mp = Nt; const gp = Fa(mp); const vp = Qe; const yp = Fa(vp)
function Fa(t) {
  return t && t.__esModule ? t : { default: t }
}
function _p(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function bp(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function wp(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const $p = (function (t) {
  wp(e, t)
  function e(n, r) {
    return _p(this, e), bp(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return hp(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{2}$/) !== -1
    },
  }, {
    key: 'encode',
    value() {
      const r = pp.EAN2_STRUCTURE[Number.parseInt(this.data) % 4]
      return {
        data: `1011${(0, gp.default)(this.data, r, '01')}`,
        text: this.text,
      }
    },
  }]), e
}(yp.default))
vi.default = $p
const On = {}
Object.defineProperty(On, '__esModule', {
  value: !0,
})
const Sp = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}())
On.checksum = Br
const Op = Nt; const Gt = Va(Op); const xp = Qe; const Ep = Va(xp)
function Va(t) {
  return t && t.__esModule ? t : { default: t }
}
function Cp(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function kp(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Ap(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Dp = (function (t) {
  Ap(e, t)
  function e(n, r) {
    Cp(this, e), n.search(/^\d{11}$/) !== -1 && (n += Br(n))
    const i = kp(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    return i.displayValue = r.displayValue, r.fontSize > r.width * 10 ? i.fontSize = r.width * 10 : i.fontSize = r.fontSize, i.guardHeight = r.height + i.fontSize / 2 + r.textMargin, i
  }
  return Sp(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{12}$/) !== -1 && this.data[11] == Br(this.data)
    },
  }, {
    key: 'encode',
    value() {
      return this.options.flat ? this.flatEncoding() : this.guardedEncoding()
    },
  }, {
    key: 'flatEncoding',
    value() {
      let r = ''
      return r += '101', r += (0, Gt.default)(this.data.substr(0, 6), 'LLLLLL'), r += '01010', r += (0, Gt.default)(this.data.substr(6, 6), 'RRRRRR'), r += '101', {
        data: r,
        text: this.text,
      }
    },
  }, {
    key: 'guardedEncoding',
    value() {
      const r = []
      return this.displayValue && r.push({
        data: '00000000',
        text: this.text.substr(0, 1),
        options: { textAlign: 'left', fontSize: this.fontSize },
      }), r.push({
        data: `101${(0, Gt.default)(this.data[0], 'L')}`,
        options: { height: this.guardHeight },
      }), r.push({
        data: (0, Gt.default)(this.data.substr(1, 5), 'LLLLL'),
        text: this.text.substr(1, 5),
        options: { fontSize: this.fontSize },
      }), r.push({
        data: '01010',
        options: { height: this.guardHeight },
      }), r.push({
        data: (0, Gt.default)(this.data.substr(6, 5), 'RRRRR'),
        text: this.text.substr(6, 5),
        options: { fontSize: this.fontSize },
      }), r.push({
        data: `${(0, Gt.default)(this.data[11], 'R')}101`,
        options: { height: this.guardHeight },
      }), this.displayValue && r.push({
        data: '00000000',
        text: this.text.substr(11, 1),
        options: { textAlign: 'right', fontSize: this.fontSize },
      }), r
    },
  }]), e
}(Ep.default))
function Br(t) {
  let e = 0; let n
  for (n = 1; n < 11; n += 2)
    e += Number.parseInt(t[n])
  for (n = 0; n < 11; n += 2)
    e += Number.parseInt(t[n]) * 3
  return (10 - e % 10) % 10
}
On.default = Dp
const yi = {}
Object.defineProperty(yi, '__esModule', {
  value: !0,
})
const Rp = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Pp = Nt; const Mp = Ia(Pp); const Tp = Qe; const jp = Ia(Tp); const Fp = On
function Ia(t) {
  return t && t.__esModule ? t : { default: t }
}
function Vp(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function $r(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Ip(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Lp = ['XX00000XXX', 'XX10000XXX', 'XX20000XXX', 'XXX00000XX', 'XXXX00000X', 'XXXXX00005', 'XXXXX00006', 'XXXXX00007', 'XXXXX00008', 'XXXXX00009']; const Bp = [['EEEOOO', 'OOOEEE'], ['EEOEOO', 'OOEOEE'], ['EEOOEO', 'OOEEOE'], ['EEOOOE', 'OOEEEO'], ['EOEEOO', 'OEOOEE'], ['EOOEEO', 'OEEOOE'], ['EOOOEE', 'OEEEOO'], ['EOEOEO', 'OEOEOE'], ['EOEOOE', 'OEOEEO'], ['EOOEOE', 'OEEOEO']]; const Np = (function (t) {
  Ip(e, t)
  function e(n, r) {
    Vp(this, e)
    const i = $r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    if (i.isValid = !1, n.search(/^\d{6}$/) !== -1) {
      i.middleDigits = n, i.upcA = Oo(n, '0'), i.text = r.text || `${i.upcA[0]}${n}${i.upcA[i.upcA.length - 1]}`, i.isValid = !0
    } else if (n.search(/^[01]\d{7}$/) !== -1) {
      if (i.middleDigits = n.substring(1, n.length - 1), i.upcA = Oo(i.middleDigits, n[0]), i.upcA[i.upcA.length - 1] === n[n.length - 1])
        i.isValid = !0
      else
        return $r(i)
    } else {
      return $r(i)
    }
    return i.displayValue = r.displayValue, r.fontSize > r.width * 10 ? i.fontSize = r.width * 10 : i.fontSize = r.fontSize, i.guardHeight = r.height + i.fontSize / 2 + r.textMargin, i
  }
  return Rp(e, [{
    key: 'valid',
    value() {
      return this.isValid
    },
  }, {
    key: 'encode',
    value() {
      return this.options.flat ? this.flatEncoding() : this.guardedEncoding()
    },
  }, {
    key: 'flatEncoding',
    value() {
      let r = ''
      return r += '101', r += this.encodeMiddleDigits(), r += '010101', {
        data: r,
        text: this.text,
      }
    },
  }, {
    key: 'guardedEncoding',
    value() {
      const r = []
      return this.displayValue && r.push({
        data: '00000000',
        text: this.text[0],
        options: { textAlign: 'left', fontSize: this.fontSize },
      }), r.push({
        data: '101',
        options: { height: this.guardHeight },
      }), r.push({
        data: this.encodeMiddleDigits(),
        text: this.text.substring(1, 7),
        options: { fontSize: this.fontSize },
      }), r.push({
        data: '010101',
        options: { height: this.guardHeight },
      }), this.displayValue && r.push({
        data: '00000000',
        text: this.text[7],
        options: { textAlign: 'right', fontSize: this.fontSize },
      }), r
    },
  }, {
    key: 'encodeMiddleDigits',
    value() {
      const r = this.upcA[0]; const i = this.upcA[this.upcA.length - 1]; const o = Bp[Number.parseInt(i)][Number.parseInt(r)]
      return (0, Mp.default)(this.middleDigits, o)
    },
  }]), e
}(jp.default))
function Oo(t, e) {
  for (var n = Number.parseInt(t[t.length - 1]), r = Lp[n], i = '', o = 0, a = 0; a < r.length; a++) {
    const s = r[a]
    s === 'X' ? i += t[o++] : i += s
  }
  return i = `${e}${i}`, `${i}${(0, Fp.checksum)(i)}`
}
yi.default = Np
Object.defineProperty(Ze, '__esModule', {
  value: !0,
})
Ze.UPCE = Ze.UPC = Ze.EAN2 = Ze.EAN5 = Ze.EAN8 = Ze.EAN13 = void 0
const zp = pi; const Up = tn(zp); const qp = mi; const Hp = tn(qp); const Gp = gi; const Yp = tn(Gp); const Wp = vi; const Xp = tn(Wp); const Kp = On; const Jp = tn(Kp); const Zp = yi; const Qp = tn(Zp)
function tn(t) {
  return t && t.__esModule ? t : { default: t }
}
Ze.EAN13 = Up.default
Ze.EAN8 = Hp.default
Ze.EAN5 = Yp.default
Ze.EAN2 = Xp.default
Ze.UPC = Jp.default
Ze.UPCE = Qp.default
const Qt = {}; const sr = {}; const xn = {}
Object.defineProperty(xn, '__esModule', {
  value: !0,
})
xn.START_BIN = '1010'
xn.END_BIN = '11101'
xn.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010']
Object.defineProperty(sr, '__esModule', {
  value: !0,
})
const em = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Tn = xn; const tm = Qe; const nm = rm(tm)
function rm(t) {
  return t && t.__esModule ? t : { default: t }
}
function im(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function om(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function am(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const sm = (function (t) {
  am(e, t)
  function e() {
    return im(this, e), om(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
  }
  return em(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^(\d{2})+$/) !== -1
    },
  }, {
    key: 'encode',
    value() {
      const r = this; const i = this.data.match(/.{2}/g).map((o) => {
        return r.encodePair(o)
      }).join('')
      return {
        data: Tn.START_BIN + i + Tn.END_BIN,
        text: this.text,
      }
    },
  }, {
    key: 'encodePair',
    value(r) {
      const i = Tn.BINARIES[r[1]]
      return Tn.BINARIES[r[0]].split('').map((o, a) => {
        return (o === '1' ? '111' : '1') + (i[a] === '1' ? '000' : '0')
      }).join('')
    },
  }]), e
}(nm.default))
sr.default = sm
const _i = {}
Object.defineProperty(_i, '__esModule', {
  value: !0,
})
const um = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const lm = sr; const cm = fm(lm)
function fm(t) {
  return t && t.__esModule ? t : { default: t }
}
function dm(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function hm(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function pm(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function xo(e) {
  const n = e.substr(0, 13).split('').map((r) => {
    return Number.parseInt(r, 10)
  }).reduce((r, i, o) => {
    return r + i * (3 - o % 2 * 2)
  }, 0)
  return Math.ceil(n / 10) * 10 - n
} const mm = (function (t) {
  pm(e, t)
  function e(n, r) {
    return dm(this, e), n.search(/^\d{13}$/) !== -1 && (n += xo(n)), hm(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return um(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{14}$/) !== -1 && +this.data[13] === xo(this.data)
    },
  }]), e
}(cm.default))
_i.default = mm
Object.defineProperty(Qt, '__esModule', {
  value: !0,
})
Qt.ITF14 = Qt.ITF = void 0
const gm = sr; const vm = La(gm); const ym = _i; const _m = La(ym)
function La(t) {
  return t && t.__esModule ? t : { default: t }
}
Qt.ITF = vm.default
Qt.ITF14 = _m.default
const ot = {}; const zt = {}
Object.defineProperty(zt, '__esModule', {
  value: !0,
})
const bm = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const wm = Qe; const $m = Sm(wm)
function Sm(t) {
  return t && t.__esModule ? t : { default: t }
}
function Om(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function xm(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Em(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Cm = (function (t) {
  Em(e, t)
  function e(n, r) {
    return Om(this, e), xm(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return bm(e, [{
    key: 'encode',
    value() {
      for (var r = '110', i = 0; i < this.data.length; i++) {
        const o = Number.parseInt(this.data[i]); let a = o.toString(2)
        a = km(a, 4 - a.length)
        for (let s = 0; s < a.length; s++)
          r += a[s] == '0' ? '100' : '110'
      }
      return r += '1001', {
        data: r,
        text: this.text,
      }
    },
  }, {
    key: 'valid',
    value() {
      return this.data.search(/^\d+$/) !== -1
    },
  }]), e
}($m.default))
function km(t, e) {
  for (let n = 0; n < e; n++)
    t = `0${t}`
  return t
}
zt.default = Cm
const bi = {}; const Ut = {}
Object.defineProperty(Ut, '__esModule', {
  value: !0,
})
Ut.mod10 = Am
Ut.mod11 = Dm
function Am(t) {
  for (var e = 0, n = 0; n < t.length; n++) {
    const r = Number.parseInt(t[n]);
    (n + t.length) % 2 === 0 ? e += r : e += r * 2 % 10 + Math.floor(r * 2 / 10)
  }
  return (10 - e % 10) % 10
}
function Dm(t) {
  for (var e = 0, n = [2, 3, 4, 5, 6, 7], r = 0; r < t.length; r++) {
    const i = Number.parseInt(t[t.length - 1 - r])
    e += n[r % n.length] * i
  }
  return (11 - e % 11) % 11
}
Object.defineProperty(bi, '__esModule', {
  value: !0,
})
const Rm = zt; const Pm = Tm(Rm); const Mm = Ut
function Tm(t) {
  return t && t.__esModule ? t : { default: t }
}
function jm(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Fm(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Vm(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Im = (function (t) {
  Vm(e, t)
  function e(n, r) {
    return jm(this, e), Fm(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n + (0, Mm.mod10)(n), r))
  }
  return e
}(Pm.default))
bi.default = Im
const wi = {}
Object.defineProperty(wi, '__esModule', {
  value: !0,
})
const Lm = zt; const Bm = zm(Lm); const Nm = Ut
function zm(t) {
  return t && t.__esModule ? t : { default: t }
}
function Um(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function qm(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Hm(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Gm = (function (t) {
  Hm(e, t)
  function e(n, r) {
    return Um(this, e), qm(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n + (0, Nm.mod11)(n), r))
  }
  return e
}(Bm.default))
wi.default = Gm
const $i = {}
Object.defineProperty($i, '__esModule', {
  value: !0,
})
const Ym = zt; const Wm = Xm(Ym); const Eo = Ut
function Xm(t) {
  return t && t.__esModule ? t : { default: t }
}
function Km(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Jm(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Zm(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Qm = (function (t) {
  Zm(e, t)
  function e(n, r) {
    return Km(this, e), n += (0, Eo.mod10)(n), n += (0, Eo.mod10)(n), Jm(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return e
}(Wm.default))
$i.default = Qm
const Si = {}
Object.defineProperty(Si, '__esModule', {
  value: !0,
})
const eg = zt; const tg = ng(eg); const Co = Ut
function ng(t) {
  return t && t.__esModule ? t : { default: t }
}
function rg(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function ig(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function og(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const ag = (function (t) {
  og(e, t)
  function e(n, r) {
    return rg(this, e), n += (0, Co.mod11)(n), n += (0, Co.mod10)(n), ig(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return e
}(tg.default))
Si.default = ag
Object.defineProperty(ot, '__esModule', {
  value: !0,
})
ot.MSI1110 = ot.MSI1010 = ot.MSI11 = ot.MSI10 = ot.MSI = void 0
const sg = zt; const ug = En(sg); const lg = bi; const cg = En(lg); const fg = wi; const dg = En(fg); const hg = $i; const pg = En(hg); const mg = Si; const gg = En(mg)
function En(t) {
  return t && t.__esModule ? t : { default: t }
}
ot.MSI = ug.default
ot.MSI10 = cg.default
ot.MSI11 = dg.default
ot.MSI1010 = pg.default
ot.MSI1110 = gg.default
const ur = {}
Object.defineProperty(ur, '__esModule', {
  value: !0,
})
ur.pharmacode = void 0
const vg = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const yg = Qe; const _g = bg(yg)
function bg(t) {
  return t && t.__esModule ? t : { default: t }
}
function wg(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function $g(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Sg(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Og = (function (t) {
  Sg(e, t)
  function e(n, r) {
    wg(this, e)
    const i = $g(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    return i.number = Number.parseInt(n, 10), i
  }
  return vg(e, [{
    key: 'encode',
    value() {
      for (var r = this.number, i = ''; !isNaN(r) && r != 0;)
        r % 2 === 0 ? (i = `11100${i}`, r = (r - 2) / 2) : (i = `100${i}`, r = (r - 1) / 2)
      return i = i.slice(0, -2), {
        data: i,
        text: this.text,
      }
    },
  }, {
    key: 'valid',
    value() {
      return this.number >= 3 && this.number <= 131070
    },
  }]), e
}(_g.default))
ur.pharmacode = Og
const lr = {}
Object.defineProperty(lr, '__esModule', {
  value: !0,
})
lr.codabar = void 0
const xg = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Eg = Qe; const Cg = kg(Eg)
function kg(t) {
  return t && t.__esModule ? t : { default: t }
}
function Ag(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Dg(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Rg(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Pg = (function (t) {
  Rg(e, t)
  function e(n, r) {
    Ag(this, e), n.search(/^[0-9\-$:.+/]+$/) === 0 && (n = `A${n}A`)
    const i = Dg(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n.toUpperCase(), r))
    return i.text = i.options.text || i.text.replace(/[A-D]/g, ''), i
  }
  return xg(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^[A-D][0-9\-$:.+/]+[A-D]$/) !== -1
    },
  }, {
    key: 'encode',
    value() {
      for (var r = [], i = this.getEncodings(), o = 0; o < this.data.length; o++)
        r.push(i[this.data.charAt(o)]), o !== this.data.length - 1 && r.push('0')
      return {
        text: this.text,
        data: r.join(''),
      }
    },
  }, {
    key: 'getEncodings',
    value() {
      return {
        '0': '101010011',
        '1': '101011001',
        '2': '101001011',
        '3': '110010101',
        '4': '101101001',
        '5': '110101001',
        '6': '100101011',
        '7': '100101101',
        '8': '100110101',
        '9': '110100101',
        '-': '101001101',
        '$': '101100101',
        ':': '1101011011',
        '/': '1101101011',
        '.': '1101101101',
        '+': '1011011011',
        'A': '1011001001',
        'B': '1001001011',
        'C': '1010010011',
        'D': '1010011001',
      }
    },
  }]), e
}(Cg.default))
lr.codabar = Pg
const cr = {}
Object.defineProperty(cr, '__esModule', {
  value: !0,
})
cr.GenericBarcode = void 0
const Mg = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Tg = Qe; const jg = Fg(Tg)
function Fg(t) {
  return t && t.__esModule ? t : { default: t }
}
function Vg(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Ig(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Lg(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Bg = (function (t) {
  Lg(e, t)
  function e(n, r) {
    return Vg(this, e), Ig(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return Mg(e, [{
    key: 'encode',
    value() {
      return {
        data: '10101010101010101010101010101010101010101',
        text: this.text,
      }
    },
  }, {
    key: 'valid',
    value() {
      return !0
    },
  }]), e
}(jg.default))
cr.GenericBarcode = Bg
Object.defineProperty(si, '__esModule', {
  value: !0,
})
const Ng = ir; const jn = vt; const Yt = Ze; const ko = Qt; const hn = ot; const zg = ur; const Ug = lr; const qg = cr
si.default = {
  CODE39: Ng.CODE39,
  CODE128: jn.CODE128,
  CODE128A: jn.CODE128A,
  CODE128B: jn.CODE128B,
  CODE128C: jn.CODE128C,
  EAN13: Yt.EAN13,
  EAN8: Yt.EAN8,
  EAN5: Yt.EAN5,
  EAN2: Yt.EAN2,
  UPC: Yt.UPC,
  UPCE: Yt.UPCE,
  ITF14: ko.ITF14,
  ITF: ko.ITF,
  MSI: hn.MSI,
  MSI10: hn.MSI10,
  MSI11: hn.MSI11,
  MSI1010: hn.MSI1010,
  MSI1110: hn.MSI1110,
  pharmacode: zg.pharmacode,
  codabar: Ug.codabar,
  GenericBarcode: qg.GenericBarcode,
}
const nn = {}
Object.defineProperty(nn, '__esModule', {
  value: !0,
})
const Hg = Object.assign || function (t) {
  for (let e = 1; e < arguments.length; e++) {
    const n = arguments[e]
    for (const r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
  }
  return t
}
nn.default = function (t, e) {
  return Hg({}, t, e)
}
const Oi = {}
Object.defineProperty(Oi, '__esModule', {
  value: !0,
})
Oi.default = Gg
function Gg(t) {
  const e = []
  function n(r) {
    if (Array.isArray(r)) {
      for (let i = 0; i < r.length; i++)
        n(r[i])
    } else {
      r.text = r.text || '', r.data = r.data || '', e.push(r)
    }
  }
  return n(t), e
}
const xi = {}
Object.defineProperty(xi, '__esModule', {
  value: !0,
})
xi.default = Yg
function Yg(t) {
  return t.marginTop = t.marginTop || t.margin, t.marginBottom = t.marginBottom || t.margin, t.marginRight = t.marginRight || t.margin, t.marginLeft = t.marginLeft || t.margin, t
}
const Ei = {}; const Ci = {}; const fr = {}
Object.defineProperty(fr, '__esModule', {
  value: !0,
})
fr.default = Wg
function Wg(t) {
  const e = ['width', 'height', 'textMargin', 'fontSize', 'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight']
  for (let n in e)
    e.hasOwnProperty(n) && (n = e[n], typeof t[n] == 'string' && (t[n] = Number.parseInt(t[n], 10)))
  return typeof t.displayValue == 'string' && (t.displayValue = t.displayValue != 'false'), t
}
const dr = {}
Object.defineProperty(dr, '__esModule', {
  value: !0,
})
const Xg = {
  width: 2,
  height: 100,
  format: 'auto',
  displayValue: !0,
  fontOptions: '',
  font: 'monospace',
  text: void 0,
  textAlign: 'center',
  textPosition: 'bottom',
  textMargin: 2,
  fontSize: 20,
  background: '#ffffff',
  lineColor: '#000000',
  margin: 10,
  marginTop: void 0,
  marginBottom: void 0,
  marginLeft: void 0,
  marginRight: void 0,
  valid() {
  },
}
dr.default = Xg
Object.defineProperty(Ci, '__esModule', {
  value: !0,
})
const Kg = fr; const Jg = Ba(Kg); const Zg = dr; const Ao = Ba(Zg)
function Ba(t) {
  return t && t.__esModule ? t : { default: t }
}
function Qg(t) {
  let e = {}
  for (const n in Ao.default)
    Ao.default.hasOwnProperty(n) && (t.hasAttribute(`jsbarcode-${n.toLowerCase()}`) && (e[n] = t.getAttribute(`jsbarcode-${n.toLowerCase()}`)), t.hasAttribute(`data-${n.toLowerCase()}`) && (e[n] = t.getAttribute(`data-${n.toLowerCase()}`)))
  return e.value = t.getAttribute('jsbarcode-value') || t.getAttribute('data-value'), e = (0, Jg.default)(e), e
}
Ci.default = Qg
const ki = {}; const Ai = {}; const tt = {}
Object.defineProperty(tt, '__esModule', {
  value: !0,
})
tt.getTotalWidthOfEncodings = tt.calculateEncodingAttributes = tt.getBarcodePadding = tt.getEncodingHeight = tt.getMaximumHeightOfEncodings = void 0
const e0 = nn; const t0 = n0(e0)
function n0(t) {
  return t && t.__esModule ? t : { default: t }
}
function Na(t, e) {
  return e.height + (e.displayValue && t.text.length > 0 ? e.fontSize + e.textMargin : 0) + e.marginTop + e.marginBottom
}
function za(t, e, n) {
  if (n.displayValue && e < t) {
    if (n.textAlign == 'center')
      return Math.floor((t - e) / 2)
    if (n.textAlign == 'left')
      return 0
    if (n.textAlign == 'right')
      return Math.floor(t - e)
  }
  return 0
}
function r0(t, e, n) {
  for (let r = 0; r < t.length; r++) {
    const i = t[r]; const o = (0, t0.default)(e, i.options); var a
    o.displayValue ? a = a0(i.text, o, n) : a = 0
    const s = i.data.length * o.width
    i.width = Math.ceil(Math.max(a, s)), i.height = Na(i, o), i.barcodePadding = za(a, s, o)
  }
}
function i0(t) {
  for (var e = 0, n = 0; n < t.length; n++)
    e += t[n].width
  return e
}
function o0(t) {
  for (var e = 0, n = 0; n < t.length; n++)
    t[n].height > e && (e = t[n].height)
  return e
}
function a0(t, e, n) {
  let r
  if (n)
    r = n
  else if (typeof document < 'u')
    r = document.createElement('canvas').getContext('2d')
  else
    return 0
  r.font = `${e.fontOptions} ${e.fontSize}px ${e.font}`
  const i = r.measureText(t)
  if (!i)
    return 0
  const o = i.width
  return o
}
tt.getMaximumHeightOfEncodings = o0
tt.getEncodingHeight = Na
tt.getBarcodePadding = za
tt.calculateEncodingAttributes = r0
tt.getTotalWidthOfEncodings = i0
Object.defineProperty(Ai, '__esModule', {
  value: !0,
})
const s0 = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const u0 = nn; const l0 = c0(u0); const Sr = tt
function c0(t) {
  return t && t.__esModule ? t : { default: t }
}
function f0(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
const d0 = (function () {
  function t(e, n, r) {
    f0(this, t), this.canvas = e, this.encodings = n, this.options = r
  }
  return s0(t, [{
    key: 'render',
    value() {
      if (!this.canvas.getContext)
        throw new Error('The browser does not support canvas.')
      this.prepareCanvas()
      for (let n = 0; n < this.encodings.length; n++) {
        const r = (0, l0.default)(this.options, this.encodings[n].options)
        this.drawCanvasBarcode(r, this.encodings[n]), this.drawCanvasText(r, this.encodings[n]), this.moveCanvasDrawing(this.encodings[n])
      }
      this.restoreCanvas()
    },
  }, {
    key: 'prepareCanvas',
    value() {
      const n = this.canvas.getContext('2d')
      n.save(), (0, Sr.calculateEncodingAttributes)(this.encodings, this.options, n)
      const r = (0, Sr.getTotalWidthOfEncodings)(this.encodings); const i = (0, Sr.getMaximumHeightOfEncodings)(this.encodings)
      this.canvas.width = r + this.options.marginLeft + this.options.marginRight, this.canvas.height = i, n.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (n.fillStyle = this.options.background, n.fillRect(0, 0, this.canvas.width, this.canvas.height)), n.translate(this.options.marginLeft, 0)
    },
  }, {
    key: 'drawCanvasBarcode',
    value(n, r) {
      const i = this.canvas.getContext('2d'); const o = r.data; let a
      n.textPosition == 'top' ? a = n.marginTop + n.fontSize + n.textMargin : a = n.marginTop, i.fillStyle = n.lineColor
      for (let s = 0; s < o.length; s++) {
        const u = s * n.width + r.barcodePadding
        o[s] === '1' ? i.fillRect(u, a, n.width, n.height) : o[s] && i.fillRect(u, a, n.width, n.height * o[s])
      }
    },
  }, {
    key: 'drawCanvasText',
    value(n, r) {
      const i = this.canvas.getContext('2d'); const o = `${n.fontOptions} ${n.fontSize}px ${n.font}`
      if (n.displayValue) {
        let a, s
        n.textPosition == 'top' ? s = n.marginTop + n.fontSize - n.textMargin : s = n.height + n.textMargin + n.marginTop + n.fontSize, i.font = o, n.textAlign == 'left' || r.barcodePadding > 0 ? (a = 0, i.textAlign = 'left') : n.textAlign == 'right' ? (a = r.width - 1, i.textAlign = 'right') : (a = r.width / 2, i.textAlign = 'center'), i.fillText(r.text, a, s)
      }
    },
  }, {
    key: 'moveCanvasDrawing',
    value(n) {
      const r = this.canvas.getContext('2d')
      r.translate(n.width, 0)
    },
  }, {
    key: 'restoreCanvas',
    value() {
      const n = this.canvas.getContext('2d')
      n.restore()
    },
  }]), t
}())
Ai.default = d0
const Di = {}
Object.defineProperty(Di, '__esModule', {
  value: !0,
})
const h0 = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const p0 = nn; const m0 = g0(p0); const Or = tt
function g0(t) {
  return t && t.__esModule ? t : { default: t }
}
function v0(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
const Fn = 'http://www.w3.org/2000/svg'; const y0 = (function () {
  function t(e, n, r) {
    v0(this, t), this.svg = e, this.encodings = n, this.options = r, this.document = r.xmlDocument || document
  }
  return h0(t, [{
    key: 'render',
    value() {
      let n = this.options.marginLeft
      this.prepareSVG()
      for (let r = 0; r < this.encodings.length; r++) {
        const i = this.encodings[r]; const o = (0, m0.default)(this.options, i.options); const a = this.createGroup(n, o.marginTop, this.svg)
        this.setGroupOptions(a, o), this.drawSvgBarcode(a, o, i), this.drawSVGText(a, o, i), n += i.width
      }
    },
  }, {
    key: 'prepareSVG',
    value() {
      for (; this.svg.firstChild;)
        this.svg.removeChild(this.svg.firstChild);
      (0, Or.calculateEncodingAttributes)(this.encodings, this.options)
      const n = (0, Or.getTotalWidthOfEncodings)(this.encodings); const r = (0, Or.getMaximumHeightOfEncodings)(this.encodings); const i = n + this.options.marginLeft + this.options.marginRight
      this.setSvgAttributes(i, r), this.options.background && this.drawRect(0, 0, i, r, this.svg).setAttribute('style', `fill:${this.options.background};`)
    },
  }, {
    key: 'drawSvgBarcode',
    value(n, r, i) {
      const o = i.data; let a
      r.textPosition == 'top' ? a = r.fontSize + r.textMargin : a = 0
      for (var s = 0, u = 0, c = 0; c < o.length; c++)
        u = c * r.width + i.barcodePadding, o[c] === '1' ? s++ : s > 0 && (this.drawRect(u - r.width * s, a, r.width * s, r.height, n), s = 0)
      s > 0 && this.drawRect(u - r.width * (s - 1), a, r.width * s, r.height, n)
    },
  }, {
    key: 'drawSVGText',
    value(n, r, i) {
      const o = this.document.createElementNS(Fn, 'text')
      if (r.displayValue) {
        let a, s
        o.setAttribute('style', `font:${r.fontOptions} ${r.fontSize}px ${r.font}`), r.textPosition == 'top' ? s = r.fontSize - r.textMargin : s = r.height + r.textMargin + r.fontSize, r.textAlign == 'left' || i.barcodePadding > 0 ? (a = 0, o.setAttribute('text-anchor', 'start')) : r.textAlign == 'right' ? (a = i.width - 1, o.setAttribute('text-anchor', 'end')) : (a = i.width / 2, o.setAttribute('text-anchor', 'middle')), o.setAttribute('x', a), o.setAttribute('y', s), o.appendChild(this.document.createTextNode(i.text)), n.appendChild(o)
      }
    },
  }, {
    key: 'setSvgAttributes',
    value(n, r) {
      const i = this.svg
      i.setAttribute('width', `${n}px`), i.setAttribute('height', `${r}px`), i.setAttribute('x', '0px'), i.setAttribute('y', '0px'), i.setAttribute('viewBox', `0 0 ${n} ${r}`), i.setAttribute('xmlns', Fn), i.setAttribute('version', '1.1'), i.setAttribute('style', 'transform: translate(0,0)')
    },
  }, {
    key: 'createGroup',
    value(n, r, i) {
      const o = this.document.createElementNS(Fn, 'g')
      return o.setAttribute('transform', `translate(${n}, ${r})`), i.appendChild(o), o
    },
  }, {
    key: 'setGroupOptions',
    value(n, r) {
      n.setAttribute('style', `fill:${r.lineColor};`)
    },
  }, {
    key: 'drawRect',
    value(n, r, i, o, a) {
      const s = this.document.createElementNS(Fn, 'rect')
      return s.setAttribute('x', n), s.setAttribute('y', r), s.setAttribute('width', i), s.setAttribute('height', o), a.appendChild(s), s
    },
  }]), t
}())
Di.default = y0
const Ri = {}
Object.defineProperty(Ri, '__esModule', {
  value: !0,
})
const _0 = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}())
function b0(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
const w0 = (function () {
  function t(e, n, r) {
    b0(this, t), this.object = e, this.encodings = n, this.options = r
  }
  return _0(t, [{
    key: 'render',
    value() {
      this.object.encodings = this.encodings
    },
  }]), t
}())
Ri.default = w0
Object.defineProperty(ki, '__esModule', {
  value: !0,
})
const $0 = Ai; const S0 = Pi($0); const O0 = Di; const x0 = Pi(O0); const E0 = Ri; const C0 = Pi(E0)
function Pi(t) {
  return t && t.__esModule ? t : { default: t }
}
ki.default = { CanvasRenderer: S0.default, SVGRenderer: x0.default, ObjectRenderer: C0.default }
const rn = {}
Object.defineProperty(rn, '__esModule', {
  value: !0,
})
function Mi(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Ti(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function ji(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const k0 = (function (t) {
  ji(e, t)
  function e(n, r) {
    Mi(this, e)
    const i = Ti(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
    return i.name = 'InvalidInputException', i.symbology = n, i.input = r, i.message = `"${i.input}" is not a valid input for ${i.symbology}`, i
  }
  return e
}(Error)); const A0 = (function (t) {
  ji(e, t)
  function e() {
    Mi(this, e)
    const n = Ti(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
    return n.name = 'InvalidElementException', n.message = 'Not supported type to render on', n
  }
  return e
}(Error)); const D0 = (function (t) {
  ji(e, t)
  function e() {
    Mi(this, e)
    const n = Ti(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
    return n.name = 'NoElementException', n.message = 'No element to render on.', n
  }
  return e
}(Error))
rn.InvalidInputException = k0
rn.InvalidElementException = A0
rn.NoElementException = D0
Object.defineProperty(Ei, '__esModule', {
  value: !0,
})
const R0 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
  ? function (t) {
    return typeof t
  }
  : function (t) {
    return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
  }; const P0 = Ci; const Nr = Ua(P0); const M0 = ki; const pn = Ua(M0); const T0 = rn
function Ua(t) {
  return t && t.__esModule ? t : { default: t }
}
function Fi(t) {
  if (typeof t == 'string')
    return j0(t)
  if (Array.isArray(t)) {
    for (var e = [], n = 0; n < t.length; n++)
      e.push(Fi(t[n]))
    return e
  } else {
    if (typeof HTMLCanvasElement < 'u' && t instanceof HTMLImageElement)
      return F0(t)
    if (t && t.nodeName && t.nodeName.toLowerCase() === 'svg' || typeof SVGElement < 'u' && t instanceof SVGElement) {
      return {
        element: t,
        options: (0, Nr.default)(t),
        renderer: pn.default.SVGRenderer,
      }
    }
    if (typeof HTMLCanvasElement < 'u' && t instanceof HTMLCanvasElement) {
      return {
        element: t,
        options: (0, Nr.default)(t),
        renderer: pn.default.CanvasRenderer,
      }
    }
    if (t && t.getContext) {
      return {
        element: t,
        renderer: pn.default.CanvasRenderer,
      }
    }
    if (t && (typeof t > 'u' ? 'undefined' : R0(t)) === 'object' && !t.nodeName) {
      return {
        element: t,
        renderer: pn.default.ObjectRenderer,
      }
    }
    throw new T0.InvalidElementException()
  }
}
function j0(t) {
  const e = document.querySelectorAll(t)
  if (e.length !== 0) {
    for (var n = [], r = 0; r < e.length; r++)
      n.push(Fi(e[r]))
    return n
  }
}
function F0(t) {
  const e = document.createElement('canvas')
  return {
    element: e,
    options: (0, Nr.default)(t),
    renderer: pn.default.CanvasRenderer,
    afterRender() {
      t.setAttribute('src', e.toDataURL())
    },
  }
}
Ei.default = Fi
const Vi = {}
Object.defineProperty(Vi, '__esModule', {
  value: !0,
})
const V0 = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}())
function I0(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
const L0 = (function () {
  function t(e) {
    I0(this, t), this.api = e
  }
  return V0(t, [{
    key: 'handleCatch',
    value(n) {
      if (n.name === 'InvalidInputException') {
        if (this.api._options.valid !== this.api._defaults.valid)
          this.api._options.valid(!1)
        else
          throw n.message
      } else {
        throw n
      }
      this.api.render = function () {
      }
    },
  }, {
    key: 'wrapBarcodeCall',
    value(n) {
      try {
        const r = n.apply(void 0, arguments)
        return this.api._options.valid(!0), r
      } catch (i) {
        return this.handleCatch(i), this.api
      }
    },
  }]), t
}())
Vi.default = L0
const B0 = si; const jt = Rt(B0); const N0 = nn; const Cn = Rt(N0); const z0 = Oi; const qa = Rt(z0); const U0 = xi; const Do = Rt(U0); const q0 = Ei; const H0 = Rt(q0); const G0 = fr; const Y0 = Rt(G0); const W0 = Vi; const X0 = Rt(W0); const Ha = rn; const K0 = dr; const Ga = Rt(K0)
function Rt(t) {
  return t && t.__esModule ? t : { default: t }
}
function xt() {
} function hr(e, n, r) {
  const i = new xt()
  if (typeof e > 'u')
    throw new Error('No element to render on was provided.')
  return i._renderProperties = (0, H0.default)(e), i._encodings = [], i._options = Ga.default, i._errorHandler = new X0.default(i), typeof n < 'u' && (r = r || {}, r.format || (r.format = Wa()), i.options(r)[r.format](n, r).render()), i
}
hr.getModule = function (t) {
  return jt.default[t]
}
for (const Ro in jt.default)
  jt.default.hasOwnProperty(Ro) && J0(jt.default, Ro)
function J0(t, e) {
  xt.prototype[e] = xt.prototype[e.toUpperCase()] = xt.prototype[e.toLowerCase()] = function (n, r) {
    const i = this
    return i._errorHandler.wrapBarcodeCall(() => {
      r.text = typeof r.text > 'u' ? void 0 : `${r.text}`
      let o = (0, Cn.default)(i._options, r)
      o = (0, Y0.default)(o)
      const a = t[e]; const s = Ya(n, a, o)
      return i._encodings.push(s), i
    })
  }
}
function Ya(t, e, n) {
  t = `${t}`
  const r = new e(t, n)
  if (!r.valid())
    throw new Ha.InvalidInputException(r.constructor.name, t)
  let i = r.encode()
  i = (0, qa.default)(i)
  for (let o = 0; o < i.length; o++)
    i[o].options = (0, Cn.default)(n, i[o].options)
  return i
}
function Wa() {
  return jt.default.CODE128 ? 'CODE128' : Object.keys(jt.default)[0]
}
xt.prototype.options = function (t) {
  return this._options = (0, Cn.default)(this._options, t), this
}
xt.prototype.blank = function (t) {
  const e = new Array(t + 1).join('0')
  return this._encodings.push({ data: e }), this
}
xt.prototype.init = function () {
  if (this._renderProperties) {
    Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties])
    let t
    for (const e in this._renderProperties) {
      t = this._renderProperties[e]
      var n = (0, Cn.default)(this._options, t.options)
      n.format == 'auto' && (n.format = Wa()), this._errorHandler.wrapBarcodeCall(() => {
        const r = n.value; const i = jt.default[n.format.toUpperCase()]; const o = Ya(r, i, n)
        zr(t, o, n)
      })
    }
  }
}
xt.prototype.render = function () {
  if (!this._renderProperties)
    throw new Ha.NoElementException()
  if (Array.isArray(this._renderProperties)) {
    for (let t = 0; t < this._renderProperties.length; t++)
      zr(this._renderProperties[t], this._encodings, this._options)
  } else {
    zr(this._renderProperties, this._encodings, this._options)
  }
  return this
}
xt.prototype._defaults = Ga.default
function zr(t, e, n) {
  e = (0, qa.default)(e)
  for (let r = 0; r < e.length; r++)
    e[r].options = (0, Cn.default)(n, e[r].options), (0, Do.default)(e[r].options);
  (0, Do.default)(n)
  const i = t.renderer; const o = new i(t.element, e, n)
  o.render(), t.afterRender && t.afterRender()
}
typeof window < 'u' && (window.JsBarcode = hr)
typeof jQuery < 'u' && (jQuery.fn.JsBarcode = function (t, e) {
  const n = []
  return jQuery(this).each(function () {
    n.push(this)
  }), hr(n, t, e)
})
const Z0 = hr
const Q0 = he({
  name: 'BarCodeBox',
  data() {
    return {}
  },
  props: {
    value: String,
    format: String,
    displayValue: {
      type: Boolean,
      default: !0,
    },
    fontSize: Number,
    textPosition: String,
    textAlign: String,
    textMargin: Number,
    width: {
      type: Number,
      default: 2,
    },
    height: {
      type: Number,
      default: 50,
    },
    background: String,
    lineColor: String,
  },
  methods: {},
  computed: {},
  components: {},
  watch: {
    $props: {
      handler() {
        const t = this.value; const e = {}
        Object.keys(this.$props).forEach((n) => {
          this.$props[n] != null && this.$props[n] !== '' && (e[n] = this.$props[n])
        }), delete e.value, delete e.formCreateInject, this.$nextTick(() => {
          Z0(this.$refs.bar, t || '', e)
        })
      },
      deep: !0,
      immediate: !0,
    },
  },
}); const ev = {
  class: '_fc-barcode',
  ref: 'bar',
}
function tv(t, e, n, r, i, o) {
  return te(), de('img', ev, null, 512)
}
const nv = /* @__PURE__ */ De(Q0, [['render', tv]])
const rv = he({
  name: 'VideoBox',
  emits: ['pause', 'play', 'ended', 'error'],
  data() {
    return {
      player: null,
    }
  },
  props: {
    src: String,
    type: String,
    controls: {
      type: Boolean,
      default: !0,
    },
    autoplay: Boolean,
    isLive: Boolean,
    withCredentials: Boolean,
    loop: Boolean,
  },
  watch: {
    src: {
      handler() {
        this.$nextTick(() => {
          Ot.loadDepend('mpegts').then(() => {
            const t = this.$refs.video; const e = window.mpegts.createPlayer({
              isLive: this.isLive,
              type: this.type,
              url: this.src,
            })
            e.attachMediaElement(t), e.on('error', (n) => {
              this.$emit('error', n)
            }), e.load(), this.autoplay && e.play().catch((n) => {
              this.$emit('error', n)
            }), this.player = e
          })
        })
      },
      immediate: !0,
    },
  },
}); const iv = ['controls', 'loop']
function ov(t, e, n, r, i, o) {
  return te(), de('video', {
    ref: 'video',
    class: '_fc-video-box',
    controls: t.controls,
    loop: t.loop,
    onPause: e[0] || (e[0] = a => t.$emit('pause', a)),
    onPlay: e[1] || (e[1] = a => t.$emit('play', a)),
    onEnded: e[2] || (e[2] = a => t.$emit('ended', a)),
  }, null, 40, iv)
}
const av = /* @__PURE__ */ De(rv, [['render', ov]])
const Xa = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r()
  })($n, () => (() => {
    const n = { 873: (a, s) => {
      let u; let c; const l = (function () {
        const p = function (k, S) {
          let _ = k; const d = F[S]; let f = null; let g = 0; let y = null; const v = []; const E = {}; const T = function (b, x) {
            f = (function (O) {
              for (var P = new Array(O), j = 0; j < O; j += 1) {
                P[j] = new Array(O)
                for (let K = 0; K < O; K += 1)
                  P[j][K] = null
              }
              return P
            }(g = 4 * _ + 17)), M(0, 0), M(g - 7, 0), M(0, g - 7), B(), U(), z(b, x), _ >= 7 && N(b), y == null && (y = C(_, d, v)), D(y, x)
          }; var M = function (b, x) {
            for (let O = -1; O <= 7; O += 1) {
              if (!(b + O <= -1 || g <= b + O)) {
                for (let P = -1; P <= 7; P += 1)
                  x + P <= -1 || g <= x + P || (f[b + O][x + P] = O >= 0 && O <= 6 && (P == 0 || P == 6) || P >= 0 && P <= 6 && (O == 0 || O == 6) || O >= 2 && O <= 4 && P >= 2 && P <= 4)
              }
            }
          }; var U = function () {
            for (let b = 8; b < g - 8; b += 1)
              f[b][6] == null && (f[b][6] = b % 2 == 0)
            for (let x = 8; x < g - 8; x += 1)
              f[6][x] == null && (f[6][x] = x % 2 == 0)
          }; var B = function () {
            for (let b = I.getPatternPosition(_), x = 0; x < b.length; x += 1) {
              for (let O = 0; O < b.length; O += 1) {
                const P = b[x]; const j = b[O]
                if (f[P][j] == null) {
                  for (let K = -2; K <= 2; K += 1) {
                    for (let J = -2; J <= 2; J += 1)
                      f[P + K][j + J] = K == -2 || K == 2 || J == -2 || J == 2 || K == 0 && J == 0
                  }
                }
              }
            }
          }; var N = function (b) {
            for (var x = I.getBCHTypeNumber(_), O = 0; O < 18; O += 1) {
              var P = !b && (x >> O & 1) == 1
              f[Math.floor(O / 3)][O % 3 + g - 8 - 3] = P
            }
            for (O = 0; O < 18; O += 1)
              P = !b && (x >> O & 1) == 1, f[O % 3 + g - 8 - 3][Math.floor(O / 3)] = P
          }; var z = function (b, x) {
            for (var O = d << 3 | x, P = I.getBCHTypeInfo(O), j = 0; j < 15; j += 1) {
              var K = !b && (P >> j & 1) == 1
              j < 6 ? f[j][8] = K : j < 8 ? f[j + 1][8] = K : f[g - 15 + j][8] = K
            }
            for (j = 0; j < 15; j += 1)
              K = !b && (P >> j & 1) == 1, j < 8 ? f[8][g - j - 1] = K : j < 9 ? f[8][15 - j - 1 + 1] = K : f[8][15 - j - 1] = K
            f[g - 8][8] = !b
          }; var D = function (b, x) {
            for (let O = -1, P = g - 1, j = 7, K = 0, J = I.getMaskFunction(x), ae = g - 1; ae > 0; ae -= 2) {
              for (ae == 6 && (ae -= 1); ;) {
                for (let se = 0; se < 2; se += 1) {
                  if (f[P][ae - se] == null) {
                    let le = !1
                    K < b.length && (le = (b[K] >>> j & 1) == 1), J(P, ae - se) && (le = !le), f[P][ae - se] = le, (j -= 1) == -1 && (K += 1, j = 7)
                  }
                }
                if ((P += O) < 0 || g <= P) {
                  P -= O, O = -O
                  break
                }
              }
            }
          }; var C = function (b, x, O) {
            for (var P = ee.getRSBlocks(b, x), j = X(), K = 0; K < O.length; K += 1) {
              const J = O[K]
              j.put(J.getMode(), 4), j.put(J.getLength(), I.getLengthInBits(J.getMode(), b)), J.write(j)
            }
            let ae = 0
            for (K = 0; K < P.length; K += 1)
              ae += P[K].dataCount
            if (j.getLengthInBits() > 8 * ae)
              throw `code length overflow. (${j.getLengthInBits()}>${8 * ae})`
            for (j.getLengthInBits() + 4 <= 8 * ae && j.put(0, 4); j.getLengthInBits() % 8 != 0;)
              j.putBit(!1)
            for (; !(j.getLengthInBits() >= 8 * ae || (j.put(236, 8), j.getLengthInBits() >= 8 * ae));)
              j.put(17, 8)
            return (function (se, le) {
              for (var ge = 0, Ce = 0, we = 0, pe = Array.from({ length: le.length }), ve = Array.from({ length: le.length }), ne = 0; ne < le.length; ne += 1) {
                const Re = le[ne].dataCount; const Ve = le[ne].totalCount - Re
                Ce = Math.max(Ce, Re), we = Math.max(we, Ve), pe[ne] = new Array(Re)
                for (var ue = 0; ue < pe[ne].length; ue += 1)
                  pe[ne][ue] = 255 & se.getBuffer()[ue + ge]
                ge += Re
                const Je = I.getErrorCorrectPolynomial(Ve); const Ge = G(pe[ne], Je.getLength() - 1).mod(Je)
                for (ve[ne] = Array.from({ length: Je.getLength() - 1 }), ue = 0; ue < ve[ne].length; ue += 1) {
                  const qe = ue + Ge.getLength() - ve[ne].length
                  ve[ne][ue] = qe >= 0 ? Ge.getAt(qe) : 0
                }
              }
              let kn = 0
              for (ue = 0; ue < le.length; ue += 1)
                kn += le[ue].totalCount
              const on = new Array(kn); let ft = 0
              for (ue = 0; ue < Ce; ue += 1) {
                for (ne = 0; ne < le.length; ne += 1)
                  ue < pe[ne].length && (on[ft] = pe[ne][ue], ft += 1)
              }
              for (ue = 0; ue < we; ue += 1) {
                for (ne = 0; ne < le.length; ne += 1)
                  ue < ve[ne].length && (on[ft] = ve[ne][ue], ft += 1)
              }
              return on
            }(j, P))
          }
          E.addData = function (b, x) {
            let O = null
            switch (x = x || 'Byte') {
              case 'Numeric':
                O = re(b)
                break
              case 'Alphanumeric':
                O = Y(b)
                break
              case 'Byte':
                O = oe(b)
                break
              case 'Kanji':
                O = W(b)
                break
              default:
                throw `mode:${x}`
            }
            v.push(O), y = null
          }, E.isDark = function (b, x) {
            if (b < 0 || g <= b || x < 0 || g <= x)
              throw `${b},${x}`
            return f[b][x]
          }, E.getModuleCount = function () {
            return g
          }, E.make = function () {
            if (_ < 1) {
              for (var b = 1; b < 40; b++) {
                for (var x = ee.getRSBlocks(b, d), O = X(), P = 0; P < v.length; P++) {
                  const j = v[P]
                  O.put(j.getMode(), 4), O.put(j.getLength(), I.getLengthInBits(j.getMode(), b)), j.write(O)
                }
                let K = 0
                for (P = 0; P < x.length; P++)
                  K += x[P].dataCount
                if (O.getLengthInBits() <= 8 * K)
                  break
              }
              _ = b
            }
            T(!1, (function () {
              for (var J = 0, ae = 0, se = 0; se < 8; se += 1) {
                T(!0, se)
                const le = I.getLostPoint(E);
                (se == 0 || J > le) && (J = le, ae = se)
              }
              return ae
            }()))
          }, E.createTableTag = function (b, x) {
            b = b || 2
            let O = ''
            O += '<table style="', O += ' border-width: 0px; border-style: none;', O += ' border-collapse: collapse;', O += ` padding: 0px; margin: ${x = x === void 0 ? 4 * b : x}px;`, O += '">', O += '<tbody>'
            for (let P = 0; P < E.getModuleCount(); P += 1) {
              O += '<tr>'
              for (let j = 0; j < E.getModuleCount(); j += 1)
                O += '<td style="', O += ' border-width: 0px; border-style: none;', O += ' border-collapse: collapse;', O += ' padding: 0px; margin: 0px;', O += ` width: ${b}px;`, O += ` height: ${b}px;`, O += ' background-color: ', O += E.isDark(P, j) ? '#000000' : '#ffffff', O += ';', O += '"/>'
              O += '</tr>'
            }
            return `${O += '</tbody>'}</table>`
          }, E.createSvgTag = function (b, x, O, P) {
            let j = {}
            typeof arguments[0] == 'object' && (b = (j = arguments[0]).cellSize, x = j.margin, O = j.alt, P = j.title), b = b || 2, x = x === void 0 ? 4 * b : x, (O = typeof O == 'string' ? { text: O } : O || {}).text = O.text || null, O.id = O.text ? O.id || 'qrcode-description' : null, (P = typeof P == 'string' ? { text: P } : P || {}).text = P.text || null, P.id = P.text ? P.id || 'qrcode-title' : null
            let K; let J; let ae; let se; const le = E.getModuleCount() * b + 2 * x; let ge = ''
            for (se = `l${b},0 0,${b} -${b},0 0,-${b}z `, ge += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', ge += j.scalable ? '' : ` width="${le}px" height="${le}px"`, ge += ` viewBox="0 0 ${le} ${le}" `, ge += ' preserveAspectRatio="xMinYMin meet"', ge += P.text || O.text ? ` role="img" aria-labelledby="${R([P.id, O.id].join(' ').trim())}"` : '', ge += '>', ge += P.text ? `<title id="${R(P.id)}">${R(P.text)}</title>` : '', ge += O.text ? `<description id="${R(O.id)}">${R(O.text)}</description>` : '', ge += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', ge += '<path d="', J = 0; J < E.getModuleCount(); J += 1) {
              for (ae = J * b + x, K = 0; K < E.getModuleCount(); K += 1)
                E.isDark(J, K) && (ge += `M${K * b + x},${ae}${se}`)
            }
            return `${ge += '" stroke="transparent" fill="black"/>'}</svg>`
          }, E.createDataURL = function (b, x) {
            b = b || 2, x = x === void 0 ? 4 * b : x
            const O = E.getModuleCount() * b + 2 * x; const P = x; const j = O - x
            return Ue(O, O, (K, J) => {
              if (P <= K && K < j && P <= J && J < j) {
                const ae = Math.floor((K - P) / b); const se = Math.floor((J - P) / b)
                return E.isDark(se, ae) ? 0 : 1
              }
              return 1
            })
          }, E.createImgTag = function (b, x, O) {
            b = b || 2, x = x === void 0 ? 4 * b : x
            const P = E.getModuleCount() * b + 2 * x; let j = ''
            return j += '<img', j += ' src="', j += E.createDataURL(b, x), j += '"', j += ' width="', j += P, j += '"', j += ' height="', j += P, j += '"', O && (j += ' alt="', j += R(O), j += '"'), `${j}/>`
          }
          var R = function (b) {
            for (var x = '', O = 0; O < b.length; O += 1) {
              const P = b.charAt(O)
              switch (P) {
                case '<':
                  x += '&lt;'
                  break
                case '>':
                  x += '&gt;'
                  break
                case '&':
                  x += '&amp;'
                  break
                case '"':
                  x += '&quot;'
                  break
                default:
                  x += P
              }
            }
            return x
          }
          return E.createASCII = function (b, x) {
            if ((b = b || 1) < 2) {
              return (function (pe) {
                pe = pe === void 0 ? 2 : pe
                let ve; let ne; let Re; let Ve; let ue; const Je = 1 * E.getModuleCount() + 2 * pe; const Ge = pe; const qe = Je - pe; const kn = { '\u2588\u2588': '\u2588', '\u2588 ': '\u2580', ' \u2588': '\u2584', '  ': ' ' }; const on = { '\u2588\u2588': '\u2580', '\u2588 ': '\u2580', ' \u2588': ' ', '  ': ' ' }; let ft = ''
                for (ve = 0; ve < Je; ve += 2) {
                  for (Re = Math.floor((ve - Ge) / 1), Ve = Math.floor((ve + 1 - Ge) / 1), ne = 0; ne < Je; ne += 1)
                    ue = '\u2588', Ge <= ne && ne < qe && Ge <= ve && ve < qe && E.isDark(Re, Math.floor((ne - Ge) / 1)) && (ue = ' '), Ge <= ne && ne < qe && Ge <= ve + 1 && ve + 1 < qe && E.isDark(Ve, Math.floor((ne - Ge) / 1)) ? ue += ' ' : ue += '\u2588', ft += pe < 1 && ve + 1 >= qe ? on[ue] : kn[ue]
                  ft += `
`
                }
                return Je % 2 && pe > 0 ? ft.substring(0, ft.length - Je - 1) + new Array(Je + 1).join('\u2580') : ft.substring(0, ft.length - 1)
              }(x))
            }
            b -= 1, x = x === void 0 ? 2 * b : x
            let O; let P; let j; let K; const J = E.getModuleCount() * b + 2 * x; const ae = x; const se = J - x; const le = new Array(b + 1).join('\u2588\u2588'); const ge = new Array(b + 1).join('  '); let Ce = ''; let we = ''
            for (O = 0; O < J; O += 1) {
              for (j = Math.floor((O - ae) / b), we = '', P = 0; P < J; P += 1)
                K = 1, ae <= P && P < se && ae <= O && O < se && E.isDark(j, Math.floor((P - ae) / b)) && (K = 0), we += K ? le : ge
              for (j = 0; j < b; j += 1) {
                Ce += `${we}
`
              }
            }
            return Ce.substring(0, Ce.length - 1)
          }, E.renderTo2dContext = function (b, x) {
            x = x || 2
            for (let O = E.getModuleCount(), P = 0; P < O; P++) {
              for (let j = 0; j < O; j++)
                b.fillStyle = E.isDark(P, j) ? 'black' : 'white', b.fillRect(P * x, j * x, x, x)
            }
          }, E
        }
        p.stringToBytes = (p.stringToBytesFuncs = { default(k) {
          for (var S = [], _ = 0; _ < k.length; _ += 1) {
            const d = k.charCodeAt(_)
            S.push(255 & d)
          }
          return S
        } }).default, p.createStringToBytes = function (k, S) {
          const _ = (function () {
            for (var f = _e(k), g = function () {
                const U = f.read()
                if (U == -1)
                  throw 'eof'
                return U
              }, y = 0, v = {}; ;) {
              const E = f.read()
              if (E == -1)
                break
              const T = g(); const M = g() << 8 | g()
              v[String.fromCharCode(E << 8 | T)] = M, y += 1
            }
            if (y != S)
              throw `${y} != ${S}`
            return v
          }()); const d = '?'.charCodeAt(0)
          return function (f) {
            for (var g = [], y = 0; y < f.length; y += 1) {
              const v = f.charCodeAt(y)
              if (v < 128) {
                g.push(v)
              } else {
                const E = _[f.charAt(y)]
                typeof E == 'number' ? (255 & E) == E ? g.push(E) : (g.push(E >>> 8), g.push(255 & E)) : g.push(d)
              }
            }
            return g
          }
        }
        let h; let m; let w; let $; let A; var F = { L: 1, M: 0, Q: 3, H: 2 }; var I = (h = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], m = 1335, w = 7973, A = function (k) {
          for (var S = 0; k != 0;)
            S += 1, k >>>= 1
          return S
        }, ($ = {}).getBCHTypeInfo = function (k) {
          for (var S = k << 10; A(S) - A(m) >= 0;)
            S ^= m << A(S) - A(m)
          return 21522 ^ (k << 10 | S)
        }, $.getBCHTypeNumber = function (k) {
          for (var S = k << 12; A(S) - A(w) >= 0;)
            S ^= w << A(S) - A(w)
          return k << 12 | S
        }, $.getPatternPosition = function (k) {
          return h[k - 1]
        }, $.getMaskFunction = function (k) {
          switch (k) {
            case 0:
              return function (S, _) {
                return (S + _) % 2 == 0
              }
            case 1:
              return function (S, _) {
                return S % 2 == 0
              }
            case 2:
              return function (S, _) {
                return _ % 3 == 0
              }
            case 3:
              return function (S, _) {
                return (S + _) % 3 == 0
              }
            case 4:
              return function (S, _) {
                return (Math.floor(S / 2) + Math.floor(_ / 3)) % 2 == 0
              }
            case 5:
              return function (S, _) {
                return S * _ % 2 + S * _ % 3 == 0
              }
            case 6:
              return function (S, _) {
                return (S * _ % 2 + S * _ % 3) % 2 == 0
              }
            case 7:
              return function (S, _) {
                return (S * _ % 3 + (S + _) % 2) % 2 == 0
              }
            default:
              throw `bad maskPattern:${k}`
          }
        }, $.getErrorCorrectPolynomial = function (k) {
          for (var S = G([1], 0), _ = 0; _ < k; _ += 1)
            S = S.multiply(G([1, V.gexp(_)], 0))
          return S
        }, $.getLengthInBits = function (k, S) {
          if (S >= 1 && S < 10) {
            switch (k) {
              case 1:
                return 10
              case 2:
                return 9
              case 4:
              case 8:
                return 8
              default:
                throw `mode:${k}`
            }
          } else if (S < 27) {
            switch (k) {
              case 1:
                return 12
              case 2:
                return 11
              case 4:
                return 16
              case 8:
                return 10
              default:
                throw `mode:${k}`
            }
          } else {
            if (!(S < 41))
              throw `type:${S}`
            switch (k) {
              case 1:
                return 14
              case 2:
                return 13
              case 4:
                return 16
              case 8:
                return 12
              default:
                throw `mode:${k}`
            }
          }
        }, $.getLostPoint = function (k) {
          for (var S = k.getModuleCount(), _ = 0, d = 0; d < S; d += 1) {
            for (var f = 0; f < S; f += 1) {
              for (var g = 0, y = k.isDark(d, f), v = -1; v <= 1; v += 1) {
                if (!(d + v < 0 || S <= d + v)) {
                  for (let E = -1; E <= 1; E += 1)
                    f + E < 0 || S <= f + E || v == 0 && E == 0 || y == k.isDark(d + v, f + E) && (g += 1)
                }
              }
              g > 5 && (_ += 3 + g - 5)
            }
          }
          for (d = 0; d < S - 1; d += 1) {
            for (f = 0; f < S - 1; f += 1) {
              let T = 0
              k.isDark(d, f) && (T += 1), k.isDark(d + 1, f) && (T += 1), k.isDark(d, f + 1) && (T += 1), k.isDark(d + 1, f + 1) && (T += 1), T != 0 && T != 4 || (_ += 3)
            }
          }
          for (d = 0; d < S; d += 1) {
            for (f = 0; f < S - 6; f += 1)
              k.isDark(d, f) && !k.isDark(d, f + 1) && k.isDark(d, f + 2) && k.isDark(d, f + 3) && k.isDark(d, f + 4) && !k.isDark(d, f + 5) && k.isDark(d, f + 6) && (_ += 40)
          }
          for (f = 0; f < S; f += 1) {
            for (d = 0; d < S - 6; d += 1)
              k.isDark(d, f) && !k.isDark(d + 1, f) && k.isDark(d + 2, f) && k.isDark(d + 3, f) && k.isDark(d + 4, f) && !k.isDark(d + 5, f) && k.isDark(d + 6, f) && (_ += 40)
          }
          let M = 0
          for (f = 0; f < S; f += 1) {
            for (d = 0; d < S; d += 1)
              k.isDark(d, f) && (M += 1)
          }
          return _ + Math.abs(100 * M / S / S - 50) / 5 * 10
        }, $); var V = (function () {
          for (var k = Array.from({ length: 256 }), S = Array.from({ length: 256 }), _ = 0; _ < 8; _ += 1)
            k[_] = 1 << _
          for (_ = 8; _ < 256; _ += 1)
            k[_] = k[_ - 4] ^ k[_ - 5] ^ k[_ - 6] ^ k[_ - 8]
          for (_ = 0; _ < 255; _ += 1)
            S[k[_]] = _
          return { glog(d) {
            if (d < 1)
              throw `glog(${d})`
            return S[d]
          }, gexp(d) {
            for (; d < 0;)
              d += 255
            for (; d >= 256;)
              d -= 255
            return k[d]
          } }
        }())
        function G(k, S) {
          if (k.length === void 0)
            throw `${k.length}/${S}`
          const _ = (function () {
            for (var f = 0; f < k.length && k[f] == 0;)
              f += 1
            for (var g = new Array(k.length - f + S), y = 0; y < k.length - f; y += 1)
              g[y] = k[y + f]
            return g
          }()); var d = { getAt(f) {
            return _[f]
          }, getLength() {
            return _.length
          }, multiply(f) {
            for (var g = Array.from({ length: d.getLength() + f.getLength() - 1 }), y = 0; y < d.getLength(); y += 1) {
              for (let v = 0; v < f.getLength(); v += 1)
                g[y + v] ^= V.gexp(V.glog(d.getAt(y)) + V.glog(f.getAt(v)))
            }
            return G(g, 0)
          }, mod(f) {
            if (d.getLength() - f.getLength() < 0)
              return d
            for (var g = V.glog(d.getAt(0)) - V.glog(f.getAt(0)), y = new Array(d.getLength()), v = 0; v < d.getLength(); v += 1)
              y[v] = d.getAt(v)
            for (v = 0; v < f.getLength(); v += 1)
              y[v] ^= V.gexp(V.glog(f.getAt(v)) + g)
            return G(y, 0).mod(f)
          } }
          return d
        }
        var ee = (function () {
          const k = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]]; const S = function (d, f) {
            const g = {}
            return g.totalCount = d, g.dataCount = f, g
          }; const _ = { getRSBlocks(d, f) {
            const g = (function (N, z) {
              switch (z) {
                case F.L:
                  return k[4 * (N - 1) + 0]
                case F.M:
                  return k[4 * (N - 1) + 1]
                case F.Q:
                  return k[4 * (N - 1) + 2]
                case F.H:
                  return k[4 * (N - 1) + 3]
                default:
                  return
              }
            }(d, f))
            if (g === void 0)
              throw `bad rs block @ typeNumber:${d}/errorCorrectionLevel:${f}`
            for (var y = g.length / 3, v = [], E = 0; E < y; E += 1) {
              for (let T = g[3 * E + 0], M = g[3 * E + 1], U = g[3 * E + 2], B = 0; B < T; B += 1)
                v.push(S(M, U))
            }
            return v
          } }
          return _
        }()); var X = function () {
          const k = []; let S = 0; var _ = { getBuffer() {
            return k
          }, getAt(d) {
            const f = Math.floor(d / 8)
            return (k[f] >>> 7 - d % 8 & 1) == 1
          }, put(d, f) {
            for (let g = 0; g < f; g += 1)
              _.putBit((d >>> f - g - 1 & 1) == 1)
          }, getLengthInBits() {
            return S
          }, putBit(d) {
            const f = Math.floor(S / 8)
            k.length <= f && k.push(0), d && (k[f] |= 128 >>> S % 8), S += 1
          } }
          return _
        }; var re = function (k) {
          const S = k; const _ = { getMode() {
            return 1
          }, getLength(g) {
            return S.length
          }, write(g) {
            for (var y = S, v = 0; v + 2 < y.length;)
              g.put(d(y.substring(v, v + 3)), 10), v += 3
            v < y.length && (y.length - v == 1 ? g.put(d(y.substring(v, v + 1)), 4) : y.length - v == 2 && g.put(d(y.substring(v, v + 2)), 7))
          } }; var d = function (g) {
            for (var y = 0, v = 0; v < g.length; v += 1)
              y = 10 * y + f(g.charAt(v))
            return y
          }; var f = function (g) {
            if (g >= '0' && g <= '9')
              return g.charCodeAt(0) - '0'.charCodeAt(0)
            throw `illegal char :${g}`
          }
          return _
        }; var Y = function (k) {
          const S = k; const _ = { getMode() {
            return 2
          }, getLength(f) {
            return S.length
          }, write(f) {
            for (var g = S, y = 0; y + 1 < g.length;)
              f.put(45 * d(g.charAt(y)) + d(g.charAt(y + 1)), 11), y += 2
            y < g.length && f.put(d(g.charAt(y)), 6)
          } }; var d = function (f) {
            if (f >= '0' && f <= '9')
              return f.charCodeAt(0) - '0'.charCodeAt(0)
            if (f >= 'A' && f <= 'Z')
              return f.charCodeAt(0) - 'A'.charCodeAt(0) + 10
            switch (f) {
              case ' ':
                return 36
              case '$':
                return 37
              case '%':
                return 38
              case '*':
                return 39
              case '+':
                return 40
              case '-':
                return 41
              case '.':
                return 42
              case '/':
                return 43
              case ':':
                return 44
              default:
                throw `illegal char :${f}`
            }
          }
          return _
        }; var oe = function (k) {
          const S = p.stringToBytes(k)
          return { getMode() {
            return 4
          }, getLength(_) {
            return S.length
          }, write(_) {
            for (let d = 0; d < S.length; d += 1)
              _.put(S[d], 8)
          } }
        }; var W = function (k) {
          const S = p.stringToBytesFuncs.SJIS
          if (!S)
            throw 'sjis not supported.';
          (function () {
            const f = S('\u53CB')
            if (f.length != 2 || (f[0] << 8 | f[1]) != 38726)
              throw 'sjis not supported.'
          })()
          const _ = S(k); const d = { getMode() {
            return 8
          }, getLength(f) {
            return ~~(_.length / 2)
          }, write(f) {
            for (var g = _, y = 0; y + 1 < g.length;) {
              let v = (255 & g[y]) << 8 | 255 & g[y + 1]
              if (v >= 33088 && v <= 40956) {
                v -= 33088
              } else {
                if (!(v >= 57408 && v <= 60351))
                  throw `illegal char at ${y + 1}/${v}`
                v -= 49472
              }
              v = 192 * (v >>> 8 & 255) + (255 & v), f.put(v, 13), y += 2
            }
            if (y < g.length)
              throw `illegal char at ${y + 1}`
          } }
          return d
        }; const H = function () {
          const k = []; var S = { writeByte(_) {
            k.push(255 & _)
          }, writeShort(_) {
            S.writeByte(_), S.writeByte(_ >>> 8)
          }, writeBytes(_, d, f) {
            d = d || 0, f = f || _.length
            for (let g = 0; g < f; g += 1)
              S.writeByte(_[g + d])
          }, writeString(_) {
            for (let d = 0; d < _.length; d += 1)
              S.writeByte(_.charCodeAt(d))
          }, toByteArray() {
            return k
          }, toString() {
            let _ = ''
            _ += '['
            for (let d = 0; d < k.length; d += 1)
              d > 0 && (_ += ','), _ += k[d]
            return `${_}]`
          } }
          return S
        }; var _e = function (k) {
          const S = k; let _ = 0; let d = 0; let f = 0; const g = { read() {
            for (; f < 8;) {
              if (_ >= S.length) {
                if (f == 0)
                  return -1
                throw `unexpected end of file./${ f}`
              }
              const v = S.charAt(_)
              if (_ += 1, v == '=')
                return f = 0, -1
              v.match(/^\s$/) || (d = d << 6 | y(v.charCodeAt(0)), f += 6)
            }
            const E = d >>> f - 8 & 255
            return f -= 8, E
          } }; var y = function (v) {
            if (v >= 65 && v <= 90)
              return v - 65
            if (v >= 97 && v <= 122)
              return v - 97 + 26
            if (v >= 48 && v <= 57)
              return v - 48 + 52
            if (v == 43)
              return 62
            if (v == 47)
              return 63
            throw `c:${v}`
          }
          return g
        }; var Ue = function (k, S, _) {
          for (var d = (function (M, U) {
              const B = M; const N = U; const z = new Array(M * U); const D = { setPixel(b, x, O) {
                z[x * B + b] = O
              }, write(b) {
                b.writeString('GIF87a'), b.writeShort(B), b.writeShort(N), b.writeByte(128), b.writeByte(0), b.writeByte(0), b.writeByte(0), b.writeByte(0), b.writeByte(0), b.writeByte(255), b.writeByte(255), b.writeByte(255), b.writeString(','), b.writeShort(0), b.writeShort(0), b.writeShort(B), b.writeShort(N), b.writeByte(0)
                let x = C(2)
                b.writeByte(2)
                for (var O = 0; x.length - O > 255;)
                  b.writeByte(255), b.writeBytes(x, O, 255), O += 255
                b.writeByte(x.length - O), b.writeBytes(x, O, x.length - O), b.writeByte(0), b.writeString(';')
              } }; var C = function (b) {
                for (var x = 1 << b, O = 1 + (1 << b), P = b + 1, j = R(), K = 0; K < x; K += 1)
                  j.add(String.fromCharCode(K))
                j.add(String.fromCharCode(x)), j.add(String.fromCharCode(O))
                let J; let ae; let se; const le = H(); const ge = (J = le, ae = 0, se = 0, { write(ve, ne) {
                  if (ve >>> ne != 0)
                    throw 'length over'
                  for (; ae + ne >= 8;)
                    J.writeByte(255 & (ve << ae | se)), ne -= 8 - ae, ve >>>= 8 - ae, se = 0, ae = 0
                  se |= ve << ae, ae += ne
                }, flush() {
                  ae > 0 && J.writeByte(se)
                } })
                ge.write(x, P)
                let Ce = 0; let we = String.fromCharCode(z[Ce])
                for (Ce += 1; Ce < z.length;) {
                  const pe = String.fromCharCode(z[Ce])
                  Ce += 1, j.contains(we + pe) ? we += pe : (ge.write(j.indexOf(we), P), j.size() < 4095 && (j.size() == 1 << P && (P += 1), j.add(we + pe)), we = pe)
                }
                return ge.write(j.indexOf(we), P), ge.write(O, P), ge.flush(), le.toByteArray()
              }; var R = function () {
                const b = {}; let x = 0; var O = { add(P) {
                  if (O.contains(P))
                    throw `dup key:${P}`
                  b[P] = x, x += 1
                }, size() {
                  return x
                }, indexOf(P) {
                  return b[P]
                }, contains(P) {
                  return b[P] !== void 0
                } }
                return O
              }
              return D
            }(k, S)), f = 0; f < S; f += 1) {
            for (let g = 0; g < k; g += 1)
              d.setPixel(g, f, _(g, f))
          }
          const y = H()
          d.write(y)
          for (var v = (function () {
              let M = 0; let U = 0; let B = 0; let N = ''; const z = {}; const D = function (R) {
                N += String.fromCharCode(C(63 & R))
              }; var C = function (R) {
                if (!(R < 0)) {
                  if (R < 26)
                    return 65 + R
                  if (R < 52)
                    return R - 26 + 97
                  if (R < 62)
                    return R - 52 + 48
                  if (R == 62)
                    return 43
                  if (R == 63)
                    return 47
                }
                throw `n:${R}`
              }
              return z.writeByte = function (R) {
                for (M = M << 8 | 255 & R, U += 8, B += 1; U >= 6;)
                  D(M >>> U - 6), U -= 6
              }, z.flush = function () {
                if (U > 0 && (D(M << 6 - U), M = 0, U = 0), B % 3 != 0) {
                  for (let R = 3 - B % 3, b = 0; b < R; b += 1)
                    N += '='
                }
              }, z.toString = function () {
                return N
              }, z
            }()), E = y.toByteArray(), T = 0; T < E.length; T += 1)
            v.writeByte(E[T])
          return v.flush(), `data:image/gif;base64,${v}`
        }
        return p
      }())
      l.stringToBytesFuncs['UTF-8'] = function (p) {
        return (function (h) {
          for (var m = [], w = 0; w < h.length; w++) {
            let $ = h.charCodeAt(w)
            $ < 128 ? m.push($) : $ < 2048 ? m.push(192 | $ >> 6, 128 | 63 & $) : $ < 55296 || $ >= 57344 ? m.push(224 | $ >> 12, 128 | $ >> 6 & 63, 128 | 63 & $) : (w++, $ = 65536 + ((1023 & $) << 10 | 1023 & h.charCodeAt(w)), m.push(240 | $ >> 18, 128 | $ >> 12 & 63, 128 | $ >> 6 & 63, 128 | 63 & $))
          }
          return m
        }(p))
      }, (c = typeof (u = function () {
        return l
      }) == 'function'
        ? u.apply(s, [])
        : u) === void 0 || (a.exports = c)
    } }; const r = {}
    function i(a) {
      const s = r[a]
      if (s !== void 0)
        return s.exports
      const u = r[a] = { exports: {} }
      return n[a](u, u.exports, i), u.exports
    }
    i.n = (a) => {
      const s = a && a.__esModule ? () => a.default : () => a
      return i.d(s, { a: s }), s
    }, i.d = (a, s) => {
      for (const u in s)
        i.o(s, u) && !i.o(a, u) && Object.defineProperty(a, u, { enumerable: !0, get: s[u] })
    }, i.o = (a, s) => Object.prototype.hasOwnProperty.call(a, s)
    const o = {}
    return (() => {
      i.d(o, { default: () => S })
      const a = _ => !!_ && typeof _ == 'object' && !Array.isArray(_)
      function s(_, ...d) {
        if (!d.length)
          return _
        const f = d.shift()
        return f !== void 0 && a(_) && a(f)
          ? (_ = Object.assign({}, _), Object.keys(f).forEach((g) => {
              const y = _[g]; const v = f[g]
              Array.isArray(y) && Array.isArray(v) ? _[g] = v : a(y) && a(v) ? _[g] = s(Object.assign({}, y), v) : _[g] = v
            }), s(_, ...d))
          : _
      }
      function u(_, d) {
        const f = document.createElement('a')
        f.download = d, f.href = _, document.body.appendChild(f), f.click(), document.body.removeChild(f)
      }
      const c = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 }
      class l {
        constructor({ svg: d, type: f, window: g }) {
          this._svg = d, this._type = f, this._window = g
        }

        draw(d, f, g, y) {
          let v
          switch (this._type) {
            case 'dots':
              v = this._drawDot
              break
            case 'classy':
              v = this._drawClassy
              break
            case 'classy-rounded':
              v = this._drawClassyRounded
              break
            case 'rounded':
              v = this._drawRounded
              break
            case 'extra-rounded':
              v = this._drawExtraRounded
              break
            default:
              v = this._drawSquare
          }
          v.call(this, { x: d, y: f, size: g, getNeighbor: y })
        }

        _rotateFigure({ x: d, y: f, size: g, rotation: y = 0, draw: v }) {
          let E
          const T = d + g / 2; const M = f + g / 2
          v(), (E = this._element) === null || E === void 0 || E.setAttribute('transform', `rotate(${180 * y / Math.PI},${T},${M})`)
        }

        _basicDot(d) {
          const { size: f, x: g, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'circle'), this._element.setAttribute('cx', String(g + f / 2)), this._element.setAttribute('cy', String(y + f / 2)), this._element.setAttribute('r', String(f / 2))
          } }))
        }

        _basicSquare(d) {
          const { size: f, x: g, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'rect'), this._element.setAttribute('x', String(g)), this._element.setAttribute('y', String(y)), this._element.setAttribute('width', String(f)), this._element.setAttribute('height', String(f))
          } }))
        }

        _basicSideRounded(d) {
          const { size: f, x: g, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('d', `M ${g} ${y}v ${f}h ${f / 2}a ${f / 2} ${f / 2}, 0, 0, 0, 0 ${-f}`)
          } }))
        }

        _basicCornerRounded(d) {
          const { size: f, x: g, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('d', `M ${g} ${y}v ${f}h ${f}v ${-f / 2}a ${f / 2} ${f / 2}, 0, 0, 0, ${-f / 2} ${-f / 2}`)
          } }))
        }

        _basicCornerExtraRounded(d) {
          const { size: f, x: g, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('d', `M ${g} ${y}v ${f}h ${f}a ${f} ${f}, 0, 0, 0, ${-f} ${-f}`)
          } }))
        }

        _basicCornersRounded(d) {
          const { size: f, x: g, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('d', `M ${g} ${y}v ${f / 2}a ${f / 2} ${f / 2}, 0, 0, 0, ${f / 2} ${f / 2}h ${f / 2}v ${-f / 2}a ${f / 2} ${f / 2}, 0, 0, 0, ${-f / 2} ${-f / 2}`)
          } }))
        }

        _drawDot({ x: d, y: f, size: g }) {
          this._basicDot({ x: d, y: f, size: g, rotation: 0 })
        }

        _drawSquare({ x: d, y: f, size: g }) {
          this._basicSquare({ x: d, y: f, size: g, rotation: 0 })
        }

        _drawRounded({ x: d, y: f, size: g, getNeighbor: y }) {
          const v = y ? +y(-1, 0) : 0; const E = y ? +y(1, 0) : 0; const T = y ? +y(0, -1) : 0; const M = y ? +y(0, 1) : 0; const U = v + E + T + M
          if (U !== 0) {
            if (U > 2 || v && E || T && M) {
              this._basicSquare({ x: d, y: f, size: g, rotation: 0 })
            } else {
              if (U === 2) {
                let B = 0
                return v && T ? B = Math.PI / 2 : T && E ? B = Math.PI : E && M && (B = -Math.PI / 2), void this._basicCornerRounded({ x: d, y: f, size: g, rotation: B })
              }
              if (U === 1) {
                let B = 0
                return T ? B = Math.PI / 2 : E ? B = Math.PI : M && (B = -Math.PI / 2), void this._basicSideRounded({ x: d, y: f, size: g, rotation: B })
              }
            }
          } else {
            this._basicDot({ x: d, y: f, size: g, rotation: 0 })
          }
        }

        _drawExtraRounded({ x: d, y: f, size: g, getNeighbor: y }) {
          const v = y ? +y(-1, 0) : 0; const E = y ? +y(1, 0) : 0; const T = y ? +y(0, -1) : 0; const M = y ? +y(0, 1) : 0; const U = v + E + T + M
          if (U !== 0) {
            if (U > 2 || v && E || T && M) {
              this._basicSquare({ x: d, y: f, size: g, rotation: 0 })
            } else {
              if (U === 2) {
                let B = 0
                return v && T ? B = Math.PI / 2 : T && E ? B = Math.PI : E && M && (B = -Math.PI / 2), void this._basicCornerExtraRounded({ x: d, y: f, size: g, rotation: B })
              }
              if (U === 1) {
                let B = 0
                return T ? B = Math.PI / 2 : E ? B = Math.PI : M && (B = -Math.PI / 2), void this._basicSideRounded({ x: d, y: f, size: g, rotation: B })
              }
            }
          } else {
            this._basicDot({ x: d, y: f, size: g, rotation: 0 })
          }
        }

        _drawClassy({ x: d, y: f, size: g, getNeighbor: y }) {
          const v = y ? +y(-1, 0) : 0; const E = y ? +y(1, 0) : 0; const T = y ? +y(0, -1) : 0; const M = y ? +y(0, 1) : 0
          v + E + T + M !== 0 ? v || T ? E || M ? this._basicSquare({ x: d, y: f, size: g, rotation: 0 }) : this._basicCornerRounded({ x: d, y: f, size: g, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: d, y: f, size: g, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: d, y: f, size: g, rotation: Math.PI / 2 })
        }

        _drawClassyRounded({ x: d, y: f, size: g, getNeighbor: y }) {
          const v = y ? +y(-1, 0) : 0; const E = y ? +y(1, 0) : 0; const T = y ? +y(0, -1) : 0; const M = y ? +y(0, 1) : 0
          v + E + T + M !== 0 ? v || T ? E || M ? this._basicSquare({ x: d, y: f, size: g, rotation: 0 }) : this._basicCornerExtraRounded({ x: d, y: f, size: g, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: d, y: f, size: g, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: d, y: f, size: g, rotation: Math.PI / 2 })
        }
      }
      const p = { dot: 'dot', square: 'square', extraRounded: 'extra-rounded' }; const h = Object.values(p)
      class m {
        constructor({ svg: d, type: f, window: g }) {
          this._svg = d, this._type = f, this._window = g
        }

        draw(d, f, g, y) {
          let v
          switch (this._type) {
            case p.square:
              v = this._drawSquare
              break
            case p.extraRounded:
              v = this._drawExtraRounded
              break
            default:
              v = this._drawDot
          }
          v.call(this, { x: d, y: f, size: g, rotation: y })
        }

        _rotateFigure({ x: d, y: f, size: g, rotation: y = 0, draw: v }) {
          let E
          const T = d + g / 2; const M = f + g / 2
          v(), (E = this._element) === null || E === void 0 || E.setAttribute('transform', `rotate(${180 * y / Math.PI},${T},${M})`)
        }

        _basicDot(d) {
          const { size: f, x: g, y } = d; const v = f / 7
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('clip-rule', 'evenodd'), this._element.setAttribute('d', `M ${g + f / 2} ${y}a ${f / 2} ${f / 2} 0 1 0 0.1 0zm 0 ${v}a ${f / 2 - v} ${f / 2 - v} 0 1 1 -0.1 0Z`)
          } }))
        }

        _basicSquare(d) {
          const { size: f, x: g, y } = d; const v = f / 7
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('clip-rule', 'evenodd'), this._element.setAttribute('d', `M ${g} ${y}v ${f}h ${f}v ${-f}zM ${g + v} ${y + v}h ${f - 2 * v}v ${f - 2 * v}h ${2 * v - f}z`)
          } }))
        }

        _basicExtraRounded(d) {
          const { size: f, x: g, y } = d; const v = f / 7
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('clip-rule', 'evenodd'), this._element.setAttribute('d', `M ${g} ${y + 2.5 * v}v ${2 * v}a ${2.5 * v} ${2.5 * v}, 0, 0, 0, ${2.5 * v} ${2.5 * v}h ${2 * v}a ${2.5 * v} ${2.5 * v}, 0, 0, 0, ${2.5 * v} ${2.5 * -v}v ${-2 * v}a ${2.5 * v} ${2.5 * v}, 0, 0, 0, ${2.5 * -v} ${2.5 * -v}h ${-2 * v}a ${2.5 * v} ${2.5 * v}, 0, 0, 0, ${2.5 * -v} ${2.5 * v}M ${g + 2.5 * v} ${y + v}h ${2 * v}a ${1.5 * v} ${1.5 * v}, 0, 0, 1, ${1.5 * v} ${1.5 * v}v ${2 * v}a ${1.5 * v} ${1.5 * v}, 0, 0, 1, ${1.5 * -v} ${1.5 * v}h ${-2 * v}a ${1.5 * v} ${1.5 * v}, 0, 0, 1, ${1.5 * -v} ${1.5 * -v}v ${-2 * v}a ${1.5 * v} ${1.5 * v}, 0, 0, 1, ${1.5 * v} ${1.5 * -v}`)
          } }))
        }

        _drawDot({ x: d, y: f, size: g, rotation: y }) {
          this._basicDot({ x: d, y: f, size: g, rotation: y })
        }

        _drawSquare({ x: d, y: f, size: g, rotation: y }) {
          this._basicSquare({ x: d, y: f, size: g, rotation: y })
        }

        _drawExtraRounded({ x: d, y: f, size: g, rotation: y }) {
          this._basicExtraRounded({ x: d, y: f, size: g, rotation: y })
        }
      }
      const w = { dot: 'dot', square: 'square' }; const $ = Object.values(w)
      class A {
        constructor({ svg: d, type: f, window: g }) {
          this._svg = d, this._type = f, this._window = g
        }

        draw(d, f, g, y) {
          let v
          v = this._type === w.square ? this._drawSquare : this._drawDot, v.call(this, { x: d, y: f, size: g, rotation: y })
        }

        _rotateFigure({ x: d, y: f, size: g, rotation: y = 0, draw: v }) {
          let E
          const T = d + g / 2; const M = f + g / 2
          v(), (E = this._element) === null || E === void 0 || E.setAttribute('transform', `rotate(${180 * y / Math.PI},${T},${M})`)
        }

        _basicDot(d) {
          const { size: f, x: g, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'circle'), this._element.setAttribute('cx', String(g + f / 2)), this._element.setAttribute('cy', String(y + f / 2)), this._element.setAttribute('r', String(f / 2))
          } }))
        }

        _basicSquare(d) {
          const { size: f, x: g, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'rect'), this._element.setAttribute('x', String(g)), this._element.setAttribute('y', String(y)), this._element.setAttribute('width', String(f)), this._element.setAttribute('height', String(f))
          } }))
        }

        _drawDot({ x: d, y: f, size: g, rotation: y }) {
          this._basicDot({ x: d, y: f, size: g, rotation: y })
        }

        _drawSquare({ x: d, y: f, size: g, rotation: y }) {
          this._basicSquare({ x: d, y: f, size: g, rotation: y })
        }
      }
      const F = 'circle'; const I = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]]; const V = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]
      class G {
        constructor(d, f) {
          this._roundSize = g => this._options.dotsOptions.roundSize ? Math.floor(g) : g, this._window = f, this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'svg'), this._element.setAttribute('width', String(d.width)), this._element.setAttribute('height', String(d.height)), this._element.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink'), d.dotsOptions.roundSize || this._element.setAttribute('shape-rendering', 'crispEdges'), this._element.setAttribute('viewBox', `0 0 ${d.width} ${d.height}`), this._defs = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'defs'), this._element.appendChild(this._defs), this._imageUri = d.image, this._instanceId = G.instanceCount++, this._options = d
        }

        get width() {
          return this._options.width
        }

        get height() {
          return this._options.height
        }

        getElement() {
          return this._element
        }

        async drawQR(d) {
          const f = d.getModuleCount(); const g = Math.min(this._options.width, this._options.height) - 2 * this._options.margin; const y = this._options.shape === F ? g / Math.sqrt(2) : g; const v = this._roundSize(y / f)
          let E = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 }
          if (this._qr = d, this._options.image) {
            if (await this.loadImage(), !this._image)
              return
            const { imageOptions: T, qrOptions: M } = this._options; const U = T.imageSize * c[M.errorCorrectionLevel]; const B = Math.floor(U * f * f)
            E = (function ({ originalHeight: N, originalWidth: z, maxHiddenDots: D, maxHiddenAxisDots: C, dotSize: R }) {
              const b = { x: 0, y: 0 }; const x = { x: 0, y: 0 }
              if (N <= 0 || z <= 0 || D <= 0 || R <= 0)
                return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 }
              const O = N / z
              return b.x = Math.floor(Math.sqrt(D / O)), b.x <= 0 && (b.x = 1), C && C < b.x && (b.x = C), b.x % 2 == 0 && b.x--, x.x = b.x * R, b.y = 1 + 2 * Math.ceil((b.x * O - 1) / 2), x.y = Math.round(x.x * O), (b.y * b.x > D || C && C < b.y) && (C && C < b.y ? (b.y = C, b.y % 2 == 0 && b.x--) : b.y -= 2, x.y = b.y * R, b.x = 1 + 2 * Math.ceil((b.y / O - 1) / 2), x.x = Math.round(x.y / O)), { height: x.y, width: x.x, hideYDots: b.y, hideXDots: b.x }
            }({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: B, maxHiddenAxisDots: f - 14, dotSize: v }))
          }
          this.drawBackground(), this.drawDots((T, M) => {
            let U, B, N, z, D, C
            return !(this._options.imageOptions.hideBackgroundDots && T >= (f - E.hideYDots) / 2 && T < (f + E.hideYDots) / 2 && M >= (f - E.hideXDots) / 2 && M < (f + E.hideXDots) / 2 || ((U = I[T]) === null || U === void 0 ? void 0 : U[M]) || ((B = I[T - f + 7]) === null || B === void 0 ? void 0 : B[M]) || ((N = I[T]) === null || N === void 0 ? void 0 : N[M - f + 7]) || ((z = V[T]) === null || z === void 0 ? void 0 : z[M]) || ((D = V[T - f + 7]) === null || D === void 0 ? void 0 : D[M]) || ((C = V[T]) === null || C === void 0 ? void 0 : C[M - f + 7]))
          }), this.drawCorners(), this._options.image && await this.drawImage({ width: E.width, height: E.height, count: f, dotSize: v })
        }

        drawBackground() {
          let d, f, g
          const y = this._element; const v = this._options
          if (y) {
            const E = (d = v.backgroundOptions) === null || d === void 0 ? void 0 : d.gradient; const T = (f = v.backgroundOptions) === null || f === void 0 ? void 0 : f.color
            let M = v.height; let U = v.width
            if (E || T) {
              const B = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'rect')
              this._backgroundClipPath = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'clipPath'), this._backgroundClipPath.setAttribute('id', `clip-path-background-color-${this._instanceId}`), this._defs.appendChild(this._backgroundClipPath), !((g = v.backgroundOptions) === null || g === void 0) && g.round && (M = U = Math.min(v.width, v.height), B.setAttribute('rx', String(M / 2 * v.backgroundOptions.round))), B.setAttribute('x', String(this._roundSize((v.width - U) / 2))), B.setAttribute('y', String(this._roundSize((v.height - M) / 2))), B.setAttribute('width', String(U)), B.setAttribute('height', String(M)), this._backgroundClipPath.appendChild(B), this._createColor({ options: E, color: T, additionalRotation: 0, x: 0, y: 0, height: v.height, width: v.width, name: `background-color-${this._instanceId}` })
            }
          }
        }

        drawDots(d) {
          let f, g
          if (!this._qr)
            throw 'QR code is not defined'
          const y = this._options; const v = this._qr.getModuleCount()
          if (v > y.width || v > y.height)
            throw 'The canvas is too small.'
          const E = Math.min(y.width, y.height) - 2 * y.margin; const T = y.shape === F ? E / Math.sqrt(2) : E; const M = this._roundSize(T / v); const U = this._roundSize((y.width - v * M) / 2); const B = this._roundSize((y.height - v * M) / 2); const N = new l({ svg: this._element, type: y.dotsOptions.type, window: this._window })
          this._dotsClipPath = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'clipPath'), this._dotsClipPath.setAttribute('id', `clip-path-dot-color-${this._instanceId}`), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: (f = y.dotsOptions) === null || f === void 0 ? void 0 : f.gradient, color: y.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: y.height, width: y.width, name: `dot-color-${this._instanceId}` })
          for (let z = 0; z < v; z++) {
            for (let D = 0; D < v; D++)
              d && !d(z, D) || !((g = this._qr) === null || g === void 0) && g.isDark(z, D) && (N.draw(U + D * M, B + z * M, M, (C, R) => !(D + C < 0 || z + R < 0 || D + C >= v || z + R >= v) && !(d && !d(z + R, D + C)) && !!this._qr && this._qr.isDark(z + R, D + C)), N._element && this._dotsClipPath && this._dotsClipPath.appendChild(N._element))
          }
          if (y.shape === F) {
            const z = this._roundSize((E / M - v) / 2); const D = v + 2 * z; const C = U - z * M; const R = B - z * M; const b = []; const x = this._roundSize(D / 2)
            for (let O = 0; O < D; O++) {
              b[O] = []
              for (let P = 0; P < D; P++)
                O >= z - 1 && O <= D - z && P >= z - 1 && P <= D - z || Math.sqrt((O - x) * (O - x) + (P - x) * (P - x)) > x ? b[O][P] = 0 : b[O][P] = this._qr.isDark(P - 2 * z < 0 ? P : P >= v ? P - 2 * z : P - z, O - 2 * z < 0 ? O : O >= v ? O - 2 * z : O - z) ? 1 : 0
            }
            for (let O = 0; O < D; O++) {
              for (let P = 0; P < D; P++) {
                b[O][P] && (N.draw(C + P * M, R + O * M, M, (j, K) => {
                  let J
                  return !!(!((J = b[O + K]) === null || J === void 0) && J[P + j])
                }), N._element && this._dotsClipPath && this._dotsClipPath.appendChild(N._element))
              }
            }
          }
        }

        drawCorners() {
          if (!this._qr)
            throw 'QR code is not defined'
          const d = this._element; const f = this._options
          if (!d)
            throw 'Element code is not defined'
          const g = this._qr.getModuleCount(); const y = Math.min(f.width, f.height) - 2 * f.margin; const v = f.shape === F ? y / Math.sqrt(2) : y; const E = this._roundSize(v / g); const T = 7 * E; const M = 3 * E; const U = this._roundSize((f.width - g * E) / 2); const B = this._roundSize((f.height - g * E) / 2);
          [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(([N, z, D]) => {
            let C, R, b, x, O, P, j, K, J, ae, se, le, ge, Ce
            const we = U + N * E * (g - 7); const pe = B + z * E * (g - 7)
            let ve = this._dotsClipPath; let ne = this._dotsClipPath
            if ((((C = f.cornersSquareOptions) === null || C === void 0 ? void 0 : C.gradient) || ((R = f.cornersSquareOptions) === null || R === void 0 ? void 0 : R.color)) && (ve = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'clipPath'), ve.setAttribute('id', `clip-path-corners-square-color-${N}-${z}-${this._instanceId}`), this._defs.appendChild(ve), this._cornersSquareClipPath = this._cornersDotClipPath = ne = ve, this._createColor({ options: (b = f.cornersSquareOptions) === null || b === void 0 ? void 0 : b.gradient, color: (x = f.cornersSquareOptions) === null || x === void 0 ? void 0 : x.color, additionalRotation: D, x: we, y: pe, height: T, width: T, name: `corners-square-color-${N}-${z}-${this._instanceId}` })), ((O = f.cornersSquareOptions) === null || O === void 0 ? void 0 : O.type) && h.includes(f.cornersSquareOptions.type)) {
              const Re = new m({ svg: this._element, type: f.cornersSquareOptions.type, window: this._window })
              Re.draw(we, pe, T, D), Re._element && ve && ve.appendChild(Re._element)
            } else {
              const Re = new l({ svg: this._element, type: ((P = f.cornersSquareOptions) === null || P === void 0 ? void 0 : P.type) || f.dotsOptions.type, window: this._window })
              for (let Ve = 0; Ve < I.length; Ve++) {
                for (let ue = 0; ue < I[Ve].length; ue++) {
                  !((j = I[Ve]) === null || j === void 0) && j[ue] && (Re.draw(we + ue * E, pe + Ve * E, E, (Je, Ge) => {
                    let qe
                    return !!(!((qe = I[Ve + Ge]) === null || qe === void 0) && qe[ue + Je])
                  }), Re._element && ve && ve.appendChild(Re._element))
                }
              }
            }
            if ((((K = f.cornersDotOptions) === null || K === void 0 ? void 0 : K.gradient) || ((J = f.cornersDotOptions) === null || J === void 0 ? void 0 : J.color)) && (ne = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'clipPath'), ne.setAttribute('id', `clip-path-corners-dot-color-${N}-${z}-${this._instanceId}`), this._defs.appendChild(ne), this._cornersDotClipPath = ne, this._createColor({ options: (ae = f.cornersDotOptions) === null || ae === void 0 ? void 0 : ae.gradient, color: (se = f.cornersDotOptions) === null || se === void 0 ? void 0 : se.color, additionalRotation: D, x: we + 2 * E, y: pe + 2 * E, height: M, width: M, name: `corners-dot-color-${N}-${z}-${this._instanceId}` })), ((le = f.cornersDotOptions) === null || le === void 0 ? void 0 : le.type) && $.includes(f.cornersDotOptions.type)) {
              const Re = new A({ svg: this._element, type: f.cornersDotOptions.type, window: this._window })
              Re.draw(we + 2 * E, pe + 2 * E, M, D), Re._element && ne && ne.appendChild(Re._element)
            } else {
              const Re = new l({ svg: this._element, type: ((ge = f.cornersDotOptions) === null || ge === void 0 ? void 0 : ge.type) || f.dotsOptions.type, window: this._window })
              for (let Ve = 0; Ve < V.length; Ve++) {
                for (let ue = 0; ue < V[Ve].length; ue++) {
                  !((Ce = V[Ve]) === null || Ce === void 0) && Ce[ue] && (Re.draw(we + ue * E, pe + Ve * E, E, (Je, Ge) => {
                    let qe
                    return !!(!((qe = V[Ve + Ge]) === null || qe === void 0) && qe[ue + Je])
                  }), Re._element && ne && ne.appendChild(Re._element))
                }
              }
            }
          })
        }

        loadImage() {
          return new Promise((d, f) => {
            let g
            const y = this._options
            if (!y.image)
              return f('Image is not defined')
            if (!((g = y.nodeCanvas) === null || g === void 0) && g.loadImage) {
              y.nodeCanvas.loadImage(y.image).then((v) => {
                let E, T
                if (this._image = v, this._options.imageOptions.saveAsBlob) {
                  const M = (E = y.nodeCanvas) === null || E === void 0 ? void 0 : E.createCanvas(this._image.width, this._image.height);
                  (T = M == null ? void 0 : M.getContext('2d')) === null || T === void 0 || T.drawImage(v, 0, 0), this._imageUri = M == null ? void 0 : M.toDataURL()
                }
                d()
              }).catch(f)
            } else {
              const v = new this._window.Image()
              typeof y.imageOptions.crossOrigin == 'string' && (v.crossOrigin = y.imageOptions.crossOrigin), this._image = v, v.onload = async () => {
                this._options.imageOptions.saveAsBlob && (this._imageUri = await (async function (E, T) {
                  return new Promise((M) => {
                    const U = new T.XMLHttpRequest()
                    U.onload = function () {
                      const B = new T.FileReader()
                      B.onloadend = function () {
                        M(B.result)
                      }, B.readAsDataURL(U.response)
                    }, U.open('GET', E), U.responseType = 'blob', U.send()
                  })
                }(y.image || '', this._window))), d()
              }, v.src = y.image
            }
          })
        }

        async drawImage({ width: d, height: f, count: g, dotSize: y }) {
          const v = this._options; const E = this._roundSize((v.width - g * y) / 2); const T = this._roundSize((v.height - g * y) / 2); const M = E + this._roundSize(v.imageOptions.margin + (g * y - d) / 2); const U = T + this._roundSize(v.imageOptions.margin + (g * y - f) / 2); const B = d - 2 * v.imageOptions.margin; const N = f - 2 * v.imageOptions.margin; const z = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'image')
          z.setAttribute('href', this._imageUri || ''), z.setAttribute('xlink:href', this._imageUri || ''), z.setAttribute('x', String(M)), z.setAttribute('y', String(U)), z.setAttribute('width', `${B}px`), z.setAttribute('height', `${N}px`), this._element.appendChild(z)
        }

        _createColor({ options: d, color: f, additionalRotation: g, x: y, y: v, height: E, width: T, name: M }) {
          const U = T > E ? T : E; const B = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'rect')
          if (B.setAttribute('x', String(y)), B.setAttribute('y', String(v)), B.setAttribute('height', String(E)), B.setAttribute('width', String(T)), B.setAttribute('clip-path', `url('#clip-path-${M}')`), d) {
            let N
            if (d.type === 'radial') {
              N = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient'), N.setAttribute('id', M), N.setAttribute('gradientUnits', 'userSpaceOnUse'), N.setAttribute('fx', String(y + T / 2)), N.setAttribute('fy', String(v + E / 2)), N.setAttribute('cx', String(y + T / 2)), N.setAttribute('cy', String(v + E / 2)), N.setAttribute('r', String(U / 2))
            } else {
              const z = ((d.rotation || 0) + g) % (2 * Math.PI); const D = (z + 2 * Math.PI) % (2 * Math.PI)
              let C = y + T / 2; let R = v + E / 2; let b = y + T / 2; let x = v + E / 2
              D >= 0 && D <= 0.25 * Math.PI || D > 1.75 * Math.PI && D <= 2 * Math.PI ? (C -= T / 2, R -= E / 2 * Math.tan(z), b += T / 2, x += E / 2 * Math.tan(z)) : D > 0.25 * Math.PI && D <= 0.75 * Math.PI ? (R -= E / 2, C -= T / 2 / Math.tan(z), x += E / 2, b += T / 2 / Math.tan(z)) : D > 0.75 * Math.PI && D <= 1.25 * Math.PI ? (C += T / 2, R += E / 2 * Math.tan(z), b -= T / 2, x -= E / 2 * Math.tan(z)) : D > 1.25 * Math.PI && D <= 1.75 * Math.PI && (R += E / 2, C += T / 2 / Math.tan(z), x -= E / 2, b -= T / 2 / Math.tan(z)), N = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient'), N.setAttribute('id', M), N.setAttribute('gradientUnits', 'userSpaceOnUse'), N.setAttribute('x1', String(Math.round(C))), N.setAttribute('y1', String(Math.round(R))), N.setAttribute('x2', String(Math.round(b))), N.setAttribute('y2', String(Math.round(x)))
            }
            d.colorStops.forEach(({ offset: z, color: D }) => {
              const C = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'stop')
              C.setAttribute('offset', `${100 * z}%`), C.setAttribute('stop-color', D), N.appendChild(C)
            }), B.setAttribute('fill', `url('#${M}')`), this._defs.appendChild(N)
          } else {
            f && B.setAttribute('fill', f)
          }
          this._element.appendChild(B)
        }
      }
      G.instanceCount = 0
      const ee = G; const X = 'canvas'; const re = {}
      for (let _ = 0; _ <= 40; _++)
        re[_] = _
      const Y = { type: X, shape: 'square', width: 300, height: 300, data: '', margin: 0, qrOptions: { typeNumber: re[0], mode: void 0, errorCorrectionLevel: 'Q' }, imageOptions: { saveAsBlob: !0, hideBackgroundDots: !0, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: 'square', color: '#000', roundSize: !0 }, backgroundOptions: { round: 0, color: '#fff' } }
      function oe(_) {
        const d = Object.assign({}, _)
        if (!d.colorStops || !d.colorStops.length)
          throw 'Field \'colorStops\' is required in gradient'
        return d.rotation ? d.rotation = Number(d.rotation) : d.rotation = 0, d.colorStops = d.colorStops.map(f => Object.assign(Object.assign({}, f), { offset: Number(f.offset) })), d
      }
      function W(_) {
        const d = Object.assign({}, _)
        return d.width = Number(d.width), d.height = Number(d.height), d.margin = Number(d.margin), d.imageOptions = Object.assign(Object.assign({}, d.imageOptions), { hideBackgroundDots: Boolean(d.imageOptions.hideBackgroundDots), imageSize: Number(d.imageOptions.imageSize), margin: Number(d.imageOptions.margin) }), d.margin > Math.min(d.width, d.height) && (d.margin = Math.min(d.width, d.height)), d.dotsOptions = Object.assign({}, d.dotsOptions), d.dotsOptions.gradient && (d.dotsOptions.gradient = oe(d.dotsOptions.gradient)), d.cornersSquareOptions && (d.cornersSquareOptions = Object.assign({}, d.cornersSquareOptions), d.cornersSquareOptions.gradient && (d.cornersSquareOptions.gradient = oe(d.cornersSquareOptions.gradient))), d.cornersDotOptions && (d.cornersDotOptions = Object.assign({}, d.cornersDotOptions), d.cornersDotOptions.gradient && (d.cornersDotOptions.gradient = oe(d.cornersDotOptions.gradient))), d.backgroundOptions && (d.backgroundOptions = Object.assign({}, d.backgroundOptions), d.backgroundOptions.gradient && (d.backgroundOptions.gradient = oe(d.backgroundOptions.gradient))), d
      }
      const H = i(873); const _e = i.n(H)
      function Ue(_) {
        if (!_)
          throw new Error('Extension must be defined')
        _[0] === '.' && (_ = _.substring(1))
        const d = { bmp: 'image/bmp', gif: 'image/gif', ico: 'image/vnd.microsoft.icon', jpeg: 'image/jpeg', jpg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml', tif: 'image/tiff', tiff: 'image/tiff', webp: 'image/webp', pdf: 'application/pdf' }[_.toLowerCase()]
        if (!d)
          throw new Error(`Extension "${_}" is not supported`)
        return d
      }
      class k {
        constructor(d) {
          d != null && d.jsdom ? this._window = new d.jsdom('', { resources: 'usable' }).window : this._window = window, this._options = d ? W(s(Y, d)) : Y, this.update()
        }

        static _clearContainer(d) {
          d && (d.innerHTML = '')
        }

        _setupSvg() {
          if (!this._qr)
            return
          const d = new ee(this._options, this._window)
          this._svg = d.getElement(), this._svgDrawingPromise = d.drawQR(this._qr).then(() => {
            let f
            this._svg && ((f = this._extension) === null || f === void 0 || f.call(this, d.getElement(), this._options))
          })
        }

        _setupCanvas() {
          let d, f
          this._qr && (!((d = this._options.nodeCanvas) === null || d === void 0) && d.createCanvas ? (this._nodeCanvas = this._options.nodeCanvas.createCanvas(this._options.width, this._options.height), this._nodeCanvas.width = this._options.width, this._nodeCanvas.height = this._options.height) : (this._domCanvas = document.createElement('canvas'), this._domCanvas.width = this._options.width, this._domCanvas.height = this._options.height), this._setupSvg(), this._canvasDrawingPromise = (f = this._svgDrawingPromise) === null || f === void 0
            ? void 0
            : f.then(() => {
                let g
                if (!this._svg)
                  return
                const y = this._svg; const v = new this._window.XMLSerializer().serializeToString(y); const E = btoa(v); const T = `data:${Ue('svg')};base64,${E}`
                if (!((g = this._options.nodeCanvas) === null || g === void 0) && g.loadImage) {
                  return this._options.nodeCanvas.loadImage(T).then((M) => {
                    let U, B
                    M.width = this._options.width, M.height = this._options.height, (B = (U = this._nodeCanvas) === null || U === void 0 ? void 0 : U.getContext('2d')) === null || B === void 0 || B.drawImage(M, 0, 0)
                  })
                }
                {
                  const M = new this._window.Image()
                  return new Promise((U) => {
                    M.onload = () => {
                      let B, N;
                      (N = (B = this._domCanvas) === null || B === void 0 ? void 0 : B.getContext('2d')) === null || N === void 0 || N.drawImage(M, 0, 0), U()
                    }, M.src = T
                  })
                }
              }))
        }

        async _getElement(d = 'png') {
          if (!this._qr)
            throw 'QR code is empty'
          return d.toLowerCase() === 'svg' ? (this._svg && this._svgDrawingPromise || this._setupSvg(), await this._svgDrawingPromise, this._svg) : ((this._domCanvas || this._nodeCanvas) && this._canvasDrawingPromise || this._setupCanvas(), await this._canvasDrawingPromise, this._domCanvas || this._nodeCanvas)
        }

        update(d) {
          k._clearContainer(this._container), this._options = d ? W(s(this._options, d)) : this._options, this._options.data && (this._qr = _e()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || (function (f) {
            switch (!0) {
              case /^\d*$/.test(f):
                return 'Numeric'
              case /^[0-9A-Z $%*+\-./:]*$/.test(f):
                return 'Alphanumeric'
              default:
                return 'Byte'
            }
          }(this._options.data))), this._qr.make(), this._options.type === X ? this._setupCanvas() : this._setupSvg(), this.append(this._container))
        }

        append(d) {
          if (d) {
            if (typeof d.appendChild != 'function')
              throw 'Container should be a single DOM node'
            this._options.type === X ? this._domCanvas && d.appendChild(this._domCanvas) : this._svg && d.appendChild(this._svg), this._container = d
          }
        }

        applyExtension(d) {
          if (!d)
            throw 'Extension function should be defined.'
          this._extension = d, this.update()
        }

        deleteExtension() {
          this._extension = void 0, this.update()
        }

        async getRawData(d = 'png') {
          if (!this._qr)
            throw 'QR code is empty'
          const f = await this._getElement(d); const g = Ue(d)
          if (!f)
            return null
          if (d.toLowerCase() === 'svg') {
            const y = `<?xml version="1.0" standalone="no"?>\r
${new this._window.XMLSerializer().serializeToString(f)}`
            return typeof Blob > 'u' || this._options.jsdom ? Buffer.from(y) : new Blob([y], { type: g })
          }
          return new Promise((y) => {
            const v = f
            if ('toBuffer' in v) {
              if (g === 'image/png') {
                y(v.toBuffer(g))
              } else if (g === 'image/jpeg') {
                y(v.toBuffer(g))
              } else {
                if (g !== 'application/pdf')
                  throw new Error('Unsupported extension')
                y(v.toBuffer(g))
              }
            } else {
              'toBlob' in v && v.toBlob(y, g, 1)
            }
          })
        }

        async download(d) {
          if (!this._qr)
            throw 'QR code is empty'
          if (typeof Blob > 'u')
            throw 'Cannot download in Node.js, call getRawData instead.'
          let f = 'png'; let g = 'qr'
          typeof d == 'string' ? (f = d, console.warn('Extension is deprecated as argument for \'download\' method, please pass object { name: \'...\', extension: \'...\' } as argument')) : typeof d == 'object' && d !== null && (d.name && (g = d.name), d.extension && (f = d.extension))
          const y = await this._getElement(f)
          if (y) {
            if (f.toLowerCase() === 'svg') {
              let v = new XMLSerializer().serializeToString(y)
              v = `<?xml version="1.0" standalone="no"?>\r
${v}`, u(`data:${Ue(f)};charset=utf-8,${encodeURIComponent(v)}`, `${g}.svg`)
            } else {
              u(y.toDataURL(Ue(f)), `${g}.${f}`)
            }
          }
        }
      }
      const S = k
    })(), o.default
  })())
})(Xa)
const sv = /* @__PURE__ */ jl(Xa.exports); const uv = he({
  name: 'QrCodeBox',
  data() {
    return {
      qrcode: null,
    }
  },
  props: {
    data: String,
    image: String,
    width: Number,
    height: Number,
    circleType: String,
    circleColor: String,
  },
  methods: {},
  computed: {},
  components: {},
  watch: {
    $props: {
      handler() {
        const t = {
          dotsOptions: {},
        }
        Object.keys(this.$props).forEach((e) => {
          this.$props[e] != null && this.$props[e] !== '' && (t[e] = this.$props[e])
        }), delete t.formCreateInject, t.circleType && (t.dotsOptions.type = t.circleType), t.circleColor && (t.dotsOptions.color = t.circleColor), delete t.circleColor, delete t.circleType, this.$nextTick(() => {
          this.qrcode ? this.qrcode.update(t) : (this.qrcode = je(new sv(t)), this.qrcode.append(this.$refs.qr))
        })
      },
      deep: !0,
      immediate: !0,
    },
  },
}); const lv = {
  class: '_fc-qrcode',
  ref: 'qr',
}
function cv(t, e, n, r, i, o) {
  return te(), de('div', lv, null, 512)
}
const fv = /* @__PURE__ */ De(uv, [['render', cv]])
function dv(t, e) {
  let n = [t]
  const r = e.split('.')
  let i = 1
  for (; r[i];) {
    const o = []
    n.forEach((a) => {
      Object.values(a.ctxs).forEach((s) => {
        if (s.rule._fc_id === r[i - 1]) {
          const u = a.subForm[s.id]
          o.push(...Array.isArray(u) ? u : [u])
        }
      })
    }), n = o.map(a => a.rule[0].__fc__.$handle), i++
  }
  return [n, r[i - 1]]
} function Vn(t, e, n) {
  const r = t.vm.setupState.top.setupState.fc.$handle
  let i = [t.$handle]
  t.$handle !== r && i.push(r)
  let o = e
  e.includes('.') && ([i, o] = dv(r, e)), i.forEach((a) => {
    Object.values(a.ctxs).forEach((s) => {
      s.rule._fc_id === o && n(s.rule, a.api)
    })
  })
} const Ka = {
  redirectPage(t, e) {
    if (t.type === 'router') {
      const n = e.api.getData('$router')
      if (!n)
        return console.error('[form-create error]: \u9875\u9762\u8DF3\u8F6C\u5931\u8D25, \u8BF7\u901A\u8FC7 formCreate.setData("$router", router) \u6CE8\u5165\u5168\u5C40\u8DEF\u7531\u53D8\u91CF'), Promise.reject()
      n.push(t.url)
    } else {
      t.break ? window.open(t.url) : location.href = t.url
    }
  },
  reloadPage() {
    location.reload()
  },
  openModel(t, e) {
    e.api.open(t.model)
  },
  closeModel(t, e) {
    e.api.close(t.model)
  },
  hidden(t, e, n) {
    const r = typeof t.id == 'string' ? [t.id] : t.id || []
    let i = !!t.status
    t.compute && (i = !!n.$handle.compute(e.self.__fc__, t.formula)), r.forEach((o) => {
      Vn(n, o, (a) => {
        a.hidden = i
      })
    })
  },
  disabled(t, e, n) {
    const r = typeof t.id == 'string' ? [t.id] : t.id || []
    let i = !!t.status
    t.compute && (i = !!n.$handle.compute(e.self.__fc__, t.formula)), r.forEach((o) => {
      Vn(n, o, (a) => {
        a.props || (a.props = {}), a.props.disabled = i
      })
    })
  },
  resetFields(t, e) {
    e.api.top.resetFields()
  },
  clearFields(t, e) {
    e.api.top.coverValue({})
  },
  validate(t, e) {
    return e.api.top.validate()
  },
  validateFields(t, e, n) {
    const r = typeof t.id == 'string' ? [t.id] : t.id || []; const i = []
    return r.forEach((o) => {
      Vn(n, o, (a, s) => {
        a.field && i.push(s.validateField(a.field))
      })
    }), i.length ? Promise.all(i) : void 0
  },
  submit(t, e) {
    return e.api.top.submit()
  },
  setValue(t, e, n) {
    (t.formData || []).forEach((r) => {
      let i = r.value
      r.compute && (i = n.$handle.compute(e.self.__fc__, r.formula)), Vn(n, r.id, (o) => {
        o.value = i
      })
    })
  },
  fetch(t, e) {
    const { append: n, response: r, fetch: i } = t
    return n && (i.data = { ...e.api.formData(), ...i.data || {} }), new Promise((o, a) => {
      e.api.fetch(t.fetch).then((s) => {
        r && e.api.setData(r, s), o(s)
      }).catch((s) => {
        a(s)
      })
    })
  },
  copy(t, e, n) {
    let r = t.content || ''
    t.compute && (r = n.$handle.compute(e.self.__fc__, t.formula)), id(r)
  },
  callback(t, e) {
    return t.callback && t.callback(e)
  },
  message(t) {
    Lo(t || {})
  },
}
function yn(t, e) {
  return t.reduce((n, r) => n.then(() => r(e)), Promise.resolve())
}
function Ja(t) {
  const e = (n, r) => {
    const i = []
    return r.forEach((o) => {
      const { method: a, config: s, expression: u, stopPropagation: c, ignoreError: l } = o
      i.push(p => new Promise((h) => {
        if (a === 'condition') {
          const $ = [];
          (o.children || []).forEach((A) => {
            try {
              t.$handle.compute(n.__fc__, A.config) !== !1 && $.push(yn(e(n, A.children || []), p))
            } catch (F) {
              console.error(F)
            }
          }), $.length
            ? Promise.allSettled($).then((A) => {
                A.filter(I => I.status === 'fulfilled').length && h()
              })
            : (!o.children || !o.children.length) && h()
          return
        }
        if (u && t.$handle.compute(n.__fc__, u) === !1) {
          h()
          return
        }
        const m = (...$) => {
          (!c || t.$handle.compute(n.__fc__, c) !== !0) && h(...$)
        }
        let w
        try {
          w = Ka[a](s || {}, p, t)
        } catch ($) {
          console.error($), l !== !1 && m()
          return
        }
        w && w.then
          ? w.then(m).catch(() => {
              l !== !1 && m()
            })
          : m(w)
      }))
    }), i
  }
  return e
}
function hv(t) {
  const e = Ja(t)
  return Object.keys(t.options.value.globalEvent || {}).forEach((n) => {
    const r = t.options.value.globalEvent[n]
    r.flow && (r.handle = function (i) {
      yn(e(i.rule, r.flow), i)
    })
  }), ['onReset', 'onSubmit', 'beforeSubmit', 'onCreated', 'onMounted', 'onReload', 'onChange', 'beforeFetch'].forEach((n) => {
    const r = t.options.value[n]
    Array.isArray(r) && (t.options.value[n] = (() => {
      const i = e(t.rules[0], r)
      return t.$handle.inject(t.rules[0], (o) => {
        yn(i, o)
      })
    })())
  }), {
    name: 'behavior',
    load(n, r) {
      const i = n.getValue(); const o = {}; const a = {}
      i && Object.keys(i).forEach((s) => {
        if (Array.isArray(i[s])) {
          const u = e(r, i[s])
          if (u.length) {
            const c = t.$handle.inject(
              r,
              (l) => {
                yn(u, l)
              },
              r.inject || t.$handle.options.injectEvent,
            )
            s.includes('hook_') ? a[s.replace('hook_', '')] = c : o[s] = c
          }
        }
      }), n.getProp().on = o, n.getProp().hook = a
    },
  }
}
function Ur(t) {
  return String(t || '').replace(/\s+/g, ' ').trim()
}
function pv(t, e, n, r, i) {
  let s, u, c, l
  let o = ''; let a = ''
  for (let p = e - 1; p > 0; p--) {
    const h = Ur((u = (s = t[p]) == null ? void 0 : s[n]) == null ? void 0 : u.v)
    if (h && !/_{3,}/.test(h)) {
      o = h
      break
    }
  }
  for (let p = n - 1; p > 0; p--) {
    const h = Ur((l = (c = t[e]) == null ? void 0 : c[p]) == null ? void 0 : l.v)
    if (h && !/_{3,}/.test(h)) {
      a = h
      break
    }
  }
  return a && o ? `${a}-${o}` : a || o || ''
}
function mv(t) {
  const e = window.XLSX; const n = e.utils.decode_range(t['!ref']); const r = n.e.r + 1; const i = n.e.c + 1
  const o = []; const a = []; const s = {}
  const u = {};
  (t['!merges'] || []).forEach((c) => {
    const l = c.e.c - c.s.c + 1; const p = c.e.r - c.s.r + 1
    u[`${c.s.r + 1}:${c.s.c + 1}`] = [l, p]
  })
  for (let c = 1; c <= r; c++) {
    for (let l = 1; l <= i; l++) {
      let p = !1
      for (const A in u) {
        const [F, I] = A.split(':').map(Number); const [V, G] = u[A]
        if (F <= c && c < F + G && I <= l && l < I + V && (c !== F || l !== I)) {
          p = !0
          break
        }
      }
      if (p)
        continue
      const h = t[e.utils.encode_cell({ r: c - 1, c: l - 1 })]; const m = Ur(h ? h.v : ''); const [w, $] = u[`${c}:${l}`] || [1, 1]
      o.push({ top: c - 1, left: l - 1, row: $, col: w }), m && !/_{3,}/.test(m)
        ? (s[`${c - 1}:${l - 1}`] = { alignContent: 'center' }, a.push({
            type: 'div',
            style: {
              whiteSpace: 'pre-line',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '14px',
            },
            children: [m],
            _fc_id: `id_${gt()}`,
            name: `ref_${gt()}`,
            _fc_drag_tag: 'text',
            display: !0,
            hidden: !1,
            slot: `${c - 1}:${l - 1}`,
          }))
        : a.push({
            type: 'input',
            field: gt(),
            title: pv(t, c, l),
            $required: !1,
            _fc_id: `id_${gt()}`,
            name: `ref_${gt()}`,
            _fc_drag_tag: 'input',
            wrap: { title: !1 },
            display: !0,
            hidden: !1,
            slot: `${c - 1}:${l - 1}`,
          })
    }
  }
  return [
    {
      type: 'fcTable',
      props: {
        rule: {
          row: r,
          col: i,
          style: s,
          class: {},
          layout: o,
        },
        mini: !0,
        borderColor: '#5A5A5AFF',
      },
      children: a,
      _fc_id: `id_${gt()}`,
      name: `ref_${gt()}`,
      _fc_drag_tag: 'fcTable',
      display: !0,
      hidden: !1,
    },
  ]
}
async function gv(t) {
  try {
    await Ot.loadDepend('xlsx')
    const e = window.XLSX; const n = await t.arrayBuffer(); const r = e.read(n, { type: 'array' }); const i = r.SheetNames[0]; const o = r.Sheets[i]
    return mv(o)
  } catch (e) {
    throw new Error(`\u89E3\u6790 Excel \u6587\u4EF6\u5931\u8D25: ${e instanceof Error ? e.message : String(e)}`)
  }
}
function vv(t) {
  t.__proto__.setBehavior = (e) => {
    Kr(Ka, e)
  }, t.extendApi(e => ({
    open(n, ...r) {
      (e.el(n) || e.top.el(n)).open(...r)
    },
    close(n) {
      n ? (e.el(n) || e.top.el(n)).close() : (e.top.bus.$emit('fc.closeDialog'), e !== e.top && e.bus.$emit('fc.closeDialog'))
    },
    parseExcel(n) {
      return gv(n)
    },
  }))
}
function yv(t) {
  t.extendApi((e, n, r) => {
    function i(a) {
      a.imageSmoothingEnabled = !1, a.mozImageSmoothingEnabled = !1, a.webkitImageSmoothingEnabled = !1, a.msImageSmoothingEnabled = !1
    }
    function o(a) {
      const s = {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
        width: 780,
        format: 'a4',
        ...a || {},
      }
      return new Promise((u, c) => {
        Ot.loadDepend(['html2canvas', 'jspdf']).then(() => {
          const l = s.el || e.formEl().$el
          l.classList.add('fc-print-form'), window.html2canvas(l, {
            allowTaint: !0,
            logging: !1,
            useCORS: !0,
          }).then((p) => {
            const h = new window.jspdf.jsPDF({
              orientation: 'p',
              unit: 'pt',
              format: (s.format || 'a4').toLowerCase(),
            })
            i(p.getContext('2d'))
            const { left: m, right: w, top: $, bottom: A } = s; const F = h.internal.pageSize.getWidth(); const I = h.internal.pageSize.getHeight(); const V = F - m - w; const G = I - $ - A; const ee = p.height * V / p.width
            if (ee <= G) {
              h.addImage(p.toDataURL('image/jpeg'), 'JPEG', m, $, V, ee)
            } else {
              let X = ee; let re = 0
              const Y = p.width * G / V
              for (; X > 0;) {
                const oe = document.createElement('canvas'); const W = oe.getContext('2d')
                i(W)
                const H = re * Y; const _e = Math.min(Y, p.height - H)
                oe.width = p.width, oe.height = _e, W.drawImage(
                  p,
                  0,
                  H,
                  p.width,
                  _e,
                  0,
                  0,
                  p.width,
                  _e,
                )
                const Ue = _e / p.height * ee
                h.addImage(
                  oe.toDataURL('image/jpeg'),
                  'JPEG',
                  m,
                  $,
                  V,
                  Ue,
                ), X -= G, X > 0 && (h.addPage(), re++)
              }
            }
            return u(h)
          }).catch(c).finally(() => {
            l.classList.remove('fc-print-form')
          })
        })
      })
    }
    return {
      exportPdf(a) {
        return new Promise((s, u) => {
          o(a).then((c) => {
            window.open(URL.createObjectURL(c.output('blob'))), s()
          }).catch(u)
        })
      },
      print(a) {
        return new Promise((s, u) => {
          o(a).then((c) => {
            const l = document.createElement('iframe')
            l.style.width = '0', l.style.position = 'absolute', l.style.height = '0', l.style.border = 'none', l.onload = function () {
              setTimeout(() => {
                l.contentWindow.print()
              }, 100)
            }, document.body.appendChild(l), l.src = URL.createObjectURL(c.output('blob')), s()
          }).catch(u)
        })
      },
    }
  })
}
function _v(t) {
  const e = Ja(t); const n = {
    name: 'easySlots',
    load(r, i) {
      const o = r.getValue(); const a = {}
      o && Object.keys(o).forEach((s) => {
        const u = {}
        Object.keys(o[s].on || {}).forEach((c) => {
          let l = o[s].on[c]
          if (Array.isArray(l)) {
            const p = e(i, l)
            l = function (h) {
              yn(p, h)
            }
          }
          u[c] = t.$handle.inject(i, l)
        }), a[s] = o[s].type === 'icon'
          ? {
              type: 'i',
              class: `fc-icon iconfont ${o[s].value}`,
              on: u,
              style: o[s].style,
            }
          : {
              type: 'div',
              class: `fc-easyslots-${s}`,
              on: u,
              style: o[s].style,
              children: [`${o[s].value || ''}`],
            }
      }), r.getProp().renderSlots = a
    },
  }
  return n.watch = n.load, n
}
function bv(t) {
  if (!t || !t.trim())
    return t
  const e = t.trim(); const n = []
  let r = ''; let i = 0
  for (let o = 0; o < e.length; o++) {
    const a = e[o]
    r += a, a === '{' ? i++ : a === '}' && (i--, i === 0 && (n.push(r.trim()), r = ''))
  }
  return n.map((o) => {
    const a = o.indexOf('{')
    if (a === -1)
      return o
    const s = o.substring(0, a).trim(); const u = o.substring(a)
    return s.split(',').map(p => p.trim()).map(p => p.includes('::root') || p.includes('::wrap') ? p : `::root ${p}`).join(', ') + u
  }).join(`

`)
}
function wv(t) {
  t.unwatch.push(() => {
    const n = t.cascadingStyle
    n && (n.parentNode || n.parentElement) && document.head.removeChild(n)
  })
  const e = {
    name: 'css',
    load(n, r, i) {
      if (!t.cascadingStyle) {
        const s = document.createElement('style')
        s.type = 'text/css', document.head.appendChild(s), t.cascadingStyle = s
      }
      let o = n.getValue()
      const a = n.getProp()
      a._css && e.deleted(n), o && (o = bv(o).replaceAll('::root', `.com_${n.id}`).replaceAll('::wrap', `.wrap_${n.id}`), t.cascadingStyle.innerHTML += `
${o}`, a._css = o, a.class = `com_${n.id}`, a.wrap = { class: `wrap_${n.id}` }, i.sync(r))
    },
    deleted(n) {
      const r = n.getProp()
      r._css && t.cascadingStyle && (t.cascadingStyle.innerHTML = t.cascadingStyle.innerHTML.replace(r._css, ''))
    },
  }
  return e.watch = e.load, e
}
const Qn = {
  components: {},
  mobileComponents: {},
  updateFormCreate(t) {
  },
}; const Po = {
  date: 'YYYY-MM-DD',
  month: 'YYYY-MM',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  timerange: 'HH:mm:ss',
  daterange: 'YYYY-MM-DD',
  monthrange: 'YYYY-MM',
  datetimerange: 'YYYY-MM-DD HH:mm:ss',
  year: 'YYYY',
}
function $v(t) {
  return `${t / 20}em`
}
function Sv(t) {
  let e
  !((e = t.wrap) != null && e.class) || (t.wrap.class === 'fc-wrap-top' ? (t.wrap.labelAlign = 'top', delete t.wrap.class) : t.wrap.class === 'fc-wrap-left' ? (t.wrap.labelAlign = 'left', delete t.wrap.class) : t.wrap.class === 'fc-wrap-right' && (t.wrap.labelAlign = 'right', delete t.wrap.class))
}
function zn(t, e, n, r) {
  const i = r || {}
  return e.forEach((o) => {
    t.includes(o[n || 'id']) && t.splice(t.indexOf(o[n || 'id']), 1, o[i.label || 'label'] || o.text), nt.trueArray(o[i.children || 'children']) && zn(t, o[i.children || 'children'], n, r)
  }), t
} function Ov(t, e) {
  return e.forEach((n) => {
    t.includes(n.value) && (t[t.indexOf(n.value)] = n.label || n.text)
  }), t
}
function Wt(t) {
  return t == null || t === '' ? [] : Array.isArray(t) ? t : [t]
}
function xv(t) {
  Object.keys(Ie).forEach((e) => {
    t.setFormula(e, Ie[e])
  }), vv(t), yv(t), t.register('behavior', hv), t.register('easySlots', _v), t.register('css', wv), t.extendApi(e => ({
    message(n) {
      Io({
        type: 'warning',
        ...n || {},
      })
    },
  })), t.setDriver('elm', {
    defaultPreview(e, n) {
      let r = e.rule.value
      const i = (...u) => e.$render.vNode.h(...u); const o = e.type; const a = e.$handle.subForm[e.id]; const s = e.prop.readMode
      if (s === !1 || s === 'custom' || !e.input || e.rule.subForm || (Array.isArray(a) ? a.length : a) || [
        'fcGroup',
        'fcSubForm',
        'tableForm',
        'stepForm',
        'nestedTableForm',
        'infiniteTableForm',
        'upload',
        'fcDialog',
        'fcDrawer',
        'fcPopup',
      ].includes(e.trueType)) {
        return e.parser.render(n, e)
      }
      if (['radio', 'select', 'checkbox'].includes(o)) {
        r = Ov([...Wt(r)], e.prop.props.options || e.prop.props.formCreateInject.options || []).join(
          ', ',
        )
      } else if (['timePicker', 'datePicker', 'slider'].includes(o)) {
        o === 'datePicker' && e.prop.props.format && (r = Array.isArray(r) ? r.map(u => u ? Ae(u).format(e.prop.props.format) : '') : r ? Ae(r).format(e.prop.props.format) : ''), r = Array.isArray(r) ? r.join(' - ') : r
      } else if (o === 'cascader') {
        r = [...Wt(r)], Array.isArray(r[0]) || (r = [r]), r = r.map(u => zn(u, e.prop.props.options || e.prop.props.formCreateInject.options || [], 'value').join(
          '/',
        )).join(', ')
      } else if (o === 'elTransfer') {
        const u = [...Wt(r)]
        r = zn(u, e.prop.props.data || e.prop.props.formCreateInject.options || [], 'key').join(', ')
      } else if (o === 'fcDataSelect') {
        r = [...Wt(r)].map(c => c[e.prop.props.labelKey || 'label']).join(', ')
      } else if (['tree', 'elTreeSelect'].includes(o)) {
        const u = e.prop.props.data || e.prop.props.formCreateInject.options || []
        r = zn([...Wt(r)], u, o === 'elTreeSelect' ? 'value' : 'id').join(', ')
      } else {
        if (o === 'fcEditor' || s === 'html')
          return i('div', { innerHTML: r })
        if (o === 'uploader' || s === 'image') {
          return r = Wt(r), i(
            'div',
            { class: '_fc-upload' },
            r.map((u) => {
              return i('div', { class: '_fc-upload-preview' }, [i('van-image', { src: u, fit: 'cover' })])
            }),
          )
        }
        if (o === 'signaturePad' && r)
          return i('van-image', { src: r, fit: 'cover', style: { height: '90px' } })
        o === 'fcTdtMapPicker' ? r = (r == null ? void 0 : r.name) || '' : (typeof r == 'boolean' || o === 'switch') && (r = r ? '\u662F' : '\u5426')
      }
      return i(
        'span',
        {
          class: '_fc-read-view',
          style: { whiteSpace: 'pre-line' },
        },
        [`${r == null ? '' : r}`],
      )
    },
    updateWrap(e) {
      let r, i
      let n = (i = (r = e.prop) == null ? void 0 : r.wrap) == null ? void 0 : i.style
      e.prop.col && e.prop.col.span && (e.prop.col.span = 24), n && (n = Array.isArray(n) ? n : [n], n.forEach((o) => {
        delete o.marginBottom
      })), Sv(e.prop)
    },
    updateOptions(e) {
      let n, r, i;
      ((n = e.form) == null ? void 0 : n.labelWidth) && e.form.labelWidth.includes('px') && (e.form.labelWidth = $v(Number.parseInt(e.form.labelWidth))), (r = e.form) != null && r.labelPosition && (e.form.labelAlign = e.form.labelPosition, delete e.form.labelPosition), (i = e.form) != null && i.hideRequiredAsterisk && (e.form.colon = e.form.hideRequiredAsterisk, delete e.form.hideRequiredAsterisk)
    },
    parsers: {
      inputNumber: {
        mergeProp(e) {
          e.prop.component = 'vanStepper'
          const n = e.prop.props
          n.decimalLength = n.precision, n.integer = n.precision === 0, delete n.precision
        },
      },
      radio: {
        mergeProp(e) {
          e.prop.options && (e.prop.props.options = e.prop.options)
        },
      },
      checkbox: {
        mergeProp(e) {
          e.prop.options && (e.prop.props.options = e.prop.options)
        },
      },
      select: {
        mergeProp(e) {
          e.prop.props.multiple === !0
            ? e.prop.component = _l
            : (e.prop.options && (e.prop.props.options = e.prop.options), e.prop.props.options = (e.prop.props.options || []).map(n => ({
                text: n.label,
                value: n.value,
              })))
        },
      },
      rate: {
        mergeProp(e) {
          e.prop.props.count = e.prop.props.max, delete e.prop.props.max
        },
      },
      timePicker: {
        mergeProp(e) {
          e.prop.component = 'elTimePicker'
          const n = e.prop.props
          n.valueFormat || (n.valueFormat = 'HH:mm:ss')
        },
      },
      datePicker: {
        mergeProp(e) {
          e.prop.component = 'elDatePicker'
          const n = e.prop.props
          n.valueFormat || (n.valueFormat = Po[n.type] || Po.date)
        },
      },
      colorPicker: {
        mergeProp(e) {
          e.prop.component = 'elColorPicker'
        },
      },
      cascader: {
        mergeProp(e) {
          e.prop.component = 'elCascader'
        },
      },
      elDivider: {
        mergeProp(e) {
          e.prop.component = 'vanDivider'
        },
      },
      upload: {
        mergeProp(e) {
          e.prop.component = Ml
        },
      },
      tree: {
        mergeProp(e) {
          e.prop.component = $l
        },
      },
      row: {
        mergeProp(e) {
          e.prop.component = 'vanRow'
        },
      },
      col: {
        mergeProp(e) {
          e.prop.component = 'vanCol', e.prop.props.xs && (e.prop.props = { ...e.prop.props, ...e.prop.props.xs })
        },
      },
      fcDialog: {
        mergeProp(e) {
          e.prop.component = 'FcPopup'
        },
      },
      fcDrawer: {
        mergeProp(e) {
          e.prop.component = 'FcPopup'
        },
      },
    },
  })
}
xv(ye)
ye.component('FcSlot', Ac)
ye.component('FcJson', Dc)
ye.component('StepForm', Ul)
ye.component('FcPopup', Xl)
ye.component('FcTable', tc)
ye.component('FcCell', bc)
ye.component('FcInlineForm', Tc)
ye.component('TableForm', ic)
ye.component('TableFormPro', cc)
ye.component('NestedTableForm', gc)
ye.component('InfiniteTableForm', hc)
ye.component('DataTable', Zl)
ye.component('FcValue', Oc)
ye.component('FcCity', kc)
ye.component('AudioBox', pd)
ye.component('VideoBox', av)
ye.component('BarCodeBox', nv)
ye.component('IframeBox', yd)
ye.component('QrCodeBox', fv)
ye.component('SignaturePad', Gc)
ye.component('FcTdtMapPicker', ef)
ye.component('FcEcharts', Ic)
ye.component('FcTitle', ff)
ye.component('FcDataSelect', ld)
ye.component('FcMarkdown', Kf)
ye.component('FcId', uf)
ye.loadjs = Ot
Object.keys(Qn.components).forEach((t) => {
  ye.component(t, Qn.components[t])
})
Object.keys(Qn.mobileComponents).forEach((t) => {
  ye.component(t, Qn.mobileComponents[t])
})
export {
  ye as default,
  xv as useAdvanced,
}
