<template>
  <el-form-item label="iconName">
    <el-input v-model="state.selectWidgetItem!.config.name" />
  </el-form-item>

  <el-form-item label="Size">
    <el-input-number v-model="state.selectWidgetItem!.config.size" :min="0" controls-position="right" />
  </el-form-item>

  <el-form-item label="Color">
    <el-color-picker v-model="state.selectWidgetItem!.config.color" show-alpha />
  </el-form-item>

  <el-form-item label="是否隐藏">
    <el-switch v-model="state.selectWidgetItem!.config.hidden" />
  </el-form-item>
</template>

<script lang="ts" setup>
import { state } from '@/store'

defineOptions({
  name: 'ElIconConfig'
})
</script>
