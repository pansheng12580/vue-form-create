import { App } from 'vue'
import ElDesignForm from './core/element/ElDesignForm.vue'
import 'virtual:svg-icons-register'
import './styles/index.css'

ElDesignForm.install = (app: App) => app.component(ElDesignForm.name, ElDesignForm)

const components = [ElDesignForm]

const install = (app: App) => components.forEach((component) => app.component(component.name, component))

export { install, ElDesignForm }

export default {
  install,
  ElDesignForm
}
