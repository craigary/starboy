import resources from './resources'

export default class PocketCasts {
  constructor(email, password) {
    this.api = 'https://api.pocketcasts.com'
    this.lists = 'https://lists.pocketcasts.com'
    this.email = email
    this.password = password
    this.token = null

    resources.forEach(({ name, path, method }) => {
      PocketCasts.prototype[name] = this[method].bind(this, path)
    })
  }

  /**
   * Login using PocketCasts WebPlayer Account Credentials.
   *
   * @returns Promise.
   */
  async login() {
    return this.post('user/login', {
      email: this.email,
      password: this.password,
      scope: 'webplayer'
    }).then(({ token }) => {
      this.token = token
      return true
    })
  }

  /**
   * Make a POST request with token-based authorization.
   *
   * @param {String} path The API path.
   * @param {Boolean} json The JSON body.
   * @returns Promise.
   */
  async post(path, json = {}) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(path === '/user/login' || {
          Authorization: `Bearer ${this.token}`
        })
      },
      body: JSON.stringify(json)
    }
    const res = await fetch(`${this.api}/${path}`, options)
    return res.json()
  }

  /**
   * Make a GET request for static JSON resources.
   *
   * @param {String} path The JSON path.
   * @returns Promise.
   */
  async get(path) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await fetch(`${this.lists}/${path}.json`, options)
    return res.json()
  }
}
