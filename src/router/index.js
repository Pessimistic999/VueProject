import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Article from '../components/Article.vue'
import Page4 from '../components/Page4.vue'
import Home from '../components/Home.vue'
import About from '../components/Aboutus.vue'
import Help from '../components/Help.vue'
import Sets from '../components/Sets.vue'
import Comments from '../components/Comments.vue'
import Singleblogs from '../components/Singleblogs.vue'
import AlbumDetail from '../components/AlbumDetail.vue'
import Photo from '../components/Photo.vue'
import Photos from '../components/Photos.vue'
import Chart from '../components/Chart.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',   //消除网址中的#
  routes:[{
    // 默认进入首页 为 Home     http://localhost:8080/Home
    path: '/', redirect: '/Home'
  },{
    path: '/Home/Page1', component: Page1
  },{
    path: '/Page1', component: Page1
  },{
    path: '/Page2', component: Page2
  },{
    path:'/Article', component: Article
  },{
    path:'/Page4', component: Page4
  },{
    path:'/Home', component: Home
  },{
    path:'/About', component: About
  },{
    path:'/Help', component: Help
  },{
    path:'/Sets', component: Sets
  },{
    path:'/Photo', component: Photo
  },{
    path:'/Chart', component: Chart
  },{
    path:'/Photo/AlbumDetail/Photos/:PhotoId', component: Photos
  },{
    path:'/Photo/AlbumDetail/:ArticleId', component: AlbumDetail
  },{
    path:'/Comments/:ArticleId', component: Comments
  },{
    path: '/blog/:ArticleId', name: 'singleblogs', component: Singleblogs
  }]
})

export default router;
