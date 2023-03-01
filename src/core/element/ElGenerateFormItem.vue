<template>
  <el-form-item v-if="element && element.options?.visiblable" :key="element.key" :label="element.label"
    :prop="element.model">
    <template v-if="element.type === 'input'">
      <el-input v-model="data" :style="{ width: element.options.width }" :placeholder="element.options.placeholder"
        :maxlength="parseInt(element.options.maxlength)" :clearable="element.options.clearable"
        :readonly="element.options.readonly" :disabled="disabled || element.options.disabled">
        <template #prefix v-if="element.options.prefix">{{ element.options.prefix }}</template>
        <template #suffix v-if="element.options.suffix">{{ element.options.suffix }}</template>
        <template #prepend v-if="element.options.prepend">{{ element.options.prepend }}</template>
        <template #append v-if="element.options.append">{{ element.options.append }}</template>
      </el-input>
    </template>

    <template v-if="element.type === 'password'">
      <el-input v-model="data" :style="{ width: element.options.width }" :placeholder="element.options.placeholder"
        :maxlength="parseInt(element.options.maxlength)" :clearable="element.options.clearable"
        :disabled="disabled || element.options.disabled" :readonly="element.options.readonly"
        :show-password="element.options.showPassword">
        <template #prefix v-if="element.options.prefix">{{ element.options.prefix }}</template>
        <template #suffix v-if="element.options.suffix">{{ element.options.suffix }}</template>
        <template #prepend v-if="element.options.prepend">{{ element.options.prepend }}</template>
        <template #append v-if="element.options.append">{{ element.options.append }}</template>
      </el-input>
    </template>

    <template v-if="element.type === 'textarea'">
      <el-input type="textarea" resize="none" v-model="data" :rows="element.options.rows"
        :style="{ width: element.options.width }" :placeholder="element.options.placeholder"
        :maxlength="parseInt(element.options.maxlength)" :show-word-limit="element.options.showWordLimit"
        :autosize="element.options.autosize" :clearable="element.options.clearable" :readonly="element.options.readonly"
        :disabled="disabled || element.options.disabled" />
    </template>

    <template v-if="element.type === 'number'">
      <el-input-number v-model="data" :style="{ width: element.options.width }" :max="element.options.max"
        :min="element.options.min" :disabled="disabled || element.options.disabled" />
    </template>

    <template v-if="element.type === 'radio'">
      <el-radio-group v-model="data" :style="{ width: element.options.width }"
        :disabled="disabled || element.options.disabled">
        <el-radio v-for="item of element.options.remote
          ? element.options.remoteOptions
          : element.options.options" :key="item.value" :label="item.value" :style="{
    display: element.options.inline ? 'inline-block' : 'block'
  }">{{ element.options.showLabel ? item.label : item.value }}</el-radio>
      </el-radio-group>
    </template>

    <template v-if="element.type === 'checkbox' && data">
      <el-checkbox-group v-model="data" :style="{ width: element.options.width }"
        :disabled="disabled || element.options.disabled">
        <el-checkbox v-for="item of element.options.remote
          ? element.options.remoteOptions
          : element.options.options" :key="item.value" :value="item.value" :style="{
    display: element.options.inline ? 'inline-block' : 'block'
  }">
          {{
            element.options.showLabel ? item.label : item.value
          }}
        </el-checkbox>
      </el-checkbox-group>
    </template>

    <template v-if="element.type === 'time'">
      <el-time-picker v-model="data" :placeholder="element.options.placeholder" :readonly="element.options.readonly"
        :editable="element.options.editable" :clearable="element.options.clearable" :format="element.options.format"
        :value-format="element.options.valueFormat" :disabled="disabled || element.options.disabled"
        :style="{ width: element.options.width }" />
    </template>

    <template v-if="element.type === 'date'">
      <el-date-picker v-model="data" :placeholder="element.options.placeholder" :readonly="element.options.readonly"
        :editable="element.options.editable" :clearable="element.options.clearable" :format="element.options.format"
        :value-format="element.options.valueFormat" :disabled="disabled || element.options.disabled"
        :style="{ width: element.options.width }" />
    </template>

    <template v-if="element.type === 'rate'">
      <el-rate v-model="data" :max="element.options.max" :allowHalf="element.options.allowHalf"
        :disabled="disabled || element.options.disabled" />
    </template>

    <template v-if="element.type === 'select'">
      <el-select v-model="data" :multiple="element.options.multiple" :placeholder="element.options.placeholder"
        :clearable="element.options.clearable" :filterable="element.options.filterable"
        :disabled="disabled || element.options.disabled" :style="{ width: element.options.width }">
        <el-option v-for="item of element.options.remote
          ? element.options.remoteOptions
          : element.options.options" :key="item.value" :value="item.value"
          :label="element.options.showLabel ? item.label : item.value" />
      </el-select>
    </template>

    <template v-if="element.type === 'switch'">
      <el-switch v-model="data" :active-text="element.options.activeText" :inactive-text="element.options.inactiveText"
        :disabled="disabled || element.options.disabled" />
    </template>

    <template v-if="element.type === 'slider'">
      <el-slider v-model="data" :min="element.options.min" :max="element.options.max" :step="element.options.step"
        :range="element.options.range" :disabled="disabled || element.options.disabled"
        :style="{ width: element.options.width }" />
    </template>

    <template v-if="element.type === 'text'">
      <span>{{ element.options.defaultValue }}</span>
    </template>

    <template v-if="element.type === 'img-upload'">
      <el-upload :name="element.options.file" :action="element.options.action" :accept="element.options.accept"
        :file-list="element.options.defaultValue" :listType="element.options.listType"
        :multiple="element.options.multiple" :limit="element.options.limit"
        :disabled="disabled || element.options.disabled" :on-success="handleUploadSuccess" :on-preview="showImage">
        <SvgIcon v-if="element.options.listType === 'picture-card'" iconClass="insert" />
        <el-button v-else>
          <SvgIcon iconClass="img-upload" style="margin-right: 10px;" />点击上传
        </el-button>
      </el-upload>
    </template>

    <template v-if="element.type === 'richtext-editor'">
      <RichTextEditor v-model:value="data" :disable="disabled || element.options.disabled"
        :style="{ width: element.options.width }" />
    </template>

    <template v-if="element.type === 'cascader'">
      <el-cascader v-model="data" :options="element.options.remoteOptions" :placeholder="element.options.placeholder"
        :filterable="element.options.filterable" :clearable="element.options.clearable"
        :disabled="disabled || element.options.disabled" :style="{ width: element.options.width }" />
    </template>
    <el-dialog v-model="dialogVisible" width="50%" height="50%">
      <img w-full :src="url" alt="Preview Image" style="max-width:100%;max-height:100%" />
    </el-dialog>

  </el-form-item>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive, toRefs, ref } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import RichTextEditor from '@/components/RichTextEditor.vue'
import { WidgetForm } from '@/config/element'
import { ElMenuItem } from 'element-plus'
import { element } from '@/config'

export default defineComponent({
  name: 'ElGenerateFormItem',
  components: {
    SvgIcon,
    RichTextEditor
  },
  props: {
    config: {
      type: Object as PropType<WidgetForm['config']>,
      required: true
    },
    element: {
      type: Object,
      required: true
    },
    model: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const data = computed({
      get: () => props.model[props.element.model],
      set: val => {
        // eslint-disable-next-line vue/no-mutating-props
        props.model[props.element.model] = val
      }
    })

    const alink = ref(null)

    const state = reactive({
      dialogVisible: false,
      url: ''
    })

    const handleFilterOption = (input: string, option: { label: string }) =>
      option.label.toLowerCase().includes(input)

    const handleUploadSuccess = (_res: any, _file: any, fileList: any[]) => {
      data.value = fileList
    }

    const showImage = (file: any) => {
      const acceptType = props.element?.options.accept
      state.url = file.url
      if (/image/.test(acceptType)) {
        state.dialogVisible = true
      } else {
        const alink = document.createElement('a')
        alink.style.display = 'none'
        alink.download = file.name
        alink.href = file.response.url
        alink.target = '__blank'
        document.body.appendChild(alink)
        alink.click()
        document.body.removeChild(alink)
        URL.revokeObjectURL(file.response.url)
      }
    }

    return {
      data,
      handleFilterOption,
      handleUploadSuccess,
      showImage,
      ...toRefs(state),
      alink
    }
  }
})
</script>
