(this.webpackJsonp=this.webpackJsonp||[]).push([[1],{806:function(e,t,r){"use strict";var i=r(109),o=r.n(i),n=r(209),a=r(0),l=r(114),p=r(295);t.a=function(e,t){var r,i=Object(p.b)();return Object(a.useMemo)((function(){return"function"==typeof e?e(i):Object(l.b)(e,i)}),t?o()(r=[i]).call(r,Object(n.a)(t)):t)}},807:function(e,t,r){"use strict";var i=r(808),o=r(809),n=r(810),a=r(812),l=r(811),p=r(815),s=r(36),u=r(0),d=r.n(u),c=r(1),m=r.n(c);t.a=function(e){return function(t){var r,c;return c=r=function(r){function s(){var t,r,o;Object(i.a)(this,s),o=Object(n.a)(this,Object(a.a)(s).apply(this,arguments));var p=(null===(t=Object(l.a)(o))||void 0===t?void 0:null===(r=t.props)||void 0===r?void 0:r.injectReducers)||null;return p&&p(e),o}return Object(p.a)(s,r),Object(o.a)(s,[{key:"render",value:function(){return d.a.createElement(t,null)}}]),s}(u.Component),Object(s.a)(r,"propTypes",{injectReducers:m.a.func}),c}}},814:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(804);var i=r(805);function o(e,t,r){var o=document.createRange(),n=window.getSelection();o.selectNode(document.getElementById(e)),n.rangeCount>0&&n.removeAllRanges(),n.addRange(o),document.execCommand("copy"),i.a.info(t)}},838:function(e,t,r){e.exports=r(839)},839:function(e,t,r){var i=r(840);e.exports=i},840:function(e,t,r){r(841);var i=r(29);e.exports=i.Object.values},841:function(e,t,r){var i=r(12),o=r(440).values;i({target:"Object",stat:!0},{values:function(e){return o(e)}})},842:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"String type","properties":{"id":{"id":"$root/properties/id","type":"string","title":"The id of the current attribute","$required":true},"type":{"id":"$root/properties/type","type":"string","title":"Type of data","$required":true,"$readOnly":true,"$defaultValue":"string"},"title":{"id":"$root/properties/title","type":"string","title":"Title, used to describe the role of the keyword","$required":true},"description":{"id":"$root/properties/description","type":"string","title":"Description, used to describe the role of the keyword"},"$required":{"id":"$root/properties/$required","type":"boolean","title":"Value must exist"},"$requiredMessage":{"id":"$root/properties/$requiredMessage","type":"string","title":"Customize the verification prompt for $required"},"pattern":{"id":"$root/properties/pattern","type":"string","title":"Regular expression verification"},"$patternOption":{"id":"$root/properties/$patternOption","type":"string","title":"Specify global, case-sensitive, and multi-line matching"},"$patternMessage":{"id":"$root/properties/$patternMessage","type":"string","title":"Custom pattern verification failure prompt message"},"minLength":{"id":"$root/properties/minLength","type":"number","title":"Minimum length verification of strings"},"$minLengthMessage":{"id":"$root/properties/$minLengthMessage","type":"string","title":"Customize minLength\'s verification failure prompt message"},"maxLength":{"id":"$root/properties/maxLength","type":"number","title":"Maximum length verification of strings"},"$maxLengthMessage":{"id":"$root/properties/$maxLengthMessage","type":"string","title":"Customize maxLength\'s verification failure prompt message"},"$length":{"id":"$root/properties/$length","type":"number","title":"Specified length verification of the string"},"$lengthMessage":{"id":"$root/properties/$lengthMessage","type":"string","title":"Customization of $length verification failure message"},"enum":{"id":"$root/properties/enum","type":"array","title":"Verify that the value of the form control must be in the array value of this keyword","items":{"id":"$root/properties/enum/items","type":"string","title":"关键值","$required":true}},"$enumMessage":{"id":"$root/properties/$enumMessage","type":"string","title":"Custom enum verification failure message"},"$readOnly":{"id":"$root/properties/$readOnly","type":"boolean","title":"Form control read only"},"$hidden":{"id":"$root/properties/$hidden","type":"boolean","title":"Hide form fields (form values still exist)"},"$tableColumnHidden":{"id":"$root/properties/$tableColumnHidden","type":"boolean","title":"Hidden columns when the object is in an array and the component is a table (the form value still exists)"},"$placeholder":{"id":"$root/properties/$placeholder","type":"string","title":"Placeholder property of a form control"},"$defaultValue":{"id":"$root/properties/$defaultValue","type":"string","title":"Default value of the form"},"$order":{"id":"$root/properties/$order","type":"number","title":"Default the order in which components are arranged"},"$componentType":{"id":"$root/properties/$componentType","type":"string","title":"Render as other components","$componentType":"select","$options":[{"label":"Text field","value":"textArea"},{"label":"Drop down box","value":"select"},{"label":"Single box","value":"radio"},{"label":"Date selector","value":"date"},{"label":"Password input","value":"password"}]},"$options":{"id":"$root/properties/$options","type":"array","title":"Optional option","items":{"id":"$root/properties/$options/items","type":"object","title":"Optional option","properties":{"label":{"id":"$root/properties/$options/items/properties/label","type":"string","title":"Displayed text","$required":true},"value":{"id":"$root/properties/$options/items/properties/value","type":"string","title":"Value","$required":true}}}}}}')},843:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"Number type","properties":{"id":{"id":"$root/properties/id","type":"string","title":"The id of the current attribute","$required":true},"type":{"id":"$root/properties/type","type":"string","title":"Type of data","$required":true,"$readOnly":true,"$defaultValue":"number"},"title":{"id":"$root/properties/title","type":"string","title":"Title, used to describe the role of the keyword","$required":true},"description":{"id":"$root/properties/description","type":"string","title":"Description, used to describe the role of the keyword"},"$required":{"id":"$root/properties/$required","type":"boolean","title":"Value must exist"},"minimum":{"id":"$root/properties/minimum","type":"number","title":"Form minimum value"},"$minimumMessage":{"id":"$root/properties/$minimumMessage","type":"string","title":"Customize the verification failure prompt message"},"maximum":{"id":"$root/properties/maximum","type":"number","title":"Form maximum value"},"$maximumMessage":{"id":"$root/properties/$maximumMessage","type":"string","title":"Customize the verification failure message for maximum"},"$integer":{"id":"$root/properties/$integer","type":"boolean","title":"Must be an integer"},"$integerMessage":{"id":"$root/properties/$integerMessage","type":"string","title":"Customized $integer validation failure message"},"enum":{"id":"$root/properties/enum","type":"array","title":"Verify that the value of the form control must be in the array value of this keyword","items":{"id":"$root/properties/enum/items","type":"number","title":"Key value","$required":true}},"$enumMessage":{"id":"$root/properties/$enumMessage","type":"string","title":"Custom enum verification failure message"},"$readOnly":{"id":"$root/properties/$readOnly","type":"boolean","title":"Form control read only"},"$hidden":{"id":"$root/properties/$hidden","type":"boolean","title":"Hide form fields (form values still exist)"},"$tableColumnHidden":{"id":"$root/properties/$tableColumnHidden","type":"boolean","title":"Hidden columns when the object is in an array and the component is a table (the form value still exists)"},"$placeholder":{"id":"$root/properties/$placeholder","type":"string","title":"Placeholder property of a form control"},"$defaultValue":{"id":"$root/properties/$defaultValue","type":"number","title":"Default value of the form"},"$order":{"id":"$root/properties/$order","type":"number","title":"Default the order in which components are arranged"},"$componentType":{"id":"$root/properties/$componentType","type":"string","title":"Render as other components","$componentType":"select","$options":[{"label":"Single box","value":"radio"}]},"$options":{"id":"$root/properties/$options","type":"array","title":"Optional option","items":{"id":"$root/properties/$options/items","type":"object","title":"Optional option","properties":{"label":{"id":"$root/properties/$options/items/properties/label","type":"string","title":"Displayed text","$required":true},"value":{"id":"$root/properties/$options/items/properties/value","type":"number","title":"Value","$required":true}}}}}}')},844:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"Boolean type","properties":{"id":{"id":"$root/properties/id","type":"string","title":"The id of the current attribute","$required":true},"type":{"id":"$root/properties/type","type":"string","title":"Type of data","$required":true,"$readOnly":true,"$defaultValue":"boolean"},"title":{"id":"$root/properties/title","type":"string","title":"Title, used to describe the role of the keyword","$required":true},"description":{"id":"$root/properties/description","type":"string","title":"Description, used to describe the role of the keyword"},"$hidden":{"id":"$root/properties/$hidden","type":"boolean","title":"Hide form fields (form values still exist)"},"$tableColumnHidden":{"id":"$root/properties/$tableColumnHidden","type":"boolean","title":"Hidden columns when the object is in an array and the component is a table (the form value still exists)"},"$defaultValue":{"id":"$root/properties/$defaultValue","type":"boolean","title":"Default value of the form"},"$order":{"id":"$root/properties/$order","type":"number","title":"Default the order in which components are arranged"},"$componentType":{"id":"$root/properties/$componentType","type":"string","title":"Render as other components","$componentType":"select","$options":[{"label":"Switch","value":"switch"}]}}}')},845:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"Boolean type","properties":{"id":{"id":"$root/properties/id","type":"string","title":"The id of the current attribute","$required":true},"type":{"id":"$root/properties/type","type":"string","title":"Type of data","$required":true,"$readOnly":true,"$defaultValue":"object"},"title":{"id":"$root/properties/title","type":"string","title":"Title, used to describe the role of the keyword","$required":true},"description":{"id":"$root/properties/description","type":"string","title":"Description, used to describe the role of the keyword"},"$order":{"id":"$root/properties/$order","type":"number","title":"Default the order in which components are arranged"},"required":{"id":"$root/properties/required","type":"array","title":"The attributes that the object must contain","items":{"id":"$root/properties/required/items","type":"string","title":"The attributes that the object must contain","$required":true}}}}')},846:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"Array type","properties":{"id":{"id":"$root/properties/id","type":"string","title":"The id of the current attribute","$required":true},"type":{"id":"$root/properties/type","type":"string","title":"Type of data","$required":true,"$readOnly":true,"$defaultValue":"array"},"title":{"id":"$root/properties/title","type":"string","title":"Title, used to describe the role of the keyword","$required":true},"description":{"id":"$root/properties/description","type":"string","title":"Description, used to describe the role of the keyword"},"minItems":{"id":"$root/properties/minItems","type":"number","title":"The minimum value of the form"},"$minimumMessage":{"id":"$root/properties/$minimumMessage","type":"string","title":"Customize the verification failure message for the minimum"},"maximum":{"id":"$root/properties/maximum","type":"number","title":"The maximum value of the form"},"$maximumMessage":{"id":"$root/properties/$maximumMessage","type":"string","title":"Customize the verification failure message for maximum"},"$componentType":{"id":"$root/properties/$componentType","type":"string","title":"Render as other components","$componentType":"select","$options":[{"label":"CheckboxGroup","value":"CheckboxGroup"},{"label":"Multi-select mode of drop-down box","value":"multiple"},{"label":"Multi-select mode for drop-down box, and you can enter text","value":"tags"}]},"$options":{"id":"$root/properties/$options","type":"array","title":"Optional option","items":{"id":"$root/properties/$options/items","type":"object","title":"Optional option","properties":{"label":{"id":"$root/properties/$options/items/properties/label","type":"string","title":"Displayed text","$required":true},"value":{"id":"$root/properties/$options/items/properties/value","type":"string","title":"Value","$required":true}}}},"$hidden":{"id":"$root/properties/$hidden","type":"boolean","title":"Hide form fields (form values still exist)"},"$order":{"id":"$root/properties/$order","type":"number","title":"Default the order in which components are arranged"},"$tableColumnHidden":{"id":"$root/properties/$tableColumnHidden","type":"boolean","title":"Hidden columns when the object is in an array and the component is a table (the form value still exists)"},"$addDataInReverseOrder":{"id":"$root/properties/$addDataInReverseOrder","type":"boolean","title":"Add data to the head of the array"}}}')},847:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"string类型","properties":{"id":{"id":"$root/properties/id","type":"string","title":"当前属性的id","$required":true},"type":{"id":"$root/properties/type","type":"string","title":"数据类型","$required":true,"$readOnly":true,"$defaultValue":"string"},"title":{"id":"$root/properties/title","type":"string","title":"标题，用于描述关键字的作用","$required":true},"description":{"id":"$root/properties/description","type":"string","title":"说明，用于描述关键字的作用"},"$required":{"id":"$root/properties/$required","type":"boolean","title":"值必须存在"},"$requiredMessage":{"id":"$root/properties/$requiredMessage","type":"string","title":"自定义$required的验证提示信息"},"pattern":{"id":"$root/properties/pattern","type":"string","title":"正则表达式验证"},"$patternOption":{"id":"$root/properties/$patternOption","type":"string","title":"指定全局匹配、区分大小写的匹配和多行匹配"},"$patternMessage":{"id":"$root/properties/$patternMessage","type":"string","title":"自定义pattern的验证失败提示信息"},"minLength":{"id":"$root/properties/minLength","type":"number","title":"字符串的最小长度验证"},"$minLengthMessage":{"id":"$root/properties/$minLengthMessage","type":"string","title":"自定义minLength的验证失败提示信息"},"maxLength":{"id":"$root/properties/maxLength","type":"number","title":"字符串的最大长度验证"},"$maxLengthMessage":{"id":"$root/properties/$maxLengthMessage","type":"string","title":"自定义maxLength的验证失败提示信息"},"$length":{"id":"$root/properties/$length","type":"number","title":"字符串的指定长度验证"},"$lengthMessage":{"id":"$root/properties/$lengthMessage","type":"string","title":"自定义$length的验证失败提示信息"},"enum":{"id":"$root/properties/enum","type":"array","title":"验证表单控件的值必须在此关键字的数组值中","items":{"id":"$root/properties/enum/items","type":"string","title":"关键值","$required":true}},"$enumMessage":{"id":"$root/properties/$enumMessage","type":"string","title":"自定义enum的验证失败信息"},"$readOnly":{"id":"$root/properties/$readOnly","type":"boolean","title":"表单控件只读"},"$hidden":{"id":"$root/properties/$hidden","type":"boolean","title":"隐藏表单域（表单值仍然存在）"},"$tableColumnHidden":{"id":"$root/properties/$tableColumnHidden","type":"boolean","title":"为数组内的对象且组件为表格时，隐藏列（表单值仍然存在）"},"$placeholder":{"id":"$root/properties/$placeholder","type":"string","title":"表单控件的placeholder属性"},"$defaultValue":{"id":"$root/properties/$defaultValue","type":"string","title":"表单的默认值"},"$order":{"id":"$root/properties/$order","type":"number","title":"定义组件的排列顺序"},"$componentType":{"id":"$root/properties/$componentType","type":"string","title":"渲染为其他组件","$componentType":"select","$options":[{"label":"文本域","value":"textArea"},{"label":"下拉框","value":"select"},{"label":"单选框","value":"radio"},{"label":"日期选择器","value":"date"},{"label":"密码输入","value":"password"}]},"$options":{"id":"$root/properties/$options","type":"array","title":"可选的选项","items":{"id":"$root/properties/$options/items","type":"object","title":"可选的选项","properties":{"label":{"id":"$root/properties/$options/items/properties/label","type":"string","title":"显示的文字","$required":true},"value":{"id":"$root/properties/$options/items/properties/value","type":"string","title":"值","$required":true}}}}}}')},848:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"number类型","properties":{"id":{"id":"$root/properties/id","type":"string","title":"当前属性的id","$required":true},"type":{"id":"$root/properties/type","type":"string","title":"数据类型","$required":true,"$readOnly":true,"$defaultValue":"number"},"title":{"id":"$root/properties/title","type":"string","title":"标题，用于描述关键字的作用","$required":true},"description":{"id":"$root/properties/description","type":"string","title":"说明，用于描述关键字的作用"},"$required":{"id":"$root/properties/$required","type":"boolean","title":"值必须存在"},"minimum":{"id":"$root/properties/minimum","type":"number","title":"表单的最小值"},"$minimumMessage":{"id":"$root/properties/$minimumMessage","type":"string","title":"自定义minimum的验证失败提示信息"},"maximum":{"id":"$root/properties/maximum","type":"number","title":"表单的最大值"},"$maximumMessage":{"id":"$root/properties/$maximumMessage","type":"string","title":"自定义maximum的验证失败提示信息"},"$integer":{"id":"$root/properties/$integer","type":"boolean","title":"必须是整数"},"$integerMessage":{"id":"$root/properties/$integerMessage","type":"string","title":"自定义$integer的验证失败提示信息"},"enum":{"id":"$root/properties/enum","type":"array","title":"验证表单控件的值必须在此关键字的数组值中","items":{"id":"$root/properties/enum/items","type":"number","title":"关键值","$required":true}},"$enumMessage":{"id":"$root/properties/$enumMessage","type":"string","title":"自定义enum的验证失败信息"},"$readOnly":{"id":"$root/properties/$readOnly","type":"boolean","title":"表单控件只读"},"$hidden":{"id":"$root/properties/$hidden","type":"boolean","title":"隐藏表单域（表单值仍然存在）"},"$tableColumnHidden":{"id":"$root/properties/$tableColumnHidden","type":"boolean","title":"为数组内的对象且组件为表格时，隐藏列（表单值仍然存在）"},"$placeholder":{"id":"$root/properties/$placeholder","type":"string","title":"表单控件的placeholder属性"},"$defaultValue":{"id":"$root/properties/$defaultValue","type":"number","title":"表单的默认值"},"$order":{"id":"$root/properties/$order","type":"number","title":"定义组件的排列顺序"},"$componentType":{"id":"$root/properties/$componentType","type":"string","title":"渲染为其他组件","$componentType":"select","$options":[{"label":"单选框","value":"radio"}]},"$options":{"id":"$root/properties/$options","type":"array","title":"可选的选项","items":{"id":"$root/properties/$options/items","type":"object","title":"可选的选项","properties":{"label":{"id":"$root/properties/$options/items/properties/label","type":"string","title":"显示的文字","$required":true},"value":{"id":"$root/properties/$options/items/properties/value","type":"number","title":"值","$required":true}}}}}}')},849:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"boolean类型","properties":{"id":{"id":"$root/properties/id","type":"string","title":"当前属性的id","$required":true},"type":{"id":"$root/properties/type","type":"string","title":"数据类型","$required":true,"$readOnly":true,"$defaultValue":"boolean"},"title":{"id":"$root/properties/title","type":"string","title":"标题，用于描述关键字的作用","$required":true},"description":{"id":"$root/properties/description","type":"string","title":"说明，用于描述关键字的作用"},"$hidden":{"id":"$root/properties/$hidden","type":"boolean","title":"隐藏表单域（表单值仍然存在）"},"$tableColumnHidden":{"id":"$root/properties/$tableColumnHidden","type":"boolean","title":"为数组内的对象且组件为表格时，隐藏列（表单值仍然存在）"},"$defaultValue":{"id":"$root/properties/$defaultValue","type":"boolean","title":"表单的默认值"},"$order":{"id":"$root/properties/$order","type":"number","title":"定义组件的排列顺序"},"$componentType":{"id":"$root/properties/$componentType","type":"string","title":"渲染为其他组件","$componentType":"select","$options":[{"label":"开关","value":"switch"}]}}}')},850:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"boolean类型","properties":{"id":{"id":"$root/properties/id","type":"string","title":"当前属性的id","$required":true},"type":{"id":"$root/properties/type","type":"string","title":"数据类型","$required":true,"$readOnly":true,"$defaultValue":"object"},"title":{"id":"$root/properties/title","type":"string","title":"标题，用于描述关键字的作用","$required":true},"description":{"id":"$root/properties/description","type":"string","title":"说明，用于描述关键字的作用"},"$order":{"id":"$root/properties/$order","type":"number","title":"定义组件的排列顺序"},"required":{"id":"$root/properties/required","type":"array","title":"对象必须包含的属性","items":{"id":"$root/properties/required/items","type":"string","title":"对象必须包含的属性","$required":true}}}}')},851:function(e){e.exports=JSON.parse('{"id":"$root","type":"object","title":"array类型","properties":{"id":{"id":"$root/properties/id","type":"string","title":"当前属性的id","$required":true},"type":{"id":"$root/properties/type","type":"string","title":"数据类型","$required":true,"$readOnly":true,"$defaultValue":"array"},"title":{"id":"$root/properties/title","type":"string","title":"标题，用于描述关键字的作用","$required":true},"description":{"id":"$root/properties/description","type":"string","title":"说明，用于描述关键字的作用"},"minItems":{"id":"$root/properties/minItems","type":"number","title":"数组内元素的最小数量"},"$minimumMessage":{"id":"$root/properties/$minimumMessage","type":"string","title":"自定义minItems的验证失败提示信息"},"maximum":{"id":"$root/properties/maximum","type":"number","title":"数组内元素的最大数量"},"$maximumMessage":{"id":"$root/properties/$maximumMessage","type":"string","title":"自定义maxItems的验证失败提示信息"},"$componentType":{"id":"$root/properties/$componentType","type":"string","title":"渲染为其他组件","$componentType":"select","$options":[{"label":"多选框","value":"checkboxGroup"},{"label":"下拉框的多选模式","value":"multiple"},{"label":"下拉框的多选模式，并且可以输入文字","value":"tags"}]},"$options":{"id":"$root/properties/$options","type":"array","title":"可选的选项","items":{"id":"$root/properties/$options/items","type":"object","title":"可选的选项","properties":{"label":{"id":"$root/properties/$options/items/properties/label","type":"string","title":"显示的文字","$required":true},"value":{"id":"$root/properties/$options/items/properties/value","type":"string","title":"值","$required":true}}}},"$hidden":{"id":"$root/properties/$hidden","type":"boolean","title":"隐藏表单域（表单值仍然存在）"},"$order":{"id":"$root/properties/$order","type":"number","title":"定义组件的排列顺序"},"$tableColumnHidden":{"id":"$root/properties/$tableColumnHidden","type":"boolean","title":"为数组内的对象且组件为表格时，隐藏列（表单值仍然存在）"},"$addDataInReverseOrder":{"id":"$root/properties/$addDataInReverseOrder","type":"boolean","title":"数据添加到数组的头部"}}}')},852:function(e,t,r){"use strict";r.r(t);var i=r(0),o=r.n(i),n=r(74),a=r(300),l=r.n(a),p=r(807),s=r(36),u=r(856),d=r(853),c=r(146),m={schemaJson:Object(c.Map)({id:"$root",type:"object",title:"$root",properties:{}})},$=Object(u.a)("表单生成-schemaJson"),y={createForm:Object(d.a)(Object(s.a)({},$,(function(e,t){return e.set("schemaJson",Object(c.Map)(t.payload))})),Object(c.fromJS)(m))},b=(r(434),r(301)),g=(r(435),r(284)),f="_Zz3EYZ",h="_Dq9d_0",v="_2zt4_e",O="_8JwCUM",j="_6R4l1P",x="_3KBwfJ",E="_3J4I5X",q="_1-D8Br",C="_2qmBBL",M="_2IT2nP",k=(r(297),r(132)),T=(r(103),r(15)),w=r(819),S=r.n(w),J=(r(804),r(805)),N=r(271),V=r.n(N),L=r(34),H=r(114),D=r(295),z=r(813),F=r(2),R=r.n(F),P=r(855),I={name:"redo",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]}},_=r(3),B=function(e,t){return o.a.createElement(_.a,Object.assign({},e,{ref:t,icon:I}))};B.displayName="RedoOutlined";var A=o.a.forwardRef(B),G=r(806),K=r(814),Z=r(67),U=Object(z.b)({schemaJson:Object(z.a)((function(e){return e.has("createForm")?e.get("createForm"):null}),(function(e){return e?e.get("schemaJson").toJS():{}}))}),X=function(e){return{action:Object(H.b)({setSchemaJson:$},e)}};var Y=function(e){var t=Object(D.c)(U).schemaJson,r=Object(G.a)(X).action,n=Object(i.useContext)(Z.b),a=Object(i.useState)(V()(t,null,2)),l=Object(L.a)(a,2),p=l[0],s=l[1],u=n.languagePack,d=u.createForm,c=u.message;return Object(i.useEffect)((function(){s(V()(t,null,2))}),[t]),o.a.createElement(i.Fragment,null,o.a.createElement("div",null,o.a.createElement(T.a,{className:R()(v,h),icon:o.a.createElement(P.a,null),onClick:S()(K.a).call(K.a,this,"jsonSchemaTextArea",c.copyMessage)},d.copy),o.a.createElement(T.a,{className:h,icon:o.a.createElement(A,null),onClick:function(e){var t=null;try{t=JSON.parse(p),r.setSchemaJson(t)}catch(i){J.a.error(c.jsonFormatError)}}},d.refreshFormConfiguration)),o.a.createElement(k.a.TextArea,{id:"jsonSchemaTextArea",rows:20,value:p,onChange:function(e){s(e.target.value)}}))},Q=(r(140),r(141),r(52)),W=r.n(Q),ee=r(71),te=r.n(ee),re=r(38),ie=r.n(re),oe=r(30),ne=r.n(oe),ae=r(39),le=r.n(ae),pe=r(72),se=r.n(pe),ue=r(31),de=r.n(ue),ce=r(53),me=r.n(ce),$e=(r(441),r(286)),ye=r(167),be=(r(442),r(400)),ge=r(20),fe=r.n(ge),he=r(109),ve=r.n(he),Oe=r(401),je=r(838),xe=r.n(je),Ee={name:"plus",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]}},qe=function(e,t){return o.a.createElement(_.a,Object.assign({},e,{ref:t,icon:Ee}))};qe.displayName="PlusOutlined";var Ce=o.a.forwardRef(qe),Me={name:"edit",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]}},ke=function(e,t){return o.a.createElement(_.a,Object.assign({},e,{ref:t,icon:Me}))};ke.displayName="EditOutlined";var Te=o.a.forwardRef(ke),we=r(803),Se={default:{string:r(842),number:r(843),boolean:r(844),object:r(845),array:r(846)},"zh-cn":{string:r(847),number:r(848),boolean:r(849),object:r(850),array:r(851)}},Je=(r(436),r(302)),Ne=(r(175),r(44)),Ve=r(1),Le=r.n(Ve),He=r(298),De=(r(433),r(177)),ze=r(178);function Fe(e,t){var r=me()(e);if(de.a){var i=de()(e);t&&(i=se()(i).call(i,(function(t){return le()(e,t).enumerable}))),r.push.apply(r,i)}return r}function Re(e){var t=e.visible,r=e.onOk,n=e.onCancel,a=e.item,l=Object(i.useContext)(Z.b),p=Object(i.useState)(null),u=Object(L.a)(p,2),d=u[0],c=u[1],m=Object(i.useState)(null),$=Object(L.a)(m,2),y=$[0],b=$[1],g=Object(i.useState)(null),f=Object(L.a)(g,2),O=f[0],j=f[1],x=l.language,E=l.languagePack.createForm,q=x in Se?Se[x]:Se.default;return null!==d&&(q[d].properties.id.$readOnly=O&&"array"===O.type),Object(i.useEffect)((function(){!1===t&&c(null)}),[t]),Object(i.useEffect)((function(){a&&!0===t&&(b({$root:{id:"array"===a.type?"items":null}}),j(a))}),[a,t]),o.a.createElement(Je.a,{visible:t,width:800,destroyOnClose:!0,maskClosable:!1,onClose:n},o.a.createElement("div",{className:h},o.a.createElement("label",{className:v},E.drawerLabel),o.a.createElement(Ne.a,{className:M,value:d,onSelect:function(e,t){c(e),y.$root.type=e,b(function(e){for(var t=1;t<arguments.length;t++){var r,i=null!=arguments[t]?arguments[t]:{};if(t%2)ne()(r=Fe(Object(i),!0)).call(r,(function(t){Object(s.a)(e,t,i[t])}));else if(ie.a)te()(e,ie()(i));else{var o;ne()(o=Fe(Object(i))).call(o,(function(t){W()(e,t,le()(i,t))}))}}return e}({},y))}},o.a.createElement(Ne.a.Option,{key:"string",value:"string"},E.selectOptions[0]),o.a.createElement(Ne.a.Option,{key:"number",value:"number"},E.selectOptions[1]),o.a.createElement(Ne.a.Option,{key:"boolean",value:"boolean"},E.selectOptions[2]),o.a.createElement(Ne.a.Option,{key:"array",value:"array"},E.selectOptions[3]),o.a.createElement(Ne.a.Option,{key:"object",value:"object"},E.selectOptions[4]))),d?o.a.createElement(He.a,{json:q[d],value:y,languagePack:"zh-cn"===x?ze:De,onOk:r,onCancel:n}):null)}Re.propTypes={item:Le.a.object,visible:Le.a.bool,onOk:Le.a.func,onCancel:Le.a.func};var Pe=Re;r(176),r(439);function Ie(e,t){var r=me()(e);if(de.a){var i=de()(e);t&&(i=se()(i).call(i,(function(t){return le()(e,t).enumerable}))),r.push.apply(r,i)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r,i=null!=arguments[t]?arguments[t]:{};if(t%2)ne()(r=Ie(Object(i),!0)).call(r,(function(t){Object(s.a)(e,t,i[t])}));else if(ie.a)te()(e,ie()(i));else{var o;ne()(o=Ie(Object(i))).call(o,(function(t){W()(e,t,le()(i,t))}))}}return e}function Be(e){var t=e.visible,r=e.onOk,n=e.onCancel,a=e.item,l=Object(i.useContext)(Z.b),p=Object(i.useState)(null),s=Object(L.a)(p,2),u=s[0],d=s[1],c=Object(i.useState)(null),m=Object(L.a)(c,2),$=m[0],y=m[1],b=Object(i.useState)(null),g=Object(L.a)(b,2),f=g[0],O=g[1],j=l.language,x=l.languagePack.createForm,E=j in Se?Se[j]:Se.default;return null!==u&&(E[u].properties.id.$readOnly=f&&"array"===f.type),Object(i.useEffect)((function(){!1===t&&d(null)}),[t]),Object(i.useEffect)((function(){if(a&&!0===t){var e=a.id.split("/");d(a.type),y({$root:_e({},a,{id:e[e.length-1]})}),O(a)}}),[a,t]),o.a.createElement(Je.a,{visible:t,width:800,destroyOnClose:!0,maskClosable:!1,onClose:n},o.a.createElement("div",{className:h},o.a.createElement("label",{className:v},x.drawerLabel),o.a.createElement(Ne.a,{className:M,value:u,onSelect:function(e,t){d(e),$.$root.type=e,y(_e({},$))}},o.a.createElement(Ne.a.Option,{key:"string",value:"string"},x.selectOptions[0]),o.a.createElement(Ne.a.Option,{key:"number",value:"number"},x.selectOptions[1]),o.a.createElement(Ne.a.Option,{key:"boolean",value:"boolean"},x.selectOptions[2]),o.a.createElement(Ne.a.Option,{key:"array",value:"array"},x.selectOptions[3]),o.a.createElement(Ne.a.Option,{key:"object",value:"object"},x.selectOptions[4]))),u?o.a.createElement(He.a,{json:E[u],value:$,languagePack:"zh-cn"===j?ze:De,onOk:r,onCancel:n}):null)}Be.propTypes={item:Le.a.object,visible:Le.a.bool,onOk:Le.a.func,onCancel:Le.a.func};var Ae=Be;function Ge(e,t){var r=me()(e);if(de.a){var i=de()(e);t&&(i=se()(i).call(i,(function(t){return le()(e,t).enumerable}))),r.push.apply(r,i)}return r}function Ke(e){for(var t=1;t<arguments.length;t++){var r,i=null!=arguments[t]?arguments[t]:{};if(t%2)ne()(r=Ge(Object(i),!0)).call(r,(function(t){Object(s.a)(e,t,i[t])}));else if(ie.a)te()(e,ie()(i));else{var o;ne()(o=Ge(Object(i))).call(o,(function(t){W()(e,t,le()(i,t))}))}}return e}var Ze=Object(z.b)({schemaJson:Object(z.a)((function(e){return e.has("createForm")?e.get("createForm"):null}),(function(e){return e?e.get("schemaJson").toJS():{}}))}),Ue=function(e){return{action:Object(H.b)({setSchemaJson:$},e)}};var Xe=function(e){var t=Object(D.c)(Ze).schemaJson,r=Object(G.a)(Ue).action,n=Object(i.useContext)(Z.b),a=Object(i.useState)(t),l=Object(L.a)(a,2),p=l[0],s=l[1],u=Object(i.useState)(!1),d=Object(L.a)(u,2),c=d[0],m=d[1],$=Object(i.useState)(!1),y=Object(L.a)($,2),b=y[0],g=y[1],f=Object(i.useState)(null),h=Object(L.a)(f,2),v=h[0],M=h[1],k=Object(i.useState)(null),w=Object(L.a)(k,2),S=w[0],J=w[1],N=xe()(p).length;function V(e){"add"===e?(M(null),m(!1)):(J(null),g(!1))}function H(e,t){t.stopPropagation(),function e(t,r,i,o){if(r.id===t&&i&&o)delete i[o];else if("object"!==r.type)"array"!==r.type||e(t,r.items,r,"items");else for(var n in r.properties)e(t,r.properties[n],r.properties,n)}(e.id,p),r.setSchemaJson(p)}function z(e){switch(e){case"object":return o.a.createElement(be.a,{color:"magenta"},"object");case"array":return o.a.createElement(be.a,{color:"red"},"array");case"string":return o.a.createElement(be.a,{color:"blue"},"string");case"number":return o.a.createElement(be.a,{color:"purple"},"number");case"boolean":return o.a.createElement(be.a,{color:"orange"},"boolean");default:return null}}function F(e){var t=[],r=e.type,i=n.language,a=i in Se?Se[i]:Se.default;for(var l in a[r].properties)if(l in e){var p=e[l];if(null==p)continue;"boolean"==typeof p?p=String(p):"object"===Object(ye.a)(p)&&(p=Object.prototype.toString.call(p)),t.push(o.a.createElement("tr",{key:l},o.a.createElement("th",null,l),o.a.createElement("td",null,p)))}return o.a.createElement("table",{className:q},o.a.createElement("tbody",null,t))}return Object(i.useEffect)((function(){s(t)}),[t]),o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:O},0===N?null:function e(t,r){var i=t.type,a=t.title,l=n.languagePack.createForm,p=[o.a.createElement($e.a,{key:"collapse",bordered:!1},o.a.createElement($e.a.Panel,{header:o.a.createElement("div",{className:"clearfix"},o.a.createElement("div",{className:j},o.a.createElement("b",{className:x},a),z(i)),o.a.createElement("div",{className:E},o.a.createElement(T.a.Group,{size:"small"},o.a.createElement(T.a,{icon:o.a.createElement(Ce,null),title:l.add,disabled:!("object"===i||"array"===i),onClick:function(e){return function(e,t){t.stopPropagation(),m(!0),M(e)}(t,e)}}),o.a.createElement(T.a,{icon:o.a.createElement(Te,null),title:l.edit,onClick:function(e){return function(e,t){t.stopPropagation(),g(!0),J(e)}(t,e)}}),o.a.createElement(T.a,{type:"primary",danger:!0,icon:o.a.createElement(we.a,null),title:l.delete,disabled:r,onClick:function(e){return H(t,e)}}))))},F(t)))],s=[];if("object"===i&&t.properties)for(var u in t.properties)s.push(e(t.properties[u]));else"array"===i&&t.items&&s.push(e(t.items));return s.length>0&&p.push(o.a.createElement("div",{key:"children",className:C},s)),p}(p,!0)),o.a.createElement(Pe,{item:v,visible:c,onOk:function(e,t,i){var o,n=t.$root,a=n.id,l=Object(Oe.a)(n,["id"]);"object"===v.type?("properties"in v||(v.properties={}),v.properties[a]=Ke({id:ve()(o="".concat(v.id,"/properties/")).call(o,a)},l)):"array"===v.type&&(v.items=Ke({id:"".concat(v.id,"/items")},l)),r.setSchemaJson(p),m(!1),M(null)},onCancel:function(){return V("add")}}),o.a.createElement(Ae,{item:S,visible:b,onOk:function(e,t,i){var o=t.$root,n=(o.id,Object(Oe.a)(o,["id"]));"object"===S.type?delete S.items:"array"===S.type&&delete S.properties,fe()(S,n),r.setSchemaJson(p),g(!1),J(null)},onCancel:function(){return V("edit")}}))};var Ye=function(e){return o.a.createElement(Z.b.Consumer,null,(function(e){var t=e.languagePack.createForm;return[o.a.createElement("p",{key:"introduction"},t.introduction),o.a.createElement(b.a,{key:"row",type:"flex",gutter:10},o.a.createElement(g.a,{className:f,xs:24,sm:24,md:8},o.a.createElement(Y,null)),o.a.createElement(g.a,{xs:24,sm:24,md:16},o.a.createElement(Xe,null)))]}))};t.default=Object(p.a)(y)((function(e){var t=Object(i.useContext)(Z.b).languagePack.createForm;return[o.a.createElement(l.a,{key:"helmet"},o.a.createElement("title",null,t.title)),o.a.createElement(n.c,{key:"main"},o.a.createElement(n.a,{path:"/CreateForm",component:Ye,exact:!0}))]}))}}]);