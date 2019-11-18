<template>
  <div id="Page3">
    <div id="article">
      <i class="el-icon-s-grid" style="color: grey;font-size: 15px;margin-bottom: 20px;margin-top: 20px">NEWS&#8195新闻热点</i>
      <div style="width: 100%">
        <el-input placeholder="请输入搜索内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="happy" v-for="item in search(input)">
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
    </div>
  </div>
</template>

<script>
  export default {
    name: "Page3",
    data(){
      return{
        aList:[],
        input: '',
      }
    },
    methods:{
      getArticle() {
        //新闻列表接口：
        var urls = 'article_list';
        //jsonp请求数据时，后台API接口要支持jsonp
        this.$http.get(urls).then((response)=> {
            this.aList = response.data
            // console.log(this.aList)
          },
          function(err) { 		      //获取数据失败 异常提示
            console.log(err);
          });
      },
      getActivity(){
        //活动列表接口
        var urls = 'activity_list';
        //get 获取活动数据
        this.$http.get(urls).then((response)=>{
          this.AList = response.data
        },
        function (err) {
          console.log(err)
        })
      },
      // 搜索功能 通过关键字判断(比对文章标题和文章来源)
      search(input){
        var newList = []
        this.aList.forEach(item =>{
          //通过 indexof() 判断文章标题或者文章来源是否包含关键字 包含则将数据存放新数组并返回
          if((item.Title.indexOf(input) != -1) || (item.ArticleSource.indexOf(input) != -1)){
            newList.push(item)
          }
        })
        return newList
      },
    },
    mounted(){
      this.getArticle()  //文章获取
      this.getActivity() //活动获取
    }
  }
</script>

<style scoped>
  /*搜索*/
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  /*图文列表*/
  #article{
    width: 80%;
    margin: auto;
  }
  .happy{
    width: 900px;
    height: 120px;
    margin: 10px auto;
    /*border:solid 1px gainsboro;*/
    overflow: hidden;
    background-color: aliceblue;
  }
  .love{
    width: 200px;
    float: left;
  }
  .love img{
    display: block;
    width: 100%;
    height: 120px;
  }
  .you{
    width: 690px;
    float: right;
  }
</style>
