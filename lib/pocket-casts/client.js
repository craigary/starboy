import PocketCasts from '@/lib/pocket-casts'

export const pocketCastsClient = new PocketCasts(
  process.env.POCKET_CASTS_EMAIL,
  process.env.POCKET_CASTS_PASSWORD
)
