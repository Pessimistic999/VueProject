<template>
  <div id="chart">
    <div class="chart">
      <schart :canvasId="canvasId"
              :type="type"
              :width="width"
              :height="height"
              :data="data"
              :options="options"
      ></schart>
    </div>
  </div>
</template>
<script>
  //  引入vue-schart 图表组件
  import Schart from 'vue-schart'


  export default {
    name:'chart',
    data() {
      return {
        canvasId: 'myCanvas',
        type: 'bar',
        width: 500,
        height: 400,
        data: [
          { name: '2014', value: 1342 },
          { name: '2015', value: 2123 },
          { name: '2016', value: 1654 },
          { name: '2017', value: 1795 },
        ],
        options: {
          title: 'Total sales of stores in recent years'
        }
      }
    },
    components:{
      Schart
    }
  }
</script>

<style scoped>
  .chart{
    width: 50%;
    margin: auto;
  }
</style>
