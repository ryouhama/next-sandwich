import { use, FC } from "react"
import { fetchHistories } from "../apis"
import { useGraphData } from "./hooks"
import { HistoryRatingGraphPresenter } from "./presenter"

export const HistoryRatingGraphContainer: FC = () => {
  const histories = use(fetchHistories())
  const data = useGraphData(histories)

  return (
    <HistoryRatingGraphPresenter data={data}/>
  )
}
