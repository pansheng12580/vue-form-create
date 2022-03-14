import { reactive } from 'vue'
import { Component } from '@/config'

export interface State {
  selectWidgetItem?: Component
  widgetFormList: Component[]
  globalCss: string
  globalClass: string
  globalStyle: string
  globalState: Record<string, any>
  formConfig: Record<string, any>
  [key: string]: any
}

export default reactive<State>({
  selectWidgetItem: undefined,
  widgetFormList: [],
  globalCss: '',
  globalClass: '{}',
  globalStyle: '{}',
  globalState: {},
  formConfig: {
    labelPosition: 'right',
    labelWidth: undefined,
    labelSuffix: undefined,
    hideRequiredAsterisk: false,
    showMessage: false,
    inlineMessage: false,
    statusIcon: false,
    validateOnRuleChange: false,
    size: 'default',
    disabled: false
  }
})
