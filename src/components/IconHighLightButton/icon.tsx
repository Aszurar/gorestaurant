import { HTMLAttributes } from 'react'

type IconProps = HTMLAttributes<HTMLSpanElement>

export function Icon({ className = '', ...props }: Readonly<IconProps>) {
  return (
    <span
      className={`bg-success rounded-tr-lg rounded-br-lg p-4 shadow-xs brightness-130 ${className}`}
      {...props}
    />
  )
}
