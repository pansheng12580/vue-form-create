import { App } from 'vue'
import { ElRow, ElCol } from 'element-plus'

export default {
  install: (app: App) => {
    if (ElRow || ElCol) {
      import('element-plus/es/components/row/style/css')
      import('element-plus/es/components/col/style/css')
      app.component(ElRow.name, ElRow)
      app.component(ElCol.name, ElCol)
    }
  }
}
