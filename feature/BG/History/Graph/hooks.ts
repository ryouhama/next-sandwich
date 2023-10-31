import { History } from "../types";

export const useGraphData = (histories: History[]) => {
  return histories
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .map((history) => {
      return {
        // name: format(history.date, 'yyyy/MM/dd HH:mm:ss'),
        name: history.id,
        y: history.rating,
      };
    });
};
