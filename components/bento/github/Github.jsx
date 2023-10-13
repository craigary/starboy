import Card from '@/components/bento/card/Card'
import { SiGithub } from '@icons-pack/react-simple-icons'

const Github = ({ delay }) => {
  return (
    <Card className="p-3" delay={delay}>
      <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded  bg-border p-px transition-all">
        {/* <div className="h-15 absolute inset-0 left-[calc(50%-150%)] z-10 m-auto hidden w-[300%] bg-gradient-to-b from-muted/0 via-muted to-muted/0 group-hover:block group-hover:animate-spin"></div> */}
        {/* <div
          className="relative z-20 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-[calc(var(--radius)-1px)] bg-background bg-gradient-to-tr from-muted/50 to-muted/10 text-primary/50 group-hover:text-primary"
          role="button"
        > */}
        <SiGithub size="24" className="opacity-40 group-hover:opacity-100" />
        <p className="text-sm leading-6 text-primary/60">GitHub</p>
        {/* </div> */}
      </div>
    </Card>
  )
}

export default Github
