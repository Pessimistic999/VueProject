<template>
  <div id="Page1">
    <div class="mavonEditor">

      <h1 style="color: aquamarine;text-align: left;margin-bottom: 10px">当前页面：编辑页面</h1>

      <!--弹出框Popover-->
      <el-popover
        placement="top"
        width="160"
        v-model="visible">
        <p>这是一段内容这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
        </div>
        <el-button slot="reference" style="width: 100px;height: 50px;background-color: aqua">删除</el-button>
      </el-popover>

      <!--MessageBox弹框-->
      <el-button type="primary" style="width: 100px;height: 50px;" @click="open">Message Box</el-button>

      <!--对话框Dialog-->
      <el-button type="primary" style="width: 100px;height: 50px;" @click="dialogVisible = true">打开 Dialog</el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
          <el-button type="primary" style="width: 45px;height: 25px;" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

      <!--分割线-->
      <p class="cell_dashed"></p>
      <!-- 卡片式轮播 -->
      <h1 style="color: red">卡片式轮播</h1>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in list" :key="item">
          <img :src="item.TitlePhoto" alt="" style="width: 100%;height: 100%"/>
        </el-carousel-item>
      </el-carousel>

      <!--分割线-->
      <p class="cell_dashed"></p>
      <!-- Collapse 折叠面板 -->
      <h1 style="color: red">Collapse 折叠面板</h1>
      <Collapse v-model="sssd">
        <Panel name="1">
          史蒂夫·乔布斯
          <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
      </Collapse>

      <!--分割线-->
      <p class="cell_dashed"></p>
      <!-- 轮播图 -->
      <h1 style="color: red">轮播图</h1>
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

      <!--分割线-->
      <p class="cell_dashed"></p>
      <h1 style="color: red">列表数据</h1>

      <!--列表 无图片（后台数据）-->
      <!--<div v-for="(item,index) in list" style="background:white;padding: 20px">
       <Card :bordered="false">
          <p slot="title" style="font-size: 25px">{{item.Title}}</p>
          <p style="font-size: 16px">{{item.Introduce}}</p>
        </Card>
      </div>-->
      <!--图文列表 -->
      <div class="happy" v-for="(item,index) in list">
        <router-link  v-bind:to="'/blog/'+ item.ArticleId">
          <div class="love">
            <img :src="item.TitlePhoto" alt="" />
          </div>
          <div class="you">
            <h2 style="color: gray">{{item.Title}}</h2>
            <p style="color: gray;font-size: 13px;">作者：{{item.ArticleSource}}</p>
            <!--显示两行简介，多出显示...-->
            <p style="display: -webkit-box;-webkit-box-orient: vertical;
              -webkit-line-clamp: 2;overflow: hidden;color: darkgray">{{item.Introduce}}</p>
            <p style="color: darkgray">发表于：{{item.CreateDate | dateFormat('')}}</p>
          </div>
        </router-link>
      </div>
      <!--分割线-->
      <p class="cell_dashed"></p>
      <!-- 数据提交（测试的文章评论（ok）） -->
      <div>
        <h1 style="color: red">数据提交测试</h1>
        <p class="submit">姓名：</p>
        <Input v-model="item.User" placeholder="请输入姓名" />
        <p class="submit">文章id：</p>
        <Input v-model="item.Article" placeholder="请输入文章id" />
        <p class="submit">父评论id：</p>
        <Input v-model="item.ParentComment" placeholder="请输入父评论id" />
        <p class="submit">评论内容：</p>
        <Input v-model="item.Content" type="textarea" :autosize="{minRows: 2,maxRows: 7}"
               placeholder="请输入评论内容" />
        <!--提交按钮-->
        <!--<Button type="primary" @click="SubBtn();" style="width: 100px;height: 40px;-->
        <!--display:block;margin:0 auto">提交评论</Button>-->
        <div class="btn">
          <Button type="success" @click="SubBtn();" style="width: 100px;height: 40px;margin-right: 20px">提交</Button>
          <Button type="primary" style="width: 100px;height: 40px">返回</Button>
        </div>
        <!--<tr>
          <td colspan="4" class="btnbox">
            <a href="javascript:;" class="bluebtn" @click="SubBtn();">提交</a>
            <router-link :to="{path:'/'}" class="bluebtn">返回</router-link>
          </td>
        </tr>-->
      </div>

      <!--分割线-->
      <p class="cell_dashed"></p>
      <!--mavonEditor编辑器-->
      <h1 style="color: red">mavonEditor(https://www.npmjs.com/package/mavon-editor)</h1>
      <!--<mavon-editor :toolbars="markdownOption" v-model="handbook"/>-->
      <!--  事件
            @save: 按下 ctrl + s 时触发
            @change: 当值发生改变时 触发
            @imgAdd: 添加图片
            @imgDel: 删除图片
        -->
      <mavon-editor ref=md @imgAdd="$imgAdd" @imgDel="$imgDel" @save="saveDoc" @change="updateDoc"></mavon-editor>

      <!--Vue 使用 mavon-editor 将 markdown 内容转换为 html-->
      <h1 style="color: red">mavonEditor 内容转换 显示  :value="markdown"</h1>
      <mavon-editor
        class="md"
        :value="markdown"
        :subfield = "false"
        :defaultOpen = "'preview'"
        :toolbarsFlag = "false"
        :editable="false"
        :scrollStyle="true"
        :ishljs = "true"
      ></mavon-editor>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Page1",
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
        dialogVisible: false,   //对话框Dialog
        visible: false,         //弹出框Popover
        sssd:'1',
        html:'',      // mavonEditor 编辑  html内容
        markdown:'',    // mavonEditor 编辑 markdown内容
        item:{
          User:'',
          Article:'',
          Content:'',
          ParentComment:'',
        },
        sliders:[
          {
            img:'http://img.hb.aicdn.com/adbde61e4343dedd21e97ea7f22666825a8db7d077ffe-qn8Pjn_fw658'
          },
          {
            img:'http://img.hb.aicdn.com/adeed7d28df6e776c2fa6032579c697381d1a82b7fe00-fwRqgn_fw658'
          },
          {
            img:'http://img.hb.aicdn.com/ab7f48509b3c0353017d9a85ef1d12400c9b2724540d4-p3zouo_fw658'
          },
          {
            img:'http://img.hb.aicdn.com/60f788fc2a846192f224b9e6d4904b30e54926211d3d67-ACFJ9G_fw658'
          },
          {
            img:'http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658'
          },
        ],
        imgWidth:600,
        currentIndex:1,
        distance:-600,
        transitionEnd: true,
        speed: this.initialSpeed,
        imgs:[
          {
            img:'http://img.hb.aicdn.com/adbde61e4343dedd21e97ea7f22666825a8db7d077ffe-qn8Pjn_fw658'
          },{
            img:'http://img.hb.aicdn.com/adeed7d28df6e776c2fa6032579c697381d1a82b7fe00-fwRqgn_fw658'
          },{
            img:'http://img.hb.aicdn.com/ab7f48509b3c0353017d9a85ef1d12400c9b2724540d4-p3zouo_fw658'
          }
        ],
        list:[],
        // markdownOption:{
        //   bold: true, // 粗体
        //   italic: true, // 斜体
        //   // header: true, // 标题
        //   underline: true, // 下划线
        //   strikethrough: true, // 中划线
        //   mark: true, // 标记
        //   superscript: true, // 上角标
        //   subscript: true, // 下角标
        //   quote: true, // 引用
        //   ol: true, // 有序列表
        //   ul: true, // 无序列表
        //   link: true, // 链接
        //   imagelink: true, // 图片链接
        //   code: true, // code
        //   table: true, // 表格
        //   fullscreen: true, // 全屏编辑
        //   readmodel: true, // 沉浸式阅读
        //   htmlcode: true, // 展示html源码
        //   help: true, // 帮助
        //   /* 1.3.5 */
        //   undo: true, // 上一步
        //   redo: true, // 下一步
        //   trash: true, // 清空
        //   save: true, // 保存（触发events中的save事件）
        //   /* 1.4.2 */
        //   navigation: true, // 导航目录
        //   /* 2.1.8 */
        //   alignleft: true, // 左对齐
        //   aligncenter: true, // 居中
        //   alignright: true, // 右对齐
        //   /* 2.2.1 */
        //   subfield: true, // 单双栏模式
        //   preview: true, // 预览
        // },
        // handbook:'use mavonEditor',
      }
    },
    methods: {
      //  MessageBox弹框
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      //对话框
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      // 提交数据（文章评论测试）
      SubBtn:function(){
        console.log(this.item);
        var data = this.item
        this.$http.post(('article_comment/article_comment_id=0'),data,{emulateJSON:false}).then(response => {
          // console.log(response.body);
          this.grouplist = response.body;
          alert("提交成功！")
          // 数据提交成功后 评论表单清空
          this.item.User = ''
          this.item.Article = ''
          this.item.Content = ''
          this.item.ParentComment = ''
        }, response => {
          console.log(response);
          alert("出问题啦！")
        });
      },
      // mavonEditor编辑器 事件
      // 1.保存数据
      saveDoc(value,render){
        this.html = render
        this.markdown = value
        console.log(this.markdown)
      },
      // 2.更新数据
      updateDoc(value, render) {
        // 此时会自动将 value 和 render 传递到这个方法中
        console.log("markdown内容: " + value);
        console.log("html内容:" + render);
      },
      // 3.绑定@imgAdd event 添加图片
      $imgAdd(pos, $file) {
        // 第一步.将图片上传到服务器.
        var formdata = new FormData();
        formdata.append('image', $file);
        this.img_file[pos] = $file;
        this.$http({
          url: 'upload_image/',
          method: 'post',
          data: formdata,
          headers: {'Content-Type': 'application/json'},
        }).then((res) => {
          let _res = res.data;
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          this.$refs.md.$img2Url(pos, _res.url);
        })
      },
      $imgDel(pos) {
        delete this.img_file[pos];
      },
      // 获取数据 get方法
      requestData() {
        //新闻列表接口：
        var urls = 'article_list/';
        //jsonp请求数据时，后台API接口要支持jsonp
        this.$http.get(urls).then((response)=> {
            this.list=response.data;
            // console.log(this.list)
          },
          function(err) { 		      //获取数据失败 异常提示
            console.log(err);
          });
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
      }
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
      this.requestData(); // 调用方法（get数据）
      this.init()  //
    }
  }
</script>
<style scoped>
  /*数据提交*/
  .submit{
    font-size: 15px;
    color: forestgreen;
    margin-top: 3px;
    margin-bottom: 3px
  }
  /*图文列表*/
  .happy{
    width: 700px;
    height: 100px;
    margin: 3px auto;
    border:solid 1px gainsboro;
    overflow: hidden;
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
    width: 510px;
    float: right;
  }
  /*分割线*/
  .cell_dashed{
    border-bottom:1px dashed #999999;
    height: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  /*编辑器*/
  .mavonEditor{
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
  #slider{
    text-align: center;
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
  .btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
  }
</style>
