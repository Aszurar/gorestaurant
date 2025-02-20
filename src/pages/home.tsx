import * as IconHighLightButton from '@/components/IconHighLightButton'
import LogoSVG from '../assets/logo.svg'
import { Pencil, PlusCircle, Trash } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

import foods from '../../server.json'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

export function HomePage() {
  const firstFood = foods.foods[0]

  return (
    <div>
      <div className="bg-primary h-40 px-4 sm:px-6 lg:px-8">
        <header className="mx-auto flex max-w-7xl items-center justify-between py-7.5">
          <img src={LogoSVG} alt="goRestaurant" />

          <IconHighLightButton.Trigger>
            <IconHighLightButton.Text>Novo Prato</IconHighLightButton.Text>
            <IconHighLightButton.Icon>
              <PlusCircle />
            </IconHighLightButton.Icon>
          </IconHighLightButton.Trigger>
        </header>
      </div>

      <main>
        <Card data-available={true} className={cn('bg-accent group w-[380px]')}>
          <img
            src={firstFood.image}
            alt={firstFood.name}
            className="max-h-53 w-full overflow-hidden text-center transition-opacity duration-300 group-data-[available=false]:opacity-30"
          />

          <CardHeader className="">
            <CardTitle className="text-2xl font-light italic">
              {firstFood.name}
            </CardTitle>
            <CardDescription className="font-medium">
              {firstFood.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-success text-2xl">
              R$ <b className="font-semibold">{firstFood.price}</b>
            </p>
          </CardContent>
          <CardFooter className="flex w-full items-center justify-between gap-4">
            <div className="flex gap-2">
              <Button variant="blank" size="icon">
                <Pencil />
              </Button>
              <Button variant="blank" size="icon">
                <Trash />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <label
                htmlFor="switch-availability"
                className="text-muted-foreground cursor-pointer font-medium"
              >
                Disponível
              </label>
              <Switch
                id="switch-availability"
              // checked={field.value}
              // onCheckedChange={field.onChange}
              />
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
