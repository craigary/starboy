import { upstashClient } from '@/lib/upstash/client'

export const getLocationInfo = async () => {
  return await upstashClient.hgetall('current-location')
}
