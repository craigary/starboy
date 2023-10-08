import cronRect from '@/assets/cron-app-icon-rect.png'
import iosMask from '@/assets/ios-icon-mask.svg'
import { cn } from '@/lib/utils'

const CronIcon = ({ className }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${cronRect.src})`,

        WebkitMaskImage: `url(${iosMask.src})`,
        maskImage: `url(${iosMask.src})`,

        maskSize: 'contain',
        WebkitMaskSize: 'contain'
      }}
      className={cn('bg-contain', className)}
    ></div>
  )
}

export default CronIcon
