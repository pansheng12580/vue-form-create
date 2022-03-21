import { App } from 'vue'
import { ElRow } from 'element-plus'

export default {
  install: (app: App) => {
    if (ElRow) {
      import('element-plus/es/components/row/style/css')
      app.component(ElRow.name, ElRow)
    }
  }
}
