<template>
  <div class="widget-form-container">
    <div class="form-empty" v-if="!state.widgetFormList.length">从左侧拖拽来添加字段</div>
    <el-form>
      <draggable
        class="widget-form-list"
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
          <el-widget-form-item :component="element" />
        </template>
      </draggable>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import Draggable from 'vuedraggable'
import { cloneDeep } from 'lodash-es'
import { v4 } from 'uuid'
import ElWidgetFormItem from './el-widget-form-item.vue'
import state from '@/store'

defineOptions({
  name: 'ElWidgetForm'
})

const handleDragAdd = ({ newIndex }: { newIndex: number }) => {
  const key = v4().replaceAll('-', '')

  const widgetFormList = cloneDeep(state.widgetFormList)

  widgetFormList[newIndex].key = `${widgetFormList[newIndex].type}_${key}`

  state.widgetFormList = widgetFormList
  state.selectWidgetItem = widgetFormList[newIndex]
}
</script>
