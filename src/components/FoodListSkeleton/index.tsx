import { Skeleton } from '../ui/skeleton'

export function FoodListSkeleton() {
  return (
    <div className="mx-auto mt-[-140px] flex w-full max-w-7xl items-center justify-between p-10">
      <section className="grid grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="h-114 w-96 overflow-hidden rounded-xl">
            <Skeleton className="bg-tertiary h-53 w-full rounded-b-none" />
            <Skeleton className="h-full w-full" />
          </div>
        ))}
      </section>
    </div>
  )
}
