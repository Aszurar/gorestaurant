import { Pencil, Trash } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Switch } from '../ui/switch'
import { IFood } from '@/dto/food'
import { cn } from '@/lib/utils'

type FoodCardProps = {
  food: IFood
}

export function FoodCard({ food }: Readonly<FoodCardProps>) {
  return (
    <Card
      key={food.id}
      data-available={food.available}
      className={cn('bg-accent group w-96')}
    >
      <img
        src={food.image}
        alt={food.name}
        className="max-h-53 w-full overflow-hidden text-center transition-opacity duration-300 group-data-[available=false]:opacity-30"
      />

      <CardHeader className="">
        <CardTitle className="text-2xl font-light italic">
          {food.name}
        </CardTitle>
        <CardDescription className="font-medium">
          {food.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-success text-2xl">
          R$ <b className="font-semibold">{food.price}</b>
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
            checked={food.available}
            // onCheckedChange={field.onChange}
          />
        </div>
      </CardFooter>
    </Card>
  )
}
