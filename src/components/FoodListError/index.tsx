import ErrorAnimation from '@/assets/animations/error-animation.json'
import { MESSAGES } from '@/utis/messages'
import Lottie from 'lottie-react'

export function FoodListError() {
  return (
    <div className="mt-[5%] flex h-fit flex-1 flex-col items-center justify-center gap-8">
      <Lottie
        animationData={ErrorAnimation}
        loop={true}
        className="h-80 w-80"
      />
      <p className="text-destructive text-center text-3xl font-semibold">
        {MESSAGES.ERROR.GET_FOODS.description}
      </p>
    </div>
  )
}
