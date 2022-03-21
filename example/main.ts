import { createApp, h } from 'vue'
import components from '@/components'
import DesignForm, { ElDesignForm } from '@/index'

createApp(h(ElDesignForm)).use(components).use(DesignForm).mount('#app')
