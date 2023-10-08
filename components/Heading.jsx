import { cn } from '@/lib/utils'
import { Separator } from '@radix-ui/themes'

const Heading = ({ title, children, className }) => {
  return (
    <>
      <div className={cn('py-14  md:py-20', className)}>
        <h1 className="mb-6 w-fit bg-gradient-to-r from-primary/60 to-primary bg-clip-text text-2xl font-bold text-transparent md:mb-10 md:text-4xl">
          {title}
        </h1>
        {children}
      </div>
      <Separator orientation="horizontal" size="4" className="mb-6 md:mb-8" />
    </>
  )
}

export default Heading
