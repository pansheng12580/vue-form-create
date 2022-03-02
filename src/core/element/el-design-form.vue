<template>
  <div class="h-full">
    <el-container class="h-full bg-white">
      <el-aside class="overflow-auto" width="250px">
        <div class="w-full h-full py-2 px-0">
          <components-group v-for="components of elementComponentsGroup" :key="components.title" :componentGroup="components" />
        </div>
      </el-aside>
      <el-container class="border-l-[1px] border-r-[1px] border-[#e0e0e0]">
        <el-header class="h-11 leading-[44px] text-sm text-right bg-white border-b-2 border-[#e4e7ed] text-[#409eff]">
          <el-space>
            <a class="flex items-center cursor-pointer">
              <svg-icon name="Upload" class="w-4 h-4 mr-[5px]" />
              导入JSON
            </a>
            <a class="flex items-center cursor-pointer">
              <svg-icon name="Delete" class="w-4 h-4 mr-[5px]" />
              清空
            </a>
            <a class="flex items-center cursor-pointer">
              <svg-icon name="Preview" class="w-4 h-4 mr-[5px]" />
              预览
            </a>
            <a class="flex items-center cursor-pointer">
              <svg-icon name="GenerateJson" class="w-4 h-4 mr-[5px]" />
              生成JSON
            </a>
            <a class="flex items-center cursor-pointer">
              <svg-icon name="GenerateCode" class="w-4 h-4 mr-[5px]" />
              生成代码
            </a>
          </el-space>
        </el-header>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { elementComponentsGroup } from '@/config'
import ComponentsGroup from '@/components/components-group.vue'
import SvgIcon from '@/components/svg-icon.vue'

defineOptions({
  name: 'ElDesignForm'
})
</script>
