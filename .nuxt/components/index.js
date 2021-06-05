import { wrapFunctional } from './utils'

export { default as Logo } from '../..\\resources\\components\\Logo.vue'

export const LazyLogo = import('../..\\resources\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
