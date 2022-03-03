<template>
  <div class="fc-style">
    <el-container class="fc-container">
      <el-aside width="250px" style="overflow: auto">
        <div class="components">
          <components-group v-for="components of elementComponentsGroup" :key="components.title" :componentGroup="components" />
        </div>
      </el-aside>
      <el-container class="center-container">
        <el-header class="btn-bar">
          <CustomHeader />
        </el-header>
        <el-main class="widget-empty">
          <el-widget-form />
        </el-main>
      </el-container>
      <el-aside class="widget-config-container" width="300px">
        <el-container>
          <el-header>
            <div class="config-tab" :class="{ active: currentTab === 'Local' }" @click="currentTab = 'Local'">字段设置</div>
            <div class="config-tab" :class="{ active: currentTab === 'Global' }" @click="currentTab = 'Global'">全局设置</div>
          </el-header>
        </el-container>
      </el-aside>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { elementComponentsGroup } from '@/config'
import ComponentsGroup from '@/components/components-group.vue'
import CustomHeader from '@/components/custom-header.vue'
import ElWidgetForm from './el-widget-form.vue'

defineOptions({
  name: 'ElDesignForm'
})

const currentTab = ref<'Local' | 'Global'>('Global')
</script>
