<template>
    <div id="photo">

      <div class="photo">
        <p style="color: grey;margin-bottom: 20px;font-size: 25px">图片页面</p>
        <van-tabs v-model="active">
          <van-tab title="社会">
            <div class="album">
              <van-grid :border="false" :column-num="2">
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
          <van-tab title="科技">
            内容 2
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
            active: 1,
            albumList:[],
          }
      },
      created(){
        this.getAlbum();
      },
      methods:{
        getAlbum(){
          var url = 'album_list'
          this.$http.get(url).then((response)=> {
              this.albumList = response.data
              console.log(this.albumList);
          },
          function (err) {  // 请求数据出错
              console.log(err);
          })
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
