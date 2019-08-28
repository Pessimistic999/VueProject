<template>
    <div id="comments">
      <div style="width: 70%;margin: auto">
        <!-- 自定义 color 组件 -->
        <!--<h1 v-color="'pink'">uijnn</h1>-->
        <p style="color: grey;font-size: 16px;margin-bottom: 25px">评论详情</p>
        <div style="margin-top: 15px;margin-bottom: 15px;height: 12px">
          <!-- @keyup.enter="submit" 监听enter键，触发submit()事件 -->
          <!-- v-focus 自定义指令 获取焦点 聚焦输入框 -->
          <input type="text" style="width: 90%;height: 30px" placeholder="请输入评论内容"
                 v-model="item.Content" v-on:keyup.enter="submit" v-focus />
            <button @click="submit" style="width: 10%;height: 30px;float: right">发表</button>
          <!--<el-input placeholder="请输入评论内容" v-model="item.Content" class="input-with-select">-->
            <!--<el-button slot="append" icon="el-icon-edit-outline" @click="submit"></el-button>-->
          <!--</el-input>-->
        </div>
        <p style="margin-bottom: 50px"></p>
        <div class="happy" v-for="(item,index) in blog">
          <div class="you">
            <!--显示三行，多出显示...-->
            <p class="cont">{{item.Content}}</p>
            <i class="el-icon-delete" style="float: right" @click="del(item.CommentId)">删除</i>
            <p style="color: darkgray;margin-bottom: 5px;
          font-size: 12px">{{item.CreateDate | dateFormat('')}}</p>
            <p style="color: darkgray;margin-bottom: 5px;
          font-size: 10px">{{item.User}}
              <img src="http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658" alt="" class="image"/></p>
            <el-divider></el-divider>
          </div>
        </div>

      </div>
      <p style="margin-bottom: 50px"></p>
    </div>
</template>

<script>
    export default {
      name: "comments",
      inject:['reload'],  //页面刷新
      data(){
          return{
            item:{
              User:'1234567890',
              Article:'',
              Content:'',
              ParentComment:'',
            },
            ArticleId:this.$route.params.ArticleId,
            blog:[],
          }
      },
      // 生命周期函数
      created(){
        this.$http.get("article_comment_list/article_id=" + this.ArticleId)
          .then(function (data) {
            this.blog = data.body;
          })
      },
      methods:{
        // 评论提交
        submit(){
          this.item.Article = this.ArticleId
          // console.log(this.item);
          var data = this.item
          this.$http.post(('article_comment/article_comment_id=0'),data,{emulateJSON:false}).then(response => {
            // console.log(response.body);
            // this.grouplist = response.body;
            alert("提交成功！")
            // 数据提交成功后 评论表单清空
            this.item.Content = ''
            this.reload()   // 调用页面刷新函数
          }, response => {
            console.log(response);
            alert("出问题啦！")
          });
        },
        // 评论删除
        del(id){
          this.$http.delete('article_comment/article_comment_id=' + id).then(response => {
            alert("删除成功！")
            this.reload()   // 调用页面刷新函数
          }, response => {
            console.log(response);
            alert("出问题啦！")
          })
        }
      }
    }
</script>

<style scoped>
  /*评论*/
  .image{
    float: left;
    width: 20px;
    height: 20px;
    border-radius:10px;
    margin-right: 10px
  }
  .cont{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color: darkgray;
    margin-bottom: 5px;
    font-size: 12px;
    text-indent: 24px;
  }
</style>
