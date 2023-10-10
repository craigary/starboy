import Card from '@/components/bento/card/Card'

const StoreCard = ({ delay }) => {
  return (
    <Card className="relative h-full p-3" delay={delay}>
      <div className="relative z-10 flex h-full w-full overflow-hidden rounded-lg border bg-secondary/20 transition-all hover:shadow-md hover:shadow-muted/50"></div>
    </Card>
  )
}

export default StoreCard
