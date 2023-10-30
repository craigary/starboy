import { workersClient } from '@/lib/workers-kv/client'

export const getLocationInfo = async () => {
  const data = await workersClient.read('current-location')
  return data
}
