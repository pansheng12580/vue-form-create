<template>
  <div class="widget-cate">{{ props.componentGroup.title }}</div>
  <draggable tag="ul" item-key="type" ghostClass="ghost" :group="{ name: 'people', pull: 'clone', put: false }" :sort="false" :list="props.componentGroup.components">
    <template #item="{ element }">
      <li class="form-edit-widget-label">
        <a>
          <svg-icon :name="element.type" />
          <span>{{ element.label }}</span>
        </a>
      </li>
    </template>
  </draggable>
</template>

<script setup lang="ts">
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
