export default function ({ $api, store, redirect }) {
  const token = store.state.auth.admin.token
  // Set Token to something different
  if (token) {
    $api.setToken(token, 'Bearer', ['post', 'get', 'put', 'delete'])
  } else {
    $api.setToken(false)
  }

  if (!store.state.auth.admin.isLoggedIn) {
    return redirect('/')
  }
}
