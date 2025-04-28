import { FoodsList } from '@/components/FoodList'
import { FoodListEmpty } from '@/components/FoodListEmpty'
import { FoodListError } from '@/components/FoodListError'
import { FoodListSkeleton } from '@/components/FoodListSkeleton'
import { Header } from '@/components/Header'
import { getFoods } from '@/services/requests/get-foods'
import { useQuery } from '@tanstack/react-query'
// Todo:
// Craste a 404 page
// - src/components/Food/index.jsx;
// - src/components/Food/styles.js;
// - src/components/Input/index.jsx;
// - src/components/Input/styles.js;
// - src/components/Modal/index.jsx;
// - src/components/ModalAddFood/index.jsx;
// - src/components/ModalAddFood/styles.js;
// - src/components/ModalEditFood/index.jsx;
// - src/components/ModalEditFood/styles.js;
// - src/pages/Dashboard/index.jsx;
// - src/pages/Dashboard/styles.js;
export function DashboardScreen() {
  const {
    data: foods,
    isError,
    isPending,
  } = useQuery({
    queryKey: ['foods'],
    queryFn: getFoods,
  })

  const hasResponse = !isPending && !isError && !!foods
  const isShowFoodsList = hasResponse && foods?.length > 0
  const isShowEmptyFoodsList = hasResponse && foods?.length === 0

  return (
    <div className="bg-background antialiased">
      <Header />
      {isError && <FoodListError />}
      {isPending && <FoodListSkeleton />}
      {isShowEmptyFoodsList && <FoodListEmpty />}
      {isShowFoodsList && <FoodsList foods={foods} />}
    </div>
  )
}
