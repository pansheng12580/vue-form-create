<template>
  <div class="widget-item-container" :class="{ active: component.key === state.selectWidgetItem?.key }" @click="state.selectWidgetItem = component">
    <el-button v-if="component.type === 'Button'" v-bind="commonProps" v-on="evnetFunction">{{ commonProps.content }}</el-button>

    <icon v-if="component.type === 'Icon'" :name="commonProps.name" v-bind="commonProps" v-on="evnetFunction" />

    <div v-if="component.type === 'Text'" v-bind="commonProps" v-on="evnetFunction">{{ commonProps.content }}</div>

    <el-link v-if="component.type === 'Link'" v-bind="commonProps" v-on="evnetFunction">{{ commonProps.content }}</el-link>

    <el-divider v-if="component.type === 'Divider'" v-bind="commonProps" v-on="evnetFunction">{{ commonProps.content }}</el-divider>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from '@/components/icon.vue'
import { Component } from '@/config'
import state from '@/store'
import { createEventFunctionObject, loadClass, loadProps, loadStyle } from '@/utils'

defineOptions({
  name: 'ElWidgetFormItem'
})
const { component, formInstance } = defineProps<{
  component: Component
  formInstance: any
}>()

const evnetFunction = createEventFunctionObject(component, formInstance, state.globalState)

const commonProps = computed(() => {
  const obj: Record<string, any> = {
    ...component.config,
    ...loadProps(component.dynamicProps, formInstance, state.globalState),
    class: loadClass(component.customClass, state.globalState),
    style: loadStyle(component.customStyle, state.globalState)
  }

  delete obj.hidden

  return obj
})
</script>
