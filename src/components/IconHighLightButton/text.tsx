import { HTMLAttributes } from 'react'

type TextProps = HTMLAttributes<HTMLSpanElement>

export function Text({ className = '', ...props }: Readonly<TextProps>) {
  return <span className={`px-6 py-4 text-base ${className}`} {...props} />
}
