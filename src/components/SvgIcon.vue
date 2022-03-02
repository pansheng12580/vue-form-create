<template>
  <svg aria-hidden="true" class="fill-current svg-icon" :class="props.className" v-on="$attrs">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    prefix?: string
    className?: string
  }>(),
  {
    prefix: 'svg-icon'
  }
)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
