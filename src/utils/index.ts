import { ElMessage } from 'element-plus'
import { debounce } from 'lodash-es'
import { Component } from '@/config'

const debounceErrorMessage = debounce(ElMessage.error, 500)

// 删除domNode
export const removeDomNode = (selectors: string) => document.querySelectorAll(selectors).forEach((node) => node.remove())

// 加载css
export const loadCss = (cssText: string) => {
  const id = 'customCss'

  removeDomNode(`#${id}`)

  const style = document.createElement('style')
  style.id = id
  try {
    style.appendChild(document.createTextNode(cssText))
  } catch (_) {
    debounceErrorMessage('加载样式文件失败')
  }
  document.getElementsByTagName('head')[0].appendChild(style)
}

// 加载class
export const loadClass = (classText: string | undefined, state: Record<string, any>) => {
  let classStr = ''
  try {
    if (classText) {
      const classObj = eval(`(${classText})`)
      Object.keys(classObj).forEach((key) => {
        if (classObj[key]) {
          classStr += `${key} `
        }
      })
    }
  } catch (_) {
    debounceErrorMessage('加载自定义Class失败')
  }

  return classStr.trim()
}

// 加载style
export const loadStyle = (styleText: string | undefined, state: Record<string, any>) => {
  let styleObj = {}
  try {
    if (styleText) {
      styleObj = eval(`(${styleText})`)
    }
  } catch (_) {
    debounceErrorMessage('加载自定义Style失败')
  }

  return styleObj
}

// 加载js链接
export const loadJsLink = (src?: string) => {
  if (!src) return
  const id = 'customScript'

  removeDomNode(`#${id}`)

  const script = document.createElement('script')
  script.id = id
  script.src = src
  document.getElementsByTagName('head')[0].appendChild(script)
}

// 加载props
export const loadProps = (propsText: string | undefined, formInstance: any, state: Record<string, any>) => {
  let props = {}
  try {
    if (propsText) {
      const newText = `(function() { return ${propsText} })()`
      props = eval(`(${newText})`)
    }
  } catch (error) {
    debounceErrorMessage('加载Props失败')
  }

  return props
}

// 加载function
export const loadFunction = (funcText: string, formInstance: any, state: Record<string, any>, ...args: any) => {
  let func
  try {
    const newText = `(function() { return ${funcText} })()`
    func = eval(`(${newText})`)
  } catch (_) {
    debounceErrorMessage('加载方法失败')
  }

  return func(...args, formInstance, state)
}

// 创建event函数对象
export const createEventFunctionObject = (item: Component, formInstance: any, state: Record<string, any>) => {
  const { events } = item
  const eventFunction: Record<string, any> = {}

  if (events) {
    Object.keys(events).forEach((key) => {
      eventFunction[key] = (...args: any) => loadFunction(events[key], formInstance, state, ...args)
    })
  }

  return eventFunction
}

// 复制文本
export const copy = (text: string) => {
  const input = document.createElement('textarea')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}
