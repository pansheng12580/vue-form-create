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

// 布局组件
const layoutComponents: Component[] = [
  {
    label: '分割线',
    type: 'Divider',
    customClass: '{}',
    customStyle: '{}',
    dynamicProps: '{}',
    config: {
      content: '',
      hidden: false,
      direction: 'horizontal',
      borderStyle: 'solid',
      contentPosition: 'center'
    }
  },
  {
    label: '栅格行',
    type: 'Row',
    customClass: '{}',
    customStyle: '{}',
    dynamicProps: '{}',
    childNodes: [],
    config: {
      hidden: false,
      gutter: 0,
      justify: 'start',
      align: 'top',
      tag: 'div'
    }
  }
]

const elementComponentsGroup: ComponentGroup[] = [
  {
    title: '通用组件',
    components: commonComponents
  },
  {
    title: '布局组件',
    components: layoutComponents
  }
]

export default elementComponentsGroup
