import * as IconHighLightButton from '@/components/IconHighLightButton'
import LogoSVG from '../../assets/logo.svg'

import { PlusCircle } from 'lucide-react'

export function Header() {
  return (
    <div className="bg-primary px-4 sm:px-6 lg:px-8">
      <header className="mx-auto flex max-w-7xl items-center justify-between py-7.5 pb-40">
        <img src={LogoSVG} alt="goRestaurant" />

        <IconHighLightButton.Trigger>
          <IconHighLightButton.Text>Novo Prato</IconHighLightButton.Text>
          <IconHighLightButton.Icon>
            <PlusCircle />
          </IconHighLightButton.Icon>
        </IconHighLightButton.Trigger>
      </header>
    </div>
  )
}
