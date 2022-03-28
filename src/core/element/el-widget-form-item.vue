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

    <el-form-item v-if="component.type === 'Cascader'" v-bind="commonFormItemProps">
      <el-cascader v-bind="commonProps" v-on="evnetFunction" v-model="model.designModel[component.key!]" />
    </el-form-item>

    <el-form-item v-if="component.type === 'Checkbox'" v-bind="commonFormItemProps">
      <el-checkbox v-bind="commonProps" v-on="evnetFunction" v-model="model.designModel[component.key!]" />
    </el-form-item>

    <el-form-item v-if="component.type === 'CheckboxGroup'" v-bind="commonFormItemProps">
      <el-checkbox-group v-bind="commonProps" v-on="evnetFunction" v-model="model.designModel[component.key!]">
        <el-checkbox v-for="option of commonProps.options" :key="option.value" :label="option.value">{{ option.label }}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect, onUnmounted } from 'vue'
import Draggable from 'vuedraggable'
import { v4 } from 'uuid'
import { cloneDeep, isArray } from 'lodash-es'
import Icon from '@/components/icon.vue'
import { Component } from '@/config'
import { state, model, rules } from '@/store'
import { createEventFunctionObject, handleResponseData, loadClass, loadProps, loadStyle } from '@/utils'

defineOptions({
  name: 'ElWidgetFormItem'
})
const { component, formInstance } = defineProps<{
  component: Component
  formInstance: any
}>()

const remoteOptions = ref<Record<string, any>>([])

const evnetFunction = computed(() => createEventFunctionObject(component, formInstance, model.designModel, state.globalState))

const commonProps = computed(() => {
  const obj: Record<string, any> = {
    ...component.config,
    options: component.remoteConfig?.remote ? remoteOptions.value : component.config.options,
    ...loadProps(component.dynamicProps, formInstance, state.globalState),
    class: `${loadClass(component.customClass, state.globalState)} ${
      ['Row', 'Col'].includes(component.type) && `widget-item-container child-nodes ${component.key === state.selectWidgetItem?.key && 'active'}`
    }`,
    style: loadStyle(component.customStyle, state.globalState)
  }

  delete obj.hidden

  return obj
})

const commonFormItemProps = computed(() => {
  const obj: Record<string, any> = {
    ...component.formItemConfig,
    prop: component.key,
    label: component.label,
    ...loadProps(component.dynamicFormItemProps, formInstance, state.globalState)
  }

  delete obj.rules

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

watchEffect(() => {
  if (component.remoteConfig?.remote && component.remoteConfig?.remoteFunc) {
    fetch(component.remoteConfig.remoteFunc)
      .then((resp) => resp.json())
      .then((json) => {
        if (isArray(json)) {
          remoteOptions.value = handleResponseData(json, component.remoteConfig?.remoteProps)
        }
      })
  }
})

watchEffect(() => {
  if (component.key && component.formItemConfig) {
    model.designModel[component.key] = component.config.defaultValue
  }
})

watchEffect(() => {
  if (component.key && component.formItemConfig) {
    rules.designRules[component.key] = component.formItemConfig.rules
  }
})

onUnmounted(() => {
  if (component.key) {
    delete model.designModel[component.key]
    delete rules.designRules[component.key]
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
