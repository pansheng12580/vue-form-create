<template>
  <div ref="monacoEditorRef" :style="{ border: '1px solid lightgray', height }"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, withDefaults } from 'vue'

const monacoEditorRef = ref<HTMLDivElement>()

defineOptions({
  name: 'MonacoEditor'
})

const { value, height, theme, language, readonly } = withDefaults(
  defineProps<{
    value: string
    height?: string | number
    theme?: string
    language?: string
    readonly?: boolean
  }>(),
  {
    height: '100%',
    theme: 'vs',
    readonly: false
  }
)

const emits = defineEmits<{
  (eventName: 'change', val: string): void
}>()

onMounted(() => {
  const model = window.monaco?.editor.createModel(value, language)
  const editorInstance = window.monaco?.editor.create(monacoEditorRef.value!, {
    model,
    theme,
    tabSize: 2,
    fontSize: 14,
    formatOnType: true,
    formatOnPaste: true,
    automaticLayout: true,
    emptySelectionClipboard: true,
    scrollBeyondLastLine: true,
    readOnly: readonly,
    minimap: {
      enabled: false
    },
    scrollbar: {
      vertical: 'hidden',
      horizontal: 'hidden',
      verticalScrollbarSize: 0,
      horizontalScrollbarSize: 0,
      alwaysConsumeMouseWheel: false
    }
  })

  editorInstance?.onDidChangeModelContent(() => emits('change', editorInstance.getValue()))
})
</script>
