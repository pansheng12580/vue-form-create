import * as monaco from 'monaco-editor'

declare global {
  interface Window {
    MonacoEnvironment: any
    monaco: typeof monaco
  }
}
