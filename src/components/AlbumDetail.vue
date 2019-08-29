<template>
    <div id="albumDetail">
      <div class="albumDetail" >
        <van-grid :border="false" :column-num="2">
          <van-grid-item v-for="item in blog" :key="item.PhotoId">
            <router-link v-bind:to="'/Photo/AlbumDetail/Photos/'+ item.PhotoId">
              <img :src="item.PhotoFileName" alt="" class="img" />
              <p class="title">{{item.PhotoTitle}}</p>
            </router-link>
            <p>{{item.CreateDate | dateFormat('')}}</p>
          </van-grid-item>
        </van-grid>
        <el-divider></el-divider>

        <i class="el-icon-edit-outline" style="font-size: 15px;
    margin-top: 20px">校友评论</i>
        <router-link  v-bind:to="'/Comments/'+ ArticleId">
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
        </div>

      </div>
      <p style="margin-bottom: 60px"></p>
    </div>
</template>

<script>
    export default {
      name: "albumDetail",
      inject:['reload'],  //页面刷新
      data(){
          return{
            ArticleId:this.$route.params.ArticleId,
            blog:[],
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
        console.log(this.ArticleId)
        this.$http.get("album_photo_list/album_id=" +this.ArticleId)
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
  .albumDetail{
    width: 75%;
    margin: auto;
  }
  .img{
    height: 200px;
    width: 100%
  }
  .title{
    text-align: center;
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
