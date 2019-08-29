<template>
    <div id="photo">

      <div class="photo">
        <p style="color: grey;margin-bottom: 20px;font-size: 25px">图片页面</p>
        <van-tabs v-model="active">
          <van-tab title="社会">
            <div class="album">
              <van-grid :border="false" :column-num="3">
                <van-grid-item v-for="item in aList" :key="item.ArticleId">
                  <router-link v-bind:to="'/Photo/AlbumDetail/'+ item.ArticleId">
                    <van-image :src="item.TitlePhoto" style="width: 200px;height: 150px"/>
                    <p style="font-size: 12px;text-align: center">相册{{item.ArticleId}}</p>
                  </router-link>
                  <p>{{item.CreateDate | dateFormat('')}}</p>
                  <div style="margin-left: 120px">
                    <router-link v-bind:to="'/Comments/'+ item.ArticleId">
                      <i class="el-icon-edit-outline" style="font-size: 16px;margin-right: 20px;"></i>
                    </router-link>
                    <i class="el-icon-star-on" style="font-size: 18px;float: right;color: red;"></i>
                  </div>
                </van-grid-item>
              </van-grid>
            </div>
          </van-tab>
          <van-tab title="科技">
            <div class="album">
              <van-grid :border="false" :column-num="3">
                <van-grid-item>
                  <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                </van-grid-item>
                <van-grid-item>
                  <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                </van-grid-item>
                <van-grid-item>
                  <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                </van-grid-item>
              </van-grid>
            </div>
          </van-tab>
        </van-tabs>
      </div>

    </div>
</template>

<script>
    export default {
      name: "photo",
      data(){
          return{
            active: 0,
            albumList:[],
            aList:[],
          }
      },
      created(){
        this.getAlbum();
        this.getArticle()
      },
      methods:{
        getAlbum(){
          var url = 'album_list'
          this.$http.get(url).then((response)=> {
              this.albumList = response.data
              // console.log(this.albumList);
          },
          function (err) {  // 请求数据出错
              console.log(err);
          })
        },
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
      },
    }
</script>

<style scoped>
  .photo{
    width: 75%;
    margin: auto;
  }
</style>
