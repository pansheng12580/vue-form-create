<template>
  <el-form-item label="内容">
    <el-input v-model="state.selectWidgetItem!.config.content" />
  </el-form-item>

  <el-form-item label="分隔符样式">
    <el-input v-model="state.selectWidgetItem!.config.borderStyle" />
  </el-form-item>

  <el-form-item label="分割线方向">
    <el-radio-group v-model="state.selectWidgetItem!.config.direction">
      <el-radio-button label="horizontal">Horizontal</el-radio-button>
      <el-radio-button label="vertical">Vertical</el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="分割线文案的位置">
    <el-radio-group v-model="state.selectWidgetItem!.config.contentPosition">
      <el-radio-button label="left">Left</el-radio-button>
      <el-radio-button label="center">Center</el-radio-button>
      <el-radio-button label="right">Right</el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="是否隐藏">
    <el-switch v-model="state.selectWidgetItem!.config.hidden" />
  </el-form-item>
</template>

<script lang="ts" setup>
import state from '@/store'

defineOptions({
  name: 'ElDividerConfig'
})
</script>
