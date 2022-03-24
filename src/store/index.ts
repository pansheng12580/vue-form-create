import { reactive } from 'vue'
import { Component } from '@/config'

export interface State {
  selectWidgetItem?: Component
  widgetFormList: Component[]
  iconSrc: string
  globalCss: string
  globalClass: string
  globalStyle: string
  globalState: Record<string, any>
  formConfig: Record<string, any>
  [key: string]: any
}

export const state = reactive<State>({
  selectWidgetItem: undefined,
  widgetFormList: [],
  iconSrc: '',
  globalCss: '',
  globalClass: '{}',
  globalStyle: '{}',
  globalState: {},
  formConfig: {
    labelPosition: 'right',
    labelWidth: undefined,
    labelSuffix: undefined,
    hideRequiredAsterisk: false,
    showMessage: true,
    inlineMessage: false,
    statusIcon: false,
    validateOnRuleChange: false,
    size: 'default',
    disabled: false
  }
})

export const model = reactive<Record<string, any>>({
  designModel: {}
})

export const rules = reactive<Record<string, any>>({
  designRules: {}
})
