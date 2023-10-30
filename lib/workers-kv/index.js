export default class workersKv {
  constructor({ token, namespace, accountId, fetch, cache }) {
    this.api = 'https://api.cloudflare.com/client/v4'
    this.token = token
    this.namespace = namespace
    this.accountId = accountId

    this.endPoint = `https://api.cloudflare.com/client/v4/accounts/${this.accountId}/storage/kv/namespaces/${this.namespace}`

    this.cacheOption = cache ?? 'no-store'
  }

  async get(path) {
    const res = await fetch(`${this.endPoint}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`
      },
      cache: this.cacheOption
    })
    return res.json()
  }

  async put(path, body, headers = {}) {
    const res = await fetch(`${this.endPoint}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
        ...headers
      },
      body,
      cache: this.cacheOption
    })
    return res.json()
  }

  async delete(path, body = '') {
    const res = await fetch(`${this.endPoint}${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`
      },
      body,
      cache: this.cacheOption
    })
    return res.json()
  }

  async post(path, body) {
    const res = await fetch(`${this.endPoint}${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`
      },
      body,
      cache: this.cacheOption
    })
    return res.json()
  }

  async list() {
    return this.get('/keys')
  }

  async read(key) {
    const start = performance.now()
    const res = await this.get(`/values/${key}`)
    const finish = performance.now()
    console.log('read', key, finish - start)
    if (res.success === false && res.result === null) return null
    return res
  }

  async write(key, value, time) {
    const start = performance.now()
    const res = await this.put(`/values/${key}`, JSON.stringify(value))
    const finish = performance.now()

    console.log('write', key, finish - start)
    return res
  }

  async delete(key) {
    return this.delete(`/values/${key}`)
  }
}
