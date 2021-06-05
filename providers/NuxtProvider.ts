import { Nuxt, Builder } from 'nuxt'
import Config from '@ioc:Adonis/Core/Config'
import Application from '@ioc:Adonis/Core/Application'

export default class NuxtProvider {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
  }

  public isAceCommand () {
    if (process.mainModule) {
      if (process.mainModule.filename.endsWith('ace')) {
        return true
      }
      return !!process.mainModule.children.find((child: NodeJS.Module) => child.filename.endsWith('ace'))
    }
    return false
  }

  public register () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Application.container.singleton('Service/Nuxt', () => {
      return new Nuxt(Config.get('nuxt'))
    })
  }

  public async boot () {
    if (!this.isAceCommand()) {
      const nuxt = Application.container.use('Service/Nuxt')
      if (nuxt.options.dev) {
        await new Builder(nuxt).build()
      } else {
        await nuxt.ready()
      }
    }
    // All bindings are ready, feel free to use them
  }
  public async ready () {}
  public async shutdown () {}
}