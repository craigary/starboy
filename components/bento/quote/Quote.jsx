import Card from '@/components/bento/card/Card'
import React from 'react'

const QuoteCard = () => {
  return (
    <Card className={'h-full p-3'}>
      <div className="group relative h-full w-full overflow-hidden rounded border bg-background p-3 dark:bg-muted/20">
        <p className="text-xl font-semibold">
          I specialize in creating unique visual identities for digital
          products.
          <span className="text-primary/50">
            I believe that a catchy design starts with common values.
          </span>
        </p>
      </div>
    </Card>
  )
}

export default QuoteCard
