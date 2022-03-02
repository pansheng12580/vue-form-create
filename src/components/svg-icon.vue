<template>
  <svg aria-hidden="true" class="fill-current svg-icon" :class="props.className" :style="{ color: props.color }" v-on="$attrs">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'

defineOptions({
  name: 'SvgIcon'
})

const props = withDefaults(
  defineProps<{
    name: string
    prefix?: string
    className?: string
    color?: string
  }>(),
  {
    prefix: 'svg-icon'
  }
)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
