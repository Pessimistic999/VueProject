import Vue from 'vue'
import Navi from './components/Navi.vue'
import router from './router/index'
import Axios from 'axios'   //导入axios
import Vuex from 'vuex'     //导入vuex

// 全局 时间过滤器
Vue.filter('dateFormat',function (dateStr, pattern) {
  var dt = new Date(dateStr)
  var Y = dt.getFullYear()
  // String.prototype.padStart(maxLength,'')  填充字符串（在前面）
  // String.prototype.padEnd(maxLength,'')  填充字符串（在后面）
  var M = (dt.getMonth() + 1).toString().padStart(2,'0')
  var D = (dt.getDate()).toString().padStart(2,'0')
  var h = (dt.getHours()).toString().padStart(2,'0')
  var m = (dt.getMinutes()).toString().padStart(2,'0')
  var s = (dt.getSeconds()).toString().padStart(2,'0')
  //时间格式 YYYY-MM-DD hh:mm:ss
  // return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
  if(pattern.toLowerCase() === 'yyyy-mm-dd'){
    return `${Y}-${M}-${D}`
  }else{
    return `${Y}-${M}-${D} ${h}:${m}:${s}`
  }
})

// 全局 自定义指令 v-focus 获取焦点
Vue.directive('focus',{
  // 当被绑定的元素插入到DOM中时 执行
  // el: 原生的js DOM 对象
  inserted:function (el) {
    el.focus()
  },
  // 当指令绑定到元素上时 执行
  // bind:function (el) {
  //   el.focus()
  // }
})
// 全局 自定义指令 v-color 获取焦点
Vue.directive('color',{
  // el: 原生的js DOM 对象
  // 当指令绑定到元素上时 执行
  bind:function (el,bind) {
    el.style.color = bind.value
  }
})

import { Button, Table, Form, Radio, Checkbox, RadioGroup, CheckboxGroup, Input, FormItem, Row, DatePicker, TimePicker } from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Radio', Radio);
Vue.component('Checkbox', Checkbox);
Vue.component('RadioGroup', RadioGroup);
Vue.component('CheckboxGroup', CheckboxGroup);
Vue.component('Input', Input);
Vue.component('Row', Row);
Vue.component('DatePicker', DatePicker);
Vue.component('TimePicker', TimePicker);
import { Icon } from "iview";
Vue.component('Icon',Icon)
import { Collapse, Panel, Menu, MenuGroup, MenuItem, Submenu, Col } from "iview"
Vue.component('Collapse',Collapse)
Vue.component('Panel',Panel)
Vue.component('Menu',Menu)
Vue.component('MenuGroup',MenuGroup)
Vue.component('MenuItem',MenuItem)
Vue.component('Submenu',Submenu)
Vue.component('Col',Col)
import 'iview/dist/styles/iview.css'



//使用mint-ui 引入全部的组件
import Mint from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style.css'

//使用element-ui 引入全部的组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//基于vue 的 markdown 编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

Vue.config.productionTip = false


// 引入第三方数据请求方法
// Vue.use(Vuex)
// Vue.prototype.$http = Axios


// 引入资源请求插件
// 引入vue-resource后，可以基于全局的Vue对象使用http，也可以基于某个Vue实例使用http
import VueResource from 'vue-resource'
// 使用VueResource插件
Vue.use(VueResource)
// 配置全局的数据接口
Vue.http.options.root = 'http://127.0.0.1:8000/'
// 全局启用emulateJSON 选项（可以防止一些意外发生）
Vue.http.options.emulateJSON = true

import { Dialog } from 'vant'
// 全局注册
Vue.use(Dialog)

// 引入标签栏
import { Tab, Tabs } from 'vant'
Vue.use(Tab).use(Tabs)
import 'vant/lib/Tab/style';
import 'vant/lib/Tabs/style';

new Vue({
  el: '#app',
  router,
  render: h => h(Navi)
})
