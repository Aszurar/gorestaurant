import LoadingAnimation from '@/assets/animations/loading-animation.json'
import Lottie from 'lottie-react'

export function FoodListEmpty() {
  return (
    <div className="mt-[5%] flex h-fit flex-1 flex-col items-center justify-center gap-8">
      <Lottie
        animationData={LoadingAnimation}
        loop={true}
        className="h-80 w-80"
      />
      <p className="text-destructive text-3xl font-semibold">
        Nenhum item encontrado
      </p>
    </div>
  )
}
