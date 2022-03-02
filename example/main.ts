import { createApp, h } from 'vue'
import DesignForm, { ElDesignForm } from '@/index'

createApp(h(ElDesignForm)).use(DesignForm).mount('#app')
