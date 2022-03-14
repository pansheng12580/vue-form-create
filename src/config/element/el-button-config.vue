<template>
  <el-form-item label="内容">
    <el-input v-model="state.selectWidgetItem!.config.content" />
  </el-form-item>

  <el-form-item label="尺寸">
    <el-radio-group v-model="state.selectWidgetItem!.config.size">
      <el-radio-button label="large">大</el-radio-button>
      <el-radio-button label="default">默认</el-radio-button>
      <el-radio-button label="small">小</el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="类型">
    <el-select v-model="state.selectWidgetItem!.config.type" clearable>
      <el-option label="Primary" value="primary" />
      <el-option label="Success" value="success" />
      <el-option label="Warning" value="warning" />
      <el-option label="Danger" value="danger" />
      <el-option label="Info" value="info" />
      <el-option label="Text" value="text" />
    </el-select>
  </el-form-item>

  <el-form-item label="原生Type属性">
    <el-radio-group v-model="state.selectWidgetItem!.config.nativeType">
      <el-radio-button label="button">Button</el-radio-button>
      <el-radio-button label="submit">Submit</el-radio-button>
      <el-radio-button label="reset">Reset</el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="是否为朴素按钮">
    <el-switch v-model="state.selectWidgetItem!.config.plain" />
  </el-form-item>

  <el-form-item label="是否为圆角按钮">
    <el-switch v-model="state.selectWidgetItem!.config.round" />
  </el-form-item>

  <el-form-item label="是否为圆形按钮">
    <el-switch v-model="state.selectWidgetItem!.config.circle" />
  </el-form-item>

  <el-form-item label="是否为加载中状态">
    <el-switch v-model="state.selectWidgetItem!.config.loading" />
  </el-form-item>

  <el-form-item label="是否为禁用状态">
    <el-switch v-model="state.selectWidgetItem!.config.disabled" />
  </el-form-item>

  <el-form-item label="是否隐藏">
    <el-switch v-model="state.selectWidgetItem!.config.hidden" />
  </el-form-item>

  <el-form-item label="原生autofocus属性">
    <el-switch v-model="state.selectWidgetItem!.config.autofocus" />
  </el-form-item>

  <el-form-item label="自动在两个中文字符之间插入空格">
    <el-switch v-model="state.selectWidgetItem!.config.autoInsertSpace" />
  </el-form-item>
</template>

<script lang="ts" setup>
import state from '@/store'

defineOptions({
  name: 'ElButtonConfig'
})
</script>
