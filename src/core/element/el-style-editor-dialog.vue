<template>
  <el-dialog v-model="visible" title="自定义Style" destroy-on-close v-bind="$attrs">
    <monaco-editor language="javascript" :height="height" :value="monacoEditorValue" @change="(value) => (monacoEditorValue = value)" />
    <template #footer>
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="handleSave">确定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import MonacoEditor from '@/components/monaco-editor.vue'
import { state } from '@/store'

defineOptions({
  name: 'ElStyleEditorDialog'
})

const props = defineProps<{
  visible: boolean
  isGlobal?: boolean
}>()

const emits = defineEmits(['update:visible'])

const visible = computed({
  get: () => props.visible,
  set: (value) => emits('update:visible', value)
})

const height = `${document.body.clientHeight / 1.5}px`

const monacoEditorValue = ref('')

watchEffect(() => {
  monacoEditorValue.value = `const customStyle = ${props.isGlobal ? state.globalStyle : state.selectWidgetItem?.customStyle}`
})

const handleSave = () => {
  const value = monacoEditorValue.value.replace('const customStyle = ', '')
  if (props.isGlobal) {
    state.globalStyle = value
  } else {
    state.selectWidgetItem!.customStyle = value
  }
  visible.value = false
}
</script>
