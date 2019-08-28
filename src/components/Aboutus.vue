<template>
    <div id="about">
      <img src="../assets/timg.png" alt="" style="width: 100%;height: 360px"/>
      <van-tabs v-model="active">
        <van-tab title="关于我们">
          <div>
            <p class="title">关于我们</p>
            <img src="../assets/timg.png" alt="" style="width: 280px;height: 160px;float: right;margin-right: 30px;
margin-left: 30px"/>
            <p class="content">杭州友笑网络科技有限公司成立于2007年，专注为高校校友会&教育基金会提供解决方案，帮助校友组织和教育基金会蓬勃发展。
              社汇是杭州友笑网络科技有限公司开发的管理系统。通过组织管理、运营百宝箱、智能AI等内容，以技术和数据为手段，平台为依托，
              解决成员管理、传播、活动、捐赠等方方面面的问题，最大可能的帮助高校管理运营校友会和教育基金会，提高管理效率和水平。</p>
            <p class="content">目前，已经有超过400家高校通过社汇进行校友会和教育基金会的管理，其中包括多所985、211院校。</p>
            <!--分割线-->
            <p class="cell_dashed" style="margin-bottom: 20px"></p>
            <div>
              <div class="happy" style="float: right;margin-right: 24px">
                <div class="love">
                  <img src="http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658" alt="" />
                </div>
                <div class="you">
                  <h3 style="color: gray">责任</h3>
                  <p style="display: -webkit-box;-webkit-box-orient: vertical;
                -webkit-line-clamp: 2;overflow: hidden;color: darkgray">帮助高校校友会和教育基金会蓬勃发展</p>
                </div>
              </div>
            </div>
            <div class="happy">
              <div class="love">
                <img src="http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658" alt="" />
              </div>
              <div class="you">
                <h3 style="color: gray">使命</h3>
                <p style="display: -webkit-box;-webkit-box-orient: vertical;
                -webkit-line-clamp: 2;overflow: hidden;color: darkgray">校友：让亲友笑、校友笑；有效；优秀；you show</p>
              </div>
            </div>
          </div>

          <p style="margin-top: 80px;margin-bottom: 20px"></p>

          <div>
            <p class="title">基本信念</p>
          </div>

          <p style="margin-top: 80px;margin-bottom: 20px"></p>

          <div>
            <p class="title">基本想法</p>
            <div v-for="idx in list">
              <p class="til">{{idx.title}}</p>
              <p class="cont">{{idx.content1}}</p>
              <p>{{idx.content2}}</p>
              <p>{{idx.content3}}</p>
              <p class="cell_dashed" style="margin-bottom: 20px"></p>
            </div>
          </div>
        </van-tab>
        <van-tab title="历程">
          <div style="height: 800px;display:inline-block;">
            <p class="title">校友会历程</p>
            <el-steps direction="vertical" :active="7" style="margin-left: 150px;margin-bottom: 30px">
              <el-step title="2018 04" description="“校友会&教育基金会智能化高峰论坛”召开；
              商城、智能邮件、微信机器人、育金项目模块上线"></el-step>
              <el-step title="2018 05" description="“校友会&教育基金会智能化高峰论坛”召开；
              商城、智能邮件、微信机器人、育金项目模块上线"></el-step>
              <el-step title="2018 09" description="“校友会&教育基金会智能化高峰论坛”召开；
              商城、智能邮件、微信机器人、育金项目模块上线"></el-step>
              <el-step title="2019 02" description="“校友会&教育基金会智能化高峰论坛”召开；
              商城、智能邮件、微信机器人、育金项目模块上线"></el-step>
              <el-step title="2019 05" description="“校友会&教育基金会智能化高峰论坛”召开；
              商城、智能邮件、微信机器人、育金项目模块上线"></el-step>
              <el-step title="2019 07" description="“校友会&教育基金会智能化高峰论坛”召开；
              商城、智能邮件、微信机器人、育金项目模块上线"></el-step>
              <el-step title="2019 08" description="“校友会&教育基金会智能化高峰论坛”召开；
              商城、智能邮件、微信机器人、育金项目模块上线"></el-step>
            </el-steps>
          </div>
        </van-tab>
        <van-tab title="社汇新闻">
          <div>
            <p class="title">社汇新闻</p>
            <div class="list" v-for="(item,index) in dataList">
              <router-link  v-bind:to="'/blog/'+ item.ArticleId">
                <div class="images">
                  <img :src="item.TitlePhoto" alt="" />
                </div>
                <div class="contents">
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
        </van-tab>
        <van-tab title="联系我们">
          <div>
            <p class="title">意见和反馈</p>
            <p style="font-size: 8px;margin-bottom: 20px">欢迎向我们提供您宝贵的意见，您的建议是我们不断进步的动力</p>
            <div style="margin: 0 auto;text-align: center;width: 80%">
              <el-form ref="form" :model="formIn" label-width="80px">
                <el-form-item label="姓名(必填)">
                  <el-input  placeholder="例如：李三" v-model="formIn.name" autofocus="true"></el-input>
                </el-form-item>
                <el-form-item label="邮箱(必填)">
                  <el-input placeholder="例如：25362@qq.com" v-model="formIn.email"></el-input>
                </el-form-item>
                <el-form-item label="手机(选题)">
                  <el-input placeholder="例如：15245869562" v-model="formIn.phone"></el-input>
                </el-form-item>
                <el-form-item label="校友(社群)">
                  <el-input placeholder="例如：湖北第二师范学院校友会" v-model="formIn.school"></el-input>
                </el-form-item>
                <el-form-item label="意见(必填)">
                  <el-input placeholder="请输入你的意见或反馈" type="textarea" :rows="6" v-model="formIn.text"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" plain @click="onSubmit" style="width: 120px;height: 45px">发送</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <p class="title">联系方式</p>
          <div>
            <div>
              <div>
                <div class="happy" style="float: right;margin-right: 24px">
                  <div class="love">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566464033123&di=072d504a034f1f8985dbcc35ee035aca&imgtype=0&src=http%3A%2F%2Fimg.sccnn.com%2Fbimg%2F325%2F928.jpg" alt="" />
                  </div>
                  <div class="you">
                    <h3 style="color: gray">地址</h3>
                    <p style="color: darkgray">联系地址</p>
                    <p style="display: -webkit-box;-webkit-box-orient: vertical;
                -webkit-line-clamp: 2;overflow: hidden;color: darkgray">武汉市武昌区解放路360号</p>
                  </div>
                </div>
              </div>
              <div class="happy">
                <div class="love">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566463933482&di=bf864d71d0388cc6c2ed22b6f5801bd4&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170712%2F13577215ca184bd89233b221425f6d8e_th.jpg" alt="" />
                </div>
                <div class="you">
                  <h3 style="color: gray">手机</h3>
                  <p style="color: darkgray">052-56235623</p>
                  <p style="color: darkgray">051-52635623</p>
                </div>
              </div>
            </div>
            <p style="margin-bottom: 20px"></p>
            <div>
              <div class="happy" style="float: right;margin-right: 24px">
                <div class="love">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566464338275&di=13a3ae89768ffea1dd126d402a905bf1&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F591%2F105%2F8567501195_752987408.jpg" alt="" />
                </div>
                <div class="you">
                  <h3 style="color: gray">二维码</h3>
                  <p style="color: darkgray">扫描二维码</p>
                  <p style="color: darkgray">获取更多帮助</p>
                </div>
              </div>
            </div>
            <div class="happy">
              <div class="love">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3186045401,1258950385&fm=26&gp=0.jpg" alt="" />
              </div>
              <div class="you">
                <h3 style="color: gray">邮箱</h3>
                <p style="color: darkgray">联系邮箱</p>
                <p style="color: darkgray">whdszy@52.com</p>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
      <p style="margin-bottom: 20px"></p>
    </div>
</template>

<script>
    export default {
      name: "about",
      data(){
          return{
            active:'2',
            formIn:{
              name: '',
              email: '',
              phone:'',
              school:'',
              text:''
            },
            list:[
              {
                title:'感恩和汇聚，我们不忘初心',
                content1:'2007年我们开始了校友会&教育基金会的探索...',
                content2:'结合大数据和互联网+，秉持着帮助校友会和教育基金会蓬勃发展的初心，我们不断尝试。',
                content3:'用技术和平台汇聚校友，报以真诚和感恩、智慧和挑战，我们在不断前行',
              },{
                title:'专属而高效，打造不一样的社群',
                content1:'2016年社汇上线以来，支持了高校11000+场校友活动，发布文章354000+篇，发起捐赠项目820+起...',
                content2:'无论是成员数据库、小额捐赠，还是智能AI、资金与项目管理，我们坚持高效专业，携手合作，',
                content3:'将互联网技术融入校友会和教育基金会工作，社汇为校友会和教育基金会的跨越式发展创造条件。',
              },{
                title:'进取与合作',
                content1:'作为行业的先行者，我们积极的探索互联网可以带给校友会&教育基金会的无限可能性。',
                content2:'专业与品位，潜心打造产品，不断提升服务与体验。',
                content3:'脚踏实地，勇往直前，只有校友会和教育基金会蓬勃发展了，我们才会蓬勃发展。',
              }
            ],
            dataList:[],
          }
      },
      methods:{
        // 意见提交
        onSubmit(){
          console.log(this.formIn);
          var data = this.formIn
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
        // 获取数据 get方法
        getData() {
          //获取数据接口：
          var urls = 'article_list/';
          //jsonp请求数据时，后台API接口要支持jsonp
          this.$http.get(urls).then((response)=> {
              this.dataList = response.data
              // console.log(this.dataList)
            },
            function(err) { 		      //获取数据失败 异常提示
              console.log(err);
            });
        },
      },
      mounted(){  //生命周期
        this.getData() //
      }
    }
</script>

<style scoped>
#about{
  width: 85%;
  /*margin-left: 100px;*/
  margin: 0 auto;
}
  .title{
    color: grey;
    margin-top: 30px;
    font-size: 18px;
    margin-bottom: 30px;
  }
  .content{
    margin-left: 20px;
    text-indent: 24px;
    margin-bottom: 20px;
    line-height: 20px;
    font-size: 12px;
  }
  /*分割线*/
  .cell_dashed{
    width: 100%;
    border-bottom:1px dashed #999999;
    height: 1rem;
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .happy{
    margin-left: 24px;
    width: 38%;
    height: 55px;
    overflow: hidden;
  }
  .love{
    width: 80px;
    float: left;
  }
  .love img{
    display: block;
    width: 80%;
  }
  .you{
    width: 210px;
    float: right;
  }
  .til{
    color: dodgerblue;
    font-size: 15px;
    margin-bottom: 15px;
  }
  .cont{
    font-size: 10px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  /*图文列表*/
  .list{
    width: 700px;
    height: 100px;
    margin: 20px auto;
    /*border:solid 1px gainsboro;*/
    overflow: hidden;
  }
  .images{
    width: 180px;
    float: left;
  }
  .images img{
    display: block;
    width: 100%;
  }
  .contents{
    width: 490px;
    float: right;
  }
</style>
