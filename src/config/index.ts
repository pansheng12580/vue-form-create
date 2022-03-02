export type Component = {
  key?: string
  label: string
  type: string
  customClass?: string
  dynamicProps?: string
  dynamicFormItemProps?: string
  events?: Record<string, string>
  config: Record<string, any>
  remoteConfig?: Record<string, any>
  formItemConfig?: Record<string, any>
  childNodes?: Component[]
}

export type ComponentGroup = {
  title: string
  components: Component[]
}

export { default as elementComponentsGroup } from './element'
