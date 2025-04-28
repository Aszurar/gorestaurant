import { toast } from 'sonner'
import { api } from '../api'
import { MESSAGES } from '@/utis/messages'
import { IFood } from '@/dto/food'

export async function getFoods() {
  try {
    const response = await api.get('/foods')
    return response.data as Promise<IFood[]>
  } catch (error) {
    const descriptionMessage =
      MESSAGES.ERROR.GET_FOODS.description + ' ' + MESSAGES.ERROR.tryAgainLater
    toast.error(MESSAGES.ERROR.GET_FOODS.title, {
      description: descriptionMessage,
    })

    throw error
  }
}
