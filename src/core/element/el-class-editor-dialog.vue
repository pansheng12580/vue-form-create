<template>
  <el-dialog v-model="visible" title="自定义Class" destroy-on-close v-bind="$attrs">
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
import state from '@/store'

defineOptions({
  name: 'ElClassEditorDialog'
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
  monacoEditorValue.value = `const customClass = ${props.isGlobal ? state.globalClass : state.selectWidgetItem?.customClass}`
})

const handleSave = () => {
  const value = monacoEditorValue.value.replace('const customClass = ', '')
  if (props.isGlobal) {
    state.globalClass = value
  } else {
    state.selectWidgetItem!.customClass = value
  }
  visible.value = false
}
</script>
