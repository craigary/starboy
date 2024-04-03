'use client'
import { cn } from '@/lib/utils'
import { ContextMenu } from '@radix-ui/themes'
import { IconDownload, IconSvg, IconTriangle } from '@tabler/icons-react'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'sonner'

const Logo = ({ className, showText = true, size = 18 }) => {
  const iconSize = size * 0.8

  const router = useRouter()
  const pathname = usePathname()

  const logoSvg = `<svg
  width="1000"
  height="1000"
  viewBox="0 0 1000 1000"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="1000" height="1000" fill="black" />
  <path
    d="M800.32 688C811.289 688 818.145 676.126 812.661 666.626L512.341 146.379C506.857 136.878 493.143 136.878 487.659 146.379L341.612 399.377C339.067 403.786 339.067 409.217 341.612 413.626L495.885 680.874C498.43 685.284 503.135 688 508.226 688H800.32Z"
    fill="white"
  />
  <path
    d="M402.655 688C413.624 688 420.48 676.126 414.996 666.626L313.509 490.818C308.024 481.317 294.311 481.317 288.826 490.818L187.339 666.626C181.855 676.126 188.711 688 199.68 688H402.655Z"
    fill="white"
  />
</svg>`

  const handleSelect = type => {
    switch (type) {
      case 'home':
        if (pathname !== '/') router.push('/')
        break
      case 'copySvg':
        try {
          navigator.clipboard.writeText(logoSvg)
          toast.success('Successfully copied to clipboard')
        } catch (error) {
          toast.error('There was an error when copying svg.')
        }
        break
      case 'downloadImg':
        const svgFile = new File([logoSvg], 'logo.svg', {
          type: 'image/svg+xml'
        })
        const a = document.createElement('a')
        a.href = URL.createObjectURL(svgFile)
        a.download = 'logo.svg'
        a.click()
        break
    }
  }

  return (
    <>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <Link href="/" className="flex cursor-nw-resize items-center">
            <div
              className={cn(
                'flex items-center justify-center rounded-lg shadow-[0_0_4px] shadow-blue-500/30',
                showText && 'mr-3',
                className
              )}
              style={{
                height: size + 'px',
                width: size + 'px'
                // boxShadow: `0px 0px 3px blue, pink 0px 0px 0px inset`
              }}
            >
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 1000 1000"
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M800.32 688C811.289 688 818.145 676.126 812.661 666.626L512.341 146.379C506.857 136.878 493.143 136.878 487.659 146.379L341.612 399.377C339.067 403.786 339.067 409.217 341.612 413.626L495.885 680.874C498.43 685.284 503.135 688 508.226 688H800.32Z" />
                <path d="M402.655 688C413.624 688 420.48 676.126 414.996 666.626L313.509 490.818C308.024 481.317 294.311 481.317 288.826 490.818L187.339 666.626C181.855 676.126 188.711 688 199.68 688H402.655Z" />
              </svg>
            </div>
            {showText && (
              <p className="w-fit bg-gradient-to-l from-primary/60 to-primary bg-clip-text text-xl font-bold text-transparent">
                CRAIG.<span className="text-sm">wf</span>
              </p>
            )}
          </Link>
        </ContextMenu.Trigger>
        <ContextMenu.Content size="1">
          <ContextMenu.Item onSelect={() => handleSelect('home')}>
            <IconTriangle stroke={1.5} className="mr-1" size={16} /> Home
          </ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item onSelect={() => handleSelect('copySvg')}>
            <IconSvg stroke={1.5} className="mr-1" size={16} /> Copy logo SVG
          </ContextMenu.Item>
          <ContextMenu.Item onSelect={() => handleSelect('downloadImg')}>
            <IconDownload stroke={1.5} className="mr-1" size={16} /> Download
            logo type
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </>
  )
}

export default Logo
