import type { History } from './types'


export const fetchHistories = async () => {
  const histories = await new Promise<History[]>((resolve, _) => {
    setTimeout(() => {
      resolve(demoHistories)
    }, 1000)
  })

  return histories
}

export const addHistory = async (date: Date, rating: number) => {
  const histories = await new Promise<History[]>((resolve, _) => {
    setTimeout(() => {
      demoHistories.push({
        id: getNextId,
        date,
        rating
      })
      resolve(demoHistories)
    }, 1000)
  })

  return histories
}

const demoHistories: History[] = 
  Array.from({length: 10}, () => Math.floor(Math.random() * 201) - 100 + 8000)
  .map((rating, index) => ({ id: index, rating, date: new Date(2023, 10, index + 1) }))
const getNextId = demoHistories.length > 0 ? Math.max(...demoHistories.map(history => history.id)) + 1 : 1
