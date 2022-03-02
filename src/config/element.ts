import { Component, ComponentGroup } from './index'

// 基础组件
const basicComponents: Component[] = [
  {
    label: '按钮',
    type: 'Button',
    customClass: '{}',
    dynamicProps: '{}',
    events: {},
    config: {}
  }
]

const elementComponentsGroup: ComponentGroup[] = [
  {
    title: '基础组件',
    components: basicComponents
  }
]

export default elementComponentsGroup
