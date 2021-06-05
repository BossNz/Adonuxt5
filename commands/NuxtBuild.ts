import { BaseCommand } from '@adonisjs/ace'
import { Builder } from 'nuxt'
import { inject } from '@adonisjs/fold'
import Application from '@ioc:Adonis/Core/Application'

@inject([null, null, 'Service/Nuxt'])
export default class NuxtBuild extends BaseCommand {
  public static commandName = 'nuxt:build'
  public static description = 'Build for production the nuxt.js application.'

  public static settings = {
    loadApp: true
  }

  // eslint-disable-next-line require-await
  public async run () {
    const nuxt = Application.container.use('Service/Nuxt')

    this.logger.info('[AdonuxtJS] Building nuxt.js application...')

    await new Builder(nuxt).build()

    this.logger.info('[AdonuxtJS] Nuxt.js builds successful')
  }
}