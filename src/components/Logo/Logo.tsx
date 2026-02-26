import { cn } from '@/utilities/ui'
import React from 'react'

interface Props {
  className?: string
}

export const Logo = ({ className }: Props) => {
  return (
    <span
      aria-label="Guia UAI"
      className={cn(
        'inline-flex items-baseline gap-1.5 font-sans select-none leading-none',
        className,
      )}
    >
      <span className="text-2xl font-bold tracking-tighter">Guia</span>
      <span className="text-base font-light tracking-widest opacity-60">UAI</span>
    </span>
  )
}
