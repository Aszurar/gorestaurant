import { IFood } from '@/dto/food'
import { FoodCard } from '../FoodCard'

type FoodsListProps = {
  foods: IFood[]
}

export function FoodsList({ foods }: Readonly<FoodsListProps>) {
  return (
    <main className="mx-auto mt-[-140px] flex w-full max-w-7xl items-center justify-between p-10">
      <section className="grid grid-cols-3 gap-8">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </section>
    </main>
  )
}
