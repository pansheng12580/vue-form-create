<template>
  <h4>Form Item配置</h4>
  <el-form-item label="标签宽度">
    <el-input v-model="state.selectWidgetItem!.formItemConfig!.labelWidth" placeholder="请输入标签宽度" />
  </el-form-item>
</template>

<script lang="ts" setup>
import { state } from '@/store'

defineOptions({
  name: 'ElFormItemConfig'
})
</script>
