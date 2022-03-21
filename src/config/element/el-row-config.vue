<template>
  <el-form-item label="自定义元素标签">
    <el-input v-model="state.selectWidgetItem!.config.tag" />
  </el-form-item>

  <el-form-item label="栅格间隔">
    <el-input-number v-model="state.selectWidgetItem!.config.gutter" :min="0" />
  </el-form-item>

  <el-form-item label="水平排列方式">
    <el-select v-model="state.selectWidgetItem!.config.justify" clearable>
      <el-option label="Start" value="start" />
      <el-option label="End" value="end" />
      <el-option label="Center" value="center" />
      <el-option label="SpaceAround" value="space-around" />
      <el-option label="SpaceBetween" value="space-between" />
      <el-option label="SpaceEvenly" value="space-evenly" />
    </el-select>
  </el-form-item>

  <el-form-item label="垂直排列方式">
    <el-radio-group v-model="state.selectWidgetItem!.config.align">
      <el-radio-button label="top">Top</el-radio-button>
      <el-radio-button label="middle">Middle</el-radio-button>
      <el-radio-button label="bottom">Bottom</el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="是否隐藏">
    <el-switch v-model="state.selectWidgetItem!.config.hidden" />
  </el-form-item>
</template>

<script lang="ts" setup>
import state from '@/store'

defineOptions({
  name: 'ElRowConfig'
})
</script>
