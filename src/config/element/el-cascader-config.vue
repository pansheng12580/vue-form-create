<template>
  <el-form-item label="Placeholder">
    <el-input v-model="state.selectWidgetItem!.config.placeholder" />
  </el-form-item>

  <el-form-item label="分隔符">
    <el-input v-model="state.selectWidgetItem!.config.separator" />
  </el-form-item>

  <el-form-item label="自定义浮层类名">
    <el-input v-model="state.selectWidgetItem!.config.popperClass" />
  </el-form-item>

  <el-form-item label="防抖延迟">
    <el-input-number v-model="state.selectWidgetItem!.config.debounce" :min="0" />
  </el-form-item>

  <el-form-item label="尺寸">
    <el-radio-group v-model="state.selectWidgetItem!.config.size">
      <el-radio-button label="large">大</el-radio-button>
      <el-radio-button label="default">默认</el-radio-button>
      <el-radio-button label="small">小</el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="次级菜单的展开方式">
    <el-radio-group v-model="state.selectWidgetItem!.config.props.expandTrigger">
      <el-radio-button label="click">Click</el-radio-button>
      <el-radio-button label="hover">Hover</el-radio-button>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="远端数据" size="small">
    <el-space direction="vertical" alignment="start" fill>
      <el-input v-model="state.selectWidgetItem!.remoteConfig!.remoteFunc">
        <template #prepend>远端方法</template>
      </el-input>

      <el-input v-model="state.selectWidgetItem!.config.props.label">
        <template #prepend>标签</template>
      </el-input>

      <el-input v-model="state.selectWidgetItem!.config.props.value">
        <template #prepend>值</template>
      </el-input>

      <el-input v-model="state.selectWidgetItem!.config.props.children">
        <template #prepend>子选项</template>
      </el-input>

      <el-input v-model="state.selectWidgetItem!.config.props.disabled">
        <template #prepend>禁用</template>
      </el-input>

      <el-input v-model="state.selectWidgetItem!.config.props.leaf">
        <template #prepend>叶子节点标志位</template>
      </el-input>
    </el-space>
  </el-form-item>

  <el-form-item label="是否隐藏">
    <el-switch v-model="state.selectWidgetItem!.config.hidden" />
  </el-form-item>

  <el-form-item label="是否禁用">
    <el-switch v-model="state.selectWidgetItem!.config.disabled" />
  </el-form-item>

  <el-form-item label="是否支持清空选项">
    <el-switch v-model="state.selectWidgetItem!.config.clearable" />
  </el-form-item>

  <el-form-item label="是否显示完整路径">
    <el-switch v-model="state.selectWidgetItem!.config.showAllLevels" />
  </el-form-item>

  <el-form-item label="多选模式下是否折叠Tag">
    <el-switch v-model="state.selectWidgetItem!.config.collapseTags" @change="(value) => !value && (state.selectWidgetItem!.config.collapseTagsTooltip = value)" />
  </el-form-item>

  <el-form-item v-if="state.selectWidgetItem!.config.collapseTags" label="悬停是否显示所有选中的标签">
    <el-switch v-model="state.selectWidgetItem!.config.collapseTagsTooltip" />
  </el-form-item>

  <el-form-item label="是否可以搜索">
    <el-switch v-model="state.selectWidgetItem!.config.filterable" />
  </el-form-item>

  <el-form-item label="Teleported">
    <el-switch v-model="state.selectWidgetItem!.config.teleported" />
  </el-form-item>

  <el-form-item label="是否多选">
    <el-switch v-model="state.selectWidgetItem!.config.props.multiple" />
  </el-form-item>

  <el-form-item label="是否严格的遵守父子节点不互相关联">
    <el-switch v-model="state.selectWidgetItem!.config.props.checkStrictly" />
  </el-form-item>

  <el-form-item label="是否返回数组">
    <el-switch v-model="state.selectWidgetItem!.config.props.emitPath" />
  </el-form-item>
</template>

<script lang="ts" setup>
import { state } from '@/store'

defineOptions({
  name: 'ElButtonConfig'
})
</script>
