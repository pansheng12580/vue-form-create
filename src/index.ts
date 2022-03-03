import { App } from 'vue'
import ElDesignForm from './core/element/el-design-form.vue'
import 'virtual:svg-icons-register'
import './styles/index.less'

ElDesignForm.install = (app: App) => app.component(ElDesignForm.name, ElDesignForm)

const components = [ElDesignForm]

const install = (app: App) => components.forEach((component) => app.component(component.name, component))

export { install, ElDesignForm }

export default {
  install,
  ElDesignForm
}
