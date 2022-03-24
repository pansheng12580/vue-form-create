<template>
  <el-form-item label="自定义元素标签">
    <el-input v-model="state.selectWidgetItem!.config.tag" />
  </el-form-item>

  <el-form-item label="栅格占据的列数">
    <el-input-number v-model="state.selectWidgetItem!.config.span" :min="0" :max="24" />
  </el-form-item>

  <el-form-item label="栅格左侧的间隔格数">
    <el-input-number v-model="state.selectWidgetItem!.config.offset" />
  </el-form-item>

  <el-form-item label="栅格向右移动格数">
    <el-input-number v-model="state.selectWidgetItem!.config.push" />
  </el-form-item>

  <el-form-item label="栅格向左移动格数">
    <el-input-number v-model="state.selectWidgetItem!.config.pull" />
  </el-form-item>

  <el-form-item label="是否隐藏">
    <el-switch v-model="state.selectWidgetItem!.config.hidden" />
  </el-form-item>
</template>

<script lang="ts" setup>
import { state } from '@/store'

defineOptions({
  name: 'ElColConfig'
})
</script>
