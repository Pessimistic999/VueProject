<template>

    <div>
      <!-- 使用自定义组件（全局） -->
      <my-com1></my-com1>
      <br>
      <my-com2></my-com2>
      <br>
      <!-- 组件切换 -->
      <my-com2 v-if="flog"></my-com2>
      <br>
      <my-com3></my-com3>

      <!-- 组件切换 -->
      <a href="" @click.prevent="comment='myCom1'">组件一</a>
      <a href="" @click.prevent="comment='myCom2'">组件二</a>
      <!-- vue 提供component 来展示组件名称 :is 可以用来指定组件名称 -->
      <!-- 动画切换 -->
      <!-- 通过mode属性 设置组件切换方式 -->
      <transition mode="out-in">
        <!-- 组件切换 -->
        <component :is="comment"></component>
      </transition>


      <br>
      <!-- 私有（局部）组件 -->
      <login></login>
    </div>

</template>


<script>
  import Vue from 'vue'
  // 创建组件
  // 创建组件的template属性指向的模板内容 必须有且只有一个唯一的根元素
  // 组件有data属性 ：data:function () {return{ } } ，即组件中的data必须为一个方法，且这个方法必须返回一个对象
  // 1 创建组件的第一种方式
  // 1.1 使用 Vue.extend 创建全局组件
  var com1 = Vue.extend({
    // 通过template 属性 展示了组件要显示的HTML结构
    template:'<div>' +
      '<button value="+1" @click="add" style="width: 30px;height: 20px">加+</button>' +
      '<input type="text" v-model="count" style="width: 20px">' +
      '</div>',
    // data 为一个方法
    data:function () {
      return{
        count:0
      }
    },
    methods:{
      add(){
        this.count ++
      }
    }
  })
  // 1.2 使用Vue.component('组件的名称', 创建出来的组件模板名称)
  // 如果组件名称使用了驼峰命名：myCom1，使用时为<my-com1></my-com1>
  // 如果未使用：mycom1，使用时为<mycom1></mycom1>
  Vue.component('myCom1',com1)

  //1.1 和1.2 可以合并
  // Vue.component('myCom1',Vue.extend({
  //   template:'<h3> 这是使用 Vue.extend 创建的组件 </h3>'
  // }))

  // 2 创建组件的第二种方式
  Vue.component('myCom2',{
    template:'<h3> 这是使用 Vue.component 创建的组件 --- {{ msg }} </h3>',
    data:function () {
      return{
        msg:'这是组件中自己的data中的数据',
      }
    }
  })


    export default {
      name: "",
      data(){return{
        flog:true,
        comment:'myCom2'
      }},
      methods:{},
      // 定义私有组件
      components:{
          login:{
            template:'<h3>定义的私有组件</h3>'
          }
      }
    }
</script>

<style scoped>
.v-enter,v-leave-to{
  opacity: 0;
  /*从右到左*/
  transform: translateX(150px);
}
.v-enter-active,.v-leave-active{
    transition: all 0.6s ease;
  }
</style>
