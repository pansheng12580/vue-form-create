<template>
  <el-form-item label="内容">
    <el-input v-model="state.selectWidgetItem!.config.content" />
  </el-form-item>

  <el-form-item label="是否隐藏">
    <el-switch v-model="state.selectWidgetItem!.config.hidden" />
  </el-form-item>
</template>

<script lang="ts" setup>
import state from '@/store'

defineOptions({
  name: 'ElTextConfig'
})
</script>
