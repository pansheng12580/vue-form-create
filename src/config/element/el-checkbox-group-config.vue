<template>
  <el-form-item label="标题">
    <el-input v-model="state.selectWidgetItem!.config.label" />
  </el-form-item>

  <el-option-source-type-config multiple />

  <el-form-item label="可被勾选的checkbox的最大数量">
    <el-input-number v-model="state.selectWidgetItem!.config.max" :min="0" />
  </el-form-item>

  <el-form-item label="可被勾选的checkbox的最小数量">
    <el-input-number v-model="state.selectWidgetItem!.config.min" :min="0" />
  </el-form-item>

  <el-form-item label="尺寸">
    <el-radio-group v-model="state.selectWidgetItem!.config.size">
      <el-radio-button label="large">大</el-radio-button>
      <el-radio-button label="default">默认</el-radio-button>
      <el-radio-button label="small">小</el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="是否隐藏">
    <el-switch v-model="state.selectWidgetItem!.config.hidden" />
  </el-form-item>

  <el-form-item label="是否禁用">
    <el-switch v-model="state.selectWidgetItem!.config.disabled" />
  </el-form-item>
</template>

<script lang="ts" setup>
import { state } from '@/store'
import ElOptionSourceTypeConfig from './el-option-source-type-config.vue'

defineOptions({
  name: 'ElCheckboxGroupConfig'
})
</script>
