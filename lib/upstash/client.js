import { Redis } from '@upstash/redis'

const upstashClient = Redis.fromEnv({
  cache: 'default'
})

export { upstashClient }
