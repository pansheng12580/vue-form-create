<template>
  <div class="widget-form-container">
    <div class="form-empty" v-if="!state.widgetFormList.length">从左侧拖拽来添加字段</div>
    <el-form ref="formInstance" v-bind="state.formConfig" :model="model.designModel" :rules="rules.designRules">
      <draggable
        v-bind="commonProps"
        tag="div"
        item-key="key"
        ghost-class="ghost"
        handle=".drag-widget"
        :animation="200"
        :group="{ name: 'people' }"
        :list="state.widgetFormList"
        @add="handleDragAdd"
      >
        <template #item="{ element }">
          <el-widget-form-item v-if="element.key" :component="element" :form-instance="formInstance" />
        </template>
      </draggable>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Draggable from 'vuedraggable'
import { cloneDeep } from 'lodash-es'
import { v4 } from 'uuid'
import ElWidgetFormItem from './el-widget-form-item.vue'
import { state, model, rules } from '@/store'
import { loadClass, loadStyle } from '@/utils'

defineOptions({
  name: 'ElWidgetForm'
})

const formInstance = ref()

const commonProps = computed(() => ({
  class: `widget-form-list ${loadClass(state.globalClass, state.globalState)}`,
  style: loadStyle(state.globalStyle, state.globalState)
}))

const handleDragAdd = ({ newIndex }: { newIndex: number }) => {
  const key = v4().replaceAll('-', '')

  const widgetFormList = cloneDeep(state.widgetFormList)

  widgetFormList[newIndex].key = `${widgetFormList[newIndex].type}_${key}`

  state.widgetFormList[newIndex] = widgetFormList[newIndex]
  state.selectWidgetItem = widgetFormList[newIndex]
}
</script>
