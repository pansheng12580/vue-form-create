<template>
  <div class="text-sm py-2 px-3">{{ props.componentGroup.title }}</div>
  <draggable
    class="relative px-2.5 pt-0 pb-2.5 m-0 overflow-hidden"
    tag="ul"
    item-key="type"
    ghostClass="ghost"
    :group="{ name: 'people', pull: 'clone', put: false }"
    :sort="false"
    :list="props.componentGroup.components"
  >
    <template #item="{ element }">
      <li
        class="relative left-0 block float-left w-[48%] m-[1%] overflow-hidden text-xs leading-loose text-ellipsis whitespace-nowrap border-[1px] border-[#f4f6fc] hover:border-[#409eff] hover:border-dashed"
      >
        <a class="block text-[#333] cursor-move bg-[#f4f6fc] hover:text-[#409eff]">
          <svg-icon :name="element.type" class="inline-block w-4 h-4 my-0 ml-1.5 mr-2 align-middle hover:text-[#409eff]" />
          <span class="inline-block align-middle">{{ element.label }}</span>
        </a>
      </li>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Draggable from 'vuedraggable'
import SvgIcon from './svg-icon.vue'
import type { ComponentGroup } from '@/config'

defineOptions({
  name: 'ComponentsGroup'
})

const props = defineProps<{
  componentGroup: ComponentGroup
}>()
</script>
