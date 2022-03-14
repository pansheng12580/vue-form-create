<template>
  <el-dialog v-model="visible" title="全局样式表" destroy-on-close v-bind="$attrs">
    <monaco-editor language="css" :height="height" :value="monacoEditorValue" @change="(value) => (monacoEditorValue = value)" />
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
import { loadCss } from '@/utils'

defineOptions({
  name: 'ElCssEditorDialog'
})

const props = defineProps<{
  visible: boolean
}>()

const emits = defineEmits(['update:visible'])

const visible = computed({
  get: () => props.visible,
  set: (value) => emits('update:visible', value)
})

const height = `${document.body.clientHeight / 1.5}px`

const monacoEditorValue = ref('')

watchEffect(() => {
  monacoEditorValue.value = state.globalCss
})

const handleSave = () => {
  state.globalCss = monacoEditorValue.value
  loadCss(monacoEditorValue.value)
  visible.value = false
}
</script>
