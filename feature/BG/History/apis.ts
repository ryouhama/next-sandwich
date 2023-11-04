import type { History } from "./types";

export const fetchHistories = async (userId: number) => {
  const histories = await new Promise<History[]>((resolve, _) => {
    setTimeout(() => {
      resolve(demoHistories);
    }, 1000);
  });

  return histories;
};

export const addHistory = async (date: Date, rating: number) => {
  const histories = await new Promise<History[]>((resolve, _) => {
    setTimeout(() => {
      demoHistories.push({
        id: getNextId,
        date,
        rating,
      });
      resolve(demoHistories);
    }, 1000);
  });

  return histories;
};

// const demoHistories: History[] = Array.from(
//   { length: 10 },
//   () => Math.floor(Math.random() * 201) - 100 + 8000
// ).map((rating, index) => ({
//   id: index,
//   rating,
//   date: new Date(2023, 10, index + 1),
// }));

const demoHistories = [
  { id: 0, rating: 8075, date: new Date("2023-11-01T15:00:00.000Z") },
  { id: 1, rating: 7926, date: new Date("2023-11-01T15:00:00.000Z") },
  { id: 2, rating: 8075, date: new Date("2023-11-02T15:00:00.000Z") },
  { id: 3, rating: 7950, date: new Date("2023-11-03T15:00:00.000Z") },
  { id: 4, rating: 8059, date: new Date("2023-11-04T15:00:00.000Z") },
  { id: 5, rating: 8093, date: new Date("2023-11-05T15:00:00.000Z") },
  { id: 6, rating: 8083, date: new Date("2023-11-06T15:00:00.000Z") },
  { id: 7, rating: 8081, date: new Date("2023-11-07T15:00:00.000Z") },
  { id: 8, rating: 7966, date: new Date("2023-11-08T15:00:00.000Z") },
  { id: 9, rating: 8095, date: new Date("2023-11-09T15:00:00.000Z") },
];
const getNextId =
  demoHistories.length > 0 ? Math.max(...demoHistories.map((history) => history.id)) + 1 : 1;
