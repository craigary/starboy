import workersKv from '@/lib/workers-kv'

export const workersClient = new workersKv({
  token: process.env.WORKERS_KV_TOKEN,
  namespace: process.env.WORKERS_KV_NAMESPACE,
  accountId: process.env.WORKERS_KV_ACCOUNT_ID,
  cache: 'no-store'
})
