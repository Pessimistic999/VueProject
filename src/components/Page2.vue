<template>
  <div id="Page2">
    <div class="Page2">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="姓名" prop="name">
          <Input v-model="formValidate.name" placeholder="Enter your name" v-focus></Input>
        </FormItem>
        <FormItem label="邮箱" prop="mail">
          <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
        </FormItem>
        <FormItem label="城市" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city">
            <Option value="beijing">北京</Option>
            <Option value="shanghai">上海</Option>
            <Option value="shenzhen">深圳</Option>
          </Select>
        </FormItem>
        <FormItem label="日期">
          <Row>
            <Col span="11">
              <FormItem prop="date">
                <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
              </FormItem>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
              <FormItem prop="time">
                <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
              </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="Gender" prop="gender">
          <RadioGroup v-model="formValidate.gender">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Hobby" prop="interest">
          <CheckboxGroup v-model="formValidate.interest">
            <Checkbox label="Eat"></Checkbox>
            <Checkbox label="Sleep"></Checkbox>
            <Checkbox label="Run"></Checkbox>
            <Checkbox label="Movie"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="Desc" prop="desc">
          <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>

      <!-- 步骤条 -->
      <van-steps :active="active" active-icon="success"
        active-color="#38f" direction="vertical">
        <van-step>
          <p>【城市】物流状态1</p>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <p>【城市】物流状态2</p>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <p>快件已发货</p>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>


      <!-- 大图预览 -->
      <div>
        <el-image
          style="width: 100px; height: 100px"
          :src="url"
          :preview-src-list="srcList">
        </el-image>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Page2",
    data(){
      return{
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],
        active:1,
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
            { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
          ],
          city: [
            { required: true, message: 'Please select the city', trigger: 'change' }
          ],
          gender: [
            { required: true, message: 'Please select gender', trigger: 'change' }
          ],
          interest: [
            { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
            { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
          ],
          time: [
            { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
            { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
          ]
        },

        someData:[],

      }
    },
    methods:{
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    },
    mounted: function () {
      // GET 获取数据
      this.$http.get('http://127.0.0.1:8000/activity_list/').then(response => {
        console.log(response.data);
        // get body data
        this.someData = response.body;
        console.log(this.someData)

      }, response => {
        console.log("error");
      });
    },
  }
</script>

<style scoped>
  .Page2{
    width: 85%;
    padding-top: 15px;
  }
</style>

