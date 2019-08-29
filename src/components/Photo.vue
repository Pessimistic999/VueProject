<template>
    <div id="photo">

      <div class="photo">
        <h1>图片页面</h1>
        <van-tabs v-model="active">
          <van-tab title="社会">
            内容 1
          </van-tab>
          <van-tab title="科技">
            内容 2
          </van-tab>
          <van-tab title="娱乐">
            内容 3
          </van-tab>
          <van-tab title="生活">
            内容 4
          </van-tab>
          <van-tab title="家居">
            内容 5
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
          }
      },
      methods:{

      },
    }
</script>

<style scoped>
  .photo{
    width: 85%;
    margin: auto;
  }
</style>
