import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Application from '@ioc:Adonis/Core/Application'

export default class NuxtsController {
	// eslint-disable-next-line camelcase
	protected nuxt_instance
	constructor () {
		this.nuxt_instance = Application.container.use('Service/Nuxt')
	}

	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	async render ({ request, response }: HttpContextContract): Promise<void> {
		await new Promise((resolve, reject) => {
			this.nuxt_instance.render(request.request, response.response, (promise: Promise<unknown>) => {
				promise.then(resolve).catch(reject)
			})
		})
	}
}