<template>
  <draggable
    v-if="['Row', 'Col'].includes(component.type)"
    item-key="key"
    ghost-class="ghost"
    handle=".drag-widget"
    :tag="tag"
    :animation="200"
    :group="{ name: 'people' }"
    :list="component.childNodes"
    :component-data="commonProps"
    @click.stop="state.selectWidgetItem = component"
    @add="handleDragAdd"
  >
    <template #item="{ element }">
      <el-widget-form-item :component="element" :form-instance="formInstance" />
    </template>
  </draggable>
  <div v-else class="widget-item-container" :class="{ active: component.key === state.selectWidgetItem?.key }" @click.stop="state.selectWidgetItem = component">
    <el-button v-if="component.type === 'Button'" v-bind="commonProps" v-on="evnetFunction">{{ commonProps.content }}</el-button>

    <icon v-if="component.type === 'Icon'" :name="commonProps.name" v-bind="commonProps" v-on="evnetFunction" />

    <div v-if="component.type === 'Text'" v-bind="commonProps" v-on="evnetFunction">{{ commonProps.content }}</div>

    <el-link v-if="component.type === 'Link'" v-bind="commonProps" v-on="evnetFunction">{{ commonProps.content }}</el-link>

    <el-divider v-if="component.type === 'Divider'" v-bind="commonProps">{{ commonProps.content }}</el-divider>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Draggable from 'vuedraggable'
import { v4 } from 'uuid'
import { cloneDeep } from 'lodash-es'
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
    class: `${loadClass(component.customClass, state.globalState)} ${
      ['Row', 'Col'].includes(component.type) && `widget-item-container child-nodes ${component.key === state.selectWidgetItem?.key && 'active'}`
    }`,
    style: loadStyle(component.customStyle, state.globalState)
  }

  delete obj.hidden

  return obj
})

const tag = computed(() => {
  switch (component.type) {
    case 'Row':
      return 'el-row'
    case 'Col':
      return 'el-col'
    default:
      return 'div'
  }
})

const handleDragAdd = ({ newIndex }: { newIndex: number }) => {
  const key = v4().replaceAll('-', '')

  const childNodes = cloneDeep(component.childNodes) ?? []

  childNodes[newIndex].key = `${childNodes[newIndex].type}_${key}`

  // eslint-disable-next-line vue/no-mutating-props
  component.childNodes![newIndex] = childNodes[newIndex]
  state.selectWidgetItem = childNodes[newIndex]
}
</script>
