<template>
  <div id="single-blog">
    <div class="img">
      <img :src="blog.TitlePhoto" alt="" style="height: 200px;width: 75%"/>
    </div>
    <p class="title">{{blog.Title}}</p>

      <i class="el-icon-star-off" style="font-size: 15px;
    margin-top: 20px;margin-right: 15px;color: dodgerblue">收藏</i>

      <i class="el-icon-share" style="font-size: 15px;
    margin-top: 20px;color: darkgreen">转发</i>

    <p class="author">来自作者：{{blog.ArticleSource}}</p>
    <article class="content">{{blog.Content}}</article>
    <!--分割线-->
    <p class="cell_dashed"></p>
    <i class="el-icon-edit-outline" style="font-size: 15px;
    margin-top: 20px">校友评论</i>
    <router-link  v-bind:to="'/Comments/'+ blog.ArticleId">
    <i class="el-icon-s-grid" style="font-size: 14px;
    float: right;margin-top: 20px">更多</i>
    </router-link>
    <el-divider></el-divider>
    <div class="happy" v-for="(item,index) in acList" v-if="index<5">
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

    <div style="margin-top: 15px;margin-bottom: 15px;height: 12px">
      <!-- @keyup.enter="submit" 监听enter键，触发submit()事件 -->
      <input type="text" style="width: 90%;height: 30px" placeholder="请输入评论内容"
             v-model="item.Content" v-on:keyup.enter="submit" />
      <button @click="submit" style="width: 10%;height: 30px;float: right">发表</button>
      <!--<el-input placeholder="请输入评论内容" v-model="item.Content" class="input-with-select" @keyup.enter="submit">-->
        <!--<el-button slot="append" icon="el-icon-edit-outline" @click="submit"></el-button>-->
      <!--</el-input>-->
    </div>

  </div>
</template>

<script>
  export default {
    name: "singleblogs",
    inject:['reload'],  //页面刷新
    data(){
      return{
        ArticleId:this.$route.params.ArticleId,
        blog:{},
        acList:[],
        item:{
          User:'1234567890',
          Article:'',
          Content:'',
          ParentComment:'',
        },
      }
    },
    created(){
      this.$http.get("article/article_id=" +this.ArticleId)
        .then(function (data) {
          this.blog = data.body;
        })
    },
    methods:{
      getArtComment() {
        //新闻列表接口：
        var urls = 'article_comment_list/article_id='+this.ArticleId;
        //jsonp请求数据时，后台API接口要支持jsonp
        this.$http.get(urls).then((response)=> {
            this.acList = response.data
            // console.log(this.acList)
          },
          function(err) { 		      //获取数据失败 异常提示
            console.log(err);
          });
      },
      // 评论提交
      submit(){
        this.item.Article = this.ArticleId
        console.log(this.item);
        var data = this.item
        this.$http.post(('article_comment/article_comment_id=0'),data,{emulateJSON:false}).then(response => {
          // console.log(response.body);
          // this.grouplist = response.body;
          alert("发表成功！")
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
      },
    },
    mounted(){
      this.getArtComment()            //
    }
  }
</script>

<style scoped>
  /*分割线*/
  .cell_dashed{
    width: 100%;
    border-bottom:1px dashed #999999;
    height: 1rem;
    margin-top: 3px;
    margin-bottom: 3px;
  }
  #single-blog{
    width: 65%;
    max-width: 960px;
    margin:10px auto;
    padding:20px;
    background-color: #f7f7f7;
  }
  .img{
    text-align: center;
  }
  .title{
    text-align: center;
    margin-bottom: 8px;
    font-size: 22px;
    font-weight: bold;
    margin-top: 5px
  }
  .author{
    text-align: right;
    font-size: 16px;
    margin-bottom: 5px;
    padding-right: 15px;
  }
  .content{
    font-size: 13px;
    letter-spacing: 2px;
    text-indent: 34px
  }
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
