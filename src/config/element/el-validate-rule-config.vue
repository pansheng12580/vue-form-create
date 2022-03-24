<template>
  <h4>验证规则</h4>
  <el-form-item label="触发时机">
    <el-radio-group v-model="state.selectWidgetItem!.formItemConfig!.rules[0].trigger">
      <el-radio-button label="blur">Blur</el-radio-button>
      <el-radio-button label="change">Change</el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="是否为必选字段">
    <el-switch v-model="state.selectWidgetItem!.formItemConfig!.rules[0].required" />
  </el-form-item>

  <el-form-item label="校验类型">
    <el-select v-model="state.selectWidgetItem!.formItemConfig!.rules[0].type">
      <el-option value="string" label="字符串" />
      <el-option value="number" label="数字" />
      <el-option value="boolean" label="布尔值" />
      <el-option value="method" label="方法" />
      <el-option value="regexp" label="正则表达式" />
      <el-option value="integer" label="整数" />
      <el-option value="float" label="浮点数" />
      <el-option value="array" label="数组" />
      <el-option value="object" label="对象" />
      <el-option value="enum" label="枚举" />
      <el-option value="date" label="日期" />
      <el-option value="url" label="URL地址" />
      <el-option value="hex" label="十六进制" />
      <el-option value="email" label="邮箱地址" />
      <el-option value="any" label="任意类型" />
    </el-select>
  </el-form-item>

  <el-form-item label="校验文案">
    <el-input v-model="state.selectWidgetItem!.formItemConfig!.rules[0].message" placeholder="错误信息，不设置时会通过模板自动生成" />
  </el-form-item>

  <el-form-item label="字段长度">
    <el-input-number v-model="state.selectWidgetItem!.formItemConfig!.rules[0].len" />
  </el-form-item>

  <el-form-item label="最大长度">
    <el-input-number v-model="state.selectWidgetItem!.formItemConfig!.rules[0].max" />
  </el-form-item>

  <el-form-item label="最小长度">
    <el-input-number v-model="state.selectWidgetItem!.formItemConfig!.rules[0].min" />
  </el-form-item>

  <el-form-item label="正则表达式">
    <el-input v-model="state.selectWidgetItem!.formItemConfig!.rules[0].pattern" />
  </el-form-item>
</template>

<script lang="ts" setup>
import { state } from '@/store'

defineOptions({
  name: 'ElValidateRuleConfig'
})
</script>
