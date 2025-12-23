import { ElMessage as Ct } from 'element-plus'
/*!
 * FormCreate商业版可视化表单设计器-让表单设计更简单
 * fc-designer-pro v6.0.1
 * (c) 2018-2025 FormCreate Team  https://form-create.com/
 * license 仅限于被授权主体（个人、企业或组织）使用
 */
import { resolveDirective as Ao, onUpdated as as, computed as At, createVNode as B, mergeProps as Be, withDirectives as Co, onUnmounted as Do, renderList as Dt, renderSlot as en, provide as es, nextTick as Fe, toRefs as Fi, openBlock as H, watch as He, onMounted as is, resolveComponent as J, createCommentVNode as Je, shallowRef as ji, createTextVNode as Le, createSlots as ls, markRaw as Me, withCtx as me, reactive as Ne, onBeforeMount as ns, normalizeClass as Nt, createElementBlock as oe, createElementVNode as Oe, getCurrentInstance as Or, onBeforeUnmount as os, isVNode as Qa, toRef as qe, normalizeStyle as Ro, watchEffect as rs, createApp as ss, inject as ts, withKeys as us, Fragment as ut, h as We, createBlock as xe, defineComponent as ye, toDisplayString as ze, ref as zr, resolveDynamicComponent as zt } from 'vue';

(function () { 'use strict'; try { if (typeof document != 'undefined') { const e = document.createElement('style'); e.appendChild(document.createTextNode('._fc-data-table{width:100%}._fc-data-table .el-table{--el-table-header-bg-color:#e8eefc}._fc-data-table .el-pagination{display:flex;margin-top:10px}._fc-data-table .el-pagination.left{justify-content:flex-start}._fc-data-table .el-pagination.center{justify-content:center}._fc-data-table .el-pagination.right{justify-content:flex-end}._fc-data-table ._fc-data-table-img-list .el-image{height:60px;max-width:150px}._fc-table{overflow:auto}._fc-table>table{border-bottom:1px solid #ebeef5;border-collapse:collapse;border-right:1px solid #ebeef5;border-color:#ebeef5 currentcolor currentcolor #ebeef5;border-style:solid none none solid;border-width:1px 0 0 1px;height:100%;overflow:hidden;table-layout:fixed;width:100%}._fc-table td,._fc-table tr{min-height:50px}._fc-table td{border-bottom:0;border-right:0;border-color:currentcolor #ebeef5 #ebeef5 currentcolor;border-style:none solid solid none;border-width:0 1px 1px 0;box-sizing:border-box;min-width:80px;overflow:hidden;overflow-wrap:break-word;padding:5px;position:relative;text-align:center;vertical-align:middle}._fc-table.is-mini td{min-height:12px;padding:0}._fc-table.is-mini .el-form-item{margin:0;padding:0}._fc-step-form{width:100%}._fc-step-form>.el-steps{margin-bottom:20px}._fc-step-form .el-step .el-step__head{line-height:1.4}._fc-line-form{align-items:flex-start;display:flex;flex-flow:wrap;width:100%}.form-create-m ._fc-line-form{display:flex;flex-wrap:wrap}.form-create ._fc-line-form ._fc-line-form,.form-create ._fc-line-form ._fd-drag-item,.form-create ._fc-line-form ._fd-drag-tool,.form-create ._fc-line-form .el-col-24{display:inline-flex;flex:initial;flex:unset!important;flex-wrap:wrap;max-width:100%;width:auto!important}._fc-m-con .form-create ._fc-line-form>.el-col-24{width:100%!important}._fc-line-form .el-form-item{display:inline-flex;vertical-align:middle}._fc-line-form .el-select,._fc-line-form .el-slider{width:220px}._fc-nested-table-form{color:var(--fc-text-color-2);overflow:auto}._fc-nested-table-form .form-create .el-form-item{margin-bottom:1px}._fc-nested-table-form .form-create .el-form-item.is-error{margin-bottom:22px}._fc-nested-table-form .el-form-item__label,._fc-nested-table-form .van-field__label{display:none!important}._fc-nested-table-form .el-form-item__content{display:flex;margin-left:0!important;width:100%!important}._fc-ntf-table ._fc-ntf-head-idx,._fc-ntf-table ._fc-ntf-idx{font-weight:500;min-width:40px;padding:0;text-align:center;width:40px}._fc-ntf-idx div{border:1px solid #bfbfbf;border-radius:6px;cursor:pointer;display:inline-flex;height:18px;justify-content:center;line-height:16px;width:18px}._fc-ntf-sub-idx{width:30px}._fc-ntf-btn,._fc-ntf-edit{min-width:70px;text-align:center;width:70px}._fc-ntf-btn .fc-icon{cursor:pointer}._fc-nested-table-form._fc-disabled ._fc-ntf-btn .fc-icon,._fc-nested-table-form._fc-disabled>.el-button{cursor:not-allowed}._fc-ntf-table{border:1px solid #ebeef5;border-bottom:0;height:100%;overflow:hidden;table-layout:fixed;width:100%}._fc-ntf-table>thead>tr>th{border:0;border-bottom:1px solid #ebeef5;font-weight:500;height:40px}._fc-ntf-table>thead>tr>th+th{border-left:1px solid #ebeef5}._fc-ntf-table tr{min-height:50px}._fc-ntf-table ._fc-read-view{text-align:center;width:100%}._fc-ntf-table td{border:0;border-bottom:1px solid #ebeef5;box-sizing:border-box;min-height:50px;min-width:80px;overflow:hidden;overflow-wrap:break-word;padding:10px;position:relative}._fc-ntf-table td+td{border-left:1px solid #ebeef5}._fc-ntf-table .el-cascader,._fc-ntf-table .el-date-editor,._fc-ntf-table .el-input-number,._fc-ntf-table .el-select,._fc-ntf-table .el-slider{width:100%}._fc-nested-table-form ._fc-ntf-sub{background-color:#fafafa}._fc-ntf-sub ._fc-table-form{background-color:var(--fc-bg-color-1)}._fc-ntf-sub ._fc-tf-table{border:0}._fc-ntf-idx+._fc-ntf-idx,._fc-ntf-sub-idx+._fc-ntf-head-idx{border-left:0}._fc-ntf-head-required:before{color:#f56c6c;content:"*";margin-right:4px}._fc-infinite-table-form{color:var(--fc-text-color-2);overflow:auto}._fc-infinite-table-form .form-create .el-form-item{margin-bottom:1px}._fc-infinite-table-form .form-create .el-form-item.is-error{margin-bottom:22px}._fc-infinite-table-form .el-form-item__label,._fc-infinite-table-form .van-field__label{display:none!important}._fc-infinite-table-form .el-form-item__content{display:flex;margin-left:0!important;width:100%!important}._fc-itf-table ._fc-itf-head-idx,._fc-itf-table ._fc-itf-idx{font-weight:500;min-width:40px;padding:0;text-align:center;width:40px}._fc-itf-idx div{border:1px solid #bfbfbf;border-radius:6px;cursor:pointer;display:inline-flex;height:18px;justify-content:center;line-height:16px;width:18px}._fc-itf-sub-idx{width:30px}._fc-itf-btn,._fc-itf-edit{min-width:70px;text-align:center;width:70px}._fc-itf-btn .fc-icon{cursor:pointer}._fc-infinite-table-form._fc-disabled ._fc-itf-btn .fc-icon,._fc-infinite-table-form._fc-disabled>.el-button{cursor:not-allowed}._fc-itf-table{border:1px solid #ebeef5;border-bottom:0;height:100%;overflow:hidden;table-layout:fixed;width:100%}._fc-itf-table>thead>tr>th{border:0;border-bottom:1px solid #ebeef5;font-weight:500;height:40px}._fc-itf-table ._fc-itf-table>thead{display:none}._fc-itf-table ._fc-itf-table{border-right:0}._fc-itf-table>thead>tr>th+th{border-left:1px solid #ebeef5}._fc-itf-table tr{min-height:50px}._fc-itf-table ._fc-read-view{text-align:center;width:100%}._fc-itf-table td{border:0;border-bottom:1px solid #ebeef5;box-sizing:border-box;min-height:50px;min-width:80px;overflow:hidden;overflow-wrap:break-word;padding:10px;position:relative}._fc-itf-table td+td{border-left:1px solid #ebeef5}._fc-itf-table .el-cascader,._fc-itf-table .el-date-editor,._fc-itf-table .el-input-number,._fc-itf-table .el-select,._fc-itf-table .el-slider{width:100%}._fc-infinite-table-form ._fc-itf-sub{padding:5px 0 5px 10px}._fc-itf-sub ._fc-table-form{background-color:var(--fc-bg-color-1)}._fc-itf-sub ._fc-tf-table{border:0}._fc-itf-idx+._fc-itf-idx,._fc-itf-sub-idx+._fc-itf-head-idx{border-left:0}._fc-itf-head-required:before{color:#f56c6c;content:"*";margin-right:4px}._fc-table-form{color:var(--fc-text-color-2);overflow:auto}._fc-table-form .form-create td .el-form-item{margin-bottom:1px}._fc-table-form .form-create td .el-form-item.is-error{margin-bottom:22px}._fc-table-form .el-form-item__label,._fc-table-form .van-field__label{display:none!important}._fc-table-form .el-form-item__content{display:flex;margin-left:0!important;width:100%!important}._fc-tf-head-idx,._fc-tf-idx{font-weight:500;min-width:40px;text-align:center;width:40px}._fc-tf-btn,._fc-tf-edit{min-width:70px;text-align:center;width:70px}._fc-tf-btn .fc-icon{cursor:pointer}._fc-table-form._fc-disabled ._fc-tf-btn .fc-icon,._fc-table-form._fc-disabled>.el-button{cursor:not-allowed}._fc-tf-table{border:1px solid #ebeef5;border-bottom:0;height:100%;overflow:hidden;table-layout:fixed;width:100%}._fc-table-form ._fc-tf-table>thead>tr>th{border:0;border-bottom:1px solid #ebeef5;box-sizing:border-box;font-weight:500;height:40px;padding:0 5px}._fc-table-form ._fc-tf-table>thead>tr>th+th{border-left:1px solid #ebeef5}._fc-table-form tr{min-height:50px}._fc-table-form ._fc-read-view{text-align:center;width:100%}._fc-table-form td{border:0;border-bottom:1px solid #ebeef5;box-sizing:border-box;min-height:50px;min-width:80px;overflow:hidden;overflow-wrap:break-word;padding:5px;position:relative}._fc-table-form td+td{border-left:1px solid #ebeef5}._fc-tf-table .el-cascader,._fc-tf-table .el-date-editor,._fc-tf-table .el-input-number,._fc-tf-table .el-select,._fc-tf-table .el-slider{width:100%}._fc-tf-head-required:before{color:#f56c6c;content:"*";margin-right:4px}._fc-undeletable ._fc-tf-btn,._fc-undeletable ._fc-tf-edit{display:none!important}._fc-table-form-v2{color:var(--fc-text-color-2);overflow:auto;width:100%}._fc-table-form-v2 th .is-required:before{color:#f56c6c;content:"*";margin-right:4px}._fc-table-form-v2 .form-create td .el-form-item{margin-bottom:1px}._fc-table-form-v2 .form-create td .el-form-item.is-error{margin-bottom:22px}._fc-table-form-v2 .el-form-item__content{display:flex;margin-left:0!important;width:100%!important}._fc-table-form-v2 .el-form-item__label{display:none!important}._fc-tf-pro-handle{align-items:center;display:flex;flex-direction:row;justify-content:space-between;margin-top:12px}._fc-table-form-v2 .el-cascader,._fc-table-form-v2 .el-date-editor,._fc-table-form-v2 .el-input-number,._fc-table-form-v2 .el-select,._fc-table-form-v2 .el-slider{width:100%}._fc-table-form-v2{transform:translateZ(0);-webkit-transform:translateZ(0);will-change:transform}._fc-table-form-v2 .el-table{contain:layout style paint}._fc-table-form-v2 .el-table__body{overflow-anchor:none}._fc-table-form-v2 .el-form-item{contain:layout}._fc-city .el-select{width:150px}.form-create-m ._fc-city,.form-create-m ._fc-city .el-select{width:100%}.form-create ._fc-city .el-select+.el-select{margin-left:12px}._fc-dialog .el-dialog__headerbtn{align-items:center;color:var(--el-color-info);display:flex;justify-content:center}._fc-dialog .el-dialog__headerbtn:hover .fc-icon{color:var(--el-color-primary)}._fc-drawer .el-drawer__header{border-bottom:1px solid var(--fc-line-color-3);color:#333;font-size:15px;font-weight:600;margin-bottom:0;padding:14px 24px 14px 20px}._fc-drawer .el-drawer__body{padding:10px 24px 50px}._fc-drawer .el-drawer__close-btn{color:#909399;font-size:14px}._fc-drawer .el-drawer__footer{background:var(--fc-bg-color-1);bottom:0;box-shadow:0 -2px 4px #0000000d;left:0;padding:10px 0;position:absolute;right:0;text-align:center;width:100%;z-index:10}._fc-echarts{height:300px;width:100%}._fc-signature{width:100%}._fc-signature-btn,._fc-signature-preview{background:#fff;border:1px dashed #d4d7e0;border-radius:4px;box-sizing:border-box;color:#c9ccd8;font-size:14px;height:88px;line-height:88px;min-width:160px;position:relative;text-align:center;width:100%}._fc-signature-btn{cursor:pointer}._fc-signature.disabled ._fc-signature-btn{cursor:not-allowed}._fc-signature-preview>img{display:inline-block;height:88px}._fc-signature-preview .icon-delete2{cursor:pointer;display:inline-block;font-size:14px;line-height:14px;position:absolute;right:9px;top:9px}._fc-signature-btn i{font-size:14px}._fc-signature-dialog .el-dialog__body{text-align:center}._fc-signature-pad{background-image:linear-gradient(#fff 14px,transparent 0),linear-gradient(90deg,#fff 14px,#d4d7e0 0);background-size:15px 15px;border:1px dashed #d4d7e0;border-radius:4px}._fc-title{font-size:16px;font-weight:600;margin-bottom:16px;margin-top:1em;width:100%}._fc-title .fc-icon{font-size:inherit}._fc-title.h1,._fc-title.h2{border-bottom:1px solid #eee;padding-bottom:.3em}._fc-title.h1{font-size:32px;line-height:1.2}._fc-title.h2{font-size:24px;line-height:1.225}._fc-title.h3{font-size:20px;line-height:1.43}._fc-title.h4{font-size:16px}._fc-title.h5{font-size:14px}._fc-title.h6{font-size:12px;font-weight:inherit;margin:0}._fc-markdown{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;word-wrap:break-word;color-scheme:light;font-size:16px;line-height:1.5;margin:0;width:100%}._fc-markdown details,._fc-markdown figcaption,._fc-markdown figure{display:block}._fc-markdown summary{display:list-item}._fc-markdown [hidden]{display:none!important}._fc-markdown a{background-color:transparent;color:#0969da;text-decoration:none}._fc-markdown abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}._fc-markdown b,._fc-markdown strong{font-weight:600}._fc-markdown dfn{font-style:italic}._fc-markdown h1{border-bottom:1px solid #d1d9e0b3;font-size:2em;font-weight:600;margin:.67em 0;padding-bottom:.3em}._fc-markdown mark{background-color:#fff8c5;color:#1f2328}._fc-markdown small{font-size:90%}._fc-markdown sub,._fc-markdown sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}._fc-markdown sub{bottom:-.25em}._fc-markdown sup{top:-.5em}._fc-markdown img{border-style:none;box-sizing:content-box;max-width:100%}._fc-markdown code,._fc-markdown kbd,._fc-markdown pre,._fc-markdown samp{font-family:monospace;font-size:1em}._fc-markdown figure{margin:1em 2.5rem}._fc-markdown hr{background:transparent;background-color:#d1d9e0;border:0;box-sizing:content-box;height:.25em;margin:1.5rem 0;overflow:hidden;padding:0}._fc-markdown input{font:inherit;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible}._fc-markdown [type=button],._fc-markdown [type=reset],._fc-markdown [type=submit]{-webkit-appearance:button;appearance:button}._fc-markdown [type=checkbox],._fc-markdown [type=radio]{box-sizing:border-box;padding:0}._fc-markdown [type=number]::-webkit-inner-spin-button,._fc-markdown [type=number]::-webkit-outer-spin-button{height:auto}._fc-markdown [type=search]::-webkit-search-cancel-button,._fc-markdown [type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}._fc-markdown ::-webkit-input-placeholder{color:inherit;opacity:.54}._fc-markdown ::-webkit-file-upload-button{-webkit-appearance:button;appearance:button;font:inherit}._fc-markdown a:hover{text-decoration:underline}._fc-markdown ::placeholder{color:#59636e;opacity:1}._fc-markdown hr:after,._fc-markdown hr:before{content:"";display:table}._fc-markdown hr:after{clear:both}._fc-markdown table{border-collapse:collapse;border-spacing:0;display:block;font-variant:tabular-nums;max-width:100%;overflow:auto;width:max-content}._fc-markdown td,._fc-markdown th{padding:0}._fc-markdown details summary{cursor:pointer}._fc-markdown [role=button]:focus,._fc-markdown a:focus,._fc-markdown input[type=checkbox]:focus,._fc-markdown input[type=radio]:focus{box-shadow:none;outline:2px solid #0969da;outline-offset:-2px}._fc-markdown [role=button]:focus:not(:focus-visible),._fc-markdown a:focus:not(:focus-visible),._fc-markdown input[type=checkbox]:focus:not(:focus-visible),._fc-markdown input[type=radio]:focus:not(:focus-visible){outline:1px solid transparent}._fc-markdown [role=button]:focus-visible,._fc-markdown a:focus-visible,._fc-markdown input[type=checkbox]:focus-visible,._fc-markdown input[type=radio]:focus-visible{box-shadow:none;outline:2px solid #0969da;outline-offset:-2px}._fc-markdown a:not([class]):focus,._fc-markdown a:not([class]):focus-visible,._fc-markdown input[type=checkbox]:focus,._fc-markdown input[type=checkbox]:focus-visible,._fc-markdown input[type=radio]:focus,._fc-markdown input[type=radio]:focus-visible{outline-offset:0}._fc-markdown kbd{background-color:#f6f8fa;border:1px solid #d1d9e0b3;border-radius:6px;box-shadow:inset 0 -1px #d1d9e0b3;color:#1f2328;display:inline-block;font:11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;line-height:10px;padding:.25rem;vertical-align:middle}._fc-markdown h1,._fc-markdown h2,._fc-markdown h3,._fc-markdown h4,._fc-markdown h5,._fc-markdown h6{font-weight:600;line-height:1.25;margin-bottom:1rem;margin-top:1.5rem}._fc-markdown h2{border-bottom:1px solid #d1d9e0b3;font-size:1.5em;font-weight:600;padding-bottom:.3em}._fc-markdown h3{font-size:1.25em;font-weight:600}._fc-markdown h4{font-size:1em;font-weight:600}._fc-markdown h5{font-size:.875em;font-weight:600}._fc-markdown h6{color:#59636e;font-size:.85em;font-weight:600}._fc-markdown p{margin-bottom:10px;margin-top:0}._fc-markdown blockquote{border-left:.25em solid #d1d9e0;color:#59636e;margin:0;padding:0 1em}._fc-markdown ol,._fc-markdown ul{margin-bottom:0;margin-top:0;padding-left:2em}._fc-markdown ol ol,._fc-markdown ul ol{list-style-type:lower-roman}._fc-markdown ol ol ol,._fc-markdown ol ul ol,._fc-markdown ul ol ol,._fc-markdown ul ul ol{list-style-type:lower-alpha}._fc-markdown dd{margin-left:0}._fc-markdown code,._fc-markdown pre,._fc-markdown samp,._fc-markdown tt{font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px}._fc-markdown pre{word-wrap:normal;margin-bottom:0;margin-top:0}._fc-markdown input::-webkit-inner-spin-button,._fc-markdown input::-webkit-outer-spin-button{appearance:none;margin:0}._fc-markdown:after,._fc-markdown:before{content:"";display:table}._fc-markdown:after{clear:both}._fc-markdown>:first-child{margin-top:0!important}._fc-markdown>:last-child{margin-bottom:0!important}._fc-markdown a:not([href]){color:inherit;text-decoration:none}._fc-markdown blockquote,._fc-markdown details,._fc-markdown dl,._fc-markdown ol,._fc-markdown p,._fc-markdown pre,._fc-markdown table,._fc-markdown ul{margin-bottom:1rem;margin-top:0}._fc-markdown blockquote>:first-child{margin-top:0}._fc-markdown blockquote>:last-child{margin-bottom:0}._fc-markdown h1:hover .anchor,._fc-markdown h2:hover .anchor,._fc-markdown h3:hover .anchor,._fc-markdown h4:hover .anchor,._fc-markdown h5:hover .anchor,._fc-markdown h6:hover .anchor{text-decoration:none}._fc-markdown h1 code,._fc-markdown h1 tt,._fc-markdown h2 code,._fc-markdown h2 tt,._fc-markdown h3 code,._fc-markdown h3 tt,._fc-markdown h4 code,._fc-markdown h4 tt,._fc-markdown h5 code,._fc-markdown h5 tt,._fc-markdown h6 code,._fc-markdown h6 tt{font-size:inherit;padding:0 .2em}._fc-markdown summary h1,._fc-markdown summary h2,._fc-markdown summary h3,._fc-markdown summary h4,._fc-markdown summary h5,._fc-markdown summary h6{display:inline-block}._fc-markdown summary h1,._fc-markdown summary h2{border-bottom:0;padding-bottom:0}._fc-markdown ol.no-list,._fc-markdown ul.no-list{list-style-type:none;padding:0}._fc-markdown ol[type="a s"]{list-style-type:lower-alpha}._fc-markdown ol[type="A s"]{list-style-type:upper-alpha}._fc-markdown ol[type="i s"]{list-style-type:lower-roman}._fc-markdown ol[type="I s"]{list-style-type:upper-roman}._fc-markdown div>ol:not([type]),._fc-markdown ol[type="1"]{list-style-type:decimal}._fc-markdown ol ol,._fc-markdown ol ul,._fc-markdown ul ol,._fc-markdown ul ul{margin-bottom:0;margin-top:0}._fc-markdown li>p{margin-top:1rem}._fc-markdown li+li{margin-top:.25em}._fc-markdown dl{padding:0}._fc-markdown dl dt{font-size:1em;font-style:italic;font-weight:600;margin-top:1rem;padding:0}._fc-markdown dl dd{margin-bottom:1rem;padding:0 1rem}._fc-markdown table th{font-weight:600}._fc-markdown table td,._fc-markdown table th{border:1px solid #d1d9e0;padding:6px 13px}._fc-markdown table td>:last-child{margin-bottom:0}._fc-markdown table tr{background-color:#fff;border-top:1px solid #d1d9e0b3}._fc-markdown table tr:nth-child(2n){background-color:#f6f8fa}._fc-markdown table img{background-color:transparent}._fc-markdown img[align=right]{padding-left:20px}._fc-markdown img[align=left]{padding-right:20px}._fc-markdown .emoji{background-color:transparent;max-width:none;vertical-align:text-top}._fc-markdown span.frame{display:block;overflow:hidden}._fc-markdown span.frame>span{border:1px solid #d1d9e0;display:block;float:left;margin:13px 0 0;overflow:hidden;padding:7px;width:auto}._fc-markdown span.frame span img{display:block;float:left}._fc-markdown span.frame span span{clear:both;color:#1f2328;display:block;padding:5px 0 0}._fc-markdown span.align-center{clear:both;display:block;overflow:hidden}._fc-markdown span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}._fc-markdown span.align-center span img{margin:0 auto;text-align:center}._fc-markdown span.align-right{clear:both;display:block;overflow:hidden}._fc-markdown span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}._fc-markdown span.align-right span img{margin:0;text-align:right}._fc-markdown span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}._fc-markdown span.float-left span{margin:13px 0 0}._fc-markdown span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}._fc-markdown span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}._fc-markdown code,._fc-markdown tt{background-color:#818b981f;border-radius:6px;font-size:85%;margin:0;padding:.2em .4em;white-space:break-spaces}._fc-markdown code br,._fc-markdown tt br{display:none}._fc-markdown del code{text-decoration:inherit}._fc-markdown samp{font-size:85%}._fc-markdown pre code{font-size:100%}._fc-markdown pre>code{background:transparent;border:0;margin:0;padding:0;white-space:pre;word-break:normal}._fc-markdown .highlight{margin-bottom:1rem}._fc-markdown .highlight pre{margin-bottom:0;word-break:normal}._fc-markdown .highlight pre,._fc-markdown pre{background-color:#f6f8fa;border-radius:6px;color:#1f2328;font-size:85%;line-height:1.45;overflow:auto;padding:1rem}._fc-markdown pre code,._fc-markdown pre tt{word-wrap:normal;background-color:transparent;border:0;display:inline;line-height:inherit;margin:0;max-width:auto;overflow:visible;padding:0}._fc-markdown [data-footnote-ref]:before{content:"["}._fc-markdown [data-footnote-ref]:after{content:"]"}._fc-markdown [role=button]:focus:not(:focus-visible),._fc-markdown [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),._fc-markdown a:focus:not(:focus-visible),._fc-markdown button:focus:not(:focus-visible),._fc-markdown summary:focus:not(:focus-visible){box-shadow:none;outline:none}._fc-markdown [tabindex="0"]:focus:not(:focus-visible),._fc-markdown details-dialog:focus:not(:focus-visible){outline:none}._fc-markdown g-emoji{display:inline-block;font-family:Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:1em;font-style:normal!important;font-weight:400;line-height:1;min-width:1ch;vertical-align:-.075em}._fc-markdown g-emoji img{height:1em;width:1em}._fc-markdown .task-list-item{list-style-type:none}._fc-markdown .task-list-item label{font-weight:400}._fc-markdown .task-list-item.enabled label{cursor:pointer}._fc-markdown .task-list-item+.task-list-item{margin-top:.25rem}._fc-markdown .task-list-item .handle{display:none}._fc-markdown .task-list-item-checkbox{margin:0 .2em .25em -1.4em;vertical-align:middle}._fc-markdown ul:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}._fc-markdown ol:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}._fc-iframe-box,._fc-video-box{width:100%}._fc-cell{display:inline-block}._fc-cell .el-cascader,._fc-cell .el-date-editor,._fc-cell .el-input-number,._fc-cell .el-select,._fc-cell .el-slider{width:100%}._fc-data-select-pop{display:none!important}._fc-data-select,._fc-tdt-picker[data-v-3a3b6801]{width:100%}._fc-tdt-picker-search-wrapper[data-v-3a3b6801]{margin-bottom:16px}._fc-tdt-picker-search-input[data-v-3a3b6801]{width:100%}._fc-tdt-picker-container[data-v-3a3b6801]{border:1px solid var(--el-border-color);border-radius:4px;height:450px;margin-bottom:16px;overflow:hidden;position:relative;width:100%}._fc-upload-preview{border-radius:5px;display:inline-block;height:120px;overflow:hidden;width:120px}.form-create.is-preview ._fc-upload .el-icon--close,.form-create.is-preview ._fc-upload .el-icon--close-tip,.form-create.is-preview ._fc-upload .el-upload{display:none!important}.fc-print-form .el-input__wrapper,.fc-print-form .el-select__wrapper,.fc-print-form .el-textarea__inner{border:1px solid var(--el-input-border-color,var(--el-border-color));box-shadow:none!important}.form-create .el-card__body,.form-create .el-collapse-item__content,.form-create .el-tab-pane{display:flex;flex-direction:row;flex-wrap:wrap}@font-face{font-family:fc-icon;src:url(data:font/woff;base64,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) format("woff")}.fc-icon{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:fc-icon!important;font-size:16px;font-style:normal}.icon-paragraph:before{content:"\\e720"}.icon-cryingface:before{content:"\\e700"}.icon-service:before{content:"\\e706"}.icon-add3:before{content:"\\e707"}.icon-collect:before{content:"\\e708"}.icon-balance:before{content:"\\e709"}.icon-bulletin:before{content:"\\e70a"}.icon-inquiry:before{content:"\\e70b"}.icon-lock:before{content:"\\e70c"}.icon-liking:before{content:"\\e70d"}.icon-like:before{content:"\\e70e"}.icon-reduce:before{content:"\\e70f"}.icon-idcard:before{content:"\\e710"}.icon-scanning:before{content:"\\e711"}.icon-bankcard:before{content:"\\e712"}.icon-download:before{content:"\\e713"}.icon-smileyface:before{content:"\\e714"}.icon-pet:before{content:"\\e715"}.icon-notinterested:before{content:"\\e716"}.icon-share:before{content:"\\e717"}.icon-data1:before{content:"\\e718"}.icon-edit1:before{content:"\\e719"}.icon-female:before{content:"\\e71a"}.icon-forward:before{content:"\\e71b"}.icon-subscription:before{content:"\\e71c"}.icon-person:before{content:"\\e71d"}.icon-male:before{content:"\\e71e"}.icon-unlock:before{content:"\\e71f"}.icon-mark:before{content:"\\e705"}.icon-play:before{content:"\\e6f1"}.icon-log:before{content:"\\e6f2"}.icon-savedocument:before{content:"\\e6f3"}.icon-permissions:before{content:"\\e6f4"}.icon-businesstrip:before{content:"\\e6f5"}.icon-documentexchange:before{content:"\\e6f6"}.icon-resumelibrary:before{content:"\\e6f7"}.icon-statistics:before{content:"\\e6f8"}.icon-supervision:before{content:"\\e6f9"}.icon-news:before{content:"\\e6fa"}.icon-review:before{content:"\\e6fb"}.icon-usb:before{content:"\\e6fd"}.icon-contacts:before{content:"\\e6fe"}.icon-bill:before{content:"\\e6ff"}.icon-process:before{content:"\\e701"}.icon-mouse:before{content:"\\e702"}.icon-send1:before{content:"\\e703"}.icon-transactions:before{content:"\\e704"}.icon-application:before{content:"\\e6e8"}.icon-bag:before{content:"\\e6e9"}.icon-audio1:before{content:"\\e6ea"}.icon-askforleave:before{content:"\\e6eb"}.icon-birthday:before{content:"\\e6ec"}.icon-comment:before{content:"\\e6ed"}.icon-documents:before{content:"\\e6ee"}.icon-email:before{content:"\\e6ef"}.icon-expediting:before{content:"\\e6f0"}.icon-vue:before{content:"\\e6e7"}.icon-stack:before{content:"\\e6e5"}.icon-excel:before{content:"\\e6e6"}.icon-write:before{content:"\\e6e4"}.icon-branch:before{content:"\\e6e3"}.icon-device:before{content:"\\e6e0"}.icon-position-left:before{content:"\\e6e2"}.icon-search:before{content:"\\e6e1"}.icon-expand:before{content:"\\e6df"}.icon-expand-left:before{content:"\\e6df";display:inline-block;transform:rotate(-180deg)}.icon-data-select:before{content:"\\e6dd"}.icon-markdown:before{content:"\\e893"}.icon-grid-line:before{content:"\\e600"}.icon-print:before{content:"\\e6de"}.icon-city:before{content:"\\e64b"}.icon-location:before{content:"\\e6d4"}.icon-qrcode:before{content:"\\e6ce"}.icon-input-id:before{content:"\\e6d1"}.icon-iframe:before{content:"\\e6d2"}.icon-audio:before{content:"\\e6d3"}.icon-form-model:before{content:"\\e6d5"}.icon-title:before{content:"\\e6d6"}.icon-sign:before{content:"\\e6d7"}.icon-address:before{content:"\\e6d8"}.icon-statistic:before{content:"\\e6d9"}.icon-barcode:before{content:"\\e6da"}.icon-video:before{content:"\\e6db"}.icon-avatar:before{content:"\\e6dc"}.icon-suspend:before{content:"\\e6cf"}.icon-warning:before{content:"\\e6d0"}.icon-send:before{content:"\\e6cc"}.icon-refresh2:before{content:"\\e6cd"}.icon-ai:before{content:"\\e6cb"}.icon-ai.bright{-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#328ff7,#62e3a3);-webkit-background-clip:text}.icon-column4:before{content:"\\e6c7"}.icon-column3:before{content:"\\e6c6"}.icon-column2:before{content:"\\e6c8"}.icon-column1:before{content:"\\e6c9"}.icon-layout:before{content:"\\e6ca"}.icon-segmented:before{content:"\\e682"}.icon-mention:before{content:"\\e6c5"}.icon-input-tag:before{content:"\\e6c4"}.icon-up:before{content:"\\e697";display:inline-block;transform:rotate(180deg)}.icon-alignitems-flexstart:before{content:"\\e67f";display:inline-block;transform:rotate(180deg)}.icon-align-center:before{content:"\\e6a5";display:inline-block;transform:rotate(90deg)}.icon-align-flexstart:before{content:"\\e6a4";display:inline-block;transform:rotate(90deg)}.icon-align-spacearound:before{content:"\\e670";display:inline-block;transform:rotate(-90deg)}.icon-align-spacebetween:before{content:"\\e695";display:inline-block;transform:rotate(-90deg)}.icon-align-stretch:before{content:"\\e6a7";display:inline-block;transform:rotate(-90deg)}.icon-align-flexend:before{content:"\\e6a4";display:inline-block;transform:rotate(-90deg)}.icon-justify-flexend:before{content:"\\e6a4";display:inline-block;transform:rotate(180deg)}.icon-direction-row:before{content:"\\e68b";display:inline-block;transform:rotate(180deg)}.icon-direction-column:before{content:"\\e68b";display:inline-block;transform:rotate(-90deg)}.icon-direction-columnreverse:before{content:"\\e68b";display:inline-block;transform:rotate(90deg)}.icon-arrow:before{content:"\\e697";display:inline-block;transform:rotate(180deg)}.icon-cell:before{content:"\\e654"}.icon-table:before{content:"\\eb0a"}.icon-next-step:before{content:"\\e6b4";display:inline-block;transform:rotateY(180deg)}.icon-grid:before{content:"\\e65c";display:inline-block;transform:rotate(90deg)}.icon-alignitems-stretch:before{content:"\\e67e"}.icon-alignitems-flexend:before{content:"\\e67f"}.icon-check:before{content:"\\e680"}.icon-auto:before{content:"\\e681"}.icon-config-event:before{content:"\\e66e"}.icon-calendar:before{content:"\\e683"}.icon-config-style:before{content:"\\e684"}.icon-copy:before{content:"\\e676"}.icon-config-advanced:before{content:"\\e686"}.icon-config-props:before{content:"\\e687"}.icon-delete-circle2:before{content:"\\e688"}.icon-delete-circle:before,.icon-delete2:before{content:"\\e689"}.icon-delete:before{content:"\\e68a"}.icon-direction-rowreverse:before{content:"\\e68b"}.icon-display-flex:before{content:"\\e68c"}.icon-dialog:before{content:"\\e66f"}.icon-drag:before{content:"\\e68e"}.icon-display-block:before{content:"\\e68f"}.icon-data:before{content:"\\e690"}.icon-edit2:before{content:"\\e691"}.icon-edit:before{content:"\\e692"}.icon-add-col:before{content:"\\e693"}.icon-display-inlineblock:before{content:"\\e694"}.icon-config-base:before{content:"\\e6bf"}.icon-config-validate:before{content:"\\e696"}.icon-down:before{content:"\\e697"}.icon-display-inline:before{content:"\\e698"}.icon-eye:before{content:"\\e699"}.icon-eye-close:before{content:"\\e69a"}.icon-import:before{content:"\\e6a6"}.icon-preview:before{content:"\\e69b"}.icon-flex-nowrap:before{content:"\\e69c"}.icon-folder:before{content:"\\e69d"}.icon-form-circle:before{content:"\\e69e"}.icon-flex-wrap:before{content:"\\e69f"}.icon-form:before{content:"\\e6a0"}.icon-form-item:before{content:"\\e6a1"}.icon-icon:before{content:"\\e6a2"}.icon-image:before{content:"\\e6a3"}.icon-justify-flexstart:before{content:"\\e6a4"}.icon-justify-center:before{content:"\\e6a5"}.icon-justify-spacearound:before{content:"\\e670"}.icon-justify-stretch:before{content:"\\e6a7"}.icon-link2:before{content:"\\e6a8"}.icon-justify-spacebetween:before{content:"\\e695"}.icon-minus:before{content:"\\e6aa"}.icon-menu2:before{content:"\\e6ab"}.icon-more:before{content:"\\e6ac"}.icon-menu:before{content:"\\e6ad"}.icon-language:before{content:"\\e6ae"}.icon-pad:before{content:"\\e6af"}.icon-mobile:before{content:"\\e6b0"}.icon-page-max:before{content:"\\e6b1"}.icon-move:before{content:"\\e6b2"}.icon-page-min:before{content:"\\e6b3"}.icon-pre-step:before{content:"\\e6b4"}.icon-pc:before{content:"\\e6b5"}.icon-page:before{content:"\\e6b6"}.icon-refresh:before{content:"\\e6b7"}.icon-radius:before{content:"\\e6b8"}.icon-save-filled:before{content:"\\e6b9"}.icon-question:before{content:"\\e6ba"}.icon-scroll:before{content:"\\e6bb"}.icon-script:before{content:"\\e6bc"}.icon-setting:before{content:"\\e6bd"}.icon-save-online:before,.icon-save:before{content:"\\e6be"}.icon-task-add:before{content:"\\e68d"}.icon-shadow:before{content:"\\e6c0"}.icon-variable:before{content:"\\e6c1"}.icon-yes:before{content:"\\e6c2"}.icon-shadow-inset:before{content:"\\e6c3"}.icon-date:before{content:"\\e642"}.icon-date-range:before{content:"\\e643"}.icon-collapse:before{content:"\\e644"}.icon-slider:before{content:"\\e665"}.icon-switch:before{content:"\\e646"}.icon-subform:before{content:"\\e647"}.icon-time-range:before{content:"\\e685"}.icon-tree-select:before{content:"\\e649"}.icon-value:before{content:"\\e64a"}.icon-table-form3:before{content:"\\e6a9"}.icon-alert:before{content:"\\e64c"}.icon-card:before{content:"\\e64d"}.icon-checkbox:before{content:"\\e64e"}.icon-cascader:before{content:"\\e64f"}.icon-button:before{content:"\\e650"}.icon-data-table:before{content:"\\e651"}.icon-group:before{content:"\\e652"}.icon-divider:before{content:"\\e653"}.icon-flex:before{content:"\\e654"}.icon-descriptions:before{content:"\\e655"}.icon-html:before{content:"\\e656"}.icon-editor:before{content:"\\e657"}.icon-input:before{content:"\\e658"}.icon-link:before{content:"\\e659"}.icon-password:before{content:"\\e65a"}.icon-radio:before{content:"\\e65b"}.icon-row:before{content:"\\e65c"}.icon-inline:before{content:"\\e65d"}.icon-rate:before{content:"\\e65e"}.icon-color:before{content:"\\e65f"}.icon-select:before{content:"\\e660"}.icon-json:before{content:"\\e661"}.icon-number:before{content:"\\e662"}.icon-space:before{content:"\\e664"}.icon-step-form:before{content:"\\e663"}.icon-table-form:before{content:"\\e666"}.icon-table-form2:before{content:"\\e667"}.icon-time:before{content:"\\e668"}.icon-span:before{content:"\\e669"}.icon-textarea:before{content:"\\e66a"}.icon-tooltip:before{content:"\\e66b"}.icon-slot:before{content:"\\e66c"}.icon-transfer:before{content:"\\e66d"}.icon-upload:before{content:"\\e673"}.icon-tag:before{content:"\\e671"}.icon-watermark:before{content:"\\e672"}.icon-tab:before{content:"\\e674"}.icon-tree:before{content:"\\e675"}.icon-table:before{content:"\\e677"}.icon-add-child:before{content:"\\e678"}.icon-add2:before{content:"\\e679"}.icon-add:before{content:"\\e67a"}.icon-alignitems-baseline:before{content:"\\e67b"}.icon-add-circle:before{content:"\\e67c"}.icon-alignitems-center:before{content:"\\e67d"}')), document.head.appendChild(e) } } catch (o) { console.error('vite-plugin-css-injected-by-js', o) } })()
const Ja = Object.defineProperty
const Za = (t, e, n) => e in t ? Ja(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n
const Se = (t, e, n) => (Za(t, typeof e != 'symbol' ? `${e}` : e, n), n)
/*!
 * @form-create/element-ui v3.2.33
 * (c) 2018-2025 xaboy
 * Github https://github.com/xaboy/form-create
 * Released under the MIT License.
 */
function Vi(t, e) {
  const n = Object.keys(t)
  if (Object.getOwnPropertySymbols) {
    let r = Object.getOwnPropertySymbols(t)
    e && (r = r.filter((i) => {
      return Object.getOwnPropertyDescriptor(t, i).enumerable
    })), n.push.apply(n, r)
  }
  return n
}
function X(t) {
  for (let e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}
    e % 2
      ? Vi(new Object(n), !0).forEach((r) => {
          Ie(t, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Vi(new Object(n)).forEach((r) => {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return t
}
function pe(t) {
  return typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? pe = function (e) {
      return typeof e
    }
    : pe = function (e) {
      return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
    }, pe(t)
}
function cs(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Ie(t, e, n) {
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
  }), e && xr(t, e)
}
function Bn(t) {
  return Bn = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (n) {
      return n.__proto__ || Object.getPrototypeOf(n)
    }, Bn(t)
}
function xr(t, e) {
  return xr = Object.setPrototypeOf || function (r, i) {
    return r.__proto__ = i, r
  }, xr(t, e)
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
    const r = Bn(t); let i
    if (e) {
      const o = Bn(this).constructor
      i = Reflect.construct(r, arguments, o)
    } else {
      i = r.apply(this, arguments)
    }
    return ps(this, i)
  }
}
function gs(t, e) {
  return _s(t) || bs(t, e) || Po(t, e) || $s()
}
function de(t) {
  return vs(t) || ys(t) || Po(t) || ws()
}
function vs(t) {
  if (Array.isArray(t))
    return Er(t)
}
function _s(t) {
  if (Array.isArray(t))
    return t
}
function ys(t) {
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
    } catch (l) {
      o = !0, s = l
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
function Po(t, e) {
  if (t) {
    if (typeof t == 'string')
      return Er(t, e)
    let n = Object.prototype.toString.call(t).slice(8, -1)
    if (n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set')
      return Array.from(t)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Er(t, e)
  }
}
function Er(t, e) {
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
function Xn(t, e) {
  return Object.keys(t).reduce((n, r) => {
    return (!e || !e.includes(r)) && (n[r] = t[r]), n
  }, {})
}
function et(t) {
  return Array.isArray(t) ? t : [null, void 0, ''].includes(t) ? [] : [t]
}
const Ss = 'fcCheckbox'; const Os = ye({
  name: Ss,
  inheritAttrs: !1,
  props: {
    formCreateInject: Object,
    modelValue: {
      type: Array,
      default() {
        return []
      },
    },
    type: String,
    options: Array,
    input: Boolean,
    inputValue: String,
  },
  emits: ['update:modelValue', 'fc.el'],
  setup(e, n) {
    const r = qe(e.formCreateInject, 'options', []); const i = qe(e, 'options'); const o = qe(e, 'modelValue'); const a = qe(e, 'inputValue', ''); const s = zr(a.value); const l = qe(e, 'input', !1); const c = function (m) {
      const w = de(et(o.value)); const b = w.indexOf(s.value)
      s.value = m, b > -1 && (w.splice(b, 1), w.push(m), p(w))
    }
    He(a, (h) => {
      if (!l.value) {
        s.value = h
        return
      }
      c(h)
    })
    const u = At(() => {
      let h = r.value || []
      return i.value && (h = i.value || []), Array.isArray(h) ? h : []
    })
    He(o, (h) => {
      let m = null
      if (!a.value && h != null && Array.isArray(h) && h.length > 0 && l.value) {
        const w = u.value.map((b) => {
          return b.value
        })
        h.forEach((b) => {
          !w.includes(b) && (m = b)
        })
      }
      m != null && (s.value = m)
    }, {
      immediate: !0,
    })
    var p = function (m) {
      n.emit('update:modelValue', m)
    }
    return {
      options: u,
      value: o,
      onInput: p,
      updateCustomValue: c,
      makeInput(m) {
        if (l.value) {
          return B(m, {
            value: s.value || void 0,
            label: s.value || void 0,
          }, {
            default() {
              return [B(J('ElInput'), {
                'size': 'small',
                'modelValue': s.value,
                'onUpdate:modelValue': c,
              }, null)]
            },
          })
        }
      },
    }
  },
  render() {
    let e; let n; const r = this; const i = this.type === 'button' ? 'ElCheckboxButton' : 'ElCheckbox'; const o = J(i)
    return B(J('ElCheckboxGroup'), Be(this.$attrs, {
      'modelValue': this.value,
      'onUpdate:modelValue': this.onInput,
      'ref': 'el',
    }), X({
      default() {
        return [r.options.map((s, l) => {
          const c = X({}, s); const u = c.value; const p = c.label
          return delete c.value, delete c.label, B(o, Be(c, {
            label: u,
            value: u,
            key: `${i + l}-${u}`,
          }), {
            default() {
              return [p || u || '']
            },
          })
        }), (e = (n = r.$slots).default) === null || e === void 0 ? void 0 : e.call(n), r.makeInput(o)]
      },
    }, Xn(this.$slots, ['default'])))
  },
  mounted() {
    this.$emit('fc.el', this.$refs.el)
  },
})
function To(t) {
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
function Kn(t, e) {
  e === void 0 && (e = {})
  const n = e.insertAt
  if (!(!t || typeof document > 'u')) {
    const r = document.head || document.getElementsByTagName('head')[0]; const i = document.createElement('style')
    i.type = 'text/css', n === 'top' && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
  }
}
const xs = '._fc-frame ._fc-files img{display:inline-block;height:100%;vertical-align:top;width:100%}._fc-frame ._fc-upload-btn{border:1px dashed #c0ccda;cursor:pointer}._fc-frame._fc-disabled ._fc-upload-btn,._fc-frame._fc-disabled .el-button{color:#999;cursor:not-allowed!important}._fc-frame ._fc-upload-cover{background:rgba(0,0,0,.6);bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;-webkit-transition:opacity .3s;-o-transition:opacity .3s;transition:opacity .3s}._fc-frame ._fc-upload-cover i{color:#fff;cursor:pointer;font-size:20px;margin:0 2px}._fc-frame ._fc-files:hover ._fc-upload-cover{opacity:1}._fc-frame .el-upload{display:block}._fc-frame ._fc-upload-icon{cursor:pointer}._fc-files,._fc-frame ._fc-upload-btn{background:#fff;border:1px solid #c0ccda;border-radius:4px;-webkit-box-shadow:2px 2px 5px rgba(0,0,0,.1);box-shadow:2px 2px 5px rgba(0,0,0,.1);-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:58px;line-height:58px;margin-right:4px;overflow:hidden;position:relative;text-align:center;width:58px}'
Kn(xs)
const Mo = {
  name: 'IconCircleClose',
}; const Es = {
  class: 'icon',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}; const ks = /* @__PURE__ */ Oe('path', {
  fill: 'currentColor',
  d: 'M466.752 512l-90.496-90.496a32 32 0 0145.248-45.248L512 466.752l90.496-90.496a32 32 0 1145.248 45.248L557.248 512l90.496 90.496a32 32 0 11-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 01-45.248-45.248L466.752 512z',
}, null, -1); const Cs = /* @__PURE__ */ Oe('path', {
  fill: 'currentColor',
  d: 'M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z',
}, null, -1); const As = [ks, Cs]
function Rs(t, e, n, r, i, o) {
  return H(), oe('svg', Es, As)
}
Mo.render = Rs
const Io = {
  name: 'IconDocument',
}; const Ds = {
  class: 'icon',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}; const Ps = /* @__PURE__ */ Oe('path', {
  fill: 'currentColor',
  d: 'M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 01-32 32H160a32 32 0 01-32-32V96a32 32 0 0132-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z',
}, null, -1); const Ts = [Ps]
function Ms(t, e, n, r, i, o) {
  return H(), oe('svg', Ds, Ts)
}
Io.render = Ms
const Fo = {
  name: 'IconDelete',
}; const Is = {
  class: 'icon',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}; const Fs = /* @__PURE__ */ Oe('path', {
  fill: 'currentColor',
  d: 'M160 256H96a32 32 0 010-64h256V95.936a32 32 0 0132-32h256a32 32 0 0132 32V192h256a32 32 0 110 64h-64v672a32 32 0 01-32 32H192a32 32 0 01-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32zm192 0a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32z',
}, null, -1); const js = [Fs]
function Vs(t, e, n, r, i, o) {
  return H(), oe('svg', Is, js)
}
Fo.render = Vs
const jo = {
  name: 'IconView',
}; const Ls = {
  class: 'icon',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}; const Bs = /* @__PURE__ */ Oe('path', {
  fill: 'currentColor',
  d: 'M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 110 448 224 224 0 010-448zm0 64a160.192 160.192 0 00-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z',
}, null, -1); const Ns = [Bs]
function zs(t, e, n, r, i, o) {
  return H(), oe('svg', Ls, Ns)
}
jo.render = zs
const Vo = {
  name: 'IconFolderOpened',
}; const Us = {
  class: 'icon',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}; const qs = /* @__PURE__ */ Oe('path', {
  fill: 'currentColor',
  d: 'M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 01216.96 384H832zm-24.96 512H96a32 32 0 01-32-32V160a32 32 0 0132-32h287.872l128.384 128H864a32 32 0 0132 32v96h23.04a32 32 0 0131.04 39.744l-112 448A32 32 0 01807.04 896z',
}, null, -1); const Hs = [qs]
function Gs(t, e, n, r, i, o) {
  return H(), oe('svg', Us, Hs)
}
Vo.render = Gs
const Ys = 'fcFrame'; const Ws = ye({
  name: Ys,
  props: {
    type: {
      type: String,
      default: 'input',
    },
    field: String,
    helper: {
      type: Boolean,
      default: !0,
    },
    disabled: {
      type: Boolean,
      default: !1,
    },
    src: {
      type: String,
      required: !0,
    },
    icon: {
      type: String,
      default: 'IconFolderOpened',
    },
    width: {
      type: String,
      default: '500px',
    },
    height: {
      type: String,
      default: '370px',
    },
    maxLength: {
      type: Number,
      default: 0,
    },
    okBtnText: {
      type: String,
      default: '',
    },
    closeBtnText: {
      type: String,
      default: '',
    },
    modalTitle: String,
    handleIcon: {
      type: [String, Boolean],
      default: void 0,
    },
    title: String,
    allowRemove: {
      type: Boolean,
      default: !0,
    },
    onOpen: {
      type: Function,
      default() {
      },
    },
    onOk: {
      type: Function,
      default() {
      },
    },
    onCancel: {
      type: Function,
      default() {
      },
    },
    onLoad: {
      type: Function,
      default() {
      },
    },
    onBeforeRemove: {
      type: Function,
      default() {
      },
    },
    onRemove: {
      type: Function,
      default() {
      },
    },
    onHandle: Function,
    modal: {
      type: Object,
      default() {
        return {}
      },
    },
    srcKey: [String, Number],
    modelValue: [Array, String, Number, Object],
    previewMask: void 0,
    footer: {
      type: Boolean,
      default: !0,
    },
    reload: {
      type: Boolean,
      default: !0,
    },
    closeBtn: {
      type: Boolean,
      default: !0,
    },
    okBtn: {
      type: Boolean,
      default: !0,
    },
    formCreateInject: Object,
  },
  emits: ['update:modelValue', 'change'],
  components: {
    IconFolderOpened: Vo,
    IconView: jo,
  },
  data() {
    return {
      fileList: et(this.modelValue),
      previewVisible: !1,
      frameVisible: !1,
      previewImage: '',
      bus: new To(),
    }
  },
  watch: {
    modelValue(e) {
      this.fileList = et(e)
    },
  },
  methods: {
    close() {
      this.closeModel(!0)
    },
    closeModel(e) {
      this.bus.$emit(e ? '$close' : '$ok'), this.reload && (this.bus.$off('$ok'), this.bus.$off('$close')), this.frameVisible = !1
    },
    handleCancel() {
      this.previewVisible = !1
    },
    showModel() {
      this.disabled || this.onOpen() === !1 || (this.frameVisible = !0)
    },
    input() {
      const e = this.fileList; const n = this.maxLength === 1 ? e[0] || '' : e
      this.$emit('update:modelValue', n), this.$emit('change', n)
    },
    makeInput() {
      const e = this
      return B(J('ElInput'), Be({
        type: 'text',
        modelValue: this.fileList.map((n) => {
          return e.getSrc(n)
        }).toString(),
        readonly: !0,
      }, {
        key: 1,
      }), {
        append() {
          return B(J('ElButton'), {
            icon: J(e.icon),
            onClick() {
              return e.showModel()
            },
          }, null)
        },
        suffix() {
          return e.fileList.length && !e.disabled
            ? B(J('ElIcon'), {
                class: 'el-input__icon _fc-upload-icon',
                onClick() {
                  e.fileList = [], e.input()
                },
              }, {
                default() {
                  return [B(Mo, null, null)]
                },
              })
            : null
        },
      })
    },
    makeGroup(e) {
      return (!this.maxLength || this.fileList.length < this.maxLength) && e.push(this.makeBtn()), B('div', {
        key: 2,
      }, [e])
    },
    makeItem(e, n) {
      return B('div', {
        class: '_fc-files',
        key: `3${e}`,
      }, [n])
    },
    valid(e) {
      const n = this.formCreateInject.field || this.field
      if (n && e !== n)
        throw new Error('[frame]\u65E0\u6548\u7684\u5B57\u6BB5\u503C')
    },
    makeIcons(e, n) {
      if (this.handleIcon !== !1 || this.allowRemove === !0) {
        const r = []
        return (this.type !== 'file' && this.handleIcon !== !1 || this.type === 'file' && this.handleIcon) && r.push(this.makeHandleIcon(e, n)), this.allowRemove && r.push(this.makeRemoveIcon(e, n)), B('div', {
          class: '_fc-upload-cover',
          key: 4,
        }, [r])
      }
    },
    makeHandleIcon(e, n) {
      const r = this; const i = J(this.handleIcon === !0 || this.handleIcon === void 0 ? 'icon-view' : this.handleIcon)
      return B(J('ElIcon'), {
        onClick() {
          return r.handleClick(e)
        },
        key: `5${n}`,
      }, {
        default() {
          return [B(i, null, null)]
        },
      })
    },
    makeRemoveIcon(e, n) {
      const r = this
      return B(J('ElIcon'), {
        onClick() {
          return r.handleRemove(e)
        },
        key: `6${n}`,
      }, {
        default() {
          return [B(Fo, null, null)]
        },
      })
    },
    makeFiles() {
      const e = this
      return this.makeGroup(this.fileList.map((n, r) => {
        return e.makeItem(r, [B(J('ElIcon'), {
          onClick() {
            return e.handleClick(n)
          },
        }, {
          default() {
            return [B(Io, null, null)]
          },
        }), e.makeIcons(n, r)])
      }))
    },
    makeImages() {
      const e = this
      return this.makeGroup(this.fileList.map((n, r) => {
        return e.makeItem(r, [B('img', {
          src: e.getSrc(n),
        }, null), e.makeIcons(n, r)])
      }))
    },
    makeBtn() {
      const e = this; const n = J(this.icon)
      return B('div', {
        class: '_fc-upload-btn',
        onClick() {
          return e.showModel()
        },
        key: 7,
      }, [B(J('ElIcon'), null, {
        default() {
          return [B(n, null, null)]
        },
      })])
    },
    handleClick(e) {
      if (this.onHandle)
        return this.onHandle(e)
      this.previewImage = this.getSrc(e), this.previewVisible = !0
    },
    handleRemove(e) {
      this.disabled || this.onBeforeRemove(e) !== !1 && (this.fileList.splice(this.fileList.indexOf(e), 1), this.input(), this.onRemove(e))
    },
    getSrc(e) {
      return this.srcKey ? e[this.srcKey] : e
    },
    frameLoad(e) {
      const n = this
      this.onLoad(e)
      try {
        this.helper === !0 && (e.form_create_helper = {
          api: this.formCreateInject.api,
          close(i) {
            n.valid(i), n.closeModel()
          },
          set(i, o) {
            n.valid(i), !n.disabled && n.$emit('update:modelValue', o)
          },
          get(i) {
            return n.valid(i), n.modelValue
          },
          onOk(i) {
            return n.bus.$on('$ok', i)
          },
          onClose(i) {
            return n.bus.$on('$close', i)
          },
        })
      } catch (r) {
        console.error(r)
      }
    },
    makeFooter() {
      const e = this; const n = this.$props; const r = n.okBtnText; const i = n.closeBtnText; const o = n.closeBtn; const a = n.okBtn; const s = n.footer
      if (s) {
        return B('div', null, [o
          ? B(J('ElButton'), {
              onClick() {
                return e.onCancel() !== !1 && (e.frameVisible = !1)
              },
            }, {
              default() {
                return [i || e.formCreateInject.t('close') || '\u5173\u95ED']
              },
            })
          : null, a
          ? B(J('ElButton'), {
              type: 'primary',
              onClick() {
                return e.onOk() !== !1 && e.closeModel()
              },
            }, {
              default() {
                return [r || e.formCreateInject.t('ok') || '\u786E\u5B9A']
              },
            })
          : null])
      }
    },
  },
  render() {
    const e = this; const n = this.type; let r
    n === 'input' ? r = this.makeInput() : n === 'image' ? r = this.makeImages() : r = this.makeFiles()
    const i = this.$props; const o = i.width; const a = o === void 0 ? '30%' : o; const s = i.height; const l = i.src; const c = i.title; const u = i.modalTitle
    return Fe(() => {
      e.$refs.frame && e.frameLoad(e.$refs.frame.contentWindow || {})
    }), B('div', {
      class: {
        '_fc-frame': !0,
        '_fc-disabled': this.disabled,
      },
    }, [r, B(J('ElDialog'), {
      appendToBody: !0,
      modal: this.previewMask,
      title: u,
      modelValue: this.previewVisible,
      onClose: this.handleCancel,
    }, {
      default() {
        return [B('img', {
          style: 'width: 100%',
          src: e.previewImage,
        }, null)]
      },
    }), B(J('ElDialog'), Be({
      appendToBody: !0,
    }, X({
      width: a,
      title: c,
    }, this.modal), {
      modelValue: this.frameVisible,
      onClose() {
        return e.closeModel(!0)
      },
    }), {
      default() {
        return [e.frameVisible || !e.reload
          ? B('iframe', {
              ref: 'frame',
              src: l,
              frameBorder: '0',
              style: {
                height: s,
                border: '0 none',
                width: '100%',
              },
            }, null)
          : null]
      },
      footer() {
        return e.makeFooter()
      },
    })])
  },
  beforeMount() {
    const e = this.formCreateInject; const n = e.name; const r = e.field; const i = e.api
    n && i.on(`fc:closeModal:${n}`, this.close), r && i.on(`fc:closeModal:${r}`, this.close)
  },
  beforeUnmount() {
    const e = this.formCreateInject; const n = e.name; const r = e.field; const i = e.api
    n && i.off(`fc:closeModal:${n}`, this.close), r && i.off(`fc:closeModal:${r}`, this.close)
  },
}); const Xs = 'fcRadio'; const Ks = ye({
  name: Xs,
  inheritAttrs: !1,
  props: {
    formCreateInject: Object,
    modelValue: {
      type: [String, Number, Boolean],
      default: '',
    },
    options: Array,
    type: String,
    input: Boolean,
    inputValue: String,
  },
  emits: ['update:modelValue', 'fc.el'],
  setup(e, n) {
    const r = qe(e.formCreateInject, 'options', []); const i = qe(e, 'options'); const o = qe(e, 'modelValue'); const a = qe(e, 'inputValue', ''); const s = zr(a.value); const l = qe(e, 'input', !1)
    He(a, (h) => {
      if (!l.value) {
        s.value = h
        return
      }
      p(h)
    })
    const c = At(() => {
      let h = r.value || []
      return i.value && (h = i.value || []), Array.isArray(h) ? h : []
    })
    He(o, (h) => {
      let m = !1
      !a.value && h != null && l.value && (m = !c.value.map((w) => {
        return w.value
      }).includes(h)), m && (s.value = h)
    }, {
      immediate: !0,
    })
    const u = function (m) {
      n.emit('update:modelValue', m)
    }; var p = function (m) {
      const w = s.value
      s.value = m, o.value === w && u(m)
    }
    return {
      options: c,
      value: o,
      onInput: u,
      updateCustomValue: p,
      customValue: s,
      makeInput(m) {
        if (l.value) {
          return B(m, {
            checked: !1,
            value: s.value || void 0,
            label: s.value || void 0,
          }, {
            default() {
              return [B(J('ElInput'), {
                'size': 'small',
                'modelValue': s.value,
                'onUpdate:modelValue': p,
              }, null)]
            },
          })
        }
      },
    }
  },
  render() {
    let e; let n; const r = this; const i = this.type === 'button' ? 'ElRadioButton' : 'ElRadio'; const o = J(i)
    return B(J('ElRadioGroup'), Be(this.$attrs, {
      'modelValue': this.value,
      'onUpdate:modelValue': this.onInput,
      'ref': 'el',
    }), X({
      default() {
        return [r.options.map((s, l) => {
          const c = X({}, s); const u = c.value; const p = c.label
          return delete c.value, delete c.label, B(o, Be(c, {
            label: u,
            value: u,
            key: `${i + l}-${u}`,
          }), {
            default() {
              return [p || u || '']
            },
          })
        }), (e = (n = r.$slots).default) === null || e === void 0 ? void 0 : e.call(n), r.makeInput(o)]
      },
    }, Xn(this.$slots, ['default'])))
  },
  mounted() {
    this.$emit('fc.el', this.$refs.el)
  },
}); var L = {
  type(e, n) {
    return Object.prototype.toString.call(e) === `[object ${n}]`
  },
  Undef(e) {
    return e == null
  },
  Element(e) {
    return pe(e) === 'object' && e !== null && e.nodeType === 1 && !L.Object(e)
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
function Pe(t, e) {
  return {}.hasOwnProperty.call(t, e)
}
const Js = 'fcSelect'; const Zs = ye({
  name: Js,
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
    const n = qe(e.formCreateInject, 'options', []); const r = qe(e, 'modelValue'); const i = function () {
      return Array.isArray(n.value) ? n.value : []
    }
    return {
      options: i,
      value: r,
    }
  },
  render() {
    const e = this; let n; let r; const i = function (l, c) {
      return B(J('ElOption'), Be(l, {
        key: `${c}-${l.value}`,
      }), null)
    }; const o = function (l, c) {
      return B(J('ElOptionGroup'), {
        label: l.label,
        key: `${c}-${l.label}`,
      }, {
        default() {
          return [L.trueArray(l.options) && l.options.map((p, h) => {
            return i(p, h)
          })]
        },
      })
    }; const a = this.options()
    return B(J('ElSelect'), Be(this.$attrs, {
      'modelValue': this.value,
      'onUpdate:modelValue': function (l) {
        return e.$emit('update:modelValue', l)
      },
      'ref': 'el',
    }), X({
      default() {
        return [a.map((l, c) => {
          return Pe(l || '', 'options') ? o(l, c) : i(l, c)
        }), (n = (r = e.$slots).default) === null || n === void 0 ? void 0 : n.call(r)]
      },
    }, Xn(this.$slots, ['default'])))
  },
  mounted() {
    this.$emit('fc.el', this.$refs.el)
  },
}); const Qs = 'fcTree'; const el = ye({
  name: Qs,
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
        e === 'selected' ? this.$refs.tree.setCurrentKey(this.modelValue) : this.$refs.tree.setCheckedKeys(et(this.modelValue))
      }
    },
  },
  render() {
    return B(J('ElTree'), Be(this.$attrs, {
      ref: 'tree',
      onCheck: this.updateValue,
      onNodeClick: this.updateValue,
    }), this.$slots)
  },
  mounted() {
    this.setValue(), this.$emit('fc.el', this.$refs.tree)
  },
}); const tl = '._fc-upload{width:100%}._fc-exceed .el-upload{display:none}.el-upload-list.is-disabled .el-upload{cursor:not-allowed!important}'
Kn(tl)
const Lo = {
  name: 'IconUpload',
}; const nl = {
  class: 'icon',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}; const rl = /* @__PURE__ */ Oe('path', {
  fill: 'currentColor',
  d: 'M160 832h704a32 32 0 110 64H160a32 32 0 110-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z',
}, null, -1); const il = [rl]
function ol(t, e, n, r, i, o) {
  return H(), oe('svg', nl, il)
}
Lo.render = ol
function Li(t, e) {
  return pe(t) === 'object'
    ? t
    : {
        url: t,
        is_string: !0,
        name: al(t),
        uid: e,
      }
}
function Bi(t) {
  return X(X({}, t), {}, {
    file: t,
    value: t,
  })
}
function al(t) {
  return (`${t}`).split('/').pop()
}
const sl = 'fcUpload'; const ll = ye({
  name: sl,
  inheritAttrs: !1,
  formCreateParser: {
    toFormValue(e) {
      return et(e)
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
    uploadText: String,
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
    this.fileList = et(this.modelValue).map(Li).map(Bi)
  },
  watch: {
    modelValue(e) {
      this.fileList = et(e).map(Li).map(Bi)
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
    let e; let n; const r = this; const i = et(this.modelValue).length
    return B('div', {
      class: '_fc-upload',
    }, [B(J('ElUpload'), Be({
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
    }), X({
      default() {
        return [((e = (n = r.$slots).default) === null || e === void 0 ? void 0 : e.call(n)) || (!['text', 'picture'].includes(r.listType)
          ? B(J('ElIcon'), null, {
              default() {
                return [B(Lo, null, null)]
              },
            })
          : B(J('ElButton'), {
              type: 'primary',
            }, {
              default() {
                return [r.formCreateInject.t('clickToUpload') || r.uploadText || '\u70B9\u51FB\u4E0A\u4F20']
              },
            }))]
      },
    }, Xn(this.$slots, ['default']))), B(J('ElDialog'), {
      appendToBody: !0,
      modal: this.previewMask,
      title: this.modalTitle,
      modelValue: this.previewVisible,
      onClose: this.handleCancel,
    }, {
      default() {
        return [B('img', {
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
function st(t, e, n) {
  t[e] = n
}
function Ft(t, e) {
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
          r = !1, a && st(t, i, [])
        } else if (o._clone && n !== void 0) {
          if (n) {
            o = o.getRule(), a && st(t, i, {})
          } else {
            st(t, i, o._clone())
            continue
          }
        } else {
          a && st(t, i, {})
        }
        t[i] = wn(t[i], o, n)
      } else {
        st(t, i, o), L.Undef(o) || (L.Undef(o.__json) || (t[i].__json = o.__json), L.Undef(o.__origin) || (t[i].__origin = o.__origin))
      }
    }
  }
  return n !== void 0 && Array.isArray(t)
    ? t.filter((s) => {
        return !s || !s.__ctrl
      })
    : t
}
function mt(t) {
  return wn({}, {
    value: t,
  }).value
}
const ul = Object.assign || function (t) {
  for (var e, n = 1; n < arguments.length; n++) {
    for (const r in e = arguments[n], e)
      Object.prototype.hasOwnProperty.call(e, r) && st(t, r, e[r])
  }
  return t
}
function re() {
  return ul.apply(this, arguments)
}
function kr(t) {
  return pe(t) !== 'object' || t === null ? t : Array.isArray(t) ? de(t) : X({}, t)
}
const cl = '._fc-group{display:flex;flex-direction:column;justify-content:center;min-height:38px;width:100%}._fc-group-disabled ._fc-group-add,._fc-group-disabled ._fc-group-btn{cursor:not-allowed}._fc-group-handle{background-color:#fff;border:1px dashed #d9d9d9;border-radius:15px;bottom:-15px;display:flex;flex-direction:row;padding:3px 8px;position:absolute;right:30px}._fc-group-btn{cursor:pointer}._fc-group-idx{align-items:center;background:#eee;border-radius:15px;bottom:-15px;display:flex;font-weight:700;height:30px;justify-content:center;left:10px;position:absolute;width:30px}._fc-group-handle ._fc-group-btn+._fc-group-btn{margin-left:7px}._fc-group-container{border:1px dashed #d9d9d9;border-radius:5px;display:flex;flex-direction:column;margin:5px 5px 25px;padding:20px 20px 25px;position:relative}._fc-group-arrow{height:20px;position:relative;width:20px}._fc-group-arrow:before{border-left:2px solid #999;border-top:2px solid #999;content:"";height:9px;left:5px;position:absolute;top:8px;transform:rotate(45deg);width:9px}._fc-group-arrow._fc-group-down{transform:rotate(180deg)}._fc-group-plus-minus{cursor:pointer;height:20px;position:relative;width:20px}._fc-group-plus-minus:after,._fc-group-plus-minus:before{background-color:#409eff;content:"";height:2px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:60%}._fc-group-plus-minus:before{transform:translate(-50%,-50%) rotate(90deg)}._fc-group-plus-minus._fc-group-minus:before{display:none}._fc-group-plus-minus._fc-group-minus:after{background-color:#f56c6c}._fc-group-add{border:1px solid rgba(64,158,255,.5);border-radius:15px;cursor:pointer;height:25px;width:25px}._fc-group-add._fc-group-plus-minus:after,._fc-group-add._fc-group-plus-minus:before{width:50%}._fc-group._fc-group-card{display:flex;flex-direction:column;gap:16px;width:100%}._fc-group._fc-group-card._fc-group-disabled ._fc-group-add,._fc-group._fc-group-card._fc-group-disabled ._fc-group-btn{cursor:not-allowed;opacity:.5}._fc-group._fc-group-card ._fc-group-container{background:#fff;border:1px solid #f0f0f0;border-radius:6px;display:flex;flex-direction:column;margin:0;overflow:hidden;padding:0;position:relative}._fc-group._fc-group-card ._fc-group-header{align-items:center;background:#fafafa;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;padding:16px 20px 12px}._fc-group._fc-group-card ._fc-group-idx{align-items:center;background:#f0f0f0;border:1px solid #e0e0e0;border-radius:6px;color:#666;display:flex;flex-shrink:0;font-size:12px;font-weight:500;height:24px;justify-content:center;margin-right:12px;position:static;width:24px}._fc-group._fc-group-card ._fc-group-title{color:rgba(0,0,0,.85);flex:1;font-size:14px;font-weight:500;line-height:1.5715}._fc-group._fc-group-card ._fc-group-handle{align-items:center;background-color:transparent;border:none;border-radius:0;bottom:auto;display:flex;flex-direction:row;flex-shrink:0;gap:4px;margin-left:12px;padding:0;position:static;right:auto}._fc-group._fc-group-card ._fc-group-btn{align-items:center;background:#fff;border:1px solid #d9d9d9;border-radius:4px;color:rgba(0,0,0,.45);cursor:pointer;display:flex;height:24px;justify-content:center;position:relative;width:24px}._fc-group._fc-group-card ._fc-group-btn:hover{background:#f0f8ff;border-color:#1890ff;color:#1890ff}._fc-group._fc-group-card ._fc-group-btn:active{border-color:#096dd9;color:#096dd9}._fc-group._fc-group-card ._fc-group-arrow{position:relative}._fc-group._fc-group-card ._fc-group-arrow:before{border-left:1px solid;border-top:1px solid;content:"";height:5px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%) rotate(45deg);width:5px}._fc-group._fc-group-card ._fc-group-arrow._fc-group-down{transform:rotate(180deg)}._fc-group._fc-group-card ._fc-group-sort{align-items:center;display:flex;flex-direction:column;height:24px;justify-content:center;position:relative}._fc-group._fc-group-card ._fc-group-sort:after,._fc-group._fc-group-card ._fc-group-sort:before{border-left:1px solid;border-top:1px solid;content:"";height:4px;left:50%;position:absolute;transform:translateX(-50%);width:4px}._fc-group._fc-group-card ._fc-group-sort:before{top:6px;transform:translateX(-50%) rotate(45deg)}._fc-group._fc-group-card ._fc-group-sort:after{bottom:6px;transform:translateX(-50%) rotate(225deg)}._fc-group._fc-group-card ._fc-group-sort-down,._fc-group._fc-group-card ._fc-group-sort-up{cursor:pointer;height:12px;left:0;position:absolute;right:0;z-index:1}._fc-group._fc-group-card ._fc-group-sort-up{top:0}._fc-group._fc-group-card ._fc-group-sort-down{bottom:0}._fc-group._fc-group-card ._fc-group-sort-down:hover,._fc-group._fc-group-card ._fc-group-sort-up:hover{background:rgba(24,144,255,.1)}._fc-group._fc-group-card ._fc-group-plus-minus{background:#409eff;border-color:#409eff;color:#fff;height:24px;position:relative;width:24px}._fc-group._fc-group-card ._fc-group-plus-minus:hover{background:#66b1ff;border-color:#66b1ff;color:#fff}._fc-group._fc-group-card ._fc-group-plus-minus:after,._fc-group._fc-group-card ._fc-group-plus-minus:before{background-color:currentColor;content:"";height:1px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:8px}._fc-group._fc-group-card ._fc-group-plus-minus:before{transform:translate(-50%,-50%) rotate(90deg)}._fc-group._fc-group-card ._fc-group-plus-minus._fc-group-minus{background:#f56c6c;border-color:#f56c6c}._fc-group._fc-group-card ._fc-group-plus-minus._fc-group-minus:hover{background:#f78989;border-color:#f78989}._fc-group._fc-group-card ._fc-group-plus-minus._fc-group-minus:before{display:none}._fc-group._fc-group-card ._fc-group-content{padding:20px}._fc-group._fc-group-card ._fc-group-add{align-items:center;background:#fff;border:1px solid #d9d9d9;border-radius:4px;color:rgba(0,0,0,.45);cursor:pointer;display:flex;height:24px;justify-content:center;position:relative;width:24px}._fc-group._fc-group-card ._fc-group-add:hover{background:#f0f8ff;border-color:#409eff;color:#409eff}._fc-group._fc-group-card ._fc-group-add._fc-group-plus-minus{background:#409eff;border-color:#409eff;color:#fff;height:24px;width:24px}._fc-group._fc-group-card ._fc-group-add._fc-group-plus-minus:hover{background:#66b1ff;border-color:#66b1ff;color:#fff}._fc-group._fc-group-card ._fc-group-add._fc-group-plus-minus:after,._fc-group._fc-group-card ._fc-group-add._fc-group-plus-minus:before{background-color:currentColor;content:"";height:1px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:8px}._fc-group._fc-group-card ._fc-group-add._fc-group-plus-minus:before{transform:translate(-50%,-50%) rotate(90deg)}._fc-group._fc-group-card ._fc-group-empty{color:rgba(0,0,0,.45);font-size:14px;padding:40px 20px;text-align:center}@media (max-width:768px){._fc-group._fc-group-card ._fc-group-container{border-left:none;border-radius:0;border-right:none;margin:0 -8px}._fc-group._fc-group-card ._fc-group-header{padding:12px 16px 8px}._fc-group._fc-group-card ._fc-group-content{padding:16px}._fc-group._fc-group-card ._fc-group-handle{gap:2px}._fc-group._fc-group-card ._fc-group-btn{height:22px;width:22px}}@media (prefers-color-scheme:dark){._fc-group._fc-group-card ._fc-group-container{background:#141414;border-color:#303030}._fc-group._fc-group-card ._fc-group-container:hover{border-color:#434343}._fc-group._fc-group-card ._fc-group-header{background:#1f1f1f;border-bottom-color:#303030}._fc-group._fc-group-card ._fc-group-title{color:hsla(0,0%,100%,.85)}._fc-group._fc-group-card ._fc-group-btn{background:#1f1f1f;border-color:#434343;color:hsla(0,0%,100%,.45)}._fc-group._fc-group-card ._fc-group-btn:hover{background:#111b26;border-color:#177ddc;color:#177ddc}._fc-group._fc-group-card ._fc-group-content{background:#141414}._fc-group._fc-group-card ._fc-group-add{background:#1f1f1f;border-color:#434343;color:hsla(0,0%,100%,.45)}._fc-group._fc-group-card ._fc-group-add:hover{background:#111b26;border-color:#177ddc;color:#177ddc}}'
Kn(cl)
function Pt(t, e) {
  let n = null
  return function () {
    for (var r = this, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a]
    n !== null && clearTimeout(n), n = setTimeout(() => {
      return t.call.apply(t, [r].concat(o))
    }, e)
  }
}
function Bo(t) {
  return t == null ? '' : pe(t) === 'object' ? JSON.stringify(t, null, 2) : String(t)
}
function fl(t) {
  return t && pe(t) === 'object' && typeof t.then == 'function'
}
function Nn(t) {
  return fl(t) ? t : Promise.resolve(t)
}
function yn(t) {
  let e = t.replace(/([A-Z])/g, '-$1').toLocaleLowerCase()
  return e.indexOf('-') === 0 && (e = e.substr(1)), e
}
function No(t) {
  return t.replace(t[0], t[0].toLocaleUpperCase())
}
function zo(t, e, n) {
  return '[form-create '.concat(t, ']: ').concat(e) + (n
    ? `

rule: ${JSON.stringify(n.getRule ? n.getRule() : n)}`
    : '')
}
function Ur(t, e) {
  console.error(zo('err', t, e))
}
function dl(t) {
  Ur(t.toString()), console.error(t)
}
const Cr = '[[FORM-CREATE-PREFIX-'; const Ar = '-FORM-CREATE-SUFFIX]]'
function bn(t, e) {
  return JSON.stringify(wn(Array.isArray(t) ? [] : {}, t, !0), (n, r) => {
    if (!(r && r._isVue === !0)) {
      if (typeof r != 'function')
        return r
      if (r.__json)
        return r.__json
      if (r.__origin && (r = r.__origin), !r.__emit)
        return Cr + r + Ar
    }
  }, e)
}
function cr(t) {
  return new Function(`return ${t}`)()
}
function bt(t, e) {
  if (t && L.String(t) && t.length > 4) {
    let n = t.trim(); let r = !1
    try {
      if (n.indexOf(Ar) > 0 && n.indexOf(Cr) === 0) {
        n = n.replace(Ar, '').replace(Cr, ''), r = !0
      } else if (n.indexOf('$FN:') === 0) {
        n = n.substring(4), r = !0
      } else if (n.indexOf('$EXEC:') === 0) {
        n = n.substring(6), r = !0
      } else if (n.indexOf('$GLOBAL:') === 0) {
        const i = n.substring(8)
        return n = function () {
          for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
            l[c] = arguments[c]
          const u = l[0].api.getGlobalEvent(i)
          if (u)
            return u.call.apply(u, [this].concat(l))
        }, n.__json = t, n.__inject = !0, n
      } else {
        if (n.indexOf('$FNX:') === 0) {
          return n = cr(`function($inject){
${n.substring(5)}
}`), n.__json = t, n.__inject = !0, n
        }
        (!e && n.indexOf('function ') === 0 && n !== 'function ' || !e && n.indexOf('function(') === 0 && n !== 'function(') && (r = !0)
      }
      if (!r)
        return t
      let o
      try {
        o = cr(n)
      } catch {
        o = cr(`function ${n}`)
      }
      return o.__json = t, o
    } catch (a) {
      Ur('\u89E3\u6790\u5931\u8D25:'.concat(n, `

err: `).concat(a))
      return
    }
  }
  return t
}
function Uo(t, e) {
  return JSON.parse(t, (n, r) => {
    return L.Undef(r) || !r.indexOf ? r : bt(r, e)
  })
}
let hl = 0
function Jn() {
  const t = 370 + ++hl
  return `F${Math.random().toString(36).substr(3, 3)}${Number(''.concat(Date.now())).toString(36)}${t.toString(36)}c`
}
function Mt(t, e, n) {
  let r = t; let i
  return (e || '').split('.').forEach((o) => {
    i && ((!r[i] || pe(r[i]) != 'object') && (r[i] = {}), r = r[i]), i = o
  }), r[i] = n, r
}
const pl = 'fcGroup'; const ml = ye({
  name: pl,
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
      default: !0,
    },
    disabled: {
      type: Boolean,
      default: !1,
    },
    syncDisabled: {
      type: Boolean,
      default: !0,
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
      form: Me(this.formCreateInject.form.$form()),
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
              }), o.rule = mt(e)
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
            for (let l = 0; l < o; l++)
              this.removeRule(r[i - l - 1])
          }
          e.forEach((c, u) => {
            n.setValue(r[u], e[u])
          })
        }
      },
      deep: !0,
    },
  },
  methods: {
    _value(e) {
      return e && Pe(e, this.field) ? e[this.field] : e
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
          const l = e === s ? n : X({}, r.cacheRule[s].$f.form); const c = r.field ? l[r.field] || null : l
          return r.cache(s, c), c
        })
        this.input(a)
      }
    },
    setValue(e, n) {
      const r = this.field
      r && (n = Ie({}, r, this._value(n))), this.cacheValue[e] !== JSON.stringify(r ? n[r] : n) && (this.cacheRule[e].$f && this.cacheRule[e].$f.coverValue(n), this.cache(e, n))
    },
    addRule(e, n) {
      const r = this; const i = this.formCreateInject.form.copyRules(this.rule || []); const o = this.options
        ? X({}, this.options)
        : {
            submitBtn: !1,
            resetBtn: !1,
          }
      if (this.defaultValue) {
        o.formData || (o.formData = {})
        const a = mt(this.defaultValue)
        re(o.formData, this.field ? Ie({}, this.field, a) : a)
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
        const n = de(this.modelValue)
        n.push(this.defaultValue ? mt(this.defaultValue) : this.field ? null : {}), this.input(n)
      }
    },
    del(e, n) {
      const r = this
      if (!this.disabled) {
        const i = function () {
          r.removeRule(n, !0)
          const a = de(r.modelValue)
          a.splice(e, 1), r.input(a)
        }
        Nn(this.onBeforeRemove(this.modelValue, e)).then((o) => {
          o !== !1 && i()
        })
      }
    },
    addIcon(e) {
      return B('div', {
        class: '_fc-group-btn _fc-group-plus-minus',
        onClick: this.add,
      }, null)
    },
    delIcon(e, n) {
      const r = this
      return B('div', {
        class: '_fc-group-btn _fc-group-plus-minus _fc-group-minus',
        onClick() {
          return r.del(e, n)
        },
      }, null)
    },
    sortUpIcon(e) {
      const n = this
      return B('div', {
        class: '_fc-group-btn _fc-group-arrow _fc-group-up',
        onClick() {
          return n.changeSort(e, -1)
        },
      }, null)
    },
    sortDownIcon(e) {
      const n = this
      return B('div', {
        class: '_fc-group-btn _fc-group-arrow _fc-group-down',
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
        return B('div', {
          class: '_fc-group-btn _fc-group-sort',
        }, [B('div', {
          class: '_fc-group-sort-up',
          onClick() {
            return r.changeSort(e, -1)
          },
        }, null), B('div', {
          class: '_fc-group-sort-down',
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
      this.$emit.apply(this, [e].concat(de(n), [this.cacheRule[i].$f, r]))
    },
    expandRule(e) {
      for (let n = 0; n < e; n++)
        this.modelValue.push(this.field ? null : {})
      this.input(de(this.modelValue))
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
        : B('div', {
            key: 'a_def',
            class: '_fc-group-plus-minus _fc-group-add fc-clock',
            onClick: this.add,
          }, null)
      : n.map((l, c) => {
          const u = e.cacheRule[l]; const p = u.rule; const h = u.options; const m = r && !o ? e.makeIcon(n.length, c, l) : []; const w = e.getTitle(c, l)
          return a
            ? B('div', {
                class: '_fc-group-container',
                key: l,
              }, [B('div', {
                class: '_fc-group-header',
              }, [w === !1
                ? B('div', {
                    class: '_fc-group-idx',
                  }, [c + 1])
                : null, w !== !1
                ? B('div', {
                    class: '_fc-group-title',
                  }, [w])
                : null, B('div', {
                class: '_fc-group-handle fc-clock',
              }, [m.length ? m : null])]), B('div', {
                class: '_fc-group-content',
              }, [B(i, Be({
                key: l,
              }, {
                'disabled': o,
                'onUpdate:modelValue': function (A) {
                  return e.formData(l, A)
                },
                'onEmit-event': function (A) {
                  for (var M = arguments.length, V = Array.from({ length: M > 1 ? M - 1 : 0 }), F = 1; F < M; F++)
                    V[F - 1] = arguments[F]
                  return e.emitEvent(A, V, c, l)
                },
                'onUpdate:api': function (A) {
                  return e.add$f(c, l, A)
                },
                'inFor': !0,
                'modelValue': e.field ? Ie({}, e.field, e._value(e.modelValue[c])) : e.modelValue[c],
                'rule': p,
                'option': h,
                'extendOption': !0,
              }), null)])])
            : B('div', {
                class: '_fc-group-container',
                key: l,
              }, [B(i, Be({
                key: l,
              }, {
                'disabled': o,
                'onUpdate:modelValue': function (A) {
                  return e.formData(l, A)
                },
                'onEmit-event': function (A) {
                  for (var M = arguments.length, V = Array.from({ length: M > 1 ? M - 1 : 0 }), F = 1; F < M; F++)
                    V[F - 1] = arguments[F]
                  return e.emitEvent(A, V, c, l)
                },
                'onUpdate:api': function (A) {
                  return e.add$f(c, l, A)
                },
                'inFor': !0,
                'modelValue': e.field ? Ie({}, e.field, e._value(e.modelValue[c])) : e.modelValue[c],
                'rule': p,
                'option': h,
                'extendOption': !0,
              }), null), B('div', {
                class: '_fc-group-idx',
              }, [c + 1]), m.length
                ? B('div', {
                    class: '_fc-group-handle fc-clock',
                  }, [m])
                : null])
        })
    return B('div', {
      key: 'con',
      class: `_fc-group ${o ? '_fc-group-disabled' : ''}${a ? ' _fc-group-card' : ''}`,
    }, [s])
  },
}); const gl = 'fcSubForm'; const vl = ye({
  name: gl,
  props: {
    rule: Array,
    options: {
      type: Object,
      default() {
        return Ne({
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
      form: Me(this.formCreateInject.form.$form()),
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
    return B(e, {
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
}); const qo = {
  name: 'IconWarning',
}; const _l = {
  class: 'icon',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}; const yl = /* @__PURE__ */ Oe('path', {
  fill: 'currentColor',
  d: 'M512 64a448 448 0 110 896 448 448 0 010-896zm0 832a384 384 0 000-768 384 384 0 000 768zm48-176a48 48 0 11-96 0 48 48 0 0196 0zm-48-464a32 32 0 0132 32v288a32 32 0 01-64 0V288a32 32 0 0132-32z',
}, null, -1); const bl = [yl]
function wl(t, e, n, r, i, o) {
  return H(), oe('svg', _l, bl)
}
qo.render = wl
const $l = [Os, Ws, Ks, Zs, el, ll, ml, vl, qo]; const Ho = ['props']; const Go = ['class', 'style', 'directives']; const Yo = ['on', 'hook']; function Rt(e) {
  const n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; const r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; const i = [].concat(Ho, de(r.normal || [])); const o = [].concat(Go, de(r.array || [])); const a = [].concat(Yo, de(r.functional || [])); const s = r.props || []
  return e.reduce((l, c) => {
    for (const u in c) {
      if (l[u]) {
        if (s.includes(u)) {
          l[u] = t([c[u]], l[u])
        } else if (i.includes(u)) {
          l[u] = X(X({}, l[u]), c[u])
        } else if (o.includes(u)) {
          const p = Array.isArray(l[u]) ? l[u] : [l[u]]; const h = Array.isArray(c[u]) ? c[u] : [c[u]]
          l[u] = [].concat(de(p), de(h))
        } else if (a.includes(u)) {
          for (const m in c[u]) {
            if (l[u][m]) {
              const w = Array.isArray(l[u][m]) ? l[u][m] : [l[u][m]]; const b = Array.isArray(c[u][m]) ? c[u][m] : [c[u][m]]
              l[u][m] = [].concat(de(w), de(b))
            } else {
              l[u][m] = c[u][m]
            }
          }
        } else if (u === 'hook') {
          for (const A in c[u])
            l[u][A] ? l[u][A] = Sl(l[u][A], c[u][A]) : l[u][A] = c[u][A]
        } else {
          l[u] = c[u]
        }
      } else {
        i.includes(u) || a.includes(u) || s.includes(u) ? l[u] = X({}, c[u]) : o.includes(u) ? l[u] = Array.isArray(c[u]) ? de(c[u]) : pe(c[u]) === 'object' ? X({}, c[u]) : c[u] : l[u] = c[u]
      }
    }
    return l
  }, n)
} var Sl = function (e, n) {
  return function () {
    e && e.apply(this, arguments), n && n.apply(this, arguments)
  }
}; const Rr = ['type', 'slot', 'ignore', 'emitPrefix', 'value', 'name', 'native', 'hidden', 'display', 'inject', 'options', 'emit', 'link', 'prefix', 'suffix', 'update', 'sync', 'optionsTo', 'key', 'slotUpdate', 'computed', 'preview', 'component', 'cache', 'modelEmit']; const zn = ['validate', 'children', 'control']; const Un = ['effect', 'deep', 'renderSlots']
function Wo() {
  return [].concat(Rr, de(Ho), de(Go), de(Yo), zn, Un)
}
function pt(t) {
  const e = t.replace(/(-[a-z])/g, (n) => {
    return n.replace('-', '').toLocaleUpperCase()
  })
  return Xo(e)
}
function Xo(t) {
  return t.replace(t[0], t[0].toLowerCase())
}
function Dr(t, e) {
  return {
    value: t,
    enumerable: !1,
    configurable: !1,
    writable: !!e,
  }
}
function Ko(t, e) {
  return Jo([t], e || !1)[0]
}
function Jo(t, e) {
  return wn([], de(t), e || !1)
}
function Ot(t, e) {
  return Rt(Array.isArray(e) ? e : [e], t, {
    array: zn,
    normal: Un,
  }), t
}
function Ni(t) {
  const e = L.Function(t.getRule) ? t.getRule() : t
  return e.type || (e.type = 'input'), e
}
function Ol(t, e) {
  return t
    ? (Object.keys(e || {}).forEach((n) => {
        e[n] && (t[n] = Ot(t[n] || {}, e[n]))
      }), t)
    : e
}
function Zo(t, e) {
  Object.defineProperties(t, Object.keys(e).reduce((n, r) => {
    return n[r] = {
      get() {
        return e[r]()
      },
    }, n
  }, {}))
}
function St(t) {
  return t.__fc__ || (t.__origin__ ? t.__origin__.__fc__ : null)
}
function fe(t, e) {
  try {
    e = t()
  } catch (n) {
    dl(n)
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
          o.push.apply(o, de(a))
        } else if (L.Function(a)) {
          const s = a.apply(void 0, de(i || []))
          Array.isArray(s) ? o.push.apply(o, de(s)) : o.push(s)
        } else {
          L.Undef(a) || o.push(a)
        }
      }), o
    },
    getSlots() {
      const r = this; const i = {}
      return Object.keys(t).forEach((o) => {
        i[o] = function () {
          for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
            s[l] = arguments[l]
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
      return Array.isArray(r) || Qa(r)
        ? this.setSlot(void 0, () => {
            return r
          })
        : Object.keys(o).forEach((a) => {
            i.setSlot(a, o[a])
          }), this
    },
  }
}
function zi(t) {
  const e = X({}, t.props || {})
  return Object.keys(t.on || {}).forEach((n) => {
    n.indexOf('-') > 0 && (n = pt(n))
    const r = 'on'.concat(No(n))
    Array.isArray(e[r]) ? e[r] = [].concat(de(e[r]), [t.on[n]]) : e[r] ? e[r] = [e[r], t.on[n]] : e[r] = t.on[n]
  }), e.key = t.key, e.ref = t.ref, e.class = t.class, e.id = t.id, e.style = t.style, e.slot && delete e.slot, e
}
function Rn(t, e) {
  return Object.setPrototypeOf(t, e), t
}
function Ui(e, n) {
  return typeof e == 'string' ? String(n) : typeof e == 'number' ? Number(n) : n
} var jt = {
  '==': function (e, n) {
    return JSON.stringify(e) === JSON.stringify(Ui(e, n))
  },
  '!=': function (e, n) {
    return !jt['=='](e, n)
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
    return e && e.indexOf && e.includes(Ui(e[0], n))
  },
  'notOn': function (e, n) {
    return !jt.on(e, n)
  },
  'in': function (e, n) {
    return n && n.indexOf && n.includes(e)
  },
  'notIn': function (e, n) {
    return !jt.in(e, n)
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
function xl(t) {
  for (var e = /\{\{\s*(.*?)\s*\}\}/g, n, r = {}; (n = e.exec(t)) !== null;)
    n[1] && (r[n[1]] = !0)
  return Object.keys(r)
}
function qi(t) {
  const e = t.split('.'); const n = []; let r = ''
  return e.forEach((i, o) => {
    o === 0 ? r = i : r += `.${i}`, n.push(r)
  }), n.join(' && ')
}
function Qo(t) {
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
            value: Qo(n.slice(1, -1)),
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
function jn(e, n) {
  if (!(!e || e === n)) {
    if (e.props.formCreateInject)
      return e.props.formCreateInject
    if (e.parent)
      return jn(e.parent, n)
  }
}
function El(t, e, n) {
  return ye({
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
      const o = Or()
      es('parentFC', o)
      const a = ts('parentFC', null); let s = a
      if (a) {
        for (; s.setupState.parent;)
          s = s.setupState.parent
      } else {
        s = o
      }
      const l = Fi(i); const c = l.rule; const u = l.modelValue; const p = l.subForm; const h = l.inFor; const m = Ne({
        ctxInject: {},
        destroyed: !1,
        isShow: !0,
        unique: 1,
        renderRule: de(c.value || []),
        updateValue: JSON.stringify(u.value || {}),
      }); const w = new t(o); const b = w.api(); const A = h.value; const M = function () {
        if (a) {
          const se = jn(o, a)
          if (se) {
            let ne
            A ? (ne = et(se.getSubForm()), ne.push(b)) : ne = b, se.subForm(ne)
          }
        }
      }; const V = function () {
        const se = jn(o, a)
        if (se) {
          if (A) {
            const ne = et(se.getSubForm()); const ie = ne.indexOf(b)
            ie > -1 && ne.splice(ie, 1)
          } else {
            se.subForm()
          }
        }
      }; let F = null
      ns(() => {
        rs(() => {
          let Y = ''; const se = i.option && i.option.globalClass || {}
          Object.keys(se).forEach((ne) => {
            let ie = ''
            se[ne].style && Object.keys(se[ne].style).forEach((Ee) => {
              ie += `${yn(Ee)}:${se[ne].style[Ee]};`
            }), se[ne].content && (ie += `${se[ne].content};`), ie && (Y += '.'.concat(ne, '{').concat(ie, '}'))
          }), i.option && i.option.style && (Y += i.option.style), F || (F = document.createElement('style'), F.type = 'text/css', document.head.appendChild(F)), F.innerHTML = Y || ''
        })
      })
      const G = Pt(() => {
        w.bus.$emit('$loadData.$topForm')
      }, 100); const Q = Pt(() => {
        w.bus.$emit('$loadData.$scopeForm')
      }, 100); const Z = Pt(() => {
        w.bus.$emit('$loadData.$form')
      }, 100); const ee = function (se) {
        w.bus.$emit(`change-$form.${se}`)
      }
      return is(() => {
        a && (b.top.bus.$on('$loadData.$form', G), b.top.bus.$on('change', ee)), b !== b.scope && b.scope.bus.$on('$loadData.$scopeForm', Q), w.mounted()
      }), os(() => {
        a && (b.top.bus.$off('$loadData.$form', G), b.top.bus.$off('change', ee)), b !== b.scope && b.scope.bus.$off('$loadData.$scopeForm', Q), V(), m.destroyed = !0, w.unmount(), F && (F.parentNode || F.parentElement) && document.head.removeChild(F)
      }), as(() => {
        w.updated()
      }), M(), He(() => {
        return i.option
      }, () => {
        w.initOptions(), b.refresh()
      }, {
        deep: !0,
        flush: 'sync',
      }), He(() => {
        return de(c.value)
      }, (Y) => {
        w.$handle.isBreakWatch() || Y.length === m.renderRule.length && Y.every((se) => {
          return m.renderRule.includes(se)
        }) || (w.$handle.updateAppendData(), w.$handle.reloadRule(c.value), o.setupState.renderRule())
      }), He(() => {
        return [i.disabled, i.preview]
      }, () => {
        b.refresh()
      }), He(u, (Y) => {
        bn(Y || {}) !== m.updateValue && (b.config.forceCoverValue ? b.coverValue(Y || {}) : b.setValue(Y || {}))
      }, {
        deep: !0,
        flush: 'post',
      }), He(() => {
        return i.index
      }, () => {
        b.coverValue({}), w.$handle.updateAppendData(), Fe(() => {
          Fe(() => {
            b.clearValidateState()
          })
        })
      }, {
        flush: 'sync',
      }), X(X({
        fc: Me(w),
        parent: a && Me(a),
        top: Me(s),
        fapi: Me(b),
      }, Fi(m)), {}, {
        getGroupInject() {
          return jn(o, a)
        },
        refresh() {
          ++m.unique
        },
        renderRule() {
          m.renderRule = de(c.value || [])
        },
        updateValue(se) {
          if (!m.destroyed) {
            const ne = bn(se)
            m.updateValue !== ne && (m.updateValue = ne, o.emit('update:modelValue', se), Fe(() => {
              Z(), a ? p.value || Q() : (G(), Q())
            }))
          }
        },
      })
    },
    created() {
      const i = Or()
      i.emit('update:api', i.setupState.fapi), i.setupState.fc.init()
    },
  })
}
function ea() {
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
function Ge(t, e) {
  return function (n, r, i) {
    const o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}; const a = new qr(t, n, r, i, o)
    return e && (L.Function(e) ? e(a) : a.props(e)), a
  }
}
function qr(t, e, n, r, i) {
  this._data = re(ea(), {
    type: t,
    title: e,
    field: n,
    value: r,
    props: i || {},
  }), this.event = this.on
}
re(qr.prototype, {
  getRule() {
    return this._data
  },
  setProp(e, n) {
    return st(this._data, e, n), this
  },
  modelField(e) {
    return this._data.modelField = e, this
  },
  _clone() {
    const e = new this.constructor()
    return e._data = Ko(this._data), e
  },
})
function ta(t) {
  t.forEach((e) => {
    qr.prototype[e] = function (n) {
      return Ot(this._data, Ie({}, e, arguments.length < 2 ? n : Ie({}, n, arguments[1]))), this
    }
  })
}
ta(Wo())
const kl = Ge('')
function Cl(t, e, n) {
  const r = kl('', e)
  return r._data.type = t, r._data.title = n, r
}
function Al() {
  return {
    create: Cl,
    factory: Ge,
  }
}
function Rl(t, e, n) {
  const r = 'fail to '.concat(t, ' ').concat(n.status, '\''); const i = new Error(r)
  return i.status = n.status, i.url = t, i
}
function Hi(t) {
  const e = t.responseText || t.response
  if (!e)
    return e
  try {
    return JSON.parse(e)
  } catch {
    return e
  }
}
function na(t) {
  if (!(typeof XMLHttpRequest > 'u')) {
    const e = new XMLHttpRequest(); let n = t.action || ''
    if (e.upload && t.onProgress && e.upload.addEventListener('progress', (s) => {
      s.percent = s.total > 0 ? s.loaded / s.total * 100 : 0, t.onProgress(s)
    }), t.query) {
      const r = L.String(t.query)
        ? t.query
        : Object.keys(t.query).reduce((s, l) => {
            return s[l] = t.query[l] === null || t.query[l] === void 0 ? '' : t.query[l], s
          }, {}); const i = new URLSearchParams(r).toString()
      i && (n.includes('?') ? n += '&'.concat(i) : n += '?'.concat(i))
    }
    e.onerror = function (l) {
      t.onError(l)
    }, e.onload = function () {
      if (e.status < 200 || e.status >= 300)
        return t.onError(Rl(n, t, e), Hi(e))
      t.onSuccess(Hi(e))
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
function Gi(t, e, n) {
  return new Promise((r, i) => {
    (e || na)(X(X({}, t), {}, {
      onSuccess(a) {
        let s = function (u) {
          return u
        }; const l = bt(t.parse)
        L.Function(l)
          ? s = l
          : l && L.String(l) && (s = function (u) {
            return Xe(u, l)
          }), Nn(s(a, t.targetRule, n)).then((c) => {
          r(c)
        })
      },
      onError(a) {
        i(a)
      },
    }))
  })
}
function ln(t) {
  return mt(t)
}
function Dl(t) {
  function e(o) {
    return L.Undef(o) ? o = t.fields() : Array.isArray(o) || (o = [o]), o
  }
  function n(o, a, s) {
    L.Undef(o) ? o = Object.keys(X(X({}, t.fieldCtx), t.nameCtx)) : Array.isArray(o) || (o = [o]), o.forEach((l) => {
      const c = t.fieldCtx[l] || t.nameCtx[l]
      c && c.forEach((u) => {
        st(u.rule, a, s), t.$render.clearCache(u)
      })
    })
  }
  function r() {
    const o = t.subForm
    return Object.keys(o).reduce((a, s) => {
      const l = o[s]
      return l && (Array.isArray(l) ? a.push.apply(a, de(l)) : a.push(l)), a
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
          return de(a)
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
      return X({}, t.fc.formulas)
    },
    formData(a) {
      if (a == null || typeof a == 'boolean') {
        const s = {}
        return Object.keys(t.form).forEach((l) => {
          (a === !0 || !t.ignoreFields.includes(l)) && (s[l] = ln(t.form[l]))
        }), s
      } else {
        return e(a).reduce((l, c) => {
          return l[c] = i.getValue(c), l
        }, {})
      }
    },
    getValue(a) {
      const s = t.getFieldCtx(a)
      return s ? ln(s.rule.value) : t.options.appendValue !== !1 && Pe(t.appendData, a) ? ln(t.appendData[a]) : void 0
    },
    coverValue(a) {
      const s = X({}, a || {})
      t.deferSyncValue(() => {
        t.appendData = {}, i.fields().forEach((l) => {
          const c = t.fieldCtx[l]
          if (c) {
            const u = Pe(a, l)
            c.forEach((p) => {
              p.rule.value = u ? a[l] : void 0
            }), delete s[l]
          }
        }), re(t.appendData, s)
      }, !0)
    },
    setValue(a) {
      let s = a
      arguments.length >= 2 && (s = Ie({}, a, arguments[1])), t.deferSyncValue(() => {
        Object.keys(s).forEach((l) => {
          const c = t.fieldCtx[l]
          if (!c)
            return t.appendData[l] = s[l]
          c.forEach((u) => {
            u.rule.value = s[l]
          })
        })
      }, !0)
    },
    removeField(a) {
      const s = t.getCtx(a)
      return t.deferSyncValue(() => {
        t.getCtxs(a).forEach((l) => {
          l.rm()
        })
      }, !0), s ? s.origin : void 0
    },
    removeRule(a) {
      const s = a && St(a)
      if (s)
        return s.rm(), s.origin
    },
    fields() {
      return t.fields()
    },
    append(a, s, l) {
      let c = t.sort.length - 1; let u; const p = t.getCtx(s)
      if (p) {
        if (l) {
          if (u = p.getPending('children', p.rule.children), !Array.isArray(u))
            return
          c = p.rule.children.length - 1
        } else {
          c = p.root.indexOf(p.origin), u = p.root
        }
      } else {
        u = t.rules
      }
      u.splice(c + 1, 0, a)
    },
    prepend(a, s, l) {
      let c = 0; let u; const p = t.getCtx(s)
      if (p) {
        if (l) {
          if (u = p.getPending('children', p.rule.children), !Array.isArray(u))
            return
        } else {
          c = p.root.indexOf(p.origin), u = p.root
        }
      } else {
        u = t.rules
      }
      u.splice(c, 0, a)
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
      e(s).forEach((l) => {
        t.getCtxs(l).forEach((c) => {
          st(c.rule.props, 'disabled', !!a)
        })
      }), t.refresh()
    },
    all(a) {
      return Object.keys(t.ctxs).map((s) => {
        const l = t.ctxs[s]
        return a ? l.origin : l.rule
      })
    },
    model(a) {
      return t.fields().reduce((s, l) => {
        const c = t.fieldCtx[l][0]
        return s[l] = a ? c.origin : c.rule, s
      }, {})
    },
    component(a) {
      return Object.keys(t.nameCtx).reduce((s, l) => {
        const c = t.nameCtx[l].map((u) => {
          return a ? u.origin : u.rule
        })
        return s[l] = c.length === 1 ? c[0] : c, s
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
        a.forEach((l) => {
          return i.sync(l)
        })
        return
      }
      let s = L.Object(a) ? St(a) : t.getCtxs(a)
      !s || (s = Array.isArray(s) ? s : [s], s.forEach((l) => {
        if (!l.deleted) {
          const c = t.subForm[l.id]
          c && (Array.isArray(c)
            ? c.forEach((u) => {
                u.refresh()
              })
            : c && c.refresh()), t.$render.clearCache(l)
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
      t.getCtxs(a).forEach((l) => {
        re(l.rule, s)
      })
    },
    updateRules(a) {
      Object.keys(a).forEach((s) => {
        i.updateRule(s, a[s])
      })
    },
    mergeRule(a, s) {
      t.getCtxs(a).forEach((l) => {
        Ot(l.rule, s)
      })
    },
    mergeRules(a) {
      Object.keys(a).forEach((s) => {
        i.mergeRule(s, a[s])
      })
    },
    getRule(a, s) {
      const l = t.getCtx(a)
      if (l)
        return s ? l.origin : l.rule
    },
    findType(a, s) {
      let l = void 0
      return Object.keys(t.ctxs).forEach((c) => {
        const u = t.ctxs[c]
        u.rule.type === a && (l = s ? u.origin : u.rule)
      }), l
    },
    findTypes(a, s) {
      const l = []
      return Object.keys(t.ctxs).forEach((c) => {
        const u = t.ctxs[c]
        u.rule.type === a && l.push(s ? u.origin : u.rule)
      }), l
    },
    getRenderRule(a) {
      const s = t.getCtx(a)
      if (s)
        return s.prop
    },
    getRefRule(a) {
      const s = t.getCtxs(a)
      if (s) {
        const l = s.map((c) => {
          return c.rule
        })
        return l.length === 1 ? l[0] : l
      }
    },
    setEffect(a, s, l) {
      const c = t.getCtx(a)
      c && s && (s[0] === '$' && (s = s.substr(1)), Pe(c.rule, `$${s}`) && st(c.rule, `$${s}`, l), Pe(c.rule, 'effect') || (c.rule.effect = {}), st(c.rule.effect, s, l))
    },
    clearEffectData(a, s) {
      const l = t.getCtx(a)
      l && (s && s[0] === '$' && (s = s.substr(1)), l.clearEffectData(s), i.sync(a))
    },
    updateValidate(a, s, l) {
      l
        ? i.mergeRule(a, {
            validate: s,
          })
        : n(a, 'validate', s)
    },
    updateValidates(a, s) {
      Object.keys(a).forEach((l) => {
        i.updateValidate(l, a[l], s)
      })
    },
    refreshValidate() {
      i.refresh()
    },
    resetFields(a) {
      e(a).forEach((s) => {
        t.getCtxs(s).forEach((l) => {
          t.$render.clearCache(l), l.rule.value = ln(l.defaultValue)
        })
      }), Fe(() => {
        Fe(() => {
          Fe(() => {
            i.clearValidateState(a)
          })
        })
      }), a == null && (L.Function(t.options.onReset) && fe(() => {
        return t.options.onReset(i)
      }), t.vm.emit('reset', i))
    },
    method(a, s) {
      const l = i.el(a)
      if (!l || !l[s])
        throw new Error(zo('err', ''.concat(s, ' \u65B9\u6CD5\u4E0D\u5B58\u5728')))
      return function () {
        return l[s].apply(l, arguments)
      }
    },
    exec(a, s) {
      for (var l = arguments.length, c = Array.from({ length: l > 2 ? l - 2 : 0 }), u = 2; u < l; u++)
        c[u - 2] = arguments[u]
      return fe(() => {
        return i.method(a, s).apply(void 0, c)
      })
    },
    toJson(a) {
      return bn(i.rule, a)
    },
    trigger(a, s) {
      for (var l = i.el(a), c = arguments.length, u = Array.from({ length: c > 2 ? c - 2 : 0 }), p = 2; p < c; p++)
        u[p - 2] = arguments[p]
      l && l.$emit.apply(l, [s].concat(u))
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
      const s = pe(a) === 'object'; const l = s ? St(a) : t.getCtx(a); const c = l ? l.rule : s ? a : i.getRule(a)
      if (!c)
        return []
      const u = []; const p = function (m) {
        m && m.forEach((w) => {
          pe(w) === 'object' && (w.field && u.push(w), u.push.apply(u, de(i.getChildrenRuleList(w))))
        })
      }
      return p(l ? l.loadChildrenPending() : c.children), u
    },
    getParentRule(a) {
      const s = pe(a) === 'object'; const l = s ? St(a) : t.getCtx(a)
      return l.parent.rule
    },
    getParentSubRule(a) {
      const s = pe(a) === 'object'; const l = s ? St(a) : t.getCtx(a)
      if (l) {
        const c = l.getParentGroup()
        if (c)
          return c.rule
      }
    },
    getChildrenFormData(a, s) {
      const l = i.getChildrenRuleList(a)
      return l.reduce((c, u) => {
        return (u.ignore !== !0 || s === !0) && (c[u.field] = ln(u.value)), c
      }, {})
    },
    setChildrenFormData(a, s, l) {
      const c = i.getChildrenRuleList(a)
      t.deferSyncValue(() => {
        c.forEach((u) => {
          Pe(s, u.field) ? u.value = s[u.field] : l && (u.value = void 0)
        })
      })
    },
    getGlobalEvent(a) {
      let s = i.options.globalEvent[a]
      if (s)
        return pe(s) === 'object' && (s = s.handle), bt(s)
    },
    getGlobalData(a) {
      return new Promise((s, l) => {
        const c = i.options.globalData[a]
        c
          ? c.type === 'fetch'
            ? i.fetch(c).then((u) => {
                s(u)
              }).catch(l)
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
    renderRule(a, s, l) {
      const c = pe(a) === 'object'; const u = c ? St(a) : t.getCtx(a)
      return u ? t.$render.createRuleVnode(u, s, l) : void 0
    },
    renderChildren(a, s, l) {
      const c = pe(a) === 'object'; const u = c ? St(a) : t.getCtx(a)
      return u ? t.$render.createChildrenVnodes(u, s, l) : void 0
    },
    nextTick(a) {
      t.bus.$once('next-tick', a), t.refresh()
    },
    nextRefresh(a) {
      t.nextRefresh(), a && fe(a)
    },
    deferSyncValue(a, s) {
      t.deferSyncValue(a, s)
    },
    emit(a) {
      for (var s, l = arguments.length, c = Array.from({ length: l > 1 ? l - 1 : 0 }), u = 1; u < l; u++)
        c[u - 1] = arguments[u];
      (s = t.vm).emit.apply(s, [a].concat(c))
    },
    bus: t.bus,
    getCurrentFormRule() {
      let a
      return (a = t.vm.setupState.getGroupInject()) === null || a === void 0 ? void 0 : a.rule
    },
    fetch(a) {
      return new Promise((s, l) => {
        a = mt(a), a = t.loadFetchVar(a), t.beforeFetch(a).then(() => {
          return Gi(a, t.fc.create.fetch, i).then((c) => {
            fe(() => {
              return a.onSuccess && a.onSuccess(c)
            }), s(c)
          }).catch((c) => {
            fe(() => {
              return a.onError && a.onError(c)
            }), l(c)
          })
        }).catch((c) => {
        })
      })
    },
    watchFetch(a, s, l, c) {
      return t.fc.watchLoadData((u, p) => {
        let h = mt(a)
        h = t.loadFetchVar(h, u), !(c && c(h, p) === !1) && t.beforeFetch(h).then(() => {
          return Gi(h, t.fc.create.fetch, i).then((m) => {
            fe(() => {
              return h.onSuccess && h.onSuccess(m)
            }), s && s(m, p)
          }).catch((m) => {
            fe(() => {
              return h.onError && h.onError(m)
            }), l && l(m)
          })
        }).catch((m) => {
        })
      }, a.wait == null ? 1e3 : a.wait)
    },
    getData(a, s) {
      return t.fc.get ? t.fc.get(a, s) : t.fc.getLoadData(a, s)
    },
    watchData(a) {
      return t.fc.watchLoadData((s, l) => {
        fe(() => {
          return a(s, l)
        })
      })
    },
    setData(a, s, l) {
      return t.fc.setData(a, s, l)
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
function Pl(t) {
  re(t.prototype, {
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
function Tl(t) {
  re(t.prototype, {
    initRender() {
      this.cacheConfig = {}
    },
    getTypeSlot(n) {
      const r = function i(o) {
        if (o) {
          let a = void 0
          return n.rule.field && (a = o.slots[`field-${yn(n.rule.field)}`] || o.slots[`field-${n.rule.field}`]), a || (a = o.slots[`type-${yn(n.type)}`] || o.slots[`type-${n.type}`]), a || i(o.setupState.parent)
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
      !i || (this.cacheConfig[n.trueType] || (this.cacheConfig[n.trueType] = At(() => {
        const o = r.$handle.options.global
        return Ot({}, [o['*'] || o.default || {}, o[n.originType] || o[n.type] || o[n.type] || {}])
      })), n.prop = Ot({}, [this.cacheConfig[n.trueType].value, n.prop]))
    },
    setOptions(n) {
      const r = n.loadPending({
        key: 'options',
        origin: n.prop.options,
        def: [],
      })
      n.prop.options = r, n.prop.optionsTo && r && Mt(n.prop, n.prop.optionsTo, r)
    },
    deepSet(n) {
      const r = n.rule.deep
      r && Object.keys(r).sort((i, o) => {
        return i.length < o.length ? -1 : 1
      }).forEach((i) => {
        Mt(n.prop, i, r[i])
      })
    },
    parseSide(n, r) {
      return L.Object(n)
        ? Ot({
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
          const l = s.cache !== !1; const c = s.preview
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
            h.length && o.slotUpdate && fe(() => {
              return o.slotUpdate(w)
            })
            let b = {}; const A = n.loadChildrenPending()
            n.parser.renderChildren ? b = n.parser.renderChildren(A, n) : n.parser.loadChildren !== !1 && (b = i.renderChildren(A, n)), Object.keys(s.renderSlots || {}).forEach((F) => {
              b[F] = function () {
                for (var G = arguments.length, Q = new Array(G), Z = 0; Z < G; Z++)
                  Q[Z] = arguments[Z]
                if (L.Function(s.renderSlots[F])) {
                  return fe(() => {
                    let Y
                    return (Y = s.renderSlots)[F].apply(Y, Q)
                  })
                }
                const ee = i.parseSide(s.renderSlots[F], n)
                return i.renderRule(ee)
              }
            })
            const M = i.getTypeSlot(n); let V
            return M ? (w.children = b, V = M(w)) : V = c ? n.parser.preview(kr(b), n) : n.parser.render(kr(b), n), V = i.renderSides(V, n), !(!n.input && L.Undef(s.native)) && s.native !== !0 && (i.fc.targetFormDriver('updateWrap', n), V = i.$manager.makeWrap(n, V)), n.none && (Array.isArray(V)
              ? V = V.map((F) => {
                return !F || !F.__v_isVNode ? F : i.none(F)
              })
              : V = i.none(V)), l && i.setCache(n, () => {
              return i.stable(V)
            }, r), V
          }, this.setCache(n, a, r)
        }
        return function () {
          const u = i.getCache(n)
          if (u)
            return u.apply(void 0, arguments)
          if (i.cache[n.id])
            return
          const p = i.renderCtx(n, n.parent)
          if (p)
            return p()
        }
      } catch (u) {
        console.error(u)
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
        o && o.__v_isVNode && o.children && pe(o.children) === 'object' && (o.children.$stable = !0, r.stable(o.children))
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
      return re(o, {
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
        const l = this.tmpInput
        this.vm.props.disabled === !0 && (n.prop.props.disabled = !0)
        const c = this.getModelField(n); const u = {
          callback(h) {
            l && l(n.field, h, n.rule), r.onInput(n, h)
          },
          modelField: c,
          value: this.$handle.getFormData(n),
        }
        s.push({
          on: X(Ie({}, 'update:'.concat(c), u.callback), n.prop.modelEmit
            ? Ie({}, n.prop.modelEmit, () => {
                return r.onEmitInput(n)
              })
            : {}),
          props: Ie({}, c, u.value),
        }), n.prop.model = u
      }
      return Rt(s, n.prop), n.prop
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
      return i.component ? typeof i.component == 'string' ? this.vNode.make(i.component, i, r) : this.vNode.makeComponent(i.component, i, r) : this.vNode[n.type] ? this.vNode[n.type](i, r) : this.vNode[n.originType] ? this.vNode[n.originType](i, r) : this.vNode.make(Xo(i.type), i, r)
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
          a = pt(n.type)
          const s = this.vNode.aliasMap[a]
          s && (a = pt(s))
        }
        if (a) {
          const l = An()
          L.trueArray(n.children) && n.children.forEach((u) => {
            u && l.setSlot(u == null ? void 0 : u.slot, () => {
              return o.renderRule(u)
            })
          })
          const c = X({}, n)
          return delete c.type, delete c.is, this.vNode.make(a, c, l.mergeBag(r).getSlots())
        }
      }
    },
  })
}
let Ml = 1
function Hr(t) {
  re(this, {
    $handle: t,
    fc: t.fc,
    vm: t.vm,
    $manager: t.$manager,
    vNode: new t.fc.CreateNode(t),
    force: !1,
    tmpInput: null,
    id: Ml++,
  }), Zo(this, {
    options() {
      return t.options
    },
    sort() {
      return t.sort
    },
  }), this.initCache(), this.initRender()
}
Pl(Hr)
Tl(Hr)
function Il(t) {
  re(t.prototype, {
    parseInjectEvent(n, r) {
      const i = n.inject || this.options.injectEvent
      return this.parseEventLst(n, r, i)
    },
    parseEventLst(n, r, i, o) {
      const a = this
      return Object.keys(r).forEach((s) => {
        const l = a.parseEvent(n, r[s], i, o)
        l && (r[s] = l)
      }), r
    },
    parseEvent(n, r, i, o) {
      if (L.Function(r) && (i !== !1 && !L.Undef(i) || r.__inject))
        return this.inject(n, r, i)
      if (!o && Array.isArray(r) && r[0] && (L.String(r[0]) || L.Function(r[0])))
        return this.parseEventLst(n, r, i, !0)
      if (L.String(r)) {
        const a = bt(r)
        if (a && r !== a)
          return a.__inject ? this.parseEvent(n, a, i, !0) : a
      }
    },
    parseEmit(n) {
      const r = this; const i = {}; const o = n.rule; const a = o.emitPrefix; const s = o.field; const l = o.name; const c = o.inject; const u = o.emit || []
      return L.trueArray(u) && u.forEach((p) => {
        if (p) {
          let h; let m = a || s || l
          if (L.Object(p) && (h = p.inject, p = p.name, m = p.prefix || m), m) {
            const w = yn(''.concat(m, '-').concat(p)); const b = function () {
              let V, F, G
              r.vm.emitsOptions && (r.vm.emitsOptions[w] = null)
              for (var Q = arguments.length, Z = new Array(Q), ee = 0; ee < Q; ee++)
                Z[ee] = arguments[ee];
              (V = r.vm).emit.apply(V, [w].concat(Z)), (F = r.vm).emit.apply(F, ['emit-event', w].concat(Z)), (G = r.bus).$emit.apply(G, [w].concat(Z))
            }
            if (b.__emit = !0, !h && c === !1) {
              i[p] = b
            } else {
              const A = h || c || r.options.injectEvent
              i[p] = L.Undef(A) ? b : r.inject(o, b, A)
            }
          }
        }
      }), n.computed.on = i, i
    },
    getInjectData(n, r) {
      const i = n.__fc__ && n.__fc__.$api; const o = n.__fc__ && n.__fc__.$handle.vm || this.vm; const a = o.props; const s = a.option; const l = a.rule
      return {
        $f: i || this.api,
        api: i || this.api,
        rule: l,
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
        for (var l = o.getInjectData(n, i), c = arguments.length, u = new Array(c), p = 0; p < c; p++)
          u[p] = arguments[p]
        return l.args = [].concat(u), u.unshift(l), r.apply(this, u)
      }
      return a.__origin = r, a.__json = r.__json, a
    },
    loadStrVar(n, r, i) {
      const o = this
      if (n && typeof n == 'string' && n.includes('{{') && n.includes('}}')) {
        const a = n; const s = xl(n); const l = function (h) {
          let m = !1; let w
          if (i && h.indexOf('$form.') === 0) {
            const b = h.split('.')
            b.shift(), Pe(i.value, b[0]) && (m = !0, w = r
              ? r({
                  id: `$form.${b[0]}_${i.rule.__fc__.id}`,
                  getValue() {
                    return Xe(i.value, b)
                  },
                })
              : Xe(i.value, b))
          }
          return m || (w = r ? r(h) : o.fc.getLoadData(h)), w
        }; const c = function p(h) {
          const m = []
          h.forEach((b) => {
            b.key ? m.push(b.key) : b.children && m.push(p(b.children))
          })
          let w = !1
          return m.forEach((b, A) => {
            b != null && (b.indexOf('\'') === 0 || b.indexOf('"') === 0) && (m[A] = b.slice(1, -1), w = !0)
          }), m.length === 1 && (w || !isNaN(Number(m[0]))) ? m[0] : l(m.join('.'))
        }; let u
        if (s.forEach((p) => {
          const h = p.split('||'); const m = h[0].trim()
          if (m) {
            const w = (h[1] || '').trim(); const b = Qo(m); let A = fe(() => {
              return c(b)
            });
            (A == null || A === '') && h.length > 1 && (A = w), u = A, n = n.replaceAll('{{'.concat(p, '}}'), A == null ? '' : A)
          }
        }), s.length === 1 && a === '{{'.concat(s[0], '}}')) {
          return u
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
      return n.action = s(n.action || ''), ['headers', 'data', 'query'].forEach((l) => {
        if (n[l]) {
          const c = Array.isArray(n[l]) ? [] : {}
          Object.keys(n[l]).forEach((u) => {
            c[s(u)] = s(n[l][u])
          }), n[l] = c
        }
      }), n
    },
  })
}
const Yi = ['hook:updated', 'hook:mounted']
function Fl(t) {
  re(t.prototype, {
    usePage() {
      const n = this; const r = this.options.page
      if (r) {
        let i = 25; let o = jl(this.rules)
        L.Object(r) && (r.first && (i = Number.parseInt(r.first, 10) || i), r.limit && (o = Number.parseInt(r.limit, 10) || o)), re(this, {
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
        n.pageEnd ? (n.bus.$off(Yi, i), n.bus.$emit('page-end')) : (n.first += n.limit, n.pageEnd = n.rules.length <= n.first, n.loadRule(), n.refresh())
      }
      this.bus.$on(Yi, r)
    },
  })
}
function jl(t) {
  return t.length < 31 ? 31 : Math.ceil(t.length / 3)
}
function Vl(t) {
  re(t.prototype, {
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
function Ll(t) {
  Object.defineProperties(t.origin, {
    __fc__: Dr(Me(t), !0),
  }), t.rule !== t.origin && Object.defineProperties(t.rule, {
    __fc__: Dr(Me(t), !0),
  })
}
function ra(t, e, n) {
  const r = Jn(); const i = !!e.field
  re(this, {
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
    prop: X({}, e),
    computed: {},
    payload: {},
    refRule: {},
    input: i,
    el: void 0,
    exportEl: void 0,
    defaultValue: i ? mt(n) : void 0,
    field: e.field || void 0,
  }), this.updateKey(), Ll(this), this.update(t, !0)
}
re(ra.prototype, {
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
    const n = this; const r = e.key; const i = e.origin; const o = e.def; const a = e.onLoad; const s = e.onReload; const l = e.onUpdate
    if (this.pending[r] && this.pending[r].origin === i)
      return this.getPending(r, o)
    delete this.pending[r]
    let c = i
    if (L.Function(i)) {
      const u = fe(() => {
        return i({
          rule: n.rule,
          api: n.$api,
          update(h) {
            const m = h || o; const w = n.getPending(r, o)
            n.setPending(r, i, m), l && l(m, w)
          },
          reload() {
            const h = n.getPending(r, o)
            delete n.pending[r], s && s(h), n.$api && n.$api.sync(n.rule)
          },
        })
      })
      u && L.Function(u.then)
        ? (u.then((p) => {
            const h = p || o
            n.setPending(r, i, h), a && a(h), n.$api && n.$api.sync(n.rule)
          }).catch((p) => {
            console.error(p)
          }), c = o, this.setPending(r, i, c))
        : (c = u || o, this.setPending(r, i, c), a && a(c))
    }
    return c
  },
  getPending(e, n) {
    return this.pending[e] && this.pending[e].value || n
  },
  setPending(e, n, r) {
    this.pending[e] = {
      origin: n,
      value: Ne(r),
    }
  },
  effectData(e) {
    return this.payload[e] || (this.payload[e] = {}), this.payload[e]
  },
  clearEffectData(e) {
    e === void 0 ? this.payload = {} : delete this.payload[e]
  },
  updateKey(e) {
    this.key = Jn(), e && this.parent && this.parent.updateKey(e)
  },
  updateType() {
    this.originType = this.rule.type, this.type = pt(this.rule.type), this.trueType = this.$handle.getType(this.originType)
  },
  setParser(e) {
    this.parser = e, e.init(this)
  },
  initProp() {
    const e = this; let n; let r; const i = X({}, this.rule)
    delete i.children, delete i.validate, this.prop = Ot({}, [i].concat(de(Object.keys(this.payload).map((o) => {
      return e.payload[o]
    })), [this.computed])), this.prop.validate = [].concat(de(((n = this.refRule) === null || n === void 0 || (r = n.__$validate) === null || r === void 0 ? void 0 : r.value) || []), de(this.prop.validate || []))
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
    this.unwatch(), this.unlink(), this.rmCtrl(), this.parent && this.parent.children.splice(this.parent.children.indexOf(this) >>> 0, 1), re(this, {
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
        e.rmCtrl(), n(), e.$handle.rmCtx(e), re(e, {
          root: [],
        })
      }, e.input)
    })
  },
  update(e, n) {
    re(this, {
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
function Bl(t) {
  re(t.prototype, {
    nextRefresh(n) {
      const r = this; const i = this.loadedId
      Fe(() => {
        i === r.loadedId && (n ? n() : r.refresh())
      })
    },
    parseRule(n) {
      const r = this; const i = Ni(n)
      return Object.defineProperties(i, {
        __origin__: Dr(n, !0),
      }), Nl(i), this.appendValue(i), [i, i.prefix, i.suffix].forEach((o) => {
        !o || r.loadFn(o, i)
      }), this.loadCtrl(i), i.update && (i.update = bt(i.update)), i
    },
    loadFn(n, r) {
      const i = this;
      ['on', 'props', 'deep'].forEach((o) => {
        n[o] && i.parseInjectEvent(r, n[o])
      })
    },
    loadCtrl(n) {
      n.control && n.control.forEach((r) => {
        r.handle && (r.handle = bt(r.handle))
      })
    },
    syncProp(n) {
      const r = this; const i = n.rule
      L.trueArray(i.sync) && Rt([{
        on: i.sync.reduce((o, a) => {
          return o[pe(a) === 'object' && a.event || 'update:'.concat(a)] = function (s) {
            i.props[pe(a) === 'object' && a.prop || a] = s, r.vm.emit('sync', a, s, i, r.fapi)
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
      const i = this; const o = function l(c) {
        const u = n[c - 1]
        if (!u || !u.__fc__)
          return c > 0 ? l(c - 1) : -1
        const p = i.sort.indexOf(u.__fc__.id)
        return p > -1 ? p : l(c - 1)
      }; const a = function (c, u) {
        L.trueArray(c) && i._loadRule(c, u)
      }; const s = n.map((l, c) => {
        if (!(r && !L.Object(l)) && !(!i.pageEnd && !r && c >= i.first)) {
          if (l.__fc__ && l.__fc__.root === n && i.ctxs[l.__fc__.id])
            return a(l.__fc__.loadChildrenPending(), l.__fc__), l.__fc__
          const u = Ni(l); const p = function () {
            return !!(u.field && i.fieldCtx[u.field] && i.fieldCtx[u.field][0] !== l.__fc__)
          }
          i.fc.targetFormDriver('loadRule', {
            rule: u,
            api: i.api,
          }, i.fc), i.ruleEffect(u, 'init', {
            repeat: p(),
          }), p() && i.vm.emit('repeat-field', l, i.api)
          let h; let m = !1; const w = !!l.__fc__; let b = u.value
          if (w) {
            if (h = l.__fc__, b = h.defaultValue, h.deleted) {
              if (Wi(h))
                return
              h.update(i)
            } else if (!h.check(i)) {
              if (Wi(h))
                return
              n[c] = l = l._clone ? l._clone() : Uo(bn(l)), h = null, m = !0
            }
          }
          if (h) {
            h.originType !== h.rule.type && h.updateType(), i.bindParser(h), i.appendValue(h.rule), h.parent && h.parent !== r && i.rmSubRuleData(h)
          } else {
            const A = i.parseRule(l)
            h = new ra(i, A, b), i.bindParser(h)
          }
          i.parseEmit(h), i.syncProp(h), h.parent = r || null, h.root = n, i.setCtx(h), !m && !w && (i.effect(h, 'load'), i.targetHook(h, 'load')), i.effect(h, 'created')
          const M = h.loadChildrenPending()
          if (h.parser.loadChildren === !1 || a(M, h), !r) {
            const V = o(c)
            V > -1 || !c ? i.sort.splice(V + 1, 0, h.id) : i.sort.push(h.id)
          }
          const F = h.rule
          return h.updated || (h.updated = !0, L.Function(F.update) && i.bus.$once('load-end', () => {
            i.refreshUpdate(h, F.value, 'init')
          }), i.effect(h, 'loaded')), i.refreshControl(h) && (i.cycleLoad = !0), h
        }
      }).filter((l) => {
        return !!l
      })
      r && (r.children = s)
    },
    refreshControl(n) {
      return n.input && n.rule.control && this.useCtrl(n)
    },
    useCtrl(n) {
      const r = this; const i = zl(n); const o = []; const a = this.api
      if (!i.length)
        return !1
      for (let s = function (m) {
          const w = i[m]; const b = w.handle || function (M) {
            return (jt[w.condition || '=='] || jt['=='])(M, w.value)
          }
          if (!L.trueArray(w.rule))
            return 'continue'
          const A = X(X({}, w), {}, {
            valid: fe(() => {
              return b(n.rule.value, a)
            }),
            ctrl: Ul(n, w.rule),
            isHidden: L.String(w.rule[0]),
          })
          if (A.valid && A.ctrl || !A.valid && !A.ctrl && !A.isHidden)
            return 'continue'
          o.push(A)
        }, l = 0; l < i.length; l++)
        var c = s(l)
      if (!o.length)
        return !1
      const u = []; let p = !1
      return this.deferSyncValue(() => {
        o.reverse().forEach((h) => {
          const m = h.isHidden; const w = h.valid; const b = h.rule; const A = h.prepend; const M = h.append; const V = h.child; const F = h.ctrl; const G = h.method
          if (m) {
            w
              ? n.ctrlRule.push({
                  __ctrl: !0,
                  children: b,
                  valid: w,
                })
              : F && n.ctrlRule.splice(n.ctrlRule.indexOf(F) >>> 0, 1), u[w ? 'push' : 'unshift'](() => {
              G === 'disabled' || G === 'enabled'
                ? r.api.disabled(!w, b)
                : G === 'display' || G === 'show'
                  ? r.api.display(w, b)
                  : G === 'required'
                    ? (b.forEach((ee) => {
                        r.api.setEffect(ee, 'required', w)
                      }), w || r.api.clearValidateState(b))
                    : r.api.hidden(!w, b)
            })
            return
          }
          if (w) {
            p = !0
            const Q = {
              type: 'fragment',
              native: !0,
              __ctrl: !0,
              children: b,
            }
            n.ctrlRule.push(Q), r.bus.$once('load-start', () => {
              A ? a.prepend(Q, A, V) : M || V ? a.append(Q, M || n.id, V) : n.root.splice(n.root.indexOf(n.origin) + 1, 0, Q)
            })
          } else {
            n.ctrlRule.splice(n.ctrlRule.indexOf(F), 1)
            const Z = St(F)
            Z && Z.rm()
          }
        })
      }), u.length && (this.loading
        ? u.length && this.bus.$once('load-end', () => {
          u.forEach((h) => {
            return h()
          })
        })
        : u.length && Fe(() => {
          u.forEach((h) => {
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
      const i = X({}, this.ctxs)
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
function Nl(t) {
  const e = ea()
  return Object.keys(e).forEach((n) => {
    Pe(t, n) || (t[n] = e[n])
  }), t
}
function zl(t) {
  const e = t.rule.control || []
  return L.Object(e) ? [e] : e
}
function Ul(t, e) {
  for (let n = 0; n < t.ctrlRule.length; n++) {
    const r = t.ctrlRule[n]
    if (r.children === e)
      return r
  }
}
function Wi(t) {
  return !!t.rule.__ctrl
}
function ql(t) {
  re(t.prototype, {
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
        Object.keys(r || {}).forEach((l) => {
          a && Pe(a, l) ? s[l] = r[l] : Pe(i.api.form, l) ? i.api.form[l] = r[l] : i.api.top !== i.api && Pe(i.api.top.form, l) && (i.api.top.form[l] = r[l])
        }), Object.keys(s).length && i.api.setChildrenFormData(o.rule, s)
      })
    },
    onBaseInput(n, r) {
      this.setFormData(n, r), n.modelValue = r, this.nextRefresh(), this.$render.clearCache(n)
    },
    setFormData(n, r) {
      n.modelValue = r
      const i = n.getParentGroup()
      i && (this.subRuleData[i.id] || (this.subRuleData[i.id] = {}), this.subRuleData[i.id][n.field] = n.rule.value), st(this.formData, n.id, r)
    },
    rmSubRuleData(n) {
      const r = n.getParentGroup()
      r && this.subRuleData[r.id] && delete this.subRuleData[r.id][n.field]
    },
    getFormData(n) {
      return this.formData[n.id]
    },
    syncForm() {
      const n = this; const r = Ne({}); const i = this.fields(); const o = []
      this.options.appendValue !== !1 && Object.keys(this.appendData).reduce((a, s) => {
        return !i.includes(s) && (a[s] = qe(n.appendData, s)), a
      }, r), i.reduce((a, s) => {
        let l = (n.fieldCtx[s] || []).filter((c) => {
          return !n.isIgnore(c)
        })[0]
        return l || (l = n.fieldCtx[s][0], o.push(s)), a[s] = qe(l.rule, 'value'), a
      }, r), this.form = r, this.ignoreFields = o, this.syncValue()
    },
    isIgnore(n) {
      return n.rule.ignore === !0 || (n.rule.ignore === 'hidden' || this.options.ignoreHiddenFields) && n.hasHidden()
    },
    appendValue(n) {
      (!n.field || !Pe(this.appendData, n.field)) && (!L.Undef(n.value) || !this.options.forceCoverValue) || (n.value = this.appendData[n.field], delete this.appendData[n.field])
    },
    addSubForm(n, r) {
      this.subForm[n.id] = r
    },
    deferSyncValue(n, r) {
      this.deferSyncFn || (this.deferSyncFn = n), this.deferSyncFn.sync || (this.deferSyncFn.sync = r), fe(n), this.deferSyncFn === n && (this.deferSyncFn = null, n.sync && this.syncForm())
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
      return JSON.stringify(this.getFormData(n), Xi) !== JSON.stringify(r, Xi)
    },
    isQuote(n, r) {
      return (typeof r === 'function' || L.Object(r) || Array.isArray(r)) && r === n.rule.value
    },
    refreshUpdate(n, r, i, o) {
      const a = this
      if (L.Function(n.rule.update)) {
        const s = fe(() => {
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
function Xi(t, e) {
  return typeof e == 'function' ? `${e}` : e
}
const Vn = {
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
}; const Hl = ['field', 'value', 'vm', 'template', 'name', 'config', 'control', 'inject', 'sync', 'payload', 'optionsTo', 'update', 'slotUpdate', 'computed', 'component', 'cache']; const un = Symbol('oldValue')
function Gl(t) {
  re(t.prototype, {
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
        const o = i.parsers || {}; const a = o[n.originType] || o[pt(n.type)] || o[n.trueType]
        if (a)
          return a
      }
      return r[n.originType] || r[pt(n.type)] || r[n.trueType] || Vn
    },
    bindParser(n) {
      n.setParser(this.getParser(n))
    },
    getType(n) {
      const r = this.fc.CreateNode.aliasMap; const i = r[n] || r[pt(n)] || n
      return pt(i)
    },
    noWatch(n) {
      this.noWatchFn || (this.noWatchFn = n), fe(n), this.noWatchFn === n && (this.noWatchFn = null)
    },
    watchCtx(n) {
      const r = this; const i = Wo()
      if (i.filter((a) => {
        return a[0] !== '_' && a[0] !== '$' && !Hl.includes(a)
      }).forEach((a) => {
        const s = qe(n.rule, a); const l = a === 'children'
        n.refRule[a] = s, n.watch.push(He(l
          ? () => {
              return L.Function(s.value) ? s.value : de(s.value || [])
            }
          : () => {
              return s.value
            }, (c, u) => {
          let p = s.value
          if (!r.isBreakWatch()) {
            if (l && n.parser.loadChildren === !1) {
              r.$render.clearCache(n), r.nextRefresh()
              return
            }
            if (r.watching = !0, Fe(() => {
              r.targetHook(n, 'watch', {
                key: a,
                oldValue: u,
                newValue: p,
              })
            }), a === 'hidden' && Boolean(p) !== Boolean(u) && (r.$render.clearCacheAll(), Fe(() => {
              r.targetHook(n, 'hidden', {
                value: p,
              })
            })), a === 'ignore' && n.input || a === 'hidden' && (n.rule.ignore === 'hidden' || r.options.ignoreHiddenFields)) {
              r.syncForm()
            } else if (a === 'link') {
              n.link()
              return
            } else {
              ['props', 'on', 'deep'].includes(a) ? (r.parseInjectEvent(n.rule, p || {}), a === 'props' && n.input && r.setFormData(n, n.parser.toFormValue(n.rule.value, n))) : a === 'emit' ? r.parseEmit(n) : ['prefix', 'suffix'].includes(a) ? p && r.loadFn(p, n.rule) : a === 'type' ? (n.updateType(), r.bindParser(n)) : l && (L.Function(u) && (u = n.getPending('children', [])), L.Function(p) && (p = n.loadChildrenPending()), r.updateChildren(n, p, u))
            }
            r.$render.clearCache(n), r.refresh(), r.watching = !1
          }
        }, {
          deep: !l,
          sync: l,
        }))
      }), n.refRule.__$title = At(() => {
        let a = (pe(n.rule.title) === 'object' ? n.rule.title.title : n.rule.title) || ''
        if (a) {
          const s = a.match(/^\{\{\s*\$t\.(.+)\s*\}\}$/)
          s && (a = r.api.t(s[1]))
        }
        return a
      }), n.refRule.__$info = At(() => {
        let a = (pe(n.rule.info) === 'object' ? n.rule.info.info : n.rule.info) || ''
        if (a) {
          const s = a.match(/^\{\{\s*\$t\.(.+)\s*\}\}$/)
          s && (a = r.api.t(s[1]))
        }
        return a
      }), n.refRule.__$validate = At(() => {
        const a = function (l) {
          const c = l.match(/^\{\{\s*\$t\.(.+)\s*\}\}$/)
          if (c) {
            let u, p
            return r.api.t(c[1], {
              title: (u = n.refRule) === null || u === void 0 || (p = u.__$title) === null || p === void 0 ? void 0 : p.value,
            })
          }
          return l
        }
        return et(n.rule.validate).map((s) => {
          const l = X({}, s)
          if (l.message && (l.message = a(l.message)), L.Function(l.validator)) {
            const c = n
            l.validator = function () {
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
          if (l.adapter) {
            if (pe(l.error) === 'object') {
              const u = X({}, l.error)
              Object.keys(u).forEach((p) => {
                u[p] = a(u[p])
              }), l.error = u
            }
            return r.adapterValidate(l, n)
          }
          return l
        })
      }), n.input) {
        const o = qe(n.rule, 'value')
        n.watch.push(He(() => {
          return o.value
        }, () => {
          const a = n.parser.toFormValue(o.value, n)
          r.isChange(n, a) && r.setValue(n, o.value, a, !0)
        }))
      }
      this.bus.$once('load-end', () => {
        let a = n.rule.computed
        !a || (pe(a) !== 'object' && (a = {
          value: a,
        }), Object.keys(a).forEach((s) => {
          const l = At(() => {
            const u = a[s]
            if (u) {
              const p = r.compute(n, u)
              return (u.linkage || u.linkageVariable) && p === un ? un : p
            }
          }); const c = function (p) {
            s === 'value' ? r.onInput(n, p) : s[0] === '$' ? r.api.setEffect(n.id, s, p) : Mt(n.rule, s, p)
          };
          (s === 'value' ? [void 0, null, ''].includes(n.rule.value) : l.value !== Xe(n.rule, s)) && c(l.value), n.watch.push(He(l, (u) => {
            u !== un && setTimeout(() => {
              c(u)
            })
          }, {
            deep: !0,
          }))
        }))
      }), this.watchEffect(n)
    },
    adapterValidate(n, r) {
      const i = this; const o = function (s, l) {
        const c = n.beforeValidate && fe(() => {
          return n.beforeValidate({
            value: s,
            api: i.api,
            validate: n,
            rule: r.rule,
          })
        })
        if (c === !1) {
          l()
        } else {
          const u = i.validator(r, s, n)
          if (u) {
            let h = ''
            pe(n.error) === 'object' && (h = n.error[u] || n.error.default), !h && typeof n.message == 'string' && (h = n.message), h || (h = i.getValidateMessage(r, {
              key: u,
              rule: n[u],
            })), l(h)
          } else if (n.validator) {
            const p = n.validator && fe(() => {
              return n.validator(s, l)
            })
            p && L.Function(p.then) && p.then(() => {
              return l()
            }).catch((m) => {
              return l(m)
            })
          } else {
            l()
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
      return this.api.t(r.key === 'required' ? r.key : `validate.${r.key}`, (a = {}, Ie(a, r.key, s), Ie(a, 'title', (i = n.refRule) === null || i === void 0 || (o = i.__$title) === null || o === void 0 ? void 0 : o.value), a))
    },
    validator(n, r, i) {
      const o = this; const a = L.empty(r)
      if (a)
        return i.required ? 'required' : void 0
      for (var s = function () {
          const h = gs(c[l], 2); const m = h[0]; const w = h[1]
          switch (m) {
            case 'len':
            case 'maxLen':
            case 'minLen':
              var b = function (ee) {
                return m === 'len' ? ee === w : m === 'maxLen' ? ee <= w : ee >= w
              }
              if (Array.isArray(r)) {
                if (!b(r.length)) {
                  return {
                    v: m,
                  }
                }
              } else {
                if (pe(r) === 'object') {
                  return {
                    v: m,
                  }
                }
                if (!b((`${r}`).length)) {
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
              var M = Number(r)
              if (Number.isNaN(M)) {
                return {
                  v: m,
                }
              }
              if (m === 'min' && M < w) {
                return {
                  v: m,
                }
              }
              if (m === 'max' && M > w) {
                return {
                  v: m,
                }
              }
              if (m === 'positive' && M <= 0) {
                return {
                  v: m,
                }
              }
              if (m === 'negative' && M >= 0) {
                return {
                  v: m,
                }
              }
              if (m === 'integer' && !Number.isInteger(M)) {
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
              if (pe(r) !== 'object' || Array.isArray(w) && w.some((Z) => {
                return !(Z in r)
              })) {
                return {
                  v: m,
                }
              }
              break
            case 'email':
              var V = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i
              if (!V.test(`${r}`)) {
                return {
                  v: m,
                }
              }
              break
            case 'url':
              var F = new RegExp('^(?!mailto:)(?:http|https|ftp)://(?:\\S+@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}\\.(?:\\d\\d?|1\\d\\d|2[0-4]\\d|25[0-4])|(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9](?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9])*\\.[a-z\\u00a1-\\uffff]{2,}|localhost)(?::\\d{2,5})?(?:([/?#])\\S*)?$', 'i')
              if (!F.test(`${r}`)) {
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
              var Q = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
              if (!Q.test(`${r}`)) {
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
        }, l = 0, c = Object.entries(i); l < c.length; l++) {
        const u = s()
        if (pe(u) === 'object')
          return u.v
      }
    },
    compute(n, r) {
      const i = this; let o
      if (pe(r) === 'object') {
        const a = n.getParentGroup(); const s = function u(p) {
          if (p = Array.isArray(p)
            ? {
                mode: 'AND',
                group: p,
              }
            : p, !L.trueArray(p.group)) {
            return !0
          }
          for (var h = p.mode === 'OR', m = !0, w = function (V) {
              const F = p.group[V]; let G = void 0; let Q = null; let Z = null
              if (F.variable) {
                Z = i.fc.getLoadData(F.variable)
              } else if (F.field) {
                Q = qi(F.field || '')
              } else if (!F.mode) {
                return {
                  v: !0,
                }
              }
              let ee = F.compare
              if (ee && (ee = qi(ee || '')), F.mode
                ? G = u(F)
                : jt[F.condition]
                  ? L.Function(F.handler)
                    ? G = fe(() => {
                      return F.handler(i.api, n.rule)
                    })
                    : G = fe(() => {
                      return new Function('$condition', '$variableVal', '$val', '$form', '$scope', '$group', '$rule', 'with($form){with($scope){with(this){with($group){ return $condition[\''.concat(F.condition, '\'](').concat(F.variable ? '$variableVal' : Q, ', ').concat(ee || '$val', '); }}}}')).call(i.api.form, jt, Z, F.value, i.api.top.form, i.api.top === i.api.scope ? {} : i.api.scope.form, a ? i.subRuleData[a.id] || {} : {}, n.rule)
                    })
                  : G = !1, h && G) {
                return {
                  v: !0,
                }
              }
              h || (m = m && G)
            }, b = 0; b < p.group.length; b++) {
            const A = w(b)
            if (pe(A) === 'object')
              return A.v
          }
          return h ? !1 : m
        }; let l = s(r)
        return l = r.invert === !0 ? !l : l, r.linkage
          ? l
            ? fe(() => {
                return i.computeValue(r.linkage, n, a)
              }, void 0)
            : un
          : r.linkageVariable
            ? l
              ? fe(() => {
                  return i.fc.getLoadData(r.linkageVariable)
                }, void 0)
              : un
            : l
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
      return fe(o, void 0)
    },
    computeValue(n, r, i) {
      const o = this; const a = this; const s = Object.keys(this.fc.formulas).reduce((l, c) => {
        return l[c] = function () {
          for (var u, p = arguments.length, h = new Array(p), m = 0; m < p; m++)
            h[m] = arguments[m]
          return (u = a.fc.formulas[c]).call.apply(u, [{
            that: this,
            rule: r.rule,
            api: a.api,
            fc: a.fc,
          }].concat(h))
        }, l
      }, {})
      return fe(() => {
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
        Ft(this.ctxs, i), Ft(this.formData, i), Ft(this.subForm, i), Ft(this.vm.setupState.ctxInject, i)
        const l = n.getParentGroup()
        l && this.subRuleData[l.id] && Ft(this.subRuleData[l.id], o), n.group && Ft(this.subRuleData, i), a && this.rmIdCtx(n, o, 'field'), s && this.rmIdCtx(n, s, 'name'), a && !Pe(this.fieldCtx, o) && Ft(this.form, o), this.deferSyncValue(() => {
          if (!r.reloading) {
            if (n.parser.loadChildren !== !1) {
              const u = n.getPending('children', n.rule.children)
              L.trueArray(u) && u.forEach((p) => {
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
function Yl(t) {
  re(t.prototype, {
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
      const s = this.options[n] || this.options[pt(`on-${n}`)]
      if (s) {
        const l = bt(s)
        L.Function(l) && fe(() => {
          return l.apply(void 0, o)
        })
      }
      (r = this.bus).$emit.apply(r, [n].concat(o))
    },
    targetHook(n, r, i) {
      let o; let a; const s = this; const l = (o = n.prop) === null || o === void 0 || (a = o.hook) === null || a === void 0 ? void 0 : a[r]; const c = function (A, M) {
        A && (A = Array.isArray(A) ? A : [A], A.forEach((V) => {
          fe(() => {
            return V(X(X({}, i || {}), {}, {
              self: n.rule,
              rule: n.rule,
              parent: M == null ? void 0 : M.rule,
              $f: s.api,
              api: s.api,
              option: s.vm.props.option,
            }))
          })
        }))
      }
      c(l)
      for (let u = `deep${No(r)}`, p = n.parent; p;) {
        var h; var m; const w = (h = p.prop) === null || h === void 0 || (m = h.hook) === null || m === void 0 ? void 0 : m[u]
        c(w, p), p = p.parent
      }
    },
  })
}
function Wl(t) {
  re(t.prototype, {
    useProvider() {
      const n = this; const r = this.fc.providers
      Object.keys(r).forEach((i) => {
        let o = r[i]
        L.Function(o) && (o = o(n.fc)), o._c = Kl(o), n.onEffect(o, i), n.providers[i] = o
      })
    },
    onEffect(n, r) {
      const i = this; const o = [];
      (n._c || ['*']).forEach((a) => {
        const s = a === '*' ? '*' : i.getType(a)
        o.includes(s) || (o.push(s), i.bus.$on('p:'.concat(r || n.name, ':').concat(s, ':').concat(n.input ? 1 : 0), (l, c) => {
          n[l] && n[l].apply(n, de(c))
        }))
      }), n._used = o
    },
    watchEffect(n) {
      const r = this; const i = {
        required() {
          let a, s
          return (Pe(n.rule, '$required') ? n.rule.$required : (a = n.rule) === null || a === void 0 || (s = a.effect) === null || s === void 0 ? void 0 : s.required) || !1
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
          r.effect(n, 'watch', Ie({}, o, a))
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
      if (Pe(n, `$${r}`))
        return n[`$${r}`]
      if (Pe(n, 'effect') && Pe(n.effect, r))
        return n.effect[r]
    },
    emitEffect(n, r, i) {
      const o = this; const a = n.ctx; const s = n.rule; const l = n.input; const c = n.type; const u = n.custom
      if (!(!c || ['fcFragment', 'fragment'].includes(c))) {
        const p = u || Object.keys(s).reduce((h, m) => {
          return m[0] === '$' && (h[m.substr(1)] = s[m]), h
        }, X({}, s.effect || {}))
        Object.keys(p).forEach((h) => {
          const m = o.providers[h]
          if (!(!m || m.input && !l)) {
            let w
            if (!m._c)
              w = '*'
            else if (m._used.includes(c))
              w = c
            else
              return
            const b = X({
              value: p[h],
              getValue() {
                return o.getEffect(s, h)
              },
            }, i || {})
            a && (b.getProp = function () {
              return a.effectData(h)
            }, b.clearProp = function () {
              return a.clearEffectData(h)
            }, b.mergeProp = function (A) {
              return Ot(b.getProp(), [A])
            }, b.id = a.id), o.bus.$emit('p:'.concat(h, ':').concat(w, ':').concat(m.input ? 1 : 0), r, [b, s, o.api])
          }
        })
      }
    },
  })
}
function Xl(t) {
  return t.filter((e, n, r) => {
    return r.indexOf(e, 0) === n
  })
}
function Kl(t) {
  const e = t.components
  if (Array.isArray(e)) {
    const n = Xl(e.filter((r) => {
      return r !== '*'
    }))
    return n.length ? n : !1
  } else {
    return L.String(e) ? [e] : !1
  }
}
function wt(t) {
  const e = this
  Zo(this, {
    options() {
      return t.options.value || {}
    },
    bus() {
      return t.bus
    },
    preview() {
      return t.vm.props.preview != null ? t.vm.props.preview : t.vm.setupState.parent && t.vm.setupState.parent.props.preview != null ? t.vm.setupState.parent.props.preview : t.options.value.preview || !1
    },
  }), re(this, {
    fc: t,
    vm: t.vm,
    watching: !1,
    loading: !1,
    reloading: !1,
    noWatchFn: null,
    deferSyncFn: null,
    isMounted: !1,
    formData: Ne({}),
    subRuleData: Ne({}),
    subForm: {},
    form: Ne({}),
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
  }), this.initData(t.rules), this.$manager = new t.manager(this), this.$render = new Hr(this), this.api = t.extendApiFn.reduce((n, r) => {
    const i = fe(() => {
      return r(n, e)
    })
    return i && i !== n && re(n, i), n
  }, Dl(this))
}
re(wt.prototype, {
  initData(e) {
    re(this, {
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
    this.appendData = X(X(X({}, this.options.formData || {}), this.fc.vm.props.modelValue || {}), this.appendData)
  },
  isBreakWatch() {
    return this.loading || this.noWatchFn || this.reloading
  },
  globalBeforeFetch(e) {
    const n = this
    return new Promise((r, i) => {
      const o = n.options.beforeFetch && fe(() => {
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
      const o = e && e.beforeFetch && fe(() => {
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
      const o = n.options.beforeSubmit && fe(() => {
        return n.options.beforeSubmit(e, {
          api: n.api,
        })
      })
      o && L.Function(o.then) ? o.then(r).catch(i) : o === !1 ? i() : r()
    })
  },
})
Il(wt)
Fl(wt)
Vl(wt)
Bl(wt)
ql(wt)
Gl(wt)
Yl(wt)
Wl(wt)
const Jl = 'fcFragment'; const fr = ye({
  name: Jl,
  inheritAttrs: !1,
  props: ['vnode'],
  render() {
    return this.vnode
  },
})
function Zl(t) {
  return Object.keys(t).map((e) => {
    const n = t[e]; const r = Ao(e)
    if (r)
      return [r, n.value, n.arg, n.modifiers]
  }).filter((e) => {
    return !!e
  })
}
function Ki(t, e) {
  let n = t.directives
  return n
    ? (Array.isArray(n) || (n = [n]), Co(e, n.reduce((r, i) => {
        return r.concat(Zl(i))
      }, [])))
    : e
}
function Ql() {
  const t = {}
  function e(n) {
    this.vm = n.vm, this.handle = n
  }
  return re(e.prototype, {
    make(r, i, o) {
      return Ki(i, this.h(r, zi(i), o))
    },
    makeComponent(r, i, o) {
      try {
        return Ki(i, B(r, zi(i), o))
      } catch (a) {
        return console.error(a), B('')
      }
    },
    h(r, i, o) {
      const a = this.vm || Or(); const s = a.appContext.config.isNativeTag(r); const l = this.handle.fc.prop.components[r]
      !l && s && delete i.formCreateInject
      try {
        return B(l || (s ? r : J(r)), i, o)
      } catch (c) {
        return console.error(c), B('')
      }
    },
    aliasMap: t,
  }), re(e, {
    aliasMap: t,
    alias(r, i) {
      t[r] = i
    },
    use(r) {
      Object.keys(r).forEach((i) => {
        const o = yn(i); const a = Bo(i).toLocaleLowerCase(); const s = r[i]
        e.alias(i, s), [i, o, a].forEach((l) => {
          e.prototype[l] = function (c, u) {
            return this.make(t[i] || l, c, u)
          }
        })
      })
    },
  }), e
}
function eu(t) {
  const e = /* @__PURE__ */ (function (n) {
    fs(i, n)
    const r = ms(i)
    function i() {
      return cs(this, i), r.apply(this, arguments)
    }
    return i
  }(ia))
  return Object.assign(e.prototype, t), e
}
function ia(t) {
  re(this, {
    $handle: t,
    vm: t.vm,
    options: {},
    ref: 'fcForm',
    mergeOptionsRule: {
      normal: ['form', 'row', 'info', 'submitBtn', 'resetBtn'],
    },
  }), this.updateKey(), this.init()
}
re(ia.prototype, {
  __init() {
    const e = this
    this.$render = this.$handle.$render, this.$r = function () {
      let n
      return (n = e.$render).renderRule.apply(n, arguments)
    }
  },
  updateKey() {
    this.key = Jn()
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
    return Rt(e.map((i) => {
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
function tu(e) {
  const n = {
    name: 'loadData',
    _fn: [],
    loaded(i, o, a) {
      const s = this
      this.deleted(i), Fe(() => {
        const l = et(i.getValue()); const c = []
        l.forEach((u) => {
          if (u && (u.attr || u.template)) {
            let p = function (b) {
              let A
              o && o.__fc__ && (A = o.__fc__.getParentGroup())
              let M
              u.template
                ? M = e.$handle.loadStrVar(u.template, b, A
                  ? {
                      rule: o,
                      value: e.$handle.subRuleData[A.id] || {},
                    }
                  : null)
                : u.handler && L.Function(u.handler)
                  ? M = u.handler(b, o, a)
                  : M = e.$handle.loadStrVar('{{'.concat(u.attr, '}}'), b, A
                    ? {
                        rule: o,
                        value: e.$handle.subRuleData[A.id] || {},
                      }
                    : null), (M == null || M === '') && u.default != null && (M = u.default), u.copy !== !1 && (M = mt(M))
              const V = u.modify ? o : i.getProp()
              u.to === 'child' ? V.children ? V.children[0] = M : V.children = [M] : Mt(V, u.to || 'options', M), a.sync(o)
            }; const h = function (b) {
              return p(b)
            }; const m = e.watchLoadData(h)
            p = Pt(p, u.wait || 300), u.watch !== !1 ? c.push(m) : m()
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
} function nu(e) {
  const n = {
    name: 't',
    _fn: [],
    loaded(i, o, a) {
      this.deleted(i)
      const s = i.getValue() || {}; const l = []
      Object.keys(s).forEach((c) => {
        const u = s[c]
        if (u) {
          const p = pe(u) === 'object'; let h = function (A) {
            const M = e.t(p ? u.attr : u, p ? u.params : null, A); const V = p && u.modify ? o : i.getProp()
            c === 'child' ? V.children ? V.children[0] = M : V.children = [M] : Mt(V, c, M), a.sync(o)
          }; const m = function (A) {
            return h(A)
          }; const w = e.watchLoadData(m)
          h = Pt(h, u.wait || 300), u.watch !== !1 ? l.push(w) : w()
        }
      }), this._fn[i.id] = l
    },
    deleted(i) {
      this._fn[i.id] && (this._fn[i.id].forEach((o) => {
        o()
      }), delete this._fn[i.id]), i.clearProp()
    },
  }
  return n.watch = n.loaded, n
} var Pr = {
  name: 'componentValidate',
  load(e, n, r) {
    let i = e.getValue()
    if (!i || i.method === !1) {
      e.clearProp(), r.clearValidateState([n.field])
    } else {
      L.Object(i) || (i = {
        method: i,
      })
      const o = i.method; const a = X(X({}, i), {}, {
        validator() {
          const l = St(n)
          if (l) {
            for (var c = arguments.length, u = new Array(c), p = 0; p < c; p++)
              u[p] = arguments[p]
            return r.exec.apply(r, [l.id, L.String(o) ? o : 'formCreateValidate'].concat(u, [{
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
    Pr.load.apply(Pr, arguments)
  },
}; function ru(e) {
  function n(o) {
    return L.String(o) && (o = {
      action: o,
      to: 'options',
    }), o
  }
  function r(o, a, s) {
    let l = o.value
    i.deleted(o), L.Function(l) && (l = l(a, s)), l = n(l)
    const c = function (m) {
      m === void 0 ? o.clearProp() : Mt(o.getProp(), l.to || 'options', m), m != null && l && l.key && e.$handle.options.globalData[l.key] && e.fetchCache.set(e.$handle.options.globalData[l.key], {
        status: !0,
        data: m,
      }), s.sync(a)
    }
    if (!l || !l.action && !l.key) {
      c(void 0)
      return
    }
    l = mt(l), l.to || (l.to = 'options')
    const u = l.onError; const p = function () {
      if (!o.getValue())
        return o.clearProp(), s.sync(a), !0
    }
    i._fn[o.id] = e.watchLoadData(Pt((h, m) => {
      if (m && l.watch === !1)
        return i._fn[o.id]()
      if (l.key) {
        e.targetRule = a
        const w = h(`$globalData.${l.key}`)
        if (delete e.targetRule, w) {
          if (p())
            return
          c(w)
        }
        return
      }
      const b = e.$handle.loadFetchVar(mt(l), h, a); const A = X(X({
        headers: {},
      }, b), {}, {
        onSuccess(V, F) {
          if (!p()) {
            let G = function (ee) {
              return F ? ee : Pe(ee, 'data') ? ee.data : ee
            }; const Q = bt(b.parse)
            L.Function(Q)
              ? G = Q
              : Q && L.String(Q) && (G = function (ee) {
                return Xe(ee, Q)
              }), Nn(G(V, a, s)).then((Z) => {
              c(Z)
            })
          }
        },
        onError(V) {
          c(void 0), !p() && (u || function (F) {
            return Ur(F.message || `fetch fail ${b.action}`)
          })(V, a, s)
        },
      })
      e.$handle.beforeFetch(A, {
        rule: a,
        api: s,
      }).then(() => {
        if (L.Function(b.action)) {
          Nn(b.action(a, s)).then((M) => {
            A.onSuccess(M, !0)
          }).catch((M) => {
            A.onError(M)
          })
          return
        }
        fe(() => {
          return e.create.fetch(A, {
            inject: o,
            rule: a,
            api: s,
          })
        })
      }).catch((M) => {
      })
    }, l.wait || 600))
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
} const iu = {
  fetch: ru,
  loadData: tu,
  t: nu,
  componentValidate: Pr,
}; const ou = 'html'; const au = {
  name: ou,
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
function su(t) {
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
function lu(t) {
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
function uu(t) {
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
function Gr(t, e) {
  if (!e)
    return null
  const n = e.split('.'); const r = t(n.shift())
  return n.length ? r == null ? null : Xe(r, n) : r
}
function cu(t) {
  return Gr(su, t)
}
function fu(t) {
  return Gr(lu, t)
}
function du(t) {
  return Gr(uu, t)
}
const hu = {
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
function pu(t, e) {
  let n
  return arguments.length === 2 ? (n = arguments[1], e = n[t]) : n = arguments[2], {
    id: e,
    prop: n,
  }
}
function dr() {
  return pu.apply(void 0, ['name'].concat(Array.prototype.slice.call(arguments)))
}
function mu(t) {
  const e = t.key || []; const n = t.array || []; const r = t.normal || []
  Rr.push.apply(Rr, de(e)), zn.push.apply(zn, de(n)), Un.push.apply(Un, de(r)), ta([].concat(de(e), de(n), de(r)))
}
let gu = 1; const at = {}; const Ji = Symbol('defValue')
function oa(t) {
  const e = Ie({}, fr.name, fr); const n = {}; const r = {}; const i = {}; const o = {}; const a = []; const s = []; const l = [t.extendApi]; const c = X({}, iu); const u = Al(); let p = {
    global: {},
  }; const h = t.isMobile === !0; const m = Ne({
    $mobile: h,
  }); const w = Ql(); const b = {}; const A = {}
  mu(t.attrs || {})
  function M(C) {
    const x = at[C]
    if (Array.isArray(x)) {
      return x.map((P) => {
        return P.api()
      })
    }
    if (x)
      return x.api()
  }
  function V(C) {
    a.push(C)
  }
  function F() {
    const C = dr.apply(void 0, arguments)
    C.id && C.prop && (r[C.id] = C.prop)
  }
  function G() {
    const C = dr.apply(void 0, arguments)
    C.id && C.prop && (c[C.id] = L.Function(C.prop)
      ? C.prop
      : X(X({}, C.prop), {}, {
          name: C.id,
        }))
  }
  function Q(C) {
    w.use(C)
  }
  function Z() {
    const C = dr.apply(void 0, arguments)
    if (!C.id || !C.prop)
      return Vn
    const x = pt(C.id); const P = C.prop; const _ = P.merge === !0 ? n[x] : void 0
    n[x] = Rn(P, _ || Vn), u[x] = Ge(x), P.maker && re(u, P.maker)
  }
  function ee(C, x) {
    let P
    if (L.String(C)) {
      if (P = C, x === void 0)
        return e[P]
    } else {
      P = C.displayName || C.name, x = C
    }
    if (!(!P || !x)) {
      const _ = pt(P)
      e[P] = x, e[_] = x, delete w.aliasMap[P], delete w.aliasMap[_], delete n[P], delete n[_], x.formCreateParser && Z(P, x.formCreateParser)
    }
  }
  function Y() {
    return El(I, e, r)
  }
  function se(C, x) {
    const P = Y()
    return ss({
      data() {
        return Ne({
          rule: C,
          option: x,
        })
      },
      render() {
        return We(P, X({
          ref: 'fc',
        }, this.$data))
      },
    })
  }
  function ne() {
    return fr
  }
  function ie(C, x) {
    return L.Function(C.install) ? C.install(Ee, x) : L.Function(C) && C(Ee, x), this
  }
  function Ee(C, x) {
    const P = se(C, x || {})
    a.forEach((S) => {
      fe(() => {
        return S(Ee, P)
      })
    })
    const _ = document.createElement('div');
    ((x == null ? void 0 : x.el) || document.body).appendChild(_)
    const O = P.mount(_)
    return O.$refs.fc.fapi
  }
  Rn(Ee, A)
  function nt(C) {
    const x = X({}, t)
    return C
      ? x.inherit = {
        components: e,
        parsers: n,
        directives: r,
        modelFields: i,
        providers: c,
        useApps: a,
        maker: u,
        formulas: b,
        loadData: m,
      }
      : delete x.inherit, oa(x)
  }
  function D(C, x) {
    i[C] = x
  }
  function E(C, x) {
    b[C] = x
  }
  function $(C, x) {
    const P = o[C] || {}; const _ = P.parsers || {}
    x.parsers && Object.keys(x.parsers).forEach((O) => {
      _[O] = Rn(x.parsers[O], Vn)
    }), x.name = C, o[C] = X(X(X({}, P), x), {}, {
      parsers: _,
    })
  }
  function d(C) {
    C && Object.keys(at).forEach((x) => {
      const P = Array.isArray(at[x]) ? at[x] : [at[x]]
      P.forEach((_) => {
        _.bus.$emit(`$loadData.${C}`)
      })
    })
  }
  function f(C, x) {
    Mt(m, C, x), d(C)
  }
  function v(C, x) {
    const P = function () {
      for (var O = arguments.length, S = new Array(O), R = 0; R < O; R++)
        S[R] = arguments[R]
      return fe(() => {
        return x.apply(void 0, S)
      })
    }
    P._driver = !0, f(C, P)
  }
  function y(C, x) {
    const P = (C || '').split('.')
    C = P.shift()
    const _ = P.join('.')
    if (Pe(m, C) || (m[C] = Ji), m[C] !== Ji) {
      let O = m[C]
      return O && O._driver ? O = O(_) : P.length && (O = Xe(O, P)), O == null || O === '' ? x : O
    } else {
      return x
    }
  }
  function g(C) {
    l.push(C)
  }
  function k(C) {
    delete m[C], d(C)
  }
  function j(C, x) {
    s.push({
      name: C,
      callback: x,
    })
  }
  function I(C) {
    const x = this
    re(this, {
      id: gu++,
      create: Ee,
      vm: C,
      manager: eu(t.manager),
      parsers: n,
      providers: c,
      modelFields: i,
      formulas: b,
      isMobile: h,
      rules: C.props.rule,
      name: C.props.name || Jn(),
      inFor: C.props.inFor,
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
      bus: new To(),
      unwatch: [],
      options: zr({}),
      extendApiFn: l,
      fetchCache: /* @__PURE__ */ new WeakMap(),
      tmpData: Ne({}),
    }), s.forEach((P) => {
      x.bus.$on(P.name, P.callback)
    }), Fe(() => {
      He(x.options, () => {
        x.$handle.$manager.updateOptions(x.options.value), x.api().refresh()
      }, {
        deep: !0,
      })
    }), re(C.appContext.components, e), re(C.appContext.directives, r), this.$handle = new wt(this), this.name && (this.inFor ? (at[this.name] || (at[this.name] = []), at[this.name].push(this)) : at[this.name] = this)
  }
  I.isMobile = h, re(I.prototype, {
    init() {
      const x = this
      this.isSub() && this.unwatch.push(He(() => {
        return x.vm.setupState.parent.setupState.fc.options.value
      }, () => {
        x.initOptions(), x.$handle.api.refresh()
      }, {
        deep: !0,
        flush: 'sync',
      })), this.vm.props.driver && (this.renderDriver = pe(this.vm.props.driver) === 'object' ? this.vm.props.driver : this.drivers[this.vm.props.driver]), !this.renderDriver && this.vm.setupState.parent && (this.renderDriver = this.vm.setupState.parent.setupState.fc.renderDriver), this.renderDriver || (this.renderDriver = this.drivers.default), this.initOptions(), this.$handle.init()
    },
    targetFormDriver(x) {
      for (var P, _ = this, O = arguments.length, S = Array.from({ length: O > 1 ? O - 1 : 0 }), R = 1; R < O; R++)
        S[R - 1] = arguments[R]
      if ((P = this.bus).$emit.apply(P, [x].concat(S)), this.renderDriver && this.renderDriver[x]) {
        return fe(() => {
          let T
          return (T = _.renderDriver)[x].apply(T, S)
        })
      }
    },
    t(x, P, _) {
      let O = _ ? _(`$t.${x}`) : this.globalLanguageDriver(x)
      return O == null && (O = ''), O && P && Object.keys(P).forEach((S) => {
        const R = new RegExp('{'.concat(S, '}'), 'g')
        O = O.replace(R, P[S])
      }), O
    },
    globalDataDriver(x) {
      const P = this; const _ = x.split('.'); const O = _.shift(); const S = this.options.value.globalData && this.options.value.globalData[O]
      if (S) {
        if (S.type === 'static')
          return Xe(S.data, _)
        let R; const T = this.fetchCache.get(S)
        if (T) {
          if (T.status && (R = Xe(T.data, _)), !T.loading)
            return R
          T.loading = !1, this.fetchCache.set(S, T)
        } else {
          this.fetchCache.set(S, {
            status: !1,
          })
        }
        const W = Pt(() => {
          le()
          const ce = P.fetchCache.get(S)
          P.options.value.globalData && Object.values(P.options.value.globalData).includes(S) ? (ce && (ce.loading = !0, P.fetchCache.set(S, ce)), P.bus.$emit(`$loadData.$globalData.${O}`)) : P.fetchCache.delete(S)
        }, S.wait || 600); const K = function (ge) {
          P.fetchCache.set(S, {
            status: !0,
            data: ge,
          }), P.bus.$emit(`$loadData.$globalData.${O}`)
        }; const ae = function (ge, ke) {
          if (ke && S.watch === !1)
            return le()
          if (ke) {
            W()
            return
          }
          const we = P.$handle.loadFetchVar(kr(S), ge)
          we.targetRule = P.targetRule, P.$handle.api.fetch(we).then((he) => {
            K(he)
          }).catch((he) => {
            K(null)
          })
        }; var le = this.watchLoadData(ae)
        return S.watch === !1 && le(), this.unwatch.push(le), R
      }
    },
    getLocale() {
      const x = this.vm.setupState.top.props.locale
      return x && pe(x) === 'object' ? x.name : typeof x == 'string' ? x : 'zh-cn'
    },
    globalLanguageDriver(x) {
      const P = this.vm.setupState.top.props.t; const _ = this.vm.setupState.top.props.locale; let O = void 0
      if (P && (O = fe(() => {
        return P(x)
      })), O == null && _ && pe(_) === 'object' && (O = Xe(_, x)), O == null) {
        const S = this.options.value.language || {}; const R = this.getLocale()
        O = Xe(S[R] || {}, x), O == null && (O = Xe(hu[R] || {}, x))
      }
      return O
    },
    globalVarDriver(x) {
      const P = this; const _ = x.split('.'); const O = _.shift(); const S = this.options.value.globalVariable && this.options.value.globalVariable[O]
      if (S) {
        const R = L.Function(S) ? S : bt(S.handle)
        if (R) {
          const T = R(function () {
            let W
            return (W = P.$handle.api).getData.apply(W, arguments)
          }, this.$handle.api)
          return Xe(T, _)
        }
      }
    },
    setData(x, P, _) {
      _ ? f(x, P) : (Mt(this.vm.setupState.top.setupState.fc.tmpData, x, P), this.bus.$emit(`$loadData.${x}`))
    },
    getLoadData(x, P) {
      let _ = null
      if (x != null) {
        let O = x.split('.'); const S = O.shift()
        if (_ = Xe(this.vm.setupState.top.setupState.fc.tmpData, x), _ != null)
          return _
        if (S === '$topForm') {
          _ = this.$handle.api.top.formData(!0)
        } else if (S === '$scopeForm') {
          _ = this.$handle.api.scope.formData(!0)
        } else if (S === '$form') {
          _ = this.$handle.api.formData(!0)
        } else if (S === '$options') {
          _ = this.options.value
        } else if (S === '$globalData') {
          _ = this.globalDataDriver(O.join('.')), O = []
        } else if (S === '$var') {
          _ = this.globalVarDriver(O.join('.')), O = []
        } else if (S === '$locale') {
          _ = this.getLocale(), O = []
        } else if (S === '$t') {
          _ = this.globalLanguageDriver(O.join('.')), O = []
        } else {
          if (S === '$preview')
            return this.$handle.preview
          _ = y(x), O = []
        }
        _ && O.length && (_ = Xe(_, O))
      }
      return _ == null || _ === '' ? P : _
    },
    watchLoadData(x, P) {
      const _ = this; let O = {}; const S = function (K) {
        _.get || (_.get = R), fe(() => {
          x(R, K)
        }), _.get === R && (_.get = void 0)
      }; var R = function (K, ae) {
        let le
        if (pe(K) === 'object' && (le = K.getValue, K = K.id), O[K])
          return O[K].val
        const ce = At(() => {
          return le ? le() : _.getLoadData(K, ae)
        }); const ge = K.split('.'); const ke = ge.shift(); const we = ge.shift() || ''; const he = Pt(() => {
          const te = le ? le() : _.getLoadData(K, ae)
          if (O[K])
            ((typeof te === 'function' || L.Object(te) || Array.isArray(te)) && te === O[K].val || JSON.stringify(te) !== JSON.stringify(O[K].val)) && (O[K].val = te, S(!0))
          else
            return
        }, P || 0); const ve = He(ce, (te) => {
          he()
        })
        return _.bus.$on(`$loadData.${ke}`, he), we && _.bus.$on(`$loadData.${ke}.${we}`, he), O[K] = {
          fn() {
            _.bus.$off(`$loadData.${ke}`, he), we && _.bus.$off(`$loadData.${ke}.${we}`, he), ve()
          },
          val: ce.value,
        }, ce.value
      }
      S(!1)
      const T = function () {
        Object.keys(O).forEach((K) => {
          return O[K].fn()
        }), O = {}
      }
      return this.unwatch.push(T), T
    },
    isSub() {
      return this.vm.setupState.parent && this.vm.props.extendOption
    },
    initOptions() {
      this.options.value = {}
      let x = X({
        formData: {},
        submitBtn: {},
        resetBtn: {},
        globalEvent: {},
        globalData: {},
      }, mt(p)); const P = this.isSub()
      P && (x = this.mergeOptions(x, this.vm.setupState.parent.setupState.fc.options.value || {}, !0)), x = this.mergeOptions(x, this.vm.props.option)
      const _ = this.api()
      this.targetFormDriver('initOptions', x, {
        api: _,
        isSubForm: P,
      }), this.updateOptions(x)
    },
    mergeOptions(x, P, _) {
      return P = X({}, P || {}), _ && ['page', 'onSubmit', 'onReset', 'onCreated', 'onChange', 'onMounted', 'mounted', 'onReload', 'reload', 'formData', 'el', 'globalClass', 'style'].forEach((O) => {
        delete P[O]
      }), P.global && (x.global = Ol(x.global, P.global), delete P.global), this.$handle.$manager.mergeOptions([P], x), x
    },
    updateOptions(x) {
      this.options.value = this.mergeOptions(this.options.value, x), this.$handle.$manager.updateOptions(this.options.value), this.bus.$emit('$loadData.$options')
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
      const x = this
      if (this.name) {
        if (this.inFor) {
          const P = at[this.name].indexOf(this)
          at[this.name].splice(P, 1)
        } else {
          delete at[this.name]
        }
      }
      s.forEach((_) => {
        x.bus.$off(_.name, _.callback)
      }), this.tmpData = {}, this.unwatch.forEach((_) => {
        return _()
      }), this.unwatch = [], this.$handle.reloadRule([])
    },
    updated() {
      const x = this
      this.$handle.bindNextTick(() => {
        return x.bus.$emit('next-tick', x.$handle.api)
      })
    },
  })
  function q(C) {
    re(C, {
      version: t.version,
      ui: t.ui,
      isMobile: h,
      extendApi: g,
      getData: y,
      setDataDriver: v,
      setData: f,
      removeData: k,
      refreshData: d,
      maker: u,
      component: ee,
      directive: F,
      setModelField: D,
      setFormula: E,
      setDriver: $,
      register: G,
      $vnode: ne,
      parser: Z,
      use: ie,
      factory: nt,
      componentAlias: Q,
      copyRule: Ko,
      copyRules: Jo,
      mergeRule: Ot,
      fetch: na,
      $form: Y,
      parseFn: bt,
      parseJson: Uo,
      toJson: bn,
      useApp: V,
      getApi: M,
      on: j,
    })
  }
  function z(C) {
    re(C, {
      create: Ee,
      install(P, _) {
        p = X(X({}, p), _ || {})
        const O = `_installedFormCreate_${t.ui}`
        if (P[O] !== !0) {
          P[O] = !0
          const S = function (W) {
            const K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
            return Ee(W, K)
          }
          q(S), P.config.globalProperties.$formCreate = S
          const R = Y()
          P.component(R.name, R), a.forEach((T) => {
            fe(() => {
              return T(C, P)
            })
          })
        }
      },
    })
  }
  if (q(A), z(A), v('$cookie', cu), v('$localStorage', fu), v('$sessionStorage', du), w.use({
    fragment: 'fcFragment',
  }), t.install && Ee.use(t), V((C, x) => {
    x.mixin({
      props: ['formCreateInject'],
    })
  }), Z(au), t.inherit) {
    const N = t.inherit
    N.components && re(e, N.components), N.parsers && re(n, N.parsers), N.directives && re(r, N.directives), N.modelFields && re(i, N.modelFields), N.providers && re(c, N.providers), N.useApps && re(a, N.useApps), N.maker && re(u, N.maker), N.loadData && re(m, N.loadData), N.formulas && re(b, N.formulas)
  }
  const U = Y()
  return Rn(U, A), Object.defineProperties(U, {
    fetch: {
      get() {
        return A.fetch
      },
      set(x) {
        A.fetch = x
      },
    },
  }), U.util = A, U
}
const Zi = {
  date: 'YYYY-MM-DD',
  month: 'YYYY-MM',
  week: 'YYYY-wo',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  timerange: 'HH:mm:ss',
  daterange: 'YYYY-MM-DD',
  monthrange: 'YYYY-MM',
  datetimerange: 'YYYY-MM-DD HH:mm:ss',
  year: 'YYYY',
}; const Qi = 'datePicker'; const vu = {
  name: Qi,
  maker: (function () {
    return ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimeRange', 'dateRange', 'monthRange'].reduce((t, e) => {
      return t[e] = Ge(Qi, {
        type: e.toLowerCase(),
      }), t
    }, {})
  }()),
  mergeProp(e) {
    const n = e.prop.props
    n.valueFormat || (n.valueFormat = Zi[n.type] || Zi.date)
  },
}; const hr = 'hidden'; const _u = {
  name: hr,
  maker: Ie({}, hr, (t, e) => {
    return Ge(hr)('', t, e)
  }),
  render() {
    return []
  },
}; const pr = 'input'; const yu = {
  name: pr,
  maker: (function () {
    const t = ['password', 'url', 'email', 'text', 'textarea'].reduce((e, n) => {
      return e[n] = Ge(pr, {
        type: n,
      }), e
    }, {})
    return t.idate = Ge(pr, {
      type: 'date',
    }), t
  }()),
  mergeProp(e) {
    const n = e.prop.props
    n && n.autosize && n.autosize.minRows && (n.rows = n.autosize.minRows || 2)
  },
}; const bu = 'textarea'; const wu = {
  name: bu,
  mergeProp(e) {
    const n = e.prop.props
    n.type = 'textarea', n && n.autosize && n.autosize.minRows && (n.rows = n.autosize.minRows || 2)
  },
}; const eo = 'slider'; const $u = {
  name: eo,
  maker: {
    sliderRange: Ge(eo, {
      range: !0,
    }),
  },
  toFormValue(e, n) {
    const r = Array.isArray(e); const i = n.prop.props; const o = i.min || 0; let a
    return i.range === !0 ? a = r ? e : [o, Number.parseFloat(e) || o] : a = r ? Number.parseFloat(e[0]) || o : Number.parseFloat(e), a
  },
}; const mr = 'timePicker'; const Su = {
  name: mr,
  maker: {
    time: Ge(mr, (t) => {
      return t.props.isRange = !1
    }),
    timeRange: Ge(mr, (t) => {
      return t.props.isRange = !0
    }),
  },
  mergeProp(e) {
    const n = e.prop.props
    n.valueFormat || (n.valueFormat = 'HH:mm:ss')
  },
}; const Ou = {
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
}; const xu = 'select'; const Eu = {
  name: xu,
  toFormValue(e, n) {
    return n.prop.props.multiple && !Array.isArray(e) ? et(e) : e
  },
}; const ku = [vu, _u, yu, wu, $u, Su, Ou, Eu]; const Te = 'el'; const Cu = {
  button: `${Te}-button`,
  icon: `${Te}-icon`,
  slider: `${Te}-slider`,
  rate: `${Te}-rate`,
  upload: 'fc-upload',
  cascader: `${Te}-cascader`,
  popover: `${Te}-popover`,
  tooltip: `${Te}-tooltip`,
  colorPicker: `${Te}-colorPicker`,
  timePicker: `${Te}-time-picker`,
  timeSelect: `${Te}-time-select`,
  datePicker: `${Te}-date-picker`,
  switch: `${Te}-switch`,
  select: 'fc-select',
  checkbox: 'fc-checkbox',
  radio: 'fc-radio',
  inputNumber: `${Te}-input-number`,
  number: `${Te}-input-number`,
  input: `${Te}-input`,
  textarea: `${Te}-input`,
  formItem: `${Te}-form-item`,
  form: `${Te}-form`,
  frame: 'fc-frame',
  col: `${Te}-col`,
  row: `${Te}-row`,
  tree: 'fc-tree',
  autoComplete: `${Te}-autocomplete`,
  auto: `${Te}-autocomplete`,
  group: 'fc-group',
  array: 'fc-group',
  object: 'fc-sub-form',
  subForm: 'fc-sub-form',
}
function Au() {
  return {
    form: {
      inline: !1,
      labelPosition: 'right',
      labelWidth: '125px',
      disabled: !1,
      size: void 0,
    },
    row: {
      show: !0,
      gutter: 0,
    },
    submitBtn: {
      type: 'primary',
      loading: !1,
      disabled: !1,
      innerText: '',
      show: !0,
      col: void 0,
      click: void 0,
    },
    resetBtn: {
      type: 'default',
      loading: !1,
      disabled: !1,
      innerText: '',
      show: !1,
      col: void 0,
      click: void 0,
    },
  }
}
function Ru(t) {
  return t.type === 'tooltip'
}
function to(t, e) {
  if (!!Pe(t, e) && L.String(t[e])) {
    let n
    t[e] = (n = {}, Ie(n, e, t[e]), Ie(n, 'show', !0), n)
  }
}
function $t(t) {
  return t === !1
}
function Du(t, e) {
  Pe(t, e) && !L.Object(t[e]) && (t[e] = {
    show: !!t[e],
  })
}
function gr(t) {
  const e = X({}, t)
  return delete e.children, e
}
const Pu = {
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
      o
        ? o.validateField(e, (a, s) => {
            s ? i(s) : r(a)
          })
        : r()
    })
  },
  clearValidateState(e) {
    const n = this.vm.refs[e.wrapRef]
    n && n.clearValidate()
  },
  fieldChange(e, n, r, i) {
    if (!i) {
      let o, a;
      (o = this.vm.refs[e.wrapRef]) === null || o === void 0 || (a = o.validate('change')) === null || a === void 0 || a.catch(() => {
      })
    }
  },
  tidyOptions(e) {
    return ['submitBtn', 'resetBtn', 'row', 'info', 'wrap', 'col', 'title'].forEach((n) => {
      Du(e, n)
    }), e
  },
  tidyRule(e) {
    const n = e.prop
    return to(n, 'title'), to(n, 'info'), n
  },
  mergeProp(e) {
    const n = this; const r = {
      info: {
        trigger: 'hover',
        placement: 'top-start',
        icon: !0,
      },
      title: {},
      col: {
        span: 24,
      },
      wrap: {},
    };
    ['info', 'wrap', 'col', 'title'].forEach((i) => {
      e.prop[i] = Rt([n.options[i] || {}, e.prop[i] || {}], r[i])
    })
  },
  getDefaultOptions() {
    return Au()
  },
  update() {
    const e = this.options.form
    this.rule = {
      props: X({}, e),
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
    const e = this.key; const n = this.ref; const r = this.$handle; const i = this.options.form
    re(this.rule, {
      key: e,
      ref: n,
      class: [i.className, i.class, 'form-create', this.$handle.preview ? 'is-preview' : ''],
    }), re(this.rule.props, {
      model: r.formData,
    })
  },
  render(e) {
    const n = this
    return e.slotLen() && !this.$handle.preview && e.setSlot(void 0, () => {
      return n.makeFormBtn()
    }), this.$r(this.rule, $t(this.options.row.show) ? e.getSlots() : [this.makeRow(e)])
  },
  makeWrap(e, n) {
    const r = this; const i = e.prop; const o = ''.concat(this.key).concat(e.key); const a = i.col; const s = this.isTitle(i) && i.wrap.title !== !1; const l = !a.labelWidth && !s ? 0 : a.labelWidth; const c = this.rule.props; const u = c.inline; const p = c.col; const h = i.wrap.class
    delete i.wrap.class, delete i.wrap.title
    const m = $t(i.wrap.show)
      ? n
      : this.$r(Rt([i.wrap, {
          props: X(X({
            labelWidth: l === void 0 ? l : Bo(l),
            label: s ? i.title.title : void 0,
          }, gr(i.wrap || {})), {}, {
            prop: e.id,
            rules: e.injectValidate(),
          }),
          class: this.$render.mergeClass(h || i.className, 'fc-form-item'),
          key: ''.concat(o, 'fi'),
          ref: e.wrapRef,
          type: 'formItem',
        }]), X({
          default() {
            return n
          },
        }, s
          ? {
              label() {
                return r.makeInfo(i, o, e)
              },
            }
          : {}))
    return u === !0 || $t(p) || $t(a.show) ? m : this.makeCol(i, o, [m])
  },
  isTitle(e) {
    if (this.options.form.title === !1)
      return !1
    const n = e.title
    return !(!n.title && !n.native || $t(n.show))
  },
  makeInfo(e, n, r) {
    let i; let o; let a; let s; const l = this; const c = X({}, e.title); const u = X({}, e.info); const p = Ru(u); const h = this.options.form; const m = this.getSlot('title'); const w = [m
      ? m({
          title: (i = r.refRule) === null || i === void 0 || (o = i.__$title) === null || o === void 0 ? void 0 : o.value,
          rule: r.rule,
          options: this.options,
        })
      : ((a = r.refRule) === null || a === void 0 || (s = a.__$title) === null || s === void 0 ? void 0 : s.value) + (h.labelSuffix || h['label-suffix'] || '')]
    if (!$t(u.show) && (u.info || u.native) && !$t(u.icon)) {
      const b = {
        type: u.type || 'popover',
        props: gr(u),
        key: ''.concat(n, 'pop'),
      }
      delete b.props.icon, delete b.props.show, delete b.props.info, delete b.props.align, delete b.props.native
      const A = 'content'
      if (u.info && !Pe(b.props, A)) {
        let M, V
        b.props[A] = (M = r.refRule) === null || M === void 0 || (V = M.__$info) === null || V === void 0 ? void 0 : V.value
      }
      w[u.align !== 'left' ? 'unshift' : 'push'](this.$r(Rt([u, b]), Ie({}, c.slot || (p ? 'default' : 'reference'), () => {
        return l.$r({
          type: 'ElIcon',
          style: 'top:2px',
          key: ''.concat(n, 'i'),
        }, {
          default() {
            return l.$r({
              type: u.icon === !0 ? 'icon-warning' : u.icon,
            })
          },
        }, !0)
      })))
    }
    const F = Rt([c, {
      props: gr(c),
      key: ''.concat(n, 'tit'),
      class: 'fc-form-title',
      type: c.type || 'span',
      on: {
        click() {
          for (var Q = arguments.length, Z = new Array(Q), ee = 0; ee < Q; ee++)
            Z[ee] = arguments[ee]
          l.$handle.targetHook(r, 'titleClick', {
            args: Z,
          })
        },
      },
    }])
    return delete F.props.show, delete F.props.title, delete F.props.native, this.$r(F, w)
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
    if ($t(this.options.submitBtn.show) || e.push(this.makeSubmitBtn()), $t(this.options.resetBtn.show) || e.push(this.makeResetBtn()), !!e.length) {
      const n = this.$r({
        type: 'formItem',
        class: 'fc-form-item',
        key: ''.concat(this.key, 'fb'),
      }, e)
      return this.rule.props.inline === !0
        ? n
        : this.$r({
            type: 'col',
            class: 'fc-form-col fc-form-footer',
            props: {
              span: 24,
            },
            key: ''.concat(this.key, 'fc'),
          }, [n])
    }
  },
  makeResetBtn() {
    const e = this; const n = X({}, this.options.resetBtn); const r = n.innerText || this.$handle.api.t('reset') || '\u91CD\u7F6E'
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
    const e = this; const n = X({}, this.options.submitBtn); const r = n.innerText || this.$handle.api.t('submit') || '\u63D0\u4EA4'
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
}; const Lt = {}
Tu(Lt)
Mu(Lt)
Iu(Lt)
Fu(Lt)
ju(Lt)
function Tu(t) {
  ['group', 'tree', 'switch', 'upload', 'autoComplete', 'checkbox', 'cascader', 'colorPicker', 'datePicker', 'frame', 'inputNumber', 'radio', 'rate'].forEach((e) => {
    t[e] = Ge(e)
  }), t.auto = t.autoComplete, t.number = t.inputNumber, t.color = t.colorPicker
}
function Mu(t) {
  const e = 'select'; const n = 'multiple'
  t.selectMultiple = Ge(e, Ie({}, n, !0)), t.selectOne = Ge(e, Ie({}, n, !1))
}
function Iu(t) {
  const e = 'tree'; const n = {
    treeSelected: 'selected',
    treeChecked: 'checked',
  }
  Object.keys(n).reduce((r, i) => {
    return r[i] = Ge(e, {
      type: n[i],
    }), r
  }, t)
}
function Fu(t) {
  const e = 'upload'; const n = {
    image: ['image', 0],
    file: ['file', 0],
    uploadFileOne: ['file', 1],
    uploadImageOne: ['image', 1],
  }
  Object.keys(n).reduce((r, i) => {
    return r[i] = Ge(e, (o) => {
      return o.props({
        uploadType: n[i][0],
        maxLength: n[i][1],
      })
    }), r
  }, t), t.uploadImage = t.image, t.uploadFile = t.file
}
function ju(t) {
  const e = {
    frameInputs: ['input', 0],
    frameFiles: ['file', 0],
    frameImages: ['image', 0],
    frameInputOne: ['input', 1],
    frameFileOne: ['file', 1],
    frameImageOne: ['image', 1],
  }
  return Object.keys(e).reduce((n, r) => {
    return n[r] = Ge('frame', (i) => {
      return i.props({
        type: e[r][0],
        maxLength: e[r][1],
      })
    }), n
  }, t), t.frameInput = t.frameInputs, t.frameFile = t.frameFiles, t.frameImage = t.frameImages, t
}
const Vu = '.form-create .form-create .el-form-item{margin-bottom:22px}.form-create{width:100%}.form-create .fc-none,.form-create.is-preview .el-form-item.is-required>.el-form-item__label-wrap>.el-form-item__label:before,.form-create.is-preview .el-form-item.is-required>.el-form-item__label:before,.form-create.is-preview .fc-clock{display:none!important}.fc-wrap-right>.el-form-item__label{display:flex;justify-content:flex-end}.fc-wrap-left>.el-form-item__label{display:flex;justify-content:flex-start}.fc-wrap-top.el-form-item{display:block}.fc-wrap-top.el-form-item>.el-form-item__label{display:block;height:auto;line-height:22px;margin-bottom:8px;text-align:left}.el-form--large .fc-wrap-top.el-form-item>.el-form-item__label{line-height:22px;margin-bottom:12px}.el-form--default .fc-wrap-top.el-form-item>.el-form-item__label{line-height:22px;margin-bottom:8px}.el-form--small .fc-wrap-top.el-form-item>.el-form-item__label{line-height:20px;margin-bottom:4px}.fc-form-footer{margin-top:12px}'
Kn(Vu)
function no(t, e) {
  return L.Boolean(t)
    ? t = {
      show: t,
    }
    : !L.Undef(t) && !L.Object(t) && (t = {
        show: e,
      }), t
}
function Lu(t, e) {
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
        a.filter((l) => {
          return !l.isScope
        }).forEach((l) => {
          s.push(l.validate())
        }), Promise.all(s).then(() => {
          i(!0), r && r(!0)
        }).catch((l) => {
          o(l), r && r(l), e.vm.emit('validate-fail', l, {
            api: t,
          }), e.emitEvent('validate-fail', l, {
            api: t,
          })
        })
      })
    },
    validateField(r, i) {
      return new Promise((o, a) => {
        const s = e.getFieldCtx(r)
        if (s) {
          const l = e.subForm[s.id]; const c = [e.$manager.validateField(s.id)]
          et(l).filter((u) => {
            return !u.isScope
          }).forEach((u) => {
            c.push(u.validate())
          }), Promise.all(c).then(() => {
            o(null), i && i(null)
          }).catch((u) => {
            a(u), i && i(u), e.vm.emit('validate-field-fail', u, {
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
      const r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; const i = no(e.options.submitBtn, !0)
      re(i, r), e.options.submitBtn = i, t.refreshOptions()
    },
    resetBtnProps() {
      const r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; const i = no(e.options.resetBtn, !1)
      re(i, r), e.options.resetBtn = i, t.refreshOptions()
    },
    submit(r, i) {
      return new Promise((o, a) => {
        const s = e.options.validateOnSubmit === !1 ? Promise.resolve() : t.validate()
        s.then(() => {
          const l = t.formData()
          e.beforeSubmit(l).then(() => {
            L.Function(r) && fe(() => {
              return r(l, t)
            }), L.Function(e.options.onSubmit) && fe(() => {
              return e.options.onSubmit(l, t)
            }), e.vm.emit('submit', l, t), o(l)
          }).catch((c) => {
          })
        }).catch(function () {
          for (var l = arguments.length, c = new Array(l), u = 0; u < l; u++)
            c[u] = arguments[u]
          L.Function(i) && fe(() => {
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
    const i = Bu(e.getValue())
    if (i.required === !1) {
      e.clearProp(), r.clearValidateState([n.field])
    } else {
      let o; var a = X({
        required: !0,
        validator(u, p, h) {
          L.empty(p) ? h(a.message) : h()
        },
      }, i); const s = (o = n.__fc__.refRule.__$title) === null || o === void 0 ? void 0 : o.value
      if (!a.message) {
        a.message = r.t('required', {
          title: s,
        }) || s + (r.getLocale() === 'en' ? ' is required' : '\u4E0D\u80FD\u4E3A\u7A7A')
      } else {
        const l = a.message.match(/^\{\{\s*\$t\.(.+)\s*\}\}$/)
        l && (a.message = r.t(l[1], {
          title: s,
        }))
      }
      e.getProp().validate = [a]
    }
    r.sync(n)
  },
  watch() {
    Tr.load.apply(Tr, arguments)
  },
}
function Bu(t) {
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
function Nu(t) {
  t.componentAlias(Cu), $l.forEach((e) => {
    t.component(e.name, e)
  }), t.register(Tr), ku.forEach((e) => {
    t.parser(e)
  }), Object.keys(Lt).forEach((e) => {
    t.maker[e] = Lt[e]
  }), typeof window < 'u' && window.ElementPlus && t.useApp((e, n) => {
    n.use(window.ElementPlus)
  })
}
function zu() {
  return oa({
    ui: 'element-ui',
    version: '3.2.33',
    manager: Pu,
    extendApi: Lu,
    install: Nu,
    attrs: {
      normal: ['col', 'wrap'],
      array: ['className'],
      key: ['title', 'info'],
    },
  })
}
const _e = zu()
typeof window < 'u' && (window.formCreate = _e)
_e.maker
function Zt(t, e, n) {
  t[e] = n
}
const ot = {
  type(t, e) {
    return Object.prototype.toString.call(t) === `[object ${e}]`
  },
  Undef(t) {
    return t == null
  },
  Element(t) {
    return typeof t == 'object' && t !== null && t.nodeType === 1 && !ot.Object(t)
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
  ot[t] = function (e) {
    return ot.type(e, t)
  }
})
function Uu(t, e) {
  return {}.hasOwnProperty.call(t, e)
}
function aa(t, e = {}, n) {
  let r = !1
  for (const i in e) {
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      let o = e[i]
      if ((r = Array.isArray(o)) || ot.Object(o)) {
        const a = t[i] === void 0
        if (r) {
          r = !1, a && Zt(t, i, [])
        } else if (o._clone && n !== void 0) {
          if (n) {
            o = o.getRule(), a && Zt(t, i, {})
          } else {
            Zt(t, i, o._clone())
            continue
          }
        } else {
          a && Zt(t, i, {})
        }
        t[i] = aa(t[i], o, n)
      } else {
        Zt(t, i, o), ot.Undef(o) || (ot.Undef(o.__json) || (t[i].__json = o.__json), ot.Undef(o.__origin) || (t[i].__origin = o.__origin))
      }
    }
  }
  return n !== void 0 && Array.isArray(t) ? t.filter(i => !i || !i.__ctrl) : t
}
function gt(t) {
  return aa({}, { value: t }).value
}
function qu(t, e, n) {
  return `[form-create ${t}]: ${e}${n
    ? `

rule: ${JSON.stringify(n.getRule ? n.getRule() : n)}`
    : ''}`
}
function Hu(t, e) {
  console.error(qu('err', t, e))
}
const ro = '[[FORM-CREATE-PREFIX-'; const io = '-FORM-CREATE-SUFFIX]]'
function vr(t) {
  return new Function(`return ${t}`)()
}
function Qt(t, e) {
  if (t && ot.String(t) && t.length > 4) {
    let n = t.trim(); let r = !1
    try {
      if (n.indexOf(io) > 0 && n.indexOf(ro) === 0) {
        n = n.replace(io, '').replace(ro, ''), r = !0
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
          return n = vr(`function($inject){
${n.substring(5)}
}`), n.__json = t, n.__inject = !0, n
        }
        (!e && n.indexOf('function ') === 0 && n !== 'function ' || !e && n.indexOf('function(') === 0 && n !== 'function(') && (r = !0)
      }
      if (!r)
        return t
      let i
      try {
        i = vr(n)
      } catch {
        i = vr(`function ${n}`)
      }
      return i.__json = t, i
    } catch (i) {
      Hu(`\u89E3\u6790\u5931\u8D25:${n}

err: ${i}`)
      return
    }
  }
  return t
}
const Gu = ye({
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
    return Co(
      We(
        'div',
        {
          class: '_fc-data-table',
        },
        [
          We(
            J('el-table'),
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
                We(J('el-table-column'), {
                  type: 'selection',
                  fixed: (r = (n = this.column) == null ? void 0 : n[0]) == null ? void 0 : r.fixed,
                  width: '50px',
                }),
              )
              const e = this.makeButtonCol()
              return e && t.push(e), this.index && t.unshift(
                We(J('el-table-column'), {
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
      [[Ao('loading'), this.loading]],
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
          const a = Qt(t.click)
          try {
            a && a(e, this.formCreateInject.api)
          } catch (s) {
            console.error(s)
          }
          this.$emit('handleClick', { name: t.name, key: t.key, scope: e, column: e.row })
        },
      }; const i = Qt(t.handle)
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
                const s = this.page.totalField; const l = this.page.dataField; const c = l ? this.deepGet(o, l, []) : o
                let u = s ? this.deepGet(o, s) : 0
                u || (u = c.length || 0), e({ list: c, total: u })
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
        return We(J('el-pagination'), {
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
        const r = Qt(e.hide)
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
          J('el-table-column'),
          {
            label: this.button.label || this.formCreateInject.t('operation') || '\u64CD\u4F5C',
            fixed: this.button.fixed === void 0 ? 'right' : this.button.fixed,
            width: this.button.width || '100px',
          },
          {
            default: t => this.button.column.filter(e => this.checkBtnShow(t, e)).map(e => We(J('el-button'), this.btnProps(e, t), () => [e.name])),
          },
        )
      }
    },
    makeColumn(t) {
      return We(
        J('el-table-column'),
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
        ? t.render(e, We, J, this.formCreateInject.api)
        : t.format === 'tag'
          ? We(J('el-tag'), { disableTransitions: !0 }, () => [this.deepGet(e.row, t.prop, '')])
          : t.format === 'image'
            ? We(
                'div',
                {
                  class: '_fc-data-table-img-list',
                },
                (() => {
                  let n = this.deepGet(e.row, t.prop, '')
                  return n = (Array.isArray(n) ? n : [n]).filter(r => !!r), n.map((r, i) => We(J('el-image'), {
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
function Re(t, e) {
  const n = t.__vccOpts || t
  for (const [r, i] of e)
    n[r] = i
  return n
} const Yu = {
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
          for (let l = 0; l < s; l++) {
            const c = t[r.top + l]
            if (c) {
              for (let u = 0; u < a; u++)
                !u && !l || (c[r.left + u] && (c[r.left + u].show = !1), o.slot.push(`${r.top + l}:${r.left + u}`))
            }
          }
        }
      })
      const n = r => !!(!r || r.layout || !r.show)
      t.forEach((r, i) => {
        r.forEach((o, a) => {
          let s = !1; let l = !1
          if (o.layout) {
            const c = o.layout.col || 1; const u = o.layout.row || 1
            for (let p = 0; p < c; p++) {
              if (!t[i + u] || n(t[i + u][a + p])) {
                l = !0
                continue
              }
            }
            for (let p = 0; p < u; p++) {
              if (!t[i + p] || n(t[i + p][a + c])) {
                s = !0
                continue
              }
            }
          } else {
            s = n(r[a + 1]), l = t[i + 1] ? n(t[i + 1][a]) : !0
          }
          o.right = s, o.bottom = l
        })
      }), this.lattice = t
    },
  },
}
function Wu(t, e, n, r, i, o) {
  const a = J('el-col')
  return H(), xe(a, { span: 24 }, {
    default: me(() => [
      Oe('div', {
        class: Nt(['_fc-table', { 'is-mini': n.mini }]),
      }, [
        Oe('table', {
          border: '1',
          cellspacing: '0',
          cellpadding: '0',
          style: Ro(o.tableColor),
        }, [
          (H(!0), oe(ut, null, Dt(n.rule.row, (s, l) => (H(), oe('tr', { key: l }, [
            (H(!0), oe(ut, null, Dt(n.rule.col, (c, u) => (H(), oe(ut, {
              key: `${l}${u}`,
            }, [
              i.lattice[l][u].show
                ? (H(), oe('td', Be({
                    key: 0,
                    ref_for: !0,
                  }, i.lattice[l][u] ? { colspan: i.lattice[l][u].colspan, rowspan: i.lattice[l][u].rowspan } : {}, {
                    valign: 'top',
                    class: i.tdClass && i.tdClass[`${l}:${u}`] || '',
                    style: [o.tableColor, i.tdStyle && i.tdStyle[`${l}:${u}`] || {}],
                  }), [
                    en(t.$slots, `${l}:${u}`),
                    (H(!0), oe(ut, null, Dt(i.lattice[l][u].slot, p => en(t.$slots, `${p}`)), 256)),
                  ], 16))
                : Je('', !0),
            ], 64))), 128)),
          ]))), 128)),
        ], 4),
      ], 2),
    ]),
    _: 3,
  })
}
const Xu = /* @__PURE__ */ Re(Yu, [['render', Wu]]); const Ku = ye({
  name: 'FcValue',
  props: ['modelValue'],
  watch: {
    modelValue(t) {
      this.$emit('change', t)
    },
  },
}); const Ju = { class: '_fc-value' }
function Zu(t, e, n, r, i, o) {
  return H(), oe('div', Ju, ze(t.modelValue), 1)
}
const Qu = /* @__PURE__ */ Re(Ku, [['render', Zu]]); const ec = ye({
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
    return B(ut, {}, t ? [t(this.slotArg)] : [])
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
}); const tc = ye({
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
      fcSubForm: ji(this.formCreateInject.form.component('fcSubForm')),
      fcGroup: ji(this.formCreateInject.form.component('fcGroup')),
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
        ? B(this.fcSubForm, {
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
          ? B(this.fcGroup, {
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
          : B(
              ut,
              {
                key: this.uni,
              },
              [(e = (t = this.$slots) == null ? void 0 : t.default) == null ? void 0 : e.call(t)],
            )
    }
  },
  methods: {
    loadRule() {
      let t = gt(this.rule)
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
function sa(t) {
  const e = []
  return t.forEach((n) => {
    n.field && e.push(n.field), n.children && e.push(...sa(n.children))
  }), e
} const nc = ye({
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
      default: () => Ne({
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
      Form: Me(this.formCreateInject.form.$form()),
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
        const n = sa(this.cacheRule[this.active].children)
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
            this.$emit('validateFail', this.subApi)
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
}); const rc = { class: '_fc-step-form' }
function ic(t, e, n, r, i, o) {
  const a = J('el-step'); const s = J('el-steps'); const l = J('el-button'); const c = J('el-col'); const u = J('el-row')
  return H(), oe('div', rc, [
    B(s, Be({ active: t.active }, t.stepsProps), {
      default: me(() => [
        (H(!0), oe(ut, null, Dt(t.steps, p => (H(), xe(a, Be({ ref_for: !0 }, p.props), null, 16))), 256)),
      ]),
      _: 1,
    }, 16, ['active']),
    (H(), xe(zt(t.Form), {
      'option': t.options,
      'rule': t.cacheRule,
      'extendOption': !0,
      'modelValue': t.modelValue,
      'onUpdate:api': t.addSubApi,
      'onEmitEvent': t.$emit,
      'onUpdate:modelValue': t.formData,
    }, null, 40, ['option', 'rule', 'modelValue', 'onUpdate:api', 'onEmitEvent', 'onUpdate:modelValue'])),
    B(u, null, {
      default: me(() => [
        B(c, {
          span: 24,
          style: { 'display': 'flex', 'justify-content': 'flex-end', 'margin-top': '15px' },
        }, {
          default: me(() => [
            t.active > 0
              ? (H(), xe(l, {
                  key: 0,
                  onClick: t.onPrev,
                }, {
                  default: me(() => [
                    Le(ze(t.formCreateInject.t('prevStep') || '\u4E0A\u4E00\u6B65'), 1),
                  ]),
                  _: 1,
                }, 8, ['onClick']))
              : Je('', !0),
            t.active < t.cacheRule.length - 1
              ? (H(), xe(l, {
                  key: 1,
                  type: 'primary',
                  onClick: t.onNext,
                }, {
                  default: me(() => [
                    Le(ze(t.formCreateInject.t('nextStep') || '\u4E0B\u4E00\u6B65'), 1),
                  ]),
                  _: 1,
                }, 8, ['onClick']))
              : Je('', !0),
            t.submitBtn !== !1 && t.active === t.cacheRule.length - 1
              ? (H(), xe(l, {
                  key: 2,
                  class: 'fc-clock',
                  type: 'primary',
                  onClick: t.submit,
                }, {
                  default: me(() => [
                    Le(ze(t.formCreateInject.t('submit') || '\u63D0\u4EA4'), 1),
                  ]),
                  _: 1,
                }, 8, ['onClick']))
              : Je('', !0),
          ]),
          _: 1,
        }),
      ]),
      _: 1,
    }),
  ])
}
const oc = /* @__PURE__ */ Re(nc, [['render', ic]])
const ac = ye({
  name: 'fcInlineForm',
}); const sc = { class: '_fc-line-form' }
function lc(t, e, n, r, i, o) {
  return H(), oe('div', sc, [
    en(t.$slots, 'default'),
  ])
}
const uc = /* @__PURE__ */ Re(ac, [['render', lc]])
const cc = {
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
      default: () => Ne({
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
      Form: Me(this.formCreateInject.form.$form()),
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
                  columns: gt(this.nested),
                  options: gt(this.options),
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
function fc(t, e, n, r, i, o) {
  const a = J('el-button')
  return H(), oe('div', {
    class: Nt(['_fc-nested-table-form', { '_fc-disabled': n.disabled }]),
  }, [
    (H(), xe(zt(i.Form), {
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
      ? (H(), xe(a, {
          key: 0,
          link: '',
          type: 'primary',
          class: 'fc-clock',
          onClick: e[1] || (e[1] = s => o.addRaw(!0)),
        }, {
          default: me(() => [
            e[2] || (e[2] = Oe('i', {
              class: 'fc-icon icon-add-circle',
              style: { 'font-weight': '700' },
            }, null, -1)),
            Le(` ${ze(n.formCreateInject.t('add') || '\u6DFB\u52A0')}`, 1),
          ]),
          _: 1,
        }))
      : Je('', !0),
  ], 2)
}
const dc = /* @__PURE__ */ Re(cc, [['render', fc]])
const hc = {
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
      default: () => Ne({
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
      Form: Me(this.formCreateInject.form.$form()),
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
        return !Uu(i, this.subField) && this.modelValue[r] && (i[this.subField] = this.modelValue[r][this.subField]), i[this.subField] == null && delete i[this.subField], i
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
                      columns: gt(this.columns),
                      options: gt(this.options),
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
function pc(t, e, n, r, i, o) {
  const a = J('el-button')
  return H(), oe('div', {
    class: Nt(['_fc-infinite-table-form', { '_fc-disabled': n.disabled }]),
  }, [
    (H(), xe(zt(i.Form), {
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
      ? (H(), xe(a, {
          key: 0,
          link: '',
          type: 'primary',
          class: 'fc-clock',
          onClick: e[1] || (e[1] = s => o.addRaw(!0)),
        }, {
          default: me(() => [
            e[2] || (e[2] = Oe('i', {
              class: 'fc-icon icon-add-circle',
              style: { 'font-weight': '700' },
            }, null, -1)),
            Le(` ${ze(n.formCreateInject.t('add') || '\u6DFB\u52A0')}`, 1),
          ]),
          _: 1,
        }))
      : Je('', !0),
  ], 2)
}
const mc = /* @__PURE__ */ Re(hc, [['render', pc]])
const gc = {
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
      default: () => Ne({
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
      Form: Me(this.formCreateInject.form.$form()),
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
function vc(t, e, n, r, i, o) {
  const a = J('el-button')
  return H(), oe('div', {
    class: Nt(['_fc-table-form', { '_fc-disabled': n.disabled, '_fc-undeletable': !n.deletable }]),
  }, [
    (H(), xe(zt(i.Form), {
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
      ? (H(), xe(a, {
          key: 0,
          link: '',
          type: 'primary',
          class: 'fc-clock',
          onClick: e[1] || (e[1] = s => o.addRaw(!0)),
        }, {
          default: me(() => [
            e[2] || (e[2] = Oe('i', {
              class: 'fc-icon icon-add-circle',
              style: { 'font-weight': '700' },
            }, null, -1)),
            Le(` ${ze(n.formCreateInject.t('add') || '\u6DFB\u52A0')}`, 1),
          ]),
          _: 1,
        }))
      : Je('', !0),
  ], 2)
}
const _c = /* @__PURE__ */ Re(gc, [['render', vc]]); const yc = Object.assign || function (t) {
  for (let e, n = 1; n < arguments.length; n++) {
    for (const r in e = arguments[n], e)
      Object.prototype.hasOwnProperty.call(e, r) && Zt(t, r, e[r])
  }
  return t
}
function Yr() {
  return yc.apply(this, arguments)
}
let bc = 0
function _t() {
  const t = 370 + ++bc
  return `F${Math.random().toString(36).substr(3, 3)}${Number(`${Date.now()}`).toString(36)}${t.toString(36)}c`
}
const wc = {
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
      default: () => Ne({
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
      Form: Me(this.formCreateInject.form.$form()),
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
      const t = gt(this.pageData)
      try {
        this.trs.forEach((i, o) => {
          Yr(t[o], this.fapi.getChildrenFormData(i))
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
      return gt(this.copy)
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
          const a = Qt(t.click)
          try {
            a && a(n, this.formCreateInject.api)
          } catch (s) {
            console.error(s)
          }
          this.$emit('handleClick', { name: t.name, key: t.key, _scope: n, column: n.row })
        },
      }
      try {
        const o = Qt(t.handle); const a = o && o(i, n, this.formCreateInject.api)
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
          : (n._renderId || (n._renderId = _t()), e.push({
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
            let a, s, l, c, u, p, h, m
            for (let w = 0; w < ((s = (a = this.rule[0]) == null ? void 0 : a.children[o]) == null ? void 0 : s.children.length); w++) {
              if (((c = (l = this.rule[0]) == null ? void 0 : l.children[o]) == null ? void 0 : c.children[w].name) === e._renderId) {
                const b = (p = (u = this.rule[0]) == null ? void 0 : u.children[o]) == null ? void 0 : p.children[w]
                return (m = (h = this.fapi.renderRule(b, void 0, !0)) == null ? void 0 : h.default) == null ? void 0 : m.call(h)
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
        const r = Qt(e.hide)
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
      e.tableRenderUni = _t(), t(e)
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
            default: r => this.button.column.filter(i => this.checkBtnShow(r, i)).map(i => We(J('el-button'), this.btnProps(i, r), () => [
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
}; const $c = { class: '_fc-tf-pro-handle' }
function Sc(t, e, n, r, i, o) {
  const a = J('el-button'); const s = J('el-pagination')
  return H(), oe('div', {
    class: Nt(['_fc-table-form-v2', { '_fc-disabled': n.disabled }]),
  }, [
    (H(), xe(zt(i.Form), {
      'option': n.options,
      'rule': i.rule,
      'extendOption': !0,
      'disabled': n.disabled,
      'onChange': o.formChange,
      'api': i.fapi,
      'onUpdate:api': e[0] || (e[0] = l => i.fapi = l),
      'onEmitEvent': t.$emit,
    }, null, 40, ['option', 'rule', 'disabled', 'onChange', 'api', 'onEmitEvent'])),
    Oe('div', $c, [
      Oe('div', null, [
        (!n.max || n.max > o.total) && n.addable !== !1 && n.disabled !== !0
          ? (H(), xe(a, {
              key: 0,
              link: '',
              type: 'primary',
              class: 'fc-clock',
              onClick: e[1] || (e[1] = l => o.addRaw(!0)),
            }, {
              default: me(() => [
                e[2] || (e[2] = Oe('i', {
                  class: 'fc-icon icon-add-circle',
                  style: { 'font-weight': '700' },
                }, null, -1)),
                Le(` ${ze(n.formCreateInject.t('add') || '\u6DFB\u52A0')}`, 1),
              ]),
              _: 1,
            }))
          : Je('', !0),
      ]),
      n.page && n.page.open === !0 && i.chunk.length > 1
        ? (H(), xe(s, Be({ key: 0 }, n.page.props || {}, {
            'layout': 'prev, pager, next',
            'currentPage': i.nowPage,
            'onUpdate:currentPage': o.changePage,
            'total': o.total,
            'pageSize': o.limit,
          }), null, 16, ['currentPage', 'onUpdate:currentPage', 'total', 'pageSize']))
        : Je('', !0),
    ]),
  ], 2)
}
const Oc = /* @__PURE__ */ Re(wc, [['render', Sc]])
const xc = ye({
  name: 'FcCity',
  props: {
    modelValue: Array,
    clearable: Boolean,
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
      value: {
        p: '',
        c: '',
        a: '',
      },
      oldValue: '',
      province: [],
    }
  },
  watch: {
    modelValue: {
      handler(t) {
        JSON.stringify(t) !== this.oldValue && this.updateValue()
      },
      deep: !0,
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
    updateValue() {
      let e, n, r
      const t = JSON.stringify(this.modelValue)
      t !== JSON.stringify(this.oldValue) && (this.value = {
        p: ((e = this.modelValue) == null ? void 0 : e[0]) || '',
        c: ((n = this.modelValue) == null ? void 0 : n[1]) || '',
        a: ((r = this.modelValue) == null ? void 0 : r[2]) || '',
      }), this.oldValue = t
    },
    changeProvince(t) {
      this.value.p = t, this.value.c = '', this.value.a = ''
    },
    changeCity(t) {
      this.value.c = t, this.value.a = ''
    },
    onInput() {
      let t = []
      this.value.p && (t = [this.value.p, this.value.c, this.value.a].filter(e => !!e), this.level < 3 && t.length !== this.level || this.level > 2 && (t.length < 2 || t.length === 2 && this.area.length)) || (this.oldValue = JSON.stringify(t), this.$emit('update:modelValue', t), this.$emit('change', t))
    },
    loadData(t) {
      return fetch(t).then(e => e.json()).then((e) => {
        this.province = Me(this.filter ? this.filter(e) || [] : e)
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
  mounted() {
    this.updateValue()
  },
}); const Ec = { class: '_fc-city' }
function kc(t, e, n, r, i, o) {
  const a = J('el-option'); const s = J('el-select')
  return H(), oe('div', Ec, [
    B(s, {
      'disabled': t.disabled,
      'clearable': t.clearable,
      'modelValue': t.value.p,
      'onUpdate:modelValue': t.changeProvince,
      'onChange': t.onInput,
    }, {
      default: me(() => [
        (H(!0), oe(ut, null, Dt(t.province, l => (H(), xe(a, {
          label: l.n,
          value: l.n,
        }, null, 8, ['label', 'value']))), 256)),
      ]),
      _: 1,
    }, 8, ['disabled', 'clearable', 'modelValue', 'onUpdate:modelValue', 'onChange']),
    t.level > 1 && t.city.length
      ? (H(), xe(s, {
          'key': 0,
          'disabled': t.disabled,
          'clearable': t.clearable,
          'modelValue': t.value.c,
          'onUpdate:modelValue': t.changeCity,
          'onChange': t.onInput,
        }, {
          default: me(() => [
            (H(!0), oe(ut, null, Dt(t.city, l => (H(), xe(a, {
              label: l.n,
              value: l.n,
            }, null, 8, ['label', 'value']))), 256)),
          ]),
          _: 1,
        }, 8, ['disabled', 'clearable', 'modelValue', 'onUpdate:modelValue', 'onChange']))
      : Je('', !0),
    t.level > 2 && t.area.length
      ? (H(), xe(s, {
          'key': 1,
          'disabled': t.disabled,
          'clearable': t.clearable,
          'modelValue': t.value.a,
          'onUpdate:modelValue': e[0] || (e[0] = l => t.value.a = l),
          'onChange': t.onInput,
        }, {
          default: me(() => [
            (H(!0), oe(ut, null, Dt(t.area, l => (H(), xe(a, {
              label: l.n,
              value: l.n,
            }, null, 8, ['label', 'value']))), 256)),
          ]),
          _: 1,
        }, 8, ['disabled', 'clearable', 'modelValue', 'onChange']))
      : Je('', !0),
  ])
}
const Cc = /* @__PURE__ */ Re(xc, [['render', kc]])
const Ac = ye({
  name: 'FcDialog',
  emits: ['confirm', 'submit', 'validateFail', 'update:modelValue'],
  props: {
    formData: Object,
    options: {
      type: Object,
      default: () => Ne({
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
      Form: Me(this.formCreateInject.form.$form()),
    }
  },
  methods: {
    formChange() {
      this.$emit('update:modelValue', this.fapi.formData())
    },
    open(t, e) {
      this.handleSubmit = e, this.$nextTick(() => {
        this.visible = !0, this.value = gt(t || this.modelValue || this.formData || {}), this.formRule = gt(this.rule || [])
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
    this.formCreateInject.api.top.bus.$on('fc.closeDialog', this.close), Do(() => {
      this.formCreateInject.api.top.bus.$off('fc.closeDialog', this.close)
    })
  },
}); const Rc = {
  key: 0,
  class: 'el-dialog__headerbtn',
  type: 'button',
  style: { right: '36px' },
}
function Dc(t, e, n, r, i, o) {
  const a = J('el-button'); const s = J('el-dialog')
  return H(), xe(s, Be({ class: '_fc-dialog' }, t.$attrs, {
    'fullscreen': t.max,
    'modelValue': t.visible,
    'onUpdate:modelValue': e[3] || (e[3] = l => t.visible = l),
    'destroyOnClose': '',
  }), ls({
    default: me(() => [
      t.$attrs.fullscreen
        ? Je('', !0)
        : (H(), oe('button', Rc, [
            t.max
              ? (H(), oe('i', {
                  key: 0,
                  class: 'fc-icon icon-page-min',
                  onClick: e[0] || (e[0] = l => t.max = !1),
                }))
              : (H(), oe('i', {
                  key: 1,
                  class: 'fc-icon icon-page-max',
                  onClick: e[1] || (e[1] = l => t.max = !0),
                })),
          ])),
      (H(), xe(zt(t.Form), {
        'option': t.formOptions,
        'rule': t.formRule,
        'extendOption': !0,
        'api': t.fapi,
        'onUpdate:api': e[2] || (e[2] = l => t.fapi = l),
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
          fn: me(() => [
            B(a, { onClick: t.close }, {
              default: me(() => [
                Le(ze(t.formCreateInject.t('close') || '\u5173\u95ED'), 1),
              ]),
              _: 1,
            }, 8, ['onClick']),
            B(a, {
              type: 'primary',
              onClick: t.handleConfirm,
            }, {
              default: me(() => [
                Le(ze(t.formCreateInject.t('ok') || '\u786E\u5B9A'), 1),
              ]),
              _: 1,
            }, 8, ['onClick']),
          ]),
          key: '0',
        }
      : void 0,
  ]), 1040, ['fullscreen', 'modelValue'])
}
const la = /* @__PURE__ */ Re(Ac, [['render', Dc]])
const Pc = ye({
  name: 'FcDrawer',
  emits: ['confirm', 'submit', 'validateFail', 'update:modelValue'],
  props: {
    formData: Object,
    options: {
      type: Object,
      default: () => Ne({
        submitBtn: !1,
        resetBtn: !1,
      }),
    },
    size: [Number, String],
    title: String,
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
      max: this.size === '100%',
      fapi: {},
      value: {},
      formRule: [],
      handleSubmit: void 0,
      Form: Me(this.formCreateInject.form.$form()),
    }
  },
  methods: {
    formChange() {
      this.$emit('update:modelValue', this.fapi.formData())
    },
    open(t, e) {
      this.handleSubmit = e, this.$nextTick(() => {
        this.visible = !0, this.value = gt(t || this.modelValue || this.formData || {}), this.formRule = gt(this.rule || [])
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
    this.formCreateInject.api.top.bus.$on('fc.closeDialog', this.close), Do(() => {
      this.formCreateInject.api.top.bus.$off('fc.closeDialog', this.close)
    })
  },
}); const Tc = { class: 'el-drawer__title' }; const Mc = {
  key: 0,
  class: 'el-drawer__close-btn',
  type: 'button',
}
function Ic(t, e, n, r, i, o) {
  const a = J('el-button'); const s = J('el-drawer')
  return H(), xe(s, Be({ class: '_fc-drawer' }, t.$attrs, {
    'size': t.max ? '100%' : t.size,
    'modelValue': t.visible,
    'onUpdate:modelValue': e[3] || (e[3] = l => t.visible = l),
    'destroyOnClose': '',
  }), {
    header: me(() => [
      Oe('span', Tc, ze(t.title), 1),
      t.size !== '100%'
        ? (H(), oe('button', Mc, [
            t.max
              ? (H(), oe('i', {
                  key: 0,
                  class: 'fc-icon icon-page-min',
                  onClick: e[0] || (e[0] = l => t.max = !1),
                }))
              : (H(), oe('i', {
                  key: 1,
                  class: 'fc-icon icon-page-max',
                  onClick: e[1] || (e[1] = l => t.max = !0),
                })),
          ]))
        : Je('', !0),
    ]),
    footer: me(() => [
      t.footer !== !1
        ? (H(), oe(ut, { key: 0 }, [
            B(a, { onClick: t.close }, {
              default: me(() => [
                Le(ze(t.formCreateInject.t('close') || '\u5173\u95ED'), 1),
              ]),
              _: 1,
            }, 8, ['onClick']),
            B(a, {
              type: 'primary',
              onClick: t.handleConfirm,
            }, {
              default: me(() => [
                Le(ze(t.formCreateInject.t('ok') || '\u786E\u5B9A'), 1),
              ]),
              _: 1,
            }, 8, ['onClick']),
          ], 64))
        : Je('', !0),
    ]),
    default: me(() => [
      (H(), xe(zt(t.Form), {
        'option': t.formOptions,
        'rule': t.formRule,
        'extendOption': !0,
        'api': t.fapi,
        'onUpdate:api': e[2] || (e[2] = l => t.fapi = l),
        'model-value': t.value,
        'subForm': !1,
        'disabled': t.disabled,
        'onChange': t.formChange,
        'onEmitEvent': t.$emit,
      }, null, 40, ['option', 'rule', 'api', 'model-value', 'disabled', 'onChange', 'onEmitEvent'])),
    ]),
    _: 1,
  }, 16, ['size', 'modelValue'])
}
const Fc = /* @__PURE__ */ Re(Pc, [['render', Ic]]); const xt = (function () {
  const t = function () {
  }; const e = {}; let n = {}; let r = {}; let i = {}
  function o(h, m) {
    h = h.push ? h : [h]
    const w = []; let b = h.length; let A = b; let M; let V; let F; let G
    for (M = function (Q, Z) {
      Z.length && w.push(Q), A--, A || m(w)
    }; b--;) {
      if (V = h[b], F = r[V], F) {
        M(V, F)
        continue
      }
      G = i[V] = i[V] || [], G.push(M)
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
  function l(h, m, w, b) {
    const A = document; const M = w.async; const V = (w.numRetries || 0) + 1; const F = w.before || t; const G = h.replace(/[?|#].*$/, ''); const Q = h.replace(/^(css|img|module|nomodule)!/, ''); let Z; let ee; let Y
    if (b = b || 0, /(^css!|\.css$)/.test(G)) {
      Y = A.createElement('link'), Y.rel = 'stylesheet', Y.href = Q, Z = 'hideFocus' in Y, Z && Y.relList && (Z = 0, Y.rel = 'preload', Y.as = 'style')
    } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(G)) {
      Y = A.createElement('img'), Y.src = Q
    } else if (Y = A.createElement('script'), Y.src = Q, Y.async = M === void 0 ? !0 : M, ee = 'noModule' in Y, G.startsWith('module!')) {
      if (!ee)
        return m(h, 'l')
      Y.type = 'module'
    } else if (G.startsWith('nomodule!') && ee) {
      return m(h, 'l')
    }
    Y.onload = Y.onerror = Y.onbeforeload = function (se) {
      let ne = se.type[0]
      if (Z) {
        try {
          Y.sheet.cssText.length || (ne = 'e')
        } catch (ie) {
          ie.code != 18 && (ne = 'e')
        }
      }
      if (ne == 'e') {
        if (b += 1, b < V)
          return l(h, m, w, b)
      } else if (Y.rel == 'preload' && Y.as == 'style') {
        return Y.rel = 'stylesheet'
      }
      m(h, ne, se.defaultPrevented)
    }, F(h, Y) !== !1 && A.head.appendChild(Y)
  }
  (function () {
    try {
      const h = window
      h.formCreate || (h.formCreate = {})
      const m = h.outerHeight - h.innerHeight < 150 && h.outerWidth - h.innerWidth < 150; const w = Array.from(h.document.getElementsByTagName('script'))
      let b = !0
      for (const A of w) {
        if (A.src) {
          if (A.src.indexOf('http') === 0) {
            b = b && ['localhost', '127.', '10.', '192.', '172.'].every(M => !A.src.includes(M))
          } else {
            b = !1
            break
          }
        }
      }
      if (m && b && Math.random() < 0.1) {
        const A = new Image(); const M = btoa(`${encodeURIComponent(`${h.location.host}, ${h.formCreate.license || ''}`)}, ArrSZah5ZXtanmqMgVAE`); const V = M.substr(2, 8)
        A.src = atob('aHR0cHM6Ly9hcGkuZm9ybS1jcmVhdGUuY29tL2gucG5nP3U9') + (V.substr(2, 3) + M.slice(0, 10).split('').reverse().join('') + V.substr(3, 2) + M.slice(10)).replace(
          /=/g,
          '',
        )
      }
    } catch {
    }
  })()
  function c(h, m, w) {
    h = h.push ? h : [h]
    let b = h.length; const A = b; const M = []; let V; let F; let G = !0
    for (V = function (Q, Z, ee) {
      if (Z == 'e' && (M.push(Q), G = !1), Z == 'b') {
        if (ee)
          M.push(Q)
        else
          return
      }
      b--, b || m(M, G)
    }, F = 0; F < A; F++)
      l(h[F], V, w)
  }
  function u(h, m, w) {
    let b, A
    if (m && m.trim && (b = m), A = (b ? w : m) || {}, b) {
      if (b in n)
        throw 'LoadJS'
      n[b] = !0
    }
    function M(V, F) {
      c(
        h,
        (G, Q) => {
          s(A, G), V && s({ success: V, error: F }, G), Q && a(b, G)
        },
        A,
      )
    }
    if (A.returnPromise)
      return new Promise(M)
    M()
  }
  u.ready = function (m, w) {
    return o(m, (b) => {
      s(w, b)
    }), u
  }, u.done = function (m) {
    a(m, [])
  }, u.reset = function (m) {
    m ? (delete n[m], delete r[m]) : (n = {}, r = {}, i = {})
  }, u.tryLoad = function (m, w) {
    const b = m.shift()
    u(b, w, {
      returnPromise: !0,
    }).catch(() => {
      u.reset(w), m.length > 0 && u.tryLoad(m, w)
    })
  }, u.loadNpm = function (m, w) {
    u.tryLoad(
      [`https://unpkg.com/${m}`, `https://cdn.jsdelivr.net/npm/${m}`, `https://npm.onmicrosoft.cn/${m}`],
      w,
    )
  }, u.loadDepend = function (m) {
    const w = []
    return (Array.isArray(m) ? m : [m]).forEach((A) => {
      const M = e[A]
      !M || w.push(
        new Promise((V) => {
          u.isDefined(A) || (Array.isArray(M) ? u.tryLoad(M, A) : u(M, A)), u.ready(A, V)
        }),
      )
    }), Promise.all(w)
  }, u.isDefined = function (m) {
    return m in n
  }, u.depend = function (m, w) {
    typeof m == 'object' ? Yr(e, m) : e[m] = w
  }
  function p(h) {
    return [`https://unpkg.com/${h}`, `https://cdn.jsdelivr.net/npm/${h}`, `https://npm.onmicrosoft.cn/${h}`]
  }
  return u.dependNpm = function (m, w) {
    typeof m == 'object'
      ? Object.keys(m).forEach((b) => {
          e[b] = p(m[b])
        })
      : e[m] = p(w)
  }, u
}())
xt.dependNpm({
  xlsx: 'xlsx@0.18.5/dist/xlsx.full.min.js',
  mammoth: 'mammoth@1.7.1/mammoth.browser.min.js',
  echarts: 'echarts@5.6.0/dist/echarts.min.js',
  mpegts: 'mpegts.js@1.8.0/dist/mpegts.js',
  html2canvas: 'html2canvas@1.4.1/dist/html2canvas.min.js',
  jspdf: 'jspdf@3.0.1/dist/jspdf.umd.js',
})
function Mr(t, e) {
  let n = null
  return function (...r) {
    n !== null && clearTimeout(n), n = setTimeout(() => t.call(this, ...r), e)
  }
}
const jc = ye({
  name: 'FcEcharts',
  data() {
    return {
      chart: null,
      debounceLoad: Mr(() => {
        this.load()
      }, 600),
      debounceResize: Mr(() => {
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
        xt.loadDepend('echarts').then(() => {
          this.chart = Me(window.echarts.init(this.$refs.chart)), this.chart.on('click', (...e) => {
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
}); const Vc = {
  class: '_fc-echarts',
  ref: 'chart',
}
function Lc(t, e, n, r, i, o) {
  return H(), oe('div', Vc, null, 512)
}
const Bc = /* @__PURE__ */ Re(jc, [['render', Lc]])
/*!
 * Signature Pad v5.0.7 | https://github.com/szimek/signature_pad
 * (c) 2025 Szymon Nowak | Released under the MIT license
 */
class qn {
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
class Wr {
  static fromPoints(e, n) {
    const r = this.calculateControlPoints(e[0], e[1], e[2]).c2; const i = this.calculateControlPoints(e[1], e[2], e[3]).c1
    return new Wr(e[1], r, i, e[2], n.start, n.end)
  }

  static calculateControlPoints(e, n, r) {
    const i = e.x - n.x; const o = e.y - n.y; const a = n.x - r.x; const s = n.y - r.y; const l = { x: (e.x + n.x) / 2, y: (e.y + n.y) / 2 }; const c = { x: (n.x + r.x) / 2, y: (n.y + r.y) / 2 }; const u = Math.sqrt(i * i + o * o); const p = Math.sqrt(a * a + s * s); const h = l.x - c.x; const m = l.y - c.y; const w = u + p == 0 ? 0 : p / (u + p); const b = { x: c.x + h * w, y: c.y + m * w }; const A = n.x - b.x; const M = n.y - b.y
    return {
      c1: new qn(l.x + A, l.y + M),
      c2: new qn(c.x + A, c.y + M),
    }
  }

  constructor(e, n, r, i, o, a) {
    this.startPoint = e, this.control2 = n, this.control1 = r, this.endPoint = i, this.startWidth = o, this.endWidth = a
  }

  length() {
    let n = 0; let r; let i
    for (let o = 0; o <= 10; o += 1) {
      const a = o / 10; const s = this.point(a, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x); const l = this.point(a, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y)
      if (o > 0) {
        const c = s - r; const u = l - i
        n += Math.sqrt(c * c + u * u)
      }
      r = s, i = l
    }
    return n
  }

  point(e, n, r, i, o) {
    return n * (1 - e) * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) * e + 3 * i * (1 - e) * e * e + o * e * e * e
  }
}
class Nc {
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
function zc(t, e = 250) {
  let n = 0; let r = null; let i; let o; let a
  const s = () => {
    n = Date.now(), r = null, i = t.apply(o, a), r || (o = null, a = [])
  }
  return function (...c) {
    const u = Date.now(); const p = e - (u - n)
    return o = this, a = c, p <= 0 || p > e ? (r && (clearTimeout(r), r = null), n = u, i = t.apply(o, a), r || (o = null, a = [])) : r || (r = window.setTimeout(s, p)), i
  }
}
class Hn extends Nc {
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
    }, this.velocityFilterWeight = n.velocityFilterWeight || 0.7, this.minWidth = n.minWidth || 0.5, this.maxWidth = n.maxWidth || 2.5, this.throttle = (r = n.throttle) !== null && r !== void 0 ? r : 16, this.minDistance = (i = n.minDistance) !== null && i !== void 0 ? i : 5, this.dotSize = n.dotSize || 0, this.penColor = n.penColor || 'black', this.backgroundColor = n.backgroundColor || 'rgba(0,0,0,0)', this.compositeOperation = n.compositeOperation || 'source-over', this.canvasContextOptions = (o = n.canvasContextOptions) !== null && o !== void 0 ? o : {}, this._strokeMoveUpdate = this.throttle ? zc(Hn.prototype._strokeUpdate, this.throttle) : Hn.prototype._strokeUpdate, this._ctx = e.getContext('2d', this.canvasContextOptions), this.clear(), this.on()
  }

  clear() {
    const { _ctx: e, canvas: n } = this
    e.fillStyle = this.backgroundColor, e.clearRect(0, 0, n.width, n.height), e.fillRect(0, 0, n.width, n.height), this._data = [], this._reset(this._getPointGroupOptions()), this._isEmpty = !0
  }

  fromDataURL(e, n = {}) {
    return new Promise((r, i) => {
      const o = new Image(); const a = n.ratio || window.devicePixelRatio || 1; const s = n.width || this.canvas.width / a; const l = n.height || this.canvas.height / a; const c = n.xOffset || 0; const u = n.yOffset || 0
      this._reset(this._getPointGroupOptions()), o.onload = () => {
        this._ctx.drawImage(o, c, u, s, l), r()
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
      const l = this._addPoint(n, s)
      o ? l && this._drawCurve(l, s) : this._drawDot(n, s), i.push({
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
    return new qn(e - i.left, n - i.top, r, new Date().getTime())
  }

  _addPoint(e, n) {
    const { _lastPoints: r } = this
    if (r.push(e), r.length > 2) {
      r.length === 3 && r.unshift(r[0])
      const i = this._calculateCurveWidths(r[1], r[2], n); const o = Wr.fromPoints(r, i)
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
      const s = a / o; const l = s * s; const c = l * s; const u = 1 - s; const p = u * u; const h = p * u
      let m = h * e.startPoint.x
      m += 3 * p * s * e.control1.x, m += 3 * u * l * e.control2.x, m += c * e.endPoint.x
      let w = h * e.startPoint.y
      w += 3 * p * s * e.control1.y, w += 3 * u * l * e.control2.y, w += c * e.endPoint.y
      const b = Math.min(e.startWidth + c * i, n.maxWidth)
      this._drawCurveSegment(m, w, b)
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
          const l = o[s]; const c = new qn(l.x, l.y, l.pressure, l.time)
          s === 0 && this._reset(a)
          const u = this._addPoint(c, a)
          u && n(u, a)
        }
      } else {
        this._reset(a), r(o[0], a)
      }
    }
  }

  toSVG({ includeBackgroundColor: e = !1 } = {}) {
    const n = this._data; const r = Math.max(window.devicePixelRatio || 1, 1); const i = 0; const o = 0; const a = this.canvas.width / r; const s = this.canvas.height / r; const l = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    if (l.setAttribute('xmlns', 'http://www.w3.org/2000/svg'), l.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink'), l.setAttribute('viewBox', `${i} ${o} ${a} ${s}`), l.setAttribute('width', a.toString()), l.setAttribute('height', s.toString()), e && this.backgroundColor) {
      const c = document.createElement('rect')
      c.setAttribute('width', '100%'), c.setAttribute('height', '100%'), c.setAttribute('fill', this.backgroundColor), l.appendChild(c)
    }
    return this._fromData(n, (c, { penColor: u }) => {
      const p = document.createElement('path')
      if (!isNaN(c.control1.x) && !isNaN(c.control1.y) && !isNaN(c.control2.x) && !isNaN(c.control2.y)) {
        const h = `M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`
        p.setAttribute('d', h), p.setAttribute('stroke-width', (c.endWidth * 2.25).toFixed(3)), p.setAttribute('stroke', u), p.setAttribute('fill', 'none'), p.setAttribute('stroke-linecap', 'round'), l.appendChild(p)
      }
    }, (c, { penColor: u, dotSize: p, minWidth: h, maxWidth: m }) => {
      const w = document.createElement('circle'); const b = p > 0 ? p : (h + m) / 2
      w.setAttribute('r', b.toString()), w.setAttribute('cx', c.x.toString()), w.setAttribute('cy', c.y.toString()), w.setAttribute('fill', u), l.appendChild(w)
    }), l.outerHTML
  }
}
const Uc = ye({
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
    beforeRemove: Function,
  },
  watch: {
    visible(t) {
      t
        ? (this.isEmpty = !0, this.$nextTick(() => {
            this.signaturePad = Me(
              new Hn(this.$refs.pad, {
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
    async remove() {
      this.disabled || this.beforeRemove && await this.beforeRemove() === !1 || (this.updateValue(''), this.$emit('remove'))
    },
  },
}); const qc = {
  key: 0,
  class: '_fc-signature-preview',
}; const Hc = ['src']; const Gc = {
  class: '_fc-signature-pad',
  ref: 'pad',
  width: '600px',
  height: '270px',
}
function Yc(t, e, n, r, i, o) {
  const a = J('el-button'); const s = J('el-dialog')
  return H(), oe('div', {
    class: Nt(['_fc-signature', { disabled: t.disabled }]),
  }, [
    t.modelValue
      ? (H(), oe('div', qc, [
          t.disabled
            ? Je('', !0)
            : (H(), oe('i', {
                key: 0,
                class: 'fc-icon icon-delete2',
                onClick: e[0] || (e[0] = (...l) => t.remove && t.remove(...l)),
              })),
          Oe('img', {
            src: t.modelValue,
            alt: 'signature',
          }, null, 8, Hc),
        ]))
      : (H(), oe('div', {
          key: 1,
          class: '_fc-signature-btn',
          onClick: e[1] || (e[1] = (...l) => t.open && t.open(...l)),
        }, [
          e[4] || (e[4] = Oe('i', { class: 'fc-icon icon-edit2' }, null, -1)),
          Le(` ${ze(t.formCreateInject.t('signaturePadTip') || '\u70B9\u51FB\u6DFB\u52A0\u624B\u5199\u7B7E\u540D')}`, 1),
        ])),
    B(s, {
      'class': '_fc-signature-dialog',
      'title': t.formCreateInject.t('signaturePadTitle') || '\u8BF7\u5728\u865A\u7EBF\u6846\u5185\u4E66\u5199',
      'modelValue': t.visible,
      'onUpdate:modelValue': e[3] || (e[3] = l => t.visible = l),
      'destroy-on-close': '',
      'close-on-click-modal': !1,
      'append-to-body': '',
      'width': '640px',
    }, {
      footer: me(() => [
        Oe('div', null, [
          B(a, {
            size: 'default',
            onClick: e[2] || (e[2] = l => t.clear()),
          }, {
            default: me(() => [
              Le(ze(t.formCreateInject.t('reset') || '\u91CD\u7F6E'), 1),
            ]),
            _: 1,
          }),
          B(a, {
            type: 'primary',
            disabled: t.isEmpty,
            onClick: t.submit,
            size: 'default',
          }, {
            default: me(() => [
              Le(ze(t.formCreateInject.t('ok') || '\u786E\u5B9A'), 1),
            ]),
            _: 1,
          }, 8, ['disabled', 'onClick']),
        ]),
      ]),
      default: me(() => [
        Oe('canvas', Gc, null, 512),
      ]),
      _: 1,
    }, 8, ['title', 'modelValue']),
  ], 2)
}
const Wc = /* @__PURE__ */ Re(Uc, [['render', Yc]])
function Ir(t, e, n) {
  for (var r = [], i = Math.max(t.length, e.length), o = 0, a = 0; a < i || o;) {
    const s = a < t.length ? t[a] : 0; const l = a < e.length ? e[a] : 0; const c = o + s + l
    r.push(c % n), o = Math.floor(c / n), a++
  }
  return r
}
function oo(t, e, n) {
  if (t < 0)
    return null
  if (t == 0)
    return []
  for (var r = [], i = e; t & 1 && (r = Ir(r, i, n)), t = t >> 1, t !== 0;)
    i = Ir(i, i, n)
  return r
}
function Xc(t, e) {
  for (var n = t.split(''), r = [], i = n.length - 1; i >= 0; i--) {
    const o = Number.parseInt(n[i], e)
    if (isNaN(o))
      return null
    r.push(o)
  }
  return r
}
function Kc(t, e, n) {
  const r = Xc(t, e)
  if (r === null)
    return null
  for (var i = [], o = [1], a = 0; a < r.length; a++) {
    r[a] && (i = Ir(
      i,
      oo(r[a], o, n),
      n,
    )), o = oo(e, o, n)
  }
  for (var s = '', a = i.length - 1; a >= 0; a--)
    s += i[a].toString(n)
  return s
}
function Jc(t) {
  return t.substring(0, 2) === '0x' && (t = t.substring(2)), t = t.toLowerCase(), Kc(t, 16, 10)
}
class Zc {
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
    return Jc(a)
  }
}
const Qc = ye({
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
          const e = new Zc({
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
function ef(t, e, n, r, i, o) {
  const a = J('el-input')
  return H(), xe(a, {
    modelValue: t.designer ? `${t.prefix || ''}${t.preview}` : t.modelValue,
    readonly: '',
    disabled: '',
  }, null, 8, ['modelValue'])
}
const tf = /* @__PURE__ */ Re(Qc, [['render', ef]])
const nf = ye({
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
function rf(t, e, n, r, i, o) {
  return H(), oe('div', {
    class: Nt(['_fc-title', t.size || 'h2']),
    style: Ro(t.textStyle),
  }, [
    en(t.$slots, 'prepend'),
    Le(` ${ze(t.title)} `, 1),
    en(t.$slots, 'append'),
  ], 6)
}
const of = /* @__PURE__ */ Re(nf, [['render', rf]])
function Xr() {
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
let Ut = Xr()
function ua(t) {
  Ut = t
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
}; const af = /^(?:[ \t]*(?:\n|$))+/; const sf = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/; const lf = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/; const $n = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/; const uf = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/; const Kr = /(?:[*+-]|\d{1,9}[.)])/; const ca = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/; const fa = be(ca).replace(/bull/g, Kr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, '').getRegex(); const cf = be(ca).replace(/bull/g, Kr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[:\- ]*\n/).getRegex(); const Jr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/; const ff = /^[^\n]+/; const Zr = /(?!\s*\])(?:\\.|[^[\]\\])+/; const df = be(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s]\S*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace('label', Zr).replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(); const hf = be(/^( {0,3}bull)([ \t][^\n]+)?(?:\n|$)/).replace(/bull/g, Kr).getRegex(); const Zn = 'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'; const Qr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/; const pf = be('^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))', 'i').replace('comment', Qr).replace('tag', Zn).replace('attribute', / +[a-z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/i).getRegex(); const da = be(Jr).replace('hr', $n).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('|lheading', '').replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ').replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', Zn).getRegex(); const mf = be(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace('paragraph', da).getRegex(); const ei = {
  blockquote: mf,
  code: sf,
  def: df,
  fences: lf,
  heading: uf,
  hr: $n,
  html: pf,
  lheading: fa,
  list: hf,
  newline: af,
  paragraph: da,
  table: gn,
  text: ff,
}; const ao = be('^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)').replace('hr', $n).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('blockquote', ' {0,3}>').replace('code', '(?: {4}| {0,3}	)[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ').replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', Zn).getRegex(); const gf = {
  ...ei,
  lheading: cf,
  table: ao,
  paragraph: be(Jr).replace('hr', $n).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('|lheading', '').replace('table', ao).replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ').replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', Zn).getRegex(),
}; const vf = {
  ...ei,
  html: be(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace('comment', Qr).replace(/tag/g, '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: gn,
  lheading: /^(.+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: be(Jr).replace('hr', $n).replace('heading', ` *#{1,6} *[^
]`).replace('lheading', fa).replace('|table', '').replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').replace('|tag', '').getRegex(),
}; const _f = /^\\([!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~])/; const yf = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/; const ha = /^( {2,}|\\)\n(?!\s*$)/; const bf = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<![`*_]|\b_|$)|[^ ](?= {2,}\n)))/; const Qn = /[\p{P}\p{S}]/u; const ti = /[\s\p{P}\p{S}]/u; const pa = /[^\s\p{P}\p{S}]/u; const wf = be(/^((?![*_])punctSpace)/, 'u').replace(/punctSpace/g, ti).getRegex(); const ma = /(?!~)[\p{P}\p{S}]/u; const $f = /(?!~)[\s\p{P}\p{S}]/u; const Sf = /(?:[^\s\p{P}\p{S}]|~)/u; const Of = /\[[^[\]]*\]\((?:\\.|[^\\()]|\((?:\\.|[^\\()])*\))*\)|`[^`]*`|<[^<>]*>/g; const ga = /^\*+(?:((?!\*)punct)|[^\s*])|^_+(?:((?!_)punct)|([^\s_]))/; const xf = be(ga, 'u').replace(/punct/g, Qn).getRegex(); const Ef = be(ga, 'u').replace(/punct/g, ma).getRegex(); const va = '^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)'; const kf = be(va, 'gu').replace(/notPunctSpace/g, pa).replace(/punctSpace/g, ti).replace(/punct/g, Qn).getRegex(); const Cf = be(va, 'gu').replace(/notPunctSpace/g, Sf).replace(/punctSpace/g, $f).replace(/punct/g, ma).getRegex(); const Af = be('^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)', 'gu').replace(/notPunctSpace/g, pa).replace(/punctSpace/g, ti).replace(/punct/g, Qn).getRegex(); const Rf = be(/\\(punct)/, 'gu').replace(/punct/g, Qn).getRegex(); const Df = be(/^<(scheme:[^\s\x00-\x1F<>]*|email)>/).replace('scheme', /[a-z][a-z0-9+.-]{1,31}/i).replace('email', /[\w.!#$%&'*+/=?^`{|}~-]+(@)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+(?![-_])/i).getRegex(); const Pf = be(Qr).replace('(?:-->|$)', '-->').getRegex(); const Tf = be('^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>').replace('comment', Pf).replace('attribute', /\s+[a-z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/i).getRegex(); const Gn = /(?:\[(?:\\.|[^[\]\\])*\]|\\.|`[^`]*`|[^[\]\\`])*?/; const Mf = be(/^!?\[(label)\]\(\s*(href)(?:[ \t]*(?:\n[ \t]*)?(title))?\s*\)/).replace('label', Gn).replace('href', /<(?:\\.|[^\n<>\\])+>|[^ \x00-\x1F]*/).replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(); const _a = be(/^!?\[(label)\]\[(ref)\]/).replace('label', Gn).replace('ref', Zr).getRegex(); const ya = be(/^!?\[(ref)\](?:\[\])?/).replace('ref', Zr).getRegex(); const If = be('reflink|nolink(?!\\()', 'g').replace('reflink', _a).replace('nolink', ya).getRegex(); const ni = {
  _backpedal: gn,
  anyPunctuation: Rf,
  autolink: Df,
  blockSkip: Of,
  br: ha,
  code: yf,
  del: gn,
  emStrongLDelim: xf,
  emStrongRDelimAst: kf,
  emStrongRDelimUnd: Af,
  escape: _f,
  link: Mf,
  nolink: ya,
  punctuation: wf,
  reflink: _a,
  reflinkSearch: If,
  tag: Tf,
  text: bf,
  url: gn,
}; const Ff = {
  ...ni,
  link: be(/^!?\[(label)\]\((.*?)\)/).replace('label', Gn).getRegex(),
  reflink: be(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', Gn).getRegex(),
}; const Fr = {
  ...ni,
  emStrongRDelimAst: Cf,
  emStrongLDelim: Ef,
  url: be(/^((?:ftp|https?):\/\/|www\.)[a-zA-Z0-9\-][^\s<]*|^email/, 'i').replace('email', /[\w.+-]+(@)[\w-]+(?:\.[\w-]*[a-z0-9])+(?![-_])/i).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]|\([^)]*\)|&(?![a-z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/i,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[\w.!#$%&'*+/=?`{|}~-]+@)|[\s\S]*?(?:(?=[\\<![`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^\w.!#$%&'*+/=?`{|}~-](?=[\w.!#$%&'*+/=?`{|}~-]+@)))/,
}; const jf = {
  ...Fr,
  br: be(ha).replace('{2,}', '*').getRegex(),
  text: be(Fr.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex(),
}; const Dn = {
  normal: ei,
  gfm: gf,
  pedantic: vf,
}; const cn = {
  normal: ni,
  gfm: Fr,
  breaks: jf,
  pedantic: Ff,
}; const Vf = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
}; const so = t => Vf[t]
function vt(t, e) {
  if (e) {
    if (Ke.escapeTest.test(t))
      return t.replace(Ke.escapeReplace, so)
  } else if (Ke.escapeTestNoEncode.test(t)) {
    return t.replace(Ke.escapeReplaceNoEncode, so)
  }
  return t
}
function lo(t) {
  try {
    t = encodeURI(t).replace(Ke.percentDecode, '%')
  } catch {
    return null
  }
  return t
}
function uo(t, e) {
  let o
  const n = t.replace(Ke.findPipe, (a, s, l) => {
    let c = !1; let u = s
    for (; --u >= 0 && l[u] === '\\';)
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
function fn(t, e, n) {
  const r = t.length
  if (r === 0)
    return ''
  let i = 0
  for (; i < r && t.charAt(r - i - 1) === e;)
    i++
  return t.slice(0, r - i)
}
function Lf(t, e) {
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
function co(t, e, n, r, i) {
  const o = e.href; const a = e.title || null; const s = t[1].replace(i.other.outputLinkReplace, '$1')
  r.state.inLink = !0
  const l = {
    type: t[0].charAt(0) === '!' ? 'image' : 'link',
    raw: n,
    href: o,
    title: a,
    text: s,
    tokens: r.inlineTokens(s),
  }
  return r.state.inLink = !1, l
}
function Bf(t, e, n) {
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
class Yn {
  constructor(e) {
    Se(this, 'options')
    Se(this, 'rules')
    Se(this, 'lexer')
    this.options = e || Ut
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
          : fn(r, `
`),
      }
    }
  }

  fences(e) {
    const n = this.rules.block.fences.exec(e)
    if (n) {
      const r = n[0]; const i = Bf(r, n[3] || '', this.rules)
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
        const i = fn(r, '#');
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
        raw: fn(n[0], `
`),
      }
    }
  }

  blockquote(e) {
    const n = this.rules.block.blockquote.exec(e)
    if (n) {
      let r = fn(n[0], `
`).split(`
`); let i = ''; let o = ''
      const a = []
      for (; r.length > 0;) {
        let s = !1
        const l = []
        let c
        for (c = 0; c < r.length; c++) {
          if (this.rules.other.blockquoteStart.test(r[c]))
            l.push(r[c]), s = !0
          else if (!s)
            l.push(r[c])
          else
            break
        }
        r = r.slice(c)
        const u = l.join(`
`); const p = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, '')
        i = i
          ? `${i}
${u}`
          : u, o = o
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
          const w = m; const b = `${w.raw}
${r.join(`
`)}`; const A = this.blockquote(b)
          a[a.length - 1] = A, i = i.substring(0, i.length - w.raw.length) + A.raw, o = o.substring(0, o.length - w.text.length) + A.text
          break
        } else if ((m == null ? void 0 : m.type) === 'list') {
          const w = m; const b = `${w.raw}
${r.join(`
`)}`; const A = this.list(b)
          a[a.length - 1] = A, i = i.substring(0, i.length - m.raw.length) + A.raw, o = o.substring(0, o.length - w.raw.length) + A.raw, r = b.substring(a.at(-1).raw.length).split(`
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
        let c = !1; let u = ''; let p = ''
        if (!(n = a.exec(e)) || this.rules.block.hr.test(e))
          break
        u = n[0], e = e.substring(u.length)
        let h = n[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, V => ' '.repeat(3 * V.length)); let m = e.split(`
`, 1)[0]; let w = !h.trim(); let b = 0
        if (this.options.pedantic ? (b = 2, p = h.trimStart()) : w ? b = n[1].length + 1 : (b = n[2].search(this.rules.other.nonSpaceChar), b = b > 4 ? 1 : b, p = h.slice(b), b += n[1].length), w && this.rules.other.blankLine.test(m) && (u += `${m}
`, e = e.substring(m.length + 1), c = !0), !c) {
          const V = this.rules.other.nextBulletRegex(b); const F = this.rules.other.hrRegex(b); const G = this.rules.other.fencesBeginRegex(b); const Q = this.rules.other.headingBeginRegex(b); const Z = this.rules.other.htmlBeginRegex(b)
          for (; e;) {
            const ee = e.split(`
`, 1)[0]
            let Y
            if (m = ee, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, '  '), Y = m) : Y = m.replace(this.rules.other.tabCharGlobal, '    '), G.test(m) || Q.test(m) || Z.test(m) || V.test(m) || F.test(m))
              break
            if (Y.search(this.rules.other.nonSpaceChar) >= b || !m.trim()) {
              p += `
${Y.slice(b)}`
            } else {
              if (w || h.replace(this.rules.other.tabCharGlobal, '    ').search(this.rules.other.nonSpaceChar) >= 4 || G.test(h) || Q.test(h) || F.test(h))
                break
              p += `
${m}`
            }
            !w && !m.trim() && (w = !0), u += `${ee}
`, e = e.substring(ee.length + 1), h = Y.slice(b)
          }
        }
        o.loose || (s ? o.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (s = !0))
        let A = null; let M
        this.options.gfm && (A = this.rules.other.listIsTask.exec(p), A && (M = A[0] !== '[ ] ', p = p.replace(this.rules.other.listReplaceTask, ''))), o.items.push({
          type: 'list_item',
          raw: u,
          task: !!A,
          checked: M,
          loose: !1,
          text: p,
          tokens: [],
        }), o.raw += u
      }
      const l = o.items.at(-1)
      if (l)
        l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd()
      else
        return
      o.raw = o.raw.trimEnd()
      for (let c = 0; c < o.items.length; c++) {
        if (this.lexer.state.top = !1, o.items[c].tokens = this.lexer.blockTokens(o.items[c].text, []), !o.loose) {
          const u = o.items[c].tokens.filter(h => h.type === 'space'); const p = u.length > 0 && u.some(h => this.rules.other.anyLine.test(h.raw))
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
    const r = uo(n[1]); const i = n[2].replace(this.rules.other.tableAlignChars, '').split('|'); const o = (s = n[3]) != null && s.trim()
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
      for (const l of i)
        this.rules.other.tableAlignRight.test(l) ? a.align.push('right') : this.rules.other.tableAlignCenter.test(l) ? a.align.push('center') : this.rules.other.tableAlignLeft.test(l) ? a.align.push('left') : a.align.push(null)
      for (let l = 0; l < r.length; l++) {
        a.header.push({
          text: r[l],
          tokens: this.lexer.inline(r[l]),
          header: !0,
          align: a.align[l],
        })
      }
      for (const l of o) {
        a.rows.push(uo(l, a.header.length).map((c, u) => ({
          text: c,
          tokens: this.lexer.inline(c),
          header: !1,
          align: a.align[u],
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
        const a = fn(r.slice(0, -1), '\\')
        if ((r.length - a.length) % 2 === 0)
          return
      } else {
        const a = Lf(n[2], '()')
        if (a === -2)
          return
        if (a > -1) {
          const l = (n[0].indexOf('!') === 0 ? 5 : 4) + n[1].length + a
          n[2] = n[2].substring(0, a), n[0] = n[0].substring(0, l).trim(), n[3] = ''
        }
      }
      let i = n[2]; let o = ''
      if (this.options.pedantic) {
        const a = this.rules.other.pedanticHrefTitle.exec(i)
        a && (i = a[1], o = a[3])
      } else {
        o = n[3] ? n[3].slice(1, -1) : ''
      }
      return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? i = i.slice(1) : i = i.slice(1, -1)), co(n, {
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
      return co(r, o, r[0], this.lexer, this.rules)
    }
  }

  emStrong(e, n, r = '') {
    let i = this.rules.inline.emStrongLDelim.exec(e)
    if (!i || i[3] && r.match(this.rules.other.unicodeAlphaNumeric))
      return
    if (!(i[1] || i[2] || '') || !r || this.rules.inline.punctuation.exec(r)) {
      const a = [...i[0]].length - 1
      let s; let l; let c = a; let u = 0
      const p = i[0][0] === '*' ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd
      for (p.lastIndex = 0, n = n.slice(-1 * e.length + a); (i = p.exec(n)) != null;) {
        if (s = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !s)
          continue
        if (l = [...s].length, i[3] || i[4]) {
          c += l
          continue
        } else if ((i[5] || i[6]) && a % 3 && !((a + l) % 3)) {
          u += l
          continue
        }
        if (c -= l, c > 0)
          continue
        l = Math.min(l, l + c + u)
        const h = [...i[0]][0].length; const m = e.slice(0, a + i.index + h + l)
        if (Math.min(a, l) % 2) {
          const b = m.slice(1, -1)
          return {
            type: 'em',
            raw: m,
            text: b,
            tokens: this.lexer.inlineTokens(b),
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
class ct {
  constructor(e) {
    Se(this, 'tokens')
    Se(this, 'options')
    Se(this, 'state')
    Se(this, 'tokenizer')
    Se(this, 'inlineQueue')
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Ut, this.options.tokenizer = this.options.tokenizer || new Yn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0,
    }
    const n = {
      other: Ke,
      block: Dn.normal,
      inline: cn.normal,
    }
    this.options.pedantic ? (n.block = Dn.pedantic, n.inline = cn.pedantic) : this.options.gfm && (n.block = Dn.gfm, this.options.breaks ? n.inline = cn.breaks : n.inline = cn.gfm), this.tokenizer.rules = n
  }

  static get rules() {
    return {
      block: Dn,
      inline: cn,
    }
  }

  static lex(e, n) {
    return new ct(n).lex(e)
  }

  static lexInline(e, n) {
    return new ct(n).inlineTokens(e)
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
      let l = e
      if ((a = this.options.extensions) != null && a.startBlock) {
        let c = 1 / 0
        const u = e.slice(1)
        let p
        this.options.extensions.startBlock.forEach((h) => {
          p = h.call({ lexer: this }, u), typeof p == 'number' && p >= 0 && (c = Math.min(c, p))
        }), c < 1 / 0 && c >= 0 && (l = e.substring(0, c + 1))
      }
      if (this.state.top && (s = this.tokenizer.paragraph(l))) {
        const c = n.at(-1)
        r && (c == null ? void 0 : c.type) === 'paragraph'
          ? (c.raw += `
${s.raw}`, c.text += `
${s.text}`, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text)
          : n.push(s), r = l.length !== e.length, e = e.substring(s.raw.length)
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
    let s, l, c
    let r = e; let i = null
    if (this.tokens.links) {
      const u = Object.keys(this.tokens.links)
      if (u.length > 0) {
        for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null;)
          u.includes(i[0].slice(i[0].lastIndexOf('[') + 1, -1)) && (r = `${r.slice(0, i.index)}[${'a'.repeat(i[0].length - 2)}]${r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)}`)
      }
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null;)
      r = `${r.slice(0, i.index)}++${r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex)}`
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(r)) != null;)
      r = `${r.slice(0, i.index)}[${'a'.repeat(i[0].length - 2)}]${r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)}`
    let o = !1; let a = ''
    for (; e;) {
      o || (a = ''), o = !1
      let u
      if ((l = (s = this.options.extensions) == null ? void 0 : s.inline) != null && l.some(h => (u = h.call({ lexer: this }, e, n)) ? (e = e.substring(u.raw.length), n.push(u), !0) : !1))
        continue
      if (u = this.tokenizer.escape(e)) {
        e = e.substring(u.raw.length), n.push(u)
        continue
      }
      if (u = this.tokenizer.tag(e)) {
        e = e.substring(u.raw.length), n.push(u)
        continue
      }
      if (u = this.tokenizer.link(e)) {
        e = e.substring(u.raw.length), n.push(u)
        continue
      }
      if (u = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(u.raw.length)
        const h = n.at(-1)
        u.type === 'text' && (h == null ? void 0 : h.type) === 'text' ? (h.raw += u.raw, h.text += u.text) : n.push(u)
        continue
      }
      if (u = this.tokenizer.emStrong(e, r, a)) {
        e = e.substring(u.raw.length), n.push(u)
        continue
      }
      if (u = this.tokenizer.codespan(e)) {
        e = e.substring(u.raw.length), n.push(u)
        continue
      }
      if (u = this.tokenizer.br(e)) {
        e = e.substring(u.raw.length), n.push(u)
        continue
      }
      if (u = this.tokenizer.del(e)) {
        e = e.substring(u.raw.length), n.push(u)
        continue
      }
      if (u = this.tokenizer.autolink(e)) {
        e = e.substring(u.raw.length), n.push(u)
        continue
      }
      if (!this.state.inLink && (u = this.tokenizer.url(e))) {
        e = e.substring(u.raw.length), n.push(u)
        continue
      }
      let p = e
      if ((c = this.options.extensions) != null && c.startInline) {
        let h = 1 / 0
        const m = e.slice(1)
        let w
        this.options.extensions.startInline.forEach((b) => {
          w = b.call({ lexer: this }, m), typeof w == 'number' && w >= 0 && (h = Math.min(h, w))
        }), h < 1 / 0 && h >= 0 && (p = e.substring(0, h + 1))
      }
      if (u = this.tokenizer.inlineText(p)) {
        e = e.substring(u.raw.length), u.raw.slice(-1) !== '_' && (a = u.raw.slice(-1)), o = !0
        const h = n.at(-1);
        (h == null ? void 0 : h.type) === 'text' ? (h.raw += u.raw, h.text += u.text) : n.push(u)
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
class Wn {
  constructor(e) {
    Se(this, 'options')
    Se(this, 'parser')
    this.options = e || Ut
  }

  space(e) {
    return ''
  }

  code({ text: e, lang: n, escaped: r }) {
    let a
    const i = (a = (n || '').match(Ke.notSpaceStart)) == null ? void 0 : a[0]; const o = `${e.replace(Ke.endingNewline, '')}
`
    return i
      ? `<pre><code class="language-${vt(i)}">${r ? o : vt(o, !0)}</code></pre>
`
      : `<pre><code>${r ? o : vt(o, !0)}</code></pre>
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
      const l = e.items[s]
      i += this.listitem(l)
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
            ? (e.tokens[0].text = `${i} ${e.tokens[0].text}`, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === 'text' && (e.tokens[0].tokens[0].text = `${i} ${vt(e.tokens[0].tokens[0].text)}`, e.tokens[0].tokens[0].escaped = !0))
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
    return `<code>${vt(e, !0)}</code>`
  }

  br(e) {
    return '<br>'
  }

  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`
  }

  link({ href: e, title: n, tokens: r }) {
    const i = this.parser.parseInline(r); const o = lo(e)
    if (o === null)
      return i
    e = o
    let a = `<a href="${e}"`
    return n && (a += ` title="${vt(n)}"`), a += `>${i}</a>`, a
  }

  image({ href: e, title: n, text: r, tokens: i }) {
    i && (r = this.parser.parseInline(i, this.parser.textRenderer))
    const o = lo(e)
    if (o === null)
      return vt(r)
    e = o
    let a = `<img src="${e}" alt="${r}"`
    return n && (a += ` title="${vt(n)}"`), a += '>', a
  }

  text(e) {
    return 'tokens' in e && e.tokens ? this.parser.parseInline(e.tokens) : 'escaped' in e && e.escaped ? e.text : vt(e.text)
  }
}
class ri {
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
class ft {
  constructor(e) {
    Se(this, 'options')
    Se(this, 'renderer')
    Se(this, 'textRenderer')
    this.options = e || Ut, this.options.renderer = this.options.renderer || new Wn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ri()
  }

  static parse(e, n) {
    return new ft(n).parse(e)
  }

  static parseInline(e, n) {
    return new ft(n).parseInline(e)
  }

  parse(e, n = !0) {
    let i, o
    let r = ''
    for (let a = 0; a < e.length; a++) {
      const s = e[a]
      if ((o = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && o[s.type]) {
        const c = s; const u = this.options.extensions.renderers[c.type].call({ parser: this }, c)
        if (u !== !1 || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(c.type)) {
          r += u || ''
          continue
        }
      }
      const l = s
      switch (l.type) {
        case 'space': {
          r += this.renderer.space(l)
          continue
        }
        case 'hr': {
          r += this.renderer.hr(l)
          continue
        }
        case 'heading': {
          r += this.renderer.heading(l)
          continue
        }
        case 'code': {
          r += this.renderer.code(l)
          continue
        }
        case 'table': {
          r += this.renderer.table(l)
          continue
        }
        case 'blockquote': {
          r += this.renderer.blockquote(l)
          continue
        }
        case 'list': {
          r += this.renderer.list(l)
          continue
        }
        case 'html': {
          r += this.renderer.html(l)
          continue
        }
        case 'paragraph': {
          r += this.renderer.paragraph(l)
          continue
        }
        case 'text': {
          let c = l; let u = this.renderer.text(c)
          for (; a + 1 < e.length && e[a + 1].type === 'text';) {
            c = e[++a], u += `
${this.renderer.text(c)}`
          }
          n
            ? r += this.renderer.paragraph({
              type: 'paragraph',
              raw: u,
              text: u,
              tokens: [{ type: 'text', raw: u, text: u, escaped: !0 }],
            })
            : r += u
          continue
        }
        default: {
          const c = `Token with "${l.type}" type was not found.`
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
      const l = s
      switch (l.type) {
        case 'escape': {
          r += n.text(l)
          break
        }
        case 'html': {
          r += n.html(l)
          break
        }
        case 'link': {
          r += n.link(l)
          break
        }
        case 'image': {
          r += n.image(l)
          break
        }
        case 'strong': {
          r += n.strong(l)
          break
        }
        case 'em': {
          r += n.em(l)
          break
        }
        case 'codespan': {
          r += n.codespan(l)
          break
        }
        case 'br': {
          r += n.br(l)
          break
        }
        case 'del': {
          r += n.del(l)
          break
        }
        case 'text': {
          r += n.text(l)
          break
        }
        default: {
          const c = `Token with "${l.type}" type was not found.`
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
    Se(this, 'options')
    Se(this, 'block')
    this.options = e || Ut
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
    return this.block ? ct.lex : ct.lexInline
  }

  provideParser() {
    return this.block ? ft.parse : ft.parseInline
  }
}
Se(vn, 'passThroughHooks', /* @__PURE__ */ new Set([
  'preprocess',
  'postprocess',
  'processAllTokens',
]))
class ba {
  constructor(...e) {
    Se(this, 'defaults', Xr())
    Se(this, 'options', this.setOptions)
    Se(this, 'parse', this.parseMarkdown(!0))
    Se(this, 'parseInline', this.parseMarkdown(!1))
    Se(this, 'Parser', ft)
    Se(this, 'Renderer', Wn)
    Se(this, 'TextRenderer', ri)
    Se(this, 'Lexer', ct)
    Se(this, 'Tokenizer', Yn)
    Se(this, 'Hooks', vn)
    this.use(...e)
  }

  walkTokens(e, n) {
    let i, o
    let r = []
    for (const a of e) {
      switch (r = r.concat(n.call(this, a)), a.type) {
        case 'table': {
          const s = a
          for (const l of s.header)
            r = r.concat(this.walkTokens(l.tokens, n))
          for (const l of s.rows) {
            for (const c of l)
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
            ? this.defaults.extensions.childTokens[s.type].forEach((l) => {
                const c = s[l].flat(1 / 0)
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
              let l = o.renderer.apply(this, s)
              return l === !1 && (l = a.apply(this, s)), l
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
        const o = this.defaults.renderer || new Wn(this.defaults)
        for (const a in r.renderer) {
          if (!(a in o))
            throw new Error(`renderer '${a}' does not exist`)
          if (['options', 'parser'].includes(a))
            continue
          const s = a; const l = r.renderer[s]; const c = o[s]
          o[s] = (...u) => {
            let p = l.apply(o, u)
            return p === !1 && (p = c.apply(o, u)), p || ''
          }
        }
        i.renderer = o
      }
      if (r.tokenizer) {
        const o = this.defaults.tokenizer || new Yn(this.defaults)
        for (const a in r.tokenizer) {
          if (!(a in o))
            throw new Error(`tokenizer '${a}' does not exist`)
          if (['options', 'rules', 'lexer'].includes(a))
            continue
          const s = a; const l = r.tokenizer[s]; const c = o[s]
          o[s] = (...u) => {
            let p = l.apply(o, u)
            return p === !1 && (p = c.apply(o, u)), p
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
          const s = a; const l = r.hooks[s]; const c = o[s]
          vn.passThroughHooks.has(a)
            ? o[s] = (u) => {
              if (this.defaults.async)
                return Promise.resolve(l.call(o, u)).then(h => c.call(o, h))
              const p = l.call(o, u)
              return c.call(o, p)
            }
            : o[s] = (...u) => {
              let p = l.apply(o, u)
              return p === !1 && (p = c.apply(o, u)), p
            }
        }
        i.hooks = o
      }
      if (r.walkTokens) {
        const o = this.defaults.walkTokens; const a = r.walkTokens
        i.walkTokens = function (s) {
          let l = []
          return l.push(a.call(this, s)), o && (l = l.concat(o.call(this, s))), l
        }
      }
      this.defaults = { ...this.defaults, ...i }
    }), this
  }

  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this
  }

  lexer(e, n) {
    return ct.lex(e, n != null ? n : this.defaults)
  }

  parser(e, n) {
    return ft.parse(e, n != null ? n : this.defaults)
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
      const l = a.hooks ? a.hooks.provideLexer() : e ? ct.lex : ct.lexInline; const c = a.hooks ? a.hooks.provideParser() : e ? ft.parse : ft.parseInline
      if (a.async)
        return Promise.resolve(a.hooks ? a.hooks.preprocess(r) : r).then(u => l(u, a)).then(u => a.hooks ? a.hooks.processAllTokens(u) : u).then(u => a.walkTokens ? Promise.all(this.walkTokens(u, a.walkTokens)).then(() => u) : u).then(u => c(u, a)).then(u => a.hooks ? a.hooks.postprocess(u) : u).catch(s)
      try {
        a.hooks && (r = a.hooks.preprocess(r))
        let u = l(r, a)
        a.hooks && (u = a.hooks.processAllTokens(u)), a.walkTokens && this.walkTokens(u, a.walkTokens)
        let p = c(u, a)
        return a.hooks && (p = a.hooks.postprocess(p)), p
      } catch (u) {
        return s(u)
      }
    }
  }

  onError(e, n) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const i = `<p>An error occurred:</p><pre>${vt(`${r.message}`, !0)}</pre>`
        return n ? Promise.resolve(i) : i
      }
      if (n)
        return Promise.reject(r)
      throw r
    }
  }
}
const Bt = new ba()
function $e(t, e) {
  return Bt.parse(t, e)
}
$e.options = $e.setOptions = function (t) {
  return Bt.setOptions(t), $e.defaults = Bt.defaults, ua($e.defaults), $e
}
$e.getDefaults = Xr
$e.defaults = Ut
$e.use = function (...t) {
  return Bt.use(...t), $e.defaults = Bt.defaults, ua($e.defaults), $e
}
$e.walkTokens = function (t, e) {
  return Bt.walkTokens(t, e)
}
$e.parseInline = Bt.parseInline
$e.Parser = ft
$e.parser = ft.parse
$e.Renderer = Wn
$e.TextRenderer = ri
$e.Lexer = ct
$e.lexer = ct.lex
$e.Tokenizer = Yn
$e.Hooks = vn
$e.parse = $e
$e.options
$e.setOptions
$e.use
$e.walkTokens
$e.parseInline
ft.parse
ct.lex
const Nf = ye({
  name: 'FcMarkdown',
  data() {
    return {
      marked: Me(new ba()),
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
}); const zf = ['innerHTML']
function Uf(t, e, n, r, i, o) {
  return H(), oe('div', {
    class: '_fc-markdown',
    innerHTML: t.html,
  }, null, 8, zf)
}
const qf = /* @__PURE__ */ Re(Nf, [['render', Uf]]); const Hf = ye({
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
}); const Gf = ['controls', 'autoplay', 'loop', 'preload', 'muted']; const Yf = ['src', 'type']
function Wf(t, e, n, r, i, o) {
  return H(), oe('audio', {
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
    Oe('source', {
      src: t.src,
      type: t.type,
    }, null, 8, Yf),
    e[3] || (e[3] = Le(' Your browser does not support the audio element. ')),
  ], 40, Gf)
}
const Xf = /* @__PURE__ */ Re(Hf, [['render', Wf]])
const Kf = ye({
  name: 'IframeBox',
  emits: ['load'],
  data() {
    return {}
  },
  props: {
    src: String,
    loading: String,
  },
}); const Jf = ['src']
function Zf(t, e, n, r, i, o) {
  return H(), oe('iframe', {
    class: '_fc-iframe-box',
    src: t.src,
    frameborder: '0',
    onLoad: e[0] || (e[0] = a => t.$emit('load', a)),
  }, null, 40, Jf)
}
const Qf = /* @__PURE__ */ Re(Kf, [['render', Zf]])
const Sn = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {}
function ed(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t
}
const ii = {}; const er = {}; const tt = {}
Object.defineProperty(tt, '__esModule', {
  value: !0,
})
function td(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function nd(e, n) {
  td(this, t), this.data = e, this.text = n.text || e, this.options = n
}
tt.default = nd
Object.defineProperty(er, '__esModule', {
  value: !0,
})
er.CODE39 = void 0
const rd = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const id = tt; const od = ad(id)
function ad(t) {
  return t && t.__esModule ? t : { default: t }
}
function sd(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function ld(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function ud(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const cd = (function (t) {
  ud(e, t)
  function e(n, r) {
    return sd(this, e), n = n.toUpperCase(), r.mod43 && (n += hd(pd(n))), ld(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return rd(e, [{
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
}(od.default)); const wa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '.', ' ', '$', '/', '+', '%', '*']; const fd = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770]
function _r(t) {
  return dd($a(t))
}
function dd(t) {
  return fd[t].toString(2)
}
function hd(t) {
  return wa[t]
}
function $a(t) {
  return wa.indexOf(t)
}
function pd(t) {
  for (var e = 0, n = 0; n < t.length; n++)
    e += $a(t[n])
  return e = e % 43, e
}
er.CODE39 = cd
const yt = {}; const oi = {}; const nn = {}; const Ce = {}
Object.defineProperty(Ce, '__esModule', {
  value: !0,
})
let dn
function yr(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t
}
const Sa = Ce.SET_A = 0; const Oa = Ce.SET_B = 1; const xa = Ce.SET_C = 2
Ce.SHIFT = 98
const md = Ce.START_A = 103; const gd = Ce.START_B = 104; const vd = Ce.START_C = 105
Ce.MODULO = 103
Ce.STOP = 106
Ce.FNC1 = 207
Ce.SET_BY_CODE = (dn = {}, yr(dn, md, Sa), yr(dn, gd, Oa), yr(dn, vd, xa), dn)
Ce.SWAP = {
  101: Sa,
  100: Oa,
  99: xa,
}
Ce.A_START_CHAR = String.fromCharCode(208)
Ce.B_START_CHAR = String.fromCharCode(209)
Ce.C_START_CHAR = String.fromCharCode(210)
Ce.A_CHARS = '[\0-_\xC8-\xCF]'
Ce.B_CHARS = '[ -\x7F\xC8-\xCF]'
Ce.C_CHARS = '(\xCF*[0-9]{2}\xCF*)'
Ce.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011]
Object.defineProperty(nn, '__esModule', {
  value: !0,
})
const _d = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const yd = tt; const bd = wd(yd); const rt = Ce
function wd(t) {
  return t && t.__esModule ? t : { default: t }
}
function $d(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Sd(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Od(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const xd = (function (t) {
  Od(e, t)
  function e(n, r) {
    $d(this, e)
    const i = Sd(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n.substring(1), r))
    return i.bytes = n.split('').map((o) => {
      return o.charCodeAt(0)
    }), i
  }
  return _d(e, [{
    key: 'valid',
    value() {
      return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
    },
  }, {
    key: 'encode',
    value() {
      const r = this.bytes; const i = r.shift() - 105; const o = rt.SET_BY_CODE[i]
      if (o === void 0)
        throw new RangeError('The encoding does not start with a start character.')
      this.shouldEncodeAsEan128() === !0 && r.unshift(rt.FNC1)
      const a = e.next(r, 1, o)
      return {
        text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
        data: e.getBar(i) + a.result + e.getBar((a.checksum + i) % rt.MODULO) + e.getBar(rt.STOP),
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
      return rt.BARS[r] ? rt.BARS[r].toString() : ''
    },
  }, {
    key: 'correctIndex',
    value(r, i) {
      if (i === rt.SET_A) {
        const o = r.shift()
        return o < 32 ? o + 64 : o - 32
      } else {
        return i === rt.SET_B ? r.shift() - 32 : (r.shift() - 48) * 10 + r.shift() - 48
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
        const l = rt.SWAP[s]
        l !== void 0 ? a = e.next(r, i + 1, l) : ((o === rt.SET_A || o === rt.SET_B) && s === rt.SHIFT && (r[0] = o === rt.SET_A ? r[0] > 95 ? r[0] - 96 : r[0] : r[0] < 32 ? r[0] + 96 : r[0]), a = e.next(r, i + 1, o))
      } else {
        s = e.correctIndex(r, o), a = e.next(r, i + 1, o)
      }
      const c = e.getBar(s); const u = s * i
      return {
        result: c + a.result,
        checksum: u + a.checksum,
      }
    },
  }]), e
}(bd.default))
nn.default = xd
const ai = {}
Object.defineProperty(ai, '__esModule', {
  value: !0,
})
const Tt = Ce; function Ea(e) {
  return e.match(new RegExp(`^${Tt.A_CHARS}*`))[0].length
} function ka(e) {
  return e.match(new RegExp(`^${Tt.B_CHARS}*`))[0].length
} function Ca(e) {
  return e.match(new RegExp(`^${Tt.C_CHARS}*`))[0]
}
function si(t, e) {
  const n = e ? Tt.A_CHARS : Tt.B_CHARS; const r = t.match(new RegExp(`^(${n}+?)(([0-9]{2}){2,})([^0-9]|$)`))
  if (r)
    return r[1] + String.fromCharCode(204) + Aa(t.substring(r[1].length))
  const i = t.match(new RegExp(`^${n}+`))[0]
  return i.length === t.length ? t : i + String.fromCharCode(e ? 205 : 206) + si(t.substring(i.length), !e)
}
function Aa(t) {
  const e = Ca(t); const n = e.length
  if (n === t.length)
    return t
  t = t.substring(n)
  const r = Ea(t) >= ka(t)
  return e + String.fromCharCode(r ? 206 : 205) + si(t, r)
}
ai.default = function (t) {
  let e = void 0; const n = Ca(t).length
  if (n >= 2) {
    e = Tt.C_START_CHAR + Aa(t)
  } else {
    const r = Ea(t) > ka(t)
    e = (r ? Tt.A_START_CHAR : Tt.B_START_CHAR) + si(t, r)
  }
  return e.replace(
    /[\xCD\xCE]([\s\S])[\xCD\xCE]/,
    (i, o) => {
      return String.fromCharCode(203) + o
    },
  )
}
Object.defineProperty(oi, '__esModule', {
  value: !0,
})
const Ed = nn; const kd = Ra(Ed); const Cd = ai; const Ad = Ra(Cd)
function Ra(t) {
  return t && t.__esModule ? t : { default: t }
}
function Rd(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function br(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Dd(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Pd = (function (t) {
  Dd(e, t)
  function e(n, r) {
    if (Rd(this, e), /^[\x00-\x7F\xC8-\xD3]+$/.test(n))
      var i = br(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, (0, Ad.default)(n), r))
    else
      var i = br(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    return br(i)
  }
  return e
}(kd.default))
oi.default = Pd
const li = {}
Object.defineProperty(li, '__esModule', {
  value: !0,
})
const Td = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Md = nn; const Id = Fd(Md); const fo = Ce
function Fd(t) {
  return t && t.__esModule ? t : { default: t }
}
function jd(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Vd(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Ld(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Bd = (function (t) {
  Ld(e, t)
  function e(n, r) {
    return jd(this, e), Vd(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, fo.A_START_CHAR + n, r))
  }
  return Td(e, [{
    key: 'valid',
    value() {
      return new RegExp(`^${fo.A_CHARS}+$`).test(this.data)
    },
  }]), e
}(Id.default))
li.default = Bd
const ui = {}
Object.defineProperty(ui, '__esModule', {
  value: !0,
})
const Nd = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const zd = nn; const Ud = qd(zd); const ho = Ce
function qd(t) {
  return t && t.__esModule ? t : { default: t }
}
function Hd(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Gd(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Yd(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Wd = (function (t) {
  Yd(e, t)
  function e(n, r) {
    return Hd(this, e), Gd(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, ho.B_START_CHAR + n, r))
  }
  return Nd(e, [{
    key: 'valid',
    value() {
      return new RegExp(`^${ho.B_CHARS}+$`).test(this.data)
    },
  }]), e
}(Ud.default))
ui.default = Wd
const ci = {}
Object.defineProperty(ci, '__esModule', {
  value: !0,
})
const Xd = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Kd = nn; const Jd = Zd(Kd); const po = Ce
function Zd(t) {
  return t && t.__esModule ? t : { default: t }
}
function Qd(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function eh(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function th(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const nh = (function (t) {
  th(e, t)
  function e(n, r) {
    return Qd(this, e), eh(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, po.C_START_CHAR + n, r))
  }
  return Xd(e, [{
    key: 'valid',
    value() {
      return new RegExp(`^${po.C_CHARS}+$`).test(this.data)
    },
  }]), e
}(Jd.default))
ci.default = nh
Object.defineProperty(yt, '__esModule', {
  value: !0,
})
yt.CODE128C = yt.CODE128B = yt.CODE128A = yt.CODE128 = void 0
const rh = oi; const ih = tr(rh); const oh = li; const ah = tr(oh); const sh = ui; const lh = tr(sh); const uh = ci; const ch = tr(uh)
function tr(t) {
  return t && t.__esModule ? t : { default: t }
}
yt.CODE128 = ih.default
yt.CODE128A = ah.default
yt.CODE128B = lh.default
yt.CODE128C = ch.default
const Qe = {}; const fi = {}; const dt = {}
Object.defineProperty(dt, '__esModule', {
  value: !0,
})
dt.SIDE_BIN = '101'
dt.MIDDLE_BIN = '01010'
dt.BINARIES = {
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
dt.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG']
dt.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG']
dt.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL']
const nr = {}; const qt = {}
Object.defineProperty(qt, '__esModule', {
  value: !0,
})
const fh = dt; function dh(e, n, r) {
  let i = e.split('').map((a, s) => {
    return fh.BINARIES[n[s]]
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
qt.default = dh
Object.defineProperty(nr, '__esModule', {
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
}()); const Yt = dt; const ph = qt; const mo = Da(ph); const mh = tt; const gh = Da(mh)
function Da(t) {
  return t && t.__esModule ? t : { default: t }
}
function vh(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function _h(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function yh(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const bh = (function (t) {
  yh(e, t)
  function e(n, r) {
    vh(this, e)
    const i = _h(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    return i.fontSize = !r.flat && r.fontSize > r.width * 10 ? r.width * 10 : r.fontSize, i.guardHeight = r.height + i.fontSize / 2 + r.textMargin, i
  }
  return hh(e, [{
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
      return (0, mo.default)(r, i)
    },
  }, {
    key: 'rightText',
    value(r, i) {
      return this.text.substr(r, i)
    },
  }, {
    key: 'rightEncode',
    value(r, i) {
      return (0, mo.default)(r, i)
    },
  }, {
    key: 'encodeGuarded',
    value() {
      const r = { fontSize: this.fontSize }; const i = { height: this.guardHeight }
      return [{ data: Yt.SIDE_BIN, options: i }, { data: this.leftEncode(), text: this.leftText(), options: r }, { data: Yt.MIDDLE_BIN, options: i }, { data: this.rightEncode(), text: this.rightText(), options: r }, { data: Yt.SIDE_BIN, options: i }]
    },
  }, {
    key: 'encodeFlat',
    value() {
      const r = [Yt.SIDE_BIN, this.leftEncode(), Yt.MIDDLE_BIN, this.rightEncode(), Yt.SIDE_BIN]
      return {
        data: r.join(''),
        text: this.text,
      }
    },
  }]), e
}(gh.default))
nr.default = bh
Object.defineProperty(fi, '__esModule', {
  value: !0,
})
const wh = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); function hn(e, n, r) {
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
} const $h = dt; const Sh = nr; const Oh = xh(Sh)
function xh(t) {
  return t && t.__esModule ? t : { default: t }
}
function Eh(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function kh(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Ch(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function go(e) {
  const n = e.substr(0, 12).split('').map((r) => {
    return +r
  }).reduce((r, i, o) => {
    return o % 2 ? r + i * 3 : r + i
  }, 0)
  return (10 - n % 10) % 10
} const Ah = (function (t) {
  Ch(e, t)
  function e(n, r) {
    Eh(this, e), n.search(/^\d{12}$/) !== -1 && (n += go(n))
    const i = kh(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    return i.lastChar = r.lastChar, i
  }
  return wh(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{13}$/) !== -1 && +this.data[12] === go(this.data)
    },
  }, {
    key: 'leftText',
    value() {
      return hn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'leftText', this).call(this, 1, 6)
    },
  }, {
    key: 'leftEncode',
    value() {
      const r = this.data.substr(1, 6); const i = $h.EAN13_STRUCTURE[this.data[0]]
      return hn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'leftEncode', this).call(this, r, i)
    },
  }, {
    key: 'rightText',
    value() {
      return hn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'rightText', this).call(this, 7, 6)
    },
  }, {
    key: 'rightEncode',
    value() {
      const r = this.data.substr(7, 6)
      return hn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'rightEncode', this).call(this, r, 'RRRRRR')
    },
  }, {
    key: 'encodeGuarded',
    value() {
      const r = hn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'encodeGuarded', this).call(this)
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
}(Oh.default))
fi.default = Ah
const di = {}
Object.defineProperty(di, '__esModule', {
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
}()); function Pn(e, n, r) {
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
} const Dh = nr; const Ph = Th(Dh)
function Th(t) {
  return t && t.__esModule ? t : { default: t }
}
function Mh(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Ih(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Fh(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function vo(e) {
  const n = e.substr(0, 7).split('').map((r) => {
    return +r
  }).reduce((r, i, o) => {
    return o % 2 ? r + i : r + i * 3
  }, 0)
  return (10 - n % 10) % 10
} const jh = (function (t) {
  Fh(e, t)
  function e(n, r) {
    return Mh(this, e), n.search(/^\d{7}$/) !== -1 && (n += vo(n)), Ih(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return Rh(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{8}$/) !== -1 && +this.data[7] === vo(this.data)
    },
  }, {
    key: 'leftText',
    value() {
      return Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'leftText', this).call(this, 0, 4)
    },
  }, {
    key: 'leftEncode',
    value() {
      const r = this.data.substr(0, 4)
      return Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'leftEncode', this).call(this, r, 'LLLL')
    },
  }, {
    key: 'rightText',
    value() {
      return Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'rightText', this).call(this, 4, 4)
    },
  }, {
    key: 'rightEncode',
    value() {
      const r = this.data.substr(4, 4)
      return Pn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'rightEncode', this).call(this, r, 'RRRR')
    },
  }]), e
}(Ph.default))
di.default = jh
const hi = {}
Object.defineProperty(hi, '__esModule', {
  value: !0,
})
const Vh = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Lh = dt; const Bh = qt; const Nh = Pa(Bh); const zh = tt; const Uh = Pa(zh)
function Pa(t) {
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
function Yh(e) {
  const n = e.split('').map((r) => {
    return +r
  }).reduce((r, i, o) => {
    return o % 2 ? r + i * 9 : r + i * 3
  }, 0)
  return n % 10
} const Wh = (function (t) {
  Gh(e, t)
  function e(n, r) {
    return qh(this, e), Hh(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return Vh(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{5}$/) !== -1
    },
  }, {
    key: 'encode',
    value() {
      const r = Lh.EAN5_STRUCTURE[Yh(this.data)]
      return {
        data: `1011${(0, Nh.default)(this.data, r, '01')}`,
        text: this.text,
      }
    },
  }]), e
}(Uh.default))
hi.default = Wh
const pi = {}
Object.defineProperty(pi, '__esModule', {
  value: !0,
})
const Xh = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Kh = dt; const Jh = qt; const Zh = Ta(Jh); const Qh = tt; const ep = Ta(Qh)
function Ta(t) {
  return t && t.__esModule ? t : { default: t }
}
function tp(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function np(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function rp(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const ip = (function (t) {
  rp(e, t)
  function e(n, r) {
    return tp(this, e), np(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return Xh(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{2}$/) !== -1
    },
  }, {
    key: 'encode',
    value() {
      const r = Kh.EAN2_STRUCTURE[Number.parseInt(this.data) % 4]
      return {
        data: `1011${(0, Zh.default)(this.data, r, '01')}`,
        text: this.text,
      }
    },
  }]), e
}(ep.default))
pi.default = ip
const On = {}
Object.defineProperty(On, '__esModule', {
  value: !0,
})
const op = (function () {
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
On.checksum = jr
const ap = qt; const Wt = Ma(ap); const sp = tt; const lp = Ma(sp)
function Ma(t) {
  return t && t.__esModule ? t : { default: t }
}
function up(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function cp(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function fp(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const dp = (function (t) {
  fp(e, t)
  function e(n, r) {
    up(this, e), n.search(/^\d{11}$/) !== -1 && (n += jr(n))
    const i = cp(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    return i.displayValue = r.displayValue, r.fontSize > r.width * 10 ? i.fontSize = r.width * 10 : i.fontSize = r.fontSize, i.guardHeight = r.height + i.fontSize / 2 + r.textMargin, i
  }
  return op(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{12}$/) !== -1 && this.data[11] == jr(this.data)
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
      return r += '101', r += (0, Wt.default)(this.data.substr(0, 6), 'LLLLLL'), r += '01010', r += (0, Wt.default)(this.data.substr(6, 6), 'RRRRRR'), r += '101', {
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
        data: `101${(0, Wt.default)(this.data[0], 'L')}`,
        options: { height: this.guardHeight },
      }), r.push({
        data: (0, Wt.default)(this.data.substr(1, 5), 'LLLLL'),
        text: this.text.substr(1, 5),
        options: { fontSize: this.fontSize },
      }), r.push({
        data: '01010',
        options: { height: this.guardHeight },
      }), r.push({
        data: (0, Wt.default)(this.data.substr(6, 5), 'RRRRR'),
        text: this.text.substr(6, 5),
        options: { fontSize: this.fontSize },
      }), r.push({
        data: `${(0, Wt.default)(this.data[11], 'R')}101`,
        options: { height: this.guardHeight },
      }), this.displayValue && r.push({
        data: '00000000',
        text: this.text.substr(11, 1),
        options: { textAlign: 'right', fontSize: this.fontSize },
      }), r
    },
  }]), e
}(lp.default))
function jr(t) {
  let e = 0; let n
  for (n = 1; n < 11; n += 2)
    e += Number.parseInt(t[n])
  for (n = 0; n < 11; n += 2)
    e += Number.parseInt(t[n]) * 3
  return (10 - e % 10) % 10
}
On.default = dp
const mi = {}
Object.defineProperty(mi, '__esModule', {
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
}()); const pp = qt; const mp = Ia(pp); const gp = tt; const vp = Ia(gp); const _p = On
function Ia(t) {
  return t && t.__esModule ? t : { default: t }
}
function yp(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function wr(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function bp(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const wp = ['XX00000XXX', 'XX10000XXX', 'XX20000XXX', 'XXX00000XX', 'XXXX00000X', 'XXXXX00005', 'XXXXX00006', 'XXXXX00007', 'XXXXX00008', 'XXXXX00009']; const $p = [['EEEOOO', 'OOOEEE'], ['EEOEOO', 'OOEOEE'], ['EEOOEO', 'OOEEOE'], ['EEOOOE', 'OOEEEO'], ['EOEEOO', 'OEOOEE'], ['EOOEEO', 'OEEOOE'], ['EOOOEE', 'OEEEOO'], ['EOEOEO', 'OEOEOE'], ['EOEOOE', 'OEOEEO'], ['EOOEOE', 'OEEOEO']]; const Sp = (function (t) {
  bp(e, t)
  function e(n, r) {
    yp(this, e)
    const i = wr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    if (i.isValid = !1, n.search(/^\d{6}$/) !== -1) {
      i.middleDigits = n, i.upcA = _o(n, '0'), i.text = r.text || `${i.upcA[0]}${n}${i.upcA[i.upcA.length - 1]}`, i.isValid = !0
    } else if (n.search(/^[01]\d{7}$/) !== -1) {
      if (i.middleDigits = n.substring(1, n.length - 1), i.upcA = _o(i.middleDigits, n[0]), i.upcA[i.upcA.length - 1] === n[n.length - 1])
        i.isValid = !0
      else
        return wr(i)
    } else {
      return wr(i)
    }
    return i.displayValue = r.displayValue, r.fontSize > r.width * 10 ? i.fontSize = r.width * 10 : i.fontSize = r.fontSize, i.guardHeight = r.height + i.fontSize / 2 + r.textMargin, i
  }
  return hp(e, [{
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
      const r = this.upcA[0]; const i = this.upcA[this.upcA.length - 1]; const o = $p[Number.parseInt(i)][Number.parseInt(r)]
      return (0, mp.default)(this.middleDigits, o)
    },
  }]), e
}(vp.default))
function _o(t, e) {
  for (var n = Number.parseInt(t[t.length - 1]), r = wp[n], i = '', o = 0, a = 0; a < r.length; a++) {
    const s = r[a]
    s === 'X' ? i += t[o++] : i += s
  }
  return i = `${e}${i}`, `${i}${(0, _p.checksum)(i)}`
}
mi.default = Sp
Object.defineProperty(Qe, '__esModule', {
  value: !0,
})
Qe.UPCE = Qe.UPC = Qe.EAN2 = Qe.EAN5 = Qe.EAN8 = Qe.EAN13 = void 0
const Op = fi; const xp = rn(Op); const Ep = di; const kp = rn(Ep); const Cp = hi; const Ap = rn(Cp); const Rp = pi; const Dp = rn(Rp); const Pp = On; const Tp = rn(Pp); const Mp = mi; const Ip = rn(Mp)
function rn(t) {
  return t && t.__esModule ? t : { default: t }
}
Qe.EAN13 = xp.default
Qe.EAN8 = kp.default
Qe.EAN5 = Ap.default
Qe.EAN2 = Dp.default
Qe.UPC = Tp.default
Qe.UPCE = Ip.default
const tn = {}; const rr = {}; const xn = {}
Object.defineProperty(xn, '__esModule', {
  value: !0,
})
xn.START_BIN = '1010'
xn.END_BIN = '11101'
xn.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010']
Object.defineProperty(rr, '__esModule', {
  value: !0,
})
const Fp = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Tn = xn; const jp = tt; const Vp = Lp(jp)
function Lp(t) {
  return t && t.__esModule ? t : { default: t }
}
function Bp(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Np(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function zp(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Up = (function (t) {
  zp(e, t)
  function e() {
    return Bp(this, e), Np(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
  }
  return Fp(e, [{
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
}(Vp.default))
rr.default = Up
const gi = {}
Object.defineProperty(gi, '__esModule', {
  value: !0,
})
const qp = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Hp = rr; const Gp = Yp(Hp)
function Yp(t) {
  return t && t.__esModule ? t : { default: t }
}
function Wp(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Xp(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Kp(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function yo(e) {
  const n = e.substr(0, 13).split('').map((r) => {
    return Number.parseInt(r, 10)
  }).reduce((r, i, o) => {
    return r + i * (3 - o % 2 * 2)
  }, 0)
  return Math.ceil(n / 10) * 10 - n
} const Jp = (function (t) {
  Kp(e, t)
  function e(n, r) {
    return Wp(this, e), n.search(/^\d{13}$/) !== -1 && (n += yo(n)), Xp(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return qp(e, [{
    key: 'valid',
    value() {
      return this.data.search(/^\d{14}$/) !== -1 && +this.data[13] === yo(this.data)
    },
  }]), e
}(Gp.default))
gi.default = Jp
Object.defineProperty(tn, '__esModule', {
  value: !0,
})
tn.ITF14 = tn.ITF = void 0
const Zp = rr; const Qp = Fa(Zp); const em = gi; const tm = Fa(em)
function Fa(t) {
  return t && t.__esModule ? t : { default: t }
}
tn.ITF = Qp.default
tn.ITF14 = tm.default
const lt = {}; const Ht = {}
Object.defineProperty(Ht, '__esModule', {
  value: !0,
})
const nm = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const rm = tt; const im = om(rm)
function om(t) {
  return t && t.__esModule ? t : { default: t }
}
function am(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function sm(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function lm(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const um = (function (t) {
  lm(e, t)
  function e(n, r) {
    return am(this, e), sm(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return nm(e, [{
    key: 'encode',
    value() {
      for (var r = '110', i = 0; i < this.data.length; i++) {
        const o = Number.parseInt(this.data[i]); let a = o.toString(2)
        a = cm(a, 4 - a.length)
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
}(im.default))
function cm(t, e) {
  for (let n = 0; n < e; n++)
    t = `0${t}`
  return t
}
Ht.default = um
const vi = {}; const Gt = {}
Object.defineProperty(Gt, '__esModule', {
  value: !0,
})
Gt.mod10 = fm
Gt.mod11 = dm
function fm(t) {
  for (var e = 0, n = 0; n < t.length; n++) {
    const r = Number.parseInt(t[n]);
    (n + t.length) % 2 === 0 ? e += r : e += r * 2 % 10 + Math.floor(r * 2 / 10)
  }
  return (10 - e % 10) % 10
}
function dm(t) {
  for (var e = 0, n = [2, 3, 4, 5, 6, 7], r = 0; r < t.length; r++) {
    const i = Number.parseInt(t[t.length - 1 - r])
    e += n[r % n.length] * i
  }
  return (11 - e % 11) % 11
}
Object.defineProperty(vi, '__esModule', {
  value: !0,
})
const hm = Ht; const pm = gm(hm); const mm = Gt
function gm(t) {
  return t && t.__esModule ? t : { default: t }
}
function vm(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function _m(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function ym(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const bm = (function (t) {
  ym(e, t)
  function e(n, r) {
    return vm(this, e), _m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n + (0, mm.mod10)(n), r))
  }
  return e
}(pm.default))
vi.default = bm
const _i = {}
Object.defineProperty(_i, '__esModule', {
  value: !0,
})
const wm = Ht; const $m = Om(wm); const Sm = Gt
function Om(t) {
  return t && t.__esModule ? t : { default: t }
}
function xm(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Em(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function km(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Cm = (function (t) {
  km(e, t)
  function e(n, r) {
    return xm(this, e), Em(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n + (0, Sm.mod11)(n), r))
  }
  return e
}($m.default))
_i.default = Cm
const yi = {}
Object.defineProperty(yi, '__esModule', {
  value: !0,
})
const Am = Ht; const Rm = Dm(Am); const bo = Gt
function Dm(t) {
  return t && t.__esModule ? t : { default: t }
}
function Pm(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Tm(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Mm(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const Im = (function (t) {
  Mm(e, t)
  function e(n, r) {
    return Pm(this, e), n += (0, bo.mod10)(n), n += (0, bo.mod10)(n), Tm(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return e
}(Rm.default))
yi.default = Im
const bi = {}
Object.defineProperty(bi, '__esModule', {
  value: !0,
})
const Fm = Ht; const jm = Vm(Fm); const wo = Gt
function Vm(t) {
  return t && t.__esModule ? t : { default: t }
}
function Lm(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Bm(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Nm(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const zm = (function (t) {
  Nm(e, t)
  function e(n, r) {
    return Lm(this, e), n += (0, wo.mod11)(n), n += (0, wo.mod10)(n), Bm(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return e
}(jm.default))
bi.default = zm
Object.defineProperty(lt, '__esModule', {
  value: !0,
})
lt.MSI1110 = lt.MSI1010 = lt.MSI11 = lt.MSI10 = lt.MSI = void 0
const Um = Ht; const qm = En(Um); const Hm = vi; const Gm = En(Hm); const Ym = _i; const Wm = En(Ym); const Xm = yi; const Km = En(Xm); const Jm = bi; const Zm = En(Jm)
function En(t) {
  return t && t.__esModule ? t : { default: t }
}
lt.MSI = qm.default
lt.MSI10 = Gm.default
lt.MSI11 = Wm.default
lt.MSI1010 = Km.default
lt.MSI1110 = Zm.default
const ir = {}
Object.defineProperty(ir, '__esModule', {
  value: !0,
})
ir.pharmacode = void 0
const Qm = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const eg = tt; const tg = ng(eg)
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
    rg(this, e)
    const i = ig(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
    return i.number = Number.parseInt(n, 10), i
  }
  return Qm(e, [{
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
}(tg.default))
ir.pharmacode = ag
const or = {}
Object.defineProperty(or, '__esModule', {
  value: !0,
})
or.codabar = void 0
const sg = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const lg = tt; const ug = cg(lg)
function cg(t) {
  return t && t.__esModule ? t : { default: t }
}
function fg(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function dg(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function hg(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const pg = (function (t) {
  hg(e, t)
  function e(n, r) {
    fg(this, e), n.search(/^[0-9\-$:.+/]+$/) === 0 && (n = `A${n}A`)
    const i = dg(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n.toUpperCase(), r))
    return i.text = i.options.text || i.text.replace(/[A-D]/g, ''), i
  }
  return sg(e, [{
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
}(ug.default))
or.codabar = pg
const ar = {}
Object.defineProperty(ar, '__esModule', {
  value: !0,
})
ar.GenericBarcode = void 0
const mg = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const gg = tt; const vg = _g(gg)
function _g(t) {
  return t && t.__esModule ? t : { default: t }
}
function yg(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function bg(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function wg(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const $g = (function (t) {
  wg(e, t)
  function e(n, r) {
    return yg(this, e), bg(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r))
  }
  return mg(e, [{
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
}(vg.default))
ar.GenericBarcode = $g
Object.defineProperty(ii, '__esModule', {
  value: !0,
})
const Sg = er; const Mn = yt; const Xt = Qe; const $o = tn; const pn = lt; const Og = ir; const xg = or; const Eg = ar
ii.default = {
  CODE39: Sg.CODE39,
  CODE128: Mn.CODE128,
  CODE128A: Mn.CODE128A,
  CODE128B: Mn.CODE128B,
  CODE128C: Mn.CODE128C,
  EAN13: Xt.EAN13,
  EAN8: Xt.EAN8,
  EAN5: Xt.EAN5,
  EAN2: Xt.EAN2,
  UPC: Xt.UPC,
  UPCE: Xt.UPCE,
  ITF14: $o.ITF14,
  ITF: $o.ITF,
  MSI: pn.MSI,
  MSI10: pn.MSI10,
  MSI11: pn.MSI11,
  MSI1010: pn.MSI1010,
  MSI1110: pn.MSI1110,
  pharmacode: Og.pharmacode,
  codabar: xg.codabar,
  GenericBarcode: Eg.GenericBarcode,
}
const on = {}
Object.defineProperty(on, '__esModule', {
  value: !0,
})
const kg = Object.assign || function (t) {
  for (let e = 1; e < arguments.length; e++) {
    const n = arguments[e]
    for (const r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
  }
  return t
}
on.default = function (t, e) {
  return kg({}, t, e)
}
const wi = {}
Object.defineProperty(wi, '__esModule', {
  value: !0,
})
wi.default = Cg
function Cg(t) {
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
const $i = {}
Object.defineProperty($i, '__esModule', {
  value: !0,
})
$i.default = Ag
function Ag(t) {
  return t.marginTop = t.marginTop || t.margin, t.marginBottom = t.marginBottom || t.margin, t.marginRight = t.marginRight || t.margin, t.marginLeft = t.marginLeft || t.margin, t
}
const Si = {}; const Oi = {}; const sr = {}
Object.defineProperty(sr, '__esModule', {
  value: !0,
})
sr.default = Rg
function Rg(t) {
  const e = ['width', 'height', 'textMargin', 'fontSize', 'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight']
  for (let n in e)
    e.hasOwnProperty(n) && (n = e[n], typeof t[n] == 'string' && (t[n] = Number.parseInt(t[n], 10)))
  return typeof t.displayValue == 'string' && (t.displayValue = t.displayValue != 'false'), t
}
const lr = {}
Object.defineProperty(lr, '__esModule', {
  value: !0,
})
const Dg = {
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
lr.default = Dg
Object.defineProperty(Oi, '__esModule', {
  value: !0,
})
const Pg = sr; const Tg = ja(Pg); const Mg = lr; const So = ja(Mg)
function ja(t) {
  return t && t.__esModule ? t : { default: t }
}
function Ig(t) {
  let e = {}
  for (const n in So.default)
    So.default.hasOwnProperty(n) && (t.hasAttribute(`jsbarcode-${n.toLowerCase()}`) && (e[n] = t.getAttribute(`jsbarcode-${n.toLowerCase()}`)), t.hasAttribute(`data-${n.toLowerCase()}`) && (e[n] = t.getAttribute(`data-${n.toLowerCase()}`)))
  return e.value = t.getAttribute('jsbarcode-value') || t.getAttribute('data-value'), e = (0, Tg.default)(e), e
}
Oi.default = Ig
const xi = {}; const Ei = {}; const it = {}
Object.defineProperty(it, '__esModule', {
  value: !0,
})
it.getTotalWidthOfEncodings = it.calculateEncodingAttributes = it.getBarcodePadding = it.getEncodingHeight = it.getMaximumHeightOfEncodings = void 0
const Fg = on; const jg = Vg(Fg)
function Vg(t) {
  return t && t.__esModule ? t : { default: t }
}
function Va(t, e) {
  return e.height + (e.displayValue && t.text.length > 0 ? e.fontSize + e.textMargin : 0) + e.marginTop + e.marginBottom
}
function La(t, e, n) {
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
function Lg(t, e, n) {
  for (let r = 0; r < t.length; r++) {
    const i = t[r]; const o = (0, jg.default)(e, i.options); var a
    o.displayValue ? a = zg(i.text, o, n) : a = 0
    const s = i.data.length * o.width
    i.width = Math.ceil(Math.max(a, s)), i.height = Va(i, o), i.barcodePadding = La(a, s, o)
  }
}
function Bg(t) {
  for (var e = 0, n = 0; n < t.length; n++)
    e += t[n].width
  return e
}
function Ng(t) {
  for (var e = 0, n = 0; n < t.length; n++)
    t[n].height > e && (e = t[n].height)
  return e
}
function zg(t, e, n) {
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
it.getMaximumHeightOfEncodings = Ng
it.getEncodingHeight = Va
it.getBarcodePadding = La
it.calculateEncodingAttributes = Lg
it.getTotalWidthOfEncodings = Bg
Object.defineProperty(Ei, '__esModule', {
  value: !0,
})
const Ug = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const qg = on; const Hg = Gg(qg); const $r = it
function Gg(t) {
  return t && t.__esModule ? t : { default: t }
}
function Yg(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
const Wg = (function () {
  function t(e, n, r) {
    Yg(this, t), this.canvas = e, this.encodings = n, this.options = r
  }
  return Ug(t, [{
    key: 'render',
    value() {
      if (!this.canvas.getContext)
        throw new Error('The browser does not support canvas.')
      this.prepareCanvas()
      for (let n = 0; n < this.encodings.length; n++) {
        const r = (0, Hg.default)(this.options, this.encodings[n].options)
        this.drawCanvasBarcode(r, this.encodings[n]), this.drawCanvasText(r, this.encodings[n]), this.moveCanvasDrawing(this.encodings[n])
      }
      this.restoreCanvas()
    },
  }, {
    key: 'prepareCanvas',
    value() {
      const n = this.canvas.getContext('2d')
      n.save(), (0, $r.calculateEncodingAttributes)(this.encodings, this.options, n)
      const r = (0, $r.getTotalWidthOfEncodings)(this.encodings); const i = (0, $r.getMaximumHeightOfEncodings)(this.encodings)
      this.canvas.width = r + this.options.marginLeft + this.options.marginRight, this.canvas.height = i, n.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (n.fillStyle = this.options.background, n.fillRect(0, 0, this.canvas.width, this.canvas.height)), n.translate(this.options.marginLeft, 0)
    },
  }, {
    key: 'drawCanvasBarcode',
    value(n, r) {
      const i = this.canvas.getContext('2d'); const o = r.data; let a
      n.textPosition == 'top' ? a = n.marginTop + n.fontSize + n.textMargin : a = n.marginTop, i.fillStyle = n.lineColor
      for (let s = 0; s < o.length; s++) {
        const l = s * n.width + r.barcodePadding
        o[s] === '1' ? i.fillRect(l, a, n.width, n.height) : o[s] && i.fillRect(l, a, n.width, n.height * o[s])
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
Ei.default = Wg
const ki = {}
Object.defineProperty(ki, '__esModule', {
  value: !0,
})
const Xg = (function () {
  function t(e, n) {
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  return function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e
  }
}()); const Kg = on; const Jg = Zg(Kg); const Sr = it
function Zg(t) {
  return t && t.__esModule ? t : { default: t }
}
function Qg(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
const In = 'http://www.w3.org/2000/svg'; const e0 = (function () {
  function t(e, n, r) {
    Qg(this, t), this.svg = e, this.encodings = n, this.options = r, this.document = r.xmlDocument || document
  }
  return Xg(t, [{
    key: 'render',
    value() {
      let n = this.options.marginLeft
      this.prepareSVG()
      for (let r = 0; r < this.encodings.length; r++) {
        const i = this.encodings[r]; const o = (0, Jg.default)(this.options, i.options); const a = this.createGroup(n, o.marginTop, this.svg)
        this.setGroupOptions(a, o), this.drawSvgBarcode(a, o, i), this.drawSVGText(a, o, i), n += i.width
      }
    },
  }, {
    key: 'prepareSVG',
    value() {
      for (; this.svg.firstChild;)
        this.svg.removeChild(this.svg.firstChild);
      (0, Sr.calculateEncodingAttributes)(this.encodings, this.options)
      const n = (0, Sr.getTotalWidthOfEncodings)(this.encodings); const r = (0, Sr.getMaximumHeightOfEncodings)(this.encodings); const i = n + this.options.marginLeft + this.options.marginRight
      this.setSvgAttributes(i, r), this.options.background && this.drawRect(0, 0, i, r, this.svg).setAttribute('style', `fill:${this.options.background};`)
    },
  }, {
    key: 'drawSvgBarcode',
    value(n, r, i) {
      const o = i.data; let a
      r.textPosition == 'top' ? a = r.fontSize + r.textMargin : a = 0
      for (var s = 0, l = 0, c = 0; c < o.length; c++)
        l = c * r.width + i.barcodePadding, o[c] === '1' ? s++ : s > 0 && (this.drawRect(l - r.width * s, a, r.width * s, r.height, n), s = 0)
      s > 0 && this.drawRect(l - r.width * (s - 1), a, r.width * s, r.height, n)
    },
  }, {
    key: 'drawSVGText',
    value(n, r, i) {
      const o = this.document.createElementNS(In, 'text')
      if (r.displayValue) {
        let a, s
        o.setAttribute('style', `font:${r.fontOptions} ${r.fontSize}px ${r.font}`), r.textPosition == 'top' ? s = r.fontSize - r.textMargin : s = r.height + r.textMargin + r.fontSize, r.textAlign == 'left' || i.barcodePadding > 0 ? (a = 0, o.setAttribute('text-anchor', 'start')) : r.textAlign == 'right' ? (a = i.width - 1, o.setAttribute('text-anchor', 'end')) : (a = i.width / 2, o.setAttribute('text-anchor', 'middle')), o.setAttribute('x', a), o.setAttribute('y', s), o.appendChild(this.document.createTextNode(i.text)), n.appendChild(o)
      }
    },
  }, {
    key: 'setSvgAttributes',
    value(n, r) {
      const i = this.svg
      i.setAttribute('width', `${n}px`), i.setAttribute('height', `${r}px`), i.setAttribute('x', '0px'), i.setAttribute('y', '0px'), i.setAttribute('viewBox', `0 0 ${n} ${r}`), i.setAttribute('xmlns', In), i.setAttribute('version', '1.1'), i.setAttribute('style', 'transform: translate(0,0)')
    },
  }, {
    key: 'createGroup',
    value(n, r, i) {
      const o = this.document.createElementNS(In, 'g')
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
      const s = this.document.createElementNS(In, 'rect')
      return s.setAttribute('x', n), s.setAttribute('y', r), s.setAttribute('width', i), s.setAttribute('height', o), a.appendChild(s), s
    },
  }]), t
}())
ki.default = e0
const Ci = {}
Object.defineProperty(Ci, '__esModule', {
  value: !0,
})
const t0 = (function () {
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
function n0(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
const r0 = (function () {
  function t(e, n, r) {
    n0(this, t), this.object = e, this.encodings = n, this.options = r
  }
  return t0(t, [{
    key: 'render',
    value() {
      this.object.encodings = this.encodings
    },
  }]), t
}())
Ci.default = r0
Object.defineProperty(xi, '__esModule', {
  value: !0,
})
const i0 = Ei; const o0 = Ai(i0); const a0 = ki; const s0 = Ai(a0); const l0 = Ci; const u0 = Ai(l0)
function Ai(t) {
  return t && t.__esModule ? t : { default: t }
}
xi.default = { CanvasRenderer: o0.default, SVGRenderer: s0.default, ObjectRenderer: u0.default }
const an = {}
Object.defineProperty(an, '__esModule', {
  value: !0,
})
function Ri(t, e) {
  if (!(t instanceof e))
    throw new TypeError('Cannot call a class as a function')
}
function Di(t, e) {
  if (!t)
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
  return e && (typeof e == 'object' || typeof e == 'function') ? e : t
}
function Pi(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`)
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
const c0 = (function (t) {
  Pi(e, t)
  function e(n, r) {
    Ri(this, e)
    const i = Di(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
    return i.name = 'InvalidInputException', i.symbology = n, i.input = r, i.message = `"${i.input}" is not a valid input for ${i.symbology}`, i
  }
  return e
}(Error)); const f0 = (function (t) {
  Pi(e, t)
  function e() {
    Ri(this, e)
    const n = Di(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
    return n.name = 'InvalidElementException', n.message = 'Not supported type to render on', n
  }
  return e
}(Error)); const d0 = (function (t) {
  Pi(e, t)
  function e() {
    Ri(this, e)
    const n = Di(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
    return n.name = 'NoElementException', n.message = 'No element to render on.', n
  }
  return e
}(Error))
an.InvalidInputException = c0
an.InvalidElementException = f0
an.NoElementException = d0
Object.defineProperty(Si, '__esModule', {
  value: !0,
})
const h0 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
  ? function (t) {
    return typeof t
  }
  : function (t) {
    return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
  }; const p0 = Oi; const Vr = Ba(p0); const m0 = xi; const mn = Ba(m0); const g0 = an
function Ba(t) {
  return t && t.__esModule ? t : { default: t }
}
function Ti(t) {
  if (typeof t == 'string')
    return v0(t)
  if (Array.isArray(t)) {
    for (var e = [], n = 0; n < t.length; n++)
      e.push(Ti(t[n]))
    return e
  } else {
    if (typeof HTMLCanvasElement < 'u' && t instanceof HTMLImageElement)
      return _0(t)
    if (t && t.nodeName && t.nodeName.toLowerCase() === 'svg' || typeof SVGElement < 'u' && t instanceof SVGElement) {
      return {
        element: t,
        options: (0, Vr.default)(t),
        renderer: mn.default.SVGRenderer,
      }
    }
    if (typeof HTMLCanvasElement < 'u' && t instanceof HTMLCanvasElement) {
      return {
        element: t,
        options: (0, Vr.default)(t),
        renderer: mn.default.CanvasRenderer,
      }
    }
    if (t && t.getContext) {
      return {
        element: t,
        renderer: mn.default.CanvasRenderer,
      }
    }
    if (t && (typeof t > 'u' ? 'undefined' : h0(t)) === 'object' && !t.nodeName) {
      return {
        element: t,
        renderer: mn.default.ObjectRenderer,
      }
    }
    throw new g0.InvalidElementException()
  }
}
function v0(t) {
  const e = document.querySelectorAll(t)
  if (e.length !== 0) {
    for (var n = [], r = 0; r < e.length; r++)
      n.push(Ti(e[r]))
    return n
  }
}
function _0(t) {
  const e = document.createElement('canvas')
  return {
    element: e,
    options: (0, Vr.default)(t),
    renderer: mn.default.CanvasRenderer,
    afterRender() {
      t.setAttribute('src', e.toDataURL())
    },
  }
}
Si.default = Ti
const Mi = {}
Object.defineProperty(Mi, '__esModule', {
  value: !0,
})
const y0 = (function () {
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
  function t(e) {
    b0(this, t), this.api = e
  }
  return y0(t, [{
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
Mi.default = w0
const $0 = ii; const Vt = It($0); const S0 = on; const kn = It(S0); const O0 = wi; const Na = It(O0); const x0 = $i; const Oo = It(x0); const E0 = Si; const k0 = It(E0); const C0 = sr; const A0 = It(C0); const R0 = Mi; const D0 = It(R0); const za = an; const P0 = lr; const Ua = It(P0)
function It(t) {
  return t && t.__esModule ? t : { default: t }
}
function Et() {
} function ur(e, n, r) {
  const i = new Et()
  if (typeof e > 'u')
    throw new Error('No element to render on was provided.')
  return i._renderProperties = (0, k0.default)(e), i._encodings = [], i._options = Ua.default, i._errorHandler = new D0.default(i), typeof n < 'u' && (r = r || {}, r.format || (r.format = Ha()), i.options(r)[r.format](n, r).render()), i
}
ur.getModule = function (t) {
  return Vt.default[t]
}
for (const xo in Vt.default)
  Vt.default.hasOwnProperty(xo) && T0(Vt.default, xo)
function T0(t, e) {
  Et.prototype[e] = Et.prototype[e.toUpperCase()] = Et.prototype[e.toLowerCase()] = function (n, r) {
    const i = this
    return i._errorHandler.wrapBarcodeCall(() => {
      r.text = typeof r.text > 'u' ? void 0 : `${r.text}`
      let o = (0, kn.default)(i._options, r)
      o = (0, A0.default)(o)
      const a = t[e]; const s = qa(n, a, o)
      return i._encodings.push(s), i
    })
  }
}
function qa(t, e, n) {
  t = `${t}`
  const r = new e(t, n)
  if (!r.valid())
    throw new za.InvalidInputException(r.constructor.name, t)
  let i = r.encode()
  i = (0, Na.default)(i)
  for (let o = 0; o < i.length; o++)
    i[o].options = (0, kn.default)(n, i[o].options)
  return i
}
function Ha() {
  return Vt.default.CODE128 ? 'CODE128' : Object.keys(Vt.default)[0]
}
Et.prototype.options = function (t) {
  return this._options = (0, kn.default)(this._options, t), this
}
Et.prototype.blank = function (t) {
  const e = new Array(t + 1).join('0')
  return this._encodings.push({ data: e }), this
}
Et.prototype.init = function () {
  if (this._renderProperties) {
    Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties])
    let t
    for (const e in this._renderProperties) {
      t = this._renderProperties[e]
      var n = (0, kn.default)(this._options, t.options)
      n.format == 'auto' && (n.format = Ha()), this._errorHandler.wrapBarcodeCall(() => {
        const r = n.value; const i = Vt.default[n.format.toUpperCase()]; const o = qa(r, i, n)
        Lr(t, o, n)
      })
    }
  }
}
Et.prototype.render = function () {
  if (!this._renderProperties)
    throw new za.NoElementException()
  if (Array.isArray(this._renderProperties)) {
    for (let t = 0; t < this._renderProperties.length; t++)
      Lr(this._renderProperties[t], this._encodings, this._options)
  } else {
    Lr(this._renderProperties, this._encodings, this._options)
  }
  return this
}
Et.prototype._defaults = Ua.default
function Lr(t, e, n) {
  e = (0, Na.default)(e)
  for (let r = 0; r < e.length; r++)
    e[r].options = (0, kn.default)(n, e[r].options), (0, Oo.default)(e[r].options);
  (0, Oo.default)(n)
  const i = t.renderer; const o = new i(t.element, e, n)
  o.render(), t.afterRender && t.afterRender()
}
typeof window < 'u' && (window.JsBarcode = ur)
typeof jQuery < 'u' && (jQuery.fn.JsBarcode = function (t, e) {
  const n = []
  return jQuery(this).each(function () {
    n.push(this)
  }), ur(n, t, e)
})
const M0 = ur
const I0 = ye({
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
          M0(this.$refs.bar, t || '', e)
        })
      },
      deep: !0,
      immediate: !0,
    },
  },
}); const F0 = {
  class: '_fc-barcode',
  ref: 'bar',
}
function j0(t, e, n, r, i, o) {
  return H(), oe('img', F0, null, 512)
}
const V0 = /* @__PURE__ */ Re(I0, [['render', j0]])
const L0 = ye({
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
          xt.loadDepend('mpegts').then(() => {
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
}); const B0 = ['controls', 'loop']
function N0(t, e, n, r, i, o) {
  return H(), oe('video', {
    ref: 'video',
    class: '_fc-video-box',
    controls: t.controls,
    loop: t.loop,
    onPause: e[0] || (e[0] = a => t.$emit('pause', a)),
    onPlay: e[1] || (e[1] = a => t.$emit('play', a)),
    onEnded: e[2] || (e[2] = a => t.$emit('ended', a)),
  }, null, 40, B0)
}
const z0 = /* @__PURE__ */ Re(L0, [['render', N0]])
const Ga = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r()
  })(Sn, () => (() => {
    const n = { 873: (a, s) => {
      let l; let c; const u = (function () {
        const p = function (D, E) {
          let $ = D; const d = M[E]; let f = null; let v = 0; let y = null; const g = []; const k = {}; const j = function (_, O) {
            f = (function (S) {
              for (var R = new Array(S), T = 0; T < S; T += 1) {
                R[T] = new Array(S)
                for (let W = 0; W < S; W += 1)
                  R[T][W] = null
              }
              return R
            }(v = 4 * $ + 17)), I(0, 0), I(v - 7, 0), I(0, v - 7), z(), q(), U(_, O), $ >= 7 && N(_), y == null && (y = x($, d, g)), C(y, O)
          }; var I = function (_, O) {
            for (let S = -1; S <= 7; S += 1) {
              if (!(_ + S <= -1 || v <= _ + S)) {
                for (let R = -1; R <= 7; R += 1)
                  O + R <= -1 || v <= O + R || (f[_ + S][O + R] = S >= 0 && S <= 6 && (R == 0 || R == 6) || R >= 0 && R <= 6 && (S == 0 || S == 6) || S >= 2 && S <= 4 && R >= 2 && R <= 4)
              }
            }
          }; var q = function () {
            for (let _ = 8; _ < v - 8; _ += 1)
              f[_][6] == null && (f[_][6] = _ % 2 == 0)
            for (let O = 8; O < v - 8; O += 1)
              f[6][O] == null && (f[6][O] = O % 2 == 0)
          }; var z = function () {
            for (let _ = V.getPatternPosition($), O = 0; O < _.length; O += 1) {
              for (let S = 0; S < _.length; S += 1) {
                const R = _[O]; const T = _[S]
                if (f[R][T] == null) {
                  for (let W = -2; W <= 2; W += 1) {
                    for (let K = -2; K <= 2; K += 1)
                      f[R + W][T + K] = W == -2 || W == 2 || K == -2 || K == 2 || W == 0 && K == 0
                  }
                }
              }
            }
          }; var N = function (_) {
            for (var O = V.getBCHTypeNumber($), S = 0; S < 18; S += 1) {
              var R = !_ && (O >> S & 1) == 1
              f[Math.floor(S / 3)][S % 3 + v - 8 - 3] = R
            }
            for (S = 0; S < 18; S += 1)
              R = !_ && (O >> S & 1) == 1, f[S % 3 + v - 8 - 3][Math.floor(S / 3)] = R
          }; var U = function (_, O) {
            for (var S = d << 3 | O, R = V.getBCHTypeInfo(S), T = 0; T < 15; T += 1) {
              var W = !_ && (R >> T & 1) == 1
              T < 6 ? f[T][8] = W : T < 8 ? f[T + 1][8] = W : f[v - 15 + T][8] = W
            }
            for (T = 0; T < 15; T += 1)
              W = !_ && (R >> T & 1) == 1, T < 8 ? f[8][v - T - 1] = W : T < 9 ? f[8][15 - T - 1 + 1] = W : f[8][15 - T - 1] = W
            f[v - 8][8] = !_
          }; var C = function (_, O) {
            for (let S = -1, R = v - 1, T = 7, W = 0, K = V.getMaskFunction(O), ae = v - 1; ae > 0; ae -= 2) {
              for (ae == 6 && (ae -= 1); ;) {
                for (let le = 0; le < 2; le += 1) {
                  if (f[R][ae - le] == null) {
                    let ce = !1
                    W < _.length && (ce = (_[W] >>> T & 1) == 1), K(R, ae - le) && (ce = !ce), f[R][ae - le] = ce, (T -= 1) == -1 && (W += 1, T = 7)
                  }
                }
                if ((R += S) < 0 || v <= R) {
                  R -= S, S = -S
                  break
                }
              }
            }
          }; var x = function (_, O, S) {
            for (var R = Q.getRSBlocks(_, O), T = Z(), W = 0; W < S.length; W += 1) {
              const K = S[W]
              T.put(K.getMode(), 4), T.put(K.getLength(), V.getLengthInBits(K.getMode(), _)), K.write(T)
            }
            let ae = 0
            for (W = 0; W < R.length; W += 1)
              ae += R[W].dataCount
            if (T.getLengthInBits() > 8 * ae)
              throw `code length overflow. (${T.getLengthInBits()}>${8 * ae})`
            for (T.getLengthInBits() + 4 <= 8 * ae && T.put(0, 4); T.getLengthInBits() % 8 != 0;)
              T.putBit(!1)
            for (; !(T.getLengthInBits() >= 8 * ae || (T.put(236, 8), T.getLengthInBits() >= 8 * ae));)
              T.put(17, 8)
            return (function (le, ce) {
              for (var ge = 0, ke = 0, we = 0, he = Array.from({ length: ce.length }), ve = Array.from({ length: ce.length }), te = 0; te < ce.length; te += 1) {
                const De = ce[te].dataCount; const je = ce[te].totalCount - De
                ke = Math.max(ke, De), we = Math.max(we, je), he[te] = new Array(De)
                for (var ue = 0; ue < he[te].length; ue += 1)
                  he[te][ue] = 255 & le.getBuffer()[ue + ge]
                ge += De
                const Ze = V.getErrorCorrectPolynomial(je); const Ye = G(he[te], Ze.getLength() - 1).mod(Ze)
                for (ve[te] = Array.from({ length: Ze.getLength() - 1 }), ue = 0; ue < ve[te].length; ue += 1) {
                  const Ue = ue + Ye.getLength() - ve[te].length
                  ve[te][ue] = Ue >= 0 ? Ye.getAt(Ue) : 0
                }
              }
              let Cn = 0
              for (ue = 0; ue < ce.length; ue += 1)
                Cn += ce[ue].totalCount
              const sn = new Array(Cn); let ht = 0
              for (ue = 0; ue < ke; ue += 1) {
                for (te = 0; te < ce.length; te += 1)
                  ue < he[te].length && (sn[ht] = he[te][ue], ht += 1)
              }
              for (ue = 0; ue < we; ue += 1) {
                for (te = 0; te < ce.length; te += 1)
                  ue < ve[te].length && (sn[ht] = ve[te][ue], ht += 1)
              }
              return sn
            }(T, R))
          }
          k.addData = function (_, O) {
            let S = null
            switch (O = O || 'Byte') {
              case 'Numeric':
                S = ee(_)
                break
              case 'Alphanumeric':
                S = Y(_)
                break
              case 'Byte':
                S = se(_)
                break
              case 'Kanji':
                S = ne(_)
                break
              default:
                throw `mode:${O}`
            }
            g.push(S), y = null
          }, k.isDark = function (_, O) {
            if (_ < 0 || v <= _ || O < 0 || v <= O)
              throw `${_},${O}`
            return f[_][O]
          }, k.getModuleCount = function () {
            return v
          }, k.make = function () {
            if ($ < 1) {
              for (var _ = 1; _ < 40; _++) {
                for (var O = Q.getRSBlocks(_, d), S = Z(), R = 0; R < g.length; R++) {
                  const T = g[R]
                  S.put(T.getMode(), 4), S.put(T.getLength(), V.getLengthInBits(T.getMode(), _)), T.write(S)
                }
                let W = 0
                for (R = 0; R < O.length; R++)
                  W += O[R].dataCount
                if (S.getLengthInBits() <= 8 * W)
                  break
              }
              $ = _
            }
            j(!1, (function () {
              for (var K = 0, ae = 0, le = 0; le < 8; le += 1) {
                j(!0, le)
                const ce = V.getLostPoint(k);
                (le == 0 || K > ce) && (K = ce, ae = le)
              }
              return ae
            }()))
          }, k.createTableTag = function (_, O) {
            _ = _ || 2
            let S = ''
            S += '<table style="', S += ' border-width: 0px; border-style: none;', S += ' border-collapse: collapse;', S += ` padding: 0px; margin: ${O = O === void 0 ? 4 * _ : O}px;`, S += '">', S += '<tbody>'
            for (let R = 0; R < k.getModuleCount(); R += 1) {
              S += '<tr>'
              for (let T = 0; T < k.getModuleCount(); T += 1)
                S += '<td style="', S += ' border-width: 0px; border-style: none;', S += ' border-collapse: collapse;', S += ' padding: 0px; margin: 0px;', S += ` width: ${_}px;`, S += ` height: ${_}px;`, S += ' background-color: ', S += k.isDark(R, T) ? '#000000' : '#ffffff', S += ';', S += '"/>'
              S += '</tr>'
            }
            return `${S += '</tbody>'}</table>`
          }, k.createSvgTag = function (_, O, S, R) {
            let T = {}
            typeof arguments[0] == 'object' && (_ = (T = arguments[0]).cellSize, O = T.margin, S = T.alt, R = T.title), _ = _ || 2, O = O === void 0 ? 4 * _ : O, (S = typeof S == 'string' ? { text: S } : S || {}).text = S.text || null, S.id = S.text ? S.id || 'qrcode-description' : null, (R = typeof R == 'string' ? { text: R } : R || {}).text = R.text || null, R.id = R.text ? R.id || 'qrcode-title' : null
            let W; let K; let ae; let le; const ce = k.getModuleCount() * _ + 2 * O; let ge = ''
            for (le = `l${_},0 0,${_} -${_},0 0,-${_}z `, ge += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', ge += T.scalable ? '' : ` width="${ce}px" height="${ce}px"`, ge += ` viewBox="0 0 ${ce} ${ce}" `, ge += ' preserveAspectRatio="xMinYMin meet"', ge += R.text || S.text ? ` role="img" aria-labelledby="${P([R.id, S.id].join(' ').trim())}"` : '', ge += '>', ge += R.text ? `<title id="${P(R.id)}">${P(R.text)}</title>` : '', ge += S.text ? `<description id="${P(S.id)}">${P(S.text)}</description>` : '', ge += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', ge += '<path d="', K = 0; K < k.getModuleCount(); K += 1) {
              for (ae = K * _ + O, W = 0; W < k.getModuleCount(); W += 1)
                k.isDark(K, W) && (ge += `M${W * _ + O},${ae}${le}`)
            }
            return `${ge += '" stroke="transparent" fill="black"/>'}</svg>`
          }, k.createDataURL = function (_, O) {
            _ = _ || 2, O = O === void 0 ? 4 * _ : O
            const S = k.getModuleCount() * _ + 2 * O; const R = O; const T = S - O
            return nt(S, S, (W, K) => {
              if (R <= W && W < T && R <= K && K < T) {
                const ae = Math.floor((W - R) / _); const le = Math.floor((K - R) / _)
                return k.isDark(le, ae) ? 0 : 1
              }
              return 1
            })
          }, k.createImgTag = function (_, O, S) {
            _ = _ || 2, O = O === void 0 ? 4 * _ : O
            const R = k.getModuleCount() * _ + 2 * O; let T = ''
            return T += '<img', T += ' src="', T += k.createDataURL(_, O), T += '"', T += ' width="', T += R, T += '"', T += ' height="', T += R, T += '"', S && (T += ' alt="', T += P(S), T += '"'), `${T}/>`
          }
          var P = function (_) {
            for (var O = '', S = 0; S < _.length; S += 1) {
              const R = _.charAt(S)
              switch (R) {
                case '<':
                  O += '&lt;'
                  break
                case '>':
                  O += '&gt;'
                  break
                case '&':
                  O += '&amp;'
                  break
                case '"':
                  O += '&quot;'
                  break
                default:
                  O += R
              }
            }
            return O
          }
          return k.createASCII = function (_, O) {
            if ((_ = _ || 1) < 2) {
              return (function (he) {
                he = he === void 0 ? 2 : he
                let ve; let te; let De; let je; let ue; const Ze = 1 * k.getModuleCount() + 2 * he; const Ye = he; const Ue = Ze - he; const Cn = { '\u2588\u2588': '\u2588', '\u2588 ': '\u2580', ' \u2588': '\u2584', '  ': ' ' }; const sn = { '\u2588\u2588': '\u2580', '\u2588 ': '\u2580', ' \u2588': ' ', '  ': ' ' }; let ht = ''
                for (ve = 0; ve < Ze; ve += 2) {
                  for (De = Math.floor((ve - Ye) / 1), je = Math.floor((ve + 1 - Ye) / 1), te = 0; te < Ze; te += 1)
                    ue = '\u2588', Ye <= te && te < Ue && Ye <= ve && ve < Ue && k.isDark(De, Math.floor((te - Ye) / 1)) && (ue = ' '), Ye <= te && te < Ue && Ye <= ve + 1 && ve + 1 < Ue && k.isDark(je, Math.floor((te - Ye) / 1)) ? ue += ' ' : ue += '\u2588', ht += he < 1 && ve + 1 >= Ue ? sn[ue] : Cn[ue]
                  ht += `
`
                }
                return Ze % 2 && he > 0 ? ht.substring(0, ht.length - Ze - 1) + new Array(Ze + 1).join('\u2580') : ht.substring(0, ht.length - 1)
              }(O))
            }
            _ -= 1, O = O === void 0 ? 2 * _ : O
            let S; let R; let T; let W; const K = k.getModuleCount() * _ + 2 * O; const ae = O; const le = K - O; const ce = new Array(_ + 1).join('\u2588\u2588'); const ge = new Array(_ + 1).join('  '); let ke = ''; let we = ''
            for (S = 0; S < K; S += 1) {
              for (T = Math.floor((S - ae) / _), we = '', R = 0; R < K; R += 1)
                W = 1, ae <= R && R < le && ae <= S && S < le && k.isDark(T, Math.floor((R - ae) / _)) && (W = 0), we += W ? ce : ge
              for (T = 0; T < _; T += 1) {
                ke += `${we}
`
              }
            }
            return ke.substring(0, ke.length - 1)
          }, k.renderTo2dContext = function (_, O) {
            O = O || 2
            for (let S = k.getModuleCount(), R = 0; R < S; R++) {
              for (let T = 0; T < S; T++)
                _.fillStyle = k.isDark(R, T) ? 'black' : 'white', _.fillRect(R * O, T * O, O, O)
            }
          }, k
        }
        p.stringToBytes = (p.stringToBytesFuncs = { default(D) {
          for (var E = [], $ = 0; $ < D.length; $ += 1) {
            const d = D.charCodeAt($)
            E.push(255 & d)
          }
          return E
        } }).default, p.createStringToBytes = function (D, E) {
          const $ = (function () {
            for (var f = Ee(D), v = function () {
                const q = f.read()
                if (q == -1)
                  throw 'eof'
                return q
              }, y = 0, g = {}; ;) {
              const k = f.read()
              if (k == -1)
                break
              const j = v(); const I = v() << 8 | v()
              g[String.fromCharCode(k << 8 | j)] = I, y += 1
            }
            if (y != E)
              throw `${y} != ${E}`
            return g
          }()); const d = '?'.charCodeAt(0)
          return function (f) {
            for (var v = [], y = 0; y < f.length; y += 1) {
              const g = f.charCodeAt(y)
              if (g < 128) {
                v.push(g)
              } else {
                const k = $[f.charAt(y)]
                typeof k == 'number' ? (255 & k) == k ? v.push(k) : (v.push(k >>> 8), v.push(255 & k)) : v.push(d)
              }
            }
            return v
          }
        }
        let h; let m; let w; let b; let A; var M = { L: 1, M: 0, Q: 3, H: 2 }; var V = (h = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], m = 1335, w = 7973, A = function (D) {
          for (var E = 0; D != 0;)
            E += 1, D >>>= 1
          return E
        }, (b = {}).getBCHTypeInfo = function (D) {
          for (var E = D << 10; A(E) - A(m) >= 0;)
            E ^= m << A(E) - A(m)
          return 21522 ^ (D << 10 | E)
        }, b.getBCHTypeNumber = function (D) {
          for (var E = D << 12; A(E) - A(w) >= 0;)
            E ^= w << A(E) - A(w)
          return D << 12 | E
        }, b.getPatternPosition = function (D) {
          return h[D - 1]
        }, b.getMaskFunction = function (D) {
          switch (D) {
            case 0:
              return function (E, $) {
                return (E + $) % 2 == 0
              }
            case 1:
              return function (E, $) {
                return E % 2 == 0
              }
            case 2:
              return function (E, $) {
                return $ % 3 == 0
              }
            case 3:
              return function (E, $) {
                return (E + $) % 3 == 0
              }
            case 4:
              return function (E, $) {
                return (Math.floor(E / 2) + Math.floor($ / 3)) % 2 == 0
              }
            case 5:
              return function (E, $) {
                return E * $ % 2 + E * $ % 3 == 0
              }
            case 6:
              return function (E, $) {
                return (E * $ % 2 + E * $ % 3) % 2 == 0
              }
            case 7:
              return function (E, $) {
                return (E * $ % 3 + (E + $) % 2) % 2 == 0
              }
            default:
              throw `bad maskPattern:${D}`
          }
        }, b.getErrorCorrectPolynomial = function (D) {
          for (var E = G([1], 0), $ = 0; $ < D; $ += 1)
            E = E.multiply(G([1, F.gexp($)], 0))
          return E
        }, b.getLengthInBits = function (D, E) {
          if (E >= 1 && E < 10) {
            switch (D) {
              case 1:
                return 10
              case 2:
                return 9
              case 4:
              case 8:
                return 8
              default:
                throw `mode:${D}`
            }
          } else if (E < 27) {
            switch (D) {
              case 1:
                return 12
              case 2:
                return 11
              case 4:
                return 16
              case 8:
                return 10
              default:
                throw `mode:${D}`
            }
          } else {
            if (!(E < 41))
              throw `type:${E}`
            switch (D) {
              case 1:
                return 14
              case 2:
                return 13
              case 4:
                return 16
              case 8:
                return 12
              default:
                throw `mode:${D}`
            }
          }
        }, b.getLostPoint = function (D) {
          for (var E = D.getModuleCount(), $ = 0, d = 0; d < E; d += 1) {
            for (var f = 0; f < E; f += 1) {
              for (var v = 0, y = D.isDark(d, f), g = -1; g <= 1; g += 1) {
                if (!(d + g < 0 || E <= d + g)) {
                  for (let k = -1; k <= 1; k += 1)
                    f + k < 0 || E <= f + k || g == 0 && k == 0 || y == D.isDark(d + g, f + k) && (v += 1)
                }
              }
              v > 5 && ($ += 3 + v - 5)
            }
          }
          for (d = 0; d < E - 1; d += 1) {
            for (f = 0; f < E - 1; f += 1) {
              let j = 0
              D.isDark(d, f) && (j += 1), D.isDark(d + 1, f) && (j += 1), D.isDark(d, f + 1) && (j += 1), D.isDark(d + 1, f + 1) && (j += 1), j != 0 && j != 4 || ($ += 3)
            }
          }
          for (d = 0; d < E; d += 1) {
            for (f = 0; f < E - 6; f += 1)
              D.isDark(d, f) && !D.isDark(d, f + 1) && D.isDark(d, f + 2) && D.isDark(d, f + 3) && D.isDark(d, f + 4) && !D.isDark(d, f + 5) && D.isDark(d, f + 6) && ($ += 40)
          }
          for (f = 0; f < E; f += 1) {
            for (d = 0; d < E - 6; d += 1)
              D.isDark(d, f) && !D.isDark(d + 1, f) && D.isDark(d + 2, f) && D.isDark(d + 3, f) && D.isDark(d + 4, f) && !D.isDark(d + 5, f) && D.isDark(d + 6, f) && ($ += 40)
          }
          let I = 0
          for (f = 0; f < E; f += 1) {
            for (d = 0; d < E; d += 1)
              D.isDark(d, f) && (I += 1)
          }
          return $ + Math.abs(100 * I / E / E - 50) / 5 * 10
        }, b); var F = (function () {
          for (var D = Array.from({ length: 256 }), E = Array.from({ length: 256 }), $ = 0; $ < 8; $ += 1)
            D[$] = 1 << $
          for ($ = 8; $ < 256; $ += 1)
            D[$] = D[$ - 4] ^ D[$ - 5] ^ D[$ - 6] ^ D[$ - 8]
          for ($ = 0; $ < 255; $ += 1)
            E[D[$]] = $
          return { glog(d) {
            if (d < 1)
              throw `glog(${d})`
            return E[d]
          }, gexp(d) {
            for (; d < 0;)
              d += 255
            for (; d >= 256;)
              d -= 255
            return D[d]
          } }
        }())
        function G(D, E) {
          if (D.length === void 0)
            throw `${D.length}/${E}`
          const $ = (function () {
            for (var f = 0; f < D.length && D[f] == 0;)
              f += 1
            for (var v = new Array(D.length - f + E), y = 0; y < D.length - f; y += 1)
              v[y] = D[y + f]
            return v
          }()); var d = { getAt(f) {
            return $[f]
          }, getLength() {
            return $.length
          }, multiply(f) {
            for (var v = Array.from({ length: d.getLength() + f.getLength() - 1 }), y = 0; y < d.getLength(); y += 1) {
              for (let g = 0; g < f.getLength(); g += 1)
                v[y + g] ^= F.gexp(F.glog(d.getAt(y)) + F.glog(f.getAt(g)))
            }
            return G(v, 0)
          }, mod(f) {
            if (d.getLength() - f.getLength() < 0)
              return d
            for (var v = F.glog(d.getAt(0)) - F.glog(f.getAt(0)), y = new Array(d.getLength()), g = 0; g < d.getLength(); g += 1)
              y[g] = d.getAt(g)
            for (g = 0; g < f.getLength(); g += 1)
              y[g] ^= F.gexp(F.glog(f.getAt(g)) + v)
            return G(y, 0).mod(f)
          } }
          return d
        }
        var Q = (function () {
          const D = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]]; const E = function (d, f) {
            const v = {}
            return v.totalCount = d, v.dataCount = f, v
          }; const $ = { getRSBlocks(d, f) {
            const v = (function (N, U) {
              switch (U) {
                case M.L:
                  return D[4 * (N - 1) + 0]
                case M.M:
                  return D[4 * (N - 1) + 1]
                case M.Q:
                  return D[4 * (N - 1) + 2]
                case M.H:
                  return D[4 * (N - 1) + 3]
                default:
                  return
              }
            }(d, f))
            if (v === void 0)
              throw `bad rs block @ typeNumber:${d}/errorCorrectionLevel:${f}`
            for (var y = v.length / 3, g = [], k = 0; k < y; k += 1) {
              for (let j = v[3 * k + 0], I = v[3 * k + 1], q = v[3 * k + 2], z = 0; z < j; z += 1)
                g.push(E(I, q))
            }
            return g
          } }
          return $
        }()); var Z = function () {
          const D = []; let E = 0; var $ = { getBuffer() {
            return D
          }, getAt(d) {
            const f = Math.floor(d / 8)
            return (D[f] >>> 7 - d % 8 & 1) == 1
          }, put(d, f) {
            for (let v = 0; v < f; v += 1)
              $.putBit((d >>> f - v - 1 & 1) == 1)
          }, getLengthInBits() {
            return E
          }, putBit(d) {
            const f = Math.floor(E / 8)
            D.length <= f && D.push(0), d && (D[f] |= 128 >>> E % 8), E += 1
          } }
          return $
        }; var ee = function (D) {
          const E = D; const $ = { getMode() {
            return 1
          }, getLength(v) {
            return E.length
          }, write(v) {
            for (var y = E, g = 0; g + 2 < y.length;)
              v.put(d(y.substring(g, g + 3)), 10), g += 3
            g < y.length && (y.length - g == 1 ? v.put(d(y.substring(g, g + 1)), 4) : y.length - g == 2 && v.put(d(y.substring(g, g + 2)), 7))
          } }; var d = function (v) {
            for (var y = 0, g = 0; g < v.length; g += 1)
              y = 10 * y + f(v.charAt(g))
            return y
          }; var f = function (v) {
            if (v >= '0' && v <= '9')
              return v.charCodeAt(0) - '0'.charCodeAt(0)
            throw `illegal char :${v}`
          }
          return $
        }; var Y = function (D) {
          const E = D; const $ = { getMode() {
            return 2
          }, getLength(f) {
            return E.length
          }, write(f) {
            for (var v = E, y = 0; y + 1 < v.length;)
              f.put(45 * d(v.charAt(y)) + d(v.charAt(y + 1)), 11), y += 2
            y < v.length && f.put(d(v.charAt(y)), 6)
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
          return $
        }; var se = function (D) {
          const E = p.stringToBytes(D)
          return { getMode() {
            return 4
          }, getLength($) {
            return E.length
          }, write($) {
            for (let d = 0; d < E.length; d += 1)
              $.put(E[d], 8)
          } }
        }; var ne = function (D) {
          const E = p.stringToBytesFuncs.SJIS
          if (!E)
            throw 'sjis not supported.';
          (function () {
            const f = E('\u53CB')
            if (f.length != 2 || (f[0] << 8 | f[1]) != 38726)
              throw 'sjis not supported.'
          })()
          const $ = E(D); const d = { getMode() {
            return 8
          }, getLength(f) {
            return ~~($.length / 2)
          }, write(f) {
            for (var v = $, y = 0; y + 1 < v.length;) {
              let g = (255 & v[y]) << 8 | 255 & v[y + 1]
              if (g >= 33088 && g <= 40956) {
                g -= 33088
              } else {
                if (!(g >= 57408 && g <= 60351))
                  throw `illegal char at ${y + 1}/${g}`
                g -= 49472
              }
              g = 192 * (g >>> 8 & 255) + (255 & g), f.put(g, 13), y += 2
            }
            if (y < v.length)
              throw `illegal char at ${y + 1}`
          } }
          return d
        }; const ie = function () {
          const D = []; var E = { writeByte($) {
            D.push(255 & $)
          }, writeShort($) {
            E.writeByte($), E.writeByte($ >>> 8)
          }, writeBytes($, d, f) {
            d = d || 0, f = f || $.length
            for (let v = 0; v < f; v += 1)
              E.writeByte($[v + d])
          }, writeString($) {
            for (let d = 0; d < $.length; d += 1)
              E.writeByte($.charCodeAt(d))
          }, toByteArray() {
            return D
          }, toString() {
            let $ = ''
            $ += '['
            for (let d = 0; d < D.length; d += 1)
              d > 0 && ($ += ','), $ += D[d]
            return `${$}]`
          } }
          return E
        }; var Ee = function (D) {
          const E = D; let $ = 0; let d = 0; let f = 0; const v = { read() {
            for (; f < 8;) {
              if ($ >= E.length) {
                if (f == 0)
                  return -1
                throw `unexpected end of file./${ f}`
              }
              const g = E.charAt($)
              if ($ += 1, g == '=')
                return f = 0, -1
              g.match(/^\s$/) || (d = d << 6 | y(g.charCodeAt(0)), f += 6)
            }
            const k = d >>> f - 8 & 255
            return f -= 8, k
          } }; var y = function (g) {
            if (g >= 65 && g <= 90)
              return g - 65
            if (g >= 97 && g <= 122)
              return g - 97 + 26
            if (g >= 48 && g <= 57)
              return g - 48 + 52
            if (g == 43)
              return 62
            if (g == 47)
              return 63
            throw `c:${g}`
          }
          return v
        }; var nt = function (D, E, $) {
          for (var d = (function (I, q) {
              const z = I; const N = q; const U = new Array(I * q); const C = { setPixel(_, O, S) {
                U[O * z + _] = S
              }, write(_) {
                _.writeString('GIF87a'), _.writeShort(z), _.writeShort(N), _.writeByte(128), _.writeByte(0), _.writeByte(0), _.writeByte(0), _.writeByte(0), _.writeByte(0), _.writeByte(255), _.writeByte(255), _.writeByte(255), _.writeString(','), _.writeShort(0), _.writeShort(0), _.writeShort(z), _.writeShort(N), _.writeByte(0)
                let O = x(2)
                _.writeByte(2)
                for (var S = 0; O.length - S > 255;)
                  _.writeByte(255), _.writeBytes(O, S, 255), S += 255
                _.writeByte(O.length - S), _.writeBytes(O, S, O.length - S), _.writeByte(0), _.writeString(';')
              } }; var x = function (_) {
                for (var O = 1 << _, S = 1 + (1 << _), R = _ + 1, T = P(), W = 0; W < O; W += 1)
                  T.add(String.fromCharCode(W))
                T.add(String.fromCharCode(O)), T.add(String.fromCharCode(S))
                let K; let ae; let le; const ce = ie(); const ge = (K = ce, ae = 0, le = 0, { write(ve, te) {
                  if (ve >>> te != 0)
                    throw 'length over'
                  for (; ae + te >= 8;)
                    K.writeByte(255 & (ve << ae | le)), te -= 8 - ae, ve >>>= 8 - ae, le = 0, ae = 0
                  le |= ve << ae, ae += te
                }, flush() {
                  ae > 0 && K.writeByte(le)
                } })
                ge.write(O, R)
                let ke = 0; let we = String.fromCharCode(U[ke])
                for (ke += 1; ke < U.length;) {
                  const he = String.fromCharCode(U[ke])
                  ke += 1, T.contains(we + he) ? we += he : (ge.write(T.indexOf(we), R), T.size() < 4095 && (T.size() == 1 << R && (R += 1), T.add(we + he)), we = he)
                }
                return ge.write(T.indexOf(we), R), ge.write(S, R), ge.flush(), ce.toByteArray()
              }; var P = function () {
                const _ = {}; let O = 0; var S = { add(R) {
                  if (S.contains(R))
                    throw `dup key:${R}`
                  _[R] = O, O += 1
                }, size() {
                  return O
                }, indexOf(R) {
                  return _[R]
                }, contains(R) {
                  return _[R] !== void 0
                } }
                return S
              }
              return C
            }(D, E)), f = 0; f < E; f += 1) {
            for (let v = 0; v < D; v += 1)
              d.setPixel(v, f, $(v, f))
          }
          const y = ie()
          d.write(y)
          for (var g = (function () {
              let I = 0; let q = 0; let z = 0; let N = ''; const U = {}; const C = function (P) {
                N += String.fromCharCode(x(63 & P))
              }; var x = function (P) {
                if (!(P < 0)) {
                  if (P < 26)
                    return 65 + P
                  if (P < 52)
                    return P - 26 + 97
                  if (P < 62)
                    return P - 52 + 48
                  if (P == 62)
                    return 43
                  if (P == 63)
                    return 47
                }
                throw `n:${P}`
              }
              return U.writeByte = function (P) {
                for (I = I << 8 | 255 & P, q += 8, z += 1; q >= 6;)
                  C(I >>> q - 6), q -= 6
              }, U.flush = function () {
                if (q > 0 && (C(I << 6 - q), I = 0, q = 0), z % 3 != 0) {
                  for (let P = 3 - z % 3, _ = 0; _ < P; _ += 1)
                    N += '='
                }
              }, U.toString = function () {
                return N
              }, U
            }()), k = y.toByteArray(), j = 0; j < k.length; j += 1)
            g.writeByte(k[j])
          return g.flush(), `data:image/gif;base64,${g}`
        }
        return p
      }())
      u.stringToBytesFuncs['UTF-8'] = function (p) {
        return (function (h) {
          for (var m = [], w = 0; w < h.length; w++) {
            let b = h.charCodeAt(w)
            b < 128 ? m.push(b) : b < 2048 ? m.push(192 | b >> 6, 128 | 63 & b) : b < 55296 || b >= 57344 ? m.push(224 | b >> 12, 128 | b >> 6 & 63, 128 | 63 & b) : (w++, b = 65536 + ((1023 & b) << 10 | 1023 & h.charCodeAt(w)), m.push(240 | b >> 18, 128 | b >> 12 & 63, 128 | b >> 6 & 63, 128 | 63 & b))
          }
          return m
        }(p))
      }, (c = typeof (l = function () {
        return u
      }) == 'function'
        ? l.apply(s, [])
        : l) === void 0 || (a.exports = c)
    } }; const r = {}
    function i(a) {
      const s = r[a]
      if (s !== void 0)
        return s.exports
      const l = r[a] = { exports: {} }
      return n[a](l, l.exports, i), l.exports
    }
    i.n = (a) => {
      const s = a && a.__esModule ? () => a.default : () => a
      return i.d(s, { a: s }), s
    }, i.d = (a, s) => {
      for (const l in s)
        i.o(s, l) && !i.o(a, l) && Object.defineProperty(a, l, { enumerable: !0, get: s[l] })
    }, i.o = (a, s) => Object.prototype.hasOwnProperty.call(a, s)
    const o = {}
    return (() => {
      i.d(o, { default: () => E })
      const a = $ => !!$ && typeof $ == 'object' && !Array.isArray($)
      function s($, ...d) {
        if (!d.length)
          return $
        const f = d.shift()
        return f !== void 0 && a($) && a(f)
          ? ($ = Object.assign({}, $), Object.keys(f).forEach((v) => {
              const y = $[v]; const g = f[v]
              Array.isArray(y) && Array.isArray(g) ? $[v] = g : a(y) && a(g) ? $[v] = s(Object.assign({}, y), g) : $[v] = g
            }), s($, ...d))
          : $
      }
      function l($, d) {
        const f = document.createElement('a')
        f.download = d, f.href = $, document.body.appendChild(f), f.click(), document.body.removeChild(f)
      }
      const c = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 }
      class u {
        constructor({ svg: d, type: f, window: v }) {
          this._svg = d, this._type = f, this._window = v
        }

        draw(d, f, v, y) {
          let g
          switch (this._type) {
            case 'dots':
              g = this._drawDot
              break
            case 'classy':
              g = this._drawClassy
              break
            case 'classy-rounded':
              g = this._drawClassyRounded
              break
            case 'rounded':
              g = this._drawRounded
              break
            case 'extra-rounded':
              g = this._drawExtraRounded
              break
            default:
              g = this._drawSquare
          }
          g.call(this, { x: d, y: f, size: v, getNeighbor: y })
        }

        _rotateFigure({ x: d, y: f, size: v, rotation: y = 0, draw: g }) {
          let k
          const j = d + v / 2; const I = f + v / 2
          g(), (k = this._element) === null || k === void 0 || k.setAttribute('transform', `rotate(${180 * y / Math.PI},${j},${I})`)
        }

        _basicDot(d) {
          const { size: f, x: v, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'circle'), this._element.setAttribute('cx', String(v + f / 2)), this._element.setAttribute('cy', String(y + f / 2)), this._element.setAttribute('r', String(f / 2))
          } }))
        }

        _basicSquare(d) {
          const { size: f, x: v, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'rect'), this._element.setAttribute('x', String(v)), this._element.setAttribute('y', String(y)), this._element.setAttribute('width', String(f)), this._element.setAttribute('height', String(f))
          } }))
        }

        _basicSideRounded(d) {
          const { size: f, x: v, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('d', `M ${v} ${y}v ${f}h ${f / 2}a ${f / 2} ${f / 2}, 0, 0, 0, 0 ${-f}`)
          } }))
        }

        _basicCornerRounded(d) {
          const { size: f, x: v, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('d', `M ${v} ${y}v ${f}h ${f}v ${-f / 2}a ${f / 2} ${f / 2}, 0, 0, 0, ${-f / 2} ${-f / 2}`)
          } }))
        }

        _basicCornerExtraRounded(d) {
          const { size: f, x: v, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('d', `M ${v} ${y}v ${f}h ${f}a ${f} ${f}, 0, 0, 0, ${-f} ${-f}`)
          } }))
        }

        _basicCornersRounded(d) {
          const { size: f, x: v, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('d', `M ${v} ${y}v ${f / 2}a ${f / 2} ${f / 2}, 0, 0, 0, ${f / 2} ${f / 2}h ${f / 2}v ${-f / 2}a ${f / 2} ${f / 2}, 0, 0, 0, ${-f / 2} ${-f / 2}`)
          } }))
        }

        _drawDot({ x: d, y: f, size: v }) {
          this._basicDot({ x: d, y: f, size: v, rotation: 0 })
        }

        _drawSquare({ x: d, y: f, size: v }) {
          this._basicSquare({ x: d, y: f, size: v, rotation: 0 })
        }

        _drawRounded({ x: d, y: f, size: v, getNeighbor: y }) {
          const g = y ? +y(-1, 0) : 0; const k = y ? +y(1, 0) : 0; const j = y ? +y(0, -1) : 0; const I = y ? +y(0, 1) : 0; const q = g + k + j + I
          if (q !== 0) {
            if (q > 2 || g && k || j && I) {
              this._basicSquare({ x: d, y: f, size: v, rotation: 0 })
            } else {
              if (q === 2) {
                let z = 0
                return g && j ? z = Math.PI / 2 : j && k ? z = Math.PI : k && I && (z = -Math.PI / 2), void this._basicCornerRounded({ x: d, y: f, size: v, rotation: z })
              }
              if (q === 1) {
                let z = 0
                return j ? z = Math.PI / 2 : k ? z = Math.PI : I && (z = -Math.PI / 2), void this._basicSideRounded({ x: d, y: f, size: v, rotation: z })
              }
            }
          } else {
            this._basicDot({ x: d, y: f, size: v, rotation: 0 })
          }
        }

        _drawExtraRounded({ x: d, y: f, size: v, getNeighbor: y }) {
          const g = y ? +y(-1, 0) : 0; const k = y ? +y(1, 0) : 0; const j = y ? +y(0, -1) : 0; const I = y ? +y(0, 1) : 0; const q = g + k + j + I
          if (q !== 0) {
            if (q > 2 || g && k || j && I) {
              this._basicSquare({ x: d, y: f, size: v, rotation: 0 })
            } else {
              if (q === 2) {
                let z = 0
                return g && j ? z = Math.PI / 2 : j && k ? z = Math.PI : k && I && (z = -Math.PI / 2), void this._basicCornerExtraRounded({ x: d, y: f, size: v, rotation: z })
              }
              if (q === 1) {
                let z = 0
                return j ? z = Math.PI / 2 : k ? z = Math.PI : I && (z = -Math.PI / 2), void this._basicSideRounded({ x: d, y: f, size: v, rotation: z })
              }
            }
          } else {
            this._basicDot({ x: d, y: f, size: v, rotation: 0 })
          }
        }

        _drawClassy({ x: d, y: f, size: v, getNeighbor: y }) {
          const g = y ? +y(-1, 0) : 0; const k = y ? +y(1, 0) : 0; const j = y ? +y(0, -1) : 0; const I = y ? +y(0, 1) : 0
          g + k + j + I !== 0 ? g || j ? k || I ? this._basicSquare({ x: d, y: f, size: v, rotation: 0 }) : this._basicCornerRounded({ x: d, y: f, size: v, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: d, y: f, size: v, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: d, y: f, size: v, rotation: Math.PI / 2 })
        }

        _drawClassyRounded({ x: d, y: f, size: v, getNeighbor: y }) {
          const g = y ? +y(-1, 0) : 0; const k = y ? +y(1, 0) : 0; const j = y ? +y(0, -1) : 0; const I = y ? +y(0, 1) : 0
          g + k + j + I !== 0 ? g || j ? k || I ? this._basicSquare({ x: d, y: f, size: v, rotation: 0 }) : this._basicCornerExtraRounded({ x: d, y: f, size: v, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: d, y: f, size: v, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: d, y: f, size: v, rotation: Math.PI / 2 })
        }
      }
      const p = { dot: 'dot', square: 'square', extraRounded: 'extra-rounded' }; const h = Object.values(p)
      class m {
        constructor({ svg: d, type: f, window: v }) {
          this._svg = d, this._type = f, this._window = v
        }

        draw(d, f, v, y) {
          let g
          switch (this._type) {
            case p.square:
              g = this._drawSquare
              break
            case p.extraRounded:
              g = this._drawExtraRounded
              break
            default:
              g = this._drawDot
          }
          g.call(this, { x: d, y: f, size: v, rotation: y })
        }

        _rotateFigure({ x: d, y: f, size: v, rotation: y = 0, draw: g }) {
          let k
          const j = d + v / 2; const I = f + v / 2
          g(), (k = this._element) === null || k === void 0 || k.setAttribute('transform', `rotate(${180 * y / Math.PI},${j},${I})`)
        }

        _basicDot(d) {
          const { size: f, x: v, y } = d; const g = f / 7
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('clip-rule', 'evenodd'), this._element.setAttribute('d', `M ${v + f / 2} ${y}a ${f / 2} ${f / 2} 0 1 0 0.1 0zm 0 ${g}a ${f / 2 - g} ${f / 2 - g} 0 1 1 -0.1 0Z`)
          } }))
        }

        _basicSquare(d) {
          const { size: f, x: v, y } = d; const g = f / 7
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('clip-rule', 'evenodd'), this._element.setAttribute('d', `M ${v} ${y}v ${f}h ${f}v ${-f}zM ${v + g} ${y + g}h ${f - 2 * g}v ${f - 2 * g}h ${2 * g - f}z`)
          } }))
        }

        _basicExtraRounded(d) {
          const { size: f, x: v, y } = d; const g = f / 7
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'path'), this._element.setAttribute('clip-rule', 'evenodd'), this._element.setAttribute('d', `M ${v} ${y + 2.5 * g}v ${2 * g}a ${2.5 * g} ${2.5 * g}, 0, 0, 0, ${2.5 * g} ${2.5 * g}h ${2 * g}a ${2.5 * g} ${2.5 * g}, 0, 0, 0, ${2.5 * g} ${2.5 * -g}v ${-2 * g}a ${2.5 * g} ${2.5 * g}, 0, 0, 0, ${2.5 * -g} ${2.5 * -g}h ${-2 * g}a ${2.5 * g} ${2.5 * g}, 0, 0, 0, ${2.5 * -g} ${2.5 * g}M ${v + 2.5 * g} ${y + g}h ${2 * g}a ${1.5 * g} ${1.5 * g}, 0, 0, 1, ${1.5 * g} ${1.5 * g}v ${2 * g}a ${1.5 * g} ${1.5 * g}, 0, 0, 1, ${1.5 * -g} ${1.5 * g}h ${-2 * g}a ${1.5 * g} ${1.5 * g}, 0, 0, 1, ${1.5 * -g} ${1.5 * -g}v ${-2 * g}a ${1.5 * g} ${1.5 * g}, 0, 0, 1, ${1.5 * g} ${1.5 * -g}`)
          } }))
        }

        _drawDot({ x: d, y: f, size: v, rotation: y }) {
          this._basicDot({ x: d, y: f, size: v, rotation: y })
        }

        _drawSquare({ x: d, y: f, size: v, rotation: y }) {
          this._basicSquare({ x: d, y: f, size: v, rotation: y })
        }

        _drawExtraRounded({ x: d, y: f, size: v, rotation: y }) {
          this._basicExtraRounded({ x: d, y: f, size: v, rotation: y })
        }
      }
      const w = { dot: 'dot', square: 'square' }; const b = Object.values(w)
      class A {
        constructor({ svg: d, type: f, window: v }) {
          this._svg = d, this._type = f, this._window = v
        }

        draw(d, f, v, y) {
          let g
          g = this._type === w.square ? this._drawSquare : this._drawDot, g.call(this, { x: d, y: f, size: v, rotation: y })
        }

        _rotateFigure({ x: d, y: f, size: v, rotation: y = 0, draw: g }) {
          let k
          const j = d + v / 2; const I = f + v / 2
          g(), (k = this._element) === null || k === void 0 || k.setAttribute('transform', `rotate(${180 * y / Math.PI},${j},${I})`)
        }

        _basicDot(d) {
          const { size: f, x: v, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'circle'), this._element.setAttribute('cx', String(v + f / 2)), this._element.setAttribute('cy', String(y + f / 2)), this._element.setAttribute('r', String(f / 2))
          } }))
        }

        _basicSquare(d) {
          const { size: f, x: v, y } = d
          this._rotateFigure(Object.assign(Object.assign({}, d), { draw: () => {
            this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'rect'), this._element.setAttribute('x', String(v)), this._element.setAttribute('y', String(y)), this._element.setAttribute('width', String(f)), this._element.setAttribute('height', String(f))
          } }))
        }

        _drawDot({ x: d, y: f, size: v, rotation: y }) {
          this._basicDot({ x: d, y: f, size: v, rotation: y })
        }

        _drawSquare({ x: d, y: f, size: v, rotation: y }) {
          this._basicSquare({ x: d, y: f, size: v, rotation: y })
        }
      }
      const M = 'circle'; const V = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]]; const F = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]
      class G {
        constructor(d, f) {
          this._roundSize = v => this._options.dotsOptions.roundSize ? Math.floor(v) : v, this._window = f, this._element = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'svg'), this._element.setAttribute('width', String(d.width)), this._element.setAttribute('height', String(d.height)), this._element.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink'), d.dotsOptions.roundSize || this._element.setAttribute('shape-rendering', 'crispEdges'), this._element.setAttribute('viewBox', `0 0 ${d.width} ${d.height}`), this._defs = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'defs'), this._element.appendChild(this._defs), this._imageUri = d.image, this._instanceId = G.instanceCount++, this._options = d
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
          const f = d.getModuleCount(); const v = Math.min(this._options.width, this._options.height) - 2 * this._options.margin; const y = this._options.shape === M ? v / Math.sqrt(2) : v; const g = this._roundSize(y / f)
          let k = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 }
          if (this._qr = d, this._options.image) {
            if (await this.loadImage(), !this._image)
              return
            const { imageOptions: j, qrOptions: I } = this._options; const q = j.imageSize * c[I.errorCorrectionLevel]; const z = Math.floor(q * f * f)
            k = (function ({ originalHeight: N, originalWidth: U, maxHiddenDots: C, maxHiddenAxisDots: x, dotSize: P }) {
              const _ = { x: 0, y: 0 }; const O = { x: 0, y: 0 }
              if (N <= 0 || U <= 0 || C <= 0 || P <= 0)
                return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 }
              const S = N / U
              return _.x = Math.floor(Math.sqrt(C / S)), _.x <= 0 && (_.x = 1), x && x < _.x && (_.x = x), _.x % 2 == 0 && _.x--, O.x = _.x * P, _.y = 1 + 2 * Math.ceil((_.x * S - 1) / 2), O.y = Math.round(O.x * S), (_.y * _.x > C || x && x < _.y) && (x && x < _.y ? (_.y = x, _.y % 2 == 0 && _.x--) : _.y -= 2, O.y = _.y * P, _.x = 1 + 2 * Math.ceil((_.y / S - 1) / 2), O.x = Math.round(O.y / S)), { height: O.y, width: O.x, hideYDots: _.y, hideXDots: _.x }
            }({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: z, maxHiddenAxisDots: f - 14, dotSize: g }))
          }
          this.drawBackground(), this.drawDots((j, I) => {
            let q, z, N, U, C, x
            return !(this._options.imageOptions.hideBackgroundDots && j >= (f - k.hideYDots) / 2 && j < (f + k.hideYDots) / 2 && I >= (f - k.hideXDots) / 2 && I < (f + k.hideXDots) / 2 || ((q = V[j]) === null || q === void 0 ? void 0 : q[I]) || ((z = V[j - f + 7]) === null || z === void 0 ? void 0 : z[I]) || ((N = V[j]) === null || N === void 0 ? void 0 : N[I - f + 7]) || ((U = F[j]) === null || U === void 0 ? void 0 : U[I]) || ((C = F[j - f + 7]) === null || C === void 0 ? void 0 : C[I]) || ((x = F[j]) === null || x === void 0 ? void 0 : x[I - f + 7]))
          }), this.drawCorners(), this._options.image && await this.drawImage({ width: k.width, height: k.height, count: f, dotSize: g })
        }

        drawBackground() {
          let d, f, v
          const y = this._element; const g = this._options
          if (y) {
            const k = (d = g.backgroundOptions) === null || d === void 0 ? void 0 : d.gradient; const j = (f = g.backgroundOptions) === null || f === void 0 ? void 0 : f.color
            let I = g.height; let q = g.width
            if (k || j) {
              const z = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'rect')
              this._backgroundClipPath = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'clipPath'), this._backgroundClipPath.setAttribute('id', `clip-path-background-color-${this._instanceId}`), this._defs.appendChild(this._backgroundClipPath), !((v = g.backgroundOptions) === null || v === void 0) && v.round && (I = q = Math.min(g.width, g.height), z.setAttribute('rx', String(I / 2 * g.backgroundOptions.round))), z.setAttribute('x', String(this._roundSize((g.width - q) / 2))), z.setAttribute('y', String(this._roundSize((g.height - I) / 2))), z.setAttribute('width', String(q)), z.setAttribute('height', String(I)), this._backgroundClipPath.appendChild(z), this._createColor({ options: k, color: j, additionalRotation: 0, x: 0, y: 0, height: g.height, width: g.width, name: `background-color-${this._instanceId}` })
            }
          }
        }

        drawDots(d) {
          let f, v
          if (!this._qr)
            throw 'QR code is not defined'
          const y = this._options; const g = this._qr.getModuleCount()
          if (g > y.width || g > y.height)
            throw 'The canvas is too small.'
          const k = Math.min(y.width, y.height) - 2 * y.margin; const j = y.shape === M ? k / Math.sqrt(2) : k; const I = this._roundSize(j / g); const q = this._roundSize((y.width - g * I) / 2); const z = this._roundSize((y.height - g * I) / 2); const N = new u({ svg: this._element, type: y.dotsOptions.type, window: this._window })
          this._dotsClipPath = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'clipPath'), this._dotsClipPath.setAttribute('id', `clip-path-dot-color-${this._instanceId}`), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: (f = y.dotsOptions) === null || f === void 0 ? void 0 : f.gradient, color: y.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: y.height, width: y.width, name: `dot-color-${this._instanceId}` })
          for (let U = 0; U < g; U++) {
            for (let C = 0; C < g; C++)
              d && !d(U, C) || !((v = this._qr) === null || v === void 0) && v.isDark(U, C) && (N.draw(q + C * I, z + U * I, I, (x, P) => !(C + x < 0 || U + P < 0 || C + x >= g || U + P >= g) && !(d && !d(U + P, C + x)) && !!this._qr && this._qr.isDark(U + P, C + x)), N._element && this._dotsClipPath && this._dotsClipPath.appendChild(N._element))
          }
          if (y.shape === M) {
            const U = this._roundSize((k / I - g) / 2); const C = g + 2 * U; const x = q - U * I; const P = z - U * I; const _ = []; const O = this._roundSize(C / 2)
            for (let S = 0; S < C; S++) {
              _[S] = []
              for (let R = 0; R < C; R++)
                S >= U - 1 && S <= C - U && R >= U - 1 && R <= C - U || Math.sqrt((S - O) * (S - O) + (R - O) * (R - O)) > O ? _[S][R] = 0 : _[S][R] = this._qr.isDark(R - 2 * U < 0 ? R : R >= g ? R - 2 * U : R - U, S - 2 * U < 0 ? S : S >= g ? S - 2 * U : S - U) ? 1 : 0
            }
            for (let S = 0; S < C; S++) {
              for (let R = 0; R < C; R++) {
                _[S][R] && (N.draw(x + R * I, P + S * I, I, (T, W) => {
                  let K
                  return !!(!((K = _[S + W]) === null || K === void 0) && K[R + T])
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
          const v = this._qr.getModuleCount(); const y = Math.min(f.width, f.height) - 2 * f.margin; const g = f.shape === M ? y / Math.sqrt(2) : y; const k = this._roundSize(g / v); const j = 7 * k; const I = 3 * k; const q = this._roundSize((f.width - v * k) / 2); const z = this._roundSize((f.height - v * k) / 2);
          [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(([N, U, C]) => {
            let x, P, _, O, S, R, T, W, K, ae, le, ce, ge, ke
            const we = q + N * k * (v - 7); const he = z + U * k * (v - 7)
            let ve = this._dotsClipPath; let te = this._dotsClipPath
            if ((((x = f.cornersSquareOptions) === null || x === void 0 ? void 0 : x.gradient) || ((P = f.cornersSquareOptions) === null || P === void 0 ? void 0 : P.color)) && (ve = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'clipPath'), ve.setAttribute('id', `clip-path-corners-square-color-${N}-${U}-${this._instanceId}`), this._defs.appendChild(ve), this._cornersSquareClipPath = this._cornersDotClipPath = te = ve, this._createColor({ options: (_ = f.cornersSquareOptions) === null || _ === void 0 ? void 0 : _.gradient, color: (O = f.cornersSquareOptions) === null || O === void 0 ? void 0 : O.color, additionalRotation: C, x: we, y: he, height: j, width: j, name: `corners-square-color-${N}-${U}-${this._instanceId}` })), ((S = f.cornersSquareOptions) === null || S === void 0 ? void 0 : S.type) && h.includes(f.cornersSquareOptions.type)) {
              const De = new m({ svg: this._element, type: f.cornersSquareOptions.type, window: this._window })
              De.draw(we, he, j, C), De._element && ve && ve.appendChild(De._element)
            } else {
              const De = new u({ svg: this._element, type: ((R = f.cornersSquareOptions) === null || R === void 0 ? void 0 : R.type) || f.dotsOptions.type, window: this._window })
              for (let je = 0; je < V.length; je++) {
                for (let ue = 0; ue < V[je].length; ue++) {
                  !((T = V[je]) === null || T === void 0) && T[ue] && (De.draw(we + ue * k, he + je * k, k, (Ze, Ye) => {
                    let Ue
                    return !!(!((Ue = V[je + Ye]) === null || Ue === void 0) && Ue[ue + Ze])
                  }), De._element && ve && ve.appendChild(De._element))
                }
              }
            }
            if ((((W = f.cornersDotOptions) === null || W === void 0 ? void 0 : W.gradient) || ((K = f.cornersDotOptions) === null || K === void 0 ? void 0 : K.color)) && (te = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'clipPath'), te.setAttribute('id', `clip-path-corners-dot-color-${N}-${U}-${this._instanceId}`), this._defs.appendChild(te), this._cornersDotClipPath = te, this._createColor({ options: (ae = f.cornersDotOptions) === null || ae === void 0 ? void 0 : ae.gradient, color: (le = f.cornersDotOptions) === null || le === void 0 ? void 0 : le.color, additionalRotation: C, x: we + 2 * k, y: he + 2 * k, height: I, width: I, name: `corners-dot-color-${N}-${U}-${this._instanceId}` })), ((ce = f.cornersDotOptions) === null || ce === void 0 ? void 0 : ce.type) && b.includes(f.cornersDotOptions.type)) {
              const De = new A({ svg: this._element, type: f.cornersDotOptions.type, window: this._window })
              De.draw(we + 2 * k, he + 2 * k, I, C), De._element && te && te.appendChild(De._element)
            } else {
              const De = new u({ svg: this._element, type: ((ge = f.cornersDotOptions) === null || ge === void 0 ? void 0 : ge.type) || f.dotsOptions.type, window: this._window })
              for (let je = 0; je < F.length; je++) {
                for (let ue = 0; ue < F[je].length; ue++) {
                  !((ke = F[je]) === null || ke === void 0) && ke[ue] && (De.draw(we + ue * k, he + je * k, k, (Ze, Ye) => {
                    let Ue
                    return !!(!((Ue = F[je + Ye]) === null || Ue === void 0) && Ue[ue + Ze])
                  }), De._element && te && te.appendChild(De._element))
                }
              }
            }
          })
        }

        loadImage() {
          return new Promise((d, f) => {
            let v
            const y = this._options
            if (!y.image)
              return f('Image is not defined')
            if (!((v = y.nodeCanvas) === null || v === void 0) && v.loadImage) {
              y.nodeCanvas.loadImage(y.image).then((g) => {
                let k, j
                if (this._image = g, this._options.imageOptions.saveAsBlob) {
                  const I = (k = y.nodeCanvas) === null || k === void 0 ? void 0 : k.createCanvas(this._image.width, this._image.height);
                  (j = I == null ? void 0 : I.getContext('2d')) === null || j === void 0 || j.drawImage(g, 0, 0), this._imageUri = I == null ? void 0 : I.toDataURL()
                }
                d()
              }).catch(f)
            } else {
              const g = new this._window.Image()
              typeof y.imageOptions.crossOrigin == 'string' && (g.crossOrigin = y.imageOptions.crossOrigin), this._image = g, g.onload = async () => {
                this._options.imageOptions.saveAsBlob && (this._imageUri = await (async function (k, j) {
                  return new Promise((I) => {
                    const q = new j.XMLHttpRequest()
                    q.onload = function () {
                      const z = new j.FileReader()
                      z.onloadend = function () {
                        I(z.result)
                      }, z.readAsDataURL(q.response)
                    }, q.open('GET', k), q.responseType = 'blob', q.send()
                  })
                }(y.image || '', this._window))), d()
              }, g.src = y.image
            }
          })
        }

        async drawImage({ width: d, height: f, count: v, dotSize: y }) {
          const g = this._options; const k = this._roundSize((g.width - v * y) / 2); const j = this._roundSize((g.height - v * y) / 2); const I = k + this._roundSize(g.imageOptions.margin + (v * y - d) / 2); const q = j + this._roundSize(g.imageOptions.margin + (v * y - f) / 2); const z = d - 2 * g.imageOptions.margin; const N = f - 2 * g.imageOptions.margin; const U = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'image')
          U.setAttribute('href', this._imageUri || ''), U.setAttribute('xlink:href', this._imageUri || ''), U.setAttribute('x', String(I)), U.setAttribute('y', String(q)), U.setAttribute('width', `${z}px`), U.setAttribute('height', `${N}px`), this._element.appendChild(U)
        }

        _createColor({ options: d, color: f, additionalRotation: v, x: y, y: g, height: k, width: j, name: I }) {
          const q = j > k ? j : k; const z = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'rect')
          if (z.setAttribute('x', String(y)), z.setAttribute('y', String(g)), z.setAttribute('height', String(k)), z.setAttribute('width', String(j)), z.setAttribute('clip-path', `url('#clip-path-${I}')`), d) {
            let N
            if (d.type === 'radial') {
              N = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient'), N.setAttribute('id', I), N.setAttribute('gradientUnits', 'userSpaceOnUse'), N.setAttribute('fx', String(y + j / 2)), N.setAttribute('fy', String(g + k / 2)), N.setAttribute('cx', String(y + j / 2)), N.setAttribute('cy', String(g + k / 2)), N.setAttribute('r', String(q / 2))
            } else {
              const U = ((d.rotation || 0) + v) % (2 * Math.PI); const C = (U + 2 * Math.PI) % (2 * Math.PI)
              let x = y + j / 2; let P = g + k / 2; let _ = y + j / 2; let O = g + k / 2
              C >= 0 && C <= 0.25 * Math.PI || C > 1.75 * Math.PI && C <= 2 * Math.PI ? (x -= j / 2, P -= k / 2 * Math.tan(U), _ += j / 2, O += k / 2 * Math.tan(U)) : C > 0.25 * Math.PI && C <= 0.75 * Math.PI ? (P -= k / 2, x -= j / 2 / Math.tan(U), O += k / 2, _ += j / 2 / Math.tan(U)) : C > 0.75 * Math.PI && C <= 1.25 * Math.PI ? (x += j / 2, P += k / 2 * Math.tan(U), _ -= j / 2, O -= k / 2 * Math.tan(U)) : C > 1.25 * Math.PI && C <= 1.75 * Math.PI && (P += k / 2, x += j / 2 / Math.tan(U), O -= k / 2, _ -= j / 2 / Math.tan(U)), N = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient'), N.setAttribute('id', I), N.setAttribute('gradientUnits', 'userSpaceOnUse'), N.setAttribute('x1', String(Math.round(x))), N.setAttribute('y1', String(Math.round(P))), N.setAttribute('x2', String(Math.round(_))), N.setAttribute('y2', String(Math.round(O)))
            }
            d.colorStops.forEach(({ offset: U, color: C }) => {
              const x = this._window.document.createElementNS('http://www.w3.org/2000/svg', 'stop')
              x.setAttribute('offset', `${100 * U}%`), x.setAttribute('stop-color', C), N.appendChild(x)
            }), z.setAttribute('fill', `url('#${I}')`), this._defs.appendChild(N)
          } else {
            f && z.setAttribute('fill', f)
          }
          this._element.appendChild(z)
        }
      }
      G.instanceCount = 0
      const Q = G; const Z = 'canvas'; const ee = {}
      for (let $ = 0; $ <= 40; $++)
        ee[$] = $
      const Y = { type: Z, shape: 'square', width: 300, height: 300, data: '', margin: 0, qrOptions: { typeNumber: ee[0], mode: void 0, errorCorrectionLevel: 'Q' }, imageOptions: { saveAsBlob: !0, hideBackgroundDots: !0, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: 'square', color: '#000', roundSize: !0 }, backgroundOptions: { round: 0, color: '#fff' } }
      function se($) {
        const d = Object.assign({}, $)
        if (!d.colorStops || !d.colorStops.length)
          throw 'Field \'colorStops\' is required in gradient'
        return d.rotation ? d.rotation = Number(d.rotation) : d.rotation = 0, d.colorStops = d.colorStops.map(f => Object.assign(Object.assign({}, f), { offset: Number(f.offset) })), d
      }
      function ne($) {
        const d = Object.assign({}, $)
        return d.width = Number(d.width), d.height = Number(d.height), d.margin = Number(d.margin), d.imageOptions = Object.assign(Object.assign({}, d.imageOptions), { hideBackgroundDots: Boolean(d.imageOptions.hideBackgroundDots), imageSize: Number(d.imageOptions.imageSize), margin: Number(d.imageOptions.margin) }), d.margin > Math.min(d.width, d.height) && (d.margin = Math.min(d.width, d.height)), d.dotsOptions = Object.assign({}, d.dotsOptions), d.dotsOptions.gradient && (d.dotsOptions.gradient = se(d.dotsOptions.gradient)), d.cornersSquareOptions && (d.cornersSquareOptions = Object.assign({}, d.cornersSquareOptions), d.cornersSquareOptions.gradient && (d.cornersSquareOptions.gradient = se(d.cornersSquareOptions.gradient))), d.cornersDotOptions && (d.cornersDotOptions = Object.assign({}, d.cornersDotOptions), d.cornersDotOptions.gradient && (d.cornersDotOptions.gradient = se(d.cornersDotOptions.gradient))), d.backgroundOptions && (d.backgroundOptions = Object.assign({}, d.backgroundOptions), d.backgroundOptions.gradient && (d.backgroundOptions.gradient = se(d.backgroundOptions.gradient))), d
      }
      const ie = i(873); const Ee = i.n(ie)
      function nt($) {
        if (!$)
          throw new Error('Extension must be defined')
        $[0] === '.' && ($ = $.substring(1))
        const d = { bmp: 'image/bmp', gif: 'image/gif', ico: 'image/vnd.microsoft.icon', jpeg: 'image/jpeg', jpg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml', tif: 'image/tiff', tiff: 'image/tiff', webp: 'image/webp', pdf: 'application/pdf' }[$.toLowerCase()]
        if (!d)
          throw new Error(`Extension "${$}" is not supported`)
        return d
      }
      class D {
        constructor(d) {
          d != null && d.jsdom ? this._window = new d.jsdom('', { resources: 'usable' }).window : this._window = window, this._options = d ? ne(s(Y, d)) : Y, this.update()
        }

        static _clearContainer(d) {
          d && (d.innerHTML = '')
        }

        _setupSvg() {
          if (!this._qr)
            return
          const d = new Q(this._options, this._window)
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
                let v
                if (!this._svg)
                  return
                const y = this._svg; const g = new this._window.XMLSerializer().serializeToString(y); const k = btoa(g); const j = `data:${nt('svg')};base64,${k}`
                if (!((v = this._options.nodeCanvas) === null || v === void 0) && v.loadImage) {
                  return this._options.nodeCanvas.loadImage(j).then((I) => {
                    let q, z
                    I.width = this._options.width, I.height = this._options.height, (z = (q = this._nodeCanvas) === null || q === void 0 ? void 0 : q.getContext('2d')) === null || z === void 0 || z.drawImage(I, 0, 0)
                  })
                }
                {
                  const I = new this._window.Image()
                  return new Promise((q) => {
                    I.onload = () => {
                      let z, N;
                      (N = (z = this._domCanvas) === null || z === void 0 ? void 0 : z.getContext('2d')) === null || N === void 0 || N.drawImage(I, 0, 0), q()
                    }, I.src = j
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
          D._clearContainer(this._container), this._options = d ? ne(s(this._options, d)) : this._options, this._options.data && (this._qr = Ee()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || (function (f) {
            switch (!0) {
              case /^\d*$/.test(f):
                return 'Numeric'
              case /^[0-9A-Z $%*+\-./:]*$/.test(f):
                return 'Alphanumeric'
              default:
                return 'Byte'
            }
          }(this._options.data))), this._qr.make(), this._options.type === Z ? this._setupCanvas() : this._setupSvg(), this.append(this._container))
        }

        append(d) {
          if (d) {
            if (typeof d.appendChild != 'function')
              throw 'Container should be a single DOM node'
            this._options.type === Z ? this._domCanvas && d.appendChild(this._domCanvas) : this._svg && d.appendChild(this._svg), this._container = d
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
          const f = await this._getElement(d); const v = nt(d)
          if (!f)
            return null
          if (d.toLowerCase() === 'svg') {
            const y = `<?xml version="1.0" standalone="no"?>\r
${new this._window.XMLSerializer().serializeToString(f)}`
            return typeof Blob > 'u' || this._options.jsdom ? Buffer.from(y) : new Blob([y], { type: v })
          }
          return new Promise((y) => {
            const g = f
            if ('toBuffer' in g) {
              if (v === 'image/png') {
                y(g.toBuffer(v))
              } else if (v === 'image/jpeg') {
                y(g.toBuffer(v))
              } else {
                if (v !== 'application/pdf')
                  throw new Error('Unsupported extension')
                y(g.toBuffer(v))
              }
            } else {
              'toBlob' in g && g.toBlob(y, v, 1)
            }
          })
        }

        async download(d) {
          if (!this._qr)
            throw 'QR code is empty'
          if (typeof Blob > 'u')
            throw 'Cannot download in Node.js, call getRawData instead.'
          let f = 'png'; let v = 'qr'
          typeof d == 'string' ? (f = d, console.warn('Extension is deprecated as argument for \'download\' method, please pass object { name: \'...\', extension: \'...\' } as argument')) : typeof d == 'object' && d !== null && (d.name && (v = d.name), d.extension && (f = d.extension))
          const y = await this._getElement(f)
          if (y) {
            if (f.toLowerCase() === 'svg') {
              let g = new XMLSerializer().serializeToString(y)
              g = `<?xml version="1.0" standalone="no"?>\r
${g}`, l(`data:${nt(f)};charset=utf-8,${encodeURIComponent(g)}`, `${v}.svg`)
            } else {
              l(y.toDataURL(nt(f)), `${v}.${f}`)
            }
          }
        }
      }
      const E = D
    })(), o.default
  })())
})(Ga)
const U0 = /* @__PURE__ */ ed(Ga.exports); const q0 = ye({
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
          this.qrcode ? this.qrcode.update(t) : (this.qrcode = Me(new U0(t)), this.qrcode.append(this.$refs.qr))
        })
      },
      deep: !0,
      immediate: !0,
    },
  },
}); const H0 = {
  class: '_fc-qrcode',
  ref: 'qr',
}
function G0(t, e, n, r, i, o) {
  return H(), oe('div', H0, null, 512)
}
const Y0 = /* @__PURE__ */ Re(q0, [['render', G0]])
const W0 = ye({
  name: 'FcCell',
}); const X0 = {
  ref: 'cell',
  class: '_fc-cell',
}
function K0(t, e, n, r, i, o) {
  return H(), oe('div', X0, [
    en(t.$slots, 'default'),
  ], 512)
}
const J0 = /* @__PURE__ */ Re(W0, [['render', K0]]); const Z0 = t => t !== null && typeof t == 'object'; const Q0 = t => t != null
function Br(t) {
  if (!Q0(t))
    return t
  if (Array.isArray(t))
    return t.map(e => Br(e))
  if (Z0(t)) {
    const e = {}
    return Object.keys(t).forEach((n) => {
      e[n] = Br(t[n])
    }), e
  }
  return t
}
function ev(t, e) {
  return Ct({
    message: t,
    type: e || 'info',
    customClass: '_fc-message-tip',
  })
}
const Ii = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r()
  })(Sn, () => {
    const n = 1e3; const r = 6e4; const i = 36e5; const o = 'millisecond'; const a = 'second'; const s = 'minute'; const l = 'hour'; const c = 'day'; const u = 'week'; const p = 'month'; const h = 'quarter'; const m = 'year'; const w = 'date'; const b = 'Invalid Date'; const A = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i; const M = /\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g; const V = { name: 'en', weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'), months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), ordinal(D) {
      const E = ['th', 'st', 'nd', 'rd']; const $ = D % 100
      return `[${D}${E[($ - 20) % 10] || E[$] || E[0]}]`
    } }; const F = function (D, E, $) {
      const d = String(D)
      return !d || d.length >= E ? D : `${Array.from({ length: E + 1 - d.length }).join($)}${D}`
    }; const G = { s: F, z(D) {
      const E = -D.utcOffset(); const $ = Math.abs(E); const d = Math.floor($ / 60); const f = $ % 60
      return `${(E <= 0 ? '+' : '-') + F(d, 2, '0')}:${F(f, 2, '0')}`
    }, m: function D(E, $) {
      if (E.date() < $.date())
        return -D($, E)
      const d = 12 * ($.year() - E.year()) + ($.month() - E.month()); const f = E.clone().add(d, p); const v = $ - f < 0; const y = E.clone().add(d + (v ? -1 : 1), p)
      return +(-(d + ($ - f) / (v ? f - y : y - f)) || 0)
    }, a(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D)
    }, p(D) {
      return { M: p, y: m, w: u, d: c, D: w, h: l, m: s, s: a, ms: o, Q: h }[D] || String(D || '').toLowerCase().replace(/s$/, '')
    }, u(D) {
      return D === void 0
    } }; let Q = 'en'; const Z = {}
    Z[Q] = V
    const ee = '$isDayjsObject'; const Y = function (D) {
      return D instanceof Ee || !(!D || !D[ee])
    }; const se = function D(E, $, d) {
      let f
      if (!E)
        return Q
      if (typeof E == 'string') {
        const v = E.toLowerCase()
        Z[v] && (f = v), $ && (Z[v] = $, f = v)
        const y = E.split('-')
        if (!f && y.length > 1)
          return D(y[0])
      } else {
        const g = E.name
        Z[g] = E, f = g
      }
      return !d && f && (Q = f), f || !d && Q
    }; const ne = function (D, E) {
      if (Y(D))
        return D.clone()
      const $ = typeof E == 'object' ? E : {}
      return $.date = D, $.args = arguments, new Ee($)
    }; const ie = G
    ie.l = se, ie.i = Y, ie.w = function (D, E) {
      return ne(D, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset })
    }
    var Ee = (function () {
      function D($) {
        this.$L = se($.locale, null, !0), this.parse($), this.$x = this.$x || $.x || {}, this[ee] = !0
      }
      const E = D.prototype
      return E.parse = function ($) {
        this.$d = (function (d) {
          const f = d.date; const v = d.utc
          if (f === null)
            return new Date(Number.NaN)
          if (ie.u(f))
            return new Date()
          if (f instanceof Date)
            return new Date(f)
          if (typeof f == 'string' && !/Z$/i.test(f)) {
            const y = f.match(A)
            if (y) {
              const g = y[2] - 1 || 0; const k = (y[7] || '0').substring(0, 3)
              return v ? new Date(Date.UTC(y[1], g, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, k)) : new Date(y[1], g, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, k)
            }
          }
          return new Date(f)
        }($)), this.init()
      }, E.init = function () {
        const $ = this.$d
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds()
      }, E.$utils = function () {
        return ie
      }, E.isValid = function () {
        return this.$d.toString() !== b
      }, E.isSame = function ($, d) {
        const f = ne($)
        return this.startOf(d) <= f && f <= this.endOf(d)
      }, E.isAfter = function ($, d) {
        return ne($) < this.startOf(d)
      }, E.isBefore = function ($, d) {
        return this.endOf(d) < ne($)
      }, E.$g = function ($, d, f) {
        return ie.u($) ? this[d] : this.set(f, $)
      }, E.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
      }, E.valueOf = function () {
        return this.$d.getTime()
      }, E.startOf = function ($, d) {
        const f = this; const v = !!ie.u(d) || d; const y = ie.p($); const g = function (C, x) {
          const P = ie.w(f.$u ? Date.UTC(f.$y, x, C) : new Date(f.$y, x, C), f)
          return v ? P : P.endOf(c)
        }; const k = function (C, x) {
          return ie.w(f.toDate()[C].apply(f.toDate('s'), (v ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(x)), f)
        }; const j = this.$W; const I = this.$M; const q = this.$D; const z = `set${this.$u ? 'UTC' : ''}`
        switch (y) {
          case m:
            return v ? g(1, 0) : g(31, 11)
          case p:
            return v ? g(1, I) : g(0, I + 1)
          case u:
            var N = this.$locale().weekStart || 0; var U = (j < N ? j + 7 : j) - N
            return g(v ? q - U : q + (6 - U), I)
          case c:
          case w:
            return k(`${z}Hours`, 0)
          case l:
            return k(`${z}Minutes`, 1)
          case s:
            return k(`${z}Seconds`, 2)
          case a:
            return k(`${z}Milliseconds`, 3)
          default:
            return this.clone()
        }
      }, E.endOf = function ($) {
        return this.startOf($, !1)
      }, E.$set = function ($, d) {
        let f; const v = ie.p($); const y = `set${this.$u ? 'UTC' : ''}`; const g = (f = {}, f[c] = `${y}Date`, f[w] = `${y}Date`, f[p] = `${y}Month`, f[m] = `${y}FullYear`, f[l] = `${y}Hours`, f[s] = `${y}Minutes`, f[a] = `${y}Seconds`, f[o] = `${y}Milliseconds`, f)[v]; const k = v === c ? this.$D + (d - this.$W) : d
        if (v === p || v === m) {
          const j = this.clone().set(w, 1)
          j.$d[g](k), j.init(), this.$d = j.set(w, Math.min(this.$D, j.daysInMonth())).$d
        } else {
          g && this.$d[g](k)
        }
        return this.init(), this
      }, E.set = function ($, d) {
        return this.clone().$set($, d)
      }, E.get = function ($) {
        return this[ie.p($)]()
      }, E.add = function ($, d) {
        let f; const v = this
        $ = Number($)
        const y = ie.p(d); const g = function (I) {
          const q = ne(v)
          return ie.w(q.date(q.date() + Math.round(I * $)), v)
        }
        if (y === p)
          return this.set(p, this.$M + $)
        if (y === m)
          return this.set(m, this.$y + $)
        if (y === c)
          return g(1)
        if (y === u)
          return g(7)
        const k = (f = {}, f[s] = r, f[l] = i, f[a] = n, f)[y] || 1; const j = this.$d.getTime() + $ * k
        return ie.w(j, this)
      }, E.subtract = function ($, d) {
        return this.add(-1 * $, d)
      }, E.format = function ($) {
        const d = this; const f = this.$locale()
        if (!this.isValid())
          return f.invalidDate || b
        const v = $ || 'YYYY-MM-DDTHH:mm:ssZ'; const y = ie.z(this); const g = this.$H; const k = this.$m; const j = this.$M; const I = f.weekdays; const q = f.months; const z = f.meridiem; const N = function (x, P, _, O) {
          return x && (x[P] || x(d, v)) || _[P].slice(0, O)
        }; const U = function (x) {
          return ie.s(g % 12 || 12, x, '0')
        }; const C = z || function (x, P, _) {
          const O = x < 12 ? 'AM' : 'PM'
          return _ ? O.toLowerCase() : O
        }
        return v.replace(M, (x, P) => {
          return P || (function (_) {
            switch (_) {
              case 'YY':
                return String(d.$y).slice(-2)
              case 'YYYY':
                return ie.s(d.$y, 4, '0')
              case 'M':
                return j + 1
              case 'MM':
                return ie.s(j + 1, 2, '0')
              case 'MMM':
                return N(f.monthsShort, j, q, 3)
              case 'MMMM':
                return N(q, j)
              case 'D':
                return d.$D
              case 'DD':
                return ie.s(d.$D, 2, '0')
              case 'd':
                return String(d.$W)
              case 'dd':
                return N(f.weekdaysMin, d.$W, I, 2)
              case 'ddd':
                return N(f.weekdaysShort, d.$W, I, 3)
              case 'dddd':
                return I[d.$W]
              case 'H':
                return String(g)
              case 'HH':
                return ie.s(g, 2, '0')
              case 'h':
                return U(1)
              case 'hh':
                return U(2)
              case 'a':
                return C(g, k, !0)
              case 'A':
                return C(g, k, !1)
              case 'm':
                return String(k)
              case 'mm':
                return ie.s(k, 2, '0')
              case 's':
                return String(d.$s)
              case 'ss':
                return ie.s(d.$s, 2, '0')
              case 'SSS':
                return ie.s(d.$ms, 3, '0')
              case 'Z':
                return y
            }
            return null
          }(x)) || y.replace(':', '')
        })
      }, E.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
      }, E.diff = function ($, d, f) {
        let v; const y = this; const g = ie.p(d); const k = ne($); const j = (k.utcOffset() - this.utcOffset()) * r; const I = this - k; const q = function () {
          return ie.m(y, k)
        }
        switch (g) {
          case m:
            v = q() / 12
            break
          case p:
            v = q()
            break
          case h:
            v = q() / 3
            break
          case u:
            v = (I - j) / 6048e5
            break
          case c:
            v = (I - j) / 864e5
            break
          case l:
            v = I / i
            break
          case s:
            v = I / r
            break
          case a:
            v = I / n
            break
          default:
            v = I
        }
        return f ? v : ie.a(v)
      }, E.daysInMonth = function () {
        return this.endOf(p).$D
      }, E.$locale = function () {
        return Z[this.$L]
      }, E.locale = function ($, d) {
        if (!$)
          return this.$L
        const f = this.clone(); const v = se($, d, !0)
        return v && (f.$L = v), f
      }, E.clone = function () {
        return ie.w(this.$d, this)
      }, E.toDate = function () {
        return new Date(this.valueOf())
      }, E.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
      }, E.toISOString = function () {
        return this.$d.toISOString()
      }, E.toString = function () {
        return this.$d.toUTCString()
      }, D
    }()); const nt = Ee.prototype
    return ne.prototype = nt, [['$ms', o], ['$s', a], ['$m', s], ['$H', l], ['$W', c], ['$M', p], ['$y', m], ['$D', w]].forEach((D) => {
      nt[D[1]] = function (E) {
        return this.$g(E, D[0], D[1])
      }
    }), ne.extend = function (D, E) {
      return D.$i || (D(E, Ee, ne), D.$i = !0), ne
    }, ne.locale = se, ne.isDayjs = Y, ne.unix = function (D) {
      return ne(1e3 * D)
    }, ne.en = Z[Q], ne.Ls = Z, ne.p = {}, ne
  })
})(Ii)
const Ae = Ii.exports; function Ln(t, e, n, r) {
  const i = r || {}
  return e.forEach((o) => {
    t.includes(o[n || 'id']) && t.splice(t.indexOf(o[n || 'id']), 1, o[i.label || 'label']), ot.trueArray(o[i.children || 'children']) && Ln(t, o[i.children || 'children'], n, r)
  }), t
} function tv(t, e) {
  return e.forEach((n) => {
    t.includes(n.value) && (t[t.indexOf(n.value)] = n.label)
  }), t
}
function Kt(t) {
  return t == null || t === '' ? [] : Array.isArray(t) ? t : [t]
}
function nv(t, e) {
  let n = e.rule.value
  const r = (...s) => e.$render.vNode.h(...s); const i = e.type; const o = e.$handle.subForm[e.id]; const a = e.prop.readMode
  if (e.prop.title.title && e.prop.title.title.trim() && (e.prop.title.title += '\uFF1A'), a === !1 || a === 'custom' || !e.input || e.rule.subForm || (Array.isArray(o) ? o.length : o) || [
    'fcGroup',
    'fcSubForm',
    'tableForm',
    'tableFormPro',
    'fcJson',
    'stepForm',
    'nestedTableForm',
    'infiniteTableForm',
    'fcUpload',
    'fcDialog',
    'fcDrawer',
    'fcPopup',
  ].includes(e.trueType)) {
    return e.trueType === 'fcUpload' && (e.prop.props.disabled = !0), e.parser.render(t, e)
  }
  if (['radio', 'select', 'checkbox'].includes(i)) {
    n = tv([...Kt(n)], e.prop.props.options || e.prop.props.formCreateInject.options || []).join(', ')
  } else if (['timePicker', 'datePicker', 'slider'].includes(i)) {
    i === 'datePicker' && e.prop.props.format && (n = Array.isArray(n) ? n.map(s => s ? Ae(s).format(e.prop.props.format) : '') : n ? Ae(n).format(e.prop.props.format) : ''), n = Array.isArray(n) ? n.join(' - ') : n
  } else if (i === 'cascader') {
    n = [...Kt(n)], Array.isArray(n[0]) || (n = [n]), n = n.map(s => Ln(
      s,
      e.prop.props.options || e.prop.props.formCreateInject.options || [],
      'value',
      e.prop.props.props,
    ).join('/')).join(', ')
  } else if (i === 'elTransfer') {
    const s = [...Kt(n)]
    n = Ln(s, e.prop.props.data || e.prop.props.formCreateInject.options || [], 'key').join(', ')
  } else if (i === 'fcDataSelect') {
    n = [...Kt(n)].map(l => l[e.prop.props.labelKey || 'label']).join(', ')
  } else if (['tree', 'elTreeSelect'].includes(i)) {
    const s = e.prop.props.data || e.prop.props.formCreateInject.options || []
    n = Ln([...Kt(n)], s, i === 'elTreeSelect' ? 'value' : 'id').join(', ')
  } else {
    if (i === 'fcEditor' || a === 'html')
      return r('div', { innerHTML: n })
    if (a === 'image') {
      return n = Kt(n), r(
        'div',
        { class: '_fc-upload' },
        n.map((s) => {
          return r('div', { class: '_fc-upload-preview' }, [
            r('el-image', {
              src: (s == null ? void 0 : s.url) || s,
              previewSrcList: n.map(l => (l == null ? void 0 : l.url) || l),
              previewTeleported: !0,
              fit: 'cover',
            }),
          ])
        }),
      )
    }
    if ((i === 'switch' || i === 'el-switch') && (e.prop.props.activeValue != null || e.prop.props.inactiveValue != null)) {
      n = e.prop.props.activeValue === n ? '\u662F' : '\u5426'
    } else {
      if (i === 'signaturePad' && n)
        return r('el-image', { src: n, previewTeleported: !0, fit: 'cover', style: { height: '90px' } })
      i === 'fcTdtMapPicker' ? n = (n == null ? void 0 : n.name) || '' : typeof n == 'boolean' && (n = n ? '\u662F' : '\u5426')
    }
  }
  return r('span', { class: '_fc-read-view', style: { whiteSpace: 'pre-line' } }, [`${n == null ? '' : n}`])
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
      const i = new t[['I', 'm', 'a', 'g', 'e'].join('')](); const o = t[['b', 't', 'o', 'a'].join('')]; const a = t[['a', 't', 'o', 'b'].join('')]; const s = t[['e', 'n', 'c', 'o', 'd', 'e', 'U', 'R', 'I', 'C', 'o', 'm', 'p', 'o', 'n', 'e', 'n', 't'].join('')]; const l = o(`${s(`${t.location.host}, ${t.formCreate.license || ''}`)}, ArrSOUCjOXtanmqMgVAE`); const c = l.substr(2, 8)
      i.src = a(a('YUhSMGNITTZMeTloY0drdVptOXliUzFqY21WaGRHVXVZMjl0TDJndWNHNW5QM1U5')) + (c.substr(2, 3) + l.slice(0, 10).split('').reverse().join('') + c.substr(3, 2) + l.slice(10)).replace(/=/g, '')
    }
  } catch {
  }
})()
const Ya = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r()
  })(Sn, () => {
    const n = 'month'; const r = 'quarter'
    return function (i, o) {
      const a = o.prototype
      a.quarter = function (c) {
        return this.$utils().u(c) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (c - 1))
      }
      const s = a.add
      a.add = function (c, u) {
        return c = Number(c), this.$utils().p(u) === r ? this.add(3 * c, n) : s.bind(this)(c, u)
      }
      const l = a.startOf
      a.startOf = function (c, u) {
        const p = this.$utils(); const h = !!p.u(u) || u
        if (p.p(c) === r) {
          const m = this.quarter() - 1
          return h ? this.month(3 * m).startOf(n).startOf('day') : this.month(3 * m + 2).endOf(n).endOf('day')
        }
        return l.bind(this)(c, u)
      }
    }
  })
})(Ya)
const rv = Ya.exports
const Wa = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r()
  })(Sn, () => {
    const n = 'week'; const r = 'year'
    return function (i, o, a) {
      const s = o.prototype
      s.week = function (l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), 'day')
        const c = this.$locale().yearStart || 1
        if (this.month() === 11 && this.date() > 25) {
          const u = a(this).startOf(r).add(1, r).date(c); const p = a(this).endOf(n)
          if (u.isBefore(p))
            return 1
        }
        const h = a(this).startOf(r).date(c).startOf(n).subtract(1, 'millisecond'); const m = this.diff(h, n, !0)
        return m < 0 ? a(this).startOf('week').week() : Math.ceil(m)
      }, s.weeks = function (l) {
        return l === void 0 && (l = null), this.week(l)
      }
    }
  })
})(Wa)
const iv = Wa.exports
const ov = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r(Ii.exports)
  })(Sn, (n) => {
    function r(a) {
      return a && typeof a == 'object' && 'default' in a ? a : { default: a }
    }
    const i = r(n); const o = { name: 'zh-cn', weekdays: '\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D'.split('_'), weekdaysShort: '\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D'.split('_'), weekdaysMin: '\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D'.split('_'), months: '\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708'.split('_'), monthsShort: '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split('_'), ordinal(a, s) {
      return s === 'W' ? `${a}\u5468` : `${a}\u65E5`
    }, weekStart: 1, yearStart: 4, formats: { LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY\u5E74M\u6708D\u65E5', LLL: 'YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206', LLLL: 'YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206', l: 'YYYY/M/D', ll: 'YYYY\u5E74M\u6708D\u65E5', lll: 'YYYY\u5E74M\u6708D\u65E5 HH:mm', llll: 'YYYY\u5E74M\u6708D\u65E5dddd HH:mm' }, relativeTime: { future: '%s\u5185', past: '%s\u524D', s: '\u51E0\u79D2', m: '1 \u5206\u949F', mm: '%d \u5206\u949F', h: '1 \u5C0F\u65F6', hh: '%d \u5C0F\u65F6', d: '1 \u5929', dd: '%d \u5929', M: '1 \u4E2A\u6708', MM: '%d \u4E2A\u6708', y: '1 \u5E74', yy: '%d \u5E74' }, meridiem(a, s) {
      const l = 100 * a + s
      return l < 600 ? '\u51CC\u6668' : l < 900 ? '\u65E9\u4E0A' : l < 1100 ? '\u4E0A\u5348' : l < 1300 ? '\u4E2D\u5348' : l < 1800 ? '\u4E0B\u5348' : '\u665A\u4E0A'
    } }
    return i.default.locale(o, null, !0), o
  })
})(ov)
Ae.locale('zh-cn')
Ae.extend(rv)
Ae.extend(iv)
function Eo(t, e, n) {
  e = (e || '').split('.')
  let r = 0; const i = e.length
  for (; t != null && r < i;)
    t = t[e[r++]]
  return r && r === i && t !== void 0 ? t : n
}
const Jt = {
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
}; const av = 'YYYY-MM-DD HH:mm:ss'; const kt = (t, e) => t == null ? e : t; const Ve = {
  ADD(t, e) {
    return Jt.Add(kt(t, '0'), kt(e, '0'))
  },
  SUB(t, e) {
    return Jt.Sub(kt(t, '0'), kt(e, '0'))
  },
  MUL(t, e) {
    return Jt.Mul(kt(t, '0'), kt(e, '0'))
  },
  DIV(t, e) {
    return Jt.Div(kt(t, '0'), kt(e, '0'))
  },
  SUM(...t) {
    return (t || []).reduce((e, n) => Jt.Add(e, Array.isArray(n) ? Ve.SUM(...n) : n || 0), 0)
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
    return e.length ? Jt.Div(Ve.SUM(e), e.length) : 0
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
    return e > 0 ? i = i.add(e, n) : e < 0 && (i = i.subtract(-1 * e, n)), i.format(r || av)
  },
  ADDYEAR(t, e, n) {
    return Ve.MODIFYDATE(t, Math.max(e, 0), 'y', n)
  },
  ADDMONTH(t, e, n) {
    return Ve.MODIFYDATE(t, Math.max(e, 0), 'M', n)
  },
  ADDDAY(t, e, n) {
    return Ve.MODIFYDATE(t, Math.max(e, 0), 'd', n)
  },
  ADDHOUR(t, e, n) {
    return Ve.MODIFYDATE(t, Math.max(e, 0), 'h', n)
  },
  ADDMINUTE(t, e, n) {
    return Ve.MODIFYDATE(t, Math.max(e, 0), 'm', n)
  },
  ADDSECOND(t, e, n) {
    return Ve.MODIFYDATE(t, Math.max(e, 0), 's', n)
  },
  ADDWEEK(t, e, n) {
    return Ve.MODIFYDATE(t, Math.max(e, 0), 'w', n)
  },
  SUBYEAR(t, e, n) {
    return e = Math.max(e, 0), Ve.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'y', n)
  },
  SUBMONTH(t, e, n) {
    return e = Math.max(e, 0), Ve.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'M', n)
  },
  SUBDAY(t, e, n) {
    return e = Math.max(e, 0), Ve.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'd', n)
  },
  SUBHOUR(t, e, n) {
    return e = Math.max(e, 0), Ve.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'h', n)
  },
  SUBMINUTE(t, e, n) {
    return e = Math.max(e, 0), Ve.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'm', n)
  },
  SUBSECOND(t, e, n) {
    return e = Math.max(e, 0), Ve.MODIFYDATE(t, e > 0 ? -1 * e : 0, 's', n)
  },
  SUBWEEK(t, e, n) {
    return e = Math.max(e, 0), Ve.MODIFYDATE(t, e > 0 ? -1 * e : 0, 'w', n)
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
    return ot.empty(t)
  },
  NOTEMPTY(t) {
    return !ot.empty(t)
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
      let m = ''; let w = ''; let b = 0; let A = !0
      for (; h > 0;) {
        const M = h % 10
        M === 0 ? A || (A = !0, w = e[M] + w) : (A = !1, m = e[M], m += r[b], w = m + w), b++, h = Math.floor(h / 10)
      }
      return w
    }
    let a = 0; let s = ''; let l = ''; let c = !1
    if (t === 0)
      return e[0]
    let u = Math.floor(t); const p = Math.round((t - u) * 100)
    for (; u > 0;) {
      const h = u % 1e4
      c && (l = e[0] + l), s = o(h), s += h !== 0 ? n[a] : n[0], l = s + l, c = h < 1e3 && h > 0, u = Math.floor(u / 1e4), a++
    }
    return l && (l += '\u5143'), p > 0 ? (l += e[Math.floor(p / 10)] + i[0], p % 10 !== 0 && (l += e[p % 10] + i[1])) : l && (l += '\u6574'), l
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
    return ot.Undef(t) ? e : t
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
      Array.isArray(r) ? n.push(...Ve.COLUMN(r, e)) : r && n.push(r[e])
    }), n
  },
  VALUE(t, e, n) {
    return Eo(t, e, n)
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
    return ot.empty(this.rule.value) ? t : this.rule.value
  },
  GET_DATA(t, e) {
    return this.api.getData(t, e)
  },
  GET_VARIABLE(t, e) {
    return this.api.getData(`$var.${t}`, e)
  },
  CURRENT_RULE(t, e) {
    return Eo(this.rule, t, e)
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
function sv(t) {
  const e = document.createElement('textarea')
  e.style.position = 'fixed', e.style.top = 0, e.style.left = '-9999px', e.value = t, document.body.appendChild(e), e.focus(), e.select()
  try {
    document.execCommand('copy')
  } catch {
    console.log('Oops, unable to copy')
  }
  ev('\u5DF2\u590D\u5236!', 'success'), document.body.removeChild(e)
}
function lv(t) {
  return t.filter((e, n) => t.indexOf(e) === n)
}
const uv = ye({
  name: 'FcDataSelect',
  components: { FcDialog: la },
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
      load: Mr(() => {
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
      const t = lv([...this.list, ...this.$refs.dialog.fapi.el(this.formRule[1].name).getEl().getSelectionRows()]); const e = t.map(n => n[this.valueKey || 'value'])
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
      const t = Br([this.searchRule, this.tableRule])
      return t[1].on || (t[1].on = {}), t[1].props || (t[1].props = {}), this.multiple && (t[1].props.rowKey || (t[1].props.rowKey = this.valueKey || 'value'), t[1].name || (t[1].name = _t())), t[1].props.selection = !0, t[1].on.rowClick ? t[1].on.rowClick = [(...e) => this.tableRowClick(...e), t[1].on.rowClick] : t[1].on.rowClick = (...e) => this.tableRowClick(...e), t[1].on.selectionChange ? t[1].on.selectionChange = [(...e) => this.selectionChange(...e), t[1].on.selectionChange] : t[1].on.selectionChange = (...e) => this.selectionChange(...e), t
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
}); const cv = { class: '_fc-data-select' }
function fv(t, e, n, r, i, o) {
  const a = J('el-option'); const s = J('el-select'); const l = J('FcDialog')
  return H(), oe('div', cv, [
    B(s, {
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
      default: me(() => [
        (H(!0), oe(ut, null, Dt(t.options, c => (H(), xe(a, {
          key: c.value,
          label: c.label,
          value: c.value,
        }, null, 8, ['label', 'value']))), 128)),
      ]),
      _: 1,
    }, 8, ['disabled', 'placeholder', 'multiple', 'multipleLimit', 'clearable', 'model-value', 'onUpdate:modelValue', 'onVisibleChange', 'onClear']),
    B(l, {
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
const dv = /* @__PURE__ */ Re(uv, [['render', fv]])
const hv = ye({
  name: 'FcTdtMapPicker',
  data() {
    return {
      dialogVisible: !1,
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
    openDialog() {
      this.disabled || (this.dialogVisible = !0, this.$nextTick(() => {
        this.map || this.loadMap()
      }))
    },
    closeDialog() {
      this.dialogVisible = !1, this.searchKeyword = '', this.map && (this.map.removeEventListener('click', this.handleMapClick), this.map.clearOverLays(), this.map = null, this.marker = null)
    },
    confirmSelection() {
      if (!this.tempLng || !this.tempLat) {
        Ct.warning('\u8BF7\u9009\u62E9\u4F4D\u7F6E')
        return
      }
      const t = {
        lng: this.tempLng,
        lat: this.tempLat,
        name: this.tempLocationName,
      }
      this.$emit('update:modelValue', t), this.$emit('change', t), this.closeDialog()
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
            Ct.info('\u672A\u627E\u5230\u76F8\u5173\u5730\u70B9')
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
        Ct.error('\u5929\u5730\u56FE API Key \u672A\u914D\u7F6E')
        return
      }
      this.$nextTick(() => {
        const t = `https://api.tianditu.gov.cn/api?v=4.0&tk=${this.mapApiKey}`
        xt.isDefined('tianditu') || xt.depend('tianditu', t), xt.loadDepend('tianditu').then(() => this.initMap()).catch(() => Ct.error('\u5929\u5730\u56FE\u52A0\u8F7D\u5931\u8D25'))
      })
    },
    initMap() {
      if (!window.T || !this.$refs.mapContainer) {
        window.T || Ct.error('\u5929\u5730\u56FE API \u52A0\u8F7D\u5931\u8D25')
        return
      }
      this.tempLng && this.tempLat
        ? this.createMap(this.tempLng, this.tempLat)
        : this.getCurrentLocation((t, e) => {
            this.tempLng = t, this.tempLat = e, this.createMap(t, e), this.getLocationName(t, e)
          })
    },
    createMap(t, e) {
      !window.T || !this.$refs.mapContainer || (this.map = Me(new window.T.Map(this.$refs.mapContainer)), this.map.centerAndZoom(new window.T.LngLat(t, e), this.zoom), this.updateMarker(t, e), this.map.addEventListener('click', this.handleMapClick), this.$emit('loaded', this.map))
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
}); const pv = { class: '_fc-tdt-picker' }; const mv = { class: '_fc-tdt-picker-dialog-body' }; const gv = { class: '_fc-tdt-picker-search-wrapper' }; const vv = {
  class: '_fc-tdt-picker-container',
  ref: 'mapContainer',
}
function _v(t, e, n, r, i, o) {
  const a = J('el-input'); const s = J('el-button'); const l = J('el-dialog')
  return H(), oe('div', pv, [
    B(a, {
      modelValue: t.displayValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      readonly: '',
      onClick: t.openDialog,
      style: { cursor: 'pointer' },
    }, {
      suffix: me(() => e[3] || (e[3] = [
        Oe('i', { class: 'fc-icon icon-address' }, null, -1),
      ])),
      _: 1,
    }, 8, ['modelValue', 'placeholder', 'disabled', 'onClick']),
    B(l, {
      'modelValue': t.dialogVisible,
      'onUpdate:modelValue': e[2] || (e[2] = c => t.dialogVisible = c),
      'title': '\u9009\u62E9\u4F4D\u7F6E',
      'width': '800px',
      'close-on-click-modal': !1,
      'destroy-on-close': '',
      'onClosed': t.closeDialog,
      'class': '_fc-tdt-picker-dialog',
    }, {
      footer: me(() => [
        B(s, {
          onClick: e[1] || (e[1] = c => t.dialogVisible = !1),
        }, {
          default: me(() => e[5] || (e[5] = [
            Le('\u53D6\u6D88'),
          ])),
          _: 1,
        }),
        B(s, {
          type: 'primary',
          onClick: t.confirmSelection,
          disabled: !t.tempLng || !t.tempLat,
        }, {
          default: me(() => e[6] || (e[6] = [
            Le('\u786E\u5B9A'),
          ])),
          _: 1,
        }, 8, ['onClick', 'disabled']),
      ]),
      default: me(() => [
        Oe('div', mv, [
          Oe('div', gv, [
            B(a, {
              'modelValue': t.searchKeyword,
              'onUpdate:modelValue': e[0] || (e[0] = c => t.searchKeyword = c),
              'placeholder': '\u641C\u7D22\u5730\u70B9',
              'clearable': '',
              'onKeyup': us(t.handleSearch, ['enter']),
              'class': '_fc-tdt-picker-search-input',
            }, {
              append: me(() => [
                B(s, { onClick: t.handleSearch }, {
                  default: me(() => e[4] || (e[4] = [
                    Oe('i', { class: 'fc-icon icon-search' }, null, -1),
                  ])),
                  _: 1,
                }, 8, ['onClick']),
              ]),
              _: 1,
            }, 8, ['modelValue', 'onKeyup']),
          ]),
          Oe('div', vv, null, 512),
        ]),
      ]),
      _: 1,
    }, 8, ['modelValue', 'onClosed']),
  ])
}
const yv = /* @__PURE__ */ Re(hv, [['render', _v], ['__scopeId', 'data-v-3a3b6801']])
function bv(t, e) {
  let n = [t]
  const r = e.split('.')
  let i = 1
  for (; r[i];) {
    const o = []
    n.forEach((a) => {
      Object.values(a.ctxs).forEach((s) => {
        if (s.rule._fc_id === r[i - 1]) {
          const l = a.subForm[s.id]
          o.push(...Array.isArray(l) ? l : [l])
        }
      })
    }), n = o.map(a => a.rule[0].__fc__.$handle), i++
  }
  return [n, r[i - 1]]
} function Fn(t, e, n) {
  const r = t.vm.setupState.top.setupState.fc.$handle
  let i = [t.$handle]
  t.$handle !== r && i.push(r)
  let o = e
  e.includes('.') && ([i, o] = bv(r, e)), i.forEach((a) => {
    Object.values(a.ctxs).forEach((s) => {
      s.rule._fc_id === o && n(s.rule, a.api)
    })
  })
} const Xa = {
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
      Fn(n, o, (a) => {
        a.hidden = i
      })
    })
  },
  disabled(t, e, n) {
    const r = typeof t.id == 'string' ? [t.id] : t.id || []
    let i = !!t.status
    t.compute && (i = !!n.$handle.compute(e.self.__fc__, t.formula)), r.forEach((o) => {
      Fn(n, o, (a) => {
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
      Fn(n, o, (a, s) => {
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
      r.compute && (i = n.$handle.compute(e.self.__fc__, r.formula)), Fn(n, r.id, (o) => {
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
    t.compute && (r = n.$handle.compute(e.self.__fc__, t.formula)), sv(r)
  },
  callback(t, e) {
    return t.callback && t.callback(e)
  },
  message(t) {
    Ct(t || {})
  },
}
function _n(t, e) {
  return t.reduce((n, r) => n.then(() => r(e)), Promise.resolve())
}
function Ka(t) {
  const e = (n, r) => {
    const i = []
    return r.forEach((o) => {
      const { method: a, config: s, expression: l, stopPropagation: c, ignoreError: u } = o
      i.push(p => new Promise((h) => {
        if (a === 'condition') {
          const b = [];
          (o.children || []).forEach((A) => {
            try {
              t.$handle.compute(n.__fc__, A.config) !== !1 && b.push(_n(e(n, A.children || []), p))
            } catch (M) {
              console.error(M)
            }
          }), b.length
            ? Promise.allSettled(b).then((A) => {
                A.filter(V => V.status === 'fulfilled').length && h()
              })
            : (!o.children || !o.children.length) && h()
          return
        }
        if (l && t.$handle.compute(n.__fc__, l) === !1) {
          h()
          return
        }
        const m = (...b) => {
          (!c || t.$handle.compute(n.__fc__, c) !== !0) && h(...b)
        }
        let w
        try {
          w = Xa[a](s || {}, p, t)
        } catch (b) {
          console.error(b), u !== !1 && m()
          return
        }
        w && w.then
          ? w.then(m).catch(() => {
              u !== !1 && m()
            })
          : m(w)
      }))
    }), i
  }
  return e
}
function wv(t) {
  const e = Ka(t)
  return Object.keys(t.options.value.globalEvent || {}).forEach((n) => {
    const r = t.options.value.globalEvent[n]
    r.flow && (r.handle = function (i) {
      _n(e(i.rule, r.flow), i)
    })
  }), ['onReset', 'onSubmit', 'beforeSubmit', 'onCreated', 'onMounted', 'onReload', 'onChange', 'beforeFetch'].forEach((n) => {
    const r = t.options.value[n]
    Array.isArray(r) && (t.options.value[n] = (() => {
      const i = e(t.rules[0], r)
      return t.$handle.inject(t.rules[0], (o) => {
        _n(i, o)
      })
    })())
  }), {
    name: 'behavior',
    load(n, r) {
      const i = n.getValue(); const o = {}; const a = {}
      i && Object.keys(i).forEach((s) => {
        if (Array.isArray(i[s])) {
          const l = e(r, i[s])
          if (l.length) {
            const c = t.$handle.inject(
              r,
              (u) => {
                _n(l, u)
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
function $v(t) {
  const e = Ka(t); const n = {
    name: 'easySlots',
    load(r, i) {
      const o = r.getValue(); const a = {}
      o && Object.keys(o).forEach((s) => {
        const l = {}
        Object.keys(o[s].on || {}).forEach((c) => {
          let u = o[s].on[c]
          if (Array.isArray(u)) {
            const p = e(i, u)
            u = function (h) {
              _n(p, h)
            }
          }
          l[c] = t.$handle.inject(i, u)
        }), a[s] = o[s].type === 'icon'
          ? {
              type: 'i',
              class: `fc-icon iconfont ${o[s].value}`,
              on: l,
              style: o[s].style,
            }
          : {
              type: 'div',
              class: `fc-easyslots-${s}`,
              on: l,
              style: o[s].style,
              children: [`${o[s].value || ''}`],
            }
      }), r.getProp().renderSlots = a
    },
  }
  return n.watch = n.load, n
}
function Sv(t) {
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
    const s = o.substring(0, a).trim(); const l = o.substring(a)
    return s.split(',').map(p => p.trim()).map(p => p.includes('::root') || p.includes('::wrap') ? p : `::root ${p}`).join(', ') + l
  }).join(`

`)
}
function Ov(t) {
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
      a._css && e.deleted(n), o && (o = Sv(o).replaceAll('::root', `.com_${n.id}`).replaceAll('::wrap', `.wrap_${n.id}`), t.cascadingStyle.innerHTML += `
${o}`, a._css = o, a.class = `com_${n.id}`, a.wrap = { class: `wrap_${n.id}` }, i.sync(r))
    },
    deleted(n) {
      const r = n.getProp()
      r._css && t.cascadingStyle && (t.cascadingStyle.innerHTML = t.cascadingStyle.innerHTML.replace(r._css, ''))
    },
  }
  return e.watch = e.load, e
}
function Nr(t) {
  return String(t || '').replace(/\s+/g, ' ').trim()
}
function xv(t, e, n, r, i) {
  let s, l, c, u
  let o = ''; let a = ''
  for (let p = e - 1; p > 0; p--) {
    const h = Nr((l = (s = t[p]) == null ? void 0 : s[n]) == null ? void 0 : l.v)
    if (h && !/_{3,}/.test(h)) {
      o = h
      break
    }
  }
  for (let p = n - 1; p > 0; p--) {
    const h = Nr((u = (c = t[e]) == null ? void 0 : c[p]) == null ? void 0 : u.v)
    if (h && !/_{3,}/.test(h)) {
      a = h
      break
    }
  }
  return a && o ? `${a}-${o}` : a || o || ''
}
function Ev(t) {
  const e = window.XLSX; const n = e.utils.decode_range(t['!ref']); const r = n.e.r + 1; const i = n.e.c + 1
  const o = []; const a = []; const s = {}
  const l = {};
  (t['!merges'] || []).forEach((c) => {
    const u = c.e.c - c.s.c + 1; const p = c.e.r - c.s.r + 1
    l[`${c.s.r + 1}:${c.s.c + 1}`] = [u, p]
  })
  for (let c = 1; c <= r; c++) {
    for (let u = 1; u <= i; u++) {
      let p = !1
      for (const A in l) {
        const [M, V] = A.split(':').map(Number); const [F, G] = l[A]
        if (M <= c && c < M + G && V <= u && u < V + F && (c !== M || u !== V)) {
          p = !0
          break
        }
      }
      if (p)
        continue
      const h = t[e.utils.encode_cell({ r: c - 1, c: u - 1 })]; const m = Nr(h ? h.v : ''); const [w, b] = l[`${c}:${u}`] || [1, 1]
      o.push({ top: c - 1, left: u - 1, row: b, col: w }), m && !/_{3,}/.test(m)
        ? (s[`${c - 1}:${u - 1}`] = { alignContent: 'center' }, a.push({
            type: 'div',
            style: {
              whiteSpace: 'pre-line',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '14px',
            },
            children: [m],
            _fc_id: `id_${_t()}`,
            name: `ref_${_t()}`,
            _fc_drag_tag: 'text',
            display: !0,
            hidden: !1,
            slot: `${c - 1}:${u - 1}`,
          }))
        : a.push({
            type: 'input',
            field: _t(),
            title: xv(t, c, u),
            $required: !1,
            _fc_id: `id_${_t()}`,
            name: `ref_${_t()}`,
            _fc_drag_tag: 'input',
            wrap: { title: !1 },
            display: !0,
            hidden: !1,
            slot: `${c - 1}:${u - 1}`,
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
      _fc_id: `id_${_t()}`,
      name: `ref_${_t()}`,
      _fc_drag_tag: 'fcTable',
      display: !0,
      hidden: !1,
    },
  ]
}
async function kv(t) {
  try {
    await xt.loadDepend('xlsx')
    const e = window.XLSX; const n = await t.arrayBuffer(); const r = e.read(n, { type: 'array' }); const i = r.SheetNames[0]; const o = r.Sheets[i]
    return Ev(o)
  } catch (e) {
    throw new Error(`\u89E3\u6790 Excel \u6587\u4EF6\u5931\u8D25: ${e instanceof Error ? e.message : String(e)}`)
  }
}
function Cv(t) {
  t.__proto__.setBehavior = (e) => {
    Yr(Xa, e)
  }, t.extendApi(e => ({
    open(n, ...r) {
      (e.el(n) || e.top.el(n)).open(...r)
    },
    close(n) {
      n ? (e.el(n) || e.top.el(n)).close() : (e.top.bus.$emit('fc.closeDialog'), e !== e.top && e.bus.$emit('fc.closeDialog'))
    },
    parseExcel(n) {
      return kv(n)
    },
  }))
}
function Av(t) {
  t.extendApi(e => ({
    message(n) {
      return Ct(n || {})
    },
  }))
}
function Rv(t) {
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
      return new Promise((l, c) => {
        xt.loadDepend(['html2canvas', 'jspdf']).then(() => {
          const u = s.el || e.formEl().$el
          u.classList.add('fc-print-form'), window.html2canvas(u, {
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
            const { left: m, right: w, top: b, bottom: A } = s; const M = h.internal.pageSize.getWidth(); const V = h.internal.pageSize.getHeight(); const F = M - m - w; const G = V - b - A; const Q = p.height * F / p.width
            if (Q <= G) {
              h.addImage(p.toDataURL('image/jpeg'), 'JPEG', m, b, F, Q)
            } else {
              let Z = Q; let ee = 0
              const Y = p.width * G / F
              for (; Z > 0;) {
                const se = document.createElement('canvas'); const ne = se.getContext('2d')
                i(ne)
                const ie = ee * Y; const Ee = Math.min(Y, p.height - ie)
                se.width = p.width, se.height = Ee, ne.drawImage(
                  p,
                  0,
                  ie,
                  p.width,
                  Ee,
                  0,
                  0,
                  p.width,
                  Ee,
                )
                const nt = Ee / p.height * Q
                h.addImage(
                  se.toDataURL('image/jpeg'),
                  'JPEG',
                  m,
                  b,
                  F,
                  nt,
                ), Z -= G, Z > 0 && (h.addPage(), ee++)
              }
            }
            return l(h)
          }).catch(c).finally(() => {
            u.classList.remove('fc-print-form')
          })
        })
      })
    }
    return {
      exportPdf(a) {
        return new Promise((s, l) => {
          o(a).then((c) => {
            window.open(URL.createObjectURL(c.output('blob'))), s()
          }).catch(l)
        })
      },
      print(a) {
        return new Promise((s, l) => {
          o(a).then((c) => {
            const u = document.createElement('iframe')
            u.style.width = '0', u.style.position = 'absolute', u.style.height = '0', u.style.border = 'none', u.onload = function () {
              setTimeout(() => {
                u.contentWindow.print()
              }, 100)
            }, document.body.appendChild(u), u.src = URL.createObjectURL(c.output('blob')), s()
          }).catch(l)
        })
      },
    }
  })
}
const ko = {
  components: {},
  mobileComponents: {},
  updateFormCreate(t) {
  },
}
_e.parser().preview = nv
function Dv(t) {
  Object.keys(Ve).forEach((e) => {
    t.setFormula(e, Ve[e])
  }), Cv(t), Av(t), Rv(t), t.register('behavior', wv), t.register('easySlots', $v), t.register('css', Ov)
}
Dv(_e)
_e.component('FcSlot', ec)
_e.component('FcJson', tc)
_e.component('DataTable', Gu)
_e.component('FcCell', J0)
_e.component('TableForm', _c)
_e.component('TableFormPro', Oc)
_e.component('StepForm', oc)
_e.component('FcValue', Qu)
_e.component('FcCity', Cc)
_e.component('FcTable', Xu)
_e.component('NestedTableForm', dc)
_e.component('InfiniteTableForm', mc)
_e.component('FcDialog', la)
_e.component('FcDrawer', Fc)
_e.component('FcInlineForm', uc)
_e.component('AudioBox', Xf)
_e.component('VideoBox', z0)
_e.component('BarCodeBox', V0)
_e.component('IframeBox', Qf)
_e.component('QrCodeBox', Y0)
_e.component('SignaturePad', Wc)
_e.component('FcEcharts', Bc)
_e.component('FcTitle', of)
_e.component('FcMarkdown', qf)
_e.component('FcDataSelect', dv)
_e.component('FcTdtMapPicker', yv)
_e.component('FcId', tf)
_e.loadjs = xt
Object.keys(ko.components).forEach((t) => {
  _e.component(t, ko.components[t])
})
export {
  _e as default,
  Dv as useAdvanced,
}
