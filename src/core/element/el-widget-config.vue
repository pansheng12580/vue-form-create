<template>
  <el-form label-position="top">
    <el-form-item v-if="state.selectWidgetItem?.key" label="Key">
      <el-input v-model="state.selectWidgetItem.key" />
    </el-form-item>

    <el-button-config v-if="state.selectWidgetItem?.type === 'Button'" />

    <el-form-item v-if="state.selectWidgetItem" label="自定义Class">
      <el-button class="block-button" @click="classEditorDialogVisible = true">设置</el-button>
    </el-form-item>

    <el-form-item v-if="state.selectWidgetItem" label="自定义Style">
      <el-button class="block-button" @click="styleEditorDialogVisible = true">设置</el-button>
    </el-form-item>

    <el-form-item v-if="state.selectWidgetItem" label="动态Props">
      <el-button class="block-button" @click="propsEditorDialogVisible = true">设置</el-button>
    </el-form-item>

    <el-form-item v-if="state.selectWidgetItem?.events" label="动作设置">
      <el-dropdown trigger="click">
        <el-button class="block-button">设置</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="event of events"
              :key="event"
              @click="
                () => {
                  eventName = event
                  functionEditorDialogVisible = true
                }
              "
              >{{ event }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-form-item>
  </el-form>

  <el-class-editor-dialog v-model:visible="classEditorDialogVisible" />
  <el-style-editor-dialog v-model:visible="styleEditorDialogVisible" />
  <el-props-editor-dialog v-model:visible="propsEditorDialogVisible" field-name="dynamicProps" />
  <el-function-editor-dialog v-model:visible="functionEditorDialogVisible" :event-name="eventName" />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import ElButtonConfig from '@/config/element/el-button-config.vue'
import ElClassEditorDialog from './el-class-editor-dialog.vue'
import ElStyleEditorDialog from './el-style-editor-dialog.vue'
import ElPropsEditorDialog from './el-props-editor-dialog.vue'
import ElFunctionEditorDialog from './el-function-editor-dialog.vue'
import state from '@/store'

defineOptions({
  name: 'ElWidgetConfig'
})

const classEditorDialogVisible = ref(false)
const styleEditorDialogVisible = ref(false)
const propsEditorDialogVisible = ref(false)
const functionEditorDialogVisible = ref(false)
const eventName = ref<string>('')

const events = computed(() => Object.keys(state.selectWidgetItem?.events ?? {}))
</script>
