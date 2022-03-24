<template>
  <el-form label-position="top">
    <el-form-item label="标签对齐方式">
      <el-radio-group v-model="state.formConfig.labelPosition">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="标签宽度">
      <el-input v-model="state.formConfig.labelWidth" placeholder="请输入标签宽度" />
    </el-form-item>

    <el-form-item label="标签后缀">
      <el-input v-model="state.formConfig.labelSuffix" placeholder="请输入标签后缀" />
    </el-form-item>

    <el-form-item label="Icon地址">
      <el-input v-model="state.iconSrc" placeholder="Iconfont Symbol" @blur="(event: any) => loadJsLink(event.target.value)" />
    </el-form-item>

    <el-form-item label="组件尺寸">
      <el-radio-group v-model="state.formConfig.size">
        <el-radio-button label="large">大</el-radio-button>
        <el-radio-button label="default">默认</el-radio-button>
        <el-radio-button label="small">小</el-radio-button>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="是否显示必填字段的标签旁边的红色星号">
      <el-switch v-model="state.formConfig.hideRequiredAsterisk" />
    </el-form-item>

    <el-form-item label="是否显示校验错误信息">
      <el-switch v-model="state.formConfig.showMessage" />
    </el-form-item>

    <el-form-item label="是否以行内形式展示校验信息">
      <el-switch v-model="state.formConfig.inlineMessage" />
    </el-form-item>

    <el-form-item label="是否在输入框中显示校验结果反馈图标">
      <el-switch v-model="state.formConfig.statusIcon" />
    </el-form-item>

    <el-form-item label="是否在rules属性改变后立即触发一次验证">
      <el-switch v-model="state.formConfig.validateOnRuleChange" />
    </el-form-item>

    <el-form-item label="是否禁用该表单内的所有组件">
      <el-switch v-model="state.formConfig.disabled" />
    </el-form-item>

    <el-form-item label="全局样式表">
      <el-button class="block-button" @click="cssEditorDialogVisible = true">设置</el-button>
    </el-form-item>

    <el-form-item label="自定义Class">
      <el-button class="block-button" @click="classEditorDialogVisible = true">设置</el-button>
    </el-form-item>

    <el-form-item label="自定义Style">
      <el-button class="block-button" @click="styleEditorDialogVisible = true">设置</el-button>
    </el-form-item>

    <el-form-item label="全局State">
      <el-button class="block-button" @click="globalStateDialogVisible = true">设置</el-button>
    </el-form-item>
  </el-form>

  <el-css-editor-dialog v-model:visible="cssEditorDialogVisible" />
  <el-class-editor-dialog v-model:visible="classEditorDialogVisible" is-global />
  <el-style-editor-dialog v-model:visible="styleEditorDialogVisible" is-global />
  <el-state-editor-dialog v-model:visible="globalStateDialogVisible" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ElCssEditorDialog from './el-css-editor-dialog.vue'
import ElClassEditorDialog from './el-class-editor-dialog.vue'
import ElStyleEditorDialog from './el-style-editor-dialog.vue'
import ElStateEditorDialog from './el-state-editor-dialog.vue'
import { state } from '@/store'
import { loadJsLink } from '@/utils'

defineOptions({
  name: 'ElGlobalConfig'
})

const cssEditorDialogVisible = ref(false)
const classEditorDialogVisible = ref(false)
const styleEditorDialogVisible = ref(false)
const globalStateDialogVisible = ref(false)
</script>
