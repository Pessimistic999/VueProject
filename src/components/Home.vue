<template>
    <div id="home">
      <div class="home">
        <h1 style="color: grey;margin-bottom: 10px">校友会管理平台首页</h1>
        <!-- 轮播图 -->
        <div class="window" @mouseover="stop" @mouseleave="play">
          <ul class="container" :style="containerStyle">
            <li>
              <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length - 1].img" alt="">
            </li>
            <li  v-for="(item, index) in sliders" :key="index">
              <img :style="{width:imgWidth+'px'}" :src="item.img" alt="">
            </li>
            <li>
              <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt="">
            </li>
          </ul>
          <ul class="direction">
            <li class="left" @click="move(600, 1, speed)">
              <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>
            </li>
            <li class="right" @click="move(600, -1, speed)">
              <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>
            </li>
          </ul>
          <ul class="dots">
            <li v-for="(dot, i) in sliders" :key="i" :class="{dotted: i === (currentIndex-1)}"
                @click = jump(i+1)>
            </li>
          </ul>
        </div>

        <h2 style="color: grey;margin-top: 15px">校友会管理平台功能展示</h2>
        <!--分割线-->
        <p class="cell_dashed"></p>
        <!--菜单功能-->
        <div class="list">
          <ul >
            <li v-for="(grid, index) in grids">
              <el-popover placement="top-start" :title="grid.title"
                width="300" trigger="hover" :content="grid.cont">
                <el-button slot="reference">
                  <!--这里是点击时要跳转的路由-->
                  <router-link :to="grid.router">
                    <img :src="grid.src">
                    <p>{{grid.title}}</p>
                  </router-link>
                  <router-view></router-view>
                </el-button>
              </el-popover>
            </li>
          </ul>
        </div>
        <h2 style="color: grey;margin-top: 15px">校友会管理平台热点资讯</h2>
        <!--分割线-->
        <p class="cell_dashed"></p>
        <p style="margin-top: 15px"></p>
        <!--新闻文章列表 -->
        <i class="el-icon-document" style="font-size: 15px;
        margin-top: 20px;margin-left: 45px">新闻</i>
        <i class="el-icon-s-grid" style="font-size: 14px;
        float: right;margin-top: 20px;margin-right: 45px" @click="artMore">更多</i>
        <!--v-if 显示三条数据-->
          <div class="happy" v-for="(item,index) in aList" v-if="index<3">
              <router-link  v-bind:to="'/blog/'+ item.ArticleId">
                <div class="love">
                  <img :src="item.TitlePhoto" alt="" />
                </div>
                <div class="you">
                  <h3 style="color: gray">{{item.Title}}</h3>
                  <p style="color: gray;font-size: 10px;">作者：{{item.ArticleSource}}</p>
                  <!--显示两行简介，多出显示...-->
                  <p style="display: -webkit-box;-webkit-box-orient: vertical;
                -webkit-line-clamp: 2;overflow: hidden;color: darkgray">{{item.Introduce}}</p>
                  <p style="color: darkgray">发表于：{{item.CreateDate | dateFormat('')}}</p>
                </div>
              </router-link>
          </div>
        <!--活动列表 -->
        <p style="margin-top: 15px"></p>
        <i class="el-icon-document" style="font-size: 15px;
        margin-top: 20px;margin-left: 45px">活动</i>
        <i class="el-icon-s-grid" style="font-size: 14px;
        float: right;margin-top: 20px;margin-right: 45px" @click="actMore">更多</i>
          <div class="happy" v-for="(item,index) in bList" v-if="index<3">
            <router-link  v-bind:to="'/blog/'+ item.ActivityId">
              <div class="love">
                <img :src="item.TitlePhotoFileName" alt="" />
              </div>
              <div class="you">
                <h3 style="color: gray">{{item.ActivityName}}</h3>
                <p style="color: gray;font-size: 10px;">作者：{{item.Creater}}</p>
                <!--显示两行简介，多出显示...-->
                <p style="display: -webkit-box;-webkit-box-orient: vertical;
                -webkit-line-clamp: 2;overflow: hidden;color: darkgray">{{item.Introduction}}</p>
                <p style="color: darkgray">发布于：{{item.CreateDate | dateFormat('')}}</p>
              </div>
            </router-link>
          </div>
        <h2 style="color: grey;margin-top: 15px">校友会管理平台助您工作更顺心</h2>
        <!--分割线-->
        <p class="cell_dashed"></p>

        <div>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </div>

        <h3 style="color: grey;margin-top: 15px">校友会管理平台 公司简介</h3>
        <!--分割线-->
        <p class="cell_dashed"></p>
        <div class="happy">
          <router-link  to="/">
            <div class="love">
              <img src="http://img.hb.aicdn.com/60f788fc2a846192f224b9e6d4904b30e54926211d3d67-ACFJ9G_fw658" alt="" />
            </div>
            <div class="you">
              <h3 style="color: gray">公司简介</h3>
              <!--显示四行简介，多出显示...-->
              <p style="display: -webkit-box;-webkit-box-orient: vertical;
                -webkit-line-clamp: 4;overflow: hidden;color: darkgray">武汉大顺致远科技有限公司地处武昌区阅马场南方大厦908室，联系人是林嗣凤，公司成立于2011年，企业类型是有限责任公司。
                目前主要经营计算机软件硬件、网络设备、电子产品、自动化产品研发、销售；计算机系统集成、技术服务；自动化系统设计与技术服务。</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
  import src1 from '../assets/Repeat.svg'
  import src2 from '../assets/Document.svg'
  import src3 from '../assets/_Manage.svg'
  import src4 from '../assets/BIlling.svg'
  import src5 from '../assets/File Manager.svg'
  import src6 from '../assets/_Printer XI.svg'
  import src7 from '../assets/Cloud.svg'
  import src8 from '../assets/_Sales.svg'
  var grids = [
    {id:1, src:src1,title:'组织建设', cont:'一网打尽全球组织，有效联络每一位成员', router:{name:'1'}},
    {id:2, src:src2,title:'校友云卡', cont:'电子身份快速认证，打通校企与校友之间的桥梁', router:{name:'1'}},
    {id:3, src:src3,title:'信息平台', cont:'学校官网、微信公众号、h5、app、小程序等多平台信息统一', router:{name:'1'}},
    {id:4, src:src4,title:'资金筹集', cont:'潜在捐赠人跟进管理项目开发及时对接', router:{name:'1'}},
    {id:4, src:src5,title:'项目管理', cont:'实现项目、协议多对多的管理资金详细记录，随时提取报表', router:{name:'1'}},
    {id:4, src:src6,title:'运营宝箱', cont:'活动、邮件、短信、投票、文章、相册等多类工具', router:{name:'1'}},
    {id:4, src:src7,title:'智能网络', cont:'智能邮件推送、ai机器人辅助管理、网络信息爬虫', router:{name:'1'}},
    {id:4, src:src8,title:'纪念商品', cont:'个性化店铺设置、分类商品管理、积分兑换系统', router:{name:'1'}},
  ]
    export default {
      name: "home",
      props: {
        initialSpeed: {
          type: Number,
          default: 30
        },
        initialInterval: {
          type: Number,
          default: 3
        }
      },
      data(){
         return{
           grids,
           aList:[],
           bList:[],
           sliders:[
             {img:'http://img.hb.aicdn.com/adbde61e4343dedd21e97ea7f22666825a8db7d077ffe-qn8Pjn_fw658'},
             {img:'http://img.hb.aicdn.com/adeed7d28df6e776c2fa6032579c697381d1a82b7fe00-fwRqgn_fw658'},
             {img:'http://img.hb.aicdn.com/ab7f48509b3c0353017d9a85ef1d12400c9b2724540d4-p3zouo_fw658'},
             {img:'http://img.hb.aicdn.com/60f788fc2a846192f224b9e6d4904b30e54926211d3d67-ACFJ9G_fw658'},
             {img:'http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658'},
           ],

           imgWidth:600,
           currentIndex:1,
           distance:-600,
           transitionEnd: true,
           speed: this.initialSpeed,
         }
      },
      methods:{
        // 更多新闻
        artMore(){
          this.$router.push({
            path: '/Page3'
          })
        },
        // 更多活动
        actMore(){

        },
        // 轮播图 事件
        init() {
          this.play()
          window.onblur = function() { this.stop() }.bind(this)
          window.onfocus = function() { this.play() }.bind(this)
        },
        move(offset, direction, speed) {
          // console.log(speed)
          if (!this.transitionEnd) return
          this.transitionEnd = false
          direction === -1 ? this.currentIndex += offset/600 : this.currentIndex -= offset/600
          if (this.currentIndex > 5) this.currentIndex = 1
          if (this.currentIndex < 1) this.currentIndex = 5
          const destination = this.distance + offset * direction
          this.animate(destination, direction, speed)
        },
        animate(des, direc, speed) {
          if (this.temp) {
            window.clearInterval(this.temp);
            this.temp = null ;
          }
          this.temp = window.setInterval(() => {
            if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
              this.distance += speed * direc
            } else {
              this.transitionEnd = true
              window.clearInterval(this.temp)
              this.distance = des
              if (des < -3000) this.distance = -600
              if (des > -600) this.distance = -3000
            }
          }, 20)
        },
        jump(index) {
          const direction = index - this.currentIndex >= 0 ? -1 : 1;
          const offset = Math.abs(index - this.currentIndex) * 600;
          const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed ;
          this.move(offset, direction, jumpSpeed)
        },
        play() {
          if (this.timer) {
            window.clearInterval(this.timer)
            this.timer = null
          }
          this.timer = window.setInterval(() => {
            this.move(600, -1, this.speed)
          }, this.interval)
        },
        stop() {
          window.clearInterval(this.timer)
          this.timer = null
        },
        // 获取数据 get方法
        getArticle() {
          //新闻列表接口：
          // url路径为相对路径，且前面不能有 /
          var urls = 'article_list/';
          //jsonp请求数据时，后台API接口要支持jsonp
          this.$http.get(urls).then((response)=> {
              this.aList = response.data
              // console.log(this.aList)
            },
            function(err) { 		      //获取数据失败 异常提示
              console.log(err);
            });
        },
        getActivity() {
          //新闻列表接口：
          var urls = 'activity_list/';
          //jsonp请求数据时，后台API接口要支持jsonp
          this.$http.get(urls).then((response)=> {
              this.bList = response.data
              // console.log(this.bList)
            },
            function(err) { 		      //获取数据失败 异常提示
              console.log(err);
            });
        },
      },
      computed:{
        containerStyle() {
          return {
            transform:`translate3d(${this.distance}px, 0, 0)`
          }
        },
        interval() {
          return this.initialInterval * 1000
        }
      },
      mounted(){  //生命周期
        this.init()  //
        this.getArticle() //
        this.getActivity() //
      }
    }
</script>

<style scoped>
  /*容器*/
  .home{
    width: 85%;
    height: 100%;
    margin:10px auto;
  }
  /*轮播图*/
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  ol,ul{
    list-style: none;
  }
  .window{
    position:relative;
    width:600px;
    height:300px;
    margin:0 auto;
    overflow:hidden;
  }
  .container{
    display:flex;
    position:absolute;
  }
  .left, .right{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width:50px;
    height:50px;
    background-color:rgba(0,0,0,.3);
    border-radius:50%;
    cursor:pointer;
  }
  .left{
    left:3%;
    padding-left:12px;
    padding-top:10px;
  }
  .right{
    right:3%;
    padding-right:12px;
    padding-top:10px;
  }
  img{
    user-select: none;
  }
  .dots{
    position:absolute;
    bottom:10px;
    left:50%;
    transform:translateX(-50%);
  }
  .dots li{
    display:inline-block;
    width:15px;
    height:15px;
    margin:0 3px;
    border:1px solid white;
    border-radius:50%;
    background-color:#333;
    cursor:pointer;
  }
  .dots .dotted{
    background-color:orange;
  }
  /*菜单*/
  .list{
    width: 100%;
    height: 100%;
  }
  .list ul{
    display: flex;
    flex-wrap: wrap;
  }
  .list ul li{
    width: 25%;
    height: 100px;
    text-align: center;
    font-size: 12px;
    margin-top: 15px;
  }
  .list ul li a img{
    width: 50px;
  }
  /*分割线*/
  .cell_dashed{
    border-bottom:1px dashed #999999;
    height: 1rem;
    margin-top: 3px;
    margin-bottom: 3px;
  }
  /*图文列表*/
  .happy{
    width: 700px;
    height: 100px;
    margin: 10px auto;
    /*border:solid 1px gainsboro;*/
    overflow: hidden;
    background-color: aliceblue;
  }
  .love{
    width: 180px;
    float: left;
  }
  .love img{
    display: block;
    width: 100%;
  }
  .you{
    width: 490px;
    float: right;
  }
</style>
