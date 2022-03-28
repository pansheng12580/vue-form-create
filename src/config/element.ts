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
      click: 'function click(event, formInstance, formModel, state) {}'
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
      click: 'function click(event, formInstance, formModel, state) {}'
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
      click: 'function click(event, formInstance, formModel, state) {}'
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
      click: 'function click(event, formInstance, formModel, state) {}'
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
  },
  {
    label: '栅格列',
    type: 'Col',
    customClass: '{}',
    customStyle: '{}',
    dynamicProps: '{}',
    childNodes: [],
    config: {
      hidden: false,
      span: 2,
      offset: 0,
      push: 0,
      pull: 0,
      tag: 'div'
    }
  }
]

// 数据录入
const dataEntryComponents: Component[] = [
  {
    label: '级联选择器',
    type: 'Cascader',
    customClass: '{}',
    customStyle: '{}',
    dynamicProps: '{}',
    dynamicFormItemProps: '{}',
    events: {
      change: 'function change(value, formInstance, formModel, state) {}',
      expandChange: 'function expandChange(value, formInstance, formModel, state) {}',
      blur: 'function blur(event, formInstance, formModel, state) {}',
      focus: 'function focus(event, formInstance, formModel, state) {}',
      visibleChange: 'function visibleChange(value, formInstance, formModel, state) {}',
      removeTag: 'function removeTag(value, formInstance, formModel, state) {}'
    },
    config: {
      hidden: false,
      defaultValue: '',
      placeholder: 'Select',
      size: 'default',
      disabled: false,
      clearable: false,
      showAllLevels: true,
      collapseTags: false,
      collapseTagsTooltip: false,
      separator: '/',
      filterable: false,
      debounce: 300,
      popperClass: undefined,
      teleported: true,
      props: {
        expandTrigger: 'click',
        multiple: false,
        checkStrictly: false,
        emitPath: true,
        lazy: false,
        value: 'value',
        label: 'label',
        children: 'children',
        disabled: 'disabled',
        leaf: 'leaf'
      }
    },
    remoteConfig: {
      remote: true,
      remoteFunc: 'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json'
    },
    formItemConfig: {
      labelWidth: '',
      rules: [
        {
          trigger: 'change',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'array'
        }
      ]
    }
  },
  {
    label: '多选框',
    type: 'Checkbox',
    customClass: '{}',
    customStyle: '{}',
    dynamicProps: '{}',
    dynamicFormItemProps: '{}',
    events: {
      change: 'function change(value, formInstance, formModel, state) {}'
    },
    config: {
      hidden: false,
      defaultValue: false,
      label: 'Checkbox',
      trueLabel: undefined,
      falseLabel: undefined,
      size: 'default',
      disabled: false,
      border: false,
      indeterminate: false
    },
    formItemConfig: {
      labelWidth: '',
      rules: [
        {
          trigger: 'change',
          required: false,
          len: undefined,
          max: undefined,
          min: undefined,
          message: undefined,
          pattern: undefined,
          type: 'boolean'
        }
      ]
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
  },
  {
    title: '数据录入',
    components: dataEntryComponents
  }
]

export default elementComponentsGroup
