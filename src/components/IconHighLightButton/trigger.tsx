import { HTMLAttributes } from 'react'

type TriggerProps = HTMLAttributes<HTMLButtonElement>

export function Trigger({ className = '', ...props }: Readonly<TriggerProps>) {
  return (
    <button
      className={`bg-success text-success-foreground flex items-center rounded-lg font-semibold shadow-xl hover:cursor-pointer hover:brightness-110 active:brightness-100 ${className}`}
      {...props}
    />
  )
}
