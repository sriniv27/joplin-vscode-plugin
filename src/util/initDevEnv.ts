import { appConfig } from '../config/AppConfig'
import { config } from 'joplin-api'

export function initDevEnv() {
  console.log('process.env.DEBUG: ', process.env.DEBUG)
  if (!process.env.DEBUG) {
    return
  }
  config.token = appConfig.token =
    '303c85ce19d4eaf23e23ae7817e36043ae0fcf57bf6699b646c796189f1fa65b31ecbc394e48e8840fd9ca643aacc6067a3e5abdbe8b52b7d231a06545241457'
  config.port = appConfig.port = 27583
}
