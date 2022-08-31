import { setEndpoint } from '~/plugins/helpers'

export default function ({ route, store }) {
  setEndpoint(route, store)
}
