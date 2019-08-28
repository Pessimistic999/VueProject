<template>
  <div style="background-color: white;min-height:800px">
    <div style="width:100%;background-color: #636363; overflow: hidden">
      <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%;font-size: 20px">
          校友会管理平台
      </span>
      <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:70%">
        <el-input
          placeholder="请输入"
          icon="search"
          v-model="searchCriteria"
          :on-icon-click="handleIconClick">
        </el-input>
      </span>
      <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%;font-size: 20px">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link" style="color:white">
            admin<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>

    <div style="margin-top:5px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
            <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px" @select="handleSelect">
              <el-menu-item index="1"><i class="el-icon-s-home"></i>首页</el-menu-item>
              <el-menu-item index="2"><i class="el-icon-message"></i>菜单一</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-menu"></i>菜单二</el-menu-item>
              <el-menu-item index="4"><i class="el-icon-s-fold"></i>菜单三</el-menu-item>
              <el-menu-item index="5"><i class="el-icon-s-marketing"></i>菜单四</el-menu-item>
              <el-menu-item index="6"><i class="el-icon-folder"></i>菜单五</el-menu-item>
              <el-menu-item index="7"><i class="el-icon-tickets"></i>菜单六</el-menu-item>
              <el-menu-item index="8"><i class="el-icon-user"></i>个人中心</el-menu-item>
              <el-menu-item index="9"><i class="el-icon-monitor"></i>关于我们</el-menu-item>
              <el-menu-item index="10"><i class="el-icon-phone-outline"></i>帮助中心</el-menu-item>
              <el-menu-item index="11"><i class="el-icon-setting"></i>设置</el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <!--<div>-->
            <!--<div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">-->
              <!--<el-breadcrumb separator="/">-->
                <!--<el-breadcrumb-item v-for="item in breadcrumbItems">{{ item }}</el-breadcrumb-item>-->
              <!--</el-breadcrumb>-->
            <!--</div>-->
          <!--</div>-->

          <div style="margin-top:10px">
            <!-- 切换页面，添加动画 -->
            <transition mode="out-in">
              <router-view v-if="IsRouterAlive"></router-view>
            </transition>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    // 页面刷新
    provide(){
      return{
        reload:this.reload
      }
    },
    data(){
      return {
        searchCriteria: '',
        // breadcrumbItems: ['编辑页面一'],
        table:'1',
        IsRouterAlive:true
      }
    },

    methods:{
      reload(){
        this.IsRouterAlive=false
        this.$nextTick(function () {
          this.IsRouterAlive=true
        })
      },
      handleIconClick(ev) {
        console.log(ev);
      },
      handleSelect(key, keyPath){
        this.table = key
        switch(this.table){
          case '1':
            this.$router.push('/Home');
            // this.breadcrumbItems  = ['编辑页面一']
            break;
          case '2':
            this.$router.push('/Page1');
            break;
          case '3':
            this.$router.push('/Page2')
            break;
          case '4':
            this.$router.push('/Page3')
            break;
          case '5':
            this.$router.push('/Page4')
            break;
          case '9':
            this.$router.push('/About')
            break;
          case '10':
            this.$router.push('/Help')
            break;
          case '11':
            this.$router.push('/Sets')
            break;
        }
      },

    },
  }
</script>

<style scoped>
  .v-enter,v-leave-to{
    opacity: 0;
    /*从右到左*/
    transform: translateX(100%);
  }
  .v-enter-active,.v-leave-active{
    transition: all 1s ease;
  }
</style>
