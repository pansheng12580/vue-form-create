import { reactive } from 'vue'
import { Component } from '@/config'

export interface State {
  selectWidgetItem?: Component
  widgetFormList: Component[]
}

export default reactive<State>({
  selectWidgetItem: undefined,
  widgetFormList: []
})
