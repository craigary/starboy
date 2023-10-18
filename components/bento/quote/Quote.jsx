import Card from '@/components/bento/card/Card'
import React from 'react'

const QuoteCard = () => {
  return (
    <Card className={'h-full p-3'}>
      <div className="group relative flex h-full w-full flex-col overflow-hidden rounded border border-border bg-background p-3 px-3 py-4 shadow-[0_3px_8px] shadow-muted/30 dark:bg-muted/20">
        <p className="text font-semibold">
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
