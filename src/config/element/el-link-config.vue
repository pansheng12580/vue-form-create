<template>
  <el-form-item label="内容">
    <el-input v-model="state.selectWidgetItem!.config.content" />
  </el-form-item>

  <el-form-item label="原生href属性">
    <el-input v-model="state.selectWidgetItem!.config.href" />
  </el-form-item>

  <el-form-item label="类型">
    <el-select v-model="state.selectWidgetItem!.config.type" clearable>
      <el-option label="Primary" value="primary" />
      <el-option label="Success" value="success" />
      <el-option label="Warning" value="warning" />
      <el-option label="Danger" value="danger" />
      <el-option label="Info" value="info" />
    </el-select>
  </el-form-item>

  <el-form-item label="是否下划线">
    <el-switch v-model="state.selectWidgetItem!.config.underline" />
  </el-form-item>

  <el-form-item label="是否禁用状态">
    <el-switch v-model="state.selectWidgetItem!.config.disabled" />
  </el-form-item>

  <el-form-item label="是否隐藏">
    <el-switch v-model="state.selectWidgetItem!.config.hidden" />
  </el-form-item>
</template>

<script lang="ts" setup>
import { state } from '@/store'

defineOptions({
  name: 'ElLinkConfig'
})
</script>
