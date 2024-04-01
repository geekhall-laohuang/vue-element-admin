<template>
  <div class="chart-container">
    <!-- 累计收益 -->
    <trend></trend>
    <el-row class="mt-20">
      <el-col :span="16" :gutter="20">
        <!-- 日金分析图 -->
        <horizontal-bar></horizontal-bar>
      </el-col>
      <el-col :span="8">
        <!-- 日历图 -->
        <calendar></calendar>
      </el-col>
    </el-row>
    <!-- 第三行 -->
    <el-row class="mt-20" gutter="20">
      <el-col :span="6" class="mt-20">
        <div>
          <!-- 饼图 -->
          <pieVue></pieVue>
          <!-- 文档云图 -->
          <word-cloud class="mt-20"></word-cloud>
        </div>
      </el-col>
      <el-col :span="18">
        <!-- 地图可视化 -->
        <b-map class="mt-20"></b-map>
      </el-col>
    </el-row>

    <!-- s2表格数据格式 -->
    <table-sheet></table-sheet>
  </div>
</template>

<script setup>
import {} from 'vue'
import Trend from './components/trend'
import HorizontalBar from './components/horizontal-bar'
import Calendar from './components/calendar'
import pieVue from './components/pie'
import WordCloud from './components/word-cloud'
import BMap from './components/b-map'
import TableSheet from './components/table-sheet'
</script>

<style lang="scss" scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
