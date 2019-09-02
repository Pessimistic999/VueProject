<template>
    <div id="help">
      <div style="margin: auto;width: 75%">
        <i class="el-icon-phone-outline" style="margin-bottom: 30px;color: grey;font-size: 18px;margin-top: 20px">&#8195帮助中心</i>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="帮助首页" name="first">
            <div style="margin-top: 15px;" class="list">
              <el-input placeholder="请输入内容" v-model="input">
                <template slot="append">搜索</template>
              </el-input>
            </div>
            <div style="margin-top: 20px;margin-bottom: 25px">
              <i class="el-icon-document" style="margin-bottom: 30px;color: grey;
              font-size: 15px;margin-top: 20px;margin-left: 6%">&#8194帮助首页</i>
            </div>
          </el-tab-pane>
          <el-tab-pane label="常见问题" name="second">
            <div style="margin-top: 15px;" class="list">
              <el-input placeholder="请输入内容" v-model="input">
                <template slot="append">搜索</template>
              </el-input>
            </div>
            <div style="margin-top: 20px;margin-bottom: 25px">
              <i class="el-icon-document" style="margin-bottom: 30px;color: grey;
              font-size: 15px;margin-top: 20px;margin-left: 6%">&#8194常见问题</i>
              <div class="list" v-for="(item,index) in search(input)">
                <router-link  v-bind:to="'/blog/'+ item.Id">
                  <div class="contents">
                    <p style="color: gray;font-size: 10px;float: right;">{{item.createDate}}</p>
                    <p style="color: darkgray;font-size: 13px">{{item.title}}</p>
                    <!--分割线-->
                    <p class="cell_dashed"></p>
                  </div>
                </router-link>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="更新说明" name="third">
            <div style="margin-top: 15px;" class="list">
              <el-input placeholder="请输入内容" v-model="input">
                <template slot="append">搜索</template>
              </el-input>
            </div>
            <div style="margin-top: 20px;margin-bottom: 25px">
              <i class="el-icon-document" style="margin-bottom: 30px;color: grey;
              font-size: 15px;margin-top: 20px;margin-left: 6%">&#8194更新说明</i>
              <div class="list" v-for="(item,index) in search(input)">
                <router-link  v-bind:to="'/blog/'+ item.Id">
                  <div class="contents">
                    <p style="color: gray;font-size: 10px;float: right;">{{item.createDate}}</p>
                    <p style="color: darkgray;font-size: 13px">{{item.title}}</p>
                    <!--分割线-->
                    <p class="cell_dashed"></p>
                  </div>
                </router-link>
              </div>
              <div class="block" style="width: 80%;margin-left: 10%">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :page-size="10"
                  layout="total, prev, pager, next"
                  :total="100">
                </el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="意见反馈" name="fourth">
            <div style="background-color: gainsboro;margin-top: 20px;margin-bottom: 25px">
              <i class="el-icon-edit-outline" style="margin-bottom: 30px;color: grey;
              font-size: 15px;margin-top: 20px;margin-left: 6%">&#8194提交问题</i>
              <div style="width: 80%;margin-left: 10%">
                <el-input placeholder="请输入联系方式"
                          v-model="item.phone" style="width: 65%" clearable>
                </el-input>
                <el-input placeholder="请输入姓名"
                          v-model="item.name" style="float: left;width: 35%" clearable>
                </el-input>
              </div>
              <el-input type="textarea" :rows="10" style="width: 80%;margin-left: 10%;padding-bottom: 20px"
                placeholder="感谢您在此提出的宝贵意见和建议，您留下的每一个字都会用来提高我们的服务品质（最多不超过300字）" v-model="item.content">
              </el-input>
              <el-button type="success" plain style="width: 16%;margin-left: 42%;margin-bottom: 25px" @click="submit">提交</el-button>

            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
    export default {
      name: "help",
      data(){
          return{
            activeName: 'first',
            item:{
              name:'',
              phone:'',
              content:''
            },
            List:[
              { Id:'1', title:'【短信】购买短信额度', createDate:'2018-05-02 11:20:10' },
              { Id:'2', title:'【校友云卡】校友云卡的使用场景', createDate:'2018-05-02 11:20:10' },
              { Id:'3', title:'【文章】自动同步微信文章到社群文章列表', createDate:'2018-05-02 11:20:10' },
              { Id:'4', title:'【邮件群发】如何创建并发送邮件？', createDate:'2018-05-02 11:20:10' },
              { Id:'5', title:'【社群资料】什么是超级管理员？如何设置超级管理员及安全密码？', createDate:'2018-05-02 11:20:10' }
            ],
            currentPage: 5,
            input:'',
          }
      },
      methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        },
        //问题提交
        submit(){ },
        // 分页
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        search(input){
          var newList = []
          this.List.forEach(item =>{
            if(item.title.indexOf(input) != -1){
              newList.push(item)
            }
          })
          return newList
        }
      }
    }
</script>

<style scoped>
.list{
  width: 86%;
  margin-left: 6%;
}
/*分割线*/
.cell_dashed{
  width: 100%;
  border-bottom:1px dashed #999999;
  height: 1rem;
  margin-top: 1px;
  margin-bottom: 10px;
}
</style>
