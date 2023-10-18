import { Redis } from '@upstash/redis'

const upstashClient = Redis.fromEnv()

export { upstashClient }
