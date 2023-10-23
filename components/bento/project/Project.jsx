import Card from '@/components/bento/card/Card'
import GitHubCard from '@/components/bento/project/GitHubCard'
import { IconArrowUpRight } from '@tabler/icons-react'
import Link from 'next/link'

const ProjectCard = ({ delay }) => {
  return (
    // shadow-[inset_0_4px_6px_0_hsl(var(--muted)/0.5)]
    <Card
      className="group relative h-full rounded-none p-3 transition-all"
      delay={delay}
    >
      <Link href="/work">
        <div className="group relative flex h-full shrink-0 flex-col overflow-hidden rounded-md border border-border shadow-none transition-shadow hover:shadow-xl hover:shadow-muted/60">
          <GitHubCard />
          <div className="relative flex shrink-0 flex-col bg-background p-4 dark:bg-muted/20">
            <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 transition-all group-hover:border-primary group-hover:bg-primary">
              <IconArrowUpRight
                size="14"
                className="transition-all group-hover:text-primary-foreground"
              />
            </div>
            <p className="mb-2 font-medium text-primary/90 md:text-base">
              {'>_ '}Projects
            </p>
            <p className="text-sm text-primary/50">some random projects...</p>
          </div>
        </div>
      </Link>
    </Card>
  )
}

export default ProjectCard
