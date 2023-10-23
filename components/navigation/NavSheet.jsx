'use client'
import NavContent from '@/components/navigation/NavContent'
import { Sheet, SheetContent } from '@/components/ui/sheet'

const NavSheet = ({ open, setOpen }) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="py-0">
        <NavContent showCmdBtn={false} setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  )
}

export default NavSheet
