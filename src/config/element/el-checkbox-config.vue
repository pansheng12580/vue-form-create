<template>
  <el-form-item label="标题">
    <el-input v-model="state.selectWidgetItem!.config.label" />
  </el-form-item>

  <el-form-item label="选中时的值">
    <el-input v-model="state.selectWidgetItem!.config.trueLabel" />
  </el-form-item>

  <el-form-item label="未选中时的值">
    <el-input v-model="state.selectWidgetItem!.config.falseLabel" />
  </el-form-item>

  <el-form-item label="初始是否选中">
    <el-switch v-model="state.selectWidgetItem!.config.defaultValue" />
  </el-form-item>

  <el-form-item label="尺寸">
    <el-radio-group v-model="state.selectWidgetItem!.config.size">
      <el-radio-button label="large">大</el-radio-button>
      <el-radio-button label="default">默认</el-radio-button>
      <el-radio-button label="small">小</el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="indeterminate状态">
    <el-switch v-model="state.selectWidgetItem!.config.indeterminate" />
  </el-form-item>

  <el-form-item label="是否显示边框">
    <el-switch v-model="state.selectWidgetItem!.config.border" />
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

defineOptions({
  name: 'ElCheckboxConfig'
})
</script>
