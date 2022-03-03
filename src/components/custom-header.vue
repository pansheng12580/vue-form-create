<template>
  <a>
    <svg-icon name="Upload" />
    导入JSON
  </a>
  <a>
    <svg-icon name="Delete" />
    清空
  </a>
  <a>
    <svg-icon name="Preview" />
    预览
  </a>
  <a>
    <svg-icon name="GenerateJson" />
    生成JSON
  </a>
  <a>
    <svg-icon name="GenerateCode" />
    生成代码
  </a>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svg-icon.vue'

defineOptions({
  name: 'CustomHeader'
})
</script>
