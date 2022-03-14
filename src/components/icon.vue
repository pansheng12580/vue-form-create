<template>
  <svg aria-hidden="true" class="icon" :class="props.className" :style="{ width: `${props.size}px`, height: `${props.size}px`, color: props.color }" v-on="$attrs">
    <use :xlink:href="`#${props.name}`" />
  </svg>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Icon'
})

const props = defineProps<{
  name?: string
  size?: number
  color?: string
  className?: string
}>()
</script>
