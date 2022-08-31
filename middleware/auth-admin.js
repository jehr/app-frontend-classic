export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.auth.admin.isLoggedIn) {
    return redirect('/index')
  }
}
