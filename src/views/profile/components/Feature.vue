<template>
  <div class="">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item
        v-for="item in features"
        :key="item.id"
        :title="item.title"
        :name="item.id"
      >
        <div v-html="item.content"></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
defineProps({
  features: {
    type: Array,
    required: true
  }
})

const activeName = ref(0)
</script>

<style lang="scss" scoped>
::v-deep .el-collapse-item__header {
  font-weight: bold;
}

.el-collapse-item {
  ::v-deep a {
    color: #2d62f7;
    margin: 0 4px;
  }
}
</style>
