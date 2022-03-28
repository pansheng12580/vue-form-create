<template>
  <el-form-item label="选项" size="small">
    <el-radio-group v-model="sourceType" style="margin-bottom: 10px">
      <el-radio-button label="静态数据" />
      <el-radio-button label="远端数据" />
    </el-radio-group>

    <template v-if="sourceType === '静态数据'">
      <el-checkbox-group v-if="multiple" v-model="state.selectWidgetItem!.config.defaultValue">
        <draggable item-key="value" ghost-class="ghost" handle=".drag-item" tag="ul" :animation="200" :group="{ name: 'options' }" :list="state.selectWidgetItem?.config.options">
          <template #item="{ element, index }">
            <el-checkbox :label="element.value" style="width: 100%">
              <div className="option-item">
                <el-input v-model="element.label" />
                <el-input v-model="element.value" />
                <svg-icon name="Item" className="drag-item" />
                <el-button type="primary" shape="circle" @click="state.selectWidgetItem?.config.options.splice(index, 1)">
                  <svg-icon name="Delete" />
                </el-button>
              </div>
            </el-checkbox>
          </template>
        </draggable>
      </el-checkbox-group>
      <el-radio-group v-else v-model="state.selectWidgetItem!.config.defaultValue">
        <draggable
          item-key="value"
          ghost-class="ghost"
          handle=".drag-item"
          tag="ul"
          :animation="200"
          :group="{ name: 'options' }"
          :list="state.selectWidgetItem?.config.options"
          style="line-height: 0"
        >
          <template #item="{ element, index }">
            <el-radio :label="element.value" style="width: 100%">
              <div className="option-item">
                <el-input v-model="element.label" />
                <el-input v-model="element.value" />
                <svg-icon name="Item" className="drag-item" />
                <el-button type="primary" shape="circle" @click="state.selectWidgetItem?.config.options.splice(index, 1)">
                  <svg-icon name="Delete" />
                </el-button>
              </div>
            </el-radio>
          </template>
        </draggable>
      </el-radio-group>
      <el-button
        class="insert-btn"
        type="text"
        @click="
          () => {
            const value = `Option${state.selectWidgetItem?.config.options.length + 1}`
            state.selectWidgetItem?.config.options.push({ label: value, value })
          }
        "
      >
        添加选项
      </el-button>
    </template>
    <el-space v-else direction="vertical" alignment="start" fill style="margintop: 10px">
      <el-input v-model="state.selectWidgetItem!.remoteConfig!.remoteFunc">
        <template #prepend>远端方法</template>
      </el-input>
      <el-input v-model="state.selectWidgetItem!.remoteConfig!.remoteProps!.label">
        <template #prepend>标签</template>
      </el-input>
      <el-input v-model="state.selectWidgetItem!.remoteConfig!.remoteProps!.value">
        <template #prepend>值</template>
      </el-input>
    </el-space>
  </el-form-item>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import Draggable from 'vuedraggable'
import SvgIcon from '@/components/svg-icon.vue'
import { state } from '@/store'

defineOptions({
  name: 'ElOptionSourceTypeConfig'
})

const { multiple } = defineProps<{
  multiple?: boolean
}>()

const sourceType = ref<'静态数据' | '远端数据'>('静态数据')

watchEffect(() => {
  if (state.selectWidgetItem?.remoteConfig?.remote !== undefined) {
    state.selectWidgetItem.remoteConfig.remote = sourceType.value === '远端数据'
  }
})
</script>
