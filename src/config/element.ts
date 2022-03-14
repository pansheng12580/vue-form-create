import { Component, ComponentGroup } from './index'

// 基础组件
const basicComponents: Component[] = [
  {
    label: '按钮',
    type: 'Button',
    customClass: '{}',
    customStyle: '{}',
    dynamicProps: '{}',
    events: {
      click: 'function click(event, formInstance, state) {}'
    },
    config: {
      content: '按钮',
      hidden: false,
      size: undefined,
      type: undefined,
      plain: false,
      round: false,
      circle: false,
      loading: false,
      disabled: false,
      autofocus: false,
      nativeType: 'button',
      autoInsertSpace: undefined
    }
  }
]

const elementComponentsGroup: ComponentGroup[] = [
  {
    title: '基础组件',
    components: basicComponents
  }
]

export default elementComponentsGroup
