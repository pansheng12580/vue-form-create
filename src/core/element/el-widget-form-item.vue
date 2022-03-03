<template>
  <div class="widget-item-container" :class="{ active: component.key === state.selectWidgetItem?.key }" @click="state.selectWidgetItem = component">
    <el-button v-if="component.type === 'Button'">{{ component?.key }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { Component } from '@/config'
import state from '@/store'

defineOptions({
  name: 'ElWidgetFormItem'
})
const { component } = defineProps<{
  component: Component
}>()
</script>
