import { Component, ComponentGroup } from './index'

// 通用组件
const commonComponents: Component[] = [
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
  },
  {
    label: '图标',
    type: 'Icon',
    customClass: '{}',
    customStyle: '{}',
    dynamicProps: '{}',
    events: {
      click: 'function click(event, formInstance, state) {}'
    },
    config: {
      name: '',
      size: 30,
      color: '',
      hidden: false
    }
  },
  {
    label: '文本',
    type: 'Text',
    customClass: '{}',
    customStyle: '{}',
    dynamicProps: '{}',
    events: {
      click: 'function click(event, formInstance, state) {}'
    },
    config: {
      content: 'Text',
      hidden: false
    }
  },
  {
    label: '链接',
    type: 'Link',
    customClass: '{}',
    customStyle: '{}',
    dynamicProps: '{}',
    events: {
      click: 'function click(event, formInstance, state) {}'
    },
    config: {
      content: 'Link',
      type: undefined,
      underline: true,
      disabled: false,
      href: '',
      hidden: false
    }
  }
]

const elementComponentsGroup: ComponentGroup[] = [
  {
    title: '通用组件',
    components: commonComponents
  }
]

export default elementComponentsGroup
