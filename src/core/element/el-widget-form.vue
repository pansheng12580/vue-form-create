<template>
  <div class="widget-form-container">
    <div class="form-empty" v-if="!state.widgetFormList.length">从左侧拖拽来添加字段</div>
    <el-form ref="formInstance" v-bind="state.formConfig">
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
          <el-widget-form-item :component="element" :form-instance="formInstance" />
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
import state from '@/store'
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

  state.widgetFormList = widgetFormList
  state.selectWidgetItem = widgetFormList[newIndex]
}
</script>
